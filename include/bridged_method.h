#ifndef BRIDGED_METHOD_H
#define BRIDGED_METHOD_H

#include "objc/runtime.h"
#include "objc_bridge_data.h"

class BridgedMethod {
public:
  SEL selector;
  SEL setterSelector;
  Method method;
  Method setterMethod;
  objc_property_t property;
  ObjCBridgeData *bridgeData;
  MethodCif *methodCif;
  MethodCif *setterMethodCif;

  BridgedMethod(ObjCBridgeData *bridgeData, SEL selector, Method method) {
    this->selector = selector;
    this->method = method;
    this->setterMethod = nullptr;
    this->bridgeData = bridgeData;
    this->methodCif = nullptr;
    this->property = nullptr;
    this->setterSelector = nullptr;
    this->setterMethodCif = nullptr;
  }

  BridgedMethod(ObjCBridgeData *bridgeData, SEL selector, SEL setterSelector,
                objc_property_t property) {
    this->selector = selector;
    this->setterSelector = setterSelector;
    this->property = property;
    this->bridgeData = bridgeData;
    this->methodCif = nullptr;
    this->setterMethodCif = nullptr;
    this->method = nullptr;
    this->setterMethod = nullptr;
  }
};

#endif /* BRIDGED_METHOD_H */
