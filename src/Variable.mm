#include "Variable.h"
#include "MetadataReader.h"
#include "ObjCBridge.h"
#include "js_native_api.h"

namespace objc_bridge {

void ObjCBridgeState::registerVarGlobals(napi_env env, napi_value global) {
  auto offset = metadata->constantsOffset;
  while (offset < metadata->enumsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto evalKind = metadata->getVariableEvalKind(offset);
    offset += sizeof(MDVariableEvalKind);

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes =
            (napi_property_attributes)(napi_enumerable | napi_configurable),
        .getter = JS_variableGetter,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = nullptr,
    };

    napi_define_properties(env, global, 1, &prop);

    switch (evalKind) {
    case mdEvalDouble: {
      offset += sizeof(double);
      break;
    }

    case mdEvalInt64: {
      offset += sizeof(int64_t);
      break;
    }

    case mdEvalString: {
      offset += sizeof(MDSectionOffset);
      break;
    }

    default:
      TypeConv::Make(env, metadata, &offset);
      break;
    }
  }
}

NAPI_FUNCTION(variableGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  MDSectionOffset originalOffset = offset;
  auto bridgeState = ObjCBridgeState::InstanceData(env);

  auto cached = bridgeState->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  // Name
  auto name = bridgeState->metadata->getString(offset);
  offset += sizeof(MDSectionOffset);

  // Eval kind
  auto evalKind = bridgeState->metadata->getVariableEvalKind(offset);
  offset += sizeof(MDVariableEvalKind);

  napi_value result = nullptr;

  switch (evalKind) {
  case mdEvalDouble: {
    auto value = bridgeState->metadata->getDouble(offset);
    napi_create_double(env, value, &result);
    break;
  }

  case mdEvalInt64: {
    auto value = bridgeState->metadata->getInt64(offset);
    napi_create_int64(env, value, &result);
    break;
  }

  case mdEvalString: {
    auto value = bridgeState->metadata->getString(offset);
    napi_create_string_utf8(env, value, NAPI_AUTO_LENGTH, &result);
    if (result != nullptr) {
      bridgeState->mdValueCache[originalOffset] = make_ref(env, result);
    }
    break;
  }

  default: {
    auto type = TypeConv::Make(env, bridgeState->metadata, &offset);
    auto value = dlsym(bridgeState->self_dl, name);
    if (value == nullptr) {
      napi_get_null(env, &result);
    } else {
      result = type->toJS(env, value);
    }
    return result;
  }
  }

  return result;
}

} // namespace objc_bridge
