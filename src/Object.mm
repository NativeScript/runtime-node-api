#include "Object.h"
#include "JSObject.h"
#include "ObjCBridge.h"
#include "js_native_api.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <objc/runtime.h>

static SEL JSWrapperObjectAssociationKey = @selector(JSWrapperObjectAssociationKey);

@interface JSWrapperObjectAssociation : NSObject

@property (nonatomic) napi_env env;
@property (nonatomic) napi_ref ref;

+ (void)transferOwnership:(napi_env)env of:(napi_value)value toNative:(id)object;

+ (instancetype)associationFor:(id)object;

- (instancetype)initWithEnv:(napi_env)env ref:(napi_ref)ref;

@end

@implementation JSWrapperObjectAssociation

- (instancetype)initWithEnv:(napi_env)env ref:(napi_ref)ref {
  self = [super init];
  if (self) {
    self.env = env;
    self.ref = ref;
  }
  return self;
}

+ (void)transferOwnership:(napi_env)env of:(napi_value)value toNative:(id)object {
  napi_ref ref = objc_bridge::make_ref(env, value);
  JSWrapperObjectAssociation *association = [[JSWrapperObjectAssociation alloc] initWithEnv:env ref:ref];
  objc_setAssociatedObject(object, JSWrapperObjectAssociationKey, association, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
}

+ (instancetype)associationFor:(id)object {
  return objc_getAssociatedObject(object, JSWrapperObjectAssociationKey);
}

- (void)dealloc {
  [super dealloc];
  napi_delete_reference(self.env, self.ref);
}

@end

napi_value JS_transferOwnershipToNative(napi_env env, napi_callback_info cbinfo) {
  size_t argc = 1;
  napi_value arg;
  napi_get_cb_info(env, cbinfo, &argc, &arg, nullptr, nullptr);

  id obj = nil;
  napi_unwrap(env, arg, (void **)&obj);
  
  [JSWrapperObjectAssociation transferOwnership:env of:arg toNative:obj];

  return nullptr;
}

namespace objc_bridge {

const char *nativeObjectProxySource = R"(
  (function (object, isArray, transferOwnershipToNative) {
    let isTransfered = false;

    return new Proxy(object, {
      get (target, name) {
        if (name in target) {
          return target[name];
        }

        if (isArray) {
          const index = Number(name);
          if (!isNaN(index)) {
            return target.objectAtIndex(index);
          }
        }
      },

      set (target, name, value) {
        if (isArray) {
          const index = Number(name);
          if (!isNaN(index)) {
            target.setObjectAtIndexedSubscript(value, index);
            return true;
          }
        }

        if (!(name in target) && !isTransfered) {
          isTransfered = true;
          transferOwnershipToNative(target);
        }

        target[name] = value;

        return true;
      },
    });
  })
)";

void initProxyFactory(napi_env env, ObjCBridgeState *state) {
  napi_value script, result;
  napi_create_string_utf8(env, nativeObjectProxySource, NAPI_AUTO_LENGTH,
                          &script);
  napi_run_script(env, script, &result);
  state->createNativeProxy = make_ref(env, result);

  napi_value transferOwnershipToNative;
  napi_create_function(env, "transferOwnershipToNative", NAPI_AUTO_LENGTH, JS_transferOwnershipToNative, nullptr, &transferOwnershipToNative);
  state->transferOwnershipToNative = make_ref(env, transferOwnershipToNative);
}

void finalize_objc_object(napi_env /*env*/, void *data, void *hint) {
  id object = static_cast<id>(data);
  ObjCBridgeState *bridgeState = static_cast<ObjCBridgeState *>(hint);
  bridgeState->unregisterObject(object);
}

napi_value ObjCBridgeState::getObject(napi_env env, id obj,
                                      napi_value constructor,
                                      ObjectOwnership ownership) {
  if (obj == nil) {
    return nullptr;
  }

  NAPI_PREAMBLE

  auto find = objectRefs.find(obj);
  if (find != objectRefs.end()) {
    auto value = get_ref_value(env, find->second);
    if (value != nullptr) {
      return value;
    }

    unregisterObject(obj);
  }

  JSWrapperObjectAssociation *association = [JSWrapperObjectAssociation associationFor:obj];
  if (association != nil) {
    napi_value jsObject = get_ref_value(env, association.ref);
    [obj retain];
    return proxyNativeObject(env, jsObject, obj);
  }

  napi_value result = nil;

  Class cls = object_getClass(obj);

  if (cls == nullptr) {
    return nullptr;
  }

  bool isClass = false;

  if (class_isMetaClass(cls)) {
    cls = (Class)obj;
    isClass = true;
  }

  if (isClass) {
    result = constructor;
  } else {
    NAPI_GUARD(napi_new_instance(env, constructor, 0, nullptr, &result)) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }

    NAPI_GUARD(napi_wrap(env, result, obj, nullptr, nullptr, nullptr)) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }

    napi_value orig = result;

    if (ownership == kUnownedObject) {
      [obj retain];
    }

    result = proxyNativeObject(env, result, obj);

// #if DEBUG
    // napi_value global, Error, error, stack;
    // napi_get_global(env, &global);
    // napi_get_named_property(env, global, "Error", &Error);
    // napi_new_instance(env, Error, 0, nullptr, &error);
    // napi_get_named_property(env, error, "stack", &stack);

    // size_t stackSize;
    // napi_get_value_string_utf8(env, stack, nullptr, 0, &stackSize);
    // char *stackStr = new char[stackSize + 1];
    // napi_get_value_string_utf8(env, stack, stackStr, stackSize + 1, nullptr);

    // NSString *str = [NSString stringWithFormat:@"Wrapped object <%s: %p> @ %ld # %s",
    //       class_getName(cls), obj, [obj retainCount], stackStr];
    // dbglog([str UTF8String]);

    // delete[] stackStr;
// #endif
  }

  return result;
}

