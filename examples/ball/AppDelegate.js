// @ts-check

import "@nativescript/macos-node-api";
import { AppController } from "./AppController.js";

export class AppDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate];

  static {
    NativeClass(this);
  }

  appController = AppController.new();

  /**
   * @param {NSNotification} _notification 
   */
  applicationWillFinishLaunching(_notification) {
    NSApp.applicationIconImage = NSImage.alloc().initWithContentsOfFile(
      new URL("./assets/Ball.png", import.meta.url).pathname,
    );
  }

  /**
   * @param {NSApplication} _app
   * @returns {boolean}
   */
  applicationSupportsSecureRestorableState(_app) {
    return true;
  }

  // When dock icon is pressed, animate ball from dock pos
  /**
   * @param {NSApplication} _sender
   * @param {boolean} _flag
   * @returns {boolean}
   */
  applicationShouldHandleReopenHasVisibleWindows(_sender, _flag) {
    this.appController.dockIconClicked();
    return true;
  }
}
