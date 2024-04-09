/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare class NSSymbolContentTransition extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSSymbolEffect extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
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

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

