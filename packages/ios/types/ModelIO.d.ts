/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const MDLVertexAttributeBinormal: string;

declare const MDLVertexAttributeColor: string;

declare const MDLVertexAttributeSubdivisionStencil: string;

declare const MDLVertexAttributeTextureCoordinate: string;

declare const MDLVertexAttributeTangent: string;

declare const MDLVertexAttributeShadingBasisV: string;

declare const MDLVertexAttributeShadingBasisU: string;

declare const MDLVertexAttributePosition: string;

declare const MDLVertexAttributeOcclusionValue: string;

declare const MDLVertexAttributeJointWeights: string;

declare const MDLVertexAttributeEdgeCrease: string;

declare const MDLVertexAttributeBitangent: string;

declare const MDLVertexAttributeAnisotropy: string;

declare const kUTTypeStereolithography: string;

declare const kUTType3dObject: string;

declare const kUTTypeAlembic: string;

declare const kUTTypeUniversalSceneDescriptionMobile: string;

declare const kUTTypeUniversalSceneDescription: string;

declare const kUTTypePolygon: string;

declare const MDLVertexAttributeNormal: string;

declare const MDLVertexAttributeJointIndices: string;

declare const MDLMaterialTextureWrapMode: {
  Clamp: 0,
  Repeat: 1,
  Mirror: 2,
};

declare const MDLMaterialSemantic: {
  BaseColor: 0,
  Subsurface: 1,
  Metallic: 2,
  Specular: 3,
  SpecularExponent: 4,
  SpecularTint: 5,
  Roughness: 6,
  Anisotropic: 7,
  AnisotropicRotation: 8,
  Sheen: 9,
  SheenTint: 10,
  Clearcoat: 11,
  ClearcoatGloss: 12,
  Emission: 13,
  Bump: 14,
  Opacity: 15,
  InterfaceIndexOfRefraction: 16,
  MaterialIndexOfRefraction: 17,
  ObjectSpaceNormal: 18,
  TangentSpaceNormal: 19,
  Displacement: 20,
  DisplacementScale: 21,
  AmbientOcclusion: 22,
  AmbientOcclusionScale: 23,
  None: 32768,
  UserDefined: 32769,
};

declare const MDLCameraProjection: {
  Perspective: 0,
  Orthographic: 1,
};

declare const MDLMeshBufferType: {
  Vertex: 1,
  Index: 2,
  Custom: 3,
};

declare const MDLIndexBitDepth: {
  Invalid: 0,
  UInt8: 8,
  Uint8: 8,
  UInt16: 16,
  Uint16: 16,
  UInt32: 32,
  Uint32: 32,
};

declare const MDLVertexFormat: {
  Invalid: 0,
  PackedBit: 4096,
  UCharBits: 65536,
  CharBits: 131072,
  UCharNormalizedBits: 196608,
  CharNormalizedBits: 262144,
  UShortBits: 327680,
  ShortBits: 393216,
  UShortNormalizedBits: 458752,
  ShortNormalizedBits: 524288,
  UIntBits: 589824,
  IntBits: 655360,
  HalfBits: 720896,
  FloatBits: 786432,
  UChar: 65537,
  UChar2: 65538,
  UChar3: 65539,
  UChar4: 65540,
  Char: 131073,
  Char2: 131074,
  Char3: 131075,
  Char4: 131076,
  UCharNormalized: 196609,
  UChar2Normalized: 196610,
  UChar3Normalized: 196611,
  UChar4Normalized: 196612,
  CharNormalized: 262145,
  Char2Normalized: 262146,
  Char3Normalized: 262147,
  Char4Normalized: 262148,
  UShort: 327681,
  UShort2: 327682,
  UShort3: 327683,
  UShort4: 327684,
  Short: 393217,
  Short2: 393218,
  Short3: 393219,
  Short4: 393220,
  UShortNormalized: 458753,
  UShort2Normalized: 458754,
  UShort3Normalized: 458755,
  UShort4Normalized: 458756,
  ShortNormalized: 524289,
  Short2Normalized: 524290,
  Short3Normalized: 524291,
  Short4Normalized: 524292,
  UInt: 589825,
  UInt2: 589826,
  UInt3: 589827,
  UInt4: 589828,
  Int: 655361,
  Int2: 655362,
  Int3: 655363,
  Int4: 655364,
  Half: 720897,
  Half2: 720898,
  Half3: 720899,
  Half4: 720900,
  Float: 786433,
  Float2: 786434,
  Float3: 786435,
  Float4: 786436,
  Int1010102Normalized: 659460,
  UInt1010102Normalized: 593924,
};

declare const MDLMaterialTextureFilterMode: {
  Nearest: 0,
  Linear: 1,
};

declare const MDLMaterialPropertyType: {
  None: 0,
  String: 1,
  URL: 2,
  Texture: 3,
  Color: 4,
  Float: 5,
  Float2: 6,
  Float3: 7,
  Float4: 8,
  Matrix44: 9,
  Buffer: 10,
};

declare const MDLProbePlacement: {
  UniformGrid: 0,
  IrradianceDistribution: 1,
};

declare const MDLMaterialFace: {
  Front: 0,
  Back: 1,
  DoubleSided: 2,
};

declare const MDLLightType: {
  Unknown: 0,
  Ambient: 1,
  Directional: 2,
  Spot: 3,
  Point: 4,
  Linear: 5,
  DiscArea: 6,
  RectangularArea: 7,
  SuperElliptical: 8,
  Photometric: 9,
  Probe: 10,
  Environment: 11,
};

declare const MDLTransformOpRotationOrder: {
  XYZ: 1,
  XZY: 2,
  YXZ: 3,
  YZX: 4,
  ZXY: 5,
  ZYX: 6,
};

declare const MDLGeometryType: {
  Points: 0,
  Lines: 1,
  Triangles: 2,
  TriangleStrips: 3,
  Quads: 4,
  VariableTopology: 5,
};

declare const MDLTextureChannelEncoding: {
  UInt8: 1,
  Uint8: 1,
  UInt16: 2,
  Uint16: 2,
  UInt24: 3,
  Uint24: 3,
  UInt32: 4,
  Uint32: 4,
  Float16: 258,
  Float16SR: 770,
  Float32: 260,
};

declare const MDLDataPrecision: {
  Undefined: 0,
  Float: 1,
  Double: 2,
};

declare const MDLAnimatedValueInterpolation: {
  Constant: 0,
  Linear: 1,
};

declare const MDLMaterialMipMapFilterMode: {
  Nearest: 0,
  Linear: 1,
};

declare class MDLAxisAlignedBoundingBox {
  constructor(init?: MDLAxisAlignedBoundingBox);
  maxBounds: unknown /* ext vector */;
  minBounds: unknown /* ext vector */;
}

declare class MDLVoxelIndexExtent {
  constructor(init?: MDLVoxelIndexExtent);
  minimumExtent: unknown /* ext vector */;
  maximumExtent: unknown /* ext vector */;
}

declare interface MDLTransformOp {
  readonly name: string;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLTransformOp extends NativeObject implements MDLTransformOp {
}

declare interface MDLJointAnimation {
}

declare class MDLJointAnimation extends NativeObject implements MDLJointAnimation {
}

declare interface MDLMeshBufferAllocator extends NSObjectProtocol {
  newZone(capacity: number): MDLMeshBufferZone;

