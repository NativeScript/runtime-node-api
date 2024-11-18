/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const kCAValueFunctionRotateY: string;

declare const kCAFilterLinear: string;

declare const CAFrameRateRangeDefault: CAFrameRateRange;

declare const kCAGravityTop: string;

declare const CATransform3DIdentity: CATransform3D;

declare const kCAScrollBoth: string;

declare const kCAMediaTimingFunctionDefault: string;

declare const kCATransactionAnimationTimingFunction: string;

declare const kCAAlignmentRight: string;

declare const kCAAnimationCubicPaced: string;

declare const kCAMediaTimingFunctionEaseOut: string;

declare const kCAValueFunctionTranslate: string;

declare const kCAGravityLeft: string;

declare const kCARendererMetalCommandQueue: string;

declare const kCAAnimationPaced: string;

declare const kCALineCapButt: string;

declare const kCATransitionPush: string;

declare const kCATransitionFromRight: string;

declare const kCAValueFunctionScaleY: string;

declare const kCAValueFunctionTranslateX: string;

declare const kCAValueFunctionScale: string;

declare const kCAValueFunctionRotateZ: string;

declare const kCATransactionCompletionBlock: string;

declare const kCATransactionAnimationDuration: string;

declare const kCAAlignmentCenter: string;

declare const kCATruncationStart: string;

declare const kCALineCapSquare: string;

declare const kCALineJoinBevel: string;

declare const kCALineJoinRound: string;

declare const kCALineJoinMiter: string;

declare const kCAGradientLayerRadial: string;

declare const kCAGradientLayerAxial: string;

declare const kCAMediaTimingFunctionLinear: string;

declare const kCAEmitterLayerAdditive: string;

declare const kCAEmitterLayerBackToFront: string;

declare const kCAEmitterLayerOldestFirst: string;

declare const kCAEmitterLayerUnordered: string;

declare const kCAEmitterLayerVolume: string;

declare const kCAEmitterLayerPoints: string;

declare const kCAEmitterLayerCircle: string;

declare const kCATransitionReveal: string;

declare const kCATransitionFade: string;

declare const kCAAnimationRotateAutoReverse: string;

declare const kCAAnimationCubic: string;

declare const kCAAnimationDiscrete: string;

declare const kCAAnimationLinear: string;

declare const kCATransition: string;

declare const kCAValueFunctionTranslateY: string;

declare const kCAOnOrderIn: string;

declare const kCACornerCurveCircular: string;

declare const kCAFilterTrilinear: string;

declare const kCAContentsFormatRGBA16Float: string;

declare const kCAContentsFormatRGBA8Uint: string;

declare const kCAGravityResizeAspect: string;

declare const kCAGravityBottomRight: string;

declare const kCAGravityBottomLeft: string;

declare const kCAGravityTopLeft: string;

declare const kCAGravityRight: string;

declare const CAToneMapModeIfSupported: string;

declare const kCAFillModeRemoved: string;

declare const kCAFillModeBoth: string;

declare const kCAFillModeBackwards: string;

declare const CAToneMapModeNever: string;

declare const kCAFillModeForwards: string;

declare const kCATruncationMiddle: string;

declare const kCAContentsFormatGray8Uint: string;

declare const kCAAlignmentNatural: string;

declare const kCATransitionFromLeft: string;

declare const kCAValueFunctionTranslateZ: string;

declare const kCAFilterNearest: string;

declare const kCAGravityResizeAspectFill: string;

declare const kCAFillRuleNonZero: string;

declare const kCAEmitterLayerPoint: string;

declare const kCAAlignmentJustified: string;

declare const kCAScrollNone: string;

declare const kCAOnOrderOut: string;

declare const kCAEmitterLayerLine: string;

declare const kCATruncationNone: string;

declare const kCAAlignmentLeft: string;

declare const kCATruncationEnd: string;

declare const kCAScrollHorizontally: string;

declare const kCAEmitterLayerSphere: string;

declare const kCATransitionFromBottom: string;

declare const kCAScrollVertically: string;

declare const kCAValueFunctionScaleZ: string;

declare const kCACornerCurveContinuous: string;

declare const kCAFillRuleEvenOdd: string;

declare const kCAAnimationRotateAuto: string;

declare const kCAValueFunctionScaleX: string;

