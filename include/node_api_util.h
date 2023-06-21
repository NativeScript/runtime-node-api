#ifndef node_api_util_h
#define node_api_util_h

#include "node_api.h"
#include "objc_bridge_data.h"

#define NAPI_EXPORT __attribute__((visibility("default")))

#define NAPI_PREAMBLE napi_status status;

#define NAPI_CALLBACK_BEGIN(n_args)                                            \
  NAPI_PREAMBLE                                                                \
  napi_value argv[n_args];                                                     \
  size_t argc = n_args;                                                        \
  napi_value jsThis;                                                           \
  void *data;                                                                  \
  NAPI_GUARD(napi_get_cb_info(env, cbinfo, &argc, argv, &jsThis, &data)) {     \
    NAPI_THROW_LAST_ERROR                                                      \
    return NULL;                                                               \
  }

#define NAPI_ERROR_INFO                                                        \
  const napi_extended_error_info *error_info =                                 \
      (napi_extended_error_info *)malloc(sizeof(napi_extended_error_info));    \
  napi_get_last_error_info(env, &error_info);

#define NAPI_THROW_LAST_ERROR                                                  \
  NAPI_ERROR_INFO                                                              \
  napi_throw_error(env, NULL, error_info->error_message);

#ifdef DEBUG

#define NAPI_GUARD(expr)                                                       \
  status = expr;                                                               \
  if (status != napi_ok) {                                                     \
    NAPI_ERROR_INFO                                                            \
    NSLog(@"Node-API returned error: %d\nException: %s\n\n  %s\n  ^^^^\n\n  "  \
          @"at %s:%d",                                                         \
          status, error_info->error_message, #expr, __FILE__, __LINE__);       \
  }                                                                            \
  if (status != napi_ok)

#else

#define NAPI_GUARD(expr)                                                       \
  status = expr;                                                               \
  if (status != napi_ok)

#endif

#define NAPI_MODULE_REGISTER                                                   \
  napi_value napi_register_module_v1(napi_env env, napi_value exports)

#define NAPI_FUNCTION(name)                                                    \
  napi_value JS_##name(napi_env env, napi_callback_info cbinfo)

#define NAPI_FUNCTION_DESC(name)                                               \
  { #name, NULL, JS_##name, NULL, NULL, NULL, napi_default, NULL }

static inline napi_ref make_ref(napi_env env, napi_value value) {
  napi_ref ref;
  napi_create_reference(env, value, 1, &ref);
  return ref;
}

static inline napi_value get_ref_value(napi_env env, napi_ref ref) {
  napi_value value;
  napi_get_reference_value(env, ref, &value);
  return value;
}

static inline void napi_inherits(napi_env env, napi_value ctor,
                                 napi_value super_ctor) {
  napi_value global, global_object, set_proto, ctor_proto_prop,
      super_ctor_proto_prop;
  napi_value argv[2];

  napi_get_global(env, &global);
  napi_get_named_property(env, global, "Object", &global_object);
  napi_get_named_property(env, global_object, "setPrototypeOf", &set_proto);
  napi_get_named_property(env, ctor, "prototype", &ctor_proto_prop);
  napi_get_named_property(env, super_ctor, "prototype", &super_ctor_proto_prop);

  argv[0] = ctor_proto_prop;
  argv[1] = super_ctor_proto_prop;
  napi_call_function(env, global, set_proto, 2, argv, NULL);

  argv[0] = ctor;
  argv[1] = super_ctor;
  napi_call_function(env, global, set_proto, 2, argv, NULL);
}

#endif /* node_api_util_h */