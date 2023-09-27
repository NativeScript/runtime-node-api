import "objc";

console.log(NSObject.new());
console.log(NSString.stringWithUTF8String("Hello, macOS").constructor);

// const device = MTLCreateSystemDefaultDevice();
// console.log(device, device.constructor.name);

// const queue = device.newCommandQueue();
// console.log(queue);

// const ref = new ObjectRef();
// ref.value = device;
// console.log(ref);

// const struct = new CGPoint({ x: 1, y: 2 });
// console.log(struct);
