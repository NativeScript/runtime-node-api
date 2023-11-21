#include "IR.h"
#include "MetadataWriter.h"
#include <string>
#include <unordered_map>
#include <unordered_set>

namespace metagen {

inline void print(std::string str) { std::cout << str << std::endl; }

void MetadataFactory::process(CXCursor cursor, bool checkAvailability) {
  bool _previous_checkAvailability = _checkAvailability;
  _checkAvailability = checkAvailability;

  clang_visitChildren(
      cursor,
      [](CXCursor cursor, CXCursor, CXClientData clientData) {
        auto state = (MetadataFactory *)clientData;

        if (state->_checkAvailability && !isAvailable(cursor))
          return CXChildVisit_Continue;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_VarDecl: {
          state->processVariable(cursor);
          break;
        }

        case CXCursor_EnumDecl: {
          state->processEnum(cursor);
          break;
        }

        case CXCursor_StructDecl: {
          state->processStruct(cursor);
          break;
        }

        case CXCursor_UnionDecl: {
          state->processUnion(cursor);
          break;
        }

        case CXCursor_FunctionDecl: {
          state->processFunction(cursor);
          break;
        }

        case CXCursor_ObjCInterfaceDecl: {
          state->processClass(cursor);
          break;
        }

        case CXCursor_ObjCProtocolDecl: {
          state->processProtocol(cursor);
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

  _checkAvailability = _previous_checkAvailability;
}

void MetadataFactory::implementClassProtocols(
    ClassDecl &decl, std::vector<std::string> &protocols) {
  for (std::string &name : protocols) {
    if (!decl.implementedProtocolNames.contains(name)) {
      decl.implementedProtocolNames.emplace(name);

      if (this->protocols.contains(name)) {
        ProtocolDecl &protocol = this->protocols[name];
        decl.protocolRefs.emplace_back(&protocol);
        protocol.implementerRefs.emplace_back(&decl);
        for (MemberDecl &member : protocol.members) {
          decl.members.emplace_back(member);
        }
        implementClassProtocols(decl, protocol.protocolNames);
      }
    }
  }
}

void MetadataFactory::resolveRefs() {
  while (!referencedClasses.empty() || !referencedEnums.empty() ||
         !referencedProtocols.empty() || !referencedRecords.empty()) {
    processClassRefs();
    processProtocolRefs();
    processEnumRefs();
    processRecordRefs();
  }
}

void MetadataFactory::postProcess() {
  for (auto &kv : structs) {
    StructDecl &decl = kv.second;
    postProcessStruct(decl);
  }

  for (auto &kv : unions) {
    UnionDecl &decl = kv.second;
    postProcessUnion(decl);
  }

  for (FunctionDecl &decl : functions) {
    postProcessFunction(decl);
  }

  for (auto &kv : classes) {
    ClassDecl &decl = kv.second;
    postProcessClass(decl);
  }

  for (auto &kv : protocols) {
    ProtocolDecl &decl = kv.second;
    postProcessProtocol(decl);
  }

  // Processes the references to classes, protocols, enums and records
  // - resolving any indirect dependencies on other classes, etc.
  resolveRefs();

  // Push category members to their respective classes.

  for (CategoryDecl &category : categories) {
    if (classes.contains(category.className)) {
      ClassDecl &cls = classes[category.className];
      category.processMembers(&cls.typeParameters);
      postProcessCategory(category);
      for (MemberDecl &member : category.members) {
        cls.members.emplace_back(member);
      }
    }
  }

  resolveRefs();

  // Rename protocols whose names conflict with classes.

  for (auto &kv : protocols) {
    ProtocolDecl &protocol = kv.second;
    if (classes.contains(protocol.name)) {
      renamedProtocols.emplace(protocol.name);
      protocol.name = protocol.name + "Protocol";
    }
  }

  for (const std::string &name : renamedProtocols) {
    protocols[name + "Protocol"] = protocols[name];
    protocols.erase(name);
  }

  for (auto &kv : protocols) {
    ProtocolDecl &protocol = kv.second;
    std::vector<std::string> protocolNames = protocol.protocolNames;
    protocol.protocolNames.clear();
    for (const std::string &name : protocolNames) {
      if (renamedProtocols.contains(name)) {
        protocol.protocolNames.emplace_back(name + "Protocol");
      } else {
        protocol.protocolNames.emplace_back(name);
      }
    }
  }

  for (auto &kv : classes) {
    ClassDecl &cls = kv.second;
    std::vector<std::string> protocolNames = cls.protocolNames;
    cls.protocolNames.clear();
    for (const std::string &name : protocolNames) {
      if (renamedProtocols.contains(name)) {
        cls.protocolNames.emplace_back(name + "Protocol");
      } else {
        cls.protocolNames.emplace_back(name);
      }
    }
  }

  // Resolve references inside ClassDecls and ProtocolDecls.

  for (auto &kv : protocols) {
    ProtocolDecl &protocol = kv.second;
    for (std::string &name : protocol.protocolNames) {
      if (protocols.contains(name)) {
        ProtocolDecl &ref = protocols[name];
        protocol.protocolRefs.emplace_back(&ref);
        ref.derivedProtocolRefs.emplace_back(&protocol);
      }
    }
  }

  for (auto &kv : classes) {
    ClassDecl &cls = kv.second;

    if (classes.contains(cls.superClassName)) {
      ClassDecl &ref = classes[cls.superClassName];
      cls.superClassRef = &ref;
      ref.derivedClassRefs.emplace_back(&cls);
    }

    implementClassProtocols(cls, cls.protocolNames);
  }

  // Remove duplicate methods.

  for (auto &kv : classes) {
    ClassDecl &cls = kv.second;
    removeDuplicateMethods(cls.members);
    cls.postProcessMembers();
  }

  for (auto &kv : protocols) {
    ProtocolDecl &protocol = kv.second;
    removeDuplicateMethods(protocol.members);
    protocol.postProcessMembers();
  }

  // We need to do a second pass to propagate the changes further
  // in derived/implemented classes/protocols.
  // There should be a better way around this.

  for (auto &kv : classes) {
    ClassDecl &cls = kv.second;
    cls.postProcessMembers();
  }

  for (auto &kv : protocols) {
    ProtocolDecl &protocol = kv.second;
    protocol.postProcessMembers();
  }
}

bool MetadataFactory::shouldProcess(CXCursor cursor, bool required) {
  if (required) {
    return true;
  }

  if (!isAvailable(cursor)) {
    return false;
  }

  CXSourceLocation srcloc = clang_getCursorLocation(cursor);
  CXFile file;
  clang_getFileLocation(srcloc, &file, nullptr, nullptr, nullptr);
  CXString fileName = clang_getFileName(file);
  std::string fileNameStr = clang_getCString(fileName);
  clang_disposeString(fileName);

  for (const std::string &path : includePaths) {
    if (fileNameStr.find(path) != std::string::npos) {
      return true;
    }
  }

  return false;
}

void MetadataFactory::processVariable(CXCursor cursor) {
  if (!shouldProcess(cursor))
    return;

  VariableDecl decl(cursor);
  variables.emplace(decl.name, decl);
  processType(variables[decl.name].type);
}

void MetadataFactory::processEnum(CXCursor cursor, bool required) {
  EnumDecl decl(cursor);

  if (decl.constants.empty()) {
    return;
  }

  if (!shouldProcess(cursor, required)) {
    if (skippedEnums.contains(decl.name)) {
      EnumDecl &prev = skippedEnums[decl.name];
      if (prev.constants.size() < decl.constants.size()) {
        skippedEnums[decl.name] = decl;
      }
    } else {
      skippedEnums[decl.name] = decl;
    }
    return;
  }

  // If the enum is unnamed, we'll just push the constants as global
  // constants.
  if (decl.name == "") {
    for (auto &constant : decl.constants) {
      VariableDecl var(decl.framework, constant);
      variables[var.name] = var;
    }

    return;
  }

  if (enums.contains(decl.name)) {
    EnumDecl &prev = enums[decl.name];
    if (prev.constants.size() < decl.constants.size()) {
      prev.constants = decl.constants;
    }
    return;
  }

  enums.emplace(decl.name, decl);
}

void MetadataFactory::processStruct(CXCursor cursor, bool required) {
  StructDecl decl(cursor);

  if (!shouldProcess(cursor, required)) {
    if (skippedStructs.contains(decl.name)) {
      StructDecl &prev = skippedStructs[decl.name];
      if (prev.fields.size() < decl.fields.size()) {
        skippedStructs[decl.name] = decl;
      }
    } else {
      skippedStructs[decl.name] = decl;
    }
    return;
  }

  if (structs.contains(decl.name)) {
    StructDecl &prev = structs[decl.name];
    if (prev.fields.size() < decl.fields.size()) {
      prev.fields = decl.fields;
    }
    process(cursor, true);
    return;
  }

  structs.emplace(decl.name, decl);
  process(cursor, true);
}

void MetadataFactory::postProcessStruct(StructDecl &decl) {
  for (StructFieldDecl &decl : decl.fields) {
    processType(decl.type);
  }
}

void MetadataFactory::processUnion(CXCursor cursor, bool required) {
  UnionDecl decl(cursor);

  if (decl.fields.empty()) {
    return;
  }

  if (!shouldProcess(cursor, required)) {
    if (skippedUnions.contains(decl.name)) {
      UnionDecl &prev = skippedUnions[decl.name];
      if (prev.fields.size() < decl.fields.size()) {
        skippedUnions[decl.name] = decl;
      }
    } else {
      skippedUnions[decl.name] = decl;
    }
    return;
  }

  if (unions.contains(decl.name)) {
    UnionDecl &prev = unions[decl.name];
    if (prev.fields.size() < decl.fields.size()) {
      prev.fields = decl.fields;
    }
    process(cursor, true);
    return;
  }

  unions.emplace(decl.name, decl);
  process(cursor, true);
}

void MetadataFactory::postProcessUnion(UnionDecl &decl) {
  for (UnionFieldDecl &decl : decl.fields) {
    processType(decl.type);
  }
}

void MetadataFactory::processFunction(CXCursor cursor) {
  // Skip if its inlined / defined in header, won't be available at
  // runtime.
  if (clang_Cursor_isFunctionInlined(cursor)) {
    return;
  }

  if (!shouldProcess(cursor))
    return;

  FunctionDecl decl(cursor);
  functions.emplace_back(decl);
}

void MetadataFactory::postProcessFunction(FunctionDecl &decl) {
  for (ParameterDecl &parameter : decl.parameters) {
    processType(parameter.type);
  }

  processType(decl.returnType);
}

void MetadataFactory::processClass(CXCursor cursor, bool required) {
  if (!isAvailable(cursor)) {
    return;
  }

  ClassDecl decl(cursor);

  if (!shouldProcess(cursor, required)) {
    skippedClasses[decl.name] = decl;
    return;
  }

  classes.emplace(decl.name, decl);
}

void MetadataFactory::postProcessMember(MemberDecl &decl) {
  switch (decl.kind) {
  case kMemberMethod: {
    for (ParameterDecl &param : decl.parameters) {
      processType(param.type);
    }
    processType(decl.returnType);
    break;
  }

  case kMemberProperty: {
    processType(decl.propertyType);
    break;
  }
  }
}

void MetadataFactory::postProcessClass(ClassDecl &decl) {
  if (!decl.superClassName.empty()) {
    referencedClasses.emplace(decl.superClassName);
  }

  for (std::string &name : decl.protocolNames) {
    referencedProtocols.emplace(name);
  }

  for (MemberDecl &member : decl.members) {
    postProcessMember(member);
  }
}

void MetadataFactory::processProtocol(CXCursor cursor, bool required) {
  ProtocolDecl decl(cursor);

  if (!shouldProcess(cursor, required)) {
    skippedProtocols[decl.name] = decl;
    return;
  }

  protocols.emplace(decl.name, decl);
}

void MetadataFactory::postProcessProtocol(ProtocolDecl &decl) {
  for (std::string &name : decl.protocolNames) {
    referencedProtocols.emplace(name);
  }

  for (MemberDecl &member : decl.members) {
    postProcessMember(member);
  }
}

void MetadataFactory::processCategory(CXCursor cursor) {
  if (!shouldProcess(cursor))
    return;

  CategoryDecl decl(cursor);
  categories.emplace_back(decl);
}

void MetadataFactory::postProcessCategory(CategoryDecl &decl) {
  for (MemberDecl &member : decl.members) {
    postProcessMember(member);
  }
}

} // namespace metagen
