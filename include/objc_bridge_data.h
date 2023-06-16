#ifndef OBJC_BRIDGE_DATA_H
#define OBJC_BRIDGE_DATA_H

#include "bridged_class.h"
#include "method_cif.h"
#include "node_api.h"
#include "objc/runtime.h"
#include <map>
#include <string>

class ObjCBridgeData {
public:
  std::map<std::string, BridgedClass *> bridged_classes;
  std::map<std::string, MethodCif *> method_cifs;

  BridgedClass *get_bridged_class(napi_env env, std::string class_name);
  MethodCif *get_method_cif(Method method);
};

#endif /* OBJC_BRIDGE_DATA_H */
