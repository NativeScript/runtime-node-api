//
//  type_conv.h
//  ObjCBridge
//
//  Created by Diljit Singh on 16/06/23.
//

#ifndef type_conv_h
#define type_conv_h

#include "node_api.h"
#include "objc/runtime.h"
#include <iostream>

typedef napi_value (*js_from_native)(napi_env, void *);
typedef void (*js_to_native)(napi_env, napi_value, void *);

js_from_native getConvFromNative(const char *encoding);
js_to_native getConvToNative(const char *encoding);
bool shouldFreeType(const char *encoding);

#define JS_FROM_NATIVE(name)                                                   \
  napi_value js_from_##name(napi_env env, void *value)
#define JS_TO_NATIVE(name)                                                     \
  void js_to_##name(napi_env env, napi_value value, void *result)

JS_FROM_NATIVE(void);
JS_FROM_NATIVE(objc_object);

#endif /* type_conv_h */
