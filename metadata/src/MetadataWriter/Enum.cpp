#include "MetadataWriter.h"

namespace metagen {

void MDMetadataWriter::write(EnumDecl &decl) {
  if (decl.mdOffset != MD_SECTION_OFFSET_NULL) {
    return;
  }

  MDEnum *mdEnum = new MDEnum();

  mdEnum->name = strings.add(decl.name, decl.name);

  for (EnumConstDecl &c : decl.constants) {
    MDEnumMember member;
    member.name = strings.add(c.name, c.name);
    member.value = c.value;
    mdEnum->members.push_back(member);
  }

  decl.mdOffset = enums.add(mdEnum, decl.name);
}

size_t MDEnumMemberSerde::size(MDEnumMember *value) {
  size_t size = 0;
  // Name
  addsize(value->name);
  // Value
  addsize(value->value);
  return size;
}

void MDEnumMemberSerde::serialize(MDEnumMember *value, void *data) {
  // Name
  binwrite(value->name);
  // Value
  binwrite(value->value);
}

size_t MDEnumSerde::size(MDEnum *value) {
  size_t size = 0;
  // Name
  addsize(value->name);
  // Members
  MDEnumMemberSerde memberSerde;
  size += value->members.size() * memberSerde.size(&value->members[0]);
  return size;
}

void MDEnumSerde::serialize(MDEnum *value, void *data) {
  // Name
  binwrite(value->name);
  // Members
  size_t membersSize = value->members.size();
  MDEnumMemberSerde memberSerde;
  for (size_t i = 0; i < membersSize; i++) {
    MDEnumMember member = value->members[i];
    size_t memberSize = memberSerde.size(&member);
    memberSerde.serialize(&member, data);
    if (i != membersSize - 1) {
      MDSectionOffset *serializedPtr = (MDSectionOffset *)data;
      *serializedPtr |= mdSectionOffsetNext;
    }
    ptr_add(&data, memberSize);
  }
}

} // namespace metagen
