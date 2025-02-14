try {
  console.log("hello world 1");
  NSObject.new();
  console.log("hello world 2");

  const { test } = require("./mod.js");

  test();

  const id = setTimeout(() => {
    console.log("timeout");
  }, 1000);

  clearTimeout(id);

  const int = setInterval(() => {
    console.log("interval");
  }, 1000);

  setTimeout(() => {
    clearInterval(int);
  }, 5000);

  console.log(new Error().stack);

  NSApplicationMain(0, null);
} catch (e) {
  console.log(e.stack);
}
