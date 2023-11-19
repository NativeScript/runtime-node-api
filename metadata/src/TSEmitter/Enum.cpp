#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

void TSFile::write(EnumDecl &decl) {
  code.write("declare const " + decl.name + ": {");
  code.enter();

  for (size_t i = 0; i < decl.constants.size(); i++) {
    EnumConstDecl &c = decl.constants[i];
    code.write(c.name + ": " + std::to_string(c.value) + ",");
  }

  code.exit();
  code.write("};");

  code.newline();
}

} // namespace metagen
