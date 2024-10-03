/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const AVAudio3DMixingSourceMode: {
  SpatializeIfMono: 0,
  Bypass: 1,
  PointSource: 2,
  AmbienceBed: 3,
};

declare const AVAudioEngineManualRenderingStatus: {
  Error: -1,
  Success: 0,
  InsufficientDataFromInputNode: 1,
  CannotDoInCurrentContext: 2,
};

declare const AVAudioEnvironmentOutputType: {
  Auto: 0,
  Headphones: 1,
  BuiltInSpeakers: 2,
  ExternalSpeakers: 3,
};

declare const AVAudioEnvironmentDistanceAttenuationModel: {
  Exponential: 1,
  Inverse: 2,
  Linear: 3,
};

declare const AVAudioUnitReverbPreset: {
  SmallRoom: 0,
  MediumRoom: 1,
  LargeRoom: 2,
  MediumHall: 3,
  LargeHall: 4,
  Plate: 5,
  MediumChamber: 6,
  LargeChamber: 7,
  Cathedral: 8,
  LargeRoom2: 9,
  MediumHall2: 10,
  MediumHall3: 11,
  LargeHall2: 12,
};

declare const AVAudioUnitEQFilterType: {
  Parametric: 0,
  LowPass: 1,
  HighPass: 2,
  ResonantLowPass: 3,
  ResonantHighPass: 4,
  BandPass: 5,
  BandStop: 6,
  LowShelf: 7,
  HighShelf: 8,
  ResonantLowShelf: 9,
  ResonantHighShelf: 10,
};

declare const AVAudioCommonFormat: {
  OtherFormat: 0,
  PCMFormatFloat32: 1,
  PCMFormatFloat64: 2,
  PCMFormatInt16: 3,
  PCMFormatInt32: 4,
};

declare const AVAudioVoiceProcessingOtherAudioDuckingLevel: {
  Default: 0,
  Min: 10,
  Mid: 20,
  Max: 30,
};

declare const AVAudio3DMixingRenderingAlgorithm: {
  EqualPowerPanning: 0,
  SphericalHead: 1,
  HRTF: 2,
  SoundField: 3,
  StereoPassThrough: 5,
  HRTFHQ: 6,
  Auto: 7,
};

declare const AVAudioVoiceProcessingSpeechActivityEvent: {
  Started: 0,
  Ended: 1,
};

declare const AVAudio3DMixingPointSourceInHeadMode: {
  Mono: 0,
  Bypass: 1,
};

declare const AVAudioEngineManualRenderingMode: {
  Offline: 0,
  Realtime: 1,
};

declare class AVAudio3DVectorOrientation {
  constructor(init?: AVAudio3DVectorOrientation);
  forward: AVAudio3DPoint;
  up: AVAudio3DPoint;
}

declare class AVAudio3DPoint {
  constructor(init?: AVAudio3DPoint);
  x: number;
  y: number;
  z: number;
}

declare class AVAudio3DAngularOrientation {
  constructor(init?: AVAudio3DAngularOrientation);
  yaw: number;
  pitch: number;
  roll: number;
}

declare class AVAudioVoiceProcessingOtherAudioDuckingConfiguration {
  constructor(init?: AVAudioVoiceProcessingOtherAudioDuckingConfiguration);
  enableAdvancedDucking: boolean;
  duckingLevel: interop.Enum<typeof AVAudioVoiceProcessingOtherAudioDuckingLevel>;
}

declare interface AVAudioStereoMixing extends NSObjectProtocol {
  pan: number;
}

declare class AVAudioStereoMixing extends NativeObject implements AVAudioStereoMixing {
}

declare interface AVAudioMixing extends AVAudioStereoMixing, AVAudio3DMixing {
  destinationForMixerBus(mixer: AVAudioNode, bus: number): AVAudioMixingDestination;

  volume: number;
}

declare class AVAudioMixing extends NativeObject implements AVAudioMixing {
}

