#include "Interop.h"
#include "ClassBuilder.h"
#include "Metadata.h"
#include "ObjCBridge.h"
#include "Util.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <memory>

namespace objc_bridge {

inline napi_value createJSNumber(napi_env env, int32_t ival) {
  napi_value value;
  napi_create_int32(env, ival, &value);
  return value;
}

napi_value __extends(napi_env env, napi_callback_info info) {
  napi_value argv[2];
  size_t argc = 2;
  napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);

  napi_value constructor = argv[0];
  napi_value superConstructor = argv[1];

  napi_inherits(env, constructor, superConstructor);

  Class superClassNative = nullptr;
  napi_unwrap(env, superConstructor, (void **)&superClassNative);
  if (superClassNative != nullptr) {
    ClassBuilder *builder = new ClassBuilder(env, constructor);
    ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);
    bridgeState->classesByPointer[builder->nativeClass] = builder;
  }

  return nullptr;
}

const char *jsHelpersSource = R"(
  if (typeof globalThis.__decorate !== "function") {
    globalThis.__decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
  }

  globalThis.ObjCClass = function ObjCClass(...protocols) {
    return function(constructor) {
      constructor.ObjCProtocols = protocols;
    };
  };

  WeakRef.prototype.get = function() {
    return this.deref();
  };
)";

void registerInterop(napi_env env, napi_value global) {
  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);

  const napi_property_descriptor __extendsProperty = {
      .utf8name = "__extends",
      .attributes = napi_enumerable,
      .getter = nullptr,
      .setter = nullptr,
      .value = nullptr,
      .data = nullptr,
      .method = __extends,
  };

  napi_define_properties(env, global, 1, &__extendsProperty);

  napi_value jsHelpers;
  napi_create_string_utf8(env, jsHelpersSource, NAPI_AUTO_LENGTH, &jsHelpers);
  napi_run_script(env, jsHelpers, nullptr);

  napi_value interop;
  napi_create_object(env, &interop);

  napi_value types;
  napi_create_object(env, &types);

  napi_set_named_property(env, types, "void", createJSNumber(env, mdTypeVoid));
  napi_set_named_property(env, types, "bool", createJSNumber(env, mdTypeBool));
  napi_set_named_property(env, types, "int8", createJSNumber(env, mdTypeChar));
  napi_set_named_property(env, types, "uint8",
                          createJSNumber(env, mdTypeUInt8));
  napi_set_named_property(env, types, "int16",
                          createJSNumber(env, mdTypeSShort));
  napi_set_named_property(env, types, "uint16",
                          createJSNumber(env, mdTypeUShort));
  napi_set_named_property(env, types, "int32", createJSNumber(env, mdTypeSInt));
  napi_set_named_property(env, types, "uint32",
                          createJSNumber(env, mdTypeUInt));
  napi_set_named_property(env, types, "int64",
                          createJSNumber(env, mdTypeSInt64));
  napi_set_named_property(env, types, "uint64",
                          createJSNumber(env, mdTypeUInt64));
  napi_set_named_property(env, types, "float",
                          createJSNumber(env, mdTypeFloat));
  napi_set_named_property(env, types, "double",
                          createJSNumber(env, mdTypeDouble));
  napi_set_named_property(env, types, "UTF8CString",
                          createJSNumber(env, mdTypeString));
  napi_set_named_property(env, types, "unichar",
                          createJSNumber(env, mdTypeString));
  napi_set_named_property(env, types, "id",
                          createJSNumber(env, mdTypeAnyObject));
  napi_set_named_property(env, types, "protocol",
                          createJSNumber(env, mdTypePointer));
  napi_set_named_property(env, types, "class",
                          createJSNumber(env, mdTypeAnyObject));
  napi_set_named_property(env, types, "SEL",
                          createJSNumber(env, mdTypeSelector));
  napi_set_named_property(env, types, "pointer",
                          createJSNumber(env, mdTypePointer));

  napi_value Pointer = Pointer::defineJSClass(env);
  bridgeState->pointerClass = make_ref(env, Pointer);

  napi_value Reference = Reference::defineJSClass(env);
  bridgeState->referenceClass = make_ref(env, Reference);

  napi_value FunctionReference = FunctionReference::defineJSClass(env);

  const napi_property_descriptor properties[] = {
      {
          .utf8name = "Pointer",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = Pointer,
          .data = nullptr,
          .method = nullptr,
      },
      {
          .utf8name = "Reference",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = Reference,
          .data = nullptr,
          .method = nullptr,
      },
      {
          .utf8name = "FunctionReference",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = FunctionReference,
          .data = nullptr,
          .method = nullptr,
      },
      {
          .utf8name = "types",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = types,
          .data = nullptr,
          .method = nullptr,
      },
      {
          .utf8name = "adopt",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_adopt,
      },
      {
          .utf8name = "addMethod",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_addMethod,
      },
      {
          .utf8name = "addProtocol",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_addProtocol,
      },
      {
          .utf8name = "free",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_free,
      },
      {
          .utf8name = "sizeof",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_sizeof,
      },
      {
          .utf8name = "alloc",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_alloc,
      },
      {
          .utf8name = "handleof",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_handleof,
      },
      {
          .utf8name = "bufferFromData",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = interop_bufferFromData,
      },
  };

  napi_define_properties(env, interop, 11, properties);

  napi_set_named_property(env, global, "interop", interop);
}

