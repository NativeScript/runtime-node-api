#include "Closure.h"
#include "AutoreleasePool.h"
#include "Metadata.h"
#include "ObjCBridgeData.h"
#include "TypeConv.h"
#include "Util.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include "objc/message.h"

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
  napi_value constructor = get_ref_value(env, closure->thisConstructor);

  id self = *(id *)args[0];
  napi_value thisArg = bridgeData->getObject(env, self, constructor);
  if (thisArg == nil) {
    NSLog(@"ObjC->JS: thisArg is nil, the JS object was probably garbage "
          @"collected");
  }

  napi_value result;

  napi_value argv[cif->nargs - 2];
  for (int i = 2; i < cif->nargs; i++) {
    argv[i - 2] = closure->argTypes[i]->toJS(env, args[i], kBlockParam);
  }

  // Clear any pending exceptions before calling the function.
  napi_get_and_clear_last_exception(env, &result);

  auto pool = objc_autoreleasePoolPush();
  napi_status status =
      napi_call_function(env, thisArg, func, cif->nargs - 2, argv, &result);
  objc_autoreleasePoolPop(pool);

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
    argv[i] = closure->argTypes[i]->toJS(env, args[i + 1], kBlockParam);
  }

  // Clear any pending exceptions before calling the function.
  napi_get_and_clear_last_exception(env, &result);

  auto pool = objc_autoreleasePoolPush();
  // TODO: what about calling from a different thread?
  // Currently, V8 will crash if you call a function from a different thread
  // than the Isolate.
  napi_status status =
      napi_call_function(env, thisArg, func, cif->nargs - 1, argv, &result);
  objc_autoreleasePoolPop(pool);

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

  const char *rtypeEncoding = signature.methodReturnType;
  returnType = TypeConv::Make(env, &rtypeEncoding);

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

Closure::Closure(MDMetadataReader *reader, MDSectionOffset offset, bool isBlock,
                 std::string *encoding, bool isMethod) {
  auto returnTypeKind = reader->getTypeKind(offset);
  bool next = (returnTypeKind & mdTypeFlagNext) != 0;

  returnType = TypeConv::Make(env, reader, &offset);

  if (encoding != nullptr)
    returnType->encode(encoding);

  ffi_type *rtype = returnType->type;
  ffi_type **atypes = nullptr;

  if (isMethod && encoding != nullptr) {
    const char *argenc = "@";
    *encoding += argenc;
    argTypes.push_back(TypeConv::Make(env, &argenc));
    argenc = ":";
    *encoding += argenc;
    argTypes.push_back(TypeConv::Make(env, &argenc));
  }

  while (next) {
    auto argTypeKind = reader->getTypeKind(offset);
    next = (argTypeKind & mdTypeFlagNext) != 0;
    auto argTypeInfo = TypeConv::Make(env, reader, &offset);
    if (encoding != nullptr)
      argTypeInfo->encode(encoding);
    argTypes.push_back(argTypeInfo);
  }

  auto skipArgs = isBlock ? 1 : 0;

  if (!argTypes.empty() || isBlock) {
    atypes =
        (ffi_type **)malloc(sizeof(ffi_type *) * (argTypes.size() + skipArgs));
    if (isBlock) {
      atypes[0] = &ffi_type_pointer;
    }
    for (int i = 0; i < argTypes.size(); i++) {
      atypes[i + skipArgs] = argTypes[i]->type;
    }
  }

  ffi_status status = ffi_prep_cif(&cif, FFI_DEFAULT_ABI,
                                   argTypes.size() + skipArgs, rtype, atypes);

  if (status != FFI_OK) {
    std::cout << "Failed to prepare CIF, libffi returned error:" << status
              << std::endl;
  }

  closure = (ffi_closure *)ffi_closure_alloc(sizeof(ffi_closure), &fnptr);

  ffi_prep_closure_loc(closure, &cif, isBlock ? JSBlockIMP : JSIMP, this,
                       fnptr);
}

} // namespace objc_bridge
