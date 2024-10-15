#include "TypeConv.h"
#include "Block.h"
#include "Class.h"
#include "Closure.h"
#include "Interop.h"
#include "JSObject.h"
#include "Metadata.h"
#include "MetadataReader.h"
#include "ObjCBridge.h"
#include "ffi.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <memory>
#include <objc/runtime.h>
#include <stdbool.h>
#include <string>
#include <vector>

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
                         MDSectionOffset structOffset, bool isUnion) {
  ffi_type *type = new ffi_type;
  type->type = FFI_TYPE_STRUCT;
  type->size = 0;
  type->alignment = 0;
  type->elements = nullptr;

  MDSectionOffset nameOffset = reader->getOffset(structOffset);
  auto name = reader->resolveString(nameOffset);
  bool next = true;
  structOffset += sizeof(MDSectionOffset); // skip name
  structOffset += sizeof(uint16_t);        // skip size

  std::vector<ffi_type *> elements;

  while (next) {
    nameOffset = reader->getOffset(structOffset);
    next = nameOffset & mdSectionOffsetNext;
    nameOffset &= ~mdSectionOffsetNext;
    if (nameOffset == MD_SECTION_OFFSET_NULL) {
      break;
    }
    structOffset += sizeof(MDSectionOffset); // skip name
    if (!isUnion)
      structOffset += sizeof(uint16_t); // skip offset
    ffi_type *elementType = TypeConv::Make(env, reader, &structOffset, 1)->type;
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

  void encode(std::string *encoding) override { *encoding += "v"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_int32(env, value, &val);
    *(int8_t *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "c"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_uint32(env, value, &val);
    *(uint8_t *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "C"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_uint32(env, value, &val);
    *(uint8_t *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "C"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_int32(env, value, &val);
    *(int16_t *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "s"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_uint32(env, value, &val);
    *(uint16_t *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "S"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_int32(env, value, &val);
    *(int32_t *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "i"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_uint32(env, value, &val);
    *(uint32_t *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "I"; }
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
    case napi_undefined:
    case napi_null:
      *(int64_t *)result = 0;
      break;
    case napi_string:
      *(int64_t *)result = 0;
      break;
    default:
      napi_throw_type_error(env, nullptr, "Expected a number or bigint");
      break;
    }
  }

  void encode(std::string *encoding) override { *encoding += "q"; }
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
    case napi_undefined:
    case napi_null:
      *(int64_t *)result = 0;
      break;
    default:
      napi_throw_type_error(env, nullptr, "Expected a number or bigint");
      break;
    }
  }

  void encode(std::string *encoding) override { *encoding += "Q"; }
};

static const std::shared_ptr<UInt64TypeConv> uint64TypeConv =
    std::make_shared<UInt64TypeConv>();

class UInt128TypeConv : public TypeConv {
private:
  ffi_type _type = {.size = 0,
                    .alignment = 0,
                    .type = FFI_TYPE_STRUCT,
                    .elements = (ffi_type *[]){
                        &ffi_type_uint64,
                        &ffi_type_uint64,
                        nullptr,
                    }};

public:
  UInt128TypeConv() { type = &_type; }

  // TODO

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

static const std::shared_ptr<UInt128TypeConv> uint128TypeConv =
    std::make_shared<UInt128TypeConv>();

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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_double(env, value, &val);
    *(float *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "f"; }
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
    napi_coerce_to_number(env, value, &value);
    napi_get_value_double(env, value, &val);
    *(double *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "d"; }
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
    napi_coerce_to_bool(env, value, &value);
    napi_get_value_bool(env, value, &val);
    *(bool *)result = val;
  }

  void encode(std::string *encoding) override { *encoding += "B"; }
};

static const std::shared_ptr<BoolTypeConv> boolTypeConv =
    std::make_shared<BoolTypeConv>();

class PointerTypeConv : public TypeConv {
public:
  std::shared_ptr<TypeConv> pointeeType = nullptr;

  PointerTypeConv() { type = &ffi_type_pointer; }

  PointerTypeConv(std::shared_ptr<TypeConv> pointeeType)
      : pointeeType(pointeeType) {
    type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    return Pointer::create(env, *((void **)value));
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
      if (Pointer::isInstance(env, value)) {
        Pointer *ptr = Pointer::unwrap(env, value);
        *res = ptr->data;
        return;
      }

      if (Reference::isInstance(env, value)) {
        Reference *ref = Reference::unwrap(env, value);
        if (ref->data == nullptr) {
          ref->type = pointeeType;
          ref->data = malloc(pointeeType->type->size);
          if (ref->initValue) {
            napi_value initValue = get_ref_value(env, ref->initValue);
            bool shouldFree;
            ref->type->toNative(env, initValue, ref->data, &shouldFree,
                                &shouldFree);
            napi_delete_reference(env, ref->initValue);
            ref->initValue = nullptr;
          }
        }
        *res = ref->data;
        return;
      }

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

  void encode(std::string *encoding) override { *encoding += "^v"; }
};

static const std::shared_ptr<PointerTypeConv> pointerTypeConv =
    std::make_shared<PointerTypeConv>();

class BlockTypeConv : public TypeConv {
public:
  MDSectionOffset signatureOffset;

  BlockTypeConv(MDSectionOffset signatureOffset)
      : signatureOffset(signatureOffset) {
    type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    return FunctionPointer::wrap(env, *((void **)value), signatureOffset, true);
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
      NAPI_GUARD(napi_unwrap(env, value, res)) {
        NAPI_THROW_LAST_ERROR
        *res = nullptr;
        return;
      }
    }

    case napi_function: {
      void *wrapped;
      status = napi_unwrap(env, value, &wrapped);
      if (status == napi_ok) {
        *res = wrapped;
        return;
      }

      auto bridgeState = ObjCBridgeState::InstanceData(env);
      auto closure = new Closure(bridgeState->metadata, signatureOffset, true);
      closure->env = env;
      closure->func = make_ref(env, value);
      id block = registerBlock(env, closure, value);
      *res = (void *)block;
      return;
    }

    default:
      napi_throw_error(env, nullptr, "Invalid block pointer type");
      *res = nullptr;
      return;
    }
  }

  void encode(std::string *encoding) override { *encoding += "^v"; }
};

void function_pointer_finalize(napi_env env, void *finalize_data,
                               void *finalize_hint) {
  Closure *closure = (Closure *)finalize_hint;
  delete closure;
}

class FunctionPointerTypeConv : public TypeConv {
public:
  MDSectionOffset signatureOffset;

  FunctionPointerTypeConv(MDSectionOffset signatureOffset)
      : signatureOffset(signatureOffset) {
    type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    return FunctionPointer::wrap(env, *((void **)value), signatureOffset, false);
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
      FunctionReference *ref = FunctionReference::unwrap(env, value);
      *res = ref->getFunctionPointer(signatureOffset);
    }

    case napi_function: {
      void *wrapped;
      status = napi_unwrap(env, value, &wrapped);
      if (status == napi_ok) {
        *res = wrapped;
        return;
      }

      auto bridgeState = ObjCBridgeState::InstanceData(env);
      auto closure = new Closure(bridgeState->metadata, signatureOffset, true);
      closure->env = env;
      closure->func = make_ref(env, value);
      napi_remove_wrap(env, value, nullptr);
      napi_ref ref;
      napi_wrap(env, value, closure->fnptr, function_pointer_finalize, closure,
                &ref);
      *res = (void *)closure->fnptr;
      return;
    }

    default:
      napi_throw_error(env, nullptr, "Invalid block pointer type");
      *res = nullptr;
      return;
    }
  }

  void encode(std::string *encoding) override { *encoding += "^v"; }
};

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

  void encode(std::string *encoding) override { *encoding += "*"; }
};

