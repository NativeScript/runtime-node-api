#ifndef CONSOLE_H
#define CONSOLE_H

#include "js_native_api.h"

namespace charon {

enum ConsoleStream {
  kConsoleStreamLog,
  kConsoleStreamError,
  kConsoleStreamWarn,
};

class Console {
public:
  static void init(napi_env env);

  static napi_value constructor(napi_env env, napi_callback_info cbinfo);

  static napi_value log(napi_env env, napi_callback_info cbinfo);
};

} // namespace charon

#endif // CONSOLE_H
