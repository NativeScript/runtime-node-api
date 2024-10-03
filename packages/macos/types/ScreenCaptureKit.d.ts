/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const SCStreamFrameInfoPresenterOverlayContentRect: string;

declare const SCStreamFrameInfoBoundingRect: string;

declare const SCStreamFrameInfoScreenRect: string;

declare const SCStreamFrameInfoStatus: string;

declare const SCStreamErrorDomain: string;

declare const SCStreamFrameInfoDirtyRects: string;

declare const SCStreamFrameInfoContentRect: string;

declare const SCStreamFrameInfoScaleFactor: string;

declare const SCStreamFrameInfoDisplayTime: string;

declare const SCStreamFrameInfoContentScale: string;

declare const SCContentSharingPickerMode: {
  SingleWindow: 1,
  MultipleWindows: 2,
  SingleApplication: 4,
  MultipleApplications: 8,
  SingleDisplay: 16,
};

declare const SCStreamErrorCode: {
  UserDeclined: -3801,
  FailedToStart: -3802,
  MissingEntitlements: -3803,
  FailedApplicationConnectionInvalid: -3804,
  FailedApplicationConnectionInterrupted: -3805,
  FailedNoMatchingApplicationContext: -3806,
  AttemptToStartStreamState: -3807,
  AttemptToStopStreamState: -3808,
  AttemptToUpdateFilterState: -3809,
  AttemptToConfigState: -3810,
  InternalError: -3811,
  InvalidParameter: -3812,
  NoWindowList: -3813,
  NoDisplayList: -3814,
  NoCaptureSource: -3815,
  RemovingStream: -3816,
  UserStopped: -3817,
  FailedToStartAudioCapture: -3818,
  FailedToStopAudioCapture: -3819,
  FailedToStartMicrophoneCapture: -3820,
  SystemStoppedStream: -3821,
};

declare const SCStreamConfigurationPreset: {
  StreamLocal: 0,
  StreamCanonical: 1,
  ScreenshotLocal: 2,
  ScreenshotCanonical: 3,
};

declare const SCStreamType: {
  Window: 0,
  Display: 1,
};

declare const SCPresenterOverlayAlertSetting: {
  System: 0,
  Never: 1,
  Always: 2,
};

declare const SCFrameStatus: {
  Complete: 0,
  Idle: 1,
  Blank: 2,
  Suspended: 3,
  Started: 4,
  Stopped: 5,
};

declare const SCStreamOutputType: {
  Screen: 0,
  Audio: 1,
  Microphone: 2,
};

declare const SCCaptureDynamicRange: {
  SDR: 0,
  HDRLocalDisplay: 1,
  HDRCanonicalDisplay: 2,
};

declare const SCCaptureResolutionType: {
  Automatic: 0,
  Best: 1,
  Nominal: 2,
};

declare const SCShareableContentStyle: {
  None: 0,
  Window: 1,
  Display: 2,
  Application: 3,
};

declare interface SCStreamDelegate extends NSObjectProtocol {
  streamDidStopWithError?(stream: SCStream, error: NSError): void;

  outputVideoEffectDidStartForStream?(stream: SCStream): void;

  outputVideoEffectDidStopForStream?(stream: SCStream): void;
}

declare class SCStreamDelegate extends NativeObject implements SCStreamDelegate {
}

declare interface SCStreamOutput extends NSObjectProtocol {
  streamDidOutputSampleBufferOfType?(stream: SCStream, sampleBuffer: interop.PointerConvertible, type: interop.Enum<typeof SCStreamOutputType>): void;
}

declare class SCStreamOutput extends NativeObject implements SCStreamOutput {
}

declare interface SCRecordingOutputDelegate extends NSObjectProtocol {
  recordingOutputDidStartRecording?(recordingOutput: SCRecordingOutput): void;

  recordingOutputDidFailWithError?(recordingOutput: SCRecordingOutput, error: NSError): void;

  recordingOutputDidFinishRecording?(recordingOutput: SCRecordingOutput): void;
}

declare class SCRecordingOutputDelegate extends NativeObject implements SCRecordingOutputDelegate {
}

declare interface SCContentSharingPickerObserver extends NSObjectProtocol {
  contentSharingPickerDidCancelForStream(picker: SCContentSharingPicker, stream: SCStream | null): void;

  contentSharingPickerDidUpdateWithFilterForStream(picker: SCContentSharingPicker, filter: SCContentFilter, stream: SCStream | null): void;

  contentSharingPickerStartDidFailWithError(error: NSError): void;
}

declare class SCContentSharingPickerObserver extends NativeObject implements SCContentSharingPickerObserver {
}

declare class SCScreenshotManager extends NSObject {
  static captureSampleBufferWithFilterConfigurationCompletionHandler(contentFilter: SCContentFilter, config: SCStreamConfiguration, completionHandler: (p1: interop.PointerConvertible, p2: NSError) => void | null): void;

  static captureImageWithFilterConfigurationCompletionHandler(contentFilter: SCContentFilter, config: SCStreamConfiguration, completionHandler: (p1: interop.PointerConvertible, p2: NSError) => void | null): void;
}

declare class SCContentSharingPickerConfiguration<NSCopying = interop.Object> extends NSObject {
  allowedPickerModes: interop.Enum<typeof SCContentSharingPickerMode>;

  get excludedWindowIDs(): NSArray;
  set excludedWindowIDs(value: NSArray<interop.Object> | Array<interop.Object>);

  get excludedBundleIDs(): NSArray;
  set excludedBundleIDs(value: NSArray<interop.Object> | Array<interop.Object>);

  allowsChangingSelectedContent: boolean;
}

declare class SCStream extends NSObject {
  readonly synchronizationClock: interop.Pointer;

  initWithFilterConfigurationDelegate(contentFilter: SCContentFilter, streamConfig: SCStreamConfiguration, delegate: SCStreamDelegate | null): this;

  addStreamOutputTypeSampleHandlerQueueError(output: SCStreamOutput, type: interop.Enum<typeof SCStreamOutputType>, sampleHandlerQueue: NSObject | null, error: interop.PointerConvertible): boolean;

  removeStreamOutputTypeError(output: SCStreamOutput, type: interop.Enum<typeof SCStreamOutputType>, error: interop.PointerConvertible): boolean;

  updateContentFilterCompletionHandler(contentFilter: SCContentFilter, completionHandler: (p1: NSError) => void | null): void;

  updateConfigurationCompletionHandler(streamConfig: SCStreamConfiguration, completionHandler: (p1: NSError) => void | null): void;

  startCaptureWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  stopCaptureWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  addRecordingOutputError(recordingOutput: SCRecordingOutput, error: interop.PointerConvertible): boolean;

  removeRecordingOutputError(recordingOutput: SCRecordingOutput, error: interop.PointerConvertible): boolean;
}

declare class SCRecordingOutput extends NSObject {
  readonly recordedDuration: CMTime;

  readonly recordedFileSize: number;

  initWithConfigurationDelegate(recordingOutputConfiguration: SCRecordingOutputConfiguration, delegate: SCRecordingOutputDelegate): this;
}

declare class SCShareableContentInfo extends NSObject {
  readonly style: interop.Enum<typeof SCShareableContentStyle>;

  readonly pointPixelScale: number;

  readonly contentRect: CGRect;
}

declare class SCDisplay extends NSObject {
  readonly displayID: number;

  readonly width: number;

  readonly height: number;

  readonly frame: CGRect;
}

declare class SCRunningApplication extends NSObject {
  readonly bundleIdentifier: string;

  readonly applicationName: string;

  readonly processID: number;
}

declare class SCContentFilter extends NSObject {
  readonly streamType: interop.Enum<typeof SCStreamType>;

  readonly style: interop.Enum<typeof SCShareableContentStyle>;

  readonly pointPixelScale: number;

  readonly contentRect: CGRect;

  includeMenuBar: boolean;

  initWithDesktopIndependentWindow(window: SCWindow): this;

  initWithDisplayExcludingWindows(display: SCDisplay, excluded: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithDisplayIncludingWindows(display: SCDisplay, includedWindows: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithDisplayIncludingApplicationsExceptingWindows(display: SCDisplay, applications: NSArray<interop.Object> | Array<interop.Object>, exceptingWindows: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithDisplayExcludingApplicationsExceptingWindows(display: SCDisplay, applications: NSArray<interop.Object> | Array<interop.Object>, exceptingWindows: NSArray<interop.Object> | Array<interop.Object>): this;
}

declare class SCRecordingOutputConfiguration extends NSObject {
  outputURL: NSURL;

  videoCodecType: string;

  outputFileType: string;

  readonly availableVideoCodecTypes: NSArray;

  readonly availableOutputFileTypes: NSArray;
}

declare class SCWindow extends NSObject {
  readonly windowID: number;

  readonly frame: CGRect;

  readonly title: string;

  readonly windowLayer: number;

  readonly owningApplication: SCRunningApplication;

  readonly isOnScreen: boolean;

  readonly isActive: boolean;
}

declare class SCStreamConfiguration extends NSObject {
  width: number;

  height: number;

  minimumFrameInterval: CMTime;

  pixelFormat: number;

  scalesToFit: boolean;

  preservesAspectRatio: boolean;

  streamName: string;

  showsCursor: boolean;

  showMouseClicks: boolean;

  get backgroundColor(): interop.Pointer;
  set backgroundColor(value: interop.PointerConvertible);

  sourceRect: CGRect;

  destinationRect: CGRect;

  queueDepth: number;

  get colorMatrix(): interop.Pointer;
  set colorMatrix(value: interop.PointerConvertible);

  get colorSpaceName(): interop.Pointer;
  set colorSpaceName(value: interop.PointerConvertible);

  capturesAudio: boolean;

  sampleRate: number;

  channelCount: number;

  excludesCurrentProcessAudio: boolean;

  ignoreShadowsDisplay: boolean;

  ignoreShadowsSingleWindow: boolean;

  captureResolution: interop.Enum<typeof SCCaptureResolutionType>;

  capturesShadowsOnly: boolean;

  shouldBeOpaque: boolean;

  ignoreGlobalClipDisplay: boolean;

  ignoreGlobalClipSingleWindow: boolean;

  presenterOverlayPrivacyAlertSetting: interop.Enum<typeof SCPresenterOverlayAlertSetting>;

  includeChildWindows: boolean;

  captureMicrophone: boolean;

  microphoneCaptureDeviceID: string;

  captureDynamicRange: interop.Enum<typeof SCCaptureDynamicRange>;

  static streamConfigurationWithPreset<This extends abstract new (...args: any) => any>(this: This, preset: interop.Enum<typeof SCStreamConfigurationPreset>): InstanceType<This>;
}

declare class SCShareableContent extends NSObject {
  static getShareableContentWithCompletionHandler(completionHandler: (p1: SCShareableContent, p2: NSError) => void | null): void;

  static getCurrentProcessShareableContentWithCompletionHandler(completionHandler: (p1: SCShareableContent, p2: NSError) => void | null): void;

  static getShareableContentExcludingDesktopWindowsOnScreenWindowsOnlyCompletionHandler(excludeDesktopWindows: boolean, onScreenWindowsOnly: boolean, completionHandler: (p1: SCShareableContent, p2: NSError) => void | null): void;

  static getShareableContentExcludingDesktopWindowsOnScreenWindowsOnlyBelowWindowCompletionHandler(excludeDesktopWindows: boolean, window: SCWindow, completionHandler: (p1: SCShareableContent, p2: NSError) => void | null): void;

  static getShareableContentExcludingDesktopWindowsOnScreenWindowsOnlyAboveWindowCompletionHandler(excludeDesktopWindows: boolean, window: SCWindow, completionHandler: (p1: SCShareableContent, p2: NSError) => void | null): void;

  static infoForFilter(filter: SCContentFilter): SCShareableContentInfo;

  readonly windows: NSArray;

  readonly displays: NSArray;

  readonly applications: NSArray;
}

declare class SCContentSharingPicker extends NSObject {
  static readonly sharedPicker: SCContentSharingPicker;

  defaultConfiguration: SCContentSharingPickerConfiguration;

  maximumStreamCount: NSNumber;

  isActive: boolean;

  addObserver(observer: SCContentSharingPickerObserver): void;

  removeObserver(observer: SCContentSharingPickerObserver): void;

  setConfigurationForStream(pickerConfig: SCContentSharingPickerConfiguration | null, stream: SCStream): void;

  present(): void;

  presentPickerUsingContentStyle(contentStyle: interop.Enum<typeof SCShareableContentStyle>): void;

  presentPickerForStream(stream: SCStream): void;

  presentPickerForStreamUsingContentStyle(stream: SCStream, contentStyle: interop.Enum<typeof SCShareableContentStyle>): void;
}

