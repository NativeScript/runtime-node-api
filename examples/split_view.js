// @ts-check

import "@nativescript/macos-node-api";

export class ApplicationDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate];

  static {
    NativeClass(this);
  }

  /**
   * @param {NSNotification} _notification
   */
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
    window.styleMask = NSWindowStyleMask.Titled |
      NSWindowStyleMask.Closable |
      NSWindowStyleMask.Miniaturizable |
      NSWindowStyleMask.Resizable |
      NSWindowStyleMask.FullSizeContentView;

    const toolbar = NSToolbar.alloc().initWithIdentifier(
      "com.nativescript.mainWindowToolbar",
    );
    toolbar.delegate = controller;
    toolbar.displayMode = NSToolbarDisplayMode.IconOnly;
    toolbar.allowsUserCustomization = true;
    toolbar.autosavesConfiguration = true;

    window.toolbarStyle = NSWindowToolbarStyle.Automatic;

    window.toolbar = toolbar;
    toolbar.validateVisibleItems();

    window.makeKeyAndOrderFront(NSApp);

    NSApp.activateIgnoringOtherApps(false);
  }

  /**
   * @param {NSObject} _sender
   * @returns {boolean}
   */
  applicationShouldTerminateAfterLastWindowClosed(_sender) {
    return true;
  }
}

export class Node {
  /**
   * @param {string} symbol
   * @param {string} title
   * @param {Array<Node>} children
   */
  constructor(symbol, title, children = []) {
    this.symbol = symbol;
    this.title = title;
    this.children = children;
  }
}

export class SidebarViewController extends NSViewController {
  static ObjCProtocols = [NSOutlineViewDelegate, NSOutlineViewDataSource];

  static {
    NativeClass(this);
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

  /**
   * @override
   */
  loadView() {
    const outline = NSOutlineView.new();

    // TODO: fix this
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    outline.headerView = null;
    outline.indentationPerLevel = 10;
    outline.allowsColumnReordering = false;
    outline.allowsColumnResizing = false;
    outline.allowsColumnSelection = false;
    outline.allowsEmptySelection = false;
    outline.rowSizeStyle = NSTableViewRowSizeStyle.Medium;

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
    scrollView.translatesAutoresizingMaskIntoConstraints = false;

    this.view = scrollView;
  }

  /**
   * @param {NSOutlineView} _outlineView
   * @param {NSTableColumn} _tableColumn
   * @param {Node} item
   * @returns
   */
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

    text.isBordered = false;
    text.drawsBackground = false;
    text.stringValue = item.title;
    text.isEditable = false;

    const view = NSTableCellView.new();

    view.textField = text;
    view.imageView = imageView;

    view.addSubview(text);
    view.addSubview(imageView);

    return view;
  }

  /**
   * @param {NSOutlineView} _outlineView
   * @param {Node | null} item
   * @returns
   */
  outlineViewNumberOfChildrenOfItem(_outlineView, item) {
    if (item === null) {
      return this.items.length;
    }

    return item.children.length;
  }

  /**
   * @param {NSOutlineView} _outlineView
   * @param {Node | null} item
   * @returns
   */
  outlineViewIsItemExpandable(_outlineView, item) {
    return item !== null && item.children.length > 0;
  }

  /**
   * @param {NSOutlineView} _outlineView
   * @param {number} index
   * @param {Node | null} item
   * @returns
   */
  outlineViewChildOfItem(_outlineView, index, item) {
    if (item === null) {
      return this.items[index];
    }

    return item.children[index];
  }

  /**
   * @param {NSOutlineView} _outlineView
   * @param {NSTableColumn} _column
   * @param {Node} item
   * @returns
   */
  outlineViewObjectValueForTableColumnByItem(_outlineView, _column, item) {
    return item.title;
  }

  /**
   * @type {ContentViewController | null}
   */
  contentView = null;

  /**
   * @param {NSNotification} _notification
   */
  outlineViewSelectionDidChange(_notification) {
    const outlineView = _notification.object;
    const item = outlineView.itemAtRow(outlineView.selectedRow);
    if (this.contentView?.label && item !== null) {
      this.contentView.label.stringValue = `Selected: ${item.title}`;
    }
  }

  /**
   * @param {NSOutlineView} _outlineView
   * @param {Node | null} item
   * @returns
   */
  outlineViewShouldSelectItem(_outlineView, item) {
    return item !== null && item.children.length === 0;
  }
}

export class ContentViewController extends NSViewController {
  static {
    NativeClass(this);
  }

  /** @type {NSTextField | null} */
  label = null;

  /**
   * @override
   */
  loadView() {
    const view = NSView.new();

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
      NSFont.fontWithNameSize(label.font.fontName, 35),
      NSFontTraitMask.Bold,
    );

    label.sizeToFit();

    this.label = label;

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

    view.addSubview(vstack);

    vstack.centerXAnchor.constraintEqualToAnchor(
      view.centerXAnchor,
    ).isActive = true;
    vstack.centerYAnchor.constraintEqualToAnchor(
      view.centerYAnchor,
    ).isActive = true;

    this.view = view;
  }
}

export class SplitViewController extends NSSplitViewController {
  static ObjCProtocols = [NSToolbarDelegate];

  static {
    NativeClass(this);
  }

  sidebarView = SidebarViewController.new();
  contentView = ContentViewController.new();

  /**
   * @override
   */
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

  /**
   * @param {NSToolbar} _toolbar
   * @returns
   */
  toolbarAllowedItemIdentifiers(_toolbar) {
    return this.toolbarDefaultItemIdentifiers(_toolbar);
  }

  /**
   * @param {NSToolbar} _toolbar
   * @returns
   */
  toolbarDefaultItemIdentifiers(_toolbar) {
    return NSArray.arrayWithArray([
      NSToolbarToggleSidebarItemIdentifier,
      NSToolbarFlexibleSpaceItemIdentifier,
      "run",
      NSToolbarSidebarTrackingSeparatorItemIdentifier,
    ]);
  }

  /**
   * @param {NSToolbar} _toolbar
   * @param {string} identifier
   * @param {any} _flag
   * @returns
   */
  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar(
    _toolbar,
    identifier,
    _flag,
  ) {
    const item = NSToolbarItem.alloc().initWithItemIdentifier(identifier);

    if (identifier === "run") {
      item.target = this;
      item.action = "toggleSidebar:";
      item.image = NSImage.imageWithSystemSymbolNameAccessibilityDescription(
        "play.fill",
        null,
      );
      // item.isBordered = true;
    }

    return item;
  }

  /**
   * @param {NSObject} _item
   * @returns
   * @override
   */
  validateToolbarItem(_item) {
    return true;
  }
}

const NSApp = NSApplication.sharedApplication;
NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);

NSApp.delegate = ApplicationDelegate.new();

NSApp.run();
