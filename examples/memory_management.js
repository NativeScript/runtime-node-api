import "@nativescript/macos-node-api";

let array, weakRef;

const finalizationRegistry = new FinalizationRegistry((value) => {
  console.log("finalized", value);

  const obj = array[0];

  console.log("got object from array", obj);
  console.log("custom property after gc", obj.helloWorld);
});

(() => {
  const obj = NSObject.new();

  obj.helloWorld = "Hello, world!";

  console.log("created object", obj);
  console.log("custom property before gc", obj.helloWorld);

  finalizationRegistry.register(obj, "NativeObject");

  // weakRef = new WeakRef(obj);

  array = NSMutableArray.arrayWithCapacity(1);
  array.addObject(obj);

  console.log("added object to array", array);
})();

console.log("out of scope");

gc();

console.log("gc called");

// console.log("weakRef", weakRef.deref());
