#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

void TSFile::write(VariableDecl &decl) {
  std::string line;
  line += "declare const ";
  line += decl.name;
  line += ": ";
  line += typeToString(decl.type, false, true);
  line += ";";

  code.write(line);
  code.newline();
}

} // namespace metagen
