import "@nativescript/macos-node-api";
import { bench, run } from "mitata";

const arr = NSMutableArray.arrayWithCapacity(100);

bench("noop", () => {});

bench("[arr count] (dynamic, ffi)", () => {
  arr.count;
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
