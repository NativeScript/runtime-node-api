#include "MethodCif.h"
#include "Metadata.h"
#include "TypeConv.h"
#include "Util.h"
#include <Foundation/Foundation.h>
#include <iostream>
#include <vector>

namespace objc_bridge {

MethodCif::MethodCif(napi_env env, std::string encoding) {
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

MethodCif::MethodCif(napi_env env, MDMetadataReader *reader,
                     MDSectionOffset offset) {
  auto returnTypeKind = reader->getTypeKind(offset);
  bool next = (returnTypeKind & mdTypeFlagNext) != 0;

  this->returnType = TypeConv::Make(env, reader, &offset);
  ffi_type *rtype = this->returnType->type;
  ffi_type **atypes = nullptr;

  if (next) {
    while (next) {
      auto argTypeKind = reader->getTypeKind(offset);
      next = (argTypeKind & mdTypeFlagNext) != 0;
      auto argTypeInfo = TypeConv::Make(env, reader, &offset);
      argTypes.push_back(argTypeInfo);
    }

    this->argc = (int)argTypes.size();
    this->argv = (napi_value *)malloc(sizeof(napi_value) * this->argc);
    this->avalues = (void **)malloc(sizeof(void *) * this->argc);
    this->shouldFree = (bool *)malloc(sizeof(bool) * this->argc);

    atypes = (ffi_type **)malloc(sizeof(ffi_type *) * this->argc);

    for (int i = 0; i < this->argc; i++) {
      atypes[i] = argTypes[i]->type;
      this->avalues[i] = malloc(argTypes[i]->type->size);
      this->shouldFree[i] = false;
    }
  } else {
    this->argc = 0;
    this->argv = nullptr;
    this->avalues = nullptr;
    this->shouldFree = nullptr;
  }

  ffi_status status =
      ffi_prep_cif(&cif, FFI_DEFAULT_ABI, this->argc, rtype, atypes);

  if (status != FFI_OK) {
    std::cout << "Failed to prepare CIF, libffi returned error: " << status
              << std::endl;
    return;
  }

  this->rvalue = malloc(cif.rtype->size);
  this->rvalueLength = cif.rtype->size;
  this->frameLength = cif.flags;
}

void MethodCif::call(void *fnptr, void *rvalue, void **avalues) {
  ffi_call(&this->cif, FFI_FN(fnptr), rvalue, avalues);
}

} // namespace objc_bridge
