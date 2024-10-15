#include "Block.h"
#include "Interop.h"
#include "ObjCBridge.h"
#include "js_native_api.h"
#include "node_api_util.h"
#include "objc/runtime.h"
#import <Foundation/Foundation.h>

struct Block_descriptor_1 {
  unsigned long int reserved; // NULL
  unsigned long int size;     // sizeof(struct Block_literal_1)
  // optional helper functions
  void (*copy_helper)(void *dst, void *src); // IFF (1<<25)
  void (*dispose_helper)(void *src);         // IFF (1<<25)
  // required ABI.2010.3.16
  const char *signature; // IFF (1<<30)
};

struct Block_literal_1 {
  void *isa; // initialized to &_NSConcreteStackBlock or &_NSConcreteGlobalBlock
  int flags;
  int reserved;
  void *invoke;
  Block_descriptor_1 *descriptor;
  // imported variables
  objc_bridge::Closure *closure;
};

void block_copy(void *dest, void *src) {}
void block_release(void *src) {}

void block_finalize(napi_env env, void *data, void *hint) {
  auto block = (Block_literal_1 *)data;
  delete block->closure;
  delete block;
}

namespace objc_bridge {

void *stackBlockISA = nullptr;

id registerBlock(napi_env env, Closure *closure, napi_value callback) {
  auto block = new Block_literal_1();
  if (stackBlockISA == nullptr) {
    stackBlockISA = dlsym(RTLD_DEFAULT, "_NSConcreteStackBlock");
  }
  block->isa = stackBlockISA;
  block->flags = (1 << 29) | (1 << 25);
  block->reserved = 0;
  block->invoke = closure->fnptr;
  block->descriptor = new Block_descriptor_1();
  block->closure = closure;

  block->descriptor->reserved = 0;
  block->descriptor->size = sizeof(Block_literal_1);
  block->descriptor->copy_helper = block_copy;
  block->descriptor->dispose_helper = block_release;
  block->descriptor->signature = nullptr;

  napi_remove_wrap(env, callback, nullptr);
  napi_ref ref = nullptr;
  napi_wrap(env, callback, block, block_finalize, nullptr, &ref);
  if (ref == nullptr) {
    // Deno doesn't handle napi_wrap properly.
    ref = make_ref(env, callback, 0);
  }
  closure->func = ref;

  auto bridgeState = ObjCBridgeState::InstanceData(env);
  if (napiSupportsThreadsafeFunctions(bridgeState->self_dl)) {
    napi_value workName;
    napi_create_string_utf8(env, "Block", NAPI_AUTO_LENGTH, &workName);
    napi_create_threadsafe_function(
        env, callback, nullptr, workName, 0, 1, nullptr, nullptr, closure,
        Closure::callBlockFromMainThread, &closure->tsfn);
    if (closure->tsfn)
      napi_unref_threadsafe_function(env, closure->tsfn);
  }

  return (id)block;
}

NAPI_FUNCTION(registerBlock) {
  NAPI_CALLBACK_BEGIN(2)

  char enc[256];
  NAPI_GUARD(napi_get_value_string_utf8(env, argv[0], enc, 256, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  napi_value callback = argv[1];

  auto closure = new Closure(enc, true);
  closure->env = env;
  registerBlock(env, closure, callback);

  return callback;
}

napi_value FunctionPointer::wrap(napi_env env, void *function,
                                 metagen::MDSectionOffset offset,
                                 bool isBlock) {
  FunctionPointer *ref = new FunctionPointer();
  ref->function = function;
  ref->offset = offset;

  ObjCBridgeState *bridgeState = ObjCBridgeState::InstanceData(env);

  if (isBlock) {
    ref->cif = bridgeState->getBlockCif(env, offset);
  } else {
    ref->cif = bridgeState->getCFunctionCif(env, offset);
  }

  napi_value result;
  napi_create_function(
      env, isBlock ? "objcBlockWrapper" : "cFunctionWrapper", NAPI_AUTO_LENGTH,
      isBlock ? jsCallAsBlock : jsCallAsCFunction, ref, &result);

  napi_ref jsRef;
  napi_add_finalizer(env, result, ref, FunctionPointer::finalize, nullptr,
                     &jsRef);

  return result;
}

void FunctionPointer::finalize(napi_env env, void *finalize_data,
                               void *finalize_hint) {
  auto ref = (FunctionPointer *)finalize_data;
  delete ref;
}

napi_value FunctionPointer::jsCallAsCFunction(napi_env env,
                                              napi_callback_info cbinfo) {
  FunctionPointer *ref;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, (void **)&ref);

  auto cif = ref->cif;

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, nullptr, nullptr);

  void *avalues[cif->argc];
  void *rvalue = cif->rvalue;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      avalues[i] = cif->avalues[i];
      cif->argTypes[i]->toNative(env, cif->argv[i], avalues[i], &shouldFree[i],
                                 &shouldFreeAny);
    }
  }

  ffi_call(&cif->cif, FFI_FN(ref->function), rvalue, avalues);

  if (shouldFreeAny) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      if (shouldFree[i]) {
        cif->argTypes[i]->free(env, *((void **)avalues[i]));
      }
    }
  }

  return cif->returnType->toJS(env, rvalue);
}

napi_value FunctionPointer::jsCallAsBlock(napi_env env,
                                          napi_callback_info cbinfo) {
  FunctionPointer *ref;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, (void **)&ref);

  Block_literal_1 *block = (Block_literal_1 *)ref->function;
  auto cif = ref->cif;

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, nullptr, nullptr);

  void *avalues[cif->cif.nargs];
  void *rvalue = cif->rvalue;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  avalues[0] = &block;

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      avalues[i + 1] = cif->avalues[i];
      cif->argTypes[i]->toNative(env, cif->argv[i], avalues[i + 1],
                                 &shouldFree[i], &shouldFreeAny);
    }
  }

  ffi_call(&cif->cif, FFI_FN(block->invoke), rvalue, avalues);

  if (shouldFreeAny) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      if (shouldFree[i]) {
        cif->argTypes[i]->free(env, *((void **)avalues[i + 1]));
      }
    }
  }

  return cif->returnType->toJS(env, rvalue);
}

} // namespace objc_bridge
