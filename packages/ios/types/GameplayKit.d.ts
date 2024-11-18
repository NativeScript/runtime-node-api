/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const GKGameModelMinScore: number;

declare const GKGameModelMaxScore: number;

declare const GKRTreeSplitStrategy: {
  Halve: 0,
  Linear: 1,
  Quadratic: 2,
  ReduceOverlap: 3,
};

declare const GKMeshGraphTriangulationMode: {
  Vertices: 1,
  Centers: 2,
  EdgeMidpoints: 4,
};

declare class GKTriangle {
  constructor(init?: GKTriangle);
  points: unknown /* const array */;
}

declare class GKBox {
  constructor(init?: GKBox);
  boxMin: unknown /* ext vector */;
  boxMax: unknown /* ext vector */;
}

declare class GKQuad {
  constructor(init?: GKQuad);
  quadMin: unknown /* ext vector */;
  quadMax: unknown /* ext vector */;
}

declare interface GKRandom {
  nextInt(): number;

  nextIntWithUpperBound(upperBound: number): number;

  nextUniform(): number;

  nextBool(): boolean;
}

declare class GKRandom extends NativeObject implements GKRandom {
}

declare interface GKGameModelUpdate extends NSObjectProtocol {
  value: number;
}

declare class GKGameModelUpdate extends NativeObject implements GKGameModelUpdate {
}

declare interface GKAgentDelegate extends NSObjectProtocol {
  agentWillUpdate?(agent: GKAgent): void;

  agentDidUpdate?(agent: GKAgent): void;
}

declare class GKAgentDelegate extends NativeObject implements GKAgentDelegate {
}

declare interface GKSceneRootNodeType extends NSObjectProtocol {
}

declare class GKSceneRootNodeType extends NativeObject implements GKSceneRootNodeType {
}

declare interface GKStrategist extends NSObjectProtocol {
  gameModel: GKGameModel;

  randomSource: GKRandom;

  bestMoveForActivePlayer(): GKGameModelUpdate;
}

declare class GKStrategist extends NativeObject implements GKStrategist {
}

declare interface GKGameModel extends NSObjectProtocol, NSCopying {
  readonly players: NSArray;

  readonly activePlayer: GKGameModelPlayer;

  setGameModel(gameModel: GKGameModel): void;

  gameModelUpdatesForPlayer(player: GKGameModelPlayer): NSArray;

  applyGameModelUpdate(gameModelUpdate: GKGameModelUpdate): void;

  scoreForPlayer?(player: GKGameModelPlayer): number;

  isWinForPlayer?(player: GKGameModelPlayer): boolean;

  isLossForPlayer?(player: GKGameModelPlayer): boolean;

  unapplyGameModelUpdate?(gameModelUpdate: GKGameModelUpdate): void;
}

declare class GKGameModel extends NativeObject implements GKGameModel {
}

declare interface GKGameModelPlayer extends NSObjectProtocol {
  readonly playerId: number;
}

declare class GKGameModelPlayer extends NativeObject implements GKGameModelPlayer {
}

declare class GKState extends NSObject {
  readonly stateMachine: GKStateMachine;

  static state<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  init(): this;

  isValidNextState(stateClass: interop.Object): boolean;

  didEnterWithPreviousState(previousState: GKState | null): void;

  updateWithDeltaTime(seconds: number): void;

  willExitWithNextState(nextState: GKState): void;
}

declare class GKNSPredicateRule extends GKRule {
  readonly predicate: NSPredicate;

  initWithPredicate(predicate: NSPredicate): this;

  evaluatePredicateWithSystem(system: GKRuleSystem): boolean;
}

declare class GKRTree<ElementType = interop.Object> extends NSObject {
  queryReserve: number;

  static treeWithMaxNumberOfChildren<ElementType, This extends abstract new (...args: any) => any>(this: This, maxNumberOfChildren: number): InstanceType<This>;

  initWithMaxNumberOfChildren(maxNumberOfChildren: number): this;

  addElementBoundingRectMinBoundingRectMaxSplitStrategy(element: ElementType, boundingRectMin: unknown /* ext vector */, boundingRectMax: unknown /* ext vector */, splitStrategy: interop.Enum<typeof GKRTreeSplitStrategy>): void;

  removeElementBoundingRectMinBoundingRectMax(element: ElementType, boundingRectMin: unknown /* ext vector */, boundingRectMax: unknown /* ext vector */): void;

  elementsInBoundingRectMinRectMax(rectMin: unknown /* ext vector */, rectMax: unknown /* ext vector */): NSArray;
}

