import { NSMakeRect, NSMakeSize, objc } from "../index.js";

export class ApplicationDelegate extends NSObject {
  static protocols = ["NSApplicationDelegate"];

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

  applicationShouldTerminateAfterLastWindowClosed(_sender) {
    return true;
  }
}

export class Node extends NSObject {
  static {
    objc.registerClass(this);
  }

  initWithSymbolTitleChildren(symbol, title, children = []) {
    this.symbol = symbol;
    this.title = title;
    this.children = children;
    return this;
  }
}

export class SidebarViewController extends NSViewController {
  static protocols = ["NSOutlineViewDelegate", "NSOutlineViewDataSource"];

  static {
    objc.registerClass(this);
  }

  items = [
    Node.new().initWithSymbolTitleChildren("icloud.fill", "Container", [
      Node.new().initWithSymbolTitleChildren("house", "First"),
      Node.new().initWithSymbolTitleChildren("heart", "Second"),
      Node.new().initWithSymbolTitleChildren("star", "Third"),
    ]),
    Node.new().initWithSymbolTitleChildren("tray.full", "Container 2", [
      Node.new().initWithSymbolTitleChildren("house", "First"),
      Node.new().initWithSymbolTitleChildren("heart", "Second"),
      Node.new().initWithSymbolTitleChildren("star", "Third"),
    ]),
  ];

  loadView() {
    const outline = NSOutlineView.alloc().init();

    outline.headerView = null;
    outline.indentationPerLevel = 10;
    outline.allowsColumnReordering = false;
    outline.allowsColumnResizing = false;
    outline.allowsColumnSelection = false;
    outline.allowsEmptySelection = false;
    outline.rowSizeStyle = 2 /* NSTableViewRowSizeStyleMedium */;

    outline.delegate = this;
    outline.dataSource = this;

    const tableColumn = NSTableColumn.alloc().initWithIdentifier("Column");
    outline.addTableColumn(tableColumn);
    outline.outlineTableColumn = tableColumn;

    outline.expandItemExpandChildren(this.items[0], true);

    const scrollView = NSScrollView.alloc().init();

    scrollView.hasVerticalScroller = true;
    scrollView.hasHorizontalScroller = false;
    scrollView.borderType = 0 /* NSNoBorder */;
    scrollView.autohidesScrollers = true;
    scrollView.verticalScrollElasticity = 2;
    scrollView.documentView = outline;
    scrollView.drawsBackground = false;
    scrollView.setTranslatesAutoresizingMaskIntoConstraints(false);

    this.view = scrollView;
  }

  outlineViewViewForTableColumnItem(_outlineView, _tableColumn, item) {
    const text = NSTextField.alloc().init();
    const imageView = item.symbol
      ? NSImageView.imageViewWithImage(
        NSImage.imageWithSystemSymbolNameAccessibilityDescription(
          item.symbol,
          null,
        ),
      )
      : NSImageView.alloc().init();

    text.bordered = false;
    text.drawsBackground = false;
    text.stringValue = item.title;
    text.editable = false;

    const view = NSTableCellView.alloc().init();

    view.textField = text;
    view.imageView = imageView;

    view.addSubview(text);
    view.addSubview(imageView);

    return view;
  }

  outlineViewNumberOfChildrenOfItem(_outlineView, item) {
    if (item === null) {
      return this.items.length;
    }

    return item.children.length;
  }

  outlineViewIsItemExpandable(_outlineView, item) {
    return item !== null && item.children.length > 0;
  }

  outlineViewChildOfItem(_outlineView, index, item) {
    if (item === null) {
      return this.items[index];
    }

    return item.children[index];
  }

  outlineViewObjectValueForTableColumnByItem(_outlineView, _column, item) {
    return item.title;
  }

  contentView = null;

  outlineViewSelectionDidChange(_notification) {
    const outlineView = _notification.object;
    const item = outlineView.itemAtRow(outlineView.selectedRow);
    if (this.contentView) {
      this.contentView.label.stringValue = `Selected: ${item.title}`;
    }
  }

  outlineViewShouldSelectItem(_outlineView, item) {
    return item !== null && item.children.length === 0;
  }
}

export class ContentViewController extends NSViewController {
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

    this.label = label;

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

  sidebarView = SidebarViewController.alloc().init();
  contentView = ContentViewController.alloc().init();

  viewDidLoad() {
    this.view.frame = NSMakeRect(0, 0, 800, 600);

    const sidebarItem = NSSplitViewItem.sidebarWithViewController(
      this.sidebarView,
    );
    sidebarItem.minimumThickness = 200;
    sidebarItem.maximumThickness = 300;
    sidebarItem.canCollapse = true;

    const contentItem = NSSplitViewItem.contentListWithViewController(
      this.contentView,
    );

    this.addSplitViewItem(sidebarItem);
    this.addSplitViewItem(contentItem);

    this.sidebarView.contentView = this.contentView;
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
    const item = NSToolbarItem.alloc().initWithItemIdentifier(identifier);

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
