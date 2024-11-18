/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./UIKit.d.ts" />

declare const SKTileAdjacencyMask: {
  AdjacencyUp: 1,
  AdjacencyUpperRight: 2,
  AdjacencyRight: 4,
  AdjacencyLowerRight: 8,
  AdjacencyDown: 16,
  AdjacencyLowerLeft: 32,
  AdjacencyLeft: 64,
  AdjacencyUpperLeft: 128,
  AdjacencyAll: 255,
  HexFlatAdjacencyUp: 1,
  HexFlatAdjacencyUpperRight: 2,
  HexFlatAdjacencyLowerRight: 4,
  HexFlatAdjacencyDown: 8,
  HexFlatAdjacencyLowerLeft: 16,
  HexFlatAdjacencyUpperLeft: 32,
  HexFlatAdjacencyAll: 63,
  HexPointyAdjacencyUpperLeft: 1,
  HexPointyAdjacencyUpperRight: 2,
  HexPointyAdjacencyRight: 4,
  HexPointyAdjacencyLowerRight: 8,
  HexPointyAdjacencyLowerLeft: 16,
  HexPointyAdjacencyLeft: 32,
  HexPointyAdjacencyAdd: 63,
  AdjacencyUpEdge: 124,
  AdjacencyUpperRightEdge: 112,
  AdjacencyRightEdge: 241,
  AdjacencyLowerRightEdge: 193,
  AdjacencyDownEdge: 199,
  AdjacencyLowerLeftEdge: 7,
  AdjacencyLeftEdge: 31,
  AdjacencyUpperLeftEdge: 28,
  AdjacencyUpperRightCorner: 223,
  AdjacencyLowerRightCorner: 127,
  AdjacencyLowerLeftCorner: 253,
  AdjacencyUpperLeftCorner: 247,
};

declare const SKAttributeType: {
  None: 0,
  Float: 1,
  VectorFloat2: 2,
  VectorFloat3: 3,
  VectorFloat4: 4,
  HalfFloat: 5,
  VectorHalfFloat2: 6,
  VectorHalfFloat3: 7,
  VectorHalfFloat4: 8,
};

declare const SKUniformType: {
  None: 0,
  Float: 1,
  FloatVector2: 2,
  FloatVector3: 3,
  FloatVector4: 4,
  FloatMatrix2: 5,
  FloatMatrix3: 6,
  FloatMatrix4: 7,
  Texture: 8,
};

declare const SKTextureFilteringMode: {
  Nearest: 0,
  Linear: 1,
};

declare const SKTransitionDirection: {
  Up: 0,
  Down: 1,
  Right: 2,
  Left: 3,
};

declare const SKLabelVerticalAlignmentMode: {
  Baseline: 0,
  Center: 1,
  Top: 2,
  Bottom: 3,
};

declare const SKSceneScaleMode: {
  Fill: 0,
  AspectFill: 1,
  AspectFit: 2,
  ResizeFill: 3,
};

declare const SKBlendMode: {
  Alpha: 0,
  Add: 1,
  Subtract: 2,
  Multiply: 3,
  MultiplyX2: 4,
  Screen: 5,
  Replace: 6,
  MultiplyAlpha: 7,
};

declare const SKNodeFocusBehavior: {
  None: 0,
  Occluding: 1,
  Focusable: 2,
};

declare const SKInterpolationMode: {
  Linear: 1,
  Spline: 2,
  Step: 3,
};

declare const SKTileDefinitionRotation: {
  Rotation0: 0,
  Rotation90: 1,
  Rotation180: 2,
  Rotation270: 3,
};

declare const SKRepeatMode: {
  Clamp: 1,
  Loop: 2,
};

declare const SKParticleRenderOrder: {
  OldestLast: 0,
  OldestFirst: 1,
  DontCare: 2,
};

declare const SKActionTimingMode: {
  Linear: 0,
  EaseIn: 1,
  EaseOut: 2,
  EaseInEaseOut: 3,
};

declare const SKTileSetType: {
  Grid: 0,
  Isometric: 1,
  HexagonalFlat: 2,
  HexagonalPointy: 3,
};

declare const SKLabelHorizontalAlignmentMode: {
  Center: 0,
  Left: 1,
  Right: 2,
};

declare interface SKViewDelegate extends NSObjectProtocol {
  viewShouldRenderAtTime?(view: SKView, time: number): boolean;
}

declare class SKViewDelegate extends NativeObject implements SKViewDelegate {
}

declare interface SKSceneDelegate extends NSObjectProtocol {
  updateForScene?(currentTime: number, scene: SKScene): void;

  didEvaluateActionsForScene?(scene: SKScene): void;

  didSimulatePhysicsForScene?(scene: SKScene): void;

  didApplyConstraintsForScene?(scene: SKScene): void;

  didFinishUpdateForScene?(scene: SKScene): void;
}

declare class SKSceneDelegate extends NativeObject implements SKSceneDelegate {
}

declare interface SKWarpable extends NSObjectProtocol {
  warpGeometry: SKWarpGeometry;

  subdivisionLevels: number;
}

declare class SKWarpable extends NativeObject implements SKWarpable {
}

declare interface SKPhysicsContactDelegate extends NSObjectProtocol {
  didBeginContact?(contact: SKPhysicsContact): void;

  didEndContact?(contact: SKPhysicsContact): void;
}

declare class SKPhysicsContactDelegate extends NativeObject implements SKPhysicsContactDelegate {
}

declare class SKTexture extends NSObject implements NSCopying, NSSecureCoding {
  static textureWithImageNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static textureWithRectInTexture<This extends abstract new (...args: any) => any>(this: This, rect: CGRect, texture: SKTexture): InstanceType<This>;

  static textureVectorNoiseWithSmoothnessSize<This extends abstract new (...args: any) => any>(this: This, smoothness: number, size: CGSize): InstanceType<This>;

  static textureNoiseWithSmoothnessSizeGrayscale<This extends abstract new (...args: any) => any>(this: This, smoothness: number, size: CGSize, grayscale: boolean): InstanceType<This>;

  static textureWithCGImage<This extends abstract new (...args: any) => any>(this: This, image: interop.PointerConvertible): InstanceType<This>;

  static textureWithImage<This extends abstract new (...args: any) => any>(this: This, image: UIImage): InstanceType<This>;

  static textureWithDataSize<This extends abstract new (...args: any) => any>(this: This, pixelData: NSData, size: CGSize): InstanceType<This>;

  static textureWithDataSizeFlipped<This extends abstract new (...args: any) => any>(this: This, pixelData: NSData, size: CGSize, flipped: boolean): InstanceType<This>;

  static textureWithDataSizeRowLengthAlignment<This extends abstract new (...args: any) => any>(this: This, pixelData: NSData, size: CGSize, rowLength: number, alignment: number): InstanceType<This>;

  textureByApplyingCIFilter(filter: CIFilter): this;

  textureByGeneratingNormalMap(): this;

  textureByGeneratingNormalMapWithSmoothnessContrast(smoothness: number, contrast: number): this;

  textureRect(): CGRect;

  size(): CGSize;

  filteringMode: interop.Enum<typeof SKTextureFilteringMode>;

  usesMipmaps: boolean;

  CGImage(): interop.Pointer;

  static preloadTexturesWithCompletionHandler(textures: NSArray<interop.Object> | Array<interop.Object>, completionHandler: () => void): void;

  preloadWithCompletionHandler(completionHandler: () => void): void;

  static textureWithNoiseMap<This extends abstract new (...args: any) => any>(this: This, noiseMap: GKNoiseMap): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKCameraNode extends SKNode {
  containsNode(node: SKNode): boolean;

  containedNodeSet(): NSSet;
}

declare class SKPhysicsJointLimit extends SKPhysicsJoint {
  maxLength: number;

  static jointWithBodyABodyBAnchorAAnchorB(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchorA: CGPoint, anchorB: CGPoint): SKPhysicsJointLimit;
}

declare class SKPhysicsJointSliding extends SKPhysicsJoint {
  static jointWithBodyABodyBAnchorAxis(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint, axis: CGVector): SKPhysicsJointSliding;

