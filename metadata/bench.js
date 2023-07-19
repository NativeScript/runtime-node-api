const values = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const lookup = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
  "ten": "10",
};

function lookupObject(value) {
  return lookup[value] || "default";
}

function lookupSwitch(value) {
  switch (value) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    case "ten":
      return "10";
    default:
      return "default";
  }
}

Deno.bench("noop", () => {});

Deno.bench("lookupSwitch", () => {
  values.map(lookupSwitch);
});

Deno.bench("lookupObject", () => {
  values.map(lookupObject);
});
