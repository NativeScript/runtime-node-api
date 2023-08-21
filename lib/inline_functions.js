export function NSMakeRect(x, y, width, height) {
  return {
    origin: { x, y },
    size: { width, height },
  };
}

export function NSMakeSize(width, height) {
  return { width, height };
}

export function NSMakePoint(x, y) {
  return { x, y };
}

export function CGRectGetMidX(rect) {
  return rect.origin.x + rect.size.width / 2;
}

export function CGRectGetMidY(rect) {
  return rect.origin.y + rect.size.height / 2;
}
