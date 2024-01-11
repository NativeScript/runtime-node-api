/// <reference path="../../lib/types.d.ts" />

declare class CVSMPTETime {
  constructor(init?: CVSMPTETime);
  subframes: number;
  subframeDivisor: number;
  counter: number;
  type: number;
  flags: number;
  hours: number;
  minutes: number;
  seconds: number;
  frames: number;
}

declare class __CVBuffer {
  constructor(init?: __CVBuffer);
}

declare class CVTimeStamp {
  constructor(init?: CVTimeStamp);
  version: number;
  videoTimeScale: number;
  videoTime: number;
  hostTime: number;
  rateScalar: number;
  videoRefreshPeriod: number;
  smpteTime: CVSMPTETime;
  flags: number;
  reserved: number;
}

