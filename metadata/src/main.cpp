#include "Metadata.h"
#include "clang-c/CXDiagnostic.h"
#include <clang-c/Index.h>
#include <cstdio>
#include <cstdlib>
#include <functional>
#include <iostream>
#include <set>
#include <string>
#include <vector>

std::vector<std::string> splitCamelCase(std::string value) {
  std::vector<std::string> result;

  std::string current = "";
  for (auto c : value) {
    if (isupper(c)) {
      if (current != "") {
        result.emplace_back(current);
      }
      current = "";
    }
    current += c;
  }

  if (current != "") {
    result.emplace_back(current);
  }

  return result;
}

// Transforms verbose enum member names into shorter ones, as we fit them inside
// a JS object instead of making top level object.
// so enum like: NSBackgroundActivityResult
// - NSBackgroundActivityResultFinished
// - NSBackgroundActivityResultDeferred
// becomes:
// NSBackgroundActivityResult
// - finished
// - deferred
// Basically, split the name into parts (assuming camel case), and then remove
// the repeating parts from the beginning and end of the name.
std::vector<std::string>
transformEnumMemberNames(std::string _enum_name,
                         std::vector<std::string> member) {
  std::vector<std::string> result;
  std::vector<std::vector<std::string>> parts;
  size_t skip_begin = 0, skip_end = 0;
  std::vector<std::string> largestPart;

  for (auto part : member) {
    auto split = splitCamelCase(part);
    parts.emplace_back(split);
    if (split.size() > largestPart.size()) {
      largestPart = split;
    }
  }

  skip_begin = skip_end = largestPart.size();

  for (int i = 0; i < parts.size(); i++) {
    auto part = parts[i];
    size_t skip = 0;

    for (int j = 0; j < part.size(); j++) {
      if (j >= largestPart.size()) {
        break;
      }

      if (part[j] == largestPart[j]) {
        skip++;
      } else {
        break;
      }
    }

    if (skip < skip_begin) {
      skip_begin = skip;
    }

    skip = 0;

    for (int j = part.size() - 1; j >= 0; j--) {
      if (j >= largestPart.size()) {
        break;
      }

      if (part[j] == largestPart[largestPart.size() - 1 - skip]) {
        skip++;
      } else {
        break;
      }
    }

    if (skip < skip_end) {
      skip_end = skip;
    }
  }

  for (int i = 0; i < member.size(); i++) {
    auto part = parts[i];
    std::string name = "";

    bool allUpper = true;

    for (int j = skip_begin; j < part.size() - skip_end; j++) {
      for (auto c : part[j]) {
        if (!isupper(c)) {
          allUpper = false;
          break;
        }
      }
    }

    bool oneCharUpperTillNow = true;

    for (int j = skip_begin; j < part.size() - skip_end; j++) {
      bool oneCharUpper = part[j].size() == 1 && isupper(part[j][0]);
      if (j == skip_begin || allUpper ||
          (oneCharUpperTillNow && oneCharUpper)) {
        for (auto c : part[j]) {
          name += tolower(c);
        }
        oneCharUpperTillNow = oneCharUpper;
      } else {
        name += part[j];
      }
    }

    if (name == "") {
      name = member[i];
    }

    result.emplace_back(name);
  }

  return result;
}

inline std::string getFrameworkName(CXCursor cursor) {
  CXSourceLocation srcloc = clang_getCursorLocation(cursor);
  CXFile file;
  clang_getFileLocation(srcloc, &file, nullptr, nullptr, nullptr);
  CXString fileName = clang_getFileName(file);
  std::string fileNameStr = clang_getCString(fileName);
  clang_disposeString(fileName);
  auto pos = fileNameStr.find(".framework/");
  if (pos == std::string::npos) {
    return "";
  }
  std::string frameworkName = fileNameStr.substr(0, pos);
  frameworkName = frameworkName.substr(frameworkName.find_last_of("/") + 1);
  return frameworkName;
}

class MDCXState {
public:
  MDMetadataWriter *metadata;
  std::set<std::string> frameworks;

  MDCXState() : metadata(new MDMetadataWriter()) {}

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

          case CXCursor_ObjCInterfaceDecl: {
            state->processClass(cursor);
            break;
          }

          case CXCursor_StructDecl: {
            state->processStruct(cursor);
            break;
          }

          case CXCursor_EnumDecl: {
            state->processEnum(cursor);
            break;
          }

          case CXCursor_VarDecl: {
            state->processVar(cursor);
            break;
          }

