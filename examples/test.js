import "objc";

const frame1 = new CGRect({ origin: { x: 0, y: 0 }, size: { width: 500, height: 500 } });
const frame2 = new CGRect({ origin: { x: 0, y: 0 }, size: { width: 500, height: 500 } });

const view = NSView.new();
view.frame = frame1;
view.frame = frame2;
