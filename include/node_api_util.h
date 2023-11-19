#ifndef NODE_API_UTIL_H
#define NODE_API_UTIL_H

#include "js_native_api.h"
#include <dlfcn.h>

typedef void *napi_threadsafe_function;

typedef void (*napi_threadsafe_function_call_js)(napi_env env, napi_value js_cb,
                                                 void *context, void *data);

extern "C" NAPI_EXTERN napi_status napi_create_threadsafe_function(
    napi_env env, napi_value func, napi_value async_resource,
    napi_value async_resource_name, size_t max_queue_size,
    size_t initial_thread_count, void *thread_finalize_data,
    napi_finalize thread_finalize_cb, void *context,
    napi_threadsafe_function_call_js call_js_cb,
    napi_threadsafe_function *result);

enum napi_threadsafe_function_release_mode {
  napi_tsfn_release,
  napi_tsfn_abort
};

extern "C" NAPI_EXTERN napi_status
napi_acquire_threadsafe_function(napi_threadsafe_function func);

extern "C" NAPI_EXTERN napi_status napi_release_threadsafe_function(
    napi_threadsafe_function func, napi_threadsafe_function_release_mode mode);

enum napi_threadsafe_function_call_mode {
  napi_tsfn_blocking,
  napi_tsfn_nonblocking
};

extern "C" NAPI_EXTERN napi_status
napi_call_threadsafe_function(napi_threadsafe_function func, void *data,
                              napi_threadsafe_function_call_mode is_blocking);

extern "C" NAPI_EXTERN napi_status
napi_unref_threadsafe_function(napi_env env, napi_threadsafe_function func);

inline bool napiSupportsThreadsafeFunctions(void *dl) {
  return dlsym(dl, "napi_create_threadsafe_function") != NULL;
}

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

#ifndef DEBUG

#define NAPI_GUARD(expr)                                                       \
  status = expr;                                                               \
  if (status != napi_ok) {                                                     \
    NAPI_ERROR_INFO                                                            \
    std::cout << "Node-API returned error: " << status << "\n    " << #expr    \
              << "\n    ^\n    "                                               \
              << "at " << __FILE__ << ":" << __LINE__ << std::endl;            \
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
  { #name, NULL, JS_##name, NULL, NULL, NULL, napi_enumerable, NULL }

namespace objc_bridge {

inline napi_ref make_ref(napi_env env, napi_value value,
                         uint32_t initialCount = 1) {
  napi_ref ref;
  napi_create_reference(env, value, initialCount, &ref);
  return ref;
}

inline napi_value get_ref_value(napi_env env, napi_ref ref) {
  napi_value value;
  napi_get_reference_value(env, ref, &value);
  return value;
}

inline void napi_inherits(napi_env env, napi_value ctor,
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

} // namespace objc_bridge

#endif /* NODE_API_UTIL_H */
