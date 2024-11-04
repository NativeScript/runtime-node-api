#include "js_native_api.h"
#ifdef __APPLE__

#include "Timers.h"
#import <Foundation/Foundation.h>
#include <objc/runtime.h>

namespace charon {

void Timers::init(napi_env env) {
  napi_value global, Performance, performance;

  napi_get_global(env, &global);

  const napi_property_descriptor properties[] = {
      {
          .utf8name = "setTimeout",
          .name = nullptr,
          .method = setTimeout,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      },
      {
          .utf8name = "setInterval",
          .name = nullptr,
          .method = setInterval,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      },
      {
          .utf8name = "clearTimeout",
          .name = nullptr,
          .method = clearTimer,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      },
      {
          .utf8name = "clearInterval",
          .name = nullptr,
          .method = clearTimer,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      },
  };

  napi_define_properties(env, global, 4, properties);
}

napi_value Timers::setTimeout(napi_env env, napi_callback_info cbinfo) {
  size_t argc = 2;
  napi_value argv[2];
  napi_get_cb_info(env, cbinfo, &argc, argv, nullptr, nullptr);

  double ms;
  napi_get_value_double(env, argv[1], &ms);

  NSTimeInterval interval = ms / 1000;

  napi_ref callback;
  napi_create_reference(env, argv[0], 1, &callback);

  NSTimer *timer = [NSTimer
      timerWithTimeInterval:interval
                    repeats:NO
                      block:^(NSTimer *timer) {
                        napi_value global, callbackValue;
                        napi_get_global(env, &global);
                        napi_get_reference_value(env, callback, &callbackValue);
                        napi_call_function(env, global, callbackValue, 0,
                                           nullptr, nullptr);
                        napi_delete_reference(env, callback);
                        objc_setAssociatedObject(timer, "callback", nil,
                                                 OBJC_ASSOCIATION_ASSIGN);
                      }];

  objc_setAssociatedObject(timer, "callback", (id)callback,
                           OBJC_ASSOCIATION_ASSIGN);

  napi_value result;
  napi_create_int64(env, (int64_t)timer, &result);

  [[NSRunLoop currentRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];

  return result;
}

napi_value Timers::setInterval(napi_env env, napi_callback_info cbinfo) {
  size_t argc = 2;
  napi_value argv[2];
  napi_get_cb_info(env, cbinfo, &argc, argv, nullptr, nullptr);

  double ms;
  napi_get_value_double(env, argv[1], &ms);

  NSTimeInterval interval = ms / 1000;

  napi_ref callback;
  napi_create_reference(env, argv[0], 1, &callback);

  NSTimer *timer = [NSTimer
      timerWithTimeInterval:interval
                    repeats:YES
                      block:^(NSTimer *timer) {
                        napi_value global, callbackValue;
                        napi_get_global(env, &global);
                        napi_get_reference_value(env, callback, &callbackValue);
                        napi_call_function(env, global, callbackValue, 0,
                                           nullptr, nullptr);
                      }];

  objc_setAssociatedObject(timer, "callback", (id)callback,
                           OBJC_ASSOCIATION_ASSIGN);

  napi_value result;
  napi_create_int64(env, (int64_t)timer, &result);

  [[NSRunLoop currentRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];

  return result;
}

napi_value Timers::clearTimer(napi_env env, napi_callback_info cbinfo) {
  size_t argc = 1;
  napi_value argv[1];
  napi_get_cb_info(env, cbinfo, &argc, argv, nullptr, nullptr);

  int64_t timer;
  napi_get_value_int64(env, argv[0], &timer);

  NSTimer *t = (NSTimer *)timer;
  [t invalidate];

  napi_ref callback = (napi_ref)objc_getAssociatedObject(t, "callback");
  if (callback != nil) {
    napi_delete_reference(env, callback);
  }

  return nullptr;
}

} // namespace charon

#endif // __APPLE__
