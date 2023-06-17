#include "method_cif.h"

ffi_type *getTypeForEncoding(const char *encoding) {
  char first = *encoding;
  if (first == 'r') {
    first = *(++encoding);
  }
  switch (first) {
  case 'c':
    return &ffi_type_schar;
  case 'i':
    return &ffi_type_sint;
  case 's':
    return &ffi_type_sshort;
  case 'l':
    return &ffi_type_slong;
  case 'q':
    return &ffi_type_sint64;
  case 'C':
    return &ffi_type_uchar;
  case 'I':
    return &ffi_type_uint;
  case 'S':
    return &ffi_type_ushort;
  case 'L':
    return &ffi_type_ulong;
  case 'Q':
    return &ffi_type_uint64;
  case 'f':
    return &ffi_type_float;
  case 'd':
    return &ffi_type_double;
  case 'B':
    return &ffi_type_uint8;
  case 'v':
    return &ffi_type_void;
  case '*':
    return &ffi_type_pointer;
  case '@':
    return &ffi_type_pointer;
  case '#':
    return &ffi_type_pointer;
  case ':':
    return &ffi_type_pointer;
  case '[':
    return &ffi_type_pointer;
  case '{':
    return &ffi_type_pointer;
  case '(':
    return &ffi_type_pointer;
  case 'b':
    return &ffi_type_pointer;
  case '^':
    return &ffi_type_pointer;
  case '?':
    return &ffi_type_pointer;
  default:
    std::cout << "getTypeForEncoding unknown encoding: " << encoding
              << std::endl;
    return &ffi_type_pointer;
  }
}

typedef id (*msgSend_signatureWithObjCTypes)(id, SEL, const char *);
typedef unsigned long (*msgSend_numberOfArguments)(id, SEL);
typedef const char *(*msgSend_methodReturnType)(id, SEL);
typedef const char *(*msgSend_methodGetArgumentType)(id, SEL, unsigned int);

MethodCif::MethodCif(std::string encoding) {
  this->typeEncoding = encoding;
  this->signature = ((msgSend_signatureWithObjCTypes)objc_msgSend)(
      (id)objc_getClass("NSMethodSignature"),
      sel_registerName("signatureWithObjCTypes:"), encoding.c_str());
  unsigned long numberOfArguments = ((msgSend_numberOfArguments)objc_msgSend)(
      (id)this->signature, sel_registerName("numberOfArguments"));
  this->argc = numberOfArguments - 2;
  this->argv = (napi_value *)malloc(sizeof(napi_value) * this->argc);

  ffi_cif *cif = (ffi_cif *)malloc(sizeof(ffi_cif));

  unsigned int argc = (unsigned int)numberOfArguments;

  const char *returnType = ((msgSend_methodReturnType)objc_msgSend)(
      this->signature, sel_registerName("methodReturnType"));
  ffi_type *rtype = getTypeForEncoding(returnType);
  ffi_type **atypes = (ffi_type **)malloc(sizeof(ffi_type *) * argc);

  this->rvalue = malloc(((msgSend_numberOfArguments)objc_msgSend)(
      this->signature, sel_registerName("methodReturnLength")));
  this->convertReturnType = getConvFromNative(returnType);

  this->avalues = (void **)malloc(sizeof(void *) * argc);
  this->convertArgType =
      (js_to_native *)malloc(sizeof(js_to_native) * this->argc);
  this->shouldFree = (bool *)malloc(sizeof(bool) * this->argc);

  for (int i = 0; i < numberOfArguments; i++) {
    const char *argenc = ((msgSend_methodGetArgumentType)objc_msgSend)(
        this->signature, sel_registerName("getArgumentTypeAtIndex:"), i);

    atypes[i] = getTypeForEncoding(argenc);
    if (i >= 2) {
      this->avalues[i] = malloc(atypes[i]->size);
      this->convertArgType[i - 2] = getConvToNative(argenc);
      bool should = shouldFreeType(argenc);
      this->shouldFree[i - 2] = should;
      if (should) {
        this->shouldFreeAny = true;
      }
    }
  }

  ffi_status status = ffi_prep_cif(cif, FFI_DEFAULT_ABI, argc, rtype, atypes);

  if (status != FFI_OK) {
    std::cout << "Failed to prepare CIF, libffi returned error:" << status
              << std::endl;
    free(cif);
    return;
  }

  this->cif = cif;
}

void MethodCif::Call(void *fnptr) {
  ffi_call(this->cif, (void (*)(void))fnptr, this->rvalue, this->avalues);
}
