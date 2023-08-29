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
await Deno.mkdir("../build").catch(() => {});

async function ensureTargetDir(target: string) {
  // Clean any previous target specific build
  await Deno.remove(`../build/${target}`, { recursive: true }).catch(
    () => {},
  );
  // Create a new target specific build directory
  await Deno.mkdir(`../build/${target}`);
}

async function build(target: string) {
  await ensureTargetDir(target);

  // Generate the build files
  await $`cmake -S=../ -B=../build/${target} -GXcode -DBRIDGE_TARGET_PLATFORM=${target} -DCMAKE_EXPORT_COMPILE_COMMANDS=ON -DMETADATA_SIZE=${
    Deno.lstatSync(new URL("../metadata/metadata.nsmd", import.meta.url)).size
  }`;

  // Build the project
  await $`cmake --build ../build/${target} --config ${buildConfig}`;

  if (target === "macos" || target === "macos-x86") {
    // Copy the built app to the build directory
    await Deno.copyFile(
      `../build/${target}/Release/ObjCBridgeWM.node`,
      `../build/${target}/ObjCBridge.node`,
    );
  }
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

    await $`xcodebuild -create-xcframework ${
      targets.map((
        target,
      ) => [
        `-framework`,
        `../build/${target}/${
          TARGET_RELEASE_FOLDERS[target]
        }/ObjCBridge.framework`,
      ]).flat()
    } -output ../build/ios-universal/ObjCBridge.xcframework`;
  } else {
    await build(targetPlatform);
  }
}
