// @ts-check

import "@nativescript/macos-node-api";
import { MouseCatcherView } from "./MouseCatcherView.js";
// deno-lint-ignore no-unused-vars
import { BallViewController } from "./BallViewController.js";
import { BallWindowController } from "./BallWindowController.js";
import {
  byConstrainingWithinBounds,
  getInferredRectOfHoveredDockIcon,
} from "./DockUtils.js";

export const RADIUS = 100;

export class AppController extends NSObject {
  static {
    NativeClass(this);
  }

  // MARK: - Init

  init() {
    this.ballViewController.delegate = this;
    this.setupClickWindow();
    return super.init();
  }

  setupClickWindow() {
    const catcher = MouseCatcherView.new();
    this.clickWindow.contentView = catcher;
    catcher.frame = {
      origin: { x: 0, y: 0 },
      size: { width: RADIUS * 2, height: RADIUS * 2 },
    };
    catcher.wantsLayer = true;
    // This is needed so that the window accepts mouse events
    catcher.layer.backgroundColor =
      NSColor.blackColor.colorWithAlphaComponent(0.01).CGColor;
    catcher.layer.cornerRadius = RADIUS;

    const weakSelf = new WeakRef(this);
    catcher.onMouseDown = () => {
      weakSelf.deref()?.ballViewController.onMouseDown();
    };
    catcher.onMouseDrag = () => {
      weakSelf.deref()?.ballViewController.onMouseDrag();
    };
    catcher.onMouseUp = () => {
      weakSelf.deref()?.ballViewController.onMouseUp();
    };
    catcher.onScroll = ($0) => {
      weakSelf.deref()?.ballViewController.onScroll($0);
    };
  }

  // MARK: - External actions
  dockIconClicked() {
    const screen = NSScreen.mainScreen;
    if (!screen) return;

    if (this.ballVisible) {
      this.ballViewController.animatePutBack(
        getInferredRectOfHoveredDockIcon(screen),
        () => {
          this.ballVisible = false;
        },
      );
      return;
    }

    const _ = this.ballViewController.view;

    this.ballViewController.animateBallFromRect(
      getInferredRectOfHoveredDockIcon(screen),
    );
    this.ballVisible = true;
  }

  // MARK: - State

  _ballVisible = false;

  /**
   * @param {boolean} old
   */
  _ballVisibleDidSet(old) {
    if (this._ballVisible === old) {
      return;
    }

    this.ballWindowController.window.setIsVisible(this._ballVisible);
    this.clickWindow.setIsVisible(this._ballVisible);

    this.ballViewController.sceneView.isPaused = !this._ballVisible;
    this.showPutBackIcon = this._ballVisible;

    if (this._ballVisible) {
      this.updateClickWindowPosition();
    }
  }

  get ballVisible() {
    return this._ballVisible;
  }

  set ballVisible(value) {
    const old = this._ballVisible;
    this._ballVisible = value;
    this._ballVisibleDidSet(old);
  }

  // MARK - Windows
  /**
   * @type {BallWindowController}
   */
  ballWindowController = BallWindowController.new();

  /**
   * @returns {BallViewController}
   */
  get ballViewController() {
    // @ts-ignore it will be BallViewController always because of BallWindowController
    return this.ballWindowController.window.contentViewController;
  }

  /**
   * @type {NSWindow | null}
   */
  _clickWindow = null;

  get clickWindow() {
    if (!this._clickWindow) {
      const clickWindow = NSWindow.alloc()
        .initWithContentRectStyleMaskBackingDefer(
          {
            origin: { x: 0, y: 0 },
            size: { width: RADIUS, height: RADIUS * 2 },
          },
          0,
          NSBackingStoreType.Buffered,
          false,
        );
      clickWindow.isReleasedWhenClosed = false;
      clickWindow.level = NSScreenSaverWindowLevel; // ?
      clickWindow.backgroundColor = NSColor.clearColor;
      this._clickWindow = clickWindow;
      return clickWindow;
    }

    return this._clickWindow;
  }

  // MARK: - Dock icon

  _showPutBackIcon = false;

  /**
   * @param {boolean} _old
   */
  _showPutBackIconDidSet(_old) {
    if (this._showPutBackIcon) {
      NSApp.dockTile.contentView = this.putBackDockView;
    } else {
      NSApp.dockTile.contentView = this.ballDockView;
    }
    NSApp.dockTile.display();
  }

  get showPutBackIcon() {
    return this._showPutBackIcon;
  }

  set showPutBackIcon(value) {
    const old = this._showPutBackIcon;
    this._showPutBackIcon = value;
    this._showPutBackIconDidSet(old);
  }

  putBackDockView = NSImageView.imageViewWithImage(
    NSImage.alloc().initWithContentsOfFile(
      new URL("./assets/PutBack.png", import.meta.url).pathname,
    ),
  );

  ballDockView = NSImageView.imageViewWithImage(
    NSImage.alloc().initWithContentsOfFile(
      new URL("./assets/Ball.png", import.meta.url).pathname,
    ),
  );

  /**
   * @param {BallViewController} _vc
   * @param {CGRect} _pos
   */
  ballViewControllerBallDidMoveToPosition(_vc, _pos) {
    this.updateClickWindowPosition();
  }

  updateClickWindowPosition() {
    const rect = this.ballViewController.targetMouseCatcherRect;
    if (!this.ballVisible || !rect) return;

    const rounding = 10;
    rect.origin.x = Math.round(CGRectGetMinX(rect) / rounding) * rounding;
    rect.origin.y = Math.round(CGRectGetMinY(rect) / rounding) * rounding;

    // HACK: Assume scene coords are same as window coords
    const window = this.ballWindowController.window;
    if (!window) return;
    const screen = window.screen;
    if (!screen) return;

    if (rect) {
      this.clickWindow.setFrameDisplay(
        byConstrainingWithinBounds(rect, screen.frame),
        false,
      );
    }
  }
}
