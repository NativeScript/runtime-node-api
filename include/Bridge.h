#ifndef BRIDGE_H
#define BRIDGE_H

#include "js_native_api.h"

extern "C" void objc_bridge_init(napi_env env, const char *metadata_path);
extern "C" napi_value napi_register_module_v1(napi_env env, napi_value exports);

#endif /* BRIDGE_H */