napi_value interop_addMethod(napi_env env, napi_callback_info info) {
  napi_value argv[2];
  size_t argc = 2;
  napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);

  ClassBuilder *builder = nullptr;
  napi_unwrap(env, argv[0], (void **)&builder);
  if (builder == nullptr) {
    napi_throw_error(env, nullptr, "Invalid class");
    return nullptr;
  }
  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);
  builder = (ClassBuilder *)bridgeState->classesByPointer[(id)builder];

  napi_value name;
  napi_get_named_property(env, argv[1], "name", &name);

  if (builder->isFinal) {
    static char funcNameBuf[512];
    napi_get_value_string_utf8(env, name, funcNameBuf, 512, nullptr);
    std::string funcName = funcNameBuf;

    MethodDescriptor *desc = builder->lookupMethodDescriptor(funcName);
    if (desc == nullptr) {
      napi_throw_error(env, nullptr, "Invalid method, descriptor not found");
      return nullptr;
    }

    builder->addMethod(funcName, desc, name, argv[1]);
  } else {
    napi_set_property(env, get_ref_value(env, builder->prototype), name,
                      argv[1]);
  }
  
  return nullptr;
}

napi_value interop_addProtocol(napi_env env, napi_callback_info info) {
  napi_value argv[2];
  size_t argc = 2;
  napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);

  ClassBuilder *builder = nullptr;
  napi_unwrap(env, argv[0], (void **)&builder);
  if (builder == nullptr) {
    napi_throw_error(env, nullptr, "Invalid class");
    return nullptr;
  }
  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);
  builder = (ClassBuilder *)bridgeState->classesByPointer[(id)builder];

  ObjCProtocol *proto = nullptr;
  napi_unwrap(env, argv[1], (void **)&proto);
  if (proto == nullptr) {
    napi_throw_error(env, nullptr, "Invalid protocol");
    return nullptr;
  }

  builder->addProtocol(proto);

  return nullptr;
}

napi_value interop_adopt(napi_env env, napi_callback_info info) {
  napi_value arg;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &arg, nullptr, nullptr);

  Pointer *ptr;
  napi_unwrap(env, arg, (void **)&ptr);

  napi_value adopted;
  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);
  napi_new_instance(env, get_ref_value(env, bridgeState->pointerClass), 1, &arg,
                    &adopted);
  Pointer *adoptedPtr;
  napi_unwrap(env, adopted, (void **)&adoptedPtr);
  adoptedPtr->adopted = true;

  return adopted;
}

napi_value interop_free(napi_env env, napi_callback_info info) {
  napi_value arg;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &arg, nullptr, nullptr);

  Pointer *ptr = nullptr;
  napi_unwrap(env, arg, (void **)&ptr);

  if (ptr != nullptr && ptr->data != nullptr) {
    free(ptr->data);
    ptr->data = nullptr;
  }

  return nullptr;
}

size_t jsSizeof(napi_env env, napi_value arg) {
  napi_valuetype type;
  napi_typeof(env, arg, &type);

  switch (type) {
  case napi_number: {
    int32_t ival;
    napi_get_value_int32(env, arg, &ival);

    switch (ival) {
    case mdTypeVoid:
      return 0;
    
    case mdTypeBool:
    case mdTypeChar:
    case mdTypeUInt8:
      return sizeof(uint8_t);

    case mdTypeSShort:
    case mdTypeUShort:
      return sizeof(uint16_t);

    case mdTypeSInt:
    case mdTypeUInt:
      return sizeof(uint32_t);

    case mdTypeSInt64:
    case mdTypeUInt64:
      return sizeof(uint64_t);

    case mdTypeFloat:
      return sizeof(float);

    case mdTypeDouble:
      return sizeof(double);

    case mdTypeString:
      return sizeof(char *);

    case mdTypeAnyObject:
      return sizeof(id);

    case mdTypePointer:
      return sizeof(void *);

    case mdTypeSelector:
      return sizeof(SEL);

    default:
      napi_throw_type_error(env, "TypeError", "Invalid type number for sizeof. Use interop.types.*");
    }
  }

  case napi_object:
  case napi_function: {
    napi_value symbolSizeof = jsSymbolFor(env, "sizeof");
    napi_value result;
    napi_get_property(env, arg, symbolSizeof, &result);
    napi_valuetype resultType;
    napi_typeof(env, result, &resultType);
    if (resultType == napi_number) {
      int32_t size;
      napi_get_value_int32(env, result, &size);
      return size;
    } else {
      napi_throw_type_error(env, "TypeError", "Invalid type for sizeof");
    }
  }

  default:
    napi_throw_type_error(env, "TypeError", "Invalid type for sizeof");
  }

  return -1;
}

