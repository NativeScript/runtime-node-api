#ifndef OBJC_BRIDGE_DATA_H
#define OBJC_BRIDGE_DATA_H

#include "Metadata.h"
#include "bridged_class.h"
#include "js_native_api.h"
#include "method_cif.h"
#include "objc/runtime.h"
#include "struct.h"
#include "type_conv.h"
#include <dlfcn.h>
#include <map>
#include <stdint.h>
#include <string>

namespace objc_bridge {

typedef struct CFunction {
  void *fnptr;
  MethodCif *cif;
} CFunction;

class ObjCBridgeData {
public:
  std::unordered_map<std::string, BridgedClass *> bridged_classes;
  std::unordered_map<std::string, MethodCif *> method_cifs;
  std::unordered_map<MDSectionOffset, napi_ref> mdValueCache;
  std::unordered_map<MDSectionOffset, CFunction *> cFunctionCache;
  std::unordered_map<MDSectionOffset, MethodCif *> mdSignatureCache;
  std::unordered_map<std::string, MDSectionOffset> structOffsets;

  void *self_dl;

  MDMetadataReader *metadata;

  static inline ObjCBridgeData *InstanceData(napi_env env) {
    ObjCBridgeData *bridgeData;
    napi_status status = napi_get_instance_data(env, (void **)&bridgeData);
    if (status != napi_ok) {
      return nullptr;
    }
    return bridgeData;
  }

  BridgedClass *getBridgedClass(napi_env env, std::string class_name);
  MethodCif *getMethodCif(napi_env env, Method method);
  napi_value getObject(napi_env env, id object);
  void registerClass(napi_env env, napi_value constructor);
  void unregisterObject(id object) noexcept;

  CFunction *getCFunction(napi_env env, MDSectionOffset offset);

  inline StructInfo *getStructInfo(napi_env env, MDSectionOffset offset) {
    auto cached = structInfoCache.find(offset);
    if (cached != structInfoCache.end()) {
      return cached->second;
    }

    auto structInfo = getStructInfoFromMetadata(env, metadata, offset);
    structInfoCache[offset] = structInfo;

    return structInfo;
  }

  ObjCBridgeData();

private:
  std::unordered_map<id, napi_ref> objectRefs;
  std::unordered_map<MDSectionOffset, StructInfo *> structInfoCache;
};

} // namespace objc_bridge

#endif /* OBJC_BRIDGE_DATA_H */
