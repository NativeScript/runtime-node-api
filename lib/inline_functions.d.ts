export {};

declare global {
  function CGMakePoint(x: number, y: number): { x: number; y: number };
  let NSMakePoint: typeof CGMakePoint;

  function CGMakeSize(
    width: number,
    height: number,
  ): { width: number; height: number };
  let NSMakeSize: typeof CGMakeSize;

  function CGMakeRect(
    x: number,
    y: number,
    width: number,
    height: number,
  ): {
    origin: { x: number; y: number };
    size: { width: number; height: number };
  };
  let NSMakeRect: typeof CGMakeRect;

  function UIMakeEdgeInsets(
    top: number,
    left: number,
    bottom: number,
    right: number,
  ): { top: number; left: number; bottom: number; right: number };

  function NSMakeRange(
    location: number,
    length: number,
  ): { location: number; length: number };
}
