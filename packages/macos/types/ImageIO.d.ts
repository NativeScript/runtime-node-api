/// <reference types="@nativescript/objc-node-api" />

declare const CGImagePropertyOrientation: {
  Up: 1,
  UpMirrored: 2,
  Down: 3,
  DownMirrored: 4,
  LeftMirrored: 5,
  Right: 6,
  RightMirrored: 7,
  Left: 8,
};

declare class CGImageSource {
  constructor(init?: CGImageSource);
}

