#include "bridged_class.h"
#include "bridged_method.h"
#include "node_api_util.h"
#include "util.h"

NAPI_FUNCTION(BridgedConstructor) {
  NAPI_CALLBACK_BEGIN(0)
  return jsThis;
}

typedef id (*msgSend_description)(id, SEL);
typedef char *(*msgSend_UTF8String)(id, SEL);
typedef unsigned long (*msgSend_length)(id, SEL);

SEL sel_description = sel_registerName("description");
SEL sel_UTF8String = sel_registerName("UTF8String");

NAPI_FUNCTION(CustomInspect) {
  NAPI_PREAMBLE

  napi_value jsThis;
  void *data;
  size_t argc = 0;

  napi_get_cb_info(env, cbinfo, &argc, nil, &jsThis, &data);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  id description = ((msgSend_description)objc_msgSend)(self, sel_description);
  char *descriptionString =
      ((msgSend_UTF8String)objc_msgSend)(description, sel_UTF8String);

  napi_value result;
  napi_create_string_utf8(env, descriptionString, NAPI_AUTO_LENGTH, &result);

  return result;
}

SEL sel_length = sel_registerName("length");

NAPI_FUNCTION(lengthCustom) {
  napi_value jsThis, prop;
  void *data;
  napi_get_cb_info(env, cbinfo, nil, nil, &jsThis, &data);
  id self;
  napi_unwrap(env, jsThis, (void **)&self);
  unsigned long length = ((msgSend_length)objc_msgSend)(self, sel_length);
  napi_value result;
  napi_create_int64(env, length, &result);
  return result;
}

void defineProperties(napi_env env, ObjCBridgeData *bridgeData,
                      Class nativeClass, napi_value superObject,
                      napi_value object) {
  NAPI_PREAMBLE

  unsigned int count, actualCount;
  count = actualCount = 0;
  _Nonnull Method *methods = class_copyMethodList(nativeClass, &count);

  unsigned int propertyCount = 0;
  _Nonnull objc_property_t *properties =
      class_copyPropertyList(nativeClass, &propertyCount);

  std::set<std::string> addedMethods, addedProperties, addedSelectors;

  for (unsigned int i = 0; i < propertyCount; i++) {
    objc_property_t property = properties[i];
    std::string name = property_getName(property);

    auto pair = addedProperties.insert(name);

    if (!pair.second) {
      continue;
    }

    std::string getter, setter;

    char *getter_c = property_copyAttributeValue(property, "G");
    char *setter_c = property_copyAttributeValue(property, "S");

    if (getter_c == nullptr) {
      getter = name;
    } else {
      getter = getter_c;
    }

    if (setter_c == nullptr) {
      setter = implicitSetterSelector(name);
    } else {
      setter = setter_c;
    }

    if (name.empty() || getter.empty()) {
      continue;
    }

    SEL getterSel = sel_registerName(getter.c_str());
    SEL setterSel = sel_registerName(setter.c_str());

    Method getterMethod = class_getInstanceMethod(nativeClass, getterSel);
    Method setterMethod = class_getInstanceMethod(nativeClass, setterSel);

    if (getterMethod != nil) {
      auto result = addedSelectors.insert(getter);
      if (!result.second) {
        continue;
      }
    }

    if (setterMethod != nil) {
      auto result = addedSelectors.insert(setter);
      if (!result.second) {
        continue;
      }
    }

    napi_property_descriptor desc;

    desc.utf8name = (&*pair.first)->c_str();
    desc.name = nil;
    desc.method = nil;
    desc.value = nil;
    desc.attributes = napi_enumerable;

    auto bm = new BridgedMethod(bridgeData, getterSel, setterSel, property);
    desc.data = (void *)bm;

    bm->method = getterMethod;
    if (getterMethod != nil) {
      desc.getter = JS_BridgedGetter;
    } else {
      desc.getter = nil;
    }

    bm->setterMethod = setterMethod;
    if (setterMethod != nil) {
      desc.setter = JS_BridgedSetter;
    } else {
      desc.setter = nil;
    }

    if (desc.getter == nil && desc.setter == nil) {
      continue;
    }

    NAPI_GUARD(napi_define_properties(env, object, 1, &desc)) {
      NAPI_THROW_LAST_ERROR
      return;
    }
  }

  for (unsigned int i = 0; i < count; i++) {
    Method method = methods[i];
    SEL sel = method_getName(methods[i]);
    std::string selector = sel_getName(sel);

    auto result = addedSelectors.insert(selector);
    if (!result.second) {
      continue;
    }

    std::string name = jsifySelector(selector);

    result = addedMethods.insert(name);
    if (!result.second) {
      // Edge case: some classes have selectors with only difference being the
      // `:` at end for those cases, we add an underscore to the end of the
      // name.
      // Maybe this can be improved?
      name = name + "_";

      result = addedMethods.insert(name);
      if (!result.second) {
        continue;
      }
    }

    bool superHasMethod = false;
    if (superObject != nil) {
      napi_has_named_property(env, superObject, name.c_str(), &superHasMethod);
      if (superHasMethod) {
        continue;
      }
    }

    napi_property_descriptor desc;

    desc.utf8name = (&*result.first)->c_str();
    desc.name = nil;
    auto bm = new BridgedMethod(bridgeData, sel, method);
    desc.data = (void *)bm;
    desc.getter = nil;
    desc.setter = nil;
    desc.value = nil;
    desc.attributes = napi_enumerable;
    desc.method = JS_BridgedMethod;

    NAPI_GUARD(napi_define_properties(env, object, 1, &desc)) {
      NAPI_THROW_LAST_ERROR
      return;
    }
  }
}

