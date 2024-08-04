// @ts-check

import "@nativescript/macos-node-api";
import { SpringAnimation } from "./Motion.js";

export class SpringParams {
  static interactiveGrab = new SpringParams(0.15, 0.95);
  static dismissal = new SpringParams(0.15, 0.85, 3, true);
  static passiveEase = new SpringParams(0.35, 0.85);

  response;
  dampingRatio;
  epsilon;
  resolvesUponReachingToValue;

  /**
   * @param {number} response
   * @param {number} dampingRatio
   * @param {number} [epsilon=0.01]
   * @param {boolean} [resolvesUponReachingToValue=false]
   */
  constructor(
    response,
    dampingRatio,
    epsilon = 0.01,
    resolvesUponReachingToValue = false,
  ) {
    this.response = response;
    this.dampingRatio = dampingRatio;
    this.epsilon = epsilon;
    this.resolvesUponReachingToValue = resolvesUponReachingToValue;
  }
}

export class BindingChangeEvent extends Event {
  /** @type {any} */
  oldValue;
  /** @type {any} */
  value;

  /**
   * @param {any} oldValue
   * @param {any} value
   */
  constructor(oldValue, value) {
    super("change", {});
    this.oldValue = oldValue;
    this.value = value;
  }
}

export class Binding extends EventTarget {
  /** @type {any} */
  _value;

  get value() {
    return this._value;
  }

  set value(value) {
    const oldValue = this._value;
    this._value = value;
    this.dispatchEvent(new BindingChangeEvent(oldValue, value));
  }

  /**
   * @param {any} value
   */
  constructor(value) {
    super();
    this._value = value;
  }
}

export class MomentumValue {
  // MARK: - Types

  // public typealias AnimationCompletionBlock = (Bool /* completed */) -> Void
  // public typealias ChangeBlock = (Double) -> Void

  // MARK: - Vars
  spring = new SpringAnimation();
  // decay = CASpringAnimation.new();
  externallySetVelocityTracker = new VelocityTracker();

  // MARK: - Public

  /** @type {number | undefined} */
  _minimum;
  /** @type {number | undefined} */
  _maximum;

  get minimum() {
    return this._minimum;
  }

  set minimum(value) {
    const oldValue = this._minimum;
    this._minimum = value;
    if (this.minimum !== oldValue) {
      this._snapIntoNewBounds(null);
    }
  }

  get maximum() {
    return this._maximum;
  }

  set maximum(value) {
    const oldValue = this._maximum;
    this._maximum = value;
    if (this.maximum !== oldValue) {
      this._snapIntoNewBounds(null);
    }
  }

  /** @type {((x: number) => void) | undefined} */
  onChange;

  scale;

  constructor(
    initialValue = 0,
    scale = 1,
    params = SpringParams.passiveEase,
  ) {
    this.value = initialValue;
    this.scale = scale;
    this._params = params;
    this._updateFromParams();
  }

  _params;

  get params() {
    return this._params;
  }

  set params(value) {
    this._params = value;
    this._updateFromParams();
  }

  _updateFromParams() {
    this.spring.configure(this.params.response, this.params.dampingRatio);
    this.spring.resolvesUponReachingToValue =
      this.params.resolvesUponReachingToValue;
    this.spring.resolvingEpsilon = this.params.epsilon;
  }

  _isSettingValueInternally = false;

  $value = new Binding(0);

  get value() {
    return this.$value.value;
  }

  set value(value) {
    this.$value.value = value;
    if (!this._isSettingValueInternally) {
      this._resetToStationary(false);
      this.externallySetVelocityTracker.addSample(value);
    }
    this.onChange?.(value);
  }

  $animating = new Binding(false);

  get animating() {
    return this.$animating.value;
  }

  set animating(value) {
    this.$animating.value = value;
  }

  get rubberBandedValue() {
    if (this.minimum && this.value < this.minimum) {
      return this.minimum - this._rubberBand(this.minimum - this.value);
    }
    if (this.maximum && this.value > this.maximum) {
      return this.maximum + this._rubberBand(this.value - this.maximum);
    }
    return this.value;
  }

  get velocity() {
    switch (this.state) {
      case "animating":
        return (this.spring.velocity ?? 0) / this.scale;
      case "decelerating":
        // return this.decay.velocity / this.scale;
      case "stationary":
        return this.externallySetVelocityTracker.velocity;
    }
    return 0;
  }

  /**
   * @param {number} toValue
   * @param {number} velocity
   * @param {((completed: boolean) => void) | null} completion
   */
  animate(toValue, velocity, completion) {
    this._resetToStationary(false);
    this._targetValue = toValue;
    this.state = "animating";
    this.stateCompletionBlock = completion;

    this.spring.updateValue(this.value * this.scale, false);
    this.spring.velocity = velocity * this.scale;
    this.spring.toValue = toValue * this.scale;
    const weakSelf = new WeakRef(this);
    this.spring.completion = () => {
      weakSelf.deref()?._resetToStationary(true);
    };
    this.spring.onValueChange = (newVal) => {
      weakSelf.deref()?._updateValueFromAnimation(newVal, false);
    };
    this.spring.start();
  }

