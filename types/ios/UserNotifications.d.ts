/// <reference path="../../lib/types.d.ts" />
/// <reference path="./Runtime.d.ts" />

declare class UNNotificationResponse extends NSObject implements NSCopying, NSSecureCoding {
  readonly notification: interop.Object;

  readonly actionIdentifier: string;

  readonly targetScene: UIScene;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

