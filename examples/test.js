import "objc";

const view = NSView.new();

console.log(view.frame.size.width, view.frame.size.height);

view.frame = { origin: { x: 0, y: 0 }, size: { width: 500, height: 500 } };

console.log(view.frame.size.width, view.frame.size.height);
