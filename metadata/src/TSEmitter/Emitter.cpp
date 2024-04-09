#include "TSEmitter.h"

namespace metagen {

void TSLines::write(std::string value) {
  std::string line;
  for (int i = 0; i < indentLevel; i++) {
    line += "  ";
  }
  line += value;
  lines.push_back(line);
}

void TSLines::newline() { lines.push_back(""); }

void TSLines::enter() { indentLevel++; }

void TSLines::exit() { indentLevel--; }

std::string TSFile::toString() {
  std::string result;
  result += "/// <reference types=\"@nativescript/objc-node-api\" />\n";
  for (auto &import : imports) {
    std::string line = "/// <reference path=\"";
    line += import;
    line += "\" />";
    result += line + "\n";
  }
  result += "\n";
  for (auto &line : code.lines) {
    result += line + "\n";
  }
  return result;
}

void TSEmitter::resolveImports(TSFile &file) {
  for (auto &name : file.classReferences) {
    if (factory.classes.contains(name)) {
      auto cls = factory.classes[name];
      if (cls.framework != file.name) {
        file.import("./" + cls.framework + ".d.ts");
      }
    }
  }
}

void TSEmitter::ensureFile(std::string framework) {
  if (!files.contains(framework)) {
    files[framework] = TSFile(framework, &factory);
  }
}

void TSEmitter::write() {
  // Emit code

  for (auto &var : factory.variables) {
    ensureFile(var.second.framework);
    files[var.second.framework].write(var.second);
  }

  for (auto &enm : factory.enums) {
    ensureFile(enm.second.framework);
    files[enm.second.framework].write(enm.second);
  }

  for (auto &strct : factory.structs) {
    ensureFile(strct.second.framework);
    files[strct.second.framework].write(strct.second);
  }

  for (auto &un : factory.unions) {
    ensureFile(un.second.framework);
    files[un.second.framework].write(un.second);
  }

  for (auto &func : factory.functions) {
    ensureFile(func.framework);
    files[func.framework].write(func);
  }

  for (auto &proto : factory.protocols) {
    ensureFile(proto.second.framework);
    files[proto.second.framework].write(proto.second);
  }

  for (auto &cls : factory.classes) {
    if (cls.first.empty())
      return;
    ensureFile(cls.second.framework);
    files[cls.second.framework].write(cls.second);
  }

  // Write files

  for (auto &file : files) {
    resolveImports(file.second);

    auto name = outDir + "/" + file.second.name + ".d.ts";
    auto f = std::fopen(name.c_str(), "w");
    std::string code = file.second.toString();
    std::fwrite(code.data(), 1, code.size(), f);
    std::fclose(f);
  }

  // Write index.d.ts
  {
    std::string name = outDir + "/index.d.ts";
    auto f = std::fopen(name.c_str(), "w");
    for (auto file : files) {
      std::string line = "/// <reference path=\"./";
      line += file.second.name;
      line += ".d.ts\" />";
      std::fwrite(line.data(), 1, line.size(), f);
      std::fwrite("\n", 1, 1, f);
    }
  }
}

} // namespace metagen
