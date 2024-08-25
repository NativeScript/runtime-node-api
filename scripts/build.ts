import { $ } from "./deps.ts";

$.setPrintCommand(true);

// CWD is scripts/
Deno.chdir(new URL("./", import.meta.url));

// Process arguments and environment variables

const VALID_PLATFORMS = ["macos", "ios", "ios-sim", "ios-universal"];
const targetPlatform = Deno.args[0] ?? "macos";

if (!VALID_PLATFORMS.includes(targetPlatform)) {
  throw new Error(
    `Invalid platform: ${targetPlatform}. Valid platforms are: ${VALID_PLATFORMS.join(
      ", "
    )}`
  );
}

const platformDir = targetPlatform.startsWith("ios") ? "ios" : "macos";
const buildConfig = Deno.args.includes("debug") ? "Debug" : "Release";

// Ensure we have a build directory
await Deno.mkdir(`../packages/${platformDir}/build`).catch(() => {});

async function ensureTargetDir(targetPlatform: string) {
  // Clean any previous target specific build
  // await Deno.remove(`../packages/${platformDir}/build/${targetPlatform}`, { recursive: true }).catch(
  //   () => {},
  // );
  // Create a new target specific build directory
  await Deno.mkdir(`../packages/${platformDir}/build/${targetPlatform}`).catch(
    () => {}
  );
}

async function build(targetPlatform: string) {
  await ensureTargetDir(targetPlatform);

  // Generate the build files
  await $`cmake -S=../ -B=../packages/${platformDir}/build/${targetPlatform} -GXcode -DTARGET_PLATFORM=${targetPlatform} -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ${
    targetPlatform.startsWith("ios-test")
      ? ""
      : `-DMETADATA_SIZE=${
          Deno.lstatSync(
            new URL(`../metadata/metadata.${platformDir}.nsmd`, import.meta.url)
          ).size
        }`
  }`;

  // Build the project
  await $`cmake --build ../packages/${platformDir}/build/${targetPlatform} --config ${buildConfig}`;

  if (platformDir === "macos") {
    await Deno.mkdir(`../packages/${platformDir}/dist/${targetPlatform}`, {
      recursive: true,
    }).catch(() => {});

    // Copy the built app to the build directory
    await Deno.copyFile(
      `../packages/${platformDir}/build/${targetPlatform}/${buildConfig}/libNativeScript.dylib`,
      `../packages/${platformDir}/dist/${targetPlatform}/NativeScript.node`
    );
  }
}

const TARGET_RELEASE_FOLDERS: Record<string, string> = {
  ios: `${buildConfig}-iphoneos`,
  "ios-sim": `${buildConfig}-iphonesimulator`,
};

if (import.meta.main) {
  if (targetPlatform === "ios-universal") {
    await ensureTargetDir(targetPlatform);

    const targets = ["ios", "ios-sim"];
    for (const target of targets) {
      await build(target);
    }

    await Deno.mkdir(`../packages/${platformDir}/dist`, {
      recursive: true,
    }).catch(() => {});

    await Deno.remove(
      `../packages/${platformDir}/dist/${targetPlatform}/NativeScript.xcframework`,
      { recursive: true }
    ).catch(() => {});

    await $`xcodebuild -create-xcframework ${targets
      .map((targetPlatform) => [
        `-framework`,
        `../packages/${platformDir}/build/${targetPlatform}/${TARGET_RELEASE_FOLDERS[targetPlatform]}/NativeScript.framework`,
      ])
      .flat()} -output ../packages/${platformDir}/dist/${targetPlatform}/NativeScript.xcframework`;
  } else {
    await build(targetPlatform);
  }
}
