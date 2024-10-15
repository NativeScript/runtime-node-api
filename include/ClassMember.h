#ifndef BRIDGED_METHOD_H
#define BRIDGED_METHOD_H

#include "Cif.h"
#include "objc/runtime.h"
#include <iostream>

namespace objc_bridge {

class ObjCBridgeState;

enum MethodDescriptorKind : uint8_t {
  kMethodDescSignatureOffset,
  kMethodDescEncoding,
};

class MethodDescriptor {
public:
  SEL selector;

  MethodDescriptorKind kind;

  MDSectionOffset signatureOffset;
  std::string encoding;
  bool isProperty = false;

  MethodDescriptor() {}

  MethodDescriptor(SEL selector, MDSectionOffset offset)
      : selector(selector), kind(kMethodDescSignatureOffset),
        signatureOffset(offset) {}

  MethodDescriptor(SEL selector, char *encoding)
      : selector(selector), kind(kMethodDescEncoding), encoding(encoding) {}

  MethodDescriptor(SEL selector, std::string encoding)
      : kind(kMethodDescEncoding), encoding(encoding) {
    this->selector = selector;
  }
};

typedef std::unordered_map<std::string, MethodDescriptor> MethodMap;

class ObjCClassMember;

typedef std::unordered_map<std::string, ObjCClassMember> ObjCClassMemberMap;

class ObjCClassMember {
public:
  static void defineMembers(napi_env env, ObjCClassMemberMap &memberMap,
                            MDSectionOffset offset, napi_value constructor);

  static napi_value jsCall(napi_env env, napi_callback_info cbinfo);
  static napi_value jsCallInit(napi_env env, napi_callback_info cbinfo);
  static napi_value jsGetter(napi_env env, napi_callback_info cbinfo);
  static napi_value jsSetter(napi_env env, napi_callback_info cbinfo);

  ObjCClassMember(ObjCBridgeState *bridgeState, SEL selector,
                  MDSectionOffset offset, MDMemberFlag flags)
      : bridgeState(bridgeState),
        methodOrGetter(MethodDescriptor(selector, offset)),
        returnOwned((flags & metagen::mdMemberReturnOwned) != 0),
        classMethod((flags & metagen::mdMemberStatic) != 0) {}

  ObjCClassMember(ObjCBridgeState *bridgeState, SEL getterSelector,
                  SEL setterSelector, MDSectionOffset getterOffset,
                  MDSectionOffset setterOffset, MDMemberFlag flags)
      : bridgeState(bridgeState),
        methodOrGetter(MethodDescriptor(getterSelector, getterOffset)),
        setter(MethodDescriptor(setterSelector, setterOffset)),
        returnOwned((flags & metagen::mdMemberReturnOwned) != 0),
        classMethod((flags & metagen::mdMemberStatic) != 0) {
    methodOrGetter.isProperty = true;
    setter.isProperty = true;
  }

  ObjCBridgeState *bridgeState;
  MethodDescriptor methodOrGetter;
  MethodDescriptor setter;
  Cif *cif = nullptr;
  Cif *setterCif = nullptr;
  bool returnOwned;
  bool classMethod;
};

} // namespace objc_bridge

#endif /* BRIDGED_METHOD_H */
