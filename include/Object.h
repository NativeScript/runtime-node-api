#ifndef OBJECT_H
#define OBJECT_H

#include "ObjCBridge.h"

namespace objc_bridge {

void initProxyFactory(napi_env env, ObjCBridgeState *bridgeState);

} // namespace objc_bridge

#endif /* OBJECT_H */
