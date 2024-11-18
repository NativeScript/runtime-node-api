/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare class UTType extends NSObject implements NSCopying, NSSecureCoding {
  static typeWithIdentifier<This extends abstract new (...args: any) => any>(this: This, identifier: string): InstanceType<This>;

  static typeWithFilenameExtension<This extends abstract new (...args: any) => any>(this: This, filenameExtension: string): InstanceType<This>;

  static typeWithFilenameExtensionConformingToType<This extends abstract new (...args: any) => any>(this: This, filenameExtension: string, supertype: UTType): InstanceType<This>;

  static typeWithMIMEType<This extends abstract new (...args: any) => any>(this: This, mimeType: string): InstanceType<This>;

  static typeWithMIMETypeConformingToType<This extends abstract new (...args: any) => any>(this: This, mimeType: string, supertype: UTType): InstanceType<This>;

  readonly identifier: string;

  readonly preferredFilenameExtension: string;

  readonly preferredMIMEType: string;

  readonly localizedDescription: string;

  readonly version: NSNumber;

  readonly referenceURL: NSURL;

  readonly isDynamic: boolean;

  readonly isDeclared: boolean;

  readonly isPublicType: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

