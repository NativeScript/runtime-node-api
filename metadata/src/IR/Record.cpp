#include "IR.h"
#include <string>

namespace metagen {

StructDecl::StructDecl(CXCursor cursor) {
  framework = getFrameworkName(cursor);

  CXString cxname = clang_getCursorSpelling(cursor);
  name = transformStructName(clang_getCString(cxname));
  clang_disposeString(cxname);

  size = clang_Type_getSizeOf(clang_getCursorType(cursor));

  clang_visitChildren(
      cursor,
      [](CXCursor cursor, CXCursor, CXClientData clientData) {
        if (!isAvailable(cursor)) {
          return CXChildVisit_Continue;
        }

        auto decl = (StructDecl *)clientData;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_FieldDecl: {
          StructFieldDecl field;
          field.name = clang_getCString(clang_getCursorSpelling(cursor));
          auto type = clang_getCursorType(cursor);
          field.type = TypeSpec(type);
          field.type.isNullable = true;
          field.offset = clang_Cursor_getOffsetOfField(cursor) / 8;
          decl->fields.emplace_back(field);
          break;
        }

        default:
          break;
        }

        return CXChildVisit_Continue;
      },
      this);
}

UnionDecl::UnionDecl(CXCursor cursor) {
  framework = getFrameworkName(cursor);

  CXString cxname = clang_getCursorSpelling(cursor);
  name = transformStructName(clang_getCString(cxname));
  clang_disposeString(cxname);

  size = clang_Type_getSizeOf(clang_getCursorType(cursor));

  clang_visitChildren(
      cursor,
      [](CXCursor cursor, CXCursor, CXClientData clientData) {
        if (!isAvailable(cursor)) {
          return CXChildVisit_Continue;
        }

        auto decl = (UnionDecl *)clientData;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_FieldDecl: {
          UnionFieldDecl field;
          field.name = clang_getCString(clang_getCursorSpelling(cursor));
          auto type = clang_getCursorType(cursor);
          field.type = TypeSpec(type);
          field.type.isNullable = true;
          decl->fields.emplace_back(field);
          break;
        }

        default:
          break;
        }

        return CXChildVisit_Continue;
      },
      this);
}

void MetadataFactory::processRecordRefs() {
  while (!referencedRecords.empty()) {
    std::unordered_set<std::string> refs = referencedRecords;
    referencedRecords.clear();

    for (const std::string &name : refs) {
      if (unions.contains(name) || structs.contains(name)) {
        continue;
      }

      if (skippedStructs.contains(name)) {
        StructDecl decl = skippedStructs[name];
        structs[decl.name] = decl;
        postProcessStruct(structs[decl.name]);
      } else if (skippedUnions.contains(name)) {
        UnionDecl decl = skippedUnions[name];
        unions[decl.name] = decl;
        postProcessUnion(unions[decl.name]);
      } else {
        std::cerr << "ERROR: Unknown record " << name << std::endl;
      }
    }
  }
}

} // namespace metagen
