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

NAPI_FUNCTION(registerClass);
NAPI_FUNCTION(import);
NAPI_FUNCTION(classGetter);

class ObjCClass {
public:
  MDSectionOffset metadataOffset;
  std::string name;
  Class nativeClass;

  ObjCClass *superclass;
  std::vector<std::shared_ptr<ObjCClassMember>> members;

  napi_env env;
  napi_ref constructor;
  napi_ref prototype;

  ObjCClass() {}
  ObjCClass(napi_env env, MDSectionOffset offset);
  ~ObjCClass();
};

} // namespace objc_bridge

#endif /* BRIDGED_CLASS_H */
