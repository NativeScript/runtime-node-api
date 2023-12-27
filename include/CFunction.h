#ifndef C_FUNCTION_H
#define C_FUNCTION_H

#include "MethodCif.h"

namespace objc_bridge {

class CFunction {
public:
  static napi_value JSCall(napi_env env, napi_callback_info cbinfo);

  CFunction(void *fnptr) : fnptr(fnptr) {}
  ~CFunction();

  void *fnptr;
  MethodCif *cif = nullptr;
};

} // namespace objc_bridge

#endif /* C_FUNCTION_H */
