#include "objc_bridge_data.h"
#include "closure.h"
#include "node_api_util.h"
#include "util.h"

#import <Foundation/Foundation.h>
#include <objc/objc.h>

namespace objc_bridge {

ObjCBridgeData::ObjCBridgeData() {
  self_dl = dlopen(nullptr, RTLD_NOW);
  auto f = fopen("metadata/metadata.nsmd", "r");
  if (f == nullptr) {
    fprintf(stderr, "metadata.nsmd not found\n");
    exit(1);
  }
  fseek(f, 0, SEEK_END);
  auto size = ftell(f);
  fseek(f, 0, SEEK_SET);
  auto buffer = (uint8_t *)malloc(size);
  fread(buffer, 1, size, f);
  fclose(f);
  metadata = new MDMetadataReader(buffer, size);
}

// Get a Bridged Class by name, creating it if it doesn't exist.
// This is used to cache BridgedClass instances.
BridgedClass *ObjCBridgeData::getBridgedClass(napi_env env,
                                              std::string class_name) {
  auto find = this->bridged_classes[class_name];
  if (find != nullptr) {
    return find;
  }

  auto bridgedClass = new BridgedClass(env, class_name);
  this->bridged_classes[class_name] = bridgedClass;

  return bridgedClass;
}

// Essentially, we cache libffi structures per unique method signature,
// this helps us avoid the overhead of creating them on the fly for each
// invocation.
MethodCif *ObjCBridgeData::getMethodCif(Method method) {
  auto encoding = std::string(method_getTypeEncoding(method));
  auto find = this->method_cifs[encoding];
  if (find != nullptr) {
    return find;
  }

  auto methodCif = new MethodCif(encoding);
  this->method_cifs[encoding] = methodCif;

  return methodCif;
}

void finalize_objc_object(napi_env /*env*/, void *data, void *hint) {
#ifdef DEBUG
  NSLog(@"debug: finalizing object: %p", data);
#endif
  id object = static_cast<id>(data);
  ObjCBridgeData *bridgeData = static_cast<ObjCBridgeData *>(hint);
  bridgeData->unregisterObject(object);
}

// Get a napi_value for an Objective-C object, creating it if it doesn't exist.
// Here we also ensure that the native object always points to the same
// JS object, this makes sure that we only ever finalize it once.
// Might want to consider using associated objects instead of a hashtable.
napi_value ObjCBridgeData::getObject(napi_env env, id obj) {
  NAPI_PREAMBLE

  if (obj == nullptr) {
    return nullptr;
  }

  auto find = this->object_refs[obj];
  if (find != nullptr) {
    return get_ref_value(env, find);
  }

  Class cls = object_getClass(obj);

  if (cls == nullptr) {
    return nullptr;
  }

  bool isClass = false;

  if (class_isMetaClass(cls)) {
    cls = (Class)obj;
    isClass = true;
  }

  std::string name = class_getName(cls);
  BridgedClass *bridgedCls = this->getBridgedClass(env, name);

  if (bridgedCls == nullptr) {
    return nullptr;
  }

  napi_value result = nil;
  napi_value constructor = get_ref_value(env, bridgedCls->constructor);

  if (constructor == nullptr) {
    return nullptr;
  }

  if (isClass) {
    result = constructor;
  } else {
    NAPI_GUARD(napi_new_instance(env, constructor, 0, nullptr, &result)) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }
    // [obj retain];
    NAPI_GUARD(napi_wrap(env, result, (void *)obj, finalize_objc_object,
                         (void *)this, &this->object_refs[obj])) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }
    // FIXME: This should be fixed in Deno, its impl of napi_wrap is wrong.
    NAPI_GUARD(napi_create_reference(env, result, 0, &this->object_refs[obj])) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }
  }

  return result;
}

char name_buf[512];

