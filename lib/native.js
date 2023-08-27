import { dlopen } from "node:process";

let objc;

if (typeof globalThis === "object" && "objc" in globalThis) {
  objc = globalThis.objc;
} else {
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

  objc = {};
  dlopen(
    { exports: objc },
    new URL(path, import.meta.url).pathname,
  );
}

export { objc };
