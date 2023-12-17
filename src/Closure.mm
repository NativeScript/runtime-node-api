#include "Closure.h"
#include "AutoreleasePool.h"
#include "MetadataReader.h"
#include "ObjCBridge.h"
#include "TypeConv.h"
#include "Util.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include "objc/message.h"

#include <Foundation/Foundation.h>
#include <cassert>
#include <condition_variable>
#include <mutex>

namespace objc_bridge {

// Bridge calls from Objective-C to JavaScript.
// Opposite of what native_call.cc does - but a lot of type conversion logic
// is reused, just in reverse.
void JSIMP(ffi_cif *cif, void *ret, void *args[], void *data) {
  Closure *closure = (Closure *)data;
  napi_env env = closure->env;
  auto bridgeState = ObjCBridgeState::InstanceData(env);

  napi_value constructor = get_ref_value(env, closure->thisConstructor);

  id self = *(id *)args[0];
  napi_value thisArg = bridgeState->getObject(env, self, constructor);
  if (thisArg == nil) {
    NSLog(@"ObjC->JS: thisArg is nil, the JS object was probably garbage "
          @"collected");
  }

  napi_value func;
  napi_get_named_property(env, thisArg, closure->propertyName.c_str(), &func);

  napi_valuetype funcType;
  napi_typeof(env, func, &funcType);
  if (funcType != napi_function) {
    std::string errmsg = "Property " + closure->propertyName +
                         " is not a function, cannot call it";
    napi_throw_error(env, nullptr, errmsg.c_str());
    return;
  }

  napi_value result;

  napi_value argv[cif->nargs - 2];
  for (int i = 2; i < cif->nargs; i++) {
    argv[i - 2] = closure->argTypes[i]->toJS(env, args[i], 0);
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

struct JSBlockCallContext {
  ffi_cif *cif;
  void *ret;
  void **args;
  std::mutex mutex;
  std::condition_variable cv;
  bool done;
};

void callJSBlockFromMainThread(napi_env env, napi_value js_cb, void *context,
                               void *data) {
  auto closure = (Closure *)context;
  auto ctx = (JSBlockCallContext *)data;

  napi_value func = get_ref_value(env, closure->func);

  napi_value thisArg;
  napi_get_global(env, &thisArg);

  napi_value result;

  napi_value argv[ctx->cif->nargs - 1];
  for (int i = 0; i < ctx->cif->nargs - 1; i++) {
    argv[i] = closure->argTypes[i]->toJS(env, ctx->args[i + 1], 0);
  }

  // Clear any pending exceptions before calling the function.
  napi_get_and_clear_last_exception(env, &result);

  napi_status status = napi_call_function(env, thisArg, func,
                                          ctx->cif->nargs - 1, argv, &result);

  bool shouldFree;
  closure->returnType->toNative(env, result, ctx->ret, &shouldFree,
                                &shouldFree);

  ctx->done = true;
  ctx->cv.notify_one();

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

void JSBlockIMP(ffi_cif *cif, void *ret, void *args[], void *data) {
  Closure *closure = (Closure *)data;
  napi_env env = closure->env;

  auto currentThreadId = std::this_thread::get_id();

  JSBlockCallContext ctx;
  ctx.cif = cif;
  ctx.ret = ret;
  ctx.args = args;
  ctx.done = false;

  if (currentThreadId == closure->jsThreadId) {
    callJSBlockFromMainThread(env, get_ref_value(env, closure->func), closure,
                              &ctx);
  } else {
    if (!closure->tsfn) {
      assert(false && "Threadsafe functions are not supported");
    }

    napi_acquire_threadsafe_function(closure->tsfn);
    std::unique_lock<std::mutex> lock(ctx.mutex);
    napi_call_threadsafe_function(closure->tsfn, &ctx, napi_tsfn_blocking);
    ctx.cv.wait(lock, [&ctx] { return ctx.done; });
    napi_release_threadsafe_function(closure->tsfn, napi_tsfn_release);
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
