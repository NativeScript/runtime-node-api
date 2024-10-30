#include "Bundle.h"
#include "Compiler.h"
#include "Runtime.h"
#include "segappend.h"
#include <filesystem>
#include <fstream>
#include <iostream>

using namespace charon;

int main(int argc, char **argv) {
#ifdef __APPLE__
  std::string bytecodePath = getBytecodePathFromBundle();
  if (!bytecodePath.empty()) {
    std::string bundlePath = getBundlePath();

    auto runtime = Runtime(bundlePath);

    // runtime.addEventLoopToRunLoop(true);

    std::ifstream file(bytecodePath, std::ios::binary);
    if (!file.is_open()) {
      std::cout << "Failed to open bytecode file" << std::endl;
      return 1;
    }

    file.seekg(0, std::ios::end);
    size_t size = file.tellg();
    file.seekg(0, std::ios::beg);

    std::vector<uint8_t> data(size);
    file.read((char *)data.data(), size);

    file.close();

    runtime.executeBytecode(data.data(), size);

    return 0;
  }
#endif // __APPLE__

  const uint8_t *segmentData;
  size_t segmentSize;
  auto status = segappend_load_segment("__charon_start", (void **)&segmentData,
                                       &segmentSize);

  std::string cwd = std::filesystem::current_path().string();

  if (status == segappend_ok) {
    auto runtime = Runtime(cwd);
    size_t bytecode_size = *(size_t *)segmentData;
    segmentData += sizeof(size_t);

    runtime.addEventLoopToRunLoop(true);

    int code = runtime.executeBytecode(segmentData, bytecode_size);
    if (code != 0) {
      std::cout << "Failed to execute bytecode" << std::endl;
      return code;
    }

    runtime.runRunLoop();

    return 0;
  }

  if (argc < 3) {
    std::cout << "Usage: " << argv[0] << " run <js file>" << std::endl;
    return 1;
  }

  std::string cmd = argv[1];

  if (cmd == "compile") {
    if (argc < 4) {
      std::cout << "Usage: " << argv[0] << " compile <js file> <output file>"
                << std::endl;
      return 1;
    }
    return compile(argv[0], argv[2], argv[3]);
  } else if (cmd == "run") {
    auto runtime = Runtime(cwd);

    runtime.addEventLoopToRunLoop(true);

    std::string spec = argv[2];

    runtime.evaluateModule(spec);
    // if (code != 0) {
    //   std::cout << "Failed to execute JS" << std::endl;
    //   return code;
    // }

    runtime.runRunLoop();

    return 0;
  } else {
    std::cout << "Unknown command: " << cmd << std::endl;
    return 1;
  }
}
