/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const kAudioSession_AudioRouteKey_Inputs: interop.Pointer;

declare const kAudioServicesNoHardwareError: number;

declare const kCAFMarkerType_SelectionStart: number;

declare const kDynamicsProcessorParam_AttackTime: number;

declare const kAudioFileGlobalInfo_MIMETypesForType: number;

declare const kAudioFileStreamProperty_PreviousIndependentPacket: number;

declare const kCAF_SMPTE_TimeType60: number;

declare const kAUNBandEQParam_Bandwidth: number;

declare const kAudioUnitSubType_AUConverter: number;

declare const kMusicEventType_ExtendedTempo: number;

declare const kAUGroupParameterID_Volume_LSB: number;

declare const kAudioCodecInitializeSelect: number;

declare const kSequenceTrackProperty_TimeResolution: number;

declare const kSequenceTrackProperty_TrackLength: number;

declare const kSequenceTrackProperty_AutomatedParameters: number;

declare const kSequenceTrackProperty_SoloStatus: number;

declare const kSequenceTrackProperty_MuteStatus: number;

declare const kCAF_SMPTE_TimeTypeNone: number;

declare const kAudioToolboxErr_CannotDoInCurrentContext: number;

declare const kAudioToolboxErr_InvalidPlayerState: number;

declare const kAudioToolboxErr_InvalidEventType: number;

declare const kAudioToolboxErr_IllegalTrackDestination: number;

declare const kAudioToolboxErr_TrackNotFound: number;

declare const kAudioToolboxErr_InvalidSequenceType: number;

declare const kMusicEventType_AUPreset: number;

declare const kMusicEventType_MIDIRawData: number;

declare const kMusicEventType_NULL: number;

declare const kExtAudioFileError_CodecUnavailableInputNotConsumed: number;

declare const kExtAudioFileError_AsyncWriteBufferOverflow: number;

declare const kExtAudioFileError_InvalidSeek: number;

declare const kExtAudioFileError_MaxPacketSizeUnknown: number;

declare const kExtAudioFileError_InvalidOperationOrder: number;

declare const kExtAudioFileError_InvalidProperty: number;

declare const kExtAudioFileProperty_ConverterConfig: number;

declare const kExtAudioFileProperty_FileLengthFrames: number;

declare const kExtAudioFileProperty_AudioFile: number;

declare const kExtAudioFileProperty_CodecManufacturer: number;

declare const kAudioConverterErr_NoHardwarePermission: number;

declare const kCAF_SMPTE_TimeType2398: number;

declare const kCAF_SMPTE_TimeType5994: number;

declare const kExtAudioFileError_InvalidDataFormat: number;

declare const kCAF_SMPTE_TimeType2997: number;

declare const kCAF_SMPTE_TimeType30: number;

declare const kCAFMarkerType_KeySignature: number;

declare const kCAFMarkerType_TimeSignature: number;

declare const kCAFMarkerType_Tempo: number;

declare const kCAFMarkerType_ReleaseLoopEnd: number;

declare const kCAFMarkerType_SustainLoopEnd: number;

declare const kCAFMarkerType_SelectionEnd: number;

declare const kCAFMarkerType_RegionEnd: number;

declare const kCAFMarkerType_Index: number;

declare const kAudioFilePropertyID3Tag: number;

declare const kCAFMarkerType_TrackEnd: number;

declare const kCAFMarkerType_ProgramEnd: number;

declare const kCAF_UMIDChunkID: number;

declare const kCAF_OverviewChunkID: number;

declare const kCAF_StringsChunkID: number;

declare const kCAF_EditCommentsChunkID: number;

declare const kCAF_InfoStringsChunkID: number;

declare const kCAF_MagicCookieID: number;

declare const kCAF_InstrumentChunkID: number;

declare const kCAF_RegionChunkID: number;

declare const kCAF_FillerChunkID: number;

declare const kCAF_ChannelLayoutChunkID: number;

declare const kCAF_FileVersion_Initial: number;

declare const kCAF_FileType: number;

declare const kAudioServicesSystemSoundExceededMaximumDurationError: number;

declare const kAudioServicesSystemSoundUnspecifiedError: number;

declare const kAudioSessionProperty_AudioRoute: number;

declare const kAudioSessionCategory_UserInterfaceSoundEffects: number;

declare const kAudioSessionProperty_AudioRouteDescription: number;

declare const kAudioSessionProperty_InputGainAvailable: number;

declare const kAudioSessionProperty_OutputDestination: number;

declare const kAudioSessionProperty_InputSource: number;

declare const kAudioSessionProperty_OutputDestinations: number;

declare const kAudioQueueParam_VolumeRampTime: number;

declare const kAudioSessionProperty_InputSources: number;

declare const kAudioSessionProperty_OverrideCategoryEnableBluetoothInput: number;

declare const kAudioSessionProperty_OverrideCategoryDefaultToSpeaker: number;

declare const kAudioSessionProperty_ServerDied: number;

declare const kAudioSessionProperty_AudioInputAvailable: number;

declare const kAudioSessionProperty_CurrentHardwareOutputLatency: number;

declare const kAudioSessionProperty_CurrentHardwareOutputVolume: number;

declare const kAudioSessionProperty_CurrentHardwareOutputNumberChannels: number;

declare const kAudioSessionProperty_CurrentHardwareSampleRate: number;

declare const kAudioSessionProperty_AudioRouteChange: number;

declare const kAudioSessionProperty_PreferredHardwareIOBufferDuration: number;

declare const kAudioSessionMode_VoiceChat: number;

declare const kExtAudioFileProperty_AudioConverter: number;

declare const kAudioSessionMode_Default: number;

declare const kAudioSessionInterruptionType_ShouldNotResume: number;

declare const kAudioSessionInterruptionType_ShouldResume: number;

declare const kAudioSession_InputSourceKey_Description: interop.Pointer;

declare const kAudioSession_InputSourceKey_ID: interop.Pointer;

declare const kAudioSessionOutputRoute_USBAudio: interop.Pointer;

declare const kAudioSessionOutputRoute_BuiltInSpeaker: interop.Pointer;

declare const kAudioSessionOutputRoute_BuiltInReceiver: interop.Pointer;

declare const kAudioSessionInputRoute_USBAudio: interop.Pointer;

declare const kAudioSessionInputRoute_HeadsetMic: interop.Pointer;

declare const kAudioSession_RouteChangeKey_Reason: interop.Pointer;

declare const kAudioSessionRouteChangeReason_NoSuitableRouteForCategory: number;

declare const kAudioSessionRouteChangeReason_WakeFromSleep: number;

declare const kAudioSessionRouteChangeReason_CategoryChange: number;

declare const kAudioSessionRouteChangeReason_OldDeviceUnavailable: number;

declare const kAudioUnitType_RemoteEffect: number;

declare const kAudioSessionCategory_RecordAudio: number;

declare const kAudioSessionCategory_MediaPlayback: number;

declare const kAudioSessionCategory_AmbientSound: number;

declare const kAudioSessionNotActiveError: number;

declare const kAudioSessionBadPropertySizeError: number;

declare const kAudioCodecProduceOutputPacketSuccess: number;

declare const kAudioSessionAlreadyInitialized: number;

declare const kAudioSessionNoError: number;

declare const kAudioQueueParam_Pan: number;

declare const kAudioFileStreamProperty_MaximumPacketSize: number;

declare const kDynamicRangeCompressionProfile_LateNight: number;

declare const kAudioQueueParam_Volume: number;

declare const kAudioQueueProperty_ChannelAssignments: number;

declare const kAUNBandEQParam_Frequency: number;

declare const kAudioQueueHardwareCodecPolicy_PreferHardware: number;

declare const kAudioFilePropertyFileFormat: number;

declare const kAudioQueueProperty_HardwareCodecPolicy: number;

declare const kAudioQueueTimePitchAlgorithm_LowQualityZeroLatency: number;

declare const kAudioQueueTimePitchAlgorithm_TimeDomain: number;

declare const kAudioQueueProperty_TimePitchBypass: number;

declare const kAudioQueueProperty_ConverterError: number;

declare const kAudioQueueProperty_CurrentLevelMeterDB: number;

declare const kAudioQueueHardwareCodecPolicy_UseHardwareOnly: number;

declare const kAudioQueueProperty_EnableLevelMetering: number;

declare const kAudioQueueProperty_StreamDescription: number;

declare const kAudioQueueProperty_MaximumOutputPacketSize: number;

declare const kAudioQueueDeviceProperty_SampleRate: number;

declare const kAudioQueueProperty_IsRunning: number;

declare const kAudioQueueErr_InvalidOfflineMode: number;

declare const kAudioQueueErr_EnqueueDuringReset: number;

declare const kAudioQueueErr_CannotStartYet: number;

declare const kAudioCodecDelayMode_Compatibility: number;

declare const kAudioQueueErr_TooManyTaps: number;

declare const kAudioQueueErr_QueueInvalidated: number;

declare const kAudioQueueErr_CodecNotFound: number;

declare const kAudioQueueErr_InvalidPropertyValue: number;

declare const kAudioQueueErr_InvalidRunState: number;

declare const kAudioQueueErr_BufferInQueue: number;

declare const kAudioQueueErr_InvalidPropertySize: number;

declare const kAudioFormatUnsupportedDataFormatError: number;

declare const kAudioFormatBadSpecifierSizeError: number;

declare const kAudioFormatBadPropertySizeError: number;

declare const kAudioFormatUnsupportedPropertyError: number;

declare const kAudioFormatUnspecifiedError: number;

declare const kAudioEncoderComponentType: number;

declare const kAudioDecoderComponentType: number;

declare const kReverb2Param_RandomizeReflections: number;

declare const kAudioFormatProperty_HardwareCodecCapabilities: number;

declare const kAudioFormatProperty_ID3TagToDictionary: number;

declare const kAudioFormatProperty_ID3TagSize: number;

declare const kAudioFormatProperty_PanningMatrix: number;

declare const kAudioFormatProperty_ChannelShortName: number;

declare const kAudioFormatProperty_ValidateChannelLayout: number;

declare const kAudioFormatProperty_AreChannelLayoutsEquivalent: number;

declare const kAudioFormatProperty_ChannelMap: number;

declare const kAudioFormatProperty_MatrixMixMap: number;

declare const kAudioUnitErr_MissingKey: number;

declare const kAudioFormatProperty_BitmapForLayoutTag: number;

declare const kAudioFormatProperty_AvailableDecodeNumberChannels: number;

declare const kAudioFormatProperty_AvailableEncodeNumberChannels: number;

declare const kAudioUnitErr_ExtensionNotFound: number;

declare const kAudioFormatProperty_AvailableEncodeBitRates: number;

declare const kAudioFormatProperty_Decoders: number;

declare const kAudioFormatProperty_Encoders: number;

declare const kAudioFormatProperty_FormatIsEncrypted: number;

declare const kAudioFormatProperty_FormatIsVBR: number;

declare const kAudioFormatProperty_ChannelLayoutFromESDS: number;

declare const kAudioFormatProperty_ASBDFromESDS: number;

declare const kAudioFormatProperty_DecodeFormatIDs: number;

declare const kAudioFormatProperty_FormatInfo: number;

declare const kAudioFileStreamProperty_InfoDictionary: number;

declare const kAudioFileStreamProperty_BitRate: number;

declare const kAudioFileStreamProperty_AverageBytesPerPacket: number;

declare const kAudioFileStreamProperty_ByteToPacket: number;

declare const kAudioFileStreamProperty_RestrictsRandomAccess: number;

declare const kAudioConverterAvailableEncodeChannelLayoutTags: number;

declare const kAudioFileStreamProperty_ChannelLayout: number;

declare const kAudioFileStreamProperty_DataOffset: number;

declare const kAudioFileStreamProperty_AudioDataByteCount: number;

declare const kAudioFileStreamProperty_DataFormat: number;

declare const kAudioFileStreamProperty_ReadyToProducePackets: number;

declare const kAudioFileStreamError_DataUnavailable: number;

declare const kAudioFileStreamError_NotOptimized: number;

declare const kAudioFileStreamError_BadPropertySize: number;

declare const kAudioFileStreamError_UnsupportedDataFormat: number;

declare const kAudioFileGlobalInfo_TypesForExtension: number;

declare const kAudioFileGlobalInfo_TypesForHFSTypeCode: number;

declare const kAudioFileGlobalInfo_TypesForUTI: number;

declare const kAudioFileStreamProperty_PacketTableInfo: number;

declare const kAudioFileGlobalInfo_TypesForMIMEType: number;

declare const kAudioFormatProperty_ChannelLayoutForBitmap: number;

declare const kAudioFileGlobalInfo_UTIsForType: number;

declare const kAudioFileGlobalInfo_HFSTypeCodesForType: number;

declare const kAudioFileGlobalInfo_AllUTIs: number;

declare const kAudioFileGlobalInfo_AvailableFormatIDs: number;

declare const kAudioFileGlobalInfo_FileTypeName: number;

declare const kAudioFileGlobalInfo_ReadableTypes: number;

declare const kAudioQueueErr_InvalidCodecAccess: number;

declare const kAudioFilePropertyUseAudioTrack: number;

declare const kAudioFilePropertyAudioTrackCount: number;

declare const kAudioFilePropertySourceBitDepth: number;

declare const kAudioFilePropertyID3TagOffset: number;

declare const kAudioFilePropertyReserveDuration: number;

declare const kAudioFilePropertyFormatList: number;

declare const kAudioFilePropertyChunkIDs: number;

declare const kAudioFilePropertyByteToPacket: number;

declare const kAudioFilePropertyPreviousIndependentPacket: number;

declare const kCAF_StreamDescriptionChunkID: number;

declare const kAudioFilePropertyChannelLayout: number;

declare const kAudioFileStreamProperty_PacketToFrame: number;

declare const kAudioFilePropertyDataOffset: number;

declare const kAudioFilePropertyAudioDataPacketCount: number;

declare const kAudioFilePropertyIsOptimized: number;

declare const kAudioFileLoopDirection_Forward: number;

declare const kAUNBandEQFilterType_LowShelf: number;

declare const kAudioFilePositionError: number;

declare const kSpatialMixerParam_HeadRoll: number;

declare const kAudioFileNotOpenError: number;

declare const kAudioCodecPropertyCurrentTargetBitRate: number;

declare const kAudioFileInvalidFileError: number;

declare const kAudioFileInvalidPacketOffsetError: number;

declare const kAudioFileBadPropertySizeError: number;

declare const kAudioFileUnsupportedDataFormatError: number;

declare const kAudioFileLATMInLOASType: number;

declare const kAudioFilePropertyDeferSizeUpdates: number;

declare const kAudioFile3GP2Type: number;

declare const kAudioFileM4BType: number;

declare const kAudioFileM4AType: number;

declare const kAudioFileMPEG4Type: number;

declare const kAudioFileAC3Type: number;

declare const kAudioFileMP1Type: number;

declare const kAudioFileMP2Type: number;

declare const kAudioFileWAVEType: number;

declare const kAudioFileAIFFType: number;

declare const kAudioConverterPropertyCanResumeFromInterruption: number;

declare const kAudioConverterSampleRateConverterAlgorithm: number;

declare const kAudioConverterErr_HardwareInUse: number;

declare const kAudioConverterErr_OutputSampleRateOutOfRange: number;

declare const kAudioConverterErr_InputSampleRateOutOfRange: number;

declare const kAudioSessionRouteChangeReason_Override: number;

declare const kAudioConverterErr_InvalidOutputSize: number;

declare const kAudioConverterErr_FormatNotSupported: number;

declare const kConverterPrimeMethod_Normal: number;

declare const kAudioConverterSampleRateConverterComplexity_Normal: number;

declare const kAudioConverterSampleRateConverterComplexity_Linear: number;

declare const kAudioConverterQuality_Min: number;

declare const kAudioConverterPropertyBitDepthHint: number;

declare const kAudioConverterCurrentInputStreamDescription: number;

declare const kAudioConverterCurrentOutputStreamDescription: number;

declare const kAudioFormatProperty_TagForChannelLayout: number;

declare const kAudioConverterAvailableEncodeSampleRates: number;

declare const kAudioConverterApplicableEncodeSampleRates: number;

declare const kAudioConverterAvailableEncodeBitRates: number;

declare const kAudioConverterApplicableEncodeBitRates: number;

declare const kAudioConverterInputChannelLayout: number;

declare const kAUNBandEQParam_GlobalGain: number;

declare const kAudioConverterCompressionMagicCookie: number;

declare const kAudioConverterChannelMap: number;

declare const kAudioConverterPrimeMethod: number;

declare const kAudioConverterSampleRateConverterInitialPhase: number;

declare const kAudioSessionEndInterruption: number;

declare const kAudioConverterPropertyCalculateInputBufferSize: number;

declare const kAudioConverterPropertyMaximumInputPacketSize: number;

declare const kAudioConverterPropertyMinimumOutputBufferSize: number;

declare const kAUNodeInteraction_InputCallback: number;

declare const kAUNodeInteraction_Connection: number;

declare const kMusicDeviceSysExSelect: number;

declare const kAudioSessionProperty_InterruptionType: number;

declare const kMusicDeviceRange: number;

declare const kMusicNoteEvent_Unused: number;

declare const kMusicNoteEvent_UseGroupInstrument: number;

declare const kAudioConverterPropertyCalculateOutputBufferSize: number;

declare const kAudioUnitSubType_HighShelfFilter: number;

declare const kReverb2Param_DecayTimeAtNyquist: number;

declare const kReverb2Param_MaxDelayTime: number;

declare const kReverb2Param_DryWetMix: number;

declare const kRoundTripAACParam_RateOrQuality: number;

declare const kMusicDeviceStartNoteSelect: number;

declare const kAUNBandEQFilterType_ResonantHighShelf: number;

declare const kAUNBandEQFilterType_HighShelf: number;

declare const kAUNBandEQFilterType_BandStop: number;

declare const kAUNBandEQFilterType_ResonantLowPass: number;

declare const kAUNBandEQFilterType_Parametric: number;

declare const kAUNBandEQParam_BypassBand: number;

declare const kDelayParam_LopassCutoff: number;

declare const kAUSoundIsolationParam_WetDryMixPercent: number;

declare const kDelayParam_Feedback: number;

declare const kDistortionParam_FinalMix: number;

declare const kDistortionParam_SoftClipGain: number;

declare const kDistortionParam_RingModBalance: number;

declare const kDistortionParam_CubicTerm: number;

declare const kDistortionParam_DecimationMix: number;

declare const kDistortionParam_Decay: number;

declare const kDistortionParam_Delay: number;

declare const kExtAudioFileError_InvalidChannelMap: number;

declare const kVarispeedParam_PlaybackCents: number;

declare const kDynamicsProcessorParam_InputAmplitude: number;

declare const kDynamicsProcessorParam_CompressionAmount: number;

declare const kDynamicsProcessorParam_ReleaseTime: number;

declare const kAudioFileInvalidPacketDependencyError: number;

declare const kDynamicsProcessorParam_ExpansionThreshold: number;

declare const kLimiterParam_PreGain: number;

declare const kParametricEQParam_Gain: number;

declare const kParametricEQParam_Q: number;

declare const kAULowShelfParam_CutoffFrequency: number;

declare const kBandpassParam_CenterFrequency: number;

declare const kAUSamplerParam_CoarseTuning: number;

declare const kNewTimePitchParam_EnableTransientPreservation: number;

declare const kNewTimePitchParam_EnablePeakLocking: number;

declare const kAudioFile3GPType: number;

declare const kNewTimePitchParam_Pitch: number;

declare const kTimePitchParam_EffectBlend: number;

declare const kTimePitchParam_Pitch: number;

declare const kMatrixMixerParam_PostPeakHoldLevelLinear: number;

declare const kMatrixMixerParam_PreAveragePowerLinear: number;

