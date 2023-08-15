#ifndef BRIDGED_METHOD_H
#define BRIDGED_METHOD_H

#include "objc/runtime.h"
#include "objc_bridge_data.h"

namespace objc_bridge {

napi_value JS_CFunction(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedMethod(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedGetter(napi_env env, napi_callback_info cbinfo);
napi_value JS_BridgedSetter(napi_env env, napi_callback_info cbinfo);

inline bool isSelectorOwned(SEL sel) {
  std::string selectorName = sel_getName(sel);
  return selectorName.find("copy") == 0 ||
         selectorName.find("mutableCopy") == 0 ||
         selectorName.find("new") == 0 || selectorName.find("alloc") == 0;
}

class BridgedMethod {
public:
  SEL selector;
  SEL setterSelector;
  Method method;
  Method setterMethod = nullptr;
  objc_property_t property;
  ObjCBridgeData *bridgeData;
  MethodCif *methodCif = nullptr;
  MethodCif *setterMethodCif = nullptr;
  bool isStatic;
  napi_ref originalConstructor;
  bool supercall = false;
  bool returnOwned;

  BridgedMethod(ObjCBridgeData *bridgeData, SEL selector, Method method) {
    this->selector = selector;
    this->method = method;
    this->setterMethod = nullptr;
    this->bridgeData = bridgeData;
    this->property = nullptr;
    this->returnOwned = isSelectorOwned(selector);
  }

  BridgedMethod(ObjCBridgeData *bridgeData, SEL selector, SEL setterSelector,
                objc_property_t property) {
    this->selector = selector;
    this->setterSelector = setterSelector;
    this->property = property;
    this->bridgeData = bridgeData;
    this->method = nullptr;
  }
};

} // namespace objc_bridge

#endif /* BRIDGED_METHOD_H */
