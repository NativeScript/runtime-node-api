import "objc";

console.log(NSString.stringWithUTF8String("Hello, macOS").length);

const device = MTLCreateSystemDefaultDevice();
console.log(device);

const queue = device.newCommandQueue();
console.log(queue);

const ref = new ObjectRef();
ref.value = device;
console.log(ref);
