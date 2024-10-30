#include "IR.h"
#include "Metadata.h"
#include "MetadataWriter.h"
#include <cassert>
#include <string>

namespace metagen {

MDTypeInfo *MDMetadataWriter::getTypeInfo(TypeSpec &type) {
  MDTypeInfo *info = new MDTypeInfo();

  switch (type.kind) {
  case kTypeVoid:
    info->kind = mdTypeVoid;
    break;

  case kTypeBool:
    info->kind = mdTypeBool;
    break;
  case kTypeU8:
    info->kind = mdTypeUInt8;
    break;
  case kTypeU16:
    info->kind = mdTypeUShort;
    break;
  case kTypeU32:
    info->kind = mdTypeUInt;
    break;
  case kTypeU64:
    info->kind = mdTypeUInt64;
    break;
  case kTypeI8:
    info->kind = mdTypeChar;
    break;
  case kTypeI16:
    info->kind = mdTypeSShort;
    break;
  case kTypeI32:
    info->kind = mdTypeSInt;
    break;
  case kTypeI64:
    info->kind = mdTypeSInt64;
    break;
  case kTypeF32:
    info->kind = mdTypeFloat;
    break;
  case kTypeF64:
    info->kind = mdTypeDouble;
    break;

  case kTypeU128:
  case kTypeI128:
    info->kind = mdTypeUInt128;
    break;

  case kTypeString:
    info->kind = mdTypeString;
    break;

  case kTypePointer: {
    if (type.pointee->kind == kTypeVoid) {
      info->kind = mdTypeOpaquePointer;
    } else {
      info->kind = mdTypePointer;
      info->pointeeType = getTypeInfo(*type.pointee);
    }
    break;
  }

  case kTypeCallback: {
    MDSignature *sig = new MDSignature();
    for (size_t i = 0; i < type.callbackArgs.size(); i++) {
      auto arg = type.callbackArgs[i];
      sig->arguments.emplace_back(getTypeInfo(arg));
    }
    sig->returnType = getTypeInfo(*type.callbackReturn);
    sig->isVariadic = type.isVariadic;
    info->kind = mdTypeBlock;
    MDSignatureResolvable res{sig, &info->signatureOffset};
    signatureResolvables.emplace_back(res);
    break;
  }

  case kTypeFunctionPointer: {
    MDSignature *sig = new MDSignature();
    for (size_t i = 0; i < type.callbackArgs.size(); i++) {
      auto arg = type.callbackArgs[i];
      sig->arguments.emplace_back(getTypeInfo(arg));
    }
    sig->returnType = getTypeInfo(*type.callbackReturn);
    sig->isVariadic = type.isVariadic;
    info->kind = mdTypeFunctionPointer;
    MDSignatureResolvable res{sig, &info->signatureOffset};
    signatureResolvables.emplace_back(res);
    break;
  }

  case kTypeObject: {
    if (type.className.empty()) {
      if (factory.protocols.contains(type.protocolName)) {
        MDResolvable res{type.protocolName, &info->protocolOffsets.emplace_back(
                                                MD_SECTION_OFFSET_NULL)};
        protocolResolvables.emplace_back(res);
      }
      if (info->protocolOffsets.empty()) {
        info->kind = mdTypeAnyObject;
      } else {
        info->kind = mdTypeProtocolObject;
      }
    } else {
      if (type.className == "NSString") {
        info->kind = mdTypeNSStringObject;
      } else if (factory.classes.contains(type.className)) {
        info->kind = mdTypeClassObject;
        MDResolvable res{type.className, &info->classOffset};
        classResolvables.emplace_back(res);
      } else {
        info->kind = mdTypeAnyObject;
      }
    }
    break;
  }

  case kTypeInstanceObject:
    info->kind = mdTypeInstanceObject;
    break;

  case kTypeAnyObject:
    info->kind = mdTypeAnyObject;
    break;

  case kTypeEnum:
    info->kind = mdTypeSInt64;
    break;

  case kTypeRecord:
    info->kind = mdTypeStruct;
    if (factory.structs.contains(type.recordName)) {
      MDResolvable res{type.recordName, &info->structOffset};
      structResolvables.emplace_back(res);
    } else if (factory.unions.contains(type.recordName)) {
      UnionDecl &decl = factory.unions[type.recordName];
      info->structOffset = write(decl) | mdSectionOffsetNext;
    } else {
      info->structOffset = MD_SECTION_OFFSET_NULL;
      std::cout << "Unknown record: " << type.recordName << std::endl;
      // assert(false && "Unknown record: not found in structs or unions");
    }
    break;

  case kTypeConstArray:
    info->kind = mdTypeArray;
    info->arraySize = type.constArraySize;
    info->elementType = getTypeInfo(*type.arrayElement);
    break;

  case kTypeIncompleteArray:
    info->kind = mdTypePointer;
    info->pointeeType = getTypeInfo(*type.arrayElement);
    break;

  case kTypeVector:
    info->kind = mdTypeVector;
    break;

  case kTypeExtVector:
    info->kind = mdTypeExtVector;
    break;

  case kTypeComplex:
    info->kind = mdTypeComplex;
    break;

  case kTypeSelector:
    info->kind = mdTypeSelector;
    break;

  case kTypeUnknown:
    std::cout << "Unknown type spec: " << type.unknownInfo << std::endl;
    assert(false && "Unknown type spec");
    break;

  default:
    std::cout << "Unknown type spec kind: " << type.kind << std::endl;
    assert(false && "Unknown type spec kind");
    break;
  }

  return info;
}

size_t MDTypeInfoSerde::size(MDTypeInfo *value) {
  size_t size = 0;
  // Kind
  addsize(value->kind);

  switch (value->kind) {
  case mdTypeArray: {
    // Array size
    addsize(value->arraySize);
    // Element type
    size += this->size(value->elementType);
    break;
  }

  case mdTypeStruct:
    // Struct key
    addsize(value->structOffset);
    break;

  case mdTypeBlock:
  case mdTypeFunctionPointer:
    // Signature
    addsize(value->signatureOffset);
    break;

  case mdTypeProtocolObject:
    // Protocols list
    size += sizeof(MDSectionOffset) * value->protocolOffsets.size();
    break;

  case mdTypeClassObject:
    // Class + protocols list
    size += sizeof(MDSectionOffset) * (value->protocolOffsets.size() + 1);
    break;

  case mdTypePointer:
    // Pointee type
    size += this->size(value->pointeeType);
    break;

  default:
    break;
  }

  return size;
}

void MDTypeInfoSerde::serialize(MDTypeInfo *value, void *data) {
  // Kind
  binwrite(value->kind);

  switch (value->kind) {
  case mdTypeArray: {
    // Array size
    binwrite(value->arraySize);
    // Element type
    serialize(value->elementType, data);
    ptr_add(&data, size(value->elementType));
    break;
  }

  case mdTypeStruct: {
    // Struct key
    binwrite(value->structOffset);
    break;
  }

  case mdTypeFunctionPointer:
  case mdTypeBlock: {
    // Signature
    binwrite(value->signatureOffset);
    break;
  }

  case mdTypeProtocolObject: {
    // Protocols list
    for (size_t i = 0; i < value->protocolOffsets.size(); i++) {
      MDSectionOffset protocol = value->protocolOffsets[i];
      if (i != value->protocolOffsets.size() - 1) {
        protocol |= mdSectionOffsetNext;
      }
      binwrite(protocol);
    }
    break;
  }

  case mdTypeClassObject: {
    // Class
    MDSectionOffset classOffset =
        value->protocolOffsets.empty() ? 0 : mdSectionOffsetNext;
    classOffset |= value->classOffset;
    binwrite(classOffset);

    // Protocols list
    for (size_t i = 0; i < value->protocolOffsets.size(); i++) {
      MDSectionOffset protocol = value->protocolOffsets[i];
      if (i != value->protocolOffsets.size() - 1) {
        protocol |= mdSectionOffsetNext;
      }
      binwrite(protocol);
    }

    break;
  }

  case mdTypePointer: {
    // Pointee type
    serialize(value->pointeeType, data);
    ptr_add(&data, size(value->pointeeType));
    break;
  }

  default:
    break;
  }
}

std::string MDTypeInfoSerde::encode(MDTypeInfo *type) {
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
    result =
        "[" + std::to_string(type->arraySize) + encode(type->elementType) + "]";
    break;
  case mdTypeStruct:
    result = "{structOffset=";
    result += std::to_string(type->structOffset);
    result += "}";
    break;
  case mdTypeBlock:
    result = "^" + std::to_string(type->signatureOffset);
    break;
  case mdTypePointer:
    result = "^";
    result += encode(type->pointeeType);
    break;
  case mdTypeFunctionPointer:
    result = "^v\"";
    result += std::to_string(type->signatureOffset);
    result = "\"";
    break;
  case mdTypeOpaquePointer:
    result = "^v";
    break;
  case mdTypeUInt8:
    result = "B";
    break;
  case mdTypeString:
    result = "*";
    break;
  case mdTypeAnyObject:
    result = "@";
    break;
  case mdTypeNSStringObject:
    result = "@'NSString'";
    break;
  case mdTypeInstanceObject:
    result = "@\"instancetype\"";
    break;
  case mdTypeProtocolObject:
    result = "@\"<";
    for (auto offset : type->protocolOffsets) {
      result += std::to_string(offset);
      result += ",";
    }
    result += ">\"";
    break;
  case mdTypeClassObject:
    result = "@\"";
    result += std::to_string(type->classOffset);
    if (!type->protocolOffsets.empty()) {
      result += "<";
      for (auto offset : type->protocolOffsets) {
        result += std::to_string(offset);
        result += ",";
      }
      result += ">";
    }
    result += "\"";
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

} // namespace metagen
