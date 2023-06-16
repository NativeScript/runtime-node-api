#ifndef METHOD_CIF_H
#define METHOD_CIF_H

#include "ffi.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include "type_conv.h"
#include <string>

class MethodCif {
public:
  std::string typeEncoding;
  id signature;
  ffi_cif *cif;
  void *rvalue;
  void **avalues;
  js_from_native convertReturnType;
  js_to_native *convertArgType;
  unsigned int argc;
  napi_value *argv;
  bool shouldFreeAny;
  bool *shouldFree;

  MethodCif(std::string typeEncoding);

  void Call(void *fnptr);
};

#endif /* METHOD_CIF_H */
