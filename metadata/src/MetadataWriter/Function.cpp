#include "MetadataWriter.h"

namespace metagen {

void MDMetadataWriter::write(FunctionDecl &decl) {
  MDFunction *mdFunction = new MDFunction();

  mdFunction->name = strings.add(decl.name, decl.name);

  MDSignature *mdSignature = new MDSignature();
  mdSignature->returnType = getTypeInfo(decl.returnType);
  for (auto param : decl.parameters) {
    mdSignature->arguments.push_back(getTypeInfo(param.type));
  }
  mdSignature->isVariadic = decl.isVariadic;

  MDSignatureResolvable res{mdSignature, &mdFunction->signature};
  signatureResolvables.emplace_back(res);

  functions.add(mdFunction, decl.name);
}

size_t MDSignatureSerde::size(MDSignature *value) {
  size_t size = 0;
  // Return type
  auto typeInfoSerde = MDTypeInfoSerde();
  auto returnTypeSize = typeInfoSerde.size(value->returnType);
  size += returnTypeSize;
  // Arguments
  for (auto arg : value->arguments) {
    auto argTypeSize = typeInfoSerde.size(arg);
    size += argTypeSize;
  }
  return size;
}

void MDSignatureSerde::serialize(MDSignature *value, void *data) {
  // Return type
  auto typeInfoSerde = MDTypeInfoSerde();
  auto returnTypeSize = typeInfoSerde.size(value->returnType);
  typeInfoSerde.serialize(value->returnType, data);
  MDTypeKind *data_kind = (MDTypeKind *)data;
  if (value->arguments.size() > 0) {
    data_kind[0] = (MDTypeKind)(value->returnType->kind | mdTypeFlagNext);
  }
  if (value->isVariadic) {
    data_kind[0] = (MDTypeKind)(value->returnType->kind | mdTypeFlagVariadic);
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

std::string MDSignatureSerde::encode(MDSignature *signature) {
  MDTypeInfoSerde typeInfoSerde;
  std::string result = typeInfoSerde.encode(signature->returnType) + "@:";
  for (auto arg : signature->arguments) {
    result += typeInfoSerde.encode(arg);
  }
  if (signature->isVariadic) {
    result += "...";
  }
  return result;
}

size_t MDFunctionSerde::size(MDFunction *value) {
  size_t size = 0;
  // Name
  addsize(value->name);
  // Signature
  addsize(value->signature);
  return size;
}

void MDFunctionSerde::serialize(MDFunction *value, void *data) {
  // Name
  binwrite(value->name);
  // Signature
  binwrite(value->signature);
}

} // namespace metagen
