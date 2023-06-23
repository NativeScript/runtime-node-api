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
  NSString,
} = classes;

export class ApplicationDelegate extends NSObject {
  static protocols = ["NSApplicationDelegate"];

  static {
    objc.registerClass(this);
  }

  applicationDidFinishLaunching(_notification) {
    Window.alloc().init();
  }
}

export class Window extends NSWindow {
  static protocols = ["NSWindowDelegate"];

  static {
    objc.registerClass(this);
  }

  init() {
    const menu = NSMenu.alloc().init();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.alloc().init();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.alloc().init();
    appMenuItem.submenu = appMenu;

    appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

    super.initWithContentRectStyleMaskBackingDefer(
      NSMakeRect(0, 0, 500, 500),
      1 | 2 | 4 | 8,
      2,
      false,
    );

    this.title = "NativeScript for macOS";

    this.delegate = this;

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

    const vstack = NSStackView.alloc().initWithFrame(
      NSMakeRect(0, 0, 500, 500),
    );

    vstack.orientation = 1 /* NSUserInterfaceLayoutOrientationVertical */;
    vstack.alignment = 9 /* NSLayoutAttributeCenterX */;
    vstack.distribution = 0 /* NSStackViewDistributionFill */;
    vstack.spacing = 40;
    vstack.setTranslatesAutoresizingMaskIntoConstraints(false);

    const imageURL = NSString.stringWithUTF8String(
      new URL("../assets/NativeScript.png", import.meta.url).pathname,
    );
    const image = NSImage.alloc().initWithContentsOfFile(imageURL);

    image.size = NSMakeSize(128, 128);

    const imageView = NSImageView.imageViewWithImage(image);

    vstack.addViewInGravity(
      imageView,
      2, /* NSStackViewGravityCenter */
    );
    vstack.addViewInGravity(label, 2 /* NSStackViewGravityCenter */);

    this.contentView.addSubview(vstack);

    vstack.centerXAnchor.constraintEqualToAnchor(
      this.contentView.centerXAnchor,
    ).active = true;
    vstack.centerYAnchor.constraintEqualToAnchor(
      this.contentView.centerYAnchor,
    ).active = true;

    this.backgroundColor = NSColor.colorWithSRGBRedGreenBlueAlpha(
      118 / 255,
      171 / 255,
      235 / 255,
      1,
    );

    this.center();
    this.makeKeyAndOrderFront(NSApp);
    this.releasedWhenClosed = false;

    return this;
  }

  windowShouldClose(sender) {
    NSApp.terminate(sender);
    return true;
  }
}

const NSApp = NSApplication.sharedApplication;
NSApp.setActivationPolicy(0);
NSApp.delegate = ApplicationDelegate.alloc().init();
NSApp.activateIgnoringOtherApps(true);
NSApp.run();
