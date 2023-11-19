#include "IR.h"
#include "clang-c/Index.h"
#include <unordered_set>

namespace metagen {

ClassDecl::ClassDecl(CXCursor cursor) {
  framework = getFrameworkName(cursor);

  CXString cxname = clang_getCursorSpelling(cursor);
  name = clang_getCString(cxname);
  clang_disposeString(cxname);

  clang_visitChildren(
      cursor,
      [](CXCursor cursor, CXCursor, CXClientData clientData) {
        if (!isAvailable(cursor)) {
          return CXChildVisit_Continue;
        }

        auto cls = (ClassDecl *)clientData;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_ObjCSuperClassRef: {
          CXString name = clang_getCursorSpelling(cursor);
          std::string nameStr = clang_getCString(name);
          cls->superClassName = nameStr;
          clang_disposeString(name);
          break;
        }

        case CXCursor_ObjCProtocolRef: {
          CXString name = clang_getCursorSpelling(cursor);
          std::string nameStr = clang_getCString(name);
          cls->protocolNames.emplace_back(nameStr);
          clang_disposeString(name);
          break;
        }

        case CXCursor_TemplateTypeParameter: {
          CXString name = clang_getCursorSpelling(cursor);
          std::string nameStr = clang_getCString(name);
          cls->typeParameters.emplace_back(nameStr);
          clang_disposeString(name);
          break;
        }

        default:
          break;
        }

        return CXChildVisit_Continue;
      },
      this);

  clang_visitChildren(
      cursor,
      [](CXCursor cursor, CXCursor, CXClientData clientData) {
        if (!isAvailable(cursor)) {
          return CXChildVisit_Continue;
        }

        auto cls = (ClassDecl *)clientData;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_ObjCPropertyDecl:
        case CXCursor_ObjCClassMethodDecl:
        case CXCursor_ObjCInstanceMethodDecl: {
          auto member = MemberDecl(cursor, &cls->typeParameters);
          member.parentClassName = cls->name;
          cls->members.emplace_back(member);
          break;
        }
        default:
          break;
        }

        return CXChildVisit_Continue;
      },
      this);
}

MemberDecl *ClassDecl::getMemberNamed(std::string &name) {
  for (auto &member : members) {
    if (member.name == name) {
      return &member;
    }
  }
  return nullptr;
}

void removeDuplicateMethods(std::vector<MemberDecl> &members) {
  std::vector<MemberDecl> filteredMembers;

  // Remove getter methods in favor of properties

  std::unordered_set<std::string> instanceFiltered, classFiltered,
      instanceFilteredProperties, classFilteredProperties;

  for (auto &member : members) {
    auto &filtered =
        member.isStatic ? classFilteredProperties : instanceFilteredProperties;
    if (member.kind == kMemberProperty) {
      filtered.insert(member.name);
      if (!member.setterName.empty()) {
        filtered.insert(member.setterName);
      }
    }
  }

  // Check whether we should declare

  for (auto &member : members) {
    auto &filtered = member.isStatic ? classFiltered : instanceFiltered;
    auto &filteredProps =
        member.isStatic ? classFilteredProperties : instanceFilteredProperties;

    // Prevent getters from being emitted if there is a property with the same
    // name.
    if (member.kind == kMemberMethod) {
      if (filteredProps.contains(member.name)) {
        continue;
      }
    }

    if (filtered.contains(member.name)) {
      continue;
    }

    filteredMembers.emplace_back(member);
    filtered.insert(member.name);
  }

  members = filteredMembers;
}

void MetadataFactory::processClassRefs() {
  while (!referencedClasses.empty()) {
    std::unordered_set<std::string> refs = referencedClasses;
    referencedClasses.clear();

    for (const std::string &name : refs) {
      if (classes.contains(name)) {
        continue;
      }

      if (skippedClasses.contains(name)) {
        ClassDecl decl = skippedClasses[name];
        classes[name] = decl;
        postProcessClass(classes[name]);
      } else {
        std::cerr << "ERROR: Unknown class " << name << std::endl;
        missingClasses.emplace(name);
      }
    }
  }
}

void convertMethodToPropertyIfNeeded(MemberDecl &member,
                                     MemberDecl *memberInSuperclass,
                                     bool isSuperclass) {
  if (memberInSuperclass != nullptr) {
    if (memberInSuperclass->isStatic != member.isStatic) {
      return;
    }

    if (memberInSuperclass->kind == member.kind &&
        memberInSuperclass->toString() != member.toString() && isSuperclass) {
      member.tsIgnore = true;
    }

    if (member.kind == kMemberProperty)
      return;

    if (memberInSuperclass->kind == kMemberProperty) {
      // If the superclass has a property with the same name, we need to
      // convert this method into a property.
      member.kind = kMemberProperty;
      member.propertyType = member.returnType;
      if (member.propertyType.kind == kTypeInstanceObject && member.isStatic) {
        member.propertyType.kind = kTypeObject;
        member.propertyType.className = member.parentClassName;
      }
      member.parameters.clear();
      member.isReadonly = memberInSuperclass->isReadonly;
      member.setterName = memberInSuperclass->setterName;
      member.getterSelector = memberInSuperclass->getterSelector;
      member.setterSelector = memberInSuperclass->setterSelector;
    }
  }
}

void processDerivedClassRefs(MemberDecl &member,
                             std::vector<ClassDecl *> &derived) {
  for (ClassDecl *cls : derived) {
    convertMethodToPropertyIfNeeded(member, cls->getMemberNamed(member.name),
                                    false);
    processDerivedClassRefs(member, cls->derivedClassRefs);
  }
}

void ClassDecl::postProcessMembers() {
  for (MemberDecl &member : members) {
    ClassDecl *currentSuperClass = superClassRef;

    while (currentSuperClass != nullptr) {
      convertMethodToPropertyIfNeeded(
          member, currentSuperClass->getMemberNamed(member.name), true);
      currentSuperClass = currentSuperClass->superClassRef;
    }

    processDerivedClassRefs(member, derivedClassRefs);

    for (ProtocolDecl *protocol : protocolRefs) {
      convertMethodToPropertyIfNeeded(
          member, protocol->getMemberNamed(member.name), false);
    }

    if (member.tsIgnore && !tsIgnore) {
      tsIgnore = true;
    }
  }
}

} // namespace metagen
