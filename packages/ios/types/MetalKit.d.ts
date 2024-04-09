/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./UIKit.d.ts" />

declare const MTKTextureLoaderOptionLoadAsArray: string;

declare const MTKModelErrorDomain: string;

declare const MTKTextureLoaderOriginFlippedVertically: string;

declare const MTKTextureLoaderOriginBottomLeft: string;

declare const MTKTextureLoaderOptionOrigin: string;

declare const MTKTextureLoaderOptionTextureStorageMode: string;

declare const MTKTextureLoaderOptionTextureUsage: string;

declare const MTKTextureLoaderOptionSRGB: string;

declare const MTKTextureLoaderOptionGenerateMipmaps: string;

declare const MTKTextureLoaderOptionAllocateMipmaps: string;

declare const MTKTextureLoaderErrorKey: string;

declare const MTKTextureLoaderErrorDomain: string;

declare const MTKTextureLoaderOriginTopLeft: string;

declare const MTKModelErrorKey: string;

declare const MTKTextureLoaderCubeLayoutVertical: string;

declare const MTKTextureLoaderOptionCubeLayout: string;

declare const MTKTextureLoaderOptionTextureCPUCacheMode: string;

declare function MTKModelIOVertexDescriptorFromMetal(metalDescriptor: MTLVertexDescriptor): MDLVertexDescriptor;

declare function MTKModelIOVertexDescriptorFromMetalWithError(metalDescriptor: MTLVertexDescriptor, error: interop.PointerConvertible): MDLVertexDescriptor;

declare function MTKMetalVertexDescriptorFromModelIO(modelIODescriptor: MDLVertexDescriptor): MTLVertexDescriptor;

declare function MTKMetalVertexDescriptorFromModelIOWithError(modelIODescriptor: MDLVertexDescriptor, error: interop.PointerConvertible): MTLVertexDescriptor;

declare function MTKModelIOVertexFormatFromMetal(vertexFormat: interop.Enum<typeof MTLVertexFormat>): interop.Enum<typeof MDLVertexFormat>;

declare function MTKMetalVertexFormatFromModelIO(vertexFormat: interop.Enum<typeof MDLVertexFormat>): interop.Enum<typeof MTLVertexFormat>;

declare interface MTKViewDelegate extends NSObjectProtocol {
  mtkViewDrawableSizeWillChange(view: MTKView, size: CGSize): void;

  drawInMTKView(view: MTKView): void;
}

declare class MTKViewDelegate extends NativeObject implements MTKViewDelegate {
}

declare class MTKSubmesh extends NSObject {
  readonly primitiveType: interop.Enum<typeof MTLPrimitiveType>;

  readonly indexType: interop.Enum<typeof MTLIndexType>;

  readonly indexBuffer: MTKMeshBuffer;

  readonly indexCount: number;

  readonly mesh: MTKMesh;

  name: string;
}

declare class MTKMeshBufferAllocator extends NSObject implements MDLMeshBufferAllocator {
  initWithDevice(device: MTLDevice): this;

  readonly device: MTLDevice;

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

declare class MTKTextureLoader extends NSObject {
  readonly device: MTLDevice;

  initWithDevice(device: MTLDevice): this;

  newTextureWithContentsOfURLOptionsCompletionHandler(URL: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

  newTextureWithNameScaleFactorBundleOptionsCompletionHandler(name: string, scaleFactor: number, bundle: NSBundle | null, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

  newTexturesWithContentsOfURLsOptionsCompletionHandler(URLs: NSArray<interop.Object> | Array<interop.Object>, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  newTexturesWithNamesScaleFactorBundleOptionsCompletionHandler(names: NSArray<interop.Object> | Array<interop.Object>, scaleFactor: number, bundle: NSBundle | null, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  newTextureWithDataOptionsCompletionHandler(data: NSData, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

  newTextureWithCGImageOptionsCompletionHandler(cgImage: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

  newTextureWithMDLTextureOptionsCompletionHandler(texture: MDLTexture, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

  newTextureWithContentsOfURLOptionsError(URL: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): MTLTexture;

  newTexturesWithContentsOfURLsOptionsError(URLs: NSArray<interop.Object> | Array<interop.Object>, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): NSArray;

  newTextureWithDataOptionsError(data: NSData, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): MTLTexture;

  newTextureWithCGImageOptionsError(cgImage: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): MTLTexture;

  newTextureWithMDLTextureOptionsError(texture: MDLTexture, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): MTLTexture;

  newTextureWithNameScaleFactorBundleOptionsError(name: string, scaleFactor: number, bundle: NSBundle | null, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): MTLTexture;
}

declare class MTKMesh extends NSObject {
  initWithMeshDeviceError(mesh: MDLMesh, device: MTLDevice, error: interop.PointerConvertible): this;

  static newMeshesFromAssetDeviceSourceMeshesError(asset: MDLAsset, device: MTLDevice, sourceMeshes: interop.PointerConvertible, error: interop.PointerConvertible): NSArray;

  readonly vertexBuffers: NSArray;

  readonly vertexDescriptor: MDLVertexDescriptor;

  readonly submeshes: NSArray;

  readonly vertexCount: number;

  name: string;
}

declare class MTKView extends UIView implements NSCoding, CALayerDelegate {
  initWithFrameDevice(frameRect: CGRect, device: MTLDevice | null): this;

  initWithCoder(coder: NSCoder): this;

  delegate: MTKViewDelegate;

  device: MTLDevice;

  readonly currentDrawable: CAMetalDrawable;

  framebufferOnly: boolean;

  depthStencilAttachmentTextureUsage: interop.Enum<typeof MTLTextureUsage>;

  multisampleColorAttachmentTextureUsage: interop.Enum<typeof MTLTextureUsage>;

  presentsWithTransaction: boolean;

  colorPixelFormat: interop.Enum<typeof MTLPixelFormat>;

  depthStencilPixelFormat: interop.Enum<typeof MTLPixelFormat>;

  depthStencilStorageMode: interop.Enum<typeof MTLStorageMode>;

  sampleCount: number;

  clearColor: MTLClearColor;

  clearDepth: number;

  clearStencil: number;

  readonly depthStencilTexture: MTLTexture;

  readonly multisampleColorTexture: MTLTexture;

  releaseDrawables(): void;

  readonly currentRenderPassDescriptor: MTLRenderPassDescriptor;

  preferredFramesPerSecond: number;

  enableSetNeedsDisplay: boolean;

  autoResizeDrawable: boolean;

  drawableSize: CGSize;

  readonly preferredDrawableSize: CGSize;

  readonly preferredDevice: MTLDevice;

  isPaused: boolean;

  draw(): void;

  encodeWithCoder(coder: NSCoder): void;

  displayLayer(layer: CALayer): void;

  drawLayerInContext(layer: CALayer, ctx: interop.PointerConvertible): void;

  layerWillDraw(layer: CALayer): void;

  layoutSublayersOfLayer(layer: CALayer): void;

  actionForLayerForKey(layer: CALayer, event: string): CAAction;

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
declare class MTKMeshBuffer extends NSObject implements MDLMeshBuffer, MDLNamed {
  readonly length: number;

  readonly allocator: MTKMeshBufferAllocator;

  // @ts-ignore MemberDecl.tsIgnore
  readonly zone: MDLMeshBufferZone;

  readonly buffer: MTLBuffer;

  readonly offset: number;

  readonly type: interop.Enum<typeof MDLMeshBufferType>;

  fillDataOffset(data: NSData, offset: number): void;

  map(): MDLMeshBufferMap;

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

  name: string;
}

