#import <Foundation/Foundation.h>

#include "ffi.h"
#include "objc/message.h"
#include "objc/runtime.h"

unsigned long call_direct(id obj) { return [obj length]; }

SEL selLength = nil;
ffi_cif cif;
ffi_type *atypes[2];
void **avalues;
void *rvalue;

unsigned long call_libffi(id obj) {
  if (selLength == nil) {
    selLength = sel_registerName("length");
    atypes[0] = &ffi_type_pointer;
    atypes[1] = &ffi_type_pointer;
    ffi_prep_cif(&cif, FFI_DEFAULT_ABI, 2, &ffi_type_ulong, atypes);
    avalues = (void **)malloc(sizeof(void *) * 2);
    rvalue = malloc(sizeof(unsigned long));
  }
  avalues[0] = &obj;
  avalues[1] = &selLength;
  ffi_call(&cif, FFI_FN(objc_msgSend), rvalue, avalues);
  return *(unsigned long *)rvalue;
}

NSInvocation *inv_cached = nil;

unsigned long call_nsinvocation(id obj) {
  NSInvocation *inv;
  if (inv_cached != nil) {
    inv = inv_cached;
  } else {
    NSMethodSignature *sig = [obj methodSignatureForSelector:selLength];
    inv = [NSInvocation invocationWithMethodSignature:sig];
    [inv setTarget:obj];
    [inv setSelector:selLength];
  }
  [inv invoke];
  unsigned long ret;
  [inv getReturnValue:&ret];
  return ret;
}
