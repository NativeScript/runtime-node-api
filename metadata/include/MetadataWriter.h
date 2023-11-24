#pragma once

#include "IR.h"
#include "Metadata.h"
#include "Util.h"
#include "clang-c/Index.h"

namespace metagen {

struct MDTypeInfo {
  MDTypeKind kind;
  uint16_t arraySize;
  // If kind is mdTypeStruct, then this key points to the definition in structs
  // section.
  MDSectionOffset structOffset;
  // For mdTypeClassObject, it points to the definition in the classes section.
  MDSectionOffset classOffset;
  // For mdTypeClassObject or mdTypeProtocolObject, it can also point to the
  // definition in the protocols section.
  std::vector<MDSectionOffset> protocolOffsets;
  // For mdTypeArray, it points to the element type.
  MDTypeInfo *elementType;
  // For mdTypePointer, it points to the pointee type.
  MDTypeInfo *pointeeType;
  // For mdTypeBlock, it points to the signature of the block in signatures
  // section.
  // For mdTypeFunctionPointer, it points to the signature of the function in
  // signatures section.
  MDSectionOffset signatureOffset;
  // Size is not a part of the metadata, but its used here for convenience.
  size_t size;
};

struct MDVariable {
  MDSectionOffset name;
  MDTypeInfo *type;
  MDVariableEvalKind evalKind;
  void *value;
};

struct MDEnumMember {
  MDSectionOffset name;
  int64_t value;
};

struct MDEnum {
  MDSectionOffset name;
  std::vector<MDEnumMember> members;
};

struct MDStructField {
  MDSectionOffset name;
  uint16_t offset;
  MDTypeInfo *type;
};

struct MDStruct {
  MDSectionOffset name;
  uint16_t size;
  std::vector<MDStructField> fields;
};

struct MDUnionField {
  MDSectionOffset name;
  MDTypeInfo *type;
};

struct MDUnion {
  MDSectionOffset name;
  uint16_t size;
  std::vector<MDUnionField> fields;
};

struct MDSignature {
  MDTypeInfo *returnType;
  std::vector<MDTypeInfo *> arguments;
  bool isVariadic;
};

struct MDFunction {
  MDSectionOffset name;
  MDSectionOffset signature;
};

struct MDMember {
  MDMemberFlag flags;

  // Only for methods.
  MDSectionOffset methodSelector;
  MDSectionOffset signature;

  // Only for properties.
  MDSectionOffset name;
  MDSectionOffset getterSelector;
  MDSectionOffset setterSelector;
  MDSectionOffset getterSignature;
  MDSectionOffset setterSignature;
};

struct MDProtocol {
  MDSectionOffset name;
  std::vector<MDSectionOffset> protocols;
  std::vector<MDMember *> members;
};

struct MDClass {
  MDSectionOffset name;
  std::vector<MDSectionOffset> protocols;
  MDSectionOffset superclass;
  std::vector<MDMember *> members;
};

// Binary serialization/deserialization interface.
template <typename T> class MDSerializer {
public:
  virtual size_t size(T value) = 0;
  virtual void serialize(T value, void *data) = 0;
};

template <class T, class U>
concept Derived = std::is_base_of<U, T>::value;

#define addsize(expr) size += sizeof(expr)

#define binwrite(expr)                                                         \
  memcpy(data, &expr, sizeof(expr));                                           \
  ptr_add(&data, sizeof(expr))

class MDStringSerde : public MDSerializer<std::string> {
public:
  size_t size(std::string value) override;

  void serialize(std::string value, void *data) override;
};

class MDTypeInfoSerde : public MDSerializer<MDTypeInfo *> {
public:
  size_t size(MDTypeInfo *value) override;

  void serialize(MDTypeInfo *value, void *data) override;

  std::string encode(MDTypeInfo *type);
};

class MDStructFieldSerde : public MDSerializer<MDStructField> {
public:
  size_t size(MDStructField value) override;

  void serialize(MDStructField value, void *data) override;
};

class MDStructSerde : public MDSerializer<MDStruct *> {
public:
  size_t size(MDStruct *value) override;

  void serialize(MDStruct *value, void *data) override;
};

class MDUnionFieldSerde : public MDSerializer<MDUnionField> {
public:
  size_t size(MDUnionField value) override;

  void serialize(MDUnionField value, void *data) override;
};

class MDUnionSerde : public MDSerializer<MDUnion *> {
public:
  size_t size(MDUnion *value) override;

