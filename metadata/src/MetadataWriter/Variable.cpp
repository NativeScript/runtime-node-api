#include "MetadataWriter.h"

namespace metagen {

void MDMetadataWriter::write(VariableDecl &decl) {
  MDVariable *var = new MDVariable();
  var->name = strings.add(decl.name, decl.name);
  var->type = getTypeInfo(decl.type);
  switch (decl.constEvalKind) {
  case kEvalI64:
    var->evalKind = mdEvalInt64;
    var->value = new int64_t(decl.constEvalI64);
    break;
  case kEvalF64:
    var->evalKind = mdEvalDouble;
    var->value = new double(decl.constEvalF64);
    break;
  case kEvalString: {
    var->evalKind = mdEvalString;
    std::string *str = new std::string(decl.constEvalString);
    var->value = (void *)str->c_str();
    break;
  }
  case kEvalNone:
    var->evalKind = mdEvalNone;
    break;
  }
  constants.add(var, decl.name);
}

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

size_t MDVariableSerde::size(MDVariable *value) {
  size_t size = 0;
  // Name
  addsize(value->name);
  // Eval Kind
  addsize(value->evalKind);

  if (value->evalKind == mdEvalNone) {
    // Type
    MDTypeInfoSerde typeSerde;
    size += typeSerde.size(value->type);
  } else {
    // Value
    size += mdEvalKindSize(value->evalKind);
  }

  return size;
}

void MDVariableSerde::serialize(MDVariable *value, void *data) {
  // Name
  binwrite(value->name);

  // Eval Kind
  binwrite(value->evalKind);

  if (value->evalKind == mdEvalNone) {
    // Type
    MDTypeInfoSerde typeSerde;
    typeSerde.serialize(value->type, data);
    ptr_add(&data, typeSerde.size(value->type));
  } else {
    // Value
    size_t evalSize = mdEvalKindSize(value->evalKind);
    memcpy(data, value->value, evalSize);
    ptr_add(&data, evalSize);
  }
}

} // namespace metagen
