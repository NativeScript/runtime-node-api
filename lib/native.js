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

let metaURL = import.meta.url;
if (!metaURL.includes("://")) {
  metaURL = "file://" + metaURL;
}

let functions;
if (typeof Deno === "object") {
  const { dlopen } = await import("node:process");
  functions = dlopen(
    { exports: {} },
    new URL(path, metaURL).pathname,
  ).exports;
} else {
  functions = {};
  process.dlopen(
    { exports: functions },
    new URL(path, metaURL).pathname,
  );
}

functions.init(
  typeof Deno === "object"
    ? Deno.env.get("METADATA_PATH")
    : process.env.METADATA_PATH,
);
