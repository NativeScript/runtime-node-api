#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

void TSFile::write(ProtocolDecl &decl) {
  std::string line = "declare interface " + decl.name;
  if (!decl.protocolNames.empty()) {
    line += " extends ";
    for (size_t i = 0; i < decl.protocolNames.size(); i++) {
      line += decl.protocolNames[i];
      protocolReferences.emplace(decl.protocolNames[i]);
      if (i < decl.protocolNames.size() - 1) {
        line += ", ";
      }
    }
  }
  line += " {";
  if (decl.tsIgnore) {
    code.write("// @ts-ignore ProtocolDecl.tsIgnore");
  }
  code.write(line);
  code.enter();
  for (size_t i = 0; i < decl.members.size(); i++) {
    if (!decl.members[i].isStatic) {
      write(decl.members[i], true);
      if (i < decl.members.size() - 1) {
        code.newline();
      }
    }
  }
  code.exit();
  code.write("}");
  code.newline();

  line = "declare class ";
  line += decl.name;
  line += " extends NativeObject";

  line += " implements " + decl.name;

  line += " {";
  if (decl.tsIgnore) {
    code.write("// @ts-ignore ProtocolDecl.tsIgnore");
  }
  code.write(line);
  code.enter();
  for (size_t i = 0; i < decl.members.size(); i++) {
    if (!decl.members[i].isStatic)
      continue;

    write(decl.members[i], false);
    if (i < decl.members.size() - 1) {
      code.newline();
    }
  }
  code.exit();
  code.write("}");
  code.newline();
}

} // namespace metagen
