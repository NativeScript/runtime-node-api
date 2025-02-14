#ifdef __APPLE__

#include "App.h"

#import <AppKit/AppKit.h>

App *App::init(napi_env env) {
  App *appInst = new App();

  napi_value global, App, app;

  napi_get_global(env, &global);

  napi_create_object(env, &App);
  napi_set_named_property(env, global, "App", App);

  napi_create_function(env, "run", NAPI_AUTO_LENGTH, run, appInst, &app);
  napi_set_named_property(env, App, "run", app);

  return appInst;
}

napi_value App::run(napi_env env, napi_callback_info cbinfo) {
  App *appInst = nullptr;
  napi_get_cb_info(env, cbinfo, nullptr, nullptr, nullptr, (void **)&appInst);

  NSApplication *app = [NSApplication sharedApplication];

  [app finishLaunching];

  NSEvent *event;

  while (true) {
    event = [app nextEventMatchingMask:NSEventMaskAny
                             untilDate:[NSDate distantFuture]
                                inMode:NSDefaultRunLoopMode
                               dequeue:YES];
    if (event) {
      [app sendEvent:event];
      // appInst->runtime->drainMicrotasks();
    }
  }

  return nullptr;
}

#endif // __APPLE__