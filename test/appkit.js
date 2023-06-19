import classes from "../index.js";

const { NSApplication, NSWindow, NSString, NSMenu, NSMenuItem } = classes;

const NSApp = NSApplication.sharedApplication();
NSApp.setActivationPolicy_(0);

const window = NSWindow.alloc().initWithContentRect_styleMask_backing_defer_(
  new Float64Array([
    100,
    100,
    300,
    300,
  ]),
  1 | 2 | 4 | 8,
  2,
  false,
);

window.setTitle_(NSString.stringWithUTF8String_("Hello World"));

window.center();
window.makeKeyAndOrderFront_(NSApp);
window.setReleasedWhenClosed_(false);

NSApp.activateIgnoringOtherApps_(true);

const menu = NSMenu.alloc().init();
NSApp.setMainMenu_(menu);

const appMenuItem = NSMenuItem.alloc().init();
menu.addItem_(appMenuItem);

const appMenu = NSMenu.alloc().init();
appMenuItem.setSubmenu_(appMenu);

appMenu.addItemWithTitle_action_keyEquivalent_(
  NSString.stringWithUTF8String_("Quit"),
  "terminate:",
  NSString.stringWithUTF8String_("q"),
);

NSApp.run();
