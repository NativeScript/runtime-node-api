#include "Util.h"
#include "Metadata.h"
#include "js_native_api.h"
#include "js_native_api_types.h"

using namespace metagen;

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
  case napi_number: {
    int32_t number = -1;
    napi_get_value_int32(env, value, &number);

    switch (number) {
    case mdTypeVoid:
      return "v";

    case mdTypeBool:
      return "B";

    case mdTypeChar:
      return "c";

    case mdTypeUInt8:
      return "C";

    case mdTypeSShort:
      return "s";

    case mdTypeUShort:
      return "S";

    case mdTypeSInt:
      return "i";

    case mdTypeUInt:
      return "I";

    case mdTypeSInt64:
      return "q";

    case mdTypeUInt64:
      return "Q";

    case mdTypeFloat:
      return "f";

    case mdTypeDouble:
      return "d";

    case mdTypeString:
      return "*";

    case mdTypeAnyObject:
      return "@";

    case mdTypePointer:
      return "^v";

    case mdTypeSelector:
      return ":";

    default:
      napi_throw_error(env, nullptr, "Invalid type");
      return "v";
    }
  }

  case napi_function:
    // Must be a native class constructor like NSObject.
    return "@";

  default:
    napi_throw_error(env, nullptr, "Invalid type");
    return "v";
  }
}

} // namespace objc_bridge
