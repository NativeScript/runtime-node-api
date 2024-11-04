#include "ClassMember.h"
#include "ClassBuilder.h"
#include "MetadataReader.h"
#include "ObjCBridge.h"
#include "TypeConv.h"
#include "Util.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#import <Foundation/Foundation.h>
#include <cstring>
#include <objc/objc.h>
#include <objc/runtime.h>

namespace objc_bridge {

napi_value JS_NSObject_alloc(napi_env env, napi_callback_info cbinfo) {
  napi_value jsThis;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, nullptr);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  bool supercall = class_conformsToProtocol(self, @protocol(ObjCBridgeClassBuilderProtocol));

  if (supercall) {
    ObjCBridgeState *state = ObjCBridgeState::InstanceData(env);
    ClassBuilder *builder = (ClassBuilder *)state->classesByPointer[self];
    if (!builder->isFinal)
      builder->build();
  }

  id result = [self alloc];
  return ObjCBridgeState::InstanceData(env)->getObject(env, result, jsThis,
                                                       kOwnedObject);
}

void ObjCClassMember::defineMembers(napi_env env, ObjCClassMemberMap &memberMap,
                                    MDSectionOffset offset,
                                    napi_value constructor) {
  auto bridgeState = ObjCBridgeState::InstanceData(env);

  napi_value prototype;
  napi_get_named_property(env, constructor, "prototype", &prototype);

  bool next = true;

  while (next) {
    auto flags = bridgeState->metadata->getMemberFlag(offset);

    if (flags == mdMemberFlagNull)
      break;

    next = (flags & mdMemberNext) != 0;
    offset += sizeof(flags);

    napi_value jsObject;
    if ((flags & mdMemberStatic) != 0) {
      jsObject = constructor;
    } else {
      jsObject = prototype;
    }

    if ((flags & mdMemberProperty) != 0) {
      bool readonly = (flags & mdMemberReadonly) != 0;
      const char *name = bridgeState->metadata->getString(offset);
      offset += sizeof(MDSectionOffset); // name

      MDSectionOffset getterSignature, setterSignature;

      const char *getterSelector = bridgeState->metadata->getString(offset);

      offset += sizeof(MDSectionOffset); // getterSelector

      getterSignature = bridgeState->metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset); // getterSignature

      const char *setterSelector = nullptr;
      if (!readonly) {
        setterSelector = bridgeState->metadata->getString(offset);
        offset += sizeof(MDSectionOffset); // setterSelector

        setterSignature = bridgeState->metadata->getOffset(offset);
        offset += sizeof(MDSectionOffset); // setterSignature
      }

      if (memberMap.contains(name)) {
        memberMap.erase(name);
      }

      const auto &kv = memberMap.emplace(
          name, ObjCClassMember(
                    bridgeState, sel_registerName(getterSelector),
                    !readonly ? sel_registerName(setterSelector) : nullptr,
                    getterSignature + bridgeState->metadata->signaturesOffset,
                    !readonly ? setterSignature +
                                    bridgeState->metadata->signaturesOffset
                              : 0,
                    flags));

      napi_property_descriptor property = {
          .utf8name = name,
          .name = nil,
          .method = nil,
          .getter = jsGetter,
          .setter = readonly ? nil : jsSetter,
          .value = nil,
          .attributes =
              (napi_property_attributes)(napi_configurable | napi_enumerable),
          .data = &kv.first->second,
      };

      napi_define_properties(env, jsObject, 1, &property);
    } else {
      auto selector = bridgeState->metadata->getString(offset);
      offset += sizeof(MDSectionOffset); // selector
      auto signature = bridgeState->metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset); // signature

      auto name = jsifySelector(selector);

      bool hasProperty = false;
      napi_has_named_property(env, jsObject, name.c_str(), &hasProperty);
      if (hasProperty) {
        continue;
      }

      const auto &kv = memberMap.emplace(
          name,
          ObjCClassMember(bridgeState, sel_registerName(selector),
                          signature + bridgeState->metadata->signaturesOffset,
                          flags));

      napi_property_descriptor property = {
          .utf8name = name.c_str(),
          .name = nil,
          .method =
              (flags & metagen::mdMemberIsInit) != 0 ? jsCallInit : jsCall,
          .getter = nil,
          .setter = nil,
          .value = nil,
          .attributes =
              (napi_property_attributes)(napi_configurable | napi_writable |
                                         napi_enumerable),
          .data = &kv.first->second,
      };

      if (name == "alloc") {
        property.method = JS_NSObject_alloc;
      }

      napi_define_properties(env, jsObject, 1, &property);
    }
  }
}

