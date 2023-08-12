#ifndef CLOSURE_H
#define CLOSURE_H

#include "Metadata.h"
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

  ffi_cif cif;
  ffi_closure *closure;
  void *fnptr;

  std::shared_ptr<TypeConv> returnType;
  std::vector<std::shared_ptr<TypeConv>> argTypes;

  Closure(std::string typeEncoding, bool isBlock);
  // Closure(MDMetadataReader *reader, MDSectionOffset *offset, bool isBlock);

  ~Closure() {
    napi_delete_reference(env, func);
    ffi_closure_free(closure);
  }
};

} // namespace objc_bridge

#endif /* CLOSURE_H */
