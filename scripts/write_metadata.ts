const [binaryFile] = Deno.args;

const binary = await Deno.readFile(binaryFile);

const metadata = await Deno.readFile(
  new URL("../metadata/metadata.nsmd", import.meta.url),
);

let offset = -1;

const MAGIC_TEXT = "NSMDSectionHeader";

for (let i = 0; i < binary.byteLength; i++) {
  const byte = binary[i];
  if (byte === "N".charCodeAt(0)) {
    const magic = new TextDecoder().decode(
      binary.subarray(i, i + MAGIC_TEXT.length),
    );
    // First encounter will be just the static string, while second
    // encounter is actual location of custom section data.
    if (magic === MAGIC_TEXT) {
      offset = i;
    }
  }
}

if (offset === -1) {
  throw new Error("Could not find metadata section");
}

binary.set(metadata, offset);

await Deno.writeFile(binaryFile, binary);
