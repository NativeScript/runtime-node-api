/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const MTLCommonCounterVertexInvocations: string;

declare const MTLCommonCounterFragmentCycles: string;

declare const MTLCommonCounterClipperInvocations: string;

declare const MTLCounterErrorDomain: string;

declare const MTLCaptureErrorDomain: string;

declare const MTLLogStateErrorDomain: string;

declare const NSProcessInfoPerformanceProfileDidChangeNotification: string;

declare const NSProcessPerformanceProfileSustained: number;

declare const NSDeviceCertificationiPhonePerformanceGaming: number;

declare const MTLCommandBufferErrorDomain: string;

declare const MTLCommonCounterSetStatistic: string;

declare const MTLCommonCounterSetTimestamp: string;

declare const MTLCommonCounterTessellationCycles: string;

declare const MTLCommonCounterTotalCycles: string;

declare const MTLCommonCounterClipperPrimitivesOut: string;

declare const MTLCommonCounterPostTessellationVertexInvocations: string;

declare const MTLAttributeStrideStatic: number;

declare const MTLIOErrorDomain: string;

declare const NSProcessPerformanceProfileDefault: number;

declare const MTLCommandBufferEncoderInfoErrorKey: string;

declare const MTLCommonCounterPostTessellationVertexCycles: string;

declare const MTLCommonCounterSetStageUtilization: string;

declare const MTLCommonCounterTessellationInputPatches: string;

declare const MTLBinaryArchiveDomain: string;

declare const MTLCommonCounterTimestamp: string;

declare const MTLDynamicLibraryDomain: string;

declare const MTLCommonCounterFragmentInvocations: string;

declare const MTLCommonCounterFragmentsPassed: string;

declare const MTLCommonCounterVertexCycles: string;

declare const MTLCommonCounterComputeKernelInvocations: string;

declare const MTLLibraryErrorDomain: string;

declare const MTLCommonCounterRenderTargetWriteCycles: string;

declare const MTLBufferLayoutStrideDynamic: number;

declare const MTLSamplerMinMagFilter: {
  Nearest: 0,
  Linear: 1,
};

declare const MTLCommandBufferStatus: {
  NotEnqueued: 0,
  Enqueued: 1,
  Committed: 2,
  Scheduled: 3,
  Completed: 4,
  Error: 5,
};

declare const MTLTessellationFactorFormat: {
  MTLTessellationFactorFormatHalf: 0,
};

declare const MTLTextureSwizzle: {
  Zero: 0,
  One: 1,
  Red: 2,
  Green: 3,
  Blue: 4,
  Alpha: 5,
};

declare const MTLStitchedLibraryOptions: {
  None: 0,
  FailOnBinaryArchiveMiss: 1,
  StoreLibraryInMetalPipelinesScript: 2,
};

declare const MTLIOPriority: {
  High: 0,
  Normal: 1,
  Low: 2,
};

declare const MTLAccelerationStructureRefitOptions: {
  Vertex: 1,
  PerPrimitive: 2,
};

declare const MTLFunctionLogType: {
  MTLFunctionLogTypeValidation: 0,
};

declare const MTLHeapType: {
  Automatic: 0,
  Placement: 1,
  Sparse: 2,
};

declare const MTLTransformType: {
  PackedFloat4x3: 0,
  Component: 1,
};

declare const MTLAccelerationStructureInstanceDescriptorType: {
  Default: 0,
  UserID: 1,
  Motion: 2,
  Indirect: 3,
  IndirectMotion: 4,
};

declare const MTLCurveEndCaps: {
  None: 0,
  Disk: 1,
  Sphere: 2,
};

declare const MTLCurveBasis: {
  BSpline: 0,
  CatmullRom: 1,
  Linear: 2,
  Bezier: 3,
};

declare const MTLMotionBorderMode: {
  Clamp: 0,
  Vanish: 1,
};

declare const MTLMatrixLayout: {
  Column: 0,
  Row: 1,
};

declare const MTLBinaryArchiveError: {
  None: 0,
  InvalidFile: 1,
  UnexpectedElement: 2,
  CompilationFailure: 3,
  InternalError: 4,
};

declare const MTLSamplerBorderColor: {
  TransparentBlack: 0,
  OpaqueBlack: 1,
  OpaqueWhite: 2,
};

declare const MTLSamplerAddressMode: {
  ClampToEdge: 0,
  MirrorClampToEdge: 1,
  Repeat: 2,
  MirrorRepeat: 3,
  ClampToZero: 4,
  ClampToBorderColor: 5,
};

declare const MTLTessellationPartitionMode: {
  Pow2: 0,
  Integer: 1,
  FractionalOdd: 2,
  FractionalEven: 3,
};

declare const MTLShaderValidation: {
  Default: 0,
  Enabled: 1,
  Disabled: 2,
};

declare const MTLMutability: {
  Default: 0,
  Mutable: 1,
  Immutable: 2,
};

declare const MTLIndexType: {
  Int16: 0,
  Int32: 1,
};

declare const MTLAttributeFormat: {
  Invalid: 0,
  UChar2: 1,
  UChar3: 2,
  UChar4: 3,
  Char2: 4,
  Char3: 5,
  Char4: 6,
  UChar2Normalized: 7,
  UChar3Normalized: 8,
  UChar4Normalized: 9,
  Char2Normalized: 10,
  Char3Normalized: 11,
  Char4Normalized: 12,
  UShort2: 13,
  UShort3: 14,
  UShort4: 15,
  Short2: 16,
  Short3: 17,
  Short4: 18,
  UShort2Normalized: 19,
  UShort3Normalized: 20,
  UShort4Normalized: 21,
  Short2Normalized: 22,
  Short3Normalized: 23,
  Short4Normalized: 24,
  Half2: 25,
  Half3: 26,
  Half4: 27,
  Float: 28,
  Float2: 29,
  Float3: 30,
  Float4: 31,
  Int: 32,
  Int2: 33,
  Int3: 34,
  Int4: 35,
  UInt: 36,
  UInt2: 37,
  UInt3: 38,
  UInt4: 39,
  Int1010102Normalized: 40,
  UInt1010102Normalized: 41,
  UChar4Normalized_BGRA: 42,
  UChar: 45,
  Char: 46,
  UCharNormalized: 47,
  CharNormalized: 48,
  UShort: 49,
  Short: 50,
  UShortNormalized: 51,
  ShortNormalized: 52,
  Half: 53,
  FloatRG11B10: 54,
  FloatRGB9E5: 55,
};

declare const MTLVertexFormat: {
  Invalid: 0,
  UChar2: 1,
  UChar3: 2,
  UChar4: 3,
  Char2: 4,
  Char3: 5,
  Char4: 6,
  UChar2Normalized: 7,
  UChar3Normalized: 8,
  UChar4Normalized: 9,
  Char2Normalized: 10,
  Char3Normalized: 11,
  Char4Normalized: 12,
  UShort2: 13,
  UShort3: 14,
  UShort4: 15,
  Short2: 16,
  Short3: 17,
  Short4: 18,
  UShort2Normalized: 19,
  UShort3Normalized: 20,
  UShort4Normalized: 21,
  Short2Normalized: 22,
  Short3Normalized: 23,
  Short4Normalized: 24,
  Half2: 25,
  Half3: 26,
  Half4: 27,
  Float: 28,
  Float2: 29,
  Float3: 30,
  Float4: 31,
  Int: 32,
  Int2: 33,
  Int3: 34,
  Int4: 35,
  UInt: 36,
  UInt2: 37,
  UInt3: 38,
  UInt4: 39,
  Int1010102Normalized: 40,
  UInt1010102Normalized: 41,
  UChar4Normalized_BGRA: 42,
  UChar: 45,
  Char: 46,
  UCharNormalized: 47,
  CharNormalized: 48,
  UShort: 49,
  Short: 50,
  UShortNormalized: 51,
  ShortNormalized: 52,
  Half: 53,
  FloatRG11B10: 54,
  FloatRGB9E5: 55,
};

declare const MTLStencilOperation: {
  Keep: 0,
  Zero: 1,
  Replace: 2,
  IncrementClamp: 3,
  DecrementClamp: 4,
  Invert: 5,
  IncrementWrap: 6,
  DecrementWrap: 7,
};

declare const MTLCommandBufferErrorOption: {
  None: 0,
  EncoderExecutionStatus: 1,
};

declare const MTLCommandBufferError: {
  None: 0,
  Internal: 1,
  Timeout: 2,
  PageFault: 3,
  Blacklisted: 4,
  AccessRevoked: 4,
  NotPermitted: 7,
  OutOfMemory: 8,
  InvalidResource: 9,
  Memoryless: 10,
  StackOverflow: 12,
};

declare const MTLMultisampleDepthResolveFilter: {
  Sample0: 0,
  Min: 1,
  Max: 2,
};

declare const MTLStoreActionOptions: {
  None: 0,
  CustomSamplePositions: 1,
};

declare const MTLLoadAction: {
  DontCare: 0,
  Load: 1,
  Clear: 2,
};

declare const MTLSparsePageSize: {
  Size16: 101,
  Size64: 102,
  Size256: 103,
};

declare const MTLReadWriteTextureTier: {
  TierNone: 0,
  Tier1: 1,
  Tier2: 2,
};

declare const MTLPipelineOption: {
  None: 0,
  ArgumentInfo: 1,
  BindingInfo: 1,
  BufferTypeInfo: 2,
  FailOnBinaryArchiveMiss: 4,
};

declare const MTLCounterSampleBufferError: {
  OutOfMemory: 0,
  Invalid: 1,
  Internal: 2,
};

declare const MTLMathFloatingPointFunctions: {
  Fast: 0,
  Precise: 1,
};

declare const MTLMathMode: {
  Safe: 0,
  Relaxed: 1,
  Fast: 2,
};

declare const MTLSamplerMipFilter: {
  NotMipmapped: 0,
  Nearest: 1,
  Linear: 2,
};

declare const MTLLibraryType: {
  Executable: 0,
  Dynamic: 1,
};

declare const MTLLanguageVersion: {
  Version1_0: 65536,
  Version1_1: 65537,
  Version1_2: 65538,
  Version2_0: 131072,
  Version2_1: 131073,
  Version2_2: 131074,
  Version2_3: 131075,
  Version2_4: 131076,
  Version3_0: 196608,
  Version3_1: 196609,
  Version3_2: 196610,
};

declare const MTLTextureCompressionType: {
  Lossless: 0,
  Lossy: 1,
};

declare const MTLTextureUsage: {
  Unknown: 0,
  ShaderRead: 1,
  ShaderWrite: 2,
  RenderTarget: 4,
  PixelFormatView: 16,
  ShaderAtomic: 32,
};

declare const MTLHazardTrackingMode: {
  Default: 0,
  Untracked: 1,
  Tracked: 2,
};

declare const MTLStorageMode: {
  Shared: 0,
  Private: 2,
  Memoryless: 3,
};

declare const MTLPurgeableState: {
  KeepCurrent: 1,
  NonVolatile: 2,
  Volatile: 3,
  Empty: 4,
};

declare const MTLCommandEncoderErrorState: {
  Unknown: 0,
  Completed: 1,
  Affected: 2,
  Pending: 3,
  Faulted: 4,
};

declare const MTLBarrierScope: {
  Buffers: 1,
  Textures: 2,
};

declare const MTLResourceUsage: {
  Read: 1,
  Write: 2,
  Sample: 4,
};

declare const MTLLogLevel: {
  Undefined: 0,
  Debug: 1,
  Info: 2,
  Notice: 3,
  Error: 4,
  Fault: 5,
};

declare const MTLIntersectionFunctionSignature: {
  None: 0,
  Instancing: 1,
  TriangleData: 2,
  WorldSpaceData: 4,
  InstanceMotion: 8,
  PrimitiveMotion: 16,
  ExtendedLimits: 32,
  MaxLevels: 64,
  CurveData: 128,
};

declare const MTLDispatchType: {
  Serial: 0,
  Concurrent: 1,
};

declare const MTLArgumentBuffersTier: {
  Tier1: 0,
  Tier2: 1,
};

declare const MTLMultisampleStencilResolveFilter: {
  Sample0: 0,
  DepthResolvedSample: 1,
};

declare const MTLBlitOption: {
  None: 0,
  DepthFromDepthStencil: 1,
  StencilFromDepthStencil: 2,
  RowLinearPVRTC: 4,
};

declare const MTLIOStatus: {
  Pending: 0,
  Cancelled: 1,
  Error: 2,
  Complete: 3,
};

declare const MTLLibraryOptimizationLevel: {
  Default: 0,
  Size: 1,
};

declare const MTLVertexStepFunction: {
  Constant: 0,
  PerVertex: 1,
  PerInstance: 2,
  PerPatch: 3,
  PerPatchControlPoint: 4,
};

declare const MTLCompileSymbolVisibility: {
  Default: 0,
  Hidden: 1,
};

declare const MTLIOCompressionMethod: {
  Zlib: 0,
  LZFSE: 1,
  LZ4: 2,
  LZMA: 3,
  LZBitmap: 4,
};

declare const MTLFunctionOptions: {
  None: 0,
  CompileToBinary: 1,
  StoreFunctionInMetalPipelinesScript: 2,
  StoreFunctionInMetalScript: 2,
  FailOnBinaryArchiveMiss: 4,
};

declare const MTLSparseTextureMappingMode: {
  Map: 0,
  Unmap: 1,
};

declare const MTLResourceOptions: {
  CPUCacheModeDefaultCache: 0,
  CPUCacheModeWriteCombined: 1,
  StorageModeShared: 0,
  StorageModePrivate: 32,
  StorageModeMemoryless: 48,
  HazardTrackingModeDefault: 0,
  HazardTrackingModeUntracked: 256,
  HazardTrackingModeTracked: 512,
  OptionCPUCacheModeDefault: 0,
  OptionCPUCacheModeWriteCombined: 1,
};

declare const MTLCullMode: {
  None: 0,
  Front: 1,
  Back: 2,
};

declare const MTLBlendOperation: {
  Add: 0,
  Subtract: 1,
  ReverseSubtract: 2,
  Min: 3,
  Max: 4,
};

declare const MTLDynamicLibraryError: {
  None: 0,
  InvalidFile: 1,
  CompilationFailure: 2,
  UnresolvedInstallName: 3,
  DependencyLoadFailure: 4,
  Unsupported: 5,
};

declare const MTLRenderStages: {
  Vertex: 1,
  Fragment: 2,
  Tile: 4,
  Object: 8,
  Mesh: 16,
};

declare const MTLPixelFormat: {
  Invalid: 0,
  A8Unorm: 1,
  R8Unorm: 10,
  R8Unorm_sRGB: 11,
  R8Snorm: 12,
  R8Uint: 13,
  R8Sint: 14,
  R16Unorm: 20,
  R16Snorm: 22,
  R16Uint: 23,
  R16Sint: 24,
  R16Float: 25,
  RG8Unorm: 30,
  RG8Unorm_sRGB: 31,
  RG8Snorm: 32,
  RG8Uint: 33,
  RG8Sint: 34,
  B5G6R5Unorm: 40,
  A1BGR5Unorm: 41,
  ABGR4Unorm: 42,
  BGR5A1Unorm: 43,
  R32Uint: 53,
  R32Sint: 54,
  R32Float: 55,
  RG16Unorm: 60,
  RG16Snorm: 62,
  RG16Uint: 63,
  RG16Sint: 64,
  RG16Float: 65,
  RGBA8Unorm: 70,
  RGBA8Unorm_sRGB: 71,
  RGBA8Snorm: 72,
  RGBA8Uint: 73,
  RGBA8Sint: 74,
  BGRA8Unorm: 80,
  BGRA8Unorm_sRGB: 81,
  RGB10A2Unorm: 90,
  RGB10A2Uint: 91,
  RG11B10Float: 92,
  RGB9E5Float: 93,
  BGR10A2Unorm: 94,
  BGR10_XR: 554,
  BGR10_XR_sRGB: 555,
  RG32Uint: 103,
  RG32Sint: 104,
  RG32Float: 105,
  RGBA16Unorm: 110,
  RGBA16Snorm: 112,
  RGBA16Uint: 113,
  RGBA16Sint: 114,
  RGBA16Float: 115,
  BGRA10_XR: 552,
  BGRA10_XR_sRGB: 553,
  RGBA32Uint: 123,
  RGBA32Sint: 124,
  RGBA32Float: 125,
  BC1_RGBA: 130,
  BC1_RGBA_sRGB: 131,
  BC2_RGBA: 132,
  BC2_RGBA_sRGB: 133,
  BC3_RGBA: 134,
  BC3_RGBA_sRGB: 135,
  BC4_RUnorm: 140,
  BC4_RSnorm: 141,
  BC5_RGUnorm: 142,
  BC5_RGSnorm: 143,
  BC6H_RGBFloat: 150,
  BC6H_RGBUfloat: 151,
  BC7_RGBAUnorm: 152,
  BC7_RGBAUnorm_sRGB: 153,
  PVRTC_RGB_2BPP: 160,
  PVRTC_RGB_2BPP_sRGB: 161,
  PVRTC_RGB_4BPP: 162,
  PVRTC_RGB_4BPP_sRGB: 163,
  PVRTC_RGBA_2BPP: 164,
  PVRTC_RGBA_2BPP_sRGB: 165,
  PVRTC_RGBA_4BPP: 166,
  PVRTC_RGBA_4BPP_sRGB: 167,
  EAC_R11Unorm: 170,
  EAC_R11Snorm: 172,
  EAC_RG11Unorm: 174,
  EAC_RG11Snorm: 176,
  EAC_RGBA8: 178,
  EAC_RGBA8_sRGB: 179,
  ETC2_RGB8: 180,
  ETC2_RGB8_sRGB: 181,
  ETC2_RGB8A1: 182,
  ETC2_RGB8A1_sRGB: 183,
  ASTC_4x4_sRGB: 186,
  ASTC_5x4_sRGB: 187,
  ASTC_5x5_sRGB: 188,
  ASTC_6x5_sRGB: 189,
  ASTC_6x6_sRGB: 190,
  ASTC_8x5_sRGB: 192,
  ASTC_8x6_sRGB: 193,
  ASTC_8x8_sRGB: 194,
  ASTC_10x5_sRGB: 195,
  ASTC_10x6_sRGB: 196,
  ASTC_10x8_sRGB: 197,
  ASTC_10x10_sRGB: 198,
  ASTC_12x10_sRGB: 199,
  ASTC_12x12_sRGB: 200,
  ASTC_4x4_LDR: 204,
  ASTC_5x4_LDR: 205,
  ASTC_5x5_LDR: 206,
  ASTC_6x5_LDR: 207,
  ASTC_6x6_LDR: 208,
  ASTC_8x5_LDR: 210,
  ASTC_8x6_LDR: 211,
  ASTC_8x8_LDR: 212,
  ASTC_10x5_LDR: 213,
  ASTC_10x6_LDR: 214,
  ASTC_10x8_LDR: 215,
  ASTC_10x10_LDR: 216,
  ASTC_12x10_LDR: 217,
  ASTC_12x12_LDR: 218,
  ASTC_4x4_HDR: 222,
  ASTC_5x4_HDR: 223,
  ASTC_5x5_HDR: 224,
  ASTC_6x5_HDR: 225,
  ASTC_6x6_HDR: 226,
  ASTC_8x5_HDR: 228,
  ASTC_8x6_HDR: 229,
  ASTC_8x8_HDR: 230,
  ASTC_10x5_HDR: 231,
  ASTC_10x6_HDR: 232,
  ASTC_10x8_HDR: 233,
  ASTC_10x10_HDR: 234,
  ASTC_12x10_HDR: 235,
  ASTC_12x12_HDR: 236,
  GBGR422: 240,
  BGRG422: 241,
  Depth16Unorm: 250,
  Depth32Float: 252,
  Stencil8: 253,
  Depth32Float_Stencil8: 260,
  X32_Stencil8: 261,
};

