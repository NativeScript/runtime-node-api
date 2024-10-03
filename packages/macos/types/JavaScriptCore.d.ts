/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const JSPropertyDescriptorSetKey: string;

declare const JSPropertyDescriptorWritableKey: string;

declare const kJSClassAttributeNoAutomaticPrototype: number;

declare const kJSClassAttributeNone: number;

declare const kJSPropertyAttributeDontDelete: number;

declare const kJSPropertyAttributeDontEnum: number;

declare const kJSPropertyAttributeNone: number;

declare const kJSClassDefinitionEmpty: JSClassDefinition;

declare const JSPropertyDescriptorConfigurableKey: string;

declare const JSPropertyDescriptorGetKey: string;

declare const JSPropertyDescriptorEnumerableKey: string;

declare const JSPropertyDescriptorValueKey: string;

declare const kJSPropertyAttributeReadOnly: number;

declare const JSType: {
  Undefined: 0,
  Null: 1,
  Boolean: 2,
  Number: 3,
  String: 4,
  Object: 5,
  Symbol: 6,
  BigInt: 7,
};

declare const JSRelationCondition: {
  Undefined: 0,
  Equal: 1,
  GreaterThan: 2,
  LessThan: 3,
};

declare const JSTypedArrayType: {
  Int8Array: 0,
  Int16Array: 1,
  Int32Array: 2,
  Uint8Array: 3,
  Uint8ClampedArray: 4,
  Uint16Array: 5,
  Uint32Array: 6,
  Float32Array: 7,
  Float64Array: 8,
  ArrayBuffer: 9,
  None: 10,
  BigInt64Array: 11,
  BigUint64Array: 12,
};

declare class JSStaticFunction {
  constructor(init?: JSStaticFunction);
  name: string | null;
  callAsFunction: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: interop.PointerConvertible, p6: interop.PointerConvertible) => interop.Pointer | null;
  attributes: number;
}

declare class OpaqueJSString {
  constructor(init?: OpaqueJSString);
}

declare class OpaqueJSValue {
  constructor(init?: OpaqueJSValue);
}

declare class OpaqueJSPropertyNameAccumulator {
  constructor(init?: OpaqueJSPropertyNameAccumulator);
}

declare class OpaqueJSPropertyNameArray {
  constructor(init?: OpaqueJSPropertyNameArray);
}

declare class OpaqueJSClass {
  constructor(init?: OpaqueJSClass);
}

declare class OpaqueJSContextGroup {
  constructor(init?: OpaqueJSContextGroup);
}

declare class JSClassDefinition {
  constructor(init?: JSClassDefinition);
  version: number;
  attributes: number;
  className: string | null;
  parentClass: interop.Pointer;
  staticValues: interop.Pointer;
  staticFunctions: interop.Pointer;
  initialize: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void | null;
  finalize: (p1: interop.PointerConvertible) => void | null;
  hasProperty: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible) => boolean | null;
  getProperty: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => interop.Pointer | null;
  setProperty: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => boolean | null;
  deleteProperty: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => boolean | null;
  getPropertyNames: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible) => void | null;
  callAsFunction: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: interop.PointerConvertible, p6: interop.PointerConvertible) => interop.Pointer | null;
  callAsConstructor: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => interop.Pointer | null;
  hasInstance: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => boolean | null;
  convertToType: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.Enum<typeof JSType>, p4: interop.PointerConvertible) => interop.Pointer | null;
}

declare class OpaqueJSContext {
  constructor(init?: OpaqueJSContext);
}

declare class JSStaticValue {
  constructor(init?: JSStaticValue);
  name: string | null;
  getProperty: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => interop.Pointer | null;
  setProperty: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => boolean | null;
  attributes: number;
}