std::string getEncodedType(napi_env env, napi_value value) {
  napi_valuetype type;
  napi_typeof(env, value, &type);

  switch (type) {
  case napi_string: {
    size_t len;
    napi_get_value_string_utf8(env, value, name_buf, 512, &len);
    std::string name = name_buf;
    if (name == "id") {
      return "@";
    } else if (name == "void") {
      return "v";
    } else if (name == "bool") {
      return "B";
    } else if (name == "char") {
      return "c";
    } else if (name == "unsigned char") {
      return "C";
    } else if (name == "short") {
      return "s";
    } else if (name == "unsigned short") {
      return "S";
    } else if (name == "int") {
      return "i";
    } else if (name == "unsigned int") {
      return "I";
    } else if (name == "long") {
      return "l";
    } else if (name == "unsigned long") {
      return "L";
    } else if (name == "long long") {
      return "q";
    } else if (name == "unsigned long long") {
      return "Q";
    } else if (name == "float") {
      return "f";
    } else if (name == "double") {
      return "d";
    } else if (name == "string") {
      return "*";
    } else if (name == "pointer") {
      return "^v";
    } else if (name == "class") {
      return "#";
    } else if (name == "selector") {
      return ":";
    } else {
      napi_throw_error(env, nullptr, "Invalid type");
      return "v";
    }
  }

  default:
    napi_throw_error(env, nullptr, "Invalid type");
    return "v";
  }
}

void addProtocol(
    Class cls, Protocol *p,
    std::unordered_map<std::string, std::pair<SEL, std::string>> &methodMap) {
  class_addProtocol(cls, p);

  unsigned int methodCount = 0;

  auto methods =
      protocol_copyMethodDescriptionList(p, false, true, &methodCount);

  for (uint32_t i = 0; i < methodCount; i++) {
    auto method = methods[i];
    SEL selector = method.name;
    std::string name = sel_getName(selector);
    name = jsifySelector(name);
    methodMap[name] = std::make_pair(selector, std::string(method.types));
  }

  free(methods);

  methods = protocol_copyMethodDescriptionList(p, true, true, &methodCount);

  for (uint32_t i = 0; i < methodCount; i++) {
    auto method = methods[i];
    SEL selector = method.name;
    std::string name = sel_getName(selector);
    name = jsifySelector(name);
    methodMap[name] = std::make_pair(selector, std::string(method.types));
  }

  free(methods);

  unsigned int protocolsCount = 0;

  auto protocols = protocol_copyProtocolList(p, &protocolsCount);

  for (uint32_t i = 0; i < protocolsCount; i++) {
    addProtocol(cls, protocols[i], methodMap);
  }

  free((void *)protocols);
}

