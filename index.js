import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const objc = require("./build/objc.node");

const classes = new Proxy({}, {
  get(_target, name) {
    return objc.getClass(name);
  },
});

export { classes, objc };
export * from "./inline_functions.js";
