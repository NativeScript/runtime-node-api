globalThis.global = globalThis;

globalThis.__ANDROID__ = false;
globalThis.__IOS__ = true;
globalThis.__VISIONOS__ = false;
globalThis.__dirname = NSBundle.mainBundle.bundlePath;

WeakRef.prototype.get = function () {
  return this.deref();
};