static const std::shared_ptr<StringTypeConv> stringTypeConv =
    std::make_shared<StringTypeConv>();

class ObjCObjectTypeConv : public TypeConv {
public:
  MDSectionOffset classOffset = 0;
  std::vector<MDSectionOffset> protocolOffsets;

  ObjCObjectTypeConv() { type = &ffi_type_pointer; }

  ObjCObjectTypeConv(MDSectionOffset classOffset,
                     std::vector<MDSectionOffset> protocolOffsets)
      : classOffset(classOffset), protocolOffsets(protocolOffsets) {
    type = &ffi_type_pointer;
  }

  ObjCObjectTypeConv(std::vector<MDSectionOffset> protocolOffsets)
      : protocolOffsets(protocolOffsets) {
    type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    id obj = *((id *)value);
    if (obj == nil) {
      napi_value null;
      napi_get_null(env, &null);
      return null;
    }

    auto bridgeState = ObjCBridgeState::InstanceData(env);

    ObjectOwnership ownership;
    if ((flags & kReturnOwned) != 0) {
      ownership = kOwnedObject;
    } else {
      ownership = kUnownedObject;
    }

    auto object = bridgeState->getObject(env, obj, ownership, classOffset,
                                         &protocolOffsets);
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
      size_t len = 0;
      NAPI_GUARD(napi_get_value_string_utf8(env, value, nullptr, len, &len)) {
        NAPI_THROW_LAST_ERROR
        return;
      }

      char *str = (char *)malloc(len + 1);

      NAPI_GUARD(napi_get_value_string_utf8(env, value, str, len + 1, &len)) {
        NAPI_THROW_LAST_ERROR
        ::free(str);
        return;
      }

      str[len] = '\0';

      *res = [[[NSString alloc] initWithUTF8String:str] autorelease];

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
    case napi_function: {
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
          napi_value global, jsObject, valueConstructor;
          napi_get_global(env, &global);
          napi_get_named_property(env, global, "Object", &jsObject);
          napi_get_named_property(env, value, "constructor", &valueConstructor);
          bool isEqual;
          napi_strict_equals(env, jsObject, valueConstructor, &isEqual);

          if (!isEqual) {
            auto bridgeState = ObjCBridgeState::InstanceData(env);
            *res = jsObjectToId(env, value);
            return;
          }

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
            if (obj != nil)
              [(*res) setObject:obj forKey:[NSString stringWithUTF8String:buf]];
          }

          return;
        }
      }

      break;
    }

    default:
      napi_throw_error(env, nullptr, "Invalid object type");
      *res = nil;
      break;
    }
  }

  void free(napi_env env, void *value) override {
    id obj = *((id *)value);
    auto bridgeState = ObjCBridgeState::InstanceData(env);
    bridgeState->unregisterObject(obj);
  }

  void encode(std::string *encoding) override { *encoding += "@"; }
};

