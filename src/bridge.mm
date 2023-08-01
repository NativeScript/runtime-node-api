#include "bridge.h"
#include "Metadata.h"
#include "block.h"
#include "class.h"
#include "native_call.h"
#include "node_api_util.h"
#include "objc_bridge_data.h"
#import <Foundation/Foundation.h>

using namespace objc_bridge;

void finalize_bridge_data(napi_env env, void *data, void *hint) {
  ObjCBridgeData *bridgeData = (ObjCBridgeData *)data;
  delete bridgeData;
}

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

NAPI_EXPORT NAPI_MODULE_REGISTER {
  NAPI_PREAMBLE

  ObjCBridgeData *bridgeData = new ObjCBridgeData();

  NAPI_GUARD(napi_set_instance_data(env, (void *)bridgeData,
                                    finalize_bridge_data, nil)) {
    NAPI_THROW_LAST_ERROR
    return exports;
  }

  const napi_property_descriptor properties[] = {
      NAPI_FUNCTION_DESC(getClass),
      NAPI_FUNCTION_DESC(registerClass),
      NAPI_FUNCTION_DESC(registerBlock),
      NAPI_FUNCTION_DESC(import),
  };

  NAPI_GUARD(napi_define_properties(env, exports, 4, properties)) {
    NAPI_THROW_LAST_ERROR
    return exports;
  }

  napi_value global;
  napi_get_global(env, &global);

  MDSectionOffset offset = bridgeData->metadata->constantsOffset;
  while (offset < bridgeData->metadata->enumsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto typeKind = bridgeData->metadata->getTypeKind(offset);
    offset += sizeof(MDTypeKind);
    auto evalKind = bridgeData->metadata->getVariableEvalKind(offset);
    offset += sizeof(MDVariableEvalKind);

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .getter = JS_variableGetter,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = nullptr,
    };

    switch (evalKind) {
    case mdEvalDouble: {
      offset += sizeof(double);
      napi_define_properties(env, global, 1, &prop);
      break;
    }

    case mdEvalInt64: {
      offset += sizeof(int64_t);
      napi_define_properties(env, global, 1, &prop);
      break;
    }

    case mdEvalString: {
      offset += sizeof(MDSectionOffset);
      napi_define_properties(env, global, 1, &prop);
      break;
    }

    default:
      break;
    }
  }

  offset = bridgeData->metadata->enumsOffset;
  while (offset < bridgeData->metadata->signaturesOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);

    bool next = true;
    while (next) {
      auto nameOffset = bridgeData->metadata->getOffset(offset);
      next = (nameOffset & mdSectionOffsetNext) != 0;
      offset += sizeof(MDSectionOffset);
      offset += sizeof(int64_t);
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .getter = JS_enumGetter,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = nullptr,
    };
    napi_define_properties(env, global, 1, &prop);
  }

  offset = bridgeData->metadata->functionsOffset;
  while (offset < bridgeData->metadata->protocolsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto signature = bridgeData->metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .getter = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = JS_CFunction,
    };

    napi_define_properties(env, global, 1, &prop);
  }

  return exports;
}
