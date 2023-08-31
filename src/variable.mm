#include "Variable.h"
#include "Metadata.h"
#include "ObjCBridgeData.h"

namespace objc_bridge {

NAPI_FUNCTION(variableGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  MDSectionOffset originalOffset = offset;
  auto bridgeData = ObjCBridgeData::InstanceData(env);

  auto cached = bridgeData->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  // name
  offset += sizeof(MDSectionOffset);
  // typeKind
  offset += sizeof(MDTypeKind);

  auto evalKind = bridgeData->metadata->getVariableEvalKind(offset);
  offset += sizeof(MDVariableEvalKind);

  napi_value result = nullptr;

  switch (evalKind) {
  case mdEvalDouble: {
    auto value = bridgeData->metadata->getDouble(offset);
    napi_create_double(env, value, &result);
    break;
  }

  case mdEvalInt64: {
    auto value = bridgeData->metadata->getInt64(offset);
    napi_create_int64(env, value, &result);
    break;
  }

  case mdEvalString: {
    auto value = bridgeData->metadata->getString(offset);
    napi_create_string_utf8(env, value, NAPI_AUTO_LENGTH, &result);
    break;
  }

  default:
    break;
  }

  if (result != nullptr) {
    bridgeData->mdValueCache[originalOffset] = make_ref(env, result);
  }

  return result;
}

} // namespace objc_bridge