declare const kMatrixMixerParam_PrePeakHoldLevel: number;

declare const kMatrixMixerParam_PreAveragePower: number;

declare const kMatrixMixerParam_Enable: number;

declare const kMatrixMixerParam_Volume: number;

declare const kAudioUnitSubType_Merger: number;

declare const kMultiChannelMixerParam_PrePeakHoldLevel: number;

declare const kMultiChannelMixerParam_Volume: number;

declare const k3DMixerParam_PrePeakHoldLevel: number;

declare const kAppleHardwareAudioCodecManufacturer: number;

declare const k3DMixerParam_ObstructionAttenuation: number;

declare const k3DMixerParam_GlobalReverbGain: number;

declare const k3DMixerParam_MinGain: number;

declare const k3DMixerParam_ObstructionAttenuationInDecibels: number;

declare const k3DMixerParam_OcclusionAttenuationInDecibels: number;

declare const k3DMixerParam_BusEnable: number;

declare const k3DMixerParam_Distance: number;

declare const k3DMixerParam_Azimuth: number;

declare const kReverbParam_FilterEnable: number;

declare const kAudioSessionInitializationError: number;

declare const kReverbParam_FilterBandwidth: number;

declare const kReverbParam_FilterFrequency: number;

declare const kSpatialMixerParam_OcclusionAttenuation: number;

declare const kAudioUnitProperty_DopplerShift: number;

declare const kSpatialMixerParam_GlobalReverbGain: number;

declare const kSpatialMixerParam_MinGain: number;

declare const kSpatialMixerParam_Enable: number;

declare const kSpatialMixerParam_Gain: number;

declare const kSpatialMixerParam_Distance: number;

declare const kAUGroupParameterID_KeyPressure_FirstKey: number;

declare const kAudioQueueHardwareCodecPolicy_PreferSoftware: number;

declare const kAUGroupParameterID_DataEntry_LSB: number;

declare const kAUGroupParameterID_Foot_LSB: number;

declare const kAUGroupParameterID_Pan_LSB: number;

declare const kAUGroupParameterID_ModWheel_LSB: number;

declare const kAudioConverterPropertyMaximumOutputPacketSize: number;

declare const kAUGroupParameterID_DataEntry: number;

declare const kAUGroupParameterID_Expression: number;

declare const kAUGroupParameterID_ChannelPressure: number;

declare const kAUGroupParameterID_AllSoundOff: number;

declare const kAUGroupParameterID_Sostenuto: number;

declare const kAUGroupParameterID_Sustain: number;

declare const kAudioOutputUnitStopSelect: number;

declare const kAudioOutputUnitStartSelect: number;

declare const kDistortionParam_LinearTerm: number;

declare const kAudioCodecPropertyNameCFString: number;

declare const kMusicDeviceMIDIEventListSelect: number;

declare const kAudioUnitProperty_InputAnchorTimeStamp: number;

declare const kAudioFileWave64Type: number;

declare const kAudioFormatProperty_AvailableEncodeChannelLayoutTags: number;

declare const kDynamicsProcessorParam_MasterGain: number;

declare const kAudioUnitProperty_DeferredRendererExtraLatency: number;

declare const kAUSampler_DefaultMelodicBankMSB: number;

declare const kInstrumentType_AUPreset: number;

declare const kInstrumentType_SF2Preset: number;

declare const kInstrumentType_DLSPreset: number;

declare const kAUMIDISynthProperty_EnablePreload: number;

declare const kAudioFileGlobalInfo_AllHFSTypeCodes: number;

declare const kAudioUnitProperty_ScheduledFileNumberBuffers: number;

declare const kAudioUnitProperty_ScheduledFileRegion: number;

declare const kAudioUnitProperty_CurrentPlayTime: number;

declare const kAudioUnitProperty_ScheduleStartTimeStamp: number;

declare const kAudioUnitProperty_ScheduleAudioSlice: number;

declare const kAudioUnitProperty_ReverbPreset: number;

declare const kAudioUnitProperty_SpatialMixerAnyInputIsUsingPersonalizedHRTF: number;

declare const kAudioCodecDelayMode_Minimum: number;

declare const kAudioUnitProperty_SpatialMixerEnableHeadTracking: number;

declare const kAudioUnitProperty_SpatialMixerPointSourceInHeadMode: number;

declare const kAudioUnitProperty_SpatialMixerAttenuationCurve: number;

declare const kAudioUnitProperty_SpatialMixerRenderingFlags: number;

declare const kAudioUnitProperty_MatrixDimensions: number;

declare const kAudioUnitProperty_MatrixLevels: number;

declare const kAUNBandEQProperty_MaxNumberOfBands: number;

declare const kAUVoiceIOProperty_VoiceProcessingQuality: number;

declare const kAUVoiceIOProperty_OtherAudioDuckingConfiguration: number;

declare const kAUVoiceIOProperty_VoiceProcessingEnableAGC: number;

declare const kAUVoiceIOProperty_BypassVoiceProcessing: number;

declare const kAudioOutputUnitProperty_HostTransportState: number;

declare const kAudioOutputUnitProperty_OSWorkgroup: number;

declare const kAudioOutputUnitProperty_StartTimestampsAtZero: number;

declare const kExtAudioFileProperty_ClientChannelLayout: number;

declare const kAudioOutputUnitProperty_HasIO: number;

declare const kAudioOutputUnitProperty_EnableIO: number;

declare const kAudioUnitProperty_ParameterValueStrings: number;

declare const kAudioUnitSampleRateConverterComplexity_Linear: number;

declare const kAudioUnitProperty_SampleRateConverterComplexity: number;

declare const kAudioUnitClumpID_System: number;

declare const kAudioUnitProperty_3DMixerDistanceAtten: number;

declare const kAudioUnitProperty_IsInterAppConnected: number;

declare const kAudioUnitProperty_AudioUnitMIDIProtocol: number;

declare const kAudioUnitProperty_MIDIOutputEventListCallback: number;

declare const kAudioUnitProperty_MIDIOutputCallback: number;

declare const kAudioUnitProperty_MIDIOutputCallbackInfo: number;

declare const kAudioUnitProperty_LoadedOutOfProcess: number;

declare const kInstrumentType_Audiofile: number;

declare const kAudioUnitProperty_LastRenderSampleTime: number;

declare const kAudioUnitProperty_RenderContextObserver: number;

declare const kAudioUnitProperty_ParametersForOverview: number;

declare const kAudioUnitProperty_ClassInfoFromDocument: number;

declare const kAudioUnitProperty_PresentationLatency: number;

declare const kLimiterParam_AttackTime: number;

declare const kAudioUnitProperty_ParameterClumpName: number;

declare const kAudioUnitProperty_ParameterHistoryInfo: number;

declare const kAudioUnitProperty_FrequencyResponse: number;

declare const kExtAudioFileProperty_ClientMaxPacketSize: number;

declare const kAudioUnitProperty_ShouldAllocateBuffer: number;

declare const kAudioUnitProperty_InputSamplesInOutput: number;

declare const kAudioUnitProperty_PresentPreset: number;

declare const kAudioUnitProperty_ElementName: number;

declare const kAudioUnitProperty_InPlaceProcessing: number;

declare const kMusicEventType_MIDINoteMessage: number;

declare const kAudioCodecExtendFrequencies: number;

declare const kAudioUnitProperty_HostCallbacks: number;

declare const kAudioUnitProperty_RenderQuality: number;

declare const kAudioUnitProperty_FactoryPresets: number;

declare const kAudioUnitProperty_SetRenderCallback: number;

declare const kAudioUnitProperty_LastRenderError: number;

declare const kAudioUnitProperty_BypassEffect: number;

declare const kAudioUnitProperty_AudioChannelLayout: number;

declare const kAudioCodecPropertyAvailableInputSampleRates: number;

declare const kAudioUnitProperty_Latency: number;

declare const kAudioUnitProperty_StreamFormat: number;

declare const kAudioUnitType_MusicDevice: number;

declare const kAudioFilePropertyRegionList: number;

declare const kAudioUnitProperty_CPULoad: number;

declare const kAudioUnitProperty_ParameterList: number;

declare const kAudioUnitProperty_SampleRate: number;

declare const kAudioUnitProperty_ClassInfo: number;

declare const kAudioUnitScope_Part: number;

declare const kNumberOfResponseFrequencies: number;

declare const kAudioUnitComplexRenderSelect: number;

declare const kAudioUnitResetSelect: number;

declare const kAudioUnitRenderSelect: number;

declare const kAudioUnitScheduleParametersSelect: number;

declare const kAudioUnitRemoveRenderNotifySelect: number;

declare const kAudioUnitAddRenderNotifySelect: number;

declare const kAudioFilePropertyDataFormatName: number;

declare const kAudioUnitAddPropertyListenerSelect: number;

declare const kAudioCodecStateError: number;

declare const kAudioSessionIncompatibleCategory: number;

declare const kAudioUnitSetPropertySelect: number;

declare const kAudioUnitInitializeSelect: number;

declare const kAudioComponentErr_NotPermitted: number;

declare const kAudioComponentErr_TooManyInstances: number;

declare const kAudioComponentErr_UnsupportedType: number;

declare const kAudioComponentErr_DuplicateDescription: number;

declare const kAudioComponentErr_InstanceInvalidated: number;

declare const kAudioUnitErr_InvalidOfflineRender: number;

declare const kAudioUnitErr_Initialized: number;

declare const kAudioUnitErr_InvalidPropertyValue: number;

declare const kAudioUnitErr_InvalidScope: number;

declare const kAudioUnitErr_Uninitialized: number;

declare const kAudioUnitErr_FileNotSpecified: number;

declare const kAudioUnitErr_UnknownFileType: number;

declare const kAudioUnitRange: number;

declare const kAudioUnitErr_FailedInitialization: number;

declare const kAudioUnitErr_InvalidElement: number;

declare const kAudioFilePropertyPacketToFrame: number;

declare const kAudioUnitSubType_AudioFilePlayer: number;

declare const kAudioUnitSubType_ScheduledSoundPlayer: number;

declare const kAudioUnitSubType_MatrixMixer: number;

declare const kAudioUnitSubType_AUiPodEQ: number;

declare const kAudioFormatProperty_AvailableEncodeSampleRates: number;

declare const kAudioUnitSubType_SampleDelay: number;

declare const kAudioUnitSubType_Distortion: number;

declare const kAudioUnitSubType_LowShelfFilter: number;

declare const kAudioUnitSubType_BandPassFilter: number;

declare const kAudioUnitParameterName_Full: number;

declare const kAudioUnitSubType_DynamicsProcessor: number;

declare const kAudioUnitSubType_PeakLimiter: number;

declare const kAudioUnitSubType_AUiPodTime: number;

declare const kAudioUnitSubType_TimePitch: number;

declare const kAudioUnitSubType_RoundTripAAC: number;

declare const kAudioUnitSubType_MultiSplitter: number;

declare const kAudioUnitSubType_Splitter: number;

declare const kMatrixMixerParam_PostAveragePower: number;

declare const kAUSamplerProperty_LoadPresetFromBank: number;

declare const kAudioUnitProperty_MeterClipping: number;

declare const kAudioUnitSubType_MIDISynth: number;

declare const kAudioUnitSubType_Sampler: number;

declare const kAudioUnitSubType_RemoteIO: number;

declare const kAudioUnitSubType_GenericOutput: number;

declare const kAudioUnitManufacturer_Apple: number;

declare const kAudioUnitType_RemoteMusicEffect: number;

declare const kAudioUnitType_RemoteInstrument: number;

declare const kAudioUnitType_RemoteGenerator: number;

declare const kAudioUnitType_SpeechSynthesizer: number;

declare const kAudioUnitType_Panner: number;

declare const kAudioUnitType_MusicEffect: number;

declare const kHintHidden: number;

declare const kHintBasic: number;

declare const kAudioCodecOutputPrecedenceSampleRate: number;

declare const kAudioToolboxErr_TrackIndexError: number;

declare const kAudioCodecOutputPrecedenceBitRate: number;

declare const kAudioFilePropertyAudioDataByteCount: number;

declare const kAudioCodecOutputPrecedenceNone: number;

declare const kAudioCodecBitRateFormat_ABR: number;

declare const kHighShelfParam_Gain: number;

declare const kAudioCodecBitRateFormat_CBR: number;

declare const kAudioCodecPropertyZeroFramesPadded: number;

declare const kAudioUnitErr_MIDIOutputBufferFull: number;

declare const kAudioCodecPropertyAvailableOutputChannelLayouts: number;

declare const kAudioCodecPropertyAvailableInputChannelLayouts: number;

declare const kAudioCodecPropertyOutputChannelLayout: number;

declare const kMusicEventType_ExtendedNote: number;

declare const kAudioCodecOutputFormatsForInputFormat: number;

declare const kAudioCodecDoesSampleRateConversion: number;

declare const kAudioCodecPropertyManufacturerCFString: number;

declare const kAudioCodecNotEnoughBufferSpaceError: number;

declare const kSequenceTrackProperty_OffsetTime: number;

declare const kAudioCodecUnsupportedFormatError: number;

declare const kAudioCodecIllegalOperationError: number;

declare const kAudioCodecBadPropertySizeError: number;

declare const kAudioCodecNoError: number;

declare const kAudioCodecResetSelect: number;

declare const kAudioCodecProduceOutputDataSelect: number;

declare const kAudioCodecUninitializeSelect: number;

declare const kAudioCodecSetPropertySelect: number;

declare const kAudioCodecProduceOutputPacketSuccessHasMore: number;

declare const kAudioCodecProduceOutputPacketFailure: number;

declare const kDynamicRangeControlMode_None: number;

declare const kProgramTargetLevel_Minus20dB: number;

declare const kAudioCodecDelayMode_Optimal: number;

declare const kAudioCodecPrimeMethod_None: number;

declare const kAudioCodecPrimeMethod_Pre: number;

declare const kSequenceTrackProperty_LoopInfo: number;

declare const kAudioSessionInputRoute_LineIn: interop.Pointer;

declare const kAudioCodecQuality_Low: number;

declare const kAudioFileGlobalInfo_WritableTypes: number;

declare const kAudioCodecQuality_Medium: number;

declare const kAudioCodecPropertyProgramTargetLevel: number;

declare const kAudioCodecPropertyAdjustTargetLevelConstant: number;

declare const kAudioCodecPropertyAdjustCompressionProfile: number;

declare const kAudioCodecPropertyDynamicRangeControlMode: number;

declare const kAudioCodecPropertyAdjustLocalQuality: number;

declare const kAudioCodecPropertyDelayMode: number;

declare const kAudioFileFileNotFoundError: number;

declare const kAudioCodecPropertyBitRateForVBR: number;

declare const kAudioCodecUseRecommendedSampleRate: number;

declare const kAudioCodecPropertyFormatList: number;

declare const kAudioCodecPropertyCurrentOutputChannelLayout: number;

declare const kAudioCodecPropertyPrimeInfo: number;

declare const kAudioCodecPropertyRecommendedBitRateRange: number;

declare const kAudioCodecPropertyQualitySetting: number;

declare const kAudioCodecPropertyCurrentInputSampleRate: number;

declare const kAudioCodecPropertyIsInitialized: number;

declare const kAudioCodecPropertyCurrentInputFormat: number;

declare const kConverterPrimeMethod_Pre: number;

declare const kAudioCodecPropertyMaximumPacketByteSize: number;

declare const kAudioCodecPropertyHasVariablePacketByteSizes: number;

declare const k3DMixerParam_MinGainInDecibels: number;

declare const kAudioCodecPropertyInputBufferSize: number;

declare const kAudioCodecPropertyInputFormatsForOutputFormat: number;

declare const kAudioCodecPropertyAvailableInputChannelLayoutTags: number;

declare const kAudioCodecPropertyDoesSampleRateConversion: number;

declare const kAudioCodecPropertyMinimumNumberOutputPackets: number;

declare const kAudioCodecPropertyMinimumNumberInputPackets: number;

declare const kAudioCodecPropertyAvailableOutputSampleRates: number;

declare const kAudioCodecPropertySupportedOutputFormats: number;

declare const kAudioCodecPropertySupportedInputFormats: number;

declare const kHintAdvanced: number;

declare const kAudioCodecInputFormatsForOutputFormat: number;

declare const kAudioUnitRemovePropertyListenerSelect: number;

declare const kAudioUnitProperty_MeteringMode: number;

declare const kExtAudioFilePacketTableInfoOverride_UseFileValueIfValid: number;

declare const kAudioUnitType_Effect: number;

declare const kAudioSessionMode_GameChat: number;

declare const kHipassParam_Resonance: number;

declare const kAudioFileSoundDesigner2Type: number;

declare const kAudioQueueErr_RecordUnderrun: number;

declare const kAudioFileStreamProperty_NextIndependentPacket: number;

declare const kAudioFilePropertyPacketToRollDistance: number;

declare const kAudioSessionProperty_AudioCategory: number;

declare const kExtAudioFileError_CodecUnavailableInputConsumed: number;

declare const kAudioUnitProcessSelect: number;

declare const kAudioUnitGetParameterSelect: number;

declare const kAudioConverterDecompressionMagicCookie: number;

declare const kCAF_PacketTableChunkID: number;

declare const k3DMixerParam_GlobalReverbGainInDecibels: number;

declare const kAudioConverterPropertyInputCodecParameters: number;

declare const kAudioFormatProperty_TagsForNumberOfChannels: number;

declare const kRoundTripAACParam_Format: number;

declare const kAudioUnitProperty_RequestViewController: number;

declare const kAudioUnitErr_InvalidProperty: number;

declare const kAudioCodecPropertyAvailableBitRateRange: number;

declare const kCAF_FormatListID: number;

declare const kAudioConverterPropertyFormatList: number;

declare const kAudioCodecPropertyAvailableOutputChannelLayoutTags: number;

declare const kAudioCodecPropertyOutputFormatsForInputFormat: number;

declare const kAudioUnitProperty_OfflineRender: number;

declare const kAudioUnitProperty_3DMixerAttenuationCurve: number;

declare const kDynamicRangeCompressionProfile_GeneralCompression: number;

declare const kMusicDeviceMIDIEventSelect: number;

declare const kAudioCodecAppendInputBufferListSelect: number;

declare const kExtAudioFilePacketTableInfoOverride_UseFileValue: number;

declare const kAudioSessionRouteChangeReason_Unknown: number;

declare const kAudioSessionProperty_CurrentHardwareInputLatency: number;

declare const kAudioSessionNotInitialized: number;

declare const kExtAudioFileError_InvalidPropertySize: number;

declare const kAudioFileStreamProperty_PacketToDependencyInfo: number;

declare const kAUNBandEQFilterType_2ndOrderButterworthHighPass: number;

declare const kMatrixMixerParam_PrePeakHoldLevelLinear: number;

declare const kAudioUnitProperty_ParameterStringFromValue: number;

declare const kAudioFileStreamError_UnsupportedFileType: number;

declare const kAudioCodecPropertyMagicCookie: number;

declare const kAudioFileStreamError_ValueUnknown: number;

declare const kAudioSessionCategory_LiveAudio: number;

declare const kAudioUnitErr_NoConnection: number;

declare const kNumAUNBandEQFilterTypes: number;

declare const kAUParameterListener_AnyParameter: number;

declare const kAudioUnitProperty_ParameterIDName: number;

declare const kAUNBandEQProperty_BiquadCoefficients: number;

declare const kAudioSessionNoCategorySet: number;

declare const kAudioSessionProperty_Mode: number;

declare const kAudioUnitProcessMultipleSelect: number;

declare const kExtAudioFileProperty_IOBuffer: number;

declare const kAudioUnitType_FormatConverter: number;

declare const kAudioFileUnsupportedFileTypeError: number;

declare const kAudioCodecPropertyApplicableOutputSampleRates: number;