napi_value interop_sizeof(napi_env env, napi_callback_info info) {
  napi_valuetype type;
  napi_value arg;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &arg, nullptr, nullptr);
  
  size_t size = jsSizeof(env, arg);
  napi_value result;
  napi_create_int32(env, size, &result);

  return result;
}

napi_value interop_alloc(napi_env env, napi_callback_info info) {
  napi_value arg;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &arg, nullptr, nullptr);

  int64_t size;
  napi_get_value_int64(env, arg, &size);

  void *data = malloc(size);

  napi_value PointerClass =
      get_ref_value(env, ObjCBridgeState::InstanceData(env)->pointerClass);
  napi_value result;
  napi_new_instance(env, PointerClass, 0, nullptr, &result);

  Pointer *ptr = nullptr;
  napi_unwrap(env, result, (void **)&ptr);

  if (ptr == nullptr) {
    napi_throw_error(env, nullptr, "Invalid pointer");
    return nullptr;
  }

  ptr->data = data;

  return result;
}

napi_value interop_handleof(napi_env env, napi_callback_info info) {
  napi_value value, result;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &value, nullptr, nullptr);
  
  if (Pointer::isInstance(env, value)) {
    return value;
  } else if (Reference::isInstance(env, value)) {
    Reference *ref = Reference::unwrap(env, value);
    return Pointer::create(env, ref->data);
  }

  void *data = nullptr;
  napi_unwrap(env, value, (void **)&data);

  if (data != nullptr) {
    return Pointer::create(env, data);
  }

  napi_get_null(env, &result);
  return result;
}

napi_value interop_bufferFromData(napi_env env, napi_callback_info info) {
  napi_value arg;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &arg, nullptr, nullptr);

  NSData *data = nil;
  napi_unwrap(env, arg, (void **)&data);

  if (data == nil) {
    napi_throw_error(env, nullptr, "Invalid data");
    return nullptr;
  }

  napi_value result;
  napi_create_external_arraybuffer(env, (void *)data.bytes, data.length,
                                   nullptr, nullptr, nullptr);
  return result;
}

napi_value Pointer::defineJSClass(napi_env env) {
  const napi_property_descriptor properties[] = {
      {
          .utf8name = "add",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = Pointer::add,
      },
      {
          .utf8name = "subtract",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = Pointer::subtract,
      },
      {
          .utf8name = "toNumber",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = Pointer::toNumber,
      },
      {
          .utf8name = nullptr,
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = Pointer::customInspect,
          .name = jsSymbolFor(env, "nodejs.util.inspect.custom"),
      },
  };

  napi_value constructor;
  napi_define_class(env, "Pointer", NAPI_AUTO_LENGTH, Pointer::constructor,
                    nullptr, 4, properties, &constructor);

  return constructor;
}

bool Pointer::isInstance(napi_env env, napi_value value) {
  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);
  bool isInstance = false;
  napi_value Pointer = get_ref_value(env, bridgeState->pointerClass);
  napi_instanceof(env, value, Pointer, &isInstance);
  return isInstance;
}

napi_value Pointer::create(napi_env env, void *data) {
  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);
  bool isInstance = false;
  napi_value jsPointer = get_ref_value(env, bridgeState->pointerClass);
  napi_value result;
  napi_new_instance(env, jsPointer, 0, nullptr, &result);
  Pointer *ptr = Pointer::unwrap(env, result);
  ptr->data = data;
  return result;
}

Pointer *Pointer::unwrap(napi_env env, napi_value value) {
  Pointer *ptr = nullptr;
  napi_unwrap(env, value, (void **)&ptr);
  return ptr;
}

