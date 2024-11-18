/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const kCLHeadingFilterNone: number;

declare const kCLErrorUserInfoAlternateRegionKey: string;

declare const kCLErrorDomain: string;

declare const kCLLocationCoordinate2DInvalid: CLLocationCoordinate2D;

declare const kCLLocationAccuracyThreeKilometers: number;

declare const kCLLocationAccuracyKilometer: number;

declare const kCLLocationAccuracyHundredMeters: number;

declare const kCLLocationAccuracyNearestTenMeters: number;

declare const kCLLocationAccuracyBest: number;

declare const CLLocationDistanceMax: number;

declare const kCLLocationAccuracyBestForNavigation: number;

declare const kCLLocationAccuracyReduced: number;

declare const CLTimeIntervalMax: number;

declare const kCLDistanceFilterNone: number;

declare const CLServiceSessionAuthorizationRequirement: {
  None: 0,
  WhenInUse: 1,
  Always: 2,
};

declare const CLAccuracyAuthorization: {
  Full: 0,
  Reduced: 1,
};

declare const CLAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  AuthorizedAlways: 3,
  Authorized: 3,
};

declare const CLDeviceOrientation: {
  Unknown: 0,
  Portrait: 1,
  PortraitUpsideDown: 2,
  LandscapeLeft: 3,
  LandscapeRight: 4,
  FaceUp: 5,
  FaceDown: 6,
};

declare const CLMonitoringState: {
  Unknown: 0,
  Satisfied: 1,
  Unsatisfied: 2,
  Unmonitored: 3,
};

declare const CLLiveUpdateConfiguration: {
  Default: 0,
  AutomotiveNavigation: 1,
  OtherNavigation: 2,
  Fitness: 3,
  Airborne: 4,
};

declare const CLRegionState: {
  Unknown: 0,
  Inside: 1,
  Outside: 2,
};

declare const CLError: {
  LocationUnknown: 0,
  Denied: 1,
  Network: 2,
  HeadingFailure: 3,
  RegionMonitoringDenied: 4,
  RegionMonitoringFailure: 5,
  RegionMonitoringSetupDelayed: 6,
  RegionMonitoringResponseDelayed: 7,
  GeocodeFoundNoResult: 8,
  GeocodeFoundPartialResult: 9,
  GeocodeCanceled: 10,
  DeferredFailed: 11,
  DeferredNotUpdatingLocation: 12,
  DeferredAccuracyTooLow: 13,
  DeferredDistanceFiltered: 14,
  DeferredCanceled: 15,
  RangingUnavailable: 16,
  RangingFailure: 17,
  PromptDeclined: 18,
  HistoricalLocationError: 19,
};

declare const CLActivityType: {
  Other: 1,
  AutomotiveNavigation: 2,
  Fitness: 3,
  OtherNavigation: 4,
  Airborne: 5,
};

declare const CLProximity: {
  Unknown: 0,
  Immediate: 1,
  Near: 2,
  Far: 3,
};

declare class CLLocationCoordinate2D {
  constructor(init?: CLLocationCoordinate2D);
  latitude: number;
  longitude: number;
}

declare function CLLocationCoordinate2DIsValid(coord: CLLocationCoordinate2D): boolean;

declare function CLLocationCoordinate2DMake(latitude: number, longitude: number): CLLocationCoordinate2D;

