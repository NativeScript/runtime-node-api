#ifndef CLOSURE_H
#define CLOSURE_H

#include "ffi.h"
#include "js_native_api.h"
#include "objc/runtime.h"
#include "type_conv.h"
#include <string>

namespace objc_bridge {

class Closure {
public:
  napi_env env;
  napi_ref func;

  ffi_cif *cif;
  ffi_closure *closure;
  void *fnptr;

  js_to_native convertReturnType;
  js_from_native *convertArgType;

  Closure(std::string typeEncoding);
};

} // namespace objc_bridge

#endif /* CLOSURE_H */