static const std::shared_ptr<ObjCObjectTypeConv> objcObjectTypeConv =
    std::make_shared<ObjCObjectTypeConv>();

class ObjCInstanceObjectTypeConv : public ObjCObjectTypeConv {
public:
  ObjCInstanceObjectTypeConv() {
    type = &ffi_type_pointer;
    kind = mdTypeInstanceObject;
  }
};

static const auto objcInstanceObjectTypeConv =
    std::make_shared<ObjCInstanceObjectTypeConv>();

class ObjCNSStringObjectTypeConv : public TypeConv {
public:
  ObjCNSStringObjectTypeConv() { type = &ffi_type_pointer; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    NSString *str = *((NSString **)value);

    if (str == nullptr) {
      return nullptr;
    }

    napi_value result;
    napi_create_string_utf8(env, [str UTF8String], [str length], &result);
    return result;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    ObjCObjectTypeConv typeConv;
    typeConv.toNative(env, value, result, shouldFree, shouldFreeAny);
  }

  void encode(std::string *encoding) override { *encoding += "@"; }
};

static const std::shared_ptr<ObjCNSStringObjectTypeConv>
    objcNSStringObjectTypeConv = std::make_shared<ObjCNSStringObjectTypeConv>();

class ObjCClassTypeConv : public TypeConv {
public:
  ObjCClassTypeConv() { type = &ffi_type_pointer; }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    Class cls = *((Class *)value);

