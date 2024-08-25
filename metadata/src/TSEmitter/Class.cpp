#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

void TSFile::write(ClassDecl &decl) {
  std::string line = "declare class ";
  line += decl.name;

  if (!decl.typeParameters.empty()) {
    line += "<";
    for (size_t i = 0; i < decl.typeParameters.size(); i++) {
      line += decl.typeParameters[i] + " = interop.Object";
      if (i < decl.typeParameters.size() - 1) {
        line += ", ";
      }
    }
    line += ">";
  }

  if (decl.superClassName != "") {
    line += " extends ";
    line += decl.superClassName;
    classReferences.emplace(decl.superClassName);
  } else {
    line += " extends NativeObject";
  }

  bool hasFastEnumeration = false;

  if (!decl.protocolNames.empty()) {
    line += " implements ";
    for (size_t i = 0; i < decl.protocolNames.size(); i++) {
      line += decl.protocolNames[i];
      if (decl.protocolNames[i] == "NSFastEnumeration") {
        hasFastEnumeration = true;
      }
      protocolReferences.emplace(decl.protocolNames[i]);
      if (i < decl.protocolNames.size() - 1) {
        line += ", ";
      }
    }
  }

  line += " {";
  if (decl.tsIgnore) {
    code.write("// @ts-ignore ClassDecl.tsIgnore");
  }
  code.write(line);
  code.enter();
  for (size_t i = 0; i < decl.members.size(); i++) {
    write(decl.members[i], false, &decl.typeParameters);
    if (i < decl.members.size() - 1) {
      code.newline();
    }
  }

  if (hasFastEnumeration) {
    code.newline();
    std::string type = decl.typeParameters.size() == 1 ? decl.typeParameters[0] : "any";
    code.write("readonly [Symbol.iterator]: () => Iterator<" + type + ">;");
    code.newline();
  }

  code.exit();
  code.write("}");
  code.newline();
}

} // namespace metagen
