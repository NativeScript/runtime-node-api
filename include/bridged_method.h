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
};

#endif /* BRIDGED_METHOD_H */
