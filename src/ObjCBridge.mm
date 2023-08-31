#include "AutoreleasePool.h"
#include "Block.h"
#include "Bridge.h"
#include "Class.h"
#include "Enum.h"
#include "Metadata.h"
#include "NativeCall.h"
#include "ObjCBridgeData.h"
#include "ObjectRef.h"
#include "Struct.h"
#include "TypeConv.h"
#include "Variable.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>

using namespace objc_bridge;

void finalize_bridge_data(napi_env env, void *data, void *hint) {
  auto bridgeData = (ObjCBridgeData *)data;
  delete bridgeData;
}

NAPI_EXPORT NAPI_MODULE_REGISTER {
  auto bridgeData = new ObjCBridgeData();
  napi_set_instance_data(env, (void *)bridgeData, finalize_bridge_data, nil);

  const napi_property_descriptor objcProperties[] = {
      NAPI_FUNCTION_DESC(getClass),        NAPI_FUNCTION_DESC(registerClass),
      NAPI_FUNCTION_DESC(registerBlock),   NAPI_FUNCTION_DESC(import),
      NAPI_FUNCTION_DESC(autoreleasepool),
  };

  napi_define_properties(env, exports, 5, objcProperties);

  napi_value global;
  napi_get_global(env, &global);

  const napi_property_descriptor globalProperties[] = {
      {
          .utf8name = "objc",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .value = exports,
          .data = nullptr,
          .method = nullptr,
      },
      {
          .utf8name = "ObjectRef",
          .attributes = napi_enumerable,
          .getter = nullptr,
          .setter = nullptr,
          .method = nullptr,
          .data = nullptr,
          .value = defineObjectRefClass(env),
      }};

  napi_define_properties(env, global, 2, globalProperties);

  auto offset = bridgeData->metadata->structsOffset;
  while (offset < bridgeData->metadata->size) {
    // Sometimes there is padding after file ends.
    if (bridgeData->metadata->getOffset(offset) == 0)
      break;
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto size = bridgeData->metadata->getArraySize(offset);
    offset += sizeof(uint16_t);

    std::string nameStr = name;
    bridgeData->structOffsets[nameStr] = originalOffset;

    bool next = true;
    while (next) {
      MDSectionOffset nameOffset = bridgeData->metadata->getOffset(offset);
      next = (nameOffset & mdSectionOffsetNext) != 0;
      nameOffset &= ~mdSectionOffsetNext;
      auto name = bridgeData->metadata->resolveString(nameOffset);
      offset += sizeof(MDSectionOffset);
      offset += sizeof(uint16_t);
      TypeConv::Make(env, bridgeData->metadata, &offset);
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_structGetter,
    };
    napi_define_properties(env, global, 1, &prop);
  }

  offset = bridgeData->metadata->constantsOffset;
  while (offset < bridgeData->metadata->enumsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto typeKind = bridgeData->metadata->getTypeKind(offset);
    offset += sizeof(MDTypeKind);
    auto evalKind = bridgeData->metadata->getVariableEvalKind(offset);
    offset += sizeof(MDVariableEvalKind);

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .getter = JS_variableGetter,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = nullptr,
    };

    switch (evalKind) {
    case mdEvalDouble: {
      offset += sizeof(double);
      napi_define_properties(env, global, 1, &prop);
      break;
    }

    case mdEvalInt64: {
      offset += sizeof(int64_t);
      napi_define_properties(env, global, 1, &prop);
      break;
    }

    case mdEvalString: {
      offset += sizeof(MDSectionOffset);
      napi_define_properties(env, global, 1, &prop);
      break;
    }

    default:
      break;
    }
  }

  offset = bridgeData->metadata->enumsOffset;
  while (offset < bridgeData->metadata->signaturesOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);

    bool next = true;
    while (next) {
      auto nameOffset = bridgeData->metadata->getOffset(offset);
      next = (nameOffset & mdSectionOffsetNext) != 0;
      offset += sizeof(MDSectionOffset);
      offset += sizeof(int64_t);
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .getter = JS_enumGetter,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = nullptr,
    };
    napi_define_properties(env, global, 1, &prop);
  }

  offset = bridgeData->metadata->functionsOffset;
  while (offset < bridgeData->metadata->protocolsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto signature = bridgeData->metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .getter = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .method = JS_CFunction,
    };

    napi_define_properties(env, global, 1, &prop);
  }

  offset = bridgeData->metadata->classesOffset;
  while (offset < bridgeData->metadata->structsOffset) {
    MDSectionOffset originalOffset = offset;
    auto name = bridgeData->metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto superclass = bridgeData->metadata->getOffset(offset);
    offset += sizeof(superclass);

    bool next = (superclass & mdSectionOffsetNext) != 0;

    while (next) {
      auto flags = bridgeData->metadata->getMemberFlag(offset);
      next = (flags & mdMemberNext) != 0;
      offset += sizeof(flags);

      if ((flags & mdMemberProperty) != 0) {
        bool readonly = (flags & mdMemberReadonly) != 0;
        offset += sizeof(MDSectionOffset); // name
        offset += sizeof(MDSectionOffset); // getterSelector
        if (!readonly)
          offset += sizeof(MDSectionOffset); // setterSelector
        offset += sizeof(MDSectionOffset);   // getterSignature
        if (!readonly)
          offset += sizeof(MDSectionOffset); // setterSignature
      } else {
        offset += sizeof(MDSectionOffset); // selector
        offset += sizeof(MDSectionOffset); // signature
      }
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes = napi_enumerable,
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_classGetter,
    };

    napi_define_properties(env, global, 1, &prop);
  }

  // offset = bridgeData->metadata->protocolsOffset;
  // while (offset < bridgeData->metadata->classesOffset) {
  //   MDSectionOffset originalOffset = offset;
  //   auto name = bridgeData->metadata->getString(offset);
  //   offset += sizeof(MDSectionOffset);

  //   bool next = true;

  //   while (next) {
  //     auto flags = bridgeData->metadata->getMemberFlag(offset);
  //     next = (flags & mdMemberNext) != 0;
  //     offset += sizeof(flags);

  //     if ((flags & mdMemberProperty) != 0) {
  //       bool readonly = (flags & mdMemberReadonly) != 0;
  //       offset += sizeof(MDSectionOffset); // name
  //       offset += sizeof(MDSectionOffset); // getterSelector
  //       if (!readonly)
  //         offset += sizeof(MDSectionOffset); // setterSelector
  //       offset += sizeof(MDSectionOffset);   // getterSignature
  //       if (!readonly)
  //         offset += sizeof(MDSectionOffset); // setterSignature
  //     } else {
  //       offset += sizeof(MDSectionOffset); // selector
  //       offset += sizeof(MDSectionOffset); // signature
  //     }
  //   }

  //   napi_property_descriptor prop = {
  //       .utf8name = name,
  //       .attributes = napi_enumerable,
  //       .method = nullptr,
  //       .setter = nullptr,
  //       .value = nullptr,
  //       .data = (void *)((size_t)originalOffset),
  //       .getter = JS_classGetter,
  //   };

  //   napi_define_properties(env, global, 1, &prop);
  // }

  return exports;
}
