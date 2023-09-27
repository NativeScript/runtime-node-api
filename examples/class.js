import "objc";

class MyClass extends NSObject {
  static {
    objc.registerClass(this);
  }

  init() {
    super.init();
    console.log("MyClass.init()", this);
    return this;
  }
}

const myClass = MyClass.new();
console.log(myClass);
