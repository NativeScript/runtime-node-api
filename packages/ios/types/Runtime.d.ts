/// <reference types="@nativescript/objc-node-api" />

declare const os_clockid_t: {
  OS_CLOCK_MACH_ABSOLUTE_TIME: 32,
};

declare class __sFILEX {
  constructor(init?: __sFILEX);
}

declare class simd_float2x2 {
  constructor(init?: simd_float2x2);
  columns: unknown /* const array */;
}

declare class simd_quatf {
  constructor(init?: simd_quatf);
  vector: unknown /* ext vector */;
}

declare class simd_float4x3 {
  constructor(init?: simd_float4x3);
  columns: unknown /* const array */;
}

declare class simd_float4x4 {
  constructor(init?: simd_float4x4);
  columns: unknown /* const array */;
}

declare class os_workgroup_attr_opaque_s {
  constructor(init?: os_workgroup_attr_opaque_s);
  sig: number;
  opaque: unknown /* const array */;
}

declare class simd_quatd {
  constructor(init?: simd_quatd);
  vector: unknown /* ext vector */;
}

declare class __sbuf {
  constructor(init?: __sbuf);
  _base: interop.Pointer;
  _size: number;
}

declare class _xpc_type_s {
  constructor(init?: _xpc_type_s);
}

declare class simd_double4x4 {
  constructor(init?: simd_double4x4);
  columns: unknown /* const array */;
}

declare class simd_float3x3 {
  constructor(init?: simd_float3x3);
  columns: unknown /* const array */;
}

declare class __sFILE {
  constructor(init?: __sFILE);
  _p: interop.Pointer;
  _r: number;
  _w: number;
  _flags: number;
  _file: number;
  _bf: __sbuf;
  _lbfsize: number;
  _cookie: interop.Pointer;
  _close: (p1: interop.PointerConvertible) => number | null;
  _read: (p1: interop.PointerConvertible, p2: string, p3: number) => number | null;
  _seek: (p1: interop.PointerConvertible, p2: number, p3: number) => number | null;
  _write: (p1: interop.PointerConvertible, p2: string, p3: number) => number | null;
  _ub: __sbuf;
  _extra: interop.Pointer;
  _ur: number;
  _ubuf: unknown /* const array */;
  _nbuf: unknown /* const array */;
  _lb: __sbuf;
  _blksize: number;
  _offset: number;
}

declare class _acl {
  constructor(init?: _acl);
}

declare interface NSObjectProtocol {
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

  readonly debugDescription?: string;
}

declare class NSObjectProtocol extends NativeObject implements NSObjectProtocol {
}

declare interface NativeScriptEmbedderDelegate {
  presentNativeScriptApp(vc: UIViewController): interop.Object;
}

declare class NativeScriptEmbedderDelegate extends NativeObject implements NativeScriptEmbedderDelegate {
}

declare class NSObject extends NativeObject implements NSObjectProtocol {
  static load(): void;

  static initialize(): void;

  init(): this;

  static new<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static allocWithZone<This extends abstract new (...args: any) => any>(this: This, zone: interop.PointerConvertible): InstanceType<This>;

  static alloc<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  dealloc(): void;

  finalize(): void;

  copy(): interop.Object;

  mutableCopy(): interop.Object;

  static copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static mutableCopyWithZone(zone: interop.PointerConvertible): interop.Object;

  static instancesRespondToSelector(aSelector: string): boolean;

  static conformsToProtocol(protocol: interop.PointerConvertible): boolean;

  methodForSelector(aSelector: string): () => void;

  static instanceMethodForSelector(aSelector: string): () => void;

  doesNotRecognizeSelector(aSelector: string): void;

  forwardingTargetForSelector(aSelector: string): interop.Object;

  forwardInvocation(anInvocation: NSInvocation): void;

  methodSignatureForSelector(aSelector: string): NSMethodSignature;

  static instanceMethodSignatureForSelector(aSelector: string): NSMethodSignature;

  static isSubclassOfClass(aClass: interop.Object): boolean;

  static resolveClassMethod(sel: string): boolean;

  static resolveInstanceMethod(sel: string): boolean;

  static hash(): number;

  static superclass(): interop.Object;

  static class(): interop.Object;

