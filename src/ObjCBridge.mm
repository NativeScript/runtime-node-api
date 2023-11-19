#include "AutoreleasePool.h"
#include "Block.h"
#include "Bridge.h"
#include "Class.h"
#include "Enum.h"
#include "Interop.h"
#include "Metadata.h"
#include "MetadataReader.h"
#include "NativeCall.h"
#include "ObjCBridgeData.h"
#include "ObjectRef.h"
#include "Struct.h"
#include "TypeConv.h"
#include "Variable.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <objc/runtime.h>

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

NAPI_EXPORT void objc_bridge_init(napi_env env, const char *metadata_path) {
  auto bridgeData = new ObjCBridgeData(env, metadata_path);

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

  registerInterop(env, global);

  bridgeData->registerVarGlobals(env, global);
  bridgeData->registerEnumGlobals(env, global);
  bridgeData->registerStructGlobals(env, global);
  bridgeData->registerUnionGlobals(env, global);
  bridgeData->registerFunctionGlobals(env, global);
  bridgeData->registerClassGlobals(env, global);
  bridgeData->registerProtocolGlobals(env, global);
}
