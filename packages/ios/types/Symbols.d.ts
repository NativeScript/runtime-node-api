/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare class NSSymbolScaleEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static scaleUpEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static scaleDownEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolDisappearEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static disappearUpEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static disappearDownEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolBounceEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static bounceUpEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static bounceDownEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolBreatheEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static breathePulseEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static breathePlainEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolEffect extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSSymbolRotateEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static rotateClockwiseEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static rotateCounterClockwiseEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolEffectOptions extends NSObject implements NSCopying, NSSecureCoding {
  static options<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static optionsWithRepeating<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  optionsWithRepeating(): this;

  static optionsWithNonRepeating<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  optionsWithNonRepeating(): this;

  static optionsWithRepeatCount<This extends abstract new (...args: any) => any>(this: This, count: number): InstanceType<This>;

  optionsWithRepeatCount(count: number): this;

  static optionsWithSpeed<This extends abstract new (...args: any) => any>(this: This, speed: number): InstanceType<This>;

  optionsWithSpeed(speed: number): this;

  static optionsWithRepeatBehavior<This extends abstract new (...args: any) => any>(this: This, behavior: NSSymbolEffectOptionsRepeatBehavior): InstanceType<This>;

  optionsWithRepeatBehavior(behavior: NSSymbolEffectOptionsRepeatBehavior): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSSymbolVariableColorEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithIterative(): this;

  effectWithCumulative(): this;

  effectWithReversing(): this;

  effectWithNonReversing(): this;

  effectWithHideInactiveLayers(): this;

  effectWithDimInactiveLayers(): this;
}

declare class NSSymbolReplaceContentTransition extends NSSymbolContentTransition {
  static transition<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static replaceDownUpTransition<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static replaceUpUpTransition<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static replaceOffUpTransition<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  transitionWithByLayer(): this;

  transitionWithWholeSymbol(): this;

  static magicTransitionWithFallback(fallback: NSSymbolReplaceContentTransition): NSSymbolMagicReplaceContentTransition;
}

declare class NSSymbolMagicReplaceContentTransition extends NSSymbolContentTransition {
}

declare class NSSymbolAppearEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static appearUpEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static appearDownEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolWiggleEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleClockwiseEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleCounterClockwiseEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleLeftEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleRightEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleUpEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleDownEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleForwardEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleBackwardEffect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static wiggleCustomAngleEffect<This extends abstract new (...args: any) => any>(this: This, angle: number): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolAutomaticContentTransition extends NSSymbolContentTransition {
  static transition<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class NSSymbolEffectOptionsRepeatBehavior extends NSObject implements NSCopying, NSSecureCoding {
  static behaviorPeriodic<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static behaviorPeriodicWithCount<This extends abstract new (...args: any) => any>(this: This, count: number): InstanceType<This>;

  static behaviorPeriodicWithDelay<This extends abstract new (...args: any) => any>(this: This, delay: number): InstanceType<This>;

  static behaviorPeriodicWithCountDelay<This extends abstract new (...args: any) => any>(this: This, count: number, delay: number): InstanceType<This>;

  static behaviorContinuous<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSSymbolPulseEffect extends NSSymbolEffect {
  static effect<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  effectWithByLayer(): this;

  effectWithWholeSymbol(): this;
}

declare class NSSymbolContentTransition extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

