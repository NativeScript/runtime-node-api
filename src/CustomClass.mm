#include "Closure.h"
#include "ObjCBridge.h"
#include "Util.h"
#include "js_native_api.h"
#import <Foundation/Foundation.h>

namespace objc_bridge {

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

typedef std::unordered_map<std::string, MethodDescriptor *> MethodMap;

void addOverriableMethods(ObjCBridgeData *bridgeData, MDSectionOffset offset,
                          MethodMap &methodMap) {
  bool next = true;

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
      offset += sizeof(MDSectionOffset); // getterSignature
      if (!readonly) {
        offset += sizeof(MDSectionOffset); // setterSelector
        offset += sizeof(MDSectionOffset); // setterSignature
      }
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

void addProtocol(napi_env env, ObjCBridgeData *bridgeData, Class cls,
                 MDSectionOffset offset, MethodMap &methodMap) {
  if (offset == 0)
    return;

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
    if (protocolImpl != MD_SECTION_OFFSET_NULL) {
      protocolImpl += bridgeData->metadata->protocolsOffset;
      addProtocol(env, bridgeData, cls, protocolImpl, methodMap);
    }
  }

  addOverriableMethods(bridgeData, offset, methodMap);
}

extern char name_buf[512];

void ObjCBridgeData::registerClass(napi_env env, napi_value constructor) {
  napi_value prototype;
  napi_get_named_property(env, constructor, "prototype", &prototype);

  napi_value superConstructor;
  napi_get_prototype(env, constructor, &superConstructor);
  Class superClassNative = nullptr;
  napi_unwrap(env, superConstructor, (void **)&superClassNative);

  if (superClassNative == nullptr) {
    // If the class does not inherit from a native class,
    // by default it inherits from NSObject.
    superClassNative = [NSObject class];
  }

  BridgedClass *bridgedSuperClass = classesByPointer[superClassNative];

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

  std::unordered_map<std::string, MethodDescriptor *> methodMap,
      staticMethodMap;

  napi_value exposedMethods, exposedMethodNames;
  bool hasExposedMethods = false;
  napi_has_named_property(env, constructor, "ObjCExposedMethods",
                          &hasExposedMethods);

  if (hasExposedMethods) {
    napi_get_named_property(env, constructor, "ObjCExposedMethods",
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

  BridgedClass *currentClass = bridgedSuperClass;

  while (currentClass != nullptr) {
    auto offset = currentClass->metadataOffset;
    if (offset == MD_SECTION_OFFSET_NULL)
      break;
    auto nameOffset = metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset); // name
    auto hasProtocols = (nameOffset & mdSectionOffsetNext) != 0;
    while (hasProtocols) {
      auto protocolOffset = metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset); // protocol
      hasProtocols = (protocolOffset & mdSectionOffsetNext) != 0;
      protocolOffset &= ~mdSectionOffsetNext;
      // addProtocol(env, this, cls, protocolOffset + metadata->protocolsOffset,
      //             methodMap);
    }
    auto superClassOffset = metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset); // superclass
    auto hasMembers = (superClassOffset & mdSectionOffsetNext) != 0;
    if (hasMembers) {
      addOverriableMethods(this, offset, methodMap);
    }
    currentClass = currentClass->superclass;
  }

  napi_value protocols, protocol;
  bool hasProtocols = false;
  napi_has_named_property(env, constructor, "ObjCProtocols", &hasProtocols);

  if (hasProtocols) {
    napi_get_named_property(env, constructor, "ObjCProtocols", &protocols);

    uint32_t i = 0;
    uint32_t length = 0;
    napi_get_array_length(env, protocols, &length);

    while (i < length) {
      napi_get_element(env, protocols, i, &protocol);
      napi_get_value_string_utf8(env, protocol, name_buf, 512, nullptr);
      BridgedProtocol *proto = nullptr;
      napi_unwrap(env, protocol, (void **)&proto);
      if (proto != nullptr)
        addProtocol(env, this, cls, proto->metadataOffset, methodMap);
      i++;
    }
  }

  BridgedClass *bridgedClass = new BridgedClass();
  bridgedClass->name = name;
  bridgedClass->metadataOffset = bridgedSuperClass->metadataOffset;
  bridgedClass->superclass = bridgedSuperClass;
  bridgedClass->constructor = make_ref(env, constructor);
  bridgedClass->prototype = make_ref(env, prototype);
  bridgedClass->nativeClass = cls;

  classesByPointer[cls] = bridgedClass;

  napi_wrap(env, constructor, (void *)cls, nullptr, nullptr, nullptr);

  napi_value jsTrue;
  napi_get_boolean(env, true, &jsTrue);
  napi_set_named_property(env, constructor, "__objc_msgSendSuper__", jsTrue);
  napi_set_named_property(env, prototype, "__objc_msgSendSuper__", jsTrue);

  uint32_t i = 0;
  while (i < propertyCount) {
    napi_value property;
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
        closure->propertyName = name;
        closure->thisConstructor = bridgedClass->constructor;
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
        closure->propertyName = name;
        closure->thisConstructor = bridgedClass->constructor;
        auto added = class_addMethod(cls, desc->selector, (IMP)closure->fnptr,
                                     encoding.c_str());
        if (!added) {
          std::cout << "Failed to add method " << name << std::endl;
        }
        break;
      }
      }
    }
    i++;
  }

  objc_registerClassPair(cls);

  for (auto &pair : methodMap) {
    delete pair.second;
  }
}

} // namespace objc_bridge