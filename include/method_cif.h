#ifndef METHOD_CIF_H
#define METHOD_CIF_H

#include "ffi.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include "type_conv.h"
#include <string>

namespace objc_bridge {

ffi_type *getTypeForEncoding(const char **encoding);

class MethodCif {
public:
  ffi_cif *cif;
  unsigned int argc;
  size_t frameLength;
  size_t rvalueLength;

  void *rvalue;
  void **avalues;

  js_from_native convertReturnType;
  js_to_native *convertArgType;
  js_free *freeArgValue;

  napi_value *argv;
  bool shouldFreeAny;
  bool *shouldFree;

  MethodCif(std::string typeEncoding);

  void call(void *fnptr, void *rvalue, void **avalues);
};

} // namespace objc_bridge

#endif /* METHOD_CIF_H */
