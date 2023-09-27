#ifndef AUTORELEASEPOOL_H
#define AUTORELEASEPOOL_H

#include "node_api_util.h"

extern "C" {
void *objc_autoreleasePoolPush(void);
void objc_autoreleasePoolPop(void *pool);
}

namespace objc_bridge {

NAPI_FUNCTION(autoreleasepool);

} // namespace objc_bridge

#endif // AUTORELEASEPOOL_H
