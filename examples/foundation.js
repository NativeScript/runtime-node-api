import "../index.js";

console.log(NSString.stringWithUTF8String("Hello, macOS").length);

const device = MTLCreateSystemDefaultDevice();
console.log(device);

const queue = device.newCommandQueue();
console.log(queue);
