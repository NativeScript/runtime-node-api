#pragma once

#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

// Bit 0: next flag
// Bit 0-31: key
typedef uint32_t MDSectionOffset;

typedef enum MDSectionOffsetFlag : uint32_t {
  mdSectionOffsetNext = 1u << 31,
} MDSectionOffsetFlag;

// Bits 0-2: flags (3 flags)
// Bits 3-7: kind (max 32 kinds)
typedef enum MDTypeKind : uint8_t {
  mdTypeChar,
  mdTypeSInt,
  mdTypeSShort,
  mdTypeSLong,
  mdTypeSInt64,
  mdTypeUChar,
  mdTypeUInt,
  mdTypeUShort,
  mdTypeULong,
  mdTypeUInt64,
  mdTypeFloat,
  mdTypeDouble,
  mdTypeUInt8,
  mdTypeVoid,
  mdTypeString,
  mdTypeObject,
  mdTypeClass,
  mdTypeSelector,
  mdTypeArray,
  mdTypeStruct,
  mdTypeUnion,
  mdTypePointer,
  mdTypeBool,
  // Block type is further specification of pointer type.
  // It will also point to the signature of the block in signatures section.
  mdTypeBlock,
  // Non-objc types.
  mdTypeUInt128,
  mdTypeLongDouble,
  mdTypeVector,
  mdTypeExtVector,
  mdTypeComplex,
} MDTypeKind;

typedef enum MDTypeFlag : uint8_t {
  mdTypeFlagNext = 1 << 7,
  mdTypeFlagReserved = 1 << 6,
  mdTypeFlagReserved2 = 1 << 5,
} MDTypeFlag;

typedef struct MDTypeInfo {
  MDTypeKind kind;
  uint16_t arraySize;
  // If kind is mdTypeStruct, then this key points to the definition in structs
  // section.
  MDSectionOffset structOffset;
  // For mdTypeArray, it points to the element type.
  MDTypeInfo *elementType;
  // For mdTypeUnion, it is list of pointers to union type members.
  std::vector<MDTypeInfo *> unionMembers;
  // For mdTypeBlock, it points to the signature of the block in signatures
  // section.
  MDSectionOffset blockSignature;
  // Size is not a part of the metadata, but its used here for convenience.
  size_t size;
} MDTypeInfo;

typedef enum MDVariableEvalKind : uint8_t {
  mdEvalNone,
  mdEvalInt64,
  mdEvalDouble,
  mdEvalString,
} MDVariableEvalKind;

typedef struct MDVariable {
  MDSectionOffset name;
  MDTypeInfo *type;
  MDVariableEvalKind evalKind;
  void *value;
} MDVariable;

typedef struct MDEnumMember {
  MDSectionOffset name;
  int64_t value;
} MDEnumMember;

typedef struct MDEnum {
  MDSectionOffset name;
  std::vector<MDEnumMember> members;
} MDEnum;

typedef struct MDStructField {
  MDSectionOffset name;
  uint16_t offset;
  MDTypeInfo *type;
} MDStructField;

typedef struct MDStruct {
  MDSectionOffset name;
  uint16_t size;
  std::vector<MDStructField> fields;
} MDStruct;

typedef struct MDSignature {
  MDTypeInfo *returnType;
  std::vector<MDTypeInfo *> arguments;
} MDSignature;

typedef struct MDFunction {
  MDSectionOffset name;
  MDSectionOffset framework;
  MDSectionOffset signature;
} MDFunction;

typedef enum MDMemberFlag : uint8_t {
  mdMemberFlagNull = 0,
  mdMemberProperty = 1 << 1,
  mdMemberReadonly = 1 << 2,
  mdMemberRequired = 1 << 3,
  mdMemberStatic = 1 << 4,
  mdMemberMethod = 1 << 5,
  mdMemberNext = 1 << 7,
} MDMemberFlag;

typedef struct MDMember {
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
} MDMember;

typedef struct MDProtocol {
  MDSectionOffset name;
  std::vector<MDSectionOffset> protocols;
  std::vector<MDMember> members;
} MDProtocol;

// Binary serialization/deserialization interface.
template <typename T> class MDSerializer {
public:
  virtual size_t size(T value) = 0;
  virtual void serialize(T value, void *data) = 0;
};

template <class T, class U>
concept Derived = std::is_base_of<U, T>::value;

