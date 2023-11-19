#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

void TSFile::write(StructDecl &decl) {
  code.write("declare class " + decl.name + " {");
  code.enter();

  code.write("constructor(init?: " + decl.name + ");");
  for (StructFieldDecl &field : decl.fields) {
    code.write(field.name + ": " + typeToString(field.type, false, true) + ";");
  }
  code.exit();
  code.write("}");

  code.newline();
}

void TSFile::write(UnionDecl &decl) {
  code.write("type " + decl.name +
             "Descriptor = " + (decl.fields.empty() ? "undefined;" : ""));
  code.enter();
  for (size_t i = 0; i < decl.fields.size(); i++) {
    UnionFieldDecl &field = decl.fields[i];
    code.write("| { " + field.name + ": " +
               typeToString(field.type, false, false) + " }" +
               (i < decl.fields.size() - 1 ? "" : ";"));
  }
  code.exit();
  code.newline();

  code.write("declare class " + decl.name + " {");
  code.enter();
  code.write("constructor(init?: " + decl.name + "Descriptor);");
  for (UnionFieldDecl &field : decl.fields) {
    code.write(field.name + ": " + typeToString(field.type, false, true) + ";");
  }
  code.exit();
  code.write("}");
  code.newline();
}

} // namespace metagen
