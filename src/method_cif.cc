#include "method_cif.h"
#include "util.h"
#include <vector>

MethodCif::MethodCif(std::string encoding) {
  auto signature = ((msgSend_signatureWithObjCTypes)objc_msgSend)(
      (id)objc_getClass("NSMethodSignature"), sel::signatureWithObjCTypes_,
      encoding.c_str());
  unsigned long numberOfArguments = ((msgSend_numberOfArguments)objc_msgSend)(
      (id)signature, sel::numberOfArguments);
  this->argc = (int)numberOfArguments - 2;
  this->argv = (napi_value *)malloc(sizeof(napi_value) * this->argc);

  cif = (ffi_cif *)malloc(sizeof(ffi_cif));

  unsigned int argc = (unsigned int)numberOfArguments;

  const char *returnType =
      ((msgSend_methodReturnType)objc_msgSend)(signature, sel::methodReturnType);
  this->convertReturnType = getConvFromNative(returnType);

  ffi_type *rtype = getTypeForEncoding(&returnType);
  ffi_type **atypes = (ffi_type **)malloc(sizeof(ffi_type *) * argc);

  unsigned long methodReturnLength = ((msgSend_numberOfArguments)objc_msgSend)(
      signature, sel::methodReturnLength);
  unsigned long frameLength =
      ((msgSend_numberOfArguments)objc_msgSend)(signature, sel::frameLength);

  this->rvalue = malloc(methodReturnLength);
  this->rvalueLength = methodReturnLength;
  this->frameLength = frameLength;

  this->avalues = (void **)malloc(sizeof(void *) * argc);
  this->convertArgType =
      (js_to_native *)malloc(sizeof(js_to_native) * this->argc);
  this->freeArgValue = (js_free *)malloc(sizeof(js_free) * this->argc);
  this->shouldFree = (bool *)malloc(sizeof(bool) * this->argc);
  memset(this->shouldFree, false, sizeof(bool) * this->argc);
  this->shouldFreeAny = false;

  for (int i = 0; i < numberOfArguments; i++) {
    const char *argenc = ((msgSend_methodGetArgumentType)objc_msgSend)(
        signature, sel::getArgumentTypeAtIndex_, i);

    const char *argenc2 = argenc;
    atypes[i] = getTypeForEncoding(&argenc2);

    if (i >= 2) {
      this->convertArgType[i - 2] = getConvToNative(argenc);
      this->freeArgValue[i - 2] = getNativeFree(argenc);
    }
  }

  ((msgSend_release)objc_msgSend)(signature, sel::release);

  ffi_status status = ffi_prep_cif(cif, FFI_DEFAULT_ABI, argc, rtype, atypes);

  for (int i = 2; i < argc; i++) {
    this->avalues[i] = malloc(cif->arg_types[i]->size);
  }

  if (status != FFI_OK) {
    std::cout << "Failed to prepare CIF, libffi returned error:" << status
              << std::endl;
    free(cif);
    return;
  }
}

void MethodCif::call(void *fnptr, void *rvalue, void **avalues) {
  ffi_call(this->cif, FFI_FN(fnptr), rvalue, avalues);
}
