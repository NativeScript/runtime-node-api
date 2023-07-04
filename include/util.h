#ifndef UTIL_H
#define UTIL_H

#include "objc/message.h"
#include "objc/runtime.h"
#include <string>

namespace objc_bridge {

std::string implicitSetterSelector(std::string name);
std::string jsifySelector(std::string selector);

} // namespace objc_bridge

#endif /* UTIL_H */
