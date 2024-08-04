// @ts-check

import "@nativescript/macos-node-api";
import { BallViewController } from "./BallViewController.js";

export class BallWindowController extends NSWindowController {
  static ObjCProtocols = [NSWindowDelegate];

  static {
    NativeClass(this);
  }

  init() {
    const self = super.initWithWindow(null);
    if (self) {
      this.setupWindow();
      this.windowDidLoad();
    }
    return self;
  }

  setupWindow() {
    this.window = NSWindow.alloc().initWithContentRectStyleMaskBackingDefer(
      { origin: { x: 196, y: 240 }, size: { width: 480, height: 270 } },
      NSWindowStyleMask.FullSizeContentView,
      NSBackingStoreType.Buffered,
      false,
    );
    this.window.delegate = this;
    this.window.collectionBehavior = NSWindowCollectionBehavior.Transient |
      NSWindowCollectionBehavior.IgnoresCycle |
      NSWindowCollectionBehavior.FullScreenNone;
    this.window.title = "Ball";
    this.window.allowsToolTipsWhenApplicationIsInactive = false;
    this.window.autorecalculatesKeyViewLoop = false;
    this.window.isRestorable = false;
    this.window.hasShadow = false;
    this.window.isReleasedWhenClosed = false;
    this.window.animationBehavior = NSWindowAnimationBehavior.None;
    this.window.tabbingMode = NSWindowTabbingMode.Disallowed;
    this.window.contentViewController = BallViewController.new();
  }

  windowDidLoad() {
    super.windowDidLoad();
    const window = this.window;
    window.backgroundColor = NSColor.clearColor;
    window.isOpaque = false;
    window.acceptsMouseMovedEvents = false;
    window.ignoresMouseEvents = true;
    window.level = NSScreenSaverWindowLevel;
    this.updateWindowSize();
  }

  /**
   * @param {NSNotification} _notification
   */
  windowDidChangeScreen(_notification) {
    this.updateWindowSize();
  }

  /**
   * @param {NSNotification} _notification
   */
  windowDidChangeScreenProfile(_notification) {
    this.updateWindowSize();
  }

  updateWindowSize() {
    const screen = this.window?.screen;
    if (!screen) {
      return;
    }
    const frame = new CGRect({
      origin: { x: screen.frame.origin.x, y: screen.frame.origin.y },
      size: {
        width: screen.frame.size.width,
        height: screen.frame.size.height,
      },
    });
    this.window?.setFrameDisplay(frame, true);
  }
}
