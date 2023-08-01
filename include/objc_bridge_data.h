#ifndef OBJC_BRIDGE_DATA_H
#define OBJC_BRIDGE_DATA_H

#include "Metadata.h"
#include "bridged_class.h"
#include "js_native_api.h"
#include "method_cif.h"
#include "objc/runtime.h"
#include <dlfcn.h>
#include <map>
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
  MethodCif *getMethodCif(Method method);
  napi_value getObject(napi_env env, id object);
  void registerClass(napi_env env, napi_value constructor);
  void unregisterObject(id object) noexcept;

  inline CFunction *getCFunction(MDSectionOffset offset) {
    auto cached = cFunctionCache.find(offset);
    if (cached != cFunctionCache.end()) {
      return cached->second;
    }

    auto sigOffset = metadata->signaturesOffset +
                     metadata->getOffset(offset + sizeof(MDSectionOffset));
    auto cachedCif = mdSignatureCache.find(sigOffset);

    auto cFunction = new CFunction();
    cFunction->fnptr = dlsym(self_dl, metadata->getString(offset));
    cFunction->cif = nullptr;
    cFunctionCache[offset] = cFunction;

    if (cachedCif != mdSignatureCache.end()) {
      cFunction->cif = cachedCif->second;
    } else {
      auto cif = new MethodCif(metadata, sigOffset);
      cFunction->cif = cif;
      mdSignatureCache[sigOffset] = cif;
    }

    return cFunction;
  }

  ObjCBridgeData();

private:
  std::unordered_map<id, napi_ref> object_refs;
};

} // namespace objc_bridge

#endif /* OBJC_BRIDGE_DATA_H */
