#include "NativeCall.h"
#include "Metadata.h"
#include "ObjCBridgeData.h"
#include "TypeConv.h"
#include "node_api_util.h"
#import <Foundation/Foundation.h>
#include <objc/runtime.h>

namespace objc_bridge {

NAPI_FUNCTION(CFunction) {
  void *_offset;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &_offset);

  auto bridgeData = ObjCBridgeData::InstanceData(env);
  MDSectionOffset offset = (MDSectionOffset)((size_t)_offset);

  auto func = bridgeData->getCFunction(env, offset);
  auto cif = func->cif;

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, nullptr, nullptr);

  void **avalues = cif->avalues;
  void *rvalue = cif->rvalue;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      cif->argTypes[i]->toNative(env, cif->argv[i], avalues[i], &shouldFree[i],
                                 &shouldFreeAny);
    }
  }

  cif->call(func->fnptr, rvalue, avalues);

  for (unsigned int i = 0; i < cif->argc; i++) {
    if (shouldFree[i]) {
      cif->argTypes[i]->free(env, *((void **)avalues[i]));
    }
  }

  return cif->returnType->toJS(env, rvalue);
}

NAPI_FUNCTION(BridgedMethod) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->methodCif;
  if (cif == nullptr) {
    cif = method->methodCif =
        method->bridgeData->getMethodCif(env, method->method);
  }

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, &jsThis, nullptr);

  void **avalues = cif->avalues;
  void *rvalue = cif->rvalue;

  avalues[0] = (void *)&self;
  avalues[1] = (void *)&method->selector;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      cif->argTypes[i]->toNative(env, cif->argv[i], avalues[i + 2],
                                 &shouldFree[i], &shouldFreeAny);
    }
  }

  if (!method->supercall) {
    cif->call((void *)objc_msgSend, rvalue, avalues);
  } else {
    struct objc_super superobj = {self,
                                  class_getSuperclass(object_getClass(self))};
    auto superobjPtr = &superobj;
    avalues[0] = (void *)&superobjPtr;
    cif->call((void *)objc_msgSendSuper, rvalue, avalues);
  }

  for (unsigned int i = 0; i < cif->argc; i++) {
    if (shouldFree[i]) {
      cif->argTypes[i]->free(env, *((void **)avalues[i + 2]));
    }
  }

  return cif->returnType->toJS(env, rvalue,
                               method->returnOwned ? kReturnOwned : 0);
}

// For signature id method(id, SEL);
NAPI_FUNCTION(BridgedMethod_id) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  id rvalue;

  if (!method->supercall) {
    auto msgSend = (id(*)(id, SEL))objc_msgSend;
    rvalue = msgSend(self, method->selector);
  } else {
    struct objc_super superobj = {self,
                                  class_getSuperclass(object_getClass(self))};
    auto superobjPtr = &superobj;
    auto msgSendSuper = (id(*)(struct objc_super *, SEL))objc_msgSendSuper;
    rvalue = msgSendSuper(superobjPtr, method->selector);
  }

  return method->methodCif->returnType->toJS(
      env, &rvalue, method->returnOwned ? kReturnOwned : 0);
}

NAPI_FUNCTION(BridgedGetter) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->methodCif;
  if (cif == nullptr) {
    cif = method->methodCif =
        method->bridgeData->getMethodCif(env, method->method);
  }

  void *avalues[2];
  void *rvalue = cif->rvalue;

  avalues[0] = (void *)&self;
  avalues[1] = (void *)&method->selector;

  if (!method->supercall) {
    cif->call((void *)objc_msgSend, rvalue, avalues);
  } else {
    struct objc_super superobj = {self,
                                  class_getSuperclass(object_getClass(self))};
    auto superobjPtr = &superobj;
    avalues[0] = (void *)&superobjPtr;
    cif->call((void *)objc_msgSendSuper, rvalue, avalues);
  }

  return cif->returnType->toJS(env, rvalue, 0);
}

NAPI_FUNCTION(BridgedSetter) {
  napi_value jsThis, argv;
  size_t argc = 1;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, &argc, &argv, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->setterMethodCif;
  if (cif == nullptr) {
    cif = method->setterMethodCif =
        method->bridgeData->getMethodCif(env, method->setterMethod);
  }

  void **avalues = cif->avalues;
  void *rvalue = nullptr;

  avalues[0] = (void *)&self;
  avalues[1] = (void *)&method->setterSelector;
  bool shouldFree = false;
  cif->argTypes[0]->toNative(env, argv, avalues[2], &shouldFree, &shouldFree);

  if (!method->supercall) {
    cif->call((void *)objc_msgSend, rvalue, avalues);
  } else {
    struct objc_super superobj = {self,
                                  class_getSuperclass(object_getClass(self))};
    auto superobjPtr = &superobj;
    avalues[0] = (void *)&superobjPtr;
    cif->call((void *)objc_msgSendSuper, rvalue, avalues);
  }

  if (shouldFree) {
    cif->argTypes[0]->free(env, *((void **)avalues[2]));
  }

  return nullptr;
}

} // namespace objc_bridge
