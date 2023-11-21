globalThis.global = globalThis;

globalThis.__ANDROID__ = false;
globalThis.__IOS__ = true;
globalThis.__VISIONOS__ = false;
globalThis.__dirname = NSBundle.mainBundle.bundlePath;

WeakRef.prototype.get = function () {
  return this.deref();
};

globalThis.CGRectMake = function (x, y, width, height) {
  return { origin: { x, y }, size: { width, height } };
};
