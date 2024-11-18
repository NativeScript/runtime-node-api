#include "ObjCBridge.h"
#include "AutoreleasePool.h"
#include "Block.h"
#include "Class.h"
#include "ClassMember.h"
#include "Enum.h"
#include "InlineFunctions.h"
#include "Interop.h"
#include "Metadata.h"
#include "MetadataReader.h"
#include "NativeScript.h"
#include "Object.h"
#include "ObjectRef.h"
#include "Struct.h"
#include "TypeConv.h"
#include "Variable.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <mach-o/dyld.h>
#include <mach-o/getsect.h>
#include <objc/runtime.h>

#ifdef EMBED_METADATA_SIZE
const unsigned char __attribute__((section("__objc_metadata,__objc_metadata")))
#if defined(__aarch64__)
embedded_metadata[EMBED_METADATA_SIZE] = "NSMDSectionHeaderARM";
#else
embedded_metadata[EMBED_METADATA_SIZE] = "NSMDSectionHeaderX86";
#endif
#endif

namespace objc_bridge {

void finalize_bridge_data(napi_env env, void *data, void *hint) {
  auto bridgeState = (ObjCBridgeState *)data;
  delete bridgeState;
}

MDMetadataReader *loadMetadataFromFile(const char *metadata_path) {
  if (metadata_path == nullptr) {
    metadata_path = "metadata.nsmd";
  }

  auto f =
      fopen(metadata_path == nullptr ? "metadata.nsmd" : metadata_path, "r");
  if (f == nullptr) {
    fprintf(stderr, "metadata.nsmd not found\n");
    exit(1);
  }
  fseek(f, 0, SEEK_END);
  auto size = ftell(f);
  fseek(f, 0, SEEK_SET);
  auto buffer = (uint8_t *)malloc(size);
  fread(buffer, 1, size, f);
  fclose(f);
  return new MDMetadataReader(buffer, size);
}

ObjCBridgeState::ObjCBridgeState(napi_env env, const char *metadata_path) {
  napi_set_instance_data(env, this, finalize_bridge_data, nil);

  self_dl = dlopen(nullptr, RTLD_NOW);

#ifdef EMBED_METADATA_SIZE
  if (metadata_path != nullptr) {
    metadata = loadMetadataFromFile(metadata_path);
  } else {
    metadata =
        new MDMetadataReader((void *)embedded_metadata, EMBED_METADATA_SIZE);
  }
#else
  unsigned long segmentSize = 0;
  auto segmentData =
      getsegmentdata((const mach_header_64 *)_dyld_get_image_header(0),
                     "__objc_metadata", &segmentSize);
  if (segmentData != nullptr) {
    metadata = new MDMetadataReader(segmentData, segmentSize);
  } else {
    metadata = loadMetadataFromFile(metadata_path);
  }
#endif

  objc_autoreleasePool = objc_autoreleasePoolPush();
}

ObjCBridgeState::~ObjCBridgeState() {
  objc_autoreleasePoolPop(objc_autoreleasePool);
  delete metadata;
  dlclose(self_dl);
}

napi_value ObjCBridgeState::proxyNativeObject(napi_env env, napi_value object,
                                              id nativeObject) {
  NAPI_PREAMBLE

  napi_value factory = get_ref_value(env, createNativeProxy);
  napi_value transferOwnershipFunc =
      get_ref_value(env, this->transferOwnershipToNative);
  napi_value result, global;
  napi_value args[3] = {object, nullptr, transferOwnershipFunc};
  napi_get_boolean(env, [nativeObject isKindOfClass:NSArray.class], &args[1]);
  napi_get_global(env, &global);
  napi_call_function(env, global, factory, 3, args, &result);

  // We need to wrap the proxied object separately except for Hermes,
  // We'll just ignore the error there.
  napi_wrap(env, result, nativeObject, nullptr, nullptr, nullptr);

  napi_ref ref = nullptr;
  NAPI_GUARD(napi_add_finalizer(env, result, nativeObject, finalize_objc_object,
                                this, &ref)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  objectRefs[nativeObject] = ref;

  return result;
}

} // namespace objc_bridge

using namespace objc_bridge;

NAPI_FUNCTION(getArrayBuffer) {
  NAPI_CALLBACK_BEGIN(2)

  void *ptr = Pointer::unwrap(env, argv[0])->data;
  int64_t length;
  napi_get_value_int64(env, argv[1], &length);

  napi_value arrayBuffer;
  napi_create_external_arraybuffer(env, ptr, length, nullptr, nullptr,
                                   &arrayBuffer);

  return arrayBuffer;
}

NAPI_FUNCTION(init) {
  NAPI_CALLBACK_BEGIN(1)
  napi_valuetype type;
  napi_typeof(env, argv[0], &type);
  const char *metadata_path = nullptr;
  if (type == napi_string) {
    size_t len;
    napi_get_value_string_utf8(env, argv[0], nullptr, 0, &len);
    metadata_path = (char *)malloc(len + 1);
    napi_get_value_string_utf8(env, argv[0], (char *)metadata_path, len + 1,
                               &len);
  }
  objc_bridge_init(env, metadata_path);
  return nullptr;
}

NAPI_EXPORT NAPI_MODULE_REGISTER {
  const napi_property_descriptor property = NAPI_FUNCTION_DESC(init);
  napi_define_properties(env, exports, 1, &property);
  return exports;
}

NAPI_EXPORT void objc_bridge_init(void *_env, const char *metadata_path) {
  napi_env env = (napi_env)_env;

  ObjCBridgeState *bridgeState = new ObjCBridgeState(env, metadata_path);

  napi_value objc;
  napi_create_object(env, &objc);

  const napi_property_descriptor objcProperties[] = {
      NAPI_FUNCTION_DESC(registerClass),  NAPI_FUNCTION_DESC(registerBlock),
      NAPI_FUNCTION_DESC(import),         NAPI_FUNCTION_DESC(autoreleasepool),
      NAPI_FUNCTION_DESC(getArrayBuffer),
  };

  napi_define_properties(env, objc, 5, objcProperties);

  napi_value global;
  napi_get_global(env, &global);

  const napi_property_descriptor globalProperties[] = {
      {
          .utf8name = "objc",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = objc,
          .data = nullptr,
          .method = nullptr,
      },
      {
          .utf8name = "ObjectRef",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .method = nullptr,
          .data = nullptr,
          .value = defineObjectRefClass(env),
      },
      {
          .utf8name = "NativeClass",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .method = JS_registerClass,
          .data = nullptr,
          .value = nullptr,
      }};

  napi_define_properties(env, global, 3, globalProperties);

  initProxyFactory(env, bridgeState);
  initFastEnumeratorIteratorFactory(env, bridgeState);

  registerInterop(env, global);
  registerInlineFunctions(env);

  bridgeState->registerVarGlobals(env, global);
  bridgeState->registerEnumGlobals(env, global);
  bridgeState->registerStructGlobals(env, global);
  bridgeState->registerUnionGlobals(env, global);
  bridgeState->registerFunctionGlobals(env, global);
  bridgeState->registerClassGlobals(env, global);
  bridgeState->registerProtocolGlobals(env, global);
}
