#ifndef PROTOCOL_H
#define PROTOCOL_H

#include "ClassMember.h"
#include "MetadataReader.h"
#include "node_api_util.h"
#include <string>
#include <unordered_set>

using namespace metagen;

namespace objc_bridge {

NAPI_FUNCTION(protocolGetter);

class ObjCProtocol {
public:
  static napi_value jsConstructor(napi_env env, napi_callback_info cbinfo);

  ObjCProtocol(napi_env env, MDSectionOffset offset);
  ~ObjCProtocol();

  napi_env env;
  MDSectionOffset metadataOffset;
  std::string name;
  napi_ref constructor;
  MDSectionOffset membersOffset;
  ObjCClassMemberMap members;
  std::unordered_set<ObjCProtocol *> protocols;
};

} // namespace objc_bridge

#endif /* PROTOCOL_H */
