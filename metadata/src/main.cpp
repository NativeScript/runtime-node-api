#include "Metadata.h"
#include "clang-c/CXDiagnostic.h"
#include <clang-c/Index.h>
#include <cstdio>
#include <cstdlib>
#include <functional>
#include <iostream>
#include <set>
#include <string>
#include <unordered_map>
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

inline bool isSelectorOwned(std::string selectorName) {
  return selectorName.find("copy") == 0 ||
         selectorName.find("mutableCopy") == 0 ||
         selectorName.find("new") == 0 || selectorName.find("alloc") == 0;
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

static inline void rtrim(std::string &s) {
  s.erase(std::find_if(s.rbegin(), s.rend(),
                       [](unsigned char ch) { return !std::isspace(ch); })
              .base(),
          s.end());
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

          case CXCursor_ObjCCategoryDecl: {
            state->processCategory(cursor);
            break;
          }

          default:
            break;
          }

          return CXChildVisit_Continue;
        },
        this);

    for (auto &cls : classes) {
      postProcessClass(cls);
    }

    // Resolve names into respective definition section offsets.

    for (auto &resolvable : class_resolvables) {
      bool found = false;
      for (auto &pair : metadata->classes) {
        if (pair.second->name == *resolvable) {
          found = true;
          *resolvable = pair.first;
          break;
        }
      }
      if (!found) {
        auto name = metadata->strings[*resolvable];
        if (class_cursors.contains(name)) {
          auto cls = processClass(class_cursors[name], true);
          auto offset = postProcessClass(cls);
          *resolvable = offset;
        } else {
          *resolvable = MD_SECTION_OFFSET_NULL;
          std::cout << "Could not resolve class: " << name
                    << ", num: " << *resolvable << std::endl;
        }
      }
    }

    for (auto &resolvable : protocol_resolvables) {
      bool found = false;
      for (auto &pair : metadata->protocols) {
        if (pair.second->name == *resolvable) {
          found = true;
          *resolvable = pair.first;
          break;
        }
      }
      if (!found) {
        auto name = metadata->strings[*resolvable];
        std::cout << "Could not resolve protocol: " << name
                  << ", num: " << *resolvable << std::endl;
        *resolvable = MD_SECTION_OFFSET_NULL;
      }
    }

    for (auto &resolvable : struct_resolvables) {
      bool found = false;
      for (auto &pair : metadata->structs) {
        if (pair.second->name == *resolvable) {
          found = true;
          *resolvable = pair.first;
          break;
        }
      }
      if (!found) {
        // auto name = metadata->strings[*resolvable];
        // std::cout << "Could not resolve struct: " << name
        //           << ", num: " << *resolvable << std::endl;
        *resolvable = MD_SECTION_OFFSET_NULL;
      }
    }

    std::cout << "Processed headers" << std::endl;
  }

