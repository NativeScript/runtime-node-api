/// <reference types="@nativescript/objc-node-api" />

declare const os_clockid_t: {
  OS_CLOCK_MACH_ABSOLUTE_TIME: 32,
};

declare class __sFILEX {
  constructor(init?: __sFILEX);
}

declare class simd_quatd {
  constructor(init?: simd_quatd);
  vector: unknown /* ext vector */;
}

declare class simd_double4x4 {
  constructor(init?: simd_double4x4);
  columns: unknown /* const array */;
}

declare class simd_quatf {
  constructor(init?: simd_quatf);
  vector: unknown /* ext vector */;
}

declare class ProcessSerialNumber {
  constructor(init?: ProcessSerialNumber);
  highLongOfPSN: number;
  lowLongOfPSN: number;
}

declare class HFSUniStr255 {
  constructor(init?: HFSUniStr255);
  length: number;
  unicode: unknown /* const array */;
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

declare class mach_msg_header_t {
  constructor(init?: mach_msg_header_t);
  msgh_bits: number;
  msgh_size: number;
  msgh_remote_port: number;
  msgh_local_port: number;
  msgh_voucher_port: number;
  msgh_id: number;
}

declare class Rect {
  constructor(init?: Rect);
  top: number;
  left: number;
  bottom: number;
  right: number;
}

declare class _acl {
  constructor(init?: _acl);
}

declare class UnsignedWide {
  constructor(init?: UnsignedWide);
  lo: number;
  hi: number;
}

declare class simd_float4x3 {
  constructor(init?: simd_float4x3);
  columns: unknown /* const array */;
}

declare class Point {
  constructor(init?: Point);
  v: number;
  h: number;
}

declare class os_workgroup_attr_opaque_s {
  constructor(init?: os_workgroup_attr_opaque_s);
  sig: number;
  opaque: unknown /* const array */;
}

declare class __sbuf {
  constructor(init?: __sbuf);
  _base: interop.Pointer;
  _size: number;
}

declare class _xpc_type_s {
  constructor(init?: _xpc_type_s);
}

declare class simd_float2x2 {
  constructor(init?: simd_float2x2);
  columns: unknown /* const array */;
}

declare class wide {
  constructor(init?: wide);
  lo: number;
  hi: number;
}

declare class simd_float4x4 {
  constructor(init?: simd_float4x4);
  columns: unknown /* const array */;
}

declare class simd_float3x3 {
  constructor(init?: simd_float3x3);
  columns: unknown /* const array */;
}

declare class Float80 {
  constructor(init?: Float80);
  exp: number;
  man: unknown /* const array */;
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

  URLResourceDataDidBecomeAvailable(sender: NSURL, newBytes: NSData): void;

  URLResourceDidFinishLoading(sender: NSURL): void;

  URLResourceDidCancelLoading(sender: NSURL): void;

  URLResourceDidFailLoadingWithReason(sender: NSURL, reason: string): void;

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

  static setKeysTriggerChangeNotificationsForDependentKey(keys: NSArray<interop.Object> | Array<interop.Object>, dependentKey: string): void;

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

  readonly classForArchiver: interop.Object;

  replacementObjectForArchiver(archiver: NSArchiver): interop.Object;

  readonly classForPortCoder: interop.Object;

  replacementObjectForPortCoder(coder: NSPortCoder): interop.Object;

  readonly classDescription: NSClassDescription;

  readonly attributeKeys: NSArray;

  readonly toOneRelationshipKeys: NSArray;

  readonly toManyRelationshipKeys: NSArray;

  inverseForRelationshipKey(relationshipKey: string): string;

  scriptingValueForSpecifier(objectSpecifier: NSScriptObjectSpecifier): interop.Object;

  get scriptingProperties(): NSDictionary;
  set scriptingProperties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  copyScriptingValueForKeyWithProperties(value: interop.Object, key: string, properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): interop.Object;

  newScriptingObjectOfClassForValueForKeyWithContentsValueProperties(objectClass: interop.Object, key: string, contentsValue: interop.Object | null, properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): interop.Object;

  readonly classCode: number;

  readonly className: string;

  valueAtIndexInPropertyWithKey(index: number, key: string): interop.Object;

