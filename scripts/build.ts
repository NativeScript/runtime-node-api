import path from "node:path";
import process from "node:process";
import { createXCframework } from "react-native-node-api";
import { $ } from "./deps.ts";

$.setPrintCommand(true);

const monorepoRoot = path.resolve(import.meta.dirname!, "..");

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

const archs: Record<string, string[]> = {
  ios: ["arm64"],
  "ios-universal": ["arm64", "x86_64"],
  "ios-sim": ["arm64", "x86_64"],
  macos: ["x86_64", "arm64"],
};

async function build(targetPlatform: string) {
  await ensureTargetDir(targetPlatform);

  const maxMDSize = Math.max(
    ...archs[targetPlatform].map((arch) => {
      return Deno.lstatSync(
        new URL(
          `../metadata/metadata.${platformDir}.${arch}.nsmd`,
          import.meta.url
        )
      ).size;
    })
  );

  // Generate the build files
  await $`cmake -S=../ -B=../packages/${platformDir}/build/${targetPlatform} -GXcode -DTARGET_PLATFORM=${targetPlatform} -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ${
    targetPlatform.startsWith("ios-test") ? "" : `-DMETADATA_SIZE=${maxMDSize}`
  }`;

  // Build the project
  await $`cmake --build ../packages/${platformDir}/build/${targetPlatform} --config ${buildConfig}`;

  if (platformDir === "macos") {
    await Deno.mkdir(`../packages/${platformDir}/dist/${targetPlatform}`, {
      recursive: true,
    }).catch(() => {});

    // Will be empty-string or a version number depending on the value of
    // FRAMEWORK in CMakeLists.txt:
    // - TRUE: ".0.1.0"
    // - FALSE: ""
    const version = ".0.1.0";

    await Deno.copyFile(
      `../packages/${platformDir}/build/${targetPlatform}/${buildConfig}/libNativeScript${version}.dylib`,
      `../packages/${platformDir}/dist/${targetPlatform}/NativeScript.node`
    );
  }
}

const TARGET_RELEASE_FOLDERS: Record<string, string> = {
  ios: `${buildConfig}-iphoneos`,
  "ios-sim": `${buildConfig}-iphonesimulator`,
  macos: buildConfig,
};

if (import.meta.main) {
  await ensureTargetDir(targetPlatform);

  const targets = targetPlatform === 'ios-universal' ?
    ["ios", "ios-sim"] :
    [targetPlatform];
  for (const target of targets) {
    await build(target);
  }

  const frameworkPaths = targets.map((targetPlatform) =>
    path.resolve(
      monorepoRoot,
      `packages/${platformDir}/build/${targetPlatform}/${TARGET_RELEASE_FOLDERS[targetPlatform]}/NativeScript.framework`
    )
  );

  const xcframeworkOutputPath = path.resolve(
    monorepoRoot,
    `packages/${platformDir}/build/${buildConfig}/NativeScript.apple.node`
  );

  try {
    await createXCframework({
      outputPath: xcframeworkOutputPath,
      frameworkPaths,
      autoLink: true,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "<unknown>";
    console.error(`Failed to assemble XCFramework: ${errorMessage}`);
    process.exit(1);
  }

  console.log(
    `\x1b[32m✔\x1b[0m XCFramework assembled into \x1b[2m${path.relative(
      monorepoRoot,
      xcframeworkOutputPath
    )}\x1b[22m`
  );
}
