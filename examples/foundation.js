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

// rect.origin.x = 10;
console.log(rect, rect.origin.x, rect.origin.y, rect.size.width, rect.size.height);

const rect2 = new CGRect({ origin: { x: 10, y: 20 }, size: { width: 100, height: 120 } });
console.log(rect2, rect2.origin.x, rect2.origin.y, rect2.size.width, rect2.size.height);
