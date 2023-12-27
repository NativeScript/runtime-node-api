#include "Class.h"
#include "ClassBuilder.h"
#include "ClassMember.h"
#include "Metadata.h"
#include "MetadataReader.h"
#include "ObjCBridge.h"
#include "Protocol.h"
#include "Util.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <string>

namespace objc_bridge {

void ObjCBridgeState::registerClassGlobals(napi_env env, napi_value global) {
  MDSectionOffset offset = metadata->classesOffset;
  while (offset < metadata->structsOffset) {
    MDSectionOffset originalOffset = offset;
    auto nameOffset = metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);
    bool hasProtocols = (nameOffset & mdSectionOffsetNext) != 0;
    nameOffset &= ~mdSectionOffsetNext;
    auto name = metadata->resolveString(nameOffset);

    while (hasProtocols) {
      auto protocolOffset = metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset);
      hasProtocols = (protocolOffset & mdSectionOffsetNext) != 0;
    }

    auto superclass = metadata->getOffset(offset);
    offset += sizeof(superclass);

    bool next = (superclass & mdSectionOffsetNext) != 0;

    while (next) {
      auto flags = metadata->getMemberFlag(offset);
      next = (flags & mdMemberNext) != 0;
      offset += sizeof(flags);

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

    auto nativeClass = objc_getClass(name);
    if (nativeClass != nil) {
      mdClassesByPointer[nativeClass] = originalOffset;
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes =
            (napi_property_attributes)(napi_enumerable | napi_configurable),
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_classGetter,
    };

    napi_define_properties(env, global, 1, &prop);
  }
}

NAPI_FUNCTION(registerClass) {
  NAPI_CALLBACK_BEGIN(1)

  // In case no arguments are passed, we just return the NativeObject class.
  // This is to support both @NativeClass and @NativeClass() syntaxes.
  // Maybe we should support more in future like
  // @NativeClass(NSApplicationDelegate).
  if (argc == 0) {
    napi_value func;
    napi_create_function(env, "NativeClass", NAPI_AUTO_LENGTH, JS_registerClass,
                         nullptr, &func);
    return func;
  }

  auto bridgeState = ObjCBridgeState::InstanceData(env);
  // bridgeState->registerClass(env, argv[0]);

  ClassBuilder *builder = new ClassBuilder(env, argv[0]);
  // It gets lazily built when a static method is called.
  // builder->build();
  bridgeState->classesByPointer[builder->nativeClass] = builder;

  return nullptr;
}

char class_name[256];

// Get a Bridged Class by metadata offset, creating it if it doesn't exist.
// This is used to cache ObjCClass instances.
ObjCClass *ObjCBridgeState::getClass(napi_env env, MDSectionOffset offset) {
  auto find = this->classes[offset];
  if (find != nullptr) {
    return find;
  }

  auto cls = new ObjCClass(env, offset);
  this->classes[offset] = cls;

  return cls;
}

NAPI_FUNCTION(import) {
  NAPI_CALLBACK_BEGIN(1)

  NAPI_GUARD(
      napi_get_value_string_utf8(env, argv[0], class_name, 256, nullptr)) {
    NAPI_THROW_LAST_ERROR
    return nullptr;
  }

  std::string name = class_name;

  if (!name.starts_with("/")) {
    name = "/System/Library/Frameworks/" + name + ".framework";
  }

  NSBundle *bundle =
      [NSBundle bundleWithPath:[NSString stringWithUTF8String:name.c_str()]];
  if (bundle == nil) {
    NSLog(@"Could not find bundle: %s", name.c_str());
    return nullptr;
  }

  bool loaded = [bundle load];

  if (!loaded) {
    NSLog(@"Could not load bundle: %s", name.c_str());
    return nullptr;
  }

  return nullptr;
}

NAPI_FUNCTION(classGetter) {
  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);
  auto bridgeState = ObjCBridgeState::InstanceData(env);

  auto cached = bridgeState->mdValueCache[offset];
  if (cached != nullptr) {
    return get_ref_value(env, cached);
  }

  // std::string name = bridgeState->metadata->getString(offset);
  auto cls = bridgeState->getClass(env, offset);

  if (cls != nullptr) {
    bridgeState->mdValueCache[offset] = cls->constructor;
  } else {
    return nullptr;
  }

  return get_ref_value(env, cls->constructor);
}

NAPI_FUNCTION(BridgedConstructor) {
  NAPI_CALLBACK_BEGIN(0)
  return jsThis;
}

// Used to display the description of a native object in console.log.
// It's just implementation of nodejs.util.inspect.custom.
NAPI_FUNCTION(CustomInspect) {
  napi_value jsThis;
  void *data;
  size_t argc = 0;

  napi_get_cb_info(env, cbinfo, &argc, nil, &jsThis, &data);

  id self = nil;
  napi_unwrap(env, jsThis, (void **)&self);

  if (self == nil) {
    napi_value result;
    napi_create_string_utf8(env, "(nil)", NAPI_AUTO_LENGTH, &result);
    return result;
  }

  auto description = [self description];
  auto descriptionString = [description UTF8String];

  napi_value result;
  napi_create_string_utf8(env, descriptionString, NAPI_AUTO_LENGTH, &result);

  return result;
}

