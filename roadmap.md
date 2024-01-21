# NativeScript next-gen runtime

## Goals

- ObjCBridge is the core component of next-gen NativeScript runtime for all Apple platforms - iOS/iPadOS, macOS, visionOS.

- It should also be reusable on other platforms to expose C-based APIs in general to JavaScript land, such as in a future Linux runtime.

- It is designed to be engine-agnostic. Users can make choice of what JS engine they want to use, as long as a Node-API implementation is provided for the given JS engine. Being a separate Node-API based module, it can be used in a runtime be it desktop or mobile, such as Node.js on desktop, for general purpose access to native APIs from JavaScript land. If we plug an engine with Node-API implementation to React Native, NativeScript could be used in React Native ecosystem as well.

- Why Node-API? It's like the de-facto standard for accessing JS primitives in native land. Nice and stable C API - where C also has a stable ABI (Application Binary Interface) - compared to alternatives such as JSI used by React Native, which is C++ based and does not have much API surface or even ABI stability. Widely used in the Node-land and also implemented by other major desktop runtimes like Deno and Bun. Any abstraction layer is always going to have a cost in terms of overhead, but that is the trade-off we make for being able to run _anywhere_.

- With a fresh approach to the next-gen NativeScript runtime using Node-API, I believe we can open up NativeScript to multiple ecosystems and have a much more developers getting their hands on it - be it in desktop runtimes, or even mobile-land for eg. React Native, eventually implementing the core components for runtimes for Android and other desktop platforms - like Linux and Windows - which does not only benefit the NativeScript ecosystem, but a lot more than that.

- While this is something made from ground-up, it must be a complete drop-in replacement for the current NativeScript runtime based on V8.

## What stage this project is in

- ObjCBridge, which implements most of the working of the NativeScript iOS V8-based runtime, already has most of the commonly used features. It is also mostly compatible, achieving better compatibility with the previous runtime is what I've been working on recently.
- MetadataGenerator was also written from scratch and can generate more efficient metadata binaries. It now dynamically links to Xcode's libclang (C-API) instead of the clang C++ API which required downloading LLVM, and as a result the metadata generator binary itself is smaller and can be published to places like NPM easily. Metadata Generator processes the headers using clang C-API and then converts into an IR, which is further converted into binary metadata and also TS types.
- HermesTest is like a test runtime which instantiates the Hermes runtime and initializes ObjCBridge in it on iOS to run NativeScript apps much like the current runtime. That's pretty much what it does and the functionality mostly depends on ObjCBridge itself. Ammar has also adapted the same repo to QuickJS and gotten it working on iOS. Looking forward, QuickJS is also becoming a compelling choice since the project was revived recently.

## What is working so far

- On desktop/macOS, ObjCBridge is fully compatible with Node.js because it has the best Node-API implementation. We can use macOS Objective-C frameworks in Node.js, with TypeScript support. Deno and Bun will eventually work once their Node-API support is improved. Being familiar with Rust and Deno internals myself, I can make it happen in the Deno land and perhaps even dig down issues in Bun's Node-API implementation.
- On mobile/iOS, it is also fully compatible with Hermes because of the high quality Node-API implementation written by Vladimir in the hermes-windows project. It is expected that we will see built-in Node-API support in React Native as well as a result of Hermes eventually getting it built-in. Ammar has also worked on QuickJS Node-API recently and gotten it running on iOS with Objective-C.
- In terms of compatibility, we're really close now. Most of templates work now, while only noticing slight differences in more complex templates which I'm working on fixing, and also some memory leaks in navigation that I will also be investigating. More specifically I've been working on getting the Angular template to work perfectly. I believe it will be done soon.
- As for use in the RN ecosystem, which is an exciting opportunity we don't wanna miss, there are some things to keep in mind:
  - RN uses JSI for accessing JS primitives in native land, while we use Node-API
  - RN as of now does not have built in support for Node-API, so we have to plug in an engine which does (hermes-windows fork by Microsoft does for example).
  - The usual module workflow is not enough for initializing Node-API support in RN, so we have to patch some things that complicates the workflow. We're going to work on simplifying this workflow, but it will be much better and easier once Hermes has built-in Node-API support - which is what I believe Vladimir is planning to do, though it needs a lot of work yet as the implementation needs to be rewritten using the new Hermes C-API soon.

## What I'm working on

- Improved compatibility with the previous runtime.
  - Get all templates from the NativeScript CLI working out of the box with the new runtime. 
    - Angular one is like the last one and almost done, need to investigate a subtle difference in end result of the UI - background color is not applied in one screen.
  - Run unit tests and end-to-end tests from `@nativescript/core`.
  - Test with some real world apps.
- Get V8 Node-API out of Node.js working on iOS to better compare memory efficiency.
- Improve memory usage and performance of the bridge, also to investigate and fix any memory leaks there may be.
- Refactor HermesTest's runtime part into a framework like NativeScriptCharon.xcframework - which could be what we can call the next-gen NativeScript runtime, taking most of the runtime code boilerplate out of app's xcodeproj.

## What is planned next

- Improved type support - such as vectors and other complex types.
- Better memory cleanup for multiple isolates support.

## Things that could be done later

- JSC Node-API implementation, that allows us to run this bridge on JSC for iOS/macOS as well.
- Autogenerate bindings for some/all signatures to skip libffi layer to unlock best performance.
