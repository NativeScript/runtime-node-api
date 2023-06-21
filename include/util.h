#ifndef UTIL_H
#define UTIL_H

#include "objc/runtime.h"
#include <string>

std::string implicitSetterSelector(std::string name);
std::string jsifySelector(std::string selector);

#endif /* UTIL_H */
