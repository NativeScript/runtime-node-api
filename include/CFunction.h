#ifndef C_FUNCTION_H
#define C_FUNCTION_H

#include "MethodCif.h"

namespace objc_bridge {

typedef struct CFunction {
  void *fnptr;
  MethodCif *cif;
} CFunction;

napi_value JS_CFunction(napi_env env, napi_callback_info cbinfo);

} // namespace objc_bridge

#endif /* C_FUNCTION_H */