declare interface CLLocationManagerDelegate extends NSObjectProtocol {
  locationManagerDidUpdateToLocationFromLocation?(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

  locationManagerDidUpdateLocations?(manager: CLLocationManager, locations: NSArray<interop.Object> | Array<interop.Object>): void;

  locationManagerDidUpdateHeading?(manager: CLLocationManager, newHeading: CLHeading): void;

  locationManagerShouldDisplayHeadingCalibration?(manager: CLLocationManager): boolean;

  locationManagerDidDetermineStateForRegion?(manager: CLLocationManager, state: interop.Enum<typeof CLRegionState>, region: CLRegion): void;

  locationManagerDidRangeBeaconsInRegion?(manager: CLLocationManager, beacons: NSArray<interop.Object> | Array<interop.Object>, region: CLBeaconRegion): void;

  locationManagerRangingBeaconsDidFailForRegionWithError?(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

  locationManagerDidRangeBeaconsSatisfyingConstraint?(manager: CLLocationManager, beacons: NSArray<interop.Object> | Array<interop.Object>, beaconConstraint: CLBeaconIdentityConstraint): void;

  locationManagerDidFailRangingBeaconsForConstraintError?(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError): void;

  locationManagerDidEnterRegion?(manager: CLLocationManager, region: CLRegion): void;

  locationManagerDidExitRegion?(manager: CLLocationManager, region: CLRegion): void;

  locationManagerDidFailWithError?(manager: CLLocationManager, error: NSError): void;

  locationManagerMonitoringDidFailForRegionWithError?(manager: CLLocationManager, region: CLRegion | null, error: NSError): void;

  locationManagerDidChangeAuthorizationStatus?(manager: CLLocationManager, status: interop.Enum<typeof CLAuthorizationStatus>): void;

  locationManagerDidChangeAuthorization?(manager: CLLocationManager): void;

  locationManagerDidStartMonitoringForRegion?(manager: CLLocationManager, region: CLRegion): void;

  locationManagerDidPauseLocationUpdates?(manager: CLLocationManager): void;

  locationManagerDidResumeLocationUpdates?(manager: CLLocationManager): void;

  locationManagerDidFinishDeferredUpdatesWithError?(manager: CLLocationManager, error: NSError | null): void;

  locationManagerDidVisit?(manager: CLLocationManager, visit: CLVisit): void;
}

declare class CLLocationManagerDelegate extends NativeObject implements CLLocationManagerDelegate {
}

declare class CLVisit extends NSObject implements NSSecureCoding, NSCopying {
  readonly arrivalDate: NSDate;

  readonly departureDate: NSDate;

  readonly coordinate: CLLocationCoordinate2D;

  readonly horizontalAccuracy: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CLLocationManager extends NSObject {
  static locationServicesEnabled(): boolean;

  static headingAvailable(): boolean;

  static significantLocationChangeMonitoringAvailable(): boolean;

  static isMonitoringAvailableForClass(regionClass: interop.Object): boolean;

  static regionMonitoringAvailable(): boolean;

  static regionMonitoringEnabled(): boolean;

  static isRangingAvailable(): boolean;

  readonly authorizationStatus: interop.Enum<typeof CLAuthorizationStatus>;

  static authorizationStatus(): interop.Enum<typeof CLAuthorizationStatus>;

  readonly accuracyAuthorization: interop.Enum<typeof CLAccuracyAuthorization>;

  readonly isAuthorizedForWidgetUpdates: boolean;

  delegate: CLLocationManagerDelegate;

  readonly locationServicesEnabled: boolean;

  purpose: string;

  activityType: interop.Enum<typeof CLActivityType>;

  distanceFilter: number;

  desiredAccuracy: number;

  pausesLocationUpdatesAutomatically: boolean;

  allowsBackgroundLocationUpdates: boolean;

  readonly location: CLLocation;

  readonly headingAvailable: boolean;

  headingFilter: number;

  headingOrientation: interop.Enum<typeof CLDeviceOrientation>;

  readonly heading: CLHeading;

  readonly maximumRegionMonitoringDistance: number;

  readonly monitoredRegions: NSSet;

  readonly rangedRegions: NSSet;

  readonly rangedBeaconConstraints: NSSet;

  requestWhenInUseAuthorization(): void;

  requestAlwaysAuthorization(): void;

  requestTemporaryFullAccuracyAuthorizationWithPurposeKeyCompletion(purposeKey: string, completion: (p1: NSError) => void | null): void;

  requestTemporaryFullAccuracyAuthorizationWithPurposeKey(purposeKey: string): void;

  startUpdatingLocation(): void;

  stopUpdatingLocation(): void;

  requestLocation(): void;

  startUpdatingHeading(): void;

  dismissHeadingCalibrationDisplay(): void;

  startMonitoringSignificantLocationChanges(): void;

  stopMonitoringSignificantLocationChanges(): void;

  startMonitoringForRegionDesiredAccuracy(region: CLRegion, accuracy: number): void;

  stopMonitoringForRegion(region: CLRegion): void;

  startMonitoringForRegion(region: CLRegion): void;

  requestStateForRegion(region: CLRegion): void;

  startRangingBeaconsInRegion(region: CLBeaconRegion): void;

  stopRangingBeaconsInRegion(region: CLBeaconRegion): void;

  startRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint): void;

  stopRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint): void;

  allowDeferredLocationUpdatesUntilTraveledTimeout(distance: number, timeout: number): void;

  disallowDeferredLocationUpdates(): void;

  static deferredLocationUpdatesAvailable(): boolean;

  startMonitoringVisits(): void;

  stopMonitoringVisits(): void;
}

declare class CLMonitor extends NSObject {
  static requestMonitorWithConfigurationCompletion(config: CLMonitorConfiguration, completionHandler: (p1: CLMonitor) => void): void;

  readonly name: string;

  readonly monitoredIdentifiers: NSArray;

  addConditionForMonitoringIdentifier(condition: CLCondition, identifier: string): void;

