import "objc";
import { bench, run } from "mitata";

{
  const arr = NSArray.array();

  let total = 0;
  let n = 1e6;

  for (let i = 0; i < n; i++) {
    const start = performance.now();
    arr.count;
    total += performance.now() - start;
  }

  console.log("ns/iter:", total * 1e6 / n);
}

const arr = NSMutableArray.arrayWithCapacity(100);

const arr2 = new Proxy(arr, {
  get: (target, prop) => {
    return target[prop];
  },
});

bench("noop", () => {});

bench("[arr count] (dynamic, ffi)", () => {
  arr.count;
});

bench("[arr count] (dynamic, proxy)", () => {
  arr2.count;
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