    if (cls == nullptr) {
      return nullptr;
    }

    auto bridgeState = ObjCBridgeState::InstanceData(env);

    ObjCClass *bridgedCls = bridgeState->classesByPointer[cls];

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

  void encode(std::string *encoding) override { *encoding += "#"; }
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

    napi_valuetype type;
    napi_typeof(env, value, &type);

    switch (type) {
    case napi_string:
      NAPI_GUARD(napi_get_value_string_utf8(env, value, selector_name_buf, 256,
                                            NULL)) {
        NAPI_THROW_LAST_ERROR
        *res = NULL;
        return;
      }
      *res = sel_registerName(selector_name_buf);
      break;

    case napi_undefined:
    case napi_null:
      *res = NULL;
      return;

    default:
      napi_throw_error(env, nullptr, "Invalid selector type");
      *res = NULL;
      return;
    }
  }

  void encode(std::string *encoding) override { *encoding += ":"; }
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

  // ~StructTypeConv() { delete type; }

  inline StructInfo *getInfo(napi_env env) {
    if (!structInfoSearched) {
      auto bridgeState = ObjCBridgeState::InstanceData(env);
      info = bridgeState->getStructInfo(env, structOffset);
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

    if (type == napi_null || type == napi_undefined) {
      auto info = getInfo(env);

      if (info == nullptr) {
        napi_throw_type_error(env, "TypeError",
                              "Invalid struct type, must be Struct Object, "
                              "Struct Object Descriptor or TypedArray");
        return;
      }

      memset(result, 0, info->size);
      return;
    } else if (type != napi_object) {
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

    // Serialize directly to previously allocated memory
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
    
    if (Pointer::isInstance(env, value)) {
      Pointer *ptr = Pointer::unwrap(env, value);
      memcpy(result, ptr->data, type->size);
      return;
    }

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

  void encode(std::string *encoding) override {
    *encoding += "[";
    *encoding += arraySize;
    elementType->encode(encoding);
    *encoding += "]";
  }
};

class VectorTypeConv : public TypeConv {
public:
  // TypeConv elementType;

  VectorTypeConv() {
    // TODO
    type = &ffi_type_pointer;
  }

  napi_value toJS(napi_env env, void *value, uint32_t flags) override {
    NSLog(@"VectorTypeConv toJS: TODO");
    return nullptr;
  }

  void toNative(napi_env env, napi_value value, void *result, bool *shouldFree,
                bool *shouldFreeAny) override {
    NSLog(@"VectorTypeConv toNative: TODO");
  }
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
    auto bridgeState = ObjCBridgeState::InstanceData(env);
    // NSLog(@"struct: %s, %d", structname.c_str(),
    //       bridgeState->structOffsets[structname]);
    auto structOffset = bridgeState->structOffsets[structname];
    auto type = typeFromStruct(env, encoding);
    return std::make_shared<StructTypeConv>(StructTypeConv(structOffset, type));
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
                                         MDSectionOffset *offset,
                                         uint8_t opaquePointers) {
  auto kind = reader->getTypeKind(*offset);
  bool next = kind & mdTypeFlagNext;
  kind = (MDTypeKind)((kind & ~mdTypeFlagNext) & ~mdTypeFlagVariadic);
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

  case mdTypeUInt8:
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

  case mdTypeAnyObject: {
    return objcObjectTypeConv;
  }

  case mdTypeInstanceObject: {
    return objcInstanceObjectTypeConv;
  }

  case mdTypeClassObject: {
    auto classOffset = reader->getOffset(*offset);
    *offset += sizeof(MDSectionOffset);
    bool next = (classOffset & mdSectionOffsetNext) != 0;
    classOffset &= ~mdSectionOffsetNext;
    if (classOffset == MD_SECTION_OFFSET_NULL) {
      classOffset = 0;
    } else {
      classOffset += reader->classesOffset;
    }
    std::vector<MDSectionOffset> protocolOffsets;
    while (next) {
      auto protocolOffset = reader->getOffset(*offset);
      *offset += sizeof(MDSectionOffset);
      next = (protocolOffset & mdSectionOffsetNext) != 0;
      protocolOffset &= ~mdSectionOffsetNext;
      if (protocolOffset == MD_SECTION_OFFSET_NULL) {
        protocolOffset = 0;
      } else {
        protocolOffset += reader->protocolsOffset;
        protocolOffsets.push_back(protocolOffset);
      }
    }
    return std::make_shared<ObjCObjectTypeConv>(classOffset, protocolOffsets);
  }

  case mdTypeProtocolObject: {
    std::vector<MDSectionOffset> protocolOffsets;
    bool next = true;
    while (next) {
      auto protocolOffset = reader->getOffset(*offset);
      *offset += sizeof(MDSectionOffset);
      next = (protocolOffset & mdSectionOffsetNext) != 0;
      protocolOffset &= ~mdSectionOffsetNext;
      if (protocolOffset == MD_SECTION_OFFSET_NULL) {
        protocolOffset = 0;
      } else {
        protocolOffset += reader->protocolsOffset;
        protocolOffsets.push_back(protocolOffset);
      }
    }
    return std::make_shared<ObjCObjectTypeConv>(protocolOffsets);
  }

  case mdTypeNSStringObject: {
    return objcNSStringObjectTypeConv;
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
    auto structOffset = reader->getOffset(*offset);
    *offset += sizeof(MDSectionOffset);
    auto isUnion = (structOffset & mdSectionOffsetNext) != 0;
    structOffset &= ~mdSectionOffsetNext;
    if (structOffset == MD_SECTION_OFFSET_NULL) {
      return pointerTypeConv;
    }
    structOffset += isUnion ? reader->unionsOffset : reader->structsOffset;
    auto structName = reader->getString(structOffset);
    auto bridgeState = ObjCBridgeState::InstanceData(env);
    auto type = opaquePointers == 2
                    ? nullptr
                    : typeFromStruct(env, reader, structOffset, isUnion);
    return std::make_shared<StructTypeConv>(structOffset, type);
  }

  case mdTypePointer: {
    auto pointeeType =
        TypeConv::Make(env, reader, offset, opaquePointers == 1 ? 2 : 0);
    return std::make_shared<PointerTypeConv>(pointeeType);
  }

  case mdTypeOpaquePointer: {
    return pointerTypeConv;
  }

  case mdTypeVector: {
    // TODO
    return std::make_shared<VectorTypeConv>();
  }

  case mdTypeBlock: {
    auto blockSignature = reader->getOffset(*offset) + reader->signaturesOffset;
    *offset += sizeof(MDSectionOffset);
    return std::make_shared<BlockTypeConv>(blockSignature);
  }

  case mdTypeFunctionPointer: {
    auto blockSignature = reader->getOffset(*offset) + reader->signaturesOffset;
    *offset += sizeof(MDSectionOffset);
    return std::make_shared<FunctionPointerTypeConv>(blockSignature);
  }

  case mdTypeUInt128: {
    return uint128TypeConv;
  }

  case mdTypeExtVector: {
    // TODO
    return std::make_shared<VectorTypeConv>();
  }

  case mdTypeComplex: {
    // TODO
    return std::make_shared<VectorTypeConv>();
  }

  default:
    std::cout << "getTypeInfo unknown type kind: " << (int)kind << std::endl;
    return pointerTypeConv;
  }
}

} // namespace objc_bridge
