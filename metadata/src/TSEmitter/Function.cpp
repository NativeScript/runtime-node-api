#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

void TSFile::write(FunctionDecl &decl) {
  std::string line;
  line += "declare function ";
  line += decl.name;
  line += "(";
  for (size_t i = 0; i < decl.parameters.size(); i++) {
    if (i > 0) {
      line += ", ";
    }
    auto param = decl.parameters[i];
    line += param.name;
    line += ": ";
    line += typeToString(param.type, false, false);
  }
  line += "): ";
  line += typeToString(decl.returnType, false, true);
  line += ";";

  code.write(line);
  code.newline();
}

} // namespace metagen
