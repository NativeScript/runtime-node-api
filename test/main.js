import { classes } from "../index.js";
import { bench, run } from "mitata";

const {
  NSObject,
  NSString,
} = classes;

const obj1 = NSObject.alloc();
const obj2 = obj1.init();
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("js equal", obj1 === obj2);

const str = NSString.stringWithUTF8String("Hello World");
console.log("str", str);
console.log("str length", str.length, str.lengthCustom);

bench("noop", () => {});

bench("[str length] (manual, direct)", () => {
  str.lengthCustom;
});

bench("[str length] (dynamic, ffi)", () => {
  str.length;
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
