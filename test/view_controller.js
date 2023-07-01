import { classes, NSMakeRect, NSMakeSize, objc } from "../index.js";

const {
  NSApplication,
  NSObject,
  NSViewController,
  NSView,
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
  NSButton,
  NSAlert,
} = classes;

export class ApplicationDelegate extends NSObject {
  static protocols = ["NSApplicationDelegate", "NSWindowDelegate"];

  static {
    objc.registerClass(this);
  }

  applicationDidFinishLaunching(_notification) {
    const menu = NSMenu.alloc().init();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.alloc().init();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.alloc().init();
    appMenuItem.submenu = appMenu;

    appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

    const controller = ViewController.alloc().init();
    const window = NSWindow.windowWithContentViewController(controller);

    window.title = "NativeScript for macOS";
    window.delegate = this;

    window.backgroundColor = NSColor.colorWithSRGBRedGreenBlueAlpha(
      118 / 255,
      171 / 255,
      235 / 255,
      1,
    );

    window.makeKeyAndOrderFront(this);
  }

  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

export class ViewController extends NSViewController {
  static exposedMethods = {
    buttonClicked: {
      params: ["id"],
      returns: "void",
    },
  };

  static {
    objc.registerClass(this);
  }

  i = 0;
  button = null;

  loadView() {
    this.view = NSView.alloc().init();
  }

  viewDidLoad() {
    super.viewDidLoad();

    this.view.frame = NSMakeRect(0, 0, 500, 500);

    const label = NSTextField.alloc().initWithFrame(
      NSMakeRect(0, 0, 390, 100),
    );

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

    const button = NSButton.buttonWithTitleTargetAction(
      "Try me!",
      this,
      "buttonClicked",
    );

    button.bezelStyle = 4 /* NSRoundedBezelStyle */;
    button.setButtonType(0 /* NSMomentaryLightButton */);
    button.font = NSFontManager.sharedFontManager.convertFontToHaveTrait(
      NSFont.fontWithNameSize(button.font.fontName, 20),
      2, /* NSBoldFontMask */
    );
    button.sizeToFit();
    button.setTranslatesAutoresizingMaskIntoConstraints(false);

    this.button = button;

    vstack.addViewInGravity(
      imageView,
      2, /* NSStackViewGravityCenter */
    );
    vstack.addViewInGravity(label, 2 /* NSStackViewGravityCenter */);
    vstack.addViewInGravity(button, 2 /* NSStackViewGravityCenter */);

    this.view.addSubview(vstack);

    vstack.centerXAnchor.constraintEqualToAnchor(
      this.view.centerXAnchor,
    ).active = true;
    vstack.centerYAnchor.constraintEqualToAnchor(
      this.view.centerYAnchor,
    ).active = true;
  }

  buttonClicked(_sender) {
    if (this.i == 0) {
      const alert = NSAlert.alloc().init();
      alert.icon = NSImage.imageWithSystemSymbolNameAccessibilityDescription(
        "cursorarrow.click",
        null,
      );
      alert.messageText = "Clicked for the first time!";
      alert.runModal();
    }

    this.button.title = `Clicked ${++this.i} times`;
  }
}

const NSApp = NSApplication.sharedApplication;
NSApp.setActivationPolicy(0);

NSApp.delegate = ApplicationDelegate.alloc().init();

NSApp.activateIgnoringOtherApps(true);
NSApp.run();
