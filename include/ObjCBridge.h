#ifndef OBJC_BRIDGE_H
#define OBJC_BRIDGE_H

#include "AutoreleasePool.h"
#include "CFunction.h"
#include "Class.h"
#include "MetadataReader.h"
#include "Cif.h"
#include "Protocol.h"
#include "Struct.h"
#include "TypeConv.h"
#include "js_native_api.h"
#include "NativeScript.h"
#include "objc/runtime.h"
#include <dlfcn.h>
#include <map>
#include <objc/runtime.h>
#include <stdint.h>
#include <string>
#include <unordered_map>
#include <unordered_set>

extern "C" napi_value napi_register_module_v1(napi_env env, napi_value exports);

using namespace metagen;

namespace objc_bridge {

void finalize_objc_object(napi_env /*env*/, void *data, void *hint);

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
} ObjectOwnership;

class ObjCBridgeState {
public:
  ObjCBridgeState(napi_env env, const char *metadata_path = nullptr);
  ~ObjCBridgeState();

  static inline ObjCBridgeState *InstanceData(napi_env env) {
    ObjCBridgeState *bridgeState;
    napi_status status = napi_get_instance_data(env, (void **)&bridgeState);
    if (status != napi_ok) {
      return nullptr;
    }
    return bridgeState;
  }

  void registerVarGlobals(napi_env env, napi_value global);
  void registerEnumGlobals(napi_env env, napi_value global);
  void registerStructGlobals(napi_env env, napi_value global);
  void registerUnionGlobals(napi_env env, napi_value global);
  void registerFunctionGlobals(napi_env env, napi_value global);
  void registerClassGlobals(napi_env env, napi_value global);
  void registerProtocolGlobals(napi_env env, napi_value global);

  ObjCClass *getClass(napi_env env, MDSectionOffset offset);

  ObjCProtocol *getProtocol(napi_env env, MDSectionOffset offset);

  Cif *getMethodCif(napi_env env, Method method);
  Cif *getMethodCif(napi_env env, MDSectionOffset offset);
  Cif *getBlockCif(napi_env env, MDSectionOffset offset);
  Cif *getCFunctionCif(napi_env env, MDSectionOffset offset);

  napi_value proxyNativeObject(napi_env env, napi_value object,
                               id nativeObject);

  napi_value getObject(napi_env env, id object, napi_value constructor,
                       ObjectOwnership ownership = kUnownedObject);
  napi_value getObject(napi_env env, id object,
                       ObjectOwnership ownership = kUnownedObject,
                       MDSectionOffset classOffset = 0,
                       std::vector<MDSectionOffset> *protocolOffsets = nullptr);

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

  inline StructInfo *getUnionInfo(napi_env env, MDSectionOffset offset) {
    auto cached = structInfoCache.find(offset);
    if (cached != structInfoCache.end()) {
      return cached->second;
    }

    auto structInfo = getStructInfoFromUnionMetadata(env, metadata, offset);
    structInfoCache[offset] = structInfo;

    return structInfo;
  }

public:
  std::unordered_map<id, napi_ref> objectRefs;

  napi_ref pointerClass;
  napi_ref referenceClass;
  napi_ref createNativeProxy;
  napi_ref createFastEnumeratorIterator;
  napi_ref transferOwnershipToNative;

  std::unordered_map<MDSectionOffset, ObjCClass *> classes;
  std::unordered_map<MDSectionOffset, ObjCProtocol *> protocols;
  std::unordered_map<Class, ObjCClass *> classesByPointer;
  std::unordered_map<Class, MDSectionOffset> mdClassesByPointer;
  std::unordered_map<Protocol *, MDSectionOffset> mdProtocolsByPointer;
  std::unordered_map<Class, napi_ref> constructorsByPointer;

  std::unordered_map<std::string, Cif *> cifs;
  std::unordered_map<MDSectionOffset, napi_ref> mdValueCache;
  std::unordered_map<MDSectionOffset, CFunction *> cFunctionCache;
  std::unordered_map<MDSectionOffset, Cif *> mdFunctionSignatureCache;
  std::unordered_map<MDSectionOffset, Cif *> mdMethodSignatureCache;
  std::unordered_map<MDSectionOffset, Cif *> mdBlockSignatureCache;
  std::unordered_map<std::string, MDSectionOffset> structOffsets;
  std::unordered_map<std::string, MDSectionOffset> unionOffsets;
  // std::unordered_map<std::string, MDSectionOffset> protocolOffsets;

  void *self_dl;

  MDMetadataReader *metadata;

private:
  std::unordered_map<MDSectionOffset, StructInfo *> structInfoCache;
  void *objc_autoreleasePool;
};

} // namespace objc_bridge

#endif /* OBJC_BRIDGE_H */