declare interface AVAudio3DMixing extends NSObjectProtocol {
  renderingAlgorithm: interop.Enum<typeof AVAudio3DMixingRenderingAlgorithm>;

  sourceMode: interop.Enum<typeof AVAudio3DMixingSourceMode>;

  pointSourceInHeadMode: interop.Enum<typeof AVAudio3DMixingPointSourceInHeadMode>;

  rate: number;

  reverbBlend: number;

  obstruction: number;

  occlusion: number;

  position: AVAudio3DPoint;
}

declare class AVAudio3DMixing extends NativeObject implements AVAudio3DMixing {
}

declare class AVAudioUnitEQFilterParameters extends NSObject {
  filterType: interop.Enum<typeof AVAudioUnitEQFilterType>;

  frequency: number;

  bandwidth: number;

  gain: number;

  bypass: boolean;
}

declare class AVAudioBuffer extends NSObject implements NSCopying, NSMutableCopying {
  readonly format: AVAudioFormat;

  readonly audioBufferList: interop.Pointer;

  readonly mutableAudioBufferList: interop.Pointer;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  mutableCopyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class AVAudioTime extends NSObject {
  initWithAudioTimeStampSampleRate(ts: interop.PointerConvertible, sampleRate: number): this;

  initWithHostTime(hostTime: number): this;

  initWithSampleTimeAtRate(sampleTime: number, sampleRate: number): this;

  initWithHostTimeSampleTimeAtRate(hostTime: number, sampleTime: number, sampleRate: number): this;

  static timeWithAudioTimeStampSampleRate<This extends abstract new (...args: any) => any>(this: This, ts: interop.PointerConvertible, sampleRate: number): InstanceType<This>;

  static timeWithHostTime<This extends abstract new (...args: any) => any>(this: This, hostTime: number): InstanceType<This>;

  static timeWithSampleTimeAtRate<This extends abstract new (...args: any) => any>(this: This, sampleTime: number, sampleRate: number): InstanceType<This>;

  static timeWithHostTimeSampleTimeAtRate<This extends abstract new (...args: any) => any>(this: This, hostTime: number, sampleTime: number, sampleRate: number): InstanceType<This>;

  static hostTimeForSeconds(seconds: number): number;

  static secondsForHostTime(hostTime: number): number;

  extrapolateTimeFromAnchor(anchorTime: AVAudioTime): AVAudioTime;

  readonly isHostTimeValid: boolean;

  readonly hostTime: number;

  readonly isSampleTimeValid: boolean;

  readonly sampleTime: number;

  readonly sampleRate: number;

  readonly audioTimeStamp: AudioTimeStamp;
}

declare class AVAudioPCMBuffer extends AVAudioBuffer {
  initWithPCMFormatFrameCapacity(format: AVAudioFormat, frameCapacity: number): this;

  initWithPCMFormatBufferListNoCopyDeallocator(format: AVAudioFormat, bufferList: interop.PointerConvertible, deallocator: (p1: interop.PointerConvertible) => void | null): this;

  readonly frameCapacity: number;

  frameLength: number;

  readonly stride: number;

  readonly floatChannelData: interop.Pointer;

  readonly int16ChannelData: interop.Pointer;

  readonly int32ChannelData: interop.Pointer;
}

declare class AVAudioMixerNode extends AVAudioNode implements AVAudioMixing {
  init(): this;

  outputVolume: number;

  readonly nextAvailableInputBus: number;

  destinationForMixerBus(mixer: AVAudioNode, bus: number): AVAudioMixingDestination;

  volume: number;

  pan: number;

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

  renderingAlgorithm: interop.Enum<typeof AVAudio3DMixingRenderingAlgorithm>;

  sourceMode: interop.Enum<typeof AVAudio3DMixingSourceMode>;

  pointSourceInHeadMode: interop.Enum<typeof AVAudio3DMixingPointSourceInHeadMode>;

  rate: number;

  reverbBlend: number;

  obstruction: number;

