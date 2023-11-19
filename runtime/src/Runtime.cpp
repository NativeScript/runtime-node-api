#include "Runtime.h"
#include "Console.h"
#include <iostream>

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

Runtime::Runtime() {
  runtime = facebook::hermes::makeHermesRuntime();

  runtime->createNapiEnv(&env);

  Console::init(env);

  const char *metadata_path = std::getenv("METADATA_PATH");
  objc_bridge_init(env, metadata_path);
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

} // namespace charon
