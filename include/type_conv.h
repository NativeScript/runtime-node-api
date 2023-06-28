//
//  type_conv.h
//  ObjCBridge
//
//  Created by Diljit Singh on 16/06/23.
//

#ifndef type_conv_h
#define type_conv_h

#include "ffi.h"
#include "js_native_api.h"
#include "objc/runtime.h"
#include <iostream>

typedef napi_value (*js_from_native)(napi_env, void *, ffi_type *);
typedef void (*js_to_native)(napi_env, napi_value, void *, bool *, bool *);
typedef void (*js_free)(napi_env, void *);

ffi_type *getTypeForEncoding(const char **encoding);
js_from_native getConvFromNative(const char *encoding);
js_to_native getConvToNative(const char *encoding);
js_free getNativeFree(const char *encoding);

#define JS_FROM_NATIVE(name)                                                   \
  napi_value js_from_##name(napi_env env, void *value, ffi_type *type)
#define JS_TO_NATIVE(name)                                                     \
  void js_to_##name(napi_env env, napi_value value, void *result,              \
                    bool *shouldFree, bool *shouldFreeAny)
#define JS_FREE(name) void js_free_##name(napi_env env, void *value)

#endif /* type_conv_h */