  valueWithNameInPropertyWithKey(name: string, key: string): interop.Object;

  valueWithUniqueIDInPropertyWithKey(uniqueID: interop.Object, key: string): interop.Object;

  insertValueAtIndexInPropertyWithKey(value: interop.Object, index: number, key: string): void;

  removeValueAtIndexFromPropertyWithKey(index: number, key: string): void;

  replaceValueAtIndexInPropertyWithKeyWithValue(index: number, key: string, value: interop.Object): void;

  insertValueInPropertyWithKey(value: interop.Object, key: string): void;

  coerceValueForKey(value: interop.Object | null, key: string): interop.Object;

  readonly objectSpecifier: NSScriptObjectSpecifier;

  indicesOfObjectsByEvaluatingObjectSpecifier(specifier: NSScriptObjectSpecifier): NSArray;

  isEqualTo(object: interop.Object | null): boolean;

  isLessThanOrEqualTo(object: interop.Object | null): boolean;

  isLessThan(object: interop.Object | null): boolean;

  isGreaterThanOrEqualTo(object: interop.Object | null): boolean;

  isGreaterThan(object: interop.Object | null): boolean;

  isNotEqualTo(object: interop.Object | null): boolean;

  doesContain(object: interop.Object): boolean;

  isLike(object: string): boolean;

  isCaseInsensitiveLike(object: string): boolean;

  scriptingIsEqualTo(object: interop.Object): boolean;

  scriptingIsLessThanOrEqualTo(object: interop.Object): boolean;

  scriptingIsLessThan(object: interop.Object): boolean;

  scriptingIsGreaterThanOrEqualTo(object: interop.Object): boolean;

  scriptingIsGreaterThan(object: interop.Object): boolean;

  scriptingBeginsWith(object: interop.Object): boolean;

  scriptingEndsWith(object: interop.Object): boolean;

  scriptingContains(object: interop.Object): boolean;

  provideImageDataBytesPerRowOriginSizeUserInfo(data: interop.PointerConvertible, rowbytes: number, x: number, y: number, width: number, height: number, info: interop.Object | null): void;

  pasteboardProvideDataForType(sender: NSPasteboard, type: string): void;

  pasteboardChangedOwner(sender: NSPasteboard): void;

  namesOfPromisedFilesDroppedAtDestination(dropDestination: NSURL): NSArray;

  draggingSourceOperationMaskForLocal(flag: boolean): interop.Enum<typeof NSDragOperation>;

  draggedImageBeganAt(image: NSImage, screenPoint: CGPoint): void;

