import { createRequire } from "node:module";
import { bench, run } from "mitata";

const require = createRequire(import.meta.url);

const {
  getClass,
} = require("../build/objc.node");

const NSString = getClass("NSString");

const str = NSString.stringWithUTF8String_("Hello World");
console.log("str", str);
console.log("str length", str.length(), str.lengthCustom());

bench("noop", () => {});

bench("[str length] (manual, direct)", () => {
  str.lengthCustom();
});

bench("[str length] (dynamic, ffi)", () => {
  str.length();
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
