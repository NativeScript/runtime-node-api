#include "Compiler.h"
#include "Runtime.h"
#include "segappend.h"
#include <iostream>

using namespace charon;

int main(int argc, char **argv) {
  const uint8_t *segmentData;
  size_t segmentSize;
  auto status = segappend_load_segment("__charon_start", (void **)&segmentData,
                                       &segmentSize);

  if (status == segappend_ok) {
    auto runtime = Runtime();
    size_t bytecode_size = *(size_t *)segmentData;
    segmentData += sizeof(size_t);
    return runtime.executeBytecode(segmentData, bytecode_size);
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
    auto runtime = Runtime();
    return runtime.executeJS(argv[2]);
  } else {
    std::cout << "Unknown command: " << cmd << std::endl;
    return 1;
  }
}
