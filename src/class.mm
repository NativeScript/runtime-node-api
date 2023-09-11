#include "Class.h"
#include "NativeCall.h"
#include "ObjCBridgeData.h"
#include "Util.h"
#include "js_native_api.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <string>

namespace objc_bridge {

NAPI_FUNCTION(registerClass) {
  NAPI_CALLBACK_BEGIN(1)
  auto bridgeData = ObjCBridgeData::InstanceData(env);
  bridgeData->registerClass(env, argv[0]);
  return nullptr;
}

char class_name[256];

NAPI_FUNCTION(getClass) {
  NAPI_CALLBACK_BEGIN(1)

  NAPI_GUARD(
      napi_get_value_string_utf8(env, argv[0], class_name, 256, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  auto bridgeData = ObjCBridgeData::InstanceData(env);
  std::string name = class_name;
  auto cls = bridgeData->getBridgedClass(env, name);

  if (cls == nullptr) {
    return nullptr;
  }

  return get_ref_value(env, cls->constructor);
}

NAPI_FUNCTION(import) {
  NAPI_CALLBACK_BEGIN(1)

  NAPI_GUARD(
      napi_get_value_string_utf8(env, argv[0], class_name, 256, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  std::string name = class_name;

  if (!name.starts_with("/")) {
    name = "/System/Library/Frameworks/" + name + ".framework";
  }

  NSBundle *bundle =
      [NSBundle bundleWithPath:[NSString stringWithUTF8String:name.c_str()]];
  if (bundle == nil) {
    NSLog(@"Could not find bundle: %s", name.c_str());
    return nullptr;
  }

  bool loaded = [bundle load];

  if (!loaded) {
    NSLog(@"Could not load bundle: %s", name.c_str());
    return nullptr;
  }

  return nullptr;
}

NAPI_FUNCTION(classGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  auto bridgeData = ObjCBridgeData::InstanceData(env);

  auto cached = bridgeData->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  std::string name = bridgeData->metadata->getString(offset);
  auto cls = bridgeData->getBridgedClass(env, name);

  if (cls != nullptr) {
    bridgeData->mdValueCache[offset] = cls->constructor;
  } else {
    return nullptr;
  }

  return get_ref_value(env, cls->constructor);
}

NAPI_FUNCTION(BridgedConstructor) {
  NAPI_CALLBACK_BEGIN(0)

  // In case of JS classes that inherit from ObjC classes,
  // We inherit from a special constructor/prototype that will make calls
  // using objc_msgSendSuper instead of objc_msgSend. This is necessary
  // to support super.method() calls from JS.

  napi_value newTarget, targetPrototype, global, Object, setPrototypeOf,
      getPrototypeOf, targetPrototypeConstructor, targetBase,
      targetBaseConstructor;

  napi_get_global(env, &global);
  napi_get_named_property(env, global, "Object", &Object);
  napi_get_named_property(env, Object, "setPrototypeOf", &setPrototypeOf);

  napi_get_new_target(env, cbinfo, &newTarget);
  // const targetPrototype = newTarget.prototype;
  napi_get_named_property(env, newTarget, "prototype", &targetPrototype);

  BridgedClass *bridgedClass = (BridgedClass *)data;
  napi_value originalConstructor =
      get_ref_value(env, bridgedClass->constructor);

  bool isEqual = false;
  // const targetPrototypeConstructor = targetPrototype.constructor;
  napi_get_named_property(env, targetPrototype, "constructor",
                          &targetPrototypeConstructor);
  // isEqual = originalConstructor === targetPrototype.constructor;
  napi_strict_equals(env, originalConstructor, targetPrototypeConstructor,
                     &isEqual);

  while (!isEqual) {
    // const targetBase = Object.getPrototypeOf(targetPrototype);
    napi_get_prototype(env, targetPrototype, &targetBase);
    napi_valuetype type;
    napi_typeof(env, targetBase, &type);
    // if (targetBase === null) break;
    if (type == napi_null) {
      break;
    }

    // const targetBaseConstructor = targetBase.constructor;
    napi_get_named_property(env, targetBase, "constructor",
                            &targetBaseConstructor);
    // isEqual = originalConstructor === targetBase.constructor;
    napi_strict_equals(env, originalConstructor, targetBaseConstructor,
                       &isEqual);

    if (isEqual) {
      // Register class if it hasn't been registered yet.
      auto bridgeData = ObjCBridgeData::InstanceData(env);
      bridgeData->registerClass(env, targetPrototypeConstructor, true);

      napi_value supercallPrototype =
          get_ref_value(env, bridgedClass->supercallPrototype);
      napi_value supercallConstructor =
          get_ref_value(env, bridgedClass->supercallConstructor);
      // Object.setPrototypeOf(targetPrototype, supercallPrototype);
      NAPI_GUARD(napi_call_function(
          env, global, setPrototypeOf, 2,
          (napi_value[]){targetPrototype, supercallPrototype},
          NULL)){NAPI_THROW_LAST_ERROR}

      // Object.setPrototypeOf(targetPrototype.constructor,
      // supercallConstructor);
      NAPI_GUARD(napi_call_function(
          env, global, setPrototypeOf, 2,
          (napi_value[]){targetPrototypeConstructor, supercallConstructor},
          NULL)) {
        NAPI_THROW_LAST_ERROR
      }
      break;
    }

    targetPrototype = targetBase;
  }

  return jsThis;
}

// Used to display the description of a native object in console.log.
// It's just implementation of nodejs.util.inspect.custom.
NAPI_FUNCTION(CustomInspect) {
  napi_value jsThis;
  void *data;
  size_t argc = 0;

  napi_get_cb_info(env, cbinfo, &argc, nil, &jsThis, &data);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  auto description = [self description];
  auto descriptionString = [description UTF8String];

  napi_value result;
  napi_create_string_utf8(env, descriptionString, NAPI_AUTO_LENGTH, &result);

  return result;
}

// TODO: Remove this function at some point
// It was used to compare libffi overhead.
NAPI_FUNCTION(lengthCustom) {
  napi_value jsThis;
  void *data;
  napi_get_cb_info(env, cbinfo, nil, nil, &jsThis, &data);
  id self;
  napi_unwrap(env, jsThis, (void **)&self);
  auto length = [self length];
  napi_value result;
  napi_create_int64(env, length, &result);
  return result;
}

// Common function used to define Objective-C properties & methods on a JS
// constructor/prototype. This is used for both the main constructor/prototype,
// as well as supercall constructor/prototype.
void defineProperties(napi_env env, ObjCBridgeData *bridgeData,
                      Class nativeClass, napi_value object,
                      napi_value superObject, bool supercall) {
  NAPI_PREAMBLE

  unsigned int propertyCount = 0;
  auto properties = class_copyPropertyList(nativeClass, &propertyCount);

  std::set<std::string> addedMethods, addedProperties, addedSelectors;

  // Define properties
  for (unsigned int i = 0; i < propertyCount; i++) {
    objc_property_t property = properties[i];
    std::string name = property_getName(property);

    auto pair = addedProperties.insert(name);

    if (!pair.second) {
      continue;
    }

    std::string getter, setter;

    auto getter_c = property_copyAttributeValue(property, "G");
    auto setter_c = property_copyAttributeValue(property, "S");

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

    auto getterSel = sel_registerName(getter.c_str());
    auto setterSel = sel_registerName(setter.c_str());

    auto getterMethod = class_getInstanceMethod(nativeClass, getterSel);
    auto setterMethod = class_getInstanceMethod(nativeClass, setterSel);

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
    desc.attributes =
        (napi_property_attributes)(napi_enumerable | napi_configurable);

    auto bm = new BridgedMethod(bridgeData, getterSel, setterSel, property);
    bm->supercall = supercall;
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

  free(properties);

  unsigned int methodCount = 0;
  auto methods = class_copyMethodList(nativeClass, &methodCount);

  // Define methods
  for (unsigned int i = 0; i < methodCount; i++) {
    auto method = methods[i];
    auto sel = method_getName(methods[i]);
    std::string selector = sel_getName(sel);

    auto result = addedSelectors.insert(selector);
    if (!result.second) {
      continue;
    }

    bool hasProperty = false;
    napi_has_named_property(env, object, result.first->c_str(), &hasProperty);
    if (hasProperty) {
      continue;
    }

    auto name = jsifySelector(selector);

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
      NAPI_GUARD(napi_has_named_property(env, superObject, name.c_str(),
                                         &superHasMethod)) {
        NAPI_THROW_LAST_ERROR
        return;
      }
      if (superHasMethod) {
        continue;
      }
    }

    napi_property_descriptor desc;

    desc.utf8name = (&*result.first)->c_str();
    desc.name = nil;
    auto bm = new BridgedMethod(bridgeData, sel, method);
    bm->supercall = supercall;
    desc.data = (void *)bm;
    desc.getter = nil;
    desc.setter = nil;
    desc.value = nil;
    desc.attributes =
        (napi_property_attributes)(napi_enumerable | napi_configurable);
    desc.method = JS_BridgedMethod;

    NAPI_GUARD(napi_define_properties(env, object, 1, &desc)) {
      NAPI_THROW_LAST_ERROR
      return;
    }
  }

  free(methods);
}

std::string NativeObjectName = "NativeObject";

// Bridge an Objective-C class to JavaScript on the fly. Runtime introspection
// is used to determine the class's properties and methods.
// In an overview, we define two versions of same class. One is the "normal"
// one, and the other is the "supercall" one. The supercall one is used to call
// superclasses' methods. The normal one is used to call the class's own
// methods. The supercall one is used automatically when the normal one is
// extended by a JS class.
// Every Bridged Class extends the NativeObject class.
BridgedClass::BridgedClass(napi_env env, std::string name) {
  Class nativeClass = objc_getClass(name.c_str());

  bool isNativeObject = name == NativeObjectName;

  if (nativeClass == nil && !isNativeObject) {
    std::string msg = "Objective-C class not found: " + name;
    napi_throw_error(env, nil, msg.c_str());
    return;
  }

  this->name = name;
  this->nativeClass = nativeClass;

  napi_value constructor, prototype, supercallConstructor, supercallPrototype;

  NAPI_PREAMBLE

  auto bridgeData = ObjCBridgeData::InstanceData(env);

  NAPI_GUARD(napi_define_class(env, name.c_str(), name.length(),
                               JS_BridgedConstructor, (void *)this, 0, nil,
                               &constructor)) {
    NSLog(@"Failed to define class: %s: %d", name.c_str(), status);
    NAPI_THROW_LAST_ERROR
    return;
  }

  NAPI_GUARD(napi_define_class(env, name.c_str(), name.length(),
                               JS_BridgedConstructor, (void *)this, 0, nil,
                               &supercallConstructor)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  if (nativeClass != nil) {
    NAPI_GUARD(
        napi_wrap(env, constructor, (void *)nativeClass, nil, nil, nil)) {
      NAPI_THROW_LAST_ERROR
      return;
    }
  }

  NAPI_GUARD(
      napi_get_named_property(env, constructor, "prototype", &prototype)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  NAPI_GUARD(napi_get_named_property(env, supercallConstructor, "prototype",
                                     &supercallPrototype)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  napi_value superConstructor = nil, superPrototype = nil,
             superConstructorSupercall = nil, superPrototypeSupercall = nil;

  // If the class requested isn't NativeObject - the class which every bridged
  // class extends - we need to find the super class and inherit from it, if it
  // exists.
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
      superConstructorSupercall =
          get_ref_value(env, superCls->supercallConstructor);
      superPrototypeSupercall =
          get_ref_value(env, superCls->supercallPrototype);
      napi_inherits(env, supercallConstructor, superConstructorSupercall);
    }
  }

  napi_value classExternal;
  NAPI_GUARD(napi_create_external(env, (void *)nativeClass, nil, nil,
                                  &classExternal)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  NAPI_GUARD(
      napi_set_named_property(env, constructor, "__class__", classExternal)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  this->constructor = make_ref(env, constructor);
  this->prototype = make_ref(env, prototype);
  this->supercallConstructor = make_ref(env, supercallConstructor);
  this->supercallPrototype = make_ref(env, supercallPrototype);

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
    // Define custom inspect property.
    const napi_property_descriptor property = {
        .utf8name = nil,
        .name = jsSymbolFor(env, "nodejs.util.inspect.custom"),
        .method = JS_CustomInspect,
        .getter = nil,
        .setter = nil,
        .value = nil,
        .attributes = napi_enumerable,
        .data = nil,
    };

    napi_define_properties(env, prototype, 1, &property);
    napi_define_properties(env, constructor, 1, &property);
    napi_define_properties(env, supercallPrototype, 1, &property);
    napi_define_properties(env, supercallConstructor, 1, &property);

    return;
  }

  // Meta Class is used to look up class methods/properties.
  Class metaClass = object_getClass((id)nativeClass);

  // Define instance properties/methods
  defineProperties(env, bridgeData, nativeClass, prototype, superPrototype,
                   false);
  // Define class properties/methods
  defineProperties(env, bridgeData, metaClass, constructor, superConstructor,
                   false);

  // Define instance properties/methods for supercall
  defineProperties(env, bridgeData, nativeClass, supercallPrototype,
                   superPrototype, true);
  // Define class properties/methods for supercall
  defineProperties(env, bridgeData, metaClass, supercallConstructor,
                   superConstructor, true);
}

} // namespace objc_bridge