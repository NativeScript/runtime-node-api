#include <clang/Frontend/ASTUnit.h>
#include <clang/Lex/HeaderSearch.h>
#include <clang/Lex/Preprocessor.h>
#include <clang/Tooling/Tooling.h>
#include <iostream>
#include <string>
#include <vector>

int main(int argc, char **argv) {
  llvm::StringRef code = "#import <Foundation/Foundation.h>\n";

  std::string sdk = "/Applications/Xcode.app/Contents/Developer/Platforms/"
                    "MacOSX.platform/Developer/SDKs/MacOSX.sdk";
  std::string frameworksDir = sdk + "/System/Library/Frameworks";
  std::string frameworkName = "Foundation";

  std::vector<std::string> args = {
      "-Xclang",
      "-isysroot",
      sdk,

      "-x",
      "objective-c",

      "-fno-objc-arc",
      "-fmodule-maps",
      "-ferror-limit=0",

      "-Wno-unknown-pragmas",
      "-Wno-ignored-attributes",
      "-Wno-nullability-completeness",
      "-Wno-expansion-to-defined",

      "-std=gnu99",

      // Include the framework's umbrella header.
      "-I" + frameworksDir + "/" + frameworkName + ".framework/Headers",

      // Include the system headers (CoreFoundation, for example, requires
      // them).
      "-I" + sdk + "/usr/include",

      // Pass the Frameworks directory.
      "-F" + frameworksDir,
  };

  auto unit = clang::tooling::buildASTFromCodeWithArgs(code, args);
  clang::HeaderSearch &headerSearch =
      unit->getPreprocessor().getHeaderSearchInfo();

  std::cout << "Header search:" << std::endl;
  headerSearch.PrintStats();

  return 0;
}
