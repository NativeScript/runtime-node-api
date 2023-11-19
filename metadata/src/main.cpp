#include "IR.h"
#include "Metadata.h"
#include "MetadataWriter.h"
#include "TSEmitter.h"
#include <clang-c/Index.h>
#include <cstdio>
#include <cstdlib>
#include <functional>
#include <iostream>
#include <memory>
#include <set>
#include <string>
#include <unordered_map>
#include <vector>

using namespace metagen;

#define UMBRELLA_HEADER "umbrella.h"

int main(int argc, char **argv) {
  char *target = argv[1];
  char *outputFile = argv[2];
  char *outputTypesDir = argv[3];
  std::string sdk = argv[4];
  std::string frameworksDir = sdk + "/System/Library/Frameworks";

  std::set<std::string> frameworks;

  for (int i = 5; i < argc; i++) {
    frameworks.insert(argv[i]);
  }

  std::vector<std::string> args = {"-Xclang",
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
                                   "-Wno-deprecated-declarations",
                                   "-Wno-objc-property-no-attribute",
                                   "-std=gnu11",
                                   "-I" + sdk + "/usr/include",
                                   "-F" + frameworksDir,
                                   "-target",
                                   target};

  std::string code = "";

  for (auto &framework : frameworks) {
    args.emplace_back("-I" + frameworksDir + "/" + framework +
                      ".framework/Headers");
    code += "#import <" + framework + "/" + framework + ".h>\n";
  }

  std::vector<const char *> argsC(args.size());
  for (size_t i = 0; i < args.size(); ++i) {
    argsC[i] = args[i].c_str();
  }

  auto umbrellaHeader = std::fopen(UMBRELLA_HEADER, "w");
  std::fwrite(code.data(), 1, code.size(), umbrellaHeader);
  std::fclose(umbrellaHeader);

  CXIndex index = clang_createIndex(0, 0);
  CXTranslationUnit unit = clang_parseTranslationUnit(
      index, UMBRELLA_HEADER, argsC.data(), args.size(), nullptr, 0,
      CXTranslationUnit_None);

  if (unit == nullptr) {
    std::cout << "Failed to parse translation unit" << std::endl;
    std::exit(1);
  }

  std::remove(UMBRELLA_HEADER);

  // print diagnostics
  unsigned numDiagnostics = clang_getNumDiagnostics(unit);

  for (unsigned i = 0; i < numDiagnostics; ++i) {
    CXDiagnostic diagnostic = clang_getDiagnostic(unit, i);
    CXDiagnosticSeverity severity = clang_getDiagnosticSeverity(diagnostic);
    if (severity != CXDiagnostic_Error && severity != CXDiagnostic_Fatal) {
      continue;
    }
    CXString string = clang_formatDiagnostic(
        diagnostic,
        CXDiagnostic_DisplayCategoryId | CXDiagnostic_DisplaySourceLocation |
            CXDiagnostic_DisplayColumn | CXDiagnostic_DisplaySourceRanges |
            CXDiagnostic_DisplayOption);
    std::cout << clang_getCString(string) << std::endl;
    clang_disposeString(string);
  }

  CXCursor cursor = clang_getTranslationUnitCursor(unit);

  MetadataFactory factory;
  for (auto fw : frameworks) {
    factory.frameworks.emplace(fw);
  }
  factory.process(cursor);
  factory.postProcess();

  clang_disposeTranslationUnit(unit);
  clang_disposeIndex(index);

  TSEmitter ts(factory, outputTypesDir);
  ts.write();

  MDMetadataWriter writer(factory);
  writer.write();

  auto result = writer.serialize();

  std::cout << " --- serialization stats ---" << std::endl;
  std::cout << "           total size: " << result.second / 1024. / 1024.
            << " MB" << std::endl;
  std::cout << "       total sections: " << MD_NUM_SECTIONS << std::endl;
  std::cout << "       num frameworks: " << frameworks.size() << std::endl;
  std::cout << "    strings (n, size): " << writer.strings.size() << ", "
            << writer.strings.section_size / 1024. << " KB" << std::endl;
  std::cout << "     consts (n, size): " << writer.constants.size() << ","
            << writer.constants.section_size / 1024. << " KB" << std::endl;
  std::cout << "      enums (n, size): " << writer.enums.size() << ", "
            << writer.enums.section_size / 1024. << " KB" << std::endl;
  std::cout << " signatures (n, size): " << writer.signatures.size() << ", "
            << writer.signatures.section_size / 1024. << " KB" << std::endl;
  std::cout << "  functions (n, size): " << writer.functions.size() << ", "
            << writer.functions.section_size / 1024. << " KB" << std::endl;
  std::cout << "  protocols (n, size): " << writer.protocols.size() << ", "
            << writer.protocols.section_size / 1024. << " KB" << std::endl;
  std::cout << "    structs (n, size): " << writer.structs.size() << ", "
            << writer.structs.section_size / 1024. << " KB" << std::endl;
  std::cout << "    classes (n, size): " << writer.classes.size() << ", "
            << writer.classes.section_size / 1024. << " KB" << std::endl;
  std::cout << "     unions (n, size): " << writer.unions.size() << ", "
            << writer.unions.section_size / 1024. << " KB" << std::endl;

  auto file = std::fopen(outputFile, "w");
  std::fwrite(result.first, 1, result.second, file);
  std::fclose(file);

  return 0;
}
