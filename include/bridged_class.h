#ifndef BRIDGED_CLASS_H
#define BRIDGED_CLASS_H

#include "node_api.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <set>
#include <string>

class BridgedClass {
public:
  std::string name;
  Class nativeClass;

  napi_ref constructor;
  napi_ref prototype;

  BridgedClass(napi_env env, std::string name);
};

#endif /* BRIDGED_CLASS_H */
