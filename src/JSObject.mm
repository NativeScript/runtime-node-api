#include "JSObject.h"
#include "ObjCBridge.h"
#include "js_native_api.h"

#import <Foundation/Foundation.h>

void JSObject_finalize(napi_env, void *data, void *) {
  id obj = (id)data;
  [obj release];
}

@interface JSObject : NSObject {
  napi_env env;
  napi_ref ref;
  objc_bridge::ObjCBridgeState *bridgeState;
}

- (instancetype)initWithEnv:(napi_env)env value:(napi_value)value;
- (napi_value)value;

@end

@implementation JSObject

- (instancetype)initWithEnv:(napi_env)_env value:(napi_value)value {
  [super init];
  self->env = _env;
  napi_add_finalizer(env, value, self, JSObject_finalize, nullptr, &ref);
  uint32_t result;
  napi_reference_ref(env, ref, &result);
  napi_wrap(env, value, self, nullptr, nullptr, nullptr);
  bridgeState = objc_bridge::ObjCBridgeState::InstanceData(env);
  bridgeState->objectRefs[self] = ref;
  return self;
}

- (napi_value)value {
  napi_value result;
  napi_get_reference_value(env, ref, &result);
  return result;
}

- (void)dealloc {
  napi_delete_reference(env, ref);
  bridgeState->objectRefs.erase(self);
  [super dealloc];
}

@end

@protocol Test

@optional
@property(nonatomic, readonly) bool optionalString;

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