napi_value Pointer::constructor(napi_env env, napi_callback_info info) {
  napi_value jsThis;
  size_t argc = 1;
  napi_value arg;
  napi_get_cb_info(env, info, &argc, &arg, &jsThis, nullptr);

  napi_valuetype type;
  napi_typeof(env, arg, &type);

  void *data;

  switch (type) {
  case napi_number: {
    int64_t ival;
    napi_get_value_int64(env, arg, &ival);
    data = (void *)ival;
    break;
  }

  case napi_object: {
    bool isInstance = Pointer::isInstance(env, arg);
    if (isInstance) {
      Pointer *ptr;
      napi_unwrap(env, arg, (void **)&ptr);
      data = ptr->data;
    } else {
      napi_throw_error(env, nullptr, "Invalid type");
      return nullptr;
    }
    break;
  }

  case napi_undefined: {
    data = nullptr;
    break;
  }

  default:
    napi_throw_error(env, nullptr, "Invalid type");
    return nullptr;
  }

  Pointer *ptr = new Pointer(data);
  napi_ref ref;
  napi_wrap(env, jsThis, ptr, Pointer::finalize, nullptr, &ref);

  return jsThis;
}

napi_value Pointer::add(napi_env env, napi_callback_info info) {
  napi_value arg, jsThis;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &arg, &jsThis, nullptr);

  Pointer *ptr = Pointer::unwrap(env, jsThis);

  int64_t ival;
  napi_get_value_int64(env, arg, &ival);

  napi_value PointerClass =
      get_ref_value(env, ObjCBridgeState::InstanceData(env)->pointerClass);
  napi_value result;
  napi_new_instance(env, PointerClass, 0, nullptr, &result);

  Pointer *resultPtr = Pointer::unwrap(env, result);
  resultPtr->data = (void *)((int64_t)ptr->data + ival);

  return result;
}

napi_value Pointer::subtract(napi_env env, napi_callback_info info) {
  napi_value arg, jsThis;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &arg, &jsThis, nullptr);

  Pointer *ptr = Pointer::unwrap(env, jsThis);

  int64_t ival;
  napi_get_value_int64(env, arg, &ival);

  napi_value PointerClass =
      get_ref_value(env, ObjCBridgeState::InstanceData(env)->pointerClass);
  napi_value result;
  napi_new_instance(env, PointerClass, 0, nullptr, &result);

  Pointer *resultPtr = Pointer::unwrap(env, result);
  resultPtr->data = (void *)((int64_t)ptr->data - ival);

  return result;
}

napi_value Pointer::toNumber(napi_env env, napi_callback_info info) {
  napi_value jsThis;
  napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);

  Pointer *ptr = Pointer::unwrap(env, jsThis);

  napi_value result;
  napi_create_int64(env, (int64_t)ptr->data, &result);

  return result;
}

napi_value Pointer::customInspect(napi_env env, napi_callback_info info) {
  napi_value jsThis;
  napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);

  Pointer *ptr = Pointer::unwrap(env, jsThis);

  napi_value result;
  char *hex = (char *)malloc(17);
  snprintf(hex, 17, "%0016llx", (uint64_t)ptr->data);
  std::string str = "<Pointer: 0x" + std::string(hex) + ">";
  free(hex);
  napi_create_string_utf8(env, str.c_str(), NAPI_AUTO_LENGTH, &result);

  return result;
}

void Pointer::finalize(napi_env env, void *data, void *hint) {
  Pointer *ptr = (Pointer *)data;
  delete ptr;
}

Pointer::Pointer(void *data) { this->data = data; }

Pointer::~Pointer() {
  if (adopted && data != nullptr) {
    free(data);
  }
}

napi_value Reference::defineJSClass(napi_env env) {
  const napi_property_descriptor properties[] = {
      {
          .utf8name = "value",
          .attributes = (napi_property_attributes) (napi_enumerable | napi_writable),
          .getter = Reference::get_value,
          .setter = Reference::set_value,
          .value = nullptr,
          .data = nullptr,
          .method = nullptr,
      },
      {
          .utf8name = nullptr,
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .data = nullptr,
          .method = Reference::customInspect,
          .name = jsSymbolFor(env, "nodejs.util.inspect.custom"),
      },
  };

  napi_value constructor;
  napi_define_class(env, "Reference", NAPI_AUTO_LENGTH, Reference::constructor,
                    nullptr, 2, properties, &constructor);

  return constructor;
}

bool Reference::isInstance(napi_env env, napi_value value) {
  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);
  bool isInstance = false;
  napi_value Reference = get_ref_value(env, bridgeState->referenceClass);
  napi_instanceof(env, value, Reference, &isInstance);
  return isInstance;
}

Reference *Reference::unwrap(napi_env env, napi_value value) {
  Reference *ref = nullptr;
  napi_unwrap(env, value, (void **)&ref);
  return ref;
}

