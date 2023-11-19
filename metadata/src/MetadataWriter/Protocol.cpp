#include "MetadataWriter.h"

namespace metagen {

MDSectionOffset MDMetadataWriter::write(ProtocolDecl &decl) {
  if (decl.mdOffset != MD_SECTION_OFFSET_NULL) {
    return decl.mdOffset;
  }

  MDProtocol *mdProtocol = new MDProtocol();

  mdProtocol->name = strings.add(decl.name, decl.name);

  for (const std::string &name : decl.protocolNames) {
    if (factory.protocols.contains(name)) {
      ProtocolDecl &protocolDecl = factory.protocols[name];
      mdProtocol->protocols.push_back(write(protocolDecl));
    }
  }

  for (MemberDecl &member : decl.members) {
    MDMember *mdMember = memberFromDecl(member);
    mdProtocol->members.push_back(mdMember);
  }

  decl.mdOffset = protocols.add(mdProtocol, decl.name);
  return decl.mdOffset;
}

size_t MDProtocolSerde::size(MDProtocol *value) {
  size_t size = 0;
  // Name
  addsize(value->name);

  // Protocols
  size_t protocolsSize = value->protocols.size();
  size += sizeof(MDSectionOffset) * protocolsSize;

  // Members
  size_t membersSize = value->members.size();
  if (membersSize > 0) {
    auto memberSerde = MDMemberSerde();
    for (auto &member : value->members) {
      size += memberSerde.size(member);
    }
  } else {
    size += sizeof(MDMemberFlag);
  }
  return size;
}

void MDProtocolSerde::serialize(MDProtocol *value, void *data) {
  auto memberSerde = MDMemberSerde();
  // Name
  auto nameOffset =
      value->name | (value->protocols.empty() ? 0 : mdSectionOffsetNext);
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
  if (membersSize == 0) {
    auto flag = mdMemberFlagNull;
    binwrite(flag);
  }
}

} // namespace metagen
