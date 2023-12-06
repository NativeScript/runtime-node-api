#include "ObjCBridge.h"

#import <Foundation/Foundation.h>

namespace objc_bridge {

void finalize_objc_object(napi_env /*env*/, void *data, void *hint) {
  id object = static_cast<id>(data);
  ObjCBridgeData *bridgeData = static_cast<ObjCBridgeData *>(hint);
  bridgeData->unregisterObject(object);
}

void finalize_objc_object_borrowed(napi_env, void *data, void *hint) {
  id object = static_cast<id>(data);
  ObjCBridgeData *bridgeData = static_cast<ObjCBridgeData *>(hint);
  bridgeData->objectRefs.erase(object);
}

napi_value ObjCBridgeData::getObject(napi_env env, id obj,
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

    napi_ref ref = nullptr;
    NAPI_GUARD(napi_add_finalizer(env, result, obj,
                                  ownership == kBorrowedObject
                                      ? finalize_objc_object_borrowed
                                      : finalize_objc_object,
                                  this, &ref)) {
      NAPI_THROW_LAST_ERROR
      return nullptr;
    }

    objectRefs[obj] = ref;

    if (ownership == kUnownedObject) {
      [obj retain];
    }
  }

  return result;
}

napi_value findConstructorForObject(napi_env env, ObjCBridgeData *bridgeData,
                                    id object, Class cls = nil) {
  if (cls == nil) {
    cls = object_getClass(object);
  }

  // Look up if there is a custom class for it already
  {
    auto find = bridgeData->classesByPointer.find(cls);
    if (find != bridgeData->classesByPointer.end()) {
      return get_ref_value(env, find->second->constructor);
    }
  }

  // Look up if there is a custom constructor for it already
  {
    auto find = bridgeData->constructorsByPointer.find(cls);
    if (find != bridgeData->constructorsByPointer.end()) {
      return get_ref_value(env, find->second);
    }
  }

  // Look up if there is a metadata-defined class
  {
    auto find = bridgeData->mdClassesByPointer.find(cls);
    if (find != bridgeData->mdClassesByPointer.end()) {
      auto cls = bridgeData->getClass(env, find->second);
      return get_ref_value(env, cls->constructor);
    }
  }

  // Look up the protocols implemented by this class, if we define those in
  // metadata, can construct based on it.
  {
    unsigned int count;
    auto protocols = class_copyProtocolList(cls, &count);
    std::unordered_set<BridgedProtocol *> impls;

    std::function<void(Protocol **, unsigned int)> processProtocolList =
        [&](Protocol **list, unsigned int count) {
          for (unsigned int i = 0; i < count; i++) {
            auto protocol = list[i];
            auto find = bridgeData->mdProtocolsByPointer.find(protocol);
            if (find != bridgeData->mdProtocolsByPointer.end()) {
              impls.insert(bridgeData->getProtocol(env, find->second));
            }
            list = protocol_copyProtocolList(protocol, &count);
            processProtocolList(list, count);
          }
        };

    processProtocolList(protocols, count);

    if (!impls.empty()) {
      napi_value constructor;
      napi_define_class(env, class_getName(cls), NAPI_AUTO_LENGTH,
                        JS_ProtocolConstructor, nullptr, 0, nullptr,
                        &constructor);
      for (auto impl : impls) {
        defineProtocolMembers(env, impl->membersOffset, constructor);
      }

      bridgeData->constructorsByPointer[cls] = make_ref(env, constructor);

      return constructor;
    }
  }

  Class superclass = class_getSuperclass(cls);
  if (superclass != nullptr) {
    return findConstructorForObject(env, bridgeData, object, superclass);
  }

  return nullptr;
}

// Get a napi_value for an Objective-C object, creating it if it doesn't exist.
// Here we also ensure that the native object always points to the same
// JS object, this makes sure that we only ever finalize it once.
// Might want to consider using associated objects instead of a hashtable.
napi_value
ObjCBridgeData::getObject(napi_env env, id obj, ObjectOwnership ownership,
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

    unregisterObject(obj);
  }

  auto cls = object_getClass(obj);

  auto mdFindByPointer = mdClassesByPointer.find(cls);
  if (mdFindByPointer != mdClassesByPointer.end()) {
    classOffset = mdFindByPointer->second;
  }

  napi_value constructor = nullptr;
  if (classOffset != 0) {
    auto bridgedCls = getClass(env, classOffset);

    if (bridgedCls == nullptr) {
      return nullptr;
    }

    constructor = get_ref_value(env, bridgedCls->constructor);
  } else if (!protocolOffsets->empty()) {
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

void ObjCBridgeData::unregisterObject(id object) noexcept {
  if (objectRefs.contains(object)) {
    objectRefs.erase(object);
    [object release];
  }
}

} // namespace objc_bridge
