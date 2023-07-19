import { classes } from "../index.js";

const {
  NSString,
} = classes;

// console.time("first get");
// console.log(NSTextAlignment);
// console.timeEnd("first get");
// console.time("second get");
// console.log(NSTextAlignment);
// console.timeEnd("second get");
// console.time("third get");
// console.log(NSTextAlignment);
// console.timeEnd("third get");

console.log(NSString.stringWithUTF8String("Hello, macOS").length);