  static description(): string;

  static debugDescription(): string;

  static version(): number;

  static setVersion(aVersion: number): void;

  readonly classForCoder: interop.Object;

  replacementObjectForCoder(coder: NSCoder): interop.Object;

  awakeAfterUsingCoder(coder: NSCoder): interop.Object;

  readonly autoContentAccessingProxy: interop.Object;

  attemptRecoveryFromErrorOptionIndexDelegateDidRecoverSelectorContextInfo(error: NSError, recoveryOptionIndex: number, delegate: interop.Object | null, didRecoverSelector: string | null, contextInfo: interop.PointerConvertible): void;

  attemptRecoveryFromErrorOptionIndex(error: NSError, recoveryOptionIndex: number): boolean;

  performSelectorWithObjectAfterDelayInModes(aSelector: string, anArgument: interop.Object | null, delay: number, modes: NSArray<interop.Object> | Array<interop.Object>): void;

  performSelectorWithObjectAfterDelay(aSelector: string, anArgument: interop.Object | null, delay: number): void;

  static cancelPreviousPerformRequestsWithTargetSelectorObject(aTarget: interop.Object, aSelector: string, anArgument: interop.Object | null): void;

  static cancelPreviousPerformRequestsWithTarget(aTarget: interop.Object): void;

  fileManagerShouldProceedAfterError(fm: NSFileManager, errorInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): boolean;

  fileManagerWillProcessPath(fm: NSFileManager, path: string): void;

  static readonly accessInstanceVariablesDirectly: boolean;

  valueForKey(key: string): interop.Object;

  setValueForKey(value: interop.Object | null, key: string): void;

  validateValueForKeyError(ioValue: interop.PointerConvertible, inKey: string, outError: interop.PointerConvertible): boolean;

  mutableArrayValueForKey(key: string): NSMutableArray;

  mutableOrderedSetValueForKey(key: string): NSMutableOrderedSet;

  mutableSetValueForKey(key: string): NSMutableSet;

  valueForKeyPath(keyPath: string): interop.Object;

  setValueForKeyPath(value: interop.Object | null, keyPath: string): void;

  validateValueForKeyPathError(ioValue: interop.PointerConvertible, inKeyPath: string, outError: interop.PointerConvertible): boolean;

  mutableArrayValueForKeyPath(keyPath: string): NSMutableArray;

  mutableOrderedSetValueForKeyPath(keyPath: string): NSMutableOrderedSet;

  mutableSetValueForKeyPath(keyPath: string): NSMutableSet;

  valueForUndefinedKey(key: string): interop.Object;

  setValueForUndefinedKey(value: interop.Object | null, key: string): void;

  setNilValueForKey(key: string): void;

  dictionaryWithValuesForKeys(keys: NSArray<interop.Object> | Array<interop.Object>): NSDictionary;

