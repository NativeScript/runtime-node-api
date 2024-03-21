#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

std::string MemberDecl::toString() {
  TSFile file;
  MemberDecl &decl = *this;
  file.write(decl, false);
  return file.toString();
}

void TSFile::write(MemberDecl &decl, bool isInterface,
                   std::vector<std::string> *classTypeParameters) {
  if (decl.kind == kMemberMethod) {
    std::string line;
    if (decl.isStatic) {
      line += "static ";
    }
    line += decl.name;

    bool staticReturnsThis =
        decl.isStatic && decl.returnType.kind == kTypeInstanceObject;
    if (staticReturnsThis) {
      line += "<";
      if (classTypeParameters != nullptr && !classTypeParameters->empty()) {
        for (const std::string &param : *classTypeParameters) {
          line += param + ", ";
        }
      }
      line += "This extends abstract new (...args: any) => any>";
    } else if (decl.isStatic && classTypeParameters != nullptr &&
               !classTypeParameters->empty()) {
      line += "<";
      for (size_t i = 0; i < classTypeParameters->size(); i++) {
        line += classTypeParameters->at(i);
        if (i < classTypeParameters->size() - 1) {
          line += ", ";
        }
      }
      line += ">";
    }
    if (isInterface && decl.optional) {
      line += "?";
    }
    line += "(";
    if (staticReturnsThis) {
      line += "this: This";
      if (!decl.parameters.empty()) {
        line += ", ";
      }
    }
    std::unordered_set<std::string> paramNames;
    for (size_t i = 0; i < decl.parameters.size(); i++) {
      if (i > 0) {
        line += ", ";
      }
      auto param = decl.parameters[i];
      if (paramNames.contains(param.name)) {
        param.name += "_";
      }
      paramNames.emplace(param.name);
      line += param.name;
      line += ": ";
      line += typeToString(param.type, decl.isStatic, false);
    }
    line += "): ";
    line += typeToString(decl.returnType, decl.isStatic, true);
    line += ";";

    if (decl.tsIgnore) {
      // Due to inconsistencies between Objective-C and TypeScript type
      // systems, we have to use this annotation to prevent the TypeScript
      // compiler from complaining about how one type doesn't satisfy another.
      code.write("// @ts-ignore MemberDecl.tsIgnore");
    }

    code.write(line);
  } else if (decl.kind == kMemberProperty) {
    auto getterType = typeToString(decl.propertyType, decl.isStatic, true);
    auto setterType = typeToString(decl.propertyType, decl.isStatic, false);

    if (!decl.isReadonly && getterType != setterType) {
      if (decl.optional && isInterface) {
        getterType += " | undefined";
        setterType += " | undefined";
      }
      std::string line;
      if (decl.isStatic) {
        line += "static ";
      }
      line += "get ";
      line += decl.name;
      line += "(): ";
      line += decl.propertyType.kind == kTypeInstanceObject && decl.isStatic
                  ? decl.parentClassName
                  : getterType;
      line += ";";
      if (decl.tsIgnore) {
        code.write("// @ts-ignore MemberDecl.tsIgnore");
      }
      code.write(line);

      line = "";
      if (decl.isStatic) {
        line += "static ";
      }
      line += "set ";
      line += decl.name;

      line += "(value: ";
      line += decl.propertyType.kind == kTypeInstanceObject && decl.isStatic
                  ? decl.parentClassName
                  : setterType;
      line += ");";
      if (decl.tsIgnore) {
        code.write("// @ts-ignore MemberDecl.tsIgnore");
      }
      code.write(line);
    } else {
      std::string line;
      if (decl.isStatic) {
        line += "static ";
      }
      if (decl.isReadonly) {
        line += "readonly ";
      }
      line += decl.name;
      if (isInterface && decl.optional) {
        line += "?";
      }
      line += ": ";
      line += decl.propertyType.kind == kTypeInstanceObject && decl.isStatic
                  ? decl.parentClassName
                  : getterType;
      line += ";";

      if (decl.tsIgnore) {
        code.write("// @ts-ignore MemberDecl.tsIgnore");
      }

      code.write(line);
    }
  } else {
    assert(false && "Unknown class member type");
  }
}

} // namespace metagen
