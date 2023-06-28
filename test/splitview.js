import { classes, NSMakeRect, NSMakeSize, objc } from "../index.js";

const {
  NSApplication,
  NSObject,
  NSViewController,
  NSSplitViewController,
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
  NSSplitViewItem,
  NSToolbar,
  NSMutableArray,
  NSToolbarItem,
  NSScrollView,
  NSOutlineView,
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

    const controller = SplitViewController.alloc().init();
    const window = NSWindow.windowWithContentViewController(controller);

    window.title = "NativeScript for macOS";
    window.delegate = this;
    window.styleMask = 1 | 2 | 4 | 8 | (1 << 15);
    // window.titlebarAppearsTransparent = true;
    // window.titleVisibility = 1 /* NSWindowTitleHidden */;

    const toolbar = NSToolbar.alloc().initWithIdentifier(
      "com.nativescript.mainWindowToolbar",
    );
    toolbar.delegate = controller;
    toolbar.displayMode = 2;
    toolbar.allowsUserCustomization = true;
    toolbar.autosavesConfiguration = true;

    window.toolbarStyle = 3 /* NSToolbarStyleUnified */;

    window.toolbar = toolbar;
    toolbar.validateVisibleItems();

    window.makeKeyAndOrderFront(this);
  }

  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

export class OutlineDataSource extends NSObject {
  static protocols = ["NSOutlineViewDataSource"];

  static {
    objc.registerClass(this);
  }

  outlineViewNumberOfChildrenOfItem(_outlineView, item) {
    console.log("outlineView:numberOfChildrenOfItem:", item);

    if (item === null) {
      return 2;
    }

    return 0;
  }

  outlineViewIsItemExpandable(_outlineView, item) {
    console.log("outlineView:isItemExpandable:", item);
    return false;
  }

  outlineViewChildOfItem(_outlineView, index, item) {
    console.log("outlineView:child:ofItem:", index, item);
    if (item === null) {
      return index === 0 ? "First" : "Second";
    }
  }

  // outlineViewObjectValueForTableColumnByItem(_outlineView, _column, item) {
  //   console.log("outlineView:objectValueForTableColumnByItem:", item);
  //   return item;
  // }
}

export class OutlineViewDelegate extends NSObject {
  static protocols = ["NSOutlineViewDelegate"];

  static {
    objc.registerClass(this);
  }

  outlineViewViewForTableColumnItem(_outlineView, tableColumn, item) {
    console.log("outlineView:viewForTableColumn:item:", tableColumn, item);
  }
}

export class LeftViewController extends NSViewController {
  static {
    objc.registerClass(this);
  }

  loadView() {
    const outline = NSOutlineView.alloc().init();
    outline.headerView = null;
    outline.indentationPerLevel = 10;
    outline.allowsColumnReordering = false;
    outline.allowsColumnResizing = false;
    outline.allowsColumnSelection = false;
    outline.allowsEmptySelection = false;
    const delegate = OutlineViewDelegate.alloc().init();
    const dataSource = OutlineDataSource.alloc().init();
    outline.delegate = delegate;
    outline.dataSource = dataSource;
    outline.setTranslatesAutoresizingMaskIntoConstraints(false);

    const scrollView = NSScrollView.alloc().init();

    scrollView.hasVerticalScroller = true;
    scrollView.hasHorizontalScroller = false;
    scrollView.borderType = 0 /* NSNoBorder */;
    scrollView.autohidesScrollers = true;
    scrollView.verticalScrollElasticity = 2;
    scrollView.setFocusRingType(1 /* NSFocusRingTypeNone */);
    scrollView.documentView = outline;
    scrollView.drawsBackground = false;
    scrollView.setTranslatesAutoresizingMaskIntoConstraints(false);

    this.view = scrollView;
  }
}

export class RightViewController extends NSViewController {
  static {
    objc.registerClass(this);
  }

  loadView() {
    const view = NSView.alloc().init();

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
      NSFont.fontWithNameSize(label.font.fontName, 35),
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

    view.addSubview(vstack);

    vstack.centerXAnchor.constraintEqualToAnchor(
      view.centerXAnchor,
    ).active = true;
    vstack.centerYAnchor.constraintEqualToAnchor(
      view.centerYAnchor,
    ).active = true;

    this.view = view;
  }
}

export class SplitViewController extends NSSplitViewController {
  static protocols = ["NSToolbarDelegate"];

  static {
    objc.registerClass(this);
  }

  leftVc = LeftViewController.alloc().init();
  rightVc = RightViewController.alloc().init();

  viewDidLoad() {
    this.view.frame = NSMakeRect(0, 0, 800, 600);

    const sidebarItem = NSSplitViewItem.sidebarWithViewController(this.leftVc);
    sidebarItem.minimumThickness = 200;
    sidebarItem.maximumThickness = 300;
    sidebarItem.canCollapse = true;

    const contentItem = NSSplitViewItem.contentListWithViewController(
      this.rightVc,
    );

    this.addSplitViewItem(sidebarItem);
    this.addSplitViewItem(contentItem);
  }

  toolbarAllowedItemIdentifiers(_toolbar) {
    const array = NSMutableArray.alloc().init();
    array.addObject("NSToolbarToggleSidebarItem");
    return array;
  }

  toolbarDefaultItemIdentifiers(_toolbar) {
    const array = NSMutableArray.alloc().init();
    array.addObject("NSToolbarToggleSidebarItem");
    return array;
  }

  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar(
    _toolbar,
    identifier,
    _flag,
  ) {
    const item = NSToolbarItem.alloc().initWithItemIdentifier(identifier)
      .retain();

    if (identifier === "NSToolbarToggleSidebarItem") {
      item.target = this;
      item.action = "toggleSidebar:";
      item.image = NSImage.imageNamed("sidebar.leading");
    }

    return item;
  }

  validateToolbarItem(_item) {
    return true;
  }
}

const NSApp = NSApplication.sharedApplication;
NSApp.setActivationPolicy(0);

NSApp.delegate = ApplicationDelegate.alloc().init();

NSApp.activateIgnoringOtherApps(true);
NSApp.run();
