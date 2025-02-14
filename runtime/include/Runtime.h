#ifndef RUNTIME_H
#define RUNTIME_H

#include "Require.h"
#include "js_native_api_types.h"
#include "jsr.h"

namespace charon {

class Runtime {
public:
  Runtime(std::string &mainPath);

  napi_value evaluateModule(std::string &spec);
  int executeJS(const char *sourceFile);
  int executeBytecode(const uint8_t *data, size_t size);

  bool eventLoopStep();
  void addEventLoopToRunLoop(bool exitOnEmpty = false);
  void runRunLoop();

  // std::unique_ptr<facebook::jsi::ThreadSafeRuntime> threadSafeRuntime;
  // facebook::hermes::HermesRuntime *runtime;
  napi_runtime runtime;
  napi_env env;
  napi_handle_scope globalScope;
  std::string mainPath;
  Require *require;
};

} // namespace charon

#endif // RUNTIME_H
