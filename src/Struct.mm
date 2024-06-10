#include "Struct.h"
#include "ObjCBridge.h"
#include "TypeConv.h"
#include "Util.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include <cstring>

#import <Foundation/Foundation.h>

namespace objc_bridge {

void ObjCBridgeState::registerStructGlobals(napi_env env, napi_value global) {
  MDSectionOffset offset = metadata->structsOffset;
  while (offset < metadata->unionsOffset) {
    // Sometimes there is padding after file ends.
    if (metadata->getOffset(offset) == 0)
      break;
    MDSectionOffset originalOffset = offset;
    auto name = metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto size = metadata->getArraySize(offset);
    offset += sizeof(uint16_t);

    std::string nameStr = name;
    structOffsets[nameStr] = originalOffset;

    bool next = true;
    while (next) {
      MDSectionOffset nameOffset = metadata->getOffset(offset);
      offset += sizeof(MDSectionOffset);
      next = (nameOffset & mdSectionOffsetNext) != 0;
      nameOffset &= ~mdSectionOffsetNext;
      if (nameOffset == MD_SECTION_OFFSET_NULL)
        break;
      auto name = metadata->resolveString(nameOffset);
      offset += sizeof(uint16_t);
      TypeConv::Make(env, metadata, &offset);
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes =
            (napi_property_attributes)(napi_enumerable | napi_configurable),
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_structGetter,
    };
    napi_define_properties(env, global, 1, &prop);
  }
}

void ObjCBridgeState::registerUnionGlobals(napi_env env, napi_value global) {
  MDSectionOffset offset = metadata->unionsOffset;
  while (offset < metadata->size) {
    // Sometimes there is padding after file ends.
    if (metadata->getOffset(offset) == 0)
      break;
    MDSectionOffset originalOffset = offset;
    auto name = metadata->getString(offset);
    offset += sizeof(MDSectionOffset);
    auto size = metadata->getArraySize(offset);
    offset += sizeof(uint16_t);

    std::string nameStr = name;
    unionOffsets[nameStr] = originalOffset;

    bool next = true;
    while (next) {
      MDSectionOffset nameOffset = metadata->getOffset(offset);
      next = (nameOffset & mdSectionOffsetNext) != 0;
      nameOffset &= ~mdSectionOffsetNext;
      auto name = metadata->resolveString(nameOffset);
      offset += sizeof(MDSectionOffset);
      TypeConv::Make(env, metadata, &offset);
    }

    napi_property_descriptor prop = {
        .utf8name = name,
        .attributes =
            (napi_property_attributes)(napi_enumerable | napi_configurable),
        .method = nullptr,
        .setter = nullptr,
        .value = nullptr,
        .data = (void *)((size_t)originalOffset),
        .getter = JS_unionGetter,
    };
    napi_define_properties(env, global, 1, &prop);
  }
}

NAPI_FUNCTION(structGetter) {
  NAPI_PREAMBLE

  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);

  auto bridgeState = ObjCBridgeState::InstanceData(env);
  auto structInfo = bridgeState->getStructInfo(env, offset);
  return StructObject::getJSClass(env, structInfo);
}

NAPI_FUNCTION(unionGetter) {
  NAPI_PREAMBLE

  void *data;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, &data);
  MDSectionOffset offset = (MDSectionOffset)((size_t)data);

  auto bridgeState = ObjCBridgeState::InstanceData(env);
  auto structInfo = bridgeState->getUnionInfo(env, offset);
  return StructObject::getJSClass(env, structInfo);
}