declare class GKGaussianDistribution extends GKRandomDistribution {
  readonly mean: number;

  readonly deviation: number;

  initWithRandomSourceLowestValueHighestValue(source: GKRandom, lowestInclusive: number, highestInclusive: number): this;

  initWithRandomSourceMeanDeviation(source: GKRandom, mean: number, deviation: number): this;
}

declare class GKOctreeNode extends NSObject {
  readonly box: GKBox;
}

declare class GKSpheresNoiseSource extends GKNoiseSource {
  frequency: number;

  static spheresNoiseWithFrequency<This extends abstract new (...args: any) => any>(this: This, frequency: number): InstanceType<This>;

  initWithFrequency(frequency: number): this;
}

declare class GKRidgedNoiseSource extends GKCoherentNoiseSource {
  static ridgedNoiseSourceWithFrequencyOctaveCountLacunaritySeed<This extends abstract new (...args: any) => any>(this: This, frequency: number, octaveCount: number, lacunarity: number, seed: number): InstanceType<This>;

  initWithFrequencyOctaveCountLacunaritySeed(frequency: number, octaveCount: number, lacunarity: number, seed: number): this;
}

declare class GKNoiseSource extends NSObject {
}

declare class GKDecisionTree extends NSObject implements NSSecureCoding {
  readonly rootNode: GKDecisionNode;

  randomSource: GKRandomSource;

  initWithAttribute(attribute: NSObject): this;

