#include "IR.h"

namespace metagen {

ProtocolDecl::ProtocolDecl(CXCursor cursor) {
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

        auto protocol = (ProtocolDecl *)clientData;

        CXCursorKind kind = clang_getCursorKind(cursor);

        switch (kind) {
        case CXCursor_ObjCProtocolRef: {
          CXString name = clang_getCursorSpelling(cursor);
          std::string nameStr = clang_getCString(name);
          protocol->protocolNames.emplace_back(nameStr);
          clang_disposeString(name);
          break;
        }

        case CXCursor_ObjCPropertyDecl:
        case CXCursor_ObjCClassMethodDecl:
        case CXCursor_ObjCInstanceMethodDecl: {
          auto member = MemberDecl(cursor);
          member.parentProtocolName = protocol->name;
          protocol->members.emplace_back(member);
          break;
        }

        default:
          break;
        }

        return CXChildVisit_Continue;
      },
      this);
}

MemberDecl *ProtocolDecl::getMemberNamed(std::string &name) {
  for (auto &member : members) {
    if (member.name == name) {
      return &member;
    }
  }
  return nullptr;
}

void MetadataFactory::processProtocolRefs() {
  while (!referencedProtocols.empty()) {
    std::unordered_set<std::string> refs = referencedProtocols;
    referencedProtocols.clear();

    for (const std::string &name : refs) {
      if (protocols.contains(name)) {
        continue;
      }

      if (skippedProtocols.contains(name)) {
        ProtocolDecl decl = skippedProtocols[name];
        protocols[name] = decl;
        postProcessProtocol(protocols[name]);
      } else {
        std::cerr << "ERROR: Unknown protocol " << name << std::endl;
      }
    }
  }
}

void ProtocolDecl::postProcessMembers() {
  for (MemberDecl &member : members) {
    for (ClassDecl *cls : implementerRefs) {
      convertMethodToPropertyIfNeeded(member, cls->getMemberNamed(member.name),
                                      false);
    }

    for (ProtocolDecl *protocol : protocolRefs) {
      convertMethodToPropertyIfNeeded(
          member, protocol->getMemberNamed(member.name), true);
    }

    for (ProtocolDecl *protocol : derivedProtocolRefs) {
      convertMethodToPropertyIfNeeded(
          member, protocol->getMemberNamed(member.name), false);
    }

    if (member.tsIgnore && !tsIgnore) {
      tsIgnore = true;
    }
  }
}

} // namespace metagen