declare const kAudioFormatProperty_FormatEmploysDependentPackets: number;

declare const kAudioServicesBadPropertySizeError: number;

declare const kCAF_PeakChunkID: number;

declare const kAudioUnitProperty_ElementCount: number;

declare const kAudioQueueErr_BufferEmpty: number;

declare const kAUGraphErr_NodeNotFound: number;

declare const kHighShelfParam_CutOffFrequency: number;

declare const kLimiterParam_DecayTime: number;

declare const kAudioUnitType_OfflineEffect: number;

declare const kAudioComponentErr_InitializationTimedOut: number;

declare const kRenderQuality_Medium: number;

declare const k3DMixerParam_PreAveragePower: number;

declare const kRenderQuality_Low: number;

declare const kDistortionParam_RingModFreq1: number;

declare const kAudioCodecPropertyCurrentInputChannelLayout: number;

declare const kExtAudioFileError_AsyncWriteTooLarge: number;

declare const kCAF_MIDIChunkID: number;

declare const kMultiChannelMixerParam_Enable: number;

declare const kAudioFileInvalidChunkError: number;

declare const kAudioConverterSampleRateConverterComplexity_MinimumPhase: number;

declare const kVarispeedParam_PlaybackRate: number;

declare const kAudioCodecPropertyInputChannelLayout: number;

declare const kAudioFilePropertyPacketSizeUpperBound: number;

declare const kAudioUnitProperty_SpatialMixerOutputType: number;

declare const kAudioQueueErr_CannotStart: number;

declare const kAudioFilePropertyEstimatedDuration: number;

declare const kSpatialMixerParam_HeadPitch: number;

declare const kAudioCodecPropertyPaddedZeros: number;

declare const kAudioUnitSampleRateConverterComplexity_Mastering: number;

declare const kAudioFileGlobalInfo_ExtensionsForType: number;

declare const kSystemSoundID_Vibrate: number;

declare const kMultiChannelMixerParam_PostAveragePower: number;

declare const kAudioUnitProperty_ParameterValueFromString: number;

declare const kAudioUnitGetPropertySelect: number;

declare const kBandpassParam_Bandwidth: number;

declare const kDynamicsProcessorParam_Threshold: number;

declare const kAudioQueueProperty_TimePitchAlgorithm: number;

declare const kMultiChannelMixerParam_Pan: number;

declare const kAudioUnitErr_TooManyFramesToProcess: number;

declare const kAudioUnitScope_LayerItem: number;

declare const kAudioUnitProperty_MIDIOutputBufferSizeHint: number;

declare const kCAF_SMPTE_TimeType25: number;

declare const kAudioConverterSampleRateConverterComplexity_Mastering: number;

declare const kAudioUnitProperty_DeferredRendererWaitFrames: number;

declare const kAudioFileStreamProperty_FormatList: number;

declare const kAudioFileStreamProperty_FrameToPacket: number;

declare const kAudioFileCAFType: number;

declare const k3DMixerParam_MaxGainInDecibels: number;

declare const kAppleSoftwareAudioCodecManufacturer: number;

declare const kAudioUnitSubType_AUiPodTimeOther: number;

declare const kAudioSession_OutputDestinationKey_ID: interop.Pointer;

declare const kAudioConverterErr_BadPropertySizeError: number;

declare const kMatrixMixerParam_PostAveragePowerLinear: number;

declare const kAudioConverterPrimeInfo: number;

declare const kDynamicsProcessorParam_OutputAmplitude: number;

declare const kAudioFileAAC_ADTSType: number;

declare const kAudioCodecPropertyMinimumDelayMode: number;

declare const kAudioFormatProperty_EncodeFormatIDs: number;

declare const kAudioFileBW64Type: number;

declare const kAudioConverterSampleRateConverterQuality: number;

declare const kAudioCodecPropertyApplicableInputSampleRates: number;

declare const kAudioConverterPropertyMinimumInputBufferSize: number;

declare const kExtAudioFileProperty_ClientDataFormat: number;

declare const k3DMixerParam_Elevation: number;

declare const kAudioFileStreamError_IllegalOperation: number;

declare const kAudioQueueHardwareCodecPolicy_Default: number;

declare const kRoundTripAACParam_EncodingStrategy: number;

declare const kDelayParam_WetDryMix: number;

declare const kAudioCodecBitRateControlMode_VariableConstrained: number;

declare const kAudioFileNotOptimizedError: number;

declare const kAudioUnitProperty_SupportsMPE: number;

declare const kAudioSessionUnspecifiedError: number;

declare const kAUSampler_DefaultBankLSB: number;

declare const kAudioFilePropertyMaximumPacketSize: number;

declare const kMusicDeviceProperty_InstrumentCount: number;

declare const kAUGroupParameterID_KeyPressure_LastKey: number;

declare const kDistortionParam_Rounding: number;

declare const kAudioSessionProperty_CurrentHardwareInputNumberChannels: number;

declare const kAudioFileMP3Type: number;

declare const kAudioFileRF64Type: number;

declare const kAudioOutputUnitProperty_HostReceivesRemoteControlEvents: number;

declare const kAudioFileStreamProperty_PacketSizeUpperBound: number;

declare const kAudioCodecUnspecifiedError: number;

declare const kAudioUnitScope_Group: number;

declare const kAudioFormatProperty_ChannelLayoutHash: number;

declare const kAudioUnitSubType_HighPassFilter: number;

declare const kAudioSessionInputRoute_BuiltInMic: interop.Pointer;

declare const kAudioCodecPropertyAdjustTargetLevel: number;

declare const kAudioConverterPropertyOutputCodecParameters: number;

declare const kAudioCodecPropertyProgramTargetLevelConstant: number;

declare const kAudioUnitErr_PropertyNotWritable: number;

declare const kAudioQueueErr_InvalidParameter: number;

declare const kAudioUnitProperty_ReverbRoomType: number;

declare const kAudioFilePropertyInfoDictionary: number;

declare const kAudioQueueProperty_EnableTimePitch: number;

declare const kAUGroupParameterID_Volume: number;

declare const kRandomParam_BoundB: number;

declare const kAudioUnitProperty_MaximumFramesPerSlice: number;

declare const kLowPassParam_CutoffFrequency: number;

declare const kAudioCodecProduceOutputPacketAtEOF: number;

declare const kAudioFilePropertyMagicCookieData: number;

declare const kAudioConverterErr_InvalidInputSize: number;

declare const kAudioSessionOverrideAudioRoute_Speaker: number;

declare const k3DMixerParam_Gain: number;

declare const kCAFMarkerType_EditSourceEnd: number;

declare const kAUSamplerProperty_LoadAudioFiles: number;

declare const kAudioFileStreamError_DiscontinuityCantRecover: number;

declare const kAudioUnitProperty_DependentParameters: number;

declare const kAudioConverterEncodeBitRate: number;

declare const kAudioCodecPropertySettings: number;

declare const kAudioFileStreamError_InvalidPacketOffset: number;

declare const kAudioFileFLACType: number;

declare const kAudioSessionProperty_OverrideAudioRoute: number;

declare const kAudioOutputUnitProperty_NodeComponentDescription: number;

declare const kAudioSessionOutputRoute_LineOut: interop.Pointer;

declare const kCAFMarkerType_SustainLoopStart: number;

declare const kAudioOutputUnitProperty_RemoteControlToHost: number;

declare const kAudioQueueErr_InvalidTapContext: number;

declare const kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat: number;

declare const kAudioFilePropertyRestrictsRandomAccess: number;

declare const kAudioConverterQuality_High: number;

declare const k3DMixerParam_Enable: number;

declare const kDistortionParam_SquaredTerm: number;

declare const kCAF_UUIDChunkID: number;

declare const kAudioCodecQuality_Max: number;

declare const kAudioFormatProperty_FormatList: number;

declare const kAUVoiceIOProperty_DuckNonVoiceAudio: number;

declare const k3DMixerParam_ReverbBlend: number;

declare const kAudioOutputUnitProperty_MIDICallbacks: number;

declare const kAudioSessionProperty_OtherAudioIsPlaying: number;

declare const kAudioFilePropertyBitRate: number;

declare const kAudioUnitSubType_Varispeed: number;

declare const kAudioCodecBitRateFormat: number;

declare const kAudioCodecOutputPrecedence: number;

declare const kCAFMarkerType_EditDestinationBegin: number;

declare const kAudioFilePropertyMarkerList: number;

declare const kAUNBandEQFilterType_BandPass: number;

declare const kInstrumentType_EXS24: number;

declare const kAudioConverterQuality_Medium: number;

declare const kAudioUnitType_Generator: number;

declare const kAudioCodecPropertyBitRateControlMode: number;

declare const kAudioCodecPropertyCurrentOutputSampleRate: number;

declare const kAudioQueueErr_InvalidProperty: number;

declare const kCAF_SMPTE_TimeType24: number;

declare const kAudioSessionRouteChangeReason_NewDeviceAvailable: number;

declare const kAUSamplerProperty_LoadInstrument: number;

declare const kExtAudioFileError_NonPCMClientFormat: number;

declare const kAudioFormatProperty_ChannelLayoutName: number;

declare const kAUNBandEQFilterType_2ndOrderButterworthLowPass: number;

declare const kAudioCodecQuality_High: number;

declare const kAudioFilePropertyNextIndependentPacket: number;

declare const kAudioCodecPropertyCurrentOutputFormat: number;

declare const kAudioFormatProperty_ChannelLayoutSimpleName: number;

declare const kAudioConverterQuality_Max: number;

declare const kAudioConverterErr_UnspecifiedError: number;

declare const kAudioFilePropertyFrameToPacket: number;

declare const kAUNBandEQFilterType_ResonantHighPass: number;

declare const kReverb2Param_MinDelayTime: number;

declare const kCAFMarkerType_EditDestinationEnd: number;

declare const kAudioFileAMRType: number;

declare const kAudioQueueDeviceProperty_NumberChannels: number;

declare const kAudioUnitSubType_Delay: number;

declare const kAudioQueueParam_Pitch: number;

declare const kNewTimePitchParam_Overlap: number;

declare const kAudioQueueProperty_CurrentDevice: number;

declare const kExtAudioFileProperty_FileMaxPacketSize: number;

declare const kAudioUnitGetPropertyInfoSelect: number;

declare const kAudioUnitType_Mixer: number;

declare const AUEventSampleTimeImmediate: number;

declare const kDynamicRangeControlMode_Light: number;

declare const kCAF_SMPTE_TimeType60Drop: number;

declare const kAudioConverterErr_RequiresPacketDescriptionsError: number;

declare const kAudioQueueTimePitchAlgorithm_Spectral: number;

declare const kMusicEventType_User: number;

declare const kAudioCodecAppendInputDataSelect: number;

declare const kAudioUnitScope_Note: number;

declare const kMusicDeviceProperty_SoundBankURL: number;

declare const kAudioSessionProperty_OtherMixableAudioShouldDuck: number;

declare const kAudioUnitType_MIDIProcessor: number;

declare const kAudioSession_AudioRouteKey_Outputs: interop.Pointer;

declare const kAudioUnitErr_InvalidFilePath: number;

declare const kAudioFileLoopDirection_NoLooping: number;

declare const kAudioQueueProperty_DecodeBufferSizeFrames: number;

declare const kAudioSessionOutputRoute_Headphones: interop.Pointer;

declare const kAudioQueueParam_PlayRate: number;

declare const kAudioCodecProduceOutputPacketNeedsMoreInputData: number;

declare const kAudioUnitErr_ComponentManagerNotSupported: number;

declare const kAudioCodecPropertyAvailableNumberChannels: number;

declare const kAudioUnitSubType_AU3DMixerEmbedded: number;

declare const kAudioServicesSystemSoundClientTimedOutError: number;

declare const kAUVoiceIOProperty_MuteOutput: number;

declare const kAudioUnitSubType_AUSoundIsolation: number;

declare const k3DMixerParam_PlaybackRate: number;

declare const kAudioSessionCategory_SoloAmbientSound: number;

declare const kAudioFormatProperty_FirstPlayableFormatFromList: number;

declare const kDistortionParam_RingModFreq2: number;

declare const kAudioFilePropertyPacketTableInfo: number;

declare const k3DMixerParam_PostPeakHoldLevel: number;

declare const kAudioFileOperationNotSupportedError: number;

declare const kCAFMarkerType_ProgramStart: number;

declare const kAUNBandEQProperty_NumberOfBands: number;

declare const kAudioFileAIFCType: number;

declare const kAudioUnitSubType_VoiceProcessingIO: number;

declare const kAudioConverterSampleRateConverterComplexity: number;

declare const kAudioQueueErr_InvalidQueueType: number;

declare const kExtAudioFileProperty_FileDataFormat: number;

declare const kMultiChannelMixerParam_PostPeakHoldLevel: number;

declare const kAudioCodecUnknownPropertyError: number;

declare const kAUGraphErr_CannotDoInCurrentContext: number;

declare const kMusicDeviceReleaseInstrumentSelect: number;

declare const kAudioToolboxErr_NoSequence: number;

declare const kAudioFilePropertyDataFormat: number;

declare const kAudioFileStreamProperty_FileFormat: number;

declare const kAudioSessionProperty_CurrentHardwareIOBufferDuration: number;

declare const kAudioUnitProperty_PeerURL: number;

declare const kDistortionParam_PolynomialMix: number;

declare const kAudioFormatProperty_BalanceFade: number;

declare const kCAFMarkerType_RegionSyncPoint: number;

declare const kAudioFileStreamProperty_MagicCookieData: number;

declare const kAudioFileEndOfFileError: number;

declare const kAudioUnitScope_Output: number;

declare const kAudioCodecGetPropertyInfoSelect: number;

declare const kAudioFileStreamError_UnsupportedProperty: number;

declare const kSpatialMixerParam_Azimuth: number;

declare const kAudioQueueProperty_ChannelLayout: number;

declare const kMusicDeviceProperty_BankName: number;

declare const kAudioCodecGetPropertySelect: number;

declare const kAudioUnitProperty_SpatialMixerDistanceParams: number;

declare const kProgramTargetLevel_Minus31dB: number;

declare const kAUNBandEQParam_Gain: number;

declare const kReverb2Param_Gain: number;

declare const kHipassParam_CutoffFrequency: number;

declare const kAudioSessionUnsupportedPropertyError: number;

declare const kAUGroupParameterID_AllNotesOff: number;

declare const kCAFMarkerType_RegionStart: number;

declare const kRenderQuality_High: number;

declare const kAudioConverterErr_OperationNotSupported: number;

declare const kAudioSessionInputRoute_BluetoothHFP: interop.Pointer;

declare const kAudioUnitProperty_SpatialMixerPersonalizedHRTFMode: number;

declare const kMusicDeviceProperty_InstrumentNumber: number;

declare const kDynamicsProcessorParam_ExpansionRatio: number;

declare const kAudioConverterEncodeAdjustableSampleRate: number;

declare const kAudioCodecBitRateControlMode_LongTermAverage: number;

declare const k3DMixerParam_DryWetReverbBlend: number;

declare const kAudioCodecPropertyApplicableBitRateRange: number;

declare const kAudioFormatProperty_FormatIsExternallyFramed: number;

declare const kAudioServicesBadSpecifierSizeError: number;

declare const kAudioUnitSubType_MultiChannelMixer: number;

declare const kCAF_AudioDataChunkID: number;

declare const kDynamicRangeCompressionProfile_None: number;

declare const kAudioCodecPropertyPacketSizeLimitForVBR: number;

declare const kCAFMarkerType_Generic: number;

declare const kAudioFilePropertyAlbumArtwork: number;

declare const kAudioFileUnspecifiedError: number;

declare const kAudioOutputUnitRange: number;

declare const kAudioUnitProperty_ScheduledFilePrime: number;

declare const kAudioSession_AudioRouteChangeKey_CurrentRouteDescription: interop.Pointer;

declare const kSampleDelayParam_DelayFrames: number;

declare const kConverterPrimeMethod_None: number;

declare const kAUGroupParameterID_Foot: number;

declare const kAudioUnitSubType_NBandEQ: number;

declare const kHALOutputParam_Volume: number;

declare const kAudioSession_AudioRouteKey_Type: interop.Pointer;

declare const kAudioUnitSubType_LowPassFilter: number;

declare const kAudioUnitProperty_3DMixerDistanceParams: number;

declare const kAudioSessionMode_VideoRecording: number;

declare const kAudioUnitErr_FormatNotSupported: number;

declare const kAUGroupParameterID_KeyPressure: number;

declare const kRandomParam_Curve: number;

declare const kAudioComponentErr_InstanceTimedOut: number;

declare const kAUSamplerProperty_BankAndPreset: number;

declare const kAudioSessionOutputRoute_HDMI: interop.Pointer;

declare const kAudioUnitScope_Input: number;

declare const kAudioQueueErr_PrimeTimedOut: number;

declare const kAudioCodecBadDataError: number;

declare const kCAF_iXMLChunkID: number;

declare const kAudioFormatProperty_ASBDFromMPEGPacket: number;

declare const kAudioServicesPropertyCompletePlaybackIfAppDies: number;

declare const kAUVoiceIOProperty_MutedSpeechActivityEventListener: number;

declare const kMusicDevicePrepareInstrumentSelect: number;

declare const kMatrixMixerParam_PostPeakHoldLevel: number;

declare const kAudioSessionCategory_AudioProcessing: number;

declare const kAudioQueueTimePitchAlgorithm_Varispeed: number;

declare const kAudioSession_AudioRouteChangeKey_PreviousRouteDescription: interop.Pointer;

declare const kAudioSessionOverrideAudioRoute_None: number;

declare const kAudioComponentErr_InvalidFormat: number;

declare const kAudioUnitSubType_NewTimePitch: number;

declare const kAUGraphErr_OutputNodeErr: number;

declare const kAudioComponentRegistrationsChangedNotification: interop.Pointer;

declare const kSpatialMixerParam_ObstructionAttenuation: number;

declare const kAudioUnitErr_RenderTimeout: number;

declare const k3DMixerParam_OcclusionAttenuation: number;

declare const kAudioUnitProperty_SpatializationAlgorithm: number;

declare const kAudioUnitProperty_SupportedChannelLayoutTags: number;

declare const kAudioCodecPropertyUsedInputBufferSize: number;

declare const kAudioSessionOutputRoute_BluetoothHFP: interop.Pointer;

declare const kAudioUnitProperty_ContextName: number;

declare const kAudioFilePermissionsError: number;

declare const kProgramTargetLevel_None: number;

declare const kAudioServicesUnsupportedPropertyError: number;

declare const kAudioUnitProperty_ScheduledFileBufferSizeFrames: number;

declare const kAudioFormatProperty_FormatName: number;

declare const kAudioSessionSetActiveFlag_NotifyOthersOnDeactivation: number;

declare const kAUSamplerParam_Gain: number;

declare const kExtAudioFileProperty_PacketTable: number;

declare const kAudioUnitType_Output: number;

declare const kAUGroupParameterID_Pan: number;

declare const kAudioFormatProperty_OutputFormatList: number;

declare const kAudioSessionOutputRoute_AirPlay: interop.Pointer;

declare const kAudioCodecProduceOutputPacketSuccessConcealed: number;

declare const kAudioUnitSubType_ParametricEQ: number;

declare const kAUGraphErr_InvalidConnection: number;

declare const kAUSoundIsolationSoundType_Voice: number;

declare const kAudioUnitProperty_DeferredRendererPullSize: number;

declare const kAudioServicesPropertyIsUISound: number;

declare const kAudioSessionMode_Measurement: number;

declare const kParametricEQParam_CenterFreq: number;

declare const kMusicEventType_MIDIChannelMessage: number;

declare const kExtAudioFileProperty_FileChannelLayout: number;

declare const kAUSampler_DefaultPercussionBankMSB: number;

declare const kAudioSessionRouteChangeReason_RouteConfigurationChange: number;

