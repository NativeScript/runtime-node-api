#include "IR.h"
#include "clang-c/Index.h"
#include <cassert>

namespace metagen {

MemberDecl::MemberDecl(CXCursor cursor,
                       std::vector<std::string> *classTypeParameters) {
  optional = clang_Cursor_isObjCOptional(cursor);

  CXCursorKind cursorKind = clang_getCursorKind(cursor);

  switch (cursorKind) {
  case CXCursor_ObjCClassMethodDecl:
  case CXCursor_ObjCInstanceMethodDecl: {
    kind = kMemberMethod;
    isStatic = cursorKind == CXCursor_ObjCClassMethodDecl;

    CXString cxname = clang_getCursorSpelling(cursor);
    methodSelector = clang_getCString(cxname);
    name = jsifySelector(methodSelector);
    clang_disposeString(cxname);

    clang_visitChildren(
        cursor,
        [](CXCursor cursor, CXCursor, CXClientData clientData) {
          if (!isAvailable(cursor)) {
            return CXChildVisit_Continue;
          }

          auto method = (MemberDecl *)clientData;

          if (cursor.kind == CXCursor_NSReturnsRetained) {
            method->returnOwned = true;
          }

          return CXChildVisit_Continue;
        },
        this);

    auto argc = clang_Cursor_getNumArguments(cursor);

    for (int i = 0; i < argc; i++) {
      ParameterDecl param;
      auto arg = clang_Cursor_getArgument(cursor, i);
      auto argName = clang_getCursorSpelling(arg);
      param.name = jsifyName(clang_getCString(argName));
      clang_disposeString(argName);
      auto argType = clang_getCursorType(arg);
      param.type = TypeSpec(argType, classTypeParameters);
      auto cxTypeString = clang_getCursorPrettyPrinted(arg, 0);
      std::string prettyPrint = clang_getCString(cxTypeString);
      clang_disposeString(cxTypeString);
      if (prettyPrint.find("Nullable") != std::string::npos) {
        param.type.isNullable = true;
      }
      parameters.emplace_back(param);
    }

    isVariadic = clang_Cursor_isVariadic(cursor);

    if (isStatic && (name.find("alloc") == 0 || name == "new")) {
      returnType.kind = kTypeInstanceObject;
      return;
    }

    if (!isStatic && name.find("init") == 0) {
      isInit = true;
      returnType.kind = kTypeInstanceObject;
      return;
    }

    returnType =
        TypeSpec(clang_getCursorResultType(cursor), classTypeParameters);

    auto cxTypeString = clang_getCursorPrettyPrinted(cursor, 0);
    std::string typeString = clang_getCString(cxTypeString);
    clang_disposeString(cxTypeString);
    typeString = typeString.substr(0, typeString.find(")"));
    if (typeString.find("Nullable") != std::string::npos) {
      returnType.isNullable = true;
    }

    break;
  }

  case CXCursor_ObjCPropertyDecl: {
    kind = kMemberProperty;

    CXString cxname = clang_Cursor_getObjCPropertyGetterName(cursor);
    getterSelector = clang_getCString(cxname);
    name = jsifySelector(getterSelector);
    clang_disposeString(cxname);

    cxname = clang_Cursor_getObjCPropertySetterName(cursor);
    setterSelector = clang_getCString(cxname);
    setterName = jsifySelector(setterSelector);
    clang_disposeString(cxname);

    auto attrKind = clang_Cursor_getObjCPropertyAttributes(cursor, 0);
    isReadonly = (attrKind & CXObjCPropertyAttr_readonly) != 0;
    isStatic = (attrKind & CXObjCPropertyAttr_class) != 0;

    CXType cxtype = clang_getCursorType(cursor);
    propertyType = TypeSpec(cxtype, classTypeParameters);

    CXString cxTypeString = clang_getCursorPrettyPrinted(cursor, 0);
    std::string typeString = clang_getCString(cxTypeString);
    clang_disposeString(cxTypeString);

    if (typeString.find("Nullable") != std::string::npos) {
      propertyType.isNullable = true;
    }
    break;
  }

  default:
    assert(false && "invalid member kind");
    break;
  }
}

} // namespace metagen
