#include "objc_bridge_data.h"
#include "node_api_util.h"

BridgedClass *ObjCBridgeData::getBridgedClass(napi_env env,
                                              std::string class_name) {
  auto find = this->bridged_classes[class_name];
  if (find != nullptr) {
    return find;
  }

  auto bridgedClass = new BridgedClass(env, class_name);
  this->bridged_classes[class_name] = bridgedClass;

  return bridgedClass;
}

MethodCif *ObjCBridgeData::getMethodCif(Method method) {
  auto encoding = std::string(method_getTypeEncoding(method));
  auto find = this->method_cifs[encoding];
  if (find != nullptr) {
    return find;
  }

  auto methodCif = new MethodCif(encoding);
  this->method_cifs[encoding] = methodCif;

  return methodCif;
}

SEL release_selector = sel_registerName("release");
typedef void (*release_fn)(id, SEL);

void finalize_objc_object(napi_env env, void *data, void *hint) {
  auto obj = (id)data;
  auto bridgeData = (ObjCBridgeData *)hint;
  bridgeData->object_refs.erase(obj);
  ((release_fn)objc_msgSend)(obj, release_selector);
}

napi_value ObjCBridgeData::getObject(napi_env env, id obj) {
  if (obj == nullptr) {
    return nullptr;
  }

  auto find = this->object_refs[obj];
  if (find != nullptr) {
    return get_ref_value(env, find);
  }

  Class cls = object_getClass(obj);
  bool isClass = false;

  if (class_isMetaClass(cls)) {
    cls = (Class)obj;
    isClass = true;
  }

  std::string name = class_getName(cls);
  BridgedClass *bridgedCls = this->getBridgedClass(env, name);

  if (bridgedCls == nullptr) {
    return nullptr;
  }

  napi_value result;
  napi_value constructor = get_ref_value(env, bridgedCls->constructor);

  if (isClass) {
    result = constructor;
  } else {
    napi_new_instance(env, constructor, 0, nullptr, &result);
    napi_wrap(env, result, (void *)obj, finalize_objc_object, (void *)this,
              &this->object_refs[obj]);
  }

  return result;
}
