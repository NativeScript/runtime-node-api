#ifndef CLASS_H
#define CLASS_H

#include "node_api_util.h"
#include <cstdlib>

namespace objc_bridge {

NAPI_FUNCTION(registerClass);
NAPI_FUNCTION(getClass);
NAPI_FUNCTION(import);

}

#endif /* CLASS_H */
