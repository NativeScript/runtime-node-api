import "objc";

export class ApplicationDelegate extends NSObject {
  static protocols = [NSApplicationDelegate, NSWindowDelegate];

  static {
    objc.registerClass(this);
  }

  applicationDidFinishLaunching(_notification) {
    const menu = NSMenu.new();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.new();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.new();
    appMenuItem.submenu = appMenu;

    appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

    const controller = ViewController.new();
    globalThis.vc = controller;
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

    NSApp.activateIgnoringOtherApps(false);
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
    this.view = NSView.new();
  }

  viewDidLoad() {
    super.viewDidLoad();

    this.view.frame = { size: { width: 500, height: 500 } };

    const label = NSTextField.alloc().initWithFrame(
      { size: { width: 390, height: 100 } },
    );

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
      { size: { width: 500, height: 500 } },
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

    image.size = { width: 128, height: 128 };

    const imageView = NSImageView.imageViewWithImage(image);

    const button = NSButton.buttonWithTitleTargetAction(
      "Try me!",
      this,
      "buttonClicked",
    );
    button.controlSize = NSControlSize.large;
    button.bezelStyle = NSBezelStyle.rounded;
    button.setButtonType(NSButtonType.momentaryLight);
    button.setTranslatesAutoresizingMaskIntoConstraints(false);

    this.button = button;

    vstack.addViewInGravity(imageView, NSStackViewGravity.center);
    vstack.addViewInGravity(label, NSStackViewGravity.center);
    vstack.addViewInGravity(button, NSStackViewGravity.center);

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
      const alert = NSAlert.new();
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
NSApp.setActivationPolicy(NSApplicationActivationPolicy.regular);

NSApp.delegate = ApplicationDelegate.new();

NSApp.activateIgnoringOtherApps(true);
NSApp.run();
