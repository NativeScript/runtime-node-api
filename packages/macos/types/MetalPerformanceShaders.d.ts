/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Foundation.d.ts" />
/// <reference path="./Runtime.d.ts" />

declare const MPSFunctionConstantNoneArray: unknown /* const array */;

declare const MPSFunctionConstantNone: number;

declare const MPSRectNoClip: MTLRegion;

declare const MPSDeviceOptions: {
  Default: 0,
  LowPower: 1,
  SkipRemovable: 2,
};

declare const MPSRayDataType: {
  OriginDirection: 0,
  OriginMinDistanceDirectionMaxDistance: 1,
  OriginMaskDirectionMaxDistance: 2,
  PackedOriginDirection: 3,
};

declare const MPSPolygonType: {
  Triangle: 0,
  Quadrilateral: 1,
};

declare const MPSRNNBidirectionalCombineMode: {
  None: 0,
  Add: 1,
  Concatenate: 2,
};

declare const MPSCNNReductionType: {
  None: 0,
  Sum: 1,
  Mean: 2,
  SumByNonZeroWeights: 3,
  Count: 4,
};

declare const MPSCNNLossType: {
  MeanAbsoluteError: 0,
  MeanSquaredError: 1,
  SoftMaxCrossEntropy: 2,
  SigmoidCrossEntropy: 3,
  CategoricalCrossEntropy: 4,
  Hinge: 5,
  Huber: 6,
  CosineDistance: 7,
  Log: 8,
  KullbackLeiblerDivergence: 9,
  Count: 10,
};

declare const MPSCNNWeightsQuantizationType: {
  None: 0,
  Linear: 1,
  LookupTable: 2,
};

declare const MPSCNNBatchNormalizationFlags: {
  Default: 0,
  CalculateStatisticsAutomatic: 0,
  CalculateStatisticsAlways: 1,
  CalculateStatisticsNever: 2,
  CalculateStatisticsMask: 3,
};

declare const MPSNNTrainingStyle: {
  None: 0,
  CPU: 1,
  GPU: 2,
};

declare const MPSMatrixRandomDistribution: {
  Default: 1,
  Uniform: 2,
  Normal: 3,
};

declare const MPSAlphaType: {
  NonPremultiplied: 0,
  AlphaIsOne: 1,
  Premultiplied: 2,
};

declare const MPSImageType: {
  Type2d: 0,
  Type2d_array: 1,
  TypeArray2d: 2,
  TypeArray2d_array: 3,
  Type_ArrayMask: 1,
  Type_BatchMask: 2,
  Type_typeMask: 3,
  Type_noAlpha: 4,
  Type_texelFormatMask: 56,
  Type_texelFormatShift: 3,
  Type_texelFormatStandard: 0,
  Type_texelFormatUnorm8: 8,
  Type_texelFormatFloat16: 16,
  Type_texelFormatBFloat16: 24,
  Type_bitCount: 6,
  Type_mask: 63,
  Type2d_noAlpha: 4,
  Type2d_array_noAlpha: 5,
  TypeArray2d_noAlpha: 6,
  TypeArray2d_array_noAlpha: 7,
};

declare const MPSDataLayout: {
  HeightxWidthxFeatureChannels: 0,
  FeatureChannelsxHeightxWidth: 1,
};

declare const MPSFloatDataTypeShift: {
  Sign: 23,
  Exponent: 18,
  Mantissa: 10,
};

declare const MPSImageFeatureChannelFormat: {
  FormatNone: 0,
  FormatUnorm8: 1,
  FormatUnorm16: 2,
  FormatFloat16: 3,
  FormatFloat32: 4,
  Format_reserved0: 5,
  FormatCount: 6,
};

declare const MPSImageEdgeMode: {
  Zero: 0,
  Clamp: 1,
  Mirror: 2,
  MirrorWithEdge: 3,
  Constant: 4,
};

declare const MPSPurgeableState: {
  AllocationDeferred: 0,
  KeepCurrent: 1,
  NonVolatile: 2,
  Volatile: 3,
  Empty: 4,
};

declare const MPSCNNNeuronType: {
  None: 0,
  ReLU: 1,
  Linear: 2,
  Sigmoid: 3,
  HardSigmoid: 4,
  TanH: 5,
  Absolute: 6,
  SoftPlus: 7,
  SoftSign: 8,
  ELU: 9,
  PReLU: 10,
  ReLUN: 11,
  Power: 12,
  Exponential: 13,
  Logarithm: 14,
  GeLU: 15,
  Count: 16,
};

declare const MPSFloatDataTypeBit: {
  Sign: 8388608,
  Exponent: 8126464,
  Mantissa: 261120,
};

declare const MPSRayMaskOperator: {
  And: 0,
  NotAnd: 1,
  Or: 2,
  NotOr: 3,
  Xor: 4,
  NotXor: 5,
  LessThan: 6,
  LessThanOrEqualTo: 7,
  GreaterThan: 8,
  GreaterThanOrEqualTo: 9,
  Equal: 10,
  NotEqual: 11,
};

declare const MPSCNNConvolutionFlags: {
  MPSCNNConvolutionFlagsNone: 0,
};

declare const MPSDataType: {
  Invalid: 0,
  FloatBit: 268435456,
  Float32: 268435488,
  Float16: 268435472,
  ComplexBit: 16777216,
  ComplexFloat32: 285212736,
  ComplexFloat16: 285212704,
  SignedBit: 536870912,
  IntBit: 536870912,
  Int4: 536870916,
  Int8: 536870920,
  Int16: 536870928,
  Int32: 536870944,
  Int64: 536870976,
  UInt4: 4,
  UInt8: 8,
  UInt16: 16,
  UInt32: 32,
  UInt64: 64,
  AlternateEncodingBit: -2147483648,
  Bool: -2147483640,
  BFloat16: -1879048176,
  NormalizedBit: 1073741824,
  Unorm1: 1073741825,
  Unorm8: 1073741832,
};

declare const MPSTriangleIntersectionTestType: {
  Default: 0,
  Watertight: 1,
};

declare const MPSNNPaddingMethod: {
  AlignCentered: 0,
  AlignTopLeft: 1,
  AlignBottomRight: 2,
  Align_reserved: 3,
  AlignMask: 3,
  AddRemainderToTopLeft: 0,
  AddRemainderToTopRight: 4,
  AddRemainderToBottomLeft: 8,
  AddRemainderToBottomRight: 12,
  AddRemainderToMask: 12,
  SizeValidOnly: 0,
  SizeSame: 16,
  SizeFull: 32,
  Size_reserved: 48,
  CustomWhitelistForNodeFusion: 8192,
  CustomAllowForNodeFusion: 8192,
  Custom: 16384,
  SizeMask: 2032,
  ExcludeEdges: 32768,
};

declare const MPSStateResourceType: {
  None: 0,
  Buffer: 1,
  Texture: 2,
};

declare const MPSTransformType: {
  Float4x4: 0,
  Identity: 1,
};

declare const MPSRayMaskOptions: {
  None: 0,
  Primitive: 1,
  Instance: 2,
};

declare const MPSCustomKernelIndex: {
  Dest: 0,
  Src0: 0,
  Src1: 1,
  Src2: 2,
  Src3: 3,
  Src4: 4,
  UserData: 30,
};

declare const MPSCNNBinaryConvolutionType: {
  BinaryWeights: 0,
  XNOR: 1,
  AND: 2,
};

declare const MPSDeviceCapsValues: {
  CapsNull: 0,
  SupportsReadableArrayOfTextures: 1,
  SupportsWritableArrayOfTextures: 2,
  SupportsReadWriteTextures: 4,
  SupportsSimdgroupBarrier: 8,
  SupportsQuadShuffle: 16,
  SupportsSimdShuffle: 32,
  SupportsSimdReduction: 64,
  SupportsFloat32Filtering: 128,
  SupportsNorm16BicubicFiltering: 256,
  SupportsFloat16BicubicFiltering: 512,
  IsAppleDevice: 1024,
  SupportsSimdShuffleAndFill: 2048,
  SupportsBFloat16Arithmetic: 4096,
  CapsLast: 8192,
};

declare const MPSRNNMatrixId: {
  IdSingleGateInputWeights: 0,
  IdSingleGateRecurrentWeights: 1,
  IdSingleGateBiasTerms: 2,
  IdLSTMInputGateInputWeights: 3,
  IdLSTMInputGateRecurrentWeights: 4,
  IdLSTMInputGateMemoryWeights: 5,
  IdLSTMInputGateBiasTerms: 6,
  IdLSTMForgetGateInputWeights: 7,
  IdLSTMForgetGateRecurrentWeights: 8,
  IdLSTMForgetGateMemoryWeights: 9,
  IdLSTMForgetGateBiasTerms: 10,
  IdLSTMMemoryGateInputWeights: 11,
  IdLSTMMemoryGateRecurrentWeights: 12,
  IdLSTMMemoryGateMemoryWeights: 13,
  IdLSTMMemoryGateBiasTerms: 14,
  IdLSTMOutputGateInputWeights: 15,
  IdLSTMOutputGateRecurrentWeights: 16,
  IdLSTMOutputGateMemoryWeights: 17,
  IdLSTMOutputGateBiasTerms: 18,
  IdGRUInputGateInputWeights: 19,
  IdGRUInputGateRecurrentWeights: 20,
  IdGRUInputGateBiasTerms: 21,
  IdGRURecurrentGateInputWeights: 22,
  IdGRURecurrentGateRecurrentWeights: 23,
  IdGRURecurrentGateBiasTerms: 24,
  IdGRUOutputGateInputWeights: 25,
  IdGRUOutputGateRecurrentWeights: 26,
  IdGRUOutputGateInputGateWeights: 27,
  IdGRUOutputGateBiasTerms: 28,
  Id_count: 29,
};

declare const MPSAliasingStrategy: {
  Default: 0,
  DontCare: 0,
  ShallAlias: 1,
  ShallNotAlias: 2,
  AliasingReserved: 3,
  PreferTemporaryMemory: 4,
  PreferNonTemporaryMemory: 8,
};

declare const MPSCNNBinaryConvolutionFlags: {
  None: 0,
  UseBetaScaling: 1,
};

declare const MPSAccelerationStructureUsage: {
  None: 0,
  Refit: 1,
  FrequentRebuild: 2,
  PreferGPUBuild: 4,
  PreferCPUBuild: 8,
};

declare const MPSBoundingBoxIntersectionTestType: {
  Default: 0,
  AxisAligned: 1,
  Fast: 2,
};

declare const MPSCNNConvolutionWeightsLayout: {
  MPSCNNConvolutionWeightsLayoutOHWI: 0,
};

declare const MPSAccelerationStructureStatus: {
  Unbuilt: 0,
  Built: 1,
};

declare const MPSIntersectionType: {
  Nearest: 0,
  Any: 1,
};

declare const MPSIntersectionDataType: {
  MPSIntersectionDataTypeDistance: 0,
  PrimitiveIndex: 1,
  PrimitiveIndexCoordinates: 2,
  PrimitiveIndexInstanceIndex: 3,
  PrimitiveIndexInstanceIndexCoordinates: 4,
  PrimitiveIndexBufferIndex: 5,
  PrimitiveIndexBufferIndexCoordinates: 6,
  PrimitiveIndexBufferIndexInstanceIndex: 7,
  PrimitiveIndexBufferIndexInstanceIndexCoordinates: 8,
};

declare const MPSNNComparisonType: {
  Equal: 0,
  NotEqual: 1,
  Less: 2,
  LessOrEqual: 3,
  Greater: 4,
  GreaterOrEqual: 5,
};

declare const MPSKernelOptions: {
  None: 0,
  SkipAPIValidation: 1,
  AllowReducedPrecision: 2,
  DisableInternalTiling: 4,
  InsertDebugGroups: 8,
  Verbose: 16,
};

declare const MPSCNNConvolutionGradientOption: {
  GradientWithData: 1,
  GradientWithWeightsAndBias: 2,
  All: 3,
};

declare const MPSNDArrayQuantizationScheme: {
  None: 0,
  Affine: 1,
  LUT: 2,
};

declare const MPSMatrixDecompositionStatus: {
  Success: 0,
  Failure: -1,
  Singular: -2,
  NonPositiveDefinite: -3,
};

declare const MPSNNRegularizationType: {
  None: 0,
  L1: 1,
  L2: 2,
};

declare const MPSTemporalWeighting: {
  MPSTemporalWeightingAverage: 0,
  ExponentialMoving: 1,
};

declare const MPSNNConvolutionAccumulatorPrecisionOption: {
  Half: 0,
  Float: 1,
};

declare const MPSRNNSequenceDirection: {
  Forward: 0,
  Backward: 1,
};

declare class MPSImageCoordinate {
  constructor(init?: MPSImageCoordinate);
  x: number;
  y: number;
  channel: number;
}

declare class MPSMatrixCopyOffsets {
  constructor(init?: MPSMatrixCopyOffsets);
  sourceRowOffset: number;
  sourceColumnOffset: number;
  destinationRowOffset: number;
  destinationColumnOffset: number;
}

declare class MPSIntersectionDistancePrimitiveIndexInstanceIndexCoordinates {
  constructor(init?: MPSIntersectionDistancePrimitiveIndexInstanceIndexCoordinates);
  distance: number;
  primitiveIndex: number;
  instanceIndex: number;
  coordinates: unknown /* ext vector */;
}

declare class MPSIntersectionDistancePrimitiveIndexInstanceIndex {
  constructor(init?: MPSIntersectionDistancePrimitiveIndexInstanceIndex);
  distance: number;
  primitiveIndex: number;
  instanceIndex: number;
}

declare class MPSIntersectionDistancePrimitiveIndexBufferIndex {
  constructor(init?: MPSIntersectionDistancePrimitiveIndexBufferIndex);
  distance: number;
  primitiveIndex: number;
  bufferIndex: number;
}

declare class MPSIntersectionDistancePrimitiveIndex {
  constructor(init?: MPSIntersectionDistancePrimitiveIndex);
  distance: number;
  primitiveIndex: number;
}

declare class MPSRayOriginMinDistanceDirectionMaxDistance {
  constructor(init?: MPSRayOriginMinDistanceDirectionMaxDistance);
  origin: _MPSPackedFloat3;
  minDistance: number;
  direction: _MPSPackedFloat3;
  maxDistance: number;
}

declare class MPSRayOriginDirection {
  constructor(init?: MPSRayOriginDirection);
  origin: unknown /* ext vector */;
  direction: unknown /* ext vector */;
}

declare class _MPSAxisAlignedBoundingBox {
  constructor(init?: _MPSAxisAlignedBoundingBox);
  min: unknown /* ext vector */;
  max: unknown /* ext vector */;
}

declare class _MPSPackedFloat3 {
  constructor(init?: _MPSPackedFloat3);
}

declare class MPSNDArraySizes {
  constructor(init?: MPSNDArraySizes);
  dimensions: unknown /* const array */;
}

declare class MPSImageRegion {
  constructor(init?: MPSImageRegion);
  offset: MPSImageCoordinate;
  size: MPSImageCoordinate;
}

declare class MPSRegion {
  constructor(init?: MPSRegion);
  origin: MPSOrigin;
  size: MPSSize;
}

declare class MPSIntersectionDistance {
  constructor(init?: MPSIntersectionDistance);
  distance: number;
}

declare class MPSIntersectionDistancePrimitiveIndexCoordinates {
  constructor(init?: MPSIntersectionDistancePrimitiveIndexCoordinates);
  distance: number;
  primitiveIndex: number;
  coordinates: unknown /* ext vector */;
}

declare class MPSSize {
  constructor(init?: MPSSize);
  width: number;
  height: number;
  depth: number;
}

declare class MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndex {
  constructor(init?: MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndex);
  distance: number;
  primitiveIndex: number;
  bufferIndex: number;
  instanceIndex: number;
}

declare class MPSCustomKernelArgumentCount {
  constructor(init?: MPSCustomKernelArgumentCount);
  destinationTextureCount: number;
  sourceTextureCount: number;
  broadcastTextureCount: number;
}

declare class MPSRayPackedOriginDirection {
  constructor(init?: MPSRayPackedOriginDirection);
  origin: _MPSPackedFloat3;
  direction: _MPSPackedFloat3;
}

declare class MPSImageKeypointRangeInfo {
  constructor(init?: MPSImageKeypointRangeInfo);
  maximumKeypoints: number;
  minimumThresholdValue: number;
}

declare class MPSOrigin {
  constructor(init?: MPSOrigin);
  x: number;
  y: number;
  z: number;
}

declare class MPSOffset {
  constructor(init?: MPSOffset);
  x: number;
  y: number;
  z: number;
}

declare class MPSIntegerDivisionParams {
  constructor(init?: MPSIntegerDivisionParams);
  divisor: number;
  recip: number;
  addend: number;
  shift: number;
}

declare class MPSRayOriginMaskDirectionMaxDistance {
  constructor(init?: MPSRayOriginMaskDirectionMaxDistance);
  origin: _MPSPackedFloat3;
  mask: number;
  direction: _MPSPackedFloat3;
  maxDistance: number;
}

declare class MPSMatrixOffset {
  constructor(init?: MPSMatrixOffset);
  rowOffset: number;
  columnOffset: number;
}

declare class MPSCustomKernelSourceInfo {
  constructor(init?: MPSCustomKernelSourceInfo);
  kernelOrigin: unknown /* ext vector */;
  kernelPhase: unknown /* ext vector */;
  kernelSize: unknown /* ext vector */;
  offset: unknown /* ext vector */;
  stride: unknown /* ext vector */;
  dilationRate: unknown /* ext vector */;
  featureChannelOffset: number;
  featureChannels: number;
  imageArrayOffset: number;
  imageArraySize: number;
}

declare class MPSImageReadWriteParams {
  constructor(init?: MPSImageReadWriteParams);
  featureChannelOffset: number;
  numberOfFeatureChannelsToReadWrite: number;
}

declare class MPSIntersectionDistancePrimitiveIndexBufferIndexCoordinates {
  constructor(init?: MPSIntersectionDistancePrimitiveIndexBufferIndexCoordinates);
  distance: number;
  primitiveIndex: number;
  bufferIndex: number;
  coordinates: unknown /* ext vector */;
}

declare class MPSImageHistogramInfo {
  constructor(init?: MPSImageHistogramInfo);
  numberOfHistogramEntries: number;
  histogramForAlpha: boolean;
  minPixelValue: unknown /* ext vector */;
  maxPixelValue: unknown /* ext vector */;
}

declare class MPSStateTextureInfo {
  constructor(init?: MPSStateTextureInfo);
  width: number;
  height: number;
  depth: number;
  arrayLength: number;
  pixelFormat: interop.Enum<typeof MTLPixelFormat>;
  textureType: interop.Enum<typeof MTLTextureType>;
  usage: interop.Enum<typeof MTLTextureUsage>;
  _reserved: unknown /* const array */;
}

declare class unnamed_17574962502922786599 {
  constructor(init?: unnamed_17574962502922786599);
  x: number;
  y: number;
  z: number;
}

declare class MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndexCoordinates {
  constructor(init?: MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndexCoordinates);
  distance: number;
  primitiveIndex: number;
  bufferIndex: number;
  instanceIndex: number;
  coordinates: unknown /* ext vector */;
}

declare class MPSCustomKernelInfo {
  constructor(init?: MPSCustomKernelInfo);
  clipOrigin: unknown /* ext vector */;
  clipSize: unknown /* ext vector */;
  destinationFeatureChannels: number;
  destImageArraySize: number;
  sourceImageCount: number;
  threadgroupSize: number;
  subbatchIndex: number;
  subbatchStride: number;
  idiv: MPSIntegerDivisionParams;
}

declare class MPSScaleTransform {
  constructor(init?: MPSScaleTransform);
  scaleX: number;
  scaleY: number;
  translateX: number;
  translateY: number;
}

declare class MPSNDArrayOffsets {
  constructor(init?: MPSNDArrayOffsets);
  dimensions: unknown /* const array */;
}

declare class MPSImageKeypointData {
  constructor(init?: MPSImageKeypointData);
  keypointCoordinate: unknown /* ext vector */;
  keypointColorValue: number;
}

declare class MPSDimensionSlice {
  constructor(init?: MPSDimensionSlice);
  start: number;
  length: number;
}

type unnamed_449473443384412501Descriptor = 
  | { elements: unknown /* const array */ };

declare class unnamed_449473443384412501 {
  constructor(init?: unnamed_449473443384412501Descriptor);
  elements: unknown /* const array */;
}

declare function MPSImageBatchIncrementReadCount(batch: NSArray<interop.Object> | Array<interop.Object>, amount: number): number;

declare function MPSImageBatchSynchronize(batch: NSArray<interop.Object> | Array<interop.Object>, cmdBuf: MTLCommandBuffer): void;

declare function MPSImageBatchResourceSize(batch: NSArray<interop.Object> | Array<interop.Object>): number;

declare function MPSImageBatchIterate(batch: NSArray<interop.Object> | Array<interop.Object>, iteratorBlock: (p1: MPSImage, p2: number) => number): number;

declare function MPSStateBatchIncrementReadCount(batch: NSArray<interop.Object> | Array<interop.Object>, amount: number): number;

declare function MPSStateBatchSynchronize(batch: NSArray<interop.Object> | Array<interop.Object>, cmdBuf: MTLCommandBuffer): void;

declare function MPSStateBatchResourceSize(batch: NSArray<interop.Object> | Array<interop.Object>): number;

declare function MPSGetImageType(image: MPSImage): interop.Enum<typeof MPSImageType>;

declare function MPSSupportsMTLDevice(device: MTLDevice): boolean;

declare function MPSHintTemporaryMemoryHighWaterMark(cmdBuf: MTLCommandBuffer, bytes: number): void;

declare function MPSSetHeapCacheDuration(cmdBuf: MTLCommandBuffer, seconds: number): void;

declare function MPSGetPreferredDevice(options: interop.Enum<typeof MPSDeviceOptions>): MTLDevice;

declare interface MPSNNPadding extends NSObjectProtocol, NSSecureCoding {
  paddingMethod(): interop.Enum<typeof MPSNNPaddingMethod>;

  label?(): string;

  destinationImageDescriptorForSourceImagesSourceStatesForKernelSuggestedDescriptor?(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, kernel: MPSKernel, inDescriptor: MPSImageDescriptor): MPSImageDescriptor;

  inverse?(): this | null;
}

declare class MPSNNPadding extends NativeObject implements MPSNNPadding {
}

declare interface MPSSVGFTextureAllocator extends NSObjectProtocol {
  textureWithPixelFormatWidthHeight(pixelFormat: interop.Enum<typeof MTLPixelFormat>, width: number, height: number): MTLTexture;

  returnTexture(texture: MTLTexture): void;
}

declare class MPSSVGFTextureAllocator extends NativeObject implements MPSSVGFTextureAllocator {
}

declare interface MPSHandle extends NSSecureCoding, NSObjectProtocol {
  label(): string | null;
}

declare class MPSHandle extends NativeObject implements MPSHandle {
}

declare interface MPSCNNInstanceNormalizationDataSource extends NSObjectProtocol, NSCopying {
  gamma(): interop.Pointer;

  beta(): interop.Pointer;

  readonly numberOfFeatureChannels: number;

  label(): string | null;

  updateGammaAndBetaWithCommandBufferInstanceNormalizationStateBatch?(commandBuffer: MTLCommandBuffer, instanceNormalizationStateBatch: NSArray<interop.Object> | Array<interop.Object>): MPSCNNNormalizationGammaAndBetaState | null;

  updateGammaAndBetaWithInstanceNormalizationStateBatch?(instanceNormalizationStateBatch: NSArray<interop.Object> | Array<interop.Object>): boolean;

  epsilon?(): number;

  encodeWithCoder?(aCoder: NSCoder): void;

  initWithCoder?(aDecoder: NSCoder): this;

  copyWithZoneDevice?(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  load?(): boolean;

  purge?(): void;
}

declare class MPSCNNInstanceNormalizationDataSource extends NativeObject implements MPSCNNInstanceNormalizationDataSource {
  static readonly supportsSecureCoding: boolean;

}

declare interface MPSCNNConvolutionDataSource extends NSCopying, NSObjectProtocol {
  dataType(): interop.Enum<typeof MPSDataType>;

  descriptor(): MPSCNNConvolutionDescriptor;

  weights(): interop.Pointer;

  biasTerms(): interop.Pointer;

  load(): boolean;

  purge(): void;

  label(): string | null;

  rangesForUInt8Kernel?(): interop.Pointer;

  lookupTableForUInt8Kernel?(): interop.Pointer;

  weightsQuantizationType?(): interop.Enum<typeof MPSCNNWeightsQuantizationType>;

  updateWithCommandBufferGradientStateSourceState?(commandBuffer: MTLCommandBuffer, gradientState: MPSCNNConvolutionGradientState, sourceState: MPSCNNConvolutionWeightsAndBiasesState): MPSCNNConvolutionWeightsAndBiasesState | null;

  updateWithGradientStateSourceState?(gradientState: MPSCNNConvolutionGradientState, sourceState: MPSCNNConvolutionWeightsAndBiasesState): boolean;

  copyWithZoneDevice?(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  weightsLayout?(): interop.Enum<typeof MPSCNNConvolutionWeightsLayout>;

  kernelWeightsDataType?(): interop.Enum<typeof MPSDataType>;
}

declare class MPSCNNConvolutionDataSource extends NativeObject implements MPSCNNConvolutionDataSource {
}

declare interface MPSDeviceProvider {
  mpsMTLDevice(): MTLDevice;
}

declare class MPSDeviceProvider extends NativeObject implements MPSDeviceProvider {
}

declare interface MPSCNNBatchNormalizationDataSource extends NSObjectProtocol, NSCopying {
  numberOfFeatureChannels(): number;

  gamma(): interop.Pointer;

  beta(): interop.Pointer;

  mean(): interop.Pointer;

  variance(): interop.Pointer;

  load(): boolean;

  purge(): void;

  label(): string | null;

  updateGammaAndBetaWithCommandBufferBatchNormalizationState?(commandBuffer: MTLCommandBuffer, batchNormalizationState: MPSCNNBatchNormalizationState): MPSCNNNormalizationGammaAndBetaState | null;

  updateMeanAndVarianceWithCommandBufferBatchNormalizationState?(commandBuffer: MTLCommandBuffer, batchNormalizationState: MPSCNNBatchNormalizationState): MPSCNNNormalizationMeanAndVarianceState | null;

  updateGammaAndBetaWithBatchNormalizationState?(batchNormalizationState: MPSCNNBatchNormalizationState): boolean;

  updateMeanAndVarianceWithBatchNormalizationState?(batchNormalizationState: MPSCNNBatchNormalizationState): boolean;

  epsilon?(): number;

  encodeWithCoder?(aCoder: NSCoder): void;

  initWithCoder?(aDecoder: NSCoder): this;

