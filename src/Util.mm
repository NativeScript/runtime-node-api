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

char name_buf[512];

std::string getEncodedType(napi_env env, napi_value value) {
  napi_valuetype type;
  napi_typeof(env, value, &type);

  switch (type) {
  case napi_string: {
    size_t len;
    napi_get_value_string_utf8(env, value, name_buf, 512, &len);
    std::string name = name_buf;
    if (name == "id") {
      return "@";
    } else if (name == "void") {
      return "v";
    } else if (name == "bool") {
      return "B";
    } else if (name == "char") {
      return "c";
    } else if (name == "unsigned char") {
      return "C";
    } else if (name == "short") {
      return "s";
    } else if (name == "unsigned short") {
      return "S";
    } else if (name == "int") {
      return "i";
    } else if (name == "unsigned int") {
      return "I";
    } else if (name == "long") {
      return "l";
    } else if (name == "unsigned long") {
      return "L";
    } else if (name == "long long") {
      return "q";
    } else if (name == "unsigned long long") {
      return "Q";
    } else if (name == "float") {
      return "f";
    } else if (name == "double") {
      return "d";
    } else if (name == "string") {
      return "*";
    } else if (name == "pointer") {
      return "^v";
    } else if (name == "class") {
      return "#";
    } else if (name == "selector") {
      return ":";
    } else {
      napi_throw_error(env, nullptr, "Invalid type");
      return "v";
    }
  }

  default:
    napi_throw_error(env, nullptr, "Invalid type");
    return "v";
  }
}

} // namespace objc_bridge
