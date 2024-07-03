import { $ } from "./deps.ts";

$.setPrintCommand(true);

// CWD is scripts/
Deno.chdir(new URL("./", import.meta.url));

// Process arguments and environment variables

const VALID_PLATFORMS = [
  "macos",
  "ios",
  "ios-sim",
  "ios-universal",
];
const targetPlatform = Deno.args[0] ?? "macos";

if (!VALID_PLATFORMS.includes(targetPlatform)) {
  throw new Error(
    `Invalid platform: ${targetPlatform}. Valid platforms are: ${
      VALID_PLATFORMS.join(
        ", ",
      )
    }`,
  );
}

const buildConfig = Deno.args.includes("debug") ? "Debug" : "Release";

// Ensure we have a build directory
await Deno.mkdir(`../runtime/build`).catch(() => {});

async function ensureTargetDir(targetPlatform: string) {
  // Clean any previous target specific build
  // await Deno.remove(`../packages/${platformDir}/build/${targetPlatform}`, { recursive: true }).catch(
  //   () => {},
  // );
  // Create a new target specific build directory
  await Deno.mkdir(`../runtime/build/${targetPlatform}`).catch(() => {});
}

async function build(targetPlatform: string) {
  await ensureTargetDir(targetPlatform);

  // Generate the build files
  await $`cmake -S=../runtime -B=../runtime/build/${targetPlatform} -GXcode -DTARGET_PLATFORM=${targetPlatform} -DCMAKE_EXPORT_COMPILE_COMMANDS=ON`;

  // Build the project
  await $`cmake --build ../runtime/build/${targetPlatform} --config ${buildConfig}`;
}

const TARGET_RELEASE_FOLDERS: Record<string, string> = {
  "ios": `${buildConfig}-iphoneos`,
  "ios-sim": `${buildConfig}-iphonesimulator`,
};

if (import.meta.main) {
  if (targetPlatform === "ios-universal") {
    await ensureTargetDir(targetPlatform);

    const targets = ["ios", "ios-sim"];
    for (const target of targets) {
      await build(target);
    }

    await Deno.remove(
      `../runtime/build/${targetPlatform}/NativeScriptRuntime.xcframework`,
      { recursive: true },
    ).catch(() => {});

    await $`xcodebuild -create-xcframework ${
      targets.map((
        targetPlatform,
      ) => [
        `-framework`,
        `../runtime/build/${targetPlatform}/${
          TARGET_RELEASE_FOLDERS[targetPlatform]
        }/NativeScriptRuntime.framework`,
      ]).flat()
    } -output ../runtime/build/${targetPlatform}/NativeScriptRuntime.xcframework`;
  } else {
    await build(targetPlatform);
  }
}
