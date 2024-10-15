#include "Protocol.h"
#include "ClassMember.h"
#include "Metadata.h"
#include "MetadataReader.h"
#include "ObjCBridge.h"
#include "Util.h"
#include "js_native_api.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>

namespace objc_bridge {

void ObjCBridgeState::registerProtocolGlobals(napi_env env, napi_value global) {
  MDSectionOffset offset = metadata->protocolsOffset;
  while (offset < metadata->classesOffset) {
    MDSectionOffset originalOffset = offset;

    auto nameOffset = metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);
    bool next = (nameOffset & mdSectionOffsetNext) != 0;
    nameOffset &= ~mdSectionOffsetNext;

    auto name = metadata->resolveString(nameOffset);
    // protocolOffsets[name] = originalOffset;
    auto objcProtocol = objc_getProtocol(name);
    if (objcProtocol != nil) {
      mdProtocolsByPointer[objcProtocol] = originalOffset;
    }

    while (next) {
      auto protocolImpl = metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset);
      next = (protocolImpl & mdSectionOffsetNext) != 0;
    }

    next = true;

    while (next) {
      auto flags = metadata->getMemberFlag(offset);
      next = (flags & mdMemberNext) != 0;
      offset += sizeof(flags);

      if (flags == mdMemberFlagNull)
        break;

      if ((flags & mdMemberProperty) != 0) {
        bool readonly = (flags & mdMemberReadonly) != 0;
        offset += sizeof(MDSectionOffset); // name
        offset += sizeof(MDSectionOffset); // getterSelector
        offset += sizeof(MDSectionOffset); // getterSignature
        if (!readonly) {
          offset += sizeof(MDSectionOffset); // setterSelector
          offset += sizeof(MDSectionOffset); // setterSignature
        }
      } else {
        offset += sizeof(MDSectionOffset); // selector
        offset += sizeof(MDSectionOffset); // signature
      }
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes =
            (napi_property_attributes)(napi_enumerable | napi_configurable),
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_protocolGetter,
    };

    napi_define_properties(env, global, 1, &prop);
  }
}

ObjCProtocol *ObjCBridgeState::getProtocol(napi_env env,
                                           MDSectionOffset offset) {
  auto find = this->protocols[offset];
  if (find != nullptr) {
    return find;
  }

  auto proto = new ObjCProtocol(env, offset);
  this->protocols[offset] = proto;

  return proto;
}

NAPI_FUNCTION(protocolGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  auto bridgeState = ObjCBridgeState::InstanceData(env);

  auto cached = bridgeState->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  auto cls = bridgeState->getProtocol(env, offset);

  if (cls != nullptr) {
    bridgeState->mdValueCache[offset] = cls->constructor;
  } else {
    return nullptr;
  }

  return get_ref_value(env, cls->constructor);
}

napi_value ObjCProtocol::jsConstructor(napi_env env,
                                       napi_callback_info cbinfo) {
  NAPI_CALLBACK_BEGIN(0)
  return jsThis;
}

ObjCProtocol::ObjCProtocol(napi_env env, MDSectionOffset offset) {
  this->env = env;
  this->metadataOffset = offset;
  auto bridgeState = ObjCBridgeState::InstanceData(env);

  auto nameOffset = bridgeState->metadata->getOffset(offset);
  offset += sizeof(MDSectionOffset);
  bool next = (nameOffset & mdSectionOffsetNext) != 0;
  nameOffset &= ~mdSectionOffsetNext;

  name = bridgeState->metadata->resolveString(nameOffset);

  napi_value constructor;
  napi_define_class(env, name.c_str(), NAPI_AUTO_LENGTH,
                    ObjCProtocol::jsConstructor, nullptr, 0, nullptr,
                    &constructor);
  napi_wrap(env, constructor, this, nullptr, nullptr, nullptr);

  this->constructor = make_ref(env, constructor);

  // Get the NativeObject class and inherit from it
  auto cls = bridgeState->getClass(env, MD_SECTION_OFFSET_NULL);
  napi_inherits(env, constructor, get_ref_value(env, cls->constructor));

  while (next) {
    auto protocolImpl = bridgeState->metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);
    next = (protocolImpl & mdSectionOffsetNext) != 0;
    protocolImpl &= ~mdSectionOffsetNext;
    auto proto = bridgeState->getProtocol(
        env, protocolImpl + bridgeState->metadata->protocolsOffset);
    protocols.emplace(proto);
    ObjCClassMember::defineMembers(env, proto->members, proto->membersOffset,
                                   constructor);
  }

  membersOffset = offset;

  ObjCClassMember::defineMembers(env, members, membersOffset, constructor);
}

ObjCProtocol::~ObjCProtocol() { napi_delete_reference(env, constructor); }

} // namespace objc_bridge