StructInfo *getStructInfoFromMetadata(napi_env env, MDMetadataReader *metadata,
                                      MDSectionOffset offset) {
  auto originalOffset = offset;

  auto structInfo = new StructInfo();
  auto name = metadata->getString(offset);
  structInfo->name = name;
  offset += sizeof(MDSectionOffset);
  structInfo->size = metadata->getArraySize(offset);
  offset += sizeof(uint16_t);

  bool next = true;
  while (next) {
    MDSectionOffset nameOffset = metadata->getOffset(offset);
    next = (nameOffset & mdSectionOffsetNext) != 0;
    if (next) {
      nameOffset &= ~mdSectionOffsetNext;
    }
    if (nameOffset == MD_SECTION_OFFSET_NULL) {
      break;
    }
    auto fieldInfo = StructFieldInfo();
    fieldInfo.name = metadata->resolveString(nameOffset);
    offset += sizeof(MDSectionOffset);
    fieldInfo.offset = metadata->getArraySize(offset);
    offset += sizeof(uint16_t);
    fieldInfo.type = TypeConv::Make(env, metadata, &offset);
    structInfo->fields.push_back(fieldInfo);
  }

  return structInfo;
}

StructInfo *getStructInfoFromUnionMetadata(napi_env env,
                                           MDMetadataReader *metadata,
                                           MDSectionOffset offset) {
  auto originalOffset = offset;

  auto structInfo = new StructInfo();
  auto name = metadata->getString(offset);
  structInfo->name = name;
  offset += sizeof(MDSectionOffset);
  structInfo->size = metadata->getArraySize(offset);
  offset += sizeof(uint16_t);

  bool next = true;
  while (next) {
    MDSectionOffset nameOffset = metadata->getOffset(offset);
    offset += sizeof(MDSectionOffset);
    next = (nameOffset & mdSectionOffsetNext) != 0;
    if (next) {
      nameOffset &= ~mdSectionOffsetNext;
    }
    if (nameOffset == 0) {
      break;
    }
    auto fieldInfo = StructFieldInfo();
    fieldInfo.name = metadata->resolveString(nameOffset);
    fieldInfo.offset = 0;
    fieldInfo.type = TypeConv::Make(env, metadata, &offset);
    structInfo->fields.push_back(fieldInfo);
  }

  return structInfo;
}

void StructObject_finalize(napi_env env, void *data, void *hint) {
  auto structObject = (StructObject *)data;
  delete structObject;
}

NAPI_FUNCTION(StructConstructor) {
  NAPI_PREAMBLE

  napi_value jsThis, arg;
  StructInfo *info;
  size_t argc = 1;

  napi_get_cb_info(env, cbinfo, &argc, &arg, &jsThis, (void **)&info);

  napi_valuetype argType;
  napi_typeof(env, arg, &argType);

  StructObject *object;

  if (argType == napi_object) {
    object = new StructObject(env, info, arg);
  } else {
    object = new StructObject(info);
  }

  napi_ref ref;
  napi_wrap(env, jsThis, object, StructObject_finalize, nullptr, &ref);

  return jsThis;
}

NAPI_FUNCTION(StructPropertyGetter) {
  NAPI_PREAMBLE

  napi_value jsThis;
  StructFieldInfo *info;

  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, (void **)&info);

  auto object = StructObject::unwrap(env, jsThis);
  return object->get(env, info);
}

NAPI_FUNCTION(StructPropertySetter) {
  NAPI_PREAMBLE

  napi_value jsThis, arg;
  StructFieldInfo *info;
  size_t argc = 1;

  napi_get_cb_info(env, cbinfo, &argc, &arg, &jsThis, (void **)&info);

  auto object = StructObject::unwrap(env, jsThis);
  object->set(env, info, arg);

  return nullptr;
}

NAPI_FUNCTION(StructCustomInspect) {
  napi_value jsThis;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &jsThis, nullptr);

  auto object = StructObject::unwrap(env, jsThis);
  std::string str = "struct ";
  str += object->info->name;
  str += " {}";

  napi_value result;
  napi_create_string_utf8(env, str.c_str(), str.length(), &result);
  return result;
}

inline StructObject::StructObject(StructInfo *info, void *data) {
  this->info = info;
  if (data == nullptr) {
    this->data = malloc(info->size);
    memset(this->data, 0, this->info->size);
    this->owned = true;
  } else {
    this->data = data;
    this->owned = false;
  }
}

