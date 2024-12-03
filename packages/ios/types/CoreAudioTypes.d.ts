/// <reference types="@nativescript/objc-node-api" />

declare const AudioChannelBitmap: {
  Left: 1,
  Right: 2,
  Center: 4,
  LFEScreen: 8,
  LeftSurround: 16,
  RightSurround: 32,
  LeftCenter: 64,
  RightCenter: 128,
  CenterSurround: 256,
  LeftSurroundDirect: 512,
  RightSurroundDirect: 1024,
  TopCenterSurround: 2048,
  VerticalHeightLeft: 4096,
  VerticalHeightCenter: 8192,
  VerticalHeightRight: 16384,
  TopBackLeft: 32768,
  TopBackCenter: 65536,
  TopBackRight: 131072,
  LeftTopFront: 4096,
  CenterTopFront: 8192,
  RightTopFront: 16384,
  LeftTopMiddle: 2097152,
  CenterTopMiddle: 2048,
  RightTopMiddle: 8388608,
  LeftTopRear: 16777216,
  CenterTopRear: 33554432,
  RightTopRear: 67108864,
};

declare const SMPTETimeFlags: {
  Unknown: 0,
  Valid: 1,
  Running: 2,
};

declare const SMPTETimeType: {
  Type24: 0,
  Type25: 1,
  Type30Drop: 2,
  Type30: 3,
  Type2997: 4,
  Type2997Drop: 5,
  Type60: 6,
  Type5994: 7,
  Type60Drop: 8,
  Type5994Drop: 9,
  Type50: 10,
  Type2398: 11,
};

declare const AudioTimeStampFlags: {
  Nothing: 0,
  SampleTime: 1,
  HostTime: 2,
  RateScalar: 4,
  WordClockTime: 8,
  SMPTETime: 16,
  SampleHostTime: 3,
};

declare const AudioChannelFlags: {
  AllOff: 0,
  RectangularCoordinates: 1,
  SphericalCoordinates: 2,
  Meters: 4,
};

declare class AudioChannelDescription {
  constructor(init?: AudioChannelDescription);
  mChannelLabel: number;
  mChannelFlags: interop.Enum<typeof AudioChannelFlags>;
  mCoordinates: unknown /* const array */;
}

declare class AudioStreamBasicDescription {
  constructor(init?: AudioStreamBasicDescription);
  mSampleRate: number;
  mFormatID: number;
  mFormatFlags: number;
  mBytesPerPacket: number;
  mFramesPerPacket: number;
  mBytesPerFrame: number;
  mChannelsPerFrame: number;
  mBitsPerChannel: number;
  mReserved: number;
}

declare class AudioFormatListItem {
  constructor(init?: AudioFormatListItem);
  mASBD: AudioStreamBasicDescription;
  mChannelLayoutTag: number;
}

declare class AudioTimeStamp {
  constructor(init?: AudioTimeStamp);
  mSampleTime: number;
  mHostTime: number;
  mRateScalar: number;
  mWordClockTime: number;
  mSMPTETime: SMPTETime;
  mFlags: interop.Enum<typeof AudioTimeStampFlags>;
  mReserved: number;
}

declare class AudioStreamPacketDescription {
  constructor(init?: AudioStreamPacketDescription);
  mStartOffset: number;
  mVariableFramesInPacket: number;
  mDataByteSize: number;
}

declare class AudioBufferList {
  constructor(init?: AudioBufferList);
  mNumberBuffers: number;
  mBuffers: unknown /* const array */;
}

declare class AudioChannelLayout {
  constructor(init?: AudioChannelLayout);
  mChannelLayoutTag: number;
  mChannelBitmap: interop.Enum<typeof AudioChannelBitmap>;
  mNumberChannelDescriptions: number;
  mChannelDescriptions: unknown /* const array */;
}

declare class AudioBuffer {
  constructor(init?: AudioBuffer);
  mNumberChannels: number;
  mDataByteSize: number;
  mData: interop.Pointer;
}

declare class AudioClassDescription {
  constructor(init?: AudioClassDescription);
  mType: number;
  mSubType: number;
  mManufacturer: number;
}

declare class SMPTETime {
  constructor(init?: SMPTETime);
  mSubframes: number;
  mSubframeDivisor: number;
  mCounter: number;
  mType: interop.Enum<typeof SMPTETimeType>;
  mFlags: interop.Enum<typeof SMPTETimeFlags>;
  mHours: number;
  mMinutes: number;
  mSeconds: number;
  mFrames: number;
}

