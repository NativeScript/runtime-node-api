#include "IR.h"
#include "clang-c/Index.h"
#include <assert.h>
#include <iostream>

namespace metagen {

TypeSpec::TypeSpec(CXType type, std::vector<std::string> *classTypeParameters) {
  auto canonicalType = clang_getCanonicalType(type);

  CXString nameStr = clang_getTypeSpelling(type);
  std::string name = clang_getCString(nameStr);
  clang_disposeString(nameStr);

  CXString canonicalNameStr = clang_getTypeSpelling(canonicalType);
  std::string canonicalName = stripCInfo(clang_getCString(canonicalNameStr));
  clang_disposeString(canonicalNameStr);

  if (classTypeParameters != nullptr &&
      std::find(classTypeParameters->begin(), classTypeParameters->end(),
                name) != classTypeParameters->end()) {
    typeParameterName = name;
    kind = kTypeAnyObject;
    return;
  }

  switch (canonicalType.kind) {
  case CXType_Void:
    kind = kTypeVoid;
    break;

  case CXType_Bool:
    kind = kTypeBool;
    break;

  case CXType_UChar: {
    kind = kTypeU8;
    break;
  }
  case CXType_UShort:
    kind = kTypeU16;
    break;
  case CXType_UInt:
    kind = kTypeU32;
    break;
  case CXType_Char_S:
    kind = kTypeI8;
    break;
  case CXType_SChar:
    kind = kTypeI8;
    break;
  case CXType_WChar:
    kind = kTypeI16;
    break;
  case CXType_Short:
    kind = kTypeI16;
    break;
  case CXType_Int:
    kind = kTypeI32;
    break;
  case CXType_Float:
    kind = kTypeF32;
    break;
  case CXType_Double:
    kind = kTypeF64;
    break;
  case CXType_LongDouble:
    kind = kTypeF64;
    break;
  case CXType_ULong:
    kind = kTypeU64;
    break;
  case CXType_ULongLong:
    kind = kTypeU64;
    break;
  case CXType_UInt128:
    kind = kTypeU128;
    break;
  case CXType_Long:
    kind = kTypeI64;
    break;
  case CXType_LongLong:
    kind = kTypeI64;
    break;
  case CXType_Int128:
    kind = kTypeI128;
    break;

  case CXType_Pointer: {
    auto pointeeType = clang_getPointeeType(canonicalType);
    if (pointeeType.kind == CXType_Char_S) {
      kind = kTypeString;
    } else if (pointeeType.kind == CXType_ObjCSel) {
      kind = kTypeSelector;
    } else if (pointeeType.kind == CXType_FunctionProto) {
      auto resultType = clang_getResultType(pointeeType);
      callbackReturn =
          std::make_shared<TypeSpec>(resultType, classTypeParameters);
      auto argc = clang_getNumArgTypes(pointeeType);
      for (int i = 0; i < argc; i++) {
        auto argType = clang_getArgType(pointeeType, i);
        callbackArgs.emplace_back(argType, classTypeParameters);
      }
      kind = kTypeFunctionPointer;
    } else {
      kind = kTypePointer;
      pointee = std::make_shared<TypeSpec>(pointeeType, classTypeParameters);
    }
    break;
  }

  case CXType_ObjCSel:
    kind = kTypeSelector;
    break;

  case CXType_BlockPointer: {
    auto pointeeType = clang_getPointeeType(canonicalType);
    auto resultType = clang_getResultType(pointeeType);
    callbackReturn =
        std::make_shared<TypeSpec>(resultType, classTypeParameters);
    auto argc = clang_getNumArgTypes(pointeeType);
    for (int i = 0; i < argc; i++) {
      auto argType = clang_getArgType(pointeeType, i);
      callbackArgs.emplace_back(argType, classTypeParameters);
    }
    kind = kTypeCallback;
    break;
  }

  case CXType_ObjCObjectPointer: {
    CXType pointeeType = clang_getPointeeType(canonicalType);
    int numTypeParams = clang_Type_getNumTemplateArguments(pointeeType);
    for (int i = 0; i < numTypeParams; i++) {
      CXType typeArg = clang_Type_getTemplateArgumentAsType(pointeeType, i);
      typeParameters.emplace_back(typeArg, classTypeParameters);
    }

    if (canonicalName == "id" || canonicalName == "Class") {
      if (name == "instancetype") {
        kind = kTypeInstanceObject;
      } else {
        kind = kTypeAnyObject;
      }
    } else if (canonicalName == "Protocol *") {
      kind = kTypePointer;
      pointee = std::make_shared<TypeSpec>();
      pointee->kind = kTypeVoid;
    } else if (canonicalName.find("id<") == 0 ||
               canonicalName.find("Class<") == 0) {
      // Just ID but this time we have protocols specified, which we can add
      // onto the object prototype.
      auto commaOffset = canonicalName.find(",");
      auto endOffset = canonicalName.find(">");
      auto skip = canonicalName.find("id<") == 0 ? 3 : 6;
      if (commaOffset < endOffset) {
        endOffset = commaOffset;
      }
      protocolName = canonicalName.substr(skip, endOffset - skip);
      kind = kTypeObject;
    } else if (canonicalName.find("<") < canonicalName.size()) {
      // We have protocols specified, but we also have a class name.
      auto cls = canonicalName.substr(0, canonicalName.find("<"));
      kind = kTypeObject;
      className = rtrim(cls);
    } else {
      // We have a class name.
      auto cls = canonicalName.substr(0, canonicalName.find("*"));
      kind = kTypeObject;
      className = rtrim(cls);
    }
    break;
  }

  case CXType_Enum: {
    CXString name = clang_getTypeSpelling(canonicalType);
    enumName = stripCInfo(clang_getCString(name));
    clang_disposeString(name);
    kind = kTypeEnum;
    break;
  }

  case CXType_Record: {
    CXString name = clang_getTypeSpelling(canonicalType);
    recordName = transformStructName(stripCInfo(clang_getCString(name)));
    clang_disposeString(name);
    kind = kTypeRecord;
    break;
  }

  case CXType_ConstantArray: {
    auto element = clang_getArrayElementType(canonicalType);
    arrayElement = std::make_shared<TypeSpec>(element, classTypeParameters);
    constArraySize = clang_getArraySize(canonicalType);
    kind = kTypeConstArray;
    break;
  }

  case CXType_IncompleteArray: {
    auto element = clang_getArrayElementType(canonicalType);
    arrayElement = std::make_shared<TypeSpec>(element, classTypeParameters);
    kind = kTypeIncompleteArray;
    break;
  }

  case CXType_Vector: {
    kind = kTypeVector;
    break;
  }

  case CXType_ExtVector: {
    kind = kTypeExtVector;
    break;
  }

  case CXType_Complex: {
    kind = kTypeComplex;
    break;
  }

  default:
    kind = kTypeUnknown;
    unknownInfo = clang_getCString(clang_getTypeSpelling(type));
    unknownInfo += " (CXTypeKind: " + std::to_string(type.kind) + ")";
    break;
  }
}

void MetadataFactory::processType(TypeSpec &type) {
  switch (type.kind) {
  case kTypeObject: {
    if (!type.className.empty()) {
      if (!classes.contains(type.className)) {
        referencedClasses.emplace(type.className);
      }
    } else if (!type.protocolName.empty() &&
               !protocols.contains(type.protocolName)) {
      referencedProtocols.emplace(type.protocolName);
    }
    for (TypeSpec &p : type.typeParameters) {
      processType(p);
    }
    break;
  }

  case kTypeConstArray:
  case kTypeIncompleteArray:
    processType(*type.arrayElement);
    break;

  case kTypePointer:
    processType(*type.pointee);
    break;

  case kTypeCallback:
  case kTypeFunctionPointer:
    for (auto &arg : type.callbackArgs) {
      processType(arg);
    }
    processType(*type.callbackReturn);
    break;

  case kTypeEnum:
    if (!enums.contains(type.enumName))
      referencedEnums.emplace(type.enumName);
    break;

  case kTypeRecord:
    if (!structs.contains(type.recordName) && !unions.contains(type.recordName))
      referencedRecords.emplace(type.recordName);
    break;

  default:
    break;
  }
}

} // namespace metagen
