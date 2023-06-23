import { classes } from "../index.js";

const {
  NSString,
} = classes;

console.log(NSString.stringWithUTF8String("Hello, macOS").length);