declare const kCARendererColorSpace: string;

declare const kCAEmitterLayerRectangle: string;

declare const kCAGravityBottom: string;

declare const kCAEmitterLayerSurface: string;

declare const kCAGravityResize: string;

declare const kCAMediaTimingFunctionEaseIn: string;

declare const kCAMediaTimingFunctionEaseInEaseOut: string;

declare const kCATransitionFromTop: string;

declare const kCATransitionMoveIn: string;

declare const kCAEmitterLayerOldestLast: string;

declare const CAToneMapModeAutomatic: string;

declare const kCAValueFunctionRotateX: string;

declare const kCAEmitterLayerCuboid: string;

declare const kCATransactionDisableActions: string;

declare const kCALineCapRound: string;

declare const kCAEmitterLayerOutline: string;

declare const kCAGradientLayerConic: string;

declare const kCAGravityCenter: string;

declare const kCAGravityTopRight: string;

declare const CACornerMask: {
  MinXMin: 1,
  MaxXMin: 2,
  MinXMax: 4,
  MaxXMax: 8,
};

declare const CAEdgeAntialiasingMask: {
  Left: 1,
  Right: 2,
  Bottom: 4,
  Top: 8,
};

declare class CATransform3D {
  constructor(init?: CATransform3D);
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;
}

declare class CAFrameRateRange {
  constructor(init?: CAFrameRateRange);
  minimum: number;
  maximum: number;
  preferred: number;
}

declare function CACurrentMediaTime(): number;

declare function CATransform3DIsIdentity(t: CATransform3D): boolean;

declare function CATransform3DEqualToTransform(a: CATransform3D, b: CATransform3D): boolean;

declare function CATransform3DMakeTranslation(tx: number, ty: number, tz: number): CATransform3D;

declare function CATransform3DMakeScale(sx: number, sy: number, sz: number): CATransform3D;

declare function CATransform3DMakeRotation(angle: number, x: number, y: number, z: number): CATransform3D;

declare function CATransform3DTranslate(t: CATransform3D, tx: number, ty: number, tz: number): CATransform3D;

declare function CATransform3DScale(t: CATransform3D, sx: number, sy: number, sz: number): CATransform3D;

declare function CATransform3DRotate(t: CATransform3D, angle: number, x: number, y: number, z: number): CATransform3D;

declare function CATransform3DConcat(a: CATransform3D, b: CATransform3D): CATransform3D;

declare function CATransform3DInvert(t: CATransform3D): CATransform3D;

declare function CATransform3DMakeAffineTransform(m: CGAffineTransform): CATransform3D;

declare function CATransform3DIsAffine(t: CATransform3D): boolean;

declare function CATransform3DGetAffineTransform(t: CATransform3D): CGAffineTransform;

declare function CAFrameRateRangeMake(minimum: number, maximum: number, preferred: number): CAFrameRateRange;

declare function CAFrameRateRangeIsEqualToRange(range: CAFrameRateRange, other: CAFrameRateRange): boolean;

declare interface CAMetalDrawable extends MTLDrawable {
  readonly texture: MTLTexture;

  readonly layer: CAMetalLayer;
}

declare class CAMetalDrawable extends NativeObject implements CAMetalDrawable {
}

declare interface CAMetalDisplayLinkDelegate {
  metalDisplayLinkNeedsUpdate(link: CAMetalDisplayLink, update: CAMetalDisplayLinkUpdate): void;
}

declare class CAMetalDisplayLinkDelegate extends NativeObject implements CAMetalDisplayLinkDelegate {
}

declare interface CAMediaTiming {
  beginTime: number;

  duration: number;

  speed: number;

  timeOffset: number;

  repeatCount: number;

  repeatDuration: number;

  autoreverses: boolean;

  fillMode: string;
}

declare class CAMediaTiming extends NativeObject implements CAMediaTiming {
}

declare interface CALayerDelegate extends NSObjectProtocol {
  displayLayer?(layer: CALayer): void;

  drawLayerInContext?(layer: CALayer, ctx: interop.PointerConvertible): void;

  layerWillDraw?(layer: CALayer): void;

  layoutSublayersOfLayer?(layer: CALayer): void;

  actionForLayerForKey?(layer: CALayer, event: string): CAAction;
}

declare class CALayerDelegate extends NativeObject implements CALayerDelegate {
}

