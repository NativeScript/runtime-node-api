#ifndef AUTORELEASEPOOL_H
#define AUTORELEASEPOOL_H

#include "js_native_api.h"

extern "C" {
void *objc_autoreleasePoolPush(void);
void objc_autoreleasePoolPop(void *pool);
}

namespace objc_bridge {

napi_value JS_autoreleasepool(napi_env env, napi_callback_info info);

} // namespace objc_bridge

#endif // AUTORELEASEPOOL_H
