/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const MLCGradientClippingType: {
  Value: 0,
  Norm: 1,
  GlobalNorm: 2,
};

declare const MLCReductionType: {
  None: 0,
  Sum: 1,
  Mean: 2,
  Max: 3,
  Min: 4,
  ArgMax: 5,
  ArgMin: 6,
  L1Norm: 7,
  Any: 8,
  All: 9,
  Count: 10,
};

declare const MLCPaddingType: {
  Zero: 0,
  Reflect: 1,
  Symmetric: 2,
  Constant: 3,
};

declare const MLCPaddingPolicy: {
  Same: 0,
  Valid: 1,
  UsePaddingSize: 2,
};

declare const MLCConvolutionType: {
  Standard: 0,
  Transposed: 1,
  Depthwise: 2,
};

declare const MLCActivationType: {
  None: 0,
  ReLU: 1,
  Linear: 2,
  Sigmoid: 3,
  HardSigmoid: 4,
  Tanh: 5,
  Absolute: 6,
  SoftPlus: 7,
  SoftSign: 8,
  ELU: 9,
  ReLUN: 10,
  LogSigmoid: 11,
  SELU: 12,
  CELU: 13,
  HardShrink: 14,
  SoftShrink: 15,
  TanhShrink: 16,
  Threshold: 17,
  GELU: 18,
  HardSwish: 19,
  Clamp: 20,
  Count: 21,
};

declare const MLCArithmeticOperation: {
  Add: 0,
  Subtract: 1,
  Multiply: 2,
  Divide: 3,
  Floor: 4,
  Round: 5,
  Ceil: 6,
  Sqrt: 7,
  Rsqrt: 8,
  Sin: 9,
  Cos: 10,
  Tan: 11,
  Asin: 12,
  Acos: 13,
  Atan: 14,
  Sinh: 15,
  Cosh: 16,
  Tanh: 17,
  Asinh: 18,
  Acosh: 19,
  Atanh: 20,
  Pow: 21,
  Exp: 22,
  Exp2: 23,
  Log: 24,
  Log2: 25,
  MultiplyNoNaN: 26,
  DivideNoNaN: 27,
  Min: 28,
  Max: 29,
  Count: 30,
};

declare const MLCDeviceType: {
  CPU: 0,
  GPU: 1,
  Any: 2,
  ANE: 3,
  Count: 4,
};

declare const MLCComparisonOperation: {
  Equal: 0,
  NotEqual: 1,
  Less: 2,
  Greater: 3,
  LessOrEqual: 4,
  GreaterOrEqual: 5,
  LogicalAND: 6,
  LogicalOR: 7,
  LogicalNOT: 8,
  LogicalNAND: 9,
  LogicalNOR: 10,
  LogicalXOR: 11,
  Count: 12,
};

declare const MLCExecutionOptions: {
  None: 0,
  SkipWritingInputDataToDevice: 1,
  Synchronous: 2,
  Profiling: 4,
  ForwardForInference: 8,
  PerLayerProfiling: 16,
};

declare const MLCRandomInitializerType: {
  Invalid: 0,
  Uniform: 1,
  GlorotUniform: 2,
  Xavier: 3,
  Count: 4,
};

declare const MLCLossType: {
  MeanAbsoluteError: 0,
  MeanSquaredError: 1,
  SoftmaxCrossEntropy: 2,
  SigmoidCrossEntropy: 3,
  CategoricalCrossEntropy: 4,
  Hinge: 5,
  Huber: 6,
  CosineDistance: 7,
  Log: 8,
  Count: 9,
};

declare const MLCRegularizationType: {
  None: 0,
  L1: 1,
  L2: 2,
};

declare const MLCLSTMResultMode: {
  MLCLSTMResultModeOutput: 0,
  AndStates: 1,
};

declare const MLCSoftmaxOperation: {
  MLCSoftmaxOperationSoftmax: 0,
  Log: 1,
};

declare const MLCPoolingType: {
  Max: 1,
  Average: 2,
  L2Norm: 3,
  Count: 4,
};

declare const MLCSampleMode: {
  Nearest: 0,
  Linear: 1,
};

declare const MLCGraphCompilationOptions: {
  None: 0,
  DebugLayers: 1,
  DisableLayerFusion: 2,
  LinkGraphs: 4,
  ComputeAllGradients: 8,
};

declare const MLCDataType: {
  Invalid: 0,
  Float32: 1,
  Float16: 3,
  Boolean: 4,
  Int64: 5,
  Int32: 7,
  Int8: 8,
  UInt8: 9,
  Count: 10,
};

declare function MLCActivationTypeDebugDescription(activationType: interop.Enum<typeof MLCActivationType>): string;

declare function MLCArithmeticOperationDebugDescription(operation: interop.Enum<typeof MLCArithmeticOperation>): string;

declare function MLCPaddingPolicyDebugDescription(paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>): string;

declare function MLCLossTypeDebugDescription(lossType: interop.Enum<typeof MLCLossType>): string;

declare function MLCReductionTypeDebugDescription(reductionType: interop.Enum<typeof MLCReductionType>): string;

declare function MLCPaddingTypeDebugDescription(paddingType: interop.Enum<typeof MLCPaddingType>): string;

declare function MLCConvolutionTypeDebugDescription(convolutionType: interop.Enum<typeof MLCConvolutionType>): string;

declare function MLCPoolingTypeDebugDescription(poolingType: interop.Enum<typeof MLCPoolingType>): string;

declare function MLCSoftmaxOperationDebugDescription(operation: interop.Enum<typeof MLCSoftmaxOperation>): string;

declare function MLCSampleModeDebugDescription(mode: interop.Enum<typeof MLCSampleMode>): string;

declare function MLCLSTMResultModeDebugDescription(mode: interop.Enum<typeof MLCLSTMResultMode>): string;

declare function MLCComparisonOperationDebugDescription(operation: interop.Enum<typeof MLCComparisonOperation>): string;

declare function MLCGradientClippingTypeDebugDescription(gradientClippingType: interop.Enum<typeof MLCGradientClippingType>): string;

declare class MLCAdamOptimizer extends MLCOptimizer implements NSCopying {
  readonly beta1: number;

  readonly beta2: number;

  readonly epsilon: number;

  readonly usesAMSGrad: number;

  readonly timeStep: number;

  static optimizerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor): InstanceType<This>;

  static optimizerWithDescriptorBeta1Beta2EpsilonTimeStep<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor, beta1: number, beta2: number, epsilon: number, timeStep: number): InstanceType<This>;

  static optimizerWithDescriptorBeta1Beta2EpsilonUsesAMSGradTimeStep<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor, beta1: number, beta2: number, epsilon: number, usesAMSGrad: number, timeStep: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCGatherLayer extends MLCLayer {
  readonly dimension: number;

  static layerWithDimension<This extends abstract new (...args: any) => any>(this: This, dimension: number): InstanceType<This>;
}

declare class MLCSelectionLayer extends MLCLayer {
  static layer<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MLCEmbeddingLayer extends MLCLayer {
  readonly descriptor: MLCEmbeddingDescriptor;

  readonly weights: MLCTensor;

  readonly weightsParameter: MLCTensorParameter;

  static layerWithDescriptorWeights<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCEmbeddingDescriptor, weights: MLCTensor): InstanceType<This>;
}

declare class MLCSplitLayer extends MLCLayer {
  readonly dimension: number;

