#include "Protocol.h"
#include "MetadataReader.h"
#include "NativeCall.h"
#include "ObjCBridge.h"
#include "Util.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>

namespace objc_bridge {

void ObjCBridgeData::registerProtocolGlobals(napi_env env, napi_value global) {
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

BridgedProtocol *ObjCBridgeData::getProtocol(napi_env env,
                                             MDSectionOffset offset) {
  auto find = this->protocols[offset];
  if (find != nullptr) {
    return find;
  }

  auto proto = new BridgedProtocol(env, offset);
  this->protocols[offset] = proto;

  return proto;
}

NAPI_FUNCTION(protocolGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  auto bridgeData = ObjCBridgeData::InstanceData(env);

  auto cached = bridgeData->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  auto cls = bridgeData->getProtocol(env, offset);

  if (cls != nullptr) {
    bridgeData->mdValueCache[offset] = cls->constructor;
  } else {
    return nullptr;
  }

  return get_ref_value(env, cls->constructor);
}

NAPI_FUNCTION(ProtocolConstructor) {
  NAPI_CALLBACK_BEGIN(0)
  return jsThis;
}

void defineProtocolMembers(napi_env env, MDSectionOffset offset,
                           napi_value constructor) {
  auto bridgeData = ObjCBridgeData::InstanceData(env);

  napi_value prototype;
  napi_get_named_property(env, constructor, "prototype", &prototype);

  bool next = true;

  while (next) {
    auto flags = bridgeData->metadata->getMemberFlag(offset);
    next = (flags & mdMemberNext) != 0;
    offset += sizeof(flags);

    if (flags == mdMemberFlagNull)
      break;

    napi_value jsObject;
    if ((flags & mdMemberStatic) != 0) {
      jsObject = constructor;
    } else {
      jsObject = prototype;
    }

    if ((flags & mdMemberProperty) != 0) {
      bool readonly = (flags & mdMemberReadonly) != 0;
      auto name = bridgeData->metadata->getString(offset);
      offset += sizeof(MDSectionOffset); // name

      MDSectionOffset getterSignature, setterSignature;

      auto getterSelector = bridgeData->metadata->getString(offset);
      offset += sizeof(MDSectionOffset); // getterSelector

      getterSignature = bridgeData->metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset); // getterSignature

      const char *setterSelector = nullptr;
      if (!readonly) {
        setterSelector = bridgeData->metadata->getString(offset);
        offset += sizeof(MDSectionOffset); // setterSelector

        setterSignature = bridgeData->metadata->getOffset(offset);
        offset += sizeof(MDSectionOffset); // setterSignature
      }

      auto prop = new BridgedMethod();
      prop->bridgeData = bridgeData;
      prop->classMethod = (flags & mdMemberStatic) != 0;
      prop->selector = sel_registerName(getterSelector);
      prop->setterSelector =
          setterSelector == nullptr ? nil : sel_registerName(setterSelector);
      prop->signature =
          getterSignature + bridgeData->metadata->signaturesOffset;
      prop->setterSignature =
          setterSelector == nullptr
              ? 0
              : setterSignature + bridgeData->metadata->signaturesOffset;

      napi_property_descriptor property = {
          .utf8name = name,
          .name = nil,
          .method = nil,
          .getter = JS_BridgedGetter,
          .setter = readonly ? nil : JS_BridgedSetter,
          .value = nil,
          .attributes =
              (napi_property_attributes)(napi_configurable | napi_enumerable),
          .data = prop,
      };

      napi_define_properties(env, jsObject, 1, &property);
    } else {
      auto selector = bridgeData->metadata->getString(offset);
      offset += sizeof(MDSectionOffset); // selector
      auto signature = bridgeData->metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset); // signature

      auto name = jsifySelector(selector);

      bool hasProperty = false;
      napi_has_named_property(env, jsObject, name.c_str(), &hasProperty);
      if (hasProperty) {
        continue;
      }

      auto method = new BridgedMethod();
      method->bridgeData = bridgeData;
      method->classMethod = (flags & mdMemberStatic) != 0;
      method->selector = sel_registerName(selector);
      method->signature = signature + bridgeData->metadata->signaturesOffset;
      method->returnOwned = (flags & mdMemberReturnOwned) != 0;

      napi_property_descriptor property = {
          .utf8name = name.c_str(),
          .name = nil,
          .method = JS_BridgedMethod,
          .getter = nil,
          .setter = nil,
          .value = nil,
          .attributes =
              (napi_property_attributes)(napi_configurable | napi_writable |
                                         napi_enumerable),
          .data = method,
      };

      napi_define_properties(env, jsObject, 1, &property);
    }
  }
}

BridgedProtocol::BridgedProtocol(napi_env env, MDSectionOffset offset) {
  this->metadataOffset = offset;
  auto bridgeData = ObjCBridgeData::InstanceData(env);

  auto nameOffset = bridgeData->metadata->getOffset(offset);
  offset += sizeof(MDSectionOffset);
  bool next = (nameOffset & mdSectionOffsetNext) != 0;
  nameOffset &= ~mdSectionOffsetNext;

  name = bridgeData->metadata->resolveString(nameOffset);

  napi_value constructor;
  napi_define_class(env, name.c_str(), NAPI_AUTO_LENGTH, JS_ProtocolConstructor,
                    nullptr, 0, nullptr, &constructor);
  napi_wrap(env, constructor, this, nullptr, nullptr, nullptr);

  this->constructor = make_ref(env, constructor);

  // Get the NativeObject class and inherit from it
  auto cls = bridgeData->getClass(env, MD_SECTION_OFFSET_NULL);
  napi_inherits(env, constructor, get_ref_value(env, cls->constructor));

  while (next) {
    auto protocolImpl = bridgeData->metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);
    next = (protocolImpl & mdSectionOffsetNext) != 0;
    protocolImpl &= ~mdSectionOffsetNext;
    auto proto = bridgeData->getProtocol(
        env, protocolImpl + bridgeData->metadata->protocolsOffset);
    defineProtocolMembers(env, proto->membersOffset, constructor);
  }

  membersOffset = offset;

  defineProtocolMembers(env, membersOffset, constructor);
}

} // namespace objc_bridge