private:
  MDSectionOffset postProcessClass(MDClass *cls) {
    if (processed_categories.contains(cls->name)) {
      auto &categories = processed_categories[cls->name];
      for (auto member : categories) {
        cls->members.emplace_back(member);
      }
    }

    return metadata->classes.add(cls, metadata->strings[cls->name]);
  }

  void processProtocol(CXCursor cursor, bool required = false) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw) && nameStr != "NSObject" && !required) {
      return;
    }

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
            auto member = state->processMethod(cursor, false, 0);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            protocol->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCClassMethodDecl: {
            auto member = state->processMethod(cursor, true, 0);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            protocol->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCPropertyDecl: {
            auto member = state->processProperty(cursor, 0);
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

    for (auto &protocol : protocol->protocols) {
      protocol_resolvables.insert(&protocol);
    }

    metadata->protocols.add(protocol, nameStr);

    current_protocol = nullptr;
    processed_cmethods.clear();
    processed_imethods.clear();
    processed_properties.clear();
  }

  MDClass *processClass(CXCursor cursor, bool required = false) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    class_cursors[nameStr] = cursor;

    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw) && nameStr != "NSObject" && !required) {
      return nullptr;
    }

    if (processed_classes.contains(nameStr)) {
      return nullptr;
    } else {
      processed_classes.insert(nameStr);
    }

    MDSectionOffset mdName = metadata->strings.add(nameStr, nameStr);

    MDClass *cls = new MDClass();
    cls->name = mdName;
    cls->superclass = MD_SECTION_OFFSET_NULL;

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
            CXString name = clang_getCursorSpelling(cursor);
            std::string nameStr = clang_getCString(name);
            cls->superclass = metadata->strings.add(nameStr, nameStr);
            clang_disposeString(name);
            break;
          }

          case CXCursor_ObjCInstanceMethodDecl: {
            auto member = state->processMethod(cursor, false, cls->name);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            cls->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCClassMethodDecl: {
            auto member = state->processMethod(cursor, true, cls->name);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            cls->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCPropertyDecl: {
            auto member = state->processProperty(cursor, cls->name);
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

    classes.emplace_back(cls);

    if (cls->superclass != MD_SECTION_OFFSET_NULL) {
      class_resolvables.insert(&cls->superclass);
    }

    current_class = nullptr;
    processed_cmethods.clear();
    processed_imethods.clear();
    processed_properties.clear();

    return cls;
  }

  void processCategory(CXCursor cursor) {
    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw)) {
      return;
    }

    current_category.interface = 0;
    current_category.members = std::vector<MDMember>();

    clang_visitChildren(
        cursor,
        [](CXCursor cursor, CXCursor parent, CXClientData clientData) {
          auto state = (MDCXState *)clientData;
          auto metadata = state->metadata;
          auto cls = &state->current_category;

          CXCursorKind kind = clang_getCursorKind(cursor);

          switch (kind) {
          case CXCursor_ObjCClassRef: {
            CXString name = clang_getCursorSpelling(cursor);
            std::string nameStr = clang_getCString(name);
            cls->interface = metadata->strings.add(nameStr, nameStr);
            clang_disposeString(name);
            break;
          }

          case CXCursor_ObjCInstanceMethodDecl: {
            auto member = state->processMethod(cursor, false, cls->interface);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            cls->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCClassMethodDecl: {
            auto member = state->processMethod(cursor, true, cls->interface);
            if (member.flags == mdMemberFlagNull) {
              break;
            }
            cls->members.emplace_back(member);
            break;
          }

          case CXCursor_ObjCPropertyDecl: {
            auto member = state->processProperty(cursor, cls->interface);
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

    if (current_category.interface == 0) {
      return;
    }

    if (!processed_categories.contains(current_category.interface)) {
      processed_categories[current_category.interface] =
          std::vector<MDMember>();
    }

    auto members = &processed_categories[current_category.interface];
    for (auto member : current_category.members) {
      // std::cout << "  - " << member.name << std::endl;
      members->emplace_back(member);
    }

    processed_cmethods.clear();
    processed_imethods.clear();
    processed_properties.clear();
  }

  MDSectionOffset processStruct(CXCursor cursor, bool required = false) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string nameStr = clang_getCString(name);
    clang_disposeString(name);

    struct_cursors[nameStr] = cursor;

    auto fw = getFrameworkName(cursor);
    if (!frameworks.contains(fw)) {
      return 0;
    }

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
      return 0;
    }

    return metadata->structs.add(structure, nameStr);
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
    std::string funcName = clang_getCString(name);
    clang_disposeString(name);

    // std::cout << "function: " << protocolName << std::endl;

    MDFunction *function = new MDFunction();

    function->name = metadata->strings.add(funcName, funcName);

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

    metadata->functions.add(function, funcName);
  }

  MDSectionOffset processProtocolRef(CXCursor cursor) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string protocolName = clang_getCString(name);
    clang_disposeString(name);
    MDSectionOffset mdName = metadata->strings.add(protocolName, protocolName);
    return mdName;
  }

  MDMember processMethod(CXCursor cursor, bool isClassMethod,
                         MDSectionOffset classNameOffset) {
    std::set<std::string> &processed_methods =
        isClassMethod ? processed_cmethods : processed_imethods;

    CXString name = clang_getCursorSpelling(cursor);
    std::string selector = clang_getCString(name);
    clang_disposeString(name);

    if (processed_methods.contains(selector)) {
      MDMember member;
      member.flags = mdMemberFlagNull;
      return member;
    } else {
      processed_methods.insert(selector);
    }

    MDSectionOffset mdSelector = metadata->strings.add(selector, selector);
    // std::cout << "  " << selector << std::endl;

    MDMember member;
    member.name = 0;
    member.flags = mdMemberMethod;
    if (isClassMethod) {
      member.flags = (MDMemberFlag)(member.flags | mdMemberStatic);
    }
    if (isSelectorOwned(selector)) {
      member.flags = (MDMemberFlag)(member.flags | mdMemberReturnOwned);
    }
    member.methodSelector = mdSelector;

    auto signature = new MDSignature();

    auto resultType = clang_getCursorResultType(cursor);
    signature->returnType = processType(resultType, classNameOffset);

    auto argc = clang_Cursor_getNumArguments(cursor);

    for (int i = 0; i < argc; i++) {
      auto argType = clang_getCursorType(clang_Cursor_getArgument(cursor, i));
      signature->arguments.emplace_back(processType(argType, classNameOffset));
    }

    MDSignatureSerde serde;
    auto encoding = serde.encode(signature);
    std::string className = metadata->strings[classNameOffset];
    member.signature = metadata->signatures.add(signature, encoding);
    return member;
  }

  MDMember processProperty(CXCursor cursor, MDSectionOffset classNameOffset) {
    CXString name = clang_getCursorSpelling(cursor);
    std::string selector = clang_getCString(name);
    clang_disposeString(name);

    if (processed_properties.contains(selector)) {
      MDMember member;
      member.flags = mdMemberFlagNull;
      return member;
    } else {
      processed_properties.insert(selector);
    }

    MDSectionOffset mdName = metadata->strings.add(selector, selector);

    MDMember member;
    member.flags = mdMemberProperty;

    member.name = mdName;

    auto attrs = clang_Cursor_getObjCPropertyAttributes(cursor, 0);
    if (attrs & CXObjCPropertyAttr_readonly) {
      member.flags = (MDMemberFlag)(member.flags | mdMemberReadonly);
    }

    if (attrs & CXObjCPropertyAttr_class) {
      member.flags = (MDMemberFlag)(member.flags | mdMemberStatic);
    }

    MDSectionOffset getterSelector = 0, setterSelector = 0;

    auto getterName = clang_Cursor_getObjCPropertyGetterName(cursor);
    auto getterNameStr = clang_getCString(getterName);
    if (getterNameStr != nullptr) {
      getterSelector = metadata->strings.add(getterNameStr, getterNameStr);
    }

    auto setterName = clang_Cursor_getObjCPropertySetterName(cursor);
    auto setterNameStr = clang_getCString(setterName);
    if (setterNameStr != nullptr) {
      setterSelector = metadata->strings.add(setterNameStr, setterNameStr);
    }

    member.getterSelector = getterSelector;
    member.setterSelector = setterSelector;

    auto type = processType(clang_getCursorType(cursor), classNameOffset);

    auto getter = new MDSignature();
    getter->returnType = type;
    MDSignatureSerde serde;
    member.getterSignature =
        metadata->signatures.add(getter, serde.encode(getter));

    if (setterSelector != 0) {
      auto setter = new MDSignature();
      setter->returnType = new MDTypeInfo();
      setter->returnType->kind = mdTypeVoid;
      setter->arguments.emplace_back(type);
      member.setterSignature =
          metadata->signatures.add(setter, serde.encode(setter));
    }

    return member;
  }

  MDTypeInfo *processType(CXType type, MDSectionOffset classNameOffset = 0) {
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
      // Check if its a string
      auto pointeeType = clang_getPointeeType(canonicalType);
      auto name = clang_getTypeSpelling(pointeeType);
      std::string nameStr = clang_getCString(name);
      clang_disposeString(name);
      if (pointeeType.kind == CXType_Char_S) {
        result->kind = mdTypeString;
        break;
      } else if (pointeeType.kind == CXType_ObjCSel) {
        result->kind = mdTypeSelector;
        break;
      }
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
      struct_resolvables.insert(&result->structOffset);
      break;
    }

    case CXType_ObjCObjectPointer: {
      CXString nameStr = clang_getTypeSpelling(type);
      std::string name = clang_getCString(nameStr);
      clang_disposeString(nameStr);

      CXString canonicalNameStr = clang_getTypeSpelling(canonicalType);
      std::string canonicalName = clang_getCString(canonicalNameStr);
      clang_disposeString(canonicalNameStr);

      if (canonicalName.find("const ") == 0) {
        canonicalName = canonicalName.substr(6);
      }

      if (canonicalName.find("__kindof ") == 0) {
        canonicalName = canonicalName.substr(9);
      }

      if (canonicalName == "id" || canonicalName == "Class") {
        if (name == "instancetype") {
          result->kind = mdTypeInstanceObject;
          break;
        }
        // Just ID, we gotta look up the class name at runtime.
        result->kind = mdTypeAnyObject;
      } else if (canonicalName == "Protocol *") {
        result->kind = mdTypePointer;
      } else if (canonicalName.find("id<") == 0 ||
                 canonicalName.find("Class<") == 0) {
        // Just ID but this time we have protocols specified, which we can add
        // onto the object prototype.
        auto size = canonicalName.size();
        auto commaOffset = canonicalName.find(",");
        auto endOffset = canonicalName.find(">");
        auto skip = canonicalName.find("id<") == 0 ? 3 : 6;
        if (commaOffset < endOffset) {
          endOffset = commaOffset;
        }
        auto protocols = canonicalName.substr(skip, endOffset - skip);
        result->kind = mdTypeProtocolObject;
        result->protocolOffsets.emplace_back(
            metadata->strings.add(protocols, protocols));
        protocol_resolvables.insert(&result->protocolOffsets.back());
      } else if (canonicalName.find("<") < canonicalName.size()) {
        // We have protocols specified, but we also have a class name.
        auto cls = canonicalName.substr(0, canonicalName.find("<"));
        rtrim(cls);
        result->kind = mdTypeClassObject;
        result->classOffset = metadata->strings.add(cls, cls);
        class_resolvables.insert(&result->classOffset);
      } else {
        // We have a class name.
        auto cls = canonicalName.substr(0, canonicalName.find("*"));
        rtrim(cls);
        result->kind = mdTypeClassObject;
        result->classOffset = metadata->strings.add(cls, cls);
        class_resolvables.insert(&result->classOffset);
      }

      break;
    }

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

  std::unordered_map<std::string, CXCursor> class_cursors;
  std::unordered_map<std::string, CXCursor> protocol_cursors;
  std::unordered_map<std::string, CXCursor> struct_cursors;

  std::unordered_map<MDSectionOffset, std::vector<MDMember>>
      processed_categories;
  std::set<std::string> processed_protocols;
  std::set<std::string> processed_enums;
  std::set<std::string> processed_consts;
  std::set<std::string> processed_imethods;
  std::set<std::string> processed_cmethods;
  std::set<std::string> processed_properties;
  std::set<std::string> processed_classes;

  std::vector<MDClass *> classes;

  std::set<MDSectionOffset *> class_resolvables;
  std::set<MDSectionOffset *> protocol_resolvables;
  std::set<MDSectionOffset *> struct_resolvables;

  MDProtocol *current_protocol;
  MDEnum *current_enum;
  MDClass *current_class;
  std::vector<std::string> current_enum_names;
  std::vector<int64_t> current_enum_values;
  MDStruct *current_struct;
  struct {
    MDSectionOffset interface;
    std::vector<MDMember> members;
  } current_category;
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
    CXString string = clang_formatDiagnostic(
        diagnostic,
        CXDiagnostic_DisplayCategoryId | CXDiagnostic_DisplaySourceLocation |
            CXDiagnostic_DisplayColumn | CXDiagnostic_DisplaySourceRanges |
            CXDiagnostic_DisplayOption);
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