napi_value findConstructorForObject(napi_env env, ObjCBridgeState *bridgeState,
                                    id object, Class cls = nil) {
  if (cls == nil) {
    cls = object_getClass(object);
  }

  // Look up if there is a custom class for it already
  {
    auto find = bridgeState->classesByPointer.find(cls);
    if (find != bridgeState->classesByPointer.end()) {
      return get_ref_value(env, find->second->constructor);
    }
  }

  // Look up if there is a custom constructor for it already
  {
    auto find = bridgeState->constructorsByPointer.find(cls);
    if (find != bridgeState->constructorsByPointer.end()) {
      return get_ref_value(env, find->second);
    }
  }

  // Look up if there is a metadata-defined class
  {
    auto find = bridgeState->mdClassesByPointer.find(cls);
    if (find != bridgeState->mdClassesByPointer.end()) {
      auto cls = bridgeState->getClass(env, find->second);
      return get_ref_value(env, cls->constructor);
    }
  }

  // Look up the protocols implemented by this class, if we define those in
  // metadata, can construct based on it.
  {
    unsigned int count;
    auto protocols = class_copyProtocolList(cls, &count);
    std::unordered_set<ObjCProtocol *> impls;

    std::function<void(Protocol **, unsigned int)> processProtocolList =
        [&](Protocol **list, unsigned int count) {
          for (unsigned int i = 0; i < count; i++) {
            auto protocol = list[i];
            auto find = bridgeState->mdProtocolsByPointer.find(protocol);
            if (find != bridgeState->mdProtocolsByPointer.end()) {
              impls.insert(bridgeState->getProtocol(env, find->second));
            }
            list = protocol_copyProtocolList(protocol, &count);
            processProtocolList(list, count);
          }
        };

    processProtocolList(protocols, count);

    if (!impls.empty()) {
      napi_value constructor;
      napi_define_class(env, class_getName(cls), NAPI_AUTO_LENGTH,
                        ObjCProtocol::jsConstructor, nullptr, 0, nullptr,
                        &constructor);
      for (auto impl : impls) {
        ObjCClassMember::defineMembers(env, impl->members, impl->membersOffset,
                                       constructor);
      }

      bridgeState->constructorsByPointer[cls] = make_ref(env, constructor);

      return constructor;
    }
  }

  Class superclass = class_getSuperclass(cls);
  if (superclass != nullptr) {
    return findConstructorForObject(env, bridgeState, object, superclass);
  }

  return nullptr;
}

// Get a napi_value for an Objective-C object, creating it if it doesn't exist.
// Here we also ensure that the native object always points to the same
// JS object, this makes sure that we only ever finalize it once.
// Might want to consider using associated objects instead of a hashtable.
napi_value
ObjCBridgeState::getObject(napi_env env, id obj, ObjectOwnership ownership,
                           MDSectionOffset classOffset,
                           std::vector<MDSectionOffset> *protocolOffsets) {
  NAPI_PREAMBLE

  if (obj == nullptr) {
    return nullptr;
  }

  auto find = objectRefs.find(obj);
  if (find != objectRefs.end()) {
    auto value = get_ref_value(env, find->second);
    if (value != nullptr) {
      return value;
    }

    // It was collected, but not unregistered yet.
    unregisterObject(obj);
  }

  auto findClass = classesByPointer.find(obj);
  if (findClass != classesByPointer.end()) {
    return get_ref_value(env, findClass->second->constructor);
  }

  auto cls = object_getClass(obj);

  auto mdFindByPointer = mdClassesByPointer.find(cls);
  if (mdFindByPointer != mdClassesByPointer.end()) {
    classOffset = mdFindByPointer->second;
  }

  auto findByPointer = classesByPointer.find(cls);
  if (findByPointer != classesByPointer.end()) {
    return getObject(env, obj,
                     get_ref_value(env, findByPointer->second->constructor),
                     ownership);
  }

  napi_value constructor = nullptr;
  if (classOffset != 0) {
    auto bridgedCls = getClass(env, classOffset);

    if (bridgedCls == nullptr) {
      return nullptr;
    }

    constructor = get_ref_value(env, bridgedCls->constructor);
  } else if (protocolOffsets != nullptr && !protocolOffsets->empty()) {
    auto proto = getProtocol(env, protocolOffsets->front());

    if (proto == nullptr) {
      return nullptr;
    }

    constructor = get_ref_value(env, proto->constructor);
  } else {
    constructor = findConstructorForObject(env, this, obj, cls);
  }

  if (constructor == nullptr) {
    return nullptr;
  }

  return getObject(env, obj, constructor, ownership);
}

void ObjCBridgeState::unregisterObject(id object) noexcept {
// #if DEBUG
  // NSString *string = [NSString stringWithFormat: @"Unregistering object <%s: %p> @ %ld # success: %d, finalized: %d",
  //     class_getName(object_getClass(object)), object, [object retainCount],
  //     (int)objectRefs.contains(object), (int)finalized];
  
  // dbglog([string UTF8String]);
// #endif

  if (objectRefs.contains(object)) {
    objectRefs.erase(object);
    [object release];
  }
}

} // namespace objc_bridge
