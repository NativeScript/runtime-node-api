#ifndef BRIDGED_METHOD_H
#define BRIDGED_METHOD_H

#include "ObjCBridgeData.h"
#include "objc/runtime.h"

namespace objc_bridge {

napi_value JS_CFunction(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedMethod(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedGetter(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedSetter(napi_env env, napi_callback_info cbinfo);

class BridgedMethod {
public:
  ObjCBridgeData *bridgeData;
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
