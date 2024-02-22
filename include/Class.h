#ifndef BRIDGED_CLASS_H
#define BRIDGED_CLASS_H

#include "ClassMember.h"
#include "MetadataReader.h"
#include "node_api_util.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <string>
#include <unordered_set>

using namespace metagen;

namespace objc_bridge {

void initFastEnumeratorIteratorFactory(napi_env env,
                                       ObjCBridgeState *bridgeState);

NAPI_FUNCTION(registerClass);
NAPI_FUNCTION(import);
NAPI_FUNCTION(classGetter);

class ObjCBridgeState;

class ObjCClass {
public:
  ObjCClass() {}
  ObjCClass(napi_env env, MDSectionOffset offset);
  ~ObjCClass();

  ObjCBridgeState *bridgeState;
  napi_env env;
  napi_ref constructor;
  napi_ref prototype;
  MDSectionOffset metadataOffset;
  std::string name;
  Class nativeClass;
  ObjCClass *superclass;
  ObjCClassMemberMap members;
};

} // namespace objc_bridge

#endif /* BRIDGED_CLASS_H */