BridgedClass::BridgedClass(napi_env env, std::string name) {
  Class nativeClass = objc_getClass(name.c_str());

  std::string NativeObjectName = "NativeObject";
  bool isNativeObject = name == NativeObjectName;

  if (nativeClass == nil && !isNativeObject) {
    napi_throw_error(env, nil, "Objective-C class not found");
    return;
  }

  this->name = name;
  this->nativeClass = nativeClass;

  napi_value constructor, prototype;

  NAPI_PREAMBLE

  auto bridgeData = ObjCBridgeData::InstanceData(env);

  NAPI_GUARD(napi_define_class(env, name.c_str(), name.length(),
                               JS_BridgedConstructor, nil, 0, nil,
                               &constructor)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  napi_value superConstructor, superPrototype;

  if (!isNativeObject) {
    Class superClass = nil;
    if (nativeClass != nil) {
      superClass = class_getSuperclass(nativeClass);
    }

    std::string superName;

    if (superClass != nil) {
      superName = class_getName(superClass);
    } else {
      superName = NativeObjectName;
    }

    BridgedClass *superCls = bridgeData->getBridgedClass(env, superName);
    if (superCls != nil) {
      superConstructor = get_ref_value(env, superCls->constructor);
      superPrototype = get_ref_value(env, superCls->prototype);
      napi_inherits(env, constructor, superConstructor);
    }
  }

  NAPI_GUARD(
      napi_get_named_property(env, constructor, "prototype", &prototype)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  this->constructor = make_ref(env, constructor);
  this->prototype = make_ref(env, prototype);

  const napi_property_descriptor prop = {
      .utf8name = "lengthCustom",
      .name = nullptr,
      .method = nullptr,
      .getter = JS_lengthCustom,
      .setter = nullptr,
      .value = nullptr,
      .attributes = napi_default,
      .data = nullptr,
  };

  napi_define_properties(env, prototype, 1, &prop);

  if (isNativeObject) {
    napi_value global, Symbol, SymbolFor, customInspect, symbolString;
    napi_get_global(env, &global);
    napi_get_named_property(env, global, "Symbol", &Symbol);
    napi_get_named_property(env, Symbol, "for", &SymbolFor);
    napi_create_string_utf8(env, "nodejs.util.inspect.custom", NAPI_AUTO_LENGTH,
                            &symbolString);
    napi_call_function(env, global, SymbolFor, 1, &symbolString,
                       &customInspect);
    const napi_property_descriptor property = {
        .utf8name = nil,
        .name = customInspect,
        .method = JS_CustomInspect,
        .getter = nil,
        .setter = nil,
        .value = nil,
        .attributes = napi_enumerable,
        .data = nil,
    };
    napi_define_properties(env, prototype, 1, &property);
    napi_define_properties(env, constructor, 1, &property);
    return;
  }

  NAPI_GUARD(napi_wrap(env, constructor, (void *)nativeClass, nil, nil, nil)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  Class metaClass = object_getClass((id)nativeClass);

  // Define instance properties/methods
  defineProperties(env, bridgeData, nativeClass, superPrototype, prototype);
  // Define class properties/methods
  defineProperties(env, bridgeData, metaClass, superConstructor, constructor);
}
