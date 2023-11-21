/// <reference path="../../lib/types.d.ts" />

declare const TNSWidgetsVersionString: interop.Pointer;

declare const TNSWidgetsVersionNumber: number;

declare function __tns_uptime(): number;

declare function __nslog(message: string): void;

declare class TNSLabel extends NativeObject {
  padding: number;

  borderThickness: number;
}

