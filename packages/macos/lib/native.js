let path = "../dist/macos/NativeScript.node";

if (typeof Deno == "object") {
  const execPath = Deno.execPath();
  const parts = execPath.split("/");
  parts.pop(); // remove executable name
  const containerDir = parts.pop();
  if (containerDir === "MacOS" && parts.pop() === "Contents") {
    const resourcesDir = parts.join("/") + "/Contents/Frameworks";
    const newPath = resourcesDir + "/libNativeScript.dylib";
    if (Deno.statSync(newPath).isFile) {
      path = newPath;
    }
  }
}

if (typeof interop === "undefined") {
  let metaURL = import.meta.url;
  if (!metaURL.includes("://")) {
    metaURL = "file://" + metaURL;
  }
  
  const module = { exports: {} };

  // deno-lint-ignore no-process-globals
  process.dlopen(
    module,
    new URL(path, metaURL).pathname,
  );

  module.exports.init(
    // deno-lint-ignore no-process-globals
    process.env.METADATA_PATH,
  );
}
