#include "closure.h"
#include "node_api_util.h"
#include "objc/message.h"
#include "objc_bridge_data.h"
#include "util.h"

void JSIMP(ffi_cif *cif, void *ret, void *args[], void *data) {
  Closure *closure = (Closure *)data;
  napi_env env = closure->env;
  auto bridgeData = ObjCBridgeData::InstanceData(env);
  napi_value func = get_ref_value(env, closure->func);
  napi_value thisArg = bridgeData->getObject(env, *(id *)args[0]);
  napi_value result;
  napi_value argv[cif->nargs - 2];
  for (int i = 2; i < cif->nargs; i++) {
    argv[i - 2] = closure->convertArgType[i](env, args[i], cif->arg_types[i]);
  }
  napi_call_function(env, thisArg, func, cif->nargs - 2, argv, &result);
  bool shouldFree;
  closure->convertReturnType(env, result, ret, &shouldFree, &shouldFree);
}

Closure::Closure(std::string encoding) {
  auto signature = ((msgSend_signatureWithObjCTypes)objc_msgSend)(
      (id)objc_getClass("NSMethodSignature"), sel::signatureWithObjCTypes_,
      encoding.c_str());
  size_t argc = ((msgSend_numberOfArguments)objc_msgSend)(
      signature, sel::numberOfArguments);

  cif = (ffi_cif *)malloc(sizeof(ffi_cif));

  const char *returnType = ((msgSend_methodReturnType)objc_msgSend)(
      signature, sel::methodReturnType);
  this->convertReturnType = getConvToNative(returnType);

  ffi_type *rtype = getTypeForEncoding(&returnType);
  ffi_type **atypes = (ffi_type **)malloc(sizeof(ffi_type *) * argc);
  this->convertArgType =
      (js_from_native *)malloc(sizeof(js_from_native) * argc);

  for (int i = 0; i < argc; i++) {
    const char *argenc = ((msgSend_methodGetArgumentType)objc_msgSend)(
        signature, sel::getArgumentTypeAtIndex_, i);

    const char *argenc2 = argenc;
    atypes[i] = getTypeForEncoding(&argenc2);
    this->convertArgType[i] = getConvFromNative(argenc);
  }

  ((msgSend_release)objc_msgSend)(signature, sel::release);

  ffi_status status = ffi_prep_cif(cif, FFI_DEFAULT_ABI, (int)argc, rtype, atypes);

  if (status != FFI_OK) {
    std::cout << "ffi_prep_cif failed" << std::endl;
    return;
  }

  closure = (ffi_closure *)ffi_closure_alloc(sizeof(ffi_closure), &fnptr);

  ffi_prep_closure_loc(closure, cif, JSIMP, this, fnptr);
}
