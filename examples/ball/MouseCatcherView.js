// @ts-check

import "@nativescript/macos-node-api";

export class MouseCatcherView extends NSView {
  static {
    NativeClass(this);
  }

  /** @type {(() => void) | undefined} */
  onMouseDown;
  /** @type {(() => void) | undefined} */
  onMouseDrag;
  /** @type {(() => void) | undefined} */
  onMouseUp;
  /** @type {((event: NSEvent) => void) | undefined} */
  onScroll;

  /**
   * @param {NSEvent} _event
   */
  mouseDown(_event) {
    this.onMouseDown?.();
  }

  /**
   * @param {NSEvent} _event
   */
  mouseDragged(_event) {
    this.onMouseDrag?.();
  }

  /**
   * @param {NSEvent} _event
   */
  mouseUp(_event) {
    this.onMouseUp?.();
  }

  /**
   * @param {NSEvent} event
   */
  scrollWheel(event) {
    if (!(event.hasPreciseScrollingDeltas && event.momentumPhase == 0)) {
      return;
    }
    this.onScroll?.(event);
  }
}