          case CXCursor_FunctionDecl: {
            state->processFunction(cursor);
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
    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw)) {
      return;
    }

    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    // std::cout << "protocol: " << nameStr << std::endl;

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

  bool isClassMethodRequired(CXCursor cursor) {
    bool required = false;
    for (int i = 0; i < clang_Cursor_getNumArguments(cursor); i++) {
      auto arg = clang_Cursor_getArgument(cursor, i);
      auto type = clang_getCursorType(arg);
      auto canonicalType = clang_getCanonicalType(type);
      auto kind = canonicalType.kind;
      if (kind == CXType_BlockPointer) {
        required = true;
        break;
      }
    }
    return required;
  }

  void processClass(CXCursor cursor) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw) && nameStr != "NSObject") {
      return;
    }

    // std::cout << "class: " << nameStr << std::endl;

    if (processed_protocols.contains(nameStr)) {
      return;
    } else {
      processed_protocols.insert(nameStr);
    }

    MDSectionOffset mdName = metadata->strings.add(nameStr, nameStr);

    MDClass *cls = new MDClass();
    cls->name = mdName;
    cls->superclass = 0;

    current_class = cls;

    clang_visitChildren(
        cursor,
        [](CXCursor cursor, CXCursor parent, CXClientData clientData) {
          auto state = (MDCXState *)clientData;
          auto metadata = state->metadata;
          auto cls = state->current_class;

          CXCursorKind kind = clang_getCursorKind(cursor);

          switch (kind) {
          case CXCursor_ObjCSuperClassRef: {
            cls->superclass = 0;
            break;
          }

          case CXCursor_ObjCInstanceMethodDecl: {
            if (!state->isClassMethodRequired(cursor)) {
              break;
            }
            auto member = state->processMethod(cursor, false);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            cls->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCClassMethodDecl: {
            if (!state->isClassMethodRequired(cursor)) {
              break;
            }
            auto member = state->processMethod(cursor, true);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            cls->members.emplace_back(member);
            break;
          }

          default:
            break;
          }

          return CXChildVisit_Continue;
        },
        this);

    metadata->classes.add(cls, nameStr);

    current_class = nullptr;
    processed_cmethods.clear();
    processed_imethods.clear();
    processed_properties.clear();
  }

  void processStruct(CXCursor cursor) {
    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw)) {
      return;
    }

    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    // std::cout << "struct: " << nameStr << std::endl;

    MDStruct *structure = new MDStruct();
    structure->name = metadata->strings.add(nameStr, nameStr);
    structure->size = clang_Type_getSizeOf(clang_getCursorType(cursor));

    current_struct = structure;

    clang_visitChildren(
        cursor,
        [](CXCursor cursor, CXCursor parent, CXClientData clientData) {
          auto state = (MDCXState *)clientData;
          auto metadata = state->metadata;
          auto structure = state->current_struct;

          CXCursorKind kind = clang_getCursorKind(cursor);

          switch (kind) {
          case CXCursor_FieldDecl: {
            MDStructField field;
            std::string nameStr =
                clang_getCString(clang_getCursorSpelling(cursor));
            field.name = metadata->strings.add(nameStr, nameStr);
            field.offset = clang_Cursor_getOffsetOfField(cursor) / 8;
            field.type = state->processType(clang_getCursorType(cursor));
            structure->fields.emplace_back(field);
            break;
          }

          default:
            break;
          }

          return CXChildVisit_Continue;
        },
        this);

    if (structure->fields.size() == 0) {
      delete structure;
      return;
    }

    metadata->structs.add(structure, nameStr);
  }

  void processEnum(CXCursor cursor) {
    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw)) {
      return;
    }

    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    MDEnum *enumeration = new MDEnum();
    enumeration->name = metadata->strings.add(nameStr, nameStr);

    current_enum = enumeration;
    current_enum_names.clear();
    current_enum_values.clear();

    clang_visitChildren(
        cursor,
        [](CXCursor cursor, CXCursor parent, CXClientData clientData) {
          auto state = (MDCXState *)clientData;
          auto metadata = state->metadata;

          CXCursorKind kind = clang_getCursorKind(cursor);

          switch (kind) {
          case CXCursor_EnumConstantDecl: {
            CXString name = clang_getCursorSpelling(cursor);
            std::string nameStr = clang_getCString(name);
            clang_disposeString(name);

            state->current_enum_names.emplace_back(nameStr);

            auto value = clang_getEnumConstantDeclValue(cursor);
            state->current_enum_values.emplace_back(value);
            break;
          }

          default:
            break;
          }

          return CXChildVisit_Continue;
        },
        this);

    if (current_enum_names.empty()) {
      delete enumeration;
      return;
    }

    if (nameStr == "") {
      for (auto name : current_enum_names) {
        MDVariable *constant = new MDVariable();
        constant->name = metadata->strings.add(name, name);
        constant->value = malloc(sizeof(int64_t));
        *(int64_t *)constant->value = current_enum_values[0];
        constant->type = new MDTypeInfo();
        constant->type->kind = mdTypeSInt64;
        metadata->constants.add(constant, name);
      }

      current_enum = nullptr;

      return;
    }

    // std::cout << "enum: " << nameStr << std::endl;

    current_enum_names = transformEnumMemberNames(nameStr, current_enum_names);

    for (int i = 0; i < current_enum_names.size(); i++) {
      auto name = current_enum_names[i];
      // std::cout << "  - " << name << std::endl;
      auto value = current_enum_values[i];

      MDSectionOffset mdName = metadata->strings.add(name, name);

      MDEnumMember constant;
      constant.name = mdName;
      constant.value = value;

      enumeration->members.emplace_back(constant);
    }

    metadata->enums.add(enumeration, nameStr);

    current_enum = nullptr;
  }

  void processVar(CXCursor cursor) {
    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw)) {
      return;
    }

    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    CXType type = clang_getCursorType(cursor);

    // std::cout << "var: " << nameStr << std::endl;

    MDVariable *variable = new MDVariable();
    variable->name = metadata->strings.add(nameStr, nameStr);
    variable->type = processType(type);

    CXCursor init = clang_Cursor_getVarDeclInitializer(cursor);
    if (init.kind == 0) {
      variable->evalKind = mdEvalNone;
      variable->value = nullptr;
    } else {
      CXEvalResult result = clang_Cursor_Evaluate(cursor);
      CXEvalResultKind kind = clang_EvalResult_getKind(result);

      switch (kind) {
      case CXEval_Int: {
        auto value = clang_EvalResult_getAsInt(result);
        variable->evalKind = mdEvalInt64;
        variable->value = malloc(sizeof(int64_t));
        *(int64_t *)variable->value = value;
        break;
      }

      case CXEval_Float: {
        auto value = clang_EvalResult_getAsDouble(result);
        variable->evalKind = mdEvalDouble;
        variable->value = malloc(sizeof(double));
        *(double *)variable->value = value;
        break;
      }

      case CXEval_StrLiteral:
      case CXEval_ObjCStrLiteral:
      case CXEval_CFStr: {
        auto value = clang_EvalResult_getAsStr(result);
        variable->evalKind = mdEvalString;
        variable->value = malloc(sizeof(MDSectionOffset));
        *(MDSectionOffset *)variable->value =
            metadata->strings.add(value, value);
        break;
      }

      default:
        variable->evalKind = mdEvalNone;
        variable->value = nullptr;
        break;
      }

      clang_EvalResult_dispose(result);
    }

    metadata->constants.add(variable, nameStr);
  }

  void processFunction(CXCursor cursor) {
    // Skip if its inlined / defined in header, won't be available at
    // runtime.
    if (clang_Cursor_isFunctionInlined(cursor)) {
      return;
    }

    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw)) {
      return;
    }

    CXString name = clang_getCursorSpelling(cursor);
    std::string protocolName = clang_getCString(name);
    clang_disposeString(name);

    // std::cout << "function: " << protocolName << std::endl;

    MDFunction *function = new MDFunction();

    function->name = metadata->strings.add(protocolName, protocolName);

    auto signature = new MDSignature();

    auto resultType = clang_getCursorResultType(cursor);
    signature->returnType = processType(resultType);

    auto argc = clang_Cursor_getNumArguments(cursor);

    for (int i = 0; i < argc; i++) {
      auto argType = clang_getCursorType(clang_Cursor_getArgument(cursor, i));
      signature->arguments.emplace_back(processType(argType));
    }

    MDSignatureSerde serde;
    function->signature =
        metadata->signatures.add(signature, serde.encode(signature));

    metadata->functions.add(function, protocolName);
  }

  MDSectionOffset processProtocolRef(CXCursor cursor) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string protocolName = clang_getCString(name);
    clang_disposeString(name);
    MDSectionOffset mdName = metadata->strings.add(protocolName, protocolName);
    return mdName;
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
    // std::cout << "  " << selector << std::endl;

    MDMember member;
    member.flags = mdMemberMethod;
    if (isClassMethod) {
      member.flags = (MDMemberFlag)(member.flags | mdMemberStatic);
    }
    member.methodSelector = mdSelector;

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
      result->kind = mdTypePointer;
      break;
    }

    case CXType_Record: {
      CXString name = clang_getTypeSpelling(canonicalType);
      std::string nameStr = clang_getCString(name);
      clang_disposeString(name);
      nameStr = nameStr.substr(nameStr[0] == 'u'   ? 6
                               : nameStr[0] == 's' ? 7
                                                   : 0);
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

    case CXType_BlockPointer: {
      result->kind = mdTypeBlock;
      MDSignatureSerde serde;
      MDSignature *signature = new MDSignature();
      auto pointeeType = clang_getPointeeType(canonicalType);
      auto resultType = clang_getResultType(pointeeType);
      signature->returnType = processType(resultType);
      auto argc = clang_getNumArgTypes(pointeeType);
      for (int i = 0; i < argc; i++) {
        auto argType = clang_getArgType(pointeeType, i);
        signature->arguments.emplace_back(processType(argType));
      }
      result->blockSignature =
          metadata->signatures.add(signature, serde.encode(signature));
      break;
    }

    case CXType_LongDouble: {
      result->kind = mdTypeLongDouble;
      break;
    }

    case CXType_ConstantArray: {
      result->kind = mdTypeArray;
      auto elementType = clang_getArrayElementType(canonicalType);
      result->elementType = processType(elementType);
      auto size = clang_getArraySize(canonicalType);
      result->arraySize = size;
      break;
    }

    case CXType_IncompleteArray: {
      result->kind = mdTypePointer;
      break;
    }

    case CXType_Char_S: {
      result->kind = mdTypeChar;
      break;
    }

    case CXType_UInt128: {
      result->kind = mdTypeUInt128;
      break;
    }

    case CXType_Vector: {
      result->kind = mdTypeVector;
      break;
    }

    case CXType_ExtVector: {
      result->kind = mdTypeVector;
      break;
    }

    case CXType_Complex: {
      result->kind = mdTypeComplex;
      break;
    }

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
  std::set<std::string> processed_enums;
  std::set<std::string> processed_consts;
  std::set<std::string> processed_imethods;
  std::set<std::string> processed_cmethods;
  std::set<std::string> processed_properties;
  std::set<std::string> processed_classes;

  MDProtocol *current_protocol;
  MDEnum *current_enum;
  MDClass *current_class;
  std::vector<std::string> current_enum_names;
  std::vector<int64_t> current_enum_values;
  MDStruct *current_struct;
};

