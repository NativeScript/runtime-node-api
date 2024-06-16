#include "Require.h"
#include "NapiUtil.h"
#include "js_native_api.h"
#include <iostream>
#include <string>

napi_value Require::createRequire(napi_env env, std::string& path,
                                  std::string& tilde) {
  Require *require = new Require(path, tilde);
  napi_value result;
  napi_create_function(env, "require", NAPI_AUTO_LENGTH,
                       Require::requireCallback, require, &result);
  napi_ref ref;
  napi_wrap(env, result, require, Require::finalize, nullptr, &ref);
  return result;
}

void Require::init(napi_env env, std::string& path, std::string& tilde) {
  napi_value global;
  napi_get_global(env, &global);

  napi_value require = createRequire(env, path, tilde);
  napi_set_named_property(env, global, "require", require);
}

void Require::finalize(napi_env env, void *data, void *hint) {
  Require *require = (Require *)data;
  delete require;
}

std::string Require::resolve(std::string &spec) {
  if (spec.find("/") == 0) {
    return spec;
  }

  size_t dotpos = spec.find(".");
  size_t tildepos = spec.find("~");
  std::string result;
  if (tildepos == 0) {
    result = tilde;
    result += "/app";
  } else {
    result = path;
  }

  if (dotpos == 0 || tildepos == 0) {
    std::string relativeSpec =
        spec.substr(spec.find("./") == 0 || spec.find("~/") == 0 ? 2 : 1);
    if (relativeSpec.empty()) {
      result += "/index.js";
    } else {
      result += "/" + relativeSpec;
    }
  } else {
    result += "/" + spec;
  }

  size_t pos = result.rfind("/");
  size_t jspos = result.find(".js");
  if (jspos < pos || jspos == std::string::npos) {
    result += result.ends_with("/") ? "index.js" : "/index.js";
  }

  return result;
}

napi_value Require::require(napi_env env, std::string &spec) {
  std::string path = resolve(spec);

  char *source = nullptr;
  size_t size = 0;
  FILE *file = fopen(path.c_str(), "r");
  if (file) {
    fseek(file, 0, SEEK_END);
    size = ftell(file);
    fseek(file, 0, SEEK_SET);
    source = (char *)malloc(size + 1);
    fread(source, 1, size, file);
    source[size] = 0;
    fclose(file);
  } else {
    std::cerr << "error in open file: " << path << std::endl;
    return nullptr;
  }

  if (spec.ends_with(".json")) {
    napi_value script, result;
    napi_create_string_utf8(env, source, NAPI_AUTO_LENGTH, &script);
    napi_run_script(env, script, &result);
    return result;
  }

  std::string bootstrap;
  bootstrap = "let cjsModule; try { cjsModule = function c(exports, "
              "require, module, __filename, __dirname) {";
  bootstrap += source;
  bootstrap +=
      "\n};\n"
      "Object.defineProperty(cjsModule, \"name\", { value: `" +
      path + "` });\n} catch (e) { throw new Error(`Failed to evaluate module: ${e.stack}`); }\n cjsModule";

  napi_status status;
  napi_value func, script, module, exports, require, __filename, __dirname,
      global, result;

  napi_create_string_utf8(env, bootstrap.c_str(), NAPI_AUTO_LENGTH, &script);

  status = napi_run_script(env, script, &func);
  if (status != napi_ok) {
    const napi_extended_error_info *info;
    napi_get_last_error_info(env, &info);
    std::cerr << "error in run script: " << status << ", "
              << info->error_message << std::endl;
    return nullptr;
  }

  napi_create_object(env, &module);
  napi_create_object(env, &exports);

  napi_set_named_property(env, module, "exports", exports);

  napi_get_global(env, &global);

  napi_create_string_utf8(env, path.c_str(), NAPI_AUTO_LENGTH, &__filename);

  std::string dirname = path.substr(0, path.rfind("/"));

  require = Require::createRequire(env, dirname, tilde);

  napi_create_string_utf8(env, dirname.c_str(), NAPI_AUTO_LENGTH, &__dirname);

  napi_value argv[5] = {exports, require, module, __filename, __dirname};

  status = napi_call_function(env, global, func, 5, argv, &result);
  if (status != napi_ok) {
    const napi_extended_error_info *info;
    napi_get_last_error_info(env, &info);
    std::cerr << "error in evaluate module: " << status << ", "
              << info->error_message << std::endl;
    return nullptr;
  }

  napi_get_named_property(env, module, "exports", &exports);
  return exports;
}

napi_value Require::requireCallback(napi_env env, napi_callback_info cbinfo) {
  napi_value arg;
  Require *require;
  size_t argc = 1;
  napi_get_cb_info(env, cbinfo, &argc, &arg, nullptr, (void **)&require);
  std::string spec = getStringValue(env, arg);
  return require->require(env, spec);
}
