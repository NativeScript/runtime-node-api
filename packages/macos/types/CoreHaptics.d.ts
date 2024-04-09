/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const CHHapticPatternKeyParameterCurveControlPoints: string;

declare const CHHapticPatternKeyParameterCurve: string;

declare const CHHapticPatternKeyParameterID: string;

declare const CHHapticPatternKeyEventWaveformUseVolumeEnvelope: string;

declare const CHHapticPatternKeyEventParameters: string;

declare const CHHapticPatternKeyEventWaveformPath: string;

declare const CHHapticPatternKeyEvent: string;

declare const CHHapticPatternKeyPattern: string;

declare const CHHapticPatternKeyVersion: string;

declare const CoreHapticsErrorDomain: string;

declare const CHHapticEventTypeHapticTransient: string;

declare const CHHapticDynamicParameterIDAudioPitchControl: string;

declare const CHHapticDynamicParameterIDAudioBrightnessControl: string;

declare const CHHapticDynamicParameterIDAudioPanControl: string;

declare const CHHapticDynamicParameterIDAudioVolumeControl: string;

declare const CHHapticDynamicParameterIDHapticReleaseTimeControl: string;

declare const CHHapticDynamicParameterIDHapticDecayTimeControl: string;

declare const CHHapticDynamicParameterIDHapticAttackTimeControl: string;

declare const CHHapticEventParameterIDAudioBrightness: string;

declare const CHHapticEventParameterIDAudioPan: string;

declare const CHHapticEventParameterIDAudioPitch: string;

declare const CHHapticEventParameterIDAudioVolume: string;

declare const CHHapticEventParameterIDSustained: string;

declare const CHHapticEventParameterIDDecayTime: string;

declare const CHHapticEventParameterIDHapticIntensity: string;

declare const CHHapticEventParameterIDHapticSharpness: string;

declare const CHHapticPatternKeyEventWaveformLoopEnabled: string;

declare const CHHapticPatternKeyParameterValue: string;

declare const CHHapticPatternKeyEventDuration: string;

declare const CHHapticPatternKeyParameter: string;

declare const CHHapticEventTypeHapticContinuous: string;

declare const CHHapticDynamicParameterIDAudioDecayTimeControl: string;

declare const CHHapticEventTypeAudioContinuous: string;

declare const CHHapticPatternKeyEventType: string;

declare const CHHapticEventParameterIDAttackTime: string;

declare const CHHapticDynamicParameterIDAudioAttackTimeControl: string;

declare const CHHapticDynamicParameterIDHapticSharpnessControl: string;

declare const CHHapticAudioResourceKeyUseVolumeEnvelope: string;

declare const CHHapticEventTypeAudioCustom: string;

declare const CHHapticAudioResourceKeyLoopEnabled: string;

declare const CHHapticDynamicParameterIDAudioReleaseTimeControl: string;

declare const CHHapticEventParameterIDReleaseTime: string;

declare const CHHapticPatternKeyTime: string;

declare const CHHapticDynamicParameterIDHapticIntensityControl: string;

declare const CHHapticEngineFinishedAction: {
  StopEngine: 1,
  LeaveEngineRunning: 2,
};

declare const CHHapticErrorCode: {
  EngineNotRunning: -4805,
  OperationNotPermitted: -4806,
  EngineStartTimeout: -4808,
  NotSupported: -4809,
  ServerInitFailed: -4810,
  ServerInterrupted: -4811,
  InvalidPatternPlayer: -4812,
  InvalidPatternData: -4813,
  InvalidPatternDictionary: -4814,
  InvalidAudioSession: -4815,
  InvalidEngineParameter: -4816,
  InvalidParameterType: -4820,
  InvalidEventType: -4821,
  InvalidEventTime: -4822,
  InvalidEventDuration: -4823,
  InvalidAudioResource: -4824,
  ResourceNotAvailable: -4825,
  BadEventEntry: -4830,
  BadParameterEntry: -4831,
  InvalidTime: -4840,
  FileNotFound: -4851,
  InsufficientPower: -4897,
  UnknownError: -4898,
  MemoryError: -4899,
};

declare const CHHapticEngineStoppedReason: {
  AudioSessionInterrupt: 1,
  ApplicationSuspended: 2,
  IdleTimeout: 3,
  NotifyWhenFinished: 4,
  EngineDestroyed: 5,
  GameControllerDisconnect: 6,
  SystemError: -1,
};

declare interface CHHapticAdvancedPatternPlayer extends CHHapticPatternPlayer {
  pauseAtTimeError(time: number, outError: interop.PointerConvertible): boolean;

  resumeAtTimeError(time: number, outError: interop.PointerConvertible): boolean;

  seekToOffsetError(offsetTime: number, outError: interop.PointerConvertible): boolean;

  loopEnabled: boolean;

  loopEnd: number;

  playbackRate: number;

  isMuted: boolean;

  completionHandler: (p1: NSError) => void;
}

declare class CHHapticAdvancedPatternPlayer extends NativeObject implements CHHapticAdvancedPatternPlayer {
}

declare interface CHHapticPatternPlayer extends NSObjectProtocol {
  startAtTimeError(time: number, outError: interop.PointerConvertible): boolean;

  stopAtTimeError(time: number, outError: interop.PointerConvertible): boolean;

  sendParametersAtTimeError(parameters: NSArray<interop.Object> | Array<interop.Object>, time: number, outError: interop.PointerConvertible): boolean;

  scheduleParameterCurveAtTimeError(parameterCurve: CHHapticParameterCurve, time: number, outError: interop.PointerConvertible): boolean;

  cancelAndReturnError(outError: interop.PointerConvertible): boolean;

  isMuted: boolean;
}

declare class CHHapticPatternPlayer extends NativeObject implements CHHapticPatternPlayer {
}

declare interface CHHapticParameterAttributes extends NSObjectProtocol {
  readonly minValue: number;

  readonly maxValue: number;

  readonly defaultValue: number;
}

declare class CHHapticParameterAttributes extends NativeObject implements CHHapticParameterAttributes {
}

declare interface CHHapticDeviceCapability {
  readonly supportsHaptics: boolean;

  readonly supportsAudio: boolean;

  attributesForEventParameterEventTypeError(inParameter: string, type: string, outError: interop.PointerConvertible): CHHapticParameterAttributes;

  attributesForDynamicParameterError(inParameter: string, outError: interop.PointerConvertible): CHHapticParameterAttributes;
}

declare class CHHapticDeviceCapability extends NativeObject implements CHHapticDeviceCapability {
}

declare class CHHapticPattern extends NSObject {
  readonly duration: number;

  initWithEventsParametersError(events: NSArray<interop.Object> | Array<interop.Object>, parameters: NSArray<interop.Object> | Array<interop.Object>, outError: interop.PointerConvertible): this;

  initWithEventsParameterCurvesError(events: NSArray<interop.Object> | Array<interop.Object>, parameterCurves: NSArray<interop.Object> | Array<interop.Object>, outError: interop.PointerConvertible): this;

  initWithDictionaryError(patternDict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, outError: interop.PointerConvertible): this;

  initWithContentsOfURLError(ahapURL: NSURL, outError: interop.PointerConvertible): this;

  exportDictionaryAndReturnError(outError: interop.PointerConvertible): NSDictionary;
}

declare class CHHapticEvent extends NSObject {
  readonly type: string;

  readonly eventParameters: NSArray;

  relativeTime: number;

  duration: number;

  initWithEventTypeParametersRelativeTime(type: string, eventParams: NSArray<interop.Object> | Array<interop.Object>, time: number): this;

  initWithEventTypeParametersRelativeTimeDuration(type: string, eventParams: NSArray<interop.Object> | Array<interop.Object>, time: number, duration: number): this;

  initWithAudioResourceIDParametersRelativeTime(resID: number, eventParams: NSArray<interop.Object> | Array<interop.Object>, time: number): this;

  initWithAudioResourceIDParametersRelativeTimeDuration(resID: number, eventParams: NSArray<interop.Object> | Array<interop.Object>, time: number, duration: number): this;
}

declare class CHHapticParameterCurve extends NSObject {
  readonly parameterID: string;

  relativeTime: number;

  readonly controlPoints: NSArray;

  initWithParameterIDControlPointsRelativeTime(parameterID: string, controlPoints: NSArray<interop.Object> | Array<interop.Object>, relativeTime: number): this;
}

declare class CHHapticParameterCurveControlPoint extends NSObject {
  relativeTime: number;

  value: number;

  initWithRelativeTimeValue(time: number, value: number): this;
}

declare class CHHapticDynamicParameter extends NSObject {
  readonly parameterID: string;

  value: number;

  relativeTime: number;

  initWithParameterIDValueRelativeTime(parameterID: string, value: number, time: number): this;
}

declare class CHHapticEventParameter extends NSObject {
  readonly parameterID: string;

  value: number;

  initWithParameterIDValue(parameterID: string, value: number): this;
}

declare class CHHapticEngine extends NSObject {
  static capabilitiesForHardware(): CHHapticDeviceCapability;

  readonly currentTime: number;

  stoppedHandler: (p1: interop.Enum<typeof CHHapticEngineStoppedReason>) => void;

  resetHandler: () => void;

  playsHapticsOnly: boolean;

  playsAudioOnly: boolean;

  isMutedForAudio: boolean;

  isMutedForHaptics: boolean;

  isAutoShutdownEnabled: boolean;

  initAndReturnError(error: interop.PointerConvertible): this;

  initWithAudioSessionError(audioSession: interop.Object | null, error: interop.PointerConvertible): this;

  startWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  startAndReturnError(outError: interop.PointerConvertible): boolean;

  stopWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  notifyWhenPlayersFinished(finishedHandler: (p1: NSError) => interop.Enum<typeof CHHapticEngineFinishedAction>): void;

  createPlayerWithPatternError(pattern: CHHapticPattern, outError: interop.PointerConvertible): CHHapticPatternPlayer;

  createAdvancedPlayerWithPatternError(pattern: CHHapticPattern, outError: interop.PointerConvertible): CHHapticAdvancedPatternPlayer;

  registerAudioResourceOptionsError(resourceURL: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, outError: interop.PointerConvertible): number;

  unregisterAudioResourceError(resourceID: number, outError: interop.PointerConvertible): boolean;

  playPatternFromURLError(fileURL: NSURL, outError: interop.PointerConvertible): boolean;

  playPatternFromDataError(data: NSData, outError: interop.PointerConvertible): boolean;
}

