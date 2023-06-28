# Objective-C Bridge

Objective-C bridge that allows accessing Objective-C APIs dynamically in
JavaScript land. Made using Node-API and `libffi` under the hood.

## Building

Only macOS supported right now.

```sh
deno task build-libffi

deno task build macos
# or build for iOS
deno task build ios-universal
```

## Bundling sample AppKit app

```sh
deno task bundle # bundle app
deno task open-bundle # run app
```

## Notes

AppKit usage currently relies on struct support, which has an issue with Deno
right now.

So without a custom deno build from the below PR, you can't use AppKit in Deno
(works in Node).

Upstream PR: https://github.com/denoland/deno/pull/19551

## License

Apache 2.0 licensed.

Copyright © 2023 DjDeveloperr
