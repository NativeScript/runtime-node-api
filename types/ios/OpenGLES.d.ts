/// <reference path="../../lib/types.d.ts" />

declare interface EAGLDrawable {
  get drawableProperties(): NSDictionary;
  set drawableProperties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class EAGLDrawable extends NativeObject implements EAGLDrawable {
}

