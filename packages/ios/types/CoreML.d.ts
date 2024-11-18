/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const MLModelErrorDomain: string;

declare const MLModelCreatorDefinedKey: string;

declare const MLModelLicenseKey: string;

declare const MLModelAuthorKey: string;

declare const MLModelVersionStringKey: string;

declare const MLFeatureValueImageOptionCropRect: string;

declare const MLModelDescriptionKey: string;

declare const MLModelCollectionDidChangeNotification: string;

declare const MLFeatureValueImageOptionCropAndScale: string;

declare const MLModelError: {
  Generic: 0,
  FeatureType: 1,
  IO: 3,
  CustomLayer: 4,
  CustomModel: 5,
  Update: 6,
  Parameters: 7,
  ModelDecryptionKeyFetch: 8,
  ModelDecryption: 9,
  ModelCollection: 10,
  PredictionCancelled: 11,
};

declare const MLSpecializationStrategy: {
  Default: 0,
  FastPrediction: 1,
};

declare const MLImageSizeConstraintType: {
  Unspecified: 0,
  Enumerated: 2,
  Range: 3,
};

declare const MLFeatureType: {
  Invalid: 0,
  Int64: 1,
  Double: 2,
  String: 3,
  Image: 4,
  MultiArray: 5,
  Dictionary: 6,
  Sequence: 7,
  State: 8,
};

declare const MLMultiArrayShapeConstraintType: {
  Unspecified: 1,
  Enumerated: 2,
  Range: 3,
};

declare const MLUpdateProgressEvent: {
  TrainingBegin: 1,
  EpochEnd: 2,
  MiniBatchEnd: 4,
};

declare const MLTaskState: {
  Suspended: 1,
  Running: 2,
  Cancelling: 3,
  Completed: 4,
  Failed: 5,
};

declare const MLComputeUnits: {
  CPUOnly: 0,
  CPUAndGPU: 1,
  All: 2,
  CPUAndNeuralEngine: 3,
};

declare const MLReshapeFrequencyHint: {
  Frequent: 0,
  Infrequent: 1,
};

declare const MLMultiArrayDataType: {
  Double: 65600,
  Float64: 65600,
  Float32: 65568,
  Float16: 65552,
  Float: 65568,
  Int32: 131104,
};

declare function MLAllComputeDevices(): NSArray;

declare interface MLComputeDeviceProtocol extends NSObjectProtocol {
}

declare class MLComputeDeviceProtocol extends NativeObject implements MLComputeDeviceProtocol {
}

declare interface MLCustomModel {
  initWithModelDescriptionParameterDictionaryError(modelDescription: MLModelDescription, parameters: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): this;

  predictionFromFeaturesOptionsError(input: MLFeatureProvider, options: MLPredictionOptions, error: interop.PointerConvertible): MLFeatureProvider;

  predictionsFromBatchOptionsError?(inputBatch: MLBatchProvider, options: MLPredictionOptions, error: interop.PointerConvertible): MLBatchProvider;
}

declare class MLCustomModel extends NativeObject implements MLCustomModel {
}

declare interface MLBatchProvider {
  readonly count: number;

  featuresAtIndex(index: number): MLFeatureProvider;
}

declare class MLBatchProvider extends NativeObject implements MLBatchProvider {
}

declare interface MLCustomLayer {
  initWithParameterDictionaryError(parameters: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): this;

  setWeightDataError(weights: NSArray<interop.Object> | Array<interop.Object>, error: interop.PointerConvertible): boolean;

  outputShapesForInputShapesError(inputShapes: NSArray<interop.Object> | Array<interop.Object>, error: interop.PointerConvertible): NSArray;

  evaluateOnCPUWithInputsOutputsError(inputs: NSArray<interop.Object> | Array<interop.Object>, outputs: NSArray<interop.Object> | Array<interop.Object>, error: interop.PointerConvertible): boolean;

  encodeToCommandBufferInputsOutputsError?(commandBuffer: MTLCommandBuffer, inputs: NSArray<interop.Object> | Array<interop.Object>, outputs: NSArray<interop.Object> | Array<interop.Object>, error: interop.PointerConvertible): boolean;
}

declare class MLCustomLayer extends NativeObject implements MLCustomLayer {
}

declare interface MLWritable extends NSObjectProtocol {
  writeToURLError(url: NSURL, error: interop.PointerConvertible): boolean;
}

declare class MLWritable extends NativeObject implements MLWritable {
}

declare interface MLFeatureProvider {
  readonly featureNames: NSSet;

