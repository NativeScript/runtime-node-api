/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const EAGLRenderingAPI: {
  S1: 1,
  S2: 2,
  S3: 3,
};

declare interface EAGLDrawable {
  get drawableProperties(): NSDictionary;
  set drawableProperties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class EAGLDrawable extends NativeObject implements EAGLDrawable {
}

declare class EAGLSharegroup extends NSObject {
  debugLabel: string;
}

declare class EAGLContext extends NSObject {
  initWithAPI(api: interop.Enum<typeof EAGLRenderingAPI>): this;

  initWithAPISharegroup(api: interop.Enum<typeof EAGLRenderingAPI>, sharegroup: EAGLSharegroup): this;

  static setCurrentContext(context: EAGLContext | null): boolean;

  static currentContext(): EAGLContext;

  readonly API: interop.Enum<typeof EAGLRenderingAPI>;

  readonly sharegroup: EAGLSharegroup;

  debugLabel: string;

  isMultiThreaded: boolean;
}

