const COMMON_FRAMEWORKS = [
  "Foundation",
  "CoreFoundation",
  "CoreGraphics",
  "CoreText",
  "CoreServices",
  "CoreMedia",
  "CoreVideo",
  "CoreImage",
  "CoreData",
  "CoreMIDI",
  "CoreML",
  "CoreBluetooth",
  "CoreLocation",
  "CoreMotion",
  "MLCompute",
  "AudioToolbox",
  "AudioUnit",
  "AVFoundation",
  "QuartzCore",
  "Metal",
  "MetalKit",
  "MetalPerformanceShaders",
  "SpriteKit",
  "SceneKit",
  "ModelIO",
  "GameController",
  "GameKit",
  "GameplayKit",
  "WebKit",
];

const MACOS_FRAMEWORKS = [
  "AppKit",
  "CoreAudio",
];

const IOS_FRAMEWORKS = ["UIKit"];

interface SDK {
  path: string;
  frameworks: string[];
}

const sdks: Record<string, SDK> = {
  macos: {
    path:
      "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk",
    frameworks: [...COMMON_FRAMEWORKS, ...MACOS_FRAMEWORKS],
  },
  ios: {
    path:
      "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk",
    frameworks: [...COMMON_FRAMEWORKS, ...IOS_FRAMEWORKS],
  },
  "ios-sim": {
    path:
      "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk",
    frameworks: [...COMMON_FRAMEWORKS, ...IOS_FRAMEWORKS],
  },
};

const sdk = sdks[Deno.args[0] ?? "macos"];
if (!sdk) {
  throw new Error(`Invalid platform: ${Deno.args[0]}`);
}

const proc = new Deno.Command(
  new URL("../metadata/build/MetadataGenerator", import.meta.url),
  {
    stdin: "null",
    stdout: "inherit",
    stderr: "inherit",
    args: [
      new URL(`../metadata/metadata.${Deno.args[0]}.nsmd`, import.meta.url)
        .pathname,
      sdk.path,
      ...sdk.frameworks,
    ],
  },
);

const output = proc.outputSync();
if (!output.success) {
  throw new Error("Failed to generate metadata");
}
