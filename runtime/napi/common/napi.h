//
// Created by Ammar Ahmed on 02/12/2024.
//

#ifndef TEST_APP_NAPI_H
#define TEST_APP_NAPI_H

// [BABYLON-NATIVE-ADDITION]
#ifndef NODE_ADDON_API_DISABLE_DEPRECATED
#define NODE_ADDON_API_DISABLE_DEPRECATED
#endif
#ifndef NODE_ADDON_API_DISABLE_NODE_SPECIFIC
#define NODE_ADDON_API_DISABLE_NODE_SPECIFIC
#endif
#ifndef NAPI_VERSION
#define NAPI_VERSION 8
#endif
#ifndef NAPI_HAS_THREADS
#define NAPI_HAS_THREADS 0
#endif

#ifndef NAPI_HAS_THREADS
#if !defined(__wasm__) || (defined(__EMSCRIPTEN_PTHREADS__) ||                 \
                           (defined(__wasi__) && defined(_REENTRANT)))
#define NAPI_HAS_THREADS 1
#else
#define NAPI_HAS_THREADS 0
#endif
#endif

#ifdef NODE_ADDON_API_DISABLE_NODE_SPECIFIC
#include "js_native_api.h"
#endif

#include <functional>
#include <initializer_list>
#include <memory>
#if NAPI_HAS_THREADS
#include <mutex>
#endif  // NAPI_HAS_THREADS
#include <string>
#include <vector>

// VS2015 RTM has bugs with constexpr, so require min of VS2015 Update 3 (known
// good version)
#if !defined(_MSC_VER) || _MSC_FULL_VER >= 190024210
#define NAPI_HAS_CONSTEXPR 1
#endif

// VS2013 does not support char16_t literal strings, so we'll work around it
// using wchar_t strings and casting them. This is safe as long as the character
// sizes are the same.
#if defined(_MSC_VER) && _MSC_VER <= 1800
static_assert(sizeof(char16_t) == sizeof(wchar_t),
              "Size mismatch between char16_t and wchar_t");
#define NAPI_WIDE_TEXT(x) reinterpret_cast<char16_t*>(L##x)
#else
#define NAPI_WIDE_TEXT(x) u##x
#endif

// If C++ exceptions are not explicitly enabled or disabled, enable them
// if exceptions were enabled in the compiler settings.
#if !defined(NAPI_CPP_EXCEPTIONS) && !defined(NAPI_DISABLE_CPP_EXCEPTIONS)
#if defined(_CPPUNWIND) || defined(__EXCEPTIONS)
#define NAPI_CPP_EXCEPTIONS
#else
#error Exception support not detected. \
      Define either NAPI_CPP_EXCEPTIONS or NAPI_DISABLE_CPP_EXCEPTIONS.
#endif
#endif

// If C++ NAPI_CPP_EXCEPTIONS are enabled, NODE_ADDON_API_ENABLE_MAYBE should
// not be set
#if defined(NAPI_CPP_EXCEPTIONS) && defined(NODE_ADDON_API_ENABLE_MAYBE)
#error NODE_ADDON_API_ENABLE_MAYBE should not be set when \
    NAPI_CPP_EXCEPTIONS is defined.
#endif

#ifdef _NOEXCEPT
#define NAPI_NOEXCEPT _NOEXCEPT
#else
#define NAPI_NOEXCEPT noexcept
#endif

#ifdef NAPI_CPP_EXCEPTIONS

// When C++ exceptions are enabled, Errors are thrown directly. There is no need
// to return anything after the throw statements. The variadic parameter is an
// optional return value that is ignored.
// We need _VOID versions of the macros to avoid warnings resulting from
// leaving the NAPI_THROW_* `...` argument empty.

#define NAPI_THROW(e, ...) throw e
#define NAPI_THROW_VOID(e) throw e

#define NAPI_THROW_IF_FAILED(env, status, ...)                                 \
  if ((status) != napi_ok) throw Napi::Error::New(env);

#define NAPI_THROW_IF_FAILED_VOID(env, status)                                 \
  if ((status) != napi_ok) throw Napi::Error::New(env);

#else  // NAPI_CPP_EXCEPTIONS

// When C++ exceptions are disabled, Errors are thrown as JavaScript exceptions,
// which are pending until the callback returns to JS.  The variadic parameter
// is an optional return value; usually it is an empty result.
// We need _VOID versions of the macros to avoid warnings resulting from
// leaving the NAPI_THROW_* `...` argument empty.

#define NAPI_THROW(e, ...)                                                     \
  do {                                                                         \
    (e).ThrowAsJavaScriptException();                                          \
    return __VA_ARGS__;                                                        \
  } while (0)

#define NAPI_THROW_VOID(e)                                                     \
  do {                                                                         \
    (e).ThrowAsJavaScriptException();                                          \
    return;                                                                    \
  } while (0)

#define NAPI_THROW_IF_FAILED(env, status, ...)                                 \
  if ((status) != napi_ok) {                                                   \
    Napi::Error::New(env).ThrowAsJavaScriptException();                        \
    return __VA_ARGS__;                                                        \
  }

#define NAPI_THROW_IF_FAILED_VOID(env, status)                                 \
  if ((status) != napi_ok) {                                                   \
    Napi::Error::New(env).ThrowAsJavaScriptException();                        \
    return;                                                                    \
  }

#endif  // NAPI_CPP_EXCEPTIONS

#ifdef NODE_ADDON_API_ENABLE_MAYBE
#define NAPI_MAYBE_THROW_IF_FAILED(env, status, type)                          \
  NAPI_THROW_IF_FAILED(env, status, Napi::Nothing<type>())

#define NAPI_RETURN_OR_THROW_IF_FAILED(env, status, result, type)              \
  NAPI_MAYBE_THROW_IF_FAILED(env, status, type);                               \
  return Napi::Just<type>(result);
#else
#define NAPI_MAYBE_THROW_IF_FAILED(env, status, type)                          \
  NAPI_THROW_IF_FAILED(env, status, type())

#define NAPI_RETURN_OR_THROW_IF_FAILED(env, status, result, type)              \
  NAPI_MAYBE_THROW_IF_FAILED(env, status, type);                               \
  return result;
#endif

#define NAPI_DISALLOW_ASSIGN(CLASS) void operator=(const CLASS&) = delete;
#define NAPI_DISALLOW_COPY(CLASS) CLASS(const CLASS&) = delete;

#define NAPI_DISALLOW_ASSIGN_COPY(CLASS)                                       \
  NAPI_DISALLOW_ASSIGN(CLASS)                                                  \
  NAPI_DISALLOW_COPY(CLASS)

#define NAPI_CHECK(condition, location, message)                               \
  do {                                                                         \
    if (!(condition)) {                                                        \
      Napi::Error::Fatal((location), (message));                               \
    }                                                                          \
  } while (0)

#define NAPI_FATAL_IF_FAILED(status, location, message)                        \
  NAPI_CHECK((status) == napi_ok, location, message)


#endif //TEST_APP_NAPI_H
