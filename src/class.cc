#include "class.h"

char class_name[256];

NAPI_FUNCTION(getClass) {
  NAPI_CALLBACK_BEGIN(1)

  NAPI_GUARD(
      napi_get_value_string_utf8(env, argv[0], class_name, 256, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  auto bridgeData = ObjCBridgeData::InstanceData(env);
  std::string name = class_name;
  auto cls = bridgeData->getBridgedClass(env, name);

  if (cls == nullptr) {
    return nullptr;
  }

  return get_ref_value(env, cls->constructor);
}
