import { copy } from "https://deno.land/std@0.179.0/fs/copy.ts";
import $ from "https://deno.land/x/dax@0.32.0/mod.ts";

const {
  app,
} = JSON.parse(
  await Deno.readTextFile("package.json"),
);

await Deno.remove(`./${app.name}.app`, { recursive: true }).catch(() => {});

await Deno.mkdir(`./${app.name}.app/Contents/MacOS`, { recursive: true });

await copy(app.icon, `./${app.name}.app/Contents/NativeScript.icns`);

await copy(app.assets, `./${app.name}.app/Contents/Resources`);

await copy(
  new URL(`../../Frameworks/hermes.framework`, import.meta.url),
  `./${app.name}.app/Contents/Frameworks/hermes.framework`,
);

await copy(
  new URL("../../../build/macos/ObjCBridge.node", import.meta.url),
  `./${app.name}.app/Contents/Resources/ObjCBridge.node`,
);

await Deno.mkdir(`./${app.name}.app/Contents/Resources`, { recursive: true });

const plistProperties: Record<string, string | string[]> = {
  BuildMachineOSBuild: "22F66",
  CFBundleDevelopmentRegion: "en",
  CFBundleExecutable: app.name,
  CFBundleIdentifier: app.identifier,
  CFBundleInfoDictionaryVersion: "6.0",
  CFBundleName: app.name,
  CFBundlePackageType: "APPL",
  CFBundleShortVersionString: app.version,
  CFBundleSupportedPlatforms: ["MacOSX"],
  CFBundleVersion: app.version,
  CFBundleIconFile: "NativeScript",
  DTCompiler: "com.apple.compilers.llvm.clang.1_0",
  DTPlatformBuild: "",
  DTPlatformName: "macosx",
  DTPlatformVersion: "13.3",
  DTSDKBuild: "22E245",
  DTSDKName: "macosx10.15",
  DTXcode: "1430",
  DTXcodeBuild: "14E22b",
  LSMinimumSystemVersion: "12.0",
  NSPrincipalClass: "NSApplication",
};

let plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>\n`;

for (const [key, value] of Object.entries(plistProperties)) {
  plist += `  <key>${key}</key>\n`;
  if (typeof value === "string") {
    plist += `<string>${value}</string>\n`;
  } else {
    plist += `  <array>\n`;
    for (const item of value) {
      plist += `    <string>${item}</string>\n`;
    }
    plist += `  </array>\n`;
  }
}

plist += `</dict>
</plist>\n`;

await Deno.writeTextFile(
  `./${app.name}.app/Contents/Info.plist`,
  plist,
);

await Deno.writeTextFile(
  `./${app.name}.app/Contents/PkgInfo`,
  "APPL????",
);

await $`npm run build`;

await Deno.copyFile(
  "./dist/main",
  `./${app.name}.app/Contents/MacOS/${app.name}`,
);

console.log(`Bundled ${app.name}.app`);
