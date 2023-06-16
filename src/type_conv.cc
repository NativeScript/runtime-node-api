#include "type_conv.h"
#include "bridged_class.h"
#include "node_api_util.h"
#include "objc_bridge_data.h"

JS_FROM_NATIVE(void) { return nullptr; }

JS_FROM_NATIVE(objc_object) {
  NAPI_PREAMBLE

  id obj = *((id *)value);

  if (obj == nullptr) {
    return nullptr;
  }

  Class cls = object_getClass(obj);
  bool isClass = false;

  if (class_isMetaClass(cls)) {
    cls = (Class)obj;
    isClass = true;
  }

  auto name = std::string(class_getName(cls));

  ObjCBridgeData *bridgeData = nullptr;
  NAPI_GUARD(napi_get_instance_data(env, (void **)&bridgeData)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  BridgedClass *bridgedCls = new BridgedClass(env, name);

  if (bridgedCls == nullptr) {
    return nullptr;
  }

  napi_value constructor = get_ref(env, bridgedCls->constructor);

  if (isClass) {
    return constructor;
  }

  napi_value result;

  NAPI_GUARD(napi_new_instance(env, constructor, 0, nullptr, &result)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  NAPI_GUARD(napi_wrap(env, result, (void *)obj, nullptr, nullptr, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  return result;
}

JS_FROM_NATIVE(uint64) {
  napi_value result;
  uint64_t val = *((uint64_t *)value);
  napi_create_int64(env, (int64_t)val, &result);
  return result;
}

js_from_native getConvFromNative(const char *encoding) {
  char first = *encoding;
  if (first == 'r') {
    first = *(++encoding);
  }
  switch (first) {
    //    case 'c':
    //      return js_from_char;
    //    case 'i':
    //      return js_from_sint;
    //    case 's':
    //      return js_from_sshort;
    //    case 'l':
    //      return js_from_slong;
    //    case 'q':
    //      return js_from_sint16;
    //    case 'C':
    //      return js_from_uchar;
    //    case 'I':
    //      return js_from_uint;
    //    case 'S':
    //      return js_from_ushort;
    //    case 'L':
    //      return js_from_ulong;
  case 'Q':
    return js_from_uint64;
    //    case 'f':
    //      return js_from_float;
    //    case 'd':
    //      return js_from_double;
    //    case 'B':
    //      return js_from_uint8;
  case 'v':
    return js_from_void;
    //    case '*':
    //      return js_from_pointer;
  case '@':
    return js_from_objc_object;
    //    case '#':
    //      return js_from_pointer;
    //    case ':':
    //      return js_from_selector;
    //    case '[':
    //      return js_from_pointer;
    //    case '{':
    //      return js_from_pointer;
    //    case '(':
    //      return js_from_pointer;
    //    case 'b':
    //      return js_from_pointer;
    //    case '^':
    //      return js_from_pointer;
    //    case '?':
    //      return js_from_pointer;
  default:
    std::cout << "js_from_native unknown encoding: " << encoding << std::endl;
    return js_from_void;
  }
}

JS_TO_NATIVE(void) {
  void **res = (void **)result;
  *res = nullptr;
}

JS_TO_NATIVE(objc_object) {
  NAPI_PREAMBLE

  id *res = (id *)result;

  NAPI_GUARD(napi_unwrap(env, value, (void **)res)) {
    NAPI_THROW_LAST_ERROR
    *res = nullptr;
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
}

js_to_native getConvToNative(const char *encoding) {
  char first = *encoding;
  if (first == 'r') {
    first = *(++encoding);
  }
  switch (first) {
    //    case 'c':
    //      return js_to_char;
    //    case 'i':
    //      return js_to_sint;
    //    case 's':
    //      return js_to_sshort;
    //    case 'l':
    //      return js_to_slong;
    //    case 'q':
    //      return js_to_sint16;
    //    case 'C':
    //      return js_to_uchar;
    //    case 'I':
    //      return js_to_uint;
    //    case 'S':
    //      return js_to_ushort;
    //    case 'L':
    //      return js_to_ulong;
    //    case 'Q':
    //      return js_to_uint64;
    //    case 'f':
    //      return js_to_float;
    //    case 'd':
    //      return js_to_double;
    //    case 'B':
    //      return js_to_uint8;
  case 'v':
    return js_to_void;
  case '*':
    return js_to_string;
  case '@':
    return js_to_objc_object;
    //    case '#':
    //      return js_to_pointer;
    //    case ':':
    //      return js_to_selector;
    //    case '[':
    //      return js_to_pointer;
    //    case '{':
    //      return js_to_pointer;
    //    case '(':
    //      return js_to_pointer;
    //    case 'b':
    //      return js_to_pointer;
    //    case '^':
    //      return js_to_pointer;
    //    case '?':
    //      return js_to_pointer;
  default:
    std::cout << "js_from_native unknown encoding: " << encoding << std::endl;
    return js_to_void;
  }
}

bool shouldFreeType(const char *encoding) {
  char first = *encoding;
  if (first == 'r') {
    first = *(++encoding);
  }
  switch (first) {
  case '*':
    return true;
  default:
    return false;
  }
}
