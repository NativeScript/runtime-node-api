#include "Performance.h"
#include "mach/mach_time.h"

namespace charon {

void Performance::init(napi_env env) {
  napi_value global, Performance, performance;

  napi_get_global(env, &global);

  const napi_property_descriptor properties[] = {
      {
          .utf8name = "now",
          .name = nullptr,
          .method = now,
          .getter = nullptr,
          .setter = nullptr,
          .value = nullptr,
          .attributes = napi_default,
          .data = nullptr,
      },
  };

  napi_define_class(env, "Performance", NAPI_AUTO_LENGTH,
                    Performance::constructor, nullptr, 1, properties,
                    &Performance);

  napi_new_instance(env, Performance, 0, nullptr, &performance);

  const napi_property_descriptor globalProperties[] = {
      {
          .utf8name = "performance",
          .name = nullptr,
          .method = nullptr,
          .getter = nullptr,
          .setter = nullptr,
          .value = performance,
          .attributes = napi_default,
          .data = nullptr,
      },
  };

  napi_define_properties(env, global, 1, globalProperties);
}

napi_value Performance::constructor(napi_env env, napi_callback_info cbinfo) {
  napi_value thisArg;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, &thisArg, nullptr);

  return thisArg;
}

napi_value Performance::now(napi_env env, napi_callback_info cbinfo) {
  uint64_t time = mach_absolute_time();
  mach_timebase_info_data_t timebase;
  mach_timebase_info(&timebase);
  double nanoseconds =
      (double)time * (double)timebase.numer / (double)timebase.denom;
  double milliseconds = nanoseconds / 1000000.0;

  napi_value result;
  napi_create_double(env, milliseconds, &result);
  return result;
}

} // namespace charon