static inline void ptr_add(void **ptr, size_t size) {
  *ptr = (void *)(((char *)(*ptr)) + size);
}

class MDStringSerde : public MDSerializer<std::string> {
public:
  size_t size(std::string value) override { return value.size() + 1; }

  void serialize(std::string value, void *data) override {
    memcpy(data, value.c_str(), value.size() + 1);
  }
};

class MDTypeInfoSerde : public MDSerializer<MDTypeInfo *> {
public:
  size_t size(MDTypeInfo *value) override {
    size_t size = 0;
    // Kind
    size += sizeof(MDTypeKind);

    switch (value->kind) {
    case mdTypeArray:
      // Array size
      size += sizeof(uint16_t);
      // Element type
      size += sizeof(MDSectionOffset);
      break;

    case mdTypeStruct:
      // Struct key
      size += sizeof(MDSectionOffset);
      break;

    case mdTypeUnion:
      // Members
      size += sizeof(MDSectionOffset) * value->unionMembers.size();
      break;

    case mdTypeBlock:
      // Signature
      size += sizeof(MDSectionOffset);
      break;

    default:
      break;
    }

    return size;
  }

  void serialize(MDTypeInfo *value, void *data) override {
    // Kind
    MDTypeKind kind = value->kind;
    memcpy(data, &kind, sizeof(MDTypeKind));
    ptr_add(&data, sizeof(MDTypeKind));

    switch (value->kind) {
    case mdTypeArray: {
      // Array size
      uint16_t arraySize = value->arraySize;
      memcpy(data, &arraySize, sizeof(uint16_t));
      ptr_add(&data, sizeof(uint16_t));
      // Element type
      MDSectionOffset elementTypeKey = value->elementType->kind;
      memcpy(data, &elementTypeKey, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
      break;
    }

    case mdTypeStruct: {
      // Struct key
      MDSectionOffset structOffset = value->structOffset;
      memcpy(data, &structOffset, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
      break;
    }

    case mdTypeUnion: {
      // Members
      size_t unionMembersSize = value->unionMembers.size();
      for (size_t i = 0; i < unionMembersSize; i++) {
        MDTypeInfo *member = value->unionMembers[i];
        size_t mSize = size(member);
        void *serialized = malloc(mSize);
        serialize(member, serialized);
        if (i != unionMembersSize - 1) {
          uint8_t *serializedPtr = (uint8_t *)serialized;
          *serializedPtr |= mdTypeFlagNext;
        }
        memcpy(data, serialized, mSize);
        ptr_add(&data, mSize);
      }
      break;
    }

    case mdTypeBlock: {
      // Signature
      MDSectionOffset signatureOffset = value->blockSignature;
      memcpy(data, &signatureOffset, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
      break;
    }

    default:
      break;
    }
  }

  std::string encode(MDTypeInfo *type) {
    std::string result;
    switch (type->kind) {
    case mdTypeVoid:
      result = "v";
      break;
    case mdTypeBool:
      result = "B";
      break;
    case mdTypeChar:
      result = "c";
      break;
    case mdTypeUChar:
      result = "C";
      break;
    case mdTypeSShort:
      result = "s";
      break;
    case mdTypeUShort:
      result = "S";
      break;
    case mdTypeSInt:
      result = "i";
      break;
    case mdTypeUInt:
      result = "I";
      break;
    case mdTypeSLong:
      result = "l";
      break;
    case mdTypeULong:
      result = "L";
      break;
    case mdTypeSInt64:
      result = "q";
      break;
    case mdTypeUInt64:
      result = "Q";
      break;
    case mdTypeFloat:
      result = "f";
      break;
    case mdTypeDouble:
      result = "d";
      break;
    case mdTypeArray:
      result = "[" + std::to_string(type->arraySize) +
               encode(type->elementType) + "]";
      break;
    case mdTypeStruct:
      // TODO
      result = "{struct_placeholder=dddd}";
      break;
    case mdTypeUnion:
      // TODO
      result = "(union_placeholder=sS)";
      break;
    case mdTypeBlock:
      result = "^?";
      break;
    case mdTypePointer:
      result = "^v";
      break;
    case mdTypeUInt8:
      result = "B";
      break;
    case mdTypeString:
      result = "*";
      break;
    case mdTypeObject:
      result = "@";
      break;
    case mdTypeClass:
      result = "#";
      break;
    case mdTypeSelector:
      result = ":";
      break;
    // just for type unique keys
    case mdTypeUInt128:
      result = "uint128";
      break;
    case mdTypeLongDouble:
      result = "longdouble";
      break;
    case mdTypeVector:
      result = "vector";
      break;
    case mdTypeExtVector:
      result = "extvector";
      break;
    case mdTypeComplex:
      result = "complex";
      break;
    }
    return result;
  }
};

class MDStructFieldSerde : public MDSerializer<MDStructField> {
public:
  size_t size(MDStructField value) override {
    size_t size = 0;
    // Name
    size += sizeof(MDSectionOffset);
    // Offset
    size += sizeof(uint16_t);
    // Type
    MDTypeInfoSerde typeSerde;
    size += typeSerde.size(value.type);
    return size;
  }

  void serialize(MDStructField value, void *data) override {
    // Name
    MDSectionOffset nameOffset = value.name;
    memcpy(data, &nameOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    // Offset
    uint16_t offset = value.offset;
    memcpy(data, &offset, sizeof(uint16_t));
    ptr_add(&data, sizeof(uint16_t));
    // Type
    MDTypeInfoSerde typeSerde;
    typeSerde.serialize(value.type, data);
  }
};

class MDStructSerde : public MDSerializer<MDStruct *> {
public:
  size_t size(MDStruct *value) override {
    size_t size = 0;
    // Name
    size += sizeof(MDSectionOffset);
    // Size
    size += sizeof(uint16_t);
    // Fields
    size += sizeof(MDStructField) * value->fields.size();
    return size;
  }

  void serialize(MDStruct *value, void *data) override {
    // Name
    MDSectionOffset nameOffset = value->name;
    memcpy(data, &nameOffset, sizeof(MDSectionOffset));
    if (!value->fields.empty()) {
      MDSectionOffset *serializedPtr = (MDSectionOffset *)data;
      *serializedPtr |= mdSectionOffsetNext;
    }
    ptr_add(&data, sizeof(MDSectionOffset));
    // Size
    uint16_t size = value->size;
    memcpy(data, &size, sizeof(uint16_t));
    ptr_add(&data, sizeof(uint16_t));
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
  }
};

inline size_t mdEvalKindSize(MDVariableEvalKind evalKind) {
  switch (evalKind) {
  case mdEvalNone:
    return 0;
  case mdEvalInt64:
    return sizeof(int64_t);
  case mdEvalDouble:
    return sizeof(double);
  case mdEvalString:
    return sizeof(MDSectionOffset);
  default:
    return 0;
  }
}

class MDVariableSerde : public MDSerializer<MDVariable *> {
public:
  size_t size(MDVariable *value) override {
    size_t size = 0;
    // Name
    size += sizeof(MDSectionOffset);
    // Kind
    size += sizeof(MDTypeKind);
    // Eval Kind
    size += sizeof(MDVariableEvalKind);
    if (value->evalKind == mdEvalNone) {
      return size;
    }
    // Value
    size += mdEvalKindSize(value->evalKind);
    return size;
  }

  void serialize(MDVariable *value, void *data) override {
    // Name
    MDSectionOffset nameOffset = value->name;
    memcpy(data, &nameOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    // Kind
    MDTypeKind kind = value->type->kind;
    memcpy(data, &kind, sizeof(MDTypeKind));
    ptr_add(&data, sizeof(MDTypeKind));
    // Eval Kind
    MDVariableEvalKind evalKind = value->evalKind;
    memcpy(data, &evalKind, sizeof(MDVariableEvalKind));
    ptr_add(&data, sizeof(MDVariableEvalKind));
    if (value->evalKind == mdEvalNone) {
      return;
    }
    // Value
    size_t evalSize = mdEvalKindSize(value->evalKind);
    memcpy(data, value->value, evalSize);
    ptr_add(&data, evalSize);
  }
};

class MDEnumMemberSerde : public MDSerializer<MDEnumMember *> {
public:
  size_t size(MDEnumMember *value) override {
    size_t size = 0;
    // Name
    size += sizeof(MDSectionOffset);
    // Value
    size += sizeof(int64_t);
    return size;
  }

  void serialize(MDEnumMember *value, void *data) override {
    // Name
    memcpy(data, &value->name, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    // Value
    memcpy(data, &value->value, sizeof(int64_t));
    ptr_add(&data, sizeof(int64_t));
  }
};

class MDEnumSerde : public MDSerializer<MDEnum *> {
public:
  size_t size(MDEnum *value) override {
    size_t size = 0;
    // Name
    size += sizeof(MDSectionOffset);
    // Members
    MDEnumMemberSerde memberSerde;
    size += value->members.size() * memberSerde.size(&value->members[0]);
    return size;
  }

  void serialize(MDEnum *value, void *data) override {
    // Name
    MDSectionOffset nameOffset = value->name;
    memcpy(data, &nameOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
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
};

class MDSignatureSerde : public MDSerializer<MDSignature *> {
public:
  size_t size(MDSignature *value) override {
    size_t size = 0;
    // Return type
    size += sizeof(MDSectionOffset);
    // Arguments
    size += sizeof(MDSectionOffset) * value->arguments.size();
    return size;
  }

  void serialize(MDSignature *value, void *data) override {
    // Return type
    auto typeInfoSerde = MDTypeInfoSerde();
    auto returnTypeSize = typeInfoSerde.size(value->returnType);
    typeInfoSerde.serialize(value->returnType, data);
    if (value->arguments.size() > 0) {
      MDTypeKind *data_kind = (MDTypeKind *)data;
      data_kind[0] = (MDTypeKind)(value->returnType->kind | mdTypeFlagNext);
    }
    ptr_add(&data, returnTypeSize);
    // Arguments
    size_t argumentsSize = value->arguments.size();
    for (size_t i = 0; i < argumentsSize; i++) {
      MDTypeInfo *arg = value->arguments[i];
      auto argTypeSize = typeInfoSerde.size(arg);
      typeInfoSerde.serialize(arg, data);
      if (i != argumentsSize - 1) {
        // If this is not the last argument, we'll write the next flag.
        MDTypeKind *data_kind = (MDTypeKind *)data;
        data_kind[0] = (MDTypeKind)(arg->kind | mdTypeFlagNext);
      }
      ptr_add(&data, argTypeSize);
    }
  }

  std::string encode(MDSignature *signature) {
    MDTypeInfoSerde typeInfoSerde;
    std::string result = typeInfoSerde.encode(signature->returnType) + "@:";
    for (auto arg : signature->arguments) {
      result += typeInfoSerde.encode(arg);
    }
    return result;
  }
};

class MDFunctionSerde : public MDSerializer<MDFunction *> {
public:
  size_t size(MDFunction *value) override {
    size_t size = 0;
    // Name
    size += sizeof(MDSectionOffset);
    // Framework
    size += sizeof(MDSectionOffset);
    // Signature
    size += sizeof(MDSectionOffset);
    return size;
  }

  void serialize(MDFunction *value, void *data) override {
    // Name
    MDSectionOffset nameOffset = value->name;
    memcpy(data, &nameOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    // Framework
    MDSectionOffset frameworkOffset = value->framework;
    memcpy(data, &frameworkOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    // Signature
    MDSectionOffset signatureOffset = value->signature;
    memcpy(data, &signatureOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
  }
};

class MDMemberSerde : public MDSerializer<MDMember> {
public:
  size_t size(MDMember value) override {
    size_t size = 0;
    // Flags
    size += sizeof(MDMemberFlag);

    if (value.flags & mdMemberProperty) {
      // Name
      size += sizeof(MDSectionOffset);
      // Getter selector
      size += sizeof(MDSectionOffset);
      if ((value.flags & mdMemberReadonly) == 0) {
        // Setter selector
        size += sizeof(MDSectionOffset);
      }
      // Getter signature
      size += sizeof(MDSectionOffset);
      if ((value.flags & mdMemberReadonly) == 0) {
        // Setter signature
        size += sizeof(MDSectionOffset);
      }
    } else {
      // Method selector
      size += sizeof(MDSectionOffset);
      // Method signature
      size += sizeof(MDSectionOffset);
    }

    return size;
  }

  void serialize(MDMember value, void *data) override {
    // Flags
    MDMemberFlag flags = value.flags;
    memcpy(data, &flags, sizeof(MDMemberFlag));
    ptr_add(&data, sizeof(MDMemberFlag));

    if (value.flags & mdMemberProperty) {
      // Name
      MDSectionOffset nameKey = value.name;
      memcpy(data, &nameKey, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
      // Getter selector
      MDSectionOffset getterSelectorKey = value.getterSelector;
      memcpy(data, &getterSelectorKey, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
      if ((value.flags & mdMemberReadonly) == 0) {
        // Setter selector
        MDSectionOffset setterSelectorKey = value.setterSelector;
        memcpy(data, &setterSelectorKey, sizeof(MDSectionOffset));
        ptr_add(&data, sizeof(MDSectionOffset));
      }
      // Getter signature
      MDSectionOffset getterSignatureKey = value.getterSignature;
      memcpy(data, &getterSignatureKey, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
      if ((value.flags & mdMemberReadonly) == 0) {
        // Setter signature
        MDSectionOffset setterSignatureKey = value.setterSignature;
        memcpy(data, &setterSignatureKey, sizeof(MDSectionOffset));
        ptr_add(&data, sizeof(MDSectionOffset));
      }
    } else {
      // Method selector
      MDSectionOffset methodSelectorKey = value.methodSelector;
      memcpy(data, &methodSelectorKey, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
      // Method signature
      MDSectionOffset methodSignatureKey = value.signature;
      memcpy(data, &methodSignatureKey, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
    }
  }
};

class MDProtocolSerde : public MDSerializer<MDProtocol *> {
public:
  size_t size(MDProtocol *value) override {
    auto memberSerde = MDMemberSerde();
    size_t size = 0;
    // Name
    size += sizeof(MDSectionOffset);
    // Protocols
    size_t protocolsSize = value->protocols.size();
    if (protocolsSize > 0) {
      size += sizeof(MDSectionOffset) * protocolsSize;
    } else {
      size += sizeof(MDSectionOffset);
    }
    // Members
    size_t membersSize = value->members.size();
    if (membersSize > 0) {
      for (auto &member : value->members) {
        size += memberSerde.size(member);
      }
    } else {
      size += sizeof(MDMemberFlag);
    }
    return size;
  }

  void serialize(MDProtocol *value, void *data) override {
    auto memberSerde = MDMemberSerde();
    // Name
    MDSectionOffset nameKey = value->name;
    memcpy(data, &nameKey, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    // Protocols
    size_t protocolsSize = value->protocols.size();
    if (protocolsSize > 0) {
      for (size_t i = 0; i < protocolsSize; i++) {
        MDSectionOffset protocol = value->protocols[i];
        if (i == protocolsSize - 1) {
          protocol |= mdSectionOffsetNext;
        }
        memcpy(data, &protocol, sizeof(MDSectionOffset));
        ptr_add(&data, sizeof(MDSectionOffset));
      }
    } else {
      MDSectionOffset nullOffset = 0;
      memcpy(data, &nullOffset, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
    }
    // Members
    size_t membersSize = value->members.size();
    if (membersSize > 0) {
      for (auto &member : value->members) {
        memberSerde.serialize(member, data);
        ptr_add(&data, memberSerde.size(member));
      }
    } else {
      MDSectionOffset nullOffset = 0;
      memcpy(data, &nullOffset, sizeof(MDSectionOffset));
      ptr_add(&data, sizeof(MDSectionOffset));
    }
  }
};

template <typename T, Derived<MDSerializer<T>> S>
class MDSection : public std::unordered_map<MDSectionOffset, T> {
public:
  size_t section_offset;
  size_t section_size;
  S serde;
  std::unordered_map<std::string, MDSectionOffset> stringToKey;

  MDSection(S serde) : section_offset(0), section_size(0), serde(serde) {}

  MDSectionOffset add(T value, std::string strKey) {
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

#define MD_HEADER_MAGIC_SIZE 4
#define MD_HEADER_MAGIC "NSMD"
#define MD_HEADER_VERSION_SIZE 2
#define MD_HEADER_VERSION 1
#define MD_HEADER_SIZE (MD_HEADER_MAGIC_SIZE + MD_HEADER_VERSION_SIZE)

#define MD_NUM_SECTIONS 7

typedef enum MDSectionID : uint8_t {
  mdSectionStrings,
  mdSectionConstants,
  mdSectionEnums,
  mdSectionSignatures,
  mdSectionFunctions,
  mdSectionProtocols,
  // mdSectionClasses,
  mdSectionStructs,
} MDSectionID;

class MDMetadataWriter {
public:
  /// Sections
  MDSection<std::string, MDStringSerde> strings;
  MDSection<MDVariable *, MDVariableSerde> constants;
  MDSection<MDEnum *, MDEnumSerde> enums;
  MDSection<MDSignature *, MDSignatureSerde> signatures;
  MDSection<MDFunction *, MDFunctionSerde> functions;
  MDSection<MDProtocol *, MDProtocolSerde> protocols;
  // MDSection<MDClass *, MDClassSerde> classes;
  MDSection<MDStruct *, MDStructSerde> structs;

  MDMetadataWriter()
      : strings(MDStringSerde()), signatures(MDSignatureSerde()),
        protocols(MDProtocolSerde()), enums(MDEnumSerde()),
        constants(MDVariableSerde()), functions(MDFunctionSerde()),
        structs(MDStructSerde()) {}

  std::pair<void *, size_t> serialize() {
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
    // size += classes.section_size;

    // Structs
    size += structs.section_size;

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

    // MDSectionOffset classesOffset = protocolsOffset + protocols.section_size;
    // memcpy(data, &classesOffset, sizeof(MDSectionOffset));
    // ptr_add(&data, sizeof(MDSectionOffset));

    MDSectionOffset structsOffset =
        protocolsOffset + (MDSectionOffset)protocols.section_size;
    memcpy(data, &structsOffset, sizeof(MDSectionOffset));
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

    // TODO
    // Classes

    // Structs
    offset = 0;
    while (offset < structs.section_size) {
      MDStruct *struct_ = structs[offset];
      size_t serializedSize = structs.serde.size(struct_);
      structs.serde.serialize(struct_, data);
      ptr_add(&data, serializedSize);
      offset += serializedSize;
    }

    return std::make_pair(orig_data, size);
  }
};

typedef char MDHeaderMagic[MD_HEADER_MAGIC_SIZE];

class MDMetadataReader {
public:
  void *data;

  MDSectionOffset stringsOffset;
  MDSectionOffset constantsOffset;
  MDSectionOffset enumsOffset;
  MDSectionOffset signaturesOffset;
  MDSectionOffset functionsOffset;
  MDSectionOffset protocolsOffset;
  // MDSectionOffset classesOffset;
  MDSectionOffset structsOffset;

  MDMetadataReader(void *data) : data(data) {
    MDHeaderMagic magic;
    memcpy(magic, data, MD_HEADER_MAGIC_SIZE);
    if (memcmp(magic, MD_HEADER_MAGIC, MD_HEADER_MAGIC_SIZE) != 0) {
      fprintf(stderr, "Invalid metadata header magic\n");
      exit(1);
    }
    ptr_add(&data, MD_HEADER_MAGIC_SIZE);

    uint16_t version;
    memcpy(&version, data, MD_HEADER_VERSION_SIZE);
    if (version != MD_HEADER_VERSION) {
      fprintf(stderr, "Invalid metadata header version\n");
      exit(1);
    }
    ptr_add(&data, MD_HEADER_VERSION_SIZE);

    stringsOffset =
        MD_HEADER_SIZE + sizeof(MDSectionOffset) * (MD_NUM_SECTIONS - 1);
    constantsOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
    enumsOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
    signaturesOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
    functionsOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
    protocolsOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
    // classesOffset = *(MDSectionOffset *)data;
    // ptr_add(&data, sizeof(MDSectionOffset));
    structsOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
  }

  inline char *resolveString(MDSectionOffset offset) {
    return (char *)data + stringsOffset + offset;
  }

  inline MDSectionOffset getOffset(MDSectionOffset offset) {
    return *(MDSectionOffset *)((char *)data + offset);
  }

  inline char *getString(MDSectionOffset offset) {
    MDSectionOffset stringOffset = getOffset(offset);
    return resolveString(stringOffset);
  }

  inline MDTypeKind getTypeKind(MDSectionOffset offset) {
    return *(MDTypeKind *)((char *)data + offset);
  }

  inline uint16_t getArraySize(MDSectionOffset offset) {
    return *(uint16_t *)((char *)data + offset);
  }

  inline int64_t getEnumValue(MDSectionOffset offset) {
    return *(int64_t *)((char *)data + offset);
  }

  inline MDMemberFlag getMemberFlag(MDSectionOffset offset) {
    return *(MDMemberFlag *)((char *)data + offset);
  }

  inline MDVariableEvalKind getVariableEvalKind(MDSectionOffset offset) {
    return *(MDVariableEvalKind *)((char *)data + offset);
  }

  inline double getDouble(MDSectionOffset offset) {
    return *(double *)((char *)data + offset);
  }

  inline int64_t getInt64(MDSectionOffset offset) {
    return *(int64_t *)((char *)data + offset);
  }
};