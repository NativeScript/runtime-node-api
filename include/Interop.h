#ifndef INTEROP_H
#define INTEROP_H

#include "Closure.h"
#include "TypeConv.h"
#include "js_native_api.h"

namespace objc_bridge {

void registerInterop(napi_env env, napi_value global);

napi_value interop_addMethod(napi_env env, napi_callback_info info);
napi_value interop_addProtocol(napi_env env, napi_callback_info info);
napi_value interop_adopt(napi_env env, napi_callback_info info);
napi_value interop_free(napi_env env, napi_callback_info info);
napi_value interop_sizeof(napi_env env, napi_callback_info info);
napi_value interop_alloc(napi_env env, napi_callback_info info);
napi_value interop_handleof(napi_env env, napi_callback_info info);
napi_value interop_bufferFromData(napi_env env, napi_callback_info info);

class Pointer {
public:
  static napi_value defineJSClass(napi_env env);
  static bool isInstance(napi_env env, napi_value value);

  static napi_value create(napi_env env, void *data);
  static Pointer *unwrap(napi_env env, napi_value value);

  static napi_value constructor(napi_env env, napi_callback_info info);
  static napi_value add(napi_env env, napi_callback_info info);
  static napi_value subtract(napi_env env, napi_callback_info info);
  static napi_value toNumber(napi_env env, napi_callback_info info);
  static napi_value customInspect(napi_env env, napi_callback_info info);

  static void finalize(napi_env env, void *data, void *hint);

  Pointer(void *data);
  ~Pointer();

  void *data;
  bool adopted = false;
};

class Reference {
public:
  static napi_value defineJSClass(napi_env env);
  static bool isInstance(napi_env env, napi_value value);

  static Reference *unwrap(napi_env env, napi_value value);

  static napi_value constructor(napi_env env, napi_callback_info info);
  static napi_value get_value(napi_env env, napi_callback_info info);
  static napi_value set_value(napi_env env, napi_callback_info info);
  static napi_value customInspect(napi_env env, napi_callback_info info);

  static void finalize(napi_env env, void *data, void *hint);

  Reference() {}
  ~Reference();

  // data = nullptr means the reference is not initialized.
  void *data = nullptr;
  std::shared_ptr<TypeConv> type = nullptr;
  napi_ref initValue = nullptr;
};

class FunctionReference {
public:
  static napi_value defineJSClass(napi_env env);

  static FunctionReference *unwrap(napi_env env, napi_value value);

  static napi_value constructor(napi_env env, napi_callback_info info);

  static void finalize(napi_env env, void *data, void *hint);

  FunctionReference(napi_env env, napi_ref ref) : env(env), ref(ref){};
  ~FunctionReference();

  void *getFunctionPointer(MDSectionOffset offset);

  napi_env env;
  napi_ref ref;
  std::shared_ptr<Closure> closure = nullptr;
};

} // namespace objc_bridge

#endif /* INTEROP_H */