declare const MTLIOCommandQueueType: {
  Concurrent: 0,
  Serial: 1,
};

declare const MTLIndirectCommandType: {
  Draw: 1,
  DrawIndexed: 2,
  DrawPatches: 4,
  DrawIndexedPatches: 8,
  ConcurrentDispatch: 32,
  ConcurrentDispatchThreads: 64,
  DrawMeshThreadgroups: 128,
  DrawMeshThreads: 256,
};

declare const MTLCPUCacheMode: {
  DefaultCache: 0,
  WriteCombined: 1,
};

declare const MTLTextureType: {
  Type1D: 0,
  Type1DArray: 1,
  Type2D: 2,
  Type2DArray: 3,
  Type2DMultisample: 4,
  TypeCube: 5,
  TypeCubeArray: 6,
  Type3D: 7,
  Type2DMultisampleArray: 8,
  TypeTextureBuffer: 9,
};

declare const MTLTessellationControlPointIndexType: {
  None: 0,
  UInt16: 1,
  UInt32: 2,
};

declare const MTLBindingType: {
  Buffer: 0,
  ThreadgroupMemory: 1,
  Texture: 2,
  Sampler: 3,
  ImageblockData: 16,
  Imageblock: 17,
  VisibleFunctionTable: 24,
  PrimitiveAccelerationStructure: 25,
  InstanceAccelerationStructure: 26,
  IntersectionFunctionTable: 27,
  ObjectPayload: 34,
};

declare const MTLTriangleFillMode: {
  Fill: 0,
  Lines: 1,
};

declare const MTLLogStateError: {
  Size: 1,
  MTLLogStateErrorInvalid: 2,
};

declare const MTLPatchType: {
  None: 0,
  Triangle: 1,
  Quad: 2,
};

declare const MTLSparseTextureRegionAlignmentMode: {
  Outward: 0,
  Inward: 1,
};

declare const MTLIOCompressionStatus: {
  Complete: 0,
  Error: 1,
};

declare const MTLBlendFactor: {
  Zero: 0,
  One: 1,
  SourceColor: 2,
  OneMinusSourceColor: 3,
  SourceAlpha: 4,
  OneMinusSourceAlpha: 5,
  DestinationColor: 6,
  OneMinusDestinationColor: 7,
  DestinationAlpha: 8,
  OneMinusDestinationAlpha: 9,
  SourceAlphaSaturated: 10,
  BlendColor: 11,
  OneMinusBlendColor: 12,
  BlendAlpha: 13,
  OneMinusBlendAlpha: 14,
  Source1Color: 15,
  OneMinusSource1Color: 16,
  Source1Alpha: 17,
  OneMinusSource1Alpha: 18,
};

declare const MTLArgumentType: {
  Buffer: 0,
  ThreadgroupMemory: 1,
  Texture: 2,
  Sampler: 3,
  ImageblockData: 16,
  Imageblock: 17,
  VisibleFunctionTable: 24,
  PrimitiveAccelerationStructure: 25,
  InstanceAccelerationStructure: 26,
  IntersectionFunctionTable: 27,
};

declare const MTLColorWriteMask: {
  None: 0,
  Red: 8,
  Green: 4,
  Blue: 2,
  Alpha: 1,
  All: 15,
};

declare const MTLBindingAccess: {
  BindingAccessReadOnly: 0,
  BindingAccessReadWrite: 1,
  BindingAccessWriteOnly: 2,
  ArgumentAccessReadOnly: 0,
  ArgumentAccessReadWrite: 1,
  ArgumentAccessWriteOnly: 2,
};

declare const MTLTessellationFactorStepFunction: {
  Constant: 0,
  PerPatch: 1,
  PerInstance: 2,
  PerPatchAndPerInstance: 3,
};

declare const MTLDepthClipMode: {
  Clip: 0,
  Clamp: 1,
};

declare const MTLCaptureDestination: {
  DeveloperTools: 1,
  GPUTraceDocument: 2,
};

declare const MTLCurveType: {
  Round: 0,
  Flat: 1,
};

declare const MTLAccelerationStructureUsage: {
  None: 0,
  Refit: 1,
  PreferFastBuild: 2,
  ExtendedLimits: 4,
};

declare const MTLCompareFunction: {
  Never: 0,
  Less: 1,
  Equal: 2,
  LessEqual: 3,
  Greater: 4,
  NotEqual: 5,
  GreaterEqual: 6,
  Always: 7,
};

declare const MTLIOError: {
  URLInvalid: 1,
  Internal: 2,
};

declare const MTLPrimitiveType: {
  Point: 0,
  Line: 1,
  LineStrip: 2,
  Triangle: 3,
  TriangleStrip: 4,
};

declare const MTLGPUFamily: {
  Apple1: 1001,
  Apple2: 1002,
  Apple3: 1003,
  Apple4: 1004,
  Apple5: 1005,
  Apple6: 1006,
  Apple7: 1007,
  Apple8: 1008,
  Apple9: 1009,
  Mac1: 2001,
  Mac2: 2002,
  Common1: 3001,
  Common2: 3002,
  Common3: 3003,
  MacCatalyst1: 4001,
  MacCatalyst2: 4002,
  Metal3: 5001,
};

declare const MTLLibraryError: {
  Unsupported: 1,
  Internal: 2,
  CompileFailure: 3,
  CompileWarning: 4,
  FunctionNotFound: 5,
  FileNotFound: 6,
};

declare const MTLAccelerationStructureInstanceOptions: {
  None: 0,
  DisableTriangleCulling: 1,
  TriangleFrontFacingWindingCounterClockwise: 2,
  Opaque: 4,
  NonOpaque: 8,
};

declare const MTLFeatureSet: {
  Family1_v1: 0,
  Family2_v1: 1,
  Family1_v2: 2,
  Family2_v2: 3,
  Family3_v1: 4,
  Family1_v3: 5,
  Family2_v3: 6,
  Family3_v2: 7,
  Family1_v4: 8,
  Family2_v4: 9,
  Family3_v3: 10,
  Family4_v1: 11,
  Family1_v5: 12,
  Family2_v5: 13,
  Family3_v4: 14,
  Family4_v2: 15,
  Family5_v1: 16,
};

declare const MTLCounterSamplingPoint: {
  Stage: 0,
  Draw: 1,
  Dispatch: 2,
  TileDispatch: 3,
  Blit: 4,
};

declare const MTLCaptureError: {
  NotSupported: 1,
  AlreadyCapturing: 2,
  InvalidDescriptor: 3,
};

declare const MTLVisibilityResultMode: {
  Disabled: 0,
  Boolean: 1,
  Counting: 2,
};

declare const MTLStepFunction: {
  Constant: 0,
  PerVertex: 1,
  PerInstance: 2,
  PerPatch: 3,
  PerPatchControlPoint: 4,
  ThreadPositionInGridX: 5,
  ThreadPositionInGridY: 6,
  ThreadPositionInGridXIndexed: 7,
  ThreadPositionInGridYIndexed: 8,
};

declare const MTLStoreAction: {
  DontCare: 0,
  Store: 1,
  MultisampleResolve: 2,
  StoreAndMultisampleResolve: 3,
  Unknown: 4,
  CustomSampleDepthStore: 5,
};

declare const MTLWinding: {
  MTLWindingClockwise: 0,
  Counter: 1,
};

declare const MTLFunctionType: {
  Vertex: 1,
  Fragment: 2,
  Kernel: 3,
  Visible: 5,
  Intersection: 6,
  Mesh: 7,
  Object: 8,
};

declare const MTLDataType: {
  None: 0,
  Struct: 1,
  Array: 2,
  Float: 3,
  Float2: 4,
  Float3: 5,
  Float4: 6,
  Float2x2: 7,
  Float2x3: 8,
  Float2x4: 9,
  Float3x2: 10,
  Float3x3: 11,
  Float3x4: 12,
  Float4x2: 13,
  Float4x3: 14,
  Float4x4: 15,
  Half: 16,
  Half2: 17,
  Half3: 18,
  Half4: 19,
  Half2x2: 20,
  Half2x3: 21,
  Half2x4: 22,
  Half3x2: 23,
  Half3x3: 24,
  Half3x4: 25,
  Half4x2: 26,
  Half4x3: 27,
  Half4x4: 28,
  Int: 29,
  Int2: 30,
  Int3: 31,
  Int4: 32,
  UInt: 33,
  UInt2: 34,
  UInt3: 35,
  UInt4: 36,
  Short: 37,
  Short2: 38,
  Short3: 39,
  Short4: 40,
  UShort: 41,
  UShort2: 42,
  UShort3: 43,
  UShort4: 44,
  Char: 45,
  Char2: 46,
  Char3: 47,
  Char4: 48,
  UChar: 49,
  UChar2: 50,
  UChar3: 51,
  UChar4: 52,
  Bool: 53,
  Bool2: 54,
  Bool3: 55,
  Bool4: 56,
  Texture: 58,
  Sampler: 59,
  Pointer: 60,
  R8Unorm: 62,
  R8Snorm: 63,
  R16Unorm: 64,
  R16Snorm: 65,
  RG8Unorm: 66,
  RG8Snorm: 67,
  RG16Unorm: 68,
  RG16Snorm: 69,
  RGBA8Unorm: 70,
  RGBA8Unorm_sRGB: 71,
  RGBA8Snorm: 72,
  RGBA16Unorm: 73,
  RGBA16Snorm: 74,
  RGB10A2Unorm: 75,
  RG11B10Float: 76,
  RGB9E5Float: 77,
  RenderPipeline: 78,
  ComputePipeline: 79,
  IndirectCommandBuffer: 80,
  Long: 81,
  Long2: 82,
  Long3: 83,
  Long4: 84,
  ULong: 85,
  ULong2: 86,
  ULong3: 87,
  ULong4: 88,
  VisibleFunctionTable: 115,
  IntersectionFunctionTable: 116,
  PrimitiveAccelerationStructure: 117,
  InstanceAccelerationStructure: 118,
  BFloat: 121,
  BFloat2: 122,
  BFloat3: 123,
  BFloat4: 124,
};

declare const MTLPrimitiveTopologyClass: {
  Unspecified: 0,
  Point: 1,
  Line: 2,
  Triangle: 3,
};

declare class MTLSamplePosition {
  constructor(init?: MTLSamplePosition);
  x: number;
  y: number;
}

declare class MTLViewport {
  constructor(init?: MTLViewport);
  originX: number;
  originY: number;
  width: number;
  height: number;
  znear: number;
  zfar: number;
}

declare class MTLIndirectAccelerationStructureInstanceDescriptor {
  constructor(init?: MTLIndirectAccelerationStructureInstanceDescriptor);
  transformationMatrix: _MTLPackedFloat4x3;
  options: interop.Enum<typeof MTLAccelerationStructureInstanceOptions>;
  mask: number;
  intersectionFunctionTableOffset: number;
  userID: number;
  accelerationStructureID: MTLResourceID;
}

declare class MTLAccelerationStructureMotionInstanceDescriptor {
  constructor(init?: MTLAccelerationStructureMotionInstanceDescriptor);
  options: interop.Enum<typeof MTLAccelerationStructureInstanceOptions>;
  mask: number;
  intersectionFunctionTableOffset: number;
  accelerationStructureIndex: number;
  userID: number;
  motionTransformsStartIndex: number;
  motionTransformsCount: number;
  motionStartBorderMode: interop.Enum<typeof MTLMotionBorderMode>;
  motionEndBorderMode: interop.Enum<typeof MTLMotionBorderMode>;
  motionStartTime: number;
  motionEndTime: number;
}

declare class MTLAccelerationStructureUserIDInstanceDescriptor {
  constructor(init?: MTLAccelerationStructureUserIDInstanceDescriptor);
  transformationMatrix: _MTLPackedFloat4x3;
  options: interop.Enum<typeof MTLAccelerationStructureInstanceOptions>;
  mask: number;
  intersectionFunctionTableOffset: number;
  accelerationStructureIndex: number;
  userID: number;
}

declare class MTLComponentTransform {
  constructor(init?: MTLComponentTransform);
  scale: _MTLPackedFloat3;
  shear: _MTLPackedFloat3;
  pivot: _MTLPackedFloat3;
  rotation: MTLPackedFloatQuaternion;
  translation: _MTLPackedFloat3;
}

declare class _MTLPackedFloat4x3 {
  constructor(init?: _MTLPackedFloat4x3);
  columns: unknown /* const array */;
}

declare class _MTLPackedFloat3 {
  constructor(init?: _MTLPackedFloat3);
}

declare class MTLQuadTessellationFactorsHalf {
  constructor(init?: MTLQuadTessellationFactorsHalf);
  edgeTessellationFactor: unknown /* const array */;
  insideTessellationFactor: unknown /* const array */;
}

declare class MTLDrawPatchIndirectArguments {
  constructor(init?: MTLDrawPatchIndirectArguments);
  patchCount: number;
  instanceCount: number;
  patchStart: number;
  baseInstance: number;
}

declare class MTLVertexAmplificationViewMapping {
  constructor(init?: MTLVertexAmplificationViewMapping);
  viewportArrayIndexOffset: number;
  renderTargetArrayIndexOffset: number;
}

declare class MTLDrawIndexedPrimitivesIndirectArguments {
  constructor(init?: MTLDrawIndexedPrimitivesIndirectArguments);
  indexCount: number;
  instanceCount: number;
  indexStart: number;
  baseVertex: number;
  baseInstance: number;
}

declare class MTLDrawPrimitivesIndirectArguments {
  constructor(init?: MTLDrawPrimitivesIndirectArguments);
  vertexCount: number;
  instanceCount: number;
  vertexStart: number;
  baseInstance: number;
}

declare class MTLScissorRect {
  constructor(init?: MTLScissorRect);
  x: number;
  y: number;
  width: number;
  height: number;
}

declare class MTLDispatchThreadgroupsIndirectArguments {
  constructor(init?: MTLDispatchThreadgroupsIndirectArguments);
  threadgroupsPerGrid: unknown /* const array */;
}

declare class MTLTriangleTessellationFactorsHalf {
  constructor(init?: MTLTriangleTessellationFactorsHalf);
  edgeTessellationFactor: unknown /* const array */;
  insideTessellationFactor: number;
}

declare class MTLMapIndirectArguments {
  constructor(init?: MTLMapIndirectArguments);
  regionOriginX: number;
  regionOriginY: number;
  regionOriginZ: number;
  regionSizeWidth: number;
  regionSizeHeight: number;
  regionSizeDepth: number;
  mipMapLevel: number;
  sliceId: number;
}

declare class MTLAccelerationStructureSizes {
  constructor(init?: MTLAccelerationStructureSizes);
  accelerationStructureSize: number;
  buildScratchBufferSize: number;
  refitScratchBufferSize: number;
}

declare class MTLCounterResultStatistic {
  constructor(init?: MTLCounterResultStatistic);
  tessellationInputPatches: number;
  vertexInvocations: number;
  postTessellationVertexInvocations: number;
  clipperInvocations: number;
  clipperPrimitivesOut: number;
  fragmentInvocations: number;
  fragmentsPassed: number;
  computeKernelInvocations: number;
}

declare class MTLCounterResultStageUtilization {
  constructor(init?: MTLCounterResultStageUtilization);
  totalCycles: number;
  vertexCycles: number;
  tessellationCycles: number;
  postTessellationVertexCycles: number;
  fragmentCycles: number;
  renderTargetCycles: number;
}

declare class MTLCounterResultTimestamp {
  constructor(init?: MTLCounterResultTimestamp);
  timestamp: number;
}

declare class MTLSize {
  constructor(init?: MTLSize);
  width: number;
  height: number;
  depth: number;
}

declare class MTLSizeAndAlign {
  constructor(init?: MTLSizeAndAlign);
  size: number;
  align: number;
}

declare class MTLOrigin {
  constructor(init?: MTLOrigin);
  x: number;
  y: number;
  z: number;
}

declare class MTLTextureSwizzleChannels {
  constructor(init?: MTLTextureSwizzleChannels);
  red: interop.Enum<typeof MTLTextureSwizzle>;
  green: interop.Enum<typeof MTLTextureSwizzle>;
  blue: interop.Enum<typeof MTLTextureSwizzle>;
  alpha: interop.Enum<typeof MTLTextureSwizzle>;
}

declare class MTLPackedFloatQuaternion {
  constructor(init?: MTLPackedFloatQuaternion);
  x: number;
  y: number;
  z: number;
  w: number;
}

declare class _MTLAxisAlignedBoundingBox {
  constructor(init?: _MTLAxisAlignedBoundingBox);
  min: _MTLPackedFloat3;
  max: _MTLPackedFloat3;
}

declare class MTLClearColor {
  constructor(init?: MTLClearColor);
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

declare class MTLRegion {
  constructor(init?: MTLRegion);
  origin: MTLOrigin;
  size: MTLSize;
}

declare class MTLAccelerationStructureInstanceDescriptor {
  constructor(init?: MTLAccelerationStructureInstanceDescriptor);
  transformationMatrix: _MTLPackedFloat4x3;
  options: interop.Enum<typeof MTLAccelerationStructureInstanceOptions>;
  mask: number;
  intersectionFunctionTableOffset: number;
  accelerationStructureIndex: number;
}

declare class MTLResourceID {
  constructor(init?: MTLResourceID);
  _impl: number;
}

declare class MTLStageInRegionIndirectArguments {
  constructor(init?: MTLStageInRegionIndirectArguments);
  stageInOrigin: unknown /* const array */;
  stageInSize: unknown /* const array */;
}

declare class MTLIndirectCommandBufferExecutionRange {
  constructor(init?: MTLIndirectCommandBufferExecutionRange);
  location: number;
  length: number;
}

declare class MTLIndirectAccelerationStructureMotionInstanceDescriptor {
  constructor(init?: MTLIndirectAccelerationStructureMotionInstanceDescriptor);
  options: interop.Enum<typeof MTLAccelerationStructureInstanceOptions>;
  mask: number;
  intersectionFunctionTableOffset: number;
  userID: number;
  accelerationStructureID: MTLResourceID;
  motionTransformsStartIndex: number;
  motionTransformsCount: number;
  motionStartBorderMode: interop.Enum<typeof MTLMotionBorderMode>;
  motionEndBorderMode: interop.Enum<typeof MTLMotionBorderMode>;
  motionStartTime: number;
  motionEndTime: number;
}

declare class unnamed_3766296192538489294 {
  constructor(init?: unnamed_3766296192538489294);
  x: number;
  y: number;
  z: number;
}

type unnamed_4280627783610062968Descriptor = 
  | { elements: unknown /* const array */ };

declare class unnamed_4280627783610062968 {
  constructor(init?: unnamed_4280627783610062968Descriptor);
  elements: unknown /* const array */;
}

declare function MTLCreateSystemDefaultDevice(): MTLDevice;

declare function MTLCopyAllDevices(): NSArray;

declare function MTLIOCompressionContextDefaultChunkSize(): number;

declare function MTLIOCreateCompressionContext(path: string, type: interop.Enum<typeof MTLIOCompressionMethod>, chunkSize: number): interop.Pointer;

declare function MTLIOCompressionContextAppendData(context: interop.PointerConvertible, data: interop.PointerConvertible, size: number): void;

declare function MTLIOFlushAndDestroyCompressionContext(context: interop.PointerConvertible): interop.Enum<typeof MTLIOCompressionStatus>;

declare interface MTLIOCommandQueue extends NSObjectProtocol {
  enqueueBarrier(): void;

  commandBuffer(): MTLIOCommandBuffer;

