# @nativescript/ios-node-api

An embeddable, engine-agnostic NativeScript runtime for iOS based on Node-API.

## Installation

These steps assume that you're making an iOS app that includes a Node-API-capable JavaScript runtime and manages its JS dependencies using npm (or similar package managers).

First, install the npm package:

```sh
npm install @nativescript/ios-node-api
```

Next, embed the xcframework provided at `build/ios-universal/NativeScript.xcframework` into your iOS app. For convenience, we provide `NativeScript.podspec` so that you can link it as a local podspec. For React Native (or Expo) apps, this will be autolinked.

## Usage

Until we have some example projects to provide, a few example usages in an Expo app are shown in this [tweet](https://x.com/birch_js/status/1773401773266604240).