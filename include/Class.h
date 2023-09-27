#ifndef BRIDGED_CLASS_H
#define BRIDGED_CLASS_H

#include "Metadata.h"
#include "node_api_util.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <set>
#include <string>

namespace objc_bridge {

NAPI_FUNCTION(registerClass);
NAPI_FUNCTION(import);
NAPI_FUNCTION(classGetter);

class BridgedClass {
public:
  MDSectionOffset metadataOffset;
  std::string name;
  Class nativeClass;

  BridgedClass *superclass;

  napi_ref constructor;
  napi_ref prototype;
  napi_ref supercallPrototype;
  napi_ref supercallConstructor;

  BridgedClass() {}
  BridgedClass(napi_env env, MDSectionOffset offset);
};

} // namespace objc_bridge

#endif /* BRIDGED_CLASS_H */