  commandBufferWithUnretainedReferences(): MTLIOCommandBuffer;

  label: string;
}

declare class MTLIOCommandQueue extends NativeObject implements MTLIOCommandQueue {
}

declare interface MTLLogState extends NSObjectProtocol {
  addLogHandler(block: (p1: string, p2: string, p3: interop.Enum<typeof MTLLogLevel>, p4: string) => void | null): void;
}

declare class MTLLogState extends NativeObject implements MTLLogState {
}

declare interface MTLIOScratchBuffer extends NSObjectProtocol {
  readonly buffer: MTLBuffer;
}

declare class MTLIOScratchBuffer extends NativeObject implements MTLIOScratchBuffer {
}

declare interface MTLDynamicLibrary extends NSObjectProtocol {
  label: string;

  readonly device: MTLDevice;

  readonly installName: string;

  serializeToURLError(url: NSURL, error: interop.PointerConvertible): boolean;
}

declare class MTLDynamicLibrary extends NativeObject implements MTLDynamicLibrary {
}

declare interface MTLRasterizationRateMap extends NSObjectProtocol {
  readonly device: MTLDevice;

  readonly label: string;

  readonly screenSize: MTLSize;

  readonly physicalGranularity: MTLSize;

  readonly layerCount: number;

  readonly parameterBufferSizeAndAlign: MTLSizeAndAlign;

  copyParameterDataToBufferOffset(buffer: MTLBuffer, offset: number): void;

  physicalSizeForLayer(layerIndex: number): MTLSize;

  mapScreenToPhysicalCoordinatesForLayer(screenCoordinates: MTLSamplePosition, layerIndex: number): MTLSamplePosition;

  mapPhysicalToScreenCoordinatesForLayer(physicalCoordinates: MTLSamplePosition, layerIndex: number): MTLSamplePosition;
}

declare class MTLRasterizationRateMap extends NativeObject implements MTLRasterizationRateMap {
}

declare interface MTLComputePipelineState extends NSObjectProtocol {
  readonly label: string;

  readonly device: MTLDevice;

  readonly maxTotalThreadsPerThreadgroup: number;

  readonly threadExecutionWidth: number;

  readonly staticThreadgroupMemoryLength: number;

  imageblockMemoryLengthForDimensions(imageblockDimensions: MTLSize): number;

  readonly supportIndirectCommandBuffers: boolean;

  readonly gpuResourceID: MTLResourceID;

  functionHandleWithFunction(function$: MTLFunction): MTLFunctionHandle;

  newComputePipelineStateWithAdditionalBinaryFunctionsError(functions: NSArray<interop.Object> | Array<interop.Object>, error: interop.PointerConvertible): MTLComputePipelineState;

  newVisibleFunctionTableWithDescriptor(descriptor: MTLVisibleFunctionTableDescriptor): MTLVisibleFunctionTable;

  newIntersectionFunctionTableWithDescriptor(descriptor: MTLIntersectionFunctionTableDescriptor): MTLIntersectionFunctionTable;

  readonly shaderValidation: interop.Enum<typeof MTLShaderValidation>;
}

declare class MTLComputePipelineState extends NativeObject implements MTLComputePipelineState {
}

declare interface MTLAccelerationStructureCommandEncoder extends MTLCommandEncoder {
  buildAccelerationStructureDescriptorScratchBufferScratchBufferOffset(accelerationStructure: MTLAccelerationStructure, descriptor: MTLAccelerationStructureDescriptor, scratchBuffer: MTLBuffer, scratchBufferOffset: number): void;

  refitAccelerationStructureDescriptorDestinationScratchBufferScratchBufferOffset(sourceAccelerationStructure: MTLAccelerationStructure, descriptor: MTLAccelerationStructureDescriptor, destinationAccelerationStructure: MTLAccelerationStructure | null, scratchBuffer: MTLBuffer | null, scratchBufferOffset: number): void;

  refitAccelerationStructureDescriptorDestinationScratchBufferScratchBufferOffsetOptions(sourceAccelerationStructure: MTLAccelerationStructure, descriptor: MTLAccelerationStructureDescriptor, destinationAccelerationStructure: MTLAccelerationStructure | null, scratchBuffer: MTLBuffer | null, scratchBufferOffset: number, options: interop.Enum<typeof MTLAccelerationStructureRefitOptions>): void;

  copyAccelerationStructureToAccelerationStructure(sourceAccelerationStructure: MTLAccelerationStructure, destinationAccelerationStructure: MTLAccelerationStructure): void;

  writeCompactedAccelerationStructureSizeToBufferOffset(accelerationStructure: MTLAccelerationStructure, buffer: MTLBuffer, offset: number): void;

  writeCompactedAccelerationStructureSizeToBufferOffsetSizeDataType(accelerationStructure: MTLAccelerationStructure, buffer: MTLBuffer, offset: number, sizeDataType: interop.Enum<typeof MTLDataType>): void;

  copyAndCompactAccelerationStructureToAccelerationStructure(sourceAccelerationStructure: MTLAccelerationStructure, destinationAccelerationStructure: MTLAccelerationStructure): void;

  updateFence(fence: MTLFence): void;

  waitForFence(fence: MTLFence): void;

  useResourceUsage(resource: MTLResource, usage: interop.Enum<typeof MTLResourceUsage>): void;

  useResourcesCountUsage(resources: interop.PointerConvertible, count: number, usage: interop.Enum<typeof MTLResourceUsage>): void;

  useHeap(heap: MTLHeap): void;

  useHeapsCount(heaps: interop.PointerConvertible, count: number): void;

  sampleCountersInBufferAtSampleIndexWithBarrier(sampleBuffer: MTLCounterSampleBuffer, sampleIndex: number, barrier: boolean): void;
}

declare class MTLAccelerationStructureCommandEncoder extends NativeObject implements MTLAccelerationStructureCommandEncoder {
}

declare interface MTLFunctionLog extends NSObjectProtocol {
  readonly type: interop.Enum<typeof MTLFunctionLogType>;

  readonly encoderLabel: string;

  readonly function: MTLFunction;

  readonly debugLocation: MTLFunctionLogDebugLocation;
}

declare class MTLFunctionLog extends NativeObject implements MTLFunctionLog {
}

declare interface MTLIndirectCommandBuffer extends MTLResource {
  readonly size: number;

  readonly gpuResourceID: MTLResourceID;

  resetWithRange(range: _NSRange): void;

  indirectRenderCommandAtIndex(commandIndex: number): MTLIndirectRenderCommand;

  indirectComputeCommandAtIndex(commandIndex: number): MTLIndirectComputeCommand;
}

declare class MTLIndirectCommandBuffer extends NativeObject implements MTLIndirectCommandBuffer {
}

declare interface MTLIndirectComputeCommand extends NSObjectProtocol {
  setComputePipelineState(pipelineState: MTLComputePipelineState): void;

  setKernelBufferOffsetAtIndex(buffer: MTLBuffer, offset: number, index: number): void;

  setKernelBufferOffsetAttributeStrideAtIndex(buffer: MTLBuffer, offset: number, stride: number, index: number): void;

  concurrentDispatchThreadgroupsThreadsPerThreadgroup(threadgroupsPerGrid: MTLSize, threadsPerThreadgroup: MTLSize): void;

  concurrentDispatchThreadsThreadsPerThreadgroup(threadsPerGrid: MTLSize, threadsPerThreadgroup: MTLSize): void;

  setBarrier(): void;

  clearBarrier(): void;

  setImageblockWidthHeight(width: number, height: number): void;

  reset(): void;

  setThreadgroupMemoryLengthAtIndex(length: number, index: number): void;

  setStageInRegion(region: MTLRegion): void;
}

declare class MTLIndirectComputeCommand extends NativeObject implements MTLIndirectComputeCommand {
}

declare interface MTLIndirectRenderCommand extends NSObjectProtocol {
  setRenderPipelineState(pipelineState: MTLRenderPipelineState): void;

  setVertexBufferOffsetAtIndex(buffer: MTLBuffer, offset: number, index: number): void;

  setFragmentBufferOffsetAtIndex(buffer: MTLBuffer, offset: number, index: number): void;

  setVertexBufferOffsetAttributeStrideAtIndex(buffer: MTLBuffer, offset: number, stride: number, index: number): void;

  drawPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetInstanceCountBaseInstanceTessellationFactorBufferTessellationFactorBufferOffsetTessellationFactorBufferInstanceStride(numberOfPatchControlPoints: number, patchStart: number, patchCount: number, patchIndexBuffer: MTLBuffer | null, patchIndexBufferOffset: number, instanceCount: number, baseInstance: number, buffer: MTLBuffer, offset: number, instanceStride: number): void;

  drawIndexedPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetControlPointIndexBufferControlPointIndexBufferOffsetInstanceCountBaseInstanceTessellationFactorBufferTessellationFactorBufferOffsetTessellationFactorBufferInstanceStride(numberOfPatchControlPoints: number, patchStart: number, patchCount: number, patchIndexBuffer: MTLBuffer | null, patchIndexBufferOffset: number, controlPointIndexBuffer: MTLBuffer, controlPointIndexBufferOffset: number, instanceCount: number, baseInstance: number, buffer: MTLBuffer, offset: number, instanceStride: number): void;

  drawPrimitivesVertexStartVertexCountInstanceCountBaseInstance(primitiveType: interop.Enum<typeof MTLPrimitiveType>, vertexStart: number, vertexCount: number, instanceCount: number, baseInstance: number): void;

  drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffsetInstanceCountBaseVertexBaseInstance(primitiveType: interop.Enum<typeof MTLPrimitiveType>, indexCount: number, indexType: interop.Enum<typeof MTLIndexType>, indexBuffer: MTLBuffer, indexBufferOffset: number, instanceCount: number, baseVertex: number, baseInstance: number): void;

  setObjectThreadgroupMemoryLengthAtIndex(length: number, index: number): void;

  setObjectBufferOffsetAtIndex(buffer: MTLBuffer, offset: number, index: number): void;

  setMeshBufferOffsetAtIndex(buffer: MTLBuffer, offset: number, index: number): void;

  drawMeshThreadgroupsThreadsPerObjectThreadgroupThreadsPerMeshThreadgroup(threadgroupsPerGrid: MTLSize, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize): void;

  drawMeshThreadsThreadsPerObjectThreadgroupThreadsPerMeshThreadgroup(threadsPerGrid: MTLSize, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize): void;

  setBarrier(): void;

  clearBarrier(): void;

  reset(): void;
}

declare class MTLIndirectRenderCommand extends NativeObject implements MTLIndirectRenderCommand {
}

declare interface MTLSamplerState extends NSObjectProtocol {
  readonly label: string;

  readonly device: MTLDevice;

  readonly gpuResourceID: MTLResourceID;
}

declare class MTLSamplerState extends NativeObject implements MTLSamplerState {
}

declare interface MTLHeap extends MTLAllocation {
  label: string;

  readonly device: MTLDevice;

  readonly storageMode: interop.Enum<typeof MTLStorageMode>;

  readonly cpuCacheMode: interop.Enum<typeof MTLCPUCacheMode>;

  readonly hazardTrackingMode: interop.Enum<typeof MTLHazardTrackingMode>;

  readonly resourceOptions: interop.Enum<typeof MTLResourceOptions>;

  readonly size: number;

  readonly usedSize: number;

  readonly currentAllocatedSize: number;

  maxAvailableSizeWithAlignment(alignment: number): number;

  newBufferWithLengthOptions(length: number, options: interop.Enum<typeof MTLResourceOptions>): MTLBuffer;

  newTextureWithDescriptor(descriptor: MTLTextureDescriptor): MTLTexture;

  setPurgeableState(state: interop.Enum<typeof MTLPurgeableState>): interop.Enum<typeof MTLPurgeableState>;

  readonly type: interop.Enum<typeof MTLHeapType>;

  newBufferWithLengthOptionsOffset(length: number, options: interop.Enum<typeof MTLResourceOptions>, offset: number): MTLBuffer;

  newTextureWithDescriptorOffset(descriptor: MTLTextureDescriptor, offset: number): MTLTexture;

  newAccelerationStructureWithSize(size: number): MTLAccelerationStructure;

  newAccelerationStructureWithDescriptor(descriptor: MTLAccelerationStructureDescriptor): MTLAccelerationStructure;

  newAccelerationStructureWithSizeOffset(size: number, offset: number): MTLAccelerationStructure;

  newAccelerationStructureWithDescriptorOffset(descriptor: MTLAccelerationStructureDescriptor, offset: number): MTLAccelerationStructure;
}

declare class MTLHeap extends NativeObject implements MTLHeap {
}

declare interface MTLAccelerationStructure extends MTLResource {
  readonly size: number;

  readonly gpuResourceID: MTLResourceID;
}

declare class MTLAccelerationStructure extends NativeObject implements MTLAccelerationStructure {
}

declare interface MTLParallelRenderCommandEncoder extends MTLCommandEncoder {
  renderCommandEncoder(): MTLRenderCommandEncoder;

  setColorStoreActionAtIndex(storeAction: interop.Enum<typeof MTLStoreAction>, colorAttachmentIndex: number): void;

  setDepthStoreAction(storeAction: interop.Enum<typeof MTLStoreAction>): void;

  setStencilStoreAction(storeAction: interop.Enum<typeof MTLStoreAction>): void;

  setColorStoreActionOptionsAtIndex(storeActionOptions: interop.Enum<typeof MTLStoreActionOptions>, colorAttachmentIndex: number): void;

  setDepthStoreActionOptions(storeActionOptions: interop.Enum<typeof MTLStoreActionOptions>): void;

  setStencilStoreActionOptions(storeActionOptions: interop.Enum<typeof MTLStoreActionOptions>): void;
}

declare class MTLParallelRenderCommandEncoder extends NativeObject implements MTLParallelRenderCommandEncoder {
}

declare interface MTLVisibleFunctionTable extends MTLResource {
  readonly gpuResourceID: MTLResourceID;

  setFunctionAtIndex(function$: MTLFunctionHandle | null, index: number): void;

  setFunctionsWithRange(functions: interop.PointerConvertible, range: _NSRange): void;
}

declare class MTLVisibleFunctionTable extends NativeObject implements MTLVisibleFunctionTable {
}

declare interface MTLRenderCommandEncoder extends MTLCommandEncoder {
  setRenderPipelineState(pipelineState: MTLRenderPipelineState): void;

  setVertexBytesLengthAtIndex(bytes: interop.PointerConvertible, length: number, index: number): void;

  setVertexBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setVertexBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  setVertexBufferOffsetAttributeStrideAtIndex(buffer: MTLBuffer | null, offset: number, stride: number, index: number): void;

  setVertexBuffersOffsetsAttributeStridesWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, strides: interop.PointerConvertible, range: _NSRange): void;

  setVertexBytesLengthAttributeStrideAtIndex(bytes: interop.PointerConvertible, length: number, stride: number, index: number): void;

  setVertexTextureAtIndex(texture: MTLTexture | null, index: number): void;

  setVertexTexturesWithRange(textures: interop.PointerConvertible, range: _NSRange): void;

  setVertexSamplerStateAtIndex(sampler: MTLSamplerState | null, index: number): void;

  setVertexSamplerStatesWithRange(samplers: interop.PointerConvertible, range: _NSRange): void;

  setVertexSamplerStateLodMinClampLodMaxClampAtIndex(sampler: MTLSamplerState | null, lodMinClamp: number, lodMaxClamp: number, index: number): void;

  setVertexSamplerStatesLodMinClampsLodMaxClampsWithRange(samplers: interop.PointerConvertible, lodMinClamps: interop.PointerConvertible, lodMaxClamps: interop.PointerConvertible, range: _NSRange): void;

  setVertexVisibleFunctionTableAtBufferIndex(functionTable: MTLVisibleFunctionTable | null, bufferIndex: number): void;

  setVertexVisibleFunctionTablesWithBufferRange(functionTables: interop.PointerConvertible, range: _NSRange): void;

  setVertexIntersectionFunctionTableAtBufferIndex(intersectionFunctionTable: MTLIntersectionFunctionTable | null, bufferIndex: number): void;

  setVertexIntersectionFunctionTablesWithBufferRange(intersectionFunctionTables: interop.PointerConvertible, range: _NSRange): void;

  setVertexAccelerationStructureAtBufferIndex(accelerationStructure: MTLAccelerationStructure | null, bufferIndex: number): void;

  setViewport(viewport: MTLViewport): void;

  setViewportsCount(viewports: interop.PointerConvertible, count: number): void;

  setFrontFacingWinding(frontFacingWinding: interop.Enum<typeof MTLWinding>): void;

  setVertexAmplificationCountViewMappings(count: number, viewMappings: interop.PointerConvertible): void;

  setCullMode(cullMode: interop.Enum<typeof MTLCullMode>): void;

  setDepthClipMode(depthClipMode: interop.Enum<typeof MTLDepthClipMode>): void;

  setDepthBiasSlopeScaleClamp(depthBias: number, slopeScale: number, clamp: number): void;

  setScissorRect(rect: MTLScissorRect): void;

  setScissorRectsCount(scissorRects: interop.PointerConvertible, count: number): void;

  setTriangleFillMode(fillMode: interop.Enum<typeof MTLTriangleFillMode>): void;

  setFragmentBytesLengthAtIndex(bytes: interop.PointerConvertible, length: number, index: number): void;

  setFragmentBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setFragmentBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  setFragmentTextureAtIndex(texture: MTLTexture | null, index: number): void;

  setFragmentTexturesWithRange(textures: interop.PointerConvertible, range: _NSRange): void;

  setFragmentSamplerStateAtIndex(sampler: MTLSamplerState | null, index: number): void;

  setFragmentSamplerStatesWithRange(samplers: interop.PointerConvertible, range: _NSRange): void;

  setFragmentSamplerStateLodMinClampLodMaxClampAtIndex(sampler: MTLSamplerState | null, lodMinClamp: number, lodMaxClamp: number, index: number): void;

  setFragmentSamplerStatesLodMinClampsLodMaxClampsWithRange(samplers: interop.PointerConvertible, lodMinClamps: interop.PointerConvertible, lodMaxClamps: interop.PointerConvertible, range: _NSRange): void;

  setFragmentVisibleFunctionTableAtBufferIndex(functionTable: MTLVisibleFunctionTable | null, bufferIndex: number): void;

  setFragmentVisibleFunctionTablesWithBufferRange(functionTables: interop.PointerConvertible, range: _NSRange): void;

  setFragmentIntersectionFunctionTableAtBufferIndex(intersectionFunctionTable: MTLIntersectionFunctionTable | null, bufferIndex: number): void;

  setFragmentIntersectionFunctionTablesWithBufferRange(intersectionFunctionTables: interop.PointerConvertible, range: _NSRange): void;

  setFragmentAccelerationStructureAtBufferIndex(accelerationStructure: MTLAccelerationStructure | null, bufferIndex: number): void;

  setBlendColorRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): void;

  setDepthStencilState(depthStencilState: MTLDepthStencilState | null): void;

  setStencilReferenceValue(referenceValue: number): void;

  setStencilFrontReferenceValueBackReferenceValue(frontReferenceValue: number, backReferenceValue: number): void;

  setVisibilityResultModeOffset(mode: interop.Enum<typeof MTLVisibilityResultMode>, offset: number): void;

  setColorStoreActionAtIndex(storeAction: interop.Enum<typeof MTLStoreAction>, colorAttachmentIndex: number): void;

  setDepthStoreAction(storeAction: interop.Enum<typeof MTLStoreAction>): void;

  setStencilStoreAction(storeAction: interop.Enum<typeof MTLStoreAction>): void;

  setColorStoreActionOptionsAtIndex(storeActionOptions: interop.Enum<typeof MTLStoreActionOptions>, colorAttachmentIndex: number): void;

  setDepthStoreActionOptions(storeActionOptions: interop.Enum<typeof MTLStoreActionOptions>): void;

  setStencilStoreActionOptions(storeActionOptions: interop.Enum<typeof MTLStoreActionOptions>): void;

  setObjectBytesLengthAtIndex(bytes: interop.PointerConvertible, length: number, index: number): void;

  setObjectBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setObjectBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  setObjectTextureAtIndex(texture: MTLTexture | null, index: number): void;

  setObjectTexturesWithRange(textures: interop.PointerConvertible, range: _NSRange): void;

  setObjectSamplerStateAtIndex(sampler: MTLSamplerState | null, index: number): void;

  setObjectSamplerStatesWithRange(samplers: interop.PointerConvertible, range: _NSRange): void;

  setObjectSamplerStateLodMinClampLodMaxClampAtIndex(sampler: MTLSamplerState | null, lodMinClamp: number, lodMaxClamp: number, index: number): void;

  setObjectSamplerStatesLodMinClampsLodMaxClampsWithRange(samplers: interop.PointerConvertible, lodMinClamps: interop.PointerConvertible, lodMaxClamps: interop.PointerConvertible, range: _NSRange): void;

  setObjectThreadgroupMemoryLengthAtIndex(length: number, index: number): void;

  setMeshBytesLengthAtIndex(bytes: interop.PointerConvertible, length: number, index: number): void;

  setMeshBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setMeshBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  setMeshTextureAtIndex(texture: MTLTexture | null, index: number): void;

  setMeshTexturesWithRange(textures: interop.PointerConvertible, range: _NSRange): void;

  setMeshSamplerStateAtIndex(sampler: MTLSamplerState | null, index: number): void;

  setMeshSamplerStatesWithRange(samplers: interop.PointerConvertible, range: _NSRange): void;

  setMeshSamplerStateLodMinClampLodMaxClampAtIndex(sampler: MTLSamplerState | null, lodMinClamp: number, lodMaxClamp: number, index: number): void;

  setMeshSamplerStatesLodMinClampsLodMaxClampsWithRange(samplers: interop.PointerConvertible, lodMinClamps: interop.PointerConvertible, lodMaxClamps: interop.PointerConvertible, range: _NSRange): void;

  drawMeshThreadgroupsThreadsPerObjectThreadgroupThreadsPerMeshThreadgroup(threadgroupsPerGrid: MTLSize, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize): void;

  drawMeshThreadsThreadsPerObjectThreadgroupThreadsPerMeshThreadgroup(threadsPerGrid: MTLSize, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize): void;

  drawMeshThreadgroupsWithIndirectBufferIndirectBufferOffsetThreadsPerObjectThreadgroupThreadsPerMeshThreadgroup(indirectBuffer: MTLBuffer, indirectBufferOffset: number, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize): void;

  drawPrimitivesVertexStartVertexCountInstanceCount(primitiveType: interop.Enum<typeof MTLPrimitiveType>, vertexStart: number, vertexCount: number, instanceCount: number): void;

  drawPrimitivesVertexStartVertexCount(primitiveType: interop.Enum<typeof MTLPrimitiveType>, vertexStart: number, vertexCount: number): void;

  drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffsetInstanceCount(primitiveType: interop.Enum<typeof MTLPrimitiveType>, indexCount: number, indexType: interop.Enum<typeof MTLIndexType>, indexBuffer: MTLBuffer, indexBufferOffset: number, instanceCount: number): void;

  drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffset(primitiveType: interop.Enum<typeof MTLPrimitiveType>, indexCount: number, indexType: interop.Enum<typeof MTLIndexType>, indexBuffer: MTLBuffer, indexBufferOffset: number): void;

  drawPrimitivesVertexStartVertexCountInstanceCountBaseInstance(primitiveType: interop.Enum<typeof MTLPrimitiveType>, vertexStart: number, vertexCount: number, instanceCount: number, baseInstance: number): void;

  drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffsetInstanceCountBaseVertexBaseInstance(primitiveType: interop.Enum<typeof MTLPrimitiveType>, indexCount: number, indexType: interop.Enum<typeof MTLIndexType>, indexBuffer: MTLBuffer, indexBufferOffset: number, instanceCount: number, baseVertex: number, baseInstance: number): void;

  drawPrimitivesIndirectBufferIndirectBufferOffset(primitiveType: interop.Enum<typeof MTLPrimitiveType>, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

  drawIndexedPrimitivesIndexTypeIndexBufferIndexBufferOffsetIndirectBufferIndirectBufferOffset(primitiveType: interop.Enum<typeof MTLPrimitiveType>, indexType: interop.Enum<typeof MTLIndexType>, indexBuffer: MTLBuffer, indexBufferOffset: number, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

  updateFenceAfterStages(fence: MTLFence, stages: interop.Enum<typeof MTLRenderStages>): void;

  waitForFenceBeforeStages(fence: MTLFence, stages: interop.Enum<typeof MTLRenderStages>): void;

  setTessellationFactorBufferOffsetInstanceStride(buffer: MTLBuffer | null, offset: number, instanceStride: number): void;

  setTessellationFactorScale(scale: number): void;

  drawPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetInstanceCountBaseInstance(numberOfPatchControlPoints: number, patchStart: number, patchCount: number, patchIndexBuffer: MTLBuffer | null, patchIndexBufferOffset: number, instanceCount: number, baseInstance: number): void;

  drawPatchesPatchIndexBufferPatchIndexBufferOffsetIndirectBufferIndirectBufferOffset(numberOfPatchControlPoints: number, patchIndexBuffer: MTLBuffer | null, patchIndexBufferOffset: number, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

  drawIndexedPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetControlPointIndexBufferControlPointIndexBufferOffsetInstanceCountBaseInstance(numberOfPatchControlPoints: number, patchStart: number, patchCount: number, patchIndexBuffer: MTLBuffer | null, patchIndexBufferOffset: number, controlPointIndexBuffer: MTLBuffer, controlPointIndexBufferOffset: number, instanceCount: number, baseInstance: number): void;

  drawIndexedPatchesPatchIndexBufferPatchIndexBufferOffsetControlPointIndexBufferControlPointIndexBufferOffsetIndirectBufferIndirectBufferOffset(numberOfPatchControlPoints: number, patchIndexBuffer: MTLBuffer | null, patchIndexBufferOffset: number, controlPointIndexBuffer: MTLBuffer, controlPointIndexBufferOffset: number, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

  readonly tileWidth: number;

  readonly tileHeight: number;

  setTileBytesLengthAtIndex(bytes: interop.PointerConvertible, length: number, index: number): void;

  setTileBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setTileBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  setTileTextureAtIndex(texture: MTLTexture | null, index: number): void;

  setTileTexturesWithRange(textures: interop.PointerConvertible, range: _NSRange): void;

  setTileSamplerStateAtIndex(sampler: MTLSamplerState | null, index: number): void;

  setTileSamplerStatesWithRange(samplers: interop.PointerConvertible, range: _NSRange): void;

  setTileSamplerStateLodMinClampLodMaxClampAtIndex(sampler: MTLSamplerState | null, lodMinClamp: number, lodMaxClamp: number, index: number): void;

  setTileSamplerStatesLodMinClampsLodMaxClampsWithRange(samplers: interop.PointerConvertible, lodMinClamps: interop.PointerConvertible, lodMaxClamps: interop.PointerConvertible, range: _NSRange): void;

  setTileVisibleFunctionTableAtBufferIndex(functionTable: MTLVisibleFunctionTable | null, bufferIndex: number): void;

  setTileVisibleFunctionTablesWithBufferRange(functionTables: interop.PointerConvertible, range: _NSRange): void;

  setTileIntersectionFunctionTableAtBufferIndex(intersectionFunctionTable: MTLIntersectionFunctionTable | null, bufferIndex: number): void;

  setTileIntersectionFunctionTablesWithBufferRange(intersectionFunctionTables: interop.PointerConvertible, range: _NSRange): void;

  setTileAccelerationStructureAtBufferIndex(accelerationStructure: MTLAccelerationStructure | null, bufferIndex: number): void;

  dispatchThreadsPerTile(threadsPerTile: MTLSize): void;

  setThreadgroupMemoryLengthOffsetAtIndex(length: number, offset: number, index: number): void;

  useResourceUsage(resource: MTLResource, usage: interop.Enum<typeof MTLResourceUsage>): void;

  useResourcesCountUsage(resources: interop.PointerConvertible, count: number, usage: interop.Enum<typeof MTLResourceUsage>): void;

  useResourceUsageStages(resource: MTLResource, usage: interop.Enum<typeof MTLResourceUsage>, stages: interop.Enum<typeof MTLRenderStages>): void;

  useResourcesCountUsageStages(resources: interop.PointerConvertible, count: number, usage: interop.Enum<typeof MTLResourceUsage>, stages: interop.Enum<typeof MTLRenderStages>): void;

  useHeap(heap: MTLHeap): void;

  useHeapsCount(heaps: interop.PointerConvertible, count: number): void;

  useHeapStages(heap: MTLHeap, stages: interop.Enum<typeof MTLRenderStages>): void;

  useHeapsCountStages(heaps: interop.PointerConvertible, count: number, stages: interop.Enum<typeof MTLRenderStages>): void;

  executeCommandsInBufferWithRange(indirectCommandBuffer: MTLIndirectCommandBuffer, executionRange: _NSRange): void;

  executeCommandsInBufferIndirectBufferIndirectBufferOffset(indirectCommandbuffer: MTLIndirectCommandBuffer, indirectRangeBuffer: MTLBuffer, indirectBufferOffset: number): void;

  memoryBarrierWithScopeAfterStagesBeforeStages(scope: interop.Enum<typeof MTLBarrierScope>, after: interop.Enum<typeof MTLRenderStages>, before: interop.Enum<typeof MTLRenderStages>): void;

  memoryBarrierWithResourcesCountAfterStagesBeforeStages(resources: interop.PointerConvertible, count: number, after: interop.Enum<typeof MTLRenderStages>, before: interop.Enum<typeof MTLRenderStages>): void;

  sampleCountersInBufferAtSampleIndexWithBarrier(sampleBuffer: MTLCounterSampleBuffer, sampleIndex: number, barrier: boolean): void;
}

declare class MTLRenderCommandEncoder extends NativeObject implements MTLRenderCommandEncoder {
}

declare interface MTLDepthStencilState extends NSObjectProtocol {
  readonly label: string;

  readonly device: MTLDevice;
}

declare class MTLDepthStencilState extends NativeObject implements MTLDepthStencilState {
}

declare interface MTLBlitCommandEncoder extends MTLCommandEncoder {
  copyFromTextureSourceSliceSourceLevelSourceOriginSourceSizeToTextureDestinationSliceDestinationLevelDestinationOrigin(sourceTexture: MTLTexture, sourceSlice: number, sourceLevel: number, sourceOrigin: MTLOrigin, sourceSize: MTLSize, destinationTexture: MTLTexture, destinationSlice: number, destinationLevel: number, destinationOrigin: MTLOrigin): void;

  copyFromBufferSourceOffsetSourceBytesPerRowSourceBytesPerImageSourceSizeToTextureDestinationSliceDestinationLevelDestinationOrigin(sourceBuffer: MTLBuffer, sourceOffset: number, sourceBytesPerRow: number, sourceBytesPerImage: number, sourceSize: MTLSize, destinationTexture: MTLTexture, destinationSlice: number, destinationLevel: number, destinationOrigin: MTLOrigin): void;

  copyFromBufferSourceOffsetSourceBytesPerRowSourceBytesPerImageSourceSizeToTextureDestinationSliceDestinationLevelDestinationOriginOptions(sourceBuffer: MTLBuffer, sourceOffset: number, sourceBytesPerRow: number, sourceBytesPerImage: number, sourceSize: MTLSize, destinationTexture: MTLTexture, destinationSlice: number, destinationLevel: number, destinationOrigin: MTLOrigin, options: interop.Enum<typeof MTLBlitOption>): void;

  copyFromTextureSourceSliceSourceLevelSourceOriginSourceSizeToBufferDestinationOffsetDestinationBytesPerRowDestinationBytesPerImage(sourceTexture: MTLTexture, sourceSlice: number, sourceLevel: number, sourceOrigin: MTLOrigin, sourceSize: MTLSize, destinationBuffer: MTLBuffer, destinationOffset: number, destinationBytesPerRow: number, destinationBytesPerImage: number): void;

  copyFromTextureSourceSliceSourceLevelSourceOriginSourceSizeToBufferDestinationOffsetDestinationBytesPerRowDestinationBytesPerImageOptions(sourceTexture: MTLTexture, sourceSlice: number, sourceLevel: number, sourceOrigin: MTLOrigin, sourceSize: MTLSize, destinationBuffer: MTLBuffer, destinationOffset: number, destinationBytesPerRow: number, destinationBytesPerImage: number, options: interop.Enum<typeof MTLBlitOption>): void;

  generateMipmapsForTexture(texture: MTLTexture): void;

  fillBufferRangeValue(buffer: MTLBuffer, range: _NSRange, value: number): void;

  copyFromTextureSourceSliceSourceLevelToTextureDestinationSliceDestinationLevelSliceCountLevelCount(sourceTexture: MTLTexture, sourceSlice: number, sourceLevel: number, destinationTexture: MTLTexture, destinationSlice: number, destinationLevel: number, sliceCount: number, levelCount: number): void;

  copyFromTextureToTexture(sourceTexture: MTLTexture, destinationTexture: MTLTexture): void;

  copyFromBufferSourceOffsetToBufferDestinationOffsetSize(sourceBuffer: MTLBuffer, sourceOffset: number, destinationBuffer: MTLBuffer, destinationOffset: number, size: number): void;

  updateFence(fence: MTLFence): void;

  waitForFence(fence: MTLFence): void;

  getTextureAccessCountersRegionMipLevelSliceResetCountersCountersBufferCountersBufferOffset(texture: MTLTexture, region: MTLRegion, mipLevel: number, slice: number, resetCounters: boolean, countersBuffer: MTLBuffer, countersBufferOffset: number): void;

  resetTextureAccessCountersRegionMipLevelSlice(texture: MTLTexture, region: MTLRegion, mipLevel: number, slice: number): void;

  optimizeContentsForGPUAccess(texture: MTLTexture): void;

  optimizeContentsForGPUAccessSliceLevel(texture: MTLTexture, slice: number, level: number): void;

  optimizeContentsForCPUAccess(texture: MTLTexture): void;

  optimizeContentsForCPUAccessSliceLevel(texture: MTLTexture, slice: number, level: number): void;

  resetCommandsInBufferWithRange(buffer: MTLIndirectCommandBuffer, range: _NSRange): void;

  copyIndirectCommandBufferSourceRangeDestinationDestinationIndex(source: MTLIndirectCommandBuffer, sourceRange: _NSRange, destination: MTLIndirectCommandBuffer, destinationIndex: number): void;

  optimizeIndirectCommandBufferWithRange(indirectCommandBuffer: MTLIndirectCommandBuffer, range: _NSRange): void;

  sampleCountersInBufferAtSampleIndexWithBarrier(sampleBuffer: MTLCounterSampleBuffer, sampleIndex: number, barrier: boolean): void;

  resolveCountersInRangeDestinationBufferDestinationOffset(sampleBuffer: MTLCounterSampleBuffer, range: _NSRange, destinationBuffer: MTLBuffer, destinationOffset: number): void;
}

declare class MTLBlitCommandEncoder extends NativeObject implements MTLBlitCommandEncoder {
}

declare interface MTLCommandQueue extends NSObjectProtocol {
  label: string;

  readonly device: MTLDevice;

  commandBuffer(): MTLCommandBuffer;

  commandBufferWithDescriptor(descriptor: MTLCommandBufferDescriptor): MTLCommandBuffer;

  commandBufferWithUnretainedReferences(): MTLCommandBuffer;

  insertDebugCaptureBoundary(): void;

  addResidencySet(residencySet: MTLResidencySet): void;

  addResidencySetsCount(residencySets: interop.PointerConvertible, count: number): void;

  removeResidencySet(residencySet: MTLResidencySet): void;

  removeResidencySetsCount(residencySets: interop.PointerConvertible, count: number): void;
}

declare class MTLCommandQueue extends NativeObject implements MTLCommandQueue {
}

declare interface MTLCommandBufferEncoderInfo extends NSObjectProtocol {
  readonly label: string;

  readonly debugSignposts: NSArray;

  readonly errorState: interop.Enum<typeof MTLCommandEncoderErrorState>;
}

declare class MTLCommandBufferEncoderInfo extends NativeObject implements MTLCommandBufferEncoderInfo {
}

declare interface MTLResourceStateCommandEncoder extends MTLCommandEncoder {
  updateTextureMappingsModeRegionsMipLevelsSlicesNumRegions(texture: MTLTexture, mode: interop.Enum<typeof MTLSparseTextureMappingMode>, regions: interop.PointerConvertible, mipLevels: interop.PointerConvertible, slices: interop.PointerConvertible, numRegions: number): void;

  updateTextureMappingModeRegionMipLevelSlice(texture: MTLTexture, mode: interop.Enum<typeof MTLSparseTextureMappingMode>, region: MTLRegion, mipLevel: number, slice: number): void;

  updateTextureMappingModeIndirectBufferIndirectBufferOffset(texture: MTLTexture, mode: interop.Enum<typeof MTLSparseTextureMappingMode>, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

  updateFence(fence: MTLFence): void;

  waitForFence(fence: MTLFence): void;

  moveTextureMappingsFromTextureSourceSliceSourceLevelSourceOriginSourceSizeToTextureDestinationSliceDestinationLevelDestinationOrigin(sourceTexture: MTLTexture, sourceSlice: number, sourceLevel: number, sourceOrigin: MTLOrigin, sourceSize: MTLSize, destinationTexture: MTLTexture, destinationSlice: number, destinationLevel: number, destinationOrigin: MTLOrigin): void;
}

declare class MTLResourceStateCommandEncoder extends NativeObject implements MTLResourceStateCommandEncoder {
}

declare interface MTLCounterSet extends NSObjectProtocol {
  readonly name: string;

  readonly counters: NSArray;
}

declare class MTLCounterSet extends NativeObject implements MTLCounterSet {
}

declare interface MTLCounter extends NSObjectProtocol {
  readonly name: string;
}

declare class MTLCounter extends NativeObject implements MTLCounter {
}

declare interface MTLIOCommandBuffer extends NSObjectProtocol {
  addCompletedHandler(block: (p1: MTLIOCommandBuffer) => void): void;

  loadBytesSizeSourceHandleSourceHandleOffset(pointer: interop.PointerConvertible, size: number, sourceHandle: MTLIOFileHandle, sourceHandleOffset: number): void;

  loadBufferOffsetSizeSourceHandleSourceHandleOffset(buffer: MTLBuffer, offset: number, size: number, sourceHandle: MTLIOFileHandle, sourceHandleOffset: number): void;

  loadTextureSliceLevelSizeSourceBytesPerRowSourceBytesPerImageDestinationOriginSourceHandleSourceHandleOffset(texture: MTLTexture, slice: number, level: number, size: MTLSize, sourceBytesPerRow: number, sourceBytesPerImage: number, destinationOrigin: MTLOrigin, sourceHandle: MTLIOFileHandle, sourceHandleOffset: number): void;

  copyStatusToBufferOffset(buffer: MTLBuffer, offset: number): void;

  commit(): void;

  waitUntilCompleted(): void;

  tryCancel(): void;

  addBarrier(): void;

  pushDebugGroup(string: string): void;

  popDebugGroup(): void;

  enqueue(): void;

  waitForEventValue(event: MTLSharedEvent, value: number): void;

  signalEventValue(event: MTLSharedEvent, value: number): void;

  label: string;

  readonly status: interop.Enum<typeof MTLIOStatus>;

  readonly error: NSError;
}

declare class MTLIOCommandBuffer extends NativeObject implements MTLIOCommandBuffer {
}

declare interface MTLFunction extends NSObjectProtocol {
  label: string;

  readonly device: MTLDevice;

  readonly functionType: interop.Enum<typeof MTLFunctionType>;

  readonly patchType: interop.Enum<typeof MTLPatchType>;

  readonly patchControlPointCount: number;

  readonly vertexAttributes: NSArray;

  readonly stageInputAttributes: NSArray;

  readonly name: string;

  readonly functionConstantsDictionary: NSDictionary;

  newArgumentEncoderWithBufferIndex(bufferIndex: number): MTLArgumentEncoder;

  newArgumentEncoderWithBufferIndexReflection(bufferIndex: number, reflection: interop.PointerConvertible): MTLArgumentEncoder;

  readonly options: interop.Enum<typeof MTLFunctionOptions>;
}

declare class MTLFunction extends NativeObject implements MTLFunction {
}

declare interface MTLTextureBinding extends MTLBinding {
  readonly textureType: interop.Enum<typeof MTLTextureType>;

  readonly textureDataType: interop.Enum<typeof MTLDataType>;

  readonly isDepthTexture: boolean;

  readonly arrayLength: number;
}

declare class MTLTextureBinding extends NativeObject implements MTLTextureBinding {
}

declare interface MTLThreadgroupBinding extends MTLBinding {
  readonly threadgroupMemoryAlignment: number;

  readonly threadgroupMemoryDataSize: number;
}

declare class MTLThreadgroupBinding extends NativeObject implements MTLThreadgroupBinding {
}

declare interface MTLBufferBinding extends MTLBinding {
  readonly bufferAlignment: number;

  readonly bufferDataSize: number;

  readonly bufferDataType: interop.Enum<typeof MTLDataType>;

  readonly bufferStructType: MTLStructType;

  readonly bufferPointerType: MTLPointerType;
}

declare class MTLBufferBinding extends NativeObject implements MTLBufferBinding {
}

declare interface MTLDevice extends NSObjectProtocol {
  readonly name: string;

  readonly registryID: number;

  readonly architecture: MTLArchitecture;

  readonly maxThreadsPerThreadgroup: MTLSize;

  readonly hasUnifiedMemory: boolean;

  readonly recommendedMaxWorkingSetSize: number;

  readonly readWriteTextureSupport: interop.Enum<typeof MTLReadWriteTextureTier>;

  readonly argumentBuffersSupport: interop.Enum<typeof MTLArgumentBuffersTier>;

  readonly areRasterOrderGroupsSupported: boolean;

  readonly supports32BitFloatFiltering: boolean;

  readonly supports32BitMSAA: boolean;

  readonly supportsQueryTextureLOD: boolean;

  readonly supportsBCTextureCompression: boolean;

  readonly supportsPullModelInterpolation: boolean;

  readonly areBarycentricCoordsSupported: boolean;

  readonly supportsShaderBarycentricCoordinates: boolean;

  readonly currentAllocatedSize: number;

  newLogStateWithDescriptorError(descriptor: MTLLogStateDescriptor, error: interop.PointerConvertible): MTLLogState;

  newCommandQueue(): MTLCommandQueue;

  newCommandQueueWithMaxCommandBufferCount(maxCommandBufferCount: number): MTLCommandQueue;

  newCommandQueueWithDescriptor(descriptor: MTLCommandQueueDescriptor): MTLCommandQueue;

  heapTextureSizeAndAlignWithDescriptor(desc: MTLTextureDescriptor): MTLSizeAndAlign;

  heapBufferSizeAndAlignWithLengthOptions(length: number, options: interop.Enum<typeof MTLResourceOptions>): MTLSizeAndAlign;

  newHeapWithDescriptor(descriptor: MTLHeapDescriptor): MTLHeap;

  newBufferWithLengthOptions(length: number, options: interop.Enum<typeof MTLResourceOptions>): MTLBuffer;

  newBufferWithBytesLengthOptions(pointer: interop.PointerConvertible, length: number, options: interop.Enum<typeof MTLResourceOptions>): MTLBuffer;

  newBufferWithBytesNoCopyLengthOptionsDeallocator(pointer: interop.PointerConvertible, length: number, options: interop.Enum<typeof MTLResourceOptions>, deallocator: (p1: interop.PointerConvertible, p2: number) => void | null): MTLBuffer;

  newDepthStencilStateWithDescriptor(descriptor: MTLDepthStencilDescriptor): MTLDepthStencilState;

  newTextureWithDescriptor(descriptor: MTLTextureDescriptor): MTLTexture;

  newTextureWithDescriptorIosurfacePlane(descriptor: MTLTextureDescriptor, iosurface: interop.PointerConvertible, plane: number): MTLTexture;

  newSharedTextureWithDescriptor(descriptor: MTLTextureDescriptor): MTLTexture;

  newSharedTextureWithHandle(sharedHandle: MTLSharedTextureHandle): MTLTexture;

  newSamplerStateWithDescriptor(descriptor: MTLSamplerDescriptor): MTLSamplerState;

  newDefaultLibrary(): MTLLibrary;

  newDefaultLibraryWithBundleError(bundle: NSBundle, error: interop.PointerConvertible): MTLLibrary;

  newLibraryWithFileError(filepath: string, error: interop.PointerConvertible): MTLLibrary;

  newLibraryWithURLError(url: NSURL, error: interop.PointerConvertible): MTLLibrary;

  newLibraryWithDataError(data: NSObject, error: interop.PointerConvertible): MTLLibrary;

  newLibraryWithSourceOptionsError(source: string, options: MTLCompileOptions | null, error: interop.PointerConvertible): MTLLibrary;

  newLibraryWithSourceOptionsCompletionHandler(source: string, options: MTLCompileOptions | null, completionHandler: (p1: MTLLibrary, p2: NSError) => void): void;

  newLibraryWithStitchedDescriptorError(descriptor: MTLStitchedLibraryDescriptor, error: interop.PointerConvertible): MTLLibrary;

  newLibraryWithStitchedDescriptorCompletionHandler(descriptor: MTLStitchedLibraryDescriptor, completionHandler: (p1: MTLLibrary, p2: NSError) => void): void;

  newRenderPipelineStateWithDescriptorError(descriptor: MTLRenderPipelineDescriptor, error: interop.PointerConvertible): MTLRenderPipelineState;

  newRenderPipelineStateWithDescriptorOptionsReflectionError(descriptor: MTLRenderPipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, reflection: interop.PointerConvertible, error: interop.PointerConvertible): MTLRenderPipelineState;

  newRenderPipelineStateWithDescriptorCompletionHandler(descriptor: MTLRenderPipelineDescriptor, completionHandler: (p1: MTLRenderPipelineState, p2: NSError) => void): void;

  newRenderPipelineStateWithDescriptorOptionsCompletionHandler(descriptor: MTLRenderPipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, completionHandler: (p1: MTLRenderPipelineState, p2: MTLRenderPipelineReflection, p3: NSError) => void): void;

  newComputePipelineStateWithFunctionError(computeFunction: MTLFunction, error: interop.PointerConvertible): MTLComputePipelineState;

  newComputePipelineStateWithFunctionOptionsReflectionError(computeFunction: MTLFunction, options: interop.Enum<typeof MTLPipelineOption>, reflection: interop.PointerConvertible, error: interop.PointerConvertible): MTLComputePipelineState;

  newComputePipelineStateWithFunctionCompletionHandler(computeFunction: MTLFunction, completionHandler: (p1: MTLComputePipelineState, p2: NSError) => void): void;

  newComputePipelineStateWithFunctionOptionsCompletionHandler(computeFunction: MTLFunction, options: interop.Enum<typeof MTLPipelineOption>, completionHandler: (p1: MTLComputePipelineState, p2: MTLComputePipelineReflection, p3: NSError) => void): void;

  newComputePipelineStateWithDescriptorOptionsReflectionError(descriptor: MTLComputePipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, reflection: interop.PointerConvertible, error: interop.PointerConvertible): MTLComputePipelineState;

  newComputePipelineStateWithDescriptorOptionsCompletionHandler(descriptor: MTLComputePipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, completionHandler: (p1: MTLComputePipelineState, p2: MTLComputePipelineReflection, p3: NSError) => void): void;

  newFence(): MTLFence;

  supportsFeatureSet(featureSet: interop.Enum<typeof MTLFeatureSet>): boolean;

  supportsFamily(gpuFamily: interop.Enum<typeof MTLGPUFamily>): boolean;

  supportsTextureSampleCount(sampleCount: number): boolean;

  minimumLinearTextureAlignmentForPixelFormat(format: interop.Enum<typeof MTLPixelFormat>): number;

  minimumTextureBufferAlignmentForPixelFormat(format: interop.Enum<typeof MTLPixelFormat>): number;

  newRenderPipelineStateWithTileDescriptorOptionsReflectionError(descriptor: MTLTileRenderPipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, reflection: interop.PointerConvertible, error: interop.PointerConvertible): MTLRenderPipelineState;

  newRenderPipelineStateWithTileDescriptorOptionsCompletionHandler(descriptor: MTLTileRenderPipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, completionHandler: (p1: MTLRenderPipelineState, p2: MTLRenderPipelineReflection, p3: NSError) => void): void;

  newRenderPipelineStateWithMeshDescriptorOptionsReflectionError(descriptor: MTLMeshRenderPipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, reflection: interop.PointerConvertible, error: interop.PointerConvertible): MTLRenderPipelineState;

  newRenderPipelineStateWithMeshDescriptorOptionsCompletionHandler(descriptor: MTLMeshRenderPipelineDescriptor, options: interop.Enum<typeof MTLPipelineOption>, completionHandler: (p1: MTLRenderPipelineState, p2: MTLRenderPipelineReflection, p3: NSError) => void): void;

  readonly maxThreadgroupMemoryLength: number;

  readonly maxArgumentBufferSamplerCount: number;

  readonly areProgrammableSamplePositionsSupported: boolean;

  getDefaultSamplePositionsCount(positions: interop.PointerConvertible, count: number): void;

  newArgumentEncoderWithArguments(arguments$: NSArray<interop.Object> | Array<interop.Object>): MTLArgumentEncoder;

  supportsRasterizationRateMapWithLayerCount(layerCount: number): boolean;

  newRasterizationRateMapWithDescriptor(descriptor: MTLRasterizationRateMapDescriptor): MTLRasterizationRateMap;

  newIndirectCommandBufferWithDescriptorMaxCommandCountOptions(descriptor: MTLIndirectCommandBufferDescriptor, maxCount: number, options: interop.Enum<typeof MTLResourceOptions>): MTLIndirectCommandBuffer;

  newEvent(): MTLEvent;

  newSharedEvent(): MTLSharedEvent;

  newSharedEventWithHandle(sharedEventHandle: MTLSharedEventHandle): MTLSharedEvent;

  newIOHandleWithURLError(url: NSURL, error: interop.PointerConvertible): MTLIOFileHandle;

  newIOCommandQueueWithDescriptorError(descriptor: MTLIOCommandQueueDescriptor, error: interop.PointerConvertible): MTLIOCommandQueue;

  newIOHandleWithURLCompressionMethodError(url: NSURL, compressionMethod: interop.Enum<typeof MTLIOCompressionMethod>, error: interop.PointerConvertible): MTLIOFileHandle;

  newIOFileHandleWithURLError(url: NSURL, error: interop.PointerConvertible): MTLIOFileHandle;

  newIOFileHandleWithURLCompressionMethodError(url: NSURL, compressionMethod: interop.Enum<typeof MTLIOCompressionMethod>, error: interop.PointerConvertible): MTLIOFileHandle;

  sparseTileSizeWithTextureTypePixelFormatSampleCount(textureType: interop.Enum<typeof MTLTextureType>, pixelFormat: interop.Enum<typeof MTLPixelFormat>, sampleCount: number): MTLSize;

  readonly sparseTileSizeInBytes: number;

  convertSparsePixelRegionsToTileRegionsWithTileSizeAlignmentModeNumRegions?(pixelRegions: interop.PointerConvertible, tileRegions: interop.PointerConvertible, tileSize: MTLSize, mode: interop.Enum<typeof MTLSparseTextureRegionAlignmentMode>, numRegions: number): void;

  convertSparseTileRegionsToPixelRegionsWithTileSizeNumRegions?(tileRegions: interop.PointerConvertible, pixelRegions: interop.PointerConvertible, tileSize: MTLSize, numRegions: number): void;

  sparseTileSizeInBytesForSparsePageSize(sparsePageSize: interop.Enum<typeof MTLSparsePageSize>): number;

  sparseTileSizeWithTextureTypePixelFormatSampleCountSparsePageSize(textureType: interop.Enum<typeof MTLTextureType>, pixelFormat: interop.Enum<typeof MTLPixelFormat>, sampleCount: number, sparsePageSize: interop.Enum<typeof MTLSparsePageSize>): MTLSize;

  readonly maxBufferLength: number;

  readonly counterSets: NSArray;

  newCounterSampleBufferWithDescriptorError(descriptor: MTLCounterSampleBufferDescriptor, error: interop.PointerConvertible): MTLCounterSampleBuffer;

  sampleTimestampsGpuTimestamp(cpuTimestamp: interop.PointerConvertible, gpuTimestamp: interop.PointerConvertible): void;

  newArgumentEncoderWithBufferBinding(bufferBinding: MTLBufferBinding): MTLArgumentEncoder;

  supportsCounterSampling(samplingPoint: interop.Enum<typeof MTLCounterSamplingPoint>): boolean;

  supportsVertexAmplificationCount(count: number): boolean;

  readonly supportsDynamicLibraries: boolean;

  readonly supportsRenderDynamicLibraries: boolean;

  newDynamicLibraryError(library: MTLLibrary, error: interop.PointerConvertible): MTLDynamicLibrary;

  newDynamicLibraryWithURLError(url: NSURL, error: interop.PointerConvertible): MTLDynamicLibrary;

  newBinaryArchiveWithDescriptorError(descriptor: MTLBinaryArchiveDescriptor, error: interop.PointerConvertible): MTLBinaryArchive;

  readonly supportsRaytracing: boolean;

  accelerationStructureSizesWithDescriptor(descriptor: MTLAccelerationStructureDescriptor): MTLAccelerationStructureSizes;

  newAccelerationStructureWithSize(size: number): MTLAccelerationStructure;

  newAccelerationStructureWithDescriptor(descriptor: MTLAccelerationStructureDescriptor): MTLAccelerationStructure;

  heapAccelerationStructureSizeAndAlignWithSize(size: number): MTLSizeAndAlign;

  heapAccelerationStructureSizeAndAlignWithDescriptor(descriptor: MTLAccelerationStructureDescriptor): MTLSizeAndAlign;

  readonly supportsFunctionPointers: boolean;

  readonly supportsFunctionPointersFromRender: boolean;

  readonly supportsRaytracingFromRender: boolean;

  readonly supportsPrimitiveMotionBlur: boolean;

  newResidencySetWithDescriptorError(desc: MTLResidencySetDescriptor, error: interop.PointerConvertible): MTLResidencySet;
}

declare class MTLDevice extends NativeObject implements MTLDevice {
}

declare interface MTLBuffer extends MTLResource {
  readonly length: number;

  contents(): interop.Pointer;

  newTextureWithDescriptorOffsetBytesPerRow(descriptor: MTLTextureDescriptor, offset: number, bytesPerRow: number): MTLTexture;

  addDebugMarkerRange(marker: string, range: _NSRange): void;

  removeAllDebugMarkers(): void;

  readonly gpuAddress: number;
}

declare class MTLBuffer extends NativeObject implements MTLBuffer {
}

declare interface MTLResource extends MTLAllocation {
  label: string;

  readonly device: MTLDevice;

  readonly cpuCacheMode: interop.Enum<typeof MTLCPUCacheMode>;

  readonly storageMode: interop.Enum<typeof MTLStorageMode>;

  readonly hazardTrackingMode: interop.Enum<typeof MTLHazardTrackingMode>;

  readonly resourceOptions: interop.Enum<typeof MTLResourceOptions>;

  setPurgeableState(state: interop.Enum<typeof MTLPurgeableState>): interop.Enum<typeof MTLPurgeableState>;

  readonly heap: MTLHeap;

  readonly heapOffset: number;

  readonly allocatedSize: number;

  makeAliasable(): void;

  isAliasable(): boolean;

  setOwnerWithIdentity(task_id_token: number): number;
}

declare class MTLResource extends NativeObject implements MTLResource {
}

declare interface MTLObjectPayloadBinding extends MTLBinding {
  readonly objectPayloadAlignment: number;

  readonly objectPayloadDataSize: number;
}

declare class MTLObjectPayloadBinding extends NativeObject implements MTLObjectPayloadBinding {
}

declare interface MTLAllocation extends NSObjectProtocol {
  readonly allocatedSize: number;
}

declare class MTLAllocation extends NativeObject implements MTLAllocation {
}

declare interface MTLCommandEncoder extends NSObjectProtocol {
  readonly device: MTLDevice;

  label: string;

  endEncoding(): void;

  insertDebugSignpost(string: string): void;

  pushDebugGroup(string: string): void;

  popDebugGroup(): void;
}

declare class MTLCommandEncoder extends NativeObject implements MTLCommandEncoder {
}

declare interface MTLFunctionStitchingAttribute extends NSObjectProtocol {
}

declare class MTLFunctionStitchingAttribute extends NativeObject implements MTLFunctionStitchingAttribute {
}

declare interface MTLComputeCommandEncoder extends MTLCommandEncoder {
  readonly dispatchType: interop.Enum<typeof MTLDispatchType>;

  setComputePipelineState(state: MTLComputePipelineState): void;

  setBytesLengthAtIndex(bytes: interop.PointerConvertible, length: number, index: number): void;

  setBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  setBufferOffsetAttributeStrideAtIndex(buffer: MTLBuffer, offset: number, stride: number, index: number): void;

  setBuffersOffsetsAttributeStridesWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, strides: interop.PointerConvertible, range: _NSRange): void;

  setBytesLengthAttributeStrideAtIndex(bytes: interop.PointerConvertible, length: number, stride: number, index: number): void;

  setVisibleFunctionTableAtBufferIndex(visibleFunctionTable: MTLVisibleFunctionTable | null, bufferIndex: number): void;

  setVisibleFunctionTablesWithBufferRange(visibleFunctionTables: interop.PointerConvertible, range: _NSRange): void;

  setIntersectionFunctionTableAtBufferIndex(intersectionFunctionTable: MTLIntersectionFunctionTable | null, bufferIndex: number): void;

  setIntersectionFunctionTablesWithBufferRange(intersectionFunctionTables: interop.PointerConvertible, range: _NSRange): void;

  setAccelerationStructureAtBufferIndex(accelerationStructure: MTLAccelerationStructure | null, bufferIndex: number): void;

  setTextureAtIndex(texture: MTLTexture | null, index: number): void;

  setTexturesWithRange(textures: interop.PointerConvertible, range: _NSRange): void;

  setSamplerStateAtIndex(sampler: MTLSamplerState | null, index: number): void;

  setSamplerStatesWithRange(samplers: interop.PointerConvertible, range: _NSRange): void;

  setSamplerStateLodMinClampLodMaxClampAtIndex(sampler: MTLSamplerState | null, lodMinClamp: number, lodMaxClamp: number, index: number): void;

  setSamplerStatesLodMinClampsLodMaxClampsWithRange(samplers: interop.PointerConvertible, lodMinClamps: interop.PointerConvertible, lodMaxClamps: interop.PointerConvertible, range: _NSRange): void;

  setThreadgroupMemoryLengthAtIndex(length: number, index: number): void;

  setImageblockWidthHeight(width: number, height: number): void;

  setStageInRegion(region: MTLRegion): void;

  setStageInRegionWithIndirectBufferIndirectBufferOffset(indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

  dispatchThreadgroupsThreadsPerThreadgroup(threadgroupsPerGrid: MTLSize, threadsPerThreadgroup: MTLSize): void;

  dispatchThreadgroupsWithIndirectBufferIndirectBufferOffsetThreadsPerThreadgroup(indirectBuffer: MTLBuffer, indirectBufferOffset: number, threadsPerThreadgroup: MTLSize): void;

  dispatchThreadsThreadsPerThreadgroup(threadsPerGrid: MTLSize, threadsPerThreadgroup: MTLSize): void;

  updateFence(fence: MTLFence): void;

  waitForFence(fence: MTLFence): void;

  useResourceUsage(resource: MTLResource, usage: interop.Enum<typeof MTLResourceUsage>): void;

  useResourcesCountUsage(resources: interop.PointerConvertible, count: number, usage: interop.Enum<typeof MTLResourceUsage>): void;

  useHeap(heap: MTLHeap): void;

  useHeapsCount(heaps: interop.PointerConvertible, count: number): void;

  executeCommandsInBufferWithRange(indirectCommandBuffer: MTLIndirectCommandBuffer, executionRange: _NSRange): void;

  executeCommandsInBufferIndirectBufferIndirectBufferOffset(indirectCommandbuffer: MTLIndirectCommandBuffer, indirectRangeBuffer: MTLBuffer, indirectBufferOffset: number): void;

  memoryBarrierWithScope(scope: interop.Enum<typeof MTLBarrierScope>): void;

  memoryBarrierWithResourcesCount(resources: interop.PointerConvertible, count: number): void;

  sampleCountersInBufferAtSampleIndexWithBarrier(sampleBuffer: MTLCounterSampleBuffer, sampleIndex: number, barrier: boolean): void;
}

declare class MTLComputeCommandEncoder extends NativeObject implements MTLComputeCommandEncoder {
}

declare interface MTLLogContainer extends NSObjectProtocol, NSFastEnumeration {
}

declare class MTLLogContainer extends NativeObject implements MTLLogContainer {
}

declare interface MTLTexture extends MTLResource {
  readonly rootResource: MTLResource;

  readonly parentTexture: MTLTexture;

  readonly parentRelativeLevel: number;

  readonly parentRelativeSlice: number;

  readonly buffer: MTLBuffer;

  readonly bufferOffset: number;

  readonly bufferBytesPerRow: number;

  readonly iosurface: interop.Pointer;

  readonly iosurfacePlane: number;

  readonly textureType: interop.Enum<typeof MTLTextureType>;

  readonly pixelFormat: interop.Enum<typeof MTLPixelFormat>;

  readonly width: number;

  readonly height: number;

  readonly depth: number;

  readonly mipmapLevelCount: number;

  readonly sampleCount: number;

  readonly arrayLength: number;

  readonly usage: interop.Enum<typeof MTLTextureUsage>;

  readonly isShareable: boolean;

  readonly isFramebufferOnly: boolean;

  readonly firstMipmapInTail: number;

  readonly tailSizeInBytes: number;

  readonly isSparse: boolean;

  readonly allowGPUOptimizedContents: boolean;

  readonly compressionType: interop.Enum<typeof MTLTextureCompressionType>;

  readonly gpuResourceID: MTLResourceID;

  getBytesBytesPerRowBytesPerImageFromRegionMipmapLevelSlice(pixelBytes: interop.PointerConvertible, bytesPerRow: number, bytesPerImage: number, region: MTLRegion, level: number, slice: number): void;

  replaceRegionMipmapLevelSliceWithBytesBytesPerRowBytesPerImage(region: MTLRegion, level: number, slice: number, pixelBytes: interop.PointerConvertible, bytesPerRow: number, bytesPerImage: number): void;

  getBytesBytesPerRowFromRegionMipmapLevel(pixelBytes: interop.PointerConvertible, bytesPerRow: number, region: MTLRegion, level: number): void;

  replaceRegionMipmapLevelWithBytesBytesPerRow(region: MTLRegion, level: number, pixelBytes: interop.PointerConvertible, bytesPerRow: number): void;

  newTextureViewWithPixelFormat(pixelFormat: interop.Enum<typeof MTLPixelFormat>): MTLTexture;

  newTextureViewWithPixelFormatTextureTypeLevelsSlices(pixelFormat: interop.Enum<typeof MTLPixelFormat>, textureType: interop.Enum<typeof MTLTextureType>, levelRange: _NSRange, sliceRange: _NSRange): MTLTexture;

  newSharedTextureHandle(): MTLSharedTextureHandle;

  readonly swizzle: MTLTextureSwizzleChannels;

  newTextureViewWithPixelFormatTextureTypeLevelsSlicesSwizzle(pixelFormat: interop.Enum<typeof MTLPixelFormat>, textureType: interop.Enum<typeof MTLTextureType>, levelRange: _NSRange, sliceRange: _NSRange, swizzle: MTLTextureSwizzleChannels): MTLTexture;
}

declare class MTLTexture extends NativeObject implements MTLTexture {
}

declare interface MTLBinaryArchive extends NSObjectProtocol {
  label: string;

  readonly device: MTLDevice;

  addComputePipelineFunctionsWithDescriptorError(descriptor: MTLComputePipelineDescriptor, error: interop.PointerConvertible): boolean;

  addRenderPipelineFunctionsWithDescriptorError(descriptor: MTLRenderPipelineDescriptor, error: interop.PointerConvertible): boolean;

  addTileRenderPipelineFunctionsWithDescriptorError(descriptor: MTLTileRenderPipelineDescriptor, error: interop.PointerConvertible): boolean;

  addMeshRenderPipelineFunctionsWithDescriptorError(descriptor: MTLMeshRenderPipelineDescriptor, error: interop.PointerConvertible): boolean;

  addLibraryWithDescriptorError(descriptor: MTLStitchedLibraryDescriptor, error: interop.PointerConvertible): boolean;

  serializeToURLError(url: NSURL, error: interop.PointerConvertible): boolean;

  addFunctionWithDescriptorLibraryError(descriptor: MTLFunctionDescriptor, library: MTLLibrary, error: interop.PointerConvertible): boolean;
}

declare class MTLBinaryArchive extends NativeObject implements MTLBinaryArchive {
}

declare interface MTLBinding extends NSObjectProtocol {
  readonly name: string;

  readonly type: interop.Enum<typeof MTLBindingType>;

  readonly access: interop.Enum<typeof MTLBindingAccess>;

  readonly index: number;

  readonly isUsed: boolean;

  readonly isArgument: boolean;
}

declare class MTLBinding extends NativeObject implements MTLBinding {
}

declare interface MTLCounterSampleBuffer extends NSObjectProtocol {
  readonly device: MTLDevice;

  readonly label: string;

  readonly sampleCount: number;

  resolveCounterRange(range: _NSRange): NSData;
}

declare class MTLCounterSampleBuffer extends NativeObject implements MTLCounterSampleBuffer {
}

declare interface MTLSharedEvent extends MTLEvent {
  notifyListenerAtValueBlock(listener: MTLSharedEventListener, value: number, block: (p1: MTLSharedEvent, p2: number) => void): void;

  newSharedEventHandle(): MTLSharedEventHandle;

  waitUntilSignaledValueTimeoutMS(value: number, milliseconds: number): boolean;

  signaledValue: number;
}

declare class MTLSharedEvent extends NativeObject implements MTLSharedEvent {
}

declare interface MTLFence extends NSObjectProtocol {
  readonly device: MTLDevice;

  label: string;
}

declare class MTLFence extends NativeObject implements MTLFence {
}

declare interface MTLCaptureScope extends NSObjectProtocol {
  beginScope(): void;

  endScope(): void;

  label: string;

  readonly device: MTLDevice;

  readonly commandQueue: MTLCommandQueue;
}

declare class MTLCaptureScope extends NativeObject implements MTLCaptureScope {
}

declare interface MTLIOFileHandle extends NSObjectProtocol {
  label: string;
}

declare class MTLIOFileHandle extends NativeObject implements MTLIOFileHandle {
}

declare interface MTLLibrary extends NSObjectProtocol {
  label: string;

  readonly device: MTLDevice;

  newFunctionWithName(functionName: string): MTLFunction;

  newFunctionWithNameConstantValuesError(name: string, constantValues: MTLFunctionConstantValues, error: interop.PointerConvertible): MTLFunction;

  newFunctionWithNameConstantValuesCompletionHandler(name: string, constantValues: MTLFunctionConstantValues, completionHandler: (p1: MTLFunction, p2: NSError) => void | null): void;

  newFunctionWithDescriptorCompletionHandler(descriptor: MTLFunctionDescriptor, completionHandler: (p1: MTLFunction, p2: NSError) => void | null): void;

  newFunctionWithDescriptorError(descriptor: MTLFunctionDescriptor, error: interop.PointerConvertible): MTLFunction;

  newIntersectionFunctionWithDescriptorCompletionHandler(descriptor: MTLIntersectionFunctionDescriptor, completionHandler: (p1: MTLFunction, p2: NSError) => void | null): void;

  newIntersectionFunctionWithDescriptorError(descriptor: MTLIntersectionFunctionDescriptor, error: interop.PointerConvertible): MTLFunction;

  readonly functionNames: NSArray;

  readonly type: interop.Enum<typeof MTLLibraryType>;

  readonly installName: string;
}

declare class MTLLibrary extends NativeObject implements MTLLibrary {
}

declare interface MTLRenderPipelineState extends NSObjectProtocol {
  readonly label: string;

  readonly device: MTLDevice;

  readonly maxTotalThreadsPerThreadgroup: number;

  readonly threadgroupSizeMatchesTileSize: boolean;

  readonly imageblockSampleLength: number;

  imageblockMemoryLengthForDimensions(imageblockDimensions: MTLSize): number;

  readonly supportIndirectCommandBuffers: boolean;

  readonly maxTotalThreadsPerObjectThreadgroup: number;

  readonly maxTotalThreadsPerMeshThreadgroup: number;

  readonly objectThreadExecutionWidth: number;

  readonly meshThreadExecutionWidth: number;

  readonly maxTotalThreadgroupsPerMeshGrid: number;

  readonly gpuResourceID: MTLResourceID;

  functionHandleWithFunctionStage(function$: MTLFunction, stage: interop.Enum<typeof MTLRenderStages>): MTLFunctionHandle;

  newVisibleFunctionTableWithDescriptorStage(descriptor: MTLVisibleFunctionTableDescriptor, stage: interop.Enum<typeof MTLRenderStages>): MTLVisibleFunctionTable;

  newIntersectionFunctionTableWithDescriptorStage(descriptor: MTLIntersectionFunctionTableDescriptor, stage: interop.Enum<typeof MTLRenderStages>): MTLIntersectionFunctionTable;

  newRenderPipelineStateWithAdditionalBinaryFunctionsError(additionalBinaryFunctions: MTLRenderPipelineFunctionsDescriptor, error: interop.PointerConvertible): MTLRenderPipelineState;

  readonly shaderValidation: interop.Enum<typeof MTLShaderValidation>;
}

declare class MTLRenderPipelineState extends NativeObject implements MTLRenderPipelineState {
}

declare interface MTLFunctionHandle extends NSObjectProtocol {
  readonly functionType: interop.Enum<typeof MTLFunctionType>;

  readonly name: string;

  readonly device: MTLDevice;
}

declare class MTLFunctionHandle extends NativeObject implements MTLFunctionHandle {
}

declare interface MTLIntersectionFunctionTable extends MTLResource {
  setBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  readonly gpuResourceID: MTLResourceID;

  setFunctionAtIndex(function$: MTLFunctionHandle | null, index: number): void;

  setFunctionsWithRange(functions: interop.PointerConvertible, range: _NSRange): void;

  setOpaqueTriangleIntersectionFunctionWithSignatureAtIndex(signature: interop.Enum<typeof MTLIntersectionFunctionSignature>, index: number): void;

  setOpaqueTriangleIntersectionFunctionWithSignatureWithRange(signature: interop.Enum<typeof MTLIntersectionFunctionSignature>, range: _NSRange): void;

  setOpaqueCurveIntersectionFunctionWithSignatureAtIndex(signature: interop.Enum<typeof MTLIntersectionFunctionSignature>, index: number): void;

  setOpaqueCurveIntersectionFunctionWithSignatureWithRange(signature: interop.Enum<typeof MTLIntersectionFunctionSignature>, range: _NSRange): void;

  setVisibleFunctionTableAtBufferIndex(functionTable: MTLVisibleFunctionTable | null, bufferIndex: number): void;

  setVisibleFunctionTablesWithBufferRange(functionTables: interop.PointerConvertible, bufferRange: _NSRange): void;
}

declare class MTLIntersectionFunctionTable extends NativeObject implements MTLIntersectionFunctionTable {
}

declare interface MTLIOScratchBufferAllocator extends NSObjectProtocol {
  newScratchBufferWithMinimumSize(minimumSize: number): MTLIOScratchBuffer | null;
}

declare class MTLIOScratchBufferAllocator extends NativeObject implements MTLIOScratchBufferAllocator {
}

declare interface MTLCommandBuffer extends NSObjectProtocol {
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
}

declare class MTLCommandBuffer extends NativeObject implements MTLCommandBuffer {
}

declare interface MTLFunctionStitchingNode extends NSObjectProtocol, NSCopying {
}

declare class MTLFunctionStitchingNode extends NativeObject implements MTLFunctionStitchingNode {
}

declare interface MTLArgumentEncoder extends NSObjectProtocol {
  readonly device: MTLDevice;

  label: string;

  readonly encodedLength: number;

  readonly alignment: number;

  setArgumentBufferOffset(argumentBuffer: MTLBuffer | null, offset: number): void;

  setArgumentBufferStartOffsetArrayElement(argumentBuffer: MTLBuffer | null, startOffset: number, arrayElement: number): void;

  setBufferOffsetAtIndex(buffer: MTLBuffer | null, offset: number, index: number): void;

  setBuffersOffsetsWithRange(buffers: interop.PointerConvertible, offsets: interop.PointerConvertible, range: _NSRange): void;

  setTextureAtIndex(texture: MTLTexture | null, index: number): void;

  setTexturesWithRange(textures: interop.PointerConvertible, range: _NSRange): void;

  setSamplerStateAtIndex(sampler: MTLSamplerState | null, index: number): void;

  setSamplerStatesWithRange(samplers: interop.PointerConvertible, range: _NSRange): void;

  constantDataAtIndex(index: number): interop.Pointer;

  setRenderPipelineStateAtIndex(pipeline: MTLRenderPipelineState | null, index: number): void;

  setRenderPipelineStatesWithRange(pipelines: interop.PointerConvertible, range: _NSRange): void;

  setComputePipelineStateAtIndex(pipeline: MTLComputePipelineState | null, index: number): void;

  setComputePipelineStatesWithRange(pipelines: interop.PointerConvertible, range: _NSRange): void;

  setIndirectCommandBufferAtIndex(indirectCommandBuffer: MTLIndirectCommandBuffer | null, index: number): void;

  setIndirectCommandBuffersWithRange(buffers: interop.PointerConvertible, range: _NSRange): void;

  setAccelerationStructureAtIndex(accelerationStructure: MTLAccelerationStructure | null, index: number): void;

  newArgumentEncoderForBufferAtIndex(index: number): MTLArgumentEncoder;

  setVisibleFunctionTableAtIndex(visibleFunctionTable: MTLVisibleFunctionTable | null, index: number): void;

  setVisibleFunctionTablesWithRange(visibleFunctionTables: interop.PointerConvertible, range: _NSRange): void;

  setIntersectionFunctionTableAtIndex(intersectionFunctionTable: MTLIntersectionFunctionTable | null, index: number): void;

  setIntersectionFunctionTablesWithRange(intersectionFunctionTables: interop.PointerConvertible, range: _NSRange): void;
}

declare class MTLArgumentEncoder extends NativeObject implements MTLArgumentEncoder {
}

declare interface MTLEvent extends NSObjectProtocol {
  readonly device: MTLDevice;

  label: string;
}

declare class MTLEvent extends NativeObject implements MTLEvent {
}

declare interface MTLDrawable extends NSObjectProtocol {
  present(): void;

  presentAtTime(presentationTime: number): void;

  presentAfterMinimumDuration(duration: number): void;

  addPresentedHandler(block: (p1: MTLDrawable) => void): void;

  readonly presentedTime: number;

  readonly drawableID: number;
}

declare class MTLDrawable extends NativeObject implements MTLDrawable {
}

declare interface MTLResidencySet extends NSObjectProtocol {
  readonly device: MTLDevice;

  readonly label: string;

  readonly allocatedSize: number;

  requestResidency(): void;

  endResidency(): void;

  addAllocation(allocation: MTLAllocation): void;

  addAllocationsCount(allocations: interop.PointerConvertible, count: number): void;

  removeAllocation(allocation: MTLAllocation): void;

  removeAllocationsCount(allocations: interop.PointerConvertible, count: number): void;

  removeAllAllocations(): void;

  containsAllocation(anAllocation: MTLAllocation): boolean;

  readonly allAllocations: NSArray;

  readonly allocationCount: number;

  commit(): void;
}

declare class MTLResidencySet extends NativeObject implements MTLResidencySet {
}

declare interface MTLFunctionLogDebugLocation extends NSObjectProtocol {
  readonly functionName: string;

  readonly URL: NSURL;

  readonly line: number;

  readonly column: number;
}

declare class MTLFunctionLogDebugLocation extends NativeObject implements MTLFunctionLogDebugLocation {
}

declare class MTLBinaryArchiveDescriptor extends NSObject implements NSCopying {
  url: NSURL;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRasterizationRateSampleArray extends NSObject {
  objectAtIndexedSubscript(index: number): NSNumber;

  setObjectAtIndexedSubscript(value: NSNumber, index: number): void;
}

declare class MTLRenderPipelineColorAttachmentDescriptor extends NSObject implements NSCopying {
  pixelFormat: interop.Enum<typeof MTLPixelFormat>;

  isBlendingEnabled: boolean;

  sourceRGBBlendFactor: interop.Enum<typeof MTLBlendFactor>;

  destinationRGBBlendFactor: interop.Enum<typeof MTLBlendFactor>;

  rgbBlendOperation: interop.Enum<typeof MTLBlendOperation>;

  sourceAlphaBlendFactor: interop.Enum<typeof MTLBlendFactor>;

  destinationAlphaBlendFactor: interop.Enum<typeof MTLBlendFactor>;

  alphaBlendOperation: interop.Enum<typeof MTLBlendOperation>;

  writeMask: interop.Enum<typeof MTLColorWriteMask>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLArrayType extends MTLType {
  readonly elementType: interop.Enum<typeof MTLDataType>;

  readonly arrayLength: number;

  readonly stride: number;

  readonly argumentIndexStride: number;

  elementStructType(): MTLStructType;

  elementArrayType(): MTLArrayType;

  elementTextureReferenceType(): MTLTextureReferenceType;

  elementPointerType(): MTLPointerType;
}

declare class MTLRenderPassAttachmentDescriptor extends NSObject implements NSCopying {
  texture: MTLTexture;

  level: number;

  slice: number;

  depthPlane: number;

  resolveTexture: MTLTexture;

  resolveLevel: number;

  resolveSlice: number;

  resolveDepthPlane: number;

  loadAction: interop.Enum<typeof MTLLoadAction>;

  storeAction: interop.Enum<typeof MTLStoreAction>;

  storeActionOptions: interop.Enum<typeof MTLStoreActionOptions>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRenderPipelineDescriptor extends NSObject implements NSCopying {
  label: string;

  vertexFunction: MTLFunction;

  fragmentFunction: MTLFunction;

  vertexDescriptor: MTLVertexDescriptor;

  sampleCount: number;

  rasterSampleCount: number;

  isAlphaToCoverageEnabled: boolean;

  isAlphaToOneEnabled: boolean;

  isRasterizationEnabled: boolean;

  maxVertexAmplificationCount: number;

  readonly colorAttachments: MTLRenderPipelineColorAttachmentDescriptorArray;

  depthAttachmentPixelFormat: interop.Enum<typeof MTLPixelFormat>;

  stencilAttachmentPixelFormat: interop.Enum<typeof MTLPixelFormat>;

  inputPrimitiveTopology: interop.Enum<typeof MTLPrimitiveTopologyClass>;

  tessellationPartitionMode: interop.Enum<typeof MTLTessellationPartitionMode>;

  maxTessellationFactor: number;

  isTessellationFactorScaleEnabled: boolean;

  tessellationFactorFormat: interop.Enum<typeof MTLTessellationFactorFormat>;

  tessellationControlPointIndexType: interop.Enum<typeof MTLTessellationControlPointIndexType>;

  tessellationFactorStepFunction: interop.Enum<typeof MTLTessellationFactorStepFunction>;

  tessellationOutputWindingOrder: interop.Enum<typeof MTLWinding>;

  readonly vertexBuffers: MTLPipelineBufferDescriptorArray;

  readonly fragmentBuffers: MTLPipelineBufferDescriptorArray;

  supportIndirectCommandBuffers: boolean;

  get binaryArchives(): NSArray;
  set binaryArchives(value: NSArray<interop.Object> | Array<interop.Object>);

  get vertexPreloadedLibraries(): NSArray;
  set vertexPreloadedLibraries(value: NSArray<interop.Object> | Array<interop.Object>);

  get fragmentPreloadedLibraries(): NSArray;
  set fragmentPreloadedLibraries(value: NSArray<interop.Object> | Array<interop.Object>);

  vertexLinkedFunctions: MTLLinkedFunctions;

  fragmentLinkedFunctions: MTLLinkedFunctions;

  supportAddingVertexBinaryFunctions: boolean;

  supportAddingFragmentBinaryFunctions: boolean;

  maxVertexCallStackDepth: number;

  maxFragmentCallStackDepth: number;

  reset(): void;

  shaderValidation: interop.Enum<typeof MTLShaderValidation>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLAccelerationStructureGeometryDescriptor extends NSObject implements NSCopying {
  intersectionFunctionTableOffset: number;

  opaque: boolean;

  allowDuplicateIntersectionFunctionInvocation: boolean;

  label: string;

  primitiveDataBuffer: MTLBuffer;

  primitiveDataBufferOffset: number;

  primitiveDataStride: number;

  primitiveDataElementSize: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLType extends NSObject {
  readonly dataType: interop.Enum<typeof MTLDataType>;
}

declare class MTLComputePassDescriptor extends NSObject implements NSCopying {
  static computePassDescriptor(): MTLComputePassDescriptor;

  dispatchType: interop.Enum<typeof MTLDispatchType>;

  readonly sampleBufferAttachments: MTLComputePassSampleBufferAttachmentDescriptorArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLResidencySetDescriptor extends NSObject implements NSCopying {
  label: string;

  initialCapacity: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLIOCommandQueueDescriptor extends NSObject implements NSCopying {
  maxCommandBufferCount: number;

  priority: interop.Enum<typeof MTLIOPriority>;

  type: interop.Enum<typeof MTLIOCommandQueueType>;

  maxCommandsInFlight: number;

  scratchBufferAllocator: MTLIOScratchBufferAllocator;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLStitchedLibraryDescriptor extends NSObject implements NSCopying {
  get functionGraphs(): NSArray;
  set functionGraphs(value: NSArray<interop.Object> | Array<interop.Object>);

  get functions(): NSArray;
  set functions(value: NSArray<interop.Object> | Array<interop.Object>);

  get binaryArchives(): NSArray;
  set binaryArchives(value: NSArray<interop.Object> | Array<interop.Object>);

  options: interop.Enum<typeof MTLStitchedLibraryOptions>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLFunctionStitchingGraph extends NSObject implements NSCopying {
  functionName: string;

  get nodes(): NSArray;
  set nodes(value: NSArray<interop.Object> | Array<interop.Object>);

  outputNode: MTLFunctionStitchingFunctionNode;

  get attributes(): NSArray;
  set attributes(value: NSArray<interop.Object> | Array<interop.Object>);

  initWithFunctionNameNodesOutputNodeAttributes(functionName: string, nodes: NSArray<interop.Object> | Array<interop.Object>, outputNode: MTLFunctionStitchingFunctionNode | null, attributes: NSArray<interop.Object> | Array<interop.Object>): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLFunctionStitchingFunctionNode extends NSObject implements MTLFunctionStitchingNode {
  name: string;

  get arguments(): NSArray;
  set arguments(value: NSArray<interop.Object> | Array<interop.Object>);

  get controlDependencies(): NSArray;
  set controlDependencies(value: NSArray<interop.Object> | Array<interop.Object>);

  initWithNameArgumentsControlDependencies(name: string, arguments$: NSArray<interop.Object> | Array<interop.Object>, controlDependencies: NSArray<interop.Object> | Array<interop.Object>): this;

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

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLFunctionStitchingInputNode extends NSObject implements MTLFunctionStitchingNode {
  argumentIndex: number;

  initWithArgumentIndex(argument: number): this;

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

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLFunctionStitchingAttributeAlwaysInline extends NSObject implements MTLFunctionStitchingAttribute {
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

declare class MTLLogStateDescriptor extends NSObject implements NSCopying {
  level: interop.Enum<typeof MTLLogLevel>;

  bufferSize: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRasterizationRateLayerArray extends NSObject {
  objectAtIndexedSubscript(layerIndex: number): MTLRasterizationRateLayerDescriptor | null;

  setObjectAtIndexedSubscript(layer: MTLRasterizationRateLayerDescriptor | null, layerIndex: number): void;
}

declare class MTLRasterizationRateLayerDescriptor extends NSObject implements NSCopying {
  initWithSampleCount(sampleCount: MTLSize): this;

  initWithSampleCountHorizontalVertical(sampleCount: MTLSize, horizontal: interop.PointerConvertible, vertical: interop.PointerConvertible): this;

  readonly sampleCount: MTLSize;

  readonly maxSampleCount: MTLSize;

  readonly horizontalSampleStorage: interop.Pointer;

  readonly verticalSampleStorage: interop.Pointer;

  readonly horizontal: MTLRasterizationRateSampleArray;

  readonly vertical: MTLRasterizationRateSampleArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLAccelerationStructurePassSampleBufferAttachmentDescriptor extends NSObject implements NSCopying {
  sampleBuffer: MTLCounterSampleBuffer;

  startOfEncoderSampleIndex: number;

  endOfEncoderSampleIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLSharedEventListener extends NSObject {
  init(): this;

  initWithDispatchQueue(dispatchQueue: NSObject): this;

  readonly dispatchQueue: NSObject;
}

declare class MTLCaptureDescriptor extends NSObject implements NSCopying {
  captureObject: interop.Object;

  destination: interop.Enum<typeof MTLCaptureDestination>;

  outputURL: NSURL;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLInstanceAccelerationStructureDescriptor extends MTLAccelerationStructureDescriptor {
  instanceDescriptorBuffer: MTLBuffer;

  instanceDescriptorBufferOffset: number;

  instanceDescriptorStride: number;

  instanceCount: number;

  get instancedAccelerationStructures(): NSArray;
  set instancedAccelerationStructures(value: NSArray<interop.Object> | Array<interop.Object>);

  instanceDescriptorType: interop.Enum<typeof MTLAccelerationStructureInstanceDescriptorType>;

  motionTransformBuffer: MTLBuffer;

  motionTransformBufferOffset: number;

  motionTransformCount: number;

  instanceTransformationMatrixLayout: interop.Enum<typeof MTLMatrixLayout>;

  motionTransformType: interop.Enum<typeof MTLTransformType>;

  motionTransformStride: number;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLAccelerationStructureCurveGeometryDescriptor extends MTLAccelerationStructureGeometryDescriptor {
  controlPointBuffer: MTLBuffer;

  controlPointBufferOffset: number;

  controlPointCount: number;

  controlPointStride: number;

  controlPointFormat: interop.Enum<typeof MTLAttributeFormat>;

  radiusBuffer: MTLBuffer;

  radiusBufferOffset: number;

  radiusFormat: interop.Enum<typeof MTLAttributeFormat>;

  radiusStride: number;

  indexBuffer: MTLBuffer;

  indexBufferOffset: number;

  indexType: interop.Enum<typeof MTLIndexType>;

  segmentCount: number;

  segmentControlPointCount: number;

  curveType: interop.Enum<typeof MTLCurveType>;

  curveBasis: interop.Enum<typeof MTLCurveBasis>;

  curveEndCaps: interop.Enum<typeof MTLCurveEndCaps>;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor extends MTLAccelerationStructureGeometryDescriptor {
  get boundingBoxBuffers(): NSArray;
  set boundingBoxBuffers(value: NSArray<interop.Object> | Array<interop.Object>);

  boundingBoxStride: number;

  boundingBoxCount: number;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLAccelerationStructureMotionTriangleGeometryDescriptor extends MTLAccelerationStructureGeometryDescriptor {
  get vertexBuffers(): NSArray;
  set vertexBuffers(value: NSArray<interop.Object> | Array<interop.Object>);

  vertexFormat: interop.Enum<typeof MTLAttributeFormat>;

  vertexStride: number;

  indexBuffer: MTLBuffer;

  indexBufferOffset: number;

  indexType: interop.Enum<typeof MTLIndexType>;

  triangleCount: number;

  transformationMatrixBuffer: MTLBuffer;

  transformationMatrixBufferOffset: number;

  transformationMatrixLayout: interop.Enum<typeof MTLMatrixLayout>;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLAccelerationStructureBoundingBoxGeometryDescriptor extends MTLAccelerationStructureGeometryDescriptor {
  boundingBoxBuffer: MTLBuffer;

  boundingBoxBufferOffset: number;

  boundingBoxStride: number;

  boundingBoxCount: number;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLAccelerationStructureDescriptor extends NSObject implements NSCopying {
  usage: interop.Enum<typeof MTLAccelerationStructureUsage>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLSamplerDescriptor extends NSObject implements NSCopying {
  minFilter: interop.Enum<typeof MTLSamplerMinMagFilter>;

  magFilter: interop.Enum<typeof MTLSamplerMinMagFilter>;

  mipFilter: interop.Enum<typeof MTLSamplerMipFilter>;

  maxAnisotropy: number;

  sAddressMode: interop.Enum<typeof MTLSamplerAddressMode>;

  tAddressMode: interop.Enum<typeof MTLSamplerAddressMode>;

  rAddressMode: interop.Enum<typeof MTLSamplerAddressMode>;

  borderColor: interop.Enum<typeof MTLSamplerBorderColor>;

  normalizedCoordinates: boolean;

  lodMinClamp: number;

  lodMaxClamp: number;

  lodAverage: boolean;

  compareFunction: interop.Enum<typeof MTLCompareFunction>;

  supportArgumentBuffers: boolean;

  label: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLTileRenderPipelineColorAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLTileRenderPipelineColorAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLTileRenderPipelineColorAttachmentDescriptor, attachmentIndex: number): void;
}

declare class MTLTileRenderPipelineColorAttachmentDescriptor extends NSObject implements NSCopying {
  pixelFormat: interop.Enum<typeof MTLPixelFormat>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRenderPipelineFunctionsDescriptor extends NSObject implements NSCopying {
  get vertexAdditionalBinaryFunctions(): NSArray;
  set vertexAdditionalBinaryFunctions(value: NSArray<interop.Object> | Array<interop.Object>);

  get fragmentAdditionalBinaryFunctions(): NSArray;
  set fragmentAdditionalBinaryFunctions(value: NSArray<interop.Object> | Array<interop.Object>);

  get tileAdditionalBinaryFunctions(): NSArray;
  set tileAdditionalBinaryFunctions(value: NSArray<interop.Object> | Array<interop.Object>);

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRenderPipelineReflection extends NSObject {
  readonly vertexBindings: NSArray;

  readonly fragmentBindings: NSArray;

  readonly tileBindings: NSArray;

  readonly objectBindings: NSArray;

  readonly meshBindings: NSArray;

  readonly vertexArguments: NSArray;

  readonly fragmentArguments: NSArray;

  readonly tileArguments: NSArray;
}

declare class MTLLinkedFunctions extends NSObject implements NSCopying {
  static linkedFunctions(): MTLLinkedFunctions;

  get functions(): NSArray;
  set functions(value: NSArray<interop.Object> | Array<interop.Object>);

  get binaryFunctions(): NSArray;
  set binaryFunctions(value: NSArray<interop.Object> | Array<interop.Object>);

  get groups(): NSDictionary;
  set groups(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get privateFunctions(): NSArray;
  set privateFunctions(value: NSArray<interop.Object> | Array<interop.Object>);

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLPipelineBufferDescriptorArray extends NSObject {
  objectAtIndexedSubscript(bufferIndex: number): MTLPipelineBufferDescriptor;

  setObjectAtIndexedSubscript(buffer: MTLPipelineBufferDescriptor | null, bufferIndex: number): void;
}

declare class MTLPipelineBufferDescriptor extends NSObject implements NSCopying {
  mutability: interop.Enum<typeof MTLMutability>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLAttributeDescriptorArray extends NSObject {
  objectAtIndexedSubscript(index: number): MTLAttributeDescriptor;

  setObjectAtIndexedSubscript(attributeDesc: MTLAttributeDescriptor | null, index: number): void;
}

declare class MTLAttributeDescriptor extends NSObject implements NSCopying {
  format: interop.Enum<typeof MTLAttributeFormat>;

  offset: number;

  bufferIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLBufferLayoutDescriptorArray extends NSObject {
  objectAtIndexedSubscript(index: number): MTLBufferLayoutDescriptor;

  setObjectAtIndexedSubscript(bufferDesc: MTLBufferLayoutDescriptor | null, index: number): void;
}

declare class MTLBufferLayoutDescriptor extends NSObject implements NSCopying {
  stride: number;

  stepFunction: interop.Enum<typeof MTLStepFunction>;

  stepRate: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLVertexDescriptor extends NSObject implements NSCopying {
  static vertexDescriptor(): MTLVertexDescriptor;

  readonly layouts: MTLVertexBufferLayoutDescriptorArray;

  readonly attributes: MTLVertexAttributeDescriptorArray;

  reset(): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLVertexAttributeDescriptorArray extends NSObject {
  objectAtIndexedSubscript(index: number): MTLVertexAttributeDescriptor;

  setObjectAtIndexedSubscript(attributeDesc: MTLVertexAttributeDescriptor | null, index: number): void;
}

declare class MTLVertexBufferLayoutDescriptorArray extends NSObject {
  objectAtIndexedSubscript(index: number): MTLVertexBufferLayoutDescriptor;

  setObjectAtIndexedSubscript(bufferDesc: MTLVertexBufferLayoutDescriptor | null, index: number): void;
}

declare class MTLVertexBufferLayoutDescriptor extends NSObject implements NSCopying {
  stride: number;

  stepFunction: interop.Enum<typeof MTLVertexStepFunction>;

  stepRate: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLDepthStencilDescriptor extends NSObject implements NSCopying {
  depthCompareFunction: interop.Enum<typeof MTLCompareFunction>;

  isDepthWriteEnabled: boolean;

  frontFaceStencil: MTLStencilDescriptor;

  backFaceStencil: MTLStencilDescriptor;

  label: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLStencilDescriptor extends NSObject implements NSCopying {
  stencilCompareFunction: interop.Enum<typeof MTLCompareFunction>;

  stencilFailureOperation: interop.Enum<typeof MTLStencilOperation>;

  depthFailureOperation: interop.Enum<typeof MTLStencilOperation>;

  depthStencilPassOperation: interop.Enum<typeof MTLStencilOperation>;

  readMask: number;

  writeMask: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLCommandQueueDescriptor extends NSObject implements NSCopying {
  maxCommandBufferCount: number;

  logState: MTLLogState;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLHeapDescriptor extends NSObject implements NSCopying {
  size: number;

  storageMode: interop.Enum<typeof MTLStorageMode>;

  cpuCacheMode: interop.Enum<typeof MTLCPUCacheMode>;

  sparsePageSize: interop.Enum<typeof MTLSparsePageSize>;

  hazardTrackingMode: interop.Enum<typeof MTLHazardTrackingMode>;

  resourceOptions: interop.Enum<typeof MTLResourceOptions>;

  type: interop.Enum<typeof MTLHeapType>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLComputePassSampleBufferAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLComputePassSampleBufferAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLComputePassSampleBufferAttachmentDescriptor | null, attachmentIndex: number): void;
}

declare class MTLComputePassSampleBufferAttachmentDescriptor extends NSObject implements NSCopying {
  sampleBuffer: MTLCounterSampleBuffer;

  startOfEncoderSampleIndex: number;

  endOfEncoderSampleIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLBlitPassSampleBufferAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLBlitPassSampleBufferAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLBlitPassSampleBufferAttachmentDescriptor | null, attachmentIndex: number): void;
}

declare class MTLBlitPassSampleBufferAttachmentDescriptor extends NSObject implements NSCopying {
  sampleBuffer: MTLCounterSampleBuffer;

  startOfEncoderSampleIndex: number;

  endOfEncoderSampleIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRenderPassDescriptor extends NSObject implements NSCopying {
  static renderPassDescriptor(): MTLRenderPassDescriptor;

  readonly colorAttachments: MTLRenderPassColorAttachmentDescriptorArray;

  depthAttachment: MTLRenderPassDepthAttachmentDescriptor;

  stencilAttachment: MTLRenderPassStencilAttachmentDescriptor;

  visibilityResultBuffer: MTLBuffer;

  renderTargetArrayLength: number;

  imageblockSampleLength: number;

  threadgroupMemoryLength: number;

  tileWidth: number;

  tileHeight: number;

  defaultRasterSampleCount: number;

  renderTargetWidth: number;

  renderTargetHeight: number;

  setSamplePositionsCount(positions: interop.PointerConvertible, count: number): void;

  getSamplePositionsCount(positions: interop.PointerConvertible, count: number): number;

  rasterizationRateMap: MTLRasterizationRateMap;

  readonly sampleBufferAttachments: MTLRenderPassSampleBufferAttachmentDescriptorArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRenderPassColorAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLRenderPassColorAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLRenderPassColorAttachmentDescriptor | null, attachmentIndex: number): void;
}

declare class MTLRenderPassStencilAttachmentDescriptor extends MTLRenderPassAttachmentDescriptor {
  clearStencil: number;

  stencilResolveFilter: interop.Enum<typeof MTLMultisampleStencilResolveFilter>;
}

declare class MTLRenderPassDepthAttachmentDescriptor extends MTLRenderPassAttachmentDescriptor {
  clearDepth: number;

  depthResolveFilter: interop.Enum<typeof MTLMultisampleDepthResolveFilter>;
}

declare class MTLRenderPassColorAttachmentDescriptor extends MTLRenderPassAttachmentDescriptor {
  clearColor: MTLClearColor;
}

declare class MTLResourceStatePassDescriptor extends NSObject implements NSCopying {
  static resourceStatePassDescriptor(): MTLResourceStatePassDescriptor;

  readonly sampleBufferAttachments: MTLResourceStatePassSampleBufferAttachmentDescriptorArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLResourceStatePassSampleBufferAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLResourceStatePassSampleBufferAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLResourceStatePassSampleBufferAttachmentDescriptor | null, attachmentIndex: number): void;
}

declare class MTLArchitecture extends NSObject implements NSCopying {
  readonly name: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLArgumentDescriptor extends NSObject implements NSCopying {
  static argumentDescriptor(): MTLArgumentDescriptor;

  dataType: interop.Enum<typeof MTLDataType>;

  index: number;

  arrayLength: number;

  access: interop.Enum<typeof MTLBindingAccess>;

  textureType: interop.Enum<typeof MTLTextureType>;

  constantBlockAlignment: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLCompileOptions extends NSObject implements NSCopying {
  get preprocessorMacros(): NSDictionary;
  set preprocessorMacros(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  fastMathEnabled: boolean;

  mathMode: interop.Enum<typeof MTLMathMode>;

  mathFloatingPointFunctions: interop.Enum<typeof MTLMathFloatingPointFunctions>;

  languageVersion: interop.Enum<typeof MTLLanguageVersion>;

  libraryType: interop.Enum<typeof MTLLibraryType>;

  installName: string;

  get libraries(): NSArray;
  set libraries(value: NSArray<interop.Object> | Array<interop.Object>);

  preserveInvariance: boolean;

  optimizationLevel: interop.Enum<typeof MTLLibraryOptimizationLevel>;

  compileSymbolVisibility: interop.Enum<typeof MTLCompileSymbolVisibility>;

  allowReferencingUndefinedSymbols: boolean;

  maxTotalThreadsPerThreadgroup: number;

  enableLogging: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLIntersectionFunctionDescriptor extends MTLFunctionDescriptor implements NSCopying {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLFunctionConstantValues extends NSObject implements NSCopying {
  setConstantValueTypeAtIndex(value: interop.PointerConvertible, type: interop.Enum<typeof MTLDataType>, index: number): void;

  setConstantValuesTypeWithRange(values: interop.PointerConvertible, type: interop.Enum<typeof MTLDataType>, range: _NSRange): void;

  setConstantValueTypeWithName(value: interop.PointerConvertible, type: interop.Enum<typeof MTLDataType>, name: string): void;

  reset(): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLPointerType extends MTLType {
  readonly elementType: interop.Enum<typeof MTLDataType>;

  readonly access: interop.Enum<typeof MTLBindingAccess>;

  readonly alignment: number;

  readonly dataSize: number;

  readonly elementIsArgumentBuffer: boolean;

  elementStructType(): MTLStructType;

  elementArrayType(): MTLArrayType;
}

declare class MTLStructMember extends NSObject {
  readonly name: string;

  readonly offset: number;

  readonly dataType: interop.Enum<typeof MTLDataType>;

  structType(): MTLStructType;

  arrayType(): MTLArrayType;

  textureReferenceType(): MTLTextureReferenceType;

  pointerType(): MTLPointerType;

  readonly argumentIndex: number;
}

declare class MTLTextureDescriptor extends NSObject implements NSCopying {
  static texture2DDescriptorWithPixelFormatWidthHeightMipmapped(pixelFormat: interop.Enum<typeof MTLPixelFormat>, width: number, height: number, mipmapped: boolean): MTLTextureDescriptor;

  static textureCubeDescriptorWithPixelFormatSizeMipmapped(pixelFormat: interop.Enum<typeof MTLPixelFormat>, size: number, mipmapped: boolean): MTLTextureDescriptor;

  static textureBufferDescriptorWithPixelFormatWidthResourceOptionsUsage(pixelFormat: interop.Enum<typeof MTLPixelFormat>, width: number, resourceOptions: interop.Enum<typeof MTLResourceOptions>, usage: interop.Enum<typeof MTLTextureUsage>): MTLTextureDescriptor;

  textureType: interop.Enum<typeof MTLTextureType>;

  pixelFormat: interop.Enum<typeof MTLPixelFormat>;

  width: number;

  height: number;

  depth: number;

  mipmapLevelCount: number;

  sampleCount: number;

  arrayLength: number;

  resourceOptions: interop.Enum<typeof MTLResourceOptions>;

  cpuCacheMode: interop.Enum<typeof MTLCPUCacheMode>;

  storageMode: interop.Enum<typeof MTLStorageMode>;

  hazardTrackingMode: interop.Enum<typeof MTLHazardTrackingMode>;

  usage: interop.Enum<typeof MTLTextureUsage>;

  allowGPUOptimizedContents: boolean;

  compressionType: interop.Enum<typeof MTLTextureCompressionType>;

  swizzle: MTLTextureSwizzleChannels;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLSharedEventHandle extends NSObject implements NSSecureCoding {
  readonly label: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MTLSharedTextureHandle extends NSObject implements NSSecureCoding {
  readonly device: MTLDevice;

  readonly label: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MTLPrimitiveAccelerationStructureDescriptor extends MTLAccelerationStructureDescriptor {
  get geometryDescriptors(): NSArray;
  set geometryDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  motionStartBorderMode: interop.Enum<typeof MTLMotionBorderMode>;

  motionEndBorderMode: interop.Enum<typeof MTLMotionBorderMode>;

  motionStartTime: number;

  motionEndTime: number;

  motionKeyframeCount: number;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLTileRenderPipelineDescriptor extends NSObject implements NSCopying {
  label: string;

  tileFunction: MTLFunction;

  rasterSampleCount: number;

  readonly colorAttachments: MTLTileRenderPipelineColorAttachmentDescriptorArray;

  threadgroupSizeMatchesTileSize: boolean;

  readonly tileBuffers: MTLPipelineBufferDescriptorArray;

  maxTotalThreadsPerThreadgroup: number;

  get binaryArchives(): NSArray;
  set binaryArchives(value: NSArray<interop.Object> | Array<interop.Object>);

  get preloadedLibraries(): NSArray;
  set preloadedLibraries(value: NSArray<interop.Object> | Array<interop.Object>);

  linkedFunctions: MTLLinkedFunctions;

  supportAddingBinaryFunctions: boolean;

  maxCallStackDepth: number;

  reset(): void;

  shaderValidation: interop.Enum<typeof MTLShaderValidation>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLVisibleFunctionTableDescriptor extends NSObject implements NSCopying {
  static visibleFunctionTableDescriptor(): MTLVisibleFunctionTableDescriptor;

  functionCount: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLStructType extends MTLType {
  readonly members: NSArray;

  memberByName(name: string): MTLStructMember;
}

declare class MTLIndirectInstanceAccelerationStructureDescriptor extends MTLAccelerationStructureDescriptor {
  instanceDescriptorBuffer: MTLBuffer;

  instanceDescriptorBufferOffset: number;

  instanceDescriptorStride: number;

  maxInstanceCount: number;

  instanceCountBuffer: MTLBuffer;

  instanceCountBufferOffset: number;

  instanceDescriptorType: interop.Enum<typeof MTLAccelerationStructureInstanceDescriptorType>;

  motionTransformBuffer: MTLBuffer;

  motionTransformBufferOffset: number;

  maxMotionTransformCount: number;

  motionTransformCountBuffer: MTLBuffer;

  motionTransformCountBufferOffset: number;

  instanceTransformationMatrixLayout: interop.Enum<typeof MTLMatrixLayout>;

  motionTransformType: interop.Enum<typeof MTLTransformType>;

  motionTransformStride: number;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLRasterizationRateMapDescriptor extends NSObject implements NSCopying {
  static rasterizationRateMapDescriptorWithScreenSize(screenSize: MTLSize): MTLRasterizationRateMapDescriptor;

  static rasterizationRateMapDescriptorWithScreenSizeLayer(screenSize: MTLSize, layer: MTLRasterizationRateLayerDescriptor): MTLRasterizationRateMapDescriptor;

  static rasterizationRateMapDescriptorWithScreenSizeLayerCountLayers(screenSize: MTLSize, layerCount: number, layers: interop.PointerConvertible): MTLRasterizationRateMapDescriptor;

  layerAtIndex(layerIndex: number): MTLRasterizationRateLayerDescriptor | null;

  setLayerAtIndex(layer: MTLRasterizationRateLayerDescriptor | null, layerIndex: number): void;

  readonly layers: MTLRasterizationRateLayerArray;

  screenSize: MTLSize;

  label: string;

  readonly layerCount: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLAccelerationStructurePassSampleBufferAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLAccelerationStructurePassSampleBufferAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLAccelerationStructurePassSampleBufferAttachmentDescriptor | null, attachmentIndex: number): void;
}

declare class MTLRenderPipelineColorAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLRenderPipelineColorAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLRenderPipelineColorAttachmentDescriptor | null, attachmentIndex: number): void;
}

declare class MTLIntersectionFunctionTableDescriptor extends NSObject implements NSCopying {
  static intersectionFunctionTableDescriptor(): MTLIntersectionFunctionTableDescriptor;

  functionCount: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLFunctionConstant extends NSObject {
  readonly name: string;

  readonly type: interop.Enum<typeof MTLDataType>;

  readonly index: number;

  readonly required: boolean;
}

declare class MTLTextureReferenceType extends MTLType {
  readonly textureDataType: interop.Enum<typeof MTLDataType>;

  readonly textureType: interop.Enum<typeof MTLTextureType>;

  readonly access: interop.Enum<typeof MTLBindingAccess>;

  readonly isDepthTexture: boolean;
}

declare class MTLResourceStatePassSampleBufferAttachmentDescriptor extends NSObject implements NSCopying {
  sampleBuffer: MTLCounterSampleBuffer;

  startOfEncoderSampleIndex: number;

  endOfEncoderSampleIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLFunctionDescriptor extends NSObject implements NSCopying {
  static functionDescriptor(): MTLFunctionDescriptor;

  name: string;

  specializedName: string;

  constantValues: MTLFunctionConstantValues;

  options: interop.Enum<typeof MTLFunctionOptions>;

  get binaryArchives(): NSArray;
  set binaryArchives(value: NSArray<interop.Object> | Array<interop.Object>);

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLComputePipelineDescriptor extends NSObject implements NSCopying {
  label: string;

  computeFunction: MTLFunction;

  threadGroupSizeIsMultipleOfThreadExecutionWidth: boolean;

  maxTotalThreadsPerThreadgroup: number;

  stageInputDescriptor: MTLStageInputOutputDescriptor;

  readonly buffers: MTLPipelineBufferDescriptorArray;

  supportIndirectCommandBuffers: boolean;

  get insertLibraries(): NSArray;
  set insertLibraries(value: NSArray<interop.Object> | Array<interop.Object>);

  get preloadedLibraries(): NSArray;
  set preloadedLibraries(value: NSArray<interop.Object> | Array<interop.Object>);

  get binaryArchives(): NSArray;
  set binaryArchives(value: NSArray<interop.Object> | Array<interop.Object>);

  reset(): void;

  linkedFunctions: MTLLinkedFunctions;

  supportAddingBinaryFunctions: boolean;

  maxCallStackDepth: number;

  shaderValidation: interop.Enum<typeof MTLShaderValidation>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLAttribute extends NSObject {
  readonly name: string;

  readonly attributeIndex: number;

  readonly attributeType: interop.Enum<typeof MTLDataType>;

  readonly isActive: boolean;

  readonly isPatchData: boolean;

  readonly isPatchControlPointData: boolean;
}

declare class MTLAccelerationStructureMotionCurveGeometryDescriptor extends MTLAccelerationStructureGeometryDescriptor {
  get controlPointBuffers(): NSArray;
  set controlPointBuffers(value: NSArray<interop.Object> | Array<interop.Object>);

  controlPointCount: number;

  controlPointStride: number;

  controlPointFormat: interop.Enum<typeof MTLAttributeFormat>;

  get radiusBuffers(): NSArray;
  set radiusBuffers(value: NSArray<interop.Object> | Array<interop.Object>);

  radiusFormat: interop.Enum<typeof MTLAttributeFormat>;

  radiusStride: number;

  indexBuffer: MTLBuffer;

  indexBufferOffset: number;

  indexType: interop.Enum<typeof MTLIndexType>;

  segmentCount: number;

  segmentControlPointCount: number;

  curveType: interop.Enum<typeof MTLCurveType>;

  curveBasis: interop.Enum<typeof MTLCurveBasis>;

  curveEndCaps: interop.Enum<typeof MTLCurveEndCaps>;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLArgument extends NSObject {
  readonly name: string;

  readonly type: interop.Enum<typeof MTLArgumentType>;

  readonly access: interop.Enum<typeof MTLBindingAccess>;

  readonly index: number;

  readonly isActive: boolean;

  readonly bufferAlignment: number;

  readonly bufferDataSize: number;

  readonly bufferDataType: interop.Enum<typeof MTLDataType>;

  readonly bufferStructType: MTLStructType;

  readonly bufferPointerType: MTLPointerType;

  readonly threadgroupMemoryAlignment: number;

  readonly threadgroupMemoryDataSize: number;

  readonly textureType: interop.Enum<typeof MTLTextureType>;

  readonly textureDataType: interop.Enum<typeof MTLDataType>;

  readonly isDepthTexture: boolean;

  readonly arrayLength: number;
}

declare class MTLVertexAttributeDescriptor extends NSObject implements NSCopying {
  format: interop.Enum<typeof MTLVertexFormat>;

  offset: number;

  bufferIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLStageInputOutputDescriptor extends NSObject implements NSCopying {
  static stageInputOutputDescriptor(): MTLStageInputOutputDescriptor;

  readonly layouts: MTLBufferLayoutDescriptorArray;

  readonly attributes: MTLAttributeDescriptorArray;

  indexType: interop.Enum<typeof MTLIndexType>;

  indexBufferIndex: number;

  reset(): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLMeshRenderPipelineDescriptor extends NSObject implements NSCopying {
  label: string;

  objectFunction: MTLFunction;

  meshFunction: MTLFunction;

  fragmentFunction: MTLFunction;

  maxTotalThreadsPerObjectThreadgroup: number;

  maxTotalThreadsPerMeshThreadgroup: number;

  objectThreadgroupSizeIsMultipleOfThreadExecutionWidth: boolean;

  meshThreadgroupSizeIsMultipleOfThreadExecutionWidth: boolean;

  payloadMemoryLength: number;

  maxTotalThreadgroupsPerMeshGrid: number;

  readonly objectBuffers: MTLPipelineBufferDescriptorArray;

  readonly meshBuffers: MTLPipelineBufferDescriptorArray;

  readonly fragmentBuffers: MTLPipelineBufferDescriptorArray;

  rasterSampleCount: number;

  isAlphaToCoverageEnabled: boolean;

  isAlphaToOneEnabled: boolean;

  isRasterizationEnabled: boolean;

  maxVertexAmplificationCount: number;

  readonly colorAttachments: MTLRenderPipelineColorAttachmentDescriptorArray;

  depthAttachmentPixelFormat: interop.Enum<typeof MTLPixelFormat>;

  stencilAttachmentPixelFormat: interop.Enum<typeof MTLPixelFormat>;

  supportIndirectCommandBuffers: boolean;

  get binaryArchives(): NSArray;
  set binaryArchives(value: NSArray<interop.Object> | Array<interop.Object>);

  objectLinkedFunctions: MTLLinkedFunctions;

  meshLinkedFunctions: MTLLinkedFunctions;

  fragmentLinkedFunctions: MTLLinkedFunctions;

  reset(): void;

  shaderValidation: interop.Enum<typeof MTLShaderValidation>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRenderPassSampleBufferAttachmentDescriptorArray extends NSObject {
  objectAtIndexedSubscript(attachmentIndex: number): MTLRenderPassSampleBufferAttachmentDescriptor;

  setObjectAtIndexedSubscript(attachment: MTLRenderPassSampleBufferAttachmentDescriptor | null, attachmentIndex: number): void;
}

declare class MTLAccelerationStructureTriangleGeometryDescriptor extends MTLAccelerationStructureGeometryDescriptor {
  vertexBuffer: MTLBuffer;

  vertexBufferOffset: number;

  vertexFormat: interop.Enum<typeof MTLAttributeFormat>;

  vertexStride: number;

  indexBuffer: MTLBuffer;

  indexBufferOffset: number;

  indexType: interop.Enum<typeof MTLIndexType>;

  triangleCount: number;

  transformationMatrixBuffer: MTLBuffer;

  transformationMatrixBufferOffset: number;

  transformationMatrixLayout: interop.Enum<typeof MTLMatrixLayout>;

  static descriptor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLIndirectCommandBufferDescriptor extends NSObject implements NSCopying {
  commandTypes: interop.Enum<typeof MTLIndirectCommandType>;

  inheritPipelineState: boolean;

  inheritBuffers: boolean;

  maxVertexBufferBindCount: number;

  maxFragmentBufferBindCount: number;

  maxKernelBufferBindCount: number;

  maxKernelThreadgroupMemoryBindCount: number;

  maxObjectBufferBindCount: number;

  maxMeshBufferBindCount: number;

  maxObjectThreadgroupMemoryBindCount: number;

  supportRayTracing: boolean;

  supportDynamicAttributeStride: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLCaptureManager extends NSObject {
  static sharedCaptureManager(): MTLCaptureManager;

  newCaptureScopeWithDevice(device: MTLDevice): MTLCaptureScope;

  newCaptureScopeWithCommandQueue(commandQueue: MTLCommandQueue): MTLCaptureScope;

  supportsDestination(destination: interop.Enum<typeof MTLCaptureDestination>): boolean;

  startCaptureWithDescriptorError(descriptor: MTLCaptureDescriptor, error: interop.PointerConvertible): boolean;

  startCaptureWithDevice(device: MTLDevice): void;

  startCaptureWithCommandQueue(commandQueue: MTLCommandQueue): void;

  startCaptureWithScope(captureScope: MTLCaptureScope): void;

  stopCapture(): void;

  defaultCaptureScope: MTLCaptureScope;

  readonly isCapturing: boolean;
}

declare class MTLVertexAttribute extends NSObject {
  readonly name: string;

  readonly attributeIndex: number;

  readonly attributeType: interop.Enum<typeof MTLDataType>;

  readonly isActive: boolean;

  readonly isPatchData: boolean;

  readonly isPatchControlPointData: boolean;
}

declare class MTLCounterSampleBufferDescriptor extends NSObject implements NSCopying {
  counterSet: MTLCounterSet;

  label: string;

  storageMode: interop.Enum<typeof MTLStorageMode>;

  sampleCount: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLRenderPassSampleBufferAttachmentDescriptor extends NSObject implements NSCopying {
  sampleBuffer: MTLCounterSampleBuffer;

  startOfVertexSampleIndex: number;

  endOfVertexSampleIndex: number;

  startOfFragmentSampleIndex: number;

  endOfFragmentSampleIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLCommandBufferDescriptor extends NSObject implements NSCopying {
  retainedReferences: boolean;

  errorOptions: interop.Enum<typeof MTLCommandBufferErrorOption>;

  logState: MTLLogState;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLMotionKeyframeData extends NSObject {
  buffer: MTLBuffer;

  offset: number;

  static data<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;
}

declare class MTLAccelerationStructurePassDescriptor extends NSObject implements NSCopying {
  static accelerationStructurePassDescriptor(): MTLAccelerationStructurePassDescriptor;

  readonly sampleBufferAttachments: MTLAccelerationStructurePassSampleBufferAttachmentDescriptorArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLBlitPassDescriptor extends NSObject implements NSCopying {
  static blitPassDescriptor(): MTLBlitPassDescriptor;

  readonly sampleBufferAttachments: MTLBlitPassSampleBufferAttachmentDescriptorArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MTLComputePipelineReflection extends NSObject {
  readonly bindings: NSArray;

  readonly arguments: NSArray;
}