  copyWithZoneDevice?(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSCNNBatchNormalizationDataSource extends NativeObject implements MPSCNNBatchNormalizationDataSource {
  static readonly supportsSecureCoding: boolean;

}

declare interface MPSImageAllocator extends NSObjectProtocol, NSSecureCoding {
  imageForCommandBufferImageDescriptorKernel(cmdBuf: MTLCommandBuffer, descriptor: MPSImageDescriptor, kernel: MPSKernel): MPSImage;

  imageBatchForCommandBufferImageDescriptorKernelCount?(cmdBuf: MTLCommandBuffer, descriptor: MPSImageDescriptor, kernel: MPSKernel, count: number): NSArray;
}

declare class MPSImageAllocator extends NativeObject implements MPSImageAllocator {
}

declare interface MPSNNLossCallback extends NSObjectProtocol, NSSecureCoding, NSCopying {
  scalarWeightForSourceImageDestinationImage(sourceImage: MPSImage, destinationImage: MPSImage): number;
}

declare class MPSNNLossCallback extends NativeObject implements MPSNNLossCallback {
}

declare interface MPSNDArrayAllocator extends NSObjectProtocol, NSSecureCoding, NSCopying {
  arrayForCommandBufferArrayDescriptorKernel(cmdBuf: MTLCommandBuffer, descriptor: MPSNDArrayDescriptor, kernel: MPSKernel): MPSNDArray;
}

declare class MPSNDArrayAllocator extends NativeObject implements MPSNDArrayAllocator {
}

declare interface MPSNNTrainableNode extends NSObjectProtocol {
  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;
}

declare class MPSNNTrainableNode extends NativeObject implements MPSNNTrainableNode {
}

declare interface MPSNNGramMatrixCallback extends NSObjectProtocol, NSSecureCoding, NSCopying {
  alphaForSourceImageDestinationImage(sourceImage: MPSImage, destinationImage: MPSImage): number;
}

declare class MPSNNGramMatrixCallback extends NativeObject implements MPSNNGramMatrixCallback {
}

declare interface MPSCNNGroupNormalizationDataSource extends NSObjectProtocol, NSCopying {
  gamma(): interop.Pointer;

  beta(): interop.Pointer;

  readonly numberOfFeatureChannels: number;

  numberOfGroups: number;

  label(): string | null;

  updateGammaAndBetaWithCommandBufferGroupNormalizationStateBatch?(commandBuffer: MTLCommandBuffer, groupNormalizationStateBatch: NSArray<interop.Object> | Array<interop.Object>): MPSCNNNormalizationGammaAndBetaState | null;

  updateGammaAndBetaWithGroupNormalizationStateBatch?(groupNormalizationStateBatch: NSArray<interop.Object> | Array<interop.Object>): boolean;

  epsilon?(): number;

  encodeWithCoder?(aCoder: NSCoder): void;

  initWithCoder?(aDecoder: NSCoder): this;

  copyWithZoneDevice?(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSCNNGroupNormalizationDataSource extends NativeObject implements MPSCNNGroupNormalizationDataSource {
  static readonly supportsSecureCoding: boolean;

}

declare interface MPSImageTransformProvider extends NSSecureCoding, NSObjectProtocol {
  transformForSourceImageHandle(image: MPSImage, handle: MPSHandle | null): MPSScaleTransform;
}

declare class MPSImageTransformProvider extends NativeObject implements MPSImageTransformProvider {
}

declare interface MPSHeapProvider extends NSObjectProtocol {
  newHeapWithDescriptor(descriptor: MTLHeapDescriptor): MTLHeap;

  retireHeapCacheDelay?(heap: MTLHeap, seconds: number): void;
}

declare class MPSHeapProvider extends NativeObject implements MPSHeapProvider {
}

declare interface MPSImageSizeEncodingState extends NSObjectProtocol {
  readonly sourceWidth: number;

  readonly sourceHeight: number;
}

declare class MPSImageSizeEncodingState extends NativeObject implements MPSImageSizeEncodingState {
}

declare class MPSCNNConvolutionGradientStateNode extends MPSNNGradientStateNode {
}

declare class MPSCNNDropoutGradient extends MPSCNNGradientKernel {
  readonly keepProbability: number;

  readonly seed: number;

  readonly maskStrideInPixels: MTLSize;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  initWithDeviceKeepProbabilitySeedMaskStrideInPixels(device: MTLDevice, keepProbability: number, seed: number, maskStrideInPixels: MTLSize): this;
}

declare class MPSNNConcatenationGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, gradientSourceNode: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(gradientSourceNode: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;
}

declare class MPSImageMultiply extends MPSImageArithmetic {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSImageGaussianBlur extends MPSUnaryImageKernel {
  initWithDeviceSigma(device: MTLDevice, sigma: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly sigma: number;
}

declare class MPSCNNUpsamplingNearestGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateScaleFactorXScaleFactorY<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, scaleFactorX: number, scaleFactorY: number): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateScaleFactorXScaleFactorY(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, scaleFactorX: number, scaleFactorY: number): this;

  readonly scaleFactorX: number;

  readonly scaleFactorY: number;
}

declare class MPSMatrixSoftMax extends MPSMatrixUnaryKernel {
  sourceRows: number;

  sourceColumns: number;

  initWithDevice(device: MTLDevice): this;

  encodeToCommandBufferInputMatrixResultMatrix(commandBuffer: MTLCommandBuffer, inputMatrix: MPSMatrix, resultMatrix: MPSMatrix): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSMatrixRandomPhilox extends MPSMatrixRandom {
  initWithDevice(device: MTLDevice): this;

  initWithDeviceDestinationDataTypeSeedDistributionDescriptor(device: MTLDevice, destinationDataType: interop.Enum<typeof MPSDataType>, seed: number, distributionDescriptor: MPSMatrixRandomDistributionDescriptor): this;

  initWithDeviceDestinationDataTypeSeed(device: MTLDevice, destinationDataType: interop.Enum<typeof MPSDataType>, seed: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNSubtractGradient extends MPSCNNArithmeticGradient {
  initWithDeviceIsSecondarySourceFilter(device: MTLDevice, isSecondarySourceFilter: boolean): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNNForwardLossNode extends MPSNNFilterNode {
  readonly lossType: interop.Enum<typeof MPSCNNLossType>;

  readonly reductionType: interop.Enum<typeof MPSCNNReductionType>;

  readonly numberOfClasses: number;

  readonly reduceAcrossBatch: boolean;

  readonly weight: number;

  readonly labelSmoothing: number;

  readonly epsilon: number;

  readonly delta: number;

  propertyCallBack: MPSNNLossCallback;

  static nodeWithSourceLabelsWeightsLossDescriptor<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, labels: MPSNNImageNode, weights: MPSNNImageNode, descriptor: MPSCNNLossDescriptor): InstanceType<This>;

  static nodeWithSourceLabelsLossDescriptor<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, labels: MPSNNImageNode, descriptor: MPSCNNLossDescriptor): InstanceType<This>;

  static nodeWithSourcesLossDescriptor<This extends abstract new (...args: any) => any>(this: This, sourceNodes: NSArray<interop.Object> | Array<interop.Object>, descriptor: MPSCNNLossDescriptor): InstanceType<This>;

  initWithSourceLabelsWeightsLossDescriptor(source: MPSNNImageNode, labels: MPSNNImageNode, weights: MPSNNImageNode | null, descriptor: MPSCNNLossDescriptor): this;

  initWithSourceLabelsLossDescriptor(source: MPSNNImageNode, labels: MPSNNImageNode, descriptor: MPSCNNLossDescriptor): this;

  initWithSourcesLossDescriptor(sourceNodes: NSArray<interop.Object> | Array<interop.Object>, descriptor: MPSCNNLossDescriptor): this;

  // @ts-ignore MemberDecl.tsIgnore
  gradientFilterWithSources(sourceGradient: NSArray<interop.Object> | Array<interop.Object>): MPSNNLossGradientNode;

  // @ts-ignore MemberDecl.tsIgnore
  gradientFiltersWithSources(sourceGradient: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  // @ts-ignore MemberDecl.tsIgnore
  gradientFilterWithSource(sourceGradient: MPSNNImageNode): MPSNNLossGradientNode;

  // @ts-ignore MemberDecl.tsIgnore
  gradientFiltersWithSource(sourceGradient: MPSNNImageNode): NSArray;
}

declare class MPSImageAdd extends MPSImageArithmetic {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSMatrixRandomDistributionDescriptor extends NSObject implements NSCopying {
  distributionType: interop.Enum<typeof MPSMatrixRandomDistribution>;

  minimum: number;

  maximum: number;

  mean: number;

  standardDeviation: number;

  static uniformDistributionDescriptorWithMinimumMaximum(minimum: number, maximum: number): MPSMatrixRandomDistributionDescriptor;

  static normalDistributionDescriptorWithMeanStandardDeviation(mean: number, standardDeviation: number): MPSMatrixRandomDistributionDescriptor;

  static normalDistributionDescriptorWithMeanStandardDeviationMinimumMaximum(mean: number, standardDeviation: number, minimum: number, maximum: number): MPSMatrixRandomDistributionDescriptor;

  static defaultDistributionDescriptor(): MPSMatrixRandomDistributionDescriptor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSCNNBatchNormalizationNode extends MPSNNFilterNode implements MPSNNTrainableNode {
  flags: interop.Enum<typeof MPSCNNBatchNormalizationFlags>;

  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

  static nodeWithSourceDataSource<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, dataSource: MPSCNNBatchNormalizationDataSource): InstanceType<This>;

  initWithSourceDataSource(source: MPSNNImageNode, dataSource: MPSCNNBatchNormalizationDataSource): this;

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

declare class MPSMatrixNeuronGradient extends MPSMatrixBinaryKernel {
  sourceNumberOfFeatureVectors: number;

  sourceInputFeatureChannels: number;

  alpha: number;

  setNeuronTypeParameterAParameterBParameterC(neuronType: interop.Enum<typeof MPSCNNNeuronType>, parameterA: number, parameterB: number, parameterC: number): void;

  neuronType(): interop.Enum<typeof MPSCNNNeuronType>;

  neuronParameterA(): number;

  neuronParameterB(): number;

  neuronParameterC(): number;

  setNeuronToPReLUWithParametersA(A: NSData): void;

  initWithDevice(device: MTLDevice): this;

  encodeToCommandBufferGradientMatrixInputMatrixBiasVectorResultGradientForDataMatrixResultGradientForBiasVector(commandBuffer: MTLCommandBuffer, gradientMatrix: MPSMatrix, inputMatrix: MPSMatrix, biasVector: MPSVector | null, resultGradientForDataMatrix: MPSMatrix, resultGradientForBiasVector: MPSVector | null): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSRayIntersector extends MPSKernel implements NSSecureCoding, NSCopying {
  cullMode: interop.Enum<typeof MTLCullMode>;

  frontFacingWinding: interop.Enum<typeof MTLWinding>;

  triangleIntersectionTestType: interop.Enum<typeof MPSTriangleIntersectionTestType>;

  boundingBoxIntersectionTestType: interop.Enum<typeof MPSBoundingBoxIntersectionTestType>;

  rayMaskOptions: interop.Enum<typeof MPSRayMaskOptions>;

  rayMaskOperator: interop.Enum<typeof MPSRayMaskOperator>;

  rayStride: number;

  intersectionStride: number;

  rayDataType: interop.Enum<typeof MPSRayDataType>;

  intersectionDataType: interop.Enum<typeof MPSIntersectionDataType>;

  rayIndexDataType: interop.Enum<typeof MPSDataType>;

  rayMask: number;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  recommendedMinimumRayBatchSizeForRayCount(rayCount: number): number;

  encodeWithCoder(coder: NSCoder): void;

  encodeIntersectionToCommandBufferIntersectionTypeRayBufferRayBufferOffsetIntersectionBufferIntersectionBufferOffsetRayCountAccelerationStructure(commandBuffer: MTLCommandBuffer, intersectionType: interop.Enum<typeof MPSIntersectionType>, rayBuffer: MTLBuffer, rayBufferOffset: number, intersectionBuffer: MTLBuffer, intersectionBufferOffset: number, rayCount: number, accelerationStructure: MPSAccelerationStructure): void;

  encodeIntersectionToCommandBufferIntersectionTypeRayBufferRayBufferOffsetIntersectionBufferIntersectionBufferOffsetRayCountBufferRayCountBufferOffsetAccelerationStructure(commandBuffer: MTLCommandBuffer, intersectionType: interop.Enum<typeof MPSIntersectionType>, rayBuffer: MTLBuffer, rayBufferOffset: number, intersectionBuffer: MTLBuffer, intersectionBufferOffset: number, rayCountBuffer: MTLBuffer, rayCountBufferOffset: number, accelerationStructure: MPSAccelerationStructure): void;

  encodeIntersectionToCommandBufferIntersectionTypeRayBufferRayBufferOffsetRayIndexBufferRayIndexBufferOffsetIntersectionBufferIntersectionBufferOffsetRayIndexCountAccelerationStructure(commandBuffer: MTLCommandBuffer, intersectionType: interop.Enum<typeof MPSIntersectionType>, rayBuffer: MTLBuffer, rayBufferOffset: number, rayIndexBuffer: MTLBuffer, rayIndexBufferOffset: number, intersectionBuffer: MTLBuffer, intersectionBufferOffset: number, rayIndexCount: number, accelerationStructure: MPSAccelerationStructure): void;

  encodeIntersectionToCommandBufferIntersectionTypeRayBufferRayBufferOffsetRayIndexBufferRayIndexBufferOffsetIntersectionBufferIntersectionBufferOffsetRayIndexCountBufferRayIndexCountBufferOffsetAccelerationStructure(commandBuffer: MTLCommandBuffer, intersectionType: interop.Enum<typeof MPSIntersectionType>, rayBuffer: MTLBuffer, rayBufferOffset: number, rayIndexBuffer: MTLBuffer, rayIndexBufferOffset: number, intersectionBuffer: MTLBuffer, intersectionBufferOffset: number, rayIndexCountBuffer: MTLBuffer, rayIndexCountBufferOffset: number, accelerationStructure: MPSAccelerationStructure): void;

  encodeIntersectionToCommandBufferIntersectionTypeRayTextureIntersectionTextureAccelerationStructure(commandBuffer: MTLCommandBuffer, intersectionType: interop.Enum<typeof MPSIntersectionType>, rayTexture: MTLTexture, intersectionTexture: MTLTexture, accelerationStructure: MPSAccelerationStructure): void;

  static readonly supportsSecureCoding: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSTemporalAA extends MPSKernel implements NSSecureCoding, NSCopying {
  blendFactor: number;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  encodeWithCoder(coder: NSCoder): void;

  encodeToCommandBufferSourceTexturePreviousTextureDestinationTextureMotionVectorTextureDepthTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, previousTexture: MTLTexture, destinationTexture: MTLTexture, motionVectorTexture: MTLTexture | null, depthTexture: MTLTexture | null): void;

  static readonly supportsSecureCoding: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSSVGFDenoiser extends NSObject {
  readonly svgf: MPSSVGF;

  readonly textureAllocator: MPSSVGFTextureAllocator;

  bilateralFilterIterations: number;

  initWithDevice(device: MTLDevice): this;

  initWithSVGFTextureAllocator(svgf: MPSSVGF, textureAllocator: MPSSVGFTextureAllocator): this;

  clearTemporalHistory(): void;

  releaseTemporaryTextures(): void;

  encodeToCommandBufferSourceTextureMotionVectorTextureDepthNormalTexturePreviousDepthNormalTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, motionVectorTexture: MTLTexture | null, depthNormalTexture: MTLTexture, previousDepthNormalTexture: MTLTexture | null): MTLTexture;

  encodeToCommandBufferSourceTextureDestinationTextureSourceTexture2DestinationTexture2MotionVectorTextureDepthNormalTexturePreviousDepthNormalTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, destinationTexture: interop.PointerConvertible, sourceTexture2: MTLTexture | null, destinationTexture2: interop.PointerConvertible, motionVectorTexture: MTLTexture | null, depthNormalTexture: MTLTexture, previousDepthNormalTexture: MTLTexture | null): void;
}

declare class MPSSVGFDefaultTextureAllocator extends NSObject implements MPSSVGFTextureAllocator {
  readonly device: MTLDevice;

  readonly allocatedTextureCount: number;

  initWithDevice(device: MTLDevice): this;

  textureWithPixelFormatWidthHeight(pixelFormat: interop.Enum<typeof MTLPixelFormat>, width: number, height: number): MTLTexture;

  returnTexture(texture: MTLTexture): void;

  reset(): void;

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

// @ts-ignore ClassDecl.tsIgnore
declare class MPSSVGF extends MPSKernel implements NSSecureCoding, NSCopying {
  depthWeight: number;

  normalWeight: number;

  luminanceWeight: number;

  temporalWeighting: interop.Enum<typeof MPSTemporalWeighting>;

  temporalReprojectionBlendFactor: number;

  reprojectionThreshold: number;

  minimumFramesForVarianceEstimation: number;

  varianceEstimationRadius: number;

  varianceEstimationSigma: number;

  variancePrefilterSigma: number;

  variancePrefilterRadius: number;

  bilateralFilterSigma: number;

  bilateralFilterRadius: number;

  channelCount: number;

  channelCount2: number;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  encodeWithCoder(coder: NSCoder): void;

  encodeReprojectionToCommandBufferSourceTexturePreviousTextureDestinationTexturePreviousLuminanceMomentsTextureDestinationLuminanceMomentsTexturePreviousFrameCountTextureDestinationFrameCountTextureMotionVectorTextureDepthNormalTexturePreviousDepthNormalTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, previousTexture: MTLTexture, destinationTexture: MTLTexture, previousLuminanceMomentsTexture: MTLTexture, destinationLuminanceMomentsTexture: MTLTexture, previousFrameCountTexture: MTLTexture, destinationFrameCountTexture: MTLTexture, motionVectorTexture: MTLTexture | null, depthNormalTexture: MTLTexture | null, previousDepthNormalTexture: MTLTexture | null): void;

  encodeReprojectionToCommandBufferSourceTexturePreviousTextureDestinationTexturePreviousLuminanceMomentsTextureDestinationLuminanceMomentsTextureSourceTexture2PreviousTexture2DestinationTexture2PreviousLuminanceMomentsTexture2DestinationLuminanceMomentsTexture2PreviousFrameCountTextureDestinationFrameCountTextureMotionVectorTextureDepthNormalTexturePreviousDepthNormalTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, previousTexture: MTLTexture, destinationTexture: MTLTexture, previousLuminanceMomentsTexture: MTLTexture, destinationLuminanceMomentsTexture: MTLTexture, sourceTexture2: MTLTexture | null, previousTexture2: MTLTexture | null, destinationTexture2: MTLTexture | null, previousLuminanceMomentsTexture2: MTLTexture | null, destinationLuminanceMomentsTexture2: MTLTexture | null, previousFrameCountTexture: MTLTexture, destinationFrameCountTexture: MTLTexture, motionVectorTexture: MTLTexture | null, depthNormalTexture: MTLTexture | null, previousDepthNormalTexture: MTLTexture | null): void;

  encodeVarianceEstimationToCommandBufferSourceTextureLuminanceMomentsTextureDestinationTextureFrameCountTextureDepthNormalTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, luminanceMomentsTexture: MTLTexture, destinationTexture: MTLTexture, frameCountTexture: MTLTexture, depthNormalTexture: MTLTexture | null): void;

  encodeVarianceEstimationToCommandBufferSourceTextureLuminanceMomentsTextureDestinationTextureSourceTexture2LuminanceMomentsTexture2DestinationTexture2FrameCountTextureDepthNormalTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, luminanceMomentsTexture: MTLTexture, destinationTexture: MTLTexture, sourceTexture2: MTLTexture | null, luminanceMomentsTexture2: MTLTexture | null, destinationTexture2: MTLTexture | null, frameCountTexture: MTLTexture, depthNormalTexture: MTLTexture | null): void;

  encodeBilateralFilterToCommandBufferStepDistanceSourceTextureDestinationTextureDepthNormalTexture(commandBuffer: MTLCommandBuffer, stepDistance: number, sourceTexture: MTLTexture, destinationTexture: MTLTexture, depthNormalTexture: MTLTexture): void;

  encodeBilateralFilterToCommandBufferStepDistanceSourceTextureDestinationTextureSourceTexture2DestinationTexture2DepthNormalTexture(commandBuffer: MTLCommandBuffer, stepDistance: number, sourceTexture: MTLTexture, destinationTexture: MTLTexture, sourceTexture2: MTLTexture | null, destinationTexture2: MTLTexture | null, depthNormalTexture: MTLTexture): void;

  static readonly supportsSecureCoding: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSCNNGroupNormalization extends MPSCNNKernel {
  epsilon: number;

  readonly dataSource: MPSCNNGroupNormalizationDataSource;

  initWithDeviceDataSource(device: MTLDevice, dataSource: MPSCNNGroupNormalizationDataSource): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  reloadGammaAndBetaFromDataSource(): void;

  reloadGammaAndBetaWithCommandBufferGammaAndBetaState(commandBuffer: MTLCommandBuffer, gammaAndBetaState: MPSCNNNormalizationGammaAndBetaState): void;

  // @ts-ignore MemberDecl.tsIgnore
  resultStateForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNGroupNormalizationGradientState | null;

  // @ts-ignore MemberDecl.tsIgnore
  temporaryResultStateForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNGroupNormalizationGradientState | null;
}

declare class MPSInstanceAccelerationStructure extends MPSAccelerationStructure {
  get accelerationStructures(): NSArray | null;
  set accelerationStructures(value: NSArray<interop.Object> | Array<interop.Object> | null);

  instanceBuffer: MTLBuffer | null;

  instanceBufferOffset: number;

  transformBuffer: MTLBuffer | null;

  transformBufferOffset: number;

  transformType: interop.Enum<typeof MPSTransformType>;

  maskBuffer: MTLBuffer | null;

  maskBufferOffset: number;

  instanceCount: number;
}

declare class MPSPolygonBuffer extends NSObject implements NSCopying, NSSecureCoding {
  init(): this;

  initWithCoder(aDecoder: NSCoder): this;

  static polygonBuffer<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): this;

  vertexBuffer: MTLBuffer | null;

  vertexBufferOffset: number;

  indexBuffer: MTLBuffer | null;

  indexBufferOffset: number;

  maskBuffer: MTLBuffer | null;

  maskBufferOffset: number;

  polygonCount: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class MPSCNNNeuronAbsolute extends MPSCNNNeuron {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSNNAdditionNode extends MPSNNBinaryArithmeticNode {
}

declare class MPSAccelerationStructureGroup extends NSObject {
  readonly device: MTLDevice;

  initWithDevice(device: MTLDevice): this;
}

declare class MPSNDArrayLUTDequantize extends MPSNDArrayMultiaryKernel {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSNDArrayQuantizedMatrixMultiplication extends MPSNDArrayMatrixMultiplication {
  initWithDeviceLeftQuantizationDescriptorRightQuantizationDescriptor(device: MTLDevice, leftQuantizationDescriptor: MPSNDArrayQuantizationDescriptor | null, rightQuantizationDescriptor: MPSNDArrayQuantizationDescriptor | null): this;
}

declare class MPSNDArrayIdentity extends MPSNDArrayUnaryKernel {
  initWithDevice(device: MTLDevice): this;

  reshapeWithCommandBufferSourceArrayShapeDestinationArray(cmdBuf: MTLCommandBuffer | null, sourceArray: MPSNDArray, shape: NSArray<interop.Object> | Array<interop.Object>, destinationArray: MPSNDArray | null): MPSNDArray | null;

  reshapeWithCommandBufferSourceArrayDimensionCountDimensionSizesDestinationArray(cmdBuf: MTLCommandBuffer | null, sourceArray: MPSNDArray, numberOfDimensions: number, dimensionSizes: interop.PointerConvertible, destinationArray: MPSNDArray | null): MPSNDArray | null;

  reshapeWithCommandEncoderCommandBufferSourceArrayShapeDestinationArray(encoder: MTLComputeCommandEncoder | null, cmdBuf: MTLCommandBuffer | null, sourceArray: MPSNDArray, shape: NSArray<interop.Object> | Array<interop.Object>, destinationArray: MPSNDArray | null): MPSNDArray | null;

  reshapeWithCommandEncoderCommandBufferSourceArrayDimensionCountDimensionSizesDestinationArray(encoder: MTLComputeCommandEncoder | null, cmdBuf: MTLCommandBuffer | null, sourceArray: MPSNDArray, numberOfDimensions: number, dimensionSizes: interop.PointerConvertible, destinationArray: MPSNDArray | null): MPSNDArray | null;
}

declare class MPSNDArrayGather extends MPSNDArrayBinaryKernel {
  axis: number;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayBinarySecondaryGradientKernel extends MPSNDArrayMultiaryGradientKernel {
  initWithDevice(device: MTLDevice): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArraySourceGradientGradientState(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, gradient: MPSNDArray, state: MPSState): MPSNDArray;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArraySourceGradientGradientStateDestinationArray(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, gradient: MPSNDArray, state: MPSState, destination: MPSNDArray): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayBinaryPrimaryGradientKernel extends MPSNDArrayMultiaryGradientKernel {
  initWithDevice(device: MTLDevice): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArraySourceGradientGradientState(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, gradient: MPSNDArray, state: MPSState): MPSNDArray;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArraySourceGradientGradientStateDestinationArray(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, gradient: MPSNDArray, state: MPSState, destination: MPSNDArray): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayMultiaryKernel extends MPSNDArrayMultiaryBase {
  initWithDeviceSourceCount(device: MTLDevice, count: number): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceArrays(cmdBuf: MTLCommandBuffer, sourceArrays: NSArray<interop.Object> | Array<interop.Object>): MPSNDArray;

  encodeToCommandBufferSourceArraysDestinationArray(cmdBuf: MTLCommandBuffer, sourceArrays: NSArray<interop.Object> | Array<interop.Object>, destination: MPSNDArray): void;

  encodeToCommandBufferSourceArraysResultStateOutputStateIsTemporary(cmdBuf: MTLCommandBuffer, sourceArrays: NSArray<interop.Object> | Array<interop.Object>, outGradientState: interop.PointerConvertible, outputStateIsTemporary: boolean): MPSNDArray;

  encodeToCommandBufferSourceArraysResultStateDestinationArray(cmdBuf: MTLCommandBuffer, sourceArrays: NSArray<interop.Object> | Array<interop.Object>, outGradientState: MPSState | null, destination: MPSNDArray): void;

  encodeToCommandEncoderCommandBufferSourceArraysDestinationArray(encoder: MTLComputeCommandEncoder | null, commandBuffer: MTLCommandBuffer, sourceArrays: NSArray<interop.Object> | Array<interop.Object>, destination: MPSNDArray): void;
}

declare class MPSNNReductionColumnMinNode extends MPSNNUnaryReductionNode {
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayMultiaryBase extends MPSKernel {
  offsetsAtSourceIndex(sourceIndex: number): MPSNDArrayOffsets;

  edgeModeAtSourceIndex(sourceIndex: number): interop.Enum<typeof MPSImageEdgeMode>;

  kernelSizesForSourceIndex(sourceIndex: number): MPSNDArraySizes;

  stridesForSourceIndex(sourceIndex: number): MPSNDArrayOffsets;

  dilationRatesForSourceIndex(sourceIndex: number): MPSNDArraySizes;

  destinationArrayAllocator: MPSNDArrayAllocator;

  initWithDeviceSourceCount(device: MTLDevice, count: number): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  resultStateForSourceArraysSourceStatesDestinationArray(sourceArrays: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationArray: MPSNDArray): MPSState | null;

  destinationArrayDescriptorForSourceArraysSourceState(sources: NSArray<interop.Object> | Array<interop.Object>, state: MPSState | null): MPSNDArrayDescriptor;
}

declare class MPSCNNGroupNormalizationNode extends MPSNNFilterNode implements MPSNNTrainableNode {
  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

  static nodeWithSourceDataSource<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, dataSource: MPSCNNGroupNormalizationDataSource): InstanceType<This>;

  initWithSourceDataSource(source: MPSNNImageNode, dataSource: MPSCNNGroupNormalizationDataSource): this;

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

declare class MPSCNNUpsamplingBilinearGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateScaleFactorXScaleFactorY<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, scaleFactorX: number, scaleFactorY: number): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateScaleFactorXScaleFactorY(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, scaleFactorX: number, scaleFactorY: number): this;

  readonly scaleFactorX: number;

  readonly scaleFactorY: number;
}

declare class MPSNNPadGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;
}

declare class MPSNNReshapeGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;
}

declare class MPSNNReshapeNode extends MPSNNFilterNode {
  static nodeWithSourceResultWidthResultHeightResultFeatureChannels<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, resultWidth: number, resultHeight: number, resultFeatureChannels: number): InstanceType<This>;

  initWithSourceResultWidthResultHeightResultFeatureChannels(source: MPSNNImageNode, resultWidth: number, resultHeight: number, resultFeatureChannels: number): this;
}

declare class MPSNNReduceFeatureChannelsSum extends MPSNNReduceUnary {
  weight: number;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNConcatenationNode extends MPSNNFilterNode {
  static nodeWithSources<This extends abstract new (...args: any) => any>(this: This, sourceNodes: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  initWithSources(sourceNodes: NSArray<interop.Object> | Array<interop.Object>): this;
}

declare class MPSCNNLogSoftMaxNode extends MPSNNFilterNode {
  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSNNReduceRowMean extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNLossNode extends MPSNNFilterNode {
  static nodeWithSourceLossDescriptor<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, descriptor: MPSCNNLossDescriptor): InstanceType<This>;

  initWithSourceLossDescriptor(source: MPSNNImageNode, descriptor: MPSCNNLossDescriptor): this;

  readonly inputLabels: MPSNNLabelsNode;
}

declare class MPSCNNNeuronReLUN extends MPSCNNNeuron {
  initWithDeviceAB(device: MTLDevice, a: number, b: number): this;
}

declare class MPSNNMultiplicationGradientNode extends MPSNNArithmeticGradientNode {
}

declare class MPSNNAdditionGradientNode extends MPSNNArithmeticGradientNode {
}

declare class MPSNNSubtractionNode extends MPSNNBinaryArithmeticNode {
}

declare class MPSNNBinaryArithmeticNode extends MPSNNFilterNode {
  static nodeWithSources<This extends abstract new (...args: any) => any>(this: This, sourceNodes: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static nodeWithLeftSourceRightSource<This extends abstract new (...args: any) => any>(this: This, left: MPSNNImageNode, right: MPSNNImageNode): InstanceType<This>;

  initWithSources(sourceNodes: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithLeftSourceRightSource(left: MPSNNImageNode, right: MPSNNImageNode): this;

  gradientClass(): interop.Object;

  gradientFiltersWithSources(gradientImages: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  primaryScale: number;

  secondaryScale: number;

  bias: number;

  primaryStrideInPixelsX: number;

  primaryStrideInPixelsY: number;

  primaryStrideInFeatureChannels: number;

  secondaryStrideInPixelsX: number;

  secondaryStrideInPixelsY: number;

  secondaryStrideInFeatureChannels: number;

  minimumValue: number;

  maximumValue: number;
}

declare class MPSNNLanczosScaleNode extends MPSNNScaleNode {
}

declare class MPSNNBilinearScaleNode extends MPSNNScaleNode {
}

declare class MPSNNScaleNode extends MPSNNFilterNode {
  static nodeWithSourceOutputSize<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, size: MTLSize): InstanceType<This>;

  static nodeWithSourceTransformProviderOutputSize<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, transformProvider: MPSImageTransformProvider | null, size: MTLSize): InstanceType<This>;

  initWithSourceOutputSize(sourceNode: MPSNNImageNode, size: MTLSize): this;

  initWithSourceTransformProviderOutputSize(sourceNode: MPSNNImageNode, transformProvider: MPSImageTransformProvider | null, size: MTLSize): this;
}

declare class MPSCNNCrossChannelNormalizationNode extends MPSCNNNormalizationNode {
  kernelSizeInFeatureChannels: number;

  static nodeWithSourceKernelSize<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, kernelSize: number): InstanceType<This>;

  initWithSourceKernelSize(sourceNode: MPSNNImageNode, kernelSize: number): this;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNSpatialNormalizationNode extends MPSCNNNormalizationNode {
  kernelWidth: number;

  kernelHeight: number;

  static nodeWithSourceKernelSize<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, kernelSize: number): InstanceType<This>;

  initWithSourceKernelSize(sourceNode: MPSNNImageNode, kernelSize: number): this;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNNormalizationNode extends MPSNNFilterNode {
  alpha: number;

  beta: number;

  delta: number;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNPoolingL2NormGradientNode extends MPSCNNPoolingGradientNode {
}

declare class MPSCNNPoolingGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateKernelWidthKernelHeightStrideInPixelsXStrideInPixelsYPaddingPolicy<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number, paddingPolicy: MPSNNPadding | null): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateKernelWidthKernelHeightStrideInPixelsXStrideInPixelsYPaddingPolicy(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number, paddingPolicy: MPSNNPadding | null): this;

  readonly kernelWidth: number;

  readonly kernelHeight: number;

  readonly strideInPixelsX: number;

  readonly strideInPixelsY: number;
}

declare class MPSCNNDilatedPoolingMaxNode extends MPSNNFilterNode {
  readonly dilationRateX: number;

  readonly dilationRateY: number;

  static nodeWithSourceFilterSize<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, size: number): InstanceType<This>;

  static nodeWithSourceFilterSizeStrideDilationRate<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, size: number, stride: number, dilationRate: number): InstanceType<This>;

  initWithSourceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsYDilationRateXDilationRateY(sourceNode: MPSNNImageNode, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number, dilationRateX: number, dilationRateY: number): this;

  initWithSourceFilterSizeStrideDilationRate(sourceNode: MPSNNImageNode, size: number, stride: number, dilationRate: number): this;

  initWithSourceFilterSize(sourceNode: MPSNNImageNode, size: number): this;
}

declare class MPSCNNPoolingL2NormNode extends MPSCNNPoolingNode {
}

declare class MPSCNNPoolingAverageNode extends MPSCNNPoolingNode {
}

declare class MPSNNReductionFeatureChannelsSumNode extends MPSNNUnaryReductionNode {
  weight: number;
}

declare class MPSNNReductionSpatialMeanNode extends MPSNNUnaryReductionNode {
}

declare class MPSNNReductionColumnMeanNode extends MPSNNUnaryReductionNode {
}

declare class MPSNNReductionFeatureChannelsMaxNode extends MPSNNUnaryReductionNode {
}

declare class MPSNNReductionColumnMaxNode extends MPSNNUnaryReductionNode {
}

declare class MPSNNReductionFeatureChannelsArgumentMinNode extends MPSNNUnaryReductionNode {
}

declare class MPSCNNNeuronExponentialNode extends MPSCNNNeuronNode {
  static nodeWithSourceABC<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number, c: number): InstanceType<This>;

  initWithSourceABC(sourceNode: MPSNNImageNode, a: number, b: number, c: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSImageStatisticsMeanAndVariance extends MPSUnaryImageKernel {
  clipRectSource: MTLRegion;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNMultiplicationNode extends MPSNNBinaryArithmeticNode {
}

declare class MPSCNNNeuronPowerNode extends MPSCNNNeuronNode {
  static nodeWithSourceABC<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number, c: number): InstanceType<This>;

  initWithSourceABC(sourceNode: MPSNNImageNode, a: number, b: number, c: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNNeuronTanHNode extends MPSCNNNeuronNode {
  static nodeWithSourceAB<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number): InstanceType<This>;

  initWithSourceAB(sourceNode: MPSNNImageNode, a: number, b: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNNeuronSoftSignNode extends MPSCNNNeuronNode {
  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNNeuronSoftPlusNode extends MPSCNNNeuronNode {
  static nodeWithSourceAB<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number): InstanceType<This>;

  initWithSourceAB(sourceNode: MPSNNImageNode, a: number, b: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNNeuronHardSigmoidNode extends MPSCNNNeuronNode {
  static nodeWithSourceAB<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number): InstanceType<This>;

  initWithSourceAB(sourceNode: MPSNNImageNode, a: number, b: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNNeuronSigmoidNode extends MPSCNNNeuronNode {
  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNNeuronELUNode extends MPSCNNNeuronNode {
  static nodeWithSourceA<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number): InstanceType<This>;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;

  initWithSourceA(sourceNode: MPSNNImageNode, a: number): this;
}

declare class MPSCNNNeuronNode extends MPSNNFilterNode {
  static nodeWithSourceDescriptor<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, descriptor: MPSNNNeuronDescriptor): InstanceType<This>;

  readonly a: number;

  readonly b: number;

  readonly c: number;
}

declare class MPSCNNFullyConnectedGradientNode extends MPSCNNConvolutionGradientNode {
  static nodeWithSourceGradientSourceImageConvolutionGradientStateWeights<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSCNNConvolutionGradientStateNode, weights: MPSCNNConvolutionDataSource | null): InstanceType<This>;

  initWithSourceGradientSourceImageConvolutionGradientStateWeights(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSCNNConvolutionGradientStateNode, weights: MPSCNNConvolutionDataSource | null): this;
}

declare class MPSCNNConvolutionGradientNode extends MPSNNGradientFilterNode implements MPSNNTrainableNode {
  static nodeWithSourceGradientSourceImageConvolutionGradientStateWeights<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSCNNConvolutionGradientStateNode, weights: MPSCNNConvolutionDataSource | null): InstanceType<This>;

  initWithSourceGradientSourceImageConvolutionGradientStateWeights(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSCNNConvolutionGradientStateNode, weights: MPSCNNConvolutionDataSource | null): this;

  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

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

declare class MPSCNNConvolutionTransposeNode extends MPSCNNConvolutionNode {
  static nodeWithSourceConvolutionGradientStateWeights<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, convolutionGradientState: MPSCNNConvolutionGradientStateNode | null, weights: MPSCNNConvolutionDataSource): InstanceType<This>;

  initWithSourceConvolutionGradientStateWeights(sourceNode: MPSNNImageNode, convolutionGradientState: MPSCNNConvolutionGradientStateNode | null, weights: MPSCNNConvolutionDataSource): this;
}

declare class MPSCNNFullyConnectedNode extends MPSCNNConvolutionNode {
  static nodeWithSourceWeights<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource): InstanceType<This>;

  initWithSourceWeights(sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource): this;
}

declare class MPSCNNConvolutionNode extends MPSNNFilterNode implements MPSNNTrainableNode {
  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

  accumulatorPrecision: interop.Enum<typeof MPSNNConvolutionAccumulatorPrecisionOption>;

  static nodeWithSourceWeights<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource): InstanceType<This>;

  initWithSourceWeights(sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource): this;

  readonly convolutionGradientState: MPSCNNConvolutionGradientStateNode;

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

declare class MPSNNMultiaryGradientStateNode extends MPSNNStateNode {
}

declare class MPSNNBinaryGradientStateNode extends MPSNNStateNode {
}

declare class MPSCNNConvolutionTransposeGradientStateNode extends MPSCNNConvolutionGradientStateNode {
}

declare class MPSNNSlice extends MPSCNNKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNResizeBilinear extends MPSCNNKernel {
  readonly resizeWidth: number;

  readonly resizeHeight: number;

  readonly alignCorners: boolean;

  initWithDeviceResizeWidthResizeHeightAlignCorners(device: MTLDevice, resizeWidth: number, resizeHeight: number, alignCorners: boolean): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNPadGradient extends MPSCNNGradientKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNPad extends MPSCNNKernel {
  paddingSizeBefore: MPSImageCoordinate;

  paddingSizeAfter: MPSImageCoordinate;

  fillValue: number;

  initWithDevice(device: MTLDevice): this;

  initWithDevicePaddingSizeBeforePaddingSizeAfter(device: MTLDevice, paddingSizeBefore: MPSImageCoordinate, paddingSizeAfter: MPSImageCoordinate): this;

  initWithDevicePaddingSizeBeforePaddingSizeAfterFillValueArray(device: MTLDevice, paddingSizeBefore: MPSImageCoordinate, paddingSizeAfter: MPSImageCoordinate, fillValueArray: NSData | null): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReshape extends MPSCNNKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImageReshapedWidthReshapedHeightReshapedFeatureChannels(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, reshapedWidth: number, reshapedHeight: number, reshapedFeatureChannels: number): MPSImage;

  encodeToCommandBufferSourceImageDestinationStateDestinationStateIsTemporaryReshapedWidthReshapedHeightReshapedFeatureChannels(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, outState: interop.PointerConvertible, isTemporary: boolean, reshapedWidth: number, reshapedHeight: number, reshapedFeatureChannels: number): MPSImage;

  encodeBatchToCommandBufferSourceImagesReshapedWidthReshapedHeightReshapedFeatureChannels(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, reshapedWidth: number, reshapedHeight: number, reshapedFeatureChannels: number): NSArray;

  encodeBatchToCommandBufferSourceImagesDestinationStatesDestinationStateIsTemporaryReshapedWidthReshapedHeightReshapedFeatureChannels(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, outStates: interop.PointerConvertible, isTemporary: boolean, reshapedWidth: number, reshapedHeight: number, reshapedFeatureChannels: number): NSArray;
}

declare class MPSNNLocalCorrelation extends MPSNNReduceBinary {
  windowInX: number;

  windowInY: number;

  strideInX: number;

  strideInY: number;

  initWithDevice(device: MTLDevice): this;

  initWithDeviceWindowInXWindowInYStrideInXStrideInY(device: MTLDevice, windowInX: number, windowInY: number, strideInX: number, strideInY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReduceFeatureChannelsAndWeightsSum extends MPSNNReduceBinary {
  readonly doWeightedSumByNonZeroWeights: boolean;

  initWithDevice(device: MTLDevice): this;

  initWithDeviceDoWeightedSumByNonZeroWeights(device: MTLDevice, doWeightedSumByNonZeroWeights: boolean): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReduceRowSum extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReductionRowMeanNode extends MPSNNUnaryReductionNode {
}

declare class MPSNNReduceFeatureChannelsMean extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReduceColumnMax extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReduceColumnMin extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNOptimizer extends MPSKernel {
  readonly learningRate: number;

  readonly gradientRescale: number;

  applyGradientClipping: boolean;

  readonly gradientClipMax: number;

  readonly gradientClipMin: number;

  readonly regularizationScale: number;

  readonly regularizationType: interop.Enum<typeof MPSNNRegularizationType>;
}

declare class MPSNNGridSample extends MPSCNNBinaryKernel {
  useGridValueAsInputCoordinate: boolean;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSMatrixBatchNormalizationGradient extends MPSMatrixBinaryKernel {
  sourceNumberOfFeatureVectors: number;

  sourceInputFeatureChannels: number;

  epsilon: number;

  setNeuronTypeParameterAParameterBParameterC(neuronType: interop.Enum<typeof MPSCNNNeuronType>, parameterA: number, parameterB: number, parameterC: number): void;

  neuronType(): interop.Enum<typeof MPSCNNNeuronType>;

  neuronParameterA(): number;

  neuronParameterB(): number;

  neuronParameterC(): number;

  initWithDevice(device: MTLDevice): this;

  encodeToCommandBufferGradientMatrixInputMatrixMeanVectorVarianceVectorGammaVectorBetaVectorResultGradientForDataMatrixResultGradientForGammaVectorResultGradientForBetaVector(commandBuffer: MTLCommandBuffer, gradientMatrix: MPSMatrix, inputMatrix: MPSMatrix, meanVector: MPSVector, varianceVector: MPSVector, gammaVector: MPSVector | null, betaVector: MPSVector | null, resultGradientForDataMatrix: MPSMatrix, resultGradientForGammaVector: MPSVector | null, resultGradientForBetaVector: MPSVector | null): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSMatrixBatchNormalization extends MPSMatrixUnaryKernel {
  sourceNumberOfFeatureVectors: number;

  sourceInputFeatureChannels: number;

  epsilon: number;

  computeStatistics: boolean;

  setNeuronTypeParameterAParameterBParameterC(neuronType: interop.Enum<typeof MPSCNNNeuronType>, parameterA: number, parameterB: number, parameterC: number): void;

  neuronType(): interop.Enum<typeof MPSCNNNeuronType>;

  neuronParameterA(): number;

  neuronParameterB(): number;

  neuronParameterC(): number;

  initWithDevice(device: MTLDevice): this;

  encodeToCommandBufferInputMatrixMeanVectorVarianceVectorGammaVectorBetaVectorResultMatrix(commandBuffer: MTLCommandBuffer, inputMatrix: MPSMatrix, meanVector: MPSVector, varianceVector: MPSVector, gammaVector: MPSVector | null, betaVector: MPSVector | null, resultMatrix: MPSMatrix): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSMatrixFullyConnectedGradient extends MPSMatrixBinaryKernel {
  sourceNumberOfFeatureVectors: number;

  sourceOutputFeatureChannels: number;

  sourceInputFeatureChannels: number;

  alpha: number;

  initWithDevice(device: MTLDevice): this;

  encodeGradientForDataToCommandBufferGradientMatrixWeightMatrixResultGradientForDataMatrix(commandBuffer: MTLCommandBuffer, gradientMatrix: MPSMatrix, weightMatrix: MPSMatrix, resultGradientForDataMatrix: MPSMatrix): void;

  encodeGradientForWeightsAndBiasToCommandBufferGradientMatrixInputMatrixResultGradientForWeightMatrixResultGradientForBiasVector(commandBuffer: MTLCommandBuffer, gradientMatrix: MPSMatrix, inputMatrix: MPSMatrix, resultGradientForWeightMatrix: MPSMatrix, resultGradientForBiasVector: MPSVector | null): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSNNReductionFeatureChannelsArgumentMaxNode extends MPSNNUnaryReductionNode {
}

declare class MPSMatrixNeuron extends MPSMatrixUnaryKernel {
  sourceNumberOfFeatureVectors: number;

  sourceInputFeatureChannels: number;

  alpha: number;

  setNeuronTypeParameterAParameterBParameterC(neuronType: interop.Enum<typeof MPSCNNNeuronType>, parameterA: number, parameterB: number, parameterC: number): void;

  neuronType(): interop.Enum<typeof MPSCNNNeuronType>;

  neuronParameterA(): number;

  neuronParameterB(): number;

  neuronParameterC(): number;

  setNeuronToPReLUWithParametersA(A: NSData): void;

  initWithDevice(device: MTLDevice): this;

  encodeToCommandBufferInputMatrixBiasVectorResultMatrix(commandBuffer: MTLCommandBuffer, inputMatrix: MPSMatrix, biasVector: MPSVector | null, resultMatrix: MPSMatrix): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSRNNMatrixTrainingLayer extends MPSKernel {
  readonly inputFeatureChannels: number;

  readonly outputFeatureChannels: number;

  storeAllIntermediateStates: boolean;

  recurrentOutputIsTemporary: boolean;

  trainingStateIsTemporary: boolean;

  accumulateWeightGradients: boolean;

  initWithDeviceRnnDescriptorTrainableWeights(device: MTLDevice, rnnDescriptor: MPSRNNDescriptor, trainableWeights: NSMutableArray): this;

  createWeightGradientMatricesDataType(matricesOut: NSMutableArray, dataType: interop.Enum<typeof MPSDataType>): void;

  createTemporaryWeightGradientMatricesDataTypeCommandBuffer(matricesOut: NSMutableArray, dataType: interop.Enum<typeof MPSDataType>, commandBuffer: MTLCommandBuffer): void;

  createWeightMatrices(matricesOut: NSMutableArray): void;

  encodeCopyWeightsToCommandBufferWeightsMatrixIdMatrixCopyFromWeightsToMatrixMatrixOffset(commandBuffer: MTLCommandBuffer, weights: NSArray<interop.Object> | Array<interop.Object>, matrixId: interop.Enum<typeof MPSRNNMatrixId>, matrix: MPSMatrix, copyFromWeightsToMatrix: boolean, matrixOffset: MTLOrigin): void;

  encodeForwardSequenceToCommandBufferSourceMatricesSourceOffsetsDestinationMatricesDestinationOffsetsTrainingStatesRecurrentInputStateRecurrentOutputStatesWeights(commandBuffer: MTLCommandBuffer, sourceMatrices: NSArray<interop.Object> | Array<interop.Object>, sourceOffsets: interop.PointerConvertible, destinationMatrices: NSArray<interop.Object> | Array<interop.Object>, destinationOffsets: interop.PointerConvertible, trainingStates: NSMutableArray, recurrentInputState: MPSRNNRecurrentMatrixState | null, recurrentOutputStates: NSMutableArray | null, weights: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeForwardSequenceToCommandBufferSourceMatricesDestinationMatricesTrainingStatesWeights(commandBuffer: MTLCommandBuffer, sourceMatrices: NSArray<interop.Object> | Array<interop.Object>, destinationMatrices: NSArray<interop.Object> | Array<interop.Object>, trainingStates: NSMutableArray, weights: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeGradientSequenceToCommandBufferForwardSourcesForwardSourceOffsetsSourceGradientsSourceGradientOffsetsDestinationGradientsDestinationOffsetsWeightGradientsTrainingStatesRecurrentInputStateRecurrentOutputStatesWeights(commandBuffer: MTLCommandBuffer, forwardSources: NSArray<interop.Object> | Array<interop.Object>, forwardSourceOffsets: interop.PointerConvertible, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceGradientOffsets: interop.PointerConvertible, destinationGradients: NSArray<interop.Object> | Array<interop.Object> | null, destinationOffsets: interop.PointerConvertible, weightGradients: NSArray<interop.Object> | Array<interop.Object> | null, trainingStates: NSArray<interop.Object> | Array<interop.Object>, recurrentInputState: MPSRNNRecurrentMatrixState | null, recurrentOutputStates: NSMutableArray | null, weights: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeGradientSequenceToCommandBufferForwardSourcesSourceGradientsDestinationGradientsWeightGradientsTrainingStatesWeights(commandBuffer: MTLCommandBuffer, forwardSources: NSArray<interop.Object> | Array<interop.Object>, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, destinationGradients: NSArray<interop.Object> | Array<interop.Object> | null, weightGradients: NSArray<interop.Object> | Array<interop.Object> | null, trainingStates: NSArray<interop.Object> | Array<interop.Object>, weights: NSArray<interop.Object> | Array<interop.Object>): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSRNNMatrixTrainingState extends MPSState {
}

declare class MPSRNNMatrixInferenceLayer extends MPSKernel {
  readonly inputFeatureChannels: number;

  readonly outputFeatureChannels: number;

  readonly numberOfLayers: number;

  recurrentOutputIsTemporary: boolean;

  storeAllIntermediateStates: boolean;

  bidirectionalCombineMode: interop.Enum<typeof MPSRNNBidirectionalCombineMode>;

  initWithDeviceRnnDescriptor(device: MTLDevice, rnnDescriptor: MPSRNNDescriptor): this;

  initWithDeviceRnnDescriptors(device: MTLDevice, rnnDescriptors: NSArray<interop.Object> | Array<interop.Object>): this;

  encodeSequenceToCommandBufferSourceMatricesSourceOffsetsDestinationMatricesDestinationOffsetsRecurrentInputStateRecurrentOutputStates(commandBuffer: MTLCommandBuffer, sourceMatrices: NSArray<interop.Object> | Array<interop.Object>, sourceOffsets: interop.PointerConvertible, destinationMatrices: NSArray<interop.Object> | Array<interop.Object>, destinationOffsets: interop.PointerConvertible, recurrentInputState: MPSRNNRecurrentMatrixState | null, recurrentOutputStates: NSMutableArray | null): void;

  encodeSequenceToCommandBufferSourceMatricesDestinationMatricesRecurrentInputStateRecurrentOutputStates(commandBuffer: MTLCommandBuffer, sourceMatrices: NSArray<interop.Object> | Array<interop.Object>, destinationMatrices: NSArray<interop.Object> | Array<interop.Object>, recurrentInputState: MPSRNNRecurrentMatrixState | null, recurrentOutputStates: NSMutableArray | null): void;

  encodeBidirectionalSequenceToCommandBufferSourceSequenceDestinationForwardMatricesDestinationBackwardMatrices(commandBuffer: MTLCommandBuffer, sourceSequence: NSArray<interop.Object> | Array<interop.Object>, destinationForwardMatrices: NSArray<interop.Object> | Array<interop.Object>, destinationBackwardMatrices: NSArray<interop.Object> | Array<interop.Object> | null): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSImageBox extends MPSUnaryImageKernel {
  readonly kernelHeight: number;

  readonly kernelWidth: number;

  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSRNNRecurrentMatrixState extends MPSState {
  getRecurrentOutputMatrixForLayerIndex(layerIndex: number): MPSMatrix;

  getMemoryCellMatrixForLayerIndex(layerIndex: number): MPSMatrix;
}

declare class MPSRNNImageInferenceLayer extends MPSCNNKernel {
  readonly inputFeatureChannels: number;

  readonly outputFeatureChannels: number;

  readonly numberOfLayers: number;

  recurrentOutputIsTemporary: boolean;

  storeAllIntermediateStates: boolean;

  bidirectionalCombineMode: interop.Enum<typeof MPSRNNBidirectionalCombineMode>;

  initWithDeviceRnnDescriptor(device: MTLDevice, rnnDescriptor: MPSRNNDescriptor): this;

  initWithDeviceRnnDescriptors(device: MTLDevice, rnnDescriptors: NSArray<interop.Object> | Array<interop.Object>): this;

  encodeSequenceToCommandBufferSourceImagesDestinationImagesRecurrentInputStateRecurrentOutputStates(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, destinationImages: NSArray<interop.Object> | Array<interop.Object>, recurrentInputState: MPSRNNRecurrentImageState | null, recurrentOutputStates: NSMutableArray | null): void;

  encodeBidirectionalSequenceToCommandBufferSourceSequenceDestinationForwardImagesDestinationBackwardImages(commandBuffer: MTLCommandBuffer, sourceSequence: NSArray<interop.Object> | Array<interop.Object>, destinationForwardImages: NSArray<interop.Object> | Array<interop.Object>, destinationBackwardImages: NSArray<interop.Object> | Array<interop.Object> | null): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSLSTMDescriptor extends MPSRNNDescriptor {
  memoryWeightsAreDiagonal: boolean;

  inputGateInputWeights: MPSCNNConvolutionDataSource;

  inputGateRecurrentWeights: MPSCNNConvolutionDataSource;

  inputGateMemoryWeights: MPSCNNConvolutionDataSource;

  forgetGateInputWeights: MPSCNNConvolutionDataSource;

  forgetGateRecurrentWeights: MPSCNNConvolutionDataSource;

  forgetGateMemoryWeights: MPSCNNConvolutionDataSource;

  outputGateInputWeights: MPSCNNConvolutionDataSource;

  outputGateRecurrentWeights: MPSCNNConvolutionDataSource;

  outputGateMemoryWeights: MPSCNNConvolutionDataSource;

  cellGateInputWeights: MPSCNNConvolutionDataSource;

  cellGateRecurrentWeights: MPSCNNConvolutionDataSource;

  cellGateMemoryWeights: MPSCNNConvolutionDataSource;

  cellToOutputNeuronType: interop.Enum<typeof MPSCNNNeuronType>;

  cellToOutputNeuronParamA: number;

  cellToOutputNeuronParamB: number;

  cellToOutputNeuronParamC: number;

  static createLSTMDescriptorWithInputFeatureChannelsOutputFeatureChannels<This extends abstract new (...args: any) => any>(this: This, inputFeatureChannels: number, outputFeatureChannels: number): InstanceType<This>;
}

declare class MPSGRUDescriptor extends MPSRNNDescriptor {
  inputGateInputWeights: MPSCNNConvolutionDataSource;

  inputGateRecurrentWeights: MPSCNNConvolutionDataSource;

  recurrentGateInputWeights: MPSCNNConvolutionDataSource;

  recurrentGateRecurrentWeights: MPSCNNConvolutionDataSource;

  outputGateInputWeights: MPSCNNConvolutionDataSource;

  outputGateRecurrentWeights: MPSCNNConvolutionDataSource;

  outputGateInputGateWeights: MPSCNNConvolutionDataSource;

  gatePnormValue: number;

  flipOutputGates: boolean;

  static createGRUDescriptorWithInputFeatureChannelsOutputFeatureChannels<This extends abstract new (...args: any) => any>(this: This, inputFeatureChannels: number, outputFeatureChannels: number): InstanceType<This>;
}

declare class MPSRNNSingleGateDescriptor extends MPSRNNDescriptor {
  inputWeights: MPSCNNConvolutionDataSource;

  recurrentWeights: MPSCNNConvolutionDataSource;

  static createRNNSingleGateDescriptorWithInputFeatureChannelsOutputFeatureChannels<This extends abstract new (...args: any) => any>(this: This, inputFeatureChannels: number, outputFeatureChannels: number): InstanceType<This>;
}

declare class MPSRNNDescriptor extends NSObject {
  inputFeatureChannels: number;

  outputFeatureChannels: number;

  useLayerInputUnitTransformMode: boolean;

  useFloat32Weights: boolean;

  layerSequenceDirection: interop.Enum<typeof MPSRNNSequenceDirection>;
}

declare class MPSCNNInstanceNormalizationGradient extends MPSCNNGradientKernel {
}

declare class MPSCNNNeuronReLU extends MPSCNNNeuron {
  initWithDeviceA(device: MTLDevice, a: number): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSCNNInstanceNormalization extends MPSCNNKernel {
  epsilon: number;

  readonly dataSource: MPSCNNInstanceNormalizationDataSource;

  initWithDeviceDataSource(device: MTLDevice, dataSource: MPSCNNInstanceNormalizationDataSource): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  reloadDataSource(dataSource: MPSCNNInstanceNormalizationDataSource): void;

  reloadGammaAndBetaFromDataSource(): void;

  reloadGammaAndBetaWithCommandBufferGammaAndBetaState(commandBuffer: MTLCommandBuffer, gammaAndBetaState: MPSCNNNormalizationGammaAndBetaState): void;

  // @ts-ignore MemberDecl.tsIgnore
  resultStateForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNInstanceNormalizationGradientState | null;

  // @ts-ignore MemberDecl.tsIgnore
  temporaryResultStateForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNInstanceNormalizationGradientState | null;
}

declare class MPSCNNBatchNormalizationGradient extends MPSCNNGradientKernel {
  initWithDeviceFusedNeuronDescriptor(device: MTLDevice, fusedNeuronDescriptor: MPSNNNeuronDescriptor | null): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceGradientSourceImageBatchNormalizationStateDestinationGradient(commandBuffer: MTLCommandBuffer, sourceGradient: MPSImage, sourceImage: MPSImage, batchNormalizationState: MPSCNNBatchNormalizationState, destinationGradient: MPSImage): void;

  encodeBatchToCommandBufferSourceGradientsSourceImagesBatchNormalizationStateDestinationGradients(commandBuffer: MTLCommandBuffer, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceImages: NSArray<interop.Object> | Array<interop.Object>, batchNormalizationState: MPSCNNBatchNormalizationState, destinationGradients: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeToCommandBufferSourceGradientSourceImageBatchNormalizationState(commandBuffer: MTLCommandBuffer, sourceGradient: MPSImage, sourceImage: MPSImage, batchNormalizationState: MPSCNNBatchNormalizationState): MPSImage;

  encodeBatchToCommandBufferSourceGradientsSourceImagesBatchNormalizationState(commandBuffer: MTLCommandBuffer, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceImages: NSArray<interop.Object> | Array<interop.Object>, batchNormalizationState: MPSCNNBatchNormalizationState): NSArray;
}

declare class MPSCNNBatchNormalizationStatistics extends MPSCNNKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeBatchToCommandBufferSourceImagesBatchNormalizationState(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, batchNormalizationState: MPSCNNBatchNormalizationState): void;
}

declare class MPSCNNNormalizationMeanAndVarianceState extends MPSState {
  readonly mean: MTLBuffer;

  readonly variance: MTLBuffer;

  initWithMeanVariance(mean: MTLBuffer, variance: MTLBuffer): this;

  static temporaryStateWithCommandBufferNumberOfFeatureChannels<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, numberOfFeatureChannels: number): InstanceType<This>;
}

declare class MPSCNNUpsamplingNearestGradient extends MPSCNNUpsamplingGradient {
  initWithDeviceIntegerScaleFactorXIntegerScaleFactorY(device: MTLDevice, integerScaleFactorX: number, integerScaleFactorY: number): this;
}

declare class MPSCNNSoftMaxNode extends MPSNNFilterNode {
  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSCNNUpsamplingBilinear extends MPSCNNUpsampling {
  initWithDeviceIntegerScaleFactorXIntegerScaleFactorY(device: MTLDevice, integerScaleFactorX: number, integerScaleFactorY: number): this;

  initWithDeviceIntegerScaleFactorXIntegerScaleFactorYAlignCorners(device: MTLDevice, integerScaleFactorX: number, integerScaleFactorY: number, alignCorners: boolean): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSCNNBatchNormalization extends MPSCNNKernel {
  readonly numberOfFeatureChannels: number;

  epsilon: number;

  readonly dataSource: MPSCNNBatchNormalizationDataSource;

  initWithDeviceDataSource(device: MTLDevice, dataSource: MPSCNNBatchNormalizationDataSource): this;

  initWithDeviceDataSourceFusedNeuronDescriptor(device: MTLDevice, dataSource: MPSCNNBatchNormalizationDataSource, fusedNeuronDescriptor: MPSNNNeuronDescriptor | null): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImageBatchNormalizationStateDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, batchNormalizationState: MPSCNNBatchNormalizationState, destinationImage: MPSImage): void;

  encodeBatchToCommandBufferSourceImagesBatchNormalizationStateDestinationImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, batchNormalizationState: MPSCNNBatchNormalizationState, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;

  // @ts-ignore MemberDecl.tsIgnore
  resultStateForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNBatchNormalizationState | null;

  // @ts-ignore MemberDecl.tsIgnore
  temporaryResultStateForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNBatchNormalizationState | null;

  reloadDataSource(dataSource: MPSCNNBatchNormalizationDataSource): void;

  reloadGammaAndBetaFromDataSource(): void;

  reloadMeanAndVarianceFromDataSource(): void;

  reloadGammaAndBetaWithCommandBufferGammaAndBetaState(commandBuffer: MTLCommandBuffer, gammaAndBetaState: MPSCNNNormalizationGammaAndBetaState): void;

  reloadMeanAndVarianceWithCommandBufferMeanAndVarianceState(commandBuffer: MTLCommandBuffer, meanAndVarianceState: MPSCNNNormalizationMeanAndVarianceState): void;
}

declare class MPSCNNUpsamplingNearest extends MPSCNNUpsampling {
  initWithDeviceIntegerScaleFactorXIntegerScaleFactorY(device: MTLDevice, integerScaleFactorX: number, integerScaleFactorY: number): this;
}

declare class MPSNNCompare extends MPSCNNArithmetic {
  comparisonType: interop.Enum<typeof MPSNNComparisonType>;

  threshold: number;

  initWithDevice(device: MTLDevice): this;
}

declare class MPSImageErode extends MPSImageDilate {
}

declare class MPSCNNDivide extends MPSCNNArithmetic {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSCNNMultiply extends MPSCNNArithmetic {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSCNNSubtract extends MPSCNNArithmetic {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSNNInitialGradient extends MPSCNNKernel {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSNNLossGradient extends MPSCNNBinaryKernel {
  readonly lossType: interop.Enum<typeof MPSCNNLossType>;

  readonly reductionType: interop.Enum<typeof MPSCNNReductionType>;

  readonly reduceAcrossBatch: boolean;

  readonly numberOfClasses: number;

  weight: number;

  labelSmoothing: number;

  epsilon: number;

  delta: number;

  computeLabelGradients: boolean;

  initWithDeviceLossDescriptor(device: MTLDevice, lossDescriptor: MPSCNNLossDescriptor): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeBatchToCommandBufferSourceGradientsSourceImagesLabelsWeightsSourceStates(commandBuffer: MTLCommandBuffer, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceImages: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>, weights: NSArray<interop.Object> | Array<interop.Object> | null, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null): NSArray;

  encodeBatchToCommandBufferSourceGradientsSourceImagesLabelsWeightsSourceStatesDestinationGradients(commandBuffer: MTLCommandBuffer, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceImages: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>, weights: NSArray<interop.Object> | Array<interop.Object> | null, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationGradients: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class MPSCNNBatchNormalizationState extends MPSNNGradientState {
  readonly batchNormalization: MPSCNNBatchNormalization;

  reset(): void;

  gamma(): MTLBuffer;

  beta(): MTLBuffer;

  mean(): MTLBuffer;

  variance(): MTLBuffer;

  gradientForGamma(): MTLBuffer;

  gradientForBeta(): MTLBuffer;
}

declare class MPSCNNYOLOLoss extends MPSCNNKernel {
  readonly lossXY: MPSCNNLoss;

  readonly lossWH: MPSCNNLoss;

  readonly lossConfidence: MPSCNNLoss;

  readonly lossClasses: MPSCNNLoss;

  readonly scaleXY: number;

  readonly scaleWH: number;

  readonly scaleNoObject: number;

  readonly scaleObject: number;

  readonly scaleClass: number;

  readonly minIOUForObjectPresence: number;

  readonly maxIOUForObjectAbsence: number;

  readonly reductionType: interop.Enum<typeof MPSCNNReductionType>;

  readonly numberOfAnchorBoxes: number;

  readonly anchorBoxes: NSData;

  readonly reduceAcrossBatch: boolean;

  initWithDeviceLossDescriptor(device: MTLDevice, lossDescriptor: MPSCNNYOLOLossDescriptor): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImageLabelsDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, labels: MPSCNNLossLabels, destinationImage: MPSImage): void;

  encodeToCommandBufferSourceImageLabels(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, labels: MPSCNNLossLabels): MPSImage;

  encodeBatchToCommandBufferSourceImagesLabelsDestinationImages(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>, destinationImage: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeBatchToCommandBufferSourceImagesLabels(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>): NSArray;
}

declare class MPSCNNLossDataDescriptor extends NSObject implements NSCopying {
  readonly layout: interop.Enum<typeof MPSDataLayout>;

  readonly size: MTLSize;

  bytesPerRow: number;

  bytesPerImage: number;

  static cnnLossDataDescriptorWithDataLayoutSize(data: NSData, layout: interop.Enum<typeof MPSDataLayout>, size: MTLSize): MPSCNNLossDataDescriptor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSCNNConvolutionTransposeGradientNode extends MPSCNNConvolutionGradientNode {
  static nodeWithSourceGradientSourceImageConvolutionTransposeGradientStateWeights<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSCNNConvolutionTransposeGradientStateNode, weights: MPSCNNConvolutionDataSource | null): InstanceType<This>;

  initWithSourceGradientSourceImageConvolutionTransposeGradientStateWeights(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSCNNConvolutionTransposeGradientStateNode, weights: MPSCNNConvolutionDataSource | null): this;
}

declare class MPSCNNSpatialNormalizationGradientNode extends MPSNNGradientFilterNode {
  kernelWidth: number;

  kernelHeight: number;

  static nodeWithSourceGradientSourceImageGradientStateKernelSize<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelSize: number): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateKernelSize(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelSize: number): this;

  alpha: number;

  beta: number;

  delta: number;
}

declare class MPSCNNDilatedPoolingMaxGradient extends MPSCNNPoolingGradient {
  initWithDeviceKernelWidthKernelHeightDilationRateXDilationRateYStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, dilationRateX: number, dilationRateY: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNOptimizerDescriptor extends NSObject {
  learningRate: number;

  gradientRescale: number;

  applyGradientClipping: boolean;

  gradientClipMax: number;

  gradientClipMin: number;

  regularizationScale: number;

  regularizationType: interop.Enum<typeof MPSNNRegularizationType>;

  initWithLearningRateGradientRescaleRegularizationTypeRegularizationScale(learningRate: number, gradientRescale: number, regularizationType: interop.Enum<typeof MPSNNRegularizationType>, regularizationScale: number): this;

  initWithLearningRateGradientRescaleApplyGradientClippingGradientClipMaxGradientClipMinRegularizationTypeRegularizationScale(learningRate: number, gradientRescale: number, applyGradientClipping: boolean, gradientClipMax: number, gradientClipMin: number, regularizationType: interop.Enum<typeof MPSNNRegularizationType>, regularizationScale: number): this;

  static optimizerDescriptorWithLearningRateGradientRescaleRegularizationTypeRegularizationScale<This extends abstract new (...args: any) => any>(this: This, learningRate: number, gradientRescale: number, regularizationType: interop.Enum<typeof MPSNNRegularizationType>, regularizationScale: number): InstanceType<This>;

  static optimizerDescriptorWithLearningRateGradientRescaleApplyGradientClippingGradientClipMaxGradientClipMinRegularizationTypeRegularizationScale<This extends abstract new (...args: any) => any>(this: This, learningRate: number, gradientRescale: number, applyGradientClipping: boolean, gradientClipMax: number, gradientClipMin: number, regularizationType: interop.Enum<typeof MPSNNRegularizationType>, regularizationScale: number): InstanceType<This>;
}

declare class MPSCNNPoolingMaxGradient extends MPSCNNPoolingGradient {
  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNPoolingAverageGradient extends MPSCNNPoolingGradient {
  zeroPadSizeX: number;

  zeroPadSizeY: number;

  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNPoolingGradient extends MPSCNNGradientKernel {
  sourceSize: MTLSize;

  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayUnaryKernel extends MPSNDArrayMultiaryKernel {
  readonly offsets: MPSNDArrayOffsets;

  readonly edgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  readonly kernelSizes: MPSNDArraySizes;

  readonly strides: MPSNDArrayOffsets;

  readonly dilationRates: MPSNDArraySizes;

  initWithDevice(device: MTLDevice): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceArray(cmdBuf: MTLCommandBuffer, sourceArray: MPSNDArray): MPSNDArray;

  encodeToCommandBufferSourceArrayDestinationArray(cmdBuf: MTLCommandBuffer, sourceArray: MPSNDArray, destination: MPSNDArray): void;

  encodeToCommandBufferSourceArrayResultStateOutputStateIsTemporary(cmdBuf: MTLCommandBuffer, sourceArray: MPSNDArray, outGradientState: interop.PointerConvertible, outputStateIsTemporary: boolean): MPSNDArray;

  encodeToCommandBufferSourceArrayResultStateDestinationArray(cmdBuf: MTLCommandBuffer, sourceArray: MPSNDArray, outGradientState: MPSState | null, destination: MPSNDArray): void;
}

declare class MPSCNNDilatedPoolingMax extends MPSCNNPooling {
  readonly dilationRateX: number;

  readonly dilationRateY: number;

  initWithDeviceKernelWidthKernelHeightDilationRateXDilationRateYStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, dilationRateX: number, dilationRateY: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNPoolingL2Norm extends MPSCNNPooling {
  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNPoolingAverage extends MPSCNNPooling {
  zeroPadSizeX: number;

  zeroPadSizeY: number;

  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNPoolingMax extends MPSCNNPooling {
  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNGramMatrixCalculation extends MPSCNNKernel {
  alpha: number;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  initWithDeviceAlpha(device: MTLDevice, alpha: number): this;

  initWithDevice(device: MTLDevice): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSCNNConvolutionTranspose extends MPSCNNKernel {
  readonly inputFeatureChannels: number;

  readonly outputFeatureChannels: number;

  kernelOffsetX: number;

  kernelOffsetY: number;

  readonly groups: number;

  accumulatorPrecisionOption: interop.Enum<typeof MPSNNConvolutionAccumulatorPrecisionOption>;

  readonly dataSource: MPSCNNConvolutionDataSource;

  initWithDeviceWeights(device: MTLDevice, weights: MPSCNNConvolutionDataSource): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImageConvolutionGradientState(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, convolutionGradientState: MPSCNNConvolutionGradientState | null): MPSImage;

  encodeBatchToCommandBufferSourceImagesConvolutionGradientStates(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, convolutionGradientState: NSArray<interop.Object> | Array<interop.Object> | null): NSArray;

  encodeToCommandBufferSourceImageConvolutionGradientStateDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, convolutionGradientState: MPSCNNConvolutionGradientState | null, destinationImage: MPSImage): void;

  encodeBatchToCommandBufferSourceImagesConvolutionGradientStatesDestinationImages(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, convolutionGradientState: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): void;

  // @ts-ignore MemberDecl.tsIgnore
  resultStateForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNConvolutionTransposeGradientState | null;

  resultStateBatchForSourceImageSourceStatesDestinationImage(sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  // @ts-ignore MemberDecl.tsIgnore
  temporaryResultStateForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNConvolutionTransposeGradientState | null;

  temporaryResultStateBatchForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  reloadWeightsAndBiasesFromDataSource(): void;

  reloadWeightsAndBiasesWithCommandBufferState(commandBuffer: MTLCommandBuffer, state: MPSCNNConvolutionWeightsAndBiasesState): void;

  exportWeightsAndBiasesWithCommandBufferResultStateCanBeTemporary(commandBuffer: MTLCommandBuffer, resultStateCanBeTemporary: boolean): MPSCNNConvolutionWeightsAndBiasesState;

  encodeToCommandBufferSourceImageConvolutionGradientStateDestinationStateDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, convolutionGradientState: MPSCNNConvolutionGradientState | null, outState: interop.PointerConvertible, isTemporary: boolean): MPSImage;

  encodeBatchToCommandBufferSourceImagesConvolutionGradientStatesDestinationStatesDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, convolutionGradientStates: NSArray<interop.Object> | Array<interop.Object> | null, outStates: interop.PointerConvertible, isTemporary: boolean): NSArray;
}

declare class MPSCNNFullyConnectedGradient extends MPSCNNConvolutionGradient {
  initWithDeviceWeights(device: MTLDevice, weights: MPSCNNConvolutionDataSource): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNFullyConnected extends MPSCNNConvolution {
  initWithDeviceWeights(device: MTLDevice, weights: MPSCNNConvolutionDataSource): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNPoolingNode extends MPSNNFilterNode {
  readonly kernelWidth: number;

  readonly kernelHeight: number;

  readonly strideInPixelsX: number;

  readonly strideInPixelsY: number;

  static nodeWithSourceFilterSize<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, size: number): InstanceType<This>;

  static nodeWithSourceFilterSizeStride<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, size: number, stride: number): InstanceType<This>;

  initWithSourceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(sourceNode: MPSNNImageNode, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithSourceFilterSizeStride(sourceNode: MPSNNImageNode, size: number, stride: number): this;

  initWithSourceFilterSize(sourceNode: MPSNNImageNode, size: number): this;
}

declare class MPSCNNConvolutionWeightsAndBiasesState extends MPSState {
  readonly weights: MTLBuffer;

  readonly biases: MTLBuffer | null;

  readonly weightsOffset: number;

  readonly biasesOffset: number;

  initWithWeightsBiases(weights: MTLBuffer, biases: MTLBuffer | null): this;

  initWithDeviceCnnConvolutionDescriptor(device: MTLDevice, descriptor: MPSCNNConvolutionDescriptor): this;

  static temporaryCNNConvolutionWeightsAndBiasesStateWithCommandBufferCnnConvolutionDescriptor<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, descriptor: MPSCNNConvolutionDescriptor): InstanceType<This>;

  initWithWeightsWeightsOffsetBiasesBiasesOffsetCnnConvolutionDescriptor(weights: MTLBuffer, weightsOffset: number, biases: MTLBuffer | null, biasesOffset: number, descriptor: MPSCNNConvolutionDescriptor): this;
}

declare class MPSCNNConvolutionGradientState extends MPSNNGradientState implements MPSImageSizeEncodingState {
  readonly gradientForWeights: MTLBuffer;

  readonly gradientForBiases: MTLBuffer;

  readonly convolution: MPSCNNConvolution;

  readonly gradientForWeightsLayout: interop.Enum<typeof MPSCNNConvolutionWeightsLayout>;

  readonly sourceWidth: number;

  readonly sourceHeight: number;

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

declare class MPSCNNDepthWiseConvolutionDescriptor extends MPSCNNConvolutionDescriptor {
  readonly channelMultiplier: number;
}

declare class MPSCNNSubPixelConvolutionDescriptor extends MPSCNNConvolutionDescriptor {
  subPixelScaleFactor: number;
}

declare class MPSCNNNeuronELU extends MPSCNNNeuron {
  initWithDeviceA(device: MTLDevice, a: number): this;
}

declare class MPSCNNDropoutNode extends MPSNNFilterNode {
  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode): InstanceType<This>;

  initWithSource(source: MPSNNImageNode): this;

  static nodeWithSourceKeepProbability<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, keepProbability: number): InstanceType<This>;

  initWithSourceKeepProbability(source: MPSNNImageNode, keepProbability: number): this;

  static nodeWithSourceKeepProbabilitySeedMaskStrideInPixels<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, keepProbability: number, seed: number, maskStrideInPixels: MTLSize): InstanceType<This>;

  initWithSourceKeepProbabilitySeedMaskStrideInPixels(source: MPSNNImageNode, keepProbability: number, seed: number, maskStrideInPixels: MTLSize): this;

  readonly keepProbability: number;

  readonly seed: number;

  readonly maskStrideInPixels: MTLSize;
}

declare class MPSCNNNeuronTanH extends MPSCNNNeuron {
  initWithDeviceAB(device: MTLDevice, a: number, b: number): this;
}

declare class MPSCNNNeuronSoftPlus extends MPSCNNNeuron {
  initWithDeviceAB(device: MTLDevice, a: number, b: number): this;
}

declare class MPSCNNNeuronHardSigmoid extends MPSCNNNeuron {
  initWithDeviceAB(device: MTLDevice, a: number, b: number): this;
}

declare class MPSCNNNeuronSigmoid extends MPSCNNNeuron {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSCNNBatchNormalizationGradientNode extends MPSNNGradientFilterNode implements MPSNNTrainableNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;

  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

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

declare class MPSCNNNeuronGradient extends MPSCNNGradientKernel {
  readonly neuronType: interop.Enum<typeof MPSCNNNeuronType>;

  readonly a: number;

  readonly b: number;

  readonly c: number;

  readonly data: NSData;

  initWithDeviceNeuronDescriptor(device: MTLDevice, neuronDescriptor: MPSNNNeuronDescriptor): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNLocalContrastNormalization extends MPSCNNKernel {
  alpha: number;

  beta: number;

  delta: number;

  p0: number;

  pm: number;

  ps: number;

  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNSpatialNormalization extends MPSCNNKernel {
  alpha: number;

  beta: number;

  delta: number;

  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNDArrayVectorLUTDequantize extends MPSNDArrayMultiaryKernel {
  vectorAxis: number;

  initWithDeviceAxis(device: MTLDevice, axis: number): this;
}

declare class MPSCNNMultiaryKernel extends MPSKernel {
  initWithDeviceSourceCount(device: MTLDevice, sourceCount: number): this;

  readonly sourceCount: number;

  clipRect: MTLRegion;

  destinationFeatureChannelOffset: number;

  readonly isBackwards: boolean;

  readonly isStateModified: boolean;

  padding: MPSNNPadding;

  destinationImageAllocator: MPSImageAllocator;

  offsetAtIndex(index: number): MPSOffset;

  setOffsetAtIndex(offset: MPSOffset, index: number): void;

  sourceFeatureChannelOffsetAtIndex(index: number): number;

  setSourceFeatureChannelOffsetAtIndex(offset: number, index: number): void;

  sourceFeatureChannelMaxCountAtIndex(index: number): number;

  setSourceFeatureChannelMaxCountAtIndex(count: number, index: number): void;

  edgeModeAtIndex(index: number): interop.Enum<typeof MPSImageEdgeMode>;

  setEdgeModeAtIndex(edgeMode: interop.Enum<typeof MPSImageEdgeMode>, index: number): void;

  kernelWidthAtIndex(index: number): number;

  setKernelWidthAtIndex(width: number, index: number): void;

  kernelHeightAtIndex(index: number): number;

  setKernelHeightAtIndex(height: number, index: number): void;

  strideInPixelsXatIndex(index: number): number;

  setStrideInPixelsXAtIndex(stride: number, index: number): void;

  strideInPixelsYatIndex(index: number): number;

  setStrideInPixelsYAtIndex(stride: number, index: number): void;

  dilationRateXatIndex(index: number): number;

  setDilationRateXAtIndex(dilationRate: number, index: number): void;

  dilationRateYatIndex(index: number): number;

  setDilationRateYAtIndex(dilationRate: number, index: number): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImagesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, destinationImage: MPSImage): void;

  encodeBatchToCommandBufferSourceImagesDestinationImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeToCommandBufferSourceImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>): MPSImage;

  encodeBatchToCommandBufferSourceImages(commandBuffer: MTLCommandBuffer, sourceImageBatches: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  encodeToCommandBufferSourceImagesDestinationStateDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, outState: interop.PointerConvertible, isTemporary: boolean): MPSImage;

  encodeBatchToCommandBufferSourceImagesDestinationStatesDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, sourceImageBatches: NSArray<interop.Object> | Array<interop.Object>, outState: interop.PointerConvertible, isTemporary: boolean): NSArray;

  isResultStateReusedAcrossBatch(): boolean;

  appendBatchBarrier(): boolean;

  resultStateForSourceImagesSourceStatesDestinationImage(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSState | null;

  resultStateBatchForSourceImagesSourceStatesDestinationImage(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  temporaryResultStateForCommandBufferSourceImagesSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSState | null;

  temporaryResultStateBatchForCommandBufferSourceImagesSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  destinationImageDescriptorForSourceImagesSourceStates(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null): MPSImageDescriptor;
}

declare class MPSCNNGradientKernel extends MPSCNNBinaryKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  kernelOffsetX: number;

  kernelOffsetY: number;

  encodeToCommandBufferSourceGradientSourceImageGradientState(commandBuffer: MTLCommandBuffer, sourceGradient: MPSImage, sourceImage: MPSImage, gradientState: MPSState): MPSImage;

  encodeToCommandBufferSourceGradientSourceImageGradientStateDestinationGradient(commandBuffer: MTLCommandBuffer, sourceGradient: MPSImage, sourceImage: MPSImage, gradientState: MPSState, destinationGradient: MPSImage): void;

  encodeBatchToCommandBufferSourceGradientsSourceImagesGradientStates(commandBuffer: MTLCommandBuffer, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceImages: NSArray<interop.Object> | Array<interop.Object>, gradientStates: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  encodeBatchToCommandBufferSourceGradientsSourceImagesGradientStatesDestinationGradients(commandBuffer: MTLCommandBuffer, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceImages: NSArray<interop.Object> | Array<interop.Object>, gradientStates: NSArray<interop.Object> | Array<interop.Object>, destinationGradients: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class MPSCNNBinaryKernel extends MPSKernel {
  initWithDevice(device: MTLDevice): this;

  primaryOffset: MPSOffset;

  secondaryOffset: MPSOffset;

  clipRect: MTLRegion;

  destinationFeatureChannelOffset: number;

  primarySourceFeatureChannelOffset: number;

  secondarySourceFeatureChannelOffset: number;

  primarySourceFeatureChannelMaxCount: number;

  secondarySourceFeatureChannelMaxCount: number;

  primaryEdgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  secondaryEdgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  readonly primaryKernelWidth: number;

  readonly primaryKernelHeight: number;

  readonly secondaryKernelWidth: number;

  readonly secondaryKernelHeight: number;

  primaryStrideInPixelsX: number;

  primaryStrideInPixelsY: number;

  secondaryStrideInPixelsX: number;

  secondaryStrideInPixelsY: number;

  readonly primaryDilationRateX: number;

  readonly primaryDilationRateY: number;

  readonly secondaryDilationRateX: number;

  readonly secondaryDilationRateY: number;

  readonly isBackwards: boolean;

  readonly isStateModified: boolean;

  padding: MPSNNPadding;

  destinationImageAllocator: MPSImageAllocator;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferPrimaryImageSecondaryImageDestinationImage(commandBuffer: MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage, destinationImage: MPSImage): void;

  encodeBatchToCommandBufferPrimaryImagesSecondaryImagesDestinationImages(commandBuffer: MTLCommandBuffer, primaryImages: NSArray<interop.Object> | Array<interop.Object>, secondaryImages: NSArray<interop.Object> | Array<interop.Object>, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeToCommandBufferPrimaryImageSecondaryImage(commandBuffer: MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage): MPSImage;

  encodeBatchToCommandBufferPrimaryImagesSecondaryImages(commandBuffer: MTLCommandBuffer, primaryImage: NSArray<interop.Object> | Array<interop.Object>, secondaryImage: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  encodeToCommandBufferPrimaryImageSecondaryImageDestinationStateDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage, outState: interop.PointerConvertible, isTemporary: boolean): MPSImage;

  encodeBatchToCommandBufferPrimaryImagesSecondaryImagesDestinationStatesDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, primaryImages: NSArray<interop.Object> | Array<interop.Object>, secondaryImages: NSArray<interop.Object> | Array<interop.Object>, outState: interop.PointerConvertible, isTemporary: boolean): NSArray;

  resultStateForPrimaryImageSecondaryImageSourceStatesDestinationImage(primaryImage: MPSImage, secondaryImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSState | null;

  resultStateBatchForPrimaryImageSecondaryImageSourceStatesDestinationImage(primaryImage: NSArray<interop.Object> | Array<interop.Object>, secondaryImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  temporaryResultStateForCommandBufferPrimaryImageSecondaryImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSState | null;

  temporaryResultStateBatchForCommandBufferPrimaryImageSecondaryImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, primaryImage: NSArray<interop.Object> | Array<interop.Object>, secondaryImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  isResultStateReusedAcrossBatch(): boolean;

  appendBatchBarrier(): boolean;

  destinationImageDescriptorForSourceImagesSourceStates(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null): MPSImageDescriptor;

  encodingStorageSizeForPrimaryImageSecondaryImageSourceStatesDestinationImage(primaryImage: MPSImage, secondaryImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage | null): number;

  batchEncodingStorageSizeForPrimaryImageSecondaryImageSourceStatesDestinationImage(primaryImage: NSArray<interop.Object> | Array<interop.Object>, secondaryImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object> | null): number;
}

declare class MPSCNNKernel extends MPSKernel {
  initWithDevice(device: MTLDevice): this;

  offset: MPSOffset;

  clipRect: MTLRegion;

  destinationFeatureChannelOffset: number;

  sourceFeatureChannelOffset: number;

  sourceFeatureChannelMaxCount: number;

  edgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  readonly kernelWidth: number;

  readonly kernelHeight: number;

  readonly strideInPixelsX: number;

  readonly strideInPixelsY: number;

  readonly dilationRateX: number;

  readonly dilationRateY: number;

  readonly isBackwards: boolean;

  readonly isStateModified: boolean;

  padding: MPSNNPadding;

  destinationImageAllocator: MPSImageAllocator;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImageDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, destinationImage: MPSImage): void;

  encodeToCommandBufferSourceImageDestinationStateDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, destinationState: MPSState, destinationImage: MPSImage): void;

  encodeBatchToCommandBufferSourceImagesDestinationImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeBatchToCommandBufferSourceImagesDestinationStatesDestinationImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, destinationStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeToCommandBufferSourceImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage): MPSImage;

  encodeToCommandBufferSourceImageDestinationStateDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, outState: interop.PointerConvertible, isTemporary: boolean): MPSImage;

  encodeBatchToCommandBufferSourceImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  encodeBatchToCommandBufferSourceImagesDestinationStatesDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, outStates: interop.PointerConvertible, isTemporary: boolean): NSArray;

  resultStateForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSState | null;

  resultStateBatchForSourceImageSourceStatesDestinationImage(sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  temporaryResultStateForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSState | null;

  temporaryResultStateBatchForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  isResultStateReusedAcrossBatch(): boolean;

  appendBatchBarrier(): boolean;

  destinationImageDescriptorForSourceImagesSourceStates(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null): MPSImageDescriptor;

  encodingStorageSizeForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage | null): number;

  batchEncodingStorageSizeForSourceImageSourceStatesDestinationImage(sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object> | null): number;
}

declare class MPSNNMultiaryGradientState extends MPSState {
}

declare class MPSNNBinaryGradientState extends MPSState {
}

declare class MPSNNGradientState extends MPSState {
}

declare class MPSNNDefaultPadding extends NSObject implements MPSNNPadding {
  static paddingWithMethod<This extends abstract new (...args: any) => any>(this: This, method: interop.Enum<typeof MPSNNPaddingMethod>): InstanceType<This>;

  static paddingForTensorflowAveragePooling<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static paddingForTensorflowAveragePoolingValidOnly<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  label(): string;

  paddingMethod(): interop.Enum<typeof MPSNNPaddingMethod>;

  destinationImageDescriptorForSourceImagesSourceStatesForKernelSuggestedDescriptor(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, kernel: MPSKernel, inDescriptor: MPSImageDescriptor): MPSImageDescriptor;

  inverse(): this | null;

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

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MPSImageThresholdTruncate extends MPSUnaryImageKernel {
  initWithDeviceThresholdValueLinearGrayColorTransform(device: MTLDevice, thresholdValue: number, transform: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly thresholdValue: number;

  readonly transform: interop.Pointer;
}

declare class MPSImageStatisticsMinAndMax extends MPSUnaryImageKernel {
  clipRectSource: MTLRegion;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNArithmeticGradientState extends MPSNNBinaryGradientState {
}

declare class MPSImageLanczosScale extends MPSImageScale {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageReduceColumnSum extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSImageReduceColumnMax extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSCNNPoolingAverageGradientNode extends MPSCNNPoolingGradientNode {
}

declare class MPSImageReduceColumnMin extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSImageReduceUnary extends MPSUnaryImageKernel {
  clipRectSource: MTLRegion;
}

declare class MPSImageAreaMin extends MPSImageAreaMax {
}

declare class MPSImageAreaMax extends MPSUnaryImageKernel {
  readonly kernelHeight: number;

  readonly kernelWidth: number;

  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageDivide extends MPSImageArithmetic {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSImageIntegralOfSquares extends MPSUnaryImageKernel {
}

declare class MPSImageIntegral extends MPSUnaryImageKernel {
}

declare class MPSImageHistogramSpecification extends MPSUnaryImageKernel {
  readonly histogramInfo: MPSImageHistogramInfo;

  initWithDeviceHistogramInfo(device: MTLDevice, histogramInfo: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeTransformToCommandBufferSourceTextureSourceHistogramSourceHistogramOffsetDesiredHistogramDesiredHistogramOffset(commandBuffer: MTLCommandBuffer, source: MTLTexture, sourceHistogram: MTLBuffer, sourceHistogramOffset: number, desiredHistogram: MTLBuffer, desiredHistogramOffset: number): void;
}

declare class MPSImageGuidedFilter extends MPSKernel {
  readonly kernelDiameter: number;

  epsilon: number;

  reconstructScale: number;

  reconstructOffset: number;

  initWithDeviceKernelDiameter(device: MTLDevice, kernelDiameter: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeRegressionToCommandBufferSourceTextureGuidanceTextureWeightsTextureDestinationCoefficientsTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, guidanceTexture: MTLTexture, weightsTexture: MTLTexture | null, destinationCoefficientsTexture: MTLTexture): void;

  encodeReconstructionToCommandBufferGuidanceTextureCoefficientsTextureDestinationTexture(commandBuffer: MTLCommandBuffer, guidanceTexture: MTLTexture, coefficientsTexture: MTLTexture, destinationTexture: MTLTexture): void;

  encodeRegressionToCommandBufferSourceTextureGuidanceTextureWeightsTextureDestinationCoefficientsTextureADestinationCoefficientsTextureB(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, guidanceTexture: MTLTexture, weightsTexture: MTLTexture | null, destinationCoefficientsTextureA: MTLTexture, destinationCoefficientsTextureB: MTLTexture): void;

  encodeReconstructionToCommandBufferGuidanceTextureCoefficientsTextureACoefficientsTextureBDestinationTexture(commandBuffer: MTLCommandBuffer, guidanceTexture: MTLTexture, coefficientsTextureA: MTLTexture, coefficientsTextureB: MTLTexture, destinationTexture: MTLTexture): void;
}

declare class MPSImageEDLines extends MPSKernel {
  initWithDeviceGaussianSigmaMinLineLengthMaxLinesDetailRatioGradientThresholdLineErrorThresholdMergeLocalityThreshold(device: MTLDevice, gaussianSigma: number, minLineLength: number, maxLines: number, detailRatio: number, gradientThreshold: number, lineErrorThreshold: number, mergeLocalityThreshold: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceTextureDestinationTextureEndpointBufferEndpointOffset(commandBuffer: MTLCommandBuffer, source: MTLTexture, dest: MTLTexture | null, endpointBuffer: MTLBuffer, endpointOffset: number): void;

  clipRectSource: MTLRegion;

  readonly gaussianSigma: number;

  minLineLength: number;

  maxLines: number;

  detailRatio: number;

  gradientThreshold: number;

  lineErrorThreshold: number;

  mergeLocalityThreshold: number;
}

declare class MPSMatrixCopyToImage extends MPSKernel {
  sourceMatrixOrigin: MTLOrigin;

  sourceMatrixBatchIndex: number;

  readonly dataLayout: interop.Enum<typeof MPSDataLayout>;

  initWithDeviceDataLayout(device: MTLDevice, dataLayout: interop.Enum<typeof MPSDataLayout>): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceMatrixDestinationImage(commandBuffer: MTLCommandBuffer, sourceMatrix: MPSMatrix, destinationImage: MPSImage): void;

  encodeBatchToCommandBufferSourceMatrixDestinationImages(commandBuffer: MTLCommandBuffer, sourceMatrix: MPSMatrix, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class MPSMatrixLogSoftMaxGradient extends MPSMatrixSoftMaxGradient {
}

declare class MPSMatrixSoftMaxGradient extends MPSMatrixBinaryKernel {
  sourceRows: number;

  sourceColumns: number;

  initWithDevice(device: MTLDevice): this;

  encodeToCommandBufferGradientMatrixForwardOutputMatrixResultMatrix(commandBuffer: MTLCommandBuffer, gradientMatrix: MPSMatrix, forwardOutputMatrix: MPSMatrix, resultMatrix: MPSMatrix): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSMatrixCopy extends MPSKernel {
  initWithDeviceCopyRowsCopyColumnsSourcesAreTransposedDestinationsAreTransposed(device: MTLDevice, copyRows: number, copyColumns: number, sourcesAreTransposed: boolean, destinationsAreTransposed: boolean): this;

  readonly copyRows: number;

  readonly copyColumns: number;

  readonly sourcesAreTransposed: boolean;

  readonly destinationsAreTransposed: boolean;

  encodeToCommandBufferCopyDescriptor(commandBuffer: MTLCommandBuffer, copyDescriptor: MPSMatrixCopyDescriptor): void;

  encodeToCommandBufferCopyDescriptorRowPermuteIndicesRowPermuteOffsetColumnPermuteIndicesColumnPermuteOffset(commandBuffer: MTLCommandBuffer, copyDescriptor: MPSMatrixCopyDescriptor, rowPermuteIndices: MPSVector | null, rowPermuteOffset: number, columnPermuteIndices: MPSVector | null, columnPermuteOffset: number): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSMatrixCopyDescriptor extends NSObject {
  static descriptorWithSourceMatrixDestinationMatrixOffsets<This extends abstract new (...args: any) => any>(this: This, sourceMatrix: MPSMatrix, destinationMatrix: MPSMatrix, offsets: MPSMatrixCopyOffsets): InstanceType<This>;

  initWithDeviceCount(device: MTLDevice, count: number): this;

  setCopyOperationAtIndexSourceMatrixDestinationMatrixOffsets(index: number, sourceMatrix: MPSMatrix, destinationMatrix: MPSMatrix, offsets: MPSMatrixCopyOffsets): void;

  initWithSourceMatricesDestinationMatricesOffsetVectorOffset(sourceMatrices: NSArray<interop.Object> | Array<interop.Object>, destinationMatrices: NSArray<interop.Object> | Array<interop.Object>, offsets: MPSVector | null, byteOffset: number): this;
}

declare class MPSMatrixSolveCholesky extends MPSMatrixBinaryKernel {
  initWithDeviceUpperOrderNumberOfRightHandSides(device: MTLDevice, upper: boolean, order: number, numberOfRightHandSides: number): this;

  encodeToCommandBufferSourceMatrixRightHandSideMatrixSolutionMatrix(commandBuffer: MTLCommandBuffer, sourceMatrix: MPSMatrix, rightHandSideMatrix: MPSMatrix, solutionMatrix: MPSMatrix): void;
}

declare class MPSMatrixSolveLU extends MPSMatrixBinaryKernel {
  initWithDeviceTransposeOrderNumberOfRightHandSides(device: MTLDevice, transpose: boolean, order: number, numberOfRightHandSides: number): this;

  encodeToCommandBufferSourceMatrixRightHandSideMatrixPivotIndicesSolutionMatrix(commandBuffer: MTLCommandBuffer, sourceMatrix: MPSMatrix, rightHandSideMatrix: MPSMatrix, pivotIndices: MPSMatrix, solutionMatrix: MPSMatrix): void;
}

declare class MPSCNNDilatedPoolingMaxGradientNode extends MPSCNNPoolingGradientNode {
  static nodeWithSourceGradientSourceImageGradientStateKernelWidthKernelHeightStrideInPixelsXStrideInPixelsYDilationRateXDilationRateY<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number, dilationRateX: number, dilationRateY: number): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateKernelWidthKernelHeightStrideInPixelsXStrideInPixelsYDilationRateXDilationRateY(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number, dilationRateX: number, dilationRateY: number): this;

  readonly dilationRateX: number;

  readonly dilationRateY: number;
}

declare class MPSMatrixSolveTriangular extends MPSMatrixBinaryKernel {
  initWithDeviceRightUpperTransposeUnitOrderNumberOfRightHandSidesAlpha(device: MTLDevice, right: boolean, upper: boolean, transpose: boolean, unit: boolean, order: number, numberOfRightHandSides: number, alpha: number): this;

  encodeToCommandBufferSourceMatrixRightHandSideMatrixSolutionMatrix(commandBuffer: MTLCommandBuffer, sourceMatrix: MPSMatrix, rightHandSideMatrix: MPSMatrix, solutionMatrix: MPSMatrix): void;
}

declare class MPSMatrixUnaryKernel extends MPSKernel {
  sourceMatrixOrigin: MTLOrigin;

  resultMatrixOrigin: MTLOrigin;

  batchStart: number;

  batchSize: number;
}

declare class MPSImageLaplacianPyramidAdd extends MPSImageLaplacianPyramid {
}

declare class MPSImageLaplacianPyramidSubtract extends MPSImageLaplacianPyramid {
}

declare class MPSCNNCrossChannelNormalizationGradient extends MPSCNNGradientKernel {
  alpha: number;

  beta: number;

  delta: number;

  readonly kernelSize: number;

  initWithDeviceKernelSize(device: MTLDevice, kernelSize: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageGaussianPyramid extends MPSImagePyramid {
}

declare class MPSImageCanny extends MPSUnaryImageKernel {
  initWithDevice(device: MTLDevice): this;

  initWithDeviceLinearToGrayScaleTransformSigma(device: MTLDevice, transform: interop.PointerConvertible, sigma: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly colorTransform: interop.Pointer;

  readonly sigma: number;

  highThreshold: number;

  lowThreshold: number;

  useFastMode: boolean;
}

declare class MPSImageReduceRowMax extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSBinaryImageKernel extends MPSKernel {
  primaryOffset: MPSOffset;

  secondaryOffset: MPSOffset;

  primaryEdgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  secondaryEdgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  clipRect: MTLRegion;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferPrimaryTextureInPlaceSecondaryTextureFallbackCopyAllocator(commandBuffer: MTLCommandBuffer, primaryTexture: MTLTexture, inPlaceSecondaryTexture: interop.PointerConvertible, copyAllocator: (p1: MPSKernel, p2: MTLCommandBuffer, p3: MTLTexture) => MTLTexture | null): boolean;

  encodeToCommandBufferInPlacePrimaryTextureSecondaryTextureFallbackCopyAllocator(commandBuffer: MTLCommandBuffer, inPlacePrimaryTexture: interop.PointerConvertible, secondaryTexture: MTLTexture, copyAllocator: (p1: MPSKernel, p2: MTLCommandBuffer, p3: MTLTexture) => MTLTexture | null): boolean;

  encodeToCommandBufferPrimaryTextureSecondaryTextureDestinationTexture(commandBuffer: MTLCommandBuffer, primaryTexture: MTLTexture, secondaryTexture: MTLTexture, destinationTexture: MTLTexture): void;

  encodeToCommandBufferPrimaryImageSecondaryImageDestinationImage(commandBuffer: MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage, destinationImage: MPSImage): void;

  primarySourceRegionForDestinationSize(destinationSize: MTLSize): MPSRegion;

  secondarySourceRegionForDestinationSize(destinationSize: MTLSize): MPSRegion;
}

declare class MPSUnaryImageKernel extends MPSKernel {
  offset: MPSOffset;

  clipRect: MTLRegion;

  edgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferInPlaceTextureFallbackCopyAllocator(commandBuffer: MTLCommandBuffer, texture: interop.PointerConvertible, copyAllocator: (p1: MPSKernel, p2: MTLCommandBuffer, p3: MTLTexture) => MTLTexture | null): boolean;

  encodeToCommandBufferSourceTextureDestinationTexture(commandBuffer: MTLCommandBuffer, sourceTexture: MTLTexture, destinationTexture: MTLTexture): void;

  encodeToCommandBufferSourceImageDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, destinationImage: MPSImage): void;

  sourceRegionForDestinationSize(destinationSize: MTLSize): MPSRegion;
}

declare class MPSTemporaryNDArray extends MPSNDArray {
  static defaultAllocator(): MPSNDArrayAllocator;

  static temporaryNDArrayWithCommandBufferDescriptor<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, descriptor: MPSNDArrayDescriptor): InstanceType<This>;

  readCount: number;
}

declare class MPSState extends NSObject {
  static temporaryStateWithCommandBufferBufferSize<This extends abstract new (...args: any) => any>(this: This, cmdBuf: MTLCommandBuffer, bufferSize: number): InstanceType<This>;

  static temporaryStateWithCommandBufferTextureDescriptor<This extends abstract new (...args: any) => any>(this: This, cmdBuf: MTLCommandBuffer, descriptor: MTLTextureDescriptor): InstanceType<This>;

  static temporaryStateWithCommandBuffer<This extends abstract new (...args: any) => any>(this: This, cmdBuf: MTLCommandBuffer): InstanceType<This>;

  initWithDeviceBufferSize(device: MTLDevice, bufferSize: number): this;

  initWithDeviceTextureDescriptor(device: MTLDevice, descriptor: MTLTextureDescriptor): this;

  initWithResource(resource: MTLResource | null): this;

  initWithDeviceResourceList(device: MTLDevice, resourceList: MPSStateResourceList): this;

  static temporaryStateWithCommandBufferResourceList<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, resourceList: MPSStateResourceList): InstanceType<This>;

  initWithResources(resources: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly resourceCount: number;

  resourceAtIndexAllocateMemory(index: number, allocateMemory: boolean): MTLResource | null;

  readCount: number;

  readonly isTemporary: boolean;

  label: string;

  bufferSizeAtIndex(index: number): number;

  textureInfoAtIndex(index: number): MPSStateTextureInfo;

  resourceTypeAtIndex(index: number): interop.Enum<typeof MPSStateResourceType>;

  synchronizeOnCommandBuffer(commandBuffer: MTLCommandBuffer): void;

  resourceSize(): number;

  destinationImageDescriptorForSourceImagesSourceStatesForKernelSuggestedDescriptor(sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, kernel: MPSKernel, inDescriptor: MPSImageDescriptor): MPSImageDescriptor;

  readonly resource: MTLResource;
}

declare class MPSCNNAddGradient extends MPSCNNArithmeticGradient {
  initWithDeviceIsSecondarySourceFilter(device: MTLDevice, isSecondarySourceFilter: boolean): this;
}

declare class MPSVector extends NSObject {
  readonly device: MTLDevice;

  readonly length: number;

  readonly vectors: number;

  readonly dataType: interop.Enum<typeof MPSDataType>;

  readonly vectorBytes: number;

  readonly offset: number;

  readonly data: MTLBuffer;

  initWithBufferDescriptor(buffer: MTLBuffer, descriptor: MPSVectorDescriptor): this;

  initWithBufferOffsetDescriptor(buffer: MTLBuffer, offset: number, descriptor: MPSVectorDescriptor): this;

  initWithDeviceDescriptor(device: MTLDevice, descriptor: MPSVectorDescriptor): this;

  synchronizeOnCommandBuffer(commandBuffer: MTLCommandBuffer): void;

  resourceSize(): number;
}

declare class MPSPredicate extends NSObject {
  readonly predicateBuffer: MTLBuffer;

  readonly predicateOffset: number;

  static predicateWithBufferOffset<This extends abstract new (...args: any) => any>(this: This, buffer: MTLBuffer, offset: number): InstanceType<This>;

  initWithBufferOffset(buffer: MTLBuffer, offset: number): this;

  initWithDevice(device: MTLDevice): this;
}

declare class MPSImage extends NSObject {
  static defaultAllocator(): MPSImageAllocator;

  readonly device: MTLDevice;

  readonly width: number;

  readonly height: number;

  readonly featureChannels: number;

  readonly numberOfImages: number;

  readonly textureType: interop.Enum<typeof MTLTextureType>;

  readonly pixelFormat: interop.Enum<typeof MTLPixelFormat>;

  readonly precision: number;

  readonly usage: interop.Enum<typeof MTLTextureUsage>;

  readonly featureChannelFormat: interop.Enum<typeof MPSImageFeatureChannelFormat>;

  readonly pixelSize: number;

  readonly texture: MTLTexture;

  label: string;

  readonly parent: MPSImage;

  initWithDeviceImageDescriptor(device: MTLDevice, imageDescriptor: MPSImageDescriptor): this;

  initWithParentImageSliceRangeFeatureChannels(parent: MPSImage, sliceRange: _NSRange, featureChannels: number): this;

  initWithTextureFeatureChannels(texture: MTLTexture, featureChannels: number): this;

  batchRepresentationWithSubRange(subRange: _NSRange): NSArray;

  batchRepresentation(): NSArray;

  subImageWithFeatureChannelRange(range: _NSRange): MPSImage;

  resourceSize(): number;

  setPurgeableState(state: interop.Enum<typeof MPSPurgeableState>): interop.Enum<typeof MPSPurgeableState>;

  readBytesDataLayoutBytesPerRowRegionFeatureChannelInfoImageIndex(dataBytes: interop.PointerConvertible, dataLayout: interop.Enum<typeof MPSDataLayout>, bytesPerRow: number, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: number): void;

  writeBytesDataLayoutBytesPerRowRegionFeatureChannelInfoImageIndex(dataBytes: interop.PointerConvertible, dataLayout: interop.Enum<typeof MPSDataLayout>, bytesPerRow: number, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: number): void;

  writeBytesDataLayoutBytesPerColumnBytesPerRowBytesPerImageRegionFeatureChannelInfoImageIndex(dataBytes: interop.PointerConvertible, dataLayout: interop.Enum<typeof MPSDataLayout>, bytesPerColumn: number, bytesPerRow: number, bytesPerImage: number, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: number): void;

  readBytesDataLayoutBytesPerRowBytesPerImageRegionFeatureChannelInfoImageIndex(dataBytes: interop.PointerConvertible, dataLayout: interop.Enum<typeof MPSDataLayout>, bytesPerRow: number, bytesPerImage: number, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: number): void;

  writeBytesDataLayoutBytesPerRowBytesPerImageRegionFeatureChannelInfoImageIndex(dataBytes: interop.PointerConvertible, dataLayout: interop.Enum<typeof MPSDataLayout>, bytesPerRow: number, bytesPerImage: number, region: MTLRegion, featureChannelInfo: MPSImageReadWriteParams, imageIndex: number): void;

  readBytesDataLayoutImageIndex(dataBytes: interop.PointerConvertible, dataLayout: interop.Enum<typeof MPSDataLayout>, imageIndex: number): void;

  writeBytesDataLayoutImageIndex(dataBytes: interop.PointerConvertible, dataLayout: interop.Enum<typeof MPSDataLayout>, imageIndex: number): void;

  synchronizeOnCommandBuffer(commandBuffer: MTLCommandBuffer): void;
}

declare class MPSCNNNeuronGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateDescriptor<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, descriptor: MPSNNNeuronDescriptor): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateDescriptor(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, descriptor: MPSNNNeuronDescriptor): this;

  readonly descriptor: MPSNNNeuronDescriptor;
}

declare class MPSTemporaryMatrix extends MPSMatrix {
  static temporaryMatrixWithCommandBufferMatrixDescriptor<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, matrixDescriptor: MPSMatrixDescriptor): InstanceType<This>;

  static prefetchStorageWithCommandBufferMatrixDescriptorList(commandBuffer: MTLCommandBuffer, descriptorList: NSArray<interop.Object> | Array<interop.Object>): void;

  readCount: number;
}

declare class MPSImageTranspose extends MPSUnaryImageKernel {
}

declare class MPSCNNSoftMax extends MPSCNNKernel {
}

declare class MPSNNSubtractionGradientNode extends MPSNNArithmeticGradientNode {
}

declare class MPSCNNNeuronPReLUNode extends MPSCNNNeuronNode {
  static nodeWithSourceAData<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, aData: NSData): InstanceType<This>;

  initWithSourceAData(sourceNode: MPSNNImageNode, aData: NSData): this;
}

declare class MPSImageMedian extends MPSUnaryImageKernel {
  readonly kernelDiameter: number;

  initWithDeviceKernelDiameter(device: MTLDevice, kernelDiameter: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  static maxKernelDiameter(): number;

  static minKernelDiameter(): number;
}

declare class MPSCNNNeuronLogarithm extends MPSCNNNeuron {
  initWithDeviceABC(device: MTLDevice, a: number, b: number, c: number): this;
}

declare class MPSNDArrayAffineInt4Dequantize extends MPSNDArrayMultiaryKernel {
  initWithDeviceQuantizationDescriptor(device: MTLDevice, quantizationDescriptor: MPSNDArrayAffineQuantizationDescriptor): this;
}

declare class MPSNNReductionRowMaxNode extends MPSNNUnaryReductionNode {
}

declare class MPSCNNMultiplyGradient extends MPSCNNArithmeticGradient {
  initWithDeviceIsSecondarySourceFilter(device: MTLDevice, isSecondarySourceFilter: boolean): this;
}

declare class MPSNNReduceRowMax extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNDArrayGradientState extends MPSState {
}

declare class MPSImageThresholdToZeroInverse extends MPSUnaryImageKernel {
  initWithDeviceThresholdValueLinearGrayColorTransform(device: MTLDevice, thresholdValue: number, transform: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly thresholdValue: number;

  readonly transform: interop.Pointer;
}

declare class MPSCNNNeuronExponential extends MPSCNNNeuron {
  initWithDeviceABC(device: MTLDevice, a: number, b: number, c: number): this;
}

declare class MPSCNNBinaryConvolutionNode extends MPSCNNConvolutionNode {
  static nodeWithSourceWeightsScaleValueTypeFlags<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, scaleValue: number, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): InstanceType<This>;

  initWithSourceWeightsScaleValueTypeFlags(sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, scaleValue: number, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;

  static nodeWithSourceWeightsOutputBiasTermsOutputScaleTermsInputBiasTermsInputScaleTermsTypeFlags<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, outputBiasTerms: interop.PointerConvertible, outputScaleTerms: interop.PointerConvertible, inputBiasTerms: interop.PointerConvertible, inputScaleTerms: interop.PointerConvertible, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): InstanceType<This>;

  initWithSourceWeightsOutputBiasTermsOutputScaleTermsInputBiasTermsInputScaleTermsTypeFlags(sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, outputBiasTerms: interop.PointerConvertible, outputScaleTerms: interop.PointerConvertible, inputBiasTerms: interop.PointerConvertible, inputScaleTerms: interop.PointerConvertible, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;
}

declare class MPSCNNBinaryConvolution extends MPSCNNKernel {
  readonly inputFeatureChannels: number;

  readonly outputFeatureChannels: number;

  initWithDeviceConvolutionDataScaleValueTypeFlags(device: MTLDevice, convolutionData: MPSCNNConvolutionDataSource, scaleValue: number, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;

  initWithDeviceConvolutionDataOutputBiasTermsOutputScaleTermsInputBiasTermsInputScaleTermsTypeFlags(device: MTLDevice, convolutionData: MPSCNNConvolutionDataSource, outputBiasTerms: interop.PointerConvertible, outputScaleTerms: interop.PointerConvertible, inputBiasTerms: interop.PointerConvertible, inputScaleTerms: interop.PointerConvertible, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReduceFeatureChannelsMin extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageLaplacian extends MPSUnaryImageKernel {
  bias: number;
}

declare class MPSImageConversion extends MPSUnaryImageKernel {
  readonly sourceAlpha: interop.Enum<typeof MPSAlphaType>;

  readonly destinationAlpha: interop.Enum<typeof MPSAlphaType>;

  initWithDeviceSrcAlphaDestAlphaBackgroundColorConversionInfo(device: MTLDevice, srcAlpha: interop.Enum<typeof MPSAlphaType>, destAlpha: interop.Enum<typeof MPSAlphaType>, backgroundColor: interop.PointerConvertible, conversionInfo: interop.PointerConvertible): this;
}

declare class MPSMatrixFullyConnected extends MPSMatrixBinaryKernel {
  sourceNumberOfFeatureVectors: number;

  sourceInputFeatureChannels: number;

  sourceOutputFeatureChannels: number;

  alpha: number;

  setNeuronTypeParameterAParameterBParameterC(neuronType: interop.Enum<typeof MPSCNNNeuronType>, parameterA: number, parameterB: number, parameterC: number): void;

  neuronType(): interop.Enum<typeof MPSCNNNeuronType>;

  neuronParameterA(): number;

  neuronParameterB(): number;

  neuronParameterC(): number;

  initWithDevice(device: MTLDevice): this;

  encodeToCommandBufferInputMatrixWeightMatrixBiasVectorResultMatrix(commandBuffer: MTLCommandBuffer, inputMatrix: MPSMatrix, weightMatrix: MPSMatrix, biasVector: MPSVector | null, resultMatrix: MPSMatrix): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSMatrixRandomMTGP32 extends MPSMatrixRandom {
  initWithDevice(device: MTLDevice): this;

  initWithDeviceDestinationDataTypeSeedDistributionDescriptor(device: MTLDevice, destinationDataType: interop.Enum<typeof MPSDataType>, seed: number, distributionDescriptor: MPSMatrixRandomDistributionDescriptor): this;

  synchronizeStateOnCommandBuffer(commandBuffer: MTLCommandBuffer): void;

  initWithDeviceDestinationDataTypeSeed(device: MTLDevice, destinationDataType: interop.Enum<typeof MPSDataType>, seed: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSTemporaryImage extends MPSImage {
  static defaultAllocator(): MPSImageAllocator;

  static temporaryImageWithCommandBufferImageDescriptor<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, imageDescriptor: MPSImageDescriptor): InstanceType<This>;

  static temporaryImageWithCommandBufferTextureDescriptor<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, textureDescriptor: MTLTextureDescriptor): InstanceType<This>;

  static temporaryImageWithCommandBufferTextureDescriptorFeatureChannels<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, textureDescriptor: MTLTextureDescriptor, featureChannels: number): InstanceType<This>;

  static prefetchStorageWithCommandBufferImageDescriptorList(commandBuffer: MTLCommandBuffer, descriptorList: NSArray<interop.Object> | Array<interop.Object>): void;

  readCount: number;
}

declare class MPSNNReductionRowMinNode extends MPSNNUnaryReductionNode {
}

declare class MPSCNNDropoutGradientState extends MPSNNGradientState {
  maskData(): NSData;
}

declare class MPSCNNYOLOLossDescriptor extends NSObject implements NSCopying {
  XYLossDescriptor: MPSCNNLossDescriptor;

  WHLossDescriptor: MPSCNNLossDescriptor;

  confidenceLossDescriptor: MPSCNNLossDescriptor;

  classesLossDescriptor: MPSCNNLossDescriptor;

  reductionType: interop.Enum<typeof MPSCNNReductionType>;

  reduceAcrossBatch: boolean;

  rescore: boolean;

  scaleXY: number;

  scaleWH: number;

  scaleNoObject: number;

  scaleObject: number;

  scaleClass: number;

  minIOUForObjectPresence: number;

  maxIOUForObjectAbsence: number;

  numberOfAnchorBoxes: number;

  anchorBoxes: NSData;

  static cnnLossDescriptorWithXYLossTypeWHLossTypeConfidenceLossTypeClassesLossTypeReductionTypeAnchorBoxesNumberOfAnchorBoxes(XYLossType: interop.Enum<typeof MPSCNNLossType>, WHLossType: interop.Enum<typeof MPSCNNLossType>, confidenceLossType: interop.Enum<typeof MPSCNNLossType>, classesLossType: interop.Enum<typeof MPSCNNLossType>, reductionType: interop.Enum<typeof MPSCNNReductionType>, anchorBoxes: NSData, numberOfAnchorBoxes: number): MPSCNNYOLOLossDescriptor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSImageSobel extends MPSUnaryImageKernel {
  initWithDevice(device: MTLDevice): this;

  initWithDeviceLinearGrayColorTransform(device: MTLDevice, transform: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly colorTransform: interop.Pointer;
}

declare class MPSPolygonAccelerationStructure extends MPSAccelerationStructure {
  polygonType: interop.Enum<typeof MPSPolygonType>;

  vertexStride: number;

  indexType: interop.Enum<typeof MPSDataType>;

  vertexBuffer: MTLBuffer | null;

  vertexBufferOffset: number;

  indexBuffer: MTLBuffer | null;

  indexBufferOffset: number;

  maskBuffer: MTLBuffer | null;

  maskBufferOffset: number;

  polygonCount: number;

  get polygonBuffers(): NSArray | null;
  set polygonBuffers(value: NSArray<interop.Object> | Array<interop.Object> | null);
}

declare class MPSCNNNeuronPower extends MPSCNNNeuron {
  initWithDeviceABC(device: MTLDevice, a: number, b: number, c: number): this;
}

declare class MPSImageReduceRowSum extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSImageSubtract extends MPSImageArithmetic {
  initWithDevice(device: MTLDevice): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayStridedSlice extends MPSNDArrayUnaryKernel {
  // @ts-ignore MemberDecl.tsIgnore
  strides: MPSNDArrayOffsets;
}

declare class MPSMatrixSum extends MPSKernel {
  initWithDeviceCountRowsColumnsTranspose(device: MTLDevice, count: number, rows: number, columns: number, transpose: boolean): this;

  readonly rows: number;

  readonly columns: number;

  readonly count: number;

  readonly transpose: boolean;

  resultMatrixOrigin: MTLOrigin;

  setNeuronTypeParameterAParameterBParameterC(neuronType: interop.Enum<typeof MPSCNNNeuronType>, parameterA: number, parameterB: number, parameterC: number): void;

  neuronType(): interop.Enum<typeof MPSCNNNeuronType>;

  readonly neuronParameterA: number;

  readonly neuronParameterB: number;

  readonly neuronParameterC: number;

  encodeToCommandBufferSourceMatricesResultMatrixScaleVectorOffsetVectorBiasVectorStartIndex(buffer: MTLCommandBuffer, sourceMatrices: NSArray<interop.Object> | Array<interop.Object>, resultMatrix: MPSMatrix, scaleVector: MPSVector | null, offsetVector: MPSVector | null, biasVector: MPSVector | null, startIndex: number): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNConvolutionTransposeGradient extends MPSCNNGradientKernel {
  readonly sourceGradientFeatureChannels: number;

  readonly sourceImageFeatureChannels: number;

  readonly groups: number;

  readonly dataSource: MPSCNNConvolutionDataSource;

  gradientOption: interop.Enum<typeof MPSCNNConvolutionGradientOption>;

  initWithDeviceWeights(device: MTLDevice, weights: MPSCNNConvolutionDataSource): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  reloadWeightsAndBiasesFromDataSource(): void;

  reloadWeightsAndBiasesWithCommandBufferState(commandBuffer: MTLCommandBuffer, state: MPSCNNConvolutionWeightsAndBiasesState): void;
}

declare class MPSNNReduceRowMin extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImagePyramid extends MPSUnaryImageKernel {
  initWithDevice(device: MTLDevice): this;

  initWithDeviceCenterWeight(device: MTLDevice, centerWeight: number): this;

  initWithDeviceKernelWidthKernelHeightWeights(device: MTLDevice, kernelWidth: number, kernelHeight: number, kernelWeights: interop.PointerConvertible): this;

  readonly kernelHeight: number;

  readonly kernelWidth: number;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNOptimizerStochasticGradientDescent extends MPSNNOptimizer {
  readonly momentumScale: number;

  readonly useNesterovMomentum: boolean;

  readonly useNestrovMomentum: boolean;

  initWithDeviceLearningRate(device: MTLDevice, learningRate: number): this;

  initWithDeviceMomentumScaleUseNesterovMomentumOptimizerDescriptor(device: MTLDevice, momentumScale: number, useNesterovMomentum: boolean, optimizerDescriptor: MPSNNOptimizerDescriptor): this;

  initWithDeviceMomentumScaleUseNestrovMomentumOptimizerDescriptor(device: MTLDevice, momentumScale: number, useNestrovMomentum: boolean, optimizerDescriptor: MPSNNOptimizerDescriptor): this;

  encodeToCommandBufferInputGradientVectorInputValuesVectorInputMomentumVectorResultValuesVector(commandBuffer: MTLCommandBuffer, inputGradientVector: MPSVector, inputValuesVector: MPSVector, inputMomentumVector: MPSVector | null, resultValuesVector: MPSVector): void;

  encodeToCommandBufferInputGradientMatrixInputValuesMatrixInputMomentumMatrixResultValuesMatrix(commandBuffer: MTLCommandBuffer, inputGradientMatrix: MPSMatrix, inputValuesMatrix: MPSMatrix, inputMomentumMatrix: MPSMatrix | null, resultValuesMatrix: MPSMatrix): void;

  encodeToCommandBufferConvolutionGradientStateConvolutionSourceStateInputMomentumVectorsResultState(commandBuffer: MTLCommandBuffer, convolutionGradientState: MPSCNNConvolutionGradientState, convolutionSourceState: MPSCNNConvolutionWeightsAndBiasesState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNConvolutionWeightsAndBiasesState): void;

  encodeToCommandBufferBatchNormalizationStateInputMomentumVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationState: MPSCNNBatchNormalizationState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;

  encodeToCommandBufferBatchNormalizationGradientStateBatchNormalizationSourceStateInputMomentumVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationGradientState: MPSCNNBatchNormalizationState, batchNormalizationSourceState: MPSCNNBatchNormalizationState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;
}

declare class MPSNNReductionColumnSumNode extends MPSNNUnaryReductionNode {
}

declare class MPSCNNLossLabels extends MPSState {
  initWithDeviceLabelsDescriptor(device: MTLDevice, labelsDescriptor: MPSCNNLossDataDescriptor): this;

  initWithDeviceLossImageSizeLabelsDescriptorWeightsDescriptor(device: MTLDevice, lossImageSize: MTLSize, labelsDescriptor: MPSCNNLossDataDescriptor, weightsDescriptor: MPSCNNLossDataDescriptor | null): this;

  initWithDeviceLossImageSizeLabelsImageWeightsImage(device: MTLDevice, lossImageSize: MTLSize, labelsImage: MPSImage, weightsImage: MPSImage | null): this;

  lossImage(): MPSImage;

  labelsImage(): MPSImage;

  weightsImage(): MPSImage;
}

declare class MPSMatrixDescriptor extends NSObject {
  rows: number;

  columns: number;

  readonly matrices: number;

  dataType: interop.Enum<typeof MPSDataType>;

  rowBytes: number;

  readonly matrixBytes: number;

  static matrixDescriptorWithDimensionsColumnsRowBytesDataType<This extends abstract new (...args: any) => any>(this: This, rows: number, columns: number, rowBytes: number, dataType: interop.Enum<typeof MPSDataType>): InstanceType<This>;

  static matrixDescriptorWithRowsColumnsRowBytesDataType<This extends abstract new (...args: any) => any>(this: This, rows: number, columns: number, rowBytes: number, dataType: interop.Enum<typeof MPSDataType>): InstanceType<This>;

  static matrixDescriptorWithRowsColumnsMatricesRowBytesMatrixBytesDataType<This extends abstract new (...args: any) => any>(this: This, rows: number, columns: number, matrices: number, rowBytes: number, matrixBytes: number, dataType: interop.Enum<typeof MPSDataType>): InstanceType<This>;

  static rowBytesFromColumnsDataType(columns: number, dataType: interop.Enum<typeof MPSDataType>): number;

  static rowBytesForColumnsDataType(columns: number, dataType: interop.Enum<typeof MPSDataType>): number;
}

declare class MPSNNGradientStateNode extends MPSNNStateNode {
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSAccelerationStructure extends MPSKernel implements NSSecureCoding, NSCopying {
  readonly group: MPSAccelerationStructureGroup;

  readonly boundingBox: _MPSAxisAlignedBoundingBox;

  readonly status: interop.Enum<typeof MPSAccelerationStructureStatus>;

  usage: interop.Enum<typeof MPSAccelerationStructureUsage>;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  initWithGroup(group: MPSAccelerationStructureGroup): this;

  initWithCoderGroup(aDecoder: NSCoder, group: MPSAccelerationStructureGroup): this;

  rebuild(): void;

  rebuildWithCompletionHandler(completionHandler: (p1: MPSAccelerationStructure) => void): void;

  encodeRefitToCommandBuffer(commandBuffer: MTLCommandBuffer): void;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  copyWithZoneGroup(zone: interop.PointerConvertible, group: MPSAccelerationStructureGroup): this;

  encodeWithCoder(coder: NSCoder): void;

  static readonly supportsSecureCoding: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSCNNSpatialNormalizationGradient extends MPSCNNGradientKernel {
  alpha: number;

  beta: number;

  delta: number;

  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNBinaryFullyConnected extends MPSCNNBinaryConvolution {
  initWithDeviceConvolutionDataScaleValueTypeFlags(device: MTLDevice, convolutionData: MPSCNNConvolutionDataSource, scaleValue: number, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;

  initWithDeviceConvolutionDataOutputBiasTermsOutputScaleTermsInputBiasTermsInputScaleTermsTypeFlags(device: MTLDevice, convolutionData: MPSCNNConvolutionDataSource, outputBiasTerms: interop.PointerConvertible, outputScaleTerms: interop.PointerConvertible, inputBiasTerms: interop.PointerConvertible, inputScaleTerms: interop.PointerConvertible, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageEuclideanDistanceTransform extends MPSUnaryImageKernel {
  searchLimitRadius: number;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNSoftMaxGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;
}

declare class MPSCNNNeuronPReLU extends MPSCNNNeuron {
  initWithDeviceACount(device: MTLDevice, a: interop.PointerConvertible, count: number): this;
}

declare class MPSImageStatisticsMean extends MPSUnaryImageKernel {
  clipRectSource: MTLRegion;

  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNUpsamplingBilinearGradient extends MPSCNNUpsamplingGradient {
  initWithDeviceIntegerScaleFactorXIntegerScaleFactorY(device: MTLDevice, integerScaleFactorX: number, integerScaleFactorY: number): this;
}

declare class MPSCNNLogSoftMax extends MPSCNNKernel {
}

declare class MPSCNNYOLOLossNode extends MPSNNFilterNode {
  static nodeWithSourceLossDescriptor<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, descriptor: MPSCNNYOLOLossDescriptor): InstanceType<This>;

  initWithSourceLossDescriptor(source: MPSNNImageNode, descriptor: MPSCNNYOLOLossDescriptor): this;

  readonly inputLabels: MPSNNLabelsNode;
}

declare class MPSKeyedUnarchiver extends NSKeyedUnarchiver implements MPSDeviceProvider {
  static unarchivedObjectOfClassesFromDataDeviceError(classes: NSSet, data: NSData, device: MTLDevice, error: interop.PointerConvertible): interop.Object;

  static unarchivedObjectOfClassFromDataDeviceError(cls: interop.Object, data: NSData, device: MTLDevice, error: interop.PointerConvertible): interop.Object;

  initForReadingFromDataDeviceError(data: NSData, device: MTLDevice, error: interop.PointerConvertible): this;

  mpsMTLDevice(): MTLDevice;

  static unarchiveObjectWithDataDevice(data: NSData, device: MTLDevice): interop.Object;

  static unarchiveTopLevelObjectWithDataDeviceError(data: NSData, device: MTLDevice, error: interop.PointerConvertible): interop.Object;

  static unarchiveObjectWithFileDevice(path: string, device: MTLDevice): interop.Object;

  initWithDevice(device: MTLDevice): this;

  initForReadingWithDataDevice(data: NSData, device: MTLDevice): this;
}

declare class MPSCNNNeuronReLUNode extends MPSCNNNeuronNode {
  static nodeWithSourceA<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number): InstanceType<This>;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;

  initWithSourceA(sourceNode: MPSNNImageNode, a: number): this;
}

declare class MPSCNNGroupNormalizationGradientNode extends MPSNNGradientFilterNode implements MPSNNTrainableNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;

  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

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

declare class MPSCNNUpsamplingGradient extends MPSCNNGradientKernel {
  readonly scaleFactorX: number;

  readonly scaleFactorY: number;
}

declare class MPSCNNNeuronGeLUNode extends MPSCNNNeuronNode {
  initWithSource(sourceNode: MPSNNImageNode): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;
}

declare class MPSCNNInstanceNormalizationNode extends MPSNNFilterNode implements MPSNNTrainableNode {
  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

  static nodeWithSourceDataSource<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, dataSource: MPSCNNInstanceNormalizationDataSource): InstanceType<This>;

  initWithSourceDataSource(source: MPSNNImageNode, dataSource: MPSCNNInstanceNormalizationDataSource): this;

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

declare class MPSCNNUpsamplingNearestNode extends MPSNNFilterNode {
  static nodeWithSourceIntegerScaleFactorXIntegerScaleFactorY<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, integerScaleFactorX: number, integerScaleFactorY: number): InstanceType<This>;

  initWithSourceIntegerScaleFactorXIntegerScaleFactorY(sourceNode: MPSNNImageNode, integerScaleFactorX: number, integerScaleFactorY: number): this;

  readonly scaleFactorX: number;

  readonly scaleFactorY: number;
}

declare class MPSCNNBinaryFullyConnectedNode extends MPSCNNBinaryConvolutionNode {
  static nodeWithSourceWeightsScaleValueTypeFlags<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, scaleValue: number, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): InstanceType<This>;

  initWithSourceWeightsScaleValueTypeFlags(sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, scaleValue: number, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;

  static nodeWithSourceWeightsOutputBiasTermsOutputScaleTermsInputBiasTermsInputScaleTermsTypeFlags<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, outputBiasTerms: interop.PointerConvertible, outputScaleTerms: interop.PointerConvertible, inputBiasTerms: interop.PointerConvertible, inputScaleTerms: interop.PointerConvertible, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): InstanceType<This>;

  initWithSourceWeightsOutputBiasTermsOutputScaleTermsInputBiasTermsInputScaleTermsTypeFlags(sourceNode: MPSNNImageNode, weights: MPSCNNConvolutionDataSource, outputBiasTerms: interop.PointerConvertible, outputScaleTerms: interop.PointerConvertible, inputBiasTerms: interop.PointerConvertible, inputScaleTerms: interop.PointerConvertible, type: interop.Enum<typeof MPSCNNBinaryConvolutionType>, flags: interop.Enum<typeof MPSCNNBinaryConvolutionFlags>): this;
}

declare class MPSNNLossGradientNode extends MPSNNGradientFilterNode {
  readonly lossType: interop.Enum<typeof MPSCNNLossType>;

  readonly reductionType: interop.Enum<typeof MPSCNNReductionType>;

  readonly numberOfClasses: number;

  readonly reduceAcrossBatch: boolean;

  readonly weight: number;

  readonly labelSmoothing: number;

  readonly epsilon: number;

  readonly delta: number;

  readonly isLabelsGradientFilter: boolean;

  propertyCallBack: MPSNNLossCallback;

  static nodeWithSourceGradientSourceImageLabelsWeightsGradientStateLossDescriptorIsLabelsGradientFilter<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, labels: MPSNNImageNode, weights: MPSNNImageNode, gradientState: MPSNNGradientStateNode | null, descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: boolean): InstanceType<This>;

  static nodeWithSourceGradientSourceImageLabelsGradientStateLossDescriptorIsLabelsGradientFilter<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, labels: MPSNNImageNode, gradientState: MPSNNGradientStateNode | null, descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: boolean): InstanceType<This>;

  static nodeWithSourcesGradientStateLossDescriptorIsLabelsGradientFilter<This extends abstract new (...args: any) => any>(this: This, sourceNodes: NSArray<interop.Object> | Array<interop.Object>, gradientState: MPSNNGradientStateNode | null, descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: boolean): InstanceType<This>;

  initWithSourceGradientSourceImageLabelsWeightsGradientStateLossDescriptorIsLabelsGradientFilter(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, labels: MPSNNImageNode, weights: MPSNNImageNode | null, gradientState: MPSNNGradientStateNode | null, descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: boolean): this;

  initWithSourceGradientSourceImageLabelsGradientStateLossDescriptorIsLabelsGradientFilter(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, labels: MPSNNImageNode, gradientState: MPSNNGradientStateNode | null, descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: boolean): this;

  initWithSourcesGradientStateLossDescriptorIsLabelsGradientFilter(sourceNodes: NSArray<interop.Object> | Array<interop.Object>, gradientState: MPSNNGradientStateNode | null, descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: boolean): this;
}

declare class MPSImageDilate extends MPSUnaryImageKernel {
  readonly kernelHeight: number;

  readonly kernelWidth: number;

  initWithDeviceKernelWidthKernelHeightValues(device: MTLDevice, kernelWidth: number, kernelHeight: number, values: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNPadNode extends MPSNNFilterNode {
  fillValue: number;

  static nodeWithSourcePaddingSizeBeforePaddingSizeAfterEdgeMode<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode, paddingSizeBefore: MPSImageCoordinate, paddingSizeAfter: MPSImageCoordinate, edgeMode: interop.Enum<typeof MPSImageEdgeMode>): InstanceType<This>;

  initWithSourcePaddingSizeBeforePaddingSizeAfterEdgeMode(source: MPSNNImageNode, paddingSizeBefore: MPSImageCoordinate, paddingSizeAfter: MPSImageCoordinate, edgeMode: interop.Enum<typeof MPSImageEdgeMode>): this;
}

declare class MPSNNUnaryReductionNode extends MPSNNFilterNode {
  clipRectSource: MTLRegion;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSMatrixLogSoftMax extends MPSMatrixSoftMax {
}

declare class MPSCNNPoolingL2NormGradient extends MPSCNNPoolingGradient {
  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageTent extends MPSImageBox {
}

declare class MPSCNNNeuronSoftSign extends MPSCNNNeuron {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSCNNCrossChannelNormalization extends MPSCNNKernel {
  alpha: number;

  beta: number;

  delta: number;

  readonly kernelSize: number;

  initWithDeviceKernelSize(device: MTLDevice, kernelSize: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageCopyToMatrix extends MPSKernel {
  destinationMatrixOrigin: MTLOrigin;

  destinationMatrixBatchIndex: number;

  readonly dataLayout: interop.Enum<typeof MPSDataLayout>;

  initWithDeviceDataLayout(device: MTLDevice, dataLayout: interop.Enum<typeof MPSDataLayout>): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImageDestinationMatrix(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, destinationMatrix: MPSMatrix): void;

  encodeBatchToCommandBufferSourceImagesDestinationMatrix(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, destinationMatrix: MPSMatrix): void;
}

declare class MPSCNNLogSoftMaxGradient extends MPSCNNGradientKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSImageHistogram extends MPSKernel {
  clipRectSource: MTLRegion;

  zeroHistogram: boolean;

  minPixelThresholdValue: unknown /* ext vector */;

  readonly histogramInfo: MPSImageHistogramInfo;

  initWithDeviceHistogramInfo(device: MTLDevice, histogramInfo: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceTextureHistogramHistogramOffset(commandBuffer: MTLCommandBuffer, source: MTLTexture, histogram: MTLBuffer, histogramOffset: number): void;

  histogramSizeForSourceFormat(sourceFormat: interop.Enum<typeof MTLPixelFormat>): number;
}

declare class MPSImageDescriptor extends NSObject implements NSCopying {
  width: number;

  height: number;

  featureChannels: number;

  numberOfImages: number;

  readonly pixelFormat: interop.Enum<typeof MTLPixelFormat>;

  channelFormat: interop.Enum<typeof MPSImageFeatureChannelFormat>;

  cpuCacheMode: interop.Enum<typeof MTLCPUCacheMode>;

  storageMode: interop.Enum<typeof MTLStorageMode>;

  usage: interop.Enum<typeof MTLTextureUsage>;

  static imageDescriptorWithChannelFormatWidthHeightFeatureChannels<This extends abstract new (...args: any) => any>(this: This, channelFormat: interop.Enum<typeof MPSImageFeatureChannelFormat>, width: number, height: number, featureChannels: number): InstanceType<This>;

  static imageDescriptorWithChannelFormatWidthHeightFeatureChannelsNumberOfImagesUsage<This extends abstract new (...args: any) => any>(this: This, channelFormat: interop.Enum<typeof MPSImageFeatureChannelFormat>, width: number, height: number, featureChannels: number, numberOfImages: number, usage: interop.Enum<typeof MTLTextureUsage>): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): this;
}

declare class MPSCNNLossDescriptor extends NSObject implements NSCopying {
  lossType: interop.Enum<typeof MPSCNNLossType>;

  reductionType: interop.Enum<typeof MPSCNNReductionType>;

  reduceAcrossBatch: boolean;

  weight: number;

  labelSmoothing: number;

  numberOfClasses: number;

  epsilon: number;

  delta: number;

  static cnnLossDescriptorWithTypeReductionType(lossType: interop.Enum<typeof MPSCNNLossType>, reductionType: interop.Enum<typeof MPSCNNReductionType>): MPSCNNLossDescriptor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSImageArithmetic extends MPSBinaryImageKernel {
  primaryScale: number;

  secondaryScale: number;

  bias: number;

  primaryStrideInPixels: MTLSize;

  secondaryStrideInPixels: MTLSize;

  minimumValue: number;

  maximumValue: number;
}

declare class MPSCNNSoftMaxGradient extends MPSCNNGradientKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNDArrayAffineQuantizationDescriptor extends MPSNDArrayQuantizationDescriptor {
  hasZeroPoint: boolean;

  hasMinValue: boolean;

  implicitZeroPoint: boolean;

  init(): this;

  initWithDataTypeHasZeroPointHasMinValue(quantizationDataType: interop.Enum<typeof MPSDataType>, hasZeroPoint: boolean, hasMinValue: boolean): this;
}

declare class MPSCNNLoss extends MPSCNNKernel {
  readonly lossType: interop.Enum<typeof MPSCNNLossType>;

  readonly reductionType: interop.Enum<typeof MPSCNNReductionType>;

  readonly weight: number;

  readonly labelSmoothing: number;

  readonly numberOfClasses: number;

  readonly epsilon: number;

  readonly delta: number;

  readonly reduceAcrossBatch: boolean;

  initWithDeviceLossDescriptor(device: MTLDevice, lossDescriptor: MPSCNNLossDescriptor): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceImageLabelsDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, labels: MPSCNNLossLabels, destinationImage: MPSImage): void;

  encodeToCommandBufferSourceImageLabels(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, labels: MPSCNNLossLabels): MPSImage;

  encodeBatchToCommandBufferSourceImagesLabelsDestinationImages(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>, destinationImage: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeBatchToCommandBufferSourceImagesLabels(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>): NSArray;
}

declare class MPSCNNAdd extends MPSCNNArithmetic {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSCNNNormalizationGammaAndBetaState extends MPSState {
  readonly gamma: MTLBuffer;

  readonly beta: MTLBuffer;

  initWithGammaBeta(gamma: MTLBuffer, beta: MTLBuffer): this;

  static temporaryStateWithCommandBufferNumberOfFeatureChannels<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, numberOfFeatureChannels: number): InstanceType<This>;
}

declare class MPSImageReduceRowMin extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSCNNLocalContrastNormalizationGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateKernelWidthKernelHeight<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelWidth: number, kernelHeight: number): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateKernelWidthKernelHeight(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelWidth: number, kernelHeight: number): this;

  alpha: number;

  beta: number;

  delta: number;

  p0: number;

  pm: number;

  ps: number;

  readonly kernelWidth: number;

  readonly kernelHeight: number;
}

declare class MPSNNStateNode extends NSObject {
  handle: MPSHandle;

  exportFromGraph: boolean;

  synchronizeResource: boolean;
}

declare class MPSCNNLocalContrastNormalizationGradient extends MPSCNNGradientKernel {
  alpha: number;

  beta: number;

  delta: number;

  p0: number;

  pm: number;

  ps: number;

  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReduceFeatureChannelsArgumentMax extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNNeuronLinear extends MPSCNNNeuron {
  initWithDeviceAB(device: MTLDevice, a: number, b: number): this;
}

declare class MPSCNNInstanceNormalizationGradientState extends MPSNNGradientState {
  readonly instanceNormalization: MPSCNNInstanceNormalization;

  readonly gamma: MTLBuffer | null;

  readonly beta: MTLBuffer | null;

  readonly gradientForGamma: MTLBuffer;

  readonly gradientForBeta: MTLBuffer;
}

declare class MPSNNReduceUnary extends MPSCNNKernel {
  clipRectSource: MTLRegion;

  offset: MPSOffset;
}

declare class MPSNNGradientFilterNode extends MPSNNFilterNode {
}

declare class MPSImageFindKeypoints extends MPSKernel {
  readonly keypointRangeInfo: MPSImageKeypointRangeInfo;

  initWithDeviceInfo(device: MTLDevice, info: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceTextureRegionsNumberOfRegionsKeypointCountBufferKeypointCountBufferOffsetKeypointDataBufferKeypointDataBufferOffset(commandBuffer: MTLCommandBuffer, source: MTLTexture, regions: interop.PointerConvertible, numberOfRegions: number, keypointCountBuffer: MTLBuffer, keypointCountBufferOffset: number, keypointDataBuffer: MTLBuffer, keypointDataBufferOffset: number): void;
}

declare class MPSCommandBuffer extends NSObject implements MTLCommandBuffer {
  readonly commandBuffer: MTLCommandBuffer;

  readonly rootCommandBuffer: MTLCommandBuffer;

  predicate: MPSPredicate;

  heapProvider: MPSHeapProvider;

  static commandBufferWithCommandBuffer<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer): InstanceType<This>;

  static commandBufferFromCommandQueue<This extends abstract new (...args: any) => any>(this: This, commandQueue: MTLCommandQueue): InstanceType<This>;

  initWithCommandBuffer(commandBuffer: MTLCommandBuffer): this;

  commitAndContinue(): void;

  prefetchHeapForWorkloadSize(size: number): void;

  readonly device: MTLDevice;

  readonly commandQueue: MTLCommandQueue;

  readonly retainedReferences: boolean;

  readonly errorOptions: interop.Enum<typeof MTLCommandBufferErrorOption>;

  label: string;

  readonly kernelStartTime: number;

  readonly kernelEndTime: number;

  readonly logs: MTLLogContainer;

  readonly GPUStartTime: number;

  readonly GPUEndTime: number;

  enqueue(): void;

  commit(): void;

  addScheduledHandler(block: (p1: MTLCommandBuffer) => void): void;

  presentDrawable(drawable: MTLDrawable): void;

  presentDrawableAtTime(drawable: MTLDrawable, presentationTime: number): void;

  presentDrawableAfterMinimumDuration(drawable: MTLDrawable, duration: number): void;

  waitUntilScheduled(): void;

  addCompletedHandler(block: (p1: MTLCommandBuffer) => void): void;

  waitUntilCompleted(): void;

  readonly status: interop.Enum<typeof MTLCommandBufferStatus>;

  readonly error: NSError;

  blitCommandEncoder(): MTLBlitCommandEncoder;

  renderCommandEncoderWithDescriptor(renderPassDescriptor: MTLRenderPassDescriptor): MTLRenderCommandEncoder;

  computeCommandEncoderWithDescriptor(computePassDescriptor: MTLComputePassDescriptor): MTLComputeCommandEncoder;

  blitCommandEncoderWithDescriptor(blitPassDescriptor: MTLBlitPassDescriptor): MTLBlitCommandEncoder;

  computeCommandEncoder(): MTLComputeCommandEncoder;

  computeCommandEncoderWithDispatchType(dispatchType: interop.Enum<typeof MTLDispatchType>): MTLComputeCommandEncoder;

  encodeWaitForEventValue(event: MTLEvent, value: number): void;

  encodeSignalEventValue(event: MTLEvent, value: number): void;

  parallelRenderCommandEncoderWithDescriptor(renderPassDescriptor: MTLRenderPassDescriptor): MTLParallelRenderCommandEncoder;

  resourceStateCommandEncoder(): MTLResourceStateCommandEncoder;

  resourceStateCommandEncoderWithDescriptor(resourceStatePassDescriptor: MTLResourceStatePassDescriptor): MTLResourceStateCommandEncoder;

  accelerationStructureCommandEncoder(): MTLAccelerationStructureCommandEncoder;

  accelerationStructureCommandEncoderWithDescriptor(descriptor: MTLAccelerationStructurePassDescriptor): MTLAccelerationStructureCommandEncoder;

  pushDebugGroup(string: string): void;

  popDebugGroup(): void;

  useResidencySet(residencySet: MTLResidencySet): void;

  useResidencySetsCount(residencySets: interop.PointerConvertible, count: number): void;

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

declare class MPSCNNArithmeticGradient extends MPSCNNGradientKernel {
  primaryScale: number;

  secondaryScale: number;

  bias: number;

  secondaryStrideInFeatureChannels: number;

  minimumValue: number;

  maximumValue: number;

  readonly isSecondarySourceFilter: boolean;
}

declare class MPSCNNUpsampling extends MPSCNNKernel {
  readonly scaleFactorX: number;

  readonly scaleFactorY: number;

  readonly alignCorners: boolean;
}

declare class MPSCNNGroupNormalizationGradientState extends MPSNNGradientState {
  readonly groupNormalization: MPSCNNGroupNormalization;

  readonly gamma: MTLBuffer | null;

  readonly beta: MTLBuffer | null;

  readonly gradientForGamma: MTLBuffer;

  readonly gradientForBeta: MTLBuffer;
}

declare class MPSNNReductionFeatureChannelsMeanNode extends MPSNNUnaryReductionNode {
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayUnaryGradientKernel extends MPSNDArrayMultiaryGradientKernel {
  initWithDevice(device: MTLDevice): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceArraySourceGradientGradientState(cmdBuf: MTLCommandBuffer, sourceArray: MPSNDArray, gradient: MPSNDArray, state: MPSState): MPSNDArray;

  encodeToCommandBufferSourceArraySourceGradientGradientStateDestinationArray(cmdBuf: MTLCommandBuffer, sourceArray: MPSNDArray, gradient: MPSNDArray, state: MPSState, destination: MPSNDArray): void;
}

declare class MPSCNNConvolutionGradient extends MPSCNNGradientKernel {
  readonly sourceGradientFeatureChannels: number;

  readonly sourceImageFeatureChannels: number;

  readonly groups: number;

  readonly channelMultiplier: number;

  readonly dataSource: MPSCNNConvolutionDataSource;

  gradientOption: interop.Enum<typeof MPSCNNConvolutionGradientOption>;

  serializeWeightsAndBiases: boolean;

  initWithDeviceWeights(device: MTLDevice, weights: MPSCNNConvolutionDataSource): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  reloadWeightsAndBiasesFromDataSource(): void;

  reloadWeightsAndBiasesWithCommandBufferState(commandBuffer: MTLCommandBuffer, state: MPSCNNConvolutionWeightsAndBiasesState): void;
}

declare class MPSNDArrayGatherGradient extends MPSNDArrayBinaryPrimaryGradientKernel {
}

declare class MPSNNGramMatrixCalculationNode extends MPSNNFilterNode {
  readonly alpha: number;

  propertyCallBack: MPSNNGramMatrixCallback;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;

  static nodeWithSourceAlpha<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, alpha: number): InstanceType<This>;

  initWithSourceAlpha(sourceNode: MPSNNImageNode, alpha: number): this;
}

declare class MPSCNNCrossChannelNormalizationGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateKernelSize<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelSize: number): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateKernelSize(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelSize: number): this;

  readonly kernelSize: number;
}

declare class MPSNNLabelsNode extends MPSNNStateNode {
}

declare class MPSMatrixBinaryKernel extends MPSKernel {
  primarySourceMatrixOrigin: MTLOrigin;

  secondarySourceMatrixOrigin: MTLOrigin;

  resultMatrixOrigin: MTLOrigin;

  batchStart: number;

  batchSize: number;
}

declare class MPSNDArrayGatherGradientState extends MPSNDArrayGradientState {
}

declare class MPSImageConvolution extends MPSUnaryImageKernel {
  readonly kernelHeight: number;

  readonly kernelWidth: number;

  bias: number;

  initWithDeviceKernelWidthKernelHeightWeights(device: MTLDevice, kernelWidth: number, kernelHeight: number, kernelWeights: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNNeuronLogarithmNode extends MPSCNNNeuronNode {
  static nodeWithSourceABC<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number, c: number): InstanceType<This>;

  initWithSourceABC(sourceNode: MPSNNImageNode, a: number, b: number, c: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSNNComparisonNode extends MPSNNBinaryArithmeticNode {
  comparisonType: interop.Enum<typeof MPSNNComparisonType>;
}

declare class MPSCNNNeuronLinearNode extends MPSCNNNeuronNode {
  static nodeWithSourceAB<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number): InstanceType<This>;

  initWithSourceAB(sourceNode: MPSNNImageNode, a: number, b: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSImageReduceColumnMean extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

declare class MPSNNDivisionNode extends MPSNNBinaryArithmeticNode {
}

declare class MPSNNGramMatrixCalculationGradientNode extends MPSNNGradientFilterNode {
  readonly alpha: number;

  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;

  static nodeWithSourceGradientSourceImageGradientStateAlpha<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, alpha: number): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateAlpha(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, alpha: number): this;
}

declare class MPSNNNeuronDescriptor extends NSObject implements NSCopying, NSSecureCoding {
  neuronType: interop.Enum<typeof MPSCNNNeuronType>;

  a: number;

  b: number;

  c: number;

  data: NSData;

  static cnnNeuronDescriptorWithType(neuronType: interop.Enum<typeof MPSCNNNeuronType>): MPSNNNeuronDescriptor;

  static cnnNeuronDescriptorWithTypeA(neuronType: interop.Enum<typeof MPSCNNNeuronType>, a: number): MPSNNNeuronDescriptor;

  static cnnNeuronDescriptorWithTypeAB(neuronType: interop.Enum<typeof MPSCNNNeuronType>, a: number, b: number): MPSNNNeuronDescriptor;

  static cnnNeuronDescriptorWithTypeABC(neuronType: interop.Enum<typeof MPSCNNNeuronType>, a: number, b: number, c: number): MPSNNNeuronDescriptor;

  static cnnNeuronPReLUDescriptorWithDataNoCopy(data: NSData, noCopy: boolean): MPSNNNeuronDescriptor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MPSNNReductionFeatureChannelsMinNode extends MPSNNUnaryReductionNode {
}

declare class MPSImageThresholdToZero extends MPSUnaryImageKernel {
  initWithDeviceThresholdValueLinearGrayColorTransform(device: MTLDevice, thresholdValue: number, transform: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly thresholdValue: number;

  readonly transform: interop.Pointer;
}

declare class MPSCNNConvolutionDescriptor extends NSObject implements NSSecureCoding, NSCopying {
  kernelWidth: number;

  kernelHeight: number;

  inputFeatureChannels: number;

  outputFeatureChannels: number;

  strideInPixelsX: number;

  strideInPixelsY: number;

  groups: number;

  dilationRateX: number;

  dilationRateY: number;

  fusedNeuronDescriptor: MPSNNNeuronDescriptor;

  neuron: MPSCNNNeuron;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(aCoder: NSCoder): void;

  initWithCoder(aDecoder: NSCoder): this;

  static cnnConvolutionDescriptorWithKernelWidthKernelHeightInputFeatureChannelsOutputFeatureChannelsNeuronFilter<This extends abstract new (...args: any) => any>(this: This, kernelWidth: number, kernelHeight: number, inputFeatureChannels: number, outputFeatureChannels: number, neuronFilter: MPSCNNNeuron | null): InstanceType<This>;

  static cnnConvolutionDescriptorWithKernelWidthKernelHeightInputFeatureChannelsOutputFeatureChannels<This extends abstract new (...args: any) => any>(this: This, kernelWidth: number, kernelHeight: number, inputFeatureChannels: number, outputFeatureChannels: number): InstanceType<This>;

  setBatchNormalizationParametersForInferenceWithMeanVarianceGammaBetaEpsilon(mean: interop.PointerConvertible, variance: interop.PointerConvertible, gamma: interop.PointerConvertible, beta: interop.PointerConvertible, epsilon: number): void;

  setNeuronTypeParameterAParameterB(neuronType: interop.Enum<typeof MPSCNNNeuronType>, parameterA: number, parameterB: number): void;

  neuronType(): interop.Enum<typeof MPSCNNNeuronType>;

  neuronParameterA(): number;

  neuronParameterB(): number;

  setNeuronToPReLUWithParametersA(A: NSData): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSNNReduceColumnSum extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSCNNBatchNormalizationStatisticsGradient extends MPSCNNGradientKernel {
  initWithDeviceFusedNeuronDescriptor(device: MTLDevice, fusedNeuronDescriptor: MPSNNNeuronDescriptor | null): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeBatchToCommandBufferSourceGradientsSourceImagesBatchNormalizationState(commandBuffer: MTLCommandBuffer, sourceGradients: NSArray<interop.Object> | Array<interop.Object>, sourceImages: NSArray<interop.Object> | Array<interop.Object>, batchNormalizationState: MPSCNNBatchNormalizationState): void;
}

declare class MPSCNNUpsamplingBilinearNode extends MPSNNFilterNode {
  static nodeWithSourceIntegerScaleFactorXIntegerScaleFactorY<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, integerScaleFactorX: number, integerScaleFactorY: number): InstanceType<This>;

  static nodeWithSourceIntegerScaleFactorXIntegerScaleFactorYAlignCorners<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, integerScaleFactorX: number, integerScaleFactorY: number, alignCorners: boolean): InstanceType<This>;

  initWithSourceIntegerScaleFactorXIntegerScaleFactorY(sourceNode: MPSNNImageNode, integerScaleFactorX: number, integerScaleFactorY: number): this;

  initWithSourceIntegerScaleFactorXIntegerScaleFactorYAlignCorners(sourceNode: MPSNNImageNode, integerScaleFactorX: number, integerScaleFactorY: number, alignCorners: boolean): this;

  readonly scaleFactorX: number;

  readonly scaleFactorY: number;

  readonly alignCorners: boolean;
}

declare class MPSImageReduceRowMean extends MPSImageReduceUnary {
  initWithDevice(device: MTLDevice): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayBinaryKernel extends MPSNDArrayMultiaryKernel {
  readonly primaryOffsets: MPSNDArrayOffsets;

  readonly primaryEdgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  readonly primaryKernelSizes: MPSNDArraySizes;

  readonly primaryStrides: MPSNDArrayOffsets;

  readonly primaryDilationRates: MPSNDArraySizes;

  readonly secondaryOffsets: MPSNDArrayOffsets;

  readonly secondaryEdgeMode: interop.Enum<typeof MPSImageEdgeMode>;

  readonly secondaryKernelSizes: MPSNDArraySizes;

  readonly secondaryStrides: MPSNDArrayOffsets;

  readonly secondaryDilationRates: MPSNDArraySizes;

  initWithDevice(device: MTLDevice): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArray(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray): MPSNDArray;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArrayDestinationArray(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, destination: MPSNDArray): void;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArrayResultStateOutputStateIsTemporary(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, outGradientState: interop.PointerConvertible, outputStateIsTemporary: boolean): MPSNDArray;

  encodeToCommandBufferPrimarySourceArraySecondarySourceArrayResultStateDestinationArray(cmdBuf: MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, outGradientState: MPSState | null, destination: MPSNDArray): void;
}

declare class MPSNNReductionRowSumNode extends MPSNNUnaryReductionNode {
}

declare class MPSCNNPoolingMaxGradientNode extends MPSCNNPoolingGradientNode {
}

declare class MPSCNNInstanceNormalizationGradientNode extends MPSNNGradientFilterNode implements MPSNNTrainableNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;

  trainingStyle: interop.Enum<typeof MPSNNTrainingStyle>;

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

declare class MPSImageScale extends MPSUnaryImageKernel {
  initWithDevice(device: MTLDevice): this;

  get scaleTransform(): interop.Pointer;
  set scaleTransform(value: interop.PointerConvertible);

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSTemporaryVector extends MPSVector {
  static temporaryVectorWithCommandBufferDescriptor<This extends abstract new (...args: any) => any>(this: This, commandBuffer: MTLCommandBuffer, descriptor: MPSVectorDescriptor): InstanceType<This>;

  static prefetchStorageWithCommandBufferDescriptorList(commandBuffer: MTLCommandBuffer, descriptorList: NSArray<interop.Object> | Array<interop.Object>): void;

  readCount: number;
}

declare class MPSNNReductionSpatialMeanGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;
}

declare class MPSCNNDropoutGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateKeepProbabilitySeedMaskStrideInPixels<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, keepProbability: number, seed: number, maskStrideInPixels: MTLSize): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateKeepProbabilitySeedMaskStrideInPixels(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, keepProbability: number, seed: number, maskStrideInPixels: MTLSize): this;

  readonly keepProbability: number;

  readonly seed: number;

  readonly maskStrideInPixels: MTLSize;
}

declare class MPSNNArithmeticGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientStateIsSecondarySourceFilter<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNBinaryGradientStateNode, isSecondarySourceFilter: boolean): InstanceType<This>;

  initWithSourceGradientSourceImageGradientStateIsSecondarySourceFilter(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNBinaryGradientStateNode, isSecondarySourceFilter: boolean): this;

  initWithGradientImagesForwardFilterIsSecondarySourceFilter(gradientImages: NSArray<interop.Object> | Array<interop.Object>, filter: MPSNNFilterNode, isSecondarySourceFilter: boolean): this;

  primaryScale: number;

  secondaryScale: number;

  bias: number;

  secondaryStrideInPixelsX: number;

  secondaryStrideInPixelsY: number;

  secondaryStrideInFeatureChannels: number;

  minimumValue: number;

  maximumValue: number;

  readonly isSecondarySourceFilter: boolean;
}

declare class MPSRNNRecurrentImageState extends MPSState {
  getRecurrentOutputImageForLayerIndex(layerIndex: number): MPSImage;

  getMemoryCellImageForLayerIndex(layerIndex: number): MPSImage;
}

declare class MPSImageHistogramEqualization extends MPSUnaryImageKernel {
  readonly histogramInfo: MPSImageHistogramInfo;

  initWithDeviceHistogramInfo(device: MTLDevice, histogramInfo: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeTransformToCommandBufferSourceTextureHistogramHistogramOffset(commandBuffer: MTLCommandBuffer, source: MTLTexture, histogram: MTLBuffer, histogramOffset: number): void;
}

declare class MPSCNNConvolutionTransposeGradientState extends MPSCNNConvolutionGradientState {
  readonly convolutionTranspose: MPSCNNConvolutionTranspose;
}

declare class MPSCNNNeuronAbsoluteNode extends MPSCNNNeuronNode {
  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSNDArrayDescriptor extends NSObject {
  dataType: interop.Enum<typeof MPSDataType>;

  numberOfDimensions: number;

  preferPackedRows: boolean;

  lengthOfDimension(dimensionIndex: number): number;

  sliceRangeForDimension(dimensionIndex: number): MPSDimensionSlice;

  sliceDimensionWithSubrange(dimensionIndex: number, subRange: MPSDimensionSlice): void;

  transposeDimensionWithDimension(dimensionIndex: number, dimensionIndex2: number): void;

  permuteWithDimensionOrder(dimensionOrder: interop.PointerConvertible): void;

  dimensionOrder(): unknown /* ext vector */;

  getShape(): NSArray;

  static descriptorWithDataTypeDimensionCountDimensionSizes<This extends abstract new (...args: any) => any>(this: This, dataType: interop.Enum<typeof MPSDataType>, numberOfDimensions: number, dimensionSizes: interop.PointerConvertible): InstanceType<This>;

  static descriptorWithDataTypeShape<This extends abstract new (...args: any) => any>(this: This, dataType: interop.Enum<typeof MPSDataType>, shape: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static descriptorWithDataTypeDimensionSizes<This extends abstract new (...args: any) => any>(this: This, dataType: interop.Enum<typeof MPSDataType>, dimension0: number): InstanceType<This>;

  reshapeWithDimensionCountDimensionSizes(numberOfDimensions: number, dimensionSizes: interop.PointerConvertible): void;

  reshapeWithShape(shape: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class MPSNDArrayStridedSliceGradient extends MPSNDArrayUnaryGradientKernel {
}

declare class MPSNNArithmeticGradientStateNode extends MPSNNBinaryGradientStateNode {
}

declare class MPSCNNNeuronReLUNNode extends MPSCNNNeuronNode {
  static nodeWithSourceAB<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, a: number, b: number): InstanceType<This>;

  initWithSourceAB(sourceNode: MPSNNImageNode, a: number, b: number): this;

  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode): InstanceType<This>;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSMatrixRandom extends MPSKernel {
  readonly destinationDataType: interop.Enum<typeof MPSDataType>;

  readonly distributionType: interop.Enum<typeof MPSMatrixRandomDistribution>;

  batchStart: number;

  batchSize: number;

  encodeToCommandBufferDestinationVector(commandBuffer: MTLCommandBuffer, destinationVector: MPSVector): void;

  encodeToCommandBufferDestinationMatrix(commandBuffer: MTLCommandBuffer, destinationMatrix: MPSMatrix): void;
}

declare class MPSMatrixFindTopK extends MPSMatrixUnaryKernel {
  sourceRows: number;

  sourceColumns: number;

  indexOffset: number;

  numberOfTopKValues: number;

  initWithDeviceNumberOfTopKValues(device: MTLDevice, numberOfTopKValues: number): this;

  encodeToCommandBufferInputMatrixResultIndexMatrixResultValueMatrix(commandBuffer: MTLCommandBuffer, inputMatrix: MPSMatrix, resultIndexMatrix: MPSMatrix, resultValueMatrix: MPSMatrix): void;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;
}

declare class MPSCNNLocalContrastNormalizationNode extends MPSCNNNormalizationNode {
  pm: number;

  ps: number;

  p0: number;

  kernelWidth: number;

  kernelHeight: number;

  static nodeWithSourceKernelSize<This extends abstract new (...args: any) => any>(this: This, sourceNode: MPSNNImageNode, kernelSize: number): InstanceType<This>;

  initWithSourceKernelSize(sourceNode: MPSNNImageNode, kernelSize: number): this;

  initWithSource(sourceNode: MPSNNImageNode): this;
}

declare class MPSNNOptimizerAdam extends MPSNNOptimizer {
  readonly beta1: number;

  readonly beta2: number;

  readonly epsilon: number;

  timeStep: number;

  initWithDeviceLearningRate(device: MTLDevice, learningRate: number): this;

  initWithDeviceBeta1Beta2EpsilonTimeStepOptimizerDescriptor(device: MTLDevice, beta1: number, beta2: number, epsilon: number, timeStep: number, optimizerDescriptor: MPSNNOptimizerDescriptor): this;

  encodeToCommandBufferInputGradientVectorInputValuesVectorInputMomentumVectorInputVelocityVectorResultValuesVector(commandBuffer: MTLCommandBuffer, inputGradientVector: MPSVector, inputValuesVector: MPSVector, inputMomentumVector: MPSVector, inputVelocityVector: MPSVector, resultValuesVector: MPSVector): void;

  encodeToCommandBufferInputGradientMatrixInputValuesMatrixInputMomentumMatrixInputVelocityMatrixResultValuesMatrix(commandBuffer: MTLCommandBuffer, inputGradientMatrix: MPSMatrix, inputValuesMatrix: MPSMatrix, inputMomentumMatrix: MPSMatrix, inputVelocityMatrix: MPSMatrix, resultValuesMatrix: MPSMatrix): void;

  encodeToCommandBufferInputGradientVectorInputValuesVectorInputMomentumVectorInputVelocityVectorMaximumVelocityVectorResultValuesVector(commandBuffer: MTLCommandBuffer, inputGradientVector: MPSVector, inputValuesVector: MPSVector, inputMomentumVector: MPSVector, inputVelocityVector: MPSVector, maximumVelocityVector: MPSVector | null, resultValuesVector: MPSVector): void;

  encodeToCommandBufferInputGradientMatrixInputValuesMatrixInputMomentumMatrixInputVelocityMatrixMaximumVelocityMatrixResultValuesMatrix(commandBuffer: MTLCommandBuffer, inputGradientMatrix: MPSMatrix, inputValuesMatrix: MPSMatrix, inputMomentumMatrix: MPSMatrix, inputVelocityMatrix: MPSMatrix, maximumVelocityMatrix: MPSMatrix | null, resultValuesMatrix: MPSMatrix): void;

  encodeToCommandBufferConvolutionGradientStateConvolutionSourceStateInputMomentumVectorsInputVelocityVectorsResultState(commandBuffer: MTLCommandBuffer, convolutionGradientState: MPSCNNConvolutionGradientState, convolutionSourceState: MPSCNNConvolutionWeightsAndBiasesState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object> | null, inputVelocityVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNConvolutionWeightsAndBiasesState): void;

  encodeToCommandBufferConvolutionGradientStateConvolutionSourceStateInputMomentumVectorsInputVelocityVectorsMaximumVelocityVectorsResultState(commandBuffer: MTLCommandBuffer, convolutionGradientState: MPSCNNConvolutionGradientState, convolutionSourceState: MPSCNNConvolutionWeightsAndBiasesState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object>, inputVelocityVectors: NSArray<interop.Object> | Array<interop.Object>, maximumVelocityVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNConvolutionWeightsAndBiasesState): void;

  encodeToCommandBufferBatchNormalizationStateInputMomentumVectorsInputVelocityVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationState: MPSCNNBatchNormalizationState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object> | null, inputVelocityVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;

  encodeToCommandBufferBatchNormalizationStateInputMomentumVectorsInputVelocityVectorsMaximumVelocityVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationState: MPSCNNBatchNormalizationState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object>, inputVelocityVectors: NSArray<interop.Object> | Array<interop.Object>, maximumVelocityVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;

  encodeToCommandBufferBatchNormalizationGradientStateBatchNormalizationSourceStateInputMomentumVectorsInputVelocityVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationGradientState: MPSCNNBatchNormalizationState, batchNormalizationSourceState: MPSCNNBatchNormalizationState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object> | null, inputVelocityVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;

  encodeToCommandBufferBatchNormalizationGradientStateBatchNormalizationSourceStateInputMomentumVectorsInputVelocityVectorsMaximumVelocityVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationGradientState: MPSCNNBatchNormalizationState, batchNormalizationSourceState: MPSCNNBatchNormalizationState, inputMomentumVectors: NSArray<interop.Object> | Array<interop.Object>, inputVelocityVectors: NSArray<interop.Object> | Array<interop.Object>, maximumVelocityVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;
}

declare class MPSCNNPoolingMaxNode extends MPSCNNPoolingNode {
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSCNNConvolution extends MPSCNNKernel {
  readonly inputFeatureChannels: number;

  readonly outputFeatureChannels: number;

  readonly groups: number;

  readonly dataSource: MPSCNNConvolutionDataSource;

  readonly subPixelScaleFactor: number;

  readonly neuron: MPSCNNNeuron;

  readonly neuronType: interop.Enum<typeof MPSCNNNeuronType>;

  readonly neuronParameterA: number;

  readonly neuronParameterB: number;

  readonly neuronParameterC: number;

  readonly fusedNeuronDescriptor: MPSNNNeuronDescriptor | null;

  readonly channelMultiplier: number;

  accumulatorPrecisionOption: interop.Enum<typeof MPSNNConvolutionAccumulatorPrecisionOption>;

  initWithDeviceWeights(device: MTLDevice, weights: MPSCNNConvolutionDataSource): this;

  initWithDeviceConvolutionDescriptorKernelWeightsBiasTermsFlags(device: MTLDevice, convolutionDescriptor: MPSCNNConvolutionDescriptor, kernelWeights: interop.PointerConvertible, biasTerms: interop.PointerConvertible, flags: interop.Enum<typeof MPSCNNConvolutionFlags>): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  // @ts-ignore MemberDecl.tsIgnore
  resultStateForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNConvolutionGradientState | null;

  resultStateBatchForSourceImageSourceStatesDestinationImage(sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  // @ts-ignore MemberDecl.tsIgnore
  temporaryResultStateForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNConvolutionGradientState | null;

  temporaryResultStateBatchForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;

  reloadWeightsAndBiasesFromDataSource(): void;

  reloadWeightsAndBiasesWithDataSource(dataSource: MPSCNNConvolutionDataSource): void;

  reloadWeightsAndBiasesWithCommandBufferState(commandBuffer: MTLCommandBuffer, state: MPSCNNConvolutionWeightsAndBiasesState): void;

  exportWeightsAndBiasesWithCommandBufferResultStateCanBeTemporary(commandBuffer: MTLCommandBuffer, resultStateCanBeTemporary: boolean): MPSCNNConvolutionWeightsAndBiasesState;
}

declare class MPSCNNNeuron extends MPSCNNKernel {
  readonly neuronType: interop.Enum<typeof MPSCNNNeuronType>;

  readonly a: number;

  readonly b: number;

  readonly c: number;

  readonly data: NSData;

  initWithDeviceNeuronDescriptor(device: MTLDevice, neuronDescriptor: MPSNNNeuronDescriptor): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNOptimizerRMSProp extends MPSNNOptimizer {
  readonly decay: number;

  readonly epsilon: number;

  initWithDeviceLearningRate(device: MTLDevice, learningRate: number): this;

  initWithDeviceDecayEpsilonOptimizerDescriptor(device: MTLDevice, decay: number, epsilon: number, optimizerDescriptor: MPSNNOptimizerDescriptor): this;

  encodeToCommandBufferInputGradientVectorInputValuesVectorInputSumOfSquaresVectorResultValuesVector(commandBuffer: MTLCommandBuffer, inputGradientVector: MPSVector, inputValuesVector: MPSVector, inputSumOfSquaresVector: MPSVector, resultValuesVector: MPSVector): void;

  encodeToCommandBufferInputGradientMatrixInputValuesMatrixInputSumOfSquaresMatrixResultValuesMatrix(commandBuffer: MTLCommandBuffer, inputGradientMatrix: MPSMatrix, inputValuesMatrix: MPSMatrix, inputSumOfSquaresMatrix: MPSMatrix, resultValuesMatrix: MPSMatrix): void;

  encodeToCommandBufferConvolutionGradientStateConvolutionSourceStateInputSumOfSquaresVectorsResultState(commandBuffer: MTLCommandBuffer, convolutionGradientState: MPSCNNConvolutionGradientState, convolutionSourceState: MPSCNNConvolutionWeightsAndBiasesState, inputSumOfSquaresVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNConvolutionWeightsAndBiasesState): void;

  encodeToCommandBufferBatchNormalizationStateInputSumOfSquaresVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationState: MPSCNNBatchNormalizationState, inputSumOfSquaresVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;

  encodeToCommandBufferBatchNormalizationGradientStateBatchNormalizationSourceStateInputSumOfSquaresVectorsResultState(commandBuffer: MTLCommandBuffer, batchNormalizationGradientState: MPSCNNBatchNormalizationState, batchNormalizationSourceState: MPSCNNBatchNormalizationState, inputSumOfSquaresVectors: NSArray<interop.Object> | Array<interop.Object> | null, resultState: MPSCNNNormalizationGammaAndBetaState): void;
}

declare class MPSNNGramMatrixCalculationGradient extends MPSCNNGradientKernel {
  alpha: number;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  initWithDeviceAlpha(device: MTLDevice, alpha: number): this;

  initWithDevice(device: MTLDevice): this;
}

declare class MPSImageThresholdBinaryInverse extends MPSUnaryImageKernel {
  initWithDeviceThresholdValueMaximumValueLinearGrayColorTransform(device: MTLDevice, thresholdValue: number, maximumValue: number, transform: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly thresholdValue: number;

  readonly maximumValue: number;

  readonly transform: interop.Pointer;
}

declare class MPSCNNArithmetic extends MPSCNNBinaryKernel {
  primaryScale: number;

  secondaryScale: number;

  bias: number;

  primaryStrideInFeatureChannels: number;

  secondaryStrideInFeatureChannels: number;

  minimumValue: number;

  maximumValue: number;

  encodeToCommandBufferPrimaryImageSecondaryImageDestinationStateDestinationImage(commandBuffer: MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage, destinationState: MPSCNNArithmeticGradientState, destinationImage: MPSImage): void;

  encodeBatchToCommandBufferPrimaryImagesSecondaryImagesDestinationStatesDestinationImages(commandBuffer: MTLCommandBuffer, primaryImages: NSArray<interop.Object> | Array<interop.Object>, secondaryImages: NSArray<interop.Object> | Array<interop.Object>, destinationStates: NSArray<interop.Object> | Array<interop.Object>, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class MPSImageLaplacianPyramid extends MPSImagePyramid {
  getLaplacianBias: number;

  getLaplacianScale: number;
}

declare class MPSNDArrayLUTQuantizationDescriptor extends MPSNDArrayQuantizationDescriptor {
  initWithDataType(quantizationDataType: interop.Enum<typeof MPSDataType>): this;

  initWithDataTypeVectorAxis(quantizationDataType: interop.Enum<typeof MPSDataType>, vectorAxis: number): this;
}

declare class MPSNNReduceFeatureChannelsMax extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNNGraph extends MPSKernel implements NSCopying, NSSecureCoding {
  initWithDeviceResultImageResultImageIsNeeded(device: MTLDevice, resultImage: MPSNNImageNode, resultIsNeeded: boolean): this;

  static graphWithDeviceResultImageResultImageIsNeeded<This extends abstract new (...args: any) => any>(this: This, device: MTLDevice, resultImage: MPSNNImageNode, resultIsNeeded: boolean): InstanceType<This>;

  initWithDeviceResultImagesResultsAreNeeded(device: MTLDevice, resultImages: NSArray<interop.Object> | Array<interop.Object>, areResultsNeeded: interop.PointerConvertible): this;

  static graphWithDeviceResultImagesResultsAreNeeded<This extends abstract new (...args: any) => any>(this: This, device: MTLDevice, resultImages: NSArray<interop.Object> | Array<interop.Object>, areResultsNeeded: interop.PointerConvertible): InstanceType<This>;

  initWithDeviceResultImage(device: MTLDevice, resultImage: MPSNNImageNode): this;

  static graphWithDeviceResultImage<This extends abstract new (...args: any) => any>(this: This, device: MTLDevice, resultImage: MPSNNImageNode): InstanceType<This>;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly sourceImageHandles: NSArray;

  readonly sourceStateHandles: NSArray;

  readonly intermediateImageHandles: NSArray;

  readonly resultStateHandles: NSArray;

  readonly resultHandle: MPSHandle;

  outputStateIsTemporary: boolean;

  destinationImageAllocator: MPSImageAllocator;

  format: interop.Enum<typeof MPSImageFeatureChannelFormat>;

  readonly resultImageIsNeeded: boolean;

  reloadFromDataSources(): void;

  encodeToCommandBufferSourceImagesSourceStatesIntermediateImagesDestinationStates(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, intermediateImages: NSMutableArray | null, destinationStates: NSMutableArray | null): MPSImage | null;

  encodeBatchToCommandBufferSourceImagesSourceStatesIntermediateImagesDestinationStates(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, intermediateImages: NSMutableArray | null, destinationStates: NSMutableArray | null): NSArray | null;

  encodeToCommandBufferSourceImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>): MPSImage | null;

  encodeBatchToCommandBufferSourceImagesSourceStates(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null): NSArray | null;

  executeAsyncWithSourceImagesCompletionHandler(sourceImages: NSArray<interop.Object> | Array<interop.Object>, handler: (p1: MPSImage, p2: NSError) => void): MPSImage;

  readCountForSourceImageAtIndex(index: number): number;

  readCountForSourceStateAtIndex(index: number): number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSCNNDropout extends MPSCNNKernel {
  readonly keepProbability: number;

  readonly seed: number;

  readonly maskStrideInPixels: MTLSize;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  initWithDeviceKeepProbabilitySeedMaskStrideInPixels(device: MTLDevice, keepProbability: number, seed: number, maskStrideInPixels: MTLSize): this;

  // @ts-ignore MemberDecl.tsIgnore
  resultStateForSourceImageSourceStatesDestinationImage(sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNDropoutGradientState | null;

  // @ts-ignore MemberDecl.tsIgnore
  resultStateBatchForSourceImageSourceStatesDestinationImage(sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): MPSCNNDropoutGradientState | null;

  // @ts-ignore MemberDecl.tsIgnore
  temporaryResultStateForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: MPSImage, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: MPSImage): MPSCNNDropoutGradientState | null;

  temporaryResultStateBatchForCommandBufferSourceImageSourceStatesDestinationImage(commandBuffer: MTLCommandBuffer, sourceImage: NSArray<interop.Object> | Array<interop.Object>, sourceStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImage: NSArray<interop.Object> | Array<interop.Object>): NSArray | null;
}

declare class MPSMatrixVectorMultiplication extends MPSMatrixBinaryKernel {
  initWithDeviceTransposeRowsColumnsAlphaBeta(device: MTLDevice, transpose: boolean, rows: number, columns: number, alpha: number, beta: number): this;

  initWithDeviceRowsColumns(device: MTLDevice, rows: number, columns: number): this;

  encodeToCommandBufferInputMatrixInputVectorResultVector(commandBuffer: MTLCommandBuffer, inputMatrix: MPSMatrix, inputVector: MPSVector, resultVector: MPSVector): void;
}

declare class MPSNDArrayQuantizationDescriptor extends NSObject implements NSCopying {
  readonly quantizationDataType: interop.Enum<typeof MPSDataType>;

  readonly quantizationScheme: interop.Enum<typeof MPSNDArrayQuantizationScheme>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MPSNNReduceFeatureChannelsArgumentMin extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSMatrix extends NSObject {
  readonly device: MTLDevice;

  readonly rows: number;

  readonly columns: number;

  readonly matrices: number;

  readonly dataType: interop.Enum<typeof MPSDataType>;

  readonly rowBytes: number;

  readonly matrixBytes: number;

  readonly offset: number;

  readonly data: MTLBuffer;

  initWithBufferDescriptor(buffer: MTLBuffer, descriptor: MPSMatrixDescriptor): this;

  initWithBufferOffsetDescriptor(buffer: MTLBuffer, offset: number, descriptor: MPSMatrixDescriptor): this;

  initWithDeviceDescriptor(device: MTLDevice, descriptor: MPSMatrixDescriptor): this;

  synchronizeOnCommandBuffer(commandBuffer: MTLCommandBuffer): void;

  resourceSize(): number;
}

declare class MPSNNFilterNode extends NSObject {
  readonly resultImage: MPSNNImageNode;

  readonly resultState: MPSNNStateNode;

  readonly resultStates: NSArray;

  paddingPolicy: MPSNNPadding;

  label: string;

  gradientFilterWithSource(gradientImage: MPSNNImageNode): MPSNNGradientFilterNode;

  gradientFilterWithSources(gradientImages: NSArray<interop.Object> | Array<interop.Object>): MPSNNGradientFilterNode;

  gradientFiltersWithSources(gradientImages: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  gradientFiltersWithSource(gradientImage: MPSNNImageNode): NSArray;

  trainingGraphWithSourceGradientNodeHandler(gradientImage: MPSNNImageNode | null, nodeHandler: (p1: MPSNNFilterNode, p2: MPSNNFilterNode, p3: MPSNNImageNode, p4: MPSNNImageNode) => void | null): NSArray | null;
}

declare class MPSImageBilinearScale extends MPSImageScale {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MPSNDArrayMultiaryGradientKernel extends MPSNDArrayMultiaryBase {
  // @ts-ignore MemberDecl.tsIgnore
  initWithCoderDevice(coder: NSCoder, device: MTLDevice): this;

  initWithDeviceSourceCountSourceGradientIndex(device: MTLDevice, count: number, sourceGradientIndex: number): this;

  encodeToCommandBufferSourceArraysSourceGradientGradientState(cmdBuf: MTLCommandBuffer, sources: NSArray<interop.Object> | Array<interop.Object>, gradient: MPSNDArray, state: MPSState): MPSNDArray;

  encodeToCommandBufferSourceArraysSourceGradientGradientStateDestinationArray(cmdBuf: MTLCommandBuffer, sources: NSArray<interop.Object> | Array<interop.Object>, gradient: MPSNDArray, state: MPSState, destination: MPSNDArray): void;
}

declare class MPSNNReduceFeatureChannelsAndWeightsMean extends MPSNNReduceBinary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReduceColumnMean extends MPSNNReduceUnary {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNImageNode extends NSObject {
  initWithHandle(handle: NSObject | null): this;

  static nodeWithHandle<This extends abstract new (...args: any) => any>(this: This, handle: NSObject | null): InstanceType<This>;

  static exportedNodeWithHandle<This extends abstract new (...args: any) => any>(this: This, handle: NSObject | null): InstanceType<This>;

  handle: MPSHandle;

  format: interop.Enum<typeof MPSImageFeatureChannelFormat>;

  imageAllocator: MPSImageAllocator;

  exportFromGraph: boolean;

  synchronizeResource: boolean;

  stopGradient: boolean;
}

declare class MPSMatrixDecompositionLU extends MPSMatrixUnaryKernel {
  initWithDeviceRowsColumns(device: MTLDevice, rows: number, columns: number): this;

  encodeToCommandBufferSourceMatrixResultMatrixPivotIndicesStatus(commandBuffer: MTLCommandBuffer, sourceMatrix: MPSMatrix, resultMatrix: MPSMatrix, pivotIndices: MPSMatrix, status: MTLBuffer | null): void;
}

declare class MPSVectorDescriptor extends NSObject {
  length: number;

  readonly vectors: number;

  dataType: interop.Enum<typeof MPSDataType>;

  readonly vectorBytes: number;

  static vectorDescriptorWithLengthDataType<This extends abstract new (...args: any) => any>(this: This, length: number, dataType: interop.Enum<typeof MPSDataType>): InstanceType<This>;

  static vectorDescriptorWithLengthVectorsVectorBytesDataType<This extends abstract new (...args: any) => any>(this: This, length: number, vectors: number, vectorBytes: number, dataType: interop.Enum<typeof MPSDataType>): InstanceType<This>;

  static vectorBytesForLengthDataType(length: number, dataType: interop.Enum<typeof MPSDataType>): number;
}

declare class MPSMatrixDecompositionCholesky extends MPSMatrixUnaryKernel {
  initWithDeviceLowerOrder(device: MTLDevice, lower: boolean, order: number): this;

  encodeToCommandBufferSourceMatrixResultMatrixStatus(commandBuffer: MTLCommandBuffer, sourceMatrix: MPSMatrix, resultMatrix: MPSMatrix, status: MTLBuffer | null): void;
}

declare class MPSImageNormalizedHistogram extends MPSKernel {
  clipRectSource: MTLRegion;

  zeroHistogram: boolean;

  readonly histogramInfo: MPSImageHistogramInfo;

  initWithDeviceHistogramInfo(device: MTLDevice, histogramInfo: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeToCommandBufferSourceTextureMinmaxTextureHistogramHistogramOffset(commandBuffer: MTLCommandBuffer, source: MTLTexture, minmaxTexture: MTLTexture, histogram: MTLBuffer, histogramOffset: number): void;

  histogramSizeForSourceFormat(sourceFormat: interop.Enum<typeof MTLPixelFormat>): number;
}

declare class MPSCNNLogSoftMaxGradientNode extends MPSNNGradientFilterNode {
  static nodeWithSourceGradientSourceImageGradientState<This extends abstract new (...args: any) => any>(this: This, sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): InstanceType<This>;

  initWithSourceGradientSourceImageGradientState(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode): this;
}

declare class MPSTriangleAccelerationStructure extends MPSPolygonAccelerationStructure {
  triangleCount: number;
}

declare class MPSImageThresholdBinary extends MPSUnaryImageKernel {
  initWithDeviceThresholdValueMaximumValueLinearGrayColorTransform(device: MTLDevice, thresholdValue: number, maximumValue: number, transform: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  readonly thresholdValue: number;

  readonly maximumValue: number;

  readonly transform: interop.Pointer;
}

declare class MPSCNNGroupNormalizationGradient extends MPSCNNGradientKernel {
}

declare class MPSNNInitialGradientNode extends MPSNNFilterNode {
  static nodeWithSource<This extends abstract new (...args: any) => any>(this: This, source: MPSNNImageNode): InstanceType<This>;

  initWithSource(source: MPSNNImageNode): this;
}

declare class MPSMatrixMultiplication extends MPSKernel {
  resultMatrixOrigin: MTLOrigin;

  leftMatrixOrigin: MTLOrigin;

  rightMatrixOrigin: MTLOrigin;

  batchStart: number;

  batchSize: number;

  initWithDeviceTransposeLeftTransposeRightResultRowsResultColumnsInteriorColumnsAlphaBeta(device: MTLDevice, transposeLeft: boolean, transposeRight: boolean, resultRows: number, resultColumns: number, interiorColumns: number, alpha: number, beta: number): this;

  initWithDeviceResultRowsResultColumnsInteriorColumns(device: MTLDevice, resultRows: number, resultColumns: number, interiorColumns: number): this;

  encodeToCommandBufferLeftMatrixRightMatrixResultMatrix(commandBuffer: MTLCommandBuffer, leftMatrix: MPSMatrix, rightMatrix: MPSMatrix, resultMatrix: MPSMatrix): void;
}

declare class MPSKernel extends NSObject implements NSCopying, NSSecureCoding {
  options: interop.Enum<typeof MPSKernelOptions>;

  readonly device: MTLDevice;

  label: string;

  initWithDevice(device: MTLDevice): this;

  copyWithZoneDevice(zone: interop.PointerConvertible, device: MTLDevice | null): this;

  initWithCoder(aDecoder: NSCoder): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class MPSCNNPooling extends MPSCNNKernel {
  initWithDeviceKernelWidthKernelHeight(device: MTLDevice, kernelWidth: number, kernelHeight: number): this;

  initWithDeviceKernelWidthKernelHeightStrideInPixelsXStrideInPixelsY(device: MTLDevice, kernelWidth: number, kernelHeight: number, strideInPixelsX: number, strideInPixelsY: number): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNReshapeGradient extends MPSCNNGradientKernel {
  initWithDevice(device: MTLDevice): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNDArrayMatrixMultiplication extends MPSNDArrayMultiaryKernel {
  alpha: number;

  beta: number;
}

declare class MPSQuadrilateralAccelerationStructure extends MPSPolygonAccelerationStructure {
  quadrilateralCount: number;
}

declare class MPSStateResourceList extends NSObject {
  static resourceList<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static resourceListWithTextureDescriptors<This extends abstract new (...args: any) => any>(this: This, d: MTLTextureDescriptor): InstanceType<This>;

  static resourceListWithBufferSizes<This extends abstract new (...args: any) => any>(this: This, firstSize: number): InstanceType<This>;

  init(): this;

  appendTexture(descriptor: MTLTextureDescriptor): void;

  appendBuffer(size: number): void;
}

declare class MPSNNReduceBinary extends MPSCNNBinaryKernel {
  primarySourceClipRect: MTLRegion;

  secondarySourceClipRect: MTLRegion;

  primaryOffset: MPSOffset;

  secondaryOffset: MPSOffset;
}

declare class MPSNNCropAndResizeBilinear extends MPSCNNKernel {
  readonly resizeWidth: number;

  readonly resizeHeight: number;

  readonly numberOfRegions: number;

  readonly regions: interop.Pointer;

  initWithDeviceResizeWidthResizeHeightNumberOfRegionsRegions(device: MTLDevice, resizeWidth: number, resizeHeight: number, numberOfRegions: number, regions: interop.PointerConvertible): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;
}

declare class MPSNNForwardLoss extends MPSCNNKernel {
  readonly lossType: interop.Enum<typeof MPSCNNLossType>;

  readonly reductionType: interop.Enum<typeof MPSCNNReductionType>;

  readonly reduceAcrossBatch: boolean;

  readonly numberOfClasses: number;

  weight: number;

  labelSmoothing: number;

  epsilon: number;

  delta: number;

  initWithDeviceLossDescriptor(device: MTLDevice, lossDescriptor: MPSCNNLossDescriptor): this;

  initWithCoderDevice(aDecoder: NSCoder, device: MTLDevice): this;

  encodeBatchToCommandBufferSourceImagesLabelsWeightsDestinationStatesDestinationImages(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>, weights: NSArray<interop.Object> | Array<interop.Object> | null, destinationStates: NSArray<interop.Object> | Array<interop.Object> | null, destinationImages: NSArray<interop.Object> | Array<interop.Object>): void;

  encodeBatchToCommandBufferSourceImagesLabelsWeightsDestinationStatesDestinationStateIsTemporary(commandBuffer: MTLCommandBuffer, sourceImages: NSArray<interop.Object> | Array<interop.Object>, labels: NSArray<interop.Object> | Array<interop.Object>, weights: NSArray<interop.Object> | Array<interop.Object> | null, outStates: interop.PointerConvertible, isTemporary: boolean): NSArray;
}

declare class MPSNDArray extends NSObject {
  static defaultAllocator(): MPSNDArrayAllocator;

  label: string;

  readonly dataType: interop.Enum<typeof MPSDataType>;

  readonly dataTypeSize: number;

  readonly numberOfDimensions: number;

  lengthOfDimension(dimensionIndex: number): number;

  readonly device: MTLDevice;

  descriptor(): MPSNDArrayDescriptor;

  initWithDeviceDescriptor(device: MTLDevice, descriptor: MPSNDArrayDescriptor): this;

  initWithDeviceScalar(device: MTLDevice, value: number): this;

  initWithBufferOffsetDescriptor(buffer: MTLBuffer, offset: number, descriptor: MPSNDArrayDescriptor): this;

  userBuffer(): MTLBuffer | null;

  resourceSize(): number;

  arrayViewWithCommandBufferDescriptorAliasing(cmdBuf: MTLCommandBuffer, descriptor: MPSNDArrayDescriptor, aliasing: interop.Enum<typeof MPSAliasingStrategy>): MPSNDArray | null;

  arrayViewWithDescriptor(descriptor: MPSNDArrayDescriptor): MPSNDArray | null;

  arrayViewWithShapeStrides(shape: NSArray<interop.Object> | Array<interop.Object> | null, strides: NSArray<interop.Object> | Array<interop.Object>): MPSNDArray | null;

  arrayViewWithDimensionCountDimensionSizesStrides(numberOfDimensions: number, dimensionSizes: interop.PointerConvertible, dimStrides: interop.PointerConvertible): MPSNDArray | null;

  readonly parent: MPSNDArray;

  exportDataWithCommandBufferToBufferDestinationDataTypeOffsetRowStrides(cmdBuf: MTLCommandBuffer, buffer: MTLBuffer, destinationDataType: interop.Enum<typeof MPSDataType>, offset: number, rowStrides: interop.PointerConvertible): void;

  importDataWithCommandBufferFromBufferSourceDataTypeOffsetRowStrides(cmdBuf: MTLCommandBuffer, buffer: MTLBuffer, sourceDataType: interop.Enum<typeof MPSDataType>, offset: number, rowStrides: interop.PointerConvertible): void;

  exportDataWithCommandBufferToImagesOffset(cmdBuf: MTLCommandBuffer, images: NSArray<interop.Object> | Array<interop.Object>, offset: MPSImageCoordinate): void;

  importDataWithCommandBufferFromImagesOffset(cmdBuf: MTLCommandBuffer, images: NSArray<interop.Object> | Array<interop.Object>, offset: MPSImageCoordinate): void;

  readBytesStrideBytes(buffer: interop.PointerConvertible, strideBytesPerDimension: interop.PointerConvertible): void;

  writeBytesStrideBytes(buffer: interop.PointerConvertible, strideBytesPerDimension: interop.PointerConvertible): void;

  synchronizeOnCommandBuffer(commandBuffer: MTLCommandBuffer): void;
}

