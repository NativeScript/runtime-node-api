#pragma once

#include <cstddef>
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

namespace metagen {

// Bit 0: next flag
// Bit 0-31: key
typedef uint32_t MDSectionOffset;

// Since beginning of the section, 0 can point to the first element,
// so we use this value to indicate null.
#define MD_SECTION_OFFSET_NULL ((MDSectionOffset)0xFFFFFFFF >> 1)

enum MDSectionOffsetFlag : uint32_t {
  mdSectionOffsetNext = 1u << 31,
};

// Bits 0-1: flags (2 flags)
// Bits 2-7: kind (max 64 kinds)
enum MDTypeKind : uint8_t {
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

  // Objects are classified into 4 types:
  // 1. id is any object, we have to do lookup for class at runtime
  mdTypeAnyObject,
  // 2. id<protocol> is protocol object, protocol definition offset is resolved
  // beforehand
  mdTypeProtocolObject,
  // 3. Class * is class object, class definition offset is resolved beforehand
  mdTypeClassObject,
  // 4. Instance Type Object
  mdTypeInstanceObject,
  // 5. NSString Type Object
  mdTypeNSStringObject,

  mdTypeClass,
  mdTypeSelector,
  mdTypeArray,
  mdTypeStruct,
  mdTypePointer,
  mdTypeOpaquePointer,
  mdTypeFunctionPointer,
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
};

enum MDTypeFlag : uint8_t {
  mdTypeFlagNext = 1 << 7,
  mdTypeFlagVariadic = 1 << 6,
};

enum MDVariableEvalKind : uint8_t {
  mdEvalNone,
  mdEvalInt64,
  mdEvalDouble,
  mdEvalString,
};

enum MDMemberFlag : uint8_t {
  mdMemberFlagNull = 0,
  mdMemberProperty = 1 << 0,
  mdMemberReadonly = 1 << 1,
  mdMemberRequired = 1 << 2,
  mdMemberStatic = 1 << 3,
  mdMemberMethod = 1 << 4,
  mdMemberReturnOwned = 1 << 5,
  mdMemberIsInit = 1 << 6,
  mdMemberNext = 1 << 7,
};

#define MD_HEADER_MAGIC_SIZE 4
#define MD_HEADER_MAGIC "NSMD"
#define MD_HEADER_VERSION_SIZE 2
#define MD_HEADER_VERSION 1
#define MD_HEADER_SIZE (MD_HEADER_MAGIC_SIZE + MD_HEADER_VERSION_SIZE)

#define MD_NUM_SECTIONS 9

static inline void ptr_add(void **ptr, size_t size) {
  *ptr = (void *)(((char *)(*ptr)) + size);
}

} // namespace metagen
