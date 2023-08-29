#ifndef CLASS_H
#define CLASS_H

#include "node_api_util.h"

namespace objc_bridge {

NAPI_FUNCTION(registerClass);
NAPI_FUNCTION(getClass);
NAPI_FUNCTION(import);
NAPI_FUNCTION(classGetter);

} // namespace objc_bridge

#endif /* CLASS_H */
