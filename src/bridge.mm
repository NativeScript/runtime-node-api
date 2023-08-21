#include "bridge.h"
#include "Metadata.h"
#include "autoreleasepool.h"
#include "block.h"
#include "class.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "native_call.h"
#include "node_api_util.h"
#include "objc_bridge_data.h"
#include "struct.h"
#include "type_conv.h"
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

NAPI_FUNCTION(structGetter) {
  NAPI_PREAMBLE

  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);

  auto bridgeData = ObjCBridgeData::InstanceData(env);
  auto structInfo = bridgeData->getStructInfo(env, offset);
  return StructObject::getJSClass(env, structInfo);
}

NAPI_FUNCTION(classGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  auto bridgeData = ObjCBridgeData::InstanceData(env);

  auto cached = bridgeData->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  std::string name = bridgeData->metadata->getString(offset);
  auto cls = bridgeData->getBridgedClass(env, name);

  if (cls != nullptr) {
    bridgeData->mdValueCache[offset] = cls->constructor;
  } else {
    return nullptr;
  }

  return get_ref_value(env, cls->constructor);
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
      NAPI_FUNCTION_DESC(getClass),        NAPI_FUNCTION_DESC(registerClass),
      NAPI_FUNCTION_DESC(registerBlock),   NAPI_FUNCTION_DESC(import),
      NAPI_FUNCTION_DESC(autoreleasepool),
  };

  NAPI_GUARD(napi_define_properties(env, exports, 5, properties)) {
    NAPI_THROW_LAST_ERROR
    return exports;
  }

  napi_value global;
  napi_get_global(env, &global);

  MDSectionOffset offset = bridgeData->metadata->structsOffset;
  while (offset < bridgeData->metadata->size) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto size = bridgeData->metadata->getArraySize(offset);
    offset += sizeof(uint16_t);

    std::string nameStr = name;
    bridgeData->structOffsets[nameStr] = originalOffset;

    bool next = true;
    while (next) {
      MDSectionOffset nameOffset = bridgeData->metadata->getOffset(offset);
      next = (nameOffset & mdSectionOffsetNext) != 0;
      nameOffset &= ~mdSectionOffsetNext;
      auto name = bridgeData->metadata->resolveString(nameOffset);
      offset += sizeof(MDSectionOffset);
      offset += sizeof(uint16_t);
      TypeConv::Make(env, bridgeData->metadata, &offset);
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_structGetter,
    };
    napi_define_properties(env, global, 1, &prop);
  }

  offset = bridgeData->metadata->constantsOffset;
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

  offset = bridgeData->metadata->classesOffset;
  while (offset < bridgeData->metadata->structsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto superclass = bridgeData->metadata->getOffset(offset);
    offset += sizeof(superclass);

    bool next = (superclass & mdSectionOffsetNext) != 0;

    while (next) {
      auto flags = bridgeData->metadata->getMemberFlag(offset);
      next = (flags & mdMemberNext) != 0;
      offset += sizeof(flags);

      if ((flags & mdMemberProperty) != 0) {
        bool readonly = (flags & mdMemberReadonly) != 0;
        offset += sizeof(MDSectionOffset); // name
        offset += sizeof(MDSectionOffset); // getterSelector
        if (!readonly)
          offset += sizeof(MDSectionOffset); // setterSelector
        offset += sizeof(MDSectionOffset);   // getterSignature
        if (!readonly)
          offset += sizeof(MDSectionOffset); // setterSignature
      } else {
        offset += sizeof(MDSectionOffset); // selector
        offset += sizeof(MDSectionOffset); // signature
      }
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_classGetter,
    };

    napi_define_properties(env, global, 1, &prop);
  }

  return exports;
}
