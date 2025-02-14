#ifndef NATIVE_API_UTIL_H_
#define NATIVE_API_UTIL_H_

#include "js_native_api.h"
#include <dlfcn.h>
#include <sstream>

#define NAPI_EXPORT __attribute__((visibility("default")))

#ifndef NAPI_PREAMBLE
#define NAPI_PREAMBLE napi_status status;
#endif

#define NAPI_CALLBACK_BEGIN(n_args)                                    \
  napi_status status;                                                  \
  napi_value argv[n_args];                                             \
  size_t argc = n_args;                                                \
  napi_value jsThis;                                                   \
  void *data;                                                          \
  NAPI_GUARD(napi_get_cb_info(env, info, &argc, argv, &jsThis, &data)) \
  {                                                                    \
    NAPI_THROW_LAST_ERROR                                              \
    return NULL;                                                       \
  }

#define NAPI_CALLBACK_BEGIN_VARGS()                                               \
  napi_status status;                                                             \
  size_t argc;                                                                    \
  void *data;                                                                     \
  napi_value jsThis;                                                              \
  NAPI_GUARD(napi_get_cb_info(env, info, &argc, nullptr, &jsThis, &data))         \
  {                                                                               \
    NAPI_THROW_LAST_ERROR                                                         \
    return NULL;                                                                  \
  }                                                                               \
  std::vector<napi_value> argv(argc);                                             \
  if (argc > 0)                                                                   \
  {                                                                               \
    NAPI_GUARD(napi_get_cb_info(env, info, &argc, argv.data(), nullptr, nullptr)) \
    {                                                                             \
      NAPI_THROW_LAST_ERROR                                                       \
      return NULL;                                                                \
    }                                                                             \
  }

#define NAPI_ERROR_INFO                                                     \
  const napi_extended_error_info *error_info =                              \
      (napi_extended_error_info *)malloc(sizeof(napi_extended_error_info)); \
  napi_get_last_error_info(env, &error_info);

#define NAPI_THROW_LAST_ERROR \
  NAPI_ERROR_INFO             \
  napi_throw_error(env, NULL, error_info->error_message);

#ifndef DEBUG

#define NAPI_GUARD(expr)                                              \
  status = expr;                                                      \
  if (status != napi_ok)                                              \
  {                                                                   \
    NAPI_ERROR_INFO                                                   \
    std::stringstream msg;                                            \
    msg << "Node-API returned error: " << status << "\n    " << #expr \
        << "\n    ^\n    "                                            \
        << "at " << __FILE__ << ":" << __LINE__ << "";                \
  }                                                                   \
  if (status != napi_ok)

#else

#define NAPI_GUARD(expr) \
  status = expr;         \
  if (status != napi_ok)

#endif

#define NAPI_MODULE_REGISTER \
  napi_value napi_register_module_v1(napi_env env, napi_value exports)

#define NAPI_FUNCTION(name) \
  napi_value JS_##name(napi_env env, napi_callback_info cbinfo)