  readonly splitCount: number;

  readonly splitSectionLengths: NSArray;

  static layerWithSplitCountDimension<This extends abstract new (...args: any) => any>(this: This, splitCount: number, dimension: number): InstanceType<This>;

  static layerWithSplitSectionLengthsDimension<This extends abstract new (...args: any) => any>(this: This, splitSectionLengths: NSArray<interop.Object> | Array<interop.Object>, dimension: number): InstanceType<This>;
}

declare class MLCReductionLayer extends MLCLayer {
  readonly reductionType: interop.Enum<typeof MLCReductionType>;

  readonly dimension: number;

  readonly dimensions: NSArray;

  static layerWithReductionTypeDimension<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, dimension: number): InstanceType<This> | null;

  static layerWithReductionTypeDimensions<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, dimensions: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This> | null;
}

declare class MLCLSTMLayer extends MLCLayer {
  readonly descriptor: MLCLSTMDescriptor;

  readonly gateActivations: NSArray;

  readonly outputResultActivation: MLCActivationDescriptor;

  readonly inputWeights: NSArray;

  readonly hiddenWeights: NSArray;

  readonly peepholeWeights: NSArray;

  readonly biases: NSArray;

  readonly inputWeightsParameters: NSArray;

  readonly hiddenWeightsParameters: NSArray;

  readonly peepholeWeightsParameters: NSArray;

  readonly biasesParameters: NSArray;

  static layerWithDescriptorInputWeightsHiddenWeightsBiases<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCLSTMDescriptor, inputWeights: NSArray<interop.Object> | Array<interop.Object>, hiddenWeights: NSArray<interop.Object> | Array<interop.Object>, biases: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This> | null;

  static layerWithDescriptorInputWeightsHiddenWeightsPeepholeWeightsBiases<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCLSTMDescriptor, inputWeights: NSArray<interop.Object> | Array<interop.Object>, hiddenWeights: NSArray<interop.Object> | Array<interop.Object>, peepholeWeights: NSArray<interop.Object> | Array<interop.Object> | null, biases: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This> | null;

  static layerWithDescriptorInputWeightsHiddenWeightsPeepholeWeightsBiasesGateActivationsOutputResultActivation<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCLSTMDescriptor, inputWeights: NSArray<interop.Object> | Array<interop.Object>, hiddenWeights: NSArray<interop.Object> | Array<interop.Object>, peepholeWeights: NSArray<interop.Object> | Array<interop.Object> | null, biases: NSArray<interop.Object> | Array<interop.Object> | null, gateActivations: NSArray<interop.Object> | Array<interop.Object>, outputResultActivation: MLCActivationDescriptor): InstanceType<This> | null;
}

declare class MLCSoftmaxLayer extends MLCLayer {
  readonly operation: interop.Enum<typeof MLCSoftmaxOperation>;

  readonly dimension: number;

  static layerWithOperation<This extends abstract new (...args: any) => any>(this: This, operation: interop.Enum<typeof MLCSoftmaxOperation>): InstanceType<This>;

  static layerWithOperationDimension<This extends abstract new (...args: any) => any>(this: This, operation: interop.Enum<typeof MLCSoftmaxOperation>, dimension: number): InstanceType<This>;
}

declare class MLCLayerNormalizationLayer extends MLCLayer {
  readonly normalizedShape: NSArray;

  readonly beta: MLCTensor;

  readonly gamma: MLCTensor;

  readonly betaParameter: MLCTensorParameter;

  readonly gammaParameter: MLCTensorParameter;

  readonly varianceEpsilon: number;

  static layerWithNormalizedShapeBetaGammaVarianceEpsilon<This extends abstract new (...args: any) => any>(this: This, normalizedShape: NSArray<interop.Object> | Array<interop.Object>, beta: MLCTensor | null, gamma: MLCTensor | null, varianceEpsilon: number): InstanceType<This> | null;
}

declare class MLCInstanceNormalizationLayer extends MLCLayer {
  readonly featureChannelCount: number;

  readonly mean: MLCTensor;

  readonly variance: MLCTensor;

  readonly beta: MLCTensor;

  readonly gamma: MLCTensor;

  readonly betaParameter: MLCTensorParameter;

  readonly gammaParameter: MLCTensorParameter;

  readonly varianceEpsilon: number;

  readonly momentum: number;

  static layerWithFeatureChannelCountBetaGammaVarianceEpsilon<This extends abstract new (...args: any) => any>(this: This, featureChannelCount: number, beta: MLCTensor | null, gamma: MLCTensor | null, varianceEpsilon: number): InstanceType<This> | null;

  static layerWithFeatureChannelCountBetaGammaVarianceEpsilonMomentum<This extends abstract new (...args: any) => any>(this: This, featureChannelCount: number, beta: MLCTensor | null, gamma: MLCTensor | null, varianceEpsilon: number, momentum: number): InstanceType<This> | null;

  static layerWithFeatureChannelCountMeanVarianceBetaGammaVarianceEpsilonMomentum<This extends abstract new (...args: any) => any>(this: This, featureChannelCount: number, mean: MLCTensor, variance: MLCTensor, beta: MLCTensor | null, gamma: MLCTensor | null, varianceEpsilon: number, momentum: number): InstanceType<This> | null;
}

declare class MLCDropoutLayer extends MLCLayer {
  readonly rate: number;

  readonly seed: number;

  static layerWithRateSeed<This extends abstract new (...args: any) => any>(this: This, rate: number, seed: number): InstanceType<This>;
}

declare class MLCFullyConnectedLayer extends MLCLayer {
  readonly descriptor: MLCConvolutionDescriptor;

  readonly weights: MLCTensor;

  readonly biases: MLCTensor;

  readonly weightsParameter: MLCTensorParameter;

  readonly biasesParameter: MLCTensorParameter;

  static layerWithWeightsBiasesDescriptor<This extends abstract new (...args: any) => any>(this: This, weights: MLCTensor, biases: MLCTensor | null, descriptor: MLCConvolutionDescriptor): InstanceType<This> | null;
}

declare class MLCComparisonLayer extends MLCLayer {
  readonly operation: interop.Enum<typeof MLCComparisonOperation>;

  static layerWithOperation<This extends abstract new (...args: any) => any>(this: This, operation: interop.Enum<typeof MLCComparisonOperation>): InstanceType<This>;
}

declare class MLCOptimizerDescriptor extends NSObject implements NSCopying {
  readonly learningRate: number;

  readonly gradientRescale: number;

  readonly appliesGradientClipping: number;

  readonly gradientClipMax: number;

  readonly gradientClipMin: number;

  readonly regularizationScale: number;

  readonly regularizationType: interop.Enum<typeof MLCRegularizationType>;

  readonly gradientClippingType: interop.Enum<typeof MLCGradientClippingType>;

  readonly maximumClippingNorm: number;

  readonly customGlobalNorm: number;

  static descriptorWithLearningRateGradientRescaleRegularizationTypeRegularizationScale<This extends abstract new (...args: any) => any>(this: This, learningRate: number, gradientRescale: number, regularizationType: interop.Enum<typeof MLCRegularizationType>, regularizationScale: number): InstanceType<This>;

