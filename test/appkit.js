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

  running = true;

  applicationDidFinishLaunching(_notification) {
    this.window = Window.new();

    NSApp.stop(this);

    this.runloopMode = NSString.stringWithUTF8String("kCFRunLoopDefaultMode")
      .retain();

    const loop = () => {
      const event = NSApp.nextEventMatchingMaskUntilDateInModeDequeue(
        2n ** 64n - 1n,
        null,
        this.runloopMode,
        true,
      );

      if (event != null) {
        NSApp.sendEvent(event);
      }

      if (this.running) {
        setTimeout(loop, 10);
      }
    };

    setTimeout(loop, 0);

    setTimeout(() => {
      console.log("[setTimeout] after 2 seconds");
    }, 2000);
  }

  applicationWillTerminate(_notification) {
    this.running = false;
  }
}

export class Window extends NSWindow {
  static protocols = ["NSWindowDelegate"];

  static {
    objc.registerClass(this);
  }

  init() {
    const menu = NSMenu.new();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.new();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.new();
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
    label.alignment = NSTextAlignment.center;
    label.setTranslatesAutoresizingMaskIntoConstraints(false);
    label.textColor = NSColor.colorWithSRGBRedGreenBlueAlpha(1, 1, 1, 1);

    label.font = NSFontManager.sharedFontManager.convertFontToHaveTrait(
      NSFont.fontWithNameSize(label.font.fontName, 45),
      NSFontTraitMask.bold,
    );

    label.sizeToFit();

    const vstack = NSStackView.alloc().initWithFrame(
      NSMakeRect(0, 0, 500, 500),
    );

    vstack.orientation = NSUserInterfaceLayoutOrientation.vertical;
    vstack.alignment = NSLayoutAttribute.centerX;
    vstack.distribution = NSStackViewDistribution.fill;
    vstack.spacing = 40;
    vstack.setTranslatesAutoresizingMaskIntoConstraints(false);

    const imageURL = NSString.stringWithUTF8String(
      new URL("../assets/NativeScript.png", import.meta.url).pathname,
    );
    const image = NSImage.alloc().initWithContentsOfFile(imageURL);

    image.size = NSMakeSize(128, 128);

    const imageView = NSImageView.imageViewWithImage(image);

    vstack.addViewInGravity(imageView, NSStackViewGravity.center);
    vstack.addViewInGravity(label, NSStackViewGravity.center);

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

  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

const NSApp = NSApplication.sharedApplication;
NSApp.setActivationPolicy(NSApplicationActivationPolicy.regular);
NSApp.delegate = ApplicationDelegate.new();
NSApp.activateIgnoringOtherApps(true);
NSApp.run();
