#include "IR.h"
#include "TSEmitter.h"

namespace metagen {

std::string TSFile::typeToString(TypeSpec &type, bool isStatic, bool isReturn) {
  std::string result;

  switch (type.kind) {
  case kTypeVoid:
    result = "void";
    break;

  case kTypeBool:
    result = "boolean";
    break;

  case kTypeU8:
  case kTypeU16:
  case kTypeU32:
  case kTypeU64:
  case kTypeI8:
  case kTypeI16:
  case kTypeI32:
  case kTypeI64:
  case kTypeF32:
  case kTypeF64:
    result = "number";
    break;

  case kTypeU128:
  case kTypeI128:
    result = "bigint";
    break;

  case kTypeSelector:
  case kTypeString:
    result = "string";
    if (type.isNullable) {
      result += " | null";
    }
    break;

  case kTypePointer:
    result = isReturn ? "interop.Pointer" : "interop.PointerConvertible";
    break;

  case kTypeFunctionPointer:
  case kTypeCallback: {
    result = "(";
    for (size_t i = 0; i < type.callbackArgs.size(); i++) {
      auto arg = type.callbackArgs[i];
      result += "p";
      result += std::to_string(i + 1);
      result += ": ";
      result += typeToString(arg, false, false);
      if (i < type.callbackArgs.size() - 1) {
        result += ", ";
      }
    }
    result += ") => ";
    result += typeToString(*type.callbackReturn, false, true);
    if (type.isNullable) {
      result += " | null";
    }
    break;
  }

  case kTypeObject: {
    if (type.className.empty()) {
      result = type.protocolName;
    } else {
      if (type.className == "NSString") {
        result = "string";
      } else if (type.className == "NSArray") {
        if (type.typeParameters.empty()) {
          result = isReturn ? "NSArray"
                            : "NSArray<interop.Object> | Array<interop.Object>";
        } else {
          std::string elementType =
              typeToString(type.typeParameters[0], isStatic, true);
          result = isReturn ? "NSArray<" + elementType + ">"
                            : "NSArray<" + elementType + "> | Array<" +
                                  elementType + ">";
        }
      } else if (type.className == "NSDictionary") {
        if (type.typeParameters.empty()) {
          result = isReturn ? "NSDictionary"
                            : "NSDictionary<interop.Object, interop.Object> | "
                              "Record<interop.Object, interop.Object>";
        } else {
          std::string keyType =
              typeToString(type.typeParameters[0], isStatic, true);
          std::string valueType =
              typeToString(type.typeParameters[1], isStatic, true);
          result = isReturn
                       ? "NSDictionary<" + keyType + ", " + valueType + ">"
                       : "NSDictionary<" + keyType + ", " + valueType + ">";
          if (keyType == "string") {
            result += " | Record<string, " + valueType + ">";
          }
        }
      } else {
        result = type.className;
        if (factory && factory->missingClasses.contains(result)) {
          result = "interop.Object";
        } else if (!type.typeParameters.empty()) {
          result += "<";
          for (size_t i = 0; i < type.typeParameters.size(); i++) {
            result += typeToString(type.typeParameters[i], isStatic, isReturn);
            if (i < type.typeParameters.size() - 1) {
              result += ", ";
            }
          }
          result += ">";
        }
      }
    }
    if (type.isNullable) {
      result += " | null";
    }
    break;
  }

  case kTypeInstanceObject:
    result = isStatic ? "InstanceType<This>" : "this";
    if (type.isNullable) {
      result += " | null";
    }
    break;

  case kTypeAnyObject:
    result = type.typeParameterName.empty() ? "interop.Object"
                                            : type.typeParameterName;
    if (type.isNullable) {
      result += " | null";
    }
    break;

  case kTypeEnum:
    result = "interop.Enum<typeof " + type.enumName + ">";
    break;

  case kTypeRecord:
    result = type.recordName;
    break;

  case kTypeConstArray:
    result = "unknown /* const array */";
    break;

  case kTypeIncompleteArray:
    result = "interop.Pointer";
    break;

  case kTypeVector:
    result = "unknown /* vector */";
    break;

  case kTypeExtVector:
    result = "unknown /* ext vector */";
    break;

  case kTypeComplex:
    result = "unknown /* complex */";
    break;

  case kTypeUnknown:
    result = "unknown /* " + type.unknownInfo + " */";
    break;

  default:
    std::cout << "Unknown type spec kind: " << type.kind << std::endl;
    assert(false && "Unknown type spec kind");
    break;
  }

  return result;
}

} // namespace metagen
