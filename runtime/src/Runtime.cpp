#include "Runtime.h"
#include "js_native_api_types.h"
#include "jsr.h"
#include "jsr_common.h"
#ifdef __APPLE__
#include "App.h"
#endif // __APPLE__
#include "Console.h"
#include "Performance.h"
#include "Require.h"
#include "Timers.h"
#include "js_native_api.h"
#ifdef TARGET_ENGINE_V8
#include "v8-api.h"
#endif // TARGET_ENGINE_V8
#include <CoreFoundation/CFRunLoop.h>
#include <iostream>

// #include <NativeScript/NativeScript.h>

extern "C" {
void objc_bridge_init(napi_env env, const char *metadata_path);
}

namespace charon {

// class BytecodeBuffer : public facebook::jsi::Buffer {
// public:
//   BytecodeBuffer(const uint8_t *data, size_t length)
//       : data_(data), length_(length) {}

//   size_t size() const override { return length_; }
//   const uint8_t *data() const override { return data_; }

// private:
//   const uint8_t *data_;
//   size_t length_;
// };

Runtime::Runtime(std::string &mainPath) : mainPath(mainPath) {
  // hermes::vm::RuntimeConfig config =
  //     hermes::vm::RuntimeConfig::Builder().withMicrotaskQueue(true).build();
  // threadSafeRuntime = facebook::hermes::makeThreadSafeHermesRuntime(config);
  // runtime =
  //     (facebook::hermes::HermesRuntime
  //     *)&threadSafeRuntime->getUnsafeRuntime();

  // runtime->createNapiEnv(&env);

  js_set_runtime_flags("");

  js_create_runtime(&runtime);
  js_create_napi_env(&env, runtime);

#ifdef TARGET_ENGINE_V8
  v8::Locker locker(env->isolate);
  v8::Isolate::Scope isolate_scope(env->isolate);
  v8::Context::Scope context_scope(env->context());
#endif // TARGET_ENGINE_V8

  napi_open_handle_scope(env, &globalScope);

  napi_handle_scope scope;
  napi_open_handle_scope(env, &scope);

  napi_value global;
  napi_get_global(env, &global);
  napi_set_named_property(env, global, "global", global);

  Console::init(env);
  Performance::init(env);
#ifdef __APPLE__
  Timers::init(env);
#endif // __APPLE__

  require = Require::init(env, mainPath, mainPath);

  const char *metadata_path = std::getenv("METADATA_PATH");
  objc_bridge_init(env, metadata_path);

#ifdef __APPLE__
  App *app = App::init(env);
  // app->runtime = this->runtime;
#endif // __APPLE__
}

napi_value Runtime::evaluateModule(std::string &spec) {
  std::string path = require->resolve(spec);
  return require->require(env, path);
}

int Runtime::executeJS(const char *sourceFile) {
  NapiScope scope(env);

  auto f = std::fopen(sourceFile, "r");
  if (!f) {
    std::cout << "Failed to open file: " << sourceFile << std::endl;
    return 1;
  }

  auto source = std::string{};
  auto buf = std::array<char, 1024>{};
  while (auto n = std::fread(buf.data(), 1, buf.size(), f)) {
    source.append(buf.data(), n);
  }

  std::fclose(f);

  // auto buffer = std::make_shared<facebook::jsi::StringBuffer>(source);
  // std::string sourceURL = sourceFile;

  // auto result = runtime->evaluateJavaScript(buffer, sourceURL);

  napi_value script, result;
  napi_create_string_utf8(env, source.c_str(), source.length(), &script);
  js_execute_script(env, script, sourceFile, &result);

  return 0;
}

int Runtime::executeBytecode(const uint8_t *data, size_t size) {
  NapiScope scope(env);

  // auto buffer = std::make_shared<BytecodeBuffer>(data, size);
  // std::string sourceURL = "embedded-hbc";

  // auto result = runtime->evaluateJavaScript(buffer, sourceURL);
  // TODO implement this for v8

  return 0;
}

bool Runtime::eventLoopStep() { return false; }

void Runtime::addEventLoopToRunLoop(bool exitOnEmpty) {
  auto handler =
      ^void(CFRunLoopObserverRef observer, CFRunLoopActivity activity) {
        if (activity == kCFRunLoopBeforeWaiting) {
          bool moreWork = this->eventLoopStep();
          if (moreWork) {
            CFRunLoopWakeUp(CFRunLoopGetMain());
          } else if (exitOnEmpty) {
            CFRunLoopStop(CFRunLoopGetMain());
          }
        }
      };

  CFRunLoopObserverRef observer = CFRunLoopObserverCreateWithHandler(
      kCFAllocatorDefault, kCFRunLoopAllActivities, true, 0, handler);
  CFRunLoopAddObserver(CFRunLoopGetMain(), observer, kCFRunLoopDefaultMode);
}

void Runtime::runRunLoop() {
  // Why does this not stop?
  // while (true) {
  //   CFRunLoopRunResult result = CFRunLoopRunInMode(kCFRunLoopDefaultMode, 0,
  //   true); if (result == kCFRunLoopRunFinished || result ==
  //   kCFRunLoopRunStopped) {
  //     break;
  //   }
  // }

  CFRunLoopRun();
}

} // namespace charon
