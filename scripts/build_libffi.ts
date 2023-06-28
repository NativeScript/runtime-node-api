import { $ } from "./deps.ts";
import { copy } from "https://deno.land/std@0.192.0/fs/copy.ts";

$.setPrintCommand(true);

// CWD is scripts/
Deno.chdir(new URL("../libffi", import.meta.url));

Deno.env.set("CC", "clang");
Deno.env.set("CFLAGS", "-w");

if (
  !Deno.env.get("SKIP_GENERATE_SOURCE") &&
  !Deno.args.includes("--skip-generate-source")
) {
  for (const platform of ["ios", "osx"]) {
    await $`python generate-darwin-source-and-headers.py --only-${platform}`;
  }
}

for (
  const dir of [
    "iphoneos-arm64",
    "iphonesimulator-x86_64",
    "iphonesimulator-arm64",
    "macosx-x86_64",
    "macosx-arm64",
  ]
) {
  await $`make -C build_${dir} install`;
}

await Deno.remove("build_macosx-universal", { recursive: true }).catch(
  () => {},
);
await Deno.mkdir("build_macosx-universal/.libs", { recursive: true });

await copy(
  "build_macosx-arm64/include",
  "build_macosx-universal/include",
);

await $`lipo -create -output build_macosx-universal/.libs/libffi_convenience.a build_macosx-x86_64/.libs/libffi_convenience.a build_macosx-arm64/.libs/libffi_convenience.a`;

await Deno.remove("build_iphonesimulator-universal", { recursive: true }).catch(
  () => {},
);
await Deno.mkdir("build_iphonesimulator-universal/.libs", { recursive: true });

await copy(
  "build_iphonesimulator-arm64/include",
  "build_iphonesimulator-universal/include",
);

await $`lipo -create -output build_iphonesimulator-universal/.libs/libffi_convenience.a build_iphonesimulator-x86_64/.libs/libffi_convenience.a build_iphonesimulator-arm64/.libs/libffi_convenience.a`;
