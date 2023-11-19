#ifndef STRUCT_H
#define STRUCT_H

#include "MetadataReader.h"
#include "TypeConv.h"
#include "js_native_api.h"
#include <stdint.h>

namespace objc_bridge {

napi_value JS_structGetter(napi_env env, napi_callback_info info);
napi_value JS_unionGetter(napi_env env, napi_callback_info info);

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
StructInfo *getStructInfoFromUnionMetadata(napi_env env,
                                           MDMetadataReader *metadata,
                                           MDSectionOffset offset);

class StructObject {
public:
  void *data;
  StructInfo *info;
  bool owned;

  StructObject(StructInfo *info, void *data = nullptr);
  StructObject(napi_env env, StructInfo *info, napi_value object,
               void *memory = nullptr);

  napi_value get(napi_env env, StructFieldInfo *field);
  void set(napi_env env, StructFieldInfo *field, napi_value value);

  static StructObject *unwrap(napi_env env, napi_value object);
  static napi_value defineJSClass(napi_env env, StructInfo *info);
  static napi_value getJSClass(napi_env env, StructInfo *info);
  static napi_value fromNative(napi_env env, StructInfo *info, void *data,
                               bool owned);

  ~StructObject();
};

} // namespace objc_bridge

#endif /* STRUCT_H */
