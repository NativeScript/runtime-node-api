#pragma once

#include "Metadata.h"

namespace metagen {

typedef char MDHeaderMagic[MD_HEADER_MAGIC_SIZE];

class MDMetadataReader {
public:
  void *data;
  size_t size;

  MDSectionOffset stringsOffset;
  MDSectionOffset constantsOffset;
  MDSectionOffset enumsOffset;
  MDSectionOffset signaturesOffset;
  MDSectionOffset functionsOffset;
  MDSectionOffset protocolsOffset;
  MDSectionOffset classesOffset;
  MDSectionOffset structsOffset;
  MDSectionOffset unionsOffset;

  MDMetadataReader(void *data, size_t size) : data(data), size(size) {
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
    classesOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
    structsOffset = *(MDSectionOffset *)data;
    ptr_add(&data, sizeof(MDSectionOffset));
    unionsOffset = *(MDSectionOffset *)data;
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

} // namespace metagen