napi_value Reference::constructor(napi_env env, napi_callback_info info) {
  napi_value jsThis;
  size_t argc = 2;
  napi_value argv[2];
  napi_get_cb_info(env, info, &argc, argv, &jsThis, nullptr);

  Reference *reference = new Reference();
  bool owned = true;

  if (argc == 1) {
    reference->initValue = make_ref(env, argv[0]);
  } else if (argc == 2) {
    std::string type = getEncodedType(env, argv[0]);
    const char *typestr = type.c_str();
    reference->type = TypeConv::Make(env, &typestr);

    napi_valuetype argtype;
    napi_typeof(env, argv[1], &argtype);

    if (argtype == napi_object && Pointer::isInstance(env, argv[1])) {
      reference->data = Pointer::unwrap(env, argv[1])->data;
      owned = false;
    } else {
      reference->data = malloc(reference->type->type->size);
      bool shouldFree;
      reference->type->toNative(env, argv[1], reference->data, &shouldFree,
                                &shouldFree);
    }
  } else if (argc != 0) {
    napi_throw_error(env, nullptr, "Invalid number of arguments");
    return nullptr;
  }

  if (owned) {
    napi_ref ref;
    napi_wrap(env, jsThis, reference, Reference::finalize, nullptr, &ref);
  } else {
    napi_wrap(env, jsThis, reference, nullptr, nullptr, nullptr);
  }

  return jsThis;
}

napi_value Reference::get_value(napi_env env, napi_callback_info info) {
  napi_value jsThis;
  napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);

  Reference *ref = Reference::unwrap(env, jsThis);

  napi_value result;

  if (ref->data == nullptr) {
    napi_get_undefined(env, &result);
  } else {
    result = ref->type->toJS(env, ref->data);
  }

  return result;
}

napi_value Reference::set_value(napi_env env, napi_callback_info info) {
  napi_value jsThis;
  size_t argc = 1;
  napi_value arg;
  napi_get_cb_info(env, info, &argc, &arg, &jsThis, nullptr);

  Reference *ref = Reference::unwrap(env, jsThis);

  if (ref->data != nullptr) {
    bool shouldFree;
    ref->type->toNative(env, arg, ref->data, &shouldFree, &shouldFree);
  }

  return nullptr;
}

napi_value Reference::customInspect(napi_env env, napi_callback_info info) {
  napi_value jsThis;
  napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);

  Reference *ref = Reference::unwrap(env, jsThis);

  napi_value result;
  char *hex = (char *)malloc(17);
  snprintf(hex, 17, "%0016llx", (uint64_t)ref->data);
  std::string str = "<Reference: 0x" + std::string(hex) + ">";
  free(hex);
  napi_create_string_utf8(env, str.c_str(), NAPI_AUTO_LENGTH, &result);

  return result;
}

void Reference::finalize(napi_env env, void *data, void *hint) {
  Reference *ref = (Reference *)data;
  delete ref;
}

Reference::~Reference() {
  if (data != nullptr) {
    free(data);
  }
}

napi_value FunctionReference::defineJSClass(napi_env env) {
  napi_value constructor;
  napi_define_class(env, "FunctionReference", NAPI_AUTO_LENGTH,
                    FunctionReference::constructor, nullptr, 0, nullptr,
                    &constructor);

  return constructor;
}

FunctionReference *FunctionReference::unwrap(napi_env env, napi_value value) {
  FunctionReference *ref = nullptr;
  napi_unwrap(env, value, (void **)&ref);
  return ref;
}

void FunctionReference::finalize(napi_env env, void *data, void *hint) {
  FunctionReference *ref = (FunctionReference *)data;
  delete ref;
}

napi_value FunctionReference::constructor(napi_env env,
                                          napi_callback_info info) {
  napi_value jsThis;
  size_t argc = 1;
  napi_value arg;
  napi_get_cb_info(env, info, &argc, &arg, &jsThis, nullptr);

  FunctionReference *reference = new FunctionReference(env, make_ref(env, arg));

  napi_ref ref;
  napi_wrap(env, jsThis, reference, FunctionReference::finalize, nullptr, &ref);

  return jsThis;
}

FunctionReference::~FunctionReference() { napi_delete_reference(env, ref); }

void *FunctionReference::getFunctionPointer(MDSectionOffset offset) {
  if (closure == nullptr) {
    closure = std::make_shared<Closure>(
        ObjCBridgeState::InstanceData(env)->metadata, offset, true);
    closure->env = env;
    closure->func = ref;
  }

  return closure->fnptr;
}

} // namespace objc_bridge
