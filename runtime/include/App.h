#ifndef APP_H
#define APP_H

// #include <hermes/hermes.h>
// #include <hermes/hermes_api.h>
#include "js_native_api.h"

class App {
public:
  // facebook::hermes::HermesRuntime *runtime;

  static App *init(napi_env env);
  static napi_value run(napi_env env, napi_callback_info cbinfo);
};

#endif // APP_H
