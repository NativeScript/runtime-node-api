#include "struct.h"
#include "js_native_api.h"
#include "js_native_api_types.h"
#include "node_api_util.h"
#include "util.h"
#include <cstring>

namespace objc_bridge {

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

  auto object = new StructObject(info);
  napi_ref ref;
  napi_wrap(env, jsThis, object, StructObject_finalize, nullptr, &ref);

  if (argType == napi_object) {
    for (auto &field : info->fields) {
      bool hasProp = false;
      napi_has_named_property(env, arg, field.name, &hasProp);
      if (!hasProp)
        continue;
      napi_value property;
      napi_get_named_property(env, arg, field.name, &property);
      object->set(env, &field, property);
    }
  }

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

inline StructObject::StructObject(StructInfo *info) {
  this->info = info;
  this->data = malloc(info->size);
  memset(this->data, 0, this->info->size);
}

StructObject::~StructObject() { free(this->data); }

napi_value StructObject::get(napi_env env, StructFieldInfo *field) {
  auto data = (char *)this->data + field->offset;
  return field->type->toJS(env, data);
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
      (info->fields.size() + 1) * sizeof(napi_property_descriptor));

  for (int i = 0; i < info->fields.size(); i++) {
    auto field = info->fields[i];
    auto prop = &properties[i];
    prop->utf8name = field.name;
    prop->name = nullptr;
    prop->method = nullptr;
    prop->value = nullptr;
    prop->attributes = napi_enumerable;
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

  napi_value result;
  napi_define_class(env, info->name, NAPI_AUTO_LENGTH, JS_StructConstructor,
                    (void *)info, info->fields.size() + 1, properties, &result);

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

napi_value StructObject::fromNative(napi_env env, StructInfo *info,
                                    void *data) {
  napi_value result;
  napi_value cls = getJSClass(env, info);
  napi_new_instance(env, cls, 0, nullptr, &result);
  auto object = StructObject::unwrap(env, result);
  memcpy(object->data, data, info->size);
  return result;
}

} // namespace objc_bridge
