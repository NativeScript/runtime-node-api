import "objc";

export class ApplicationDelegate extends NSObject {
  static protocols = ["NSApplicationDelegate"];

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

    const controller = SplitViewController.new();
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

    window.toolbarStyle = NSWindowToolbarStyle.unified;

    window.toolbar = toolbar;
    toolbar.validateVisibleItems();

    window.makeKeyAndOrderFront(NSApp);

    NSApp.activateIgnoringOtherApps(false);
  }

  applicationShouldTerminateAfterLastWindowClosed(_sender) {
    return true;
  }
}

export class Node {
  constructor(symbol, title, children = []) {
    this.symbol = symbol;
    this.title = title;
    this.children = children;
  }
}

export class SidebarViewController extends NSViewController {
  static protocols = ["NSOutlineViewDelegate", "NSOutlineViewDataSource"];

  static {
    objc.registerClass(this);
  }

  items = [
    new Node("icloud.fill", "Container", [
      new Node("house", "First"),
      new Node("heart", "Second"),
      new Node("star", "Third"),
    ]),
    new Node("tray.full", "Container 2", [
      new Node("house", "First"),
      new Node("heart", "Second"),
      new Node("star", "Third"),
    ]),
  ];

  loadView() {
    const outline = NSOutlineView.new();

    outline.headerView = null;
    outline.indentationPerLevel = 10;
    outline.allowsColumnReordering = false;
    outline.allowsColumnResizing = false;
    outline.allowsColumnSelection = false;
    outline.allowsEmptySelection = false;
    outline.rowSizeStyle = NSTableViewRowSizeStyle.medium;

    outline.delegate = this;
    outline.dataSource = this;

    const tableColumn = NSTableColumn.alloc().initWithIdentifier("Column");
    outline.addTableColumn(tableColumn);
    outline.outlineTableColumn = tableColumn;

    outline.expandItemExpandChildren(this.items[0], true);

    const scrollView = NSScrollView.new();

    scrollView.hasVerticalScroller = true;
    scrollView.hasHorizontalScroller = false;
    scrollView.documentView = outline;
    scrollView.drawsBackground = false;
    scrollView.setTranslatesAutoresizingMaskIntoConstraints(false);

    this.view = scrollView;
  }

  outlineViewViewForTableColumnItem(_outlineView, _tableColumn, item) {
    const text = NSTextField.new();
    const imageView = item.symbol
      ? NSImageView.imageViewWithImage(
        NSImage.imageWithSystemSymbolNameAccessibilityDescription(
          item.symbol,
          null,
        ),
      )
      : NSImageView.new();

    text.bordered = false;
    text.drawsBackground = false;
    text.stringValue = item.title;
    text.editable = false;

    const view = NSTableCellView.new();

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
    if (this.contentView && item !== null) {
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
    const view = NSView.new();

    const label = NSTextField.alloc().initWithFrame(
      { origin: { x: 0, y: 0 }, size: { width: 390, height: 100 } },
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
      { origin: { x: 0, y: 0 }, size: { width: 500, height: 500 } },
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

    image.size = { width: 128, height: 128 };

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

  sidebarView = SidebarViewController.new();
  contentView = ContentViewController.new();

  viewDidLoad() {
    this.view.frame = {
      origin: { x: 0, y: 0 },
      size: { width: 800, height: 600 },
    };

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
    const array = NSMutableArray.new();
    array.addObject("NSToolbarToggleSidebarItem");
    return array;
  }

  toolbarDefaultItemIdentifiers(_toolbar) {
    const array = NSMutableArray.new();
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

NSApp.delegate = ApplicationDelegate.new();

NSApp.run();
