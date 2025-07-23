# NativeScript (Node-API)

An embeddable, engine-agnostic NativeScript runtime based on [Node-API](https://nodejs.org/api/n-api.html) and [libffi](https://github.com/libffi/libffi).

This library allows any JavaScript engine or runtime that supports Node-API to access native APIs directly from JavaScript. At present, it supports accessing Objective-C APIs (thus most of the iOS and macOS SDKs). We hope to support other native APIs, such as the Java-based Android SDK, in future.

## Initializing the repo

The repo makes use of npm [workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces), so installation is straightforward.

```sh
npm install
```

## Generating the metadata

```sh
# ① Build the metadata generator.
deno task build-metagen
# Output:
#   metadata/build/Release/MetadataGenerator

# ② Generate metadata for iOS.
deno task metagen ios
# Output:
#   metadata/metadata.ios.arm64.nsmd
#   metadata/metadata.ios.x86_64.nsmd
#   packages/ios/types/*.d.ts

# ③ Generate metadata for macOS.
deno task metagen macos
# Output:
#   metadata/metadata.macos.arm64.nsmd
#   metadata/metadata.macos.x86_64.nsmd
#   packages/macos/types/*.d.ts
```

## Building the runtimes

```sh
# Build the runtime for macOS.
deno task build macos
# Output:
#   packages/macos/build/macos/Release/libNativeScript.dylib
#   packages/macos/dist/macos/NativeScript.node

# Build the runtime for iOS as a universal binary.
deno task build ios-universal
# Output:
#   packages/ios/build/ios/Release-iphoneos/NativeScript.framework/NativeScript
#   packages/ios/build/ios-sim/Release-iphonesimulator/NativeScript.framework/NativeScript
#   packages/ios/dist/ios-universal/NativeScript.xcframework
```

## Run examples

These macOS AppKit examples depend upon having run the "Generating metadata" and "Building the runtimes" for macOS already.

```sh
node examples/foundation.js
# or
deno run -A examples/foundation.js

# ML Compute example
node examples/mlcompute.js

# AppKit related examples
node examples/appkit.js
node examples/split_view.js
node examples/view_controller.js
node examples/spritekit.js
```

## Copyright notice

Copyright [OpenJS Foundation](https://openjsf.org) and `NativeScript` contributors. All rights reserved. The [OpenJS Foundation](https://openjsf.org) has registered trademarks and uses trademarks. For a list of trademarks of the [OpenJS Foundation](https://openjsf.org), please see our [Trademark Policy](https://trademark-policy.openjsf.org/) and [Trademark List](https://trademark-list.openjsf.org/). Trademarks and logos not indicated on the [list of OpenJS Foundation trademarks](https://trademark-list.openjsf.org) are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.

[The OpenJS Foundation](https://openjsf.org/) | [Terms of Use](https://terms-of-use.openjsf.org/) | [Privacy Policy](https://privacy-policy.openjsf.org/) | [OpenJS Foundation Bylaws](https://bylaws.openjsf.org/) | [Trademark Policy](https://trademark-policy.openjsf.org/) | [Trademark List](https://trademark-list.openjsf.org/) | [Cookie Policy](https://www.linuxfoundation.org/cookies/)

<h3 align="center">Made with ❤️</h3>
