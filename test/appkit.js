import { classes, NSMakeRect, NSMakeSize, objc } from "../index.js";

const {
  NSObject,
  NSApplication,
  NSWindow,
  NSMenu,
  NSMenuItem,
  NSTextField,
  NSImage,
  NSImageView,
  NSColor,
  NSFont,
  NSFontManager,
  NSStackView,
} = classes;

const NSApp = NSApplication.sharedApplication;
NSApp.setActivationPolicy(0);

const window = NSWindow.alloc().initWithContentRectStyleMaskBackingDefer(
  NSMakeRect(0, 0, 500, 500),
  1 | 2 | 4 | 8,
  2,
  false,
);

window.title = "NativeScript for macOS";

export class WindowDelegate extends NSObject {
  static protocols = ["NSWindowDelegate"];

  static {
    objc.registerClass(this);
  }

  windowWillClose(notification) {
    console.log("windowWillClose", notification);
    NSApp.terminate(this);
  }
}

const delegate = WindowDelegate.alloc().init();
window.delegate = delegate;

const label = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, 390, 100));

label.stringValue = "Hello, macOS";

label.bezeled = false;
label.drawsBackground = false;
label.editable = false;
label.selectable = false;
label.alignment = 1 /* NSTextAlignmentCenter */;
label.setTranslatesAutoresizingMaskIntoConstraints(false);
label.textColor = NSColor.colorWithSRGBRedGreenBlueAlpha(1, 1, 1, 1);

label.font = NSFontManager.sharedFontManager.convertFontToHaveTrait(
  NSFont.fontWithNameSize(label.font.fontName, 45),
  2, /* NSBoldFontMask */
);

label.sizeToFit();

const vstack = NSStackView.alloc().initWithFrame(NSMakeRect(0, 0, 500, 500));

vstack.orientation = 1 /* NSUserInterfaceLayoutOrientationVertical */;
vstack.alignment = 9 /* NSLayoutAttributeCenterX */;
vstack.distribution = 0 /* NSStackViewDistributionFill */;
vstack.spacing = 40;
vstack.setTranslatesAutoresizingMaskIntoConstraints(false);

const image = NSImage.alloc().initWithContentsOfFile(
  new URL("../assets/NativeScript.png", import.meta.url).pathname,
);

image.size = NSMakeSize(128, 128);

const imageView = NSImageView.imageViewWithImage(image);

vstack.addViewInGravity(
  imageView,
  2, /* NSStackViewGravityCenter */
);
vstack.addViewInGravity(label, 2 /* NSStackViewGravityCenter */);

window.contentView.addSubview(vstack);

vstack.centerXAnchor.constraintEqualToAnchor(
  window.contentView.centerXAnchor,
).active = true;
vstack.centerYAnchor.constraintEqualToAnchor(
  window.contentView.centerYAnchor,
).active = true;

window.backgroundColor = NSColor.colorWithSRGBRedGreenBlueAlpha(
  118 / 255,
  171 / 255,
  235 / 255,
  1,
);

window.center();
window.makeKeyAndOrderFront(NSApp);
window.releasedWhenClosed = false;

NSApp.activateIgnoringOtherApps(true);

const menu = NSMenu.alloc().init();
NSApp.mainMenu = menu;

const appMenuItem = NSMenuItem.alloc().init();
menu.addItem(appMenuItem);

const appMenu = NSMenu.alloc().init();
appMenuItem.submenu = appMenu;

appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

NSApp.run();
