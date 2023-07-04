#ifndef BRIDGED_CLASS_H
#define BRIDGED_CLASS_H

#include "js_native_api.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <set>
#include <string>

namespace objc_bridge {

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