  draggedImageEndedAtOperation(image: NSImage, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  draggedImageMovedTo(image: NSImage, screenPoint: CGPoint): void;

  ignoreModifierKeysWhileDragging(): boolean;

  draggedImageEndedAtDeposited(image: NSImage, screenPoint: CGPoint, flag: boolean): void;

  layerShouldInheritContentsScaleFromWindow(layer: CALayer, newScale: number, window: NSWindow): boolean;

  viewStringForToolTipPointUserData(view: NSView, tag: number, point: CGPoint, data: interop.PointerConvertible): string;

  validateMenuItem(menuItem: NSMenuItem): boolean;

  fontManagerWillIncludeFont(sender: interop.Object, fontName: string): boolean;

  changeFont(sender: interop.Object | null): void;

  accessibilityAttributeNames(): NSArray;

  accessibilityAttributeValue(attribute: string): interop.Object;

  accessibilityIsAttributeSettable(attribute: string): boolean;

  accessibilitySetValueForAttribute(value: interop.Object | null, attribute: string): void;

  accessibilityParameterizedAttributeNames(): NSArray;

  accessibilityAttributeValueForParameter(attribute: string, parameter: interop.Object | null): interop.Object;

  accessibilityActionNames(): NSArray;

  accessibilityActionDescription(action: string): string;

  accessibilityPerformAction(action: string): void;

  accessibilityIsIgnored(): boolean;

  accessibilityHitTest(point: CGPoint): interop.Object;

  readonly accessibilityFocusedUIElement: interop.Object;

  accessibilityIndexOfChild(child: interop.Object): number;

  accessibilityArrayAttributeCount(attribute: string): number;

  accessibilityArrayAttributeValuesIndexMaxCount(attribute: string, index: number, maxCount: number): NSArray;

  readonly accessibilityNotifiesWhenDestroyed: boolean;

  accessibilitySetOverrideValueForAttribute(value: interop.Object | null, attribute: string): boolean;

  static exposeBinding(binding: string): void;

  readonly exposedBindings: NSArray;

  valueClassForBinding(binding: string): interop.Object;

  bindToObjectWithKeyPathOptions(binding: string, observable: interop.Object, keyPath: string, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): void;

  unbind(binding: string): void;

  infoForBinding(binding: string): NSDictionary;

  optionDescriptionsForBinding(binding: string): NSArray;

  static setDefaultPlaceholderForMarkerWithBinding(placeholder: interop.Object | null, marker: interop.Object | null, binding: string): void;

  static defaultPlaceholderForMarkerWithBinding(marker: interop.Object | null, binding: string): interop.Object;

  discardEditing(): void;

  commitEditing(): boolean;

  commitEditingWithDelegateDidCommitSelectorContextInfo(delegate: interop.Object | null, didCommitSelector: string | null, contextInfo: interop.PointerConvertible): void;

  commitEditingAndReturnError(error: interop.PointerConvertible): boolean;

  objectDidBeginEditing(editor: NSEditor): void;

  objectDidEndEditing(editor: NSEditor): void;

  controlTextDidBeginEditing(obj: NSNotification): void;

  controlTextDidEndEditing(obj: NSNotification): void;

  controlTextDidChange(obj: NSNotification): void;

  validModesForFontPanel(fontPanel: NSFontPanel): interop.Enum<typeof NSFontPanelModeMask>;

  changeColor(sender: interop.Object | null): void;

  awakeFromNib(): void;

  prepareForInterfaceBuilder(): void;

  panelIsValidFilename(sender: interop.Object, filename: string): boolean;

  panelDirectoryDidChange(sender: interop.Object, path: string): void;

  panelCompareFilenameWithCaseSensitive(sender: interop.Object, name1: string, name2: string, caseSensitive: boolean): interop.Enum<typeof NSComparisonResult>;

  panelShouldShowFilename(sender: interop.Object, filename: string): boolean;

  textStorageWillProcessEditing(notification: NSNotification): void;

  textStorageDidProcessEditing(notification: NSNotification): void;

  validateToolbarItem(item: NSToolbarItem): boolean;

  tableViewWriteRowsToPasteboard(tableView: NSTableView, rows: NSArray<interop.Object> | Array<interop.Object>, pboard: NSPasteboard): boolean;

  applicationDelegateHandlesKey(sender: NSApplication, key: string): boolean;

  static webScriptNameForSelector(selector: string): string;

  static isSelectorExcludedFromWebScript(selector: string): boolean;

  static webScriptNameForKey(name: string): string;

  static isKeyExcludedFromWebScript(name: string): boolean;

  invokeUndefinedMethodFromWebScriptWithArguments(name: string, arguments$: NSArray<interop.Object> | Array<interop.Object>): interop.Object;

  invokeDefaultMethodWithArguments(arguments$: NSArray<interop.Object> | Array<interop.Object>): interop.Object;

  finalizeForWebScript(): void;

  webPlugInInitialize(): void;

  webPlugInStart(): void;

  webPlugInStop(): void;

  webPlugInDestroy(): void;

  webPlugInSetIsSelected(isSelected: boolean): void;

  readonly objectForWebScript: interop.Object;

  webPlugInMainResourceDidReceiveResponse(response: NSURLResponse): void;

  webPlugInMainResourceDidReceiveData(data: NSData): void;

  webPlugInMainResourceDidFailWithError(error: NSError): void;

  webPlugInMainResourceDidFinishLoading(): void;

  webPlugInContainerLoadRequestInFrame(request: NSURLRequest, target: string): void;

  webPlugInContainerShowStatus(message: string): void;

  readonly webPlugInContainerSelectionColor: NSColor;

  readonly webFrame: WebFrame;

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

declare class OS_os_workgroup extends OS_object {
  init(): this;
}

declare class OS_object extends NSObject {
  init(): this;
}