declare interface CAAnimationDelegate extends NSObjectProtocol {
  animationDidStart?(anim: CAAnimation): void;

  animationDidStopFinished?(anim: CAAnimation, flag: boolean): void;
}

declare class CAAnimationDelegate extends NativeObject implements CAAnimationDelegate {
}

declare interface CAAction {
  runActionForKeyObjectArguments(event: string, anObject: interop.Object, dict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): void;
}

declare class CAAction extends NativeObject implements CAAction {
}

declare class CAKeyframeAnimation extends CAPropertyAnimation {
  get values(): NSArray;
  set values(value: NSArray<interop.Object> | Array<interop.Object>);

  get path(): interop.Pointer;
  set path(value: interop.PointerConvertible);

  get keyTimes(): NSArray;
  set keyTimes(value: NSArray<interop.Object> | Array<interop.Object>);

  get timingFunctions(): NSArray;
  set timingFunctions(value: NSArray<interop.Object> | Array<interop.Object>);

  calculationMode: string;

  get tensionValues(): NSArray;
  set tensionValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get continuityValues(): NSArray;
  set continuityValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get biasValues(): NSArray;
  set biasValues(value: NSArray<interop.Object> | Array<interop.Object>);

  rotationMode: string;
}

declare class CABasicAnimation extends CAPropertyAnimation {
  fromValue: interop.Object;

  toValue: interop.Object;

  byValue: interop.Object;
}

declare class CATextLayer extends CALayer {
  string: interop.Object;

  get font(): interop.Pointer;
  set font(value: interop.PointerConvertible);

  fontSize: number;

  get foregroundColor(): interop.Pointer;
  set foregroundColor(value: interop.PointerConvertible);

  isWrapped: boolean;

  truncationMode: string;

  alignmentMode: string;

  allowsFontSubpixelQuantization: boolean;
}

declare class CATiledLayer extends CALayer {
  static fadeDuration(): number;

  levelsOfDetail: number;

  levelsOfDetailBias: number;

  tileSize: CGSize;
}

declare class CAMetalDisplayLink extends NSObject {
  initWithMetalLayer(layer: CAMetalLayer): this;

  addToRunLoopForMode(runloop: NSRunLoop, mode: string): void;

  removeFromRunLoopForMode(runloop: NSRunLoop, mode: string): void;

  invalidate(): void;

  delegate: CAMetalDisplayLinkDelegate;

  preferredFrameLatency: number;

  preferredFrameRateRange: CAFrameRateRange;

  isPaused: boolean;
}

declare class CATransformLayer extends CALayer {
}

declare class CAEmitterLayer extends CALayer {
  get emitterCells(): NSArray;
  set emitterCells(value: NSArray<interop.Object> | Array<interop.Object>);

  birthRate: number;

  lifetime: number;

  emitterPosition: CGPoint;

  emitterZPosition: number;

  emitterSize: CGSize;

  emitterDepth: number;

  emitterShape: string;

  emitterMode: string;

  renderMode: string;

  preservesDepth: boolean;

  velocity: number;

  scale: number;

  spin: number;

  seed: number;
}

declare class CATransition extends CAAnimation {
  type: string;

  subtype: string;

  startProgress: number;

  endProgress: number;
}

declare class CATransaction extends NSObject {
  static begin(): void;

  static commit(): void;

  static flush(): void;

  static lock(): void;

  static unlock(): void;

  static animationDuration(): number;

  static setAnimationDuration(dur: number): void;

  static animationTimingFunction(): CAMediaTimingFunction;

  static setAnimationTimingFunction(function$: CAMediaTimingFunction | null): void;

  static disableActions(): boolean;

  static setDisableActions(flag: boolean): void;

  static completionBlock(): () => void;

  static setCompletionBlock(block: () => void | null): void;

  static valueForKey(key: string): interop.Object;

  static setValueForKey(anObject: interop.Object | null, key: string): void;
}

declare class CAScrollLayer extends CALayer {
  scrollToPoint(p: CGPoint): void;

  scrollToRect(r: CGRect): void;

  scrollMode: string;
}

declare class CASpringAnimation extends CABasicAnimation {
  mass: number;

  stiffness: number;

  damping: number;

  initialVelocity: number;

  allowsOverdamping: boolean;

  readonly settlingDuration: number;

