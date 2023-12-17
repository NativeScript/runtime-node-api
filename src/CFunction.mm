#include "CFunction.h"
#include "NativeCall.h"
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
        .method = JS_CFunction,
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
  auto cachedCif = mdFunctionSignatureCache.find(sigOffset);

  auto cFunction = new CFunction();
  cFunction->fnptr = dlsym(self_dl, metadata->getString(offset));
  cFunction->cif = nullptr;
  cFunctionCache[offset] = cFunction;

  if (cachedCif != mdFunctionSignatureCache.end()) {
    cFunction->cif = cachedCif->second;
  } else {
    auto cif = new MethodCif(env, metadata, sigOffset);
    cFunction->cif = cif;
    mdFunctionSignatureCache[sigOffset] = cif;
  }

  return cFunction;
}

} // namespace objc_bridge
