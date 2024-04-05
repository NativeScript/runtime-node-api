// @ts-check

import "@nativescript/macos-node-api";

const url = NSURL.URLWithString("https://www.google.com/");
const session = NSURLSession.sharedSession;
let stopped = false;
const task = session.dataTaskWithURLCompletionHandler(
  url,
  (_data, response, _error) => {
    console.log("status code:", response);
    stopped = true;
  }
);
task.resume();

// Here, we'll run the runloop until the task is complete,
// in a way that JS event loop will still be running.
const interval = setInterval(() => {
  CFRunLoopRunInMode(kCFRunLoopDefaultMode, 0, 1);
  if (stopped) {
    clearInterval(interval);
  }
}, 0);
