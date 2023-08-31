#include "Enum.h"
#include "ObjCBridgeData.h"

namespace objc_bridge {

NAPI_FUNCTION(enumGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  MDSectionOffset originalOffset = offset;
  auto bridgeData = ObjCBridgeData::InstanceData(env);

  auto cached = bridgeData->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  napi_value result;
  napi_create_object(env, &result);

  // name
  offset += sizeof(MDSectionOffset);

  bool next = true;
  while (next) {
    auto nameOffset = bridgeData->metadata->getOffset(offset);
    next = (nameOffset & mdSectionOffsetNext) != 0;
    nameOffset &= ~mdSectionOffsetNext;
    auto name = bridgeData->metadata->resolveString(nameOffset);
    offset += sizeof(MDSectionOffset);
    int64_t value = bridgeData->metadata->getEnumValue(offset);
    offset += sizeof(int64_t);

    napi_value member;
    napi_create_int64(env, value, &member);

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .getter = nullptr,
        .setter = nullptr,
        .value = member,
        .data = nullptr,
        .method = nullptr,
    };

    napi_define_properties(env, result, 1, &prop);
  }

  bridgeData->mdValueCache[originalOffset] = make_ref(env, result);

  return result;
}

} // namespace objc_bridge