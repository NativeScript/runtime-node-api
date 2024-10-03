/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const IOSurfaceLockOptions: {
  ReadOnly: 1,
  AvoidSync: 2,
};

declare const IOSurfacePurgeabilityState: {
  NonVolatile: 0,
  Volatile: 1,
  Empty: 2,
  KeepCurrent: 3,
};

declare class IOSurface extends NSObject implements NSSecureCoding {
  initWithProperties(properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): this;

  lockWithOptionsSeed(options: interop.Enum<typeof IOSurfaceLockOptions>, seed: interop.PointerConvertible): number;

  unlockWithOptionsSeed(options: interop.Enum<typeof IOSurfaceLockOptions>, seed: interop.PointerConvertible): number;

  readonly allocationSize: number;

  readonly width: number;

  readonly height: number;

  readonly baseAddress: interop.Pointer;

  readonly pixelFormat: number;

  readonly bytesPerRow: number;

  readonly bytesPerElement: number;

  readonly elementWidth: number;

  readonly elementHeight: number;

  readonly surfaceID: number;

  readonly seed: number;

  readonly planeCount: number;

  widthOfPlaneAtIndex(planeIndex: number): number;

  heightOfPlaneAtIndex(planeIndex: number): number;

  bytesPerRowOfPlaneAtIndex(planeIndex: number): number;

  bytesPerElementOfPlaneAtIndex(planeIndex: number): number;

  elementWidthOfPlaneAtIndex(planeIndex: number): number;

  elementHeightOfPlaneAtIndex(planeIndex: number): number;

  baseAddressOfPlaneAtIndex(planeIndex: number): interop.Pointer;

  setAttachmentForKey(anObject: interop.Object, key: string): void;

  attachmentForKey(key: string): interop.Object;

  removeAttachmentForKey(key: string): void;

  setAllAttachments(dict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  allAttachments(): NSDictionary;

  removeAllAttachments(): void;

  readonly isInUse: boolean;

  incrementUseCount(): void;

  decrementUseCount(): void;

  readonly localUseCount: number;

  readonly allowsPixelSizeCasting: boolean;

  setPurgeableOldState(newState: interop.Enum<typeof IOSurfacePurgeabilityState>, oldState: interop.PointerConvertible): number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

