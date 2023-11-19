// @ts-check

import "objc";

class MyClass extends NSObject {
  static {
    NativeClass(this);
  }

  init() {
    super.init();
    console.log("MyClass.init()", this);
    return this;
  }
}

const myClass = MyClass.new();
console.log(myClass);

MyClass.prototype.init = function () {
  console.log("MyClass.prototype.init()", this);
  return this;
};

const myClass2 = MyClass.new();
console.log(myClass2);

// deno-lint-ignore ban-ts-comment
// @ts-expect-error
MyClass.prototype.init = 0;

try {
  MyClass.new();
} catch (e) {
  console.log("Expected Error:", e);
}