  // Not implementing cause its unused

  /**
   * @param {number} _velocity
   * @param {((completed: boolean) => void) | null} completion
   */
  decelerate(_velocity, completion) {
    this._resetToStationary(false);
    if (this.velocity === 0) {
      this._snapIntoNewBounds(completion);
      return;
    }
    // this.decay.updateValue(to: value * scale, postValueChanged: false)
    // this.decay.velocity = velocity * scale
    this._targetValue = null; // TODO: can we compute this?
    this.state = "decelerating";
    this.stateCompletionBlock = completion;
    // this.decay.completion = { [weak self] in
    //     self?._resetToStationary(animationFinished: true)
    // }
    // this.decay.onValueChanged { [weak self] scaledVal in
    //     self?._updateValueFromAnimation(scaledVal: scaledVal, isDecay: true)
    // }
    // this.decay.start()
  }

  stop() {
    this._resetToStationary(false);
  }

  // MARK: - Internal State

  _state = "stationary";

  /** @type {((completed: boolean) => void) | null} */
  stateCompletionBlock = null;

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
    switch (value) {
      case "stationary":
        this.animating = false;
        this.stateCompletionBlock = null;
        break;
      case "animating":
      case "decelerating":
        this.animating = true;
        break;
    }
  }

  // MARK: - Implementation
  /** @type {number | null} */
  _targetValue = null;

  /**
   * @param {boolean} animationFinished
   */
  _resetToStationary(animationFinished) {
    const prevState = this.state;
    this.state = "stationary";
    this._targetValue = null;

    this.spring.completion = () => {};
    this.spring.onValueChange = () => {};
    this.spring.stop();
    // this.decay.onValueChanged(nil)
    // this.decay.completion = nil
    // this.decay.stop(resolveImmediately: false, postValueChanged: false)

    switch (prevState) {
      case "stationary":
        break;
      case "animating":
        this.stateCompletionBlock?.(animationFinished);
        break;
      case "decelerating":
        this.stateCompletionBlock?.(animationFinished);
        break;
    }
  }

  /**
   * @param {((completed: boolean) => void) | null} completion
   */
  _snapIntoNewBounds(completion) {
    const dest = this._rubberBandDestinationForValue(this.value);
    if (dest) {
      this.animate(dest, this.velocity, completion);
    } else {
      completion?.(true);
    }
  }

  /**
   * @param {number} scaledVal
   * @param {boolean} isDecay
   */
  _updateValueFromAnimation(scaledVal, isDecay) {
    let rubberBandDest;
    if (
      isDecay && this.state === "decelerating" &&
      (rubberBandDest = this._rubberBandDestinationForValue(
        scaledVal / this.scale,
      ))
    ) {
      // We're doing a decay animation and we've decelerated into an area out-of-bounds of the scroll view. We need to do a rubber-banding animation to snap the value to the minimum or maximum.
      const velocity = this.velocity;
      this.state = "stationary"; // Overwrite `state` so we don't call the completion block
      // this.decay.completion = nil
      // this.decay.stop(resolveImmediately: false, postValueChanged: false)
      this.animate(rubberBandDest, velocity, this.stateCompletionBlock);
      return;
    }
    this._isSettingValueInternally = true;
    this.value = scaledVal / this.scale;
    this._isSettingValueInternally = false;
  }

  /**
   * @param {number} val
   * @return {number | undefined}
   */
  _rubberBandDestinationForValue(val) {
    if (this.minimum && this.minimum < val) {
      return this.minimum;
    }
    if (this.maximum && this.maximum > val) {
      return this.maximum;
    }
    return;
  }

  /**
   * @param {number} x
   * @returns {number}
   */
  _rubberBand(x) {
    const dimension = 500; // numberOfUnitsThatRoughlyCorrespondToSizeOfScreen
    const c = 0.55;
    return (1.0 - (1.0 / ((x * c / dimension) + 1.0))) * dimension;
  }
}

export class Sample {
  /** @type {number} */
  time;
  /** @type {number} */
  value;

  /**
   * @param {number} time
   * @param {number} value
   */
  constructor(time, value) {
    this.time = time;
    this.value = value;
  }
}

export class VelocityTracker {
  // MARK: - Model

  /** @type {Sample[]} */
  samples = [];

  // MARK: - API

  /**
   * @param {number} val
   */
  addSample(val) {
    this.samples.push(new Sample(CACurrentMediaTime(), val));
    this.trim();
  }

  get velocity() {
    this.trim();
    if (this.samples[0] && this.samples[this.samples.length - 1]) {
      const timeDelta = CACurrentMediaTime() - this.samples[0].time;
      const distDelta = this.samples[this.samples.length - 1].value -
        this.samples[0].value;
      if (timeDelta > 0) {
        return distDelta / timeDelta;
      }
    }
    return 0;
  }

  // MARK: - Helpers
  lookBack = 1.0 / 15;

  trim() {
    const now = CACurrentMediaTime();
    while (
      this.samples.length > 0 && (now - this.samples[0].time) > this.lookBack
    ) {
      this.samples.shift();
    }
  }
}
