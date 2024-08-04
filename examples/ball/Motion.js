// @ts-check

import "@nativescript/macos-node-api";
import { animate } from "popmotion";

export class CALayerDriver extends NSObject {
  static ObjCExposedMethods = {
    tick: { returns: interop.types.void, params: [] },
  };

  static {
    NativeClass(this);
  }

  /**
   * @type {CALayerDriver | null}
   */
  static singleton = null;

  static get driver() {
    if (!CALayerDriver.singleton) {
      CALayerDriver.singleton = CALayerDriver.new();
    }

    return CALayerDriver.singleton;
  }

  /**
   * @param {(timestamp: number) => void} ticker
   */
  static addTicker(ticker) {
    return {
      start: () => {
        const driver = CALayerDriver.driver;

        driver.tickers.add(ticker);

        if (driver.tickers.size === 1) {
          driver.prevTick = performance.now();
          driver.start();
        }
      },

      stop: () => {
        const driver = CALayerDriver.driver;

        if (!driver.tickers.delete(ticker)) {
          return;
        }

        if (driver.tickers.size === 0) {
          CALayerDriver.stop();
        }
      },
    };
  }

  /**
   * @type {CADisplayLink | null}
   */
  displayLink = null;

  /**
   * @type {Set<(timestamp: number) => void>}
   */
  tickers = new Set();

  start() {
    if (this.displayLink) {
      throw new Error("Display link is already initialized");
    }

    this.displayLink = NSScreen.mainScreen.displayLinkWithTargetSelector(
      this,
      "tick",
    );

    this.displayLink.addToRunLoopForMode(
      NSRunLoop.currentRunLoop,
      NSDefaultRunLoopMode,
    );

    this.displayLink.preferredFrameRateRange = {
      minimum: 90,
      maximum: 120,
      preferred: 120,
    };
  }

  // Has to be only working on the singleton because popmotion may call this without
  // the correct `this` context.
  static stop() {
    if (!CALayerDriver.singleton?.displayLink) {
      throw new Error("Display link is not initialized and stop was called");
    }

    CALayerDriver.singleton.displayLink?.invalidate();
    CALayerDriver.singleton.displayLink = null;
  }

  /**
   * @type {number | null}
   */
  prevTick = null;

  tick() {
    if (!this.displayLink) {
      throw new Error("Display link is not initialized and tick was called");
    }

    const timestamp = performance.now();
    const delta = this.prevTick ? timestamp - this.prevTick : 0;
    this.prevTick = timestamp;

    for (const ticker of this.tickers) {
      ticker(delta);
    }
  }
}

export class SpringAnimation {
  resolvesUponReachingToValue = false;
  resolvingEpsilon = 0.1;
  value = 0;
  toValue = 0;
  stiffness = 100;
  damping = 10; 
  /**
   * @type {number | undefined}
   */
  velocity;

  /**
   * @type {(value: number) => void}
   */
  onValueChange = () => {};

  /**
   * @type {() => void}
   */
  completion = () => {};

  /**
   * @param {number} response
   * @param {number} dampingRatio
   */
  configure(response, dampingRatio) {
    this.stiffness = Math.pow(2 * Math.PI / response, 2);
    this.damping = 4 * Math.PI * dampingRatio / response;
  }

  /**
   * @param {number} to
   * @param {boolean} postValueChanged
   */
  updateValue(to, postValueChanged = false) {
    this.value = to;
    if (postValueChanged) {
      this.onValueChange(this.value);
    }
  }

  stop = () => {};

  start() {
    const animation = animate({
      from: this.value,
      to: this.toValue,
      
      type: "spring",
      stiffness: this.stiffness,
      damping: this.damping,
      velocity: this.velocity,

      onUpdate: (value) => {
        this.updateValue(value, true);
      },

      onComplete: () => {
        this.completion();
      },

      driver: CALayerDriver.addTicker,
    });

    this.stop = () => animation.stop();
  }
}