declare const kMusicEventType_Parameter: number;

declare const kAudioCodecProduceOutputBufferListSelect: number;

declare const kAudioOutputUnitProperty_ChannelMap: number;

declare const kAudioConverterOutputChannelLayout: number;

declare const kAudioOutputUnitProperty_SetInputCallback: number;

declare const kExtAudioFileProperty_IOBufferSizeBytes: number;

declare const kAudioCodecBitRateControlMode_Variable: number;

declare const kAudioCodecPropertyRequiresPacketDescription: number;

declare const kAudioConverterErr_PropertyNotSupported: number;

declare const kAudioComponentInstanceInvalidationNotification: interop.Pointer;

declare const kAudioQueueErr_InvalidDevice: number;

declare const kAudioFileLoopDirection_ForwardAndBackward: number;

declare const kAudioQueueProperty_MagicCookie: number;

declare const kAudioQueueErr_Permissions: number;

declare const kAudioUnitProperty_ScheduledFileIDs: number;

declare const kReverbParam_FilterType: number;

declare const kAudioUnitSampleRateConverterComplexity_Normal: number;

declare const kNewTimePitchParam_Smoothness: number;

declare const k3DMixerParam_PostAveragePower: number;

declare const kAudioCodecPropertyFormatCFString: number;

declare const kAUSoundIsolationSoundType_HighQualityVoice: number;

declare const kAudioOutputUnitProperty_StartTime: number;

declare const kLowPassParam_Resonance: number;

declare const kCAFMarkerType_SavedPlayPosition: number;

declare const kAudioUnitErr_Unauthorized: number;

declare const kAudioCodecPrimeMethod_Normal: number;

declare const kRenderQuality_Max: number;

declare const kMusicEventType_Meta: number;

declare const kAudioUnitProperty_TailTime: number;

declare const kAudioOutputUnitProperty_IsRunning: number;

declare const kSpatialMixerParam_ReverbBlend: number;

declare const kAudioUnitErr_InstrumentTypeNotFound: number;

declare const kAUGroupParameterID_ModWheel: number;

declare const kAudioUnitSubType_SpatialMixer: number;

declare const kAudioSessionCategory_PlayAndRecord: number;

declare const kAudioFormatProperty_NumberOfChannelsForLayout: number;

declare const kDynamicRangeCompressionProfile_LimitedPlaybackRange: number;

declare const kAudioUnitProperty_SpatialMixerSourceMode: number;

declare const kTimePitchParam_Rate: number;

declare const kProgramTargetLevel_Minus23dB: number;

declare const kAudioUnitErr_InvalidFile: number;

declare const kSpatialMixerParam_HeadYaw: number;

declare const kReverb2Param_DecayTimeAt0Hz: number;

declare const kAudioFileStreamProperty_PacketToByte: number;

declare const kAudioUnitProperty_ParameterInfo: number;

declare const kAudioUnitErr_InvalidParameter: number;

declare const kAudioFileUnsupportedPropertyError: number;

declare const kCAF_SMPTE_TimeType30Drop: number;

declare const kAudioSessionBeginInterruption: number;

declare const kCAFMarkerType_EditSourceBegin: number;

declare const kAudioUnitScope_Global: number;

declare const kAudioServicesNoError: number;

declare const kAudioSessionProperty_PreferredHardwareSampleRate: number;

declare const kAudioQueueHardwareCodecPolicy_UseSoftwareOnly: number;

declare const kAudioFileNextType: number;

declare const kCAFMarkerType_TrackStart: number;

declare const kAudioFilePropertyPacketToByte: number;

declare const kDynamicsProcessorParam_HeadRoom: number;

declare const kAudioFilePropertyPacketToDependencyInfo: number;

declare const kAUSamplerParam_FineTuning: number;

declare const kNewTimePitchParam_EnableSpectralCoherence: number;

declare const kAudioUnitSubType_Reverb2: number;

declare const kAudioCodecPropertyEmploysDependentPackets: number;

declare const kAudioFileStreamError_UnspecifiedError: number;

declare const kDynamicRangeControlMode_Heavy: number;

declare const kAUGroupParameterID_Expression_LSB: number;

declare const kAudioQueueErr_BufferEnqueuedTwice: number;

declare const kCAF_SMPTE_TimeType5994Drop: number;

declare const kAudioFileLoopDirection_Backward: number;

declare const kAudioCodecBitRateFormat_VBR: number;

declare const kMusicDeviceProperty_InstrumentName: number;

declare const kAudioSessionOutputRoute_BluetoothA2DP: interop.Pointer;

declare const kSpatialMixerParam_MaxGain: number;

declare const kAudioQueueErr_DisposalPending: number;

declare const kAudioFilePropertyPacketRangeByteCountUpperBound: number;

declare const kDynamicRangeCompressionProfile_NoisyEnvironment: number;

declare const kAUNBandEQFilterType_ResonantLowShelf: number;

declare const kAudioUnitProperty_RemoteControlEventListener: number;

declare const kAudioFileMarkerType_Generic: number;

declare const kAudioConverterCodecQuality: number;

declare const kAudioFormatUnknownFormatError: number;

declare const kAudioCodecBitRateControlMode_Constant: number;

declare const kAudioUnitProperty_UsesInternalReverb: number;

declare const kReverbParam_FilterGain: number;

declare const kRandomParam_BoundA: number;

declare const kAudioSession_OutputDestinationKey_Description: interop.Pointer;

declare const kAudioUnitErr_CannotDoInCurrentContext: number;

declare const kAudioToolboxErr_StartOfTrack: number;

declare const kAudioUnitProperty_HostMIDIProtocol: number;

declare const kAudioCodecPropertyAvailableBitRates: number;

declare const kAudioCodecPropertySoundQualityForVBR: number;

declare const kNewTimePitchParam_Rate: number;

declare const kAudioFormatProperty_ChannelLayoutForTag: number;

declare const kDistortionParam_RingModMix: number;

declare const kAudioUnitErr_PropertyNotInUse: number;

declare const kAUGroupParameterID_ResetAllControllers: number;

declare const kMusicDeviceStopNoteSelect: number;

declare const kAudioSessionProperty_OverrideCategoryMixWithOthers: number;

declare const kAudioUnitErr_IllegalInstrument: number;

declare const kAudioOutputUnitProperty_CurrentDevice: number;

declare const kAUSamplerParam_Pan: number;

declare const kAUSoundIsolationParam_SoundToIsolate: number;

declare const kAudioUnitProperty_NickName: number;

declare const k3DMixerParam_MaxGain: number;

declare const kAudioConverterPropertySettings: number;

declare const kSpatialMixerParam_Elevation: number;

declare const kDistortionParam_Decimation: number;

declare const kAudioQueueErr_InvalidBuffer: number;

declare const kAUGraphErr_InvalidAudioUnit: number;

declare const kCAFMarkerType_ReleaseLoopStart: number;

declare const kAudioQueueErr_InvalidTapType: number;

declare const kAudioCodecPropertyPrimeMethod: number;

declare const kAudioFormatProperty_ChannelName: number;

declare const kAUNBandEQParam_FilterType: number;

declare const kDelayParam_DelayTime: number;

declare const kAudioFileGlobalInfo_AllMIMETypes: number;

declare const kAudioUnitProperty_MakeConnection: number;

declare const kAudioToolboxErr_EndOfTrack: number;

declare const kCAF_SMPTE_TimeType50: number;

declare const kCAF_MarkerChunkID: number;

declare const kAudioQueueProperty_CurrentLevelMeter: number;

declare const kAudioUnitRemovePropertyListenerWithUserDataSelect: number;

declare const kAudioUnitProperty_3DMixerRenderingFlags: number;

declare const kAudioFileStreamProperty_AudioDataPacketCount: number;

declare const kDistortionParam_DelayMix: number;

declare const kDynamicsProcessorParam_OverallGain: number;

declare const kAudioUnitProperty_SupportedNumChannels: number;

declare const kAudioSessionProperty_InputGainScalar: number;

declare const kAudioCodecPropertyPacketFrameSize: number;

declare const kAudioUnitUninitializeSelect: number;

declare const kAudioUnitSubType_DeferredRenderer: number;

declare const kAudioUnitErr_InvalidParameterValue: number;

declare const kAudioFileStreamProperty_PacketToRollDistance: number;

declare const kAudioFileStreamError_InvalidFile: number;

declare const kAudioCodecQuality_Min: number;

declare const kAudioConverterPropertyMaximumInputBufferSize: number;

declare const kAUGroupParameterID_PitchBend: number;

declare const kAudioFileDoesNotAllow64BitDataSizeError: number;

declare const kCAF_SMPTE_TimeType2997Drop: number;

declare const kAudioConverterQuality_Low: number;

declare const kSpatialMixerParam_PlaybackRate: number;

declare const kAULowShelfParam_Gain: number;

declare const kRenderQuality_Min: number;

declare const kAudioFileGlobalInfo_AllExtensions: number;

declare const kMultiChannelMixerParam_PreAveragePower: number;

declare const kAudioCodecPropertyFormatInfo: number;

declare const kAudioToolboxError_NoTrackDestination: number;

declare const kAudioUnitScope_Layer: number;

declare const kAudioUnitSetParameterSelect: number;

declare const MusicSequenceFileTypeID: {
  File_Any: 0,
  File_MIDI: 1835623529,
  File_iMelody: 1768777068,
};

declare const MusicSequenceType: {
  Beats: 1650811252,
  Seconds: 1936024435,
  Samples: 1935764848,
};

declare const MusicSequenceLoadFlags: {
  Preserve: 0,
  ChannelsTo: 1,
};

declare const CAFRegionFlags: {
  LoopEnable: 1,
  PlayForward: 2,
  PlayBackward: 4,
};

declare const AudioUnitEventType: {
  ParameterValueChange: 0,
  BeginParameterChangeGesture: 1,
  EndParameterChangeGesture: 2,
  PropertyChange: 3,
};

declare const AudioQueueProcessingTapFlags: {
  PreEffects: 1,
  PostEffects: 2,
  Siphon: 4,
  StartOfStream: 256,
  EndOfStream: 512,
};

declare const AudioPanningMode: {
  SoundField: 3,
  VectorBasedPanning: 4,
};

declare const AudioFileStreamSeekFlags: {
  kAudioFileStreamSeekFlag_OffsetIsEstimated: 1,
};

declare const AudioFileStreamParseFlags: {
  kAudioFileStreamParseFlag_Discontinuity: 1,
};

declare const AudioFileStreamPropertyFlags: {
  PropertyIsCached: 1,
  CacheProperty: 2,
};

declare const AudioFileRegionFlags: {
  LoopEnable: 1,
  PlayForward: 2,
  PlayBackward: 4,
};

declare const AudioFilePermissions: {
  Read: 1,
  Write: 2,
  ReadWrite: 3,
};

declare const AudioFileFlags: {
  EraseFile: 1,
  DontPageAlignAudioData: 2,
};

declare const AUAudioUnitBusType: {
  Input: 1,
  Output: 2,
};

declare const AUParameterAutomationEventType: {
  Value: 0,
  Touch: 1,
  Release: 2,
};

declare const AUScheduledAudioSliceFlags: {
  Complete: 1,
  BeganToRender: 2,
  BeganToRenderLate: 4,
  Loop: 8,
  Interrupt: 16,
  InterruptAtLoop: 32,
};

declare const AU3DMixerAttenuationCurve: {
  Power: 0,
  Exponential: 1,
  Inverse: 2,
  Linear: 3,
};

declare const AUSpatialMixerPointSourceInHeadMode: {
  Mono: 0,
  Bypass: 1,
};

declare const AUSpatialMixerAttenuationCurve: {
  Power: 0,
  Exponential: 1,
  Inverse: 2,
  Linear: 3,
};

declare const AUReverbRoomType: {
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

declare const AUVoiceIOOtherAudioDuckingLevel: {
  Default: 0,
  Min: 10,
  Mid: 20,
  Max: 30,
};

declare const AUVoiceIOSpeechActivityEvent: {
  Started: 0,
  Ended: 1,
};

declare const AudioUnitParameterOptions: {
  CFNameRelease: 16,
  OmitFromPresets: 8192,
  PlotHistory: 16384,
  MeterReadOnly: 32768,
  DisplayMask: 4653056,
  DisplaySquareRoot: 65536,
  DisplaySquared: 131072,
  DisplayCubed: 196608,
  DisplayCubeRoot: 262144,
  DisplayExponential: 327680,
  HasClump: 1048576,
  ValuesHaveStrings: 2097152,
  DisplayLogarithmic: 4194304,
  IsHighResolution: 8388608,
  NonRealTime: 16777216,
  CanRamp: 33554432,
  ExpertMode: 67108864,
  HasCFNameString: 134217728,
  IsGlobalMeta: 268435456,
  IsElementMeta: 536870912,
  IsReadable: 1073741824,
  IsWritable: -2147483648,
};

declare const AURenderEventType: {
  Parameter: 1,
  ParameterRamp: 2,
  MIDI: 8,
  MIDISysEx: 9,
  MIDIEventList: 10,
};

declare const AudioUnitRenderActionFlags: {
  UnitRenderAction_PreRender: 4,
  UnitRenderAction_PostRender: 8,
  UnitRenderAction_OutputIsSilence: 16,
  OfflineUnitRenderAction_Preflight: 32,
  OfflineUnitRenderAction_Render: 64,
  OfflineUnitRenderAction_Complete: 128,
  UnitRenderAction_PostRenderError: 256,
  UnitRenderAction_DoNotCheckRenderArgs: 512,
};

declare const AudioComponentValidationResult: {
  Unknown: 0,
  Passed: 1,
  Failed: 2,
  TimedOut: 3,
  UnauthorizedError_Open: 4,
  UnauthorizedError_Init: 5,
};

declare const AudioComponentFlags: {
  Unsearchable: 1,
  SandboxSafe: 2,
  IsV3AudioUnit: 4,
  RequiresAsyncInstantiation: 8,
  CanLoadInProcess: 16,
};

declare const CAFFormatFlags: {
  Float: 1,
  LittleEndian: 2,
};

declare const AUParameterEventType: {
  Immediate: 1,
  Ramped: 2,
};

declare const AudioBalanceFadeType: {
  MaxUnityGain: 0,
  EqualPower: 1,
};

declare const AudioBytePacketTranslationFlags: {
  kBytePacketTranslationFlag_IsEstimate: 1,
};

declare const AUSpatializationAlgorithm: {
  EqualPowerPanning: 0,
  SphericalHead: 1,
  HRTF: 2,
  SoundField: 3,
  VectorBasedPanning: 4,
  StereoPassThrough: 5,
  HRTFHQ: 6,
  UseOutputType: 7,
};

declare const AUHostTransportStateFlags: {
  Changed: 1,
  Moving: 2,
  Recording: 4,
  Cycling: 8,
};

declare const AudioUnitRemoteControlEvent: {
  TogglePlayPause: 1,
  ToggleRecord: 2,
  Rewind: 3,
};

declare const AudioComponentInstantiationOptions: {
  LoadOutOfProcess: 1,
  LoadedRemotely: -2147483648,
};

declare const AUSpatialMixerOutputType: {
  Headphones: 1,
  BuiltInSpeakers: 2,
  ExternalSpeakers: 3,
};

declare const AU3DMixerRenderingFlags: {
  InterAuralDelay: 1,
  DopplerShift: 2,
  DistanceAttenuation: 4,
  DistanceFilter: 8,
  DistanceDiffusion: 16,
  LinearDistanceAttenuation: 32,
  ConstantReverbBlend: 64,
};

declare const AUSpatialMixerRenderingFlags: {
  InterAuralDelay: 1,
  DistanceAttenuation: 4,
};

declare const AudioConverterOptions: {
  kAudioConverterOption_Unbuffered: 65536,
};

declare const AudioUnitParameterUnit: {
  Generic: 0,
  Indexed: 1,
  Boolean: 2,
  Percent: 3,
  Seconds: 4,
  SampleFrames: 5,
  Phase: 6,
  Rate: 7,
  Hertz: 8,
  Cents: 9,
  RelativeSemiTones: 10,
  MIDINoteNumber: 11,
  MIDIController: 12,
  Decibels: 13,
  LinearGain: 14,
  Degrees: 15,
  EqualPowerCrossfade: 16,
  MixerFaderCurve1: 17,
  Pan: 18,
  Meters: 19,
  AbsoluteCents: 20,
  Octaves: 21,
  BPM: 22,
  Beats: 23,
  Milliseconds: 24,
  Ratio: 25,
  CustomUnit: 26,
  MIDI2Controller: 27,
};

declare const MusicSequenceFileFlags: {
  Default: 0,
  EraseFile: 1,
};

declare const AudioSettingsFlags: {
  Expert: 1,
  Invisible: 2,
  Meta: 4,
  UserInterface: 8,
};

declare const AUSpatialMixerPersonalizedHRTFMode: {
  Off: 0,
  On: 1,
  Auto: 2,
};

declare const AUSpatialMixerSourceMode: {
  SpatializeIfMono: 0,
  Bypass: 1,
  PointSource: 2,
  AmbienceBed: 3,
};

declare class OpaqueMusicPlayer {
  constructor(init?: OpaqueMusicPlayer);
}

declare class AUPresetEvent {
  constructor(init?: AUPresetEvent);
  scope: number;
  element: number;
  preset: interop.Pointer;
}

declare class ExtendedTempoEvent {
  constructor(init?: ExtendedTempoEvent);
  bpm: number;
}

declare class ExtendedNoteOnEvent {
  constructor(init?: ExtendedNoteOnEvent);
  instrumentID: number;
  groupID: number;
  duration: number;
  extendedParams: MusicDeviceNoteParams;
}

declare class MIDIRawData {
  constructor(init?: MIDIRawData);
  length: number;
  data: unknown /* const array */;
}

declare class MIDIChannelMessage {
  constructor(init?: MIDIChannelMessage);
  status: number;
  data1: number;
  data2: number;
  reserved: number;
}

declare class OpaqueExtAudioFile {
  constructor(init?: OpaqueExtAudioFile);
}

declare class CAFUMIDChunk {
  constructor(init?: CAFUMIDChunk);
  mBytes: unknown /* const array */;
}

declare class CAFOverviewSample {
  constructor(init?: CAFOverviewSample);
  mMinValue: number;
  mMaxValue: number;
}

declare class CAFPositionPeak {
  constructor(init?: CAFPositionPeak);
  mValue: number;
  mFrameNumber: number;
}

declare class CAFStrings {
  constructor(init?: CAFStrings);
  mNumEntries: number;
  mStringsIDs: unknown /* const array */;
}

declare class CAFRegion {
  constructor(init?: CAFRegion);
  mRegionID: number;
  mFlags: interop.Enum<typeof CAFRegionFlags>;
  mNumberMarkers: number;
  mMarkers: unknown /* const array */;
}

declare class CAFMarker {
  constructor(init?: CAFMarker);
  mType: number;
  mFramePosition: number;
  mMarkerID: number;
  mSMPTETime: CAF_SMPTE_Time;
  mChannel: number;
}

declare class CAF_SMPTE_Time {
  constructor(init?: CAF_SMPTE_Time);
  mHours: number;
  mMinutes: number;
  mSeconds: number;
  mFrames: number;
  mSubFrameSampleOffset: number;
}

declare class CAFPacketTableHeader {
  constructor(init?: CAFPacketTableHeader);
  mNumberPackets: number;
  mNumberValidFrames: number;
  mPrimingFrames: number;
  mRemainderFrames: number;
  mPacketDescriptions: unknown /* const array */;
}

declare class CAFAudioFormatListItem {
  constructor(init?: CAFAudioFormatListItem);
  mFormat: CAFAudioDescription;
  mChannelLayoutTag: number;
}

declare class CAF_UUID_ChunkHeader {
  constructor(init?: CAF_UUID_ChunkHeader);
  mHeader: CAFChunkHeader;
  mUUID: unknown /* const array */;
}

declare class CAFChunkHeader {
  constructor(init?: CAFChunkHeader);
  mChunkType: number;
  mChunkSize: number;
}

declare class CAFFileHeader {
  constructor(init?: CAFFileHeader);
  mFileType: number;
  mFileVersion: number;
  mFileFlags: number;
}

declare class AudioUnitEvent {
  constructor(init?: AudioUnitEvent);
  mEventType: interop.Enum<typeof AudioUnitEventType>;
  mArgument: unnamed_14094069681006705249;
}

declare class AUListenerBase {
  constructor(init?: AUListenerBase);
}

declare class AudioQueueChannelAssignment {
  constructor(init?: AudioQueueChannelAssignment);
  mDeviceUID: interop.Pointer;
  mChannelNumber: number;
}

declare class AudioQueueLevelMeterState {
  constructor(init?: AudioQueueLevelMeterState);
  mAveragePower: number;
  mPeakPower: number;
}

declare class AudioQueueBuffer {
  constructor(init?: AudioQueueBuffer);
  mAudioDataBytesCapacity: number;
  mAudioData: interop.Pointer;
  mAudioDataByteSize: number;
  mUserData: interop.Pointer;
  mPacketDescriptionCapacity: number;
  mPacketDescriptions: interop.Pointer;
  mPacketDescriptionCount: number;
}

declare class OpaqueAudioQueue {
  constructor(init?: OpaqueAudioQueue);
}

declare class AudioBalanceFade {
  constructor(init?: AudioBalanceFade);
  mLeftRightBalance: number;
  mBackFrontFade: number;
  mType: interop.Enum<typeof AudioBalanceFadeType>;
  mChannelLayout: interop.Pointer;
}

declare class AudioPanningInfo {
  constructor(init?: AudioPanningInfo);
  mPanningMode: interop.Enum<typeof AudioPanningMode>;
  mCoordinateFlags: number;
  mCoordinates: unknown /* const array */;
  mGainScale: number;
  mOutputChannelMap: interop.Pointer;
}

declare class AudioFileTypeAndFormatID {
  constructor(init?: AudioFileTypeAndFormatID);
  mFileType: number;
  mFormatID: number;
}

declare class AudioPacketRangeByteCountTranslation {
  constructor(init?: AudioPacketRangeByteCountTranslation);
  mPacket: number;
  mPacketCount: number;
  mByteCountUpperBound: number;
}

declare class AudioFilePacketTableInfo {
  constructor(init?: AudioFilePacketTableInfo);
  mNumberValidFrames: number;
  mPrimingFrames: number;
  mRemainderFrames: number;
}

declare class AudioBytePacketTranslation {
  constructor(init?: AudioBytePacketTranslation);
  mByte: number;
  mPacket: number;
  mByteOffsetInPacket: number;
  mFlags: interop.Enum<typeof AudioBytePacketTranslationFlags>;
}

declare class AudioFramePacketTranslation {
  constructor(init?: AudioFramePacketTranslation);
  mFrame: number;
  mPacket: number;
  mFrameOffsetInPacket: number;
}

declare class AudioFileRegion {
  constructor(init?: AudioFileRegion);
  mRegionID: number;
  mName: interop.Pointer;
  mFlags: interop.Enum<typeof AudioFileRegionFlags>;
  mNumberMarkers: number;
  mMarkers: unknown /* const array */;
}

declare class AudioFileMarkerList {
  constructor(init?: AudioFileMarkerList);
  mSMPTE_TimeType: number;
  mNumberMarkers: number;
  mMarkers: unknown /* const array */;
}

declare class AudioConverterPrimeInfo {
  constructor(init?: AudioConverterPrimeInfo);
  leadingFrames: number;
  trailingFrames: number;
}

declare class AUNodeRenderCallback {
  constructor(init?: AUNodeRenderCallback);
  destNode: number;
  destInputNumber: number;
  cback: AURenderCallbackStruct;
}

declare class AudioUnitNodeConnection {
  constructor(init?: AudioUnitNodeConnection);
  sourceNode: number;
  sourceOutputNumber: number;
  destNode: number;
  destInputNumber: number;
}

declare class OpaqueAUGraph {
  constructor(init?: OpaqueAUGraph);
}

declare class MusicDeviceNoteParams {
  constructor(init?: MusicDeviceNoteParams);
  argCount: number;
  mPitch: number;
  mVelocity: number;
  mControls: unknown /* const array */;
}

declare class OpaqueAudioConverter {
  constructor(init?: OpaqueAudioConverter);
}

declare class AUMIDIEventList {
  constructor(init?: AUMIDIEventList);
  next: interop.Pointer;
  eventSampleTime: number;
  eventType: interop.Enum<typeof AURenderEventType>;
  reserved: number;
  cable: number;
  eventList: MIDIEventList;
}

declare class AURenderEventHeader {
  constructor(init?: AURenderEventHeader);
  next: interop.Pointer;
  eventSampleTime: number;
  eventType: interop.Enum<typeof AURenderEventType>;
  reserved: number;
}

declare class CAFPeakChunk {
  constructor(init?: CAFPeakChunk);
  mEditCount: number;
  mPeaks: unknown /* const array */;
}

declare class AUParameterAutomationEvent {
  constructor(init?: AUParameterAutomationEvent);
  hostTime: number;
  address: number;
  value: number;
  eventType: interop.Enum<typeof AUParameterAutomationEventType>;
  reserved: number;
}

declare class AUSamplerBankPresetData {
  constructor(init?: AUSamplerBankPresetData);
  bankURL: interop.Pointer;
  bankMSB: number;
  bankLSB: number;
  presetID: number;
  reserved: number;
}

declare class AUSamplerInstrumentData {
  constructor(init?: AUSamplerInstrumentData);
  fileURL: interop.Pointer;
  instrumentType: number;
  bankMSB: number;
  bankLSB: number;
  presetID: number;
}

declare class ScheduledAudioSlice {
  constructor(init?: ScheduledAudioSlice);
  mTimeStamp: AudioTimeStamp;
  mCompletionProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void | null;
  mCompletionProcUserData: interop.Pointer;
  mFlags: interop.Enum<typeof AUScheduledAudioSliceFlags>;
  mReserved: number;
  mReserved2: interop.Pointer;
  mNumberFrames: number;
  mBufferList: interop.Pointer;
}

declare class MixerDistanceParams {
  constructor(init?: MixerDistanceParams);
  mReferenceDistance: number;
  mMaxDistance: number;
  mMaxAttenuation: number;
}

declare class AudioUnitMeterClipping {
  constructor(init?: AudioUnitMeterClipping);
  peakValueSinceLastCall: number;
  sawInfinity: number;
  sawNotANumber: number;
}

declare class AudioOutputUnitMIDICallbacks {
  constructor(init?: AudioOutputUnitMIDICallbacks);
  userData: interop.Pointer;
  MIDIEventProc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: number, p5: number) => void | null;
  MIDISysExProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number) => void | null;
}

