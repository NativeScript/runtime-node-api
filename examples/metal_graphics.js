// @ts-check

import "objc";

export class ApplicationDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate, NSWindowDelegate];

  static {
    NativeClass(this);
  }

  /**
   * @param {NSNotification} _notification
   */
  applicationDidFinishLaunching(_notification) {
    const menu = NSMenu.new();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.new();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.new();
    appMenuItem.submenu = appMenu;

    appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

    const controller = ViewController.new();
    const window = NSWindow.windowWithContentViewController(controller);

    window.title = "NativeScript for macOS";
    window.delegate = this;
    window.styleMask = NSWindowStyleMask.Titled | NSWindowStyleMask.Closable |
      NSWindowStyleMask.Miniaturizable | NSWindowStyleMask.Resizable |
      NSWindowStyleMask.FullSizeContentView;

    window.titlebarAppearsTransparent = true;
    window.titleVisibility = NSWindowTitleVisibility.Hidden;

    window.backgroundColor = NSColor.colorWithSRGBRedGreenBlueAlpha(
      118 / 255,
      171 / 255,
      235 / 255,
      1,
    );

    window.makeKeyAndOrderFront(this);

    NSApp.activateIgnoringOtherApps(false);
  }

  /**
   * @param {NSNotification} _notification
   */
  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

export class ViewController extends NSViewController {
  static {
    NativeClass(this);
  }

  loadView() {
    this.view = NSView.new();
  }

  viewDidLoad() {
    super.viewDidLoad();
  }
}

const NSApp = NSApplication.sharedApplication;

NSApp.delegate = ApplicationDelegate.new();

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);

NSApplicationMain(0, null);
