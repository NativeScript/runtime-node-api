import { classes } from "../index.js";

const {
  NSString,
} = classes;

console.log(NSString.stringWithUTF8String("Hello, macOS").length);

const origin = new CGPoint({ x: 1, y: 2 });
console.log(origin, origin.x, origin.y);

const size = new CGSize({ width: 100, height: 120 });
console.log(size, size.width, size.height);

const rect = new CGRect({ origin, size });
console.log(rect, rect.origin.x, rect.origin.y, rect.size.width, rect.size.height);