inline void objcNativeCall(napi_env env, napi_value jsThis, Cif *cif, id self,
                           void **avalues, void *rvalue) {
  bool classMethod = class_isMetaClass(object_getClass(self));

  bool supercall =
      classMethod
          ? class_conformsToProtocol(self,
                                     @protocol(ObjCBridgeClassBuilderProtocol))
          : class_conformsToProtocol(object_getClass(self),
                                     @protocol(ObjCBridgeClassBuilderProtocol));

  if (supercall && classMethod) {
    ObjCBridgeState *state = ObjCBridgeState::InstanceData(env);
    ClassBuilder *builder = (ClassBuilder *)state->classesByPointer[self];
    if (!builder->isFinal)
      builder->build();
  }

#if defined(__x86_64__)
  bool isStret = cif->returnType->type->size > 16 &&
                 cif->returnType->type->type == FFI_TYPE_STRUCT;
#endif

  if (!supercall) {
#if defined(__x86_64__)
    if (isStret) {
      ffi_call(&cif->cif, FFI_FN(objc_msgSend_stret), rvalue, avalues);
    } else {
      ffi_call(&cif->cif, FFI_FN(objc_msgSend), rvalue, avalues);
    }
#else
    ffi_call(&cif->cif, FFI_FN(objc_msgSend), rvalue, avalues);
#endif
  } else {
    struct objc_super superobj = {self,
                                  class_getSuperclass(object_getClass(self))};
    auto superobjPtr = &superobj;
    avalues[0] = (void *)&superobjPtr;
#if defined(__x86_64__)
    if (isStret) {
      ffi_call(&cif->cif, FFI_FN(objc_msgSendSuper_stret), rvalue, avalues);
    } else {
      ffi_call(&cif->cif, FFI_FN(objc_msgSendSuper), rvalue, avalues);
    }
#else
    ffi_call(&cif->cif, FFI_FN(objc_msgSendSuper), rvalue, avalues);
#endif
  }
}

napi_value ObjCClassMember::jsCallInit(napi_env env,
                                       napi_callback_info cbinfo) {
  napi_value jsThis;
  ObjCClassMember *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self = nil;
  napi_unwrap(env, jsThis, (void **)&self);
  if (self == nil) {
    napi_throw_error(env, nullptr, "self is nil");
    return nullptr;
  }

  Cif *cif = method->cif;
  if (cif == nullptr) {
    cif = method->cif = method->bridgeState->getMethodCif(
        env, method->methodOrGetter.signatureOffset);
  }

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, &jsThis, nullptr);

  void *avalues[cif->cif.nargs];

  avalues[0] = (void *)&self;
  avalues[1] = (void *)&method->methodOrGetter.selector;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      avalues[i + 2] = cif->avalues[i];
      cif->argTypes[i]->toNative(env, cif->argv[i], avalues[i + 2],
                                 &shouldFree[i], &shouldFreeAny);
    }
  }

  id rvalue;

  objcNativeCall(env, jsThis, cif, self, avalues, &rvalue);

  for (unsigned int i = 0; i < cif->argc; i++) {
    if (shouldFree[i]) {
      cif->argTypes[i]->free(env, *((void **)avalues[i + 2]));
    }
  }

  if (rvalue == nil) {
    napi_value result;
    napi_get_null(env, &result);
    return result;
  }

  napi_value constructor = jsThis;
  if (!method->classMethod)
    napi_get_named_property(env, jsThis, "constructor", &constructor);

  napi_value result =
      method->bridgeState->getObject(env, rvalue, constructor, kUnownedObject);

  if (rvalue != self) {
    [self retain];
    [rvalue release];
  }

  return result;
}

