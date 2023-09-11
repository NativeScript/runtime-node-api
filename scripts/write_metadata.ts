const [binaryFile, metadataFile] = Deno.args;

const binary = await Deno.readFile(binaryFile);

const metadata = await Deno.readFile(
  new URL(`../metadata/${metadataFile}`, import.meta.url),
);

const offsets: number[] = [];

const MAGIC_TEXT = "NSMDSectionHeader";

for (let i = 0; i < binary.byteLength; i++) {
  const byte = binary[i];
  if (byte === "N".charCodeAt(0)) {
    const magic = new TextDecoder().decode(
      binary.subarray(i, i + MAGIC_TEXT.length),
    );
    if (magic === MAGIC_TEXT) {
      offsets.push(i);
    }
  }
}

if (offsets.length < 1) {
  console.log("No empty metadata section found");
}

for (const offset of offsets) {
  console.log(`Writing metadata to offset ${offset}`);
  binary.set(metadata, offset);
}

await Deno.writeFile(binaryFile, binary);
