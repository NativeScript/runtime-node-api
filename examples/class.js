// @ts-check

import "@nativescript/macos-node-api";

class MyClass extends NSObject {
  static {
    NativeClass(this);
  }

  /**
   * @override
   */
  init() {
    super.init();
    console.log("MyClass.init()", this);
    return this;
  }
}

const myClass = MyClass.new();
console.log(myClass);

console.log(NSObject.class() === NSObject, MyClass.class() === MyClass);

MyClass.prototype.init = function () {
  console.log("MyClass.init() (patched)", this);
  return this;
};

const myClass2 = MyClass.new();
console.log(myClass2);