  occlusion: number;

  position: AVAudio3DPoint;
}

declare class AVAudioInputNode extends AVAudioIONode implements AVAudioMixing {
  setManualRenderingInputPCMFormatInputBlock(format: AVAudioFormat, block: (p1: number) => interop.Pointer): boolean;

  isVoiceProcessingBypassed: boolean;

  isVoiceProcessingAGCEnabled: boolean;

  isVoiceProcessingInputMuted: boolean;

  setMutedSpeechActivityEventListener(listenerBlock: (p1: interop.Enum<typeof AVAudioVoiceProcessingSpeechActivityEvent>) => void | null): boolean;

  voiceProcessingOtherAudioDuckingConfiguration: AVAudioVoiceProcessingOtherAudioDuckingConfiguration;

  destinationForMixerBus(mixer: AVAudioNode, bus: number): AVAudioMixingDestination;

  volume: number;

  pan: number;

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

  renderingAlgorithm: interop.Enum<typeof AVAudio3DMixingRenderingAlgorithm>;

  sourceMode: interop.Enum<typeof AVAudio3DMixingSourceMode>;

  pointSourceInHeadMode: interop.Enum<typeof AVAudio3DMixingPointSourceInHeadMode>;

  rate: number;

  reverbBlend: number;

  obstruction: number;

  occlusion: number;

  position: AVAudio3DPoint;
}

declare class AVAudioOutputNode extends AVAudioIONode {
}

declare class AVAudioConnectionPoint extends NSObject {
  initWithNodeBus(node: AVAudioNode, bus: number): this;

  readonly node: AVAudioNode | null;

  readonly bus: number;
}

declare class AVAudioFormat extends NSObject implements NSSecureCoding {
  initWithStreamDescription(asbd: interop.PointerConvertible): this;

  initWithStreamDescriptionChannelLayout(asbd: interop.PointerConvertible, layout: AVAudioChannelLayout | null): this;

  initStandardFormatWithSampleRateChannels(sampleRate: number, channels: number): this;

  initStandardFormatWithSampleRateChannelLayout(sampleRate: number, layout: AVAudioChannelLayout): this;

  initWithCommonFormatSampleRateChannelsInterleaved(format: interop.Enum<typeof AVAudioCommonFormat>, sampleRate: number, channels: number, interleaved: boolean): this;

  initWithCommonFormatSampleRateInterleavedChannelLayout(format: interop.Enum<typeof AVAudioCommonFormat>, sampleRate: number, interleaved: boolean, layout: AVAudioChannelLayout): this;

  initWithSettings(settings: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): this;

  initWithCMAudioFormatDescription(formatDescription: interop.PointerConvertible): this;

  isEqual(object: interop.Object): boolean;

  readonly isStandard: boolean;

  readonly commonFormat: interop.Enum<typeof AVAudioCommonFormat>;

  readonly channelCount: number;

  readonly sampleRate: number;

  readonly isInterleaved: boolean;

  readonly streamDescription: interop.Pointer;

  readonly channelLayout: AVAudioChannelLayout;

  magicCookie: NSData;

  readonly settings: NSDictionary;

  readonly formatDescription: interop.Pointer;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class AVAudioEnvironmentReverbParameters extends NSObject {
  enable: boolean;

  level: number;

  readonly filterParameters: AVAudioUnitEQFilterParameters;

  loadFactoryReverbPreset(preset: interop.Enum<typeof AVAudioUnitReverbPreset>): void;
}

declare class AVAudioIONode extends AVAudioNode {
  readonly presentationLatency: number;

  readonly audioUnit: interop.Pointer;

  readonly isVoiceProcessingEnabled: boolean;

  setVoiceProcessingEnabledError(enabled: boolean, outError: interop.PointerConvertible): boolean;
}

declare class AVAudioMixingDestination extends NSObject implements AVAudioMixing {
  readonly connectionPoint: AVAudioConnectionPoint;

