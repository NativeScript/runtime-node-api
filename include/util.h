#ifndef UTIL_H
#define UTIL_H

#include "objc/runtime.h"
#include <string>

std::string implicitSetterSelector(std::string name);
std::string jsifySelector(std::string selector);

class sel {
public:
  static SEL signatureWithObjCTypes_;
  static SEL numberOfArguments;
  static SEL methodReturnType;
  static SEL methodReturnLength;
  static SEL getArgumentTypeAtIndex_;
  static SEL frameLength;
  static SEL release;
  static SEL length;
  static SEL description;
  static SEL UTF8String;
};

typedef id (*msgSend_signatureWithObjCTypes)(id, SEL, const char *);
typedef unsigned long (*msgSend_numberOfArguments)(id, SEL);
typedef const char *(*msgSend_methodReturnType)(id, SEL);
typedef const char *(*msgSend_methodGetArgumentType)(id, SEL, unsigned int);
typedef void (*msgSend_release)(id, SEL);
typedef id (*msgSend_description)(id, SEL);
typedef char *(*msgSend_UTF8String)(id, SEL);
typedef unsigned long (*msgSend_length)(id, SEL);

#endif /* UTIL_H */