void ObjCBridgeData::registerClass(napi_env env, napi_value constructor) {
  napi_value classExternal, prototype;
  napi_get_named_property(env, constructor, "__class__", &classExternal);
  napi_get_named_property(env, constructor, "prototype", &prototype);

  Class superClassNative;
  napi_get_value_external(env, classExternal, (void **)&superClassNative);

  napi_value className;
  napi_get_named_property(env, constructor, "name", &className);
  napi_get_value_string_utf8(env, className, name_buf, 512, nullptr);
  std::string name = name_buf;

  Class cls = objc_allocateClassPair(superClassNative, name.c_str(), 0);

  if (cls == nullptr) {
    napi_throw_error(env, nullptr, "Failed to allocate class");
    return;
  }

  napi_value properties;

  napi_get_all_property_names(env, prototype, napi_key_own_only,
                              napi_key_skip_symbols,
                              napi_key_numbers_to_strings, &properties);

  uint32_t propertyCount = 0;
  napi_get_array_length(env, properties, &propertyCount);

  std::unordered_map<std::string, std::pair<SEL, std::string>> methodMap,
      staticMethodMap;

  napi_value exposedMethods, exposedMethodNames;
  bool hasExposedMethods = false;
  napi_has_named_property(env, constructor, "exposedMethods",
                          &hasExposedMethods);

  if (hasExposedMethods) {
    napi_get_named_property(env, constructor, "exposedMethods",
                            &exposedMethods);

    napi_get_all_property_names(
        env, exposedMethods, napi_key_own_only, napi_key_skip_symbols,
        napi_key_numbers_to_strings, &exposedMethodNames);

    uint32_t exposedMethodCount = 0;
    napi_get_array_length(env, exposedMethodNames, &exposedMethodCount);

    for (uint32_t i = 0; i < exposedMethodCount; i++) {
      napi_value exposedMethodName;
      napi_get_element(env, exposedMethodNames, i, &exposedMethodName);
      napi_get_value_string_utf8(env, exposedMethodName, name_buf, 512,
                                 nullptr);
      std::string name = name_buf;
      SEL selector = sel_registerName(name.c_str());
      std::string encoding;

      napi_value def, params, returns;
      napi_get_named_property(env, exposedMethods, name.c_str(), &def);
      napi_get_named_property(env, def, "params", &params);
      napi_get_named_property(env, def, "returns", &returns);

      uint32_t paramCount = 0;
      napi_get_array_length(env, params, &paramCount);

      encoding += getEncodedType(env, returns);
      encoding += "@:";

      for (uint32_t j = 0; j < paramCount; j++) {
        napi_value param;
        napi_get_element(env, params, j, &param);
        std::string enctype = getEncodedType(env, param);
        if (enctype == "v") {
          napi_throw_error(env, nullptr,
                           "Void type not allowed in method params");
          return;
        }
        encoding += enctype;
      }

      methodMap[name] = std::make_pair(selector, encoding);
    }
  }

  Class currentClass = superClassNative;

  while (currentClass != nullptr) {
    uint32_t methodCount = 0;
    auto methods = class_copyMethodList(currentClass, &methodCount);

    for (uint32_t i = 0; i < methodCount; i++) {
      auto method = methods[i];
      SEL selector = method_getName(method);
      std::string name = sel_getName(selector);
      name = jsifySelector(name);
      methodMap[name] =
          std::make_pair(selector, method_getTypeEncoding(method));
    }

    free(methods);
    currentClass = class_getSuperclass(currentClass);
  }

  napi_value protocols, protocol;
  bool hasProtocols = false;
  napi_has_named_property(env, constructor, "protocols", &hasProtocols);

  if (hasProtocols) {
    napi_get_named_property(env, constructor, "protocols", &protocols);

    uint32_t i = 0;
    uint32_t length = 0;
    napi_get_array_length(env, protocols, &length);

    while (i < length) {
      napi_get_element(env, protocols, i, &protocol);
      napi_get_value_string_utf8(env, protocol, name_buf, 512, nullptr);
      Protocol *p = objc_getProtocol(name_buf);

      if (p != nullptr) {
        addProtocol(cls, p, methodMap);
      } else {
        std::cout << "Failed to find protocol: " << name_buf << std::endl;
      }

      i++;
    }
  }

  uint32_t i = 0;
  napi_value property;
  while (i < propertyCount) {
    napi_get_element(env, properties, i, &property);
    napi_get_value_string_utf8(env, property, name_buf, 512, nullptr);
    std::string name = name_buf;
    auto pair = methodMap[name];
    if (pair.first != nullptr) {
      std::string encoding = pair.second;
      auto closure = new Closure(encoding, false);
      closure->env = env;
      napi_value func;
      napi_get_named_property(env, prototype, name.c_str(), &func);
      closure->func = make_ref(env, func);
      auto added = class_addMethod(cls, pair.first, (IMP)closure->fnptr,
                                   encoding.c_str());
      if (!added) {
        std::cout << "Failed to add method " << name << std::endl;
      }
    }
    i++;
  }

  objc_registerClassPair(cls);

  void *alreadyWrapped;
  napi_unwrap(env, constructor, &alreadyWrapped);
  if (alreadyWrapped != nullptr) {
    napi_remove_wrap(env, constructor, &alreadyWrapped);
  }
  napi_wrap(env, constructor, (void *)cls, nullptr, nullptr, nullptr);

  napi_value external;
  napi_create_external(env, (void *)cls, nullptr, nullptr, &external);
  napi_set_named_property(env, constructor, "__class__", external);

  BridgedClass *bridgedClass = new BridgedClass();
  bridgedClass->name = name;
  bridgedClass->constructor = make_ref(env, constructor);
  bridgedClass->prototype = make_ref(env, prototype);
  bridgedClass->nativeClass = cls;

  this->bridged_classes[name] = bridgedClass;
}

void ObjCBridgeData::unregisterObject(id object) noexcept {
  object_refs.erase(object);
  // [object release];
}

} // namespace objc_bridge