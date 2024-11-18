console.log("hello world", NSObject.new());

const { test } = require("./mod.js");

test();

const id = setTimeout(() => {
    console.log("timeout");
}, 1000);

clearTimeout(id);

const int = setInterval(() => {
    console.log("interval");
}, 1000);

setTimeout(() => {
    clearInterval(int);
}, 5000);

console.log(new Error().stack);

NSApplicationMain(0, null);

// const timer = NSTimer.scheduledTimerWithTimeIntervalRepeatsBlock(1, true, () => {
//     console.log("timer");
//     timer.invalidate();
// });
