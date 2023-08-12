#ifndef UTIL_H
#define UTIL_H

#include "js_native_api.h"
#include "objc/message.h"
#include "objc/runtime.h"
#include <string>

namespace objc_bridge {

std::string implicitSetterSelector(std::string name);
std::string jsifySelector(std::string selector);

napi_value jsSymbolFor(napi_env env, const char *string);

} // namespace objc_bridge

#endif /* UTIL_H */
