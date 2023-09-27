#include "CFunction.h"
#include "ObjCBridgeData.h"

namespace objc_bridge {

CFunction *ObjCBridgeData::getCFunction(napi_env env, MDSectionOffset offset) {
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
