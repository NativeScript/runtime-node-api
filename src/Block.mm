#include "Block.h"
#include "ObjCBridge.h"
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
    napi_create_threadsafe_function(env, callback, nullptr, workName, 0, 1,
                                    nullptr, nullptr, closure,
                                    callJSBlockFromMainThread, &closure->tsfn);
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

} // namespace objc_bridge
