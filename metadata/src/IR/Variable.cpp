#include "IR.h"

namespace metagen {

VariableDecl::VariableDecl(CXCursor cursor) {
  framework = getFrameworkName(cursor);

  CXString cxname = clang_getCursorSpelling(cursor);
  name = jsifyName(clang_getCString(cxname));
  clang_disposeString(cxname);

  CXType cxtype = clang_getCursorType(cursor);
  type = TypeSpec(cxtype);

  CXCursor init = clang_Cursor_getVarDeclInitializer(cursor);
  if (init.kind != 0) {
    CXEvalResult result = clang_Cursor_Evaluate(cursor);
    CXEvalResultKind kind = clang_EvalResult_getKind(result);

    switch (kind) {
    case CXEval_Int: {
      constEvalI64 = clang_EvalResult_getAsInt(result);
      constEvalKind = kEvalI64;
      break;
    }

    case CXEval_Float: {
      constEvalF64 = clang_EvalResult_getAsDouble(result);
      constEvalKind = kEvalF64;
      break;
    }

    case CXEval_StrLiteral:
    case CXEval_ObjCStrLiteral:
    case CXEval_CFStr: {
      constEvalString = clang_EvalResult_getAsStr(result);
      constEvalKind = kEvalString;
      break;
    }

    default:
      break;
    }

    clang_EvalResult_dispose(result);
  }
}

VariableDecl::VariableDecl(std::string &framework, const EnumConstDecl &decl) {
  this->framework = framework;
  name = decl.name;
  constEvalI64 = decl.value;
  constEvalKind = kEvalI64;
  type.kind = kTypeI64;
}

} // namespace metagen
