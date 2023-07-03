export function NSMakeRect(x, y, width, height) {
  return new Float64Array([x, y, width, height]);
}

export function NSMakeSize(width, height) {
  return new Float64Array([width, height]);
}

export function CGRectGetMidX(rect) {
  rect = new Float64Array(rect);
  return rect[0] + rect[2] / 2;
}

export function CGRectGetMidY(rect) {
  rect = new Float64Array(rect);
  return rect[1] + rect[3] / 2;
}
