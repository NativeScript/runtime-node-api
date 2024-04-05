// @ts-check

import "@nativescript/macos-node-api";

/**
 * @implements {NSApplicationDelegate}
 */
export class ApplicationDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate];

  static ObjCExposedMethods = {
    buttonClicked: {
      params: [NSView],
      returns: interop.types.void,
    },
  };

  static {
    NativeClass(this);
  }

  popover = NSPopover.new();

  /**
   * @param {NSNotification} _notification
   */
  applicationDidFinishLaunching(_notification) {
    const statusBar = NSStatusBar.systemStatusBar;
    const statusItem = statusBar.statusItemWithLength(
      NSVariableStatusItemLength
    );

    if (statusItem.button != null) {
      statusItem.button.image =
        NSImage.imageWithSystemSymbolNameAccessibilityDescription("star", null);

      statusItem.button.action = "buttonClicked";
      statusItem.button.target = this;

      this.popover.contentViewController = ViewController.new();
    }
  }

  /**
   * @param {NSView} sender
   */
  buttonClicked(sender) {
    if (this.popover.isShown) {
      this.popover.performClose(sender);
    } else {
      this.popover.showRelativeToRectOfViewPreferredEdge(
        sender.bounds,
        sender,
        NSRectEdge.MinYEdge
      );
    }
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

    this.view.frame = {
      origin: { x: 0, y: 0 },
      size: { width: 300, height: 300 },
    };

    const image = NSImage.alloc().initWithContentsOfFile(
      new URL("../assets/NativeScript.png", import.meta.url).pathname
    );

    image.size = { width: 128, height: 128 };

    const imageView = NSImageView.imageViewWithImage(image);

    imageView.translatesAutoresizingMaskIntoConstraints = false;

    this.view.addSubview(imageView);

    imageView.centerXAnchor.constraintEqualToAnchor(
      this.view.centerXAnchor
    ).isActive = true;
    imageView.centerYAnchor.constraintEqualToAnchor(
      this.view.centerYAnchor
    ).isActive = true;
  }
}

const NSApp = NSApplication.sharedApplication;

NSApp.delegate = ApplicationDelegate.new();

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Accessory);

NSApplicationMain(0, null);
