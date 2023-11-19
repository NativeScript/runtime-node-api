#include "MetadataWriter.h"

namespace metagen {

MDSectionOffset MDMetadataWriter::write(StructDecl &decl) {
  if (decl.mdOffset != MD_SECTION_OFFSET_NULL) {
    return decl.mdOffset;
  }

  MDStruct *mdStruct = new MDStruct();

  mdStruct->name = strings.add(decl.name, decl.name);
  mdStruct->size = decl.size;

  for (StructFieldDecl &f : decl.fields) {
    MDStructField field;
    field.name = strings.add(f.name, f.name);
    field.offset = f.offset;
    field.type = getTypeInfo(f.type);
    mdStruct->fields.push_back(field);
  }

  decl.mdOffset = structs.add(mdStruct, decl.name);
  return decl.mdOffset;
}

MDSectionOffset MDMetadataWriter::write(UnionDecl &decl) {
  if (decl.mdOffset != MD_SECTION_OFFSET_NULL) {
    return decl.mdOffset;
  }

  MDUnion *mdUnion = new MDUnion();

  mdUnion->name = strings.add(decl.name, decl.name);
  mdUnion->size = decl.size;

  for (UnionFieldDecl &f : decl.fields) {
    MDUnionField field;
    field.name = strings.add(f.name, f.name);
    field.type = getTypeInfo(f.type);
    mdUnion->fields.push_back(field);
  }

  decl.mdOffset = unions.add(mdUnion, decl.name);
  return decl.mdOffset;
}

size_t MDStructFieldSerde::size(MDStructField value) {
  size_t size = 0;
  // Name
  addsize(value.name);
  // Offset
  addsize(value.offset);
  // Type
  MDTypeInfoSerde typeSerde;
  size += typeSerde.size(value.type);
  return size;
}

void MDStructFieldSerde::serialize(MDStructField value, void *data) {
  // Name
  binwrite(value.name);
  // Offset
  binwrite(value.offset);
  // Type
  MDTypeInfoSerde typeSerde;
  typeSerde.serialize(value.type, data);
}

size_t MDStructSerde::size(MDStruct *value) {
  size_t size = 0;
  // Name
  addsize(value->name);
  // Size
  addsize(value->size);
  // Fields
  MDStructFieldSerde fieldSerde;
  for (MDStructField field : value->fields) {
    size += fieldSerde.size(field);
  }
  if (value->fields.empty()) {
    // Write MD_SECTION_OFFSET_NULL to indicate there are no public fields.
    // We just expose a raw Uint8Array in `data` prop for the struct.
    size += sizeof(MDSectionOffset);
  }
  return size;
}

void MDStructSerde::serialize(MDStruct *value, void *data) {
  // Name
  binwrite(value->name);
  // Size
  binwrite(value->size);
  // Fields
  MDStructFieldSerde fieldSerde;
  for (size_t i = 0; i < value->fields.size(); i++) {
    MDStructField field = value->fields[i];
    fieldSerde.serialize(field, data);
    if (i != value->fields.size() - 1) {
      MDSectionOffset *serializedPtr = (MDSectionOffset *)data;
      *serializedPtr |= mdSectionOffsetNext;
    }
    ptr_add(&data, fieldSerde.size(field));
  }
  if (value->fields.empty()) {
    MDSectionOffset nullOffset = MD_SECTION_OFFSET_NULL;
    binwrite(nullOffset);
  }
}

size_t MDUnionFieldSerde::size(MDUnionField value) {
  size_t size = 0;
  // Name
  addsize(value.name);
  // Type
  MDTypeInfoSerde typeSerde;
  size += typeSerde.size(value.type);
  return size;
}

void MDUnionFieldSerde::serialize(MDUnionField value, void *data) {
  // Name
  binwrite(value.name);
  // Type
  MDTypeInfoSerde typeSerde;
  typeSerde.serialize(value.type, data);
}

size_t MDUnionSerde::size(MDUnion *value) {
  size_t size = 0;
  // Name
  addsize(value->name);
  // Size
  addsize(value->size);
  // Fields
  MDUnionFieldSerde fieldSerde;
  for (MDUnionField field : value->fields) {
    size += fieldSerde.size(field);
  }
  return size;
}

void MDUnionSerde::serialize(MDUnion *value, void *data) {
  // Name
  binwrite(value->name);
  // Size
  binwrite(value->size);
  // Fields
  MDUnionFieldSerde fieldSerde;
  for (size_t i = 0; i < value->fields.size(); i++) {
    MDUnionField field = value->fields[i];
    fieldSerde.serialize(field, data);
    if (i != value->fields.size() - 1) {
      MDSectionOffset *serializedPtr = (MDSectionOffset *)data;
      *serializedPtr |= mdSectionOffsetNext;
    }
    ptr_add(&data, fieldSerde.size(field));
  }
}

} // namespace metagen
