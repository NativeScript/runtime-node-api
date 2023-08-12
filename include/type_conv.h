#ifndef TYPE_CONV_H
#define TYPE_CONV_H

#include "Metadata.h"
#include "ffi.h"
#include "js_native_api.h"
#include "objc/runtime.h"
#include <iostream>

namespace objc_bridge {

class TypeConv {
public:
  static std::shared_ptr<TypeConv> Make(napi_env env, const char **encoding);
  static std::shared_ptr<TypeConv> Make(napi_env env, MDMetadataReader *reader,
                                        MDSectionOffset *offset);

  ffi_type *type;

  virtual napi_value toJS(napi_env env, void *value) { return nullptr; }

  virtual void toNative(napi_env env, napi_value value, void *result,
                        bool *shouldFree, bool *shouldFreeAny) {}

  virtual void free(napi_env env, void *value) {}
};

} // namespace objc_bridge

#endif /* TYPE_CONV_H */
