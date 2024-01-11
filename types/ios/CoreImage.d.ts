/// <reference path="../../lib/types.d.ts" />
/// <reference path="./Runtime.d.ts" />

declare class CIColor extends NSObject implements NSSecureCoding, NSCopying {
  static colorWithCGColor<This extends abstract new (...args: any) => any>(this: This, c: interop.PointerConvertible): InstanceType<This>;

  static colorWithRedGreenBlueAlpha<This extends abstract new (...args: any) => any>(this: This, r: number, g: number, b: number, a: number): InstanceType<This>;

  static colorWithRedGreenBlue<This extends abstract new (...args: any) => any>(this: This, r: number, g: number, b: number): InstanceType<This>;

  static colorWithRedGreenBlueAlphaColorSpace<This extends abstract new (...args: any) => any>(this: This, r: number, g: number, b: number, a: number, colorSpace: interop.PointerConvertible): InstanceType<This>;

  static colorWithRedGreenBlueColorSpace<This extends abstract new (...args: any) => any>(this: This, r: number, g: number, b: number, colorSpace: interop.PointerConvertible): InstanceType<This>;

  static colorWithString<This extends abstract new (...args: any) => any>(this: This, representation: string): InstanceType<This>;

  initWithCGColor(c: interop.PointerConvertible): this;

  initWithRedGreenBlueAlpha(r: number, g: number, b: number, a: number): this;

  initWithRedGreenBlue(r: number, g: number, b: number): this;

  initWithRedGreenBlueAlphaColorSpace(r: number, g: number, b: number, a: number, colorSpace: interop.PointerConvertible): this;

  initWithRedGreenBlueColorSpace(r: number, g: number, b: number, colorSpace: interop.PointerConvertible): this;

  readonly numberOfComponents: number;

  readonly components: interop.Pointer;

  readonly alpha: number;

  readonly colorSpace: interop.Pointer;

  readonly red: number;

  readonly green: number;

  readonly blue: number;

  readonly stringRepresentation: string;

  static readonly blackColor: CIColor;

  static readonly whiteColor: CIColor;

  static readonly grayColor: CIColor;

  static readonly redColor: CIColor;

  static readonly greenColor: CIColor;

  static readonly blueColor: CIColor;

  static readonly cyanColor: CIColor;

  static readonly magentaColor: CIColor;

  static readonly yellowColor: CIColor;

  static readonly clearColor: CIColor;

  initWithColor(color: UIColor): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CIImage extends NSObject implements NSSecureCoding, NSCopying {
  static imageWithCGImage(image: interop.PointerConvertible): CIImage;

  static imageWithCGImageOptions(image: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithCGImageSourceIndexOptions(source: interop.PointerConvertible, index: number, dict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithBitmapDataBytesPerRowSizeFormatColorSpace(data: NSData, bytesPerRow: number, size: CGSize, format: number, colorSpace: interop.PointerConvertible): CIImage;

  static imageWithTextureSizeFlippedColorSpace(name: number, size: CGSize, flipped: boolean, colorSpace: interop.PointerConvertible): CIImage;

  static imageWithMTLTextureOptions(texture: MTLTexture, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithContentsOfURL(url: NSURL): CIImage;

  static imageWithContentsOfURLOptions(url: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithData(data: NSData): CIImage;

  static imageWithDataOptions(data: NSData, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithCVImageBuffer(imageBuffer: interop.PointerConvertible): CIImage;

  static imageWithCVImageBufferOptions(imageBuffer: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithCVPixelBuffer(pixelBuffer: interop.PointerConvertible): CIImage;

  static imageWithCVPixelBufferOptions(pixelBuffer: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithIOSurface(surface: interop.PointerConvertible): CIImage;

  static imageWithIOSurfaceOptions(surface: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  static imageWithColor(color: CIColor): CIImage;

  static emptyImage(): CIImage;

  static readonly blackImage: CIImage;

  static readonly whiteImage: CIImage;

  static readonly grayImage: CIImage;

  static readonly redImage: CIImage;

  static readonly greenImage: CIImage;

  static readonly blueImage: CIImage;

  static readonly cyanImage: CIImage;

  static readonly magentaImage: CIImage;

  static readonly yellowImage: CIImage;

  static readonly clearImage: CIImage;

  initWithCGImage(image: interop.PointerConvertible): this;

  initWithCGImageOptions(image: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithCGImageSourceIndexOptions(source: interop.PointerConvertible, index: number, dict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithData(data: NSData): this;

  initWithDataOptions(data: NSData, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithBitmapDataBytesPerRowSizeFormatColorSpace(data: NSData, bytesPerRow: number, size: CGSize, format: number, colorSpace: interop.PointerConvertible): this;

  initWithTextureSizeFlippedColorSpace(name: number, size: CGSize, flipped: boolean, colorSpace: interop.PointerConvertible): this;

  initWithMTLTextureOptions(texture: MTLTexture, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithContentsOfURL(url: NSURL): this;

  initWithContentsOfURLOptions(url: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithIOSurface(surface: interop.PointerConvertible): this;

  initWithIOSurfaceOptions(surface: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithCVImageBuffer(imageBuffer: interop.PointerConvertible): this;

  initWithCVImageBufferOptions(imageBuffer: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithCVPixelBuffer(pixelBuffer: interop.PointerConvertible): this;

  initWithCVPixelBufferOptions(pixelBuffer: interop.PointerConvertible, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithColor(color: CIColor): this;

  imageByApplyingTransform(matrix: CGAffineTransform): CIImage;

  imageByApplyingTransformHighQualityDownsample(matrix: CGAffineTransform, highQualityDownsample: boolean): CIImage;

  imageByApplyingOrientation(orientation: number): CIImage;

  imageTransformForOrientation(orientation: number): CGAffineTransform;

  imageByApplyingCGOrientation(orientation: interop.Enum<typeof CGImagePropertyOrientation>): CIImage;

  imageTransformForCGOrientation(orientation: interop.Enum<typeof CGImagePropertyOrientation>): CGAffineTransform;

  imageByCompositingOverImage(dest: CIImage): CIImage;

  imageByCroppingToRect(rect: CGRect): CIImage;

  imageByClampingToExtent(): CIImage;

  imageByClampingToRect(rect: CGRect): CIImage;

  imageByApplyingFilterWithInputParameters(filterName: string, params: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): CIImage;

  imageByApplyingFilter(filterName: string): CIImage;

  imageByColorMatchingColorSpaceToWorkingSpace(colorSpace: interop.PointerConvertible): CIImage;

  imageByColorMatchingWorkingSpaceToColorSpace(colorSpace: interop.PointerConvertible): CIImage;

  imageByPremultiplyingAlpha(): CIImage;

  imageByUnpremultiplyingAlpha(): CIImage;

  imageBySettingAlphaOneInExtent(extent: CGRect): CIImage;

  imageByApplyingGaussianBlurWithSigma(sigma: number): CIImage;

  imageBySettingProperties(properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): CIImage;

  imageBySamplingLinear(): CIImage;

  imageBySamplingNearest(): CIImage;

  imageByInsertingIntermediate(): CIImage;

  readonly extent: CGRect;

  readonly properties: NSDictionary;

  readonly url: NSURL;

  readonly colorSpace: interop.Pointer;

  readonly pixelBuffer: interop.Pointer;

  readonly CGImage: interop.Pointer;

  regionOfInterestForImageInRect(image: CIImage, rect: CGRect): CGRect;

  initWithImage(image: UIImage): this;

  initWithImageOptions(image: UIImage, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