  featureValueForName(featureName: string): MLFeatureValue;
}

declare class MLFeatureProvider extends NativeObject implements MLFeatureProvider {
}

declare class MLComputePlanCost extends NSObject {
  readonly weight: number;
}

declare class MLModelStructureProgramValue extends NSObject {
}

declare class MLModelStructureProgramOperation extends NSObject {
  readonly operatorName: string;

  readonly inputs: NSDictionary;

  readonly outputs: NSArray;

  readonly blocks: NSArray;
}

declare class MLModelStructureProgramNamedValueType extends NSObject {
  readonly name: string;

  readonly type: MLModelStructureProgramValueType;
}

declare class MLModelStructureProgramBinding extends NSObject {
  readonly name: string;

  readonly value: MLModelStructureProgramValue;
}

declare class MLModelStructureProgram extends NSObject {
  readonly functions: NSDictionary;
}

declare class MLModelStructurePipeline extends NSObject {
  readonly subModelNames: NSArray;

  readonly subModels: NSArray;
}

declare class MLModelCollectionEntry extends NSObject {
  readonly modelIdentifier: string;

  readonly modelURL: NSURL;

  isEqualToModelCollectionEntry(entry: MLModelCollectionEntry): boolean;
}

declare class MLMetricKey extends MLKey {
  static readonly lossValue: MLMetricKey;

  static readonly epochIndex: MLMetricKey;

  static readonly miniBatchIndex: MLMetricKey;
}

declare class MLUpdateProgressHandlers extends NSObject {
  initForEventsProgressHandlerCompletionHandler(interestedEvents: interop.Enum<typeof MLUpdateProgressEvent>, progressHandler: (p1: MLUpdateContext) => void | null, completionHandler: (p1: MLUpdateContext) => void): this;
}

declare class MLUpdateContext extends NSObject {
  readonly task: MLUpdateTask;

  readonly model: MLModel;

  readonly event: interop.Enum<typeof MLUpdateProgressEvent>;

  readonly metrics: NSDictionary;

  readonly parameters: NSDictionary;
}

declare class MLUpdateTask extends MLTask {
  static updateTaskForModelAtURLTrainingDataConfigurationCompletionHandlerError<This extends abstract new (...args: any) => any>(this: This, modelURL: NSURL, trainingData: MLBatchProvider, configuration: MLModelConfiguration | null, completionHandler: (p1: MLUpdateContext) => void, error: interop.PointerConvertible): InstanceType<This>;

  static updateTaskForModelAtURLTrainingDataCompletionHandlerError<This extends abstract new (...args: any) => any>(this: This, modelURL: NSURL, trainingData: MLBatchProvider, completionHandler: (p1: MLUpdateContext) => void, error: interop.PointerConvertible): InstanceType<This>;

  static updateTaskForModelAtURLTrainingDataConfigurationProgressHandlersError<This extends abstract new (...args: any) => any>(this: This, modelURL: NSURL, trainingData: MLBatchProvider, configuration: MLModelConfiguration | null, progressHandlers: MLUpdateProgressHandlers, error: interop.PointerConvertible): InstanceType<This>;

  static updateTaskForModelAtURLTrainingDataProgressHandlersError<This extends abstract new (...args: any) => any>(this: This, modelURL: NSURL, trainingData: MLBatchProvider, progressHandlers: MLUpdateProgressHandlers, error: interop.PointerConvertible): InstanceType<This>;

  resumeWithParameters(updateParameters: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;
}

declare class MLKey extends NSObject implements NSCopying, NSSecureCoding {
  readonly name: string;

  readonly scope: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLModel extends NSObject {
  readonly modelDescription: MLModelDescription;

  readonly configuration: MLModelConfiguration;

  static modelWithContentsOfURLError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, error: interop.PointerConvertible): InstanceType<This>;

  static modelWithContentsOfURLConfigurationError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, configuration: MLModelConfiguration, error: interop.PointerConvertible): InstanceType<This>;

  static loadContentsOfURLConfigurationCompletionHandler(url: NSURL, configuration: MLModelConfiguration, handler: (p1: MLModel, p2: NSError) => void | null): void;

  predictionFromFeaturesError(input: MLFeatureProvider, error: interop.PointerConvertible): MLFeatureProvider;

  predictionFromFeaturesOptionsError(input: MLFeatureProvider, options: MLPredictionOptions, error: interop.PointerConvertible): MLFeatureProvider;

