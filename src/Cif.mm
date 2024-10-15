#include "Cif.h"
#include "MetadataReader.h"
#include "ObjCBridge.h"
#include "TypeConv.h"
#include "Util.h"
#include <Foundation/Foundation.h>
#include <iostream>
#include <vector>

namespace objc_bridge {

// Essentially, we cache libffi structures per unique method signature,
// this helps us avoid the overhead of creating them on the fly for each
// invocation.
Cif *ObjCBridgeState::getMethodCif(napi_env env, Method method) {
  auto encoding = std::string(method_getTypeEncoding(method));
  auto find = this->cifs[encoding];
  if (find != nullptr) {
    return find;
  }

  auto cif = new Cif(env, encoding);
  this->cifs[encoding] = cif;

  return cif;
}

Cif *ObjCBridgeState::getMethodCif(napi_env env, MDSectionOffset offset) {
  auto find = this->mdMethodSignatureCache[offset];
  if (find != nullptr) {
    return find;
  }

  auto cif = new Cif(env, metadata, offset, true, false);
  this->mdMethodSignatureCache[offset] = cif;

  return cif;
}

Cif *ObjCBridgeState::getBlockCif(napi_env env, MDSectionOffset offset) {
  auto find = this->mdBlockSignatureCache[offset];
  if (find != nullptr) {
    return find;
  }

  auto cif = new Cif(env, metadata, offset, false, true);
  this->mdBlockSignatureCache[offset] = cif;

  return cif;
}

Cif *ObjCBridgeState::getCFunctionCif(napi_env env, MDSectionOffset offset) {
  auto find = this->mdFunctionSignatureCache[offset];
  if (find != nullptr) {
    return find;
  }

  auto cif = new Cif(env, metadata, offset, false, false);
  this->mdFunctionSignatureCache[offset] = cif;

  return cif;
}

Cif::Cif(napi_env env, std::string encoding) {
  auto signature = [NSMethodSignature signatureWithObjCTypes:encoding.c_str()];
  unsigned long numberOfArguments = signature.numberOfArguments;
  this->argc = (int)numberOfArguments - 2;
  this->argv = (napi_value *)malloc(sizeof(napi_value) * this->argc);

  unsigned int argc = (unsigned int)numberOfArguments;

  const char *returnType = signature.methodReturnType;
  this->returnType = TypeConv::Make(env, &returnType);

  ffi_type *rtype = this->returnType->type;
  ffi_type **atypes = (ffi_type **)malloc(sizeof(ffi_type *) * argc);

  unsigned long methodReturnLength = signature.methodReturnLength;
  unsigned long frameLength = signature.frameLength;

  this->rvalue = malloc(methodReturnLength);
  this->rvalueLength = methodReturnLength;
  this->frameLength = frameLength;

  this->avalues = (void **)malloc(sizeof(void *) * argc);
  this->shouldFree = (bool *)malloc(sizeof(bool) * this->argc);
  memset(this->shouldFree, false, sizeof(bool) * this->argc);
  this->shouldFreeAny = false;

  for (int i = 0; i < numberOfArguments; i++) {
    const char *argenc = [signature getArgumentTypeAtIndex:i];

    auto argTypeInfo = TypeConv::Make(env, &argenc);
    atypes[i] = argTypeInfo->type;

    if (i >= 2) {
      this->argTypes.push_back(argTypeInfo);
    }
  }

  [signature release];

  ffi_status status = ffi_prep_cif(&cif, FFI_DEFAULT_ABI, argc, rtype, atypes);

  for (int i = 2; i < argc; i++) {
    this->avalues[i] = malloc(cif.arg_types[i]->size);
  }

  if (status != FFI_OK) {
    std::cout << "Failed to prepare CIF, libffi returned error:" << status
              << std::endl;
    return;
  }
}

Cif::Cif(napi_env env, MDMetadataReader *reader, MDSectionOffset offset,
         bool isMethod, bool isBlock) {
  auto returnTypeKind = reader->getTypeKind(offset);
  bool next = (returnTypeKind & mdTypeFlagNext) != 0;
  isVariadic = (returnTypeKind & mdTypeFlagVariadic) != 0;

  returnType = TypeConv::Make(env, reader, &offset);

  ffi_type **atypes = nullptr;

  auto implicitArgs = isMethod ? 2 : isBlock ? 1 : 0;

  shouldFreeAny = false;

  if (next || isMethod || isBlock) {
    while (next) {
      auto argTypeKind = reader->getTypeKind(offset);
      next = (argTypeKind & mdTypeFlagNext) != 0;
      auto argTypeInfo = TypeConv::Make(env, reader, &offset);
      std::string enc;
      argTypeInfo->encode(&enc);
      argTypes.push_back(argTypeInfo);
    }

    argc = (int)argTypes.size();

    auto totalArgc = argc + implicitArgs;

    argv = (napi_value *)malloc(sizeof(napi_value) * argc);
    shouldFree = (bool *)malloc(sizeof(bool) * argc);

    atypes = (ffi_type **)malloc(sizeof(ffi_type *) * totalArgc);
    avalues = (void **)malloc(sizeof(void *) * argc);

    if (isMethod) {
      atypes[0] = &ffi_type_pointer;
      atypes[1] = &ffi_type_pointer;
    }

    if (isBlock) {
      atypes[0] = &ffi_type_pointer;
    }

    for (int i = 0; i < argc; i++) {
      atypes[i + implicitArgs] = argTypes[i]->type;
      shouldFree[i] = false;
    }
  } else {
    argc = 0;
    argv = nullptr;
    avalues = nullptr;
    shouldFree = nullptr;
  }

  ffi_status status = ffi_prep_cif(&cif, FFI_DEFAULT_ABI, argc + implicitArgs,
                                   returnType->type, atypes);

  if (status != FFI_OK) {
    std::cout << "Failed to prepare CIF, libffi returned error: " << status
              << std::endl;
    return;
  }

  for (int i = 0; i < argc; i++) {
    avalues[i] = malloc(cif.arg_types[i + implicitArgs]->size);
  }

  rvalue = malloc(cif.rtype->size);
  rvalueLength = cif.rtype->size;
}

} // namespace objc_bridge
