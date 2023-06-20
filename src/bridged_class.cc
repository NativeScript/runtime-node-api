#include "bridged_class.h"
#include "bridged_method.h"
#include "node_api_util.h"

NAPI_FUNCTION(BridgedConstructor) {
  NAPI_CALLBACK_BEGIN(0)
  return jsThis;
}

typedef id (*msgSend_description)(id, SEL);
typedef char *(*msgSend_UTF8String)(id, SEL);
typedef unsigned long (*msgSend_length)(id, SEL);

NAPI_FUNCTION(BridgedMethod) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->methodCif;
  if (cif == nullptr) {
    cif = method->methodCif = method->bridgeData->getMethodCif(method->method);
  }

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, &jsThis, nullptr);

  cif->avalues[0] = (void *)&self;
  cif->avalues[1] = (void *)&method->selector;

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      cif->convertArgType[i](env, cif->argv[i], cif->avalues[i + 2]);
    }
  }

  cif->call((void *)objc_msgSend);

  if (cif->shouldFreeAny) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      if (cif->shouldFree[i]) {
        free(*((void **)cif->avalues[i + 2]));
      }
    }
  }

  return cif->convertReturnType(env, cif->rvalue);
}

NAPI_FUNCTION(BridgedGetter) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->methodCif;
  if (cif == nullptr) {
    cif = method->methodCif = method->bridgeData->getMethodCif(method->method);
  }

  cif->avalues[0] = (void *)&self;
  cif->avalues[1] = (void *)&method->selector;

  cif->call((void *)objc_msgSend);

  return cif->convertReturnType(env, cif->rvalue);
}

NAPI_FUNCTION(BridgedSetter) {
  napi_value jsThis, argv;
  size_t argc = 1;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, &argc, &argv, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->setterMethodCif;
  if (cif == nullptr) {
    cif = method->setterMethodCif =
        method->bridgeData->getMethodCif(method->setterMethod);
  }

  cif->avalues[0] = (void *)&self;
  cif->avalues[1] = (void *)&method->setterSelector;
  cif->convertArgType[0](env, cif->argv[0], cif->avalues[2]);

  cif->call((void *)objc_msgSend);

  if (cif->shouldFreeAny) {
    free(*((void **)cif->avalues[2]));
  }

  return nullptr;
}

