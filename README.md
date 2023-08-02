# Objective-C Bridge

Objective-C bridge that allows accessing Objective-C APIs dynamically in
JavaScript land. Made using Node-API and `libffi` under the hood.

## Building

```sh
deno task build-libffi

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

Without a custom deno build from the below PR, you can't use AppKit in Deno
(works in Node).

Upstream PR: https://github.com/denoland/deno/pull/19585

## License

Apache 2.0 licensed.

Copyright © 2023 DjDeveloperr