#define NAPI_FUNCTION_DESC(name) \
  {#name, NULL, JS_##name, NULL, NULL, NULL, napi_enumerable, NULL}

#define PROTOTYPE "prototype"
#define OBJECT "Object"
#define SET_PROTOTYPE_OF "setPrototypeOf"
#define CONSTRUCTOR "constructor"

#define UNDEFINED \
napi_util::undefined(env);

namespace napi_util {

    inline napi_value undefined(napi_env env) {
        napi_value undefined;
        napi_get_undefined(env, &undefined);
        return undefined;
    }

    inline napi_value null(napi_env env) {
        napi_value null;
        napi_get_null(env, &null);
        return null;
    }

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

    inline napi_value get__proto__(napi_env env, napi_value object) {
        napi_value proto;
        napi_get_named_property(env, object, "__proto__", &proto);
        return proto;
    }

    inline void set__proto__(napi_env env, napi_value object, napi_value __proto__) {
        napi_set_named_property(env, object, "__proto__", __proto__);
    }

    inline napi_value getPrototypeOf(napi_env env, napi_value object) {
        napi_value proto;
        napi_get_prototype(env, object, &proto);
        return proto;
    }

    inline napi_value get_prototype(napi_env env, napi_value object) {
        napi_value prototype;
        napi_get_named_property(env, object, "prototype", &prototype);
        return prototype;
    }

    inline void set_prototype(napi_env env, napi_value object, napi_value prototype) {
        napi_set_named_property(env, object, "prototype", prototype);
    }

    inline char *get_string_value(napi_env env, napi_value str, size_t size = 0) {
        size_t str_size = size;
        if (str_size == 0) {
            napi_get_value_string_utf8(env, str, nullptr, 0, &str_size);
        }
        char *buffer = new char[str_size + 1];
        napi_get_value_string_utf8(env, str, buffer, str_size + 1, nullptr);
        return buffer;
    }

    inline napi_status define_property(napi_env env, napi_value object, const char *propertyName,
                                       napi_value value = nullptr, napi_callback getter = nullptr,
                                       napi_callback setter = nullptr, void *data = nullptr, napi_property_attributes attributes = napi_default_jsproperty) {
        napi_property_descriptor desc = {
                propertyName, // utf8name
                nullptr,      // name
                nullptr,      // method
                getter,       // getter
                setter,       // setter
                value,        // value
                attributes, // attributes
                data          // data
        };

        return napi_define_properties(env, object, 1, &desc);
    }

    inline void setPrototypeOf(napi_env env, napi_value object, napi_value prototype) {
        napi_value global, global_object, set_proto;

        // Get the global object
        napi_get_global(env, &global);

        // Get the Object global object
        napi_get_named_property(env, global, OBJECT, &global_object);

        // Get the setPrototypeOf function from the Object global object
        napi_get_named_property(env, global_object, SET_PROTOTYPE_OF, &set_proto);

        // Prepare the arguments for the setPrototypeOf call
        napi_value argv[] {
            object,
            prototype
        };
        // Call setPrototypeOf(object, prototype)
        napi_call_function(env, global, set_proto, 2, argv, nullptr);
    }



    inline bool is_object_explicit(napi_env env, napi_value value) {
        napi_valuetype type;
        napi_typeof(env, value, &type);
        return type == napi_object;
    }

    inline bool is_object(napi_env env, napi_value value) {
        napi_valuetype type;
        napi_typeof(env, value, &type);
        return type == napi_object || type == napi_function;
    }

    inline bool is_of_type(napi_env env, napi_value value, napi_valuetype expected_type) {
        napi_valuetype type;
        napi_typeof(env, value, &type);
        return type == expected_type;
    }

    inline bool is_number_object(napi_env env, napi_value value) {
        bool result;
        napi_value numberCtor;
        napi_value global;
        napi_get_global(env, &global);
        napi_get_named_property(env, global, "Number", &numberCtor);
        napi_instanceof(env, value, numberCtor, &result);
        return result;
    }

    inline napi_value valueOf(napi_env env, napi_value value) {
        napi_value valueOf, result;
        napi_get_named_property(env, value, "valueOf", &valueOf);
        napi_call_function(env, value, valueOf, 0, nullptr, &result);
        return result;
    }

    inline bool is_string_object(napi_env env, napi_value value) {
        bool result;
        napi_value stringCtor;
        napi_value global;
        napi_get_global(env, &global);
        napi_get_named_property(env, global, "String", &stringCtor);
        napi_instanceof(env, value, stringCtor, &result);
        return result;
    }

    inline bool is_boolean_object(napi_env env, napi_value value) {
        bool result;
        napi_value booleanCtor;
        napi_value global;
        napi_get_global(env, &global);
        napi_get_named_property(env, global, "Boolean", &booleanCtor);
        napi_instanceof(env, value, booleanCtor, &result);
        return result;
    }
    

    inline bool is_array(napi_env env, napi_value value) {
        bool result;
        napi_is_array(env, value, &result);
        return result;
    }

    inline bool is_arraybuffer(napi_env env, napi_value value) {
        bool result;
        napi_is_arraybuffer(env, value, &result);
        return result;
    }

    inline bool is_dataview(napi_env env, napi_value value) {
        bool result;
        napi_is_dataview(env, value, &result);
        return result;
    }

    inline bool is_typedarray(napi_env env, napi_value value) {
        bool result;
        napi_is_typedarray(env, value, &result);
        return result;
    }

    inline bool is_date(napi_env env, napi_value value) {
        bool result;
        napi_is_date(env, value, &result);
        return result;
    }


    inline bool is_undefined(napi_env env, napi_value value) {
        if (value == nullptr) return true;
        napi_valuetype type;
        napi_typeof(env, value, &type);
        return type == napi_undefined;
    }

    inline bool is_null(napi_env env, napi_value value) {
        napi_valuetype type;
        napi_typeof(env, value, &type);
        return type == napi_null;
    }

    inline napi_value get_true(napi_env env) {
        napi_value trueValue;
        napi_get_boolean(env, true, &trueValue);
        return trueValue;
    }

    inline napi_value get_false(napi_env env) {
        napi_value falseValue;
        napi_get_boolean(env, false, &falseValue);
        return falseValue;
    }

    inline bool get_bool(napi_env env, napi_value value) {
        bool result;
        napi_get_value_bool(env, value, &result);
        return result;
    }

    inline bool is_float(napi_env env, napi_value value) {

#ifdef __QJS__
        bool result;
        napi_is_float(env, value, &result);
        return result;
#else
        napi_value global, number, is_int, result;
        napi_get_global(env, &global);
        napi_get_named_property(env, global, "Number", &number);
        napi_get_named_property(env, number, "isInteger", &is_int);
        napi_call_function(env, number, is_int, 1, &value, &result);

        return napi_util::get_bool(env, result) == false;
#endif
    }

    // Same as Object.create()`
    inline napi_value object_create_from(napi_env env, napi_value object) {
        napi_value new_object;
        napi_create_object(env, &new_object);
        napi_set_named_property(env, new_object, "prototype", object);
        return new_object;
    }

    inline bool strict_equal(napi_env env, napi_value v1, napi_value v2) {
        bool equal;
        napi_strict_equals(env, v1, v2, &equal);
        return equal;
    }

    inline double get_number(napi_env env, napi_value value) {
        double result;
        napi_get_value_double(env, value, &result);
        return result;
    }

    inline int32_t get_int32(napi_env env, napi_value value) {
        int32_t result;
        napi_get_value_int32(env, value, &result);
        return result;
    }

    template<typename Func, typename... Args>
    inline void run_in_handle_scope(napi_env env, Func func, Args &&...args) {
        napi_handle_scope scope;
        napi_open_handle_scope(env, &scope);

        // Call the provided function
        func(std::forward<Args>(args)...);

        napi_close_handle_scope(env, scope);
    }

    template<typename Func, typename... Args>
    inline napi_value run_in_escapable_handle_scope(napi_env env, Func func, Args &&...args) {
        napi_escapable_handle_scope scope;
        napi_value result, escaped = nullptr;

        napi_open_escapable_handle_scope(env, &scope);

        // Call the provided function with forwarded arguments and get the result
        result = func(std::forward<Args>(args)...);

        if (result != nullptr) {
            // Escape the result
            napi_escape_handle(env, scope, result, &escaped);
        }

        napi_close_escapable_handle_scope(env, scope);

        return escaped;
    }

    inline napi_value
    napi_set_function(napi_env env, napi_value object, const char *name, napi_callback callback,
                      void *data = nullptr) {
        napi_value fn;
        napi_create_function(env, name, strlen(name), callback, data, &fn);
        napi_set_named_property(env, object, name, fn);
        return fn;
    }

//    inline napi_value symbolFor(napi_env env, const char *string) {
//        napi_value symbol;
//        node_api_symbol_for(env, string, strlen(string), &symbol);
//        return symbol;
//    }

    inline bool is_null_or_undefined(napi_env env, napi_value value) {
        return value == nullptr || is_undefined(env, value) || is_null(env, value);
    }

    inline napi_value global(napi_env env) {
        napi_value global;
        napi_get_global(env, &global);
        return global;
    }


    inline void log_value(napi_env env, napi_value value) {
        napi_value global;
        napi_value console;
        napi_value log;
        napi_get_global(env, &global);
        napi_get_named_property(env, global, "console", &console);
        napi_get_named_property(env, console, "log", &log);
        napi_value argv[] = {
                value
        };

        napi_call_function(env, console, log, 1, argv, nullptr);
    }

    inline void napi_inherits(napi_env env, napi_value ctor,
                              napi_value super_ctor) {
        napi_value global, global_object, set_proto, ctor_proto_prop,
                super_ctor_proto_prop;
        napi_value argv[2];

        napi_get_global(env, &global);
        napi_get_named_property(env, global, OBJECT, &global_object);
        napi_get_named_property(env, global_object, SET_PROTOTYPE_OF, &set_proto);
        napi_get_named_property(env, ctor, PROTOTYPE, &ctor_proto_prop);
        napi_get_named_property(env, super_ctor, PROTOTYPE, &super_ctor_proto_prop);

        bool exception;

        napi_is_exception_pending(env, &exception);

        argv[0] = ctor_proto_prop;
        argv[1] = super_ctor_proto_prop;
        napi_call_function(env, global, set_proto, 2, argv, nullptr);

        argv[0] = ctor;
        argv[1] = super_ctor;
        napi_call_function(env, global, set_proto, 2, argv, nullptr);
    }

}

#endif /* NATIVE_API_UTIL_H_ */