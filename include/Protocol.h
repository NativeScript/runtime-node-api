#ifndef PROTOCOL_H
#define PROTOCOL_H

#include "MetadataReader.h"
#include "node_api_util.h"
#include <string>

using namespace metagen;

namespace objc_bridge {

NAPI_FUNCTION(protocolGetter);
NAPI_FUNCTION(ProtocolConstructor);

void defineProtocolMembers(napi_env env, MDSectionOffset offset,
                           napi_value constructor);

class BridgedProtocol {
public:
  MDSectionOffset metadataOffset;
  std::string name;
  napi_ref constructor;
  MDSectionOffset membersOffset;

  BridgedProtocol(napi_env env, MDSectionOffset offset);
};

} // namespace objc_bridge

#endif /* PROTOCOL_H */
