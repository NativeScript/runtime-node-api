#ifndef SRC_JS_NATIVE_API_TYPES_H_
#define SRC_JS_NATIVE_API_TYPES_H_

#include <stdint.h>

#ifdef __cplusplus
#define EXTERN_C_START                                                                                                 \
extern "C"                                                                                                         \
{
#define EXTERN_C_END }
#else
#define EXTERN_C_START
#define EXTERN_C_END
#endif

#define NAPI_EXTERN __attribute__((visibility("default")))

#ifndef NAPI_CDECL
#ifdef _WIN32
#define NAPI_CDECL __cdecl
#else
#define NAPI_CDECL
#endif
#endif

EXTERN_C_START

/**
 Opaque pointer to the QuickJS Runtime
 */
typedef struct NapiRuntime *napi_runtime;
typedef struct NapiEnvironment *napi_env;
typedef struct NAPIValue *napi_value;
typedef struct NapiReference *napi_ref;
typedef struct NapiHandleScope *napi_handle_scope;
typedef struct NapiEscapableHandleScope *napi_escapable_handle_scope;
typedef struct NapiCallbackInfo *napi_callback_info;
typedef struct NapiDeferred* napi_deferred;


typedef enum
{
    napi_default = 0,
    napi_writable = 1 << 0,
    napi_enumerable = 1 << 1,
    napi_configurable = 1 << 2,
    
    // Used with napi_define_class to distinguish static properties
    // from instance properties. Ignored by napi_define_properties.
    napi_static = 1 << 10,
    
    // Default for class methods.
    napi_default_method = napi_writable | napi_configurable,
    
    // Default for object properties, like in JS obj[prop].
    napi_default_jsproperty = napi_writable | napi_enumerable | napi_configurable,
} napi_property_attributes;

typedef napi_value (*napi_callback)(napi_env env, napi_callback_info callbackInfo);

typedef void (*napi_finalize)(napi_env env, void *finalizeData, void *finalizeHint);

typedef struct {
  // One of utf8name or name should be NULL.
  const char* utf8name;
  napi_value name;

  napi_callback method;
  napi_callback getter;
  napi_callback setter;
  napi_value value;

  napi_property_attributes attributes;
  void* data;
} napi_property_descriptor; 

typedef enum
{
    napi_undefined,
    napi_null,
    napi_boolean,
    napi_number,
    napi_string,
    napi_symbol,
    napi_object,
    napi_function,
    napi_external,
    napi_bigint,
} napi_valuetype;

typedef enum {
    napi_ok,
    napi_invalid_arg,
    napi_object_expected,
    napi_string_expected,
    napi_name_expected,
    napi_function_expected,
    napi_number_expected,
    napi_boolean_expected,
    napi_array_expected,
    napi_generic_failure,
    napi_pending_exception,
    napi_cancelled,
    napi_escape_called_twice,
    napi_handle_scope_mismatch,
    napi_callback_scope_mismatch,
    napi_queue_full,
    napi_closing,
    napi_bigint_expected,
    napi_date_expected,
    napi_arraybuffer_expected,
    napi_detachable_arraybuffer_expected,
    napi_would_deadlock,  /* unused */
    napi_no_external_buffers_allowed,
    napi_cannot_run_js,
    // Custom errors
    napi_handle_scope_empty,
    napi_memory_error,
    napi_promise_exception
} napi_status;

typedef enum {
  napi_int8_array,
  napi_uint8_array,
  napi_uint8_clamped_array,
  napi_int16_array,
  napi_uint16_array,
  napi_int32_array,
  napi_uint32_array,
  napi_float32_array,
  napi_float64_array,
  napi_bigint64_array,
  napi_biguint64_array,
} napi_typedarray_type;

typedef enum {
  napi_key_include_prototypes,
  napi_key_own_only
} napi_key_collection_mode;

typedef enum {
  napi_key_keep_numbers,
  napi_key_numbers_to_strings
} napi_key_conversion;

typedef enum {
  napi_key_all_properties = 0,
  napi_key_writable = 1,
  napi_key_enumerable = 1 << 1,
  napi_key_configurable = 1 << 2,
  napi_key_skip_strings = 1 << 3,
  napi_key_skip_symbols = 1 << 4
} napi_key_filter;

typedef struct {
  uint64_t lower;
  uint64_t upper;
} napi_type_tag;

typedef struct {
  const char* error_message;
  void* engine_reserved;
  uint32_t engine_error_code;
  napi_status error_code;
} napi_extended_error_info;

EXTERN_C_END

#endif // SRC_JS_NATIVE_API_TYPES_H_
