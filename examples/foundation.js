import "@nativescript/macos-node-api";

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

const arr = NSMutableArray.arrayWithCapacity(1);
// console.log(arr[0]);
arr.insertObjectAtIndex(NSObject.new(), 0);
console.log(arr[0]);
console.log(arr);

const dict = NSMutableDictionary.dictionary();
// console.log(dict["key"]);
dict.setObjectForKey(NSObject.new(), "key");
dict.setObjectForKey(NSObject.new(), "key2");
console.log(`${dict}`);

for (const key of dict) {
  console.log(key);
}

console.log(
  interop.sizeof(dict),
  interop.sizeof(interop.types.uint8),
  interop.sizeof(NSMutableArray),
  interop.sizeof(AudioBuffer),
);