  newZoneForBuffersWithSizeAndType(sizes: NSArray<interop.Object> | Array<interop.Object>, types: NSArray<interop.Object> | Array<interop.Object>): MDLMeshBufferZone;

  newBufferType(length: number, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;

  newBufferWithDataType(data: NSData, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;

  newBufferFromZoneLengthType(zone: MDLMeshBufferZone | null, length: number, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;

  newBufferFromZoneDataType(zone: MDLMeshBufferZone | null, data: NSData, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;
}

declare class MDLMeshBufferAllocator extends NativeObject implements MDLMeshBufferAllocator {
}

declare interface MDLComponent extends NSObjectProtocol {
}

declare class MDLComponent extends NativeObject implements MDLComponent {
}

declare interface MDLAssetResolver extends NSObjectProtocol {
  canResolveAssetNamed(name: string): boolean;

  resolveAssetNamed(name: string): NSURL;
}

declare class MDLAssetResolver extends NativeObject implements MDLAssetResolver {
}

declare interface MDLLightProbeIrradianceDataSource extends NSObjectProtocol {
  boundingBox: MDLAxisAlignedBoundingBox;

  sphericalHarmonicsLevel?: number;

  sphericalHarmonicsCoefficientsAtPosition?(position: unknown /* ext vector */): NSData;
}

declare class MDLLightProbeIrradianceDataSource extends NativeObject implements MDLLightProbeIrradianceDataSource {
}

declare interface MDLTransformComponent extends MDLComponent {
  matrix: simd_float4x4;

  resetsTransform: boolean;

  readonly minimumTime: number;

  readonly maximumTime: number;

  readonly keyTimes: NSArray;

  setLocalTransformForTime?(transform: simd_float4x4, time: number): void;

  setLocalTransform?(transform: simd_float4x4): void;

  localTransformAtTime?(time: number): simd_float4x4;

}

declare class MDLTransformComponent extends NativeObject implements MDLTransformComponent {
  static globalTransformWithObjectAtTime(object: MDLObject, time: number): simd_float4x4;
}

declare interface MDLObjectContainerComponent extends MDLComponent, NSFastEnumeration {
  addObject(object: MDLObject): void;

  removeObject(object: MDLObject): void;

  objectAtIndexedSubscript(index: number): MDLObject;

  readonly count: number;

  readonly objects: NSArray;
}

declare class MDLObjectContainerComponent extends NativeObject implements MDLObjectContainerComponent {
}

declare interface MDLNamed {
  name: string;
}

declare class MDLNamed extends NativeObject implements MDLNamed {
}

// @ts-ignore ProtocolDecl.tsIgnore
declare interface MDLMeshBuffer extends NSObjectProtocol, NSCopying {
  fillDataOffset(data: NSData, offset: number): void;

  map(): MDLMeshBufferMap;

  readonly length: number;

  readonly allocator: MDLMeshBufferAllocator;

  // @ts-ignore MemberDecl.tsIgnore
  readonly zone: MDLMeshBufferZone;

  readonly type: interop.Enum<typeof MDLMeshBufferType>;
}

// @ts-ignore ProtocolDecl.tsIgnore
declare class MDLMeshBuffer extends NativeObject implements MDLMeshBuffer {
}

declare interface MDLMeshBufferZone extends NSObjectProtocol {
  readonly capacity: number;

  readonly allocator: MDLMeshBufferAllocator;
}

declare class MDLMeshBufferZone extends NativeObject implements MDLMeshBufferZone {
}

declare class MDLStereoscopicCamera extends MDLCamera {
  interPupillaryDistance: number;

  leftVergence: number;

  rightVergence: number;

  overlap: number;

  readonly leftViewMatrix: simd_float4x4;

  readonly rightViewMatrix: simd_float4x4;

  readonly leftProjectionMatrix: simd_float4x4;

  readonly rightProjectionMatrix: simd_float4x4;
}

declare class MDLMaterial extends NSObject implements MDLNamed, NSFastEnumeration {
  initWithNameScatteringFunction(name: string, scatteringFunction: MDLScatteringFunction): this;

  setProperty(property: MDLMaterialProperty): void;

  removeProperty(property: MDLMaterialProperty): void;

  propertyNamed(name: string): MDLMaterialProperty;

  propertyWithSemantic(semantic: interop.Enum<typeof MDLMaterialSemantic>): MDLMaterialProperty;

  propertiesWithSemantic(semantic: interop.Enum<typeof MDLMaterialSemantic>): NSArray;

  removeAllProperties(): void;

  resolveTexturesWithResolver(resolver: MDLAssetResolver): void;

  loadTexturesUsingResolver(resolver: MDLAssetResolver): void;

  readonly scatteringFunction: MDLScatteringFunction;

  name: string;

  baseMaterial: MDLMaterial;

  objectAtIndexedSubscript(idx: number): MDLMaterialProperty;

  objectForKeyedSubscript(name: string): MDLMaterialProperty;

  readonly count: number;

  materialFace: interop.Enum<typeof MDLMaterialFace>;

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;

  readonly [Symbol.iterator]: () => Iterator<any>;

}

declare class MDLLight extends MDLObject {
  irradianceAtPoint(point: unknown /* ext vector */): interop.Pointer;

  irradianceAtPointColorSpace(point: unknown /* ext vector */, colorSpace: interop.PointerConvertible): interop.Pointer;

  lightType: interop.Enum<typeof MDLLightType>;

  colorSpace: string;
}

declare class MDLVoxelArray extends MDLObject {
  initWithAssetDivisionsPatchRadius(asset: MDLAsset, divisions: number, patchRadius: number): this;

  initWithDataBoundingBoxVoxelExtent(voxelData: NSData, boundingBox: MDLAxisAlignedBoundingBox, voxelExtent: number): this;

  readonly count: number;

  readonly voxelIndexExtent: MDLVoxelIndexExtent;

  voxelExistsAtIndexAllowAnyXAllowAnyYAllowAnyZAllowAnyShell(index: unknown /* ext vector */, allowAnyX: boolean, allowAnyY: boolean, allowAnyZ: boolean, allowAnyShell: boolean): boolean;

  voxelsWithinExtent(extent: MDLVoxelIndexExtent): NSData;

  voxelIndices(): NSData;

  setVoxelAtIndex(index: unknown /* ext vector */): void;

  setVoxelsForMeshDivisionsPatchRadius(mesh: MDLMesh, divisions: number, patchRadius: number): void;

  unionWithVoxels(voxels: MDLVoxelArray): void;

  intersectWithVoxels(voxels: MDLVoxelArray): void;

  differenceWithVoxels(voxels: MDLVoxelArray): void;

  readonly boundingBox: MDLAxisAlignedBoundingBox;

  indexOfSpatialLocation(location: unknown /* ext vector */): unknown /* ext vector */;

  spatialLocationOfIndex(index: unknown /* ext vector */): unknown /* ext vector */;

  voxelBoundingBoxAtIndex(index: unknown /* ext vector */): MDLAxisAlignedBoundingBox;

  convertToSignedShellField(): void;

  readonly isValidSignedShellField: boolean;

  shellFieldInteriorThickness: number;

  shellFieldExteriorThickness: number;

  coarseMesh(): MDLMesh;

  coarseMeshUsingAllocator(allocator: MDLMeshBufferAllocator | null): MDLMesh;

  meshUsingAllocator(allocator: MDLMeshBufferAllocator | null): MDLMesh;
}

declare class MDLNoiseTexture extends MDLTexture {
  initVectorNoiseWithSmoothnessNameTextureDimensionsChannelEncoding(smoothness: number, name: string | null, textureDimensions: unknown /* ext vector */, channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>): this;

  initScalarNoiseWithSmoothnessNameTextureDimensionsChannelCountChannelEncodingGrayscale(smoothness: number, name: string | null, textureDimensions: unknown /* ext vector */, channelCount: number, channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>, grayscale: boolean): this;

  initCellularNoiseWithFrequencyNameTextureDimensionsChannelEncoding(frequency: number, name: string | null, textureDimensions: unknown /* ext vector */, channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>): this;
}

declare class MDLTextureSampler extends NSObject {
  texture: MDLTexture;

  hardwareFilter: MDLTextureFilter;

  transform: MDLTransform;
}

declare class MDLObject extends NSObject implements MDLNamed {
  readonly components: NSArray;

  setComponentForProtocol(component: MDLComponent, protocol: interop.PointerConvertible): void;

  componentConformingToProtocol(protocol: interop.PointerConvertible): MDLComponent;

  objectForKeyedSubscript(key: interop.PointerConvertible): MDLComponent;

  setObjectForKeyedSubscript(obj: MDLComponent | null, key: interop.PointerConvertible): void;

  parent: MDLObject;

  instance: MDLObject;

  readonly path: string;

  objectAtPath(path: string): MDLObject;

  enumerateChildObjectsOfClassRootUsingBlockStopPointer(objectClass: interop.Object, root: MDLObject, block: (p1: MDLObject, p2: interop.PointerConvertible) => void, stopPointer: interop.PointerConvertible): void;

  transform: MDLTransformComponent;

  children: MDLObjectContainerComponent;

  hidden: boolean;

  addChild(child: MDLObject): void;

  boundingBoxAtTime(time: number): MDLAxisAlignedBoundingBox;

  name: string;
}

declare class MDLPhysicallyPlausibleLight extends MDLLight {
  setColorByTemperature(temperature: number): void;

  get color(): interop.Pointer;
  set color(value: interop.PointerConvertible);

  lumens: number;

  innerConeAngle: number;

  outerConeAngle: number;

  attenuationStartDistance: number;

  attenuationEndDistance: number;
}

declare class MDLTransformRotateYOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedScalar;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLUtility extends NSObject {
  static convertToUSDZWriteToURL(inputURL: NSURL, outputURL: NSURL): void;
}

declare class MDLTransformStack extends NSObject implements NSCopying, MDLTransformComponent {
  init(): this;

  addTranslateOpInverse(animatedValueName: string, inverse: boolean): MDLTransformTranslateOp;

  addRotateXOpInverse(animatedValueName: string, inverse: boolean): MDLTransformRotateXOp;

  addRotateYOpInverse(animatedValueName: string, inverse: boolean): MDLTransformRotateYOp;

  addRotateZOpInverse(animatedValueName: string, inverse: boolean): MDLTransformRotateZOp;

  addRotateOpOrderInverse(animatedValueName: string, order: interop.Enum<typeof MDLTransformOpRotationOrder>, inverse: boolean): MDLTransformRotateOp;

  addScaleOpInverse(animatedValueName: string, inverse: boolean): MDLTransformScaleOp;

  addMatrixOpInverse(animatedValueName: string, inverse: boolean): MDLTransformMatrixOp;

  addOrientOpInverse(animatedValueName: string, inverse: boolean): MDLTransformOrientOp;

  animatedValueWithName(name: string): MDLAnimatedValue;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  count(): number;

  readonly keyTimes: NSArray;

  readonly transformOps: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  matrix: simd_float4x4;

  resetsTransform: boolean;

  readonly minimumTime: number;

  readonly maximumTime: number;

  setLocalTransformForTime(transform: simd_float4x4, time: number): void;

  setLocalTransform(transform: simd_float4x4): void;

  localTransformAtTime(time: number): simd_float4x4;

  static globalTransformWithObjectAtTime(object: MDLObject, time: number): simd_float4x4;

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

declare class MDLTransformOrientOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedQuaternion;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLTransformTranslateOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedVector3;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLTransformRotateZOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedScalar;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLNormalMapTexture extends MDLTexture {
  initByGeneratingNormalMapWithTextureNameSmoothnessContrast(sourceTexture: MDLTexture, name: string | null, smoothness: number, contrast: number): this;
}

declare class MDLColorSwatchTexture extends MDLTexture {
  initWithColorTemperatureGradientFromToColorTemperatureNameTextureDimensions(colorTemperature1: number, colorTemperature2: number, name: string | null, textureDimensions: unknown /* ext vector */): this;

  initWithColorGradientFromToColorNameTextureDimensions(color1: interop.PointerConvertible, color2: interop.PointerConvertible, name: string | null, textureDimensions: unknown /* ext vector */): this;
}

declare class MDLSkyCubeTexture extends MDLTexture {
  initWithNameChannelEncodingTextureDimensionsTurbiditySunElevationUpperAtmosphereScatteringGroundAlbedo(name: string | null, channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>, textureDimensions: unknown /* ext vector */, turbidity: number, sunElevation: number, upperAtmosphereScattering: number, groundAlbedo: number): this;

  initWithNameChannelEncodingTextureDimensionsTurbiditySunElevationSunAzimuthUpperAtmosphereScatteringGroundAlbedo(name: string | null, channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>, textureDimensions: unknown /* ext vector */, turbidity: number, sunElevation: number, sunAzimuth: number, upperAtmosphereScattering: number, groundAlbedo: number): this;

  updateTexture(): void;

  turbidity: number;

  sunElevation: number;

  sunAzimuth: number;

  upperAtmosphereScattering: number;

  groundAlbedo: number;

  horizonElevation: number;

  get groundColor(): interop.Pointer;
  set groundColor(value: interop.PointerConvertible);

  gamma: number;

  exposure: number;

  brightness: number;

  contrast: number;

  saturation: number;

  highDynamicRangeCompression: unknown /* ext vector */;
}

declare class MDLCheckerboardTexture extends MDLTexture {
  initWithDivisionsNameDimensionsChannelCountChannelEncodingColor1Color2(divisions: number, name: string | null, dimensions: unknown /* ext vector */, channelCount: number, channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>, color1: interop.PointerConvertible, color2: interop.PointerConvertible): this;

  divisions: number;

  get color1(): interop.Pointer;
  set color1(value: interop.PointerConvertible);

  get color2(): interop.Pointer;
  set color2(value: interop.PointerConvertible);
}

declare class MDLURLTexture extends MDLTexture {
  initWithURLName(URL: NSURL, name: string | null): this;

  URL: NSURL;
}

declare class MDLMesh extends MDLObject {
  initWithBufferAllocator(bufferAllocator: MDLMeshBufferAllocator | null): this;

  initWithVertexBufferVertexCountDescriptorSubmeshes(vertexBuffer: MDLMeshBuffer, vertexCount: number, descriptor: MDLVertexDescriptor, submeshes: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithVertexBuffersVertexCountDescriptorSubmeshes(vertexBuffers: NSArray<interop.Object> | Array<interop.Object>, vertexCount: number, descriptor: MDLVertexDescriptor, submeshes: NSArray<interop.Object> | Array<interop.Object>): this;

  vertexAttributeDataForAttributeNamed(name: string): MDLVertexAttributeData;

  vertexAttributeDataForAttributeNamedAsFormat(name: string, format: interop.Enum<typeof MDLVertexFormat>): MDLVertexAttributeData;

  readonly boundingBox: MDLAxisAlignedBoundingBox;

  vertexDescriptor: MDLVertexDescriptor;

  vertexCount: number;

  get vertexBuffers(): NSArray;
  set vertexBuffers(value: NSArray<interop.Object> | Array<interop.Object>);

  submeshes: NSMutableArray;

  readonly allocator: MDLMeshBufferAllocator;

  addAttributeWithNameFormat(name: string, format: interop.Enum<typeof MDLVertexFormat>): void;

  addAttributeWithNameFormatTypeDataStride(name: string, format: interop.Enum<typeof MDLVertexFormat>, type: string, data: NSData, stride: number): void;

  addAttributeWithNameFormatTypeDataStrideTime(name: string, format: interop.Enum<typeof MDLVertexFormat>, type: string, data: NSData, stride: number, time: number): void;

  addNormalsWithAttributeNamedCreaseThreshold(attributeName: string | null, creaseThreshold: number): void;

  addTangentBasisForTextureCoordinateAttributeNamedTangentAttributeNamedBitangentAttributeNamed(textureCoordinateAttributeName: string, tangentAttributeName: string, bitangentAttributeName: string | null): void;

  addTangentBasisForTextureCoordinateAttributeNamedNormalAttributeNamedTangentAttributeNamed(textureCoordinateAttributeName: string, normalAttributeName: string, tangentAttributeName: string): void;

  addOrthTanBasisForTextureCoordinateAttributeNamedNormalAttributeNamedTangentAttributeNamed(textureCoordinateAttributeName: string, normalAttributeName: string, tangentAttributeName: string): void;

  addUnwrappedTextureCoordinatesForAttributeNamed(textureCoordinateAttributeName: string): void;

  flipTextureCoordinatesInAttributeNamed(textureCoordinateAttributeName: string): void;

  makeVerticesUnique(): void;

  makeVerticesUniqueAndReturnError(error: interop.PointerConvertible): boolean;

  replaceAttributeNamedWithData(name: string, newData: MDLVertexAttributeData): void;

  updateAttributeNamedWithData(name: string, newData: MDLVertexAttributeData): void;

  removeAttributeNamed(name: string): void;

  initBoxWithExtentSegmentsInwardNormalsGeometryTypeAllocator(extent: unknown /* ext vector */, segments: unknown /* ext vector */, inwardNormals: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initSphereWithExtentSegmentsInwardNormalsGeometryTypeAllocator(extent: unknown /* ext vector */, segments: unknown /* ext vector */, inwardNormals: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initHemisphereWithExtentSegmentsInwardNormalsCapGeometryTypeAllocator(extent: unknown /* ext vector */, segments: unknown /* ext vector */, inwardNormals: boolean, cap: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initCylinderWithExtentSegmentsInwardNormalsTopCapBottomCapGeometryTypeAllocator(extent: unknown /* ext vector */, segments: unknown /* ext vector */, inwardNormals: boolean, topCap: boolean, bottomCap: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initCapsuleWithExtentCylinderSegmentsHemisphereSegmentsInwardNormalsGeometryTypeAllocator(extent: unknown /* ext vector */, segments: unknown /* ext vector */, hemisphereSegments: number, inwardNormals: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initConeWithExtentSegmentsInwardNormalsCapGeometryTypeAllocator(extent: unknown /* ext vector */, segments: unknown /* ext vector */, inwardNormals: boolean, cap: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initPlaneWithExtentSegmentsGeometryTypeAllocator(extent: unknown /* ext vector */, segments: unknown /* ext vector */, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initIcosahedronWithExtentInwardNormalsGeometryTypeAllocator(extent: unknown /* ext vector */, inwardNormals: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): this;

  initMeshBySubdividingMeshSubmeshIndexSubdivisionLevelsAllocator(mesh: MDLMesh, submeshIndex: number, subdivisionLevels: number, allocator: MDLMeshBufferAllocator | null): this;

  static newBoxWithDimensionsSegmentsGeometryTypeInwardNormalsAllocator<This extends abstract new (...args: any) => any>(this: This, dimensions: unknown /* ext vector */, segments: unknown /* ext vector */, geometryType: interop.Enum<typeof MDLGeometryType>, inwardNormals: boolean, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newEllipsoidWithRadiiRadialSegmentsVerticalSegmentsGeometryTypeInwardNormalsHemisphereAllocator<This extends abstract new (...args: any) => any>(this: This, radii: unknown /* ext vector */, radialSegments: number, verticalSegments: number, geometryType: interop.Enum<typeof MDLGeometryType>, inwardNormals: boolean, hemisphere: boolean, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newCylinderWithHeightRadiiRadialSegmentsVerticalSegmentsGeometryTypeInwardNormalsAllocator<This extends abstract new (...args: any) => any>(this: This, height: number, radii: unknown /* ext vector */, radialSegments: number, verticalSegments: number, geometryType: interop.Enum<typeof MDLGeometryType>, inwardNormals: boolean, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newCapsuleWithHeightRadiiRadialSegmentsVerticalSegmentsHemisphereSegmentsGeometryTypeInwardNormalsAllocator<This extends abstract new (...args: any) => any>(this: This, height: number, radii: unknown /* ext vector */, radialSegments: number, verticalSegments: number, hemisphereSegments: number, geometryType: interop.Enum<typeof MDLGeometryType>, inwardNormals: boolean, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newEllipticalConeWithHeightRadiiRadialSegmentsVerticalSegmentsGeometryTypeInwardNormalsAllocator<This extends abstract new (...args: any) => any>(this: This, height: number, radii: unknown /* ext vector */, radialSegments: number, verticalSegments: number, geometryType: interop.Enum<typeof MDLGeometryType>, inwardNormals: boolean, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newPlaneWithDimensionsSegmentsGeometryTypeAllocator<This extends abstract new (...args: any) => any>(this: This, dimensions: unknown /* ext vector */, segments: unknown /* ext vector */, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newIcosahedronWithRadiusInwardNormalsGeometryTypeAllocator<This extends abstract new (...args: any) => any>(this: This, radius: number, inwardNormals: boolean, geometryType: interop.Enum<typeof MDLGeometryType>, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newIcosahedronWithRadiusInwardNormalsAllocator<This extends abstract new (...args: any) => any>(this: This, radius: number, inwardNormals: boolean, allocator: MDLMeshBufferAllocator | null): InstanceType<This>;

  static newSubdividedMeshSubmeshIndexSubdivisionLevels<This extends abstract new (...args: any) => any>(this: This, mesh: MDLMesh, submeshIndex: number, subdivisionLevels: number): InstanceType<This>;

  generateAmbientOcclusionTextureWithSizeRaysPerSampleAttenuationFactorObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(textureSize: unknown /* ext vector */, raysPerSample: number, attenuationFactor: number, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, vertexAttributeName: string, materialPropertyName: string): boolean;

  generateAmbientOcclusionTextureWithQualityAttenuationFactorObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(bakeQuality: number, attenuationFactor: number, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, vertexAttributeName: string, materialPropertyName: string): boolean;

  generateAmbientOcclusionVertexColorsWithRaysPerSampleAttenuationFactorObjectsToConsiderVertexAttributeNamed(raysPerSample: number, attenuationFactor: number, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, vertexAttributeName: string): boolean;

  generateAmbientOcclusionVertexColorsWithQualityAttenuationFactorObjectsToConsiderVertexAttributeNamed(bakeQuality: number, attenuationFactor: number, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, vertexAttributeName: string): boolean;

  generateLightMapTextureWithTextureSizeLightsToConsiderObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(textureSize: unknown /* ext vector */, lightsToConsider: NSArray<interop.Object> | Array<interop.Object>, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, vertexAttributeName: string, materialPropertyName: string): boolean;

  generateLightMapTextureWithQualityLightsToConsiderObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(bakeQuality: number, lightsToConsider: NSArray<interop.Object> | Array<interop.Object>, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, vertexAttributeName: string, materialPropertyName: string): boolean;

  generateLightMapVertexColorsWithLightsToConsiderObjectsToConsiderVertexAttributeNamed(lightsToConsider: NSArray<interop.Object> | Array<interop.Object>, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, vertexAttributeName: string): boolean;
}

declare class MDLVertexAttributeData extends NSObject {
  map: MDLMeshBufferMap;

  get dataStart(): interop.Pointer;
  set dataStart(value: interop.PointerConvertible);

  stride: number;

  format: interop.Enum<typeof MDLVertexFormat>;

  bufferSize: number;
}

declare class MDLSubmeshTopology extends NSObject {
  initWithSubmesh(submesh: MDLSubmesh): this;

  faceTopology: MDLMeshBuffer;

  faceCount: number;

  vertexCreaseIndices: MDLMeshBuffer;

  vertexCreases: MDLMeshBuffer;

  vertexCreaseCount: number;

  edgeCreaseIndices: MDLMeshBuffer;

  edgeCreases: MDLMeshBuffer;

  edgeCreaseCount: number;

  holes: MDLMeshBuffer;

  holeCount: number;
}

declare class MDLMaterialPropertyNode extends NSObject implements MDLNamed {
  initWithInputsOutputsEvaluationFunction(inputs: NSArray<interop.Object> | Array<interop.Object>, outputs: NSArray<interop.Object> | Array<interop.Object>, function$: (p1: MDLMaterialPropertyNode) => void): this;

  evaluationFunction: (p1: MDLMaterialPropertyNode) => void;

  readonly inputs: NSArray;

  readonly outputs: NSArray;

  name: string;
}

declare class MDLMaterialPropertyConnection extends NSObject implements MDLNamed {
  initWithOutputInput(output: MDLMaterialProperty, input: MDLMaterialProperty): this;

  readonly output: MDLMaterialProperty | null;

  readonly input: MDLMaterialProperty | null;

  name: string;
}

declare class MDLMaterialProperty extends NSObject implements MDLNamed, NSCopying {
  initWithNameSemantic(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>): this;

  initWithNameSemanticFloat(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, value: number): this;

  initWithNameSemanticFloat2(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, value: unknown /* ext vector */): this;

  initWithNameSemanticFloat3(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, value: unknown /* ext vector */): this;

  initWithNameSemanticFloat4(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, value: unknown /* ext vector */): this;

  initWithNameSemanticMatrix4x4(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, value: simd_float4x4): this;

  initWithNameSemanticURL(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, URL: NSURL | null): this;

  initWithNameSemanticString(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, string: string | null): this;

  initWithNameSemanticTextureSampler(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, textureSampler: MDLTextureSampler | null): this;

  initWithNameSemanticColor(name: string, semantic: interop.Enum<typeof MDLMaterialSemantic>, color: interop.PointerConvertible): this;

  setProperties(property: MDLMaterialProperty): void;

  semantic: interop.Enum<typeof MDLMaterialSemantic>;

  type: interop.Enum<typeof MDLMaterialPropertyType>;

  name: string;

  stringValue: string;

  URLValue: NSURL;

  textureSamplerValue: MDLTextureSampler;

  get color(): interop.Pointer;
  set color(value: interop.PointerConvertible);

  floatValue: number;

  float2Value: unknown /* ext vector */;

  float3Value: unknown /* ext vector */;

  float4Value: unknown /* ext vector */;

  matrix4x4: simd_float4x4;

  luminance: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLLightProbe extends MDLLight {
  initWithReflectiveTextureIrradianceTexture(reflectiveTexture: MDLTexture | null, irradianceTexture: MDLTexture | null): this;

  generateSphericalHarmonicsFromIrradiance(sphericalHarmonicsLevel: number): void;

  readonly reflectiveTexture: MDLTexture;

  readonly irradianceTexture: MDLTexture;

  readonly sphericalHarmonicsLevel: number;

  readonly sphericalHarmonicsCoefficients: NSData;

  static lightProbeWithTextureSizeForLocationLightsToConsiderObjectsToConsiderReflectiveCubemapIrradianceCubemap(textureSize: number, transform: MDLTransform, lightsToConsider: NSArray<interop.Object> | Array<interop.Object>, objectsToConsider: NSArray<interop.Object> | Array<interop.Object>, reflectiveCubemap: MDLTexture | null, irradianceCubemap: MDLTexture | null): MDLLightProbe;
}

declare class MDLPhotometricLight extends MDLPhysicallyPlausibleLight {
  initWithIESProfile(URL: NSURL): this;

  generateSphericalHarmonicsFromLight(sphericalHarmonicsLevel: number): void;

  generateCubemapFromLight(textureSize: number): void;

  generateTexture(textureSize: number): MDLTexture;

  readonly lightCubeMap: MDLTexture;

  readonly sphericalHarmonicsLevel: number;

  readonly sphericalHarmonicsCoefficients: NSData;
}

declare class MDLAreaLight extends MDLPhysicallyPlausibleLight {
  areaRadius: number;

  superEllipticPower: unknown /* ext vector */;

  aspect: number;
}

declare class MDLCamera extends MDLObject {
  readonly projectionMatrix: simd_float4x4;

  projection: interop.Enum<typeof MDLCameraProjection>;

  frameBoundingBoxSetNearAndFar(boundingBox: MDLAxisAlignedBoundingBox, setNearAndFar: boolean): void;

  lookAt(focusPosition: unknown /* ext vector */): void;

  lookAtFrom(focusPosition: unknown /* ext vector */, cameraPosition: unknown /* ext vector */): void;

  rayToForViewPort(pixel: unknown /* ext vector */, size: unknown /* ext vector */): unknown /* ext vector */;

  nearVisibilityDistance: number;

  farVisibilityDistance: number;

  worldToMetersConversionScale: number;

  barrelDistortion: number;

  fisheyeDistortion: number;

  opticalVignetting: number;

  chromaticAberration: number;

  focalLength: number;

  focusDistance: number;

  fieldOfView: number;

  fStop: number;

  apertureBladeCount: number;

  maximumCircleOfConfusion: number;

  bokehKernelWithSize(size: unknown /* ext vector */): MDLTexture;

  shutterOpenInterval: number;

  sensorVerticalAperture: number;

  sensorAspect: number;

  sensorEnlargement: unknown /* ext vector */;

  sensorShift: unknown /* ext vector */;

  flash: unknown /* ext vector */;

  exposureCompression: unknown /* ext vector */;

  exposure: unknown /* ext vector */;
}

declare class MDLAsset extends NSObject implements NSCopying, NSFastEnumeration {
  initWithURL(URL: NSURL): this;

  initWithURLVertexDescriptorBufferAllocator(URL: NSURL | null, vertexDescriptor: MDLVertexDescriptor | null, bufferAllocator: MDLMeshBufferAllocator | null): this;

  initWithBufferAllocator(bufferAllocator: MDLMeshBufferAllocator | null): this;

  initWithURLVertexDescriptorBufferAllocatorPreserveTopologyError(URL: NSURL, vertexDescriptor: MDLVertexDescriptor | null, bufferAllocator: MDLMeshBufferAllocator | null, preserveTopology: boolean, error: interop.PointerConvertible): this;

  exportAssetToURL(URL: NSURL): boolean;

  exportAssetToURLError(URL: NSURL, error: interop.PointerConvertible): boolean;

  objectAtPath(path: string): MDLObject;

  static canImportFileExtension(extension: string): boolean;

  static canExportFileExtension(extension: string): boolean;

  childObjectsOfClass(objectClass: interop.Object): NSArray;

  loadTextures(): void;

  boundingBoxAtTime(time: number): MDLAxisAlignedBoundingBox;

  readonly boundingBox: MDLAxisAlignedBoundingBox;

  frameInterval: number;

  startTime: number;

  endTime: number;

  upAxis: unknown /* ext vector */;

  readonly URL: NSURL;

  resolver: MDLAssetResolver;

  readonly bufferAllocator: MDLMeshBufferAllocator;

  readonly vertexDescriptor: MDLVertexDescriptor;

  addObject(object: MDLObject): void;

  removeObject(object: MDLObject): void;

  readonly count: number;

  objectAtIndexedSubscript(index: number): MDLObject;

  objectAtIndex(index: number): MDLObject;

  masters: MDLObjectContainerComponent;

  originals: MDLObjectContainerComponent;

  animations: MDLObjectContainerComponent;

  static placeLightProbesWithDensityHeuristicUsingIrradianceDataSource(value: number, type: interop.Enum<typeof MDLProbePlacement>, dataSource: MDLLightProbeIrradianceDataSource): NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;

  readonly [Symbol.iterator]: () => Iterator<any>;

}

declare class MDLPackedJointAnimation extends MDLObject implements NSCopying, MDLJointAnimation {
  readonly jointPaths: NSArray;

  readonly translations: MDLAnimatedVector3Array;

  readonly rotations: MDLAnimatedQuaternionArray;

  readonly scales: MDLAnimatedVector3Array;

  initWithNameJointPaths(name: string, jointPaths: NSArray<interop.Object> | Array<interop.Object>): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLSkeleton extends MDLObject implements NSCopying {
  readonly jointPaths: NSArray;

  readonly jointBindTransforms: MDLMatrix4x4Array;

  readonly jointRestTransforms: MDLMatrix4x4Array;

  initWithNameJointPaths(name: string, jointPaths: NSArray<interop.Object> | Array<interop.Object>): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLAnimatedMatrix4x4 extends MDLAnimatedValue {
  setFloat4x4AtTime(value: simd_float4x4, time: number): void;

  setDouble4x4AtTime(value: simd_double4x4, time: number): void;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  resetWithFloat4x4ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  resetWithDouble4x4ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  getFloat4x4ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDouble4x4ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLAnimatedQuaternion extends MDLAnimatedValue {
  setFloatQuaternionAtTime(value: simd_quatf, time: number): void;

  setDoubleQuaternionAtTime(value: simd_quatd, time: number): void;

  floatQuaternionAtTime(time: number): simd_quatf;

  doubleQuaternionAtTime(time: number): simd_quatd;

  resetWithFloatQuaternionArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  resetWithDoubleQuaternionArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  getFloatQuaternionArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDoubleQuaternionArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLAnimatedVector3 extends MDLAnimatedValue {
  setFloat3AtTime(value: unknown /* ext vector */, time: number): void;

  setDouble3AtTime(value: unknown /* ext vector */, time: number): void;

  float3AtTime(time: number): unknown /* ext vector */;

  double3AtTime(time: number): unknown /* ext vector */;

  resetWithFloat3ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  resetWithDouble3ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  getFloat3ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDouble3ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLAnimatedScalar extends MDLAnimatedValue {
  setFloatAtTime(value: number, time: number): void;

  setDoubleAtTime(value: number, time: number): void;

  floatAtTime(time: number): number;

  doubleAtTime(time: number): number;

  resetWithFloatArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  resetWithDoubleArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  getFloatArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDoubleArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLAnimatedQuaternionArray extends MDLAnimatedValue {
  readonly elementCount: number;

  initWithElementCount(arrayElementCount: number): this;

  setFloatQuaternionArrayCountAtTime(array: interop.PointerConvertible, count: number, time: number): void;

  setDoubleQuaternionArrayCountAtTime(array: interop.PointerConvertible, count: number, time: number): void;

  getFloatQuaternionArrayMaxCountAtTime(array: interop.PointerConvertible, maxCount: number, time: number): number;

  getDoubleQuaternionArrayMaxCountAtTime(array: interop.PointerConvertible, maxCount: number, time: number): number;

  resetWithFloatQuaternionArrayCountAtTimesCount(valuesArray: interop.PointerConvertible, valuesCount: number, timesArray: interop.PointerConvertible, timesCount: number): void;

  resetWithDoubleQuaternionArrayCountAtTimesCount(valuesArray: interop.PointerConvertible, valuesCount: number, timesArray: interop.PointerConvertible, timesCount: number): void;

  getFloatQuaternionArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDoubleQuaternionArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLAnimatedVector3Array extends MDLAnimatedValue {
  readonly elementCount: number;

  initWithElementCount(arrayElementCount: number): this;

  setFloat3ArrayCountAtTime(array: interop.PointerConvertible, count: number, time: number): void;

  setDouble3ArrayCountAtTime(array: interop.PointerConvertible, count: number, time: number): void;

  getFloat3ArrayMaxCountAtTime(array: interop.PointerConvertible, maxCount: number, time: number): number;

  getDouble3ArrayMaxCountAtTime(array: interop.PointerConvertible, maxCount: number, time: number): number;

  resetWithFloat3ArrayCountAtTimesCount(valuesArray: interop.PointerConvertible, valuesCount: number, timesArray: interop.PointerConvertible, timesCount: number): void;

  resetWithDouble3ArrayCountAtTimesCount(valuesArray: interop.PointerConvertible, valuesCount: number, timesArray: interop.PointerConvertible, timesCount: number): void;

  getFloat3ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDouble3ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLMatrix4x4Array extends NSObject implements NSCopying {
  readonly elementCount: number;

  readonly precision: interop.Enum<typeof MDLDataPrecision>;

  clear(): void;

  initWithElementCount(arrayElementCount: number): this;

  setFloat4x4ArrayCount(valuesArray: interop.PointerConvertible, count: number): void;

  setDouble4x4ArrayCount(valuesArray: interop.PointerConvertible, count: number): void;

  getFloat4x4ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDouble4x4ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLVertexDescriptor extends NSObject implements NSCopying {
  initWithVertexDescriptor(vertexDescriptor: MDLVertexDescriptor): this;

  attributeNamed(name: string): MDLVertexAttribute;

  addOrReplaceAttribute(attribute: MDLVertexAttribute): void;

  removeAttributeNamed(name: string): void;

  attributes: NSMutableArray;

  layouts: NSMutableArray;

  reset(): void;

  setPackedStrides(): void;

  setPackedOffsets(): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLVertexAttribute extends NSObject implements NSCopying {
  initWithNameFormatOffsetBufferIndex(name: string, format: interop.Enum<typeof MDLVertexFormat>, offset: number, bufferIndex: number): this;

  name: string;

  format: interop.Enum<typeof MDLVertexFormat>;

  offset: number;

  bufferIndex: number;

  time: number;

  initializationValue: unknown /* ext vector */;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLMeshBufferZoneDefault extends NSObject implements MDLMeshBufferZone {
  readonly capacity: number;

  readonly allocator: MDLMeshBufferAllocator;

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

declare class MDLMeshBufferDataAllocator extends NSObject implements MDLMeshBufferAllocator {
  newZone(capacity: number): MDLMeshBufferZone;

  newZoneForBuffersWithSizeAndType(sizes: NSArray<interop.Object> | Array<interop.Object>, types: NSArray<interop.Object> | Array<interop.Object>): MDLMeshBufferZone;

  newBufferType(length: number, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;

  newBufferWithDataType(data: NSData, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;

  newBufferFromZoneLengthType(zone: MDLMeshBufferZone | null, length: number, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;

  newBufferFromZoneDataType(zone: MDLMeshBufferZone | null, data: NSData, type: interop.Enum<typeof MDLMeshBufferType>): MDLMeshBuffer;

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
declare class MDLMeshBufferData extends NSObject implements MDLMeshBuffer {
  initWithTypeLength(type: interop.Enum<typeof MDLMeshBufferType>, length: number): this;

  initWithTypeData(type: interop.Enum<typeof MDLMeshBufferType>, data: NSData | null): this;

  readonly data: NSData;

  fillDataOffset(data: NSData, offset: number): void;

  map(): MDLMeshBufferMap;

  readonly length: number;

  readonly allocator: MDLMeshBufferAllocator;

  // @ts-ignore MemberDecl.tsIgnore
  readonly zone: MDLMeshBufferZone;

  readonly type: interop.Enum<typeof MDLMeshBufferType>;

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

  readonly description: string;

  readonly debugDescription: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLMeshBufferMap extends NSObject {
  initWithBytesDeallocator(bytes: interop.PointerConvertible, deallocator: () => void | null): this;

  readonly bytes: interop.Pointer;
}

declare class MDLTransform extends NSObject implements NSCopying, MDLTransformComponent {
  init(): this;

  initWithIdentity(): this;

  initWithTransformComponent(component: MDLTransformComponent): this;

  initWithTransformComponentResetsTransform(component: MDLTransformComponent, resetsTransform: boolean): this;

  initWithMatrix(matrix: simd_float4x4): this;

  initWithMatrixResetsTransform(matrix: simd_float4x4, resetsTransform: boolean): this;

  setIdentity(): void;

  translationAtTime(time: number): unknown /* ext vector */;

  rotationAtTime(time: number): unknown /* ext vector */;

  shearAtTime(time: number): unknown /* ext vector */;

  scaleAtTime(time: number): unknown /* ext vector */;

  setMatrixForTime(matrix: simd_float4x4, time: number): void;

  setTranslationForTime(translation: unknown /* ext vector */, time: number): void;

  setRotationForTime(rotation: unknown /* ext vector */, time: number): void;

  setShearForTime(shear: unknown /* ext vector */, time: number): void;

  setScaleForTime(scale: unknown /* ext vector */, time: number): void;

  rotationMatrixAtTime(time: number): simd_float4x4;

  translation: unknown /* ext vector */;

  rotation: unknown /* ext vector */;

  shear: unknown /* ext vector */;

  scale: unknown /* ext vector */;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  matrix: simd_float4x4;

  resetsTransform: boolean;

  readonly minimumTime: number;

  readonly maximumTime: number;

  readonly keyTimes: NSArray;

  setLocalTransformForTime(transform: simd_float4x4, time: number): void;

  setLocalTransform(transform: simd_float4x4): void;

  localTransformAtTime(time: number): simd_float4x4;

  static globalTransformWithObjectAtTime(object: MDLObject, time: number): simd_float4x4;

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

declare class MDLPathAssetResolver extends NSObject implements MDLAssetResolver {
  initWithPath(path: string): this;

  path: string;

  canResolveAssetNamed(name: string): boolean;

  resolveAssetNamed(name: string): NSURL;

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

declare class MDLSubmesh extends NSObject implements MDLNamed {
  initWithNameIndexBufferIndexCountIndexTypeGeometryTypeMaterial(name: string, indexBuffer: MDLMeshBuffer, indexCount: number, indexType: interop.Enum<typeof MDLIndexBitDepth>, geometryType: interop.Enum<typeof MDLGeometryType>, material: MDLMaterial | null): this;

  initWithIndexBufferIndexCountIndexTypeGeometryTypeMaterial(indexBuffer: MDLMeshBuffer, indexCount: number, indexType: interop.Enum<typeof MDLIndexBitDepth>, geometryType: interop.Enum<typeof MDLGeometryType>, material: MDLMaterial | null): this;

  initWithNameIndexBufferIndexCountIndexTypeGeometryTypeMaterialTopology(name: string, indexBuffer: MDLMeshBuffer, indexCount: number, indexType: interop.Enum<typeof MDLIndexBitDepth>, geometryType: interop.Enum<typeof MDLGeometryType>, material: MDLMaterial | null, topology: MDLSubmeshTopology | null): this;

  initWithMDLSubmeshIndexTypeGeometryType(submesh: MDLSubmesh, indexType: interop.Enum<typeof MDLIndexBitDepth>, geometryType: interop.Enum<typeof MDLGeometryType>): this;

  readonly indexBuffer: MDLMeshBuffer;

  indexBufferAsIndexType(indexType: interop.Enum<typeof MDLIndexBitDepth>): MDLMeshBuffer;

  readonly indexCount: number;

  readonly indexType: interop.Enum<typeof MDLIndexBitDepth>;

  readonly geometryType: interop.Enum<typeof MDLGeometryType>;

  material: MDLMaterial;

  topology: MDLSubmeshTopology;

  name: string;
}

declare class MDLAnimationBindComponent extends NSObject implements NSCopying, MDLComponent {
  skeleton: MDLSkeleton;

  jointAnimation: MDLJointAnimation;

  get jointPaths(): NSArray;
  set jointPaths(value: NSArray<interop.Object> | Array<interop.Object>);

  geometryBindTransform: simd_double4x4;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

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

declare class MDLVertexBufferLayout extends NSObject implements NSCopying {
  initWithStride(stride: number): this;

  stride: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLRelativeAssetResolver extends NSObject implements MDLAssetResolver {
  initWithAsset(asset: MDLAsset): this;

  asset: MDLAsset | null;

  canResolveAssetNamed(name: string): boolean;

  resolveAssetNamed(name: string): NSURL;

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

declare class MDLBundleAssetResolver extends NSObject implements MDLAssetResolver {
  initWithBundle(path: string): this;

  path: string;

  canResolveAssetNamed(name: string): boolean;

  resolveAssetNamed(name: string): NSURL;

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

declare class MDLTransformRotateXOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedScalar;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLAnimatedValue extends NSObject implements NSCopying {
  isAnimated(): boolean;

  readonly precision: interop.Enum<typeof MDLDataPrecision>;

  readonly timeSampleCount: number;

  readonly minimumTime: number;

  readonly maximumTime: number;

  interpolation: interop.Enum<typeof MDLAnimatedValueInterpolation>;

  readonly keyTimes: NSArray;

  clear(): void;

  getTimesMaxCount(timesArray: interop.PointerConvertible, maxCount: number): number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MDLTransformScaleOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedVector3;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLMaterialPropertyGraph extends MDLMaterialPropertyNode {
  initWithNodesConnections(nodes: NSArray<interop.Object> | Array<interop.Object>, connections: NSArray<interop.Object> | Array<interop.Object>): this;

  evaluate(): void;

  readonly nodes: NSArray;

  readonly connections: NSArray;
}

declare class MDLAnimatedScalarArray extends MDLAnimatedValue {
  readonly elementCount: number;

  initWithElementCount(arrayElementCount: number): this;

  setFloatArrayCountAtTime(array: interop.PointerConvertible, count: number, time: number): void;

  setDoubleArrayCountAtTime(array: interop.PointerConvertible, count: number, time: number): void;

  getFloatArrayMaxCountAtTime(array: interop.PointerConvertible, maxCount: number, time: number): number;

  getDoubleArrayMaxCountAtTime(array: interop.PointerConvertible, maxCount: number, time: number): number;

  resetWithFloatArrayCountAtTimesCount(valuesArray: interop.PointerConvertible, valuesCount: number, timesArray: interop.PointerConvertible, timesCount: number): void;

  resetWithDoubleArrayCountAtTimesCount(valuesArray: interop.PointerConvertible, valuesCount: number, timesArray: interop.PointerConvertible, timesCount: number): void;

  getFloatArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDoubleArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLTransformRotateOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedVector3;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLTexture extends NSObject implements MDLNamed {
  init(): this;

  static textureNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static textureNamedBundle<This extends abstract new (...args: any) => any>(this: This, name: string, bundleOrNil: NSBundle | null): InstanceType<This>;

  static textureNamedAssetResolver<This extends abstract new (...args: any) => any>(this: This, name: string, resolver: MDLAssetResolver): InstanceType<This>;

  static textureCubeWithImagesNamed<This extends abstract new (...args: any) => any>(this: This, names: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static textureCubeWithImagesNamedBundle<This extends abstract new (...args: any) => any>(this: This, names: NSArray<interop.Object> | Array<interop.Object>, bundleOrNil: NSBundle | null): InstanceType<This>;

  static irradianceTextureCubeWithTextureNameDimensions<This extends abstract new (...args: any) => any>(this: This, texture: MDLTexture, name: string | null, dimensions: unknown /* ext vector */): InstanceType<This>;

  static irradianceTextureCubeWithTextureNameDimensionsRoughness<This extends abstract new (...args: any) => any>(this: This, texture: MDLTexture, name: string | null, dimensions: unknown /* ext vector */, roughness: number): InstanceType<This>;

  initWithDataTopLeftOriginNameDimensionsRowStrideChannelCountChannelEncodingIsCube(pixelData: NSData | null, topLeftOrigin: boolean, name: string | null, dimensions: unknown /* ext vector */, rowStride: number, channelCount: number, channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>, isCube: boolean): this;

  writeToURL(URL: NSURL): boolean;

  writeToURLLevel(URL: NSURL, level: number): boolean;

  writeToURLType(nsurl: NSURL, type: interop.PointerConvertible): boolean;

  writeToURLTypeLevel(nsurl: NSURL, type: interop.PointerConvertible, level: number): boolean;

  imageFromTexture(): interop.Pointer;

  imageFromTextureAtLevel(level: number): interop.Pointer;

  texelDataWithTopLeftOrigin(): NSData;

  texelDataWithBottomLeftOrigin(): NSData;

  texelDataWithTopLeftOriginAtMipLevelCreate(level: number, create: boolean): NSData;

  texelDataWithBottomLeftOriginAtMipLevelCreate(level: number, create: boolean): NSData;

  readonly dimensions: unknown /* ext vector */;

  readonly rowStride: number;

  readonly channelCount: number;

  readonly mipLevelCount: number;

  readonly channelEncoding: interop.Enum<typeof MDLTextureChannelEncoding>;

  isCube: boolean;

  hasAlphaValues: boolean;

  name: string;
}

declare class MDLPhysicallyPlausibleScatteringFunction extends MDLScatteringFunction {
  readonly version: number;

  readonly subsurface: MDLMaterialProperty;

  readonly metallic: MDLMaterialProperty;

  readonly specularAmount: MDLMaterialProperty;

  readonly specularTint: MDLMaterialProperty;

  readonly roughness: MDLMaterialProperty;

  readonly anisotropic: MDLMaterialProperty;

  readonly anisotropicRotation: MDLMaterialProperty;

  readonly sheen: MDLMaterialProperty;

  readonly sheenTint: MDLMaterialProperty;

  readonly clearcoat: MDLMaterialProperty;

  readonly clearcoatGloss: MDLMaterialProperty;
}

declare class MDLAnimatedVector2 extends MDLAnimatedValue {
  setFloat2AtTime(value: unknown /* ext vector */, time: number): void;

  setDouble2AtTime(value: unknown /* ext vector */, time: number): void;

  float2AtTime(time: number): unknown /* ext vector */;

  double2AtTime(time: number): unknown /* ext vector */;

  resetWithFloat2ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  resetWithDouble2ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  getFloat2ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDouble2ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLTransformMatrixOp extends NSObject implements MDLTransformOp {
  readonly name: string;

  readonly animatedValue: MDLAnimatedMatrix4x4;

  float4x4AtTime(time: number): simd_float4x4;

  double4x4AtTime(time: number): simd_double4x4;

  IsInverseOp(): boolean;
}

declare class MDLAnimatedVector4 extends MDLAnimatedValue {
  setFloat4AtTime(value: unknown /* ext vector */, time: number): void;

  setDouble4AtTime(value: unknown /* ext vector */, time: number): void;

  float4AtTime(time: number): unknown /* ext vector */;

  double4AtTime(time: number): unknown /* ext vector */;

  resetWithFloat4ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  resetWithDouble4ArrayAtTimesCount(valuesArray: interop.PointerConvertible, timesArray: interop.PointerConvertible, count: number): void;

  getFloat4ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;

  getDouble4ArrayMaxCount(valuesArray: interop.PointerConvertible, maxCount: number): number;
}

declare class MDLTextureFilter extends NSObject {
  sWrapMode: interop.Enum<typeof MDLMaterialTextureWrapMode>;

  tWrapMode: interop.Enum<typeof MDLMaterialTextureWrapMode>;

  rWrapMode: interop.Enum<typeof MDLMaterialTextureWrapMode>;

  minFilter: interop.Enum<typeof MDLMaterialTextureFilterMode>;

  magFilter: interop.Enum<typeof MDLMaterialTextureFilterMode>;

  mipFilter: interop.Enum<typeof MDLMaterialMipMapFilterMode>;
}

declare class MDLObjectContainer extends NSObject implements MDLObjectContainerComponent {
  addObject(object: MDLObject): void;

  removeObject(object: MDLObject): void;

  objectAtIndexedSubscript(index: number): MDLObject;

  readonly count: number;

  readonly objects: NSArray;

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

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;
}

declare class MDLScatteringFunction extends NSObject implements MDLNamed {
  name: string;

  readonly baseColor: MDLMaterialProperty;

  readonly emission: MDLMaterialProperty;

  readonly specular: MDLMaterialProperty;

  readonly materialIndexOfRefraction: MDLMaterialProperty;

  readonly interfaceIndexOfRefraction: MDLMaterialProperty;

  readonly normal: MDLMaterialProperty;

  readonly ambientOcclusion: MDLMaterialProperty;

  readonly ambientOcclusionScale: MDLMaterialProperty;
}

