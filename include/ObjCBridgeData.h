#ifndef OBJC_BRIDGE_DATA_H
#define OBJC_BRIDGE_DATA_H

#include "AutoreleasePool.h"
#include "Class.h"
#include "Metadata.h"
#include "MethodCif.h"
#include "Struct.h"
#include "TypeConv.h"
#include "js_native_api.h"
#include "objc/runtime.h"
#include <dlfcn.h>
#include <map>
#include <stdint.h>
#include <string>
#include <unordered_set>

namespace objc_bridge {

typedef struct CFunction {
  void *fnptr;
  MethodCif *cif;
} CFunction;

// Determines how retain/release should be called when an Objective-C
// object is exposed to JavaScript land.
typedef enum ObjectOwnership {
  // The object is already owned by JS land, and will be released
  // when the JS object is garbage collected.
  kOwnedObject,
  // The object is not owned by JS land, so to "take ownership"
  // we will call retain and release when the JS object is
  // garbage collected.
  kUnownedObject,
  // The object is not owned by JS land, but we will not call
  // retain/release at all. This is useful for objects that
  // passed to JS land as callback parameters.
  kBorrowedObject,
} ObjectOwnership;

class ObjCBridgeData {
public:
  std::unordered_map<std::string, BridgedClass *> bridged_classes;
  std::unordered_map<std::string, MethodCif *> method_cifs;
  std::unordered_map<MDSectionOffset, napi_ref> mdValueCache;
  std::unordered_map<MDSectionOffset, CFunction *> cFunctionCache;
  std::unordered_map<MDSectionOffset, MethodCif *> mdSignatureCache;
  std::unordered_map<std::string, MDSectionOffset> structOffsets;
  std::unordered_map<std::string, MDSectionOffset> protocolOffsets;

  void *self_dl;

  MDMetadataReader *metadata;

  ObjCBridgeData(const char *metadata_path = nullptr);
  ~ObjCBridgeData();

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
  napi_value getObject(napi_env env, id object,
                       ObjectOwnership ownership = kUnownedObject);
  void registerClass(napi_env env, napi_value constructor,
                     bool silentFail = false);
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

public:
  std::unordered_map<id, napi_ref> objectRefs;

private:
  std::unordered_map<MDSectionOffset, StructInfo *> structInfoCache;
  void *objc_autoreleasePool;
};

} // namespace objc_bridge

#endif /* OBJC_BRIDGE_DATA_H */
