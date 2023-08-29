#include "class.h"
#include "node_api_util.h"
#import <Foundation/Foundation.h>

namespace objc_bridge {

NAPI_FUNCTION(registerClass) {
  NAPI_CALLBACK_BEGIN(1)
  auto bridgeData = ObjCBridgeData::InstanceData(env);
  bridgeData->registerClass(env, argv[0]);
  return nullptr;
}

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

NAPI_FUNCTION(import) {
  NAPI_CALLBACK_BEGIN(1)

  NAPI_GUARD(
      napi_get_value_string_utf8(env, argv[0], class_name, 256, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  std::string name = class_name;

  if (!name.starts_with("/")) {
    name = "/System/Library/Frameworks/" + name + ".framework";
  }

  NSBundle *bundle =
      [NSBundle bundleWithPath:[NSString stringWithUTF8String:name.c_str()]];
  if (bundle == nil) {
    NSLog(@"Could not find bundle: %s", name.c_str());
    return nullptr;
  }

  bool loaded = [bundle load];

  if (!loaded) {
    NSLog(@"Could not load bundle: %s", name.c_str());
    return nullptr;
  }

  return nullptr;
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

} // namespace objc_bridge
