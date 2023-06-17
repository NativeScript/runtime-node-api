#ifndef BRIDGED_METHOD_H
#define BRIDGED_METHOD_H

#include "objc/runtime.h"
#include "objc_bridge_data.h"

class BridgedMethod {
public:
  SEL selector;
  Method method;
  ObjCBridgeData *bridgeData;
  MethodCif *methodCif;

  BridgedMethod(ObjCBridgeData *bridgeData, SEL selector, Method method) {
    this->selector = selector;
    this->method = method;
    this->bridgeData = bridgeData;
    this->methodCif = nullptr;
  }
};

#endif /* BRIDGED_METHOD_H */
