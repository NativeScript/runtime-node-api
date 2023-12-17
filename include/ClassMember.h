#ifndef BRIDGED_METHOD_H
#define BRIDGED_METHOD_H

#include "MethodCif.h"
#include "objc/runtime.h"

namespace objc_bridge {

napi_value JS_BridgedMethod(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedGetter(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedSetter(napi_env env, napi_callback_info cbinfo);

class ObjCBridgeState;

class ObjCClassMember {
public:
  ObjCBridgeState *bridgeState;
  // Can be either method selector or property getter selector
  SEL selector;
  SEL setterSelector;
  MDSectionOffset signature;
  MDSectionOffset setterSignature;
  MethodCif *methodCif = nullptr;
  MethodCif *setterMethodCif = nullptr;
  bool returnOwned;
  bool classMethod;
};

} // namespace objc_bridge

#endif /* BRIDGED_METHOD_H */