declare function JSEvaluateScript(ctx: interop.PointerConvertible, script: interop.PointerConvertible, thisObject: interop.PointerConvertible, sourceURL: interop.PointerConvertible, startingLineNumber: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSCheckScriptSyntax(ctx: interop.PointerConvertible, script: interop.PointerConvertible, sourceURL: interop.PointerConvertible, startingLineNumber: number, exception: interop.PointerConvertible): boolean;

declare function JSGarbageCollect(ctx: interop.PointerConvertible): void;

declare function JSValueGetType(ctx: interop.PointerConvertible, value: interop.PointerConvertible): interop.Enum<typeof JSType>;

declare function JSValueIsUndefined(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsNull(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsBoolean(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsNumber(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsString(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsSymbol(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsBigInt(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsObject(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsObjectOfClass(ctx: interop.PointerConvertible, value: interop.PointerConvertible, jsClass: interop.PointerConvertible): boolean;

declare function JSValueIsArray(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueIsDate(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueGetTypedArrayType(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Enum<typeof JSTypedArrayType>;

declare function JSValueIsEqual(ctx: interop.PointerConvertible, a: interop.PointerConvertible, b: interop.PointerConvertible, exception: interop.PointerConvertible): boolean;

declare function JSValueIsStrictEqual(ctx: interop.PointerConvertible, a: interop.PointerConvertible, b: interop.PointerConvertible): boolean;

declare function JSValueIsInstanceOfConstructor(ctx: interop.PointerConvertible, value: interop.PointerConvertible, constructor: interop.PointerConvertible, exception: interop.PointerConvertible): boolean;

declare function JSValueCompare(ctx: interop.PointerConvertible, left: interop.PointerConvertible, right: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Enum<typeof JSRelationCondition>;

declare function JSValueCompareInt64(ctx: interop.PointerConvertible, left: interop.PointerConvertible, right: number, exception: interop.PointerConvertible): interop.Enum<typeof JSRelationCondition>;

declare function JSValueCompareUInt64(ctx: interop.PointerConvertible, left: interop.PointerConvertible, right: number, exception: interop.PointerConvertible): interop.Enum<typeof JSRelationCondition>;

declare function JSValueCompareDouble(ctx: interop.PointerConvertible, left: interop.PointerConvertible, right: number, exception: interop.PointerConvertible): interop.Enum<typeof JSRelationCondition>;

declare function JSValueMakeUndefined(ctx: interop.PointerConvertible): interop.Pointer;

declare function JSValueMakeNull(ctx: interop.PointerConvertible): interop.Pointer;

declare function JSValueMakeBoolean(ctx: interop.PointerConvertible, boolean: boolean): interop.Pointer;

declare function JSValueMakeNumber(ctx: interop.PointerConvertible, number: number): interop.Pointer;

declare function JSValueMakeString(ctx: interop.PointerConvertible, string: interop.PointerConvertible): interop.Pointer;

declare function JSValueMakeSymbol(ctx: interop.PointerConvertible, description: interop.PointerConvertible): interop.Pointer;

declare function JSBigIntCreateWithDouble(ctx: interop.PointerConvertible, value: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSBigIntCreateWithInt64(ctx: interop.PointerConvertible, integer: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSBigIntCreateWithUInt64(ctx: interop.PointerConvertible, integer: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSBigIntCreateWithString(ctx: interop.PointerConvertible, string: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSValueMakeFromJSONString(ctx: interop.PointerConvertible, string: interop.PointerConvertible): interop.Pointer;

declare function JSValueCreateJSONString(ctx: interop.PointerConvertible, value: interop.PointerConvertible, indent: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSValueToBoolean(ctx: interop.PointerConvertible, value: interop.PointerConvertible): boolean;

declare function JSValueToNumber(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSValueToInt32(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSValueToUInt32(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSValueToInt64(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSValueToUInt64(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSValueToStringCopy(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSValueToObject(ctx: interop.PointerConvertible, value: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSValueProtect(ctx: interop.PointerConvertible, value: interop.PointerConvertible): void;

declare function JSValueUnprotect(ctx: interop.PointerConvertible, value: interop.PointerConvertible): void;

declare function JSClassCreate(definition: interop.PointerConvertible): interop.Pointer;

declare function JSClassRetain(jsClass: interop.PointerConvertible): interop.Pointer;

declare function JSClassRelease(jsClass: interop.PointerConvertible): void;

declare function JSObjectMake(ctx: interop.PointerConvertible, jsClass: interop.PointerConvertible, data: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeFunctionWithCallback(ctx: interop.PointerConvertible, name: interop.PointerConvertible, callAsFunction: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: interop.PointerConvertible, p6: interop.PointerConvertible) => interop.Pointer): interop.Pointer;

declare function JSObjectMakeConstructor(ctx: interop.PointerConvertible, jsClass: interop.PointerConvertible, callAsConstructor: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => interop.Pointer): interop.Pointer;

declare function JSObjectMakeArray(ctx: interop.PointerConvertible, argumentCount: number, arguments$: interop.Pointer, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeDate(ctx: interop.PointerConvertible, argumentCount: number, arguments$: interop.Pointer, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeError(ctx: interop.PointerConvertible, argumentCount: number, arguments$: interop.Pointer, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeRegExp(ctx: interop.PointerConvertible, argumentCount: number, arguments$: interop.Pointer, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeDeferredPromise(ctx: interop.PointerConvertible, resolve: interop.PointerConvertible, reject: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeFunction(ctx: interop.PointerConvertible, name: interop.PointerConvertible, parameterCount: number, parameterNames: interop.Pointer, body: interop.PointerConvertible, sourceURL: interop.PointerConvertible, startingLineNumber: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectGetPrototype(ctx: interop.PointerConvertible, object: interop.PointerConvertible): interop.Pointer;

declare function JSObjectSetPrototype(ctx: interop.PointerConvertible, object: interop.PointerConvertible, value: interop.PointerConvertible): void;

declare function JSObjectHasProperty(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyName: interop.PointerConvertible): boolean;

declare function JSObjectGetProperty(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyName: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectSetProperty(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyName: interop.PointerConvertible, value: interop.PointerConvertible, attributes: number, exception: interop.PointerConvertible): void;

declare function JSObjectDeleteProperty(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyName: interop.PointerConvertible, exception: interop.PointerConvertible): boolean;

declare function JSObjectHasPropertyForKey(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyKey: interop.PointerConvertible, exception: interop.PointerConvertible): boolean;

declare function JSObjectGetPropertyForKey(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyKey: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectSetPropertyForKey(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyKey: interop.PointerConvertible, value: interop.PointerConvertible, attributes: number, exception: interop.PointerConvertible): void;

declare function JSObjectDeletePropertyForKey(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyKey: interop.PointerConvertible, exception: interop.PointerConvertible): boolean;

declare function JSObjectGetPropertyAtIndex(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyIndex: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectSetPropertyAtIndex(ctx: interop.PointerConvertible, object: interop.PointerConvertible, propertyIndex: number, value: interop.PointerConvertible, exception: interop.PointerConvertible): void;

declare function JSObjectGetPrivate(object: interop.PointerConvertible): interop.Pointer;

declare function JSObjectSetPrivate(object: interop.PointerConvertible, data: interop.PointerConvertible): boolean;

declare function JSObjectIsFunction(ctx: interop.PointerConvertible, object: interop.PointerConvertible): boolean;

declare function JSObjectCallAsFunction(ctx: interop.PointerConvertible, object: interop.PointerConvertible, thisObject: interop.PointerConvertible, argumentCount: number, arguments$: interop.Pointer, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectIsConstructor(ctx: interop.PointerConvertible, object: interop.PointerConvertible): boolean;

declare function JSObjectCallAsConstructor(ctx: interop.PointerConvertible, object: interop.PointerConvertible, argumentCount: number, arguments$: interop.Pointer, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectCopyPropertyNames(ctx: interop.PointerConvertible, object: interop.PointerConvertible): interop.Pointer;

declare function JSPropertyNameArrayRetain(array: interop.PointerConvertible): interop.Pointer;

declare function JSPropertyNameArrayRelease(array: interop.PointerConvertible): void;

declare function JSPropertyNameArrayGetCount(array: interop.PointerConvertible): number;

declare function JSPropertyNameArrayGetNameAtIndex(array: interop.PointerConvertible, index: number): interop.Pointer;

declare function JSPropertyNameAccumulatorAddName(accumulator: interop.PointerConvertible, propertyName: interop.PointerConvertible): void;

declare function JSContextGroupCreate(): interop.Pointer;

declare function JSContextGroupRetain(group: interop.PointerConvertible): interop.Pointer;

declare function JSContextGroupRelease(group: interop.PointerConvertible): void;

declare function JSGlobalContextCreate(globalObjectClass: interop.PointerConvertible): interop.Pointer;

declare function JSGlobalContextCreateInGroup(group: interop.PointerConvertible, globalObjectClass: interop.PointerConvertible): interop.Pointer;

declare function JSGlobalContextRetain(ctx: interop.PointerConvertible): interop.Pointer;

declare function JSGlobalContextRelease(ctx: interop.PointerConvertible): void;

declare function JSContextGetGlobalObject(ctx: interop.PointerConvertible): interop.Pointer;

declare function JSContextGetGroup(ctx: interop.PointerConvertible): interop.Pointer;

declare function JSContextGetGlobalContext(ctx: interop.PointerConvertible): interop.Pointer;

declare function JSGlobalContextCopyName(ctx: interop.PointerConvertible): interop.Pointer;

declare function JSGlobalContextSetName(ctx: interop.PointerConvertible, name: interop.PointerConvertible): void;

declare function JSGlobalContextIsInspectable(ctx: interop.PointerConvertible): boolean;

declare function JSGlobalContextSetInspectable(ctx: interop.PointerConvertible, inspectable: boolean): void;

declare function JSStringCreateWithCharacters(chars: interop.PointerConvertible, numChars: number): interop.Pointer;

declare function JSStringCreateWithUTF8CString(string: string): interop.Pointer;

declare function JSStringRetain(string: interop.PointerConvertible): interop.Pointer;

declare function JSStringRelease(string: interop.PointerConvertible): void;

declare function JSStringGetLength(string: interop.PointerConvertible): number;

declare function JSStringGetCharactersPtr(string: interop.PointerConvertible): interop.Pointer;

declare function JSStringGetMaximumUTF8CStringSize(string: interop.PointerConvertible): number;

declare function JSStringGetUTF8CString(string: interop.PointerConvertible, buffer: string, bufferSize: number): number;

declare function JSStringIsEqual(a: interop.PointerConvertible, b: interop.PointerConvertible): boolean;

declare function JSStringIsEqualToUTF8CString(a: interop.PointerConvertible, b: string): boolean;

declare function JSObjectMakeTypedArray(ctx: interop.PointerConvertible, arrayType: interop.Enum<typeof JSTypedArrayType>, length: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeTypedArrayWithBytesNoCopy(ctx: interop.PointerConvertible, arrayType: interop.Enum<typeof JSTypedArrayType>, bytes: interop.PointerConvertible, byteLength: number, bytesDeallocator: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void, deallocatorContext: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeTypedArrayWithArrayBuffer(ctx: interop.PointerConvertible, arrayType: interop.Enum<typeof JSTypedArrayType>, buffer: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeTypedArrayWithArrayBufferAndOffset(ctx: interop.PointerConvertible, arrayType: interop.Enum<typeof JSTypedArrayType>, buffer: interop.PointerConvertible, byteOffset: number, length: number, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectGetTypedArrayBytesPtr(ctx: interop.PointerConvertible, object: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectGetTypedArrayLength(ctx: interop.PointerConvertible, object: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSObjectGetTypedArrayByteLength(ctx: interop.PointerConvertible, object: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSObjectGetTypedArrayByteOffset(ctx: interop.PointerConvertible, object: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSObjectGetTypedArrayBuffer(ctx: interop.PointerConvertible, object: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectMakeArrayBufferWithBytesNoCopy(ctx: interop.PointerConvertible, bytes: interop.PointerConvertible, byteLength: number, bytesDeallocator: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void, deallocatorContext: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectGetArrayBufferBytesPtr(ctx: interop.PointerConvertible, object: interop.PointerConvertible, exception: interop.PointerConvertible): interop.Pointer;

declare function JSObjectGetArrayBufferByteLength(ctx: interop.PointerConvertible, object: interop.PointerConvertible, exception: interop.PointerConvertible): number;

declare function JSStringCreateWithCFString(string: interop.PointerConvertible): interop.Pointer;

declare function JSStringCopyCFString(alloc: interop.PointerConvertible, string: interop.PointerConvertible): interop.Pointer;

declare interface JSExport {
}

declare class JSExport extends NativeObject implements JSExport {
}

declare class JSVirtualMachine extends NSObject {
  init(): this;

  addManagedReferenceWithOwner(object: interop.Object, owner: interop.Object): void;

  removeManagedReferenceWithOwner(object: interop.Object, owner: interop.Object): void;
}

declare class JSManagedValue extends NSObject {
  static managedValueWithValue(value: JSValue): JSManagedValue;

  static managedValueWithValueAndOwner(value: JSValue, owner: interop.Object): JSManagedValue;

  initWithValue(value: JSValue): this;

  readonly value: JSValue;
}

declare class JSContext extends NSObject {
  init(): this;

  initWithVirtualMachine(virtualMachine: JSVirtualMachine): this;

  evaluateScript(script: string): JSValue;

  evaluateScriptWithSourceURL(script: string, sourceURL: NSURL): JSValue;

  static currentContext(): JSContext;

  static currentCallee(): JSValue;

  static currentThis(): JSValue;

  static currentArguments(): NSArray;

  readonly globalObject: JSValue;

  exception: JSValue;

  exceptionHandler: (p1: JSContext, p2: JSValue) => void;

  readonly virtualMachine: JSVirtualMachine;

  name: string;

  isInspectable: boolean;

  objectForKeyedSubscript(key: interop.Object): JSValue;

  setObjectForKeyedSubscript(object: interop.Object, key: NSObject): void;

  static contextWithJSGlobalContextRef(jsGlobalContextRef: interop.PointerConvertible): JSContext;

  readonly JSGlobalContextRef: interop.Pointer;
}

declare class JSValue extends NSObject {
  readonly context: JSContext;

  static valueWithObjectInContext(value: interop.Object, context: JSContext): JSValue;

  static valueWithBoolInContext(value: boolean, context: JSContext): JSValue;

  static valueWithDoubleInContext(value: number, context: JSContext): JSValue;

  static valueWithInt32InContext(value: number, context: JSContext): JSValue;

  static valueWithUInt32InContext(value: number, context: JSContext): JSValue;

  static valueWithNewObjectInContext(context: JSContext): JSValue;

  static valueWithNewArrayInContext(context: JSContext): JSValue;

  static valueWithNewRegularExpressionFromPatternFlagsInContext(pattern: string, flags: string, context: JSContext): JSValue;

  static valueWithNewErrorFromMessageInContext(message: string, context: JSContext): JSValue;

  static valueWithNewPromiseInContextFromExecutor(context: JSContext, callback: (p1: JSValue, p2: JSValue) => void): JSValue;

  static valueWithNewPromiseResolvedWithResultInContext(result: interop.Object, context: JSContext): JSValue;

  static valueWithNewPromiseRejectedWithReasonInContext(reason: interop.Object, context: JSContext): JSValue;

  static valueWithNewSymbolFromDescriptionInContext(description: string, context: JSContext): JSValue;

  static valueWithNewBigIntFromStringInContext(string: string, context: JSContext): JSValue;

  static valueWithNewBigIntFromInt64InContext(int64: number, context: JSContext): JSValue;

  static valueWithNewBigIntFromUInt64InContext(uint64: number, context: JSContext): JSValue;

  static valueWithNewBigIntFromDoubleInContext(value: number, context: JSContext): JSValue;

  static valueWithNullInContext(context: JSContext): JSValue;

  static valueWithUndefinedInContext(context: JSContext): JSValue;

  toObject(): interop.Object;

  toObjectOfClass(expectedClass: interop.Object): interop.Object;

  toBool(): boolean;

  toDouble(): number;

  toInt32(): number;

  toUInt32(): number;

  toInt64(): number;

  toUInt64(): number;

  toNumber(): NSNumber;

  toString(): string;

  toDate(): NSDate;

  toArray(): NSArray;

  toDictionary(): NSDictionary;

  readonly isUndefined: boolean;

  readonly isNull: boolean;

  readonly isBoolean: boolean;

  readonly isNumber: boolean;

  readonly isString: boolean;

  readonly isObject: boolean;

  readonly isArray: boolean;

  readonly isDate: boolean;

  readonly isSymbol: boolean;

  readonly isBigInt: boolean;

  isInstanceOf(value: interop.Object): boolean;

  isEqualToObject(value: interop.Object): boolean;

  isEqualWithTypeCoercionToObject(value: interop.Object): boolean;

  compareJSValue(other: JSValue): interop.Enum<typeof JSRelationCondition>;

  compareInt64(other: number): interop.Enum<typeof JSRelationCondition>;

  compareUInt64(other: number): interop.Enum<typeof JSRelationCondition>;

  compareDouble(other: number): interop.Enum<typeof JSRelationCondition>;

  callWithArguments(arguments$: NSArray<interop.Object> | Array<interop.Object>): JSValue;

  constructWithArguments(arguments$: NSArray<interop.Object> | Array<interop.Object>): JSValue;

  invokeMethodWithArguments(method: string, arguments$: NSArray<interop.Object> | Array<interop.Object>): JSValue;

  static valueWithPointInContext(point: CGPoint, context: JSContext): JSValue;

  static valueWithRangeInContext(range: _NSRange, context: JSContext): JSValue;

  static valueWithRectInContext(rect: CGRect, context: JSContext): JSValue;

  static valueWithSizeInContext(size: CGSize, context: JSContext): JSValue;

  toPoint(): CGPoint;

  toRange(): _NSRange;

  toRect(): CGRect;

  toSize(): CGSize;

  valueForProperty(property: interop.Object): JSValue;

  setValueForProperty(value: interop.Object, property: interop.Object): void;

  deleteProperty(property: interop.Object): boolean;

  hasProperty(property: interop.Object): boolean;

  definePropertyDescriptor(property: interop.Object, descriptor: interop.Object): void;

  valueAtIndex(index: number): JSValue;

  setValueAtIndex(value: interop.Object, index: number): void;

  objectForKeyedSubscript(key: interop.Object): JSValue;

  objectAtIndexedSubscript(index: number): JSValue;

  setObjectForKeyedSubscript(object: interop.Object, key: interop.Object): void;

  setObjectAtIndexedSubscript(object: interop.Object, index: number): void;

  static valueWithJSValueRefInContext(value: interop.PointerConvertible, context: JSContext): JSValue;

  readonly JSValueRef: interop.Pointer;
}

