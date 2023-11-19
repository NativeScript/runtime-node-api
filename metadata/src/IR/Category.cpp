#include "IR.h"

namespace metagen {

CategoryDecl::CategoryDecl(CXCursor cursor) {
  this->cursor = cursor;
  framework = getFrameworkName(cursor);

  CXString cxname = clang_getCursorSpelling(cursor);
  name = clang_getCString(cxname);
  clang_disposeString(cxname);

  clang_visitChildren(
      cursor,
      [](CXCursor cursor, CXCursor, CXClientData clientData) {
        if (!isAvailable(cursor)) {
          return CXChildVisit_Continue;
        }

        auto cls = (CategoryDecl *)clientData;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_ObjCClassRef: {
          CXString name = clang_getCursorSpelling(cursor);
          std::string nameStr = clang_getCString(name);
          cls->className = nameStr;
          clang_disposeString(name);
          break;
        }

        default:
          break;
        }

        return CXChildVisit_Continue;
      },
      this);
}

void CategoryDecl::processMembers(
    std::vector<std::string> *classTypeParameters) {
  _classTypeParameters = classTypeParameters;
  clang_visitChildren(
      cursor,
      [](CXCursor cursor, CXCursor, CXClientData clientData) {
        if (!isAvailable(cursor)) {
          return CXChildVisit_Continue;
        }

        auto cls = (CategoryDecl *)clientData;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_ObjCPropertyDecl:
        case CXCursor_ObjCClassMethodDecl:
        case CXCursor_ObjCInstanceMethodDecl: {
          auto member = MemberDecl(cursor, cls->_classTypeParameters);
          member.parentClassName = cls->className;
          cls->members.emplace_back(member);
          break;
        }

        default:
          break;
        }

        return CXChildVisit_Continue;
      },
      this);
}

} // namespace metagen