  initWithExamplesActionsAttributes(examples: NSArray<interop.Object> | Array<interop.Object>, actions: NSArray<interop.Object> | Array<interop.Object>, attributes: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithURLError(url: NSURL, error: NSError | null): this;

  exportToURLError(url: NSURL, error: NSError | null): boolean;

  findActionForAnswers(answers: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSObject;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKLinearCongruentialRandomSource extends GKRandomSource {
  seed: number;

  init(): this;

  initWithSeed(seed: number): this;
}

declare class GKGraphNode2D extends GKGraphNode {
  position: unknown /* ext vector */;

  static nodeWithPoint<This extends abstract new (...args: any) => any>(this: This, point: unknown /* ext vector */): InstanceType<This>;

  initWithPoint(point: unknown /* ext vector */): this;
}

declare class GKGraph extends NSObject implements NSCopying, NSSecureCoding {
  readonly nodes: NSArray;

  static graphWithNodes<This extends abstract new (...args: any) => any>(this: This, nodes: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  initWithNodes(nodes: NSArray<interop.Object> | Array<interop.Object>): this;

  connectNodeToLowestCostNodeBidirectional(node: GKGraphNode, bidirectional: boolean): void;

  removeNodes(nodes: NSArray<interop.Object> | Array<interop.Object>): void;

  addNodes(nodes: NSArray<interop.Object> | Array<interop.Object>): void;

  findPathFromNodeToNode(startNode: GKGraphNode, endNode: GKGraphNode): NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class GKCompositeBehavior extends GKBehavior {
  readonly behaviorCount: number;

  static behaviorWithBehaviors<This extends abstract new (...args: any) => any>(this: This, behaviors: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static behaviorWithBehaviorsAndWeights<This extends abstract new (...args: any) => any>(this: This, behaviors: NSArray<interop.Object> | Array<interop.Object>, weights: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  setWeightForBehavior(weight: number, behavior: GKBehavior): void;

  weightForBehavior(behavior: GKBehavior): number;

  removeBehavior(behavior: GKBehavior): void;

  removeAllBehaviors(): void;

  // @ts-ignore MemberDecl.tsIgnore
  objectAtIndexedSubscript(idx: number): GKBehavior;

  // @ts-ignore MemberDecl.tsIgnore
  setObjectForKeyedSubscript(weight: NSNumber, behavior: GKBehavior): void;

  // @ts-ignore MemberDecl.tsIgnore
  objectForKeyedSubscript(behavior: GKBehavior): NSNumber;
}

declare class GKAgent3D extends GKAgent {
  position: unknown /* ext vector */;

  readonly velocity: unknown /* ext vector */;

  rightHanded: boolean;

  rotation: simd_float3x3;

  updateWithDeltaTime(seconds: number): void;
}

declare class GKAgent2D extends GKAgent implements NSSecureCoding {
  position: unknown /* ext vector */;

  readonly velocity: unknown /* ext vector */;

  rotation: number;

  updateWithDeltaTime(seconds: number): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKGoal extends NSObject implements NSCopying {
  static goalToSeekAgent<This extends abstract new (...args: any) => any>(this: This, agent: GKAgent): InstanceType<This>;

  static goalToFleeAgent<This extends abstract new (...args: any) => any>(this: This, agent: GKAgent): InstanceType<This>;

  static goalToAvoidObstaclesMaxPredictionTime<This extends abstract new (...args: any) => any>(this: This, obstacles: NSArray<interop.Object> | Array<interop.Object>, maxPredictionTime: number): InstanceType<This>;

  static goalToAvoidAgentsMaxPredictionTime<This extends abstract new (...args: any) => any>(this: This, agents: NSArray<interop.Object> | Array<interop.Object>, maxPredictionTime: number): InstanceType<This>;

  static goalToSeparateFromAgentsMaxDistanceMaxAngle<This extends abstract new (...args: any) => any>(this: This, agents: NSArray<interop.Object> | Array<interop.Object>, maxDistance: number, maxAngle: number): InstanceType<This>;

  static goalToAlignWithAgentsMaxDistanceMaxAngle<This extends abstract new (...args: any) => any>(this: This, agents: NSArray<interop.Object> | Array<interop.Object>, maxDistance: number, maxAngle: number): InstanceType<This>;

  static goalToCohereWithAgentsMaxDistanceMaxAngle<This extends abstract new (...args: any) => any>(this: This, agents: NSArray<interop.Object> | Array<interop.Object>, maxDistance: number, maxAngle: number): InstanceType<This>;

  static goalToReachTargetSpeed<This extends abstract new (...args: any) => any>(this: This, targetSpeed: number): InstanceType<This>;

  static goalToWander<This extends abstract new (...args: any) => any>(this: This, speed: number): InstanceType<This>;

  static goalToInterceptAgentMaxPredictionTime<This extends abstract new (...args: any) => any>(this: This, target: GKAgent, maxPredictionTime: number): InstanceType<This>;

  static goalToFollowPathMaxPredictionTimeForward<This extends abstract new (...args: any) => any>(this: This, path: GKPath, maxPredictionTime: number, forward: boolean): InstanceType<This>;

  static goalToStayOnPathMaxPredictionTime<This extends abstract new (...args: any) => any>(this: This, path: GKPath, maxPredictionTime: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class GKBehavior extends NSObject implements NSFastEnumeration, NSCopying {
  readonly goalCount: number;

  static behaviorWithGoalWeight<This extends abstract new (...args: any) => any>(this: This, goal: GKGoal, weight: number): InstanceType<This>;

  static behaviorWithGoals<This extends abstract new (...args: any) => any>(this: This, goals: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static behaviorWithGoalsAndWeights<This extends abstract new (...args: any) => any>(this: This, goals: NSArray<interop.Object> | Array<interop.Object>, weights: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static behaviorWithWeightedGoals<This extends abstract new (...args: any) => any>(this: This, weightedGoals: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): InstanceType<This>;

  setWeightForGoal(weight: number, goal: GKGoal): void;

  weightForGoal(goal: GKGoal): number;

  removeGoal(goal: GKGoal): void;

  removeAllGoals(): void;

  objectAtIndexedSubscript(idx: number): GKGoal;

  setObjectForKeyedSubscript(weight: NSNumber, goal: GKGoal): void;

  objectForKeyedSubscript(goal: GKGoal): NSNumber;

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  readonly [Symbol.iterator]: () => Iterator<any>;

}

declare class GKCircleObstacle extends GKObstacle {
  radius: number;

  position: unknown /* ext vector */;

  static obstacleWithRadius<This extends abstract new (...args: any) => any>(this: This, radius: number): InstanceType<This>;

  initWithRadius(radius: number): this;
}

declare class GKObstacle extends NSObject {
}

declare class GKComponent extends NSObject implements NSCopying, NSSecureCoding {
  readonly entity: GKEntity;

  updateWithDeltaTime(seconds: number): void;

  didAddToEntity(): void;

  willRemoveFromEntity(): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKQuadtreeNode extends NSObject {
  readonly quad: GKQuad;
}

declare class GKSKNodeComponent extends GKComponent implements GKAgentDelegate {
  static componentWithNode<This extends abstract new (...args: any) => any>(this: This, node: SKNode): InstanceType<This>;

  initWithNode(node: SKNode): this;

  node: SKNode;

  agentWillUpdate(agent: GKAgent): void;

  agentDidUpdate(agent: GKAgent): void;

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

declare class GKComponentSystem<ComponentType = interop.Object> extends NSObject implements NSFastEnumeration {
  readonly componentClass: interop.Object;

  readonly components: NSArray;

  objectAtIndexedSubscript(idx: number): ComponentType;

  initWithComponentClass(cls: interop.Object): this;

  addComponent(component: ComponentType): void;

  addComponentWithEntity(entity: GKEntity): void;

  removeComponentWithEntity(entity: GKEntity): void;

  removeComponent(component: ComponentType): void;

  updateWithDeltaTime(seconds: number): void;

  classForGenericArgumentAtIndex(index: number): interop.Object;

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;

  readonly [Symbol.iterator]: () => Iterator<ComponentType>;

}

declare class GKNoiseMap extends NSObject {
  readonly size: unknown /* ext vector */;

  readonly origin: unknown /* ext vector */;

  readonly sampleCount: unknown /* ext vector */;

  readonly isSeamless: boolean;

  init(): this;

  static noiseMapWithNoise<This extends abstract new (...args: any) => any>(this: This, noise: GKNoise): InstanceType<This>;

  static noiseMapWithNoiseSizeOriginSampleCountSeamless<This extends abstract new (...args: any) => any>(this: This, noise: GKNoise, size: unknown /* ext vector */, origin: unknown /* ext vector */, sampleCount: unknown /* ext vector */, seamless: boolean): InstanceType<This>;

  initWithNoise(noise: GKNoise): this;

  initWithNoiseSizeOriginSampleCountSeamless(noise: GKNoise, size: unknown /* ext vector */, origin: unknown /* ext vector */, sampleCount: unknown /* ext vector */, seamless: boolean): this;

  valueAtPosition(position: unknown /* ext vector */): number;

  interpolatedValueAtPosition(position: unknown /* ext vector */): number;

  setValueAtPosition(value: number, position: unknown /* ext vector */): void;
}

declare class GKCylindersNoiseSource extends GKNoiseSource {
  frequency: number;

  static cylindersNoiseWithFrequency<This extends abstract new (...args: any) => any>(this: This, frequency: number): InstanceType<This>;

  initWithFrequency(frequency: number): this;
}

declare class GKRandomDistribution extends NSObject implements GKRandom {
  readonly lowestValue: number;

  readonly highestValue: number;

  readonly numberOfPossibleOutcomes: number;

  initWithRandomSourceLowestValueHighestValue(source: GKRandom, lowestInclusive: number, highestInclusive: number): this;

  nextInt(): number;

  nextIntWithUpperBound(upperBound: number): number;

  nextUniform(): number;

  nextBool(): boolean;

  static distributionWithLowestValueHighestValue<This extends abstract new (...args: any) => any>(this: This, lowestInclusive: number, highestInclusive: number): InstanceType<This>;

  static distributionForDieWithSideCount<This extends abstract new (...args: any) => any>(this: This, sideCount: number): InstanceType<This>;

  static d6<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static d20<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class GKStateMachine extends NSObject {
  readonly currentState: GKState;

  static stateMachineWithStates<This extends abstract new (...args: any) => any>(this: This, states: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  initWithStates(states: NSArray<interop.Object> | Array<interop.Object>): this;

  updateWithDeltaTime(sec: number): void;

  stateForClass(stateClass: interop.Object): GKState;

  canEnterState(stateClass: interop.Object): boolean;

  enterState(stateClass: interop.Object): boolean;
}

declare class GKSCNNodeComponent extends GKComponent implements GKAgentDelegate {
  static componentWithNode<This extends abstract new (...args: any) => any>(this: This, node: SCNNode): InstanceType<This>;

  initWithNode(node: SCNNode): this;

  readonly node: SCNNode;

  agentWillUpdate(agent: GKAgent): void;

  agentDidUpdate(agent: GKAgent): void;

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

declare class GKMinmaxStrategist extends NSObject implements GKStrategist {
  maxLookAheadDepth: number;

  bestMoveForPlayer(player: GKGameModelPlayer): GKGameModelUpdate;

  randomMoveForPlayerFromNumberOfBestMoves(player: GKGameModelPlayer, numMovesToConsider: number): GKGameModelUpdate;

  gameModel: GKGameModel;

  randomSource: GKRandom;

  bestMoveForActivePlayer(): GKGameModelUpdate;

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

declare class GKBillowNoiseSource extends GKCoherentNoiseSource {
  persistence: number;

  static billowNoiseSourceWithFrequencyOctaveCountPersistenceLacunaritySeed<This extends abstract new (...args: any) => any>(this: This, frequency: number, octaveCount: number, persistence: number, lacunarity: number, seed: number): InstanceType<This>;

  initWithFrequencyOctaveCountPersistenceLacunaritySeed(frequency: number, octaveCount: number, persistence: number, lacunarity: number, seed: number): this;
}

declare class GKCoherentNoiseSource extends GKNoiseSource {
  frequency: number;

  octaveCount: number;

  lacunarity: number;

  seed: number;
}

declare class GKRule extends NSObject {
  salience: number;

  evaluatePredicateWithSystem(system: GKRuleSystem): boolean;

  performActionWithSystem(system: GKRuleSystem): void;

  static ruleWithPredicateAssertingFactGrade<This extends abstract new (...args: any) => any>(this: This, predicate: NSPredicate, fact: NSObject, grade: number): InstanceType<This>;

  static ruleWithPredicateRetractingFactGrade<This extends abstract new (...args: any) => any>(this: This, predicate: NSPredicate, fact: NSObject, grade: number): InstanceType<This>;

  static ruleWithBlockPredicateAction<This extends abstract new (...args: any) => any>(this: This, predicate: (p1: GKRuleSystem) => boolean, action: (p1: GKRuleSystem) => void): InstanceType<This>;
}

declare class GKCheckerboardNoiseSource extends GKNoiseSource {
  squareSize: number;

  static checkerboardNoiseWithSquareSize<This extends abstract new (...args: any) => any>(this: This, squareSize: number): InstanceType<This>;

  initWithSquareSize(squareSize: number): this;
}

declare class GKEntity extends NSObject implements NSCopying, NSSecureCoding {
  static entity<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  init(): this;

  updateWithDeltaTime(seconds: number): void;

  readonly components: NSArray;

  addComponent(component: GKComponent): void;

  removeComponentForClass(componentClass: interop.Object): void;

  componentForClass(componentClass: interop.Object): GKComponent;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKGraphNode3D extends GKGraphNode {
  position: unknown /* ext vector */;

  static nodeWithPoint<This extends abstract new (...args: any) => any>(this: This, point: unknown /* ext vector */): InstanceType<This>;

  initWithPoint(point: unknown /* ext vector */): this;
}

declare class GKRuleSystem extends NSObject {
  init(): this;

  evaluate(): void;

  readonly state: NSMutableDictionary;

  readonly rules: NSArray;

  addRule(rule: GKRule): void;

  addRulesFromArray(rules: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAllRules(): void;

  readonly agenda: NSArray;

  readonly executed: NSArray;

  readonly facts: NSArray;

  gradeForFact(fact: NSObject): number;

  minimumGradeForFacts(facts: NSArray<interop.Object> | Array<interop.Object>): number;

  maximumGradeForFacts(facts: NSArray<interop.Object> | Array<interop.Object>): number;

  assertFact(fact: NSObject): void;

  assertFactGrade(fact: NSObject, grade: number): void;

  retractFact(fact: NSObject): void;

  retractFactGrade(fact: NSObject, grade: number): void;

  reset(): void;
}

declare class GKSphereObstacle extends GKObstacle {
  radius: number;

  position: unknown /* ext vector */;

  static obstacleWithRadius<This extends abstract new (...args: any) => any>(this: This, radius: number): InstanceType<This>;

  initWithRadius(radius: number): this;
}

declare class GKDecisionNode extends NSObject {
  createBranchWithValueAttribute(value: NSNumber, attribute: NSObject): this;

  createBranchWithPredicateAttribute(predicate: NSPredicate, attribute: NSObject): this;

  createBranchWithWeightAttribute(weight: number, attribute: NSObject): this;
}

declare class GKQuadtree<ElementType = interop.Object> extends NSObject {
  static quadtreeWithBoundingQuadMinimumCellSize<ElementType, This extends abstract new (...args: any) => any>(this: This, quad: GKQuad, minCellSize: number): InstanceType<This>;

  initWithBoundingQuadMinimumCellSize(quad: GKQuad, minCellSize: number): this;

  addElementWithPoint(element: ElementType, point: unknown /* ext vector */): GKQuadtreeNode;

  addElementWithQuad(element: ElementType, quad: GKQuad): GKQuadtreeNode;

  elementsAtPoint(point: unknown /* ext vector */): NSArray;

  elementsInQuad(quad: GKQuad): NSArray;

  removeElement(element: ElementType): boolean;

  removeElementWithNode(data: ElementType, node: GKQuadtreeNode): boolean;
}

declare class GKMersenneTwisterRandomSource extends GKRandomSource {
  seed: number;

  init(): this;

  initWithSeed(seed: number): this;
}

declare class GKPath extends NSObject {
  radius: number;

  readonly numPoints: number;

  isCyclical: boolean;

  static pathWithPointsCountRadiusCyclical<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, count: number, radius: number, cyclical: boolean): InstanceType<This>;

  initWithPointsCountRadiusCyclical(points: interop.PointerConvertible, count: number, radius: number, cyclical: boolean): this;

  static pathWithFloat3PointsCountRadiusCyclical<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, count: number, radius: number, cyclical: boolean): InstanceType<This>;

  initWithFloat3PointsCountRadiusCyclical(points: interop.PointerConvertible, count: number, radius: number, cyclical: boolean): this;

  static pathWithGraphNodesRadius<This extends abstract new (...args: any) => any>(this: This, graphNodes: NSArray<interop.Object> | Array<interop.Object>, radius: number): InstanceType<This>;

  initWithGraphNodesRadius(graphNodes: NSArray<interop.Object> | Array<interop.Object>, radius: number): this;

  pointAtIndex(index: number): unknown /* ext vector */;

  float2AtIndex(index: number): unknown /* ext vector */;

  float3AtIndex(index: number): unknown /* ext vector */;
}

declare class GKAgent extends GKComponent implements NSSecureCoding {
  delegate: GKAgentDelegate;

  behavior: GKBehavior;

  mass: number;

  radius: number;

  speed: number;

  maxAcceleration: number;

  maxSpeed: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKVoronoiNoiseSource extends GKNoiseSource {
  frequency: number;

  displacement: number;

  isDistanceEnabled: boolean;

  seed: number;

  static voronoiNoiseWithFrequencyDisplacementDistanceEnabledSeed<This extends abstract new (...args: any) => any>(this: This, frequency: number, displacement: number, distanceEnabled: boolean, seed: number): InstanceType<This>;

  initWithFrequencyDisplacementDistanceEnabledSeed(frequency: number, displacement: number, distanceEnabled: boolean, seed: number): this;
}

declare class GKGridGraphNode extends GKGraphNode {
  readonly gridPosition: unknown /* ext vector */;

  static nodeWithGridPosition<This extends abstract new (...args: any) => any>(this: This, gridPosition: unknown /* ext vector */): InstanceType<This>;

  initWithGridPosition(gridPosition: unknown /* ext vector */): this;
}

declare class GKPolygonObstacle extends GKObstacle implements NSSecureCoding {
  readonly vertexCount: number;

  static obstacleWithPointsCount<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, numPoints: number): InstanceType<This>;

  initWithPointsCount(points: interop.PointerConvertible, numPoints: number): this;

  vertexAtIndex(index: number): unknown /* ext vector */;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKMonteCarloStrategist extends NSObject implements GKStrategist {
  budget: number;

  explorationParameter: number;

  gameModel: GKGameModel;

  randomSource: GKRandom;

  bestMoveForActivePlayer(): GKGameModelUpdate;

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

declare class GKNoise extends NSObject {
  get gradientColors(): NSDictionary;
  set gradientColors(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  init(): this;

  static noiseWithNoiseSource<This extends abstract new (...args: any) => any>(this: This, noiseSource: GKNoiseSource): InstanceType<This>;

  static noiseWithNoiseSourceGradientColors<This extends abstract new (...args: any) => any>(this: This, noiseSource: GKNoiseSource, gradientColors: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): InstanceType<This>;

  initWithNoiseSource(noiseSource: GKNoiseSource): this;

  initWithNoiseSourceGradientColors(noiseSource: GKNoiseSource, gradientColors: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): this;

  static noiseWithComponentNoisesSelectionNoise<This extends abstract new (...args: any) => any>(this: This, noises: NSArray<interop.Object> | Array<interop.Object>, selectionNoise: GKNoise): InstanceType<This>;

  static noiseWithComponentNoisesSelectionNoiseComponentBoundariesBoundaryBlendDistances<This extends abstract new (...args: any) => any>(this: This, noises: NSArray<interop.Object> | Array<interop.Object>, selectionNoise: GKNoise, componentBoundaries: NSArray<interop.Object> | Array<interop.Object>, blendDistances: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  valueAtPosition(position: unknown /* ext vector */): number;

  applyAbsoluteValue(): void;

  clampWithLowerBoundUpperBound(lowerBound: number, upperBound: number): void;

  raiseToPower(power: number): void;

  invert(): void;

  applyTurbulenceWithFrequencyPowerRoughnessSeed(frequency: number, power: number, roughness: number, seed: number): void;

  remapValuesToCurveWithControlPoints(controlPoints: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  remapValuesToTerracesWithPeaksTerracesInverted(peakInputValues: NSArray<interop.Object> | Array<interop.Object>, inverted: boolean): void;

  moveBy(delta: unknown /* ext vector */): void;

  scaleBy(factor: unknown /* ext vector */): void;

  rotateBy(radians: unknown /* ext vector */): void;

  addWithNoise(noise: GKNoise): void;

  multiplyWithNoise(noise: GKNoise): void;

  minimumWithNoise(noise: GKNoise): void;

  maximumWithNoise(noise: GKNoise): void;

  raiseToPowerWithNoise(noise: GKNoise): void;

  displaceXWithNoiseYWithNoiseZWithNoise(xDisplacementNoise: GKNoise, yDisplacementNoise: GKNoise, zDisplacementNoise: GKNoise): void;
}

declare class GKOctree<ElementType = interop.Object> extends NSObject {
  static octreeWithBoundingBoxMinimumCellSize<ElementType, This extends abstract new (...args: any) => any>(this: This, box: GKBox, minCellSize: number): InstanceType<This>;

  initWithBoundingBoxMinimumCellSize(box: GKBox, minCellSize: number): this;

  addElementWithPoint(element: ElementType, point: unknown /* ext vector */): GKOctreeNode;

  addElementWithBox(element: ElementType, box: GKBox): GKOctreeNode;

  elementsAtPoint(point: unknown /* ext vector */): NSArray;

  elementsInBox(box: GKBox): NSArray;

  removeElement(element: ElementType): boolean;

  removeElementWithNode(element: ElementType, node: GKOctreeNode): boolean;
}

declare class GKConstantNoiseSource extends GKNoiseSource {
  value: number;

  static constantNoiseWithValue<This extends abstract new (...args: any) => any>(this: This, value: number): InstanceType<This>;

  initWithValue(value: number): this;
}

declare class GKGraphNode extends NSObject implements NSSecureCoding {
  readonly connectedNodes: NSArray;

  addConnectionsToNodesBidirectional(nodes: NSArray<interop.Object> | Array<interop.Object>, bidirectional: boolean): void;

  removeConnectionsToNodesBidirectional(nodes: NSArray<interop.Object> | Array<interop.Object>, bidirectional: boolean): void;

  estimatedCostToNode(node: GKGraphNode): number;

  costToNode(node: GKGraphNode): number;

  findPathToNode(goalNode: GKGraphNode): NSArray;

  findPathFromNode(startNode: GKGraphNode): NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKScene extends NSObject implements NSCopying, NSSecureCoding {
  static sceneWithFileNamed<This extends abstract new (...args: any) => any>(this: This, filename: string): InstanceType<This>;

  static sceneWithFileNamedRootNode<This extends abstract new (...args: any) => any>(this: This, filename: string, rootNode: GKSceneRootNodeType): InstanceType<This>;

  readonly entities: NSArray;

  rootNode: GKSceneRootNodeType;

  readonly graphs: NSDictionary;

  addEntity(entity: GKEntity): void;

  removeEntity(entity: GKEntity): void;

  addGraphName(graph: GKGraph, name: string): void;

  removeGraph(name: string): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class GKARC4RandomSource extends GKRandomSource {
  seed: NSData;

  init(): this;

  initWithSeed(seed: NSData): this;

  dropValuesWithCount(count: number): void;
}

declare class GKMeshGraph<NodeType = interop.Object> extends GKGraph {
  readonly obstacles: NSArray;

  readonly bufferRadius: number;

  triangulationMode: interop.Enum<typeof GKMeshGraphTriangulationMode>;

  readonly triangleCount: number;

  static graphWithBufferRadiusMinCoordinateMaxCoordinateNodeClass<NodeType, This extends abstract new (...args: any) => any>(this: This, bufferRadius: number, min: unknown /* ext vector */, max: unknown /* ext vector */, nodeClass: interop.Object): InstanceType<This>;

  initWithBufferRadiusMinCoordinateMaxCoordinateNodeClass(bufferRadius: number, min: unknown /* ext vector */, max: unknown /* ext vector */, nodeClass: interop.Object): this;

  static graphWithBufferRadiusMinCoordinateMaxCoordinate<NodeType, This extends abstract new (...args: any) => any>(this: This, bufferRadius: number, min: unknown /* ext vector */, max: unknown /* ext vector */): InstanceType<This>;

  initWithBufferRadiusMinCoordinateMaxCoordinate(bufferRadius: number, min: unknown /* ext vector */, max: unknown /* ext vector */): this;

  addObstacles(obstacles: NSArray<interop.Object> | Array<interop.Object>): void;

  removeObstacles(obstacles: NSArray<interop.Object> | Array<interop.Object>): void;

  connectNodeUsingObstacles(node: NodeType): void;

  triangulate(): void;

  triangleAtIndex(index: number): GKTriangle;

  classForGenericArgumentAtIndex(index: number): interop.Object;
}

declare class GKShuffledDistribution extends GKRandomDistribution {
}

declare class GKPerlinNoiseSource extends GKCoherentNoiseSource {
  persistence: number;

  static perlinNoiseSourceWithFrequencyOctaveCountPersistenceLacunaritySeed<This extends abstract new (...args: any) => any>(this: This, frequency: number, octaveCount: number, persistence: number, lacunarity: number, seed: number): InstanceType<This>;

  initWithFrequencyOctaveCountPersistenceLacunaritySeed(frequency: number, octaveCount: number, persistence: number, lacunarity: number, seed: number): this;
}

declare class GKRandomSource extends NSObject implements GKRandom, NSSecureCoding, NSCopying {
  init(): this;

  initWithCoder(aDecoder: NSCoder): this;

  static sharedRandom(): GKRandomSource;

  arrayByShufflingObjectsInArray(array: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  nextInt(): number;

  nextIntWithUpperBound(upperBound: number): number;

  nextUniform(): number;

  nextBool(): boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class GKObstacleGraph<NodeType = interop.Object> extends GKGraph {
  readonly obstacles: NSArray;

  readonly bufferRadius: number;

  static graphWithObstaclesBufferRadius<NodeType, This extends abstract new (...args: any) => any>(this: This, obstacles: NSArray<interop.Object> | Array<interop.Object>, bufferRadius: number): InstanceType<This>;

  initWithObstaclesBufferRadius(obstacles: NSArray<interop.Object> | Array<interop.Object>, bufferRadius: number): this;

  static graphWithObstaclesBufferRadiusNodeClass<NodeType, This extends abstract new (...args: any) => any>(this: This, obstacles: NSArray<interop.Object> | Array<interop.Object>, bufferRadius: number, nodeClass: interop.Object): InstanceType<This>;

  initWithObstaclesBufferRadiusNodeClass(obstacles: NSArray<interop.Object> | Array<interop.Object>, bufferRadius: number, nodeClass: interop.Object): this;

  connectNodeUsingObstacles(node: NodeType): void;

  connectNodeUsingObstaclesIgnoringObstacles(node: NodeType, obstaclesToIgnore: NSArray<interop.Object> | Array<interop.Object>): void;

  connectNodeUsingObstaclesIgnoringBufferRadiusOfObstacles(node: NodeType, obstaclesBufferRadiusToIgnore: NSArray<interop.Object> | Array<interop.Object>): void;

  addObstacles(obstacles: NSArray<interop.Object> | Array<interop.Object>): void;

  removeObstacles(obstacles: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAllObstacles(): void;

  nodesForObstacle(obstacle: GKPolygonObstacle): NSArray;

  lockConnectionFromNodeToNode(startNode: NodeType, endNode: NodeType): void;

  unlockConnectionFromNodeToNode(startNode: NodeType, endNode: NodeType): void;

  isConnectionLockedFromNodeToNode(startNode: NodeType, endNode: NodeType): boolean;

  classForGenericArgumentAtIndex(index: number): interop.Object;
}

declare class GKGridGraph<NodeType = interop.Object> extends GKGraph {
  readonly gridOrigin: unknown /* ext vector */;

  readonly gridWidth: number;

  readonly gridHeight: number;

  readonly diagonalsAllowed: boolean;

  static graphFromGridStartingAtWidthHeightDiagonalsAllowed<NodeType, This extends abstract new (...args: any) => any>(this: This, position: unknown /* ext vector */, width: number, height: number, diagonalsAllowed: boolean): InstanceType<This>;

  initFromGridStartingAtWidthHeightDiagonalsAllowed(position: unknown /* ext vector */, width: number, height: number, diagonalsAllowed: boolean): this;

  static graphFromGridStartingAtWidthHeightDiagonalsAllowedNodeClass<NodeType, This extends abstract new (...args: any) => any>(this: This, position: unknown /* ext vector */, width: number, height: number, diagonalsAllowed: boolean, nodeClass: interop.Object): InstanceType<This>;

  initFromGridStartingAtWidthHeightDiagonalsAllowedNodeClass(position: unknown /* ext vector */, width: number, height: number, diagonalsAllowed: boolean, nodeClass: interop.Object): this;

  nodeAtGridPosition(position: unknown /* ext vector */): NodeType;

  connectNodeToAdjacentNodes(node: GKGridGraphNode): void;

  classForGenericArgumentAtIndex(index: number): interop.Object;
}

