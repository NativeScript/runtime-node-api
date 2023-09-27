import "../index.js";

objc.import("Metal");

const arrayLength = 1 << 24;
const bufferSize = arrayLength * Float32Array.BYTES_PER_ELEMENT;

function MTLSizeMake(width, height, depth) {
  return { width, height, depth };
}

function getFloat32Array(ptr, size) {
  const ab = objc.getArrayBuffer(ptr, size);
  return new Float32Array(ab);
}

class MetalAdder {
  constructor(device) {
    this.device = device;

    const library = device.newLibraryWithSourceOptionsError(
      `
      #include <metal_stdlib>
      using namespace metal;
      
      kernel void add_arrays(device const float* inA,
                            device const float* inB,
                            device float* result,
                            uint index [[thread_position_in_grid]])
      {
          result[index] = inA[index] + inB[index];
      }
      `,
      null,
      null,
    );

    const addFunction = library.newFunctionWithName("add_arrays");

    const error = new ObjectRef();
    this.pipelineState = device.newComputePipelineStateWithFunctionError(
      addFunction,
      error,
    );
    if (!this.pipelineState) {
      console.log(error.value);
    }

    this.commandQueue = device.newCommandQueue();
  }

  prepareData() {
    this.mBufferA = this.device.newBufferWithLengthOptions(
      bufferSize,
      MTLResourceOptions.storageModeShared,
    );
    this.mBufferB = this.device.newBufferWithLengthOptions(
      bufferSize,
      MTLResourceOptions.storageModeShared,
    );
    this.mBufferResult = this.device.newBufferWithLengthOptions(
      bufferSize,
      MTLResourceOptions.storageModeShared,
    );

    this.generateRandomFloatData(this.mBufferA);
    this.generateRandomFloatData(this.mBufferB);
  }

  sendComputeCommand() {
    const commandBuffer = this.commandQueue.commandBuffer();
    if (commandBuffer === null) {
      throw new Error("Failed to create command buffer");
    }

    const commandEncoder = commandBuffer.computeCommandEncoder();
    if (commandEncoder === null) {
      throw new Error("Failed to create command encoder");
    }

    this.encodeAddCommand(commandEncoder);

    commandEncoder.endEncoding();

    commandBuffer.commit();

    commandBuffer.waitUntilCompleted();

    this.verifyResults();
  }

  encodeAddCommand(computeEncoder) {
    computeEncoder.setComputePipelineState(this.pipelineState);
    computeEncoder.setBufferOffsetAtIndex(this.mBufferA, 0, 0);
    computeEncoder.setBufferOffsetAtIndex(this.mBufferB, 0, 1);
    computeEncoder.setBufferOffsetAtIndex(this.mBufferResult, 0, 2);

    const gridSize = MTLSizeMake(arrayLength, 1, 1);

    const threadGroupSize = this.pipelineState.maxTotalThreadsPerThreadgroup;
    if (threadGroupSize > arrayLength) {
      threadGroupSize = arrayLength;
    }

    const threadgroupSize = MTLSizeMake(threadGroupSize, 1, 1);

    computeEncoder.dispatchThreadsThreadsPerThreadgroup(
      gridSize,
      threadgroupSize,
    );
  }

  generateRandomFloatData(buffer) {
    const contents = getFloat32Array(buffer.contents(), bufferSize);
    for (let i = 0; i < arrayLength; i++) {
      contents[i] = Math.floor(Math.random() * 100);
    }
  }

  verifyResults() {
    const a = getFloat32Array(this.mBufferA.contents(), bufferSize);
    const b = getFloat32Array(this.mBufferB.contents(), bufferSize);
    const result = getFloat32Array(this.mBufferResult.contents(), bufferSize);

    for (let i = 0; i < arrayLength; i++) {
      if (a[i] + b[i] !== result[i]) {
        console.log("Results don't match!", i, a[i], b[i], result[i]);
        return;
      }
    }

    console.log("Results match!");
  }
}

const device = MTLCopyAllDevices().firstObject;

const adder = new MetalAdder(device);

adder.prepareData();

adder.sendComputeCommand();
