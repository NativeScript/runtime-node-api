#ifndef PROTOCOL_H
#define PROTOCOL_H

#include "Metadata.h"
#include "node_api_util.h"
#include <string>

namespace objc_bridge {

NAPI_FUNCTION(protocolGetter);
NAPI_FUNCTION(ProtocolConstructor);

class BridgedProtocol {
public:
  MDSectionOffset metadataOffset;
  std::string name;
  napi_ref constructor;

  BridgedProtocol(napi_env env, MDSectionOffset offset);
};

} // namespace objc_bridge

#endif /* PROTOCOL_H */
