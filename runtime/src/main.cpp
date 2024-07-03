#include "Compiler.h"
#include "Runtime.h"
#include "segappend.h"
#include <filesystem>
#include <iostream>

using namespace charon;

int main(int argc, char **argv) {
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

    int code = runtime.executeJS(argv[2]);
    if (code != 0) {
      std::cout << "Failed to execute JS" << std::endl;
      return code;
    }

    runtime.runRunLoop();

    return 0;
  } else {
    std::cout << "Unknown command: " << cmd << std::endl;
    return 1;
  }
}