  void serialize(MDUnion *value, void *data) override;
};

class MDVariableSerde : public MDSerializer<MDVariable *> {
public:
  size_t size(MDVariable *value) override;

  void serialize(MDVariable *value, void *data) override;
};

class MDEnumMemberSerde : public MDSerializer<MDEnumMember *> {
public:
  size_t size(MDEnumMember *value) override;

  void serialize(MDEnumMember *value, void *data) override;
};

class MDEnumSerde : public MDSerializer<MDEnum *> {
public:
  size_t size(MDEnum *value) override;

  void serialize(MDEnum *value, void *data) override;
};

class MDSignatureSerde : public MDSerializer<MDSignature *> {
public:
  size_t size(MDSignature *value) override;

  void serialize(MDSignature *value, void *data) override;

  std::string encode(MDSignature *signature);
};

class MDFunctionSerde : public MDSerializer<MDFunction *> {
public:
  size_t size(MDFunction *value) override;

  void serialize(MDFunction *value, void *data) override;
};

class MDMemberSerde : public MDSerializer<MDMember *> {
public:
  size_t size(MDMember *value) override;

  void serialize(MDMember *value, void *data) override;
};

class MDProtocolSerde : public MDSerializer<MDProtocol *> {
public:
  size_t size(MDProtocol *value) override;

  void serialize(MDProtocol *value, void *data) override;
};

class MDClassSerde : public MDSerializer<MDClass *> {
public:
  size_t size(MDClass *value) override;

  void serialize(MDClass *value, void *data) override;
};

template <typename T, Derived<MDSerializer<T>> S>
class MDSection : public std::unordered_map<MDSectionOffset, T> {
public:
  size_t section_offset;
  size_t section_size;
  S serde;
  std::unordered_map<std::string, MDSectionOffset> stringToKey;

  MDSection(S serde) : section_offset(0), section_size(0), serde(serde) {}

  inline MDSectionOffset add(T value, std::string strKey) {
    if (stringToKey.contains(strKey)) {
      return stringToKey[strKey];
    }
    MDSectionOffset key = section_offset;
    size_t valueSize = serde.size(value);
    section_offset += valueSize;
    section_size += valueSize;
    this->insert(std::make_pair(key, value));
    stringToKey.insert(std::make_pair(strKey, key));
    return key;
  }
};

struct MDResolvable {
  std::string name;
  MDSectionOffset *offset;
};

struct MDSignatureResolvable {
  MDSignature *signature;
  MDSectionOffset *offset;
};

class MDMetadataWriter {
public:
  MDMetadataWriter(MetadataFactory &factory)
      : factory(factory), strings(MDStringSerde()),
        constants(MDVariableSerde()), enums(MDEnumSerde()),
        signatures(MDSignatureSerde()), functions(MDFunctionSerde()),
        protocols(MDProtocolSerde()), classes(MDClassSerde()),
        structs(MDStructSerde()), unions(MDUnionSerde()) {}

  MDTypeInfo *getTypeInfo(TypeSpec &type);

  MDMember *memberFromDecl(MemberDecl &decl);

  void write(VariableDecl &decl);
  void write(EnumDecl &decl);
  MDSectionOffset write(StructDecl &decl);
  MDSectionOffset write(UnionDecl &decl);
  void write(FunctionDecl &decl);
  MDSectionOffset write(ProtocolDecl &decl);
  MDSectionOffset write(ClassDecl &decl);

  void write();

  std::pair<void *, size_t> serialize();

  MetadataFactory &factory;

  // Sections
  MDSection<std::string, MDStringSerde> strings;
  MDSection<MDVariable *, MDVariableSerde> constants;
  MDSection<MDEnum *, MDEnumSerde> enums;
  MDSection<MDSignature *, MDSignatureSerde> signatures;
  MDSection<MDFunction *, MDFunctionSerde> functions;
  MDSection<MDProtocol *, MDProtocolSerde> protocols;
  MDSection<MDClass *, MDClassSerde> classes;
  MDSection<MDStruct *, MDStructSerde> structs;
  MDSection<MDUnion *, MDUnionSerde> unions;

  // Resolvables
  std::vector<MDResolvable> classResolvables;
  std::vector<MDResolvable> protocolResolvables;
  std::vector<MDResolvable> structResolvables;
  std::vector<MDSignatureResolvable> signatureResolvables;
};

} // namespace metagen
