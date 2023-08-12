#ifndef STRUCT_H
#define STRUCT_H

#include "Metadata.h"
#include "js_native_api.h"
#include "type_conv.h"
#include <stdint.h>

namespace objc_bridge {

typedef struct StructFieldInfo {
  char *name;
  uint16_t offset;
  std::shared_ptr<TypeConv> type;
} StructFieldInfo;

typedef struct StructInfo {
  char *name;
  uint16_t size;
  std::vector<StructFieldInfo> fields;
  napi_ref jsClass;
} StructInfo;

StructInfo *getStructInfoFromMetadata(napi_env env, MDMetadataReader *metadata,
                                      MDSectionOffset offset);

class StructObject {
public:
  void *data;
  StructInfo *info;

  StructObject(StructInfo *info);

  napi_value get(napi_env env, StructFieldInfo *field);
  void set(napi_env env, StructFieldInfo *field, napi_value value);

  static StructObject *unwrap(napi_env env, napi_value object);
  static napi_value defineJSClass(napi_env env, StructInfo *info);
  static napi_value getJSClass(napi_env env, StructInfo *info);
  static napi_value fromNative(napi_env env, StructInfo *info, void *data);

  ~StructObject();
};

} // namespace objc_bridge

#endif /* STRUCT_H */
