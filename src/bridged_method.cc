#include "bridged_method.h"
#include "node_api_util.h"

NAPI_FUNCTION(BridgedMethod) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->methodCif;
  if (cif == nullptr) {
    cif = method->methodCif = method->bridgeData->getMethodCif(method->method);
  }

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, &jsThis, nullptr);

  cif->avalues[0] = (void *)&self;
  cif->avalues[1] = (void *)&method->selector;

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      cif->convertArgType[i](env, cif->argv[i], cif->avalues[i + 2],
                             &cif->shouldFree[i], &cif->shouldFreeAny);
    }
  }

  cif->call((void *)objc_msgSend);

  if (cif->shouldFreeAny) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      if (cif->shouldFree[i]) {
        cif->freeArgValue[i](env, *((void **)cif->avalues[i + 2]));
      }
    }
  }

  return cif->convertReturnType(env, cif->rvalue, cif->cif->rtype);
}

NAPI_FUNCTION(BridgedGetter) {
  napi_value jsThis;
  BridgedMethod *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  MethodCif *cif = method->methodCif;
  if (cif == nullptr) {
    cif = method->methodCif = method->bridgeData->getMethodCif(method->method);
  }

  cif->avalues[0] = (void *)&self;
  cif->avalues[1] = (void *)&method->selector;

  cif->call((void *)objc_msgSend);

  return cif->convertReturnType(env, cif->rvalue, cif->cif->rtype);
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
        method->bridgeData->getMethodCif(method->setterMethod);
  }

  cif->avalues[0] = (void *)&self;
  cif->avalues[1] = (void *)&method->setterSelector;
  cif->convertArgType[0](env, argv, cif->avalues[2], &cif->shouldFree[0],
                         &cif->shouldFreeAny);

  cif->call((void *)objc_msgSend);

  if (cif->shouldFreeAny) {
    cif->freeArgValue[0](env, *((void **)cif->avalues[2]));
  }

  return nullptr;
}
