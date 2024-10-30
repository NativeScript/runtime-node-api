const COMMON_FRAMEWORKS = [
  "Foundation",
  "CoreFoundation",
  "CoreGraphics",
  "CoreText",
  "QuartzCore",
  "WebKit",

  // Optional for core compat
  "Metal",
  "MetalKit",
  "MetalPerformanceShaders",
  "SpriteKit",
  "SceneKit",
  "ModelIO",
  "GameController",
  "GameKit",
  "GameplayKit",
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
  "NaturalLanguage",
  "Symbols",
];

const MACOS_FRAMEWORKS = ["AppKit", "CoreAudio", "ScreenCaptureKit"];

const IOS_FRAMEWORKS = ["UIKit"];

interface SDK {
  path: string;
  frameworks: string[];
  targets: Record<string, string>;
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
    targets: {
      arm64: "arm64-apple-macos11.0",
      x86_64: "x86_64-apple-macos11.0",
    },
  },
  ios: {
    path: getSDKPath("iphoneos"),
    frameworks: [...COMMON_FRAMEWORKS, ...IOS_FRAMEWORKS],
    targets: {
      arm64: "arm64-apple-ios13.0",
    },
  },
  "ios-sim": {
    path: getSDKPath("iphonesimulator"),
    frameworks: [...COMMON_FRAMEWORKS, ...IOS_FRAMEWORKS],
    targets: {
      arm64: "arm64-apple-ios13.0-simulator",
      x86_64: "x86_64-apple-ios13.0-simulator",
    },
  },
};

const sdkName = Deno.args[0] ?? "macos";
const sdk = sdks[sdkName];
if (!sdk) {
  throw new Error(`Invalid platform: ${sdkName}`);
}

await Deno.remove(new URL(`../packages/${sdkName}/types`, import.meta.url), {
  recursive: true,
}).catch(() => {});
await Deno.mkdir(new URL(`../packages/${sdkName}/types`, import.meta.url), {
  recursive: true,
}).catch(() => {});

for (const arch in sdk.targets) {
  const exec = new URL("../metadata/build/MetadataGenerator", import.meta.url);
  const args = [
    `arch=${arch}`,
    `target=${sdk.targets[arch]}`,
    `output=${
      new URL(`../metadata/metadata.${sdkName}.${arch}.nsmd`, import.meta.url)
        .pathname
    }`,
    // NOTE: We're not differentiating between the arch for TS types - it shouldn't matter much
    `types=${
      new URL(`../packages/${sdkName}/types`, import.meta.url).pathname
    }`,
    `sdk=${sdk.path}`,
  ];

  for (const framework of sdk.frameworks) {
    args.push(`framework=${framework}`);
  }

  // TODO: commit these files to the repo
  // These are needed to make it work with NativeScriptCore on iOS apps (compat with old NativeScript runtime)
  const TNS_WIDGETS_FRAMEWORK = Deno.env.get("TNS_WIDGETS_FRAMEWORK");
  if (TNS_WIDGETS_FRAMEWORK) {
    const customFrameworks = [TNS_WIDGETS_FRAMEWORK];

    for (const framework of customFrameworks) {
      args.push(`include=${framework}`);
      args.push(`headers=${framework}/Headers`);
      args.push(`import="TNSWidgets.h"`);
    }

    args.push(
      "include=/Users/dj/Projects/NativeScript/packages/core/platforms/ios/src"
    );
    args.push(
      "headers=/Users/dj/Projects/NativeScript/packages/core/platforms/ios/src"
    );
    args.push('import="NativeScriptEmbedder.h"');
    args.push('import="NativeScriptUtils.h"');
    args.push('import="UIView+NativeScript.h"');
  }

  console.log(`%c$ MetadataGenerator ${args.join(" ")}`, "color: grey");

  const proc = new Deno.Command(exec, {
    stdin: "null",
    stdout: "inherit",
    stderr: "inherit",
    args,
  });

  const output = proc.outputSync();
  if (!output.success) {
    console.log(output);
    throw new Error("Failed to generate metadata");
  }
}