#define UMBRELLA_HEADER "umbrella.h"

int main(int argc, char **argv) {
  char *outputFile = argv[1];
  std::string sdk = argv[2];
  std::string frameworksDir = sdk + "/System/Library/Frameworks";

  std::set<std::string> frameworks;

  for (int i = 3; i < argc; i++) {
    frameworks.insert(argv[i]);
  }

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
      "-Wno-deprecated-declarations",
      "-Wno-objc-property-no-attribute",
      "-std=gnu11",
      "-I" + sdk + "/usr/include",
      "-F" + frameworksDir,
  };

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
    CXString string = clang_formatDiagnostic(diagnostic, 0);
    std::cout << clang_getCString(string) << std::endl;
    clang_disposeString(string);
  }

  CXCursor cursor = clang_getTranslationUnitCursor(unit);

  MDCXState state;
  state.frameworks = frameworks;
  state.processMetadata(cursor);

  clang_disposeTranslationUnit(unit);
  clang_disposeIndex(index);

  auto metadata = state.metadata;
  auto result = metadata->serialize();

  std::cout << " --- serialization stats ---" << std::endl;
  std::cout << "           total size: " << result.second / 1024. / 1024.
            << " MB" << std::endl;
  std::cout << "       total sections: " << MD_NUM_SECTIONS << std::endl;
  std::cout << "       num frameworks: " << frameworks.size() << std::endl;
  std::cout << "    strings (n, size): " << metadata->strings.size() << ", "
            << metadata->strings.section_size / 1024. << " KB" << std::endl;
  std::cout << "     consts (n, size): " << metadata->constants.size() << ", "
            << metadata->constants.section_size / 1024. << " KB" << std::endl;
  std::cout << "      enums (n, size): " << metadata->enums.size() << ", "
            << metadata->enums.section_size / 1024. << " KB" << std::endl;
  std::cout << " signatures (n, size): " << metadata->signatures.size() << ", "
            << metadata->signatures.section_size / 1024. << " KB" << std::endl;
  std::cout << "  functions (n, size): " << metadata->functions.size() << ", "
            << metadata->functions.section_size / 1024. << " KB" << std::endl;
  std::cout << "  protocols (n, size): " << metadata->protocols.size() << ", "
            << metadata->protocols.section_size / 1024. << " KB" << std::endl;
  std::cout << "    structs (n, size): " << metadata->structs.size() << ", "
            << metadata->structs.section_size / 1024. << " KB" << std::endl;
  std::cout << "    classes (n, size): " << metadata->classes.size() << ", "
            << metadata->classes.section_size / 1024. << " KB" << std::endl;

  auto file = std::fopen(outputFile, "w");
  std::fwrite(result.first, 1, result.second, file);
  std::fclose(file);

  return 0;
}
