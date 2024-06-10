#include "Compiler.h"
#include "segappend.h"
#include <filesystem>
#include <iostream>
#include <array>

namespace charon {

int compile(const char *executable, const char *sourceFile,
            const char *outputFile) {
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
  std::filesystem::copy_file(executable, outputFile,
                             std::filesystem::copy_options::overwrite_existing);

  auto codesign = std::string{"codesign --remove-signature "} + outputFile;
  auto code = std::system(codesign.c_str());

  auto hbc = std::fopen(sourceFile, "r");
  if (!hbc) {
    std::cout << "Failed to open file: " << sourceFile << std::endl;
    return 1;
  }

  auto hbcSize = std::filesystem::file_size(sourceFile);
  auto hbcData = malloc(hbcSize + 8);
  auto hbcStart = (uint8_t *)hbcData + 8;
  std::fread(hbcStart, 1, hbcSize, hbc);
  std::fclose(hbc);

  *((size_t *)hbcData) = hbcSize;

  auto status = segappend_create_segment(outputFile, "__charon_start", hbcData,
                                         hbcSize + 8, outputFile);

  if (status != segappend_ok) {
    std::cout << "Failed to append segment: " << status << std::endl;
    return 1;
  }

  codesign = std::string{"codesign -fs - "} + outputFile;
  code = std::system(codesign.c_str());

  std::cout << "Compiled " << sourceFile << " to " << outputFile << std::endl;

  return 0;
}

} // namespace charon
