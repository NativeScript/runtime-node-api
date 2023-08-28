#include "js_object.h"
#include "js_native_api.h"
#include "objc_bridge_data.h"

#import <Foundation/Foundation.h>

void JSObject_finalize(napi_env, void *data, void *) {
  id obj = (id)data;
  [obj release];
}

@interface JSObject : NSObject

@property(nonatomic) objc_bridge::ObjCBridgeData *bridgeData;
@property(nonatomic) napi_env env;
@property(nonatomic) napi_ref ref;

- (instancetype)initWithEnv:(napi_env)env value:(napi_value)value;
- (napi_value)value;

@end

@implementation JSObject

- (instancetype)initWithEnv:(napi_env)env value:(napi_value)value {
  [super init];
  self.env = env;
  napi_add_finalizer(env, value, self, JSObject_finalize, nullptr, &_ref);
  uint32_t result;
  napi_reference_ref(env, _ref, &result);
  napi_wrap(env, value, self, nullptr, nullptr, nullptr);
  _bridgeData = objc_bridge::ObjCBridgeData::InstanceData(env);
  _bridgeData->objectRefs[self] = _ref;
  return self;
}

- (napi_value)value {
  napi_value result;
  napi_get_reference_value(self.env, self.ref, &result);
  return result;
}

- (void)dealloc {
  napi_delete_reference(self.env, self.ref);
  _bridgeData->objectRefs.erase(self);
  [super dealloc];
}

@end

namespace objc_bridge {

id jsObjectToId(napi_env env, napi_value value) {
  return [[JSObject alloc] initWithEnv:env value:value];
}

napi_value idToJsObject(napi_env env, id obj) {
  if (obj == nil) {
    return nullptr;
  }
  if ([obj isKindOfClass:[JSObject class]]) {
    return [((JSObject *)obj) value];
  }
  return nil;
}

} // namespace objc_bridge
