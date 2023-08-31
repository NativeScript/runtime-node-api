#include "ObjectRef.h"
#include "TypeConv.h"
#include "Util.h"
#include "js_native_api.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>

namespace objc_bridge {

void ObjectRef_finalize(napi_env env, void *data, void *hint) { free(data); }

NAPI_FUNCTION(ObjectRef_constructor) {
  napi_value jsThis, arg;
  size_t argc = 1;
  napi_get_cb_info(env, cbinfo, &argc, &arg, &jsThis, nullptr);

  auto data = malloc(sizeof(id));
  napi_wrap(env, jsThis, data, ObjectRef_finalize, nullptr, nullptr);

  napi_valuetype argType;
  napi_typeof(env, arg, &argType);

  if (argType != napi_undefined && argType != napi_null) {
    const char *argenc = "@";
    auto conv = TypeConv::Make(env, &argenc);
    bool shouldFree;
    conv->toNative(env, arg, data, &shouldFree, &shouldFree);
  } else {
    *(id *)data = nil;
  }

  return jsThis;
}

NAPI_FUNCTION(ObjectRef_unwrap) {
  napi_value jsThis;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, nullptr);

  void *data;
  napi_unwrap(env, jsThis, &data);

  id obj = *(id *)data;
  if (obj == nil) {
    napi_throw_error(env, nullptr, "ObjectRef.unwrap returned nil");
    return nullptr;
  }

  const char *argenc = "@";
  auto conv = TypeConv::Make(env, &argenc);
  return conv->toJS(env, &obj);
}

NAPI_FUNCTION(ObjectRef_get_value) {
  napi_value jsThis;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, nullptr);

  void *data;
  napi_unwrap(env, jsThis, &data);

  id obj = *(id *)data;
  const char *argenc = "@";
  auto conv = TypeConv::Make(env, &argenc);
  return conv->toJS(env, &obj);
}

NAPI_FUNCTION(ObjectRef_set_value) {
  napi_value jsThis, arg;
  size_t argc = 1;
  napi_get_cb_info(env, cbinfo, &argc, &arg, &jsThis, nullptr);

  void *data;
  napi_unwrap(env, jsThis, &data);

  const char *argenc = "@";
  auto conv = TypeConv::Make(env, &argenc);
  bool shouldFree;
  conv->toNative(env, arg, data, &shouldFree, &shouldFree);

  return nullptr;
}

NAPI_FUNCTION(ObjectRef_customInspect) {
  napi_value jsThis;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, nullptr);

  void *data;
  napi_unwrap(env, jsThis, &data);

  id obj = *(id *)data;

  std::string inspect = "ObjectRef(";
  if (obj == nil) {
    inspect += "nil";
  } else {
    inspect += [[obj description] UTF8String];
  }
  inspect += ")";

  napi_value result;
  napi_create_string_utf8(env, inspect.c_str(), NAPI_AUTO_LENGTH, &result);
  return result;
}

napi_value defineObjectRefClass(napi_env env) {
  napi_value result;
  const napi_property_descriptor properties[] = {
      {
          .utf8name = "unwrap",
          .name = nullptr,
          .method = JS_ObjectRef_unwrap,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      },
      {
          .utf8name = "value",
          .name = nullptr,
          .method = nullptr,
          .getter = JS_ObjectRef_get_value,
          .setter = JS_ObjectRef_set_value,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      },
      {
          .utf8name = nullptr,
          .name = jsSymbolFor(env, "nodejs.util.inspect.custom"),
          .method = JS_ObjectRef_customInspect,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      }};
  napi_define_class(env, "ObjectRef", NAPI_AUTO_LENGTH,
                    JS_ObjectRef_constructor, nullptr, 3, properties, &result);
  return result;
}

} // namespace objc_bridge
