/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./UIKit.d.ts" />

declare const TNSWidgetsVersionNumber: number;

declare const TNSWidgetsVersionString: interop.Pointer;

declare function __tns_uptime(): number;

declare function __nslog(message: string): void;

declare class TNSLabel extends UILabel {
  padding: UIEdgeInsets;

  borderThickness: UIEdgeInsets;
}

