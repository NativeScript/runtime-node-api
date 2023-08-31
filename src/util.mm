#include "Util.h"

namespace objc_bridge {

std::string implicitSetterSelector(std::string name) {
  std::string setter;
  setter += "set";
  setter += toupper(name[0]);
  setter += name.substr(1);
  setter += ":";
  return setter;
}

std::string jsifySelector(std::string selector) {
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

napi_value jsSymbolFor(napi_env env, const char *string) {
  napi_value global, Symbol, SymbolFor, symbol, symbolString;
  napi_get_global(env, &global);
  napi_get_named_property(env, global, "Symbol", &Symbol);
  napi_get_named_property(env, Symbol, "for", &SymbolFor);
  napi_create_string_utf8(env, string, NAPI_AUTO_LENGTH, &symbolString);
  napi_call_function(env, global, SymbolFor, 1, &symbolString, &symbol);
  return symbol;
}

} // namespace objc_bridge
