import { createRequire } from "node:module";

let objc;

if (typeof globalThis === "object" && "objc" in globalThis) {
  objc = globalThis.objc;
} else {
  const require = createRequire(import.meta.url);

  let path = "../build/macos/ObjCBridge.node";

  if (typeof Deno == "object") {
    const execPath = Deno.execPath();
    const parts = execPath.split("/");
    parts.pop(); // remove executable name
    const containerDir = parts.pop();
    if (containerDir === "MacOS" && parts.pop() === "Contents") {
      const resourcesDir = parts.join("/") + "/Contents/Resources";
      const newPath = resourcesDir + "/ObjCBridge.node";
      if (Deno.statSync(newPath).isFile) {
        path = newPath;
      }
    }
  }

  objc = require(path);
}

export { objc };
