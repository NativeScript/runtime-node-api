import "objc";
import { bench, run } from "mitata";

const str = NSString.stringWithUTF8String("Hello World");

const str2 = new Proxy(str, {
  get: (target, prop) => {
    return target[prop];
  },
});

bench("noop", () => {});

bench("[str length] (manual, direct)", () => {
  str.lengthCustom;
});

bench("[str length] (dynamic, ffi)", () => {
  str.length;
});

bench("[str length] (dynamic, proxy)", () => {
  str2.length;
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
