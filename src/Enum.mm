#include "Enum.h"
#include "ObjCBridge.h"
#import <Foundation/Foundation.h>

namespace objc_bridge {

void ObjCBridgeState::registerEnumGlobals(napi_env env, napi_value global) {
  MDSectionOffset offset = metadata->enumsOffset;
  while (offset < metadata->signaturesOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = metadata->getString(offset);
    offset += sizeof(MDSectionOffset);

    bool next = true;
    while (next) {
      auto nameOffset = metadata->getOffset(offset);
      next = (nameOffset & mdSectionOffsetNext) != 0;
      offset += sizeof(MDSectionOffset);
      offset += sizeof(int64_t);
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes =
            (napi_property_attributes)(napi_enumerable | napi_configurable),
        .getter = JS_enumGetter,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = nullptr,
    };
    napi_define_properties(env, global, 1, &prop);
  }
}

NAPI_FUNCTION(enumGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  MDSectionOffset originalOffset = offset;
  auto bridgeState = ObjCBridgeState::InstanceData(env);

  auto cached = bridgeState->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  napi_value result;
  napi_create_object(env, &result);

  // name
  offset += sizeof(MDSectionOffset);

  bool next = true;
  while (next) {
    auto nameOffset = bridgeState->metadata->getOffset(offset);
    next = (nameOffset & mdSectionOffsetNext) != 0;
    nameOffset &= ~mdSectionOffsetNext;
    auto name = bridgeState->metadata->resolveString(nameOffset);
    offset += sizeof(MDSectionOffset);
    int64_t value = bridgeState->metadata->getEnumValue(offset);
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

  bridgeState->mdValueCache[originalOffset] = make_ref(env, result);

  return result;
}

} // namespace objc_bridge