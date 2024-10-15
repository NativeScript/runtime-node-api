#ifndef BLOCK_H
#define BLOCK_H

#include "Cif.h"
#include "Closure.h"
#include "node_api_util.h"
#include <cstdlib>

namespace objc_bridge {

class FunctionPointer {
public:
  void *function;
  metagen::MDSectionOffset offset;
  Cif *cif;

  static napi_value wrap(napi_env env, void *function, metagen::MDSectionOffset offset, bool isBlock);
  static void finalize(napi_env env, void *finalize_data, void *finalize_hint);

  static napi_value jsCallAsCFunction(napi_env env, napi_callback_info cbinfo);
  static napi_value jsCallAsBlock(napi_env env, napi_callback_info cbinfo);
};

id registerBlock(napi_env env, Closure *closure, napi_value callback);

NAPI_FUNCTION(registerBlock);

} // namespace objc_bridge

#endif /* BLOCK_H */
