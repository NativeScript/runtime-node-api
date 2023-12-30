#include "ClassBuilder.h"
#include "Metadata.h"
#include "ObjCBridge.h"
#include "Util.h"
#include "js_native_api.h"
#include "node_api_util.h"
#import <Foundation/Foundation.h>
#include <objc/runtime.h>

namespace objc_bridge {

ClassBuilder::ClassBuilder(napi_env env, napi_value constructor) {
  this->env = env;
  bridgeState = ObjCBridgeState::InstanceData(env);

  metadataOffset = MD_SECTION_OFFSET_NULL;

  napi_value superConstructor;
  napi_get_prototype(env, constructor, &superConstructor);
  Class superClassNative = nullptr;
  napi_unwrap(env, superConstructor, (void **)&superClassNative);

  if (superClassNative == nullptr) {
    // If the class does not inherit from a native class,
    // by default it inherits from NSObject.
    superClassNative = [NSObject class];
  }

  superclass = bridgeState->classesByPointer[superClassNative];

  napi_value className;
  napi_get_named_property(env, constructor, "name", &className);
  static char classNameBuf[512];
  napi_get_value_string_utf8(env, className, classNameBuf, 512, nullptr);

  name = classNameBuf;
  name += "_";
  name += std::to_string(rand());

  nativeClass = objc_allocateClassPair(superClassNative, name.c_str(), 0);

  if (nativeClass == nullptr) {
    napi_throw_error(env, nullptr, "Failed to allocate class");
    return;
  }

  class_addProtocol(nativeClass, @protocol(ObjCBridgeClassBuilderProtocol));

  objc_registerClassPair(nativeClass);

  napi_wrap(env, constructor, (void *)nativeClass, nullptr, nullptr, nullptr);

  napi_value prototype;
  napi_get_named_property(env, constructor, "prototype", &prototype);

  this->constructor = make_ref(env, constructor);
  this->prototype = make_ref(env, prototype);
}

ClassBuilder::~ClassBuilder() {
  if (nativeClass != nullptr) {
    objc_disposeClassPair(nativeClass);
    napi_delete_reference(env, constructor);
    napi_delete_reference(env, prototype);
  }
}

void ClassBuilder::addProtocol(ObjCProtocol *protocol) {
  if (!protocols.contains(protocol)) {
    protocols.emplace(protocol);
    // Not always there is a `Protocol` object for the protocol, so we
    // need to check if it exists first.
    Protocol *proto = objc_getProtocol(protocol->name.c_str());
    if (proto != nullptr) {
      class_addProtocol(nativeClass, proto);
    }
  }
}

MethodDescriptor *ClassBuilder::lookupMethodDescriptor(std::string &name) {
  // 1. First we look up if there was a custom definition for the method
  // in ObjCExposedMethods static of the custom class.
  auto findExposedMethod = exposedMethods.find(name);
  if (findExposedMethod != exposedMethods.end()) {
    return &findExposedMethod->second;
  }

  // 2. Then walk through the class hierarchy and see if we can find the
  // method in the superclass chain.
  ObjCClass *currentClass = superclass;
  while (currentClass != nullptr) {
    auto findMethod = currentClass->members.find(name);
    if (findMethod != currentClass->members.end() &&
        !findMethod->second.classMethod) {
      return &findMethod->second.methodOrGetter;
    }
    currentClass = currentClass->superclass;
  }

  // 3. And finally, look into all protocols implemented (directly or
  // indirectly) and try to find the method there.
  std::function<MethodDescriptor *(std::unordered_set<ObjCProtocol *> &
                                   protocols)>
      processProtocols = [&](std::unordered_set<ObjCProtocol *> &protocols)
      -> MethodDescriptor * {
    for (auto protocol : protocols) {
      auto findMethod = protocol->members.find(name);
      if (findMethod != protocol->members.end() &&
          !findMethod->second.classMethod) {
        return &findMethod->second.methodOrGetter;
      }
      // return processProtocols(protocol->protocols);
    }
    return (MethodDescriptor *)nullptr;
  };

  return processProtocols(protocols);
}

void ClassBuilder::addMethod(std::string &name, MethodDescriptor *desc,
                             napi_value key, napi_value func) {
  switch (desc->kind) {
  case kMethodDescEncoding: {
    const char *encoding = desc->encoding.c_str();
    auto closure = new Closure(encoding, false);
    closure->env = env;
    if (func != nullptr)
      closure->func = make_ref(env, func);
    else
      closure->propertyName = name;
    closure->thisConstructor = constructor;
    class_replaceMethod(nativeClass, desc->selector, (IMP)closure->fnptr,
                        encoding);
    break;
  }

  case kMethodDescSignatureOffset: {
    std::string encoding;
    auto closure = new Closure(bridgeState->metadata, desc->signatureOffset,
                               false, &encoding, true);
    closure->env = env;
    if (func != nullptr)
      closure->func = make_ref(env, func);
    else
      closure->propertyName = name;
    closure->thisConstructor = constructor;
    class_replaceMethod(nativeClass, desc->selector, (IMP)closure->fnptr,
                        encoding.c_str());
    break;
  }
  }
}

void ClassBuilder::build() {
  if (isFinal)
    return;

  isFinal = true;

  napi_value constructor = get_ref_value(env, this->constructor),
             prototype = get_ref_value(env, this->prototype);

  // 1. Extract method definitions from ObjCExposedMethods static

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
      static char exposedMethodNameBuf[512];
      napi_get_value_string_utf8(env, exposedMethodName, exposedMethodNameBuf,
                                 512, nullptr);
      std::string name = exposedMethodNameBuf;
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

      this->exposedMethods[name] = MethodDescriptor(selector, encoding);
    }
  }

  // 2. Extract the protocol references from ObjCProtocols static

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
      static char protocolNameBuf[512];
      napi_get_value_string_utf8(env, protocol, protocolNameBuf, 512, nullptr);
      ObjCProtocol *proto = nullptr;
      napi_unwrap(env, protocol, (void **)&proto);
      if (proto != nullptr)
        addProtocol(proto);
      i++;
    }
  }

  // 3. Walk over methods defined on the prototype and add them to the ObjC
  // class if we can find the corresponding method descriptor.

  napi_value properties;

  napi_get_all_property_names(env, prototype, napi_key_own_only,
                              napi_key_skip_symbols,
                              napi_key_numbers_to_strings, &properties);

  uint32_t propertyCount = 0;
  napi_get_array_length(env, properties, &propertyCount);

  uint32_t i = 0;
  while (i < propertyCount) {
    napi_value property;
    napi_get_element(env, properties, i, &property);
    static char propertyNameBuf[512];
    napi_get_value_string_utf8(env, property, propertyNameBuf, 512, nullptr);
    std::string name = propertyNameBuf;
    MethodDescriptor *desc = lookupMethodDescriptor(name);
    if (desc != nullptr) {
      addMethod(name, desc, property);
    }
    i++;
  }
}

} // namespace objc_bridge
