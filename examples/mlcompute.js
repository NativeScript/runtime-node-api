// @ts-check

import "@nativescript/macos-node-api";

objc.import("MLCompute");

const batchSize = 1;
const shape = [batchSize, 28, 28, 1];
const imageSize = shape[1] * shape[2];
const layerSize = 128;

const tInput = MLCTensor.tensorWithShapeDataType(shape, MLCDataType.Float32);
const tWeights = MLCTensor.tensorWithShapeRandomInitializerTypeDataType(
  [1, imageSize, layerSize, 1],
  MLCRandomInitializerType.GlorotUniform,
  MLCDataType.Float32
);
const tBiases = MLCTensor.tensorWithShapeRandomInitializerTypeDataType(
  [1, layerSize, 1, 1],
  MLCRandomInitializerType.GlorotUniform,
  MLCDataType.Float32
);

const input = new Float32Array(imageSize * batchSize).fill(1);

const dataInput = MLCTensorData.dataWithBytesNoCopyLength(
  input,
  input.byteLength
);

const graph = MLCGraph.new();

const denseLayer = MLCFullyConnectedLayer.layerWithWeightsBiasesDescriptor(
  tWeights,
  tBiases,
  MLCConvolutionDescriptor.descriptorWithKernelWidthKernelHeightInputFeatureChannelCountOutputFeatureChannelCount(
    layerSize,
    imageSize,
    imageSize,
    layerSize
  )
);

if (!denseLayer) {
  throw new Error("denseLayer is null");
}

graph.nodeWithLayerSources(denseLayer, [tInput]);

const device = MLCDevice.gpuDevice();

if (!device) {
  throw new Error("device is null");
}

const inference = MLCInferenceGraph.graphWithGraphObjects([graph]);
inference.addInputs({ input: tInput });

inference.compileWithOptionsDevice(
  MLCGraphCompilationOptions.DebugLayers,
  device
);

inference.executeWithInputsDataBatchSizeOptionsCompletionHandler(
  { input: dataInput },
  batchSize,
  MLCExecutionOptions.Synchronous,
  (output, error, time) => {
    console.log(output, error, time);
  }
);
