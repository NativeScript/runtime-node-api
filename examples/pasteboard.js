import "../index.js";

const pasteboard = NSPasteboard.generalPasteboard;

console.log("pasteboard:", pasteboard);
console.log("pasteboard name:", pasteboard.name);
console.log("pasteboard changeCount:", pasteboard.changeCount);
console.log(
  "pasteboard contents:",
  pasteboard.stringForType("public.utf8-plain-text"),
);
