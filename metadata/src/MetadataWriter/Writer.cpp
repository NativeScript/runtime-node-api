#include "MetadataWriter.h"

namespace metagen {

size_t MDStringSerde::size(std::string value) { return value.size() + 1; }

void MDStringSerde::serialize(std::string value, void *data) {
  memcpy(data, value.c_str(), value.size() + 1);
}

void MDMetadataWriter::write() {
  for (auto &kv : factory.variables) {
    write(kv.second);
  }

  for (auto &kv : factory.enums) {
    write(kv.second);
  }

  for (auto &kv : factory.structs) {
    write(kv.second);
  }

  for (auto &kv : factory.unions) {
    write(kv.second);
  }

  for (FunctionDecl &decl : factory.functions) {
    write(decl);
  }

  for (auto &kv : factory.protocols) {
    write(kv.second);
  }

  for (auto &kv : factory.classes) {
    write(kv.second);
  }

  for (MDResolvable &res : structResolvables) {
    StructDecl &decl = factory.structs[res.name];
    *res.offset = decl.mdOffset;
  }

  for (MDResolvable &res : classResolvables) {
    ClassDecl &decl = factory.classes[res.name];
    *res.offset = decl.mdOffset;
  }

  for (MDResolvable &res : protocolResolvables) {
    ProtocolDecl &decl = factory.protocols[res.name];
    *res.offset = decl.mdOffset;
  }

  MDSignatureSerde serde;
  for (MDSignatureResolvable &res : signatureResolvables) {
    *res.offset = signatures.add(res.signature, serde.encode(res.signature));
  }
}

std::pair<void *, size_t> MDMetadataWriter::serialize() {
  // Header
  size_t size = MD_HEADER_SIZE;

  // Section Offsets
  // Strings section is always first, offset is just after header
  // so we don't write it here.
  MDSectionOffset section_offsets =
      sizeof(MDSectionOffset) * (MD_NUM_SECTIONS - 1);
  size += section_offsets;

  // Strings
  size += strings.section_size;

  // Constants
  size += constants.section_size;

  // Enums
  size += enums.section_size;

  // Signatures
  size += signatures.section_size;

  // Functions
  size += functions.section_size;

  // Protocols
  size += protocols.section_size;

  // Classes
  size += classes.section_size;

  // Structs
  size += structs.section_size;

  // Unions
  size += unions.section_size;

  void *orig_data = malloc(size);
  void *data = orig_data;

  // Header
  memcpy(data, MD_HEADER_MAGIC, MD_HEADER_MAGIC_SIZE);
  ptr_add(&data, MD_HEADER_MAGIC_SIZE);
  uint16_t version = MD_HEADER_VERSION;
  memcpy(data, &version, MD_HEADER_VERSION_SIZE);
  ptr_add(&data, MD_HEADER_VERSION_SIZE);

  // Section Offsets

  MDSectionOffset baseSectionOffset = MD_HEADER_SIZE + section_offsets;

  MDSectionOffset stringsOffset = baseSectionOffset;
  // memcpy(data, &stringsOffset, sizeof(MDSectionOffset));
  // ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset constantsOffset =
      stringsOffset + (MDSectionOffset)strings.section_size;
  memcpy(data, &constantsOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset enumsOffset =
      constantsOffset + (MDSectionOffset)constants.section_size;
  memcpy(data, &enumsOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset signaturesOffset =
      enumsOffset + (MDSectionOffset)enums.section_size;
  memcpy(data, &signaturesOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset functionsOffset =
      signaturesOffset + (MDSectionOffset)signatures.section_size;
  memcpy(data, &functionsOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset protocolsOffset =
      functionsOffset + (MDSectionOffset)functions.section_size;
  memcpy(data, &protocolsOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset classesOffset = protocolsOffset + protocols.section_size;
  memcpy(data, &classesOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset structsOffset =
      classesOffset + (MDSectionOffset)classes.section_size;
  memcpy(data, &structsOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset unionsOffset =
      structsOffset + (MDSectionOffset)structs.section_size;
  memcpy(data, &unionsOffset, sizeof(MDSectionOffset));
  ptr_add(&data, sizeof(MDSectionOffset));

  MDSectionOffset offset = 0;

  // Strings
  while (offset < strings.section_size) {
    std::string str = strings[offset];
    size_t serializedSize = strings.serde.size(str);
    strings.serde.serialize(str, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Constants
  offset = 0;
  while (offset < constants.section_size) {
    MDVariable *constant = constants[offset];
    size_t serializedSize = constants.serde.size(constant);
    constants.serde.serialize(constant, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Enums
  offset = 0;
  while (offset < enums.section_size) {
    MDEnum *enum_ = enums[offset];
    size_t serializedSize = enums.serde.size(enum_);
    enums.serde.serialize(enum_, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Signatures
  offset = 0;
  while (offset < signatures.section_size) {
    MDSignature *signature = signatures[offset];
    size_t serializedSize = signatures.serde.size(signature);
    signatures.serde.serialize(signature, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Functions
  offset = 0;
  while (offset < functions.section_size) {
    MDFunction *function = functions[offset];
    size_t serializedSize = functions.serde.size(function);
    functions.serde.serialize(function, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Protocols
  offset = 0;
  while (offset < protocols.section_size) {
    MDProtocol *protocol = protocols[offset];
    size_t serializedSize = protocols.serde.size(protocol);
    protocols.serde.serialize(protocol, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Classes
  offset = 0;
  while (offset < classes.section_size) {
    MDClass *class_ = classes[offset];
    size_t serializedSize = classes.serde.size(class_);
    classes.serde.serialize(class_, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Structs
  offset = 0;
  while (offset < structs.section_size) {
    MDStruct *struct_ = structs[offset];
    size_t serializedSize = structs.serde.size(struct_);
    structs.serde.serialize(struct_, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  // Unions
  offset = 0;
  while (offset < unions.section_size) {
    MDUnion *union_ = unions[offset];
    size_t serializedSize = unions.serde.size(union_);
    unions.serde.serialize(union_, data);
    ptr_add(&data, serializedSize);
    offset += serializedSize;
  }

  return std::make_pair(orig_data, size);
}

} // namespace metagen