  initWithPerceptualDurationBounce(perceptualDuration: number, bounce: number): this;

  readonly perceptualDuration: number;

  readonly bounce: number;
}

declare class CADisplayLink extends NSObject {
  static displayLinkWithTargetSelector(target: interop.Object, sel: string): CADisplayLink;

  addToRunLoopForMode(runloop: NSRunLoop, mode: string): void;

  removeFromRunLoopForMode(runloop: NSRunLoop, mode: string): void;

  invalidate(): void;

  readonly timestamp: number;

  readonly duration: number;

  readonly targetTimestamp: number;

  isPaused: boolean;

  frameInterval: number;

  preferredFramesPerSecond: number;

  preferredFrameRateRange: CAFrameRateRange;
}

declare class CAGradientLayer extends CALayer {
  get colors(): NSArray;
  set colors(value: NSArray<interop.Object> | Array<interop.Object>);

  get locations(): NSArray;
  set locations(value: NSArray<interop.Object> | Array<interop.Object>);

  startPoint: CGPoint;

  endPoint: CGPoint;

  type: string;
}

declare class CAEAGLLayer extends CALayer implements EAGLDrawable {
  presentsWithTransaction: boolean;

  get drawableProperties(): NSDictionary;
  set drawableProperties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class CAMetalLayer extends CALayer {
  device: MTLDevice;

  readonly preferredDevice: MTLDevice;

  pixelFormat: interop.Enum<typeof MTLPixelFormat>;

  framebufferOnly: boolean;

  drawableSize: CGSize;

  nextDrawable(): CAMetalDrawable;

  maximumDrawableCount: number;

  presentsWithTransaction: boolean;

  get colorspace(): interop.Pointer;
  set colorspace(value: interop.PointerConvertible);

  wantsExtendedDynamicRangeContent: boolean;

  EDRMetadata: CAEDRMetadata;

  allowsNextDrawableTimeout: boolean;

  get developerHUDProperties(): NSDictionary;
  set developerHUDProperties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class CAValueFunction extends NSObject implements NSSecureCoding {
  static functionWithName<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  readonly name: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CAShapeLayer extends CALayer {
  get path(): interop.Pointer;
  set path(value: interop.PointerConvertible);

  get fillColor(): interop.Pointer;
  set fillColor(value: interop.PointerConvertible);

  fillRule: string;

  get strokeColor(): interop.Pointer;
  set strokeColor(value: interop.PointerConvertible);

  strokeStart: number;

  strokeEnd: number;

  lineWidth: number;

  miterLimit: number;

  lineCap: string;

  lineJoin: string;

  lineDashPhase: number;

  get lineDashPattern(): NSArray;
  set lineDashPattern(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class CAReplicatorLayer extends CALayer {
  instanceCount: number;

  preservesDepth: boolean;

  instanceDelay: number;

  instanceTransform: CATransform3D;

  get instanceColor(): interop.Pointer;
  set instanceColor(value: interop.PointerConvertible);

  instanceRedOffset: number;

  instanceGreenOffset: number;

  instanceBlueOffset: number;

  instanceAlphaOffset: number;
}

declare class CARenderer extends NSObject {
  static rendererWithMTLTextureOptions(tex: MTLTexture, dict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CARenderer;

  layer: CALayer;

  bounds: CGRect;

  beginFrameAtTimeTimeStamp(t: number, ts: interop.PointerConvertible): void;

  updateBounds(): CGRect;

  addUpdateRect(r: CGRect): void;

  render(): void;

  nextFrameTime(): number;

  endFrame(): void;

  setDestination(tex: MTLTexture): void;
}

declare class CAEmitterCell extends NSObject implements NSSecureCoding, CAMediaTiming {
  static emitterCell<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static defaultValueForKey(key: string): interop.Object;

  shouldArchiveValueForKey(key: string): boolean;

  name: string;

  isEnabled: boolean;

  birthRate: number;

  lifetime: number;

  lifetimeRange: number;

  emissionLatitude: number;

  emissionLongitude: number;

  emissionRange: number;

  velocity: number;

  velocityRange: number;

  xAcceleration: number;

  yAcceleration: number;

  zAcceleration: number;

  scale: number;

  scaleRange: number;

  scaleSpeed: number;

  spin: number;

  spinRange: number;

  get color(): interop.Pointer;
  set color(value: interop.PointerConvertible);

  redRange: number;

  greenRange: number;

  blueRange: number;

  alphaRange: number;

  redSpeed: number;

  greenSpeed: number;

  blueSpeed: number;

  alphaSpeed: number;

  contents: interop.Object;

  contentsRect: CGRect;

  contentsScale: number;

  minificationFilter: string;

  magnificationFilter: string;

  minificationFilterBias: number;

  get emitterCells(): NSArray;
  set emitterCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get style(): NSDictionary;
  set style(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  beginTime: number;

  duration: number;

  speed: number;

  timeOffset: number;

  repeatCount: number;

  repeatDuration: number;

  autoreverses: boolean;

  fillMode: string;
}

declare class CAMetalDisplayLinkUpdate extends NSObject {
  readonly drawable: CAMetalDrawable;

  readonly targetTimestamp: number;

  readonly targetPresentationTimestamp: number;
}

declare class CAEDRMetadata extends NSObject implements NSCopying, NSSecureCoding {
  static HDR10MetadataWithDisplayInfoContentInfoOpticalOutputScale(displayData: NSData | null, contentData: NSData | null, scale: number): CAEDRMetadata;

  static HDR10MetadataWithMinLuminanceMaxLuminanceOpticalOutputScale(minNits: number, maxNits: number, scale: number): CAEDRMetadata;

  static HLGMetadataWithAmbientViewingEnvironment(data: NSData): CAEDRMetadata;

  static readonly HLGMetadata: CAEDRMetadata;

  static readonly isAvailable: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CAAnimationGroup extends CAAnimation {
  get animations(): NSArray;
  set animations(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class CAPropertyAnimation extends CAAnimation {
  static animationWithKeyPath<This extends abstract new (...args: any) => any>(this: This, path: string | null): InstanceType<This>;

  keyPath: string;

  isAdditive: boolean;

  isCumulative: boolean;

  valueFunction: CAValueFunction;
}

declare class CALayer extends NSObject implements NSSecureCoding, CAMediaTiming {
  static layer<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  init(): this;

  initWithLayer(layer: interop.Object): this;

  presentationLayer(): this;

  modelLayer(): this;

  static defaultValueForKey(key: string): interop.Object;

  static needsDisplayForKey(key: string): boolean;

  shouldArchiveValueForKey(key: string): boolean;

  bounds: CGRect;

  position: CGPoint;

  zPosition: number;

  anchorPoint: CGPoint;

  anchorPointZ: number;

  transform: CATransform3D;

  affineTransform(): CGAffineTransform;

  setAffineTransform(m: CGAffineTransform): void;

  frame: CGRect;

  isHidden: boolean;

  isDoubleSided: boolean;

  isGeometryFlipped: boolean;

  contentsAreFlipped(): boolean;

  readonly superlayer: CALayer;

  removeFromSuperlayer(): void;

  get sublayers(): NSArray;
  set sublayers(value: NSArray<interop.Object> | Array<interop.Object>);

  addSublayer(layer: CALayer): void;

  insertSublayerAtIndex(layer: CALayer, idx: number): void;

  insertSublayerBelow(layer: CALayer, sibling: CALayer | null): void;

  insertSublayerAbove(layer: CALayer, sibling: CALayer | null): void;

  replaceSublayerWith(oldLayer: CALayer, newLayer: CALayer): void;

  sublayerTransform: CATransform3D;

  mask: CALayer;

  masksToBounds: boolean;

  convertPointFromLayer(p: CGPoint, l: CALayer | null): CGPoint;

  convertPointToLayer(p: CGPoint, l: CALayer | null): CGPoint;

  convertRectFromLayer(r: CGRect, l: CALayer | null): CGRect;

  convertRectToLayer(r: CGRect, l: CALayer | null): CGRect;

  convertTimeFromLayer(t: number, l: CALayer | null): number;

  convertTimeToLayer(t: number, l: CALayer | null): number;

  hitTest(p: CGPoint): CALayer;

  containsPoint(p: CGPoint): boolean;

  contents: interop.Object;

  contentsRect: CGRect;

  contentsGravity: string;

  contentsScale: number;

  contentsCenter: CGRect;

  contentsFormat: string;

  wantsExtendedDynamicRangeContent: boolean;

  toneMapMode: string;

  minificationFilter: string;

  magnificationFilter: string;

  minificationFilterBias: number;

  isOpaque: boolean;

  display(): void;

  setNeedsDisplay(): void;

  setNeedsDisplayInRect(r: CGRect): void;

  needsDisplay(): boolean;

  displayIfNeeded(): void;

  needsDisplayOnBoundsChange: boolean;

  drawsAsynchronously: boolean;

  drawInContext(ctx: interop.PointerConvertible): void;

  renderInContext(ctx: interop.PointerConvertible): void;

  edgeAntialiasingMask: interop.Enum<typeof CAEdgeAntialiasingMask>;

  allowsEdgeAntialiasing: boolean;

  get backgroundColor(): interop.Pointer;
  set backgroundColor(value: interop.PointerConvertible);

  cornerRadius: number;

  maskedCorners: interop.Enum<typeof CACornerMask>;

  cornerCurve: string;

  static cornerCurveExpansionFactor(curve: string): number;

  borderWidth: number;

  get borderColor(): interop.Pointer;
  set borderColor(value: interop.PointerConvertible);

  opacity: number;

  allowsGroupOpacity: boolean;

  compositingFilter: interop.Object;

  get filters(): NSArray;
  set filters(value: NSArray<interop.Object> | Array<interop.Object>);

  get backgroundFilters(): NSArray;
  set backgroundFilters(value: NSArray<interop.Object> | Array<interop.Object>);

  shouldRasterize: boolean;

  rasterizationScale: number;

  get shadowColor(): interop.Pointer;
  set shadowColor(value: interop.PointerConvertible);

  shadowOpacity: number;

  shadowOffset: CGSize;

  shadowRadius: number;

  get shadowPath(): interop.Pointer;
  set shadowPath(value: interop.PointerConvertible);

  preferredFrameSize(): CGSize;

  setNeedsLayout(): void;

  needsLayout(): boolean;

  layoutIfNeeded(): void;

  layoutSublayers(): void;

  static defaultActionForKey(event: string): CAAction;

  actionForKey(event: string): CAAction;

  get actions(): NSDictionary;
  set actions(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  addAnimationForKey(anim: CAAnimation, key: string | null): void;

  removeAllAnimations(): void;

  removeAnimationForKey(key: string): void;

  animationKeys(): NSArray;

  animationForKey(key: string): CAAnimation;

  name: string;

  delegate: CALayerDelegate;

  get style(): NSDictionary;
  set style(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  scrollPoint(p: CGPoint): void;

  scrollRectToVisible(r: CGRect): void;

  readonly visibleRect: CGRect;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  beginTime: number;

  duration: number;

  speed: number;

  timeOffset: number;

  repeatCount: number;

  repeatDuration: number;

  autoreverses: boolean;

  fillMode: string;
}

declare class CAMediaTimingFunction extends NSObject implements NSSecureCoding {
  static functionWithName<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static functionWithControlPoints<This extends abstract new (...args: any) => any>(this: This, c1x: number, c1y: number, c2x: number, c2y: number): InstanceType<This>;

  initWithControlPoints(c1x: number, c1y: number, c2x: number, c2y: number): this;

  getControlPointAtIndexValues(idx: number, ptr: interop.PointerConvertible): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CAAnimation extends NSObject implements NSSecureCoding, NSCopying, CAMediaTiming, CAAction {
  static animation<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static defaultValueForKey(key: string): interop.Object;

  shouldArchiveValueForKey(key: string): boolean;

  timingFunction: CAMediaTimingFunction;

  delegate: CAAnimationDelegate;

  isRemovedOnCompletion: boolean;

  preferredFrameRateRange: CAFrameRateRange;

  static animationWithSCNAnimation(animation: SCNAnimation): CAAnimation;

  usesSceneTimeBase: boolean;

  fadeInDuration: number;

  fadeOutDuration: number;

  get animationEvents(): NSArray;
  set animationEvents(value: NSArray<interop.Object> | Array<interop.Object>);

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  beginTime: number;

  duration: number;

  speed: number;

  timeOffset: number;

  repeatCount: number;

  repeatDuration: number;

  autoreverses: boolean;

  fillMode: string;

  runActionForKeyObjectArguments(event: string, anObject: interop.Object, dict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): void;
}

