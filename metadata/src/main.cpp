#include "IR.h"
#include "Metadata.h"
#include "MetadataWriter.h"
#include "TSEmitter.h"
#include <clang-c/Index.h>
#include <cstdio>
#include <cstdlib>
#include <iostream>
#include <string>
#include <unordered_set>
#include <vector>

using namespace metagen;

#define UMBRELLA_HEADER "umbrella.h"

int main(int argc, char **argv) {
  std::string outputFile;
  std::string outputTypesDir;
  std::string sdk;
  std::string frameworksDir;

  std::string code = "";

  std::vector<std::string> args = {"-Xclang",
                                   "-isysroot",
                                   "",
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
                                   "-std=gnu11"};

  std::unordered_set<std::string> includePaths;

  for (int i = 1; i < argc; i++) {
    std::string arg = argv[i];
    if (arg.find("framework=") == 0) {
      if (frameworksDir.empty()) {
        std::cout << "framework= argument must be specified after sdk="
                  << std::endl;
        std::exit(1);
      }

      std::string framework = arg.substr(10);
      std::string includePath = frameworksDir + "/" + framework + ".framework";
      includePaths.emplace(includePath);
      args.emplace_back("-I" + includePath + "/Headers");
      code += "#import <" + framework + "/" + framework + ".h>\n";
    } else if (arg.find("include=") == 0) {
      std::string includeDir = arg.substr(8);
      includePaths.emplace(includeDir);
    } else if (arg.find("headers=") == 0) {
      std::string includeDir = arg.substr(8);
      args.emplace_back("-I" + includeDir);
    } else if (arg.find("import=") == 0) {
      std::string import = arg.substr(7);
      code += "#import " + import + "\n";
    } else if (arg.find("sdk=") == 0) {
      sdk = arg.substr(4);
      args[2] = sdk;
      args.emplace_back("-I" + sdk + "/usr/include");
      frameworksDir = sdk + "/System/Library/Frameworks";
      args.emplace_back("-F" + frameworksDir);
    } else if (arg.find("target=") == 0) {
      std::string target = arg.substr(7);
      args.emplace_back("-target");
      args.emplace_back(target);
    } else if (arg.find("arg=") == 0) {
      std::string argval = arg.substr(4);
      args.emplace_back(argval);
    } else if (arg.find("output=") == 0) {
      outputFile = arg.substr(7);
    } else if (arg.find("types=") == 0) {
      outputTypesDir = arg.substr(6);
    } else if (arg.find("arch=") == 0) {
      std::string arch = arg.substr(5);
      args.emplace_back("-arch");
      args.emplace_back(arch);
    } else {
      std::cout << "Unknown argument: " << arg << std::endl;
      std::exit(1);
    }
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

  std::remove(UMBRELLA_HEADER);

  if (unit == nullptr) {
    std::cout << "Failed to parse translation unit" << std::endl;
    std::exit(1);
  }

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
  factory.includePaths = includePaths;
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

  auto file = std::fopen(outputFile.c_str(), "w");
  std::fwrite(result.first, 1, result.second, file);
  std::fclose(file);

  return 0;
}
