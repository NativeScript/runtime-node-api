// @ts-check

import "@nativescript/macos-node-api";

objc.import("WebKit");

export class ApplicationDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate, NSWindowDelegate];

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

    const controller = ViewController.new();
    const window = NSWindow.windowWithContentViewController(controller);

    window.title = "NativeScript for macOS";
    window.delegate = this;
    window.styleMask = NSWindowStyleMask.Titled |
      NSWindowStyleMask.Closable |
      NSWindowStyleMask.Miniaturizable |
      NSWindowStyleMask.Resizable;

    window.makeKeyAndOrderFront(this);

    NSApp.activateIgnoringOtherApps(false);
  }

  /**
   * @param {NSNotification} _notification
   */
  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

/**
 * @implements {WKUIDelegate}
 * @implements {WKNavigationDelegate}
 */
export class ViewController extends NSViewController {
  static ObjCProtocols = [WKUIDelegate, WKNavigationDelegate];

  static {
    NativeClass(this);
  }

  /**
   * @type {WKWebView | undefined}
   */
  webview;

  /**
   * @override
   */
  loadView() {
    const config = WKWebViewConfiguration.new();
    const view = WKWebView.alloc().initWithFrameConfiguration(
      CGRectZero,
      config,
    );
    view.UIDelegate = this;
    view.navigationDelegate = this;
    this.view = view;
    this.webview = view;
  }

  /**
   * @override
   */
  viewDidLoad() {
    super.viewDidLoad();

    this.view.frame = {
      origin: { x: 0, y: 0 },
      size: { width: 800, height: 600 },
    };

    const url = NSURL.URLWithString("https://nativescript.org");
    const request = NSURLRequest.requestWithURL(url);
    if (this.webview) this.webview.loadRequest(request);
  }

  /**
   * @param {WKWebView} _webView
   * @param {WKNavigationAction} _navigationAction
   * @param {(p1: interop.Enum<typeof WKNavigationActionPolicy>) => void} decisionHandler
   */
  webViewDecidePolicyForNavigationActionDecisionHandler(
    _webView,
    _navigationAction,
    decisionHandler,
  ) {
    decisionHandler(WKNavigationActionPolicy.Allow);
  }
}

const NSApp = NSApplication.sharedApplication;

NSApp.delegate = ApplicationDelegate.new();

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);

NSApplicationMain(0, null);
