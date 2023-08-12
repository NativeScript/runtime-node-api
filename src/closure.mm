#include "closure.h"
#include "Metadata.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include "objc/message.h"
#include "objc_bridge_data.h"
#include "util.h"

#include <Foundation/Foundation.h>

namespace objc_bridge {

// Bridge calls from Objective-C to JavaScript.
// Opposite of what native_call.cc does - but a lot of type conversion logic
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
    argv[i - 2] = closure->argTypes[i]->toJS(env, args[i]);
  }

  // Clear any pending exceptions before calling the function.
  napi_get_and_clear_last_exception(env, &result);

  napi_status status =
      napi_call_function(env, thisArg, func, cif->nargs - 2, argv, &result);

  bool shouldFree;
  closure->returnType->toNative(env, result, ret, &shouldFree, &shouldFree);

  if (status != napi_ok) {
    napi_get_and_clear_last_exception(env, &result);
    napi_value errstr;
    NAPI_GUARD(napi_get_named_property(env, result, "stack", &errstr)) {
      return;
    }
    char errbuf[512];
    size_t errlen;
    napi_get_value_string_utf8(env, errstr, errbuf, 512, &errlen);
    NSLog(@"ObjC->JS (MethodIMP) call failed: %s", errbuf);
    napi_throw(env, result);
  }
}

void JSBlockIMP(ffi_cif *cif, void *ret, void *args[], void *data) {
  Closure *closure = (Closure *)data;
  napi_env env = closure->env;

  napi_value func = get_ref_value(env, closure->func);

  napi_value thisArg;
  napi_get_global(env, &thisArg);

  napi_value result;

  napi_value argv[cif->nargs - 1];
  for (int i = 0; i < cif->nargs - 1; i++) {
    argv[i] = closure->argTypes[i]->toJS(env, args[i + 1]);
  }

  // Clear any pending exceptions before calling the function.
  napi_get_and_clear_last_exception(env, &result);

  // TODO: what about calling from a different thread?
  // Currently, V8 will crash if you call a function from a different thread
  // than the Isolate.
  napi_status status =
      napi_call_function(env, thisArg, func, cif->nargs - 1, argv, &result);

  bool shouldFree;
  closure->returnType->toNative(env, result, ret, &shouldFree, &shouldFree);

  if (status != napi_ok) {
    napi_get_and_clear_last_exception(env, &result);
    napi_value errstr;
    NAPI_GUARD(napi_get_named_property(env, result, "stack", &errstr)) {
      return;
    }
    char errbuf[512];
    size_t errlen;
    napi_get_value_string_utf8(env, errstr, errbuf, 512, &errlen);
    NSLog(@"ObjC->JS (BlockIMP) call failed: %s", errbuf);
    napi_throw(env, result);
  }
}

Closure::Closure(std::string encoding, bool isBlock) {
  auto signature = [NSMethodSignature signatureWithObjCTypes:encoding.c_str()];
  size_t argc = signature.numberOfArguments;

  const char *returnType = signature.methodReturnType;
  this->returnType = TypeConv::Make(env, &returnType);

  int skipArgs = isBlock ? 1 : 0;

  ffi_type *rtype = this->returnType->type;
  ffi_type **atypes =
      (ffi_type **)malloc(sizeof(ffi_type *) * (argc + skipArgs));

  if (isBlock) {
    atypes[0] = &ffi_type_pointer;
  }

  for (int i = 0; i < argc; i++) {
    const char *argenc = [signature getArgumentTypeAtIndex:i];
    auto argTypeInfo = TypeConv::Make(env, &argenc);
    atypes[i + skipArgs] = argTypeInfo->type;
    this->argTypes.push_back(argTypeInfo);
  }

  [signature release];

  ffi_status status =
      ffi_prep_cif(&cif, FFI_DEFAULT_ABI, (int)argc + skipArgs, rtype, atypes);

  if (status != FFI_OK) {
    std::cout << "ffi_prep_cif failed" << std::endl;
    return;
  }

  closure = (ffi_closure *)ffi_closure_alloc(sizeof(ffi_closure), &fnptr);

  ffi_prep_closure_loc(closure, &cif, isBlock ? JSBlockIMP : JSIMP, this,
                       fnptr);
}

// Closure::Closure(MDMetadataReader *reader, MDSectionOffset *offset,
//                  bool isBlock) {
//   size_t argc = 0;

//   cif = (ffi_cif *)malloc(sizeof(ffi_cif));

//   const char *returnType = signature.methodReturnType;
//   auto retTypeInfo = getTypeInfo(&returnType);
//   this->convertReturnType = retTypeInfo.toNative;

//   ffi_type *rtype = retTypeInfo.type;
//   ffi_type **atypes = (ffi_type **)malloc(sizeof(ffi_type *) * (argc + 1));
//   this->convertArgType =
//       (js_from_native *)malloc(sizeof(js_from_native) * argc);

//   atypes[0] = &ffi_type_pointer;

//   for (int i = 0; i < argc; i++) {
//     const char *argenc = [signature getArgumentTypeAtIndex:i];
//     auto argTypeInfo = getTypeInfo(&argenc);
//     atypes[i + 1] = argTypeInfo.type;
//     this->convertArgType[i] = argTypeInfo.fromNative;
//   }

//   [signature release];

//   ffi_status status =
//       ffi_prep_cif(cif, FFI_DEFAULT_ABI, (int)(argc + 1), rtype, atypes);

//   if (status != FFI_OK) {
//     std::cout << "ffi_prep_cif failed" << std::endl;
//     return;
//   }

//   closure = (ffi_closure *)ffi_closure_alloc(sizeof(ffi_closure), &fnptr);

//   ffi_prep_closure_loc(closure, cif, isBlock ? JSBlockIMP : JSIMP, this,
//   fnptr);
// }

} // namespace objc_bridge
