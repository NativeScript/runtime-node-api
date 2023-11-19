import "objc";

console.log(NSObject.new());
console.log(NSDate.date());
console.log(typeof NSString.stringWithUTF8String("Hello, world!"));

const ptr = new interop.Pointer(1);
console.log(ptr, ptr.toNumber(), ptr.add(1).subtract(2));

const buf = interop.adopt(interop.alloc(16));
console.log(buf, buf.toNumber());

const ref = new interop.Reference(interop.types.int32, 1);
console.log(ref, ref.value);
ref.value = 2;
console.log(ref, ref.value);

const backing = interop.alloc(4);
const ref2 = new interop.Reference(interop.types.uint32, backing);
console.log(ref2, ref2.value);
ref2.value = 3;
console.log(ref2, ref2.value);
