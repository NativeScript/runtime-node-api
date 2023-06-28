export function NSMakeRect(x, y, width, height) {
  return new Float64Array([x, y, width, height]);
}

export function NSMakeSize(width, height) {
  return new Float64Array([width, height]);
}
