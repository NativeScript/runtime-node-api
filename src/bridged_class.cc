#include "bridged_class.h"
#include "bridged_method.h"
#include "node_api_util.h"

NAPI_FUNCTION(BridgedConstructor) {
  NAPI_CALLBACK_BEGIN(1)
  return jsThis;
}

typedef id (*msgSend_description)(id, SEL);
typedef char *(*msgSend_UTF8String)(id, SEL);
typedef unsigned long (*msgSend_length)(id, SEL);

NAPI_FUNCTION(BridgedMethod) {
  napi_value jsThis;
  void *data;
  size_t argc = 0;

  napi_get_cb_info(env, cbinfo, &argc, nil, &jsThis, &data);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  BridgedMethod *method = (BridgedMethod *)data;

  MethodCif *cif;
  if (method->methodCif != nullptr) {
    cif = method->methodCif;
  } else {
    cif = method->methodCif =
        method->bridgeData->get_method_cif(method->method);
  }

  SEL sel = method->selector;

  napi_value *argv = cif->argv;
  argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, argv, &jsThis, &data);

  cif->avalues[0] = (void *)&self;
  cif->avalues[1] = (void *)&sel;

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      cif->convertArgType[i](env, argv[i], cif->avalues[i + 2]);
    }
  }

  cif->Call((void *)objc_msgSend);

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      if (cif->shouldFree[i]) {
        free(cif->avalues[i + 2]);
      }
    }
  }

  return cif->convertReturnType(env, cif->rvalue);
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
  std::string descriptionString = ((msgSend_UTF8String)objc_msgSend)(
      description, sel_registerName("UTF8String"));
  napi_value result;
  napi_create_string_utf8(env, descriptionString.c_str(),
                          descriptionString.length(), &result);
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

NAPI_FUNCTION(lengthCustom) {
  napi_value jsThis;
  void *data;
  napi_get_cb_info(env, cbinfo, nil, nil, &jsThis, &data);
  id self;
  napi_unwrap(env, jsThis, (void **)&self);
  unsigned long length =
      ((msgSend_length)objc_msgSend)(self, sel_registerName("length"));
  napi_value result;
  napi_create_uint32(env, length, &result);
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

  GET_BRIDGE_DATA

  NAPI_GUARD(napi_define_class(env, name.c_str(), name.length(),
                               JS_BridgedConstructor, nil, 0, nil,
                               &constructor)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

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

    BridgedClass *superCls = bridgeData->get_bridged_class(env, superName);
    if (superCls != nil) {
      napi_inherits(env, constructor, get_ref(env, superCls->constructor));
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
      .method = JS_lengthCustom,
      .getter = nullptr,
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
  napi_property_descriptor *jsPrototypeMethods =
      (napi_property_descriptor *)malloc(sizeof(napi_property_descriptor) *
                                         count);
  std::set<std::string> addedMethods;

  for (unsigned int i = 0; i < count; i++) {
    Method method = methods[i];
    SEL sel = method_getName(methods[i]);

    std::string selString = std::string(sel_getName(sel));
    replaceAll(selString, ":", "_");

    if (addedMethods.find(selString) != addedMethods.end()) {
      continue;
    }

    auto pair = addedMethods.emplace(selString);

    napi_property_descriptor *desc = &jsPrototypeMethods[actualCount];

    desc->utf8name = (&*pair.first)->c_str();
    desc->name = nil;
    auto bm = new BridgedMethod();
    bm->method = method;
    bm->selector = sel;
    bm->bridgeData = bridgeData;
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
  addedMethods = std::set<std::string>();

  for (unsigned int i = 0; i < count; i++) {
    Method method = methods[i];
    SEL sel = method_getName(method);

    std::string selString = std::string(sel_getName(sel));
    replaceAll(selString, ":", "_");

    if (addedMethods.find(selString) != addedMethods.end()) {
      continue;
    }

    auto pair = addedMethods.emplace(selString);

    napi_property_descriptor *desc = &jsClassMethods[actualCount];

    desc->utf8name = (&*pair.first)->c_str();
    desc->name = nil;
    auto bm = new BridgedMethod();
    bm->method = method;
    bm->selector = sel;
    bm->bridgeData = bridgeData;
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
