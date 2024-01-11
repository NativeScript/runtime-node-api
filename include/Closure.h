#ifndef CLOSURE_H
#define CLOSURE_H

#include "MetadataReader.h"
#include "TypeConv.h"
#include "ffi.h"
#include "node_api_util.h"
#include "objc/runtime.h"
#include <string>
#include <thread>

namespace objc_bridge {

class Closure {
public:
  static void callBlockFromMainThread(napi_env env, napi_value js_cb,
                                      void *context, void *data);

  Closure(std::string typeEncoding, bool isBlock);
  Closure(MDMetadataReader *reader, MDSectionOffset offset,
          bool isBlock = false, std::string *encoding = nullptr,
          bool isMethod = false, bool isGetter = false, bool isSetter = false);

  ~Closure();

  napi_env env;
  napi_ref thisConstructor;
  napi_ref func = nullptr;
  bool isGetter = false;
  bool isSetter = false;
  std::string propertyName;
  napi_threadsafe_function tsfn;

  std::thread::id jsThreadId = std::this_thread::get_id();

  ffi_cif cif;
  ffi_closure *closure;
  void *fnptr;

  std::shared_ptr<TypeConv> returnType;
  std::vector<std::shared_ptr<TypeConv>> argTypes;
};

} // namespace objc_bridge

#endif /* CLOSURE_H */
