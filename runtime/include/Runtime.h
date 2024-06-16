#ifndef RUNTIME_H
#define RUNTIME_H

#include <hermes/hermes.h>
#include <hermes/hermes_api.h>

extern "C" void objc_bridge_init(napi_env env, const char *metadata_path);

namespace charon {

class Runtime {
public:
  Runtime();

  int executeJS(const char *sourceFile);
  int executeBytecode(const uint8_t *data, size_t size);

  std::unique_ptr<facebook::hermes::HermesRuntime> runtime;
  napi_env env;
  std::string mainPath;
};

} // namespace charon

#endif // RUNTIME_H
