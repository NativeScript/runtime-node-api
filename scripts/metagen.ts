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
  "CloudKit",
  "Intents",
  "Contacts",
  "CoreSpotlight",
  "JavaScriptCore",
  "UserNotifications",
  "CoreHaptics",
  "EventKit",
  "AddressBook",
  "MapKit",
];

const MACOS_FRAMEWORKS = [
  "AppKit",
  "CoreAudio",
];

const IOS_FRAMEWORKS = ["UIKit"];

interface SDK {
  path: string;
  frameworks: string[];
  target: string;
}

function getSDKPath(platform: string) {
  const { stdout, success } = new Deno.Command("xcrun", {
    args: ["--sdk", platform, "--show-sdk-path"],
    stdout: "piped",
    stderr: "inherit",
    stdin: "null",
  }).outputSync();
  if (!success) {
    throw new Error(`Failed to get SDK path for ${platform}`);
  }
  return new TextDecoder().decode(stdout).trim();
}

const sdks: Record<string, SDK> = {
  macos: {
    path: getSDKPath("macosx"),
    frameworks: [...COMMON_FRAMEWORKS, ...MACOS_FRAMEWORKS],
    target: "arm64-apple-macos11.0",
  },
  ios: {
    path: getSDKPath("iphoneos"),
    frameworks: [...COMMON_FRAMEWORKS, ...IOS_FRAMEWORKS],
    target: "arm64-apple-ios13.0",
  },
  "ios-sim": {
    path: getSDKPath("iphonesimulator"),
    frameworks: [...COMMON_FRAMEWORKS, ...IOS_FRAMEWORKS],
    target: "arm64-apple-ios13.0-simulator",
  },
};

const sdkName = Deno.args[0] ?? "macos";
const sdk = sdks[sdkName];
if (!sdk) {
  throw new Error(`Invalid platform: ${sdkName}`);
}

await Deno.remove(new URL(`../types/${sdkName}`, import.meta.url), {
  recursive: true,
}).catch(() => {});
await Deno.mkdir(new URL(`../types/${sdkName}`, import.meta.url), {
  recursive: true,
}).catch(() => {});

const exec = new URL("../metadata/build/MetadataGenerator", import.meta.url);
const args = [
  `target=${sdk.target}`,
  `output=${
    new URL(`../metadata/metadata.${sdkName}.nsmd`, import.meta.url)
      .pathname
  }`,
  `types=${
    new URL(`../types/${sdkName}`, import.meta.url)
      .pathname
  }`,
  `sdk=${sdk.path}`,
];

for (const framework of sdk.frameworks) {
  args.push(`framework=${framework}`);
}

const customFrameworks = [
  "/Users/dj/Projects/NativeScript/packages/ui-mobile-base/dist/package/platforms/ios/TNSWidgets.xcframework/ios-arm64/TNSWidgets.framework",
];

for (const framework of customFrameworks) {
  args.push(`include=${framework}`);
  args.push(`headers=${framework}/Headers`);
  args.push(`import="TNSWidgets.h"`);
}

args.push(
  "include=/Users/dj/Projects/NativeScript/packages/core/platforms/ios/src",
);
args.push(
  "headers=/Users/dj/Projects/NativeScript/packages/core/platforms/ios/src",
);
args.push('import="NativeScriptEmbedder.h"');
args.push('import="NativeScriptUtils.h"');
args.push('import="UIView+NativeScript.h"');

console.log(`%c$ MetadataGenerator ${args.join(" ")}`, "color: grey");

const proc = new Deno.Command(
  exec,
  {
    stdin: "null",
    stdout: "inherit",
    stderr: "inherit",
    args,
  },
);

const output = proc.outputSync();
if (!output.success) {
  console.log(output);
  throw new Error("Failed to generate metadata");
}