  addConditionForMonitoringIdentifierAssumedState(condition: CLCondition, identifier: string, state: interop.Enum<typeof CLMonitoringState>): void;

  removeConditionFromMonitoringWithIdentifier(identifier: string): void;

  monitoringRecordForIdentifier(identifier: string): CLMonitoringRecord;
}

declare class CLMonitorConfiguration extends NSObject {
  readonly name: string;

  readonly queue: NSObject;

  readonly eventHandler: (p1: CLMonitor, p2: CLMonitoringEvent) => void;

  static configWithMonitorNameQueueEventHandler(name: string, queue: NSObject, eventHandler: (p1: CLMonitor, p2: CLMonitoringEvent) => void): CLMonitorConfiguration;
}

declare class CLMonitoringRecord extends NSObject implements NSSecureCoding {
  readonly condition: CLCondition;

  readonly lastEvent: CLMonitoringEvent;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLLocationUpdater extends NSObject {
  static liveUpdaterWithQueueHandler<This extends abstract new (...args: any) => any>(this: This, queue: NSObject, handler: (p1: CLUpdate) => void | null): InstanceType<This>;

  static liveUpdaterWithConfigurationQueueHandler<This extends abstract new (...args: any) => any>(this: This, configuration: interop.Enum<typeof CLLiveUpdateConfiguration>, queue: NSObject, handler: (p1: CLUpdate) => void | null): InstanceType<This>;

  resume(): void;

  pause(): void;

  invalidate(): void;
}

declare class CLUpdate extends NSObject {
  readonly authorizationDenied: boolean;

  readonly authorizationDeniedGlobally: boolean;

  readonly authorizationRestricted: boolean;

  readonly isStationary: boolean;

  readonly stationary: boolean;

  readonly insufficientlyInUse: boolean;

  readonly locationUnavailable: boolean;

  readonly accuracyLimited: boolean;

  readonly serviceSessionRequired: boolean;

  readonly authorizationRequestInProgress: boolean;

  readonly location: CLLocation | null;
}

declare class CLHeading extends NSObject implements NSCopying, NSSecureCoding {
  readonly magneticHeading: number;

  readonly trueHeading: number;

  readonly headingAccuracy: number;

  readonly x: number;

  readonly y: number;

  readonly z: number;

