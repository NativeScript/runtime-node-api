#ifndef TYPE_CONV_H
#define TYPE_CONV_H

#include "MetadataReader.h"
#include "ffi.h"
#include "js_native_api.h"
#include "objc/runtime.h"
#include <iostream>

using namespace metagen;

namespace objc_bridge {

typedef enum ConvertToJSFlags : uint32_t {
  kReturnOwned = 1 << 0,
  kBlockParam = 1 << 1,
  kStructZeroCopy = 1 << 2,
} ConvertToJSFlags;

class TypeConv {
public:
  static std::shared_ptr<TypeConv> Make(napi_env env, const char **encoding);
  static std::shared_ptr<TypeConv> Make(napi_env env, MDMetadataReader *reader,
                                        MDSectionOffset *offset,
                                        uint8_t opaquePointers = 0);

  ffi_type *type;
  MDTypeKind kind = mdTypeChar;

  virtual napi_value toJS(napi_env env, void *value, uint32_t flags = 0) {
    return nullptr;
  }

  virtual void toNative(napi_env env, napi_value value, void *result,
                        bool *shouldFree, bool *shouldFreeAny) {}

  virtual void free(napi_env env, void *value) {}

  virtual void encode(std::string *encoding) {}
};

} // namespace objc_bridge

#endif /* TYPE_CONV_H */
