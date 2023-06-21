#include "method_cif.h"
#include <vector>

ffi_type *typeFromStruct(const char **encoding) {
  ffi_type *type = new ffi_type;
  type->type = FFI_TYPE_STRUCT;
  type->size = 0;
  type->alignment = 0;
  type->elements = nullptr;

  std::vector<ffi_type *> elements;

  (*encoding)++; // skip '{'

  while (**encoding != '=') {
    (*encoding)++;
  } // skip name

  (*encoding)++; // skip '='

  while (**encoding != '}') {
    ffi_type *elementType = getTypeForEncoding(encoding);
    elements.push_back(elementType);
  }

  (*encoding)++; // skip '}'

  type->elements =
      (ffi_type **)malloc(sizeof(ffi_type *) * (elements.size() + 1));
  for (int i = 0; i < elements.size(); i++) {
    type->elements[i] = elements[i];
  }
  // null-terminate the array
  type->elements[elements.size()] = nullptr;

  return type;
}

ffi_type *getTypeForEncoding(const char **encoding) {
  char first = **encoding;
  if (first == 'r') {
    first = *(++(*encoding));
  }
  switch (first) {
  case 'c':
    (*encoding)++;
    return &ffi_type_schar;
  case 'i':
    (*encoding)++;
    return &ffi_type_sint;
  case 's':
    (*encoding)++;
    return &ffi_type_sshort;
  case 'l':
    (*encoding)++;
    return &ffi_type_slong;
  case 'q':
    (*encoding)++;
    return &ffi_type_sint64;
  case 'C':
    (*encoding)++;
    return &ffi_type_uchar;
  case 'I':
    (*encoding)++;
    return &ffi_type_uint;
  case 'S':
    (*encoding)++;
    return &ffi_type_ushort;
  case 'L':
    (*encoding)++;
    return &ffi_type_ulong;
  case 'Q':
    (*encoding)++;
    return &ffi_type_uint64;
  case 'f':
    (*encoding)++;
    return &ffi_type_float;
  case 'd':
    (*encoding)++;
    return &ffi_type_double;
  case 'B':
    (*encoding)++;
    return &ffi_type_uint8;
  case 'v':
    (*encoding)++;
    return &ffi_type_void;
  case '*':
    (*encoding)++;
    return &ffi_type_pointer;
  case '@':
    (*encoding)++;
    return &ffi_type_pointer;
  case '#':
    (*encoding)++;
    return &ffi_type_pointer;
  case ':':
    (*encoding)++;
    return &ffi_type_pointer;
  case '[': {
    char c = **encoding;
    while ((c = **encoding) >= '0' && c <= '9') {
      (*encoding)++;
    } // skip array size
    while (**encoding != ']') {
      (*encoding)++;
    }              // skip array type
    (*encoding)++; // skip ']'
    return &ffi_type_pointer;
  }
  case '{':
    return typeFromStruct(encoding);
  case '(': {
    while (**encoding != ')') {
      (*encoding)++;
    }              // skip types
    (*encoding)++; // skip ')'
    return &ffi_type_pointer;
  }
  case 'b': {
    (*encoding)++;
    char c = **encoding;
    while ((c = **encoding) >= '0' && c <= '9') {
      (*encoding)++;
    } // skip bits
    return &ffi_type_uint64;
  }
  case '^':
    (*encoding)++;
    // we don't need pointee type
    getTypeForEncoding(encoding);
    return &ffi_type_pointer;
  case '?':
    // unknown type
    return &ffi_type_pointer;
  default:
    std::cout << "getTypeForEncoding unknown encoding: " << *encoding
              << std::endl;
    return &ffi_type_pointer;
  }
}

typedef id (*msgSend_signatureWithObjCTypes)(id, SEL, const char *);
typedef unsigned long (*msgSend_numberOfArguments)(id, SEL);
typedef const char *(*msgSend_methodReturnType)(id, SEL);
typedef const char *(*msgSend_methodGetArgumentType)(id, SEL, unsigned int);

SEL sel_signatureWithObjCTypes_ = sel_registerName("signatureWithObjCTypes:");
SEL sel_numberOfArguments = sel_registerName("numberOfArguments");
SEL sel_methodReturnType = sel_registerName("methodReturnType");
SEL sel_methodReturnLength = sel_registerName("methodReturnLength");
SEL sel_getArgumentTypeAtIndex_ = sel_registerName("getArgumentTypeAtIndex:");

MethodCif::MethodCif(std::string encoding) {
  this->typeEncoding = encoding;
  this->signature = ((msgSend_signatureWithObjCTypes)objc_msgSend)(
      (id)objc_getClass("NSMethodSignature"), sel_signatureWithObjCTypes_,
      encoding.c_str());
  unsigned long numberOfArguments = ((msgSend_numberOfArguments)objc_msgSend)(
      (id)this->signature, sel_numberOfArguments);
  this->argc = numberOfArguments - 2;
  this->argv = (napi_value *)malloc(sizeof(napi_value) * this->argc);

  ffi_cif *cif = (ffi_cif *)malloc(sizeof(ffi_cif));

  unsigned int argc = (unsigned int)numberOfArguments;

  const char *returnType = ((msgSend_methodReturnType)objc_msgSend)(
      this->signature, sel_methodReturnType);
  this->convertReturnType = getConvFromNative(returnType);

  ffi_type *rtype = getTypeForEncoding(&returnType);
  ffi_type **atypes = (ffi_type **)malloc(sizeof(ffi_type *) * argc);

  unsigned long methodReturnLength = ((msgSend_numberOfArguments)objc_msgSend)(
      this->signature, sel_methodReturnLength);

  this->rvalue = malloc(methodReturnLength);

  this->avalues = (void **)malloc(sizeof(void *) * argc);
  this->convertArgType =
      (js_to_native *)malloc(sizeof(js_to_native) * this->argc);
  this->freeArgValue = (js_free *)malloc(sizeof(js_free) * this->argc);
  this->shouldFree = (bool *)malloc(sizeof(bool) * this->argc);
  memset(this->shouldFree, false, sizeof(bool) * this->argc);
  this->shouldFreeAny = false;

  for (int i = 0; i < numberOfArguments; i++) {
    const char *argenc = ((msgSend_methodGetArgumentType)objc_msgSend)(
        this->signature, sel_getArgumentTypeAtIndex_, i);

    const char *argenc2 = argenc;
    atypes[i] = getTypeForEncoding(&argenc2);

    if (i >= 2) {
      this->convertArgType[i - 2] = getConvToNative(argenc);
      this->freeArgValue[i - 2] = getNativeFree(argenc);
    }
  }

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

  this->cif = cif;
}

void MethodCif::call(void *fnptr) {
  ffi_call(this->cif, FFI_FN(fnptr), this->rvalue, this->avalues);
}
