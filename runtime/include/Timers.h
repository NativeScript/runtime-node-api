#ifndef TIMERS_H
#define TIMERS_H

#include "js_native_api.h"

namespace charon {

class Timers {
public:
  static void init(napi_env env);

  static napi_value setTimeout(napi_env env, napi_callback_info cbinfo);
};

} // namespace charon

#endif // TIMERS_H
