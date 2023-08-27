// TODO: needs block support on different threads

import "objc";

const completionHandler = objc.registerBlock(
  "v@@@",
  (data, response, error) => {
    console.log(data, response, error);
    CFRunLoopStop(CFRunLoopGetCurrent());
  },
);

const url = NSURL.URLWithString("https://www.google.com/");
const session = NSURLSession.sharedSession;
const task = session.dataTaskWithURLCompletionHandler(url, completionHandler);
task.resume();

CFRunLoopRun();