  shouldEnableLimits: boolean;

  lowerDistanceLimit: number;

  upperDistanceLimit: number;
}

declare class SKReachConstraints extends NSObject implements NSSecureCoding {
  lowerAngleLimit: number;

  upperAngleLimit: number;

  initWithLowerAngleLimitUpperAngleLimit(lowerAngleLimit: number, upperAngleLimit: number): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKConstraint extends NSObject implements NSSecureCoding, NSCopying {
  enabled: boolean;

  referenceNode: SKNode;

  static positionX<This extends abstract new (...args: any) => any>(this: This, range: SKRange): InstanceType<This>;

  static positionY<This extends abstract new (...args: any) => any>(this: This, range: SKRange): InstanceType<This>;

  static positionXY<This extends abstract new (...args: any) => any>(this: This, xRange: SKRange, yRange: SKRange): InstanceType<This>;

  static distanceToNode<This extends abstract new (...args: any) => any>(this: This, range: SKRange, node: SKNode): InstanceType<This>;

  static distanceToPoint<This extends abstract new (...args: any) => any>(this: This, range: SKRange, point: CGPoint): InstanceType<This>;

  static distanceToPointInNode<This extends abstract new (...args: any) => any>(this: This, range: SKRange, point: CGPoint, node: SKNode): InstanceType<This>;

  static zRotation<This extends abstract new (...args: any) => any>(this: This, zRange: SKRange): InstanceType<This>;

  static orientToNodeOffset<This extends abstract new (...args: any) => any>(this: This, node: SKNode, radians: SKRange): InstanceType<This>;

  static orientToPointOffset<This extends abstract new (...args: any) => any>(this: This, point: CGPoint, radians: SKRange): InstanceType<This>;

  static orientToPointInNodeOffset<This extends abstract new (...args: any) => any>(this: This, point: CGPoint, node: SKNode, radians: SKRange): InstanceType<This>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class SKRange extends NSObject implements NSSecureCoding, NSCopying {
  initWithLowerLimitUpperLimit(lower: number, upper: number): this;

  static rangeWithLowerLimitUpperLimit<This extends abstract new (...args: any) => any>(this: This, lower: number, upper: number): InstanceType<This>;

  static rangeWithLowerLimit<This extends abstract new (...args: any) => any>(this: This, lower: number): InstanceType<This>;

  static rangeWithUpperLimit<This extends abstract new (...args: any) => any>(this: This, upper: number): InstanceType<This>;

  static rangeWithConstantValue<This extends abstract new (...args: any) => any>(this: This, value: number): InstanceType<This>;

  static rangeWithValueVariance<This extends abstract new (...args: any) => any>(this: This, value: number, variance: number): InstanceType<This>;

  static rangeWithNoLimits<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  lowerLimit: number;

  upperLimit: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class SKMutableTexture extends SKTexture {
  initWithSize(size: CGSize): this;

  static mutableTextureWithSize<This extends abstract new (...args: any) => any>(this: This, size: CGSize): InstanceType<This>;

  initWithSizePixelFormat(size: CGSize, format: number): this;

  modifyPixelDataWithBlock(block: (p1: interop.PointerConvertible, p2: number) => void): void;
}

declare class SKTileGroup extends NSObject implements NSCopying, NSSecureCoding {
  static tileGroupWithTileDefinition<This extends abstract new (...args: any) => any>(this: This, tileDefinition: SKTileDefinition): InstanceType<This>;

  static tileGroupWithRules<This extends abstract new (...args: any) => any>(this: This, rules: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static emptyTileGroup<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  initWithTileDefinition(tileDefinition: SKTileDefinition): this;

  initWithRules(rules: NSArray<interop.Object> | Array<interop.Object>): this;

  get rules(): NSArray;
  set rules(value: NSArray<interop.Object> | Array<interop.Object>);

  name: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKTileSet extends NSObject implements NSCopying, NSSecureCoding {
  static tileSetWithTileGroups<This extends abstract new (...args: any) => any>(this: This, tileGroups: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static tileSetWithTileGroupsTileSetType<This extends abstract new (...args: any) => any>(this: This, tileGroups: NSArray<interop.Object> | Array<interop.Object>, tileSetType: interop.Enum<typeof SKTileSetType>): InstanceType<This>;

  initWithTileGroups(tileGroups: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithTileGroupsTileSetType(tileGroups: NSArray<interop.Object> | Array<interop.Object>, tileSetType: interop.Enum<typeof SKTileSetType>): this;

  static tileSetNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static tileSetFromURL<This extends abstract new (...args: any) => any>(this: This, url: NSURL): InstanceType<This>;

  get tileGroups(): NSArray;
  set tileGroups(value: NSArray<interop.Object> | Array<interop.Object>);

  name: string;

  type: interop.Enum<typeof SKTileSetType>;

  defaultTileGroup: SKTileGroup;

  defaultTileSize: CGSize;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKTileDefinition extends NSObject implements NSCopying, NSSecureCoding {
  static tileDefinitionWithTexture<This extends abstract new (...args: any) => any>(this: This, texture: SKTexture): InstanceType<This>;

  static tileDefinitionWithTextureSize<This extends abstract new (...args: any) => any>(this: This, texture: SKTexture, size: CGSize): InstanceType<This>;

  static tileDefinitionWithTextureNormalTextureSize<This extends abstract new (...args: any) => any>(this: This, texture: SKTexture, normalTexture: SKTexture, size: CGSize): InstanceType<This>;

  static tileDefinitionWithTexturesSizeTimePerFrame<This extends abstract new (...args: any) => any>(this: This, textures: NSArray<interop.Object> | Array<interop.Object>, size: CGSize, timePerFrame: number): InstanceType<This>;

  static tileDefinitionWithTexturesNormalTexturesSizeTimePerFrame<This extends abstract new (...args: any) => any>(this: This, textures: NSArray<interop.Object> | Array<interop.Object>, normalTextures: NSArray<interop.Object> | Array<interop.Object>, size: CGSize, timePerFrame: number): InstanceType<This>;

  initWithTexture(texture: SKTexture): this;

  initWithTextureSize(texture: SKTexture, size: CGSize): this;

  initWithTextureNormalTextureSize(texture: SKTexture, normalTexture: SKTexture, size: CGSize): this;

  initWithTexturesSizeTimePerFrame(textures: NSArray<interop.Object> | Array<interop.Object>, size: CGSize, timePerFrame: number): this;

  initWithTexturesNormalTexturesSizeTimePerFrame(textures: NSArray<interop.Object> | Array<interop.Object>, normalTextures: NSArray<interop.Object> | Array<interop.Object>, size: CGSize, timePerFrame: number): this;

  get textures(): NSArray;
  set textures(value: NSArray<interop.Object> | Array<interop.Object>);

  get normalTextures(): NSArray;
  set normalTextures(value: NSArray<interop.Object> | Array<interop.Object>);

  userData: NSMutableDictionary;

  name: string;

  size: CGSize;

  timePerFrame: number;

  placementWeight: number;

  rotation: interop.Enum<typeof SKTileDefinitionRotation>;

  flipVertically: boolean;

  flipHorizontally: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKAttribute extends NSObject implements NSSecureCoding {
  static attributeWithNameType<This extends abstract new (...args: any) => any>(this: This, name: string, type: interop.Enum<typeof SKAttributeType>): InstanceType<This>;

  initWithNameType(name: string, type: interop.Enum<typeof SKAttributeType>): this;

  readonly name: string;

  readonly type: interop.Enum<typeof SKAttributeType>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKView extends UIView {
  isPaused: boolean;

  showsFPS: boolean;

  showsDrawCount: boolean;

  showsNodeCount: boolean;

  showsQuadCount: boolean;

  showsPhysics: boolean;

  showsFields: boolean;

  isAsynchronous: boolean;

  allowsTransparency: boolean;

  ignoresSiblingOrder: boolean;

  shouldCullNonVisibleNodes: boolean;

  preferredFramesPerSecond: number;

  disableDepthStencilBuffer: boolean;

  delegate: NSObject;

  frameInterval: number;

  preferredFrameRate: number;

  presentScene(scene: SKScene | null): void;

  presentSceneTransition(scene: SKScene, transition: SKTransition): void;

  readonly scene: SKScene;

  textureFromNode(node: SKNode): SKTexture;

  textureFromNodeCrop(node: SKNode, crop: CGRect): SKTexture;

  convertPointToScene(point: CGPoint, scene: SKScene): CGPoint;

  convertPointFromScene(point: CGPoint, scene: SKScene): CGPoint;
}

declare class SKCropNode extends SKNode {
  maskNode: SKNode;
}

declare class SKLabelNode extends SKNode {
  static labelNodeWithText<This extends abstract new (...args: any) => any>(this: This, text: string | null): InstanceType<This>;

  static labelNodeWithAttributedText<This extends abstract new (...args: any) => any>(this: This, attributedText: NSAttributedString | null): InstanceType<This>;

  static labelNodeWithFontNamed<This extends abstract new (...args: any) => any>(this: This, fontName: string | null): InstanceType<This>;

  initWithFontNamed(fontName: string | null): this;

  verticalAlignmentMode: interop.Enum<typeof SKLabelVerticalAlignmentMode>;

  horizontalAlignmentMode: interop.Enum<typeof SKLabelHorizontalAlignmentMode>;

  numberOfLines: number;

  lineBreakMode: interop.Enum<typeof NSLineBreakMode>;

  preferredMaxLayoutWidth: number;

  fontName: string;

  text: string;

  attributedText: NSAttributedString;

  fontSize: number;

  fontColor: UIColor;

  colorBlendFactor: number;

  color: UIColor;

  blendMode: interop.Enum<typeof SKBlendMode>;
}

// @ts-ignore ClassDecl.tsIgnore
declare class SKWarpGeometryGrid extends SKWarpGeometry implements NSSecureCoding {
  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  static grid<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static gridWithColumnsRows<This extends abstract new (...args: any) => any>(this: This, cols: number, rows: number): InstanceType<This>;

  static gridWithColumnsRowsSourcePositionsDestPositions<This extends abstract new (...args: any) => any>(this: This, cols: number, rows: number, sourcePositions: interop.PointerConvertible, destPositions: interop.PointerConvertible): InstanceType<This>;

  initWithColumnsRowsSourcePositionsDestPositions(cols: number, rows: number, sourcePositions: interop.PointerConvertible, destPositions: interop.PointerConvertible): this;

  readonly numberOfColumns: number;

  readonly numberOfRows: number;

  readonly vertexCount: number;

  sourcePositionAtIndex(index: number): unknown /* ext vector */;

  destPositionAtIndex(index: number): unknown /* ext vector */;

  gridByReplacingSourcePositions(sourcePositions: interop.PointerConvertible): this;

  gridByReplacingDestPositions(destPositions: interop.PointerConvertible): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class SKWarpGeometry extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKShader extends NSObject implements NSCopying, NSSecureCoding {
  initWithSource(source: string): this;

  initWithSourceUniforms(source: string, uniforms: NSArray<interop.Object> | Array<interop.Object>): this;

  static shader<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static shaderWithSource<This extends abstract new (...args: any) => any>(this: This, source: string): InstanceType<This>;

  static shaderWithSourceUniforms<This extends abstract new (...args: any) => any>(this: This, source: string, uniforms: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static shaderWithFileNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  source: string;

  get uniforms(): NSArray;
  set uniforms(value: NSArray<interop.Object> | Array<interop.Object>);

  addUniform(uniform: SKUniform): void;

  uniformNamed(name: string): SKUniform;

  removeUniformNamed(name: string): void;

  get attributes(): NSArray;
  set attributes(value: NSArray<interop.Object> | Array<interop.Object>);

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKNode extends UIResponder implements NSCopying, NSSecureCoding, UIFocusItem, UIFocusItemContainer, UICoordinateSpace {
  init(): this;

  initWithCoder(aDecoder: NSCoder): this;

  static node<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static nodeWithFileNamed<This extends abstract new (...args: any) => any>(this: This, filename: string): InstanceType<This>;

  static nodeWithFileNamedSecurelyWithClassesAndError<This extends abstract new (...args: any) => any>(this: This, filename: string, classes: NSSet, error: interop.PointerConvertible): InstanceType<This>;

  readonly frame: CGRect;

  calculateAccumulatedFrame(): CGRect;

  position: CGPoint;

  zPosition: number;

  zRotation: number;

  xScale: number;

  yScale: number;

  speed: number;

  alpha: number;

  isPaused: boolean;

  isHidden: boolean;

  isUserInteractionEnabled: boolean;

  focusBehavior: interop.Enum<typeof SKNodeFocusBehavior>;

  readonly parent: SKNode;

  readonly children: NSArray;

  name: string;

  readonly scene: SKScene;

  physicsBody: SKPhysicsBody;

  userData: NSMutableDictionary;

  reachConstraints: SKReachConstraints;

  get constraints(): NSArray;
  set constraints(value: NSArray<interop.Object> | Array<interop.Object>);

  get attributeValues(): NSDictionary;
  set attributeValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  valueForAttributeNamed(key: string): SKAttributeValue;

  setValueForAttributeNamed(value: SKAttributeValue, key: string): void;

  setScale(scale: number): void;

  addChild(node: SKNode): void;

  insertChildAtIndex(node: SKNode, index: number): void;

  removeChildrenInArray(nodes: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAllChildren(): void;

  removeFromParent(): void;

  moveToParent(parent: SKNode): void;

  childNodeWithName(name: string): SKNode;

  enumerateChildNodesWithNameUsingBlock(name: string, block: (p1: SKNode, p2: interop.PointerConvertible) => void): void;

  objectForKeyedSubscript(name: string): NSArray;

  inParentHierarchy(parent: SKNode): boolean;

  runAction(action: SKAction): void;

  runActionCompletion(action: SKAction, block: () => void): void;

  runActionWithKey(action: SKAction, key: string): void;

  hasActions(): boolean;

  actionForKey(key: string): SKAction;

  removeActionForKey(key: string): void;

  removeAllActions(): void;

  containsPoint(p: CGPoint): boolean;

  nodeAtPoint(p: CGPoint): SKNode;

  nodesAtPoint(p: CGPoint): NSArray;

  convertPointFromNode(point: CGPoint, node: SKNode): CGPoint;

  convertPointToNode(point: CGPoint, node: SKNode): CGPoint;

  intersectsNode(node: SKNode): boolean;

  isEqualToNode(node: SKNode): boolean;

  static obstaclesFromSpriteTexturesAccuracy(sprites: NSArray<interop.Object> | Array<interop.Object>, accuracy: number): NSArray;

  static obstaclesFromNodeBounds(nodes: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static obstaclesFromNodePhysicsBodies(nodes: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  entity: GKEntity;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  readonly canBecomeFocused: boolean;

  readonly focusEffect: UIFocusEffect;

  readonly focusGroupPriority: number;

  readonly focusItemDeferralMode: interop.Enum<typeof UIFocusItemDeferralMode>;

  readonly isTransparentFocusItem: boolean;

  didHintFocusMovement(hint: UIFocusMovementHint): void;

  readonly preferredFocusEnvironments: NSArray;

  readonly parentFocusEnvironment: UIFocusEnvironment;

  readonly focusItemContainer: UIFocusItemContainer;

  setNeedsFocusUpdate(): void;

  updateFocusIfNeeded(): void;

  shouldUpdateFocusInContext(context: UIFocusUpdateContext): boolean;

  didUpdateFocusInContextWithAnimationCoordinator(context: UIFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

  readonly preferredFocusedView: UIView;

  readonly focusGroupIdentifier: string;

  isEqual(object: interop.Object): boolean;

  readonly hash: number;

  readonly superclass: interop.Object;

  class(): interop.Object;

  self(): this;

  performSelector(aSelector: string): interop.Object;

  performSelectorWithObject(aSelector: string, object: interop.Object): interop.Object;

  performSelectorWithObjectWithObject(aSelector: string, object1: interop.Object, object2: interop.Object): interop.Object;

  readonly isProxy: boolean;

  isKindOfClass(aClass: interop.Object): boolean;

  isMemberOfClass(aClass: interop.Object): boolean;

  conformsToProtocol(aProtocol: interop.PointerConvertible): boolean;

  respondsToSelector(aSelector: string): boolean;

  retain(): this;

  release(): void;

  autorelease(): this;

  retainCount(): number;

  readonly zone: interop.Pointer;

  readonly description: string;

  readonly debugDescription: string;

  readonly coordinateSpace: UICoordinateSpace;

  focusItemsInRect(rect: CGRect): NSArray;

  convertPointToCoordinateSpace(point: CGPoint, coordinateSpace: UICoordinateSpace): CGPoint;

  convertPointFromCoordinateSpace(point: CGPoint, coordinateSpace: UICoordinateSpace): CGPoint;

  convertRectToCoordinateSpace(rect: CGRect, coordinateSpace: UICoordinateSpace): CGRect;

  convertRectFromCoordinateSpace(rect: CGRect, coordinateSpace: UICoordinateSpace): CGRect;

  readonly bounds: CGRect;
}

declare class SKAction extends NSObject implements NSCopying, NSSecureCoding {
  duration: number;

  timingMode: interop.Enum<typeof SKActionTimingMode>;

  timingFunction: (p1: number) => number;

  speed: number;

  reversedAction(): SKAction;

  static moveByDuration(delta: CGVector, duration: number): SKAction;

  static moveByXYDuration(deltaX: number, deltaY: number, duration: number): SKAction;

  static moveToDuration(location: CGPoint, duration: number): SKAction;

  static moveToXDuration(x: number, duration: number): SKAction;

  static moveToYDuration(y: number, duration: number): SKAction;

  static rotateByAngleDuration(radians: number, duration: number): SKAction;

  static rotateToAngleDuration(radians: number, duration: number): SKAction;

  static rotateToAngleDurationShortestUnitArc(radians: number, duration: number, shortestUnitArc: boolean): SKAction;

  static resizeByWidthHeightDuration(width: number, height: number, duration: number): SKAction;

  static resizeToWidthHeightDuration(width: number, height: number, duration: number): SKAction;

  static resizeToWidthDuration(width: number, duration: number): SKAction;

  static resizeToHeightDuration(height: number, duration: number): SKAction;

  static scaleByDuration(scale: number, duration: number): SKAction;

  static scaleXByYDuration(xScale: number, yScale: number, duration: number): SKAction;

  static scaleToDuration(scale: number, duration: number): SKAction;

  static scaleXToYDuration(xScale: number, yScale: number, duration: number): SKAction;

  static scaleXToDuration(scale: number, duration: number): SKAction;

  static scaleYToDuration(scale: number, duration: number): SKAction;

  static scaleToSizeDuration(size: CGSize, duration: number): SKAction;

  static sequence(actions: NSArray<interop.Object> | Array<interop.Object>): SKAction;

  static group(actions: NSArray<interop.Object> | Array<interop.Object>): SKAction;

  static repeatActionCount(action: SKAction, count: number): SKAction;

  static repeatActionForever(action: SKAction): SKAction;

  static fadeInWithDuration(duration: number): SKAction;

  static fadeOutWithDuration(duration: number): SKAction;

  static fadeAlphaByDuration(factor: number, duration: number): SKAction;

  static fadeAlphaToDuration(alpha: number, duration: number): SKAction;

  static hide(): SKAction;

  static unhide(): SKAction;

  static setTexture(texture: SKTexture): SKAction;

  static setNormalTexture(texture: SKTexture): SKAction;

  static setTextureResize(texture: SKTexture, resize: boolean): SKAction;

  static setNormalTextureResize(texture: SKTexture, resize: boolean): SKAction;

  static animateWithTexturesTimePerFrame(textures: NSArray<interop.Object> | Array<interop.Object>, sec: number): SKAction;

  static animateWithNormalTexturesTimePerFrame(textures: NSArray<interop.Object> | Array<interop.Object>, sec: number): SKAction;

  static animateWithTexturesTimePerFrameResizeRestore(textures: NSArray<interop.Object> | Array<interop.Object>, sec: number, resize: boolean, restore: boolean): SKAction;

  static animateWithNormalTexturesTimePerFrameResizeRestore(textures: NSArray<interop.Object> | Array<interop.Object>, sec: number, resize: boolean, restore: boolean): SKAction;

  static playSoundFileNamedWaitForCompletion(soundFile: string, wait: boolean): SKAction;

  static colorizeWithColorColorBlendFactorDuration(color: UIColor, colorBlendFactor: number, duration: number): SKAction;

  static colorizeWithColorBlendFactorDuration(colorBlendFactor: number, sec: number): SKAction;

  static falloffToDuration(falloff: number, duration: number): SKAction;

  static falloffByDuration(falloff: number, duration: number): SKAction;

  static followPathDuration(path: interop.PointerConvertible, duration: number): SKAction;

  static followPathAsOffsetOrientToPathDuration(path: interop.PointerConvertible, offset: boolean, orient: boolean, duration: number): SKAction;

  static followPathSpeed(path: interop.PointerConvertible, speed: number): SKAction;

  static followPathAsOffsetOrientToPathSpeed(path: interop.PointerConvertible, offset: boolean, orient: boolean, speed: number): SKAction;

  static speedByDuration(speed: number, duration: number): SKAction;

  static speedToDuration(speed: number, duration: number): SKAction;

  static reachToRootNodeDuration(position: CGPoint, root: SKNode, duration: number): SKAction;

  static reachToRootNodeVelocity(position: CGPoint, root: SKNode, velocity: number): SKAction;

  static reachToNodeRootNodeDuration(node: SKNode, root: SKNode, sec: number): SKAction;

  static reachToNodeRootNodeVelocity(node: SKNode, root: SKNode, velocity: number): SKAction;

  static strengthToDuration(strength: number, duration: number): SKAction;

  static strengthByDuration(strength: number, duration: number): SKAction;

  static waitForDuration(duration: number): SKAction;

  static waitForDurationWithRange(duration: number, durationRange: number): SKAction;

  static removeFromParent(): SKAction;

  static performSelectorOnTarget(selector: string, target: interop.Object): SKAction;

  static runBlock(block: () => void): SKAction;

  static runBlockQueue(block: () => void, queue: NSObject): SKAction;

  static runActionOnChildWithName(action: SKAction, name: string): SKAction;

  static customActionWithDurationActionBlock(duration: number, block: (p1: SKNode, p2: number) => void): SKAction;

  static actionNamed(name: string): SKAction;

  static actionNamedDuration(name: string, duration: number): SKAction;

  static actionNamedFromURL(name: string, url: NSURL): SKAction;

  static actionNamedFromURLDuration(name: string, url: NSURL, duration: number): SKAction;

  static changeChargeToDuration(v: number, duration: number): SKAction;

  static changeChargeByDuration(v: number, duration: number): SKAction;

  static changeMassToDuration(v: number, duration: number): SKAction;

  static changeMassByDuration(v: number, duration: number): SKAction;

  static applyForceDuration(force: CGVector, duration: number): SKAction;

  static applyForceAtPointDuration(force: CGVector, point: CGPoint, duration: number): SKAction;

  static applyTorqueDuration(torque: number, duration: number): SKAction;

  static applyImpulseDuration(impulse: CGVector, duration: number): SKAction;

  static applyImpulseAtPointDuration(impulse: CGVector, point: CGPoint, duration: number): SKAction;

  static applyAngularImpulseDuration(impulse: number, duration: number): SKAction;

  static play(): SKAction;

  static pause(): SKAction;

  static stop(): SKAction;

  static changePlaybackRateToDuration(v: number, duration: number): SKAction;

  static changePlaybackRateByDuration(v: number, duration: number): SKAction;

  static changeVolumeToDuration(v: number, duration: number): SKAction;

  static changeVolumeByDuration(v: number, duration: number): SKAction;

  static warpToDuration(warp: SKWarpGeometry, duration: number): SKAction;

  static animateWithWarpsTimes(warps: NSArray<interop.Object> | Array<interop.Object>, times: NSArray<interop.Object> | Array<interop.Object>): SKAction;

  static animateWithWarpsTimesRestore(warps: NSArray<interop.Object> | Array<interop.Object>, times: NSArray<interop.Object> | Array<interop.Object>, restore: boolean): SKAction;

  static stereoPanToDuration(v: number, duration: number): SKAction;

  static stereoPanByDuration(v: number, duration: number): SKAction;

  static changeReverbToDuration(v: number, duration: number): SKAction;

  static changeReverbByDuration(v: number, duration: number): SKAction;

  static changeObstructionToDuration(v: number, duration: number): SKAction;

  static changeObstructionByDuration(v: number, duration: number): SKAction;

  static changeOcclusionToDuration(v: number, duration: number): SKAction;

  static changeOcclusionByDuration(v: number, duration: number): SKAction;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKRegion extends NSObject implements NSCopying, NSSecureCoding {
  readonly path: interop.Pointer;

  static infiniteRegion<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  initWithRadius(radius: number): this;

  initWithSize(size: CGSize): this;

  initWithPath(path: interop.PointerConvertible): this;

  inverseRegion(): this;

  regionByUnionWithRegion(region: SKRegion): this;

  regionByDifferenceFromRegion(region: SKRegion): this;

  regionByIntersectionWithRegion(region: SKRegion): this;

  containsPoint(point: CGPoint): boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKAttributeValue extends NSObject implements NSSecureCoding {
  static valueWithFloat<This extends abstract new (...args: any) => any>(this: This, value: number): InstanceType<This>;

  static valueWithVectorFloat2<This extends abstract new (...args: any) => any>(this: This, value: unknown /* ext vector */): InstanceType<This>;

  static valueWithVectorFloat3<This extends abstract new (...args: any) => any>(this: This, value: unknown /* ext vector */): InstanceType<This>;

  static valueWithVectorFloat4<This extends abstract new (...args: any) => any>(this: This, value: unknown /* ext vector */): InstanceType<This>;

  init(): this;

  floatValue: number;

  vectorFloat2Value: unknown /* ext vector */;

  vectorFloat3Value: unknown /* ext vector */;

  vectorFloat4Value: unknown /* ext vector */;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKAudioNode extends SKNode implements NSSecureCoding {
  initWithAVAudioNode(node: AVAudioNode | null): this;

  initWithCoder(aDecoder: NSCoder): this;

  initWithFileNamed(name: string): this;

  initWithURL(url: NSURL): this;

  avAudioNode: AVAudioNode;

  autoplayLooped: boolean;

  isPositional: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class SKEffectNode extends SKNode implements SKWarpable {
  filter: CIFilter;

  shouldCenterFilter: boolean;

  shouldEnableEffects: boolean;

  shouldRasterize: boolean;

  blendMode: interop.Enum<typeof SKBlendMode>;

  shader: SKShader;

  get attributeValues(): NSDictionary;
  set attributeValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  valueForAttributeNamed(key: string): SKAttributeValue;

  setValueForAttributeNamed(value: SKAttributeValue, key: string): void;

  warpGeometry: SKWarpGeometry;

  subdivisionLevels: number;

  isEqual(object: interop.Object): boolean;

  readonly hash: number;

  readonly superclass: interop.Object;

  class(): interop.Object;

  self(): this;

  performSelector(aSelector: string): interop.Object;

  performSelectorWithObject(aSelector: string, object: interop.Object): interop.Object;

  performSelectorWithObjectWithObject(aSelector: string, object1: interop.Object, object2: interop.Object): interop.Object;

  readonly isProxy: boolean;

  isKindOfClass(aClass: interop.Object): boolean;

  isMemberOfClass(aClass: interop.Object): boolean;

  conformsToProtocol(aProtocol: interop.PointerConvertible): boolean;

  respondsToSelector(aSelector: string): boolean;

  retain(): this;

  release(): void;

  autorelease(): this;

  retainCount(): number;

  readonly zone: interop.Pointer;

  readonly description: string;

  readonly debugDescription: string;
}

declare class SKReferenceNode extends SKNode {
  initWithURL(url: NSURL | null): this;

  initWithFileNamed(fileName: string | null): this;

  initWithCoder(aDecoder: NSCoder): this;

  static referenceNodeWithFileNamed<This extends abstract new (...args: any) => any>(this: This, fileName: string): InstanceType<This>;

  static referenceNodeWithURL<This extends abstract new (...args: any) => any>(this: This, referenceURL: NSURL): InstanceType<This>;

  didLoadReferenceNode(node: SKNode | null): void;

  resolveReferenceNode(): void;
}

declare class SKSpriteNode extends SKNode implements SKWarpable {
  static spriteNodeWithTextureSize<This extends abstract new (...args: any) => any>(this: This, texture: SKTexture | null, size: CGSize): InstanceType<This>;

  static spriteNodeWithTexture<This extends abstract new (...args: any) => any>(this: This, texture: SKTexture | null): InstanceType<This>;

  static spriteNodeWithTextureNormalMap<This extends abstract new (...args: any) => any>(this: This, texture: SKTexture | null, normalMap: SKTexture | null): InstanceType<This>;

  static spriteNodeWithImageNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static spriteNodeWithImageNamedNormalMapped<This extends abstract new (...args: any) => any>(this: This, name: string, generateNormalMap: boolean): InstanceType<This>;

  static spriteNodeWithColorSize<This extends abstract new (...args: any) => any>(this: This, color: UIColor, size: CGSize): InstanceType<This>;

  initWithTextureColorSize(texture: SKTexture | null, color: UIColor, size: CGSize): this;

  initWithTexture(texture: SKTexture | null): this;

  initWithImageNamed(name: string): this;

  initWithColorSize(color: UIColor, size: CGSize): this;

  initWithCoder(aDecoder: NSCoder): this;

  texture: SKTexture;

  normalTexture: SKTexture;

  lightingBitMask: number;

  shadowCastBitMask: number;

  shadowedBitMask: number;

  centerRect: CGRect;

  colorBlendFactor: number;

  color: UIColor;

  blendMode: interop.Enum<typeof SKBlendMode>;

  anchorPoint: CGPoint;

  size: CGSize;

  scaleToSize(size: CGSize): void;

  shader: SKShader;

  get attributeValues(): NSDictionary;
  set attributeValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  valueForAttributeNamed(key: string): SKAttributeValue;

  setValueForAttributeNamed(value: SKAttributeValue, key: string): void;

  warpGeometry: SKWarpGeometry;

  subdivisionLevels: number;

  isEqual(object: interop.Object): boolean;

  readonly hash: number;

  readonly superclass: interop.Object;

  class(): interop.Object;

  self(): this;

  performSelector(aSelector: string): interop.Object;

  performSelectorWithObject(aSelector: string, object: interop.Object): interop.Object;

  performSelectorWithObjectWithObject(aSelector: string, object1: interop.Object, object2: interop.Object): interop.Object;

  readonly isProxy: boolean;

  isKindOfClass(aClass: interop.Object): boolean;

  isMemberOfClass(aClass: interop.Object): boolean;

  conformsToProtocol(aProtocol: interop.PointerConvertible): boolean;

  respondsToSelector(aSelector: string): boolean;

  retain(): this;

  release(): void;

  autorelease(): this;

  retainCount(): number;

  readonly zone: interop.Pointer;

  readonly description: string;

  readonly debugDescription: string;
}

declare class SKKeyframeSequence extends NSObject implements NSSecureCoding, NSCopying {
  initWithKeyframeValuesTimes(values: NSArray<interop.Object> | Array<interop.Object>, times: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithCapacity(numItems: number): this;

  initWithCoder(aDecoder: NSCoder): this;

  count(): number;

  addKeyframeValueTime(value: interop.Object, time: number): void;

  removeLastKeyframe(): void;

  removeKeyframeAtIndex(index: number): void;

  setKeyframeValueForIndex(value: interop.Object, index: number): void;

  setKeyframeTimeForIndex(time: number, index: number): void;

  setKeyframeValueTimeForIndex(value: interop.Object, time: number, index: number): void;

  getKeyframeValueForIndex(index: number): interop.Object;

  getKeyframeTimeForIndex(index: number): number;

  sampleAtTime(time: number): interop.Object;

  interpolationMode: interop.Enum<typeof SKInterpolationMode>;

  repeatMode: interop.Enum<typeof SKRepeatMode>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class SKTileMapNode extends SKNode implements NSCopying, NSSecureCoding {
  static tileMapNodeWithTileSetColumnsRowsTileSize<This extends abstract new (...args: any) => any>(this: This, tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize): InstanceType<This>;

  static tileMapNodeWithTileSetColumnsRowsTileSizeFillWithTileGroup<This extends abstract new (...args: any) => any>(this: This, tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, tileGroup: SKTileGroup): InstanceType<This>;

  static tileMapNodeWithTileSetColumnsRowsTileSizeTileGroupLayout<This extends abstract new (...args: any) => any>(this: This, tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, tileGroupLayout: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  initWithTileSetColumnsRowsTileSize(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize): this;

  initWithTileSetColumnsRowsTileSizeFillWithTileGroup(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, tileGroup: SKTileGroup): this;

  initWithTileSetColumnsRowsTileSizeTileGroupLayout(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, tileGroupLayout: NSArray<interop.Object> | Array<interop.Object>): this;

  numberOfColumns: number;

  numberOfRows: number;

  tileSize: CGSize;

  readonly mapSize: CGSize;

  tileSet: SKTileSet;

  colorBlendFactor: number;

  color: UIColor;

  blendMode: interop.Enum<typeof SKBlendMode>;

  anchorPoint: CGPoint;

  shader: SKShader;

  get attributeValues(): NSDictionary;
  set attributeValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  valueForAttributeNamed(key: string): SKAttributeValue;

  setValueForAttributeNamed(value: SKAttributeValue, key: string): void;

  lightingBitMask: number;

  enableAutomapping: boolean;

  fillWithTileGroup(tileGroup: SKTileGroup | null): void;

  tileDefinitionAtColumnRow(column: number, row: number): SKTileDefinition;

  tileGroupAtColumnRow(column: number, row: number): SKTileGroup;

  setTileGroupForColumnRow(tileGroup: SKTileGroup | null, column: number, row: number): void;

  setTileGroupAndTileDefinitionForColumnRow(tileGroup: SKTileGroup, tileDefinition: SKTileDefinition, column: number, row: number): void;

  tileColumnIndexFromPosition(position: CGPoint): number;

  tileRowIndexFromPosition(position: CGPoint): number;

  centerOfTileAtColumnRow(column: number, row: number): CGPoint;

  static tileMapNodesWithTileSetColumnsRowsTileSizeFromNoiseMapTileTypeNoiseMapThresholds(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, noiseMap: GKNoiseMap, thresholds: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(coder: NSCoder): this;
}

declare class SKPhysicsJointFixed extends SKPhysicsJoint {
  static jointWithBodyABodyBAnchor(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint): SKPhysicsJointFixed;
}

declare class SKPhysicsJoint extends NSObject implements NSSecureCoding {
  bodyA: SKPhysicsBody;

  bodyB: SKPhysicsBody;

  readonly reactionForce: CGVector;

  readonly reactionTorque: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKTileGroupRule extends NSObject implements NSCopying, NSSecureCoding {
  static tileGroupRuleWithAdjacencyTileDefinitions<This extends abstract new (...args: any) => any>(this: This, adjacency: interop.Enum<typeof SKTileAdjacencyMask>, tileDefinitions: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  initWithAdjacencyTileDefinitions(adjacency: interop.Enum<typeof SKTileAdjacencyMask>, tileDefinitions: NSArray<interop.Object> | Array<interop.Object>): this;

  adjacency: interop.Enum<typeof SKTileAdjacencyMask>;

  get tileDefinitions(): NSArray;
  set tileDefinitions(value: NSArray<interop.Object> | Array<interop.Object>);

  name: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKRenderer extends NSObject {
  static rendererWithDevice(device: MTLDevice): SKRenderer;

  renderWithViewportCommandBufferRenderPassDescriptor(viewport: CGRect, commandBuffer: MTLCommandBuffer, renderPassDescriptor: MTLRenderPassDescriptor): void;

  renderWithViewportRenderCommandEncoderRenderPassDescriptorCommandQueue(viewport: CGRect, renderCommandEncoder: MTLRenderCommandEncoder, renderPassDescriptor: MTLRenderPassDescriptor, commandQueue: MTLCommandQueue): void;

  updateAtTime(currentTime: number): void;

  scene: SKScene;

  ignoresSiblingOrder: boolean;

  shouldCullNonVisibleNodes: boolean;

  showsDrawCount: boolean;

  showsNodeCount: boolean;

  showsQuadCount: boolean;

  showsPhysics: boolean;

  showsFields: boolean;
}

declare class SKPhysicsBody extends NSObject implements NSCopying, NSSecureCoding {
  static bodyWithCircleOfRadius(r: number): SKPhysicsBody;

  static bodyWithCircleOfRadiusCenter(r: number, center: CGPoint): SKPhysicsBody;

  static bodyWithRectangleOfSize(s: CGSize): SKPhysicsBody;

  static bodyWithRectangleOfSizeCenter(s: CGSize, center: CGPoint): SKPhysicsBody;

  static bodyWithPolygonFromPath(path: interop.PointerConvertible): SKPhysicsBody;

  static bodyWithEdgeFromPointToPoint(p1: CGPoint, p2: CGPoint): SKPhysicsBody;

  static bodyWithEdgeChainFromPath(path: interop.PointerConvertible): SKPhysicsBody;

  static bodyWithEdgeLoopFromPath(path: interop.PointerConvertible): SKPhysicsBody;

  static bodyWithEdgeLoopFromRect(rect: CGRect): SKPhysicsBody;

  static bodyWithTextureSize(texture: SKTexture, size: CGSize): SKPhysicsBody;

  static bodyWithTextureAlphaThresholdSize(texture: SKTexture, alphaThreshold: number, size: CGSize): SKPhysicsBody;

  static bodyWithBodies(bodies: NSArray<interop.Object> | Array<interop.Object>): SKPhysicsBody;

  isDynamic: boolean;

  usesPreciseCollisionDetection: boolean;

  allowsRotation: boolean;

  pinned: boolean;

  isResting: boolean;

  friction: number;

  charge: number;

  restitution: number;

  linearDamping: number;

  angularDamping: number;

  density: number;

  mass: number;

  readonly area: number;

  affectedByGravity: boolean;

  fieldBitMask: number;

  categoryBitMask: number;

  collisionBitMask: number;

  contactTestBitMask: number;

  readonly joints: NSArray;

  readonly node: SKNode;

  velocity: CGVector;

  angularVelocity: number;

  applyForce(force: CGVector): void;

  applyForceAtPoint(force: CGVector, point: CGPoint): void;

  applyTorque(torque: number): void;

  applyImpulse(impulse: CGVector): void;

  applyImpulseAtPoint(impulse: CGVector, point: CGPoint): void;

  applyAngularImpulse(impulse: number): void;

  allContactedBodies(): NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKScene extends SKEffectNode {
  initWithSize(size: CGSize): this;

  static sceneWithSize<This extends abstract new (...args: any) => any>(this: This, size: CGSize): InstanceType<This>;

  sceneDidLoad(): void;

  size: CGSize;

  scaleMode: interop.Enum<typeof SKSceneScaleMode>;

  camera: SKCameraNode;

  listener: SKNode;

  readonly audioEngine: AVAudioEngine;

  backgroundColor: UIColor;

  delegate: SKSceneDelegate;

  anchorPoint: CGPoint;

  readonly physicsWorld: SKPhysicsWorld;

  readonly view: SKView;

  convertPointFromView(point: CGPoint): CGPoint;

  convertPointToView(point: CGPoint): CGPoint;

  update(currentTime: number): void;

  didEvaluateActions(): void;

  didSimulatePhysics(): void;

  didApplyConstraints(): void;

  didFinishUpdate(): void;

  didMoveToView(view: SKView): void;

  willMoveFromView(view: SKView): void;

  didChangeSize(oldSize: CGSize): void;
}

declare class SKPhysicsJointPin extends SKPhysicsJoint {
  static jointWithBodyABodyBAnchor(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint): SKPhysicsJointPin;

  shouldEnableLimits: boolean;

  lowerAngleLimit: number;

  upperAngleLimit: number;

  frictionTorque: number;

  rotationSpeed: number;
}

declare class SKVideoNode extends SKNode {
  static videoNodeWithAVPlayer(player: AVPlayer): SKVideoNode;

  static videoNodeWithVideoFileNamed(videoFile: string): SKVideoNode;

  static videoNodeWithFileNamed(videoFile: string): SKVideoNode;

  static videoNodeWithVideoURL(videoURL: NSURL): SKVideoNode;

  static videoNodeWithURL(videoURL: NSURL): SKVideoNode;

  initWithAVPlayer(player: AVPlayer): this;

  initWithVideoFileNamed(videoFile: string): this;

  initWithFileNamed(videoFile: string): this;

  initWithVideoURL(url: NSURL): this;

  initWithURL(url: NSURL): this;

  initWithCoder(aDecoder: NSCoder): this;

  play(): void;

  pause(): void;

  size: CGSize;

  anchorPoint: CGPoint;
}

declare class SKLightNode extends SKNode {
  isEnabled: boolean;

  lightColor: UIColor;

  ambientColor: UIColor;

  shadowColor: UIColor;

  falloff: number;

  categoryBitMask: number;
}

declare class SK3DNode extends SKNode {
  initWithViewportSize(viewportSize: CGSize): this;

  initWithCoder(aDecoder: NSCoder): this;

  static nodeWithViewportSize<This extends abstract new (...args: any) => any>(this: This, viewportSize: CGSize): InstanceType<This>;

  viewportSize: CGSize;

  scnScene: SCNScene;

  sceneTime: number;

  hitTestOptions(point: CGPoint, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): NSArray;

  projectPoint(point: unknown /* ext vector */): unknown /* ext vector */;

  unprojectPoint(point: unknown /* ext vector */): unknown /* ext vector */;

  isPlaying: boolean;

  loops: boolean;

  pointOfView: SCNNode;

  autoenablesDefaultLighting: boolean;
}

declare class SKPhysicsJointSpring extends SKPhysicsJoint {
  static jointWithBodyABodyBAnchorAAnchorB(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchorA: CGPoint, anchorB: CGPoint): SKPhysicsJointSpring;

  damping: number;

  frequency: number;
}

declare class SKEmitterNode extends SKNode {
  advanceSimulationTime(sec: number): void;

  resetSimulation(): void;

  particleTexture: SKTexture;

  particleBlendMode: interop.Enum<typeof SKBlendMode>;

  particleColor: UIColor;

  particleColorRedRange: number;

  particleColorGreenRange: number;

  particleColorBlueRange: number;

  particleColorAlphaRange: number;

  particleColorRedSpeed: number;

  particleColorGreenSpeed: number;

  particleColorBlueSpeed: number;

  particleColorAlphaSpeed: number;

  particleColorSequence: SKKeyframeSequence;

  particleColorBlendFactor: number;

  particleColorBlendFactorRange: number;

  particleColorBlendFactorSpeed: number;

  particleColorBlendFactorSequence: SKKeyframeSequence;

  particlePosition: CGPoint;

  particlePositionRange: CGVector;

  particleSpeed: number;

  particleSpeedRange: number;

  emissionAngle: number;

  emissionAngleRange: number;

  xAcceleration: number;

  yAcceleration: number;

  particleBirthRate: number;

  numParticlesToEmit: number;

  particleLifetime: number;

  particleLifetimeRange: number;

  particleRotation: number;

  particleRotationRange: number;

  particleRotationSpeed: number;

  particleSize: CGSize;

  particleScale: number;

  particleScaleRange: number;

  particleScaleSpeed: number;

  particleScaleSequence: SKKeyframeSequence;

  particleAlpha: number;

  particleAlphaRange: number;

  particleAlphaSpeed: number;

  particleAlphaSequence: SKKeyframeSequence;

  particleAction: SKAction;

  fieldBitMask: number;

  targetNode: SKNode;

  shader: SKShader;

  get attributeValues(): NSDictionary;
  set attributeValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  valueForAttributeNamed(key: string): SKAttributeValue;

  setValueForAttributeNamed(value: SKAttributeValue, key: string): void;

  particleZPosition: number;

  particleRenderOrder: interop.Enum<typeof SKParticleRenderOrder>;

  particleZPositionRange: number;

  particleZPositionSpeed: number;
}

declare class SKTransformNode extends SKNode {
  xRotation: number;

  yRotation: number;

  setEulerAngles(euler: unknown /* ext vector */): void;

  eulerAngles(): unknown /* ext vector */;

  setRotationMatrix(rotationMatrix: simd_float3x3): void;

  rotationMatrix(): simd_float3x3;

  setQuaternion(quaternion: simd_quatf): void;

  quaternion(): simd_quatf;
}

declare class SKFieldNode extends SKNode {
  region: SKRegion;

  strength: number;

  falloff: number;

  minimumRadius: number;

  isEnabled: boolean;

  isExclusive: boolean;

  categoryBitMask: number;

  direction: unknown /* ext vector */;

  smoothness: number;

  animationSpeed: number;

  texture: SKTexture;

  static dragField(): SKFieldNode;

  static vortexField(): SKFieldNode;

  static radialGravityField(): SKFieldNode;

  static linearGravityFieldWithVector(direction: unknown /* ext vector */): SKFieldNode;

  static velocityFieldWithVector(direction: unknown /* ext vector */): SKFieldNode;

  static velocityFieldWithTexture(velocityTexture: SKTexture): SKFieldNode;

  static noiseFieldWithSmoothnessAnimationSpeed(smoothness: number, speed: number): SKFieldNode;

  static turbulenceFieldWithSmoothnessAnimationSpeed(smoothness: number, speed: number): SKFieldNode;

  static springField(): SKFieldNode;

  static electricField(): SKFieldNode;

  static magneticField(): SKFieldNode;

  static customFieldWithEvaluationBlock(block: (p1: unknown /* ext vector */, p2: unknown /* ext vector */, p3: number, p4: number, p5: number) => unknown /* ext vector */): SKFieldNode;
}

declare class SKPhysicsWorld extends NSObject implements NSSecureCoding {
  gravity: CGVector;

  speed: number;

  contactDelegate: SKPhysicsContactDelegate;

  addJoint(joint: SKPhysicsJoint): void;

  removeJoint(joint: SKPhysicsJoint): void;

  removeAllJoints(): void;

  sampleFieldsAt(position: unknown /* ext vector */): unknown /* ext vector */;

  bodyAtPoint(point: CGPoint): SKPhysicsBody;

  bodyInRect(rect: CGRect): SKPhysicsBody;

  bodyAlongRayStartEnd(start: CGPoint, end: CGPoint): SKPhysicsBody;

  enumerateBodiesAtPointUsingBlock(point: CGPoint, block: (p1: SKPhysicsBody, p2: interop.PointerConvertible) => void): void;

  enumerateBodiesInRectUsingBlock(rect: CGRect, block: (p1: SKPhysicsBody, p2: interop.PointerConvertible) => void): void;

  enumerateBodiesAlongRayStartEndUsingBlock(start: CGPoint, end: CGPoint, block: (p1: SKPhysicsBody, p2: CGPoint, p3: CGVector, p4: interop.PointerConvertible) => void): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKPhysicsContact extends NSObject {
  readonly bodyA: SKPhysicsBody;

  readonly bodyB: SKPhysicsBody;

  readonly contactPoint: CGPoint;

  readonly contactNormal: CGVector;

  readonly collisionImpulse: number;
}

declare class SKShapeNode extends SKNode {
  static shapeNodeWithPath<This extends abstract new (...args: any) => any>(this: This, path: interop.PointerConvertible): InstanceType<This>;

  static shapeNodeWithPathCentered<This extends abstract new (...args: any) => any>(this: This, path: interop.PointerConvertible, centered: boolean): InstanceType<This>;

  static shapeNodeWithRect<This extends abstract new (...args: any) => any>(this: This, rect: CGRect): InstanceType<This>;

  static shapeNodeWithRectOfSize<This extends abstract new (...args: any) => any>(this: This, size: CGSize): InstanceType<This>;

  static shapeNodeWithRectCornerRadius<This extends abstract new (...args: any) => any>(this: This, rect: CGRect, cornerRadius: number): InstanceType<This>;

  static shapeNodeWithRectOfSizeCornerRadius<This extends abstract new (...args: any) => any>(this: This, size: CGSize, cornerRadius: number): InstanceType<This>;

  static shapeNodeWithCircleOfRadius<This extends abstract new (...args: any) => any>(this: This, radius: number): InstanceType<This>;

  static shapeNodeWithEllipseInRect<This extends abstract new (...args: any) => any>(this: This, rect: CGRect): InstanceType<This>;

  static shapeNodeWithEllipseOfSize<This extends abstract new (...args: any) => any>(this: This, size: CGSize): InstanceType<This>;

  static shapeNodeWithPointsCount<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, numPoints: number): InstanceType<This>;

  static shapeNodeWithSplinePointsCount<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, numPoints: number): InstanceType<This>;

  get path(): interop.Pointer;
  set path(value: interop.PointerConvertible);

  strokeColor: UIColor;

  fillColor: UIColor;

  blendMode: interop.Enum<typeof SKBlendMode>;

  isAntialiased: boolean;

  lineWidth: number;

  glowWidth: number;

  lineCap: interop.Enum<typeof CGLineCap>;

  lineJoin: interop.Enum<typeof CGLineJoin>;

  miterLimit: number;

  readonly lineLength: number;

  fillTexture: SKTexture;

  fillShader: SKShader;

  strokeTexture: SKTexture;

  strokeShader: SKShader;

  get attributeValues(): NSDictionary;
  set attributeValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  valueForAttributeNamed(key: string): SKAttributeValue;

  setValueForAttributeNamed(value: SKAttributeValue, key: string): void;
}

declare class SKTextureAtlas extends NSObject implements NSSecureCoding {
  static atlasNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static atlasWithDictionary<This extends abstract new (...args: any) => any>(this: This, properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): InstanceType<This>;

  textureNamed(name: string): SKTexture;

  static preloadTextureAtlasesWithCompletionHandler(textureAtlases: NSArray<interop.Object> | Array<interop.Object>, completionHandler: () => void): void;

  static preloadTextureAtlasesNamedWithCompletionHandler(atlasNames: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError, p2: NSArray<interop.Object> | Array<interop.Object>) => void | null): void;

  preloadWithCompletionHandler(completionHandler: () => void): void;

  readonly textureNames: NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKUniform extends NSObject implements NSCopying, NSSecureCoding {
  static uniformWithName<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static uniformWithNameTexture<This extends abstract new (...args: any) => any>(this: This, name: string, texture: SKTexture | null): InstanceType<This>;

  static uniformWithNameFloat<This extends abstract new (...args: any) => any>(this: This, name: string, value: number): InstanceType<This>;

  static uniformWithNameVectorFloat2<This extends abstract new (...args: any) => any>(this: This, name: string, value: unknown /* ext vector */): InstanceType<This>;

  static uniformWithNameVectorFloat3<This extends abstract new (...args: any) => any>(this: This, name: string, value: unknown /* ext vector */): InstanceType<This>;

  static uniformWithNameVectorFloat4<This extends abstract new (...args: any) => any>(this: This, name: string, value: unknown /* ext vector */): InstanceType<This>;

  static uniformWithNameMatrixFloat2x2<This extends abstract new (...args: any) => any>(this: This, name: string, value: simd_float2x2): InstanceType<This>;

  static uniformWithNameMatrixFloat3x3<This extends abstract new (...args: any) => any>(this: This, name: string, value: simd_float3x3): InstanceType<This>;

  static uniformWithNameMatrixFloat4x4<This extends abstract new (...args: any) => any>(this: This, name: string, value: simd_float4x4): InstanceType<This>;

  readonly name: string;

  readonly uniformType: interop.Enum<typeof SKUniformType>;

  textureValue: SKTexture;

  floatValue: number;

  vectorFloat2Value: unknown /* ext vector */;

  vectorFloat3Value: unknown /* ext vector */;

  vectorFloat4Value: unknown /* ext vector */;

  matrixFloat2x2Value: simd_float2x2;

  matrixFloat3x3Value: simd_float3x3;

  matrixFloat4x4Value: simd_float4x4;

  initWithName(name: string): this;

  initWithNameTexture(name: string, texture: SKTexture | null): this;

  initWithNameFloat(name: string, value: number): this;

  initWithNameVectorFloat2(name: string, value: unknown /* ext vector */): this;

  initWithNameVectorFloat3(name: string, value: unknown /* ext vector */): this;

  initWithNameVectorFloat4(name: string, value: unknown /* ext vector */): this;

  initWithNameMatrixFloat2x2(name: string, value: simd_float2x2): this;

  initWithNameMatrixFloat3x3(name: string, value: simd_float3x3): this;

  initWithNameMatrixFloat4x4(name: string, value: simd_float4x4): this;

  floatVector2Value: _GLKVector2;

  floatVector3Value: _GLKVector3;

  floatVector4Value: _GLKVector4;

  floatMatrix2Value: _GLKMatrix2;

  floatMatrix3Value: _GLKMatrix3;

  floatMatrix4Value: _GLKMatrix4;

  static uniformWithNameFloatVector2<This extends abstract new (...args: any) => any>(this: This, name: string, value: _GLKVector2): InstanceType<This>;

  static uniformWithNameFloatVector3<This extends abstract new (...args: any) => any>(this: This, name: string, value: _GLKVector3): InstanceType<This>;

  static uniformWithNameFloatVector4<This extends abstract new (...args: any) => any>(this: This, name: string, value: _GLKVector4): InstanceType<This>;

  static uniformWithNameFloatMatrix2<This extends abstract new (...args: any) => any>(this: This, name: string, value: _GLKMatrix2): InstanceType<This>;

  static uniformWithNameFloatMatrix3<This extends abstract new (...args: any) => any>(this: This, name: string, value: _GLKMatrix3): InstanceType<This>;

  static uniformWithNameFloatMatrix4<This extends abstract new (...args: any) => any>(this: This, name: string, value: _GLKMatrix4): InstanceType<This>;

  initWithNameFloatVector2(name: string, value: _GLKVector2): this;

  initWithNameFloatVector3(name: string, value: _GLKVector3): this;

  initWithNameFloatVector4(name: string, value: _GLKVector4): this;

  initWithNameFloatMatrix2(name: string, value: _GLKMatrix2): this;

  initWithNameFloatMatrix3(name: string, value: _GLKMatrix3): this;

  initWithNameFloatMatrix4(name: string, value: _GLKMatrix4): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class SKTransition extends NSObject implements NSCopying {
  static crossFadeWithDuration(sec: number): SKTransition;

  static fadeWithDuration(sec: number): SKTransition;

  static fadeWithColorDuration(color: UIColor, sec: number): SKTransition;

  static flipHorizontalWithDuration(sec: number): SKTransition;

  static flipVerticalWithDuration(sec: number): SKTransition;

  static revealWithDirectionDuration(direction: interop.Enum<typeof SKTransitionDirection>, sec: number): SKTransition;

  static moveInWithDirectionDuration(direction: interop.Enum<typeof SKTransitionDirection>, sec: number): SKTransition;

  static pushWithDirectionDuration(direction: interop.Enum<typeof SKTransitionDirection>, sec: number): SKTransition;

  static doorsOpenHorizontalWithDuration(sec: number): SKTransition;

  static doorsOpenVerticalWithDuration(sec: number): SKTransition;

  static doorsCloseHorizontalWithDuration(sec: number): SKTransition;

  static doorsCloseVerticalWithDuration(sec: number): SKTransition;

  static doorwayWithDuration(sec: number): SKTransition;

  static transitionWithCIFilterDuration(filter: CIFilter, sec: number): SKTransition;

  pausesIncomingScene: boolean;

  pausesOutgoingScene: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

