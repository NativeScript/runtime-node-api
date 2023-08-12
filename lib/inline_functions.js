export function NSMakeRect(x, y, width, height) {
  return new CGRect({
    origin: new CGPoint({ x, y }),
    size: new CGSize({ width, height }),
  });
}

export function NSMakeSize(width, height) {
  return new CGSize({ width, height });
}

export function CGRectGetMidX(rect) {
  return rect.origin.x + rect.size.width / 2;
}

export function CGRectGetMidY(rect) {
  return rect.origin.y + rect.size.height / 2;
}