StructObject::StructObject(napi_env env, StructInfo *info, napi_value object,
                           void *memory) {
  this->info = info;

  if (memory == nullptr) {
    this->owned = true;
    this->data = malloc(info->size);
  } else {
    this->owned = false;
    this->data = memory;
  }

  for (auto &field : info->fields) {
    bool hasProp = false;
    napi_has_named_property(env, object, field.name, &hasProp);
    if (!hasProp) {
      continue;
    }
    napi_value property;
    napi_get_named_property(env, object, field.name, &property);
    set(env, &field, property);
  }
}

StructObject::~StructObject() {
  if (this->owned)
    free(this->data);
}

napi_value StructObject::get(napi_env env, StructFieldInfo *field) {
  auto data = (char *)this->data + field->offset;
  return field->type->toJS(env, data, kStructZeroCopy);
}

void StructObject::set(napi_env env, StructFieldInfo *field, napi_value value) {
  auto data = (char *)this->data + field->offset;
  bool shouldFree = false;
  field->type->toNative(env, value, data, &shouldFree, &shouldFree);
}

StructObject *StructObject::unwrap(napi_env env, napi_value object) {
  StructObject *result;
  auto status = napi_unwrap(env, object, (void **)&result);
  if (status != napi_ok)
    return nullptr;
  return result;
}

napi_value StructObject::defineJSClass(napi_env env, StructInfo *info) {
  auto properties = (napi_property_descriptor *)malloc(
      (info->fields.size() + 2) * sizeof(napi_property_descriptor));

  for (int i = 0; i < info->fields.size(); i++) {
    auto field = info->fields[i];
    auto prop = &properties[i];
    prop->utf8name = field.name;
    prop->name = nullptr;
    prop->method = nullptr;
    prop->value = nullptr;
    prop->attributes =
        (napi_property_attributes)(napi_enumerable | napi_writable);
    prop->data = &info->fields[i];
    prop->getter = JS_StructPropertyGetter;
    prop->setter = JS_StructPropertySetter;
  }

  auto prop = &properties[info->fields.size()];
  prop->utf8name = nullptr;
  prop->name = jsSymbolFor(env, "nodejs.util.inspect.custom");
  prop->method = JS_StructCustomInspect;
  prop->getter = nullptr;
  prop->setter = nullptr;
  prop->value = nullptr;
  prop->attributes = napi_default;
  prop->data = nullptr;

  napi_value size;
  napi_create_int32(env, info->size, &size);

  auto sizeofProp = &properties[info->fields.size() + 1]; 
  sizeofProp->utf8name = nullptr;
  sizeofProp->name = jsSymbolFor(env, "sizeof");
  sizeofProp->method = nullptr;
  sizeofProp->getter = nullptr;
  sizeofProp->setter = nullptr;
  sizeofProp->value = size;
  sizeofProp->attributes = napi_enumerable;
  sizeofProp->data = nullptr;

  napi_value result;
  napi_define_class(env, info->name, NAPI_AUTO_LENGTH, JS_StructConstructor,
                    (void *)info, info->fields.size() + 2, properties, &result);

  napi_define_properties(env, result, 1, sizeofProp);

  free(properties);

  return result;
}

napi_value StructObject::getJSClass(napi_env env, StructInfo *info) {
  if (info->jsClass != nullptr) {
    return get_ref_value(env, info->jsClass);
  }

  auto result = defineJSClass(env, info);
  info->jsClass = make_ref(env, result);

  return result;
}

napi_value StructObject::fromNative(napi_env env, StructInfo *info, void *data,
                                    bool owned) {
  napi_value result;
  napi_value cls = getJSClass(env, info);
  napi_new_instance(env, cls, 0, nullptr, &result);
  auto object = StructObject::unwrap(env, result);
  if (owned) {
    if (object->owned) {
      memcpy(object->data, data, info->size);
    } else {
      object->data = malloc(info->size);
      memcpy(object->data, data, info->size);
      object->owned = true;
    }
  } else {
    object->~StructObject();
    object->data = data;
    object->owned = false;
  }
  return result;
}

} // namespace objc_bridge
