#include "Console.h"
#include "js_native_api_types.h"
#include <iostream>
#include <string>

namespace charon {

void Console::init(napi_env env) {
  napi_value global, Console, console;

  napi_get_global(env, &global);

  const napi_property_descriptor properties[] = {
      {
          .utf8name = "log",
          .name = nullptr,
          .method = log,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = (void *)kConsoleStreamLog,
      },
      {
          .utf8name = "error",
          .name = nullptr,
          .method = log,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = (void *)kConsoleStreamError,
      },
      {
          .utf8name = "warn",
          .name = nullptr,
          .method = log,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = (void *)kConsoleStreamWarn,
      },
  };

  napi_define_class(env, "Console", NAPI_AUTO_LENGTH, Console::constructor,
                    nullptr, 3, properties, &Console);

  napi_new_instance(env, Console, 0, nullptr, &console);

  const napi_property_descriptor globalProperties[] = {
      {
          .utf8name = "console",
          .name = nullptr,
          .method = nullptr,
          .getter = nullptr,
          .setter = nullptr,
          .value = console,
          .attributes = napi_default,
          .data = nullptr,
      },
      {
          .utf8name = "Console",
          .name = nullptr,
          .method = nullptr,
          .getter = nullptr,
          .setter = nullptr,
          .value = Console,
          .attributes = napi_default,
          .data = nullptr,
      },
  };

  napi_define_properties(env, global, 2, globalProperties);
}

napi_value Console::constructor(napi_env env, napi_callback_info cbinfo) {
  napi_value thisArg;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &thisArg, nullptr);
  return thisArg;
}

napi_value Console::log(napi_env env, napi_callback_info cbinfo) {
  size_t argc = 0;
  ConsoleStream stream;
  void *data = nullptr;

  napi_get_cb_info(env, cbinfo, &argc, nullptr, nullptr, &data);

  stream = ConsoleStream((unsigned long)data);

  napi_value argv[argc];
  napi_get_cb_info(env, cbinfo, &argc, argv, nullptr, nullptr);

  napi_value global, Symbol, SymbolFor, symbolDescription, symbol;
  napi_get_global(env, &global);
  napi_get_named_property(env, global, "Symbol", &Symbol);
  napi_get_named_property(env, Symbol, "for", &SymbolFor);
  napi_create_string_utf8(env, "nodejs.util.inspect.custom", NAPI_AUTO_LENGTH,
                          &symbolDescription);
  napi_call_function(env, global, SymbolFor, 1, &symbolDescription, &symbol);

  std::string string;

  for (size_t i = 0; i < argc; i++) {
    napi_valuetype type;
    napi_typeof(env, argv[i], &type);

    bool hasSymbol = false;
    if (type == napi_object || type == napi_function) {
      napi_has_property(env, argv[i], symbol, &hasSymbol);
    }

    napi_value argstr = nullptr;

    if (hasSymbol) {
      napi_value fn;
      napi_get_property(env, argv[i], symbol, &fn);
      napi_call_function(env, argv[i], fn, 0, nullptr, &argstr);
    } else {
      napi_coerce_to_string(env, argv[i], &argstr);
    }

    size_t length = 0;
    napi_get_value_string_utf8(env, argstr, nullptr, 0, &length);
    char *strbuf = (char *)malloc(length + 2);
    napi_get_value_string_utf8(env, argstr, strbuf, length + 2, &length);
    strbuf[length] = i >= (argc - 1) ? '\0' : ' ';
    strbuf[length + 1] = '\0';
    string += strbuf;
  }

  // TODO(dj): what if we made this pretty?

  std::string log;
  log += "[JS]";
  switch (stream) {
  case kConsoleStreamLog:
    // log += "LOG";
    break;
  case kConsoleStreamError:
    log += " ERROR";
    break;
  case kConsoleStreamWarn:
    log += " WARN";
    break;
  }
  log += " ";
  log += string;
  log += "\n";

  switch (stream) {
  case kConsoleStreamLog:
    std::cout << log;
    break;
  case kConsoleStreamError:
    std::cerr << log;
    break;
  case kConsoleStreamWarn:
    std::cerr << log;
    break;
  }

  napi_value undefined;
  napi_get_undefined(env, &undefined);
  return undefined;
}

} // namespace charon