// Used for Symbol.dispose (using statement support).
NAPI_FUNCTION(releaseObject) {
  napi_value jsThis;
  void *data;
  napi_get_cb_info(env, cbinfo, nil, nil, &jsThis, &data);
  id self;
  napi_unwrap(env, jsThis, (void **)&self);
  auto bridgeState = ObjCBridgeState::InstanceData(env);
  bridgeState->unregisterObject(self);
  return nullptr;
}

std::string NativeObjectName = "NativeObject";

// Bridge an Objective-C class to JavaScript on the fly. Runtime introspection
// is used to determine the class's properties and methods.
// In an overview, we define two versions of same class. One is the "normal"
// one, and the other is the "supercall" one. The supercall one is used to call
// superclasses' methods. The normal one is used to call the class's own
// methods. The supercall one is used automatically when the normal one is
// extended by a JS class.
// Every Bridged Class extends the NativeObject class.

ObjCClass::ObjCClass(napi_env env, MDSectionOffset offset) {
  NAPI_PREAMBLE

  this->env = env;

  metadataOffset = offset;

  bridgeState = ObjCBridgeState::InstanceData(env);

  bool isNativeObject = offset == MD_SECTION_OFFSET_NULL;

  std::vector<MDSectionOffset> protocolOffsets;

  MDSectionOffset superClassOffset = MD_SECTION_OFFSET_NULL;
  bool hasMembers = false;
  if (isNativeObject) {
    name = NativeObjectName;
    nativeClass = nil;
  } else {
    auto nameOffset = bridgeState->metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);
    bool hasProtocols = (nameOffset & mdSectionOffsetNext) != 0;
    nameOffset &= ~mdSectionOffsetNext;
    name = bridgeState->metadata->resolveString(nameOffset);
    while (hasProtocols) {
      auto protocolOffset = bridgeState->metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset);
      hasProtocols = (protocolOffset & mdSectionOffsetNext) != 0;
      protocolOffset &= ~mdSectionOffsetNext;
      if (protocolOffset != MD_SECTION_OFFSET_NULL)
        protocolOffsets.push_back(protocolOffset);
    }
    superClassOffset = bridgeState->metadata->getOffset(offset);
    hasMembers = (superClassOffset & mdSectionOffsetNext) != 0;
    superClassOffset &= ~mdSectionOffsetNext;
    offset += sizeof(MDSectionOffset);
    nativeClass = objc_getClass(name.c_str());
  }

  napi_value constructor, prototype;

  napi_define_class(env, name.c_str(), name.length(), JS_BridgedConstructor,
                    (void *)this, 0, nil, &constructor);

  if (nativeClass != nil) {
    napi_wrap(env, constructor, (void *)nativeClass, nil, nil, nil);
  }

  napi_get_named_property(env, constructor, "prototype", &prototype);

  napi_value superConstructor = nil, superPrototype = nil;

  // If the class requested isn't NativeObject - the class which every bridged
  // class extends - we need to find the super class and inherit from it, if it
  // exists.
  if (!isNativeObject) {
    for (auto protocolOffset : protocolOffsets) {
      auto protocol = bridgeState->getProtocol(
          env, protocolOffset + bridgeState->metadata->protocolsOffset);
      if (protocol == nil)
        continue;
      ObjCClassMember::defineMembers(env, members, protocol->membersOffset,
                                     constructor);
    }

    if (superClassOffset != MD_SECTION_OFFSET_NULL) {
      superClassOffset += bridgeState->metadata->classesOffset;
    }

    // If class offset is 0, it means that the class doesn't have a super class.
    // But we just inherit NativeObject class in that case.
    superclass = bridgeState->getClass(env, superClassOffset);
    if (superclass != nil) {
      superConstructor = get_ref_value(env, superclass->constructor);
      superPrototype = get_ref_value(env, superclass->prototype);
      napi_inherits(env, constructor, superConstructor);
    }
  } else {
    superclass = nullptr;
  }

  this->constructor = make_ref(env, constructor);
  this->prototype = make_ref(env, prototype);

  if (isNativeObject) {
    napi_property_descriptor property = {
        .utf8name = nil,
        .name = jsSymbolFor(env, "nodejs.util.inspect.custom"),
        .method = JS_CustomInspect,
        .getter = nil,
        .setter = nil,
        .value = nil,
        .attributes = napi_enumerable,
        .data = nil,
    };

    napi_define_properties(env, prototype, 1, &property);

    napi_value global, Symbol, SymbolDispose;
    napi_get_global(env, &global);
    napi_get_named_property(env, global, "Symbol", &Symbol);
    napi_get_named_property(env, Symbol, "dispose", &SymbolDispose);
    napi_valuetype type;
    napi_typeof(env, SymbolDispose, &type);

    if (type == napi_symbol) {
      property.name = SymbolDispose;
      property.method = JS_releaseObject;

      napi_define_properties(env, prototype, 1, &property);
    }

    return;
  }

  bridgeState->classesByPointer[nativeClass] = this;

  if (!hasMembers)
    return;

  ObjCClassMember::defineMembers(env, members, offset, constructor);
}

ObjCClass::~ObjCClass() {
  napi_delete_reference(env, constructor);
  napi_delete_reference(env, prototype);
}

} // namespace objc_bridge
