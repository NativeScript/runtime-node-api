import { objc } from "../index.js";

objc.import("MLCompute");

const batchSize = 1;
const shape = [batchSize, 28, 28, 1];
const imageSize = shape[1] * shape[2];
const layerSize = 128;

const tInput = MLCTensor.tensorWithShapeDataType(
  shape,
  MLCDataType.float32,
);
const tWeights = MLCTensor.tensorWithShapeRandomInitializerTypeDataType(
  [1, imageSize, layerSize, 1],
  MLCRandomInitializerType.glorotUniform,
  MLCDataType.float32,
);
const tBiases = MLCTensor.tensorWithShapeRandomInitializerTypeDataType(
  [1, layerSize, 1, 1],
  MLCRandomInitializerType.glorotUniform,
  MLCDataType.float32,
);

const input = new Float32Array(imageSize * batchSize).fill(1);

const dataInput = MLCTensorData.dataWithBytesNoCopyLength(
  input,
  input.byteLength,
);

const graph = MLCGraph.new();

const denseLayer = MLCFullyConnectedLayer.layerWithWeightsBiasesDescriptor(
  tWeights,
  tBiases,
  MLCConvolutionDescriptor
    .descriptorWithKernelWidthKernelHeightInputFeatureChannelCountOutputFeatureChannelCount(
      layerSize,
      imageSize,
      imageSize,
      layerSize,
    ),
);

graph.nodeWithLayerSources(denseLayer, [tInput]);

const device = MLCDevice.gpuDevice();

const inference = MLCInferenceGraph.graphWithGraphObjects([graph]);
inference.addInputs({ input: tInput });

inference.compileWithOptionsDevice(
  MLCGraphCompilationOptions.debugLayers,
  device,
);

const callback = objc.registerBlock("v@@d", (output, error, time) => {
  console.log(output, error, time);
});

inference.executeWithInputsDataBatchSizeOptionsCompletionHandler(
  { input: dataInput },
  batchSize,
  MLCExecutionOptions.synchronous,
  callback,
);
