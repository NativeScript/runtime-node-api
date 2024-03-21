#include "InlineFunctions.h"
#include "js_native_api.h"

namespace objc_bridge {

static const char *inlineFunctionsSource = R"(

globalThis.CGPointMake = globalThis.NSMakePoint = function CGMakePoint(x, y) {
  return { x, y };
};

globalThis.CGSizeMake = globalThis.NSMakeSize = function CGMakeSize(width, height) {
  return { width, height };
};

globalThis.CGRectMake = globalThis.NSMakeRect = function CGMakeRect(x, y, width, height) {
  return { origin: { x, y }, size: { width, height } };
};

globalThis.NSMakeRange = function NSMakeRange(location, length) {
  return { location, length };
};

globalThis.UIEdgeInsetsMake = function UIEdgeInsetsMake(top, left, bottom, right) {
  return { top, left, bottom, right };
};

)";

void registerInlineFunctions(napi_env env) {
  napi_value script, result;
  napi_create_string_utf8(env, inlineFunctionsSource, NAPI_AUTO_LENGTH,
                          &script);
  napi_run_script(env, script, &result);
}

} // namespace objc_bridge