  setValuesForKeysWithDictionary(keyedValues: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  static useStoredAccessor(): boolean;

  storedValueForKey(key: string): interop.Object;

  takeStoredValueForKey(value: interop.Object | null, key: string): void;

  takeValueForKey(value: interop.Object | null, key: string): void;

  takeValueForKeyPath(value: interop.Object | null, keyPath: string): void;

  handleQueryWithUnboundKey(key: string): interop.Object;

  handleTakeValueForUnboundKey(value: interop.Object | null, key: string): void;

  unableToSetNilForKey(key: string): void;

  valuesForKeys(keys: NSArray<interop.Object> | Array<interop.Object>): NSDictionary;

  takeValuesFromDictionary(properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  observeValueForKeyPathOfObjectChangeContext(keyPath: string | null, object: interop.Object | null, change: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, context: interop.PointerConvertible): void;

  addObserverForKeyPathOptionsContext(observer: NSObject, keyPath: string, options: interop.Enum<typeof NSKeyValueObservingOptions>, context: interop.PointerConvertible): void;

  removeObserverForKeyPathContext(observer: NSObject, keyPath: string, context: interop.PointerConvertible): void;

  removeObserverForKeyPath(observer: NSObject, keyPath: string): void;

  willChangeValueForKey(key: string): void;

  didChangeValueForKey(key: string): void;

  willChangeValuesAtIndexesForKey(changeKind: interop.Enum<typeof NSKeyValueChange>, indexes: NSIndexSet, key: string): void;

  didChangeValuesAtIndexesForKey(changeKind: interop.Enum<typeof NSKeyValueChange>, indexes: NSIndexSet, key: string): void;

  willChangeValueForKeyWithSetMutationUsingObjects(key: string, mutationKind: interop.Enum<typeof NSKeyValueSetMutationKind>, objects: NSSet): void;

  didChangeValueForKeyWithSetMutationUsingObjects(key: string, mutationKind: interop.Enum<typeof NSKeyValueSetMutationKind>, objects: NSSet): void;

  static keyPathsForValuesAffectingValueForKey(key: string): NSSet;

  static automaticallyNotifiesObserversForKey(key: string): boolean;

  get observationInfo(): interop.Pointer;
  set observationInfo(value: interop.PointerConvertible);

  setSharedObservers(sharedObservers: NSKeyValueSharedObserversSnapshot | null): void;

  readonly classForKeyedArchiver: interop.Object;

  replacementObjectForKeyedArchiver(archiver: NSKeyedArchiver): interop.Object;

  static classFallbacksForKeyedArchiver(): NSArray;

  static classForKeyedUnarchiver(): interop.Object;

  performSelectorOnMainThreadWithObjectWaitUntilDoneModes(aSelector: string, arg: interop.Object | null, wait: boolean, array: NSArray<interop.Object> | Array<interop.Object> | null): void;

  performSelectorOnMainThreadWithObjectWaitUntilDone(aSelector: string, arg: interop.Object | null, wait: boolean): void;

  performSelectorOnThreadWithObjectWaitUntilDoneModes(aSelector: string, thr: NSThread, arg: interop.Object | null, wait: boolean, array: NSArray<interop.Object> | Array<interop.Object> | null): void;

  performSelectorOnThreadWithObjectWaitUntilDone(aSelector: string, thr: NSThread, arg: interop.Object | null, wait: boolean): void;

  performSelectorInBackgroundWithObject(aSelector: string, arg: interop.Object | null): void;

  provideImageDataBytesPerRowOriginSizeUserInfo(data: interop.PointerConvertible, rowbytes: number, x: number, y: number, width: number, height: number, info: interop.Object | null): void;

  accessibilityElementCount(): number;

  accessibilityElementAtIndex(index: number): interop.Object;

  indexOfAccessibilityElement(element: interop.Object): number;

  get accessibilityElements(): NSArray;
  set accessibilityElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityContainerType: interop.Enum<typeof UIAccessibilityContainerType>;

  get automationElements(): NSArray;
  set automationElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCustomRotorsBlock: () => NSArray;

  isAccessibilityElement: boolean;

  accessibilityLabel: string;

  accessibilityAttributedLabel: NSAttributedString;

  accessibilityHint: string;

  accessibilityAttributedHint: NSAttributedString;

  accessibilityValue: string;

  accessibilityAttributedValue: NSAttributedString;

  accessibilityTraits: number;

  accessibilityFrame: CGRect;

  accessibilityPath: UIBezierPath;

  accessibilityActivationPoint: CGPoint;

  accessibilityLanguage: string;

  accessibilityElementsHidden: boolean;

  accessibilityViewIsModal: boolean;

  shouldGroupAccessibilityChildren: boolean;

  accessibilityNavigationStyle: interop.Enum<typeof UIAccessibilityNavigationStyle>;

  accessibilityRespondsToUserInteraction: boolean;

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityTextualContext: string;

  accessibilityDirectTouchOptions: interop.Enum<typeof UIAccessibilityDirectTouchOptions>;

  accessibilityExpandedStatus: interop.Enum<typeof UIAccessibilityExpandedStatus>;

  isAccessibilityElementBlock: () => boolean;

  accessibilityLabelBlock: () => string;

  accessibilityValueBlock: () => string;

  accessibilityHintBlock: () => string;

  accessibilityTraitsBlock: () => number;

  accessibilityIdentifierBlock: () => string;

  accessibilityHeaderElementsBlock: () => NSArray;

  accessibilityAttributedLabelBlock: () => NSAttributedString;

  accessibilityAttributedHintBlock: () => NSAttributedString;

  accessibilityLanguageBlock: () => string;

  accessibilityTextualContextBlock: () => string;

  accessibilityUserInputLabelsBlock: () => NSArray;

  accessibilityAttributedUserInputLabelsBlock: () => NSArray;

  accessibilityAttributedValueBlock: () => NSAttributedString;

  accessibilityElementsHiddenBlock: () => boolean;

  accessibilityRespondsToUserInteractionBlock: () => boolean;

  accessibilityViewIsModalBlock: () => boolean;

  accessibilityShouldGroupAccessibilityChildrenBlock: () => boolean;

  accessibilityExpandedStatusBlock: () => interop.Enum<typeof UIAccessibilityExpandedStatus>;

  accessibilityElementsBlock: () => NSArray;

  automationElementsBlock: () => NSArray;

  accessibilityContainerTypeBlock: () => interop.Enum<typeof UIAccessibilityContainerType>;

  accessibilityActivationPointBlock: () => CGPoint;

  accessibilityFrameBlock: () => CGRect;

  accessibilityNavigationStyleBlock: () => interop.Enum<typeof UIAccessibilityNavigationStyle>;

  accessibilityPathBlock: () => UIBezierPath;

  accessibilityActivateBlock: () => boolean;

  accessibilityIncrementBlock: () => void;

  accessibilityDecrementBlock: () => void;

  accessibilityPerformEscapeBlock: () => boolean;

  accessibilityMagicTapBlock: () => boolean;

  accessibilityCustomActionsBlock: () => NSArray;

  accessibilityElementDidBecomeFocused(): void;

  accessibilityElementDidLoseFocus(): void;

  accessibilityElementIsFocused(): boolean;

  accessibilityAssistiveTechnologyFocusedIdentifiers(): NSSet;

  accessibilityActivate(): boolean;

  accessibilityIncrement(): void;

  accessibilityDecrement(): void;

  accessibilityZoomInAtPoint(point: CGPoint): boolean;

  accessibilityZoomOutAtPoint(point: CGPoint): boolean;

  accessibilityScroll(direction: interop.Enum<typeof UIAccessibilityScrollDirection>): boolean;

  accessibilityPerformEscape(): boolean;

  accessibilityPerformMagicTap(): boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityDragSourceDescriptors(): NSArray;
  set accessibilityDragSourceDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityDropPointDescriptors(): NSArray;
  set accessibilityDropPointDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHitTestWithEvent(point: CGPoint, event: UIEvent | null): interop.Object;

  accessibilityPreviousTextNavigationElement: interop.Object;

  accessibilityNextTextNavigationElement: interop.Object;

  accessibilityPreviousTextNavigationElementBlock: () => interop.Object;

  accessibilityNextTextNavigationElementBlock: () => interop.Object;

  accessibilityTextInputResponder: UITextInput;

  accessibilityTextInputResponderBlock: () => UITextInput;

  awakeFromNib(): void;

  prepareForInterfaceBuilder(): void;

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

declare class NativeScriptEmbedder extends NSObject {
  readonly delegate: NativeScriptEmbedderDelegate;

  readonly windowScene: UIWindowScene;

  static sharedInstance(): NativeScriptEmbedder;

  static setup(): void;

  static boot(): void;
}

declare class OS_object extends NSObject {
  init(): this;
}

declare class NativeScriptUtils extends NSObject {
  static getSystemFontWeightItalicSymbolicTraits(size: number, weight: number, italic: boolean, symbolicTraits: interop.Enum<typeof UIFontDescriptorSymbolicTraits>): UIFont;

  static createUIFont(font: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): UIFont;

  static createMutableStringWithDetails(details: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSMutableAttributedString;

  static createMutableStringForSpanFontColorBackgroundColorTextDecorationBaselineOffset(text: string, font: UIFont, color: UIColor, backgroundColor: UIColor, textDecoration: string, baselineOffset: number): NSMutableAttributedString;

  static scaleImageWidthHeightScaleFactor(image: UIImage, width: number, height: number, scaleFactor: number): UIImage;

  static getImageDataFormatQuality(image: UIImage, format: string, quality: number): NSData;
}

declare class OS_os_workgroup extends OS_object {
  init(): this;
}

