#ifndef BRIDGED_CLASS_H
#define BRIDGED_CLASS_H

#include "node_api_util.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <set>
#include <string>

namespace objc_bridge {

NAPI_FUNCTION(registerClass);
NAPI_FUNCTION(getClass);
NAPI_FUNCTION(import);
NAPI_FUNCTION(classGetter);

class BridgedClass {
public:
  std::string name;
  Class nativeClass;

  napi_ref constructor;
  napi_ref prototype;
  napi_ref supercallPrototype;
  napi_ref supercallConstructor;

  BridgedClass() {}
  BridgedClass(napi_env env, std::string name);
};

} // namespace objc_bridge

#endif /* BRIDGED_CLASS_H */