  readonly timestamp: NSDate;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLBeacon extends NSObject implements NSCopying, NSSecureCoding {
  readonly timestamp: NSDate;

  readonly UUID: NSUUID;

  readonly proximityUUID: NSUUID;

  readonly major: NSNumber;

  readonly minor: NSNumber;

  readonly proximity: interop.Enum<typeof CLProximity>;

  readonly accuracy: number;

  readonly rssi: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLBeaconRegion extends CLRegion {
  initWithUUIDIdentifier(uuid: NSUUID, identifier: string): this;

  initWithProximityUUIDIdentifier(proximityUUID: NSUUID, identifier: string): this;

  initWithUUIDMajorIdentifier(uuid: NSUUID, major: number, identifier: string): this;

  initWithProximityUUIDMajorIdentifier(proximityUUID: NSUUID, major: number, identifier: string): this;

  initWithUUIDMajorMinorIdentifier(uuid: NSUUID, major: number, minor: number, identifier: string): this;

  initWithProximityUUIDMajorMinorIdentifier(proximityUUID: NSUUID, major: number, minor: number, identifier: string): this;

  initWithBeaconIdentityConstraintIdentifier(beaconIdentityConstraint: CLBeaconIdentityConstraint, identifier: string): this;

  peripheralDataWithMeasuredPower(measuredPower: NSNumber | null): NSMutableDictionary;

  readonly beaconIdentityConstraint: CLBeaconIdentityConstraint;

  readonly UUID: NSUUID;

  readonly proximityUUID: NSUUID;

  readonly major: NSNumber;

  readonly minor: NSNumber;

  notifyEntryStateOnDisplay: boolean;
}

declare class CLBeaconIdentityConstraint extends CLBeaconIdentityCondition implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLBeaconIdentityCondition extends CLCondition implements NSCopying, NSSecureCoding {
  readonly UUID: NSUUID;

  readonly major: NSNumber;

  readonly minor: NSNumber;

  initWithUUID(uuid: NSUUID): this;

  initWithUUIDMajor(uuid: NSUUID, major: number): this;

  initWithUUIDMajorMinor(uuid: NSUUID, major: number, minor: number): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLCircularGeographicCondition extends CLCondition implements NSSecureCoding {
  readonly center: CLLocationCoordinate2D;

  readonly radius: number;

  initWithCenterRadius(center: CLLocationCoordinate2D, radius: number): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLCircularRegion extends CLRegion {
  initWithCenterRadiusIdentifier(center: CLLocationCoordinate2D, radius: number, identifier: string): this;

  readonly center: CLLocationCoordinate2D;

  readonly radius: number;

  containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;
}

declare class CLCondition extends NSObject implements NSSecureCoding, NSCopying {
  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CLRegion extends NSObject implements NSCopying, NSSecureCoding {
  initCircularRegionWithCenterRadiusIdentifier(center: CLLocationCoordinate2D, radius: number, identifier: string): this;

  readonly center: CLLocationCoordinate2D;

  readonly radius: number;

  readonly identifier: string;

  notifyOnEntry: boolean;

  notifyOnExit: boolean;

  containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLPlacemark extends NSObject implements NSCopying, NSSecureCoding {
  initWithPlacemark(placemark: CLPlacemark): this;

  readonly location: CLLocation;

  readonly region: CLRegion;

  readonly timeZone: NSTimeZone;

  readonly addressDictionary: NSDictionary;

  readonly name: string;

  readonly thoroughfare: string;

  readonly subThoroughfare: string;

  readonly locality: string;

  readonly subLocality: string;

  readonly administrativeArea: string;

  readonly subAdministrativeArea: string;

  readonly postalCode: string;

  readonly ISOcountryCode: string;

  readonly country: string;

  readonly inlandWater: string;

  readonly ocean: string;

  readonly areasOfInterest: NSArray;

  readonly postalAddress: CNPostalAddress;

  static placemarkWithLocationNamePostalAddress<This extends abstract new (...args: any) => any>(this: This, location: CLLocation, name: string | null, postalAddress: CNPostalAddress | null): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLFloor extends NSObject implements NSCopying, NSSecureCoding {
  readonly level: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLLocation extends NSObject implements NSCopying, NSSecureCoding {
  initWithLatitudeLongitude(latitude: number, longitude: number): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, timestamp: NSDate): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseSpeedTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, speed: number, timestamp: NSDate): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseCourseAccuracySpeedSpeedAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: NSDate): this;

  initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseCourseAccuracySpeedSpeedAccuracyTimestampSourceInfo(coordinate: CLLocationCoordinate2D, altitude: number, hAccuracy: number, vAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: NSDate, sourceInfo: CLLocationSourceInformation): this;

  readonly coordinate: CLLocationCoordinate2D;

  readonly altitude: number;

  readonly ellipsoidalAltitude: number;

  readonly horizontalAccuracy: number;

  readonly verticalAccuracy: number;

  readonly course: number;

  readonly courseAccuracy: number;

  readonly speed: number;

  readonly speedAccuracy: number;

  readonly timestamp: NSDate;

  readonly floor: CLFloor;

  readonly sourceInformation: CLLocationSourceInformation;

  getDistanceFrom(location: CLLocation): number;

  distanceFromLocation(location: CLLocation): number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLGeocoder extends NSObject {
  readonly isGeocoding: boolean;

  reverseGeocodeLocationCompletionHandler(location: CLLocation, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  reverseGeocodeLocationPreferredLocaleCompletionHandler(location: CLLocation, locale: NSLocale | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressDictionaryCompletionHandler(addressDictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressStringInRegionCompletionHandler(addressString: string, region: CLRegion | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressStringInRegionPreferredLocaleCompletionHandler(addressString: string, region: CLRegion | null, locale: NSLocale | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodeAddressStringCompletionHandler(addressString: string, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  cancelGeocode(): void;

  geocodePostalAddressCompletionHandler(postalAddress: CNPostalAddress, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;

  geocodePostalAddressPreferredLocaleCompletionHandler(postalAddress: CNPostalAddress, locale: NSLocale | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void): void;
}

declare class CLLocationSourceInformation extends NSObject implements NSCopying, NSSecureCoding {
  initWithSoftwareSimulationStateAndExternalAccessoryState(isSoftware: boolean, isAccessory: boolean): this;

  readonly isSimulatedBySoftware: boolean;

  readonly isProducedByAccessory: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CLMonitoringEvent extends NSObject implements NSSecureCoding {
  readonly identifier: string;

  readonly refinement: CLCondition | null;

  readonly state: interop.Enum<typeof CLMonitoringState>;

  readonly date: NSDate;

  readonly authorizationDenied: boolean;

  readonly authorizationDeniedGlobally: boolean;

  readonly authorizationRestricted: boolean;

  readonly insufficientlyInUse: boolean;

  readonly accuracyLimited: boolean;

  readonly conditionUnsupported: boolean;

  readonly conditionLimitExceeded: boolean;

  readonly persistenceUnavailable: boolean;

  readonly serviceSessionRequired: boolean;

  readonly authorizationRequestInProgress: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