  predictionFromFeaturesCompletionHandler(input: MLFeatureProvider, completionHandler: (p1: MLFeatureProvider, p2: NSError) => void | null): void;

  predictionFromFeaturesOptionsCompletionHandler(input: MLFeatureProvider, options: MLPredictionOptions, completionHandler: (p1: MLFeatureProvider, p2: NSError) => void | null): void;

  predictionsFromBatchError(inputBatch: MLBatchProvider, error: interop.PointerConvertible): MLBatchProvider;

  predictionsFromBatchOptionsError(inputBatch: MLBatchProvider, options: MLPredictionOptions, error: interop.PointerConvertible): MLBatchProvider;

  parameterValueForKeyError(key: MLParameterKey, error: interop.PointerConvertible): interop.Object;

  static loadModelAssetConfigurationCompletionHandler(asset: MLModelAsset, configuration: MLModelConfiguration, handler: (p1: MLModel, p2: NSError) => void | null): void;

  static compileModelAtURLError(modelURL: NSURL, error: interop.PointerConvertible): NSURL;

  static compileModelAtURLCompletionHandler(modelURL: NSURL, handler: (p1: NSURL, p2: NSError) => void | null): void;

  static readonly availableComputeDevices: NSArray;

  newState(): MLState;

  predictionFromFeaturesUsingStateError(inputFeatures: MLFeatureProvider, state: MLState, error: interop.PointerConvertible): MLFeatureProvider;

  predictionFromFeaturesUsingStateOptionsError(inputFeatures: MLFeatureProvider, state: MLState, options: MLPredictionOptions, error: interop.PointerConvertible): MLFeatureProvider;

  predictionFromFeaturesUsingStateOptionsCompletionHandler(inputFeatures: MLFeatureProvider, state: MLState, options: MLPredictionOptions, completionHandler: (p1: MLFeatureProvider, p2: NSError) => void | null): void;
}

declare class MLModelAsset extends NSObject {
  static modelAssetWithSpecificationDataError<This extends abstract new (...args: any) => any>(this: This, specificationData: NSData, error: interop.PointerConvertible): InstanceType<This>;

  static modelAssetWithSpecificationDataBlobMappingError<This extends abstract new (...args: any) => any>(this: This, specificationData: NSData, blobMapping: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): InstanceType<This>;

  static modelAssetWithURLError<This extends abstract new (...args: any) => any>(this: This, compiledModelURL: NSURL, error: interop.PointerConvertible): InstanceType<This>;

  modelDescriptionWithCompletionHandler(handler: (p1: MLModelDescription, p2: NSError) => void | null): void;

  modelDescriptionOfFunctionNamedCompletionHandler(functionName: string, handler: (p1: MLModelDescription, p2: NSError) => void | null): void;

  functionNamesWithCompletionHandler(handler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;
}

declare class MLModelConfiguration extends NSObject implements NSCopying, NSSecureCoding {
  modelDisplayName: string;

  computeUnits: interop.Enum<typeof MLComputeUnits>;

  optimizationHints: MLOptimizationHints;

  allowLowPrecisionAccumulationOnGPU: boolean;

  preferredMetalDevice: MTLDevice;

