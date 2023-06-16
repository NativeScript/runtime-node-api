#include "class.h"

char class_name[256];

NAPI_FUNCTION(getClass) {
  NAPI_CALLBACK_BEGIN(1)

  NAPI_GUARD(
      napi_get_value_string_utf8(env, argv[0], class_name, 256, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  GET_BRIDGE_DATA

  auto name = std::string(class_name);

  auto cls = bridgeData->get_bridged_class(env, name);

  if (cls == nullptr) {
    return nullptr;
  }

  return get_ref(env, cls->constructor);
}
