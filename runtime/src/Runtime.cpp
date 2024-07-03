#include "Runtime.h"
#include "Console.h"
#include "Performance.h"
#include "Require.h"
#include "js_native_api.h"
#include <iostream>
#include <CoreFoundation/CFRunLoop.h>

namespace charon {

class BytecodeBuffer : public facebook::jsi::Buffer {
public:
  BytecodeBuffer(const uint8_t *data, size_t length)
      : data_(data), length_(length) {}

  size_t size() const override { return length_; }
  const uint8_t *data() const override { return data_; }

private:
  const uint8_t *data_;
  size_t length_;
};

Runtime::Runtime(std::string &mainPath) : mainPath(mainPath) {
  hermes::vm::RuntimeConfig config = hermes::vm::RuntimeConfig::Builder().withMicrotaskQueue(true).build();
  threadSafeRuntime = facebook::hermes::makeThreadSafeHermesRuntime(config);
  runtime = (facebook::hermes::HermesRuntime *) &threadSafeRuntime->getUnsafeRuntime();

  runtime->createNapiEnv(&env);

  napi_value global;
  napi_get_global(env, &global);
  napi_set_named_property(env, global, "global", global);

  Console::init(env);
  Performance::init(env);

  require = Require::init(env, mainPath, mainPath);

  const char *metadata_path = std::getenv("METADATA_PATH");
  objc_bridge_init(env, metadata_path);
}

napi_value Runtime::evaluateModule(std::string &spec) {
  std::string path = require->resolve(spec);
  return require->require(env, path);
}

int Runtime::executeJS(const char *sourceFile) {
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

  auto buffer = std::make_shared<facebook::jsi::StringBuffer>(source);
  std::string sourceURL = sourceFile;

  auto result = runtime->evaluateJavaScript(buffer, sourceURL);

  return 0;
}

int Runtime::executeBytecode(const uint8_t *data, size_t size) {
  auto buffer = std::make_shared<BytecodeBuffer>(data, size);
  std::string sourceURL = "embedded-hbc";

  auto result = runtime->evaluateJavaScript(buffer, sourceURL);

  return 0;
}

bool Runtime::eventLoopStep() {
  return !runtime->drainMicrotasks();
}

void Runtime::addEventLoopToRunLoop(bool exitOnEmpty) {
  auto handler = ^void (CFRunLoopObserverRef observer, CFRunLoopActivity activity) {
    if (activity == kCFRunLoopBeforeWaiting){
      bool moreWork = this->eventLoopStep();
      if (moreWork) {
        CFRunLoopWakeUp(CFRunLoopGetMain());
      } else if (exitOnEmpty) {
        CFRunLoopStop(CFRunLoopGetMain());
      }
    }
  };

  CFRunLoopObserverRef observer = CFRunLoopObserverCreateWithHandler(kCFAllocatorDefault, kCFRunLoopAllActivities, true, 0, handler);
  CFRunLoopAddObserver(CFRunLoopGetMain(), observer, kCFRunLoopDefaultMode);
}

void Runtime::runRunLoop() {
  // Why does this not stop?
  // while (true) {
  //   CFRunLoopRunResult result = CFRunLoopRunInMode(kCFRunLoopDefaultMode, 0, true);
  //   if (result == kCFRunLoopRunFinished || result == kCFRunLoopRunStopped) {
  //     break;
  //   }
  // }

  CFRunLoopRun();
}

} // namespace charon