  get parameters(): NSDictionary;
  set parameters(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  functionName: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLModelDescription extends NSObject implements NSSecureCoding {
  readonly inputDescriptionsByName: NSDictionary;

  readonly outputDescriptionsByName: NSDictionary;

  readonly stateDescriptionsByName: NSDictionary;

  readonly predictedFeatureName: string;

  readonly predictedProbabilitiesName: string;

  readonly metadata: NSDictionary;

  readonly classLabels: NSArray;

  readonly isUpdatable: boolean;

  readonly trainingInputDescriptionsByName: NSDictionary;

  readonly parameterDescriptionsByKey: NSDictionary;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLArrayBatchProvider extends NSObject implements MLBatchProvider {
  readonly array: NSArray;

  initWithFeatureProviderArray(array: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithDictionaryError(dictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): this;

  readonly count: number;

  featuresAtIndex(index: number): MLFeatureProvider;
}

declare class MLDictionaryFeatureProvider extends NSObject implements MLFeatureProvider, NSFastEnumeration, NSSecureCoding {
  readonly dictionary: NSDictionary;

  initWithDictionaryError(dictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): this;

  objectForKeyedSubscript(featureName: string): MLFeatureValue;

  readonly featureNames: NSSet;

  featureValueForName(featureName: string): MLFeatureValue;

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  readonly [Symbol.iterator]: () => Iterator<any>;

}

declare class MLFeatureDescription extends NSObject implements NSCopying, NSSecureCoding {
  readonly name: string;

  readonly type: interop.Enum<typeof MLFeatureType>;

  readonly isOptional: boolean;

  isAllowedValue(value: MLFeatureValue): boolean;

  readonly multiArrayConstraint: MLMultiArrayConstraint;

  readonly imageConstraint: MLImageConstraint;

  readonly dictionaryConstraint: MLDictionaryConstraint;

  readonly sequenceConstraint: MLSequenceConstraint;

  readonly stateConstraint: MLStateConstraint;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLDictionaryConstraint extends NSObject implements NSSecureCoding {
  readonly keyType: interop.Enum<typeof MLFeatureType>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLImageSize extends NSObject implements NSSecureCoding {
  readonly pixelsWide: number;

  readonly pixelsHigh: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLMultiArray extends NSObject implements NSSecureCoding {
  readonly dataPointer: interop.Pointer;

  readonly dataType: interop.Enum<typeof MLMultiArrayDataType>;

  readonly shape: NSArray;

  readonly strides: NSArray;

  readonly count: number;

  readonly pixelBuffer: interop.Pointer;

  initWithShapeDataTypeError(shape: NSArray<interop.Object> | Array<interop.Object>, dataType: interop.Enum<typeof MLMultiArrayDataType>, error: interop.PointerConvertible): this;

  initWithShapeDataTypeStrides(shape: NSArray<interop.Object> | Array<interop.Object>, dataType: interop.Enum<typeof MLMultiArrayDataType>, strides: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithDataPointerShapeDataTypeStridesDeallocatorError(dataPointer: interop.PointerConvertible, shape: NSArray<interop.Object> | Array<interop.Object>, dataType: interop.Enum<typeof MLMultiArrayDataType>, strides: NSArray<interop.Object> | Array<interop.Object>, deallocator: (p1: interop.PointerConvertible) => void | null, error: interop.PointerConvertible): this;

  initWithPixelBufferShape(pixelBuffer: interop.PointerConvertible, shape: NSArray<interop.Object> | Array<interop.Object>): this;

  getBytesWithHandler(handler: (p1: interop.PointerConvertible, p2: number) => void): void;

  getMutableBytesWithHandler(handler: (p1: interop.PointerConvertible, p2: number, p3: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  static multiArrayByConcatenatingMultiArraysAlongAxisDataType<This extends abstract new (...args: any) => any>(this: This, multiArrays: NSArray<interop.Object> | Array<interop.Object>, axis: number, dataType: interop.Enum<typeof MLMultiArrayDataType>): InstanceType<This>;

  objectAtIndexedSubscript(idx: number): NSNumber;

  objectForKeyedSubscript(key: NSArray<interop.Object> | Array<interop.Object>): NSNumber;

  setObjectAtIndexedSubscript(obj: NSNumber, idx: number): void;

  setObjectForKeyedSubscript(obj: NSNumber, key: NSArray<interop.Object> | Array<interop.Object>): void;

  transferToMultiArray(destinationMultiArray: MLMultiArray): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLModelStructureProgramValueType extends NSObject {
}

declare class MLGPUComputeDevice extends NSObject implements MLComputeDeviceProtocol {
  readonly metalDevice: MTLDevice;

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

declare class MLTask extends NSObject {
  readonly taskIdentifier: string;

  readonly state: interop.Enum<typeof MLTaskState>;

  readonly error: NSError;

  resume(): void;

  cancel(): void;
}

declare class MLModelStructureProgramBlock extends NSObject {
  readonly inputs: NSArray;

  readonly outputNames: NSArray;

  readonly operations: NSArray;
}

declare class MLPredictionOptions extends NSObject {
  usesCPUOnly: boolean;

  get outputBackings(): NSDictionary;
  set outputBackings(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class MLModelStructure extends NSObject {
  static loadContentsOfURLCompletionHandler(url: NSURL, handler: (p1: MLModelStructure, p2: NSError) => void | null): void;

  static loadModelAssetCompletionHandler(asset: MLModelAsset, handler: (p1: MLModelStructure, p2: NSError) => void | null): void;

  readonly neuralNetwork: MLModelStructureNeuralNetwork;

  readonly program: MLModelStructureProgram;

  readonly pipeline: MLModelStructurePipeline;
}

declare class MLMultiArrayConstraint extends NSObject implements NSSecureCoding {
  readonly shape: NSArray;

  readonly dataType: interop.Enum<typeof MLMultiArrayDataType>;

  readonly shapeConstraint: MLMultiArrayShapeConstraint;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLNeuralEngineComputeDevice extends NSObject implements MLComputeDeviceProtocol {
  readonly totalCoreCount: number;

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

declare class MLFeatureValue extends NSObject implements NSCopying, NSSecureCoding {
  readonly type: interop.Enum<typeof MLFeatureType>;

  readonly isUndefined: boolean;

  readonly int64Value: number;

  readonly doubleValue: number;

  readonly stringValue: string;

  readonly multiArrayValue: MLMultiArray;

  readonly dictionaryValue: NSDictionary;

  readonly imageBufferValue: interop.Pointer;

  readonly sequenceValue: MLSequence;

  static featureValueWithInt64<This extends abstract new (...args: any) => any>(this: This, value: number): InstanceType<This>;

  static featureValueWithDouble<This extends abstract new (...args: any) => any>(this: This, value: number): InstanceType<This>;

  static featureValueWithString<This extends abstract new (...args: any) => any>(this: This, value: string): InstanceType<This>;

  static featureValueWithMultiArray<This extends abstract new (...args: any) => any>(this: This, value: MLMultiArray): InstanceType<This>;

  static featureValueWithPixelBuffer<This extends abstract new (...args: any) => any>(this: This, value: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithSequence<This extends abstract new (...args: any) => any>(this: This, sequence: MLSequence): InstanceType<This>;

  static undefinedFeatureValueWithType<This extends abstract new (...args: any) => any>(this: This, type: interop.Enum<typeof MLFeatureType>): InstanceType<This>;

  static featureValueWithDictionaryError<This extends abstract new (...args: any) => any>(this: This, value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): InstanceType<This>;

  isEqualToFeatureValue(value: MLFeatureValue): boolean;

  static featureValueWithImageAtURLPixelsWidePixelsHighPixelFormatTypeOptionsError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, pixelsWide: number, pixelsHigh: number, pixelFormatType: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithImageAtURLConstraintOptionsError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, constraint: MLImageConstraint, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithCGImagePixelsWidePixelsHighPixelFormatTypeOptionsError<This extends abstract new (...args: any) => any>(this: This, cgImage: interop.PointerConvertible, pixelsWide: number, pixelsHigh: number, pixelFormatType: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithCGImageConstraintOptionsError<This extends abstract new (...args: any) => any>(this: This, cgImage: interop.PointerConvertible, constraint: MLImageConstraint, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithImageAtURLOrientationPixelsWidePixelsHighPixelFormatTypeOptionsError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, orientation: interop.Enum<typeof CGImagePropertyOrientation>, pixelsWide: number, pixelsHigh: number, pixelFormatType: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithImageAtURLOrientationConstraintOptionsError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, orientation: interop.Enum<typeof CGImagePropertyOrientation>, constraint: MLImageConstraint, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithCGImageOrientationPixelsWidePixelsHighPixelFormatTypeOptionsError<This extends abstract new (...args: any) => any>(this: This, cgImage: interop.PointerConvertible, orientation: interop.Enum<typeof CGImagePropertyOrientation>, pixelsWide: number, pixelsHigh: number, pixelFormatType: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  static featureValueWithCGImageOrientationConstraintOptionsError<This extends abstract new (...args: any) => any>(this: This, cgImage: interop.PointerConvertible, orientation: interop.Enum<typeof CGImagePropertyOrientation>, constraint: MLImageConstraint, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLModelStructureProgramArgument extends NSObject {
  readonly bindings: NSArray;
}

declare class MLSequenceConstraint extends NSObject implements NSSecureCoding {
  readonly valueDescription: MLFeatureDescription;

  readonly countRange: _NSRange;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLMultiArrayShapeConstraint extends NSObject implements NSSecureCoding {
  readonly type: interop.Enum<typeof MLMultiArrayShapeConstraintType>;

  readonly sizeRangeForDimension: NSArray;

  readonly enumeratedShapes: NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLModelStructureProgramFunction extends NSObject {
  readonly inputs: NSArray;

  readonly block: MLModelStructureProgramBlock;
}

declare class MLState extends NSObject {
  getMultiArrayForStateNamedHandler(stateName: string, handler: (p1: MLMultiArray) => void): void;
}

declare class MLParameterDescription extends NSObject implements NSSecureCoding {
  readonly key: MLParameterKey;

  readonly defaultValue: interop.Object;

  readonly numericConstraint: MLNumericConstraint;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLSequence extends NSObject implements NSSecureCoding {
  readonly type: interop.Enum<typeof MLFeatureType>;

  static emptySequenceWithType<This extends abstract new (...args: any) => any>(this: This, type: interop.Enum<typeof MLFeatureType>): InstanceType<This>;

  static sequenceWithStringArray<This extends abstract new (...args: any) => any>(this: This, stringValues: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  readonly stringValues: NSArray;

  static sequenceWithInt64Array<This extends abstract new (...args: any) => any>(this: This, int64Values: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  readonly int64Values: NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLImageSizeConstraint extends NSObject implements NSSecureCoding {
  readonly type: interop.Enum<typeof MLImageSizeConstraintType>;

  readonly pixelsWideRange: _NSRange;

  readonly pixelsHighRange: _NSRange;

  readonly enumeratedImageSizes: NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLModelStructureNeuralNetworkLayer extends NSObject {
  readonly name: string;

  readonly type: string;

  readonly inputNames: NSArray;

  readonly outputNames: NSArray;
}

declare class MLModelCollection extends NSObject {
  readonly identifier: string;

  readonly entries: NSDictionary;

  readonly deploymentID: string;

  static beginAccessingModelCollectionWithIdentifierCompletionHandler(identifier: string, completionHandler: (p1: MLModelCollection, p2: NSError) => void | null): NSProgress;

  static endAccessingModelCollectionWithIdentifierCompletionHandler(identifier: string, completionHandler: (p1: boolean, p2: NSError) => void | null): void;
}

declare class MLOptimizationHints extends NSObject implements NSCopying, NSSecureCoding {
  reshapeFrequency: interop.Enum<typeof MLReshapeFrequencyHint>;

  specializationStrategy: interop.Enum<typeof MLSpecializationStrategy>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLStateConstraint extends NSObject implements NSSecureCoding {
  readonly bufferShape: NSArray;

  readonly dataType: interop.Enum<typeof MLMultiArrayDataType>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLNumericConstraint extends NSObject implements NSSecureCoding {
  readonly minNumber: NSNumber;

  readonly maxNumber: NSNumber;

  readonly enumeratedNumbers: NSSet;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLModelStructureNeuralNetwork extends NSObject {
  readonly layers: NSArray;
}

declare class MLCPUComputeDevice extends NSObject implements MLComputeDeviceProtocol {
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

declare class MLParameterKey extends MLKey {
  static readonly learningRate: MLParameterKey;

  static readonly momentum: MLParameterKey;

  static readonly miniBatchSize: MLParameterKey;

  static readonly beta1: MLParameterKey;

  static readonly beta2: MLParameterKey;

  static readonly eps: MLParameterKey;

  static readonly epochs: MLParameterKey;

  static readonly shuffle: MLParameterKey;

  static readonly seed: MLParameterKey;

  static readonly numberOfNeighbors: MLParameterKey;

  static readonly linkedModelFileName: MLParameterKey;

  static readonly linkedModelSearchPath: MLParameterKey;

  static readonly weights: MLParameterKey;

  static readonly biases: MLParameterKey;

  scopedTo(scope: string): MLParameterKey;
}

declare class MLComputePlan extends NSObject {
  static loadContentsOfURLConfigurationCompletionHandler(url: NSURL, configuration: MLModelConfiguration, handler: (p1: MLComputePlan, p2: NSError) => void | null): void;

  static loadModelAssetConfigurationCompletionHandler(asset: MLModelAsset, configuration: MLModelConfiguration, handler: (p1: MLComputePlan, p2: NSError) => void | null): void;

  estimatedCostOfMLProgramOperation(operation: MLModelStructureProgramOperation): MLComputePlanCost;

  computeDeviceUsageForNeuralNetworkLayer(layer: MLModelStructureNeuralNetworkLayer): MLComputePlanDeviceUsage;

  computeDeviceUsageForMLProgramOperation(operation: MLModelStructureProgramOperation): MLComputePlanDeviceUsage;

  readonly modelStructure: MLModelStructure;
}

declare class MLImageConstraint extends NSObject implements NSSecureCoding {
  readonly pixelsHigh: number;

  readonly pixelsWide: number;

  readonly pixelFormatType: number;

  readonly sizeConstraint: MLImageSizeConstraint;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MLComputePlanDeviceUsage extends NSObject {
  readonly supportedComputeDevices: NSArray;

  readonly preferredComputeDevice: MLComputeDeviceProtocol;
}

