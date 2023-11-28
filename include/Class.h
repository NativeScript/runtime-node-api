#ifndef BRIDGED_CLASS_H
#define BRIDGED_CLASS_H

#include "MetadataReader.h"
#include "node_api_util.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <set>
#include <string>

using namespace metagen;

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

  napi_env env;
  napi_ref constructor;
  napi_ref prototype;

  BridgedClass() {}
  BridgedClass(napi_env env, MDSectionOffset offset);
  ~BridgedClass();
};

} // namespace objc_bridge

#endif /* BRIDGED_CLASS_H */
