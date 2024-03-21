#include "MetadataWriter.h"

namespace metagen {

MDMember *MDMetadataWriter::memberFromDecl(MemberDecl &decl) {
  MDMember *member = new MDMember();

  switch (decl.kind) {
  case kMemberProperty: {
    member->name = strings.add(decl.name, decl.name);
    member->flags = mdMemberProperty;
    if (decl.isStatic)
      member->flags = (MDMemberFlag)(member->flags | mdMemberStatic);
    if (decl.isReadonly)
      member->flags = (MDMemberFlag)(member->flags | mdMemberReadonly);
    member->getterSelector =
        strings.add(decl.getterSelector, decl.getterSelector);

    MDTypeInfo *info = getTypeInfo(decl.propertyType);

    MDSignature *mdSignature = new MDSignature();
    mdSignature->returnType = info;
    mdSignature->isVariadic = false;
    MDSignatureResolvable res{mdSignature, &member->getterSignature};
    signatureResolvables.emplace_back(res);

    if (!decl.isReadonly) {
      MDSignature *mdSetterSignature = new MDSignature();
      mdSetterSignature->arguments.push_back(info);
      mdSetterSignature->returnType = new MDTypeInfo();
      mdSetterSignature->returnType->kind = mdTypeVoid;
      mdSetterSignature->isVariadic = false;

      MDSignatureResolvable setterRes{mdSetterSignature,
                                      &member->setterSignature};
      signatureResolvables.emplace_back(setterRes);

      member->setterSelector =
          strings.add(decl.setterSelector, decl.setterSelector);
    } else {
      member->setterSignature = MD_SECTION_OFFSET_NULL;
      member->setterSelector = MD_SECTION_OFFSET_NULL;
    }

    break;
  }

  case kMemberMethod: {
    member->methodSelector =
        strings.add(decl.methodSelector, decl.methodSelector);
    member->flags = mdMemberMethod;
    if (decl.isStatic)
      member->flags = (MDMemberFlag)(member->flags | mdMemberStatic);
    if (isSelectorOwned(decl.methodSelector) || decl.returnOwned)
      member->flags = (MDMemberFlag)(member->flags | mdMemberReturnOwned);

    if (decl.isInit) {
      member->flags = (MDMemberFlag)(member->flags | mdMemberIsInit);
    }

    MDSignature *mdSignature = new MDSignature();
    mdSignature->returnType = getTypeInfo(decl.returnType);
    for (auto param : decl.parameters) {
      mdSignature->arguments.push_back(getTypeInfo(param.type));
    }
    mdSignature->isVariadic = decl.isVariadic;
    MDSignatureResolvable res{mdSignature, &member->signature};
    signatureResolvables.emplace_back(res);

    break;
  }
  }
  return member;
}

size_t MDMemberSerde::size(MDMember *value) {
  size_t size = 0;
  // Flags
  addsize(value->flags);

  if (value->flags & mdMemberProperty) {
    // Name
    addsize(value->name);
    // Getter selector
    addsize(value->getterSelector);
    addsize(value->getterSignature);
    if ((value->flags & mdMemberReadonly) == 0) {
      // Setter selector
      addsize(value->setterSelector);
      addsize(value->setterSignature);
    }
  } else {
    // Method selector
    addsize(value->methodSelector);
    // Method signature
    addsize(value->signature);
  }

  return size;
}

void MDMemberSerde::serialize(MDMember *value, void *data) {
  // Flags
  binwrite(value->flags);

  if (value->flags & mdMemberProperty) {
    // Name
    binwrite(value->name);
    // Getter selector
    binwrite(value->getterSelector);
    binwrite(value->getterSignature);
    if ((value->flags & mdMemberReadonly) == 0) {
      // Setter selector
      binwrite(value->setterSelector);
      binwrite(value->setterSignature);
    }
  } else {
    // Method selector
    binwrite(value->methodSelector);
    // Method signature
    binwrite(value->signature);
  }
}

} // namespace metagen