NAPI_FUNCTION(CustomInspect) {
  NAPI_PREAMBLE

  napi_value jsThis;
  void *data;
  size_t argc = 0;

  napi_get_cb_info(env, cbinfo, &argc, nil, &jsThis, &data);

  id self;
  NAPI_GUARD(napi_unwrap(env, jsThis, (void **)&self)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  id description = ((msgSend_description)objc_msgSend)(
      self, sel_registerName("description"));
  char *descriptionString = ((msgSend_UTF8String)objc_msgSend)(
      description, sel_registerName("UTF8String"));
  napi_value result;
  napi_create_string_utf8(env, descriptionString, NAPI_AUTO_LENGTH, &result);
  return result;
}

void replaceAll(std::string &str, const std::string &from,
                const std::string &to) {
  if (from.empty())
    return;
  size_t start_pos = 0;
  while ((start_pos = str.find(from, start_pos)) != std::string::npos) {
    str.replace(start_pos, from.length(), to);
    start_pos += to.length();
  }
}

SEL selLength = sel_registerName("length");
// ffi_cif cif;
// ffi_type *atypes[] = {&ffi_type_pointer, &ffi_type_pointer};
// ffi_status status =
//     ffi_prep_cif(&cif, FFI_DEFAULT_ABI, 2, &ffi_type_ulong, atypes);
// void **avalues = (void **)malloc(sizeof(void *) * 2);
// void *rvalue = malloc(sizeof(unsigned long));

NAPI_FUNCTION(lengthCustom) {
  napi_value jsThis, prop;
  void *data;
  napi_get_cb_info(env, cbinfo, nil, nil, &jsThis, &data);
  id self;
  napi_unwrap(env, jsThis, (void **)&self);
  unsigned long length = ((msgSend_length)objc_msgSend)(self, selLength);
  // avalues[0] = &self;
  // avalues[1] = &selLength;
  // ffi_call(&cif, FFI_FN(objc_msgSend), rvalue, avalues);
  // unsigned long length = *(unsigned long *)rvalue;
  napi_value result;
  napi_create_int64(env, length, &result);
  return result;
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
      superName = std::string(class_getName(superClass));
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

  unsigned int count, actualCount;
  count = actualCount = 0;
  _Nonnull Method *_Nullable methods =
      class_copyMethodList(nativeClass, &count);

  unsigned int propertyCount = 0;
  _Nonnull objc_property_t *properties =
      class_copyPropertyList(nativeClass, &propertyCount);

  napi_property_descriptor *jsPrototypeMethods =
      (napi_property_descriptor *)malloc(sizeof(napi_property_descriptor) *
                                         (count + propertyCount));

  std::set<std::string> addedMethods, addedProperties;

  for (unsigned int i = 0; i < propertyCount; i++) {
    objc_property_t property = properties[i];
    std::string name = property_getName(property);

    auto pair = addedProperties.emplace(name);

    if (!pair.second) {
      continue;
    }

    const char *attrs = property_getAttributes(property);

    const char *getter = nil;
    const char *setter = nil;

    if (attrs != nil) {
      char *attrsCopy = strdup(attrs);
      char *token = strtok(attrsCopy, ",");
      while (token != nil) {
        if (token[0] == 'G') {
          getter = token + 1;
        } else if (token[0] == 'S') {
          setter = token + 1;
        }
        token = strtok(nil, ",");
      }
      free(attrsCopy);
    }

    if (getter == nil) {
      getter = strdup(name.c_str());
    }

    if (setter == nil) {
      size_t setter_len = name.length() + 4;
      char *setter_new = (char *)malloc(setter_len);
      strcpy((char *)setter_new, "set");
      setter_new[3] = toupper(name[0]);
      strcpy((char *)setter_new + 4, name.c_str() + 1);
      setter_new[setter_len - 1] = ':';
      setter_new[setter_len] = '\0';
      setter = setter_new;
    }

    if (name[0] == '\0' || *getter == '\0') {
      continue;
    }

    {
      std::string s_getter = getter;
      replaceAll(s_getter, ":", "_");
      auto result = addedMethods.emplace(s_getter);
      if (!result.second) {
        continue;
      }

      std::string s_setter = setter;
      replaceAll(s_setter, ":", "_");
      result = addedMethods.emplace(s_setter);
      if (!result.second) {
        continue;
      }
    }

    napi_property_descriptor *desc = &jsPrototypeMethods[actualCount];

    SEL getterSel = sel_registerName(getter);
    SEL setterSel = sel_registerName(setter);

    desc->utf8name = (&*pair.first)->c_str();
    desc->name = nil;
    desc->method = nil;
    desc->value = nil;
    desc->attributes = napi_enumerable;
    auto bm = new BridgedMethod(bridgeData, getterSel, setterSel, property);
    desc->data = (void *)bm;
    desc->getter = JS_BridgedGetter;
    bm->method = class_getInstanceMethod(nativeClass, getterSel);
    bm->setterMethod = class_getInstanceMethod(nativeClass, setterSel);
    if (bm->setterMethod != nil) {
      desc->setter = JS_BridgedSetter;
    } else {
      desc->setter = nil;
    }

    actualCount++;
  }

  for (unsigned int i = 0; i < count; i++) {
    Method method = methods[i];
    SEL sel = method_getName(methods[i]);
    std::string name = sel_getName(sel);
    replaceAll(name, ":", "_");

    bool superHasMethod = false;
    if (superPrototype != nil) {
      napi_has_named_property(env, superPrototype, name.c_str(),
                              &superHasMethod);
      if (superHasMethod) {
        continue;
      }
    }

    auto result = addedMethods.insert(name);
    if (!result.second) {
      continue;
    }

    napi_property_descriptor *desc = &jsPrototypeMethods[actualCount];

    desc->utf8name = (&*result.first)->c_str();
    desc->name = nil;
    auto bm = new BridgedMethod(bridgeData, sel, method);
    desc->data = (void *)bm;
    desc->getter = nil;
    desc->setter = nil;
    desc->value = nil;
    desc->attributes = napi_enumerable;
    desc->method = JS_BridgedMethod;

    actualCount++;
  }

  NAPI_GUARD(
      napi_define_properties(env, prototype, actualCount, jsPrototypeMethods)) {
    free(jsPrototypeMethods);
    NAPI_THROW_LAST_ERROR
    return;
  }

  free(jsPrototypeMethods);

  count = actualCount = 0;
  methods = class_copyMethodList(metaClass, &count);
  napi_property_descriptor *jsClassMethods = (napi_property_descriptor *)malloc(
      sizeof(napi_property_descriptor) * count);
  auto addedMethods2 = std::set<std::string>();

  for (unsigned int i = 0; i < count; i++) {
    Method method = methods[i];
    SEL sel = method_getName(method);
    std::string name = sel_getName(sel);
    replaceAll(name, ":", "_");

    auto pair = addedMethods2.emplace(name);

    if (!pair.second) {
      continue;
    }

    napi_property_descriptor *desc = &jsClassMethods[actualCount];

    desc->utf8name = (&*pair.first)->c_str();
    desc->name = nil;
    auto bm = new BridgedMethod(bridgeData, sel, method);
    desc->data = (void *)bm;
    desc->getter = nil;
    desc->setter = nil;
    desc->value = nil;
    desc->attributes = napi_enumerable;
    desc->method = JS_BridgedMethod;

    actualCount++;
  }

  NAPI_GUARD(
      napi_define_properties(env, constructor, actualCount, jsClassMethods)) {
    free(jsClassMethods);
    NAPI_THROW_LAST_ERROR
    return;
  }

  free(jsClassMethods);
}
