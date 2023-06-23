// Just a benchmark to compare the performance of V8 Fast API and the slow API
// in case of Objective-C interop.

const {
  objc_getClass,
  sel_registerName,
  objc_msgSend,
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

  objc_msgSend: {
    type: "pointer",
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

const fnptr = new Deno.UnsafeFnPointer(objc_msgSend, {
  parameters: ["pointer", "pointer"],
  result: "pointer",
});

Deno.bench("noop", () => {});

Deno.bench("[str length] (fast)", () => {
  objc_msgSend_length(str, length);
});

Deno.bench("[str length] (slow, autogenerated)", () => {
  objc_msgSend_length_slow(str, length);
});

Deno.bench("[str length] (slow, dynamic)", () => {
  fnptr.call(str, length);
});