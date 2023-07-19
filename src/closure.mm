#include "closure.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include "objc/message.h"
#include "objc_bridge_data.h"
#include "util.h"

#include <Foundation/Foundation.h>

namespace objc_bridge {

// Bridge calls from Objective-C to JavaScript.
// Opposite of what bridged_method.cc does - but a lot of type conversion logic
// is reused, just in reverse.
void JSIMP(ffi_cif *cif, void *ret, void *args[], void *data) {
  Closure *closure = (Closure *)data;
  napi_env env = closure->env;
  auto bridgeData = ObjCBridgeData::InstanceData(env);
  napi_value func = get_ref_value(env, closure->func);
  napi_value thisArg = bridgeData->getObject(env, *(id *)args[0]);
  if (thisArg == nil) {
    NSLog(@"ObjC->JS: thisArg is nil, the JS object was probably garbage "
          @"collected");
  }
  napi_value result;
  napi_value argv[cif->nargs - 2];
  for (int i = 2; i < cif->nargs; i++) {
    argv[i - 2] = closure->convertArgType[i](env, args[i], cif->arg_types[i]);
  }
  // Clear any pending exceptions before calling the function.
  napi_get_and_clear_last_exception(env, &result);
  napi_status status =
      napi_call_function(env, thisArg, func, cif->nargs - 2, argv, &result);
  bool shouldFree;
  closure->convertReturnType(env, result, ret, &shouldFree, &shouldFree);
  if (status != napi_ok) {
    napi_get_and_clear_last_exception(env, &result);
    napi_value errstr;
    NAPI_GUARD(napi_get_named_property(env, result, "stack", &errstr)) {
      return;
    }
    char errbuf[512];
    size_t errlen;
    napi_get_value_string_utf8(env, errstr, errbuf, 512, &errlen);
    NSLog(@"ObjC->JS call failed: %s", errbuf);
    napi_throw(env, result);
  }
}

Closure::Closure(std::string encoding) {
  auto signature = [NSMethodSignature signatureWithObjCTypes:encoding.c_str()];
  size_t argc = signature.numberOfArguments;

  cif = (ffi_cif *)malloc(sizeof(ffi_cif));

  const char *returnType = signature.methodReturnType;
  this->convertReturnType = getConvToNative(returnType);

  ffi_type *rtype = getTypeForEncoding(&returnType);
  ffi_type **atypes = (ffi_type **)malloc(sizeof(ffi_type *) * argc);
  this->convertArgType =
      (js_from_native *)malloc(sizeof(js_from_native) * argc);

  for (int i = 0; i < argc; i++) {
    const char *argenc = [signature getArgumentTypeAtIndex:i];

    const char *argenc2 = argenc;
    atypes[i] = getTypeForEncoding(&argenc2);
    this->convertArgType[i] = getConvFromNative(argenc);
  }

  [signature release];

  ffi_status status =
      ffi_prep_cif(cif, FFI_DEFAULT_ABI, (int)argc, rtype, atypes);

  if (status != FFI_OK) {
    std::cout << "ffi_prep_cif failed" << std::endl;
    return;
  }

  closure = (ffi_closure *)ffi_closure_alloc(sizeof(ffi_closure), &fnptr);

  ffi_prep_closure_loc(closure, cif, JSIMP, this, fnptr);
}

} // namespace objc_bridge
