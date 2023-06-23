#include "util.h"

SEL sel::signatureWithObjCTypes_ = sel_registerName("signatureWithObjCTypes:");
SEL sel::numberOfArguments = sel_registerName("numberOfArguments");
SEL sel::methodReturnType = sel_registerName("methodReturnType");
SEL sel::methodReturnLength = sel_registerName("methodReturnLength");
SEL sel::getArgumentTypeAtIndex_ = sel_registerName("getArgumentTypeAtIndex:");
SEL sel::frameLength = sel_registerName("frameLength");
SEL sel::release = sel_registerName("release");

std::string implicitSetterSelector(std::string name) {
  std::string setter;
  setter += "set";
  setter += toupper(name[0]);
  setter += name.substr(1);
  setter += ":";
  return setter;
}

std::string jsifySelector(std::string selector) {
  // selector like initWithFrame:size: -> initWithFrameSize
  std::string jsifiedSelector;
  bool nextupper = false;
  for (auto c : selector) {
    if (c == ':') {
      nextupper = true;
    } else if (nextupper) {
      jsifiedSelector += toupper(c);
      nextupper = false;
    } else {
      jsifiedSelector += c;
    }
  }
  return jsifiedSelector;
}
