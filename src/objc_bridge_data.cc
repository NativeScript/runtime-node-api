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

char name_buf[512];

void ObjCBridgeData::registerClass(napi_env env, napi_value constructor) {
  NAPI_PREAMBLE

  napi_value classExternal, prototype;
  napi_get_named_property(env, constructor, "__class__", &classExternal);
  napi_get_named_property(env, constructor, "prototype", &prototype);

  Class superClassNative;
  napi_get_value_external(env, classExternal, (void **)&superClassNative);

  napi_value className;
  napi_get_named_property(env, constructor, "name", &className);
  napi_get_value_string_utf8(env, className, name_buf, 512, nullptr);
  std::string name = name_buf;

  napi_value protocols;
  napi_get_named_property(env, constructor, "protocols", &protocols);

  Class cls = objc_allocateClassPair(superClassNative, name.c_str(), 8);

  if (cls == nullptr) {
    napi_throw_error(env, nullptr, "Failed to allocate class");
    return;
  }

  napi_value protocol;
  uint32_t i = 0;
  uint32_t length;
  napi_get_array_length(env, protocols, &length);

  while (i < length) {
    napi_get_element(env, protocols, i, &protocol);
    napi_get_value_string_utf8(env, protocol, name_buf, 512, nullptr);
    Protocol *p = objc_getProtocol(name_buf);

    if (p != nullptr) {
      class_addProtocol(cls, p);
    }

    i++;
  }

  objc_registerClassPair(cls);

  napi_ref constructorRef;
  NAPI_GUARD(
      napi_wrap(env, constructor, (void *)cls, nullptr, nullptr, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return;
  }

  napi_value external;
  napi_create_external(env, (void *)cls, nullptr, nullptr, &external);
  napi_set_named_property(env, constructor, "__class__", external);

  BridgedClass *bridgedClass = new BridgedClass();
  bridgedClass->name = name;
  bridgedClass->constructor = make_ref(env, constructor);
  bridgedClass->prototype = make_ref(env, prototype);
  bridgedClass->nativeClass = cls;

  this->bridged_classes[name] = bridgedClass;
}
