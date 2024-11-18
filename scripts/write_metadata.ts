const [binaryFile, metadataFile] = Deno.args;

const binary = await Deno.readFile(binaryFile);

const offsets: [string, number][] = [];

const MAGIC_TEXT = "NSMDSectionHeader";

for (let i = 0; i < binary.byteLength; i++) {
  const byte = binary[i];
  if (byte === "N".charCodeAt(0)) {
    const magic = new TextDecoder().decode(
      binary.subarray(i, i + MAGIC_TEXT.length)
    );
    if (magic === MAGIC_TEXT) {
      const arch = new TextDecoder().decode(
        binary.subarray(i + MAGIC_TEXT.length, i + MAGIC_TEXT.length + 3)
      );
      offsets.push([arch, i]);
    }
  }
}

if (offsets.length < 1) {
  console.log("No empty metadata section found");
}

for (const [arch, offset] of offsets) {
  console.log(`Writing metadata to offset ${offset}, arch: ${arch}`);
  binary.set(
    await Deno.readFile(
      new URL(
        `../metadata/${metadataFile.split(".nsmd")[0]}.${
          arch === "ARM" ? "arm64" : "x86_64"
        }.nsmd`,
        import.meta.url
      )
    ),
    offset
  );
}

await Deno.writeFile(binaryFile, binary);
