#include "objc_bridge_data.h"

BridgedClass *ObjCBridgeData::get_bridged_class(napi_env env,
                                                std::string class_name) {
  auto find = this->bridged_classes[class_name];
  if (find != nullptr) {
    return find;
  }

  auto bridgedClass = new BridgedClass(env, class_name);
  this->bridged_classes[class_name] = bridgedClass;

  return bridgedClass;
}

MethodCif *ObjCBridgeData::get_method_cif(Method method) {
  auto encoding = std::string(method_getTypeEncoding(method));
  auto find = this->method_cifs[encoding];
  if (find != nullptr) {
    return find;
  }

  auto methodCif = new MethodCif(encoding);
  this->method_cifs[encoding] = methodCif;

  return methodCif;
}
