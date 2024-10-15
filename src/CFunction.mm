#include "CFunction.h"
#include "ClassMember.h"
#include "ObjCBridge.h"

namespace objc_bridge {

void ObjCBridgeState::registerFunctionGlobals(napi_env env, napi_value global) {
  MDSectionOffset offset = metadata->functionsOffset;
  while (offset < metadata->protocolsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto signature = metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes =
            (napi_property_attributes)(napi_enumerable | napi_configurable),
        .getter = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = CFunction::jsCall,
    };

    napi_define_properties(env, global, 1, &prop);
  }
}

CFunction *ObjCBridgeState::getCFunction(napi_env env, MDSectionOffset offset) {
  auto cached = cFunctionCache.find(offset);
  if (cached != cFunctionCache.end()) {
    return cached->second;
  }

  auto sigOffset = metadata->signaturesOffset +
                   metadata->getOffset(offset + sizeof(MDSectionOffset));

  auto cFunction = new CFunction(dlsym(self_dl, metadata->getString(offset)));
  cFunction->cif = getCFunctionCif(env, sigOffset);
  cFunctionCache[offset] = cFunction;

  return cFunction;
}

napi_value CFunction::jsCall(napi_env env, napi_callback_info cbinfo) {
  void *_offset;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &_offset);

  auto bridgeState = ObjCBridgeState::InstanceData(env);
  MDSectionOffset offset = (MDSectionOffset)((size_t)_offset);

  auto func = bridgeState->getCFunction(env, offset);
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

  ffi_call(&cif->cif, FFI_FN(func->fnptr), rvalue, avalues);

  if (shouldFreeAny) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      if (shouldFree[i]) {
        cif->argTypes[i]->free(env, *((void **)avalues[i]));
      }
    }
  }

  return cif->returnType->toJS(env, rvalue);
}

CFunction::~CFunction() {
  if (cif != nullptr) {
    delete cif;
  }
}

} // namespace objc_bridge
