#ifndef JS_NATIVE_API_UTIL_H
#define JS_NATIVE_API_UTIL_H

#include "js_native_api.h"

#define GUARD(expr)                                                            \
  status = expr;                                                               \
  if (status != napi_ok) {                                                     \
    std::cout << "call returned error: " << status << std::endl;               \
    return 1;                                                                  \
  }

#endif // JS_NATIVE_API_UTIL_H
