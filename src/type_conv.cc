#include "type_conv.h"
#include "bridged_class.h"
#include "node_api_util.h"
#include "objc_bridge_data.h"

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
    ffi_type *elementType = getTypeForEncoding(encoding);
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

ffi_type *getTypeForEncoding(const char **encoding) {
  char first = **encoding;
  if (first == 'r') {
    first = *(++(*encoding));
  }
  switch (first) {
  case 'c':
    (*encoding)++;
    return &ffi_type_schar;
  case 'i':
    (*encoding)++;
    return &ffi_type_sint;
  case 's':
    (*encoding)++;
    return &ffi_type_sshort;
  case 'l':
    (*encoding)++;
    return &ffi_type_slong;
  case 'q':
    (*encoding)++;
    return &ffi_type_sint64;
  case 'C':
    (*encoding)++;
    return &ffi_type_uchar;
  case 'I':
    (*encoding)++;
    return &ffi_type_uint;
  case 'S':
    (*encoding)++;
    return &ffi_type_ushort;
  case 'L':
    (*encoding)++;
    return &ffi_type_ulong;
  case 'Q':
    (*encoding)++;
    return &ffi_type_uint64;
  case 'f':
    (*encoding)++;
    return &ffi_type_float;
  case 'd':
    (*encoding)++;
    return &ffi_type_double;
  case 'B':
    (*encoding)++;
    return &ffi_type_uint8;
  case 'v':
    (*encoding)++;
    return &ffi_type_void;
  case '*':
    (*encoding)++;
    return &ffi_type_pointer;
  case '@':
    (*encoding)++;
    return &ffi_type_pointer;
  case '#':
    (*encoding)++;
    return &ffi_type_pointer;
  case ':':
    (*encoding)++;
    return &ffi_type_pointer;
  case '[': {
    char c = **encoding;
    while ((c = **encoding) >= '0' && c <= '9') {
      (*encoding)++;
    } // skip array size
    while (**encoding != ']') {
      (*encoding)++;
    }              // skip array type
    (*encoding)++; // skip ']'
    return &ffi_type_pointer;
  }
  case '{':
    return typeFromStruct(encoding);
  case '(': {
    while (**encoding != ')') {
      (*encoding)++;
    }              // skip types
    (*encoding)++; // skip ')'
    return &ffi_type_pointer;
  }
  case 'b': {
    (*encoding)++;
    char c = **encoding;
    while ((c = **encoding) >= '0' && c <= '9') {
      (*encoding)++;
    } // skip bits
    return &ffi_type_uint64;
  }
  case '^':
    (*encoding)++;
    // we don't need pointee type
    getTypeForEncoding(encoding);
    return &ffi_type_pointer;
  case '?':
    // unknown type
    return &ffi_type_pointer;
  default:
    std::cout << "getTypeForEncoding unknown encoding: " << *encoding
              << std::endl;
    return &ffi_type_pointer;
  }
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

JS_FROM_NATIVE(slong) {
  napi_value result;
  long val = *((long *)value);
  napi_create_int64(env, (int64_t)val, &result);
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

js_from_native getConvFromNative(const char *encoding) {
  char first = *encoding;
  if (first == 'r') {
    first = *(++encoding);
  }
  switch (first) {
  case 'c':
    return js_from_char;
  case 'i':
    return js_from_sint;
  case 's':
    return js_from_sshort;
  case 'l':
    return js_from_slong;
  case 'q':
    return js_from_sint64;
  case 'C':
    return js_from_uchar;
  case 'I':
    return js_from_uint;
  case 'S':
    return js_from_ushort;
  case 'L':
    return js_from_ulong;
  case 'Q':
    return js_from_uint64;
  case 'f':
    return js_from_float;
  case 'd':
    return js_from_double;
  case 'B':
    return js_from_uint8;
  case 'v':
    return js_from_void;
  case '*':
    return js_from_string;
  case '@':
    return js_from_objc_object;
  case '#':
    return js_from_objc_class;
  case ':':
    return js_from_selector;
    //    case '[':
    //      return js_from_pointer;
  case '{':
    return js_from_struct;
    //    case '(':
    //      return js_from_pointer;
  case 'b':
    return js_from_ulong;
  case '^':
    return js_from_pointer;
  case '?':
    return js_from_pointer;
  default:
    std::cout << "js_from_native unknown encoding: " << encoding << std::endl;
    return js_from_void;
  }
}

JS_TO_NATIVE(void) {
  void **res = (void **)result;
  *res = nullptr;
}

Class cls_NSString = objc_getClass("NSString");
SEL sel_stringWithUTF8String = sel_registerName("stringWithUTF8String:");
typedef id (*msg_stringWithUTF8String_)(Class, SEL, const char *);

JS_TO_NATIVE(objc_object) {
  NAPI_PREAMBLE

  id *res = (id *)result;

  napi_valuetype type;
  napi_typeof(env, value, &type);
  if (type == napi_null || type == napi_undefined) {
    *res = nil;
    return;
  }

  if (type == napi_string) {
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

    *res = ((msg_stringWithUTF8String_)objc_msgSend)(
        cls_NSString, sel_stringWithUTF8String, str);

    free(str);

    // TODO: Causes some weird crashes
    // *shouldFree = true;
    // *shouldFreeAny = true;

    return;
  } else if (type == napi_null || type == napi_undefined) {
    *res = nil;
    return;
  }

  NAPI_GUARD(napi_unwrap(env, value, (void **)res)) {
    *res = nil;
    return;
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

  *res = 0;

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

JS_TO_NATIVE(slong) {
  NAPI_PREAMBLE

  int64_t *res = (int64_t *)result;

  *res = 0;

  NAPI_GUARD(napi_get_value_int64(env, value, res)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }
}

JS_TO_NATIVE(sint64) {
  NAPI_PREAMBLE

  int64_t *res = (int64_t *)result;

  *res = 0;

  NAPI_GUARD(napi_get_value_int64(env, value, res)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
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
  int64_t val = 0;

  NAPI_GUARD(napi_get_value_int64(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }

  *res = (uint64_t)val;
}

JS_TO_NATIVE(uint64) {
  NAPI_PREAMBLE

  uint64_t *res = (uint64_t *)result;
  int64_t val = 0;

  NAPI_GUARD(napi_get_value_int64(env, value, &val)) {
    NAPI_THROW_LAST_ERROR
    *res = 0;
    return;
  }

  *res = (uint64_t)val;
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

  NAPI_GUARD(napi_get_value_external(env, value, res)) {
    NAPI_THROW_LAST_ERROR
    *res = NULL;
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

js_to_native getConvToNative(const char *encoding) {
  char first = *encoding;
  if (first == 'r') {
    first = *(++encoding);
  }
  switch (first) {
  case 'c':
    return js_to_char;
  case 'i':
    return js_to_sint;
  case 's':
    return js_to_sshort;
  case 'l':
    return js_to_slong;
  case 'q':
    return js_to_sint64;
  case 'C':
    return js_to_uchar;
  case 'I':
    return js_to_uint;
  case 'S':
    return js_to_ushort;
  case 'L':
    return js_to_ulong;
  case 'Q':
    return js_to_uint64;
  case 'f':
    return js_to_float;
  case 'd':
    return js_to_double;
  case 'B':
    return js_to_bool;
  case 'v':
    return js_to_void;
  case '*':
    return js_to_string;
  case '@':
    return js_to_objc_object;
  case '#':
    return js_to_objc_object;
  case ':':
    return js_to_selector;
    //    case '[':
    //      return js_to_pointer;
  case '{':
    return js_to_struct;
    //    case '(':
    //      return js_to_pointer;
  case 'b':
    return js_to_uint64;
  case '^':
    return js_to_pointer;
  case '?':
    return js_to_pointer;
  default:
    std::cout << "js_to_native unknown encoding: " << encoding << std::endl;
    return js_to_void;
  }
}

SEL sel_release = sel_registerName("release");
typedef void (*msg_release)(id, SEL);

JS_FREE(objc_object) {
  id res = (id)value;
  if (res != nil) {
    ((msg_release)objc_msgSend)(res, sel_release);
  }
}

JS_FREE(string) {
  if (value != nullptr) {
    free(value);
  }
}

js_free getNativeFree(const char *encoding) {
  char first = *encoding;
  if (first == 'r') {
    first = *(++encoding);
  }
  switch (first) {
  case '@':
    return js_free_objc_object;
  case '*':
    return js_free_string;
  default:
    return nullptr;
  }
}
