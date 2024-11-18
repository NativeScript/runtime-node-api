// @ts-check

import "@nativescript/macos-node-api";

console.log(
  "NSTextAlignment.Center:",
  NSTextAlignment.Center,
  "arch:",
  Deno.build.arch,
);

/**
 * @implements {NSApplicationDelegate}
 */
export class ApplicationDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate];

  static {
    NativeClass(this);
  }

  running = true;
  /**
   * @type {Window | null}
   */
  window = null;

  /**
   * @param {NSNotification} _notification
   */
  applicationWillTerminate(_notification) {
    this.running = false;
  }
}

/**
 * @implements {NSWindowDelegate}
 */
export class Window extends NSWindow {
  static ObjCProtocols = [NSWindowDelegate];

  static {
    NativeClass(this);
  }

  /**
   * @override
   */
  init() {
    const menu = NSMenu.new();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.new();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.new();
    appMenuItem.submenu = appMenu;

    appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

    super.initWithContentRectStyleMaskBackingDefer(
      { origin: { x: 0, y: 0 }, size: { width: 500, height: 500 } },
      NSWindowStyleMask.Titled |
        NSWindowStyleMask.Closable |
        NSWindowStyleMask.Miniaturizable |
        NSWindowStyleMask.Resizable,
      2,
      false,
    );

    this.title = "NativeScript for macOS";
    this.delegate = this;

    this.makeKeyAndOrderFront(NSApp);
    this.releasedWhenClosed = false;

    this.center();

    this.backgroundColor = NSColor.colorWithSRGBRedGreenBlueAlpha(
      118 / 255,
      171 / 255,
      235 / 255,
      1,
    );

    const label = NSTextField.alloc().initWithFrame({
      origin: { x: 0, y: 0 },
      size: { width: 390, height: 100 },
    });

    label.stringValue = "Hello, macOS";

    label.isBezeled = false;
    label.drawsBackground = false;
    label.isEditable = false;
    label.isSelectable = false;
    label.alignment = NSTextAlignment.Center;
    label.translatesAutoresizingMaskIntoConstraints = false;
    label.textColor = NSColor.colorWithSRGBRedGreenBlueAlpha(1, 1, 1, 1);

    label.font = NSFontManager.sharedFontManager.convertFontToHaveTrait(
      NSFont.fontWithNameSize(label.font.fontName, 45),
      NSFontTraitMask.Bold,
    );

    label.sizeToFit();

    const vstack = NSStackView.alloc().initWithFrame({
      origin: { x: 0, y: 0 },
      size: { width: 500, height: 500 },
    });

    vstack.orientation = NSUserInterfaceLayoutOrientation.Vertical;
    vstack.alignment = NSLayoutAttribute.CenterX;
    vstack.distribution = NSStackViewDistribution.Fill;
    vstack.spacing = 40;
    vstack.translatesAutoresizingMaskIntoConstraints = false;

    const image = NSImage.alloc().initWithContentsOfFile(
      new URL("../assets/NativeScript.png", import.meta.url).pathname,
    );

    image.size = { width: 128, height: 128 };

    const imageView = NSImageView.imageViewWithImage(image);

    vstack.addViewInGravity(imageView, NSStackViewGravity.Center);
    vstack.addViewInGravity(label, NSStackViewGravity.Center);

    this.contentView.addSubview(vstack);

    vstack.centerXAnchor.constraintEqualToAnchor(
      this.contentView.centerXAnchor,
    ).isActive = true;
    vstack.centerYAnchor.constraintEqualToAnchor(
      this.contentView.centerYAnchor,
    ).isActive = true;

    return this;
  }

  /**
   * @param {NSNotification} _notification
   */
  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

const NSApp = NSApplication.sharedApplication;

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);

// Class is lazily initialized when first used
const delegate = ApplicationDelegate.new();

// Add a method to the delegate class after it has been registered with the runtime,
// dynamically.
interop.addMethod(
  ApplicationDelegate,
  function applicationDidFinishLaunching(_notification) {
    this.window = Window.new();

    NSApp.activateIgnoringOtherApps(false);

    NSApp.stop(this);

    const loop = () => {
      const event = NSApp.nextEventMatchingMaskUntilDateInModeDequeue(
        NSEventMask.Any,
        null,
        "kCFRunLoopDefaultMode",
        true,
      );

      if (event != null) {
        NSApp.sendEvent(event);
      }

      if (this.running) {
        setTimeout(loop, 10);
        // queueMicrotask(loop);
      }
    };

    setTimeout(loop, 0);

    setTimeout(() => {
      console.log("[setTimeout] after 2 seconds");
    }, 2000);
  },
);

NSApp.delegate = delegate;

NSApp.run();
