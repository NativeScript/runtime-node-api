#include "MetadataWriter.h"

namespace metagen {

MDSectionOffset MDMetadataWriter::write(ClassDecl &decl) {
  if (decl.mdOffset != MD_SECTION_OFFSET_NULL) {
    return decl.mdOffset;
  }

  MDClass *mdClass = new MDClass();

  mdClass->name = strings.add(decl.name, decl.name);
  if (factory.classes.contains(decl.superClassName)) {
    MDResolvable res{decl.superClassName, &mdClass->superclass};
    classResolvables.emplace_back(res);
  } else {
    mdClass->superclass = MD_SECTION_OFFSET_NULL;
  }

  for (const std::string &name : decl.protocolNames) {
    if (factory.protocols.contains(name)) {
      ProtocolDecl &protocolDecl = factory.protocols[name];
      mdClass->protocols.push_back(write(protocolDecl));
    }
  }

  for (MemberDecl &member : decl.members) {
    // Protocols are dynamically added to the class, so skip them here
    // They're solely here for TS classes to conform to TS interfaces.
    if (!member.parentProtocolName.empty())
      continue;
    MDMember *mdMember = memberFromDecl(member);
    mdClass->members.push_back(mdMember);
  }

  decl.mdOffset = classes.add(mdClass, decl.name);
  return decl.mdOffset;
}

size_t MDClassSerde::size(MDClass *value) {
  auto memberSerde = MDMemberSerde();
  size_t size = 0;
  // Name
  addsize(value->name);
  // Protocols
  size += sizeof(MDSectionOffset) * value->protocols.size();
  // Superclass
  addsize(value->superclass);
  // Members
  for (auto &member : value->members) {
    size += memberSerde.size(member);
  }
  return size;
}

void MDClassSerde::serialize(MDClass *value, void *data) {
  auto memberSerde = MDMemberSerde();
  // Name
  MDSectionOffset nameOffset = value->name;
  if (!value->protocols.empty()) {
    nameOffset |= mdSectionOffsetNext;
  }
  binwrite(nameOffset);
  // Protocols
  size_t protocolsSize = value->protocols.size();
  for (size_t i = 0; i < protocolsSize; i++) {
    auto protocol = value->protocols[i];
    if (i != protocolsSize - 1) {
      protocol |= mdSectionOffsetNext;
    }
    binwrite(protocol);
  }
  // Super class
  MDSectionOffset superclassKey = value->superclass;
  if (!value->members.empty()) {
    superclassKey |= mdSectionOffsetNext;
  }
  binwrite(superclassKey);
  // Members
  size_t membersSize = value->members.size();
  for (size_t i = 0; i < membersSize; i++) {
    auto member = value->members[i];
    memberSerde.serialize(member, data);
    if (i != membersSize - 1) {
      MDMemberFlag *serializedPtr = (MDMemberFlag *)data;
      *serializedPtr = MDMemberFlag(*serializedPtr | mdMemberNext);
    }
    ptr_add(&data, memberSerde.size(member));
  }
}

} // namespace metagen
