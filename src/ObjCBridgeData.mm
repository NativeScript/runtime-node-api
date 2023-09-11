#include "ObjCBridgeData.h"
#include "Closure.h"
#include "Metadata.h"
#include "Util.h"
#include "js_native_api.h"
#include "node_api_util.h"
#include <mach-o/dyld.h>
#include <mach-o/getsect.h>

#import <Foundation/Foundation.h>
#include <objc/objc.h>
#include <objc/runtime.h>

#ifdef EMBED_METADATA_SIZE
const unsigned char __attribute__((section("__objc_metadata,__objc_metadata")))
embedded_metadata[EMBED_METADATA_SIZE] = "NSMDSectionHeader";
#endif

namespace objc_bridge {

ObjCBridgeData::ObjCBridgeData(const char *metadata_path) {
  self_dl = dlopen(nullptr, RTLD_NOW);

#ifdef EMBED_METADATA_SIZE
  metadata =
      new MDMetadataReader((void *)embedded_metadata, EMBED_METADATA_SIZE);
#else
  unsigned long segmentSize = 0;
  auto segmentData =
      getsegmentdata((const mach_header_64 *)_dyld_get_image_header(0),
                     "__objc_metadata", &segmentSize);
  if (segmentData != nullptr) {
    metadata = new MDMetadataReader(segmentData, segmentSize);
  } else {
    auto f =
        fopen(metadata_path == nullptr ? "metadata.nsmd" : metadata_path, "r");
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
#endif

  objc_autoreleasePool = objc_autoreleasePoolPush();
}

ObjCBridgeData::~ObjCBridgeData() {
  objc_autoreleasePoolPop(objc_autoreleasePool);
  delete metadata;
  dlclose(self_dl);
}

CFunction *ObjCBridgeData::getCFunction(napi_env env, MDSectionOffset offset) {
  auto cached = cFunctionCache.find(offset);
  if (cached != cFunctionCache.end()) {
    return cached->second;
  }

  auto sigOffset = metadata->signaturesOffset +
                   metadata->getOffset(offset + sizeof(MDSectionOffset));
  auto cachedCif = mdSignatureCache.find(sigOffset);

  auto cFunction = new CFunction();
  cFunction->fnptr = dlsym(self_dl, metadata->getString(offset));
  cFunction->cif = nullptr;
  cFunctionCache[offset] = cFunction;

  if (cachedCif != mdSignatureCache.end()) {
    cFunction->cif = cachedCif->second;
  } else {
    auto cif = new MethodCif(env, metadata, sigOffset);
    cFunction->cif = cif;
    mdSignatureCache[sigOffset] = cif;
  }

  return cFunction;
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
MethodCif *ObjCBridgeData::getMethodCif(napi_env env, Method method) {
  auto encoding = std::string(method_getTypeEncoding(method));
  auto find = this->method_cifs[encoding];
  if (find != nullptr) {
    return find;
  }

  auto methodCif = new MethodCif(env, encoding);
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

void finalize_objc_object_noop(napi_env, void *, void *) {}

// Get a napi_value for an Objective-C object, creating it if it doesn't exist.
// Here we also ensure that the native object always points to the same
// JS object, this makes sure that we only ever finalize it once.
// Might want to consider using associated objects instead of a hashtable.
napi_value ObjCBridgeData::getObject(napi_env env, id obj,
                                     ObjectOwnership ownership) {
  NAPI_PREAMBLE

  if (obj == nullptr) {
    return nullptr;
  }

  auto find = this->objectRefs[obj];
  if (find != nullptr) {
    auto value = get_ref_value(env, find);
    if (value != nullptr) {
      return value;
    }

    this->unregisterObject(obj);
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

    NAPI_GUARD(napi_wrap(env, result, obj, nullptr, nullptr, nullptr)) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }

    NAPI_GUARD(napi_add_finalizer(env, result, obj,
                                  ownership == kBorrowedObject
                                      ? finalize_objc_object_noop
                                      : finalize_objc_object,
                                  this, &this->objectRefs[obj])) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }

    if (ownership == kUnownedObject) {
      [obj retain];
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

enum MethodDescriptorKind : uint8_t {
  kMethodDescSignatureOffset,
  kMethodDescEncoding,
  kMethodDescEncodingCStr,
};

union MethodDescriptorData {
  MDSectionOffset signatureOffset;
  std::string encoding;
  const char *encodingCStr;

  MethodDescriptorData(MDSectionOffset offset) { signatureOffset = offset; }
  MethodDescriptorData(std::string encoding) { this->encoding = encoding; }
  MethodDescriptorData(const char *encoding) { encodingCStr = encoding; }

  ~MethodDescriptorData() {}
};

class MethodDescriptor {
public:
  SEL selector;

  MethodDescriptorKind kind;
  MethodDescriptorData inner;

  MethodDescriptor(SEL selector, MDSectionOffset offset) : inner(offset) {
    kind = kMethodDescSignatureOffset;
    inner.signatureOffset = offset;
    this->selector = selector;
  }

  MethodDescriptor(SEL selector, char *encoding)
      : inner(std::string(encoding)) {
    kind = kMethodDescEncoding;
    this->selector = selector;
  }

  MethodDescriptor(SEL selector, std::string encoding) : inner(encoding) {
    kind = kMethodDescEncoding;
    this->selector = selector;
  }

  ~MethodDescriptor() {
    if (kind == kMethodDescEncoding) {
      inner.encoding.~basic_string();
    }
  }
};

void addProtocol(
    napi_env env, ObjCBridgeData *bridgeData, Class cls, MDSectionOffset offset,
    std::unordered_map<std::string, MethodDescriptor *> &methodMap) {
  auto nameOffset = bridgeData->metadata->getOffset(offset);
  offset += sizeof(MDSectionOffset);
  bool next = (nameOffset & mdSectionOffsetNext) != 0;
  nameOffset &= ~mdSectionOffsetNext;

  auto name = bridgeData->metadata->resolveString(nameOffset);
  auto proto = objc_getProtocol(name);
  if (proto != nullptr) {
    class_addProtocol(cls, proto);
  }

  while (next) {
    auto protocolImpl = bridgeData->metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);
    next = (protocolImpl & mdSectionOffsetNext) != 0;
    protocolImpl &= ~mdSectionOffsetNext;
    if (protocolImpl != 0)
      addProtocol(env, bridgeData, cls, protocolImpl, methodMap);
  }

  next = true;

  while (next) {
    auto flags = bridgeData->metadata->getMemberFlag(offset);
    next = (flags & mdMemberNext) != 0;
    offset += sizeof(flags);

    if (flags == mdMemberFlagNull)
      break;

    if ((flags & mdMemberProperty) != 0) {
      bool readonly = (flags & mdMemberReadonly) != 0;

      offset += sizeof(MDSectionOffset); // name

      offset += sizeof(MDSectionOffset); // getterSelector
      if (!readonly)
        offset += sizeof(MDSectionOffset); // setterSelector
      TypeConv::Make(env, bridgeData->metadata, &offset);
    } else {
      auto selector = bridgeData->metadata->getString(offset);
      offset += sizeof(MDSectionOffset); // selector
      auto signature = bridgeData->metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset); // signature
      auto jsName = jsifySelector(selector);
      methodMap[jsName] =
          new MethodDescriptor(sel_registerName(selector), signature);
    }
  }
}

void ObjCBridgeData::registerClass(napi_env env, napi_value constructor,
                                   bool silentFail) {
  napi_value classExternal, prototype, registered;
  napi_get_named_property(env, constructor, "__class__", &classExternal);
  napi_get_named_property(env, constructor, "prototype", &prototype);

  Class superClassNative;
  napi_get_value_external(env, classExternal, (void **)&superClassNative);

  napi_value className;
  napi_get_named_property(env, constructor, "name", &className);
  napi_get_value_string_utf8(env, className, name_buf, 512, nullptr);
  std::string name = name_buf;

  if (bridged_classes.contains(name)) {
    if (!silentFail)
      NSLog(@"Class already registered: %s", name.c_str());
    return;
  }

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

  std::unordered_map<std::string, MethodDescriptor *> methodMap,
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

      methodMap[name] = new MethodDescriptor(selector, encoding);
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
          new MethodDescriptor(selector, method_getTypeEncoding(method));
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
      std::string name = name_buf;
      auto offset = protocolOffsets[name];
      if (offset == 0)
        continue;
      addProtocol(env, this, cls, offset, methodMap);
      i++;
    }
  }

  uint32_t i = 0;
  napi_value property;
  while (i < propertyCount) {
    napi_get_element(env, properties, i, &property);
    napi_get_value_string_utf8(env, property, name_buf, 512, nullptr);
    std::string name = name_buf;
    auto desc = methodMap[name];
    if (desc != nullptr) {
      switch (desc->kind) {
      case kMethodDescEncoding:
      case kMethodDescEncodingCStr: {
        const char *encoding;
        if (desc->kind == kMethodDescEncodingCStr) {
          encoding = desc->inner.encodingCStr;
        } else {
          encoding = desc->inner.encoding.c_str();
        }

        auto closure = new Closure(encoding, false);
        closure->env = env;
        napi_value func;
        napi_get_named_property(env, prototype, name.c_str(), &func);
        closure->func = make_ref(env, func);
        auto added =
            class_addMethod(cls, desc->selector, (IMP)closure->fnptr, encoding);
        if (!added) {
          std::cout << "Failed to add method " << name << std::endl;
        }
        break;
      }

      case kMethodDescSignatureOffset: {
        std::string encoding;
        auto closure = new Closure(
            metadata, metadata->signaturesOffset + desc->inner.signatureOffset,
            false, &encoding, true);
        closure->env = env;
        napi_value func;
        napi_get_named_property(env, prototype, name.c_str(), &func);
        closure->func = make_ref(env, func);
        auto added = class_addMethod(cls, desc->selector, (IMP)closure->fnptr,
                                     strdup(encoding.c_str()));
        if (!added) {
          std::cout << "Failed to add method " << name << std::endl;
        }
        break;
      }
      }
    }
    i++;
  }

  for (auto &pair : methodMap) {
    delete pair.second;
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
  if (objectRefs.contains(object)) {
    objectRefs.erase(object);
    [object release];
  }
}

} // namespace objc_bridge