#include "Metadata.h"
#include <clang-c/Index.h>
#include <cstdio>
#include <cstdlib>
#include <functional>
#include <iostream>
#include <set>
#include <string>
#include <vector>

class MDCXState {
public:
  MDMetadata *metadata;

  MDCXState() : metadata(new MDMetadata()) {}

  void processMetadata(CXCursor cursor) {
    clang_visitChildren(
        cursor,
        [](CXCursor cursor, CXCursor parent, CXClientData clientData) {
          auto state = (MDCXState *)clientData;
          auto metadata = state->metadata;

          CXCursorKind kind = clang_getCursorKind(cursor);

          switch (kind) {
          case CXCursor_ObjCProtocolDecl: {
            state->processProtocol(cursor);
            break;
          }

          default:
            break;
          }

          return CXChildVisit_Continue;
        },
        this);
  }

private:
  void processProtocol(CXCursor cursor) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    std::cout << nameStr << std::endl;

    if (processed_protocols.contains(nameStr)) {
      return;
    } else {
      processed_protocols.insert(nameStr);
    }

    MDSectionOffset mdName = metadata->strings.add(nameStr, nameStr);

    MDProtocol *protocol = new MDProtocol();
    protocol->name = mdName;

    current_protocol = protocol;

    clang_visitChildren(
        cursor,
        [](CXCursor cursor, CXCursor parent, CXClientData clientData) {
          auto state = (MDCXState *)clientData;
          auto metadata = state->metadata;
          auto protocol = state->current_protocol;

          CXCursorKind kind = clang_getCursorKind(cursor);

          switch (kind) {
          case CXCursor_ObjCProtocolRef: {
            protocol->protocols.emplace_back(state->processProtocolRef(cursor));
            break;
          }

          case CXCursor_ObjCInstanceMethodDecl: {
            auto member = state->processMethod(cursor, false);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            protocol->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCClassMethodDecl: {
            auto member = state->processMethod(cursor, true);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            protocol->members.emplace_back(member);
            break;
          }

          default:
            break;
          }

          return CXChildVisit_Continue;
        },
        this);

    metadata->protocols.add(protocol, nameStr);

    current_protocol = nullptr;
    processed_cmethods.clear();
    processed_imethods.clear();
    processed_properties.clear();
  }

  MDSectionOffset processProtocolRef(CXCursor cursor) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string protocolName = clang_getCString(name);
    clang_disposeString(name);
    MDSectionOffset mdName = metadata->strings.add(protocolName, protocolName);
    return mdName;

    if (current_protocol != nullptr) {
      current_protocol->protocols.emplace_back(mdName);
      std::cout << "  " << protocolName << std::endl;
    }
  }

  MDMember processMethod(CXCursor cursor, bool isClassMethod) {
    std::set<std::string> &processed_methods =
        isClassMethod ? processed_cmethods : processed_imethods;

    CXString name = clang_getCursorSpelling(cursor);
    std::string selector = clang_getCString(name);
    clang_disposeString(name);

    if (processed_methods.contains(selector)) {
      MDMember member;
      return member;
    } else {
      processed_methods.insert(selector);
    }

    MDSectionOffset mdSelector = metadata->strings.add(selector, selector);
    std::cout << "  " << selector << std::endl;

    MDMember member;
    member.flags = mdMemberMethod;
    if (isClassMethod) {
      member.flags = (MDMemberFlag)(member.flags | mdMemberStatic);
    }
    member.methodSelector = mdSelector;
    member.signature = 0;

    auto signature = new MDSignature();

    auto resultType = clang_getCursorResultType(cursor);
    signature->returnType = processType(resultType);

    auto argc = clang_Cursor_getNumArguments(cursor);

    for (int i = 0; i < argc; i++) {
      auto argType = clang_getCursorType(clang_Cursor_getArgument(cursor, i));
      signature->arguments.emplace_back(processType(argType));
    }

    MDSignatureSerde serde;
    member.signature =
        metadata->signatures.add(signature, serde.encode(signature));

    return member;
  }

  MDTypeInfo *processType(CXType type) {
    auto canonicalType = clang_getCanonicalType(type);

    auto result = new MDTypeInfo();

    switch (canonicalType.kind) {
    case CXType_Void:
      result->kind = mdTypeVoid;
      break;

    case CXType_Bool:
      result->kind = mdTypeBool;
      break;

    case CXType_UChar:
      result->kind = mdTypeUChar;
      break;

    case CXType_UShort:
      result->kind = mdTypeUShort;
      break;

    case CXType_UInt:
      result->kind = mdTypeUInt;
      break;

    case CXType_ULong:
      result->kind = mdTypeULong;
      break;

    case CXType_ULongLong:
      result->kind = mdTypeUInt64;
      break;

    case CXType_SChar:
      result->kind = mdTypeChar;
      break;

    case CXType_Short:
      result->kind = mdTypeSShort;
      break;

    case CXType_Int:
      result->kind = mdTypeSInt;
      break;

    case CXType_Long:
      result->kind = mdTypeSLong;
      break;

    case CXType_LongLong:
      result->kind = mdTypeSInt64;
      break;

    case CXType_Float:
      result->kind = mdTypeFloat;
      break;

    case CXType_Double:
      result->kind = mdTypeDouble;
      break;

    case CXType_Pointer: {
      break;
    }

    case CXType_Record: {
      CXString name = clang_getTypeSpelling(canonicalType);
      std::string nameStr = clang_getCString(name);
      clang_disposeString(name);
      MDSectionOffset mdName = metadata->strings.add(nameStr, nameStr);
      result->kind = mdTypeStruct;
      result->structOffset = mdName;
      break;
    }

    case CXType_ObjCObjectPointer:
      result->kind = mdTypeObject;
      break;

    case CXType_ObjCSel:
      result->kind = mdTypeSelector;
      break;

    case CXType_Enum:
      result->kind = mdTypeUInt64;
      break;

    case CXType_BlockPointer:
      result->kind = mdTypeBlock;
      break;

    default:
      std::cout << "Unhandled type: " << canonicalType.kind << ", "
                << clang_getCString(
                       clang_getTypeKindSpelling(canonicalType.kind))
                << ", " << clang_getCString(clang_getTypeSpelling(type))
                << std::endl;
      std::exit(1);
      delete result;
      return nullptr;
    }

    return result;
  }

  std::set<std::string> processed_protocols;
  std::set<std::string> processed_imethods;
  std::set<std::string> processed_cmethods;
  std::set<std::string> processed_properties;
  MDProtocol *current_protocol;
};

int main(int argc, char **argv) {
  std::string code = "#import <Foundation/Foundation.h>\n";

  std::string sdk = "/Applications/Xcode.app/Contents/Developer/Platforms/"
                    "MacOSX.platform/Developer/SDKs/MacOSX.sdk";
  std::string frameworksDir = sdk + "/System/Library/Frameworks";

  std::vector<std::string> frameworks = {
      "Foundation",
  };

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
      "-I" + sdk + "/usr/include",
      "-F" + frameworksDir,
  };

  for (auto &framework : frameworks) {
    args.emplace_back("-I" + frameworksDir + "/" + framework +
                      ".framework/Headers");
  }

  std::vector<const char *> argsC(args.size());
  for (size_t i = 0; i < args.size(); ++i) {
    argsC[i] = args[i].c_str();
  }

  auto umbrellaHeader = std::fopen("main.h", "w");
  std::fwrite(code.data(), 1, code.size(), umbrellaHeader);
  std::fclose(umbrellaHeader);

  CXIndex index = clang_createIndex(0, 0);
  CXTranslationUnit unit =
      clang_parseTranslationUnit(index, "main.h", argsC.data(), args.size(),
                                 nullptr, 0, CXTranslationUnit_None);

  CXCursor cursor = clang_getTranslationUnitCursor(unit);

  MDCXState state;
  state.processMetadata(cursor);

  clang_disposeTranslationUnit(unit);
  clang_disposeIndex(index);

  auto metadata = state.metadata;
  auto result = metadata->serialize();

  std::cout << " --- serialization stats ---" << std::endl;
  std::cout << "           total size: " << result.second / 1024. << " KB"
            << std::endl;
  std::cout << "       total sections: " << MD_NUM_SECTIONS << std::endl;
  std::cout << "       num frameworks: " << frameworks.size() << std::endl;
  std::cout << "    strings (n, size): " << metadata->strings.size() << ", "
            << metadata->strings.section_size / 1024. << " KB" << std::endl;
  std::cout << " signatures (n, size): " << metadata->signatures.size() << ", "
            << metadata->signatures.section_size / 1024. << " KB" << std::endl;
  std::cout << "  protocols (n, size): " << metadata->protocols.size() << ", "
            << metadata->protocols.section_size / 1024. << " KB" << std::endl;

  auto file = std::fopen("metadata.nsmd", "w");
  std::fwrite(result.first, 1, result.second, file);
  std::fclose(file);

  return 0;
}
