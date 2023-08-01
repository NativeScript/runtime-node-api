#include "type_conv.h"
#include "Metadata.h"
#include "bridged_class.h"
#include "ffi.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include "objc_bridge_data.h"

#import <Foundation/Foundation.h>
#include <stdbool.h>

namespace objc_bridge {

ffi_type *typeFromStruct(const char **encoding) {
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
    ffi_type *elementType = getTypeInfo(encoding).type;
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

ffi_type *typeFromStruct(MDMetadataReader *reader, MDSectionOffset *offset) {
  ffi_type *type = new ffi_type;
  type->type = FFI_TYPE_STRUCT;
  type->size = 0;
  type->alignment = 0;
  type->elements = nullptr;

  MDSectionOffset structOffset = reader->getOffset(*offset);
  *offset += sizeof(MDSectionOffset); // skip typeKind

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
    ffi_type *elementType = getTypeInfo(reader, &structOffset).type;
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

JS_FROM_NATIVE(void) { return nullptr; }

JS_FROM_NATIVE(objc_object) {
  id obj = *((id *)value);
  auto bridgeData = ObjCBridgeData::InstanceData(env);
  auto object = bridgeData->getObject(env, obj);
  if (object == nullptr) {
    napi_value null;
    napi_get_null(env, &null);
    return null;
  }
  return object;
}

JS_FROM_NATIVE(objc_class) {
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

JS_FROM_NATIVE(uint64) {
  napi_value result;
  uint64_t val = *((uint64_t *)value);
  napi_create_int64(env, (int64_t)val, &result);
  return result;
}

JS_FROM_NATIVE(bool) {
  napi_value result;
  bool val = *((bool *)value);
  napi_get_boolean(env, val, &result);
  return result;
}

JS_FROM_NATIVE(char) {
  napi_value result;
  char val = *((char *)value);
  napi_create_int32(env, (int32_t)val, &result);
  return result;
}

JS_FROM_NATIVE(sint) {
  napi_value result;
  int val = *((int *)value);
  napi_create_int32(env, (int32_t)val, &result);
  return result;
}

JS_FROM_NATIVE(sshort) {
  napi_value result;
  short val = *((short *)value);
  napi_create_int32(env, (int32_t)val, &result);
  return result;
}

JS_FROM_NATIVE(sint64) {
  napi_value result;
  int64_t val = *((int64_t *)value);
  napi_create_int64(env, (int64_t)val, &result);
  return result;
}

JS_FROM_NATIVE(uchar) {
  napi_value result;
  unsigned char val = *((unsigned char *)value);
  napi_create_uint32(env, (uint32_t)val, &result);
  return result;
}

JS_FROM_NATIVE(uint) {
  napi_value result;
  unsigned int val = *((unsigned int *)value);
  napi_create_uint32(env, (uint32_t)val, &result);
  return result;
}

JS_FROM_NATIVE(ushort) {
  napi_value result;
  unsigned short val = *((unsigned short *)value);
  napi_create_uint32(env, (uint32_t)val, &result);
  return result;
}

JS_FROM_NATIVE(ulong) {
  napi_value result;
  unsigned long val = *((unsigned long *)value);
  napi_create_int64(env, (int64_t)val, &result);
  return result;
}

JS_FROM_NATIVE(float) {
  napi_value result;
  float val = *((float *)value);
  napi_create_double(env, (double)val, &result);
  return result;
}

JS_FROM_NATIVE(double) {
  napi_value result;
  double val = *((double *)value);
  napi_create_double(env, (double)val, &result);
  return result;
}

JS_FROM_NATIVE(uint8) {
  napi_value result;
  uint8_t val = *((uint8_t *)value);
  napi_create_uint32(env, (uint32_t)val, &result);
  return result;
}

JS_FROM_NATIVE(string) {
  napi_value result;
  char *val = *((char **)value);
  napi_create_string_utf8(env, val, NAPI_AUTO_LENGTH, &result);
  return result;
}

JS_FROM_NATIVE(pointer) {
  napi_value result;
  void *val = *((void **)value);
  napi_create_external(env, val, nullptr, nullptr, &result);
  return result;
}

JS_FROM_NATIVE(selector) {
  napi_value result;
  SEL val = *((SEL *)value);
  napi_create_string_utf8(env, sel_getName(val), NAPI_AUTO_LENGTH, &result);
  return result;
}

JS_FROM_NATIVE(struct) {
  napi_value result;
  void *data;
  napi_create_arraybuffer(env, type->size, &data, &result);
  memcpy(data, value, type->size);
  return result;
}

JS_TO_NATIVE(void) {
  void **res = (void **)result;
  *res = nullptr;
}

JS_TO_NATIVE(objc_object) {
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
      free(str);
      return;
    }

    str[len] = '\0';

    *res = [NSString stringWithUTF8String:str];

    free(str);
    break;
  }

  case napi_number: {
    double val = 0;
    NAPI_GUARD(napi_get_value_double(env, value, &val)) {
      NAPI_THROW_LAST_ERROR
      return;
    }
    *res = [NSNumber numberWithDouble:val];
    // *shouldFree = true;
    // *shouldFreeAny = true;
    break;
  }

  case napi_boolean: {
    bool val = false;
    NAPI_GUARD(napi_get_value_bool(env, value, &val)) {
      NAPI_THROW_LAST_ERROR
      return;
    }
    *res = [NSNumber numberWithBool:val];
    // *shouldFree = true;
    // *shouldFreeAny = true;
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
    // *shouldFree = true;
    // *shouldFreeAny = true;
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
          js_to_objc_object(env, elem, (void *)&obj, shouldFree, shouldFreeAny);
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
          js_to_objc_object(env, elem, (void *)&obj, shouldFree, shouldFreeAny);
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

JS_TO_NATIVE(string) {
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
    free(*res);
    return;
  }

  (*res)[len] = '\0';

  *shouldFree = true;
  *shouldFreeAny = true;
}

JS_TO_NATIVE(char) {
  NAPI_PREAMBLE

  char *res = (char *)result;
  int32_t val = 0;

  NAPI_GUARD(napi_get_value_int32(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }

  *res = (char)val;
}

JS_TO_NATIVE(sint) {
  NAPI_PREAMBLE

  int32_t *res = (int32_t *)result;

  NAPI_GUARD(napi_get_value_int32(env, value, res)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }
}

JS_TO_NATIVE(sshort) {
  NAPI_PREAMBLE

  int16_t *res = (int16_t *)result;
  int32_t val = 0;

  NAPI_GUARD(napi_get_value_int32(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }

  *res = (int16_t)val;
}

JS_TO_NATIVE(sint64) {
  NAPI_PREAMBLE

  int64_t *res = (int64_t *)result;

  napi_valuetype type;
  napi_typeof(env, value, &type);

  if (type == napi_bigint) {
    bool lossless = false;
    NAPI_GUARD(napi_get_value_bigint_int64(env, value, res, &lossless)) {
      NAPI_THROW_LAST_ERROR
      *res = 0;
      return;
    }
  } else {
    NAPI_GUARD(napi_get_value_int64(env, value, res)) {
      NAPI_THROW_LAST_ERROR
      *res = 0;
      return;
    }
  }
}

JS_TO_NATIVE(uchar) {
  NAPI_PREAMBLE

  uint8_t *res = (uint8_t *)result;
  uint32_t val = 0;

  NAPI_GUARD(napi_get_value_uint32(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }

  *res = (uint8_t)val;
}

JS_TO_NATIVE(uint) {
  NAPI_PREAMBLE

  uint32_t *res = (uint32_t *)result;

  *res = 0;

  NAPI_GUARD(napi_get_value_uint32(env, value, res)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }
}

JS_TO_NATIVE(ushort) {
  NAPI_PREAMBLE

  uint16_t *res = (uint16_t *)result;
  uint32_t val = 0;

  NAPI_GUARD(napi_get_value_uint32(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }

  *res = (uint16_t)val;
}

JS_TO_NATIVE(ulong) {
  NAPI_PREAMBLE

  uint64_t *res = (uint64_t *)result;

  napi_valuetype type;
  napi_typeof(env, value, &type);

  if (type == napi_bigint) {
    bool lossless = false;
    NAPI_GUARD(napi_get_value_bigint_uint64(env, value, res, &lossless)) {
      NAPI_THROW_LAST_ERROR
      *res = 0;
      return;
    }
  } else {
    int64_t val = 0;
    NAPI_GUARD(napi_get_value_int64(env, value, &val)) {
      NAPI_THROW_LAST_ERROR
      *res = 0;
      return;
    }
    *res = (uint64_t)val;
  }
}

JS_TO_NATIVE(float) {
  NAPI_PREAMBLE

  float *res = (float *)result;
  double val = 0;

  NAPI_GUARD(napi_get_value_double(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0.;
    return;
  }

  *res = (float)val;
}

JS_TO_NATIVE(double) {
  NAPI_PREAMBLE

  double *res = (double *)result;

  *res = 0;

  NAPI_GUARD(napi_get_value_double(env, value, res)) {
    NAPI_THROW_LAST_ERROR
    *res = 0.;
    return;
  }
}

JS_TO_NATIVE(uint8) {
  NAPI_PREAMBLE

  uint8_t *res = (uint8_t *)result;
  uint32_t val = 0;

  NAPI_GUARD(napi_get_value_uint32(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }

  *res = (uint8_t)val;
}

JS_TO_NATIVE(bool) {
  NAPI_PREAMBLE

  bool *res = (bool *)result;

  napi_coerce_to_bool(env, value, &value);

  NAPI_GUARD(napi_get_value_bool(env, value, res)) {
    NAPI_THROW_LAST_ERROR
    *res = false;
    return;
  }
}

char selector_buf[256];

JS_TO_NATIVE(selector) {
  NAPI_PREAMBLE

  SEL *res = (SEL *)result;

  NAPI_GUARD(napi_get_value_string_utf8(env, value, selector_buf, 256, NULL)) {
    NAPI_THROW_LAST_ERROR
    *res = NULL;
    return;
  }

  *res = sel_registerName(selector_buf);
}

JS_TO_NATIVE(pointer) {
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

JS_TO_NATIVE(struct) {
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

JS_FREE(objc_object) {
  id res = (id)value;
  if (res != nil) {
    [res release];
  }
}

JS_FREE(string) {
  if (value != nullptr) {
    free(value);
  }
}

TypeInfo getTypeInfo(const char **encoding) {
  char first = **encoding;
  if (first == 'r') {
    first = *(++(*encoding));
  }
  switch (first) {
  case 'c':
    (*encoding)++;
    return {&ffi_type_schar, js_from_char, js_to_char, nullptr};
  case 'i':
    (*encoding)++;
    return {&ffi_type_sint, js_from_sint, js_to_sint, nullptr};
  case 's':
    (*encoding)++;
    return {&ffi_type_sshort, js_from_sshort, js_to_sshort, nullptr};
  case 'l':
    (*encoding)++;
    return {&ffi_type_slong, js_from_sint64, js_to_sint64, nullptr};
  case 'q':
    (*encoding)++;
    return {&ffi_type_sint64, js_from_sint64, js_to_sint64, nullptr};
  case 'C':
    (*encoding)++;
    return {&ffi_type_uchar, js_from_uchar, js_to_uchar, nullptr};
  case 'I':
    (*encoding)++;
    return {&ffi_type_uint, js_from_uint, js_to_uint, nullptr};
  case 'S':
    (*encoding)++;
    return {&ffi_type_ushort, js_from_ushort, js_to_ushort, nullptr};
  case 'L':
    (*encoding)++;
    return {&ffi_type_ulong, js_from_ulong, js_to_ulong, nullptr};
  case 'Q':
    (*encoding)++;
    return {&ffi_type_uint64, js_from_uint64, js_to_ulong, nullptr};
  case 'f':
    (*encoding)++;
    return {&ffi_type_float, js_from_float, js_to_float, nullptr};
  case 'd':
    (*encoding)++;
    return {&ffi_type_double, js_from_double, js_to_double, nullptr};
  case 'B':
    (*encoding)++;
    return {&ffi_type_uint8, js_from_bool, js_to_bool, nullptr};
  case 'v':
    (*encoding)++;
    return {&ffi_type_void, js_from_void, js_to_void, nullptr};
  case '*':
    (*encoding)++;
    return {&ffi_type_pointer, js_from_string, js_to_string, js_free_string};
  case '@':
    (*encoding)++;
    return {&ffi_type_pointer, js_from_objc_object, js_to_objc_object,
            js_free_objc_object};
  case '#':
    (*encoding)++;
    return {&ffi_type_pointer, js_from_objc_class, js_to_objc_object,
            js_free_objc_object};
  case ':':
    (*encoding)++;
    return {&ffi_type_pointer, js_from_selector, js_to_selector, nullptr};
  case '[': {
    char c = **encoding;
    while ((c = **encoding) >= '0' && c <= '9') {
      (*encoding)++;
    } // skip array size
    while (**encoding != ']') {
      (*encoding)++;
    }              // skip array type
    (*encoding)++; // skip ']'
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  }
  case '{':
    return {typeFromStruct(encoding), js_from_struct, js_to_struct, nullptr};
  case '(': {
    while (**encoding != ')') {
      (*encoding)++;
    }              // skip types
    (*encoding)++; // skip ')'
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  }
  case 'b': {
    (*encoding)++;
    char c = **encoding;
    while ((c = **encoding) >= '0' && c <= '9') {
      (*encoding)++;
    } // skip bits
    return {&ffi_type_uint64, js_from_uint64, js_to_ulong, nullptr};
  }
  case '^':
    (*encoding)++;
    // we don't need pointee type
    getTypeInfo(encoding);
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  case '?':
    // unknown type
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  default:
    std::cout << "getTypeInfo unknown encoding: " << *encoding << std::endl;
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  }
}

TypeInfo getTypeInfo(MDMetadataReader *reader, MDSectionOffset *offset) {
  auto kind = reader->getTypeKind(*offset);
  bool next = kind & mdTypeFlagNext;
  kind = (MDTypeKind)(kind & ~mdTypeFlagNext);
  *offset += sizeof(MDTypeKind);

  switch (kind) {
  case mdTypeChar: {
    return {&ffi_type_schar, js_from_char, js_to_char, nullptr};
  }

  case mdTypeSInt: {
    return {&ffi_type_sint, js_from_sint, js_to_sint, nullptr};
  }

  case mdTypeSShort: {
    return {&ffi_type_sshort, js_from_sshort, js_to_sshort, nullptr};
  }

  case mdTypeSLong: {
    return {&ffi_type_slong, js_from_sint64, js_to_sint64, nullptr};
  }

  case mdTypeSInt64: {
    return {&ffi_type_sint64, js_from_sint64, js_to_sint64, nullptr};
  }

  case mdTypeUChar: {
    return {&ffi_type_uchar, js_from_uchar, js_to_uchar, nullptr};
  }

  case mdTypeUInt: {
    return {&ffi_type_uint, js_from_uint, js_to_uint, nullptr};
  }

  case mdTypeUShort: {
    return {&ffi_type_ushort, js_from_ushort, js_to_ushort, nullptr};
  }

  case mdTypeULong: {
    return {&ffi_type_ulong, js_from_ulong, js_to_ulong, nullptr};
  }

  case mdTypeUInt64: {
    return {&ffi_type_uint64, js_from_uint64, js_to_ulong, nullptr};
  }

  case mdTypeFloat: {
    return {&ffi_type_float, js_from_float, js_to_float, nullptr};
  }

  case mdTypeDouble: {
    return {&ffi_type_double, js_from_double, js_to_double, nullptr};
  }

  case mdTypeBool: {
    return {&ffi_type_uint8, js_from_bool, js_to_bool, nullptr};
  }

  case mdTypeVoid: {
    return {&ffi_type_void, js_from_void, js_to_void, nullptr};
  }

  case mdTypeString: {
    return {&ffi_type_pointer, js_from_string, js_to_string, js_free_string};
  }

  case mdTypeObject: {
    return {&ffi_type_pointer, js_from_objc_object, js_to_objc_object,
            js_free_objc_object};
  }

  case mdTypeClass: {
    return {&ffi_type_pointer, js_from_objc_class, js_to_objc_object,
            js_free_objc_object};
  }

  case mdTypeSelector: {
    return {&ffi_type_pointer, js_from_selector, js_to_selector, nullptr};
  }

  case mdTypeArray: {
    auto elementType = getTypeInfo(reader, offset);
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  }

  case mdTypeStruct: {
    auto type = typeFromStruct(reader, offset);
    return {type, js_from_struct, js_to_struct, nullptr};
  }

  case mdTypeUnion: {
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  }

  case mdTypePointer: {
    // auto elementType = getTypeInfo(reader, offset);
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  }

  default:
    std::cout << "getTypeInfo unknown type kind: " << (int)kind << std::endl;
    return {&ffi_type_pointer, js_from_pointer, js_to_pointer, nullptr};
  }
}

} // namespace objc_bridge
