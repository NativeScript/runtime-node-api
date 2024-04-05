# NativeScript (Node-API)

An embeddable, engine-agnostic NativeScript runtime based on [Node-API](https://nodejs.org/api/n-api.html) and [libffi](https://github.com/libffi/libffi).

This library allows any JavaScript engine or runtime that supports Node-API to access native APIs directly from JavaScript. At present, it supports accessing Objective-C APIs (thus most of the iOS and macOS SDKs). We hope to support other native APIs, such as the Java-based Android SDK, in future.

## Initializing repo

The repo makes use of npm [workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces), so installation is straightforward.

```sh
npm install

# This installs dependencies for all except `runtime/TestApp`, as that project
# currently assumes that you have a git checkout of the NativeScript repo as a
# sibling to this repo. Hopefully you have no need to use `runtime/TestApp, but
# if you do, make sure you've set up the NativeScript repo as a sibling, and
# perform another `npm install` inside `runtime/TestApp`.
```

## Generating metadata

```sh
deno task metagen ios
deno task metagen macos
```

## Building

```sh
deno task build macos
# or build for iOS
deno task build ios-universal
```

## Run examples

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

## Notes

Deno Node-API has an issue with `napi_get_all_property_names`.

Without a custom Deno build from the below PR, you can't use AppKit in Deno (works in Node).

Upstream PR: https://github.com/denoland/deno/pull/19585

## License

MIT licensed.

Copyright © 2023 DjDeveloperr
