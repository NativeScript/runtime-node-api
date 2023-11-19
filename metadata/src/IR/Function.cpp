#include "IR.h"

namespace metagen {

FunctionDecl::FunctionDecl(CXCursor cursor) {
  framework = getFrameworkName(cursor);

  CXString cxname = clang_getCursorSpelling(cursor);
  name = clang_getCString(cxname);
  clang_disposeString(cxname);

  CXType cxtype = clang_getCursorType(cursor);
  returnType = TypeSpec(clang_getResultType(cxtype));

  auto argc = clang_Cursor_getNumArguments(cursor);

  for (int i = 0; i < argc; i++) {
    ParameterDecl parameter;
    auto arg = clang_Cursor_getArgument(cursor, i);
    auto argName = clang_getCursorSpelling(arg);
    parameter.name = jsifyName(clang_getCString(argName));
    clang_disposeString(argName);
    auto argType = clang_getCursorType(arg);
    if (parameter.name.empty()) {
      parameter.name = "p" + std::to_string(i + 1);
    }
    parameter.type = TypeSpec(argType);
    parameters.emplace_back(parameter);
  }

  isVariadic = clang_Cursor_isVariadic(cursor);
}

} // namespace metagen