  static descriptorWithLearningRateGradientRescaleAppliesGradientClippingGradientClipMaxGradientClipMinRegularizationTypeRegularizationScale<This extends abstract new (...args: any) => any>(this: This, learningRate: number, gradientRescale: number, appliesGradientClipping: number, gradientClipMax: number, gradientClipMin: number, regularizationType: interop.Enum<typeof MLCRegularizationType>, regularizationScale: number): InstanceType<This>;

  static descriptorWithLearningRateGradientRescaleAppliesGradientClippingGradientClippingTypeGradientClipMaxGradientClipMinMaximumClippingNormCustomGlobalNormRegularizationTypeRegularizationScale<This extends abstract new (...args: any) => any>(this: This, learningRate: number, gradientRescale: number, appliesGradientClipping: number, gradientClippingType: interop.Enum<typeof MLCGradientClippingType>, gradientClipMax: number, gradientClipMin: number, maximumClippingNorm: number, customGlobalNorm: number, regularizationType: interop.Enum<typeof MLCRegularizationType>, regularizationScale: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCTensorDescriptor extends NSObject implements NSCopying {
  readonly dataType: interop.Enum<typeof MLCDataType>;

  readonly dimensionCount: number;

  readonly shape: NSArray;

  readonly stride: NSArray;

  readonly tensorAllocationSizeInBytes: number;

  readonly sequenceLengths: NSArray;

  readonly sortedSequences: number;

  readonly batchSizePerSequenceStep: NSArray;

  static readonly maxTensorDimensions: number;

  static descriptorWithShapeDataType<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This> | null;

  static descriptorWithShapeSequenceLengthsSortedSequencesDataType<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, sequenceLengths: NSArray<interop.Object> | Array<interop.Object>, sortedSequences: number, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This> | null;

  static descriptorWithWidthHeightFeatureChannelCountBatchSize<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, featureChannels: number, batchSize: number): InstanceType<This> | null;

  static descriptorWithWidthHeightFeatureChannelCountBatchSizeDataType<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, featureChannelCount: number, batchSize: number, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This> | null;

  static convolutionWeightsDescriptorWithWidthHeightInputFeatureChannelCountOutputFeatureChannelCountDataType<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, inputFeatureChannelCount: number, outputFeatureChannelCount: number, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This> | null;

  static convolutionWeightsDescriptorWithInputFeatureChannelCountOutputFeatureChannelCountDataType<This extends abstract new (...args: any) => any>(this: This, inputFeatureChannelCount: number, outputFeatureChannelCount: number, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This> | null;

  static convolutionBiasesDescriptorWithFeatureChannelCountDataType<This extends abstract new (...args: any) => any>(this: This, featureChannelCount: number, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This> | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCLSTMDescriptor extends NSObject implements NSCopying {
  readonly inputSize: number;

  readonly hiddenSize: number;

  readonly layerCount: number;

  readonly usesBiases: number;

  readonly batchFirst: number;

  readonly isBidirectional: number;

  readonly returnsSequences: number;

  readonly dropout: number;

  readonly resultMode: interop.Enum<typeof MLCLSTMResultMode>;

  static descriptorWithInputSizeHiddenSizeLayerCount<This extends abstract new (...args: any) => any>(this: This, inputSize: number, hiddenSize: number, layerCount: number): InstanceType<This>;

  static descriptorWithInputSizeHiddenSizeLayerCountUsesBiasesIsBidirectionalDropout<This extends abstract new (...args: any) => any>(this: This, inputSize: number, hiddenSize: number, layerCount: number, usesBiases: number, isBidirectional: number, dropout: number): InstanceType<This>;

  static descriptorWithInputSizeHiddenSizeLayerCountUsesBiasesBatchFirstIsBidirectionalDropout<This extends abstract new (...args: any) => any>(this: This, inputSize: number, hiddenSize: number, layerCount: number, usesBiases: number, batchFirst: number, isBidirectional: number, dropout: number): InstanceType<This>;

  static descriptorWithInputSizeHiddenSizeLayerCountUsesBiasesBatchFirstIsBidirectionalReturnsSequencesDropout<This extends abstract new (...args: any) => any>(this: This, inputSize: number, hiddenSize: number, layerCount: number, usesBiases: number, batchFirst: number, isBidirectional: number, returnsSequences: number, dropout: number): InstanceType<This>;

  static descriptorWithInputSizeHiddenSizeLayerCountUsesBiasesBatchFirstIsBidirectionalReturnsSequencesDropoutResultMode<This extends abstract new (...args: any) => any>(this: This, inputSize: number, hiddenSize: number, layerCount: number, usesBiases: number, batchFirst: number, isBidirectional: number, returnsSequences: number, dropout: number, resultMode: interop.Enum<typeof MLCLSTMResultMode>): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCInferenceGraph extends MLCGraph {
  readonly deviceMemorySize: number;

  static graphWithGraphObjects<This extends abstract new (...args: any) => any>(this: This, graphObjects: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  addInputs(inputs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): number;

  addInputsLossLabelsLossLabelWeights(inputs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, lossLabels: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, lossLabelWeights: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): number;

  addOutputs(outputs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): number;

  compileWithOptionsDevice(options: interop.Enum<typeof MLCGraphCompilationOptions>, device: MLCDevice): number;

  compileWithOptionsDeviceInputTensorsInputTensorsData(options: interop.Enum<typeof MLCGraphCompilationOptions>, device: MLCDevice, inputTensors: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, inputTensorsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): number;

  linkWithGraphs(graphs: NSArray<interop.Object> | Array<interop.Object>): number;

  executeWithInputsDataBatchSizeOptionsCompletionHandler(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeWithInputsDataOutputsDataBatchSizeOptionsCompletionHandler(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, outputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeWithInputsDataLossLabelsDataLossLabelWeightsDataBatchSizeOptionsCompletionHandler(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, lossLabelsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, lossLabelWeightsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeWithInputsDataLossLabelsDataLossLabelWeightsDataOutputsDataBatchSizeOptionsCompletionHandler(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, lossLabelsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, lossLabelWeightsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, outputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;
}

declare class MLCTensor extends NSObject implements NSCopying {
  readonly tensorID: number;

  readonly descriptor: MLCTensorDescriptor;

  readonly data: NSData;

  label: string;

  readonly device: MLCDevice;

  readonly optimizerData: NSArray;

  readonly optimizerDeviceData: NSArray;

  static tensorWithDescriptor<This extends abstract new (...args: any) => any>(this: This, tensorDescriptor: MLCTensorDescriptor): InstanceType<This>;

  static tensorWithDescriptorRandomInitializerType<This extends abstract new (...args: any) => any>(this: This, tensorDescriptor: MLCTensorDescriptor, randomInitializerType: interop.Enum<typeof MLCRandomInitializerType>): InstanceType<This>;

  static tensorWithDescriptorFillWithData<This extends abstract new (...args: any) => any>(this: This, tensorDescriptor: MLCTensorDescriptor, fillData: NSNumber): InstanceType<This>;

  static tensorWithDescriptorData<This extends abstract new (...args: any) => any>(this: This, tensorDescriptor: MLCTensorDescriptor, data: MLCTensorData): InstanceType<This>;

  static tensorWithShape<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static tensorWithShapeRandomInitializerType<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, randomInitializerType: interop.Enum<typeof MLCRandomInitializerType>): InstanceType<This>;

  static tensorWithShapeRandomInitializerTypeDataType<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, randomInitializerType: interop.Enum<typeof MLCRandomInitializerType>, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This>;

  static tensorWithShapeDataType<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This>;

  static tensorWithShapeDataDataType<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, data: MLCTensorData, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This>;

  static tensorWithShapeFillWithDataDataType<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, fillData: NSNumber, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This>;

  static tensorWithWidthHeightFeatureChannelCountBatchSize<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, featureChannelCount: number, batchSize: number): InstanceType<This>;

  static tensorWithWidthHeightFeatureChannelCountBatchSizeFillWithDataDataType<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, featureChannelCount: number, batchSize: number, fillData: number, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This>;

  static tensorWithWidthHeightFeatureChannelCountBatchSizeRandomInitializerType<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, featureChannelCount: number, batchSize: number, randomInitializerType: interop.Enum<typeof MLCRandomInitializerType>): InstanceType<This>;

  static tensorWithWidthHeightFeatureChannelCountBatchSizeData<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, featureChannelCount: number, batchSize: number, data: MLCTensorData): InstanceType<This>;

  static tensorWithWidthHeightFeatureChannelCountBatchSizeDataDataType<This extends abstract new (...args: any) => any>(this: This, width: number, height: number, featureChannelCount: number, batchSize: number, data: MLCTensorData, dataType: interop.Enum<typeof MLCDataType>): InstanceType<This>;

  static tensorWithSequenceLengthFeatureChannelCountBatchSize<This extends abstract new (...args: any) => any>(this: This, sequenceLength: number, featureChannelCount: number, batchSize: number): InstanceType<This>;

  static tensorWithSequenceLengthFeatureChannelCountBatchSizeRandomInitializerType<This extends abstract new (...args: any) => any>(this: This, sequenceLength: number, featureChannelCount: number, batchSize: number, randomInitializerType: interop.Enum<typeof MLCRandomInitializerType>): InstanceType<This>;

  static tensorWithSequenceLengthFeatureChannelCountBatchSizeData<This extends abstract new (...args: any) => any>(this: This, sequenceLength: number, featureChannelCount: number, batchSize: number, data: MLCTensorData | null): InstanceType<This>;

  static tensorWithSequenceLengthsSortedSequencesFeatureChannelCountBatchSizeRandomInitializerType<This extends abstract new (...args: any) => any>(this: This, sequenceLengths: NSArray<interop.Object> | Array<interop.Object>, sortedSequences: number, featureChannelCount: number, batchSize: number, randomInitializerType: interop.Enum<typeof MLCRandomInitializerType>): InstanceType<This> | null;

  static tensorWithSequenceLengthsSortedSequencesFeatureChannelCountBatchSizeData<This extends abstract new (...args: any) => any>(this: This, sequenceLengths: NSArray<interop.Object> | Array<interop.Object>, sortedSequences: number, featureChannelCount: number, batchSize: number, data: MLCTensorData | null): InstanceType<This> | null;

  readonly hasValidNumerics: number;

  synchronizeData(): number;

  synchronizeOptimizerData(): number;

  copyDataFromDeviceMemoryToBytesLengthSynchronizeWithDevice(bytes: interop.PointerConvertible, length: number, synchronizeWithDevice: number): number;

  bindAndWriteDataToDevice(data: MLCTensorData, device: MLCDevice): number;

  bindOptimizerDataDeviceData(data: NSArray<interop.Object> | Array<interop.Object>, deviceData: NSArray<interop.Object> | Array<interop.Object> | null): number;

  tensorByQuantizingToTypeScaleBias(type: interop.Enum<typeof MLCDataType>, scale: number, bias: number): MLCTensor | null;

  tensorByQuantizingToTypeScaleBiasAxis(type: interop.Enum<typeof MLCDataType>, scale: MLCTensor, bias: MLCTensor, axis: number): MLCTensor | null;

  tensorByDequantizingToTypeScaleBias(type: interop.Enum<typeof MLCDataType>, scale: MLCTensor, bias: MLCTensor): MLCTensor | null;

  tensorByDequantizingToTypeScaleBiasAxis(type: interop.Enum<typeof MLCDataType>, scale: MLCTensor, bias: MLCTensor, axis: number): MLCTensor | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCDevice extends NSObject implements NSCopying {
  readonly type: interop.Enum<typeof MLCDeviceType>;

  readonly actualDeviceType: interop.Enum<typeof MLCDeviceType>;

  readonly gpuDevices: NSArray;

  static cpuDevice<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static gpuDevice<This extends abstract new (...args: any) => any>(this: This): InstanceType<This> | null;

  static aneDevice<This extends abstract new (...args: any) => any>(this: This): InstanceType<This> | null;

  static deviceWithType<This extends abstract new (...args: any) => any>(this: This, type: interop.Enum<typeof MLCDeviceType>): InstanceType<This> | null;

  static deviceWithTypeSelectsMultipleComputeDevices<This extends abstract new (...args: any) => any>(this: This, type: interop.Enum<typeof MLCDeviceType>, selectsMultipleComputeDevices: number): InstanceType<This> | null;

  static deviceWithGPUDevices<This extends abstract new (...args: any) => any>(this: This, gpus: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This> | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCYOLOLossDescriptor extends NSObject implements NSCopying {
  readonly anchorBoxCount: number;

  readonly anchorBoxes: NSData;

  shouldRescore: number;

  scaleSpatialPositionLoss: number;

  scaleSpatialSizeLoss: number;

  scaleNoObjectConfidenceLoss: number;

  scaleObjectConfidenceLoss: number;

  scaleClassLoss: number;

  minimumIOUForObjectPresence: number;

  maximumIOUForObjectAbsence: number;

  static descriptorWithAnchorBoxesAnchorBoxCount<This extends abstract new (...args: any) => any>(this: This, anchorBoxes: NSData, anchorBoxCount: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCSGDOptimizer extends MLCOptimizer implements NSCopying {
  readonly momentumScale: number;

  readonly usesNesterovMomentum: number;

  static optimizerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor): InstanceType<This>;

  static optimizerWithDescriptorMomentumScaleUsesNesterovMomentum<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor, momentumScale: number, usesNesterovMomentum: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCSliceLayer extends MLCLayer {
  readonly start: NSArray;

  readonly end: NSArray;

  readonly stride: NSArray;

  static sliceLayerWithStartEndStride<This extends abstract new (...args: any) => any>(this: This, start: NSArray<interop.Object> | Array<interop.Object>, end: NSArray<interop.Object> | Array<interop.Object>, stride: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This> | null;
}

declare class MLCActivationLayer extends MLCLayer {
  readonly descriptor: MLCActivationDescriptor;

  static layerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCActivationDescriptor): InstanceType<This>;

  static readonly reluLayer: MLCActivationLayer;

  static readonly relu6Layer: MLCActivationLayer;

  static readonly leakyReLULayer: MLCActivationLayer;

  static leakyReLULayerWithNegativeSlope<This extends abstract new (...args: any) => any>(this: This, negativeSlope: number): InstanceType<This>;

  static linearLayerWithScaleBias<This extends abstract new (...args: any) => any>(this: This, scale: number, bias: number): InstanceType<This>;

  static readonly sigmoidLayer: MLCActivationLayer;

  static readonly hardSigmoidLayer: MLCActivationLayer;

  static readonly tanhLayer: MLCActivationLayer;

  static readonly absoluteLayer: MLCActivationLayer;

  static readonly softPlusLayer: MLCActivationLayer;

  static softPlusLayerWithBeta<This extends abstract new (...args: any) => any>(this: This, beta: number): InstanceType<This>;

  static readonly softSignLayer: MLCActivationLayer;

  static readonly eluLayer: MLCActivationLayer;

  static eluLayerWithA<This extends abstract new (...args: any) => any>(this: This, a: number): InstanceType<This>;

  static relunLayerWithAB<This extends abstract new (...args: any) => any>(this: This, a: number, b: number): InstanceType<This>;

  static readonly logSigmoidLayer: MLCActivationLayer;

  static readonly seluLayer: MLCActivationLayer;

  static readonly celuLayer: MLCActivationLayer;

  static celuLayerWithA<This extends abstract new (...args: any) => any>(this: This, a: number): InstanceType<This>;

  static readonly hardShrinkLayer: MLCActivationLayer;

  static hardShrinkLayerWithA<This extends abstract new (...args: any) => any>(this: This, a: number): InstanceType<This>;

  static readonly softShrinkLayer: MLCActivationLayer;

  static softShrinkLayerWithA<This extends abstract new (...args: any) => any>(this: This, a: number): InstanceType<This>;

  static readonly tanhShrinkLayer: MLCActivationLayer;

  static thresholdLayerWithThresholdReplacement<This extends abstract new (...args: any) => any>(this: This, threshold: number, replacement: number): InstanceType<This>;

  static readonly geluLayer: MLCActivationLayer;

  static readonly hardSwishLayer: MLCActivationLayer;

  static clampLayerWithMinValueMaxValue<This extends abstract new (...args: any) => any>(this: This, minValue: number, maxValue: number): InstanceType<This>;
}

declare class MLCActivationDescriptor extends NSObject implements NSCopying {
  readonly activationType: interop.Enum<typeof MLCActivationType>;

  readonly a: number;

  readonly b: number;

  readonly c: number;

  static descriptorWithType<This extends abstract new (...args: any) => any>(this: This, activationType: interop.Enum<typeof MLCActivationType>): InstanceType<This> | null;

  static descriptorWithTypeA<This extends abstract new (...args: any) => any>(this: This, activationType: interop.Enum<typeof MLCActivationType>, a: number): InstanceType<This> | null;

  static descriptorWithTypeAB<This extends abstract new (...args: any) => any>(this: This, activationType: interop.Enum<typeof MLCActivationType>, a: number, b: number): InstanceType<This> | null;

  static descriptorWithTypeABC<This extends abstract new (...args: any) => any>(this: This, activationType: interop.Enum<typeof MLCActivationType>, a: number, b: number, c: number): InstanceType<This> | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCTransposeLayer extends MLCLayer {
  readonly dimensions: NSArray;

  static layerWithDimensions<This extends abstract new (...args: any) => any>(this: This, dimensions: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This> | null;
}

declare class MLCMultiheadAttentionDescriptor extends NSObject implements NSCopying {
  readonly modelDimension: number;

  readonly keyDimension: number;

  readonly valueDimension: number;

  readonly headCount: number;

  readonly dropout: number;

  readonly hasBiases: number;

  readonly hasAttentionBiases: number;

  readonly addsZeroAttention: number;

  static descriptorWithModelDimensionKeyDimensionValueDimensionHeadCountDropoutHasBiasesHasAttentionBiasesAddsZeroAttention<This extends abstract new (...args: any) => any>(this: This, modelDimension: number, keyDimension: number, valueDimension: number, headCount: number, dropout: number, hasBiases: number, hasAttentionBiases: number, addsZeroAttention: number): InstanceType<This> | null;

  static descriptorWithModelDimensionHeadCount<This extends abstract new (...args: any) => any>(this: This, modelDimension: number, headCount: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCConcatenationLayer extends MLCLayer {
  readonly dimension: number;

  static layer<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static layerWithDimension<This extends abstract new (...args: any) => any>(this: This, dimension: number): InstanceType<This>;
}

declare class MLCLossDescriptor extends NSObject implements NSCopying {
  readonly lossType: interop.Enum<typeof MLCLossType>;

  readonly reductionType: interop.Enum<typeof MLCReductionType>;

  readonly weight: number;

  readonly labelSmoothing: number;

  readonly classCount: number;

  readonly epsilon: number;

  readonly delta: number;

  static descriptorWithTypeReductionType<This extends abstract new (...args: any) => any>(this: This, lossType: interop.Enum<typeof MLCLossType>, reductionType: interop.Enum<typeof MLCReductionType>): InstanceType<This>;

  static descriptorWithTypeReductionTypeWeight<This extends abstract new (...args: any) => any>(this: This, lossType: interop.Enum<typeof MLCLossType>, reductionType: interop.Enum<typeof MLCReductionType>, weight: number): InstanceType<This>;

  static descriptorWithTypeReductionTypeWeightLabelSmoothingClassCount<This extends abstract new (...args: any) => any>(this: This, lossType: interop.Enum<typeof MLCLossType>, reductionType: interop.Enum<typeof MLCReductionType>, weight: number, labelSmoothing: number, classCount: number): InstanceType<This>;

  static descriptorWithTypeReductionTypeWeightLabelSmoothingClassCountEpsilonDelta<This extends abstract new (...args: any) => any>(this: This, lossType: interop.Enum<typeof MLCLossType>, reductionType: interop.Enum<typeof MLCReductionType>, weight: number, labelSmoothing: number, classCount: number, epsilon: number, delta: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCConvolutionDescriptor extends NSObject implements NSCopying {
  readonly convolutionType: interop.Enum<typeof MLCConvolutionType>;

  readonly kernelWidth: number;

  readonly kernelHeight: number;

  readonly inputFeatureChannelCount: number;

  readonly outputFeatureChannelCount: number;

  readonly strideInX: number;

  readonly strideInY: number;

  readonly dilationRateInX: number;

  readonly dilationRateInY: number;

  readonly groupCount: number;

  readonly paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>;

  readonly paddingSizeInX: number;

  readonly paddingSizeInY: number;

  readonly isConvolutionTranspose: number;

  readonly usesDepthwiseConvolution: number;

  static descriptorWithTypeKernelSizesInputFeatureChannelCountOutputFeatureChannelCountGroupCountStridesDilationRatesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, convolutionType: interop.Enum<typeof MLCConvolutionType>, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, inputFeatureChannelCount: number, outputFeatureChannelCount: number, groupCount: number, strides: NSArray<interop.Object> | Array<interop.Object>, dilationRates: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static descriptorWithKernelWidthKernelHeightInputFeatureChannelCountOutputFeatureChannelCount<This extends abstract new (...args: any) => any>(this: This, kernelWidth: number, kernelHeight: number, inputFeatureChannelCount: number, outputFeatureChannelCount: number): InstanceType<This>;

  static descriptorWithKernelSizesInputFeatureChannelCountOutputFeatureChannelCountStridesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, inputFeatureChannelCount: number, outputFeatureChannelCount: number, strides: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static descriptorWithKernelSizesInputFeatureChannelCountOutputFeatureChannelCountGroupCountStridesDilationRatesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, inputFeatureChannelCount: number, outputFeatureChannelCount: number, groupCount: number, strides: NSArray<interop.Object> | Array<interop.Object>, dilationRates: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static convolutionTransposeDescriptorWithKernelWidthKernelHeightInputFeatureChannelCountOutputFeatureChannelCount<This extends abstract new (...args: any) => any>(this: This, kernelWidth: number, kernelHeight: number, inputFeatureChannelCount: number, outputFeatureChannelCount: number): InstanceType<This>;

  static convolutionTransposeDescriptorWithKernelSizesInputFeatureChannelCountOutputFeatureChannelCountStridesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, inputFeatureChannelCount: number, outputFeatureChannelCount: number, strides: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static convolutionTransposeDescriptorWithKernelSizesInputFeatureChannelCountOutputFeatureChannelCountGroupCountStridesDilationRatesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, inputFeatureChannelCount: number, outputFeatureChannelCount: number, groupCount: number, strides: NSArray<interop.Object> | Array<interop.Object>, dilationRates: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static depthwiseConvolutionDescriptorWithKernelWidthKernelHeightInputFeatureChannelCountChannelMultiplier<This extends abstract new (...args: any) => any>(this: This, kernelWidth: number, kernelHeight: number, inputFeatureChannelCount: number, channelMultiplier: number): InstanceType<This>;

  static depthwiseConvolutionDescriptorWithKernelSizesInputFeatureChannelCountChannelMultiplierStridesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, inputFeatureChannelCount: number, channelMultiplier: number, strides: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static depthwiseConvolutionDescriptorWithKernelSizesInputFeatureChannelCountChannelMultiplierStridesDilationRatesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, inputFeatureChannelCount: number, channelMultiplier: number, strides: NSArray<interop.Object> | Array<interop.Object>, dilationRates: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCEmbeddingDescriptor extends NSObject implements NSCopying {
  readonly embeddingCount: NSNumber;

  readonly embeddingDimension: NSNumber;

  readonly paddingIndex: NSNumber;

  readonly maximumNorm: NSNumber;

  readonly pNorm: NSNumber;

  readonly scalesGradientByFrequency: number;

  static descriptorWithEmbeddingCountEmbeddingDimension<This extends abstract new (...args: any) => any>(this: This, embeddingCount: NSNumber, embeddingDimension: NSNumber): InstanceType<This> | null;

  static descriptorWithEmbeddingCountEmbeddingDimensionPaddingIndexMaximumNormPNormScalesGradientByFrequency<This extends abstract new (...args: any) => any>(this: This, embeddingCount: NSNumber, embeddingDimension: NSNumber, paddingIndex: NSNumber | null, maximumNorm: NSNumber | null, pNorm: NSNumber | null, scalesGradientByFrequency: number): InstanceType<This> | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCPaddingLayer extends MLCLayer implements NSCopying {
  readonly paddingType: interop.Enum<typeof MLCPaddingType>;

  readonly paddingLeft: number;

  readonly paddingRight: number;

  readonly paddingTop: number;

  readonly paddingBottom: number;

  readonly constantValue: number;

  static layerWithReflectionPadding<This extends abstract new (...args: any) => any>(this: This, padding: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static layerWithSymmetricPadding<This extends abstract new (...args: any) => any>(this: This, padding: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static layerWithZeroPadding<This extends abstract new (...args: any) => any>(this: This, padding: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static layerWithConstantPaddingConstantValue<This extends abstract new (...args: any) => any>(this: This, padding: NSArray<interop.Object> | Array<interop.Object>, constantValue: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCPoolingDescriptor extends NSObject implements NSCopying {
  readonly poolingType: interop.Enum<typeof MLCPoolingType>;

  readonly kernelWidth: number;

  readonly kernelHeight: number;

  readonly strideInX: number;

  readonly strideInY: number;

  readonly dilationRateInX: number;

  readonly dilationRateInY: number;

  readonly paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>;

  readonly paddingSizeInX: number;

  readonly paddingSizeInY: number;

  readonly countIncludesPadding: number;

  static poolingDescriptorWithTypeKernelSizeStride<This extends abstract new (...args: any) => any>(this: This, poolingType: interop.Enum<typeof MLCPoolingType>, kernelSize: number, stride: number): InstanceType<This>;

  static maxPoolingDescriptorWithKernelSizesStridesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, strides: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static maxPoolingDescriptorWithKernelSizesStridesDilationRatesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, strides: NSArray<interop.Object> | Array<interop.Object>, dilationRates: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static averagePoolingDescriptorWithKernelSizesStridesPaddingPolicyPaddingSizesCountIncludesPadding<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, strides: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null, countIncludesPadding: number): InstanceType<This>;

  static averagePoolingDescriptorWithKernelSizesStridesDilationRatesPaddingPolicyPaddingSizesCountIncludesPadding<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, strides: NSArray<interop.Object> | Array<interop.Object>, dilationRates: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null, countIncludesPadding: number): InstanceType<This>;

  static l2NormPoolingDescriptorWithKernelSizesStridesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, strides: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static l2NormPoolingDescriptorWithKernelSizesStridesDilationRatesPaddingPolicyPaddingSizes<This extends abstract new (...args: any) => any>(this: This, kernelSizes: NSArray<interop.Object> | Array<interop.Object>, strides: NSArray<interop.Object> | Array<interop.Object>, dilationRates: NSArray<interop.Object> | Array<interop.Object>, paddingPolicy: interop.Enum<typeof MLCPaddingPolicy>, paddingSizes: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCUpsampleLayer extends MLCLayer {
  readonly shape: NSArray;

  readonly sampleMode: interop.Enum<typeof MLCSampleMode>;

  readonly alignsCorners: number;

  static layerWithShape<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This> | null;

  static layerWithShapeSampleModeAlignsCorners<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>, sampleMode: interop.Enum<typeof MLCSampleMode>, alignsCorners: number): InstanceType<This> | null;
}

declare class MLCConvolutionLayer extends MLCLayer {
  readonly descriptor: MLCConvolutionDescriptor;

  readonly weights: MLCTensor;

  readonly biases: MLCTensor;

  readonly weightsParameter: MLCTensorParameter;

  readonly biasesParameter: MLCTensorParameter;

  static layerWithWeightsBiasesDescriptor<This extends abstract new (...args: any) => any>(this: This, weights: MLCTensor, biases: MLCTensor | null, descriptor: MLCConvolutionDescriptor): InstanceType<This> | null;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MLCYOLOLossLayer extends MLCLossLayer {
  readonly yoloLossDescriptor: MLCYOLOLossDescriptor;

  // @ts-ignore MemberDecl.tsIgnore
  static layerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, lossDescriptor: MLCYOLOLossDescriptor): InstanceType<This>;
}

declare class MLCGramMatrixLayer extends MLCLayer {
  readonly scale: number;

  static layerWithScale<This extends abstract new (...args: any) => any>(this: This, scale: number): InstanceType<This>;
}

declare class MLCMultiheadAttentionLayer extends MLCLayer {
  readonly descriptor: MLCMultiheadAttentionDescriptor;

  readonly weights: NSArray;

  readonly biases: NSArray;

  readonly attentionBiases: NSArray;

  readonly weightsParameters: NSArray;

  readonly biasesParameters: NSArray;

  static layerWithDescriptorWeightsBiasesAttentionBiases<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCMultiheadAttentionDescriptor, weights: NSArray<interop.Object> | Array<interop.Object>, biases: NSArray<interop.Object> | Array<interop.Object> | null, attentionBiases: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This> | null;
}

declare class MLCLossLayer extends MLCLayer {
  readonly descriptor: MLCLossDescriptor;

  readonly weights: MLCTensor;

  static layerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, lossDescriptor: MLCLossDescriptor): InstanceType<This>;

  static layerWithDescriptorWeights<This extends abstract new (...args: any) => any>(this: This, lossDescriptor: MLCLossDescriptor, weights: MLCTensor): InstanceType<This>;

  static softmaxCrossEntropyLossWithReductionTypeLabelSmoothingClassCountWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, labelSmoothing: number, classCount: number, weight: number): InstanceType<This>;

  static softmaxCrossEntropyLossWithReductionTypeLabelSmoothingClassCountWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, labelSmoothing: number, classCount: number, weights: MLCTensor | null): InstanceType<This>;

  static categoricalCrossEntropyLossWithReductionTypeLabelSmoothingClassCountWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, labelSmoothing: number, classCount: number, weight: number): InstanceType<This>;

  static categoricalCrossEntropyLossWithReductionTypeLabelSmoothingClassCountWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, labelSmoothing: number, classCount: number, weights: MLCTensor | null): InstanceType<This>;

  static sigmoidCrossEntropyLossWithReductionTypeLabelSmoothingWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, labelSmoothing: number, weight: number): InstanceType<This>;

  static sigmoidCrossEntropyLossWithReductionTypeLabelSmoothingWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, labelSmoothing: number, weights: MLCTensor | null): InstanceType<This>;

  static logLossWithReductionTypeEpsilonWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, epsilon: number, weight: number): InstanceType<This>;

  static logLossWithReductionTypeEpsilonWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, epsilon: number, weights: MLCTensor | null): InstanceType<This>;

  static huberLossWithReductionTypeDeltaWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, delta: number, weight: number): InstanceType<This>;

  static huberLossWithReductionTypeDeltaWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, delta: number, weights: MLCTensor | null): InstanceType<This>;

  static meanAbsoluteErrorLossWithReductionTypeWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weight: number): InstanceType<This>;

  static meanAbsoluteErrorLossWithReductionTypeWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weights: MLCTensor | null): InstanceType<This>;

  static meanSquaredErrorLossWithReductionTypeWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weight: number): InstanceType<This>;

  static meanSquaredErrorLossWithReductionTypeWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weights: MLCTensor | null): InstanceType<This>;

  static hingeLossWithReductionTypeWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weight: number): InstanceType<This>;

  static hingeLossWithReductionTypeWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weights: MLCTensor | null): InstanceType<This>;

  static cosineDistanceLossWithReductionTypeWeight<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weight: number): InstanceType<This>;

  static cosineDistanceLossWithReductionTypeWeights<This extends abstract new (...args: any) => any>(this: This, reductionType: interop.Enum<typeof MLCReductionType>, weights: MLCTensor | null): InstanceType<This>;
}

declare class MLCTensorParameter extends NSObject {
  readonly tensor: MLCTensor;

  isUpdatable: number;

  static parameterWithTensor<This extends abstract new (...args: any) => any>(this: This, tensor: MLCTensor): InstanceType<This>;

  static parameterWithTensorOptimizerData<This extends abstract new (...args: any) => any>(this: This, tensor: MLCTensor, optimizerData: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;
}

declare class MLCMatMulLayer extends MLCLayer {
  readonly descriptor: MLCMatMulDescriptor;

  static layerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCMatMulDescriptor): InstanceType<This> | null;
}

declare class MLCTensorData extends NSObject {
  readonly bytes: interop.Pointer;

  readonly length: number;

  static dataWithBytesNoCopyLength<This extends abstract new (...args: any) => any>(this: This, bytes: interop.PointerConvertible, length: number): InstanceType<This>;

  static dataWithImmutableBytesNoCopyLength<This extends abstract new (...args: any) => any>(this: This, bytes: interop.PointerConvertible, length: number): InstanceType<This>;

  static dataWithBytesNoCopyLengthDeallocator<This extends abstract new (...args: any) => any>(this: This, bytes: interop.PointerConvertible, length: number, deallocator: (p1: interop.PointerConvertible, p2: number) => void): InstanceType<This>;
}

declare class MLCAdamWOptimizer extends MLCOptimizer implements NSCopying {
  readonly beta1: number;

  readonly beta2: number;

  readonly epsilon: number;

  readonly usesAMSGrad: number;

  readonly timeStep: number;

  static optimizerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor): InstanceType<This>;

  static optimizerWithDescriptorBeta1Beta2EpsilonUsesAMSGradTimeStep<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor, beta1: number, beta2: number, epsilon: number, usesAMSGrad: number, timeStep: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCRMSPropOptimizer extends MLCOptimizer implements NSCopying {
  readonly momentumScale: number;

  readonly alpha: number;

  readonly epsilon: number;

  readonly isCentered: number;

  static optimizerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor): InstanceType<This>;

  static optimizerWithDescriptorMomentumScaleAlphaEpsilonIsCentered<This extends abstract new (...args: any) => any>(this: This, optimizerDescriptor: MLCOptimizerDescriptor, momentumScale: number, alpha: number, epsilon: number, isCentered: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCLayer extends NSObject {
  readonly layerID: number;

  label: string;

  isDebuggingEnabled: number;

  static supportsDataTypeOnDevice(dataType: interop.Enum<typeof MLCDataType>, device: MLCDevice): number;

  readonly deviceType: interop.Enum<typeof MLCDeviceType>;
}

declare class MLCTensorOptimizerDeviceData extends NSObject implements NSCopying {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCArithmeticLayer extends MLCLayer {
  readonly operation: interop.Enum<typeof MLCArithmeticOperation>;

  static layerWithOperation<This extends abstract new (...args: any) => any>(this: This, operation: interop.Enum<typeof MLCArithmeticOperation>): InstanceType<This>;
}

declare class MLCReshapeLayer extends MLCLayer {
  readonly shape: NSArray;

  static layerWithShape<This extends abstract new (...args: any) => any>(this: This, shape: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This> | null;
}

declare class MLCPlatform extends NSObject {
  static setRNGSeedTo(seed: NSNumber): void;

  static getRNGseed(): NSNumber | null;
}

declare class MLCGraph extends NSObject {
  readonly device: MLCDevice;

  readonly layers: NSArray;

  static graph<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  readonly summarizedDOTDescription: string;

  nodeWithLayerSource(layer: MLCLayer, source: MLCTensor): MLCTensor | null;

  nodeWithLayerSources(layer: MLCLayer, sources: NSArray<interop.Object> | Array<interop.Object>): MLCTensor | null;

  nodeWithLayerSourcesDisableUpdate(layer: MLCLayer, sources: NSArray<interop.Object> | Array<interop.Object>, disableUpdate: number): MLCTensor | null;

  nodeWithLayerSourcesLossLabels(layer: MLCLayer, sources: NSArray<interop.Object> | Array<interop.Object>, lossLabels: NSArray<interop.Object> | Array<interop.Object>): MLCTensor | null;

  splitWithSourceSplitCountDimension(source: MLCTensor, splitCount: number, dimension: number): NSArray | null;

  splitWithSourceSplitSectionLengthsDimension(source: MLCTensor, splitSectionLengths: NSArray<interop.Object> | Array<interop.Object>, dimension: number): NSArray | null;

  concatenateWithSourcesDimension(sources: NSArray<interop.Object> | Array<interop.Object>, dimension: number): MLCTensor | null;

  reshapeWithShapeSource(shape: NSArray<interop.Object> | Array<interop.Object>, source: MLCTensor): MLCTensor | null;

  transposeWithDimensionsSource(dimensions: NSArray<interop.Object> | Array<interop.Object>, source: MLCTensor): MLCTensor | null;

  selectWithSourcesCondition(sources: NSArray<interop.Object> | Array<interop.Object>, condition: MLCTensor): MLCTensor | null;

  scatterWithDimensionSourceIndicesCopyFromReductionType(dimension: number, source: MLCTensor, indices: MLCTensor, copyFrom: MLCTensor, reductionType: interop.Enum<typeof MLCReductionType>): MLCTensor | null;

  gatherWithDimensionSourceIndices(dimension: number, source: MLCTensor, indices: MLCTensor): MLCTensor | null;

  bindAndWriteDataForInputsToDeviceBatchSizeSynchronous(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, inputTensors: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, device: MLCDevice, batchSize: number, synchronous: number): number;

  bindAndWriteDataForInputsToDeviceSynchronous(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, inputTensors: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, device: MLCDevice, synchronous: number): number;

  sourceTensorsForLayer(layer: MLCLayer): NSArray;

  resultTensorsForLayer(layer: MLCLayer): NSArray;
}

declare class MLCGroupNormalizationLayer extends MLCLayer {
  readonly featureChannelCount: number;

  readonly groupCount: number;

  readonly beta: MLCTensor;

  readonly gamma: MLCTensor;

  readonly betaParameter: MLCTensorParameter;

  readonly gammaParameter: MLCTensorParameter;

  readonly varianceEpsilon: number;

  static layerWithFeatureChannelCountGroupCountBetaGammaVarianceEpsilon<This extends abstract new (...args: any) => any>(this: This, featureChannelCount: number, groupCount: number, beta: MLCTensor | null, gamma: MLCTensor | null, varianceEpsilon: number): InstanceType<This> | null;
}

declare class MLCScatterLayer extends MLCLayer {
  readonly dimension: number;

  readonly reductionType: interop.Enum<typeof MLCReductionType>;

  static layerWithDimensionReductionType<This extends abstract new (...args: any) => any>(this: This, dimension: number, reductionType: interop.Enum<typeof MLCReductionType>): InstanceType<This> | null;
}

declare class MLCTrainingGraph extends MLCGraph {
  readonly optimizer: MLCOptimizer;

  readonly deviceMemorySize: number;

  static graphWithGraphObjectsLossLayerOptimizer<This extends abstract new (...args: any) => any>(this: This, graphObjects: NSArray<interop.Object> | Array<interop.Object>, lossLayer: MLCLayer | null, optimizer: MLCOptimizer | null): InstanceType<This>;

  addInputsLossLabels(inputs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, lossLabels: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): number;

  addInputsLossLabelsLossLabelWeights(inputs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, lossLabels: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, lossLabelWeights: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): number;

  addOutputs(outputs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): number;

  stopGradientForTensors(tensors: NSArray<interop.Object> | Array<interop.Object>): number;

  compileWithOptionsDevice(options: interop.Enum<typeof MLCGraphCompilationOptions>, device: MLCDevice): number;

  compileWithOptionsDeviceInputTensorsInputTensorsData(options: interop.Enum<typeof MLCGraphCompilationOptions>, device: MLCDevice, inputTensors: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, inputTensorsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): number;

  compileOptimizer(optimizer: MLCOptimizer): number;

  linkWithGraphs(graphs: NSArray<interop.Object> | Array<interop.Object>): number;

  gradientTensorForInput(input: MLCTensor): MLCTensor | null;

  sourceGradientTensorsForLayer(layer: MLCLayer): NSArray;

  resultGradientTensorsForLayer(layer: MLCLayer): NSArray;

  gradientDataForParameterLayer(parameter: MLCTensor, layer: MLCLayer): NSData | null;

  allocateUserGradientForTensor(tensor: MLCTensor): MLCTensor | null;

  executeWithInputsDataLossLabelsDataLossLabelWeightsDataBatchSizeOptionsCompletionHandler(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, lossLabelsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, lossLabelWeightsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeWithInputsDataLossLabelsDataLossLabelWeightsDataOutputsDataBatchSizeOptionsCompletionHandler(inputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, lossLabelsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, lossLabelWeightsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, outputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeForwardWithBatchSizeOptionsCompletionHandler(batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeForwardWithBatchSizeOptionsOutputsDataCompletionHandler(batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, outputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeGradientWithBatchSizeOptionsCompletionHandler(batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeGradientWithBatchSizeOptionsOutputsDataCompletionHandler(batchSize: number, options: interop.Enum<typeof MLCExecutionOptions>, outputsData: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  executeOptimizerUpdateWithOptionsCompletionHandler(options: interop.Enum<typeof MLCExecutionOptions>, completionHandler: (p1: MLCTensor, p2: NSError, p3: number) => void | null): number;

  synchronizeUpdates(): void;

  setTrainingTensorParameters(parameters: NSArray<interop.Object> | Array<interop.Object>): number;

  bindOptimizerDataDeviceDataWithTensor(data: NSArray<interop.Object> | Array<interop.Object>, deviceData: NSArray<interop.Object> | Array<interop.Object> | null, tensor: MLCTensor): number;
}

declare class MLCBatchNormalizationLayer extends MLCLayer {
  readonly featureChannelCount: number;

  readonly mean: MLCTensor;

  readonly variance: MLCTensor;

  readonly beta: MLCTensor;

  readonly gamma: MLCTensor;

  readonly betaParameter: MLCTensorParameter;

  readonly gammaParameter: MLCTensorParameter;

  readonly varianceEpsilon: number;

  readonly momentum: number;

  static layerWithFeatureChannelCountMeanVarianceBetaGammaVarianceEpsilon<This extends abstract new (...args: any) => any>(this: This, featureChannelCount: number, mean: MLCTensor, variance: MLCTensor, beta: MLCTensor | null, gamma: MLCTensor | null, varianceEpsilon: number): InstanceType<This> | null;

  static layerWithFeatureChannelCountMeanVarianceBetaGammaVarianceEpsilonMomentum<This extends abstract new (...args: any) => any>(this: This, featureChannelCount: number, mean: MLCTensor, variance: MLCTensor, beta: MLCTensor | null, gamma: MLCTensor | null, varianceEpsilon: number, momentum: number): InstanceType<This> | null;
}

declare class MLCPoolingLayer extends MLCLayer {
  readonly descriptor: MLCPoolingDescriptor;

  static layerWithDescriptor<This extends abstract new (...args: any) => any>(this: This, descriptor: MLCPoolingDescriptor): InstanceType<This>;
}

declare class MLCMatMulDescriptor extends NSObject implements NSCopying {
  readonly alpha: number;

  readonly transposesX: number;

  readonly transposesY: number;

  static descriptorWithAlphaTransposesXTransposesY<This extends abstract new (...args: any) => any>(this: This, alpha: number, transposesX: number, transposesY: number): InstanceType<This> | null;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MLCOptimizer extends NSObject implements NSCopying {
  learningRate: number;

  readonly gradientRescale: number;

  appliesGradientClipping: number;

  readonly gradientClipMax: number;

  readonly gradientClipMin: number;

  readonly regularizationScale: number;

  readonly regularizationType: interop.Enum<typeof MLCRegularizationType>;

  readonly gradientClippingType: interop.Enum<typeof MLCGradientClippingType>;

  readonly maximumClippingNorm: number;

  readonly customGlobalNorm: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

