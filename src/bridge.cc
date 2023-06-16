#include "bridge.h"

void finalize_bridge_data(napi_env env, void *data, void *hint) {
  ObjCBridgeData *bridgeData = (ObjCBridgeData *)data;
  delete bridgeData;
}

NAPI_EXPORT NAPI_MODULE_REGISTER {
  NAPI_PREAMBLE

  ObjCBridgeData *bridgeData = new ObjCBridgeData();

  NAPI_GUARD(napi_set_instance_data(env, (void *)bridgeData,
                                    finalize_bridge_data, nil)) {
    NAPI_THROW_LAST_ERROR
    return exports;
  }

  const napi_property_descriptor properties[] = {
      NAPI_FUNCTION_DESC(getClass),
  };

  NAPI_GUARD(napi_define_properties(env, exports, 1, properties)) {
    NAPI_THROW_LAST_ERROR
    return exports;
  }

  return exports;
}
