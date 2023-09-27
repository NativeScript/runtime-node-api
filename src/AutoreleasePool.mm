#include "AutoreleasePool.h"

namespace objc_bridge {

napi_value JS_autoreleasepool(napi_env env, napi_callback_info info) {
  napi_value callback;
  size_t argc = 1;
  napi_get_cb_info(env, info, &argc, &callback, nullptr, nullptr);
  napi_value global;
  napi_get_global(env, &global);
  auto pool = objc_autoreleasePoolPush();
  napi_value result;
  napi_call_function(env, global, callback, 0, nullptr, &result);
  objc_autoreleasePoolPop(pool);
  return result;
}

} // namespace objc_bridge
