/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const CMErrorDomain: string;

declare const CMWaterSubmersionState: {
  Unknown: 0,
  NotSubmerged: 1,
  Submerged: 2,
};

declare const CMMotionActivityConfidence: {
  Low: 0,
  Medium: 1,
  High: 2,
};

declare const CMFallDetectionEventUserResolution: {
  Confirmed: 0,
  Dismissed: 1,
  Rejected: 2,
  Unresponsive: 3,
};

declare const CMError: {
  NULL: 100,
  DeviceRequiresMovement: 101,
  TrueNorthNotAvailable: 102,
  Unknown: 103,
  MotionActivityNotAvailable: 104,
  MotionActivityNotAuthorized: 105,
  MotionActivityNotEntitled: 106,
  InvalidParameter: 107,
  InvalidAction: 108,
  NotAvailable: 109,
  NotEntitled: 110,
  NotAuthorized: 111,
  NilData: 112,
  Size: 113,
};

declare const CMMagneticFieldCalibrationAccuracy: {
  Uncalibrated: -1,
  Low: 0,
  Medium: 1,
  High: 2,
};

declare const CMDeviceMotionSensorLocation: {
  Default: 0,
  HeadphoneLeft: 1,
  HeadphoneRight: 2,
};

declare const CMOdometerOriginDevice: {
  Unknown: 0,
  Local: 1,
  Remote: 2,
};

declare const CMAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  Authorized: 3,
};

declare const CMAttitudeReferenceFrame: {
  Arbitrary: 1,
  ArbitraryCorrected: 2,
  MagneticNorth: 4,
  TrueNorth: 8,
};

declare const CMWaterSubmersionDepthState: {
  Unknown: 0,
  NotSubmerged: 100,
  SubmergedShallow: 200,
  SubmergedDeep: 300,
  ApproachingMaxDepth: 400,
  PastMaxDepth: 500,
  SensorDepthError: 600,
};

declare const CMPedometerEventType: {
  Pause: 0,
  Resume: 1,
};

declare const CMHeadphoneActivityStatus: {
  Disconnected: 0,
  Connected: 1,
};

declare class CMQuaternion {
  constructor(init?: CMQuaternion);
  x: number;
  y: number;
  z: number;
  w: number;
}

declare class CMRotationRate {
  constructor(init?: CMRotationRate);
  x: number;
  y: number;
  z: number;
}

declare class CMAcceleration {
  constructor(init?: CMAcceleration);
  x: number;
  y: number;
  z: number;
}

declare class CMCalibratedMagneticField {
  constructor(init?: CMCalibratedMagneticField);
  field: CMMagneticField;
  accuracy: interop.Enum<typeof CMMagneticFieldCalibrationAccuracy>;
}

declare class CMRotationMatrix {
  constructor(init?: CMRotationMatrix);
  m11: number;
  m12: number;
  m13: number;
  m21: number;
  m22: number;
  m23: number;
  m31: number;
  m32: number;
  m33: number;
}

declare class CMMagneticField {
  constructor(init?: CMMagneticField);
  x: number;
  y: number;
  z: number;
}

declare interface CMHeadphoneMotionManagerDelegate extends NSObjectProtocol {
  headphoneMotionManagerDidConnect?(manager: CMHeadphoneMotionManager): void;

  headphoneMotionManagerDidDisconnect?(manager: CMHeadphoneMotionManager): void;
}

declare class CMHeadphoneMotionManagerDelegate extends NativeObject implements CMHeadphoneMotionManagerDelegate {
}

declare class CMRotationRateData extends CMLogItem {
  readonly rotationRate: CMRotationRate;
}

declare class CMPedometerEvent extends NSObject implements NSSecureCoding, NSCopying {
  readonly date: NSDate;

  readonly type: interop.Enum<typeof CMPedometerEventType>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CMMotionActivity extends CMLogItem {
  readonly confidence: interop.Enum<typeof CMMotionActivityConfidence>;

  readonly startDate: NSDate;

  readonly unknown: boolean;

  readonly stationary: boolean;

  readonly walking: boolean;

  readonly running: boolean;

  readonly automotive: boolean;
}

declare class CMGyroData extends CMLogItem {
  readonly rotationRate: CMRotationRate;
}

declare class CMAttitude extends NSObject implements NSCopying, NSSecureCoding {
  readonly roll: number;

  readonly pitch: number;

