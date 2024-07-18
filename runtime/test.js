console.log("hello world", NSObject.new());

const { test } = require("./mod.js");

test();

console.log(new Error().stack);

// const timer = NSTimer.scheduledTimerWithTimeIntervalRepeatsBlock(1, true, () => {
//     console.log("timer");
//     timer.invalidate();
// });