declare class AudioUnitParameterValueFromString {
  constructor(init?: AudioUnitParameterValueFromString);
  inParamID: number;
  inString: interop.Pointer;
  outValue: number;
}

declare class AudioUnitParameterStringFromValue {
  constructor(init?: AudioUnitParameterStringFromValue);
  inParamID: number;
  inValue: interop.Pointer;
  outString: interop.Pointer;
}

declare class AudioUnitParameterNameInfo {
  constructor(init?: AudioUnitParameterNameInfo);
  inID: number;
  inDesiredLength: number;
  outName: interop.Pointer;
}

declare class MIDIEventList {
  constructor(init?: MIDIEventList);
  protocol: interop.Enum<typeof MIDIProtocolID>;
  numPackets: number;
  packet: unknown /* const array */;
}

declare class AudioUnitParameterHistoryInfo {
  constructor(init?: AudioUnitParameterHistoryInfo);
  updatesPerSecond: number;
  historyDurationInSeconds: number;
}

declare class AUInputSamplesInOutputCallbackStruct {
  constructor(init?: AUInputSamplesInOutputCallbackStruct);
  inputToOutputCallback: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number) => void | null;
  userData: interop.Pointer;
}

declare class AUMIDIOutputCallbackStruct {
  constructor(init?: AUMIDIOutputCallbackStruct);
  midiOutputCallback: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: interop.PointerConvertible) => number | null;
  userData: interop.Pointer;
}

declare class AURenderCallbackStruct {
  constructor(init?: AURenderCallbackStruct);
  inputProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: number, p6: interop.PointerConvertible) => number | null;
  inputProcRefCon: interop.Pointer;
}

declare class AudioUnitConnection {
  constructor(init?: AudioUnitConnection);
  sourceAudioUnit: interop.Pointer;
  sourceOutputNumber: number;
  destInputNumber: number;
}

declare class AUPreset {
  constructor(init?: AUPreset);
  presetNumber: number;
  presetName: interop.Pointer;
}

declare class AudioIndependentPacketTranslation {
  constructor(init?: AudioIndependentPacketTranslation);
  mPacket: number;
  mIndependentlyDecodablePacket: number;
}

declare class AudioUnitParameter {
  constructor(init?: AudioUnitParameter);
  mAudioUnit: interop.Pointer;
  mParameterID: number;
  mScope: number;
  mElement: number;
}

declare class unnamed_2146336722080098363 {
  constructor(init?: unnamed_2146336722080098363);
  startBufferOffset: number;
  durationInFrames: number;
  startValue: number;
  endValue: number;
}

declare class OpaqueAudioComponentInstance {
  constructor(init?: OpaqueAudioComponentInstance);
}

declare class AudioComponentDescription {
  constructor(init?: AudioComponentDescription);
  componentType: number;
  componentSubType: number;
  componentManufacturer: number;
  componentFlags: number;
  componentFlagsMask: number;
}

declare class CAFMarkerChunk {
  constructor(init?: CAFMarkerChunk);
  mSMPTE_TimeType: number;
  mNumberMarkers: number;
  mMarkers: unknown /* const array */;
}

declare class OpaqueMusicSequence {
  constructor(init?: OpaqueMusicSequence);
}

declare class AudioUnitProperty {
  constructor(init?: AudioUnitProperty);
  mAudioUnit: interop.Pointer;
  mPropertyID: number;
  mScope: number;
  mElement: number;
}

declare class OpaqueAudioComponent {
  constructor(init?: OpaqueAudioComponent);
}

declare class AudioCodecPrimeInfo {
  constructor(init?: AudioCodecPrimeInfo);
  leadingFrames: number;
  trailingFrames: number;
}

declare class CABarBeatTime {
  constructor(init?: CABarBeatTime);
  bar: number;
  beat: number;
  subbeat: number;
  subbeatDivisor: number;
  reserved: number;
}

declare class AudioFile_SMPTE_Time {
  constructor(init?: AudioFile_SMPTE_Time);
  mHours: number;
  mMinutes: number;
  mSeconds: number;
  mFrames: number;
  mSubFrameSampleOffset: number;
}

declare class AUMIDIEvent {
  constructor(init?: AUMIDIEvent);
  next: interop.Pointer;
  eventSampleTime: number;
  eventType: interop.Enum<typeof AURenderEventType>;
  reserved: number;
  length: number;
  cable: number;
  data: unknown /* const array */;
}

declare class AUParameterEvent {
  constructor(init?: AUParameterEvent);
  next: interop.Pointer;
  eventSampleTime: number;
  eventType: interop.Enum<typeof AURenderEventType>;
  reserved: unknown /* const array */;
  rampDurationSampleFrames: number;
  parameterAddress: number;
  value: number;
}

declare class MIDIMetaEvent {
  constructor(init?: MIDIMetaEvent);
  metaEventType: number;
  unused1: number;
  unused2: number;
  unused3: number;
  dataLength: number;
  data: unknown /* const array */;
}

declare class AudioFormatInfo {
  constructor(init?: AudioFormatInfo);
  mASBD: AudioStreamBasicDescription;
  mMagicCookie: interop.Pointer;
  mMagicCookieSize: number;
}

declare class AudioUnitExternalBuffer {
  constructor(init?: AudioUnitExternalBuffer);
  buffer: interop.Pointer;
  size: number;
}

declare class OpaqueAudioQueueProcessingTap {
  constructor(init?: OpaqueAudioQueueProcessingTap);
}

declare class MusicTrackLoopInfo {
  constructor(init?: MusicTrackLoopInfo);
  loopDuration: number;
  numberOfLoops: number;
}

declare class OpaqueMusicEventIterator {
  constructor(init?: OpaqueMusicEventIterator);
}

declare class MusicEventUserData {
  constructor(init?: MusicEventUserData);
  length: number;
  data: unknown /* const array */;
}

declare class CAFInstrumentChunk {
  constructor(init?: CAFInstrumentChunk);
  mBaseNote: number;
  mMIDILowNote: number;
  mMIDIHighNote: number;
  mMIDILowVelocity: number;
  mMIDIHighVelocity: number;
  mdBGain: number;
  mStartRegionID: number;
  mSustainRegionID: number;
  mReleaseRegionID: number;
  mInstrumentID: number;
}

declare class NoteParamsControlValue {
  constructor(init?: NoteParamsControlValue);
  mID: number;
  mValue: number;
}

declare class AudioFileMarker {
  constructor(init?: AudioFileMarker);
  mFramePosition: number;
  mName: interop.Pointer;
  mMarkerID: number;
  mSMPTETime: AudioFile_SMPTE_Time;
  mType: number;
  mReserved: number;
  mChannel: number;
}

declare class unnamed_8306956958047240581 {
  constructor(init?: unnamed_8306956958047240581);
  bufferOffset: number;
  value: number;
}

declare class AudioCodecMagicCookieInfo {
  constructor(init?: AudioCodecMagicCookieInfo);
  mMagicCookieSize: number;
  mMagicCookie: interop.Pointer;
}

declare class MIDIPacketList {
  constructor(init?: MIDIPacketList);
  numPackets: number;
  packet: unknown /* const array */;
}

declare class AudioPacketDependencyInfoTranslation {
  constructor(init?: AudioPacketDependencyInfoTranslation);
  mPacket: number;
  mIsIndependentlyDecodable: number;
  mNumberPrerollPackets: number;
}

declare class ScheduledAudioFileRegion {
  constructor(init?: ScheduledAudioFileRegion);
  mTimeStamp: AudioTimeStamp;
  mCompletionProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number) => void | null;
  mCompletionProcUserData: interop.Pointer;
  mAudioFile: interop.Pointer;
  mLoopCount: number;
  mStartFrame: number;
  mFramesToPlay: number;
}

declare class AudioUnitParameterInfo {
  constructor(init?: AudioUnitParameterInfo);
  name: unknown /* const array */;
  unitName: interop.Pointer;
  clumpID: number;
  cfNameString: interop.Pointer;
  unit: interop.Enum<typeof AudioUnitParameterUnit>;
  minValue: number;
  maxValue: number;
  defaultValue: number;
  flags: interop.Enum<typeof AudioUnitParameterOptions>;
}

declare class OpaqueAudioFileStreamID {
  constructor(init?: OpaqueAudioFileStreamID);
}

declare class AUNodeInteraction {
  constructor(init?: AUNodeInteraction);
  nodeInteractionType: number;
  nodeInteraction: unnamed_1374710415338551546;
}

declare class ExtendedAudioFormatInfo {
  constructor(init?: ExtendedAudioFormatInfo);
  mASBD: AudioStreamBasicDescription;
  mMagicCookie: interop.Pointer;
  mMagicCookieSize: number;
  mClassDescription: AudioClassDescription;
}

declare class AudioUnitParameterEvent {
  constructor(init?: AudioUnitParameterEvent);
  scope: number;
  element: number;
  parameter: number;
  eventType: interop.Enum<typeof AUParameterEventType>;
  eventValues: unnamed_13579135698381977171;
}

declare class AudioFileRegionList {
  constructor(init?: AudioFileRegionList);
  mSMPTE_TimeType: number;
  mNumberRegions: number;
  mRegions: unknown /* const array */;
}

declare class CAFInfoStrings {
  constructor(init?: CAFInfoStrings);
  mNumEntries: number;
}

declare class CAFDataChunk {
  constructor(init?: CAFDataChunk);
  mEditCount: number;
  mData: unknown /* const array */;
}

declare class MusicDeviceStdNoteParams {
  constructor(init?: MusicDeviceStdNoteParams);
  argCount: number;
  mPitch: number;
  mVelocity: number;
}

declare class ParameterEvent {
  constructor(init?: ParameterEvent);
  parameterID: number;
  scope: number;
  element: number;
  value: number;
}

declare class HostCallbackInfo {
  constructor(init?: HostCallbackInfo);
  hostUserData: interop.Pointer;
  beatAndTempoProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible) => number | null;
  musicalTimeLocationProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => number | null;
  transportStateProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: interop.PointerConvertible, p6: interop.PointerConvertible, p7: interop.PointerConvertible) => number | null;
  transportStateProc2: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: interop.PointerConvertible, p6: interop.PointerConvertible, p7: interop.PointerConvertible, p8: interop.PointerConvertible) => number | null;
}

declare class MIDINoteMessage {
  constructor(init?: MIDINoteMessage);
  channel: number;
  note: number;
  velocity: number;
  releaseVelocity: number;
  duration: number;
}

declare class AudioOutputUnitStartAtTimeParams {
  constructor(init?: AudioOutputUnitStartAtTimeParams);
  mTimestamp: AudioTimeStamp;
  mFlags: number;
}

declare class AudioPacketRollDistanceTranslation {
  constructor(init?: AudioPacketRollDistanceTranslation);
  mPacket: number;
  mRollDistance: number;
}

declare class CAFRegionChunk {
  constructor(init?: CAFRegionChunk);
  mSMPTE_TimeType: number;
  mNumberRegions: number;
  mRegions: unknown /* const array */;
}

declare class AUDependentParameter {
  constructor(init?: AUDependentParameter);
  mScope: number;
  mParameterID: number;
}

declare class AudioComponentPlugInInterface {
  constructor(init?: AudioComponentPlugInInterface);
  Open: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => number | null;
  Close: (p1: interop.PointerConvertible) => number | null;
  Lookup: (p1: number) => (p1: interop.PointerConvertible) => number | null;
  reserved: interop.Pointer;
}

declare class OpaqueMusicTrack {
  constructor(init?: OpaqueMusicTrack);
}

declare class AURecordedParameterEvent {
  constructor(init?: AURecordedParameterEvent);
  hostTime: number;
  address: number;
  value: number;
}

declare class AudioUnitRenderContext {
  constructor(init?: AudioUnitRenderContext);
  workgroup: OS_os_workgroup | null;
  reserved: unknown /* const array */;
}

declare class OpaqueAudioFileID {
  constructor(init?: OpaqueAudioFileID);
}

declare class AudioUnitFrequencyResponseBin {
  constructor(init?: AudioUnitFrequencyResponseBin);
  mFrequency: number;
  mMagnitude: number;
}

declare class OpaqueAudioQueueTimeline {
  constructor(init?: OpaqueAudioQueueTimeline);
}

declare class CAFStringID {
  constructor(init?: CAFStringID);
  mStringID: number;
  mStringStartByteOffset: number;
}

declare class CAFOverviewChunk {
  constructor(init?: CAFOverviewChunk);
  mEditCount: number;
  mNumFramesPerOVWSample: number;
  mData: unknown /* const array */;
}

declare class AudioQueueParameterEvent {
  constructor(init?: AudioQueueParameterEvent);
  mID: number;
  mValue: number;
}

declare class AUChannelInfo {
  constructor(init?: AUChannelInfo);
  inChannels: number;
  outChannels: number;
}

declare class AUVoiceIOOtherAudioDuckingConfiguration {
  constructor(init?: AUVoiceIOOtherAudioDuckingConfiguration);
  mEnableAdvancedDucking: number;
  mDuckingLevel: interop.Enum<typeof AUVoiceIOOtherAudioDuckingLevel>;
}

declare class CAFAudioDescription {
  constructor(init?: CAFAudioDescription);
  mSampleRate: number;
  mFormatID: number;
  mFormatFlags: interop.Enum<typeof CAFFormatFlags>;
  mBytesPerPacket: number;
  mFramesPerPacket: number;
  mChannelsPerFrame: number;
  mBitsPerChannel: number;
}

type unnamed_13579135698381977171Descriptor = 
  | { ramp: unnamed_2146336722080098363 }
  | { immediate: unnamed_8306956958047240581 };

declare class unnamed_13579135698381977171 {
  constructor(init?: unnamed_13579135698381977171Descriptor);
  ramp: unnamed_2146336722080098363;
  immediate: unnamed_8306956958047240581;
}

type unnamed_14094069681006705249Descriptor = 
  | { mParameter: AudioUnitParameter }
  | { mProperty: AudioUnitProperty };

declare class unnamed_14094069681006705249 {
  constructor(init?: unnamed_14094069681006705249Descriptor);
  mParameter: AudioUnitParameter;
  mProperty: AudioUnitProperty;
}

type AURenderEventDescriptor = 
  | { head: AURenderEventHeader }
  | { parameter: AUParameterEvent }
  | { MIDI: AUMIDIEvent }
  | { MIDIEventsList: AUMIDIEventList };

declare class AURenderEvent {
  constructor(init?: AURenderEventDescriptor);
  head: AURenderEventHeader;
  parameter: AUParameterEvent;
  MIDI: AUMIDIEvent;
  MIDIEventsList: AUMIDIEventList;
}

type unnamed_1374710415338551546Descriptor = 
  | { connection: AudioUnitNodeConnection }
  | { inputCallback: AUNodeRenderCallback };

declare class unnamed_1374710415338551546 {
  constructor(init?: unnamed_1374710415338551546Descriptor);
  connection: AudioUnitNodeConnection;
  inputCallback: AUNodeRenderCallback;
}

declare function AudioComponentFindNext(inComponent: interop.PointerConvertible, inDesc: interop.PointerConvertible): interop.Pointer;

declare function AudioComponentCount(inDesc: interop.PointerConvertible): number;

declare function AudioComponentCopyName(inComponent: interop.PointerConvertible, outName: interop.PointerConvertible): number;

declare function AudioComponentGetDescription(inComponent: interop.PointerConvertible, outDesc: interop.PointerConvertible): number;

declare function AudioComponentGetVersion(inComponent: interop.PointerConvertible, outVersion: interop.PointerConvertible): number;

declare function AudioComponentInstanceNew(inComponent: interop.PointerConvertible, outInstance: interop.PointerConvertible): number;

declare function AudioComponentInstantiate(inComponent: interop.PointerConvertible, inOptions: interop.Enum<typeof AudioComponentInstantiationOptions>, inCompletionHandler: (p1: interop.PointerConvertible, p2: number) => void): void;

declare function AudioComponentInstanceDispose(inInstance: interop.PointerConvertible): number;

declare function AudioComponentInstanceGetComponent(inInstance: interop.PointerConvertible): interop.Pointer;

declare function AudioComponentInstanceCanDo(inInstance: interop.PointerConvertible, inSelectorID: number): number;

declare function AudioComponentRegister(inDesc: interop.PointerConvertible, inName: interop.PointerConvertible, inVersion: number, inFactory: (p1: interop.PointerConvertible) => interop.Pointer): interop.Pointer;

declare function AudioComponentCopyConfigurationInfo(inComponent: interop.PointerConvertible, outConfigurationInfo: interop.PointerConvertible): number;

declare function AudioComponentValidate(inComponent: interop.PointerConvertible, inValidationParameters: interop.PointerConvertible, outValidationResult: interop.PointerConvertible): number;

declare function AudioComponentValidateWithResults(inComponent: interop.PointerConvertible, inValidationParameters: interop.PointerConvertible, inCompletionHandler: (p1: interop.Enum<typeof AudioComponentValidationResult>, p2: interop.PointerConvertible) => void): number;

declare function AudioCodecGetPropertyInfo(inCodec: interop.PointerConvertible, inPropertyID: number, outSize: interop.PointerConvertible, outWritable: interop.PointerConvertible): number;

declare function AudioCodecGetProperty(inCodec: interop.PointerConvertible, inPropertyID: number, ioPropertyDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function AudioCodecSetProperty(inCodec: interop.PointerConvertible, inPropertyID: number, inPropertyDataSize: number, inPropertyData: interop.PointerConvertible): number;

declare function AudioCodecInitialize(inCodec: interop.PointerConvertible, inInputFormat: interop.PointerConvertible, inOutputFormat: interop.PointerConvertible, inMagicCookie: interop.PointerConvertible, inMagicCookieByteSize: number): number;

declare function AudioCodecUninitialize(inCodec: interop.PointerConvertible): number;

declare function AudioCodecAppendInputData(inCodec: interop.PointerConvertible, inInputData: interop.PointerConvertible, ioInputDataByteSize: interop.PointerConvertible, ioNumberPackets: interop.PointerConvertible, inPacketDescription: interop.PointerConvertible): number;

declare function AudioCodecProduceOutputPackets(inCodec: interop.PointerConvertible, outOutputData: interop.PointerConvertible, ioOutputDataByteSize: interop.PointerConvertible, ioNumberPackets: interop.PointerConvertible, outPacketDescription: interop.PointerConvertible, outStatus: interop.PointerConvertible): number;

declare function AudioCodecAppendInputBufferList(inCodec: interop.PointerConvertible, inBufferList: interop.PointerConvertible, ioNumberPackets: interop.PointerConvertible, inPacketDescription: interop.PointerConvertible, outBytesConsumed: interop.PointerConvertible): number;

declare function AudioCodecProduceOutputBufferList(inCodec: interop.PointerConvertible, ioBufferList: interop.PointerConvertible, ioNumberPackets: interop.PointerConvertible, outPacketDescription: interop.PointerConvertible, outStatus: interop.PointerConvertible): number;

declare function AudioCodecReset(inCodec: interop.PointerConvertible): number;

declare function AudioUnitInitialize(inUnit: interop.PointerConvertible): number;

declare function AudioUnitUninitialize(inUnit: interop.PointerConvertible): number;

declare function AudioUnitGetPropertyInfo(inUnit: interop.PointerConvertible, inID: number, inScope: number, inElement: number, outDataSize: interop.PointerConvertible, outWritable: interop.PointerConvertible): number;

declare function AudioUnitGetProperty(inUnit: interop.PointerConvertible, inID: number, inScope: number, inElement: number, outData: interop.PointerConvertible, ioDataSize: interop.PointerConvertible): number;

declare function AudioUnitSetProperty(inUnit: interop.PointerConvertible, inID: number, inScope: number, inElement: number, inData: interop.PointerConvertible, inDataSize: number): number;

declare function AudioUnitAddPropertyListener(inUnit: interop.PointerConvertible, inID: number, inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number, p5: number) => void, inProcUserData: interop.PointerConvertible): number;

declare function AudioUnitRemovePropertyListenerWithUserData(inUnit: interop.PointerConvertible, inID: number, inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number, p5: number) => void, inProcUserData: interop.PointerConvertible): number;

declare function AudioUnitAddRenderNotify(inUnit: interop.PointerConvertible, inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: number, p6: interop.PointerConvertible) => number, inProcUserData: interop.PointerConvertible): number;

declare function AudioUnitRemoveRenderNotify(inUnit: interop.PointerConvertible, inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: number, p6: interop.PointerConvertible) => number, inProcUserData: interop.PointerConvertible): number;

declare function AudioUnitGetParameter(inUnit: interop.PointerConvertible, inID: number, inScope: number, inElement: number, outValue: interop.PointerConvertible): number;

declare function AudioUnitSetParameter(inUnit: interop.PointerConvertible, inID: number, inScope: number, inElement: number, inValue: number, inBufferOffsetInFrames: number): number;

declare function AudioUnitScheduleParameters(inUnit: interop.PointerConvertible, inParameterEvent: interop.PointerConvertible, inNumParamEvents: number): number;

declare function AudioUnitRender(inUnit: interop.PointerConvertible, ioActionFlags: interop.PointerConvertible, inTimeStamp: interop.PointerConvertible, inOutputBusNumber: number, inNumberFrames: number, ioData: interop.PointerConvertible): number;

declare function AudioUnitProcess(inUnit: interop.PointerConvertible, ioActionFlags: interop.PointerConvertible, inTimeStamp: interop.PointerConvertible, inNumberFrames: number, ioData: interop.PointerConvertible): number;

declare function AudioUnitProcessMultiple(inUnit: interop.PointerConvertible, ioActionFlags: interop.PointerConvertible, inTimeStamp: interop.PointerConvertible, inNumberFrames: number, inNumberInputBufferLists: number, inInputBufferLists: interop.PointerConvertible, inNumberOutputBufferLists: number, ioOutputBufferLists: interop.PointerConvertible): number;

declare function AudioUnitReset(inUnit: interop.PointerConvertible, inScope: number, inElement: number): number;

declare function AudioOutputUnitPublish(inDesc: interop.PointerConvertible, inName: interop.PointerConvertible, inVersion: number, inOutputUnit: interop.PointerConvertible): number;

declare function AudioOutputUnitGetHostIcon(au: interop.PointerConvertible, desiredPointSize: number): UIImage;

declare function AudioComponentGetIcon(comp: interop.PointerConvertible, desiredPointSize: number): UIImage;

declare function AudioComponentGetLastActiveTime(comp: interop.PointerConvertible): number;

declare function AudioComponentCopyIcon(comp: interop.PointerConvertible): UIImage;

declare function AudioUnitExtensionSetComponentList(extensionIdentifier: interop.PointerConvertible, audioComponentInfo: interop.PointerConvertible): number;

declare function AudioUnitExtensionCopyComponentList(extensionIdentifier: interop.PointerConvertible): interop.Pointer;

declare function AudioOutputUnitStart(ci: interop.PointerConvertible): number;

declare function AudioOutputUnitStop(ci: interop.PointerConvertible): number;

declare function MusicDeviceMIDIEvent(inUnit: interop.PointerConvertible, inStatus: number, inData1: number, inData2: number, inOffsetSampleFrame: number): number;

declare function MusicDeviceSysEx(inUnit: interop.PointerConvertible, inData: interop.PointerConvertible, inLength: number): number;

declare function MusicDeviceMIDIEventList(inUnit: interop.PointerConvertible, inOffsetSampleFrame: number, evtList: interop.PointerConvertible): number;

declare function MusicDeviceStartNote(inUnit: interop.PointerConvertible, inInstrument: number, inGroupID: number, outNoteInstanceID: interop.PointerConvertible, inOffsetSampleFrame: number, inParams: interop.PointerConvertible): number;

declare function MusicDeviceStopNote(inUnit: interop.PointerConvertible, inGroupID: number, inNoteInstanceID: number, inOffsetSampleFrame: number): number;

declare function NewAUGraph(outGraph: interop.PointerConvertible): number;

declare function DisposeAUGraph(inGraph: interop.PointerConvertible): number;

declare function AUGraphAddNode(inGraph: interop.PointerConvertible, inDescription: interop.PointerConvertible, outNode: interop.PointerConvertible): number;

declare function AUGraphRemoveNode(inGraph: interop.PointerConvertible, inNode: number): number;

declare function AUGraphGetNodeCount(inGraph: interop.PointerConvertible, outNumberOfNodes: interop.PointerConvertible): number;

declare function AUGraphGetIndNode(inGraph: interop.PointerConvertible, inIndex: number, outNode: interop.PointerConvertible): number;

declare function AUGraphNodeInfo(inGraph: interop.PointerConvertible, inNode: number, outDescription: interop.PointerConvertible, outAudioUnit: interop.PointerConvertible): number;

declare function AUGraphConnectNodeInput(inGraph: interop.PointerConvertible, inSourceNode: number, inSourceOutputNumber: number, inDestNode: number, inDestInputNumber: number): number;

declare function AUGraphSetNodeInputCallback(inGraph: interop.PointerConvertible, inDestNode: number, inDestInputNumber: number, inInputCallback: interop.PointerConvertible): number;

declare function AUGraphDisconnectNodeInput(inGraph: interop.PointerConvertible, inDestNode: number, inDestInputNumber: number): number;

declare function AUGraphClearConnections(inGraph: interop.PointerConvertible): number;

declare function AUGraphGetNumberOfInteractions(inGraph: interop.PointerConvertible, outNumInteractions: interop.PointerConvertible): number;

declare function AUGraphGetInteractionInfo(inGraph: interop.PointerConvertible, inInteractionIndex: number, outInteraction: interop.PointerConvertible): number;

declare function AUGraphCountNodeInteractions(inGraph: interop.PointerConvertible, inNode: number, outNumInteractions: interop.PointerConvertible): number;

declare function AUGraphGetNodeInteractions(inGraph: interop.PointerConvertible, inNode: number, ioNumInteractions: interop.PointerConvertible, outInteractions: interop.PointerConvertible): number;

declare function AUGraphUpdate(inGraph: interop.PointerConvertible, outIsUpdated: interop.PointerConvertible): number;

declare function AUGraphOpen(inGraph: interop.PointerConvertible): number;

declare function AUGraphClose(inGraph: interop.PointerConvertible): number;

declare function AUGraphInitialize(inGraph: interop.PointerConvertible): number;

declare function AUGraphUninitialize(inGraph: interop.PointerConvertible): number;

declare function AUGraphStart(inGraph: interop.PointerConvertible): number;

declare function AUGraphStop(inGraph: interop.PointerConvertible): number;

declare function AUGraphIsOpen(inGraph: interop.PointerConvertible, outIsOpen: interop.PointerConvertible): number;

declare function AUGraphIsInitialized(inGraph: interop.PointerConvertible, outIsInitialized: interop.PointerConvertible): number;

declare function AUGraphIsRunning(inGraph: interop.PointerConvertible, outIsRunning: interop.PointerConvertible): number;

declare function AUGraphGetCPULoad(inGraph: interop.PointerConvertible, outAverageCPULoad: interop.PointerConvertible): number;

declare function AUGraphGetMaxCPULoad(inGraph: interop.PointerConvertible, outMaxLoad: interop.PointerConvertible): number;

declare function AUGraphAddRenderNotify(inGraph: interop.PointerConvertible, inCallback: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: number, p6: interop.PointerConvertible) => number, inRefCon: interop.PointerConvertible): number;

declare function AUGraphRemoveRenderNotify(inGraph: interop.PointerConvertible, inCallback: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: number, p6: interop.PointerConvertible) => number, inRefCon: interop.PointerConvertible): number;

declare function AudioConverterPrepare(inFlags: number, ioReserved: interop.PointerConvertible, inCompletionBlock: (p1: number) => void): void;

declare function AudioConverterNew(inSourceFormat: interop.PointerConvertible, inDestinationFormat: interop.PointerConvertible, outAudioConverter: interop.PointerConvertible): number;

declare function AudioConverterNewSpecific(inSourceFormat: interop.PointerConvertible, inDestinationFormat: interop.PointerConvertible, inNumberClassDescriptions: number, inClassDescriptions: interop.PointerConvertible, outAudioConverter: interop.PointerConvertible): number;

declare function AudioConverterNewWithOptions(inSourceFormat: interop.PointerConvertible, inDestinationFormat: interop.PointerConvertible, inOptions: interop.Enum<typeof AudioConverterOptions>, outAudioConverter: interop.PointerConvertible): number;

declare function AudioConverterDispose(inAudioConverter: interop.PointerConvertible): number;

declare function AudioConverterReset(inAudioConverter: interop.PointerConvertible): number;

declare function AudioConverterGetPropertyInfo(inAudioConverter: interop.PointerConvertible, inPropertyID: number, outSize: interop.PointerConvertible, outWritable: interop.PointerConvertible): number;

declare function AudioConverterGetProperty(inAudioConverter: interop.PointerConvertible, inPropertyID: number, ioPropertyDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function AudioConverterSetProperty(inAudioConverter: interop.PointerConvertible, inPropertyID: number, inPropertyDataSize: number, inPropertyData: interop.PointerConvertible): number;

declare function AudioConverterConvertBuffer(inAudioConverter: interop.PointerConvertible, inInputDataSize: number, inInputData: interop.PointerConvertible, ioOutputDataSize: interop.PointerConvertible, outOutputData: interop.PointerConvertible): number;

declare function AudioConverterFillComplexBuffer(inAudioConverter: interop.PointerConvertible, inInputDataProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => number, inInputDataProcUserData: interop.PointerConvertible, ioOutputDataPacketSize: interop.PointerConvertible, outOutputData: interop.PointerConvertible, outPacketDescription: interop.PointerConvertible): number;

declare function AudioConverterConvertComplexBuffer(inAudioConverter: interop.PointerConvertible, inNumberPCMFrames: number, inInputData: interop.PointerConvertible, outOutputData: interop.PointerConvertible): number;

declare function AudioFileCreateWithURL(inFileRef: interop.PointerConvertible, inFileType: number, inFormat: interop.PointerConvertible, inFlags: interop.Enum<typeof AudioFileFlags>, outAudioFile: interop.PointerConvertible): number;

declare function AudioFileOpenURL(inFileRef: interop.PointerConvertible, inPermissions: interop.Enum<typeof AudioFilePermissions>, inFileTypeHint: number, outAudioFile: interop.PointerConvertible): number;

declare function AudioFileInitializeWithCallbacks(inClientData: interop.PointerConvertible, inReadFunc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => number, inWriteFunc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => number, inGetSizeFunc: (p1: interop.PointerConvertible) => number, inSetSizeFunc: (p1: interop.PointerConvertible, p2: number) => number, inFileType: number, inFormat: interop.PointerConvertible, inFlags: interop.Enum<typeof AudioFileFlags>, outAudioFile: interop.PointerConvertible): number;

declare function AudioFileOpenWithCallbacks(inClientData: interop.PointerConvertible, inReadFunc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => number, inWriteFunc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => number, inGetSizeFunc: (p1: interop.PointerConvertible) => number, inSetSizeFunc: (p1: interop.PointerConvertible, p2: number) => number, inFileTypeHint: number, outAudioFile: interop.PointerConvertible): number;

declare function AudioFileClose(inAudioFile: interop.PointerConvertible): number;

declare function AudioFileOptimize(inAudioFile: interop.PointerConvertible): number;

declare function AudioFileReadBytes(inAudioFile: interop.PointerConvertible, inUseCache: number, inStartingByte: number, ioNumBytes: interop.PointerConvertible, outBuffer: interop.PointerConvertible): number;

declare function AudioFileWriteBytes(inAudioFile: interop.PointerConvertible, inUseCache: number, inStartingByte: number, ioNumBytes: interop.PointerConvertible, inBuffer: interop.PointerConvertible): number;

declare function AudioFileReadPacketData(inAudioFile: interop.PointerConvertible, inUseCache: number, ioNumBytes: interop.PointerConvertible, outPacketDescriptions: interop.PointerConvertible, inStartingPacket: number, ioNumPackets: interop.PointerConvertible, outBuffer: interop.PointerConvertible): number;

declare function AudioFileReadPackets(inAudioFile: interop.PointerConvertible, inUseCache: number, outNumBytes: interop.PointerConvertible, outPacketDescriptions: interop.PointerConvertible, inStartingPacket: number, ioNumPackets: interop.PointerConvertible, outBuffer: interop.PointerConvertible): number;

declare function AudioFileWritePackets(inAudioFile: interop.PointerConvertible, inUseCache: number, inNumBytes: number, inPacketDescriptions: interop.PointerConvertible, inStartingPacket: number, ioNumPackets: interop.PointerConvertible, inBuffer: interop.PointerConvertible): number;

declare function AudioFileCountUserData(inAudioFile: interop.PointerConvertible, inUserDataID: number, outNumberItems: interop.PointerConvertible): number;

declare function AudioFileGetUserDataSize(inAudioFile: interop.PointerConvertible, inUserDataID: number, inIndex: number, outUserDataSize: interop.PointerConvertible): number;

declare function AudioFileGetUserDataSize64(inAudioFile: interop.PointerConvertible, inUserDataID: number, inIndex: number, outUserDataSize: interop.PointerConvertible): number;

declare function AudioFileGetUserData(inAudioFile: interop.PointerConvertible, inUserDataID: number, inIndex: number, ioUserDataSize: interop.PointerConvertible, outUserData: interop.PointerConvertible): number;

declare function AudioFileGetUserDataAtOffset(inAudioFile: interop.PointerConvertible, inUserDataID: number, inIndex: number, inOffset: number, ioUserDataSize: interop.PointerConvertible, outUserData: interop.PointerConvertible): number;

declare function AudioFileSetUserData(inAudioFile: interop.PointerConvertible, inUserDataID: number, inIndex: number, inUserDataSize: number, inUserData: interop.PointerConvertible): number;

declare function AudioFileRemoveUserData(inAudioFile: interop.PointerConvertible, inUserDataID: number, inIndex: number): number;

declare function AudioFileGetPropertyInfo(inAudioFile: interop.PointerConvertible, inPropertyID: number, outDataSize: interop.PointerConvertible, isWritable: interop.PointerConvertible): number;

declare function AudioFileGetProperty(inAudioFile: interop.PointerConvertible, inPropertyID: number, ioDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function AudioFileSetProperty(inAudioFile: interop.PointerConvertible, inPropertyID: number, inDataSize: number, inPropertyData: interop.PointerConvertible): number;

declare function AudioFileGetGlobalInfoSize(inPropertyID: number, inSpecifierSize: number, inSpecifier: interop.PointerConvertible, outDataSize: interop.PointerConvertible): number;

declare function AudioFileGetGlobalInfo(inPropertyID: number, inSpecifierSize: number, inSpecifier: interop.PointerConvertible, ioDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function AudioFileStreamOpen(inClientData: interop.PointerConvertible, inPropertyListenerProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: interop.PointerConvertible) => void, inPacketsProc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible) => void, inFileTypeHint: number, outAudioFileStream: interop.PointerConvertible): number;

declare function AudioFileStreamParseBytes(inAudioFileStream: interop.PointerConvertible, inDataByteSize: number, inData: interop.PointerConvertible, inFlags: interop.Enum<typeof AudioFileStreamParseFlags>): number;

declare function AudioFileStreamSeek(inAudioFileStream: interop.PointerConvertible, inPacketOffset: number, outDataByteOffset: interop.PointerConvertible, ioFlags: interop.PointerConvertible): number;

declare function AudioFileStreamGetPropertyInfo(inAudioFileStream: interop.PointerConvertible, inPropertyID: number, outPropertyDataSize: interop.PointerConvertible, outWritable: interop.PointerConvertible): number;

declare function AudioFileStreamGetProperty(inAudioFileStream: interop.PointerConvertible, inPropertyID: number, ioPropertyDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function AudioFileStreamSetProperty(inAudioFileStream: interop.PointerConvertible, inPropertyID: number, inPropertyDataSize: number, inPropertyData: interop.PointerConvertible): number;

declare function AudioFileStreamClose(inAudioFileStream: interop.PointerConvertible): number;

declare function AudioFormatGetPropertyInfo(inPropertyID: number, inSpecifierSize: number, inSpecifier: interop.PointerConvertible, outPropertyDataSize: interop.PointerConvertible): number;

declare function AudioFormatGetProperty(inPropertyID: number, inSpecifierSize: number, inSpecifier: interop.PointerConvertible, ioPropertyDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function AudioQueueNewOutput(inFormat: interop.PointerConvertible, inCallbackProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible) => void, inUserData: interop.PointerConvertible, inCallbackRunLoop: interop.PointerConvertible, inCallbackRunLoopMode: interop.PointerConvertible, inFlags: number, outAQ: interop.PointerConvertible): number;

declare function AudioQueueNewInput(inFormat: interop.PointerConvertible, inCallbackProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: number, p6: interop.PointerConvertible) => void, inUserData: interop.PointerConvertible, inCallbackRunLoop: interop.PointerConvertible, inCallbackRunLoopMode: interop.PointerConvertible, inFlags: number, outAQ: interop.PointerConvertible): number;

declare function AudioQueueNewOutputWithDispatchQueue(outAQ: interop.PointerConvertible, inFormat: interop.PointerConvertible, inFlags: number, inCallbackDispatchQueue: NSObject, inCallbackBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void): number;

declare function AudioQueueNewInputWithDispatchQueue(outAQ: interop.PointerConvertible, inFormat: interop.PointerConvertible, inFlags: number, inCallbackDispatchQueue: NSObject, inCallbackBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: interop.PointerConvertible) => void): number;

declare function AudioQueueDispose(inAQ: interop.PointerConvertible, inImmediate: number): number;

declare function AudioQueueAllocateBuffer(inAQ: interop.PointerConvertible, inBufferByteSize: number, outBuffer: interop.PointerConvertible): number;

declare function AudioQueueAllocateBufferWithPacketDescriptions(inAQ: interop.PointerConvertible, inBufferByteSize: number, inNumberPacketDescriptions: number, outBuffer: interop.PointerConvertible): number;

declare function AudioQueueFreeBuffer(inAQ: interop.PointerConvertible, inBuffer: interop.PointerConvertible): number;

declare function AudioQueueEnqueueBuffer(inAQ: interop.PointerConvertible, inBuffer: interop.PointerConvertible, inNumPacketDescs: number, inPacketDescs: interop.PointerConvertible): number;

declare function AudioQueueEnqueueBufferWithParameters(inAQ: interop.PointerConvertible, inBuffer: interop.PointerConvertible, inNumPacketDescs: number, inPacketDescs: interop.PointerConvertible, inTrimFramesAtStart: number, inTrimFramesAtEnd: number, inNumParamValues: number, inParamValues: interop.PointerConvertible, inStartTime: interop.PointerConvertible, outActualStartTime: interop.PointerConvertible): number;

declare function AudioQueueStart(inAQ: interop.PointerConvertible, inStartTime: interop.PointerConvertible): number;

declare function AudioQueuePrime(inAQ: interop.PointerConvertible, inNumberOfFramesToPrepare: number, outNumberOfFramesPrepared: interop.PointerConvertible): number;

declare function AudioQueueStop(inAQ: interop.PointerConvertible, inImmediate: number): number;

declare function AudioQueuePause(inAQ: interop.PointerConvertible): number;

declare function AudioQueueFlush(inAQ: interop.PointerConvertible): number;

declare function AudioQueueReset(inAQ: interop.PointerConvertible): number;

declare function AudioQueueGetParameter(inAQ: interop.PointerConvertible, inParamID: number, outValue: interop.PointerConvertible): number;

declare function AudioQueueSetParameter(inAQ: interop.PointerConvertible, inParamID: number, inValue: number): number;

declare function AudioQueueGetProperty(inAQ: interop.PointerConvertible, inID: number, outData: interop.PointerConvertible, ioDataSize: interop.PointerConvertible): number;

declare function AudioQueueSetProperty(inAQ: interop.PointerConvertible, inID: number, inData: interop.PointerConvertible, inDataSize: number): number;

declare function AudioQueueGetPropertySize(inAQ: interop.PointerConvertible, inID: number, outDataSize: interop.PointerConvertible): number;

declare function AudioQueueAddPropertyListener(inAQ: interop.PointerConvertible, inID: number, inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number) => void, inUserData: interop.PointerConvertible): number;

declare function AudioQueueRemovePropertyListener(inAQ: interop.PointerConvertible, inID: number, inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number) => void, inUserData: interop.PointerConvertible): number;

declare function AudioQueueCreateTimeline(inAQ: interop.PointerConvertible, outTimeline: interop.PointerConvertible): number;

declare function AudioQueueDisposeTimeline(inAQ: interop.PointerConvertible, inTimeline: interop.PointerConvertible): number;

declare function AudioQueueGetCurrentTime(inAQ: interop.PointerConvertible, inTimeline: interop.PointerConvertible, outTimeStamp: interop.PointerConvertible, outTimelineDiscontinuity: interop.PointerConvertible): number;

declare function AudioQueueDeviceGetCurrentTime(inAQ: interop.PointerConvertible, outTimeStamp: interop.PointerConvertible): number;

declare function AudioQueueDeviceTranslateTime(inAQ: interop.PointerConvertible, inTime: interop.PointerConvertible, outTime: interop.PointerConvertible): number;

declare function AudioQueueDeviceGetNearestStartTime(inAQ: interop.PointerConvertible, ioRequestedStartTime: interop.PointerConvertible, inFlags: number): number;

declare function AudioQueueSetOfflineRenderFormat(inAQ: interop.PointerConvertible, inFormat: interop.PointerConvertible, inLayout: interop.PointerConvertible): number;

declare function AudioQueueOfflineRender(inAQ: interop.PointerConvertible, inTimestamp: interop.PointerConvertible, ioBuffer: interop.PointerConvertible, inNumberFrames: number): number;

declare function AudioQueueProcessingTapNew(inAQ: interop.PointerConvertible, inCallback: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: interop.PointerConvertible, p5: interop.PointerConvertible, p6: interop.PointerConvertible, p7: interop.PointerConvertible) => void, inClientData: interop.PointerConvertible, inFlags: interop.Enum<typeof AudioQueueProcessingTapFlags>, outMaxFrames: interop.PointerConvertible, outProcessingFormat: interop.PointerConvertible, outAQTap: interop.PointerConvertible): number;

declare function AudioQueueProcessingTapDispose(inAQTap: interop.PointerConvertible): number;

declare function AudioQueueProcessingTapGetSourceAudio(inAQTap: interop.PointerConvertible, inNumberFrames: number, ioTimeStamp: interop.PointerConvertible, outFlags: interop.PointerConvertible, outNumberFrames: interop.PointerConvertible, ioData: interop.PointerConvertible): number;

declare function AudioQueueProcessingTapGetQueueTime(inAQTap: interop.PointerConvertible, outQueueSampleTime: interop.PointerConvertible, outQueueFrameCount: interop.PointerConvertible): number;

declare function AudioSessionInitialize(inRunLoop: interop.PointerConvertible, inRunLoopMode: interop.PointerConvertible, inInterruptionListener: (p1: interop.PointerConvertible, p2: number) => void, inClientData: interop.PointerConvertible): number;

declare function AudioSessionSetActive(active: number): number;

declare function AudioSessionSetActiveWithFlags(active: number, inFlags: number): number;

declare function AudioSessionGetProperty(inID: number, ioDataSize: interop.PointerConvertible, outData: interop.PointerConvertible): number;

declare function AudioSessionSetProperty(inID: number, inDataSize: number, inData: interop.PointerConvertible): number;

declare function AudioSessionGetPropertySize(inID: number, outDataSize: interop.PointerConvertible): number;

declare function AudioSessionAddPropertyListener(inID: number, inProc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: interop.PointerConvertible) => void, inClientData: interop.PointerConvertible): number;

declare function AudioSessionRemovePropertyListener(inID: number): number;

declare function AudioSessionRemovePropertyListenerWithUserData(inID: number, inProc: (p1: interop.PointerConvertible, p2: number, p3: number, p4: interop.PointerConvertible) => void, inClientData: interop.PointerConvertible): number;

declare function AudioServicesCreateSystemSoundID(inFileURL: interop.PointerConvertible, outSystemSoundID: interop.PointerConvertible): number;

declare function AudioServicesDisposeSystemSoundID(inSystemSoundID: number): number;

declare function AudioServicesPlayAlertSoundWithCompletion(inSystemSoundID: number, inCompletionBlock: () => void): void;

declare function AudioServicesPlaySystemSoundWithCompletion(inSystemSoundID: number, inCompletionBlock: () => void): void;

declare function AudioServicesGetPropertyInfo(inPropertyID: number, inSpecifierSize: number, inSpecifier: interop.PointerConvertible, outPropertyDataSize: interop.PointerConvertible, outWritable: interop.PointerConvertible): number;

declare function AudioServicesGetProperty(inPropertyID: number, inSpecifierSize: number, inSpecifier: interop.PointerConvertible, ioPropertyDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function AudioServicesSetProperty(inPropertyID: number, inSpecifierSize: number, inSpecifier: interop.PointerConvertible, inPropertyDataSize: number, inPropertyData: interop.PointerConvertible): number;

declare function AudioServicesPlayAlertSound(inSystemSoundID: number): void;

declare function AudioServicesPlaySystemSound(inSystemSoundID: number): void;

declare function AudioServicesAddSystemSoundCompletion(inSystemSoundID: number, inRunLoop: interop.PointerConvertible, inRunLoopMode: interop.PointerConvertible, inCompletionRoutine: (p1: number, p2: interop.PointerConvertible) => void, inClientData: interop.PointerConvertible): number;

declare function AudioServicesRemoveSystemSoundCompletion(inSystemSoundID: number): void;

declare function AUListenerCreateWithDispatchQueue(outListener: interop.PointerConvertible, inNotificationInterval: number, inDispatchQueue: NSObject, inBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number) => void): number;

declare function AUListenerCreate(inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number) => void, inUserData: interop.PointerConvertible, inRunLoop: interop.PointerConvertible, inRunLoopMode: interop.PointerConvertible, inNotificationInterval: number, outListener: interop.PointerConvertible): number;

declare function AUListenerDispose(inListener: interop.PointerConvertible): number;

declare function AUListenerAddParameter(inListener: interop.PointerConvertible, inObject: interop.PointerConvertible, inParameter: interop.PointerConvertible): number;

declare function AUListenerRemoveParameter(inListener: interop.PointerConvertible, inObject: interop.PointerConvertible, inParameter: interop.PointerConvertible): number;

declare function AUParameterSet(inSendingListener: interop.PointerConvertible, inSendingObject: interop.PointerConvertible, inParameter: interop.PointerConvertible, inValue: number, inBufferOffsetInFrames: number): number;

declare function AUParameterListenerNotify(inSendingListener: interop.PointerConvertible, inSendingObject: interop.PointerConvertible, inParameter: interop.PointerConvertible): number;

declare function AUEventListenerCreateWithDispatchQueue(outListener: interop.PointerConvertible, inNotificationInterval: number, inValueChangeGranularity: number, inDispatchQueue: NSObject, inBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number) => void): number;

declare function AUEventListenerCreate(inProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: number) => void, inUserData: interop.PointerConvertible, inRunLoop: interop.PointerConvertible, inRunLoopMode: interop.PointerConvertible, inNotificationInterval: number, inValueChangeGranularity: number, outListener: interop.PointerConvertible): number;

declare function AUEventListenerAddEventType(inListener: interop.PointerConvertible, inObject: interop.PointerConvertible, inEvent: interop.PointerConvertible): number;

declare function AUEventListenerRemoveEventType(inListener: interop.PointerConvertible, inObject: interop.PointerConvertible, inEvent: interop.PointerConvertible): number;

declare function AUEventListenerNotify(inSendingListener: interop.PointerConvertible, inSendingObject: interop.PointerConvertible, inEvent: interop.PointerConvertible): number;

declare function AUParameterValueFromLinear(inLinearValue: number, inParameter: interop.PointerConvertible): number;

declare function AUParameterValueToLinear(inParameterValue: number, inParameter: interop.PointerConvertible): number;

declare function AUParameterFormatValue(inParameterValue: number, inParameter: interop.PointerConvertible, inTextBuffer: string, inDigits: number): string;

declare function AudioWorkIntervalCreate(name: string, clock: interop.Enum<typeof os_clockid_t>, attr: interop.PointerConvertible): OS_os_workgroup;

declare function CAShow(inObject: interop.PointerConvertible): void;

declare function CAShowFile(inObject: interop.PointerConvertible, inFile: interop.PointerConvertible): void;

declare function ExtAudioFileOpenURL(inURL: interop.PointerConvertible, outExtAudioFile: interop.PointerConvertible): number;

declare function ExtAudioFileWrapAudioFileID(inFileID: interop.PointerConvertible, inForWriting: number, outExtAudioFile: interop.PointerConvertible): number;

declare function ExtAudioFileCreateWithURL(inURL: interop.PointerConvertible, inFileType: number, inStreamDesc: interop.PointerConvertible, inChannelLayout: interop.PointerConvertible, inFlags: number, outExtAudioFile: interop.PointerConvertible): number;

declare function ExtAudioFileDispose(inExtAudioFile: interop.PointerConvertible): number;

declare function ExtAudioFileRead(inExtAudioFile: interop.PointerConvertible, ioNumberFrames: interop.PointerConvertible, ioData: interop.PointerConvertible): number;

declare function ExtAudioFileWrite(inExtAudioFile: interop.PointerConvertible, inNumberFrames: number, ioData: interop.PointerConvertible): number;

declare function ExtAudioFileWriteAsync(inExtAudioFile: interop.PointerConvertible, inNumberFrames: number, ioData: interop.PointerConvertible): number;

declare function ExtAudioFileSeek(inExtAudioFile: interop.PointerConvertible, inFrameOffset: number): number;

declare function ExtAudioFileTell(inExtAudioFile: interop.PointerConvertible, outFrameOffset: interop.PointerConvertible): number;

declare function ExtAudioFileGetPropertyInfo(inExtAudioFile: interop.PointerConvertible, inPropertyID: number, outSize: interop.PointerConvertible, outWritable: interop.PointerConvertible): number;

declare function ExtAudioFileGetProperty(inExtAudioFile: interop.PointerConvertible, inPropertyID: number, ioPropertyDataSize: interop.PointerConvertible, outPropertyData: interop.PointerConvertible): number;

declare function ExtAudioFileSetProperty(inExtAudioFile: interop.PointerConvertible, inPropertyID: number, inPropertyDataSize: number, inPropertyData: interop.PointerConvertible): number;

declare function NewMusicPlayer(outPlayer: interop.PointerConvertible): number;

declare function DisposeMusicPlayer(inPlayer: interop.PointerConvertible): number;

declare function MusicPlayerSetSequence(inPlayer: interop.PointerConvertible, inSequence: interop.PointerConvertible): number;

declare function MusicPlayerGetSequence(inPlayer: interop.PointerConvertible, outSequence: interop.PointerConvertible): number;

declare function MusicPlayerSetTime(inPlayer: interop.PointerConvertible, inTime: number): number;

declare function MusicPlayerGetTime(inPlayer: interop.PointerConvertible, outTime: interop.PointerConvertible): number;

declare function MusicPlayerGetHostTimeForBeats(inPlayer: interop.PointerConvertible, inBeats: number, outHostTime: interop.PointerConvertible): number;

declare function MusicPlayerGetBeatsForHostTime(inPlayer: interop.PointerConvertible, inHostTime: number, outBeats: interop.PointerConvertible): number;

declare function MusicPlayerPreroll(inPlayer: interop.PointerConvertible): number;

declare function MusicPlayerStart(inPlayer: interop.PointerConvertible): number;

declare function MusicPlayerStop(inPlayer: interop.PointerConvertible): number;

declare function MusicPlayerIsPlaying(inPlayer: interop.PointerConvertible, outIsPlaying: interop.PointerConvertible): number;

declare function MusicPlayerSetPlayRateScalar(inPlayer: interop.PointerConvertible, inScaleRate: number): number;

declare function MusicPlayerGetPlayRateScalar(inPlayer: interop.PointerConvertible, outScaleRate: interop.PointerConvertible): number;

declare function NewMusicSequence(outSequence: interop.PointerConvertible): number;

declare function DisposeMusicSequence(inSequence: interop.PointerConvertible): number;

declare function MusicSequenceNewTrack(inSequence: interop.PointerConvertible, outTrack: interop.PointerConvertible): number;

declare function MusicSequenceDisposeTrack(inSequence: interop.PointerConvertible, inTrack: interop.PointerConvertible): number;

declare function MusicSequenceGetTrackCount(inSequence: interop.PointerConvertible, outNumberOfTracks: interop.PointerConvertible): number;

declare function MusicSequenceGetIndTrack(inSequence: interop.PointerConvertible, inTrackIndex: number, outTrack: interop.PointerConvertible): number;

declare function MusicSequenceGetTrackIndex(inSequence: interop.PointerConvertible, inTrack: interop.PointerConvertible, outTrackIndex: interop.PointerConvertible): number;

declare function MusicSequenceGetTempoTrack(inSequence: interop.PointerConvertible, outTrack: interop.PointerConvertible): number;

declare function MusicSequenceSetAUGraph(inSequence: interop.PointerConvertible, inGraph: interop.PointerConvertible): number;

declare function MusicSequenceGetAUGraph(inSequence: interop.PointerConvertible, outGraph: interop.PointerConvertible): number;

declare function MusicSequenceSetMIDIEndpoint(inSequence: interop.PointerConvertible, inEndpoint: number): number;

declare function MusicSequenceSetSequenceType(inSequence: interop.PointerConvertible, inType: interop.Enum<typeof MusicSequenceType>): number;

declare function MusicSequenceGetSequenceType(inSequence: interop.PointerConvertible, outType: interop.PointerConvertible): number;

declare function MusicSequenceFileLoad(inSequence: interop.PointerConvertible, inFileRef: interop.PointerConvertible, inFileTypeHint: interop.Enum<typeof MusicSequenceFileTypeID>, inFlags: interop.Enum<typeof MusicSequenceLoadFlags>): number;

declare function MusicSequenceFileLoadData(inSequence: interop.PointerConvertible, inData: interop.PointerConvertible, inFileTypeHint: interop.Enum<typeof MusicSequenceFileTypeID>, inFlags: interop.Enum<typeof MusicSequenceLoadFlags>): number;

declare function MusicSequenceFileCreate(inSequence: interop.PointerConvertible, inFileRef: interop.PointerConvertible, inFileType: interop.Enum<typeof MusicSequenceFileTypeID>, inFlags: interop.Enum<typeof MusicSequenceFileFlags>, inResolution: number): number;

declare function MusicSequenceFileCreateData(inSequence: interop.PointerConvertible, inFileType: interop.Enum<typeof MusicSequenceFileTypeID>, inFlags: interop.Enum<typeof MusicSequenceFileFlags>, inResolution: number, outData: interop.PointerConvertible): number;

declare function MusicSequenceReverse(inSequence: interop.PointerConvertible): number;

declare function MusicSequenceGetSecondsForBeats(inSequence: interop.PointerConvertible, inBeats: number, outSeconds: interop.PointerConvertible): number;

declare function MusicSequenceGetBeatsForSeconds(inSequence: interop.PointerConvertible, inSeconds: number, outBeats: interop.PointerConvertible): number;

declare function MusicSequenceSetUserCallback(inSequence: interop.PointerConvertible, inCallback: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: number, p5: interop.PointerConvertible, p6: number, p7: number) => void, inClientData: interop.PointerConvertible): number;

declare function MusicSequenceBeatsToBarBeatTime(inSequence: interop.PointerConvertible, inBeats: number, inSubbeatDivisor: number, outBarBeatTime: interop.PointerConvertible): number;

declare function MusicSequenceBarBeatTimeToBeats(inSequence: interop.PointerConvertible, inBarBeatTime: interop.PointerConvertible, outBeats: interop.PointerConvertible): number;

declare function MusicSequenceGetInfoDictionary(inSequence: interop.PointerConvertible): interop.Pointer;

declare function MusicTrackGetSequence(inTrack: interop.PointerConvertible, outSequence: interop.PointerConvertible): number;

declare function MusicTrackSetDestNode(inTrack: interop.PointerConvertible, inNode: number): number;

declare function MusicTrackSetDestMIDIEndpoint(inTrack: interop.PointerConvertible, inEndpoint: number): number;

declare function MusicTrackGetDestNode(inTrack: interop.PointerConvertible, outNode: interop.PointerConvertible): number;

declare function MusicTrackGetDestMIDIEndpoint(inTrack: interop.PointerConvertible, outEndpoint: interop.PointerConvertible): number;

declare function MusicTrackSetProperty(inTrack: interop.PointerConvertible, inPropertyID: number, inData: interop.PointerConvertible, inLength: number): number;

declare function MusicTrackGetProperty(inTrack: interop.PointerConvertible, inPropertyID: number, outData: interop.PointerConvertible, ioLength: interop.PointerConvertible): number;

declare function MusicTrackMoveEvents(inTrack: interop.PointerConvertible, inStartTime: number, inEndTime: number, inMoveTime: number): number;

declare function MusicTrackClear(inTrack: interop.PointerConvertible, inStartTime: number, inEndTime: number): number;

declare function MusicTrackCut(inTrack: interop.PointerConvertible, inStartTime: number, inEndTime: number): number;

declare function MusicTrackCopyInsert(inSourceTrack: interop.PointerConvertible, inSourceStartTime: number, inSourceEndTime: number, inDestTrack: interop.PointerConvertible, inDestInsertTime: number): number;

declare function MusicTrackMerge(inSourceTrack: interop.PointerConvertible, inSourceStartTime: number, inSourceEndTime: number, inDestTrack: interop.PointerConvertible, inDestInsertTime: number): number;

declare function MusicTrackNewMIDINoteEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inMessage: interop.PointerConvertible): number;

declare function MusicTrackNewMIDIChannelEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inMessage: interop.PointerConvertible): number;

declare function MusicTrackNewMIDIRawDataEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inRawData: interop.PointerConvertible): number;

declare function MusicTrackNewExtendedNoteEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inInfo: interop.PointerConvertible): number;

declare function MusicTrackNewParameterEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inInfo: interop.PointerConvertible): number;

declare function MusicTrackNewExtendedTempoEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inBPM: number): number;

declare function MusicTrackNewMetaEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inMetaEvent: interop.PointerConvertible): number;

declare function MusicTrackNewUserEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inUserData: interop.PointerConvertible): number;

declare function MusicTrackNewAUPresetEvent(inTrack: interop.PointerConvertible, inTimeStamp: number, inPresetEvent: interop.PointerConvertible): number;

declare function NewMusicEventIterator(inTrack: interop.PointerConvertible, outIterator: interop.PointerConvertible): number;

declare function DisposeMusicEventIterator(inIterator: interop.PointerConvertible): number;

declare function MusicEventIteratorSeek(inIterator: interop.PointerConvertible, inTimeStamp: number): number;

declare function MusicEventIteratorNextEvent(inIterator: interop.PointerConvertible): number;

declare function MusicEventIteratorPreviousEvent(inIterator: interop.PointerConvertible): number;

declare function MusicEventIteratorGetEventInfo(inIterator: interop.PointerConvertible, outTimeStamp: interop.PointerConvertible, outEventType: interop.PointerConvertible, outEventData: interop.PointerConvertible, outEventDataSize: interop.PointerConvertible): number;

declare function MusicEventIteratorSetEventInfo(inIterator: interop.PointerConvertible, inEventType: number, inEventData: interop.PointerConvertible): number;

declare function MusicEventIteratorSetEventTime(inIterator: interop.PointerConvertible, inTimeStamp: number): number;

declare function MusicEventIteratorDeleteEvent(inIterator: interop.PointerConvertible): number;

declare function MusicEventIteratorHasPreviousEvent(inIterator: interop.PointerConvertible, outHasPrevEvent: interop.PointerConvertible): number;

declare function MusicEventIteratorHasNextEvent(inIterator: interop.PointerConvertible, outHasNextEvent: interop.PointerConvertible): number;

declare function MusicEventIteratorHasCurrentEvent(inIterator: interop.PointerConvertible, outHasCurEvent: interop.PointerConvertible): number;

declare function CopyNameFromSoundBank(inURL: interop.PointerConvertible, outName: interop.PointerConvertible): number;

declare function CopyInstrumentInfoFromSoundBank(inURL: interop.PointerConvertible, outInstrumentInfo: interop.PointerConvertible): number;

declare interface AUAudioUnitFactory extends NSExtensionRequestHandling {
  createAudioUnitWithComponentDescriptionError(desc: AudioComponentDescription, error: interop.PointerConvertible): AUAudioUnit;
}

declare class AUAudioUnitFactory extends NativeObject implements AUAudioUnitFactory {
}

declare interface AUMessageChannel {
  callAudioUnit?(message: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSDictionary;

  callHostBlock?: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary;
}

declare class AUMessageChannel extends NativeObject implements AUMessageChannel {
}

declare class AUAudioUnitBusArray extends NSObject implements NSFastEnumeration {
  initWithAudioUnitBusTypeBusses(owner: AUAudioUnit, busType: interop.Enum<typeof AUAudioUnitBusType>, busArray: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithAudioUnitBusType(owner: AUAudioUnit, busType: interop.Enum<typeof AUAudioUnitBusType>): this;

  readonly count: number;

  objectAtIndexedSubscript(index: number): AUAudioUnitBus;

  readonly isCountChangeable: boolean;

  setBusCountError(count: number, outError: interop.PointerConvertible): boolean;

  addObserverToAllBussesForKeyPathOptionsContext(observer: NSObject, keyPath: string, options: interop.Enum<typeof NSKeyValueObservingOptions>, context: interop.PointerConvertible): void;

  removeObserverFromAllBussesForKeyPathContext(observer: NSObject, keyPath: string, context: interop.PointerConvertible): void;

  readonly ownerAudioUnit: AUAudioUnit;

  readonly busType: interop.Enum<typeof AUAudioUnitBusType>;

  replaceBusses(busArray: NSArray<interop.Object> | Array<interop.Object>): void;

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;

  readonly [Symbol.iterator]: () => Iterator<any>;

}

declare class AUParameterTree extends AUParameterGroup implements NSSecureCoding {
  parameterWithAddress(address: number): AUParameter | null;

  parameterWithIDScopeElement(paramID: number, scope: number, element: number): AUParameter | null;

  static createParameterWithIdentifierNameAddressMinMaxUnitUnitNameFlagsValueStringsDependentParameters(identifier: string, name: string, address: number, min: number, max: number, unit: interop.Enum<typeof AudioUnitParameterUnit>, unitName: string | null, flags: interop.Enum<typeof AudioUnitParameterOptions>, valueStrings: NSArray<interop.Object> | Array<interop.Object> | null, dependentParameters: NSArray<interop.Object> | Array<interop.Object> | null): AUParameter;

  static createGroupWithIdentifierNameChildren(identifier: string, name: string, children: NSArray<interop.Object> | Array<interop.Object>): AUParameterGroup;

  static createGroupTemplate(children: NSArray<interop.Object> | Array<interop.Object>): AUParameterGroup;

  static createGroupFromTemplateIdentifierNameAddressOffset(templateGroup: AUParameterGroup, identifier: string, name: string, addressOffset: number): AUParameterGroup;

  static createTreeWithChildren(children: NSArray<interop.Object> | Array<interop.Object>): AUParameterTree;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class AUParameterNode extends NSObject {
  readonly identifier: string;

  readonly keyPath: string;

  readonly displayName: string;

  displayNameWithLength(maximumLength: number): string;

  tokenByAddingParameterObserver(observer: (p1: number, p2: number) => void): interop.Pointer;

  tokenByAddingParameterRecordingObserver(observer: (p1: number, p2: interop.PointerConvertible) => void): interop.Pointer;

  tokenByAddingParameterAutomationObserver(observer: (p1: number, p2: interop.PointerConvertible) => void): interop.Pointer;

  removeParameterObserver(token: interop.PointerConvertible): void;

  implementorValueObserver: (p1: AUParameter, p2: number) => void;

  implementorValueProvider: (p1: AUParameter) => number;

  implementorStringFromValueCallback: (p1: AUParameter, p2: interop.PointerConvertible) => string;

  implementorValueFromStringCallback: (p1: AUParameter, p2: string) => number;

  implementorDisplayNameWithLengthCallback: (p1: AUParameterNode, p2: number) => string;
}

declare class AUParameter extends AUParameterNode implements NSSecureCoding {
  readonly minValue: number;

  readonly maxValue: number;

  readonly unit: interop.Enum<typeof AudioUnitParameterUnit>;

  readonly unitName: string;

  readonly flags: interop.Enum<typeof AudioUnitParameterOptions>;

  readonly address: number;

  readonly valueStrings: NSArray;

  readonly dependentParameters: NSArray;

  value: number;

  setValueOriginator(value: number, originator: interop.PointerConvertible): void;

  setValueOriginatorAtHostTime(value: number, originator: interop.PointerConvertible, hostTime: number): void;

  setValueOriginatorAtHostTimeEventType(value: number, originator: interop.PointerConvertible, hostTime: number, eventType: interop.Enum<typeof AUParameterAutomationEventType>): void;

  stringFromValue(value: interop.PointerConvertible): string;

  valueFromString(string: string): number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class AUAudioUnitPreset extends NSObject implements NSSecureCoding {
  number: number;

  name: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class AUAudioUnit extends NSObject {
  initWithComponentDescriptionOptionsError(componentDescription: AudioComponentDescription, options: interop.Enum<typeof AudioComponentInstantiationOptions>, outError: interop.PointerConvertible): this;

  initWithComponentDescriptionError(componentDescription: AudioComponentDescription, outError: interop.PointerConvertible): this;

  static instantiateWithComponentDescriptionOptionsCompletionHandler(componentDescription: AudioComponentDescription, options: interop.Enum<typeof AudioComponentInstantiationOptions>, completionHandler: (p1: AUAudioUnit, p2: NSError) => void | null): void;

  readonly componentDescription: AudioComponentDescription;

  readonly component: interop.Pointer;

  readonly componentName: string;

  readonly audioUnitName: string;

  readonly manufacturerName: string;

  readonly audioUnitShortName: string;

  readonly componentVersion: number;

  allocateRenderResourcesAndReturnError(outError: interop.PointerConvertible): boolean;

  deallocateRenderResources(): void;

  readonly renderResourcesAllocated: boolean;

  reset(): void;

  readonly inputBusses: AUAudioUnitBusArray;

  readonly outputBusses: AUAudioUnitBusArray;

  readonly renderBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number, p5: interop.PointerConvertible, p6: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number, p5: interop.PointerConvertible) => number) => number;

  readonly scheduleParameterBlock: (p1: number, p2: number, p3: number, p4: number) => void;

  tokenByAddingRenderObserver(observer: (p1: interop.Enum<typeof AudioUnitRenderActionFlags>, p2: interop.PointerConvertible, p3: number, p4: number) => void): number;

  removeRenderObserver(token: number): void;

  maximumFramesToRender: number;

  parameterTree: AUParameterTree;

  parametersForOverviewWithCount(count: number): NSArray;

  readonly allParameterValues: boolean;

  readonly isMusicDeviceOrEffect: boolean;

  readonly virtualMIDICableCount: number;

  readonly scheduleMIDIEventBlock: (p1: number, p2: number, p3: number, p4: interop.PointerConvertible) => void;

  readonly scheduleMIDIEventListBlock: (p1: number, p2: number, p3: interop.PointerConvertible) => number;

  readonly MIDIOutputNames: NSArray;

  readonly providesUserInterface: boolean;

  MIDIOutputEventBlock: (p1: number, p2: number, p3: number, p4: interop.PointerConvertible) => number;

  MIDIOutputEventListBlock: (p1: number, p2: number, p3: interop.PointerConvertible) => number;

  readonly AudioUnitMIDIProtocol: interop.Enum<typeof MIDIProtocolID>;

  hostMIDIProtocol: interop.Enum<typeof MIDIProtocolID>;

  get fullState(): NSDictionary;
  set fullState(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get fullStateForDocument(): NSDictionary;
  set fullStateForDocument(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  readonly factoryPresets: NSArray;

  readonly userPresets: NSArray;

  saveUserPresetError(userPreset: AUAudioUnitPreset, outError: interop.PointerConvertible): boolean;

  deleteUserPresetError(userPreset: AUAudioUnitPreset, outError: interop.PointerConvertible): boolean;

  presetStateForError(userPreset: AUAudioUnitPreset, outError: interop.PointerConvertible): NSDictionary;

  readonly supportsUserPresets: boolean;

  currentPreset: AUAudioUnitPreset;

  readonly latency: number;

  readonly tailTime: number;

  renderQuality: number;

  shouldBypassEffect: boolean;

  readonly canProcessInPlace: boolean;

  isRenderingOffline: boolean;

  readonly channelCapabilities: NSArray;

  musicalContextBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible, p5: interop.PointerConvertible, p6: interop.PointerConvertible) => boolean;

  transportStateBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => boolean;

  contextName: string;

  readonly migrateFromPlugin: NSArray;

  readonly supportsMPE: boolean;

  get channelMap(): NSArray;
  set channelMap(value: NSArray<interop.Object> | Array<interop.Object>);

  profileStateForCableChannel(cable: number, channel: number): MIDICIProfileState;

  enableProfileCableOnChannelError(profile: MIDICIProfile, cable: number, channel: number, outError: interop.PointerConvertible): boolean;

  disableProfileCableOnChannelError(profile: MIDICIProfile, cable: number, channel: number, outError: interop.PointerConvertible): boolean;

  profileChangedBlock: (p1: number, p2: number, p3: MIDICIProfile, p4: boolean) => void;

  messageChannelFor(channelName: string): AUMessageChannel;

  readonly canPerformInput: boolean;

  readonly canPerformOutput: boolean;

  isInputEnabled: boolean;

  isOutputEnabled: boolean;

  outputProvider: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number, p5: interop.PointerConvertible) => number;

  inputHandler: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number) => void;

  readonly isRunning: boolean;

  startHardwareAndReturnError(outError: interop.PointerConvertible): boolean;

  stopHardware(): void;

  readonly osWorkgroup: OS_os_workgroup;

  static registerSubclassAsComponentDescriptionNameVersion(cls: interop.Object, componentDescription: AudioComponentDescription, name: string, version: number): void;

  readonly internalRenderBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number, p5: interop.PointerConvertible, p6: interop.PointerConvertible, p7: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: number, p4: number, p5: interop.PointerConvertible) => number) => number;

  readonly renderContextObserver: (p1: interop.PointerConvertible) => void;

  MIDIOutputBufferSizeHint: number;

  shouldChangeToFormatForBus(format: AVAudioFormat, bus: AUAudioUnitBus): boolean;
}

declare class AUAudioUnitV2Bridge extends AUAudioUnit {
  readonly audioUnit: interop.Pointer;
}

declare class AUParameterGroup extends AUParameterNode implements NSSecureCoding {
  readonly children: NSArray;

  readonly allParameters: NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class AUAudioUnitBus extends NSObject {
  readonly format: AVAudioFormat;

  setFormatError(format: AVAudioFormat, outError: interop.PointerConvertible): boolean;

  shouldAllocateBuffer: boolean;

  isEnabled: boolean;

  name: string;

  readonly index: number;

  readonly busType: interop.Enum<typeof AUAudioUnitBusType>;

  readonly ownerAudioUnit: AUAudioUnit;

  readonly supportedChannelLayoutTags: NSArray;

  contextPresentationLatency: number;

  initWithFormatError(format: AVAudioFormat, outError: interop.PointerConvertible): this;

  get supportedChannelCounts(): NSArray;
  set supportedChannelCounts(value: NSArray<interop.Object> | Array<interop.Object>);

  maximumChannelCount: number;
}

