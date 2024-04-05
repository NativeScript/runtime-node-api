// @ts-check

import "@nativescript/macos-node-api";

const pasteboard = NSPasteboard.generalPasteboard;

console.log("pasteboard:", pasteboard);
console.log("pasteboard name:", pasteboard.name);
console.log("pasteboard changeCount:", pasteboard.changeCount);
console.log(
  "pasteboard contents:",
  pasteboard.stringForType(NSPasteboardTypeString)
);
