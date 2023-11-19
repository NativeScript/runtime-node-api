// @ts-check

import "../index.js";

objc.import("GameController");

class Observer extends NSObject {
  static ObjCExposedMethods = {
    didConnect: {
      returns: interop.types.void,
      params: [NSNotification],
    },
  };

  static {
    NativeClass(this);
  }

  init() {
    super.init();
    NSNotificationCenter.defaultCenter.addObserverSelectorNameObject(
      this,
      "didConnect",
      GCControllerDidBecomeCurrentNotification,
      null,
    );
    return this;
  }

  /**
   * @param {NSNotification} _notification
   */
  didConnect(_notification) {
    // const controller = notification.object;
    console.log(GCController.current);
  }
}

Observer.new();
CFRunLoopRun();