  destinationForMixerBus(mixer: AVAudioNode, bus: number): AVAudioMixingDestination;

  volume: number;

  pan: number;

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

  renderingAlgorithm: interop.Enum<typeof AVAudio3DMixingRenderingAlgorithm>;

  sourceMode: interop.Enum<typeof AVAudio3DMixingSourceMode>;

  pointSourceInHeadMode: interop.Enum<typeof AVAudio3DMixingPointSourceInHeadMode>;

  rate: number;

  reverbBlend: number;

  obstruction: number;

  occlusion: number;

  position: AVAudio3DPoint;
}

declare class AVAudioChannelLayout extends NSObject implements NSSecureCoding {
  initWithLayoutTag(layoutTag: number): this;

  initWithLayout(layout: interop.PointerConvertible): this;

  isEqual(object: interop.Object): boolean;

  static layoutWithLayoutTag<This extends abstract new (...args: any) => any>(this: This, layoutTag: number): InstanceType<This>;

  static layoutWithLayout<This extends abstract new (...args: any) => any>(this: This, layout: interop.PointerConvertible): InstanceType<This>;

  readonly layoutTag: number;

  readonly layout: interop.Pointer;

  readonly channelCount: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class AVAudioEngine extends NSObject {
  init(): this;

  attachNode(node: AVAudioNode): void;

  detachNode(node: AVAudioNode): void;

  connectToFromBusToBusFormat(node1: AVAudioNode, node2: AVAudioNode, bus1: number, bus2: number, format: AVAudioFormat | null): void;

  connectToFormat(node1: AVAudioNode, node2: AVAudioNode, format: AVAudioFormat | null): void;

  connectToConnectionPointsFromBusFormat(sourceNode: AVAudioNode, destNodes: NSArray<interop.Object> | Array<interop.Object>, sourceBus: number, format: AVAudioFormat | null): void;

  disconnectNodeInputBus(node: AVAudioNode, bus: number): void;

  disconnectNodeInput(node: AVAudioNode): void;

  disconnectNodeOutputBus(node: AVAudioNode, bus: number): void;

  disconnectNodeOutput(node: AVAudioNode): void;

  prepare(): void;

  startAndReturnError(outError: interop.PointerConvertible): boolean;

  pause(): void;

  reset(): void;

  stop(): void;

  inputConnectionPointForNodeInputBus(node: AVAudioNode, bus: number): AVAudioConnectionPoint | null;

  outputConnectionPointsForNodeOutputBus(node: AVAudioNode, bus: number): NSArray;

  get musicSequence(): interop.Pointer;
  set musicSequence(value: interop.PointerConvertible);

  readonly outputNode: AVAudioOutputNode;

  readonly inputNode: AVAudioInputNode;

  readonly mainMixerNode: AVAudioMixerNode;

  readonly isRunning: boolean;

  isAutoShutdownEnabled: boolean;

  readonly attachedNodes: NSSet;

  enableManualRenderingModeFormatMaximumFrameCountError(mode: interop.Enum<typeof AVAudioEngineManualRenderingMode>, pcmFormat: AVAudioFormat, maximumFrameCount: number, outError: interop.PointerConvertible): boolean;

  disableManualRenderingMode(): void;

  renderOfflineToBufferError(numberOfFrames: number, buffer: AVAudioPCMBuffer, outError: interop.PointerConvertible): interop.Enum<typeof AVAudioEngineManualRenderingStatus>;

  readonly manualRenderingBlock: (p1: number, p2: interop.PointerConvertible, p3: interop.PointerConvertible) => interop.Enum<typeof AVAudioEngineManualRenderingStatus>;

  readonly isInManualRenderingMode: boolean;

  readonly manualRenderingMode: interop.Enum<typeof AVAudioEngineManualRenderingMode>;

  readonly manualRenderingFormat: AVAudioFormat;

  readonly manualRenderingMaximumFrameCount: number;

  readonly manualRenderingSampleTime: number;

  connectMIDIToFormatBlock(sourceNode: AVAudioNode, destinationNode: AVAudioNode, format: AVAudioFormat | null, tapBlock: (p1: number, p2: number, p3: number, p4: interop.PointerConvertible) => number | null): void;

  connectMIDIToFormatEventListBlock(sourceNode: AVAudioNode, destinationNode: AVAudioNode, format: AVAudioFormat | null, tapBlock: (p1: number, p2: number, p3: interop.PointerConvertible) => number | null): void;

  connectMIDIToNodesFormatBlock(sourceNode: AVAudioNode, destinationNodes: NSArray<interop.Object> | Array<interop.Object>, format: AVAudioFormat | null, tapBlock: (p1: number, p2: number, p3: number, p4: interop.PointerConvertible) => number | null): void;

  connectMIDIToNodesFormatEventListBlock(sourceNode: AVAudioNode, destinationNodes: NSArray<interop.Object> | Array<interop.Object>, format: AVAudioFormat | null, tapBlock: (p1: number, p2: number, p3: interop.PointerConvertible) => number | null): void;

  disconnectMIDIFrom(sourceNode: AVAudioNode, destinationNode: AVAudioNode): void;

  disconnectMIDIFromNodes(sourceNode: AVAudioNode, destinationNodes: NSArray<interop.Object> | Array<interop.Object>): void;

  disconnectMIDIInput(node: AVAudioNode): void;

  disconnectMIDIOutput(node: AVAudioNode): void;
}

declare class AVAudioEnvironmentDistanceAttenuationParameters extends NSObject {
  distanceAttenuationModel: interop.Enum<typeof AVAudioEnvironmentDistanceAttenuationModel>;

