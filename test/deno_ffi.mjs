import { bench, run } from "mitata";

const {
  objc_getClass,
  sel_registerName,
  objc_msgSend_stringWithUTF8String,
  objc_msgSend_length,
  objc_msgSend_length_slow,
} = Deno.dlopen("libobjc.dylib", {
  objc_getClass: {
    parameters: ["buffer"],
    result: "pointer",
  },

  sel_registerName: {
    parameters: ["buffer"],
    result: "pointer",
  },

  objc_msgSend_stringWithUTF8String: {
    name: "objc_msgSend",
    parameters: ["pointer", "pointer", "buffer"],
    result: "pointer",
  },

  objc_msgSend_length: {
    name: "objc_msgSend",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  objc_msgSend_length_slow: {
    name: "objc_msgSend",
    parameters: ["pointer", "pointer"],
    result: "pointer",
    callback: true, // disable V8 Fast API
  },
}).symbols;

function cstr(str) {
  return new TextEncoder().encode(str + "\0");
}

const NSString = objc_getClass(cstr("NSString"));
const stringWithUTF8String = sel_registerName(cstr("stringWithUTF8String:"));
const length = sel_registerName(cstr("length"));

const str = objc_msgSend_stringWithUTF8String(
  NSString,
  stringWithUTF8String,
  cstr("Hello World"),
);

bench("noop", () => {});

bench("[str length] (fast)", () => {
  objc_msgSend_length(str, length);
});

bench("[str length] (slow)", () => {
  objc_msgSend_length_slow(str, length);
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
