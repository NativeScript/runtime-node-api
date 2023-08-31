#ifndef BLOCK_H
#define BLOCK_H

#include "Closure.h"
#include "node_api_util.h"
#include <cstdlib>

namespace objc_bridge {

void registerBlock(napi_env env, Closure *closure, napi_value callback);

NAPI_FUNCTION(registerBlock);

} // namespace objc_bridge

#endif /* BLOCK_H */
