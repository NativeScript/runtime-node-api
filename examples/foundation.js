import { classes } from "../index.js";

// const {
//   NSString,
// } = classes;

// function measure(time) {
//   const before = performance.now();
//   NSTextAlignment.center;
//   const after = performance.now();
//   console.log(time, ((after - before) * 1000000).toFixed(2) + "ns");
// }

// measure("first get");
// measure("second get");
// measure("third get");
// measure("fourth get");
// measure("fifth get");
// measure("sixth get");

// console.log(NSString.stringWithUTF8String("Hello, macOS").length);

const { NSBundle } = classes;

// NSBundle.bundleWithPath("/System/Library/Frameworks/CoreML.framework").load();
// NSBundle.bundleWithPath("/System/Library/Frameworks/Metal.framework").load();
NSBundle.bundleWithPath("/System/Library/Frameworks/CoreFoundation.framework")
  .load();

console.log(CFAbsoluteTimeGetCurrent());
const date = CFDateCreate(null, CFAbsoluteTimeGetCurrent());
console.log(date);

// console.log(MTLCreateSystemDefaultDevice());

// const { MLNeuralEngineComputeDevice } = classes;

// console.log(Object.keys(MLNeuralEngineComputeDevice.prototype));

// const device = MLNeuralEngineComputeDevice.physicalDevice();

// console.log(device, device.totalCoreCount);
