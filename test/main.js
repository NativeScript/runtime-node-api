import { classes } from "../index.js";
import { bench, run } from "mitata";

const {
  NSString,
} = classes;

const str = NSString.stringWithUTF8String("Hello World");

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
