#ifndef METHOD_CIF_H
#define METHOD_CIF_H

#include "Metadata.h"
#include "TypeConv.h"
#include "ffi.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <string>

namespace objc_bridge {

class MethodCif {
public:
  ffi_cif cif;
  unsigned int argc;
  size_t frameLength;
  size_t rvalueLength;

  void *rvalue;
  void **avalues;

  std::shared_ptr<TypeConv> returnType;
  std::vector<std::shared_ptr<TypeConv>> argTypes;

  napi_value *argv;
  bool shouldFreeAny;
  bool *shouldFree;

  MethodCif(napi_env env, std::string typeEncoding);
  MethodCif(napi_env env, MDMetadataReader *reader, MDSectionOffset offset,
            bool isMethod = false);

  void call(void *fnptr, void *rvalue, void **avalues);
};

} // namespace objc_bridge

#endif /* METHOD_CIF_H */
