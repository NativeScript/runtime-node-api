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
} MDTypeInfo;

typedef struct MDStructField {
  MDSectionOffset name;
  uint16_t offset;
  uint16_t size;
  MDTypeInfo *type;
} MDStructField;

typedef struct MDStruct {
  MDSectionOffset name;
  std::vector<MDStructField> fields;
} MDStruct;

typedef struct MDSignature {
  MDTypeInfo *returnType;
  std::vector<MDTypeInfo *> arguments;
} MDSignature;

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
template <typename T> class MDSerde {
public:
  virtual size_t size(T value) = 0;
  virtual void serialize(T value, void *data) = 0;
  virtual T deserialize(void *data, size_t *offset) = 0;
};

template <class T, class U>
concept Derived = std::is_base_of<U, T>::value;

static inline void ptr_add(void **ptr, size_t size) {
  *ptr = (void *)(((char *)(*ptr)) + size);
}

class MDStringSerde : public MDSerde<std::string> {
public:
  size_t size(std::string value) override { return value.size() + 1; }

  void serialize(std::string value, void *data) override {
    memcpy(data, value.c_str(), value.size() + 1);
  }

  std::string deserialize(void *data, size_t *offset) override {
    *offset += strlen((char *)data) + 1;
    return std::string((char *)data);
  }
};

class MDTypeInfoSerde : public MDSerde<MDTypeInfo *> {
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

    default:
      break;
    }
  }

  MDTypeInfo *deserialize(void *data, size_t *offset) override {
    *offset += 0;
    return nullptr;
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
      result = "{struct_placeholder=dddd}";
      break;
    case mdTypeUnion:
      result = "(union_placeholder=sS)";
      break;
    case mdTypeBlock:
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
    }
    return result;
  }
};

class MDSignatureSerde : public MDSerde<MDSignature *> {
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

  MDSignature *deserialize(void *data, size_t *offset) override {
    *offset += 0;
    return nullptr;
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

class MDMemberSerde : public MDSerde<MDMember> {
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

  MDMember deserialize(void *data, size_t *offset) override {
    MDMember member{};
    *offset += 0;
    return member;
  }
};

class MDProtocolSerde : public MDSerde<MDProtocol *> {
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

  MDProtocol *deserialize(void *data, size_t *offset) override {
    *offset += 0;
    return nullptr;
  }
};

template <typename T, Derived<MDSerde<T>> S>
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
#define MD_HEADER_VERSION_SIZE 1
#define MD_HEADER_VERSION 1

#define MD_NUM_SECTIONS 3

typedef enum MDSectionID : uint8_t {
  mdSectionStrings,
  mdSectionignatures,
  mdSectionProtocols,
} MDSectionID;

class MDMetadata {
public:
  /// Sections

  MDSection<std::string, MDStringSerde> strings;
  MDSection<MDSignature *, MDSignatureSerde> signatures;
  MDSection<MDProtocol *, MDProtocolSerde> protocols;

  MDMetadata()
      : strings(MDStringSerde()), signatures(MDSignatureSerde()),
        protocols(MDProtocolSerde()) {}

  std::pair<void *, size_t> serialize() {
    // Header
    size_t size = MD_HEADER_MAGIC_SIZE + MD_HEADER_VERSION_SIZE;
    // Section Offsets
    size_t section_offsets = sizeof(MDSectionOffset) * MD_NUM_SECTIONS;
    size += section_offsets;

    // Strings
    size += strings.section_size;
    // Signatures
    size += signatures.section_size;
    // Protocols
    size += protocols.section_size;

    void *orig_data = malloc(size);
    void *data = orig_data;

    // Header
    memcpy(data, MD_HEADER_MAGIC, MD_HEADER_MAGIC_SIZE);
    ptr_add(&data, MD_HEADER_MAGIC_SIZE);
    uint16_t version = MD_HEADER_VERSION;
    memcpy(data, &version, MD_HEADER_VERSION_SIZE);
    ptr_add(&data, MD_HEADER_VERSION_SIZE);

    // Section Offsets
    MDSectionOffset baseSectionOffset =
        MD_HEADER_MAGIC_SIZE + MD_HEADER_VERSION_SIZE + section_offsets;
    MDSectionOffset stringsOffset = baseSectionOffset;
    memcpy(data, &stringsOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    MDSectionOffset signaturesOffset = stringsOffset + strings.section_size;
    memcpy(data, &signaturesOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));
    MDSectionOffset protocolsOffset =
        signaturesOffset + signatures.section_size;
    memcpy(data, &protocolsOffset, sizeof(MDSectionOffset));
    ptr_add(&data, sizeof(MDSectionOffset));

    size_t offset = 0;

    // Strings
    while (offset < strings.section_size) {
      std::string str = strings[offset];
      size_t serializedSize = strings.serde.size(str);
      strings.serde.serialize(str, data);
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

    // Protocols
    offset = 0;
    while (offset < protocols.section_size) {
      MDProtocol *protocol = protocols[offset];
      size_t serializedSize = protocols.serde.size(protocol);
      protocols.serde.serialize(protocol, data);
      ptr_add(&data, serializedSize);
      offset += serializedSize;
    }

    return std::make_pair(orig_data, size);
  }
};
