import { objc } from "./native.js";

export const classes = new Proxy({}, {
  get(_target, name) {
    return objc.getClass(name);
  },
});