  readonly yaw: number;

  readonly rotationMatrix: CMRotationMatrix;

  readonly quaternion: CMQuaternion;

  multiplyByInverseOfAttitude(attitude: CMAttitude): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CMRecordedRotationRateData extends CMRotationRateData {
  readonly startDate: NSDate;
}

declare class CMAmbientPressureData extends CMLogItem {
  readonly pressure: NSMeasurement;

  readonly temperature: NSMeasurement;
}

declare class CMHeadphoneActivityManager extends NSObject {
  static authorizationStatus(): interop.Enum<typeof CMAuthorizationStatus>;

  readonly isActivityAvailable: boolean;

  readonly isActivityActive: boolean;

  readonly isStatusAvailable: boolean;

  readonly isStatusActive: boolean;

  startActivityUpdatesToQueueWithHandler(queue: NSOperationQueue, handler: (p1: CMMotionActivity, p2: NSError) => void): void;

  stopActivityUpdates(): void;

  startStatusUpdatesToQueueWithHandler(queue: NSOperationQueue, handler: (p1: interop.Enum<typeof CMHeadphoneActivityStatus>, p2: NSError) => void): void;

  stopStatusUpdates(): void;
}

declare class CMLogItem extends NSObject implements NSSecureCoding, NSCopying {
  readonly timestamp: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CMHeadphoneMotionManager extends NSObject {
  static authorizationStatus(): interop.Enum<typeof CMAuthorizationStatus>;

  delegate: CMHeadphoneMotionManagerDelegate;

  readonly isConnectionStatusActive: boolean;

  readonly isDeviceMotionAvailable: boolean;

  readonly isDeviceMotionActive: boolean;

  readonly deviceMotion: CMDeviceMotion;

  startDeviceMotionUpdates(): void;

  startDeviceMotionUpdatesToQueueWithHandler(queue: NSOperationQueue, handler: (p1: CMDeviceMotion, p2: NSError) => void): void;

  stopDeviceMotionUpdates(): void;

  startConnectionStatusUpdates(): void;

  stopConnectionStatusUpdates(): void;
}

declare class CMMagnetometerData extends CMLogItem {
  readonly magneticField: CMMagneticField;
}

declare class CMDeviceMotion extends CMLogItem {
  readonly attitude: CMAttitude;

  readonly rotationRate: CMRotationRate;

  readonly gravity: CMAcceleration;

  readonly userAcceleration: CMAcceleration;

  readonly magneticField: CMCalibratedMagneticField;

  readonly heading: number;

  readonly sensorLocation: interop.Enum<typeof CMDeviceMotionSensorLocation>;
}

declare class CMPedometer extends NSObject {
  static isStepCountingAvailable(): boolean;

  static isDistanceAvailable(): boolean;

  static isFloorCountingAvailable(): boolean;

  static isPaceAvailable(): boolean;

  queryPedometerDataFromDateToDateWithHandler(start: NSDate, end: NSDate, handler: (p1: CMPedometerData, p2: NSError) => void): void;

  startPedometerUpdatesFromDateWithHandler(start: NSDate, handler: (p1: CMPedometerData, p2: NSError) => void): void;

  stopPedometerUpdates(): void;
}

declare class CMOdometerData extends NSObject implements NSSecureCoding, NSCopying {
  readonly startDate: NSDate;

  readonly endDate: NSDate;

  readonly deltaDistance: number;

  readonly deltaDistanceAccuracy: number;

  readonly speed: number;

  readonly speedAccuracy: number;

  readonly gpsDate: NSDate;

  readonly deltaAltitude: number;

  readonly verticalAccuracy: number;

  readonly originDevice: interop.Enum<typeof CMOdometerOriginDevice>;

  readonly slope: NSNumber;

  readonly maxAbsSlope: NSNumber;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CMAccelerometerData extends CMLogItem {
  readonly acceleration: CMAcceleration;
}

declare class CMPedometerData extends NSObject implements NSSecureCoding, NSCopying {
  readonly startDate: NSDate;

  readonly endDate: NSDate;

  readonly numberOfSteps: NSNumber;

  readonly distance: NSNumber;

  readonly floorsAscended: NSNumber;

  readonly floorsDescended: NSNumber;

  readonly currentPace: NSNumber;

  readonly currentCadence: NSNumber;

  readonly averageActivePace: NSNumber;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

