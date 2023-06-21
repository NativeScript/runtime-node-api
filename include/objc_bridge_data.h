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
  std::unordered_map<std::string, BridgedClass *> bridged_classes;
  std::unordered_map<std::string, MethodCif *> method_cifs;
  std::unordered_map<id, napi_ref> object_refs;

  static inline ObjCBridgeData *InstanceData(napi_env env) {
    ObjCBridgeData *bridgeData;
    napi_status status = napi_get_instance_data(env, (void **)&bridgeData);
    if (status != napi_ok) {
      return nullptr;
    }
    return bridgeData;
  }

  BridgedClass *getBridgedClass(napi_env env, std::string class_name);
  MethodCif *getMethodCif(Method method);
  napi_value getObject(napi_env env, id object);
};

#endif /* OBJC_BRIDGE_DATA_H */