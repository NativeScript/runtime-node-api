export {};

declare global {
  function CGPointMake(x: number, y: number): { x: number; y: number };
  let NSMakePoint: typeof CGPointMake;

  function CGSizeMake(
    width: number,
    height: number,
  ): { width: number; height: number };
  let NSMakeSize: typeof CGSizeMake;

  function CGRectMake(
    x: number,
    y: number,
    width: number,
    height: number,
  ): {
    origin: { x: number; y: number };
    size: { width: number; height: number };
  };
  let NSMakeRect: typeof CGRectMake;

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