  referenceDistance: number;

  maximumDistance: number;

  rolloffFactor: number;
}

declare class AVAudioEnvironmentNode extends AVAudioNode implements AVAudioMixing {
  init(): this;

  outputType: interop.Enum<typeof AVAudioEnvironmentOutputType>;

  outputVolume: number;

  readonly nextAvailableInputBus: number;

  listenerPosition: AVAudio3DPoint;

  listenerVectorOrientation: AVAudio3DVectorOrientation;

  listenerAngularOrientation: AVAudio3DAngularOrientation;

  readonly distanceAttenuationParameters: AVAudioEnvironmentDistanceAttenuationParameters;

  readonly reverbParameters: AVAudioEnvironmentReverbParameters;

  readonly applicableRenderingAlgorithms: NSArray;

  isListenerHeadTrackingEnabled: boolean;

  destinationForMixerBus(mixer: AVAudioNode, bus: number): AVAudioMixingDestination;

  volume: number;

  pan: number;

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

  renderingAlgorithm: interop.Enum<typeof AVAudio3DMixingRenderingAlgorithm>;

  sourceMode: interop.Enum<typeof AVAudio3DMixingSourceMode>;

  pointSourceInHeadMode: interop.Enum<typeof AVAudio3DMixingPointSourceInHeadMode>;

  rate: number;

  reverbBlend: number;

  obstruction: number;

  occlusion: number;

  position: AVAudio3DPoint;
}

declare class AVAudioNode extends NSObject {
  reset(): void;

  inputFormatForBus(bus: number): AVAudioFormat;

  outputFormatForBus(bus: number): AVAudioFormat;

  nameForInputBus(bus: number): string;

  nameForOutputBus(bus: number): string;

  installTapOnBusBufferSizeFormatBlock(bus: number, bufferSize: number, format: AVAudioFormat | null, tapBlock: (p1: AVAudioPCMBuffer, p2: AVAudioTime) => void): void;

  removeTapOnBus(bus: number): void;

  readonly engine: AVAudioEngine;

  readonly numberOfInputs: number;

  readonly numberOfOutputs: number;

  readonly lastRenderTime: AVAudioTime;

  readonly AUAudioUnit: AUAudioUnit;

  readonly latency: number;

  readonly outputPresentationLatency: number;
}

