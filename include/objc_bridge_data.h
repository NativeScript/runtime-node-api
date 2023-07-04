#ifndef OBJC_BRIDGE_DATA_H
#define OBJC_BRIDGE_DATA_H

#include "bridged_class.h"
#include "js_native_api.h"
#include "method_cif.h"
#include "objc/runtime.h"
#include <map>
#include <string>

namespace objc_bridge {

class ObjCBridgeData {
public:
  std::unordered_map<std::string, BridgedClass *> bridged_classes;
  std::unordered_map<std::string, MethodCif *> method_cifs;

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
  void registerClass(napi_env env, napi_value constructor);
  void unregisterObject(id object) noexcept;

private:
  std::unordered_map<id, napi_ref> object_refs;
};

} // namespace objc_bridge

#endif /* OBJC_BRIDGE_DATA_H */
