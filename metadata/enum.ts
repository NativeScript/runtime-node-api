function splitCamelCase(str: string): string[] {
  return str.split(/(?=[A-Z])/);
}

function transformEnumNames(enumName: string, members: string[]): string[] {
  const result: string[] = [];
  const parts: string[][] = [];
  let skipBegin = Infinity, skipEnd = Infinity, largestPart: string[] = [];

  for (const member of members) {
    const split = splitCamelCase(member);
    parts.push(split);
    if (largestPart.length < split.length) {
      largestPart = split;
    }
  }

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    let skip = 0;
    for (let j = 0; j < part.length; j++) {
      if (part[j] === largestPart[j]) {
        skip++;
      } else {
        break;
      }
    }

    if (skip < skipBegin) {
      skipBegin = skip;
    }

    skip = 0;
    for (let j = 0; j < part.length; j++) {
      if (
        part[part.length - 1 - j] === largestPart[largestPart.length - 1 - j]
      ) {
        skip++;
      } else {
        break;
      }
    }

    if (skip < skipEnd) {
      skipEnd = skip;
    }
  }

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const name = part.slice(skipBegin, part.length - skipEnd).join("");
    if (name === "") {
      result.push(members[i]);
    } else {
      result.push(name);
    }
  }

  return result;
}

console.log(
  transformEnumNames("Test", ["FooBar", "FooBarBaz", "FooBarBazQux"]),
);
// => ['FooBar', 'Baz', 'Qux']