napi_value ObjCClassMember::jsCall(napi_env env, napi_callback_info cbinfo) {
  napi_value jsThis;
  ObjCClassMember *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self = nil;
  napi_unwrap(env, jsThis, (void **)&self);
  if (self == nil) {
    napi_throw_error(env, nullptr, "self is nil");
    return nullptr;
  }

  Cif *cif = method->cif;
  if (cif == nullptr) {
    cif = method->cif = method->bridgeState->getMethodCif(
        env, method->methodOrGetter.signatureOffset);
  }

  size_t argc = cif->argc;
  napi_get_cb_info(env, cbinfo, &argc, cif->argv, &jsThis, nullptr);

  void *avalues[cif->cif.nargs];
  void *rvalue = cif->rvalue;

  avalues[0] = (void *)&self;
  avalues[1] = (void *)&method->methodOrGetter.selector;

  bool shouldFreeAny = false;
  bool shouldFree[cif->argc];

  if (cif->argc > 0) {
    for (unsigned int i = 0; i < cif->argc; i++) {
      shouldFree[i] = false;
      avalues[i + 2] = cif->avalues[i];
      cif->argTypes[i]->toNative(env, cif->argv[i], avalues[i + 2],
                                 &shouldFree[i], &shouldFreeAny);
    }
  }

  objcNativeCall(env, jsThis, cif, self, avalues, rvalue);

  for (unsigned int i = 0; i < cif->argc; i++) {
    if (shouldFree[i]) {
      cif->argTypes[i]->free(env, *((void **)avalues[i + 2]));
    }
  }

  if (cif->returnType->kind == mdTypeInstanceObject) {
    napi_value constructor = jsThis;
    if (!method->classMethod)
      napi_get_named_property(env, jsThis, "constructor", &constructor);
    id obj = *((id *)rvalue);
    return method->bridgeState->getObject(env, obj, constructor,
                                          method->returnOwned ? kOwnedObject
                                                              : kUnownedObject);
  }

  return cif->returnType->toJS(env, rvalue,
                               method->returnOwned ? kReturnOwned : 0);
}

napi_value ObjCClassMember::jsGetter(napi_env env, napi_callback_info cbinfo) {
  napi_value jsThis;
  ObjCClassMember *method;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  Cif *cif = method->cif;
  if (cif == nullptr) {
    cif = method->cif = method->bridgeState->getMethodCif(
        env, method->methodOrGetter.signatureOffset);
  }

  void *avalues[2] = {&self, &method->methodOrGetter.selector};
  void *rvalue = cif->rvalue;

  objcNativeCall(env, jsThis, cif, self, avalues, rvalue);

  if (cif->returnType->kind == mdTypeInstanceObject) {
    napi_value constructor = jsThis;
    if (!method->classMethod) {
      napi_get_named_property(env, jsThis, "constructor", &constructor);
    }

    return method->bridgeState->getObject(env, *((id *)rvalue), constructor,
                                          method->returnOwned ? kOwnedObject
                                                              : kUnownedObject);
  }

  return cif->returnType->toJS(env, rvalue, 0);
}

napi_value ObjCClassMember::jsSetter(napi_env env, napi_callback_info cbinfo) {
  napi_value jsThis, argv;
  size_t argc = 1;
  ObjCClassMember *method;

  napi_get_cb_info(env, cbinfo, &argc, &argv, &jsThis, (void **)&method);

  id self;
  napi_unwrap(env, jsThis, (void **)&self);

  Cif *cif = method->setterCif;
  if (cif == nullptr) {
    cif = method->setterCif =
        method->bridgeState->getMethodCif(env, method->setter.signatureOffset);
  }

  void *avalues[3] = {&self, &method->setter.selector, cif->avalues[0]};
  void *rvalue = nullptr;

  bool shouldFree = false;
  cif->argTypes[0]->toNative(env, argv, avalues[2], &shouldFree, &shouldFree);

  objcNativeCall(env, jsThis, cif, self, avalues, rvalue);

  if (shouldFree) {
    cif->argTypes[0]->free(env, *((void **)avalues[2]));
  }

  return nullptr;
}

} // namespace objc_bridge
