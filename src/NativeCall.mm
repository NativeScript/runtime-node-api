#include "NativeCall.h"
#include "MetadataReader.h"
#include "ObjCBridgeData.h"
#include "TypeConv.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#import <Foundation/Foundation.h>
#include <cstring>
#include <objc/objc.h>
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

  void *avalues[cif->argc];
  void *rvalue = cif->rvalue;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      avalues[i] = cif->avalues[i];
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

inline void objcNativeCall(napi_env env, napi_value jsThis, MethodCif *cif,
                           id self, void **avalues, void *rvalue) {
  bool supercall;
  napi_has_named_property(env, jsThis, "__objc_msgSendSuper__", &supercall);

#if defined(__x86_64__)
  bool isStret = cif->returnType->type->size > 16 &&
                 cif->returnType->type->type == FFI_TYPE_STRUCT;
#endif

  if (!supercall) {
#if defined(__x86_64__)
    if (isStret) {
      cif->call((void *)objc_msgSend_stret, rvalue, avalues);
    } else {
      cif->call((void *)objc_msgSend, rvalue, avalues);
    }
#else
    cif->call((void *)objc_msgSend, rvalue, avalues);
#endif
  } else {
    struct objc_super superobj = {self,
                                  class_getSuperclass(object_getClass(self))};
    auto superobjPtr = &superobj;
    avalues[0] = (void *)&superobjPtr;
#if defined(__x86_64__)
    if (isStret) {
      cif->call((void *)objc_msgSendSuper_stret, rvalue, avalues);
    } else {
      cif->call((void *)objc_msgSendSuper, rvalue, avalues);
    }
#else
    cif->call((void *)objc_msgSendSuper, rvalue, avalues);
#endif
  }
}

NAPI_FUNCTION(BridgedMethod) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self = nil;
  napi_unwrap(env, jsThis, (void **)&self);
  if (self == nil) {
    napi_throw_error(env, nullptr, "self is nil");
    return nullptr;
  }

  MethodCif *cif = method->methodCif;
  if (cif == nullptr) {
    cif = method->methodCif =
        method->bridgeData->getMethodCif(env, method->signature);
  }

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, &jsThis, nullptr);

  void *avalues[cif->cif.nargs];
  void *rvalue = cif->rvalue;

  avalues[0] = (void *)&self;
  avalues[1] = (void *)&method->selector;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      avalues[i] = cif->avalues[i + 2];
      cif->argTypes[i]->toNative(env, cif->argv[i], avalues[i + 2],
                                 &shouldFree[i], &shouldFreeAny);
    }
  }

  objcNativeCall(env, jsThis, cif, self, avalues, rvalue);

  for (unsigned int i = 0; i < cif->argc; i++) {
    if (shouldFree[i]) {
      cif->argTypes[i]->free(env, *((void **)avalues[i + 2]));
    }
  }

  if (cif->returnType->kind == mdTypeInstanceObject) {
    napi_value constructor = jsThis;
    if (!method->classMethod)
      napi_get_named_property(env, jsThis, "constructor", &constructor);
    id obj = *((id *)rvalue);
    return method->bridgeData->getObject(env, obj, constructor,
                                         method->returnOwned ? kOwnedObject
                                                             : kUnownedObject);
  }

  return cif->returnType->toJS(env, rvalue,
                               method->returnOwned ? kReturnOwned : 0);
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
        method->bridgeData->getMethodCif(env, method->signature);
  }

  void *avalues[2] = {&self, &method->selector};
  void *rvalue = cif->rvalue;

  objcNativeCall(env, jsThis, cif, self, avalues, rvalue);

  if (cif->returnType->kind == mdTypeInstanceObject) {
    napi_value constructor = jsThis;
    if (!method->classMethod) {
      napi_get_named_property(env, jsThis, "constructor", &constructor);
    }

    return method->bridgeData->getObject(env, *((id *)rvalue), constructor,
                                         method->returnOwned ? kOwnedObject
                                                             : kUnownedObject);
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
        method->bridgeData->getMethodCif(env, method->setterSignature);
  }

  void *avalues[3] = {&self, &method->setterSelector, cif->avalues[2]};
  void *rvalue = nullptr;

  bool shouldFree = false;
  cif->argTypes[0]->toNative(env, argv, avalues[2], &shouldFree, &shouldFree);

  objcNativeCall(env, jsThis, cif, self, avalues, rvalue);

  if (shouldFree) {
    cif->argTypes[0]->free(env, *((void **)avalues[2]));
  }

  return nullptr;
}

} // namespace objc_bridge
