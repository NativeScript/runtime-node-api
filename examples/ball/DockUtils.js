// @ts-check

import "@nativescript/macos-node-api";

export const WBDockPosition = {
  bottom: 0,
  left: 1,
  right: 2,
};

export function getDockPosition() {
  if (NSScreen.mainScreen.visibleFrame.origin.y == 0) {
    if (NSScreen.mainScreen.visibleFrame.origin.x == 0) {
      return WBDockPosition.right;
    } else {
      return WBDockPosition.left;
    }
  } else {
    return WBDockPosition.bottom;
  }
}

export function getDockSize() {
  const dockPosition = getDockPosition();
  let size;
  switch (dockPosition) {
    case WBDockPosition.right:
      size = NSScreen.mainScreen.frame.size.width -
        NSScreen.mainScreen.visibleFrame.size.width;
      return size;
    case WBDockPosition.left:
      size = NSScreen.mainScreen.visibleFrame.origin.x;
      return size;
    case WBDockPosition.bottom:
      size = NSScreen.mainScreen.visibleFrame.origin.y;
      return size;
    default:
      throw new Error("unreachable");
  }
}

export function isDockHidden() {
  const dockSize = getDockSize();

  if (dockSize < 25) {
    return true;
  } else {
    return false;
  }
}

/**
 * @param {NSScreen} screen
 * @returns {CGRect}
 */
export function getInferredRectOfHoveredDockIcon(screen) {
  // Keep in mind coords are inverted (y=0 at bottom)
  const dockSize = getDockSize();
  const dockPos = getDockPosition();
  const tileSize = dockSize * (64.0 / 79.0);
  // First, set center to the mouse pos
  const center = NSEvent.mouseLocation;
  if (dockPos == WBDockPosition.bottom) {
    center.y = CGRectGetMinY(screen.frame) + tileSize / 2;
    // Dock icons are a little above the center of the dock rect
    center.y += 2.5 / 79 * dockSize;
  }
  return new CGRect({
    origin: { x: center.x - tileSize / 2, y: center.y - tileSize / 2 },
    size: { width: tileSize, height: tileSize },
  });
}

/**
 * @param {CGRect} r
 * @param {CGRect} bounds
 * @returns {CGRect}
 */
export function byConstrainingWithinBounds(r, bounds) {
  const r_minX = CGRectGetMinX(r);
  const bounds_minX = CGRectGetMinX(bounds);
  const r_maxX = CGRectGetMaxX(r);
  const bounds_maxX = CGRectGetMaxX(bounds);
  const r_minY = CGRectGetMinY(r);
  const bounds_minY = CGRectGetMinY(bounds);
  const r_maxY = CGRectGetMaxY(r);
  const bounds_maxY = CGRectGetMaxY(bounds);

  if (r_minX < bounds_minX) {
    r.origin.x = bounds_minX;
  }
  if (r_maxX > bounds_maxX) {
    r.origin.x = bounds_maxX - r.size.width;
  }
  if (r_minY < bounds_minY) {
    r.origin.y = bounds_minY;
  }
  if (r_maxY > bounds_maxY) {
    r.origin.y = bounds_maxY - r.size.height;
  }
  return r;
}

/**
 * @param {number} x
 * @param {number} domainStart
 * @param {number} domainEnd
 * @param {number} rangeStart
 * @param {number} rangeEnd
 * @param {boolean} [clamp=true]
 * @returns {number}
 */
export function remap(
  x,
  domainStart,
  domainEnd,
  rangeStart,
  rangeEnd,
  clamp = true,
) {
  const domain = domainEnd - domainStart;
  const range = rangeEnd - rangeStart;
  const value = (x - domainStart) / domain;
  const result = rangeStart + value * range;
  if (clamp) {
    if (rangeStart < rangeEnd) {
      return Math.min(Math.max(result, rangeStart), rangeEnd);
    } else {
      return Math.min(Math.max(result, rangeEnd), rangeStart);
    }
  } else {
    return result;
  }
}
