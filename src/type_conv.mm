#include "type_conv.h"
#include "Metadata.h"
#include "bridged_class.h"
#include "ffi.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include "objc_bridge_data.h"

#import <Foundation/Foundation.h>
#include <memory>
#include <stdbool.h>

namespace objc_bridge {

ffi_type *typeFromStruct(napi_env env, const char **encoding) {
  ffi_type *type = new ffi_type;
  type->type = FFI_TYPE_STRUCT;
  type->size = 0;
  type->alignment = 0;
  type->elements = nullptr;

  std::vector<ffi_type *> elements;

  (*encoding)++; // skip '{'

  while (**encoding != '=') {
    (*encoding)++;
  } // skip name

  (*encoding)++; // skip '='

  while (**encoding != '}') {
    ffi_type *elementType = TypeConv::Make(env, encoding)->type;
    elements.push_back(elementType);
  }

  (*encoding)++; // skip '}'

  type->elements =
      (ffi_type **)malloc(sizeof(ffi_type *) * (elements.size() + 1));
  for (int i = 0; i < elements.size(); i++) {
    type->elements[i] = elements[i];
  }
  // null-terminate the array
  type->elements[elements.size()] = nullptr;

  return type;
}

ffi_type *typeFromStruct(napi_env env, MDMetadataReader *reader,
                         MDSectionOffset structOffset) {
  ffi_type *type = new ffi_type;
  type->type = FFI_TYPE_STRUCT;
  type->size = 0;
  type->alignment = 0;
  type->elements = nullptr;

  MDSectionOffset nameOffset = reader->getOffset(structOffset);
  bool next = nameOffset & mdSectionOffsetNext;
  structOffset += sizeof(MDSectionOffset); // skip name
  structOffset += sizeof(uint16_t);        // skip size

  std::vector<ffi_type *> elements;

  while (next) {
    nameOffset = reader->getOffset(structOffset);
    next = nameOffset & mdSectionOffsetNext;
    structOffset += sizeof(MDSectionOffset); // skip name
    structOffset += sizeof(uint16_t);        // skip offset
    ffi_type *elementType = TypeConv::Make(env, reader, &structOffset)->type;
    elements.push_back(elementType);
  }

  type->elements =
      (ffi_type **)malloc(sizeof(ffi_type *) * (elements.size() + 1));
  for (int i = 0; i < elements.size(); i++) {
    type->elements[i] = elements[i];
  }
  // null-terminate the array
  type->elements[elements.size()] = nullptr;

  return type;
}

static inline size_t getTypedArrayUnitLength(napi_typedarray_type type) {
  switch (type) {
  case napi_int8_array:
  case napi_uint8_array:
  case napi_uint8_clamped_array:
    return 1;
  case napi_int16_array:
  case napi_uint16_array:
    return 2;
  case napi_int32_array:
  case napi_uint32_array:
  case napi_float32_array:
    return 4;
  case napi_float64_array:
  case napi_bigint64_array:
  case napi_biguint64_array:
    return 8;
  default:
    return 0;
  }
}

class VoidTypeConv : public TypeConv {
public:
  VoidTypeConv() { type = &ffi_type_void; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_get_null(env, &result);
    return result;
  }
};

static const std::shared_ptr<VoidTypeConv> voidTypeConv =
    std::make_shared<VoidTypeConv>();

class SCharTypeConv : public TypeConv {
public:
  SCharTypeConv() { type = &ffi_type_schar; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_int32(env, *(int8_t *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    int32_t val;
    napi_get_value_int32(env, value, &val);
    *(int8_t *)result = val;
  }
};

static const std::shared_ptr<SCharTypeConv> scharTypeConv =
    std::make_shared<SCharTypeConv>();

class UCharTypeConv : public TypeConv {
public:
  UCharTypeConv() { type = &ffi_type_uchar; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_uint32(env, *(uint8_t *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    uint32_t val;
    napi_get_value_uint32(env, value, &val);
    *(uint8_t *)result = val;
  }
};

static const std::shared_ptr<UCharTypeConv> ucharTypeConv =
    std::make_shared<UCharTypeConv>();

class UInt8TypeConv : public TypeConv {
public:
  UInt8TypeConv() { type = &ffi_type_uint8; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_uint32(env, *(uint8_t *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    uint32_t val;
    napi_get_value_uint32(env, value, &val);
    *(uint8_t *)result = val;
  }
};

static const std::shared_ptr<UInt8TypeConv> uint8TypeConv =
    std::make_shared<UInt8TypeConv>();

class SInt16TypeConv : public TypeConv {
public:
  SInt16TypeConv() { type = &ffi_type_sshort; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_int32(env, *(int16_t *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    int32_t val;
    napi_get_value_int32(env, value, &val);
    *(int16_t *)result = val;
  }
};

static const std::shared_ptr<SInt16TypeConv> sint16TypeConv =
    std::make_shared<SInt16TypeConv>();

class UInt16TypeConv : public TypeConv {
public:
  UInt16TypeConv() { type = &ffi_type_ushort; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_uint32(env, *(uint16_t *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    uint32_t val;
    napi_get_value_uint32(env, value, &val);
    *(uint16_t *)result = val;
  }
};

static const std::shared_ptr<UInt16TypeConv> uint16TypeConv =
    std::make_shared<UInt16TypeConv>();

class SInt32TypeConv : public TypeConv {
public:
  SInt32TypeConv() { type = &ffi_type_sint; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_int32(env, *(int32_t *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    int32_t val;
    napi_get_value_int32(env, value, &val);
    *(int32_t *)result = val;
  }
};

static const std::shared_ptr<SInt32TypeConv> sint32TypeConv =
    std::make_shared<SInt32TypeConv>();

class UInt32TypeConv : public TypeConv {
public:
  UInt32TypeConv() { type = &ffi_type_uint; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_uint32(env, *(uint32_t *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    uint32_t val;
    napi_get_value_uint32(env, value, &val);
    *(uint32_t *)result = val;
  }
};

static const std::shared_ptr<UInt32TypeConv> uint32TypeConv =
    std::make_shared<UInt32TypeConv>();

class SInt64TypeConv : public TypeConv {
public:
  SInt64TypeConv() { type = &ffi_type_sint64; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    int64_t val = *(int64_t *)value;
    napi_create_int64(env, val, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    napi_valuetype valuetype;
    napi_typeof(env, value, &valuetype);

    switch (valuetype) {
    case napi_number:
      napi_get_value_int64(env, value, (int64_t *)result);
      break;
    case napi_bigint: {
      bool lossless;
      napi_get_value_bigint_int64(env, value, (int64_t *)result, &lossless);
      break;
    }
    default:
      napi_throw_type_error(env, nullptr, "Expected a number or bigint");
      break;
    }
  }
};

static const std::shared_ptr<SInt64TypeConv> sint64TypeConv =
    std::make_shared<SInt64TypeConv>();

class UInt64TypeConv : public TypeConv {
public:
  UInt64TypeConv() { type = &ffi_type_uint64; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    uint64_t val = *(uint64_t *)value;
    napi_create_int64(env, (int64_t)val, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    napi_valuetype valuetype;
    napi_typeof(env, value, &valuetype);

    switch (valuetype) {
    case napi_number:
      napi_get_value_int64(env, value, (int64_t *)result);
      break;
    case napi_bigint: {
      bool lossless;
      napi_get_value_bigint_uint64(env, value, (uint64_t *)result, &lossless);
      break;
    }
    default:
      napi_throw_type_error(env, nullptr, "Expected a number or bigint");
      break;
    }
  }
};

static const std::shared_ptr<UInt64TypeConv> uint64TypeConv =
    std::make_shared<UInt64TypeConv>();

class Float32TypeConv : public TypeConv {
public:
  Float32TypeConv() { type = &ffi_type_float; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_double(env, *(float *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    double val;
    napi_get_value_double(env, value, &val);
    *(float *)result = val;
  }
};

static const std::shared_ptr<Float32TypeConv> float32TypeConv =
    std::make_shared<Float32TypeConv>();

class Float64TypeConv : public TypeConv {
public:
  Float64TypeConv() { type = &ffi_type_double; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_double(env, *(double *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    double val;
    napi_get_value_double(env, value, &val);
    *(double *)result = val;
  }
};

static const std::shared_ptr<Float64TypeConv> float64TypeConv =
    std::make_shared<Float64TypeConv>();

class BoolTypeConv : public TypeConv {
public:
  BoolTypeConv() { type = &ffi_type_uint8; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_get_boolean(env, *(bool *)value, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    bool val;
    napi_get_value_bool(env, value, &val);
    *(bool *)result = val;
  }
};

static const std::shared_ptr<BoolTypeConv> boolTypeConv =
    std::make_shared<BoolTypeConv>();

class PointerTypeConv : public TypeConv {
public:
  PointerTypeConv() { type = &ffi_type_pointer; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value external;
    napi_create_external(env, value, nullptr, nullptr, &external);
    return external;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    NAPI_PREAMBLE

    void **res = (void **)result;

    napi_valuetype type;
    napi_typeof(env, value, &type);

    switch (type) {
    case napi_null:
    case napi_undefined:
      *res = nullptr;
      return;

    case napi_bigint: {
      uint64_t val = 0;
      bool lossless = false;
      NAPI_GUARD(napi_get_value_bigint_uint64(env, value, &val, &lossless)) {
        NAPI_THROW_LAST_ERROR
        *res = nullptr;
        return;
      }
      *res = (void *)val;
      return;
    }

    case napi_external: {
      NAPI_GUARD(napi_get_value_external(env, value, res)) {
        NAPI_THROW_LAST_ERROR
        *res = nullptr;
        return;
      }
      return;
    }

    case napi_object: {
      void *wrapped;
      status = napi_unwrap(env, value, &wrapped);
      if (status == napi_ok) {
        *res = wrapped;
        return;
      }

      bool isTypedArray = false;
      napi_is_typedarray(env, value, &isTypedArray);
      if (isTypedArray) {
        void *data;
        size_t length = 0;
        napi_typedarray_type type;
        NAPI_GUARD(napi_get_typedarray_info(env, value, &type, &length, &data,
                                            nullptr, nullptr)) {
          NAPI_THROW_LAST_ERROR
          *res = nullptr;
          return;
        }

        *res = data;
        return;
      }
    }

    default:
      napi_throw_error(env, nullptr, "Invalid pointer type");
      *res = nullptr;
      return;
    }
  }
};

static const std::shared_ptr<PointerTypeConv> pointerTypeConv =
    std::make_shared<PointerTypeConv>();

class StringTypeConv : public TypeConv {
public:
  StringTypeConv() { type = &ffi_type_pointer; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    napi_create_string_utf8(env, (char *)value, NAPI_AUTO_LENGTH, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    NAPI_PREAMBLE

    char **res = (char **)result;

    *res = nullptr;
    size_t len = 0;

    NAPI_GUARD(napi_get_value_string_utf8(env, value, nullptr, len, &len)) {
      NAPI_THROW_LAST_ERROR
      return;
    }

    *res = (char *)malloc(len + 1);

    NAPI_GUARD(napi_get_value_string_utf8(env, value, *res, len + 1, &len)) {
      NAPI_THROW_LAST_ERROR
      ::free(*res);
      return;
    }

    (*res)[len] = '\0';

    *shouldFree = true;
    *shouldFreeAny = true;
  }

  void free(napi_env env, void *value) override { ::free(value); }
};

static const std::shared_ptr<StringTypeConv> stringTypeConv =
    std::make_shared<StringTypeConv>();

class ObjCObjectTypeConv : public TypeConv {
public:
  ObjCObjectTypeConv() { type = &ffi_type_pointer; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    id obj = *((id *)value);
    auto bridgeData = ObjCBridgeData::InstanceData(env);

    ObjectOwnership ownership;
    if ((flags & kReturnOwned) != 0) {
      ownership = kOwnedObject;
    } else if ((flags & kBlockParam) != 0) {
      ownership = kBorrowedObject;
    } else {
      ownership = kUnownedObject;
    }

    auto object = bridgeData->getObject(env, obj, ownership);
    if (object == nullptr) {
      napi_value null;
      napi_get_null(env, &null);
      return null;
    }
    return object;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    NAPI_PREAMBLE

    id *res = (id *)result;

    napi_valuetype type;
    napi_typeof(env, value, &type);

    switch (type) {
    case napi_null:
    case napi_undefined:
      *res = nil;
      return;

    case napi_string: {
      char *str;
      size_t len = 0;
      NAPI_GUARD(napi_get_value_string_utf8(env, value, nullptr, len, &len)) {
        NAPI_THROW_LAST_ERROR
        return;
      }

      str = (char *)malloc(len + 1);

      NAPI_GUARD(napi_get_value_string_utf8(env, value, str, len + 1, &len)) {
        NAPI_THROW_LAST_ERROR
        ::free(str);
        return;
      }

      str[len] = '\0';

      *res = [NSString stringWithUTF8String:str];

      ::free(str);
      break;
    }

    case napi_number: {
      double val = 0;
      NAPI_GUARD(napi_get_value_double(env, value, &val)) {
        NAPI_THROW_LAST_ERROR
        return;
      }
      *res = [NSNumber numberWithDouble:val];
      break;
    }

    case napi_boolean: {
      bool val = false;
      NAPI_GUARD(napi_get_value_bool(env, value, &val)) {
        NAPI_THROW_LAST_ERROR
        return;
      }
      *res = [NSNumber numberWithBool:val];
      break;
    }

    case napi_bigint: {
      int64_t val = 0;
      bool lossless = false;
      NAPI_GUARD(napi_get_value_bigint_int64(env, value, &val, &lossless)) {
        NAPI_THROW_LAST_ERROR
        return;
      }
      *res = [NSNumber numberWithLongLong:val];
      break;
    }

    case napi_external:
      NAPI_GUARD(napi_get_value_external(env, value, (void **)res)) {
        NAPI_THROW_LAST_ERROR
        *res = nil;
        return;
      }
      break;

    case napi_object:
    case napi_function:
      status = napi_unwrap(env, value, (void **)res);

      if (status != napi_ok) {
        bool isArray = false;
        napi_is_array(env, value, &isArray);
        if (isArray) {
          uint32_t len = 0;
          napi_get_array_length(env, value, &len);
          *res = [NSMutableArray arrayWithCapacity:len];

          for (uint32_t i = 0; i < len; i++) {
            napi_value elem;
            napi_get_element(env, value, i, &elem);
            id obj = nil;
            toNative(env, elem, (void *)&obj, shouldFree, shouldFreeAny);
            [(*res) addObject:obj];
          }

          return;
        } else {
          *res = [NSMutableDictionary dictionary];
          napi_value keys;
          napi_get_property_names(env, value, &keys);
          uint32_t len = 0;
          napi_get_array_length(env, keys, &len);

          for (uint32_t i = 0; i < len; i++) {
            napi_value key;
            napi_get_element(env, keys, i, &key);
            char buf[256];
            size_t len = 0;
            napi_get_value_string_utf8(env, key, buf, 256, &len);
            id obj = nil;
            napi_value elem;
            napi_get_property(env, value, key, &elem);
            toNative(env, elem, (void *)&obj, shouldFree, shouldFreeAny);
            [(*res) setObject:obj forKey:[NSString stringWithUTF8String:buf]];
          }

          return;
        }

        NAPI_THROW_LAST_ERROR
        *res = nil;
      }

      break;

    default:
      napi_throw_error(env, nullptr, "Invalid object type");
      *res = nil;
      break;
    }
  }

  void free(napi_env env, void *value) override {
    id obj = *((id *)value);
    auto bridgeData = ObjCBridgeData::InstanceData(env);
    bridgeData->unregisterObject(obj);
  }
};

static const std::shared_ptr<ObjCObjectTypeConv> objcObjectTypeConv =
    std::make_shared<ObjCObjectTypeConv>();

class ObjCClassTypeConv : public TypeConv {
public:
  ObjCClassTypeConv() { type = &ffi_type_pointer; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    Class cls = *((Class *)value);

    if (cls == nullptr) {
      return nullptr;
    }

    std::string name = class_getName(cls);

    auto bridgeData = ObjCBridgeData::InstanceData(env);

    BridgedClass *bridgedCls = bridgeData->getBridgedClass(env, name);

    if (bridgedCls == nullptr) {
      return nullptr;
    }

    napi_value constructor = get_ref_value(env, bridgedCls->constructor);

    return constructor;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    ObjCObjectTypeConv typeConv;
    typeConv.toNative(env, value, result, shouldFree, shouldFreeAny);
  }
};

static const std::shared_ptr<ObjCClassTypeConv> objcClassTypeConv =
    std::make_shared<ObjCClassTypeConv>();

char selector_name_buf[256];

class SelectorTypeConv : public TypeConv {
public:
  SelectorTypeConv() { type = &ffi_type_pointer; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    SEL val = *((SEL *)value);
    napi_create_string_utf8(env, sel_getName(val), NAPI_AUTO_LENGTH, &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    NAPI_PREAMBLE

    SEL *res = (SEL *)result;

    NAPI_GUARD(
        napi_get_value_string_utf8(env, value, selector_name_buf, 256, NULL)) {
      NAPI_THROW_LAST_ERROR
      *res = NULL;
      return;
    }

    *res = sel_registerName(selector_name_buf);
  }
};

static const std::shared_ptr<SelectorTypeConv> selectorTypeConv =
    std::make_shared<SelectorTypeConv>();

class StructTypeConv : public TypeConv {
public:
  MDSectionOffset structOffset;
  StructInfo *info = nullptr;
  bool structInfoSearched = false;

  StructTypeConv(MDSectionOffset structOffset, ffi_type *type)
      : structOffset(structOffset) {
    this->type = type;
  }

  inline StructInfo *getInfo(napi_env env) {
    if (!structInfoSearched) {
      auto bridgeData = ObjCBridgeData::InstanceData(env);
      info = bridgeData->getStructInfo(env, structOffset);
      structInfoSearched = true;
    }

    return info;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    auto info = getInfo(env);

    if (info == nullptr) {
      napi_value result;
      void *data;
      napi_create_arraybuffer(env, type->size, &data, &result);
      memcpy(data, value, type->size);
      return result;
    } else {
      return StructObject::fromNative(env, info, value,
                                      (flags & kStructZeroCopy) == 0);
    }
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    NAPI_PREAMBLE

    bool isTypedArray = false;
    napi_is_typedarray(env, value, &isTypedArray);

    if (isTypedArray) {
      void *data;
      size_t length = 0;
      napi_typedarray_type type;
      NAPI_GUARD(napi_get_typedarray_info(env, value, &type, &length, &data,
                                          nullptr, nullptr)) {
        NAPI_THROW_LAST_ERROR
        return;
      }

      memcpy(result, data, length * getTypedArrayUnitLength(type));

      return;
    }

    napi_valuetype type;
    napi_typeof(env, value, &type);

    if (type != napi_object) {
      napi_throw_type_error(env, "TypeError",
                            "Invalid struct type, must be Struct Object, "
                            "Struct Object Descriptor or TypedArray");
      return;
    }

    auto structObject = StructObject::unwrap(env, value);
    if (structObject != nullptr) {
      memcpy(result, structObject->data, structObject->info->size);
      return;
    }

    auto info = getInfo(env);

    if (info == nullptr) {
      napi_throw_type_error(
          env, "TypeError",
          "Invalid struct type, must be Struct Object or TypedArray");
      return;
    }

    StructObject(env, info, value, result);
  }
};

class ArrayTypeConv : public TypeConv {
public:
  int arraySize;
  std::shared_ptr<TypeConv> elementType;

  ArrayTypeConv(int arraySize, std::shared_ptr<TypeConv> elementType)
      : arraySize(arraySize), elementType(elementType) {
    type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    napi_value result;
    void *data;
    napi_create_arraybuffer(env, type->size, &data, &result);
    memcpy(data, value, type->size);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    NAPI_PREAMBLE

    void *data;
    size_t length = 0;
    napi_typedarray_type type;
    NAPI_GUARD(napi_get_typedarray_info(env, value, &type, &length, &data,
                                        nullptr, nullptr)) {
      NAPI_THROW_LAST_ERROR
      return;
    }

    memcpy(result, data, length * getTypedArrayUnitLength(type));
  }
};

class UnionTypeConv : public TypeConv {
public:
  std::vector<std::shared_ptr<TypeConv>> types;

  UnionTypeConv(std::vector<std::shared_ptr<TypeConv>> types) : types(types) {
    // TODO: type should not be pointer
    // type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    return nullptr;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {}
};

class VectorTypeConv : public TypeConv {
public:
  // TypeConv elementType;

  VectorTypeConv() {
    // TODO
    type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    return nullptr;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {}
};

std::shared_ptr<TypeConv> TypeConv::Make(napi_env env, const char **encoding) {
  char first = **encoding;
  bool readonly = false;
  if (first == 'r') {
    readonly = true;
    first = *(++(*encoding));
  }

  switch (first) {
  case 'c':
    (*encoding)++;
    return scharTypeConv;
  case 'i':
    (*encoding)++;
    return sint32TypeConv;
  case 's':
    (*encoding)++;
    return sint16TypeConv;
  case 'l':
  case 'q':
    (*encoding)++;
    return sint64TypeConv;
  case 'C':
    (*encoding)++;
    return uint8TypeConv;
  case 'I':
    (*encoding)++;
    return uint32TypeConv;
  case 'S':
    (*encoding)++;
    return uint16TypeConv;
  case 'L':
  case 'Q':
    (*encoding)++;
    return uint64TypeConv;
  case 'f':
    (*encoding)++;
    return float32TypeConv;
  case 'd':
    (*encoding)++;
    return float64TypeConv;
  case 'B':
    (*encoding)++;
    return boolTypeConv;
  case 'v':
    (*encoding)++;
    return voidTypeConv;
  case '*':
    (*encoding)++;
    return stringTypeConv;
  case '@':
    (*encoding)++;
    return objcObjectTypeConv;
  case '#':
    (*encoding)++;
    return objcClassTypeConv;
  case ':':
    (*encoding)++;
    return selectorTypeConv;
  case '[': {
    char c = **encoding;
    std::string num;
    while ((c = **encoding) >= '0' && c <= '9') {
      num += c;
      (*encoding)++;
    }
    auto arraySize = std::stoi(num);
    auto elementType = TypeConv::Make(env, encoding);
    while (**encoding != ']') {
      (*encoding)++;
    }              // skip array type
    (*encoding)++; // skip ']'
    return std::make_shared<ArrayTypeConv>(
        ArrayTypeConv(arraySize, elementType));
  }
  case '{': {
    std::string structname;
    const char *c = *encoding + 1;
    while (*c != '=') {
      structname += *c;
      c++;
    }
    auto bridgeData = ObjCBridgeData::InstanceData(env);
    // NSLog(@"struct: %s, %d", structname.c_str(),
    //       bridgeData->structOffsets[structname]);
    auto structOffset = bridgeData->structOffsets[structname];
    auto type = typeFromStruct(env, encoding);
    return std::make_shared<StructTypeConv>(StructTypeConv(structOffset, type));
  }
  case '(': {
    std::vector<std::shared_ptr<TypeConv>> types;
    while (**encoding != ')') {
      auto type = TypeConv::Make(env, encoding);
      types.push_back(type);
    }
    (*encoding)++; // skip ')'
    return std::make_shared<UnionTypeConv>(UnionTypeConv(types));
  }
  case 'b': {
    (*encoding)++;
    char c = **encoding;
    while ((c = **encoding) >= '0' && c <= '9') {
      (*encoding)++;
    } // skip bits
    return uint64TypeConv;
  }
  case '^':
    (*encoding)++;
    TypeConv::Make(env, encoding);
    return pointerTypeConv;
  case '?':
    // unknown type
    return pointerTypeConv;
  default:
    std::cout << "getTypeInfo unknown encoding: " << *encoding << std::endl;
    return pointerTypeConv;
  }
}

std::shared_ptr<TypeConv> TypeConv::Make(napi_env env, MDMetadataReader *reader,
                                         MDSectionOffset *offset) {
  auto kind = reader->getTypeKind(*offset);
  bool next = kind & mdTypeFlagNext;
  kind = (MDTypeKind)(kind & ~mdTypeFlagNext);
  *offset += sizeof(MDTypeKind);

  switch (kind) {
  case mdTypeChar: {
    return scharTypeConv;
  }

  case mdTypeSInt: {
    return sint32TypeConv;
  }

  case mdTypeSShort: {
    return sint16TypeConv;
  }

  case mdTypeSLong:
  case mdTypeSInt64: {
    return sint64TypeConv;
  }

  case mdTypeUChar: {
    return ucharTypeConv;
  }

  case mdTypeUInt: {
    return uint32TypeConv;
  }

  case mdTypeUShort: {
    return uint16TypeConv;
  }

  case mdTypeULong:
  case mdTypeUInt64: {
    return uint64TypeConv;
  }

  case mdTypeFloat: {
    return float32TypeConv;
  }

  case mdTypeDouble: {
    return float64TypeConv;
  }

  case mdTypeBool: {
    return boolTypeConv;
  }

  case mdTypeVoid: {
    return voidTypeConv;
  }

  case mdTypeString: {
    return stringTypeConv;
  }

  case mdTypeObject: {
    return objcObjectTypeConv;
  }

  case mdTypeClass: {
    return objcClassTypeConv;
  }

  case mdTypeSelector: {
    return selectorTypeConv;
  }

  case mdTypeArray: {
    auto arraySize = reader->getArraySize(*offset);
    *offset += sizeof(uint16_t);
    auto elementType = TypeConv::Make(env, reader, offset);
    return std::make_shared<ArrayTypeConv>(
        ArrayTypeConv(arraySize, elementType));
  }

  case mdTypeStruct: {
    auto structName = reader->getString(*offset);
    *offset += sizeof(MDSectionOffset);
    auto bridgeData = ObjCBridgeData::InstanceData(env);
    auto structOffset = bridgeData->structOffsets[structName];
    auto type = typeFromStruct(env, reader, structOffset);
    return std::make_shared<StructTypeConv>(StructTypeConv(structOffset, type));
  }

  case mdTypeUnion: {
    bool next = true;
    std::vector<std::shared_ptr<TypeConv>> types;
    while (next) {
      auto typeKind = reader->getTypeKind(*offset);
      next = (typeKind & mdTypeFlagNext) != 0;
      auto type = TypeConv::Make(env, reader, offset);
      types.push_back(type);
    }
    return std::make_shared<UnionTypeConv>(UnionTypeConv(types));
  }

  case mdTypePointer: {
    return pointerTypeConv;
  }

  case mdTypeVector: {
    return pointerTypeConv;
  }

  default:
    std::cout << "getTypeInfo unknown type kind: " << (int)kind << std::endl;
    return pointerTypeConv;
  }
}

} // namespace objc_bridge
