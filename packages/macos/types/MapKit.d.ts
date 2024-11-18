/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Foundation.d.ts" />
/// <reference path="./CoreLocation.d.ts" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./AppKit.d.ts" />

declare const MKPointsOfInterestRequestMaxRadius: number;

declare const MKMapViewDefaultClusterAnnotationViewReuseIdentifier: string;

declare const MKMapViewDefaultAnnotationViewReuseIdentifier: string;

declare const MKErrorDomain: string;

declare const MKAnnotationViewZPriorityDefaultUnselected: number;

declare const MKFeatureDisplayPriorityDefaultLow: number;

declare const MKFeatureDisplayPriorityDefaultHigh: number;

declare const MKFeatureDisplayPriorityRequired: number;

declare const MKAnnotationCalloutInfoDidChangeNotification: string;

declare const MKMapItemTypeIdentifier: string;

declare const MKLaunchOptionsMapSpanKey: string;

declare const MKLaunchOptionsDirectionsModeWalking: string;

declare const MKLaunchOptionsDirectionsModeDriving: string;

declare const MKLaunchOptionsDirectionsModeDefault: string;

declare const MKLaunchOptionsDirectionsModeKey: string;

declare const MKPointOfInterestCategoryWinery: string;

declare const MKPointOfInterestCategoryUniversity: string;

declare const MKPointOfInterestCategoryTennis: string;

declare const MKPointOfInterestCategoryStore: string;

declare const MKPointOfInterestCategorySpa: string;

declare const MKPointOfInterestCategorySkating: string;

declare const MKPointOfInterestCategorySkatePark: string;

declare const MKPointOfInterestCategorySchool: string;

declare const MKPointOfInterestCategoryRVPark: string;

declare const MKPointOfInterestCategoryRockClimbing: string;

declare const MKPointOfInterestCategoryRestroom: string;

declare const MKPointOfInterestCategoryRestaurant: string;

declare const MKPointOfInterestCategoryPlanetarium: string;

declare const MKPointOfInterestCategoryParking: string;

declare const MKPointOfInterestCategoryNationalMonument: string;

declare const MKPointOfInterestCategoryMusicVenue: string;

declare const MKPointOfInterestCategoryMuseum: string;

declare const MKPointOfInterestCategoryMiniGolf: string;

declare const MKPointOfInterestCategoryMarina: string;

declare const MKPointOfInterestCategoryMailbox: string;

declare const MKPointOfInterestCategoryLandmark: string;

declare const MKPointOfInterestCategoryKayaking: string;

declare const MKPointOfInterestCategoryHospital: string;

declare const MKPointOfInterestCategoryHiking: string;

declare const MKPointOfInterestCategoryGolf: string;

declare const MKPointOfInterestCategoryGasStation: string;

declare const MKPointOfInterestCategoryFoodMarket: string;

declare const MKPointOfInterestCategoryFitnessCenter: string;

declare const MKPointOfInterestCategoryEVCharger: string;

declare const MKPointOfInterestCategoryConventionCenter: string;

declare const MKPointOfInterestCategoryCastle: string;

declare const MKPointOfInterestCategoryCampground: string;

declare const MKPointOfInterestCategoryBrewery: string;

declare const MKPointOfInterestCategoryBowling: string;

declare const MKPointOfInterestCategoryBeauty: string;

declare const MKPointOfInterestCategoryBasketball: string;

declare const MKPointOfInterestCategoryBaseball: string;

declare const MKPointOfInterestCategoryBakery: string;

declare const MKPointOfInterestCategoryAquarium: string;

declare const MKPointOfInterestCategoryAirport: string;

declare const MKPointOfInterestCategoryAnimalService: string;

declare const MKMapRectNull: MKMapRect;

declare const MKMapRectWorld: MKMapRect;

declare const MKMapSizeWorld: MKMapSize;

declare const MKPointOfInterestCategoryMovieTheater: string;

declare const MKPointOfInterestCategoryPolice: string;

declare const MKPointOfInterestCategoryFishing: string;

declare const MKMapCameraZoomDefault: number;

declare const MKPointOfInterestCategoryNightlife: string;

declare const MKPointOfInterestCategoryGoKart: string;

declare const MKLaunchOptionsDirectionsModeTransit: string;

declare const MKPointOfInterestCategoryPark: string;

declare const MKPointOfInterestCategoryPharmacy: string;

declare const MKLaunchOptionsMapTypeKey: string;

declare const MKPointOfInterestCategoryPostOffice: string;

declare const MKPointOfInterestCategoryLaundry: string;

declare const MKPointOfInterestCategoryCafe: string;

declare const MKPointOfInterestCategoryCarRental: string;

declare const MKPointOfInterestCategoryHotel: string;

declare const MKPointOfInterestCategoryDistillery: string;

declare const MKPointOfInterestCategoryNationalPark: string;

declare const MKLaunchOptionsShowsTrafficKey: string;

declare const MKPointOfInterestCategorySurfing: string;

declare const MKPointOfInterestCategorySwimming: string;

declare const MKPointOfInterestCategoryFireStation: string;

declare const MKPointOfInterestCategoryFairground: string;

declare const MKPointOfInterestCategoryVolleyball: string;

declare const MKPointOfInterestCategoryLibrary: string;

declare const MKPointOfInterestCategoryFortress: string;

declare const MKLaunchOptionsMapCenterKey: string;

declare const MKPointOfInterestCategoryBank: string;

declare const MKAnnotationViewZPriorityMin: number;

declare const MKPointOfInterestCategoryTheater: string;

declare const MKPointOfInterestCategoryATM: string;

declare const MKPointOfInterestCategorySoccer: string;

declare const MKAnnotationViewZPriorityDefaultSelected: number;

declare const MKPointOfInterestCategoryPublicTransport: string;

declare const MKPointOfInterestCategorySkiing: string;

declare const MKLaunchOptionsCameraKey: string;

declare const MKPointOfInterestCategoryStadium: string;

declare const MKPointOfInterestCategoryBeach: string;

declare const MKPointOfInterestCategoryAmusementPark: string;

declare const MKPointOfInterestCategoryAutomotiveRepair: string;

declare const MKPointOfInterestCategoryZoo: string;

declare const MKAnnotationViewZPriorityMax: number;

declare const MKDirectionsRoutePreference: {
  Any: 0,
  Avoid: 1,
};

declare const MKDirectionsTransportType: {
  Automobile: 1,
  Walking: 2,
  Transit: 4,
  Any: 268435455,
};

declare const MKLocalSearchCompleterResultType: {
  Address: 1,
  PointOfInterest: 2,
  Query: 4,
  PhysicalFeature: 8,
};

declare const MKUserTrackingMode: {
  None: 0,
  Follow: 1,
};

declare const MKOverlayLevel: {
  Roads: 0,
  Labels: 1,
};

declare const MKMapItemDetailSelectionAccessoryCalloutStyle: {
  Automatic: 0,
  Full: 1,
  Compact: 2,
};

declare const MKFeatureVisibility: {
  Adaptive: 0,
  Hidden: 1,
  Visible: 2,
};

declare const MKErrorCode: {
  Unknown: 1,
  ServerFailure: 2,
  LoadingThrottled: 3,
  PlacemarkNotFound: 4,
  DirectionsNotFound: 5,
  DecodingFailed: 6,
};

declare const MKAnnotationViewCollisionMode: {
  Rectangle: 0,
  Circle: 1,
  None: 2,
};

declare const MKAnnotationViewDragState: {
  None: 0,
  Starting: 1,
  Dragging: 2,
  Canceling: 3,
  Ending: 4,
};

declare const MKAddressFilterOption: {
  Country: 1,
  AdministrativeArea: 2,
  SubAdministrativeArea: 4,
  Locality: 8,
  SubLocality: 16,
  PostalCode: 32,
};

declare const MKDistanceFormatterUnitStyle: {
  Default: 0,
  Abbreviated: 1,
  Full: 2,
};

declare const MKDistanceFormatterUnits: {
  Default: 0,
  Metric: 1,
  Imperial: 2,
  ImperialWithYards: 3,
};

declare const MKPinAnnotationColor: {
  Red: 0,
  Green: 1,
  Purple: 2,
};

declare const MKStandardMapEmphasisStyle: {
  Default: 0,
  Muted: 1,
};

declare const MKLocalSearchRegionPriority: {
  Default: 0,
  Required: 1,
};

declare const MKMapType: {
  Standard: 0,
  Satellite: 1,
  Hybrid: 2,
  SatelliteFlyover: 3,
  HybridFlyover: 4,
  MutedStandard: 5,
};

declare const MKSearchCompletionFilterType: {
  AndQueries: 0,
  Only: 1,
};

declare const MKLocalSearchResultType: {
  Address: 1,
  PointOfInterest: 2,
  PhysicalFeature: 4,
};

declare const MKMapElevationStyle: {
  Flat: 0,
  Realistic: 1,
};

declare const MKLookAroundBadgePosition: {
  TopLeading: 0,
  TopTrailing: 1,
  BottomTrailing: 2,
};

declare class MKMapSize {
  constructor(init?: MKMapSize);
  width: number;
  height: number;
}

declare class MKMapPoint {
  constructor(init?: MKMapPoint);
  x: number;
  y: number;
}

declare class MKCoordinateSpan {
  constructor(init?: MKCoordinateSpan);
  latitudeDelta: number;
  longitudeDelta: number;
}

declare class MKCoordinateRegion {
  constructor(init?: MKCoordinateRegion);
  center: CLLocationCoordinate2D;
  span: MKCoordinateSpan;
}

declare class MKMapRect {
  constructor(init?: MKMapRect);
  origin: MKMapPoint;
  size: MKMapSize;
}

declare class MKTileOverlayPath {
  constructor(init?: MKTileOverlayPath);
  x: number;
  y: number;
  z: number;
  contentScaleFactor: number;
}

declare function MKCoordinateRegionMakeWithDistance(centerCoordinate: CLLocationCoordinate2D, latitudinalMeters: number, longitudinalMeters: number): MKCoordinateRegion;

declare function MKMapPointForCoordinate(coordinate: CLLocationCoordinate2D): MKMapPoint;

declare function MKCoordinateForMapPoint(mapPoint: MKMapPoint): CLLocationCoordinate2D;

declare function MKMetersPerMapPointAtLatitude(latitude: number): number;

declare function MKMapPointsPerMeterAtLatitude(latitude: number): number;

declare function MKMetersBetweenMapPoints(a: MKMapPoint, b: MKMapPoint): number;

declare function MKMapRectUnion(rect1: MKMapRect, rect2: MKMapRect): MKMapRect;

declare function MKMapRectIntersection(rect1: MKMapRect, rect2: MKMapRect): MKMapRect;

declare function MKMapRectInset(rect: MKMapRect, dx: number, dy: number): MKMapRect;

declare function MKMapRectOffset(rect: MKMapRect, dx: number, dy: number): MKMapRect;

declare function MKMapRectDivide(rect: MKMapRect, slice: interop.PointerConvertible, remainder: interop.PointerConvertible, amount: number, edge: interop.Enum<typeof CGRectEdge>): void;

declare function MKMapRectContainsPoint(rect: MKMapRect, point: MKMapPoint): boolean;

declare function MKMapRectContainsRect(rect1: MKMapRect, rect2: MKMapRect): boolean;

declare function MKMapRectIntersectsRect(rect1: MKMapRect, rect2: MKMapRect): boolean;

declare function MKCoordinateRegionForMapRect(rect: MKMapRect): MKCoordinateRegion;

declare function MKMapRectSpans180thMeridian(rect: MKMapRect): boolean;

declare function MKMapRectRemainder(rect: MKMapRect): MKMapRect;

declare function MKRoadWidthAtZoomScale(zoomScale: number): number;

declare interface MKMapItemDetailViewControllerDelegate extends NSObjectProtocol {
  mapItemDetailViewControllerDidFinish(detailViewController: MKMapItemDetailViewController): void;
}

declare class MKMapItemDetailViewControllerDelegate extends NativeObject implements MKMapItemDetailViewControllerDelegate {
}

declare interface MKLookAroundViewControllerDelegate extends NSObjectProtocol {
  lookAroundViewControllerWillUpdateScene?(viewController: MKLookAroundViewController): void;

  lookAroundViewControllerDidUpdateScene?(viewController: MKLookAroundViewController): void;

  lookAroundViewControllerWillPresentFullScreen?(viewController: MKLookAroundViewController): void;

  lookAroundViewControllerDidPresentFullScreen?(viewController: MKLookAroundViewController): void;

  lookAroundViewControllerWillDismissFullScreen?(viewController: MKLookAroundViewController): void;

  lookAroundViewControllerDidDismissFullScreen?(viewController: MKLookAroundViewController): void;
}

declare class MKLookAroundViewControllerDelegate extends NativeObject implements MKLookAroundViewControllerDelegate {
}

declare interface MKGeoJSONObject extends NSObjectProtocol {
}

declare class MKGeoJSONObject extends NativeObject implements MKGeoJSONObject {
}

declare interface MKLocalSearchCompleterDelegate extends NSObjectProtocol {
  completerDidUpdateResults?(completer: MKLocalSearchCompleter): void;

  completerDidFailWithError?(completer: MKLocalSearchCompleter, error: NSError): void;
}

declare class MKLocalSearchCompleterDelegate extends NativeObject implements MKLocalSearchCompleterDelegate {
}

declare interface MKMapViewDelegate extends NSObjectProtocol {
  mapViewRegionWillChangeAnimated?(mapView: MKMapView, animated: boolean): void;

  mapViewRegionDidChangeAnimated?(mapView: MKMapView, animated: boolean): void;

  mapViewDidChangeVisibleRegion?(mapView: MKMapView): void;

  mapViewWillStartLoadingMap?(mapView: MKMapView): void;

  mapViewDidFinishLoadingMap?(mapView: MKMapView): void;

  mapViewDidFailLoadingMapWithError?(mapView: MKMapView, error: NSError): void;

  mapViewWillStartRenderingMap?(mapView: MKMapView): void;

  mapViewDidFinishRenderingMapFullyRendered?(mapView: MKMapView, fullyRendered: boolean): void;

  mapViewViewForAnnotation?(mapView: MKMapView, annotation: MKAnnotation): MKAnnotationView;

  mapViewDidAddAnnotationViews?(mapView: MKMapView, views: NSArray<interop.Object> | Array<interop.Object>): void;

  mapViewDidSelectAnnotationView?(mapView: MKMapView, view: MKAnnotationView): void;

  mapViewDidDeselectAnnotationView?(mapView: MKMapView, view: MKAnnotationView): void;

  mapViewSelectionAccessoryForAnnotation?(mapView: MKMapView, annotation: MKAnnotation): MKSelectionAccessory;

  mapViewWillStartLocatingUser?(mapView: MKMapView): void;

  mapViewDidStopLocatingUser?(mapView: MKMapView): void;

  mapViewDidUpdateUserLocation?(mapView: MKMapView, userLocation: MKUserLocation): void;

  mapViewDidFailToLocateUserWithError?(mapView: MKMapView, error: NSError): void;

  mapViewAnnotationViewDidChangeDragStateFromOldState?(mapView: MKMapView, view: MKAnnotationView, newState: interop.Enum<typeof MKAnnotationViewDragState>, oldState: interop.Enum<typeof MKAnnotationViewDragState>): void;

  mapViewDidChangeUserTrackingModeAnimated?(mapView: MKMapView, mode: interop.Enum<typeof MKUserTrackingMode>, animated: boolean): void;

  mapViewRendererForOverlay?(mapView: MKMapView, overlay: MKOverlay): MKOverlayRenderer;

  mapViewDidAddOverlayRenderers?(mapView: MKMapView, renderers: NSArray<interop.Object> | Array<interop.Object>): void;

  mapViewClusterAnnotationForMemberAnnotations?(mapView: MKMapView, memberAnnotations: NSArray<interop.Object> | Array<interop.Object>): MKClusterAnnotation;
}

declare class MKMapViewDelegate extends NativeObject implements MKMapViewDelegate {
}

declare interface MKAnnotation extends NSObjectProtocol {
  readonly coordinate: CLLocationCoordinate2D;

  readonly title?: string;

  readonly subtitle?: string;
}

declare class MKAnnotation extends NativeObject implements MKAnnotation {
}

declare interface MKOverlay extends MKAnnotation {
  readonly coordinate: CLLocationCoordinate2D;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect?(mapRect: MKMapRect): boolean;

  canReplaceMapContent?: boolean;
}

declare class MKOverlay extends NativeObject implements MKOverlay {
}

declare class MKMapItemRequest extends NSObject {
  initWithMapItemIdentifier(identifier: MKMapItemIdentifier): this;

  getMapItemWithCompletionHandler(completionHandler: (p1: MKMapItem, p2: NSError) => void | null): void;

  cancel(): void;

  readonly mapItemIdentifier: MKMapItemIdentifier;

  readonly isCancelled: boolean;

  readonly isLoading: boolean;
}

declare class MKLookAroundSnapshotter extends NSObject {
  initWithSceneOptions(scene: MKLookAroundScene, options: MKLookAroundSnapshotOptions): this;

  getSnapshotWithCompletionHandler(completionHandler: (p1: MKLookAroundSnapshot, p2: NSError) => void | null): void;

  cancel(): void;

  readonly isLoading: boolean;
}

declare class MKLookAroundSceneRequest extends NSObject {
  initWithCoordinate(coordinate: CLLocationCoordinate2D): this;

  initWithMapItem(mapItem: MKMapItem): this;

  readonly coordinate: CLLocationCoordinate2D;

  readonly mapItem: MKMapItem;

  readonly isCancelled: boolean;

  readonly isLoading: boolean;

  getSceneWithCompletionHandler(completionHandler: (p1: MKLookAroundScene, p2: NSError) => void | null): void;

  cancel(): void;
}

declare class MKStandardMapConfiguration extends MKMapConfiguration {
  init(): this;

  initWithElevationStyle(elevationStyle: interop.Enum<typeof MKMapElevationStyle>): this;

  initWithElevationStyleEmphasisStyle(elevationStyle: interop.Enum<typeof MKMapElevationStyle>, emphasisStyle: interop.Enum<typeof MKStandardMapEmphasisStyle>): this;

  initWithEmphasisStyle(emphasisStyle: interop.Enum<typeof MKStandardMapEmphasisStyle>): this;

  emphasisStyle: interop.Enum<typeof MKStandardMapEmphasisStyle>;

  pointOfInterestFilter: MKPointOfInterestFilter;

  showsTraffic: boolean;
}

declare class MKMapConfiguration extends NSObject implements NSSecureCoding, NSCopying {
  elevationStyle: interop.Enum<typeof MKMapElevationStyle>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKPitchControl extends NSView {
  static pitchControlWithMapView<This extends abstract new (...args: any) => any>(this: This, mapView: MKMapView | null): InstanceType<This>;

  mapView: MKMapView;
}

declare class MKMapCameraZoomRange extends NSObject implements NSSecureCoding, NSCopying {
  initWithMinCenterCoordinateDistanceMaxCenterCoordinateDistance(minDistance: number, maxDistance: number): this;

  initWithMinCenterCoordinateDistance(minDistance: number): this;

  initWithMaxCenterCoordinateDistance(maxDistance: number): this;

  readonly minCenterCoordinateDistance: number;

  readonly maxCenterCoordinateDistance: number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKGeoJSONFeature extends NSObject implements MKGeoJSONObject {
  readonly identifier: string;

  readonly properties: NSData;

  readonly geometry: NSArray;

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

declare class MKMapCamera extends NSObject implements NSSecureCoding, NSCopying {
  centerCoordinate: CLLocationCoordinate2D;

  centerCoordinateDistance: number;

  heading: number;

  pitch: number;

  altitude: number;

  static camera<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static cameraLookingAtCenterCoordinateFromEyeCoordinateEyeAltitude<This extends abstract new (...args: any) => any>(this: This, centerCoordinate: CLLocationCoordinate2D, eyeCoordinate: CLLocationCoordinate2D, eyeAltitude: number): InstanceType<This>;

  static cameraLookingAtCenterCoordinateFromDistancePitchHeading<This extends abstract new (...args: any) => any>(this: This, centerCoordinate: CLLocationCoordinate2D, distance: number, pitch: number, heading: number): InstanceType<This>;

  static cameraLookingAtMapItemForViewSizeAllowPitch<This extends abstract new (...args: any) => any>(this: This, mapItem: MKMapItem, viewSize: CGSize, allowPitch: boolean): InstanceType<This>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKTileOverlay extends NSObject implements MKOverlay {
  initWithURLTemplate(URLTemplate: string | null): this;

  tileSize: CGSize;

  isGeometryFlipped: boolean;

  minimumZ: number;

  maximumZ: number;

  readonly URLTemplate: string;

  canReplaceMapContent: boolean;

  URLForTilePath(path: MKTileOverlayPath): NSURL;

  loadTileAtPathResult(path: MKTileOverlayPath, result: (p1: NSData, p2: NSError) => void | null): void;

  readonly coordinate: CLLocationCoordinate2D;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect(mapRect: MKMapRect): boolean;

  readonly title: string;

  readonly subtitle: string;

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

declare class MKMapSnapshotOptions extends NSObject implements NSCopying {
  preferredConfiguration: MKMapConfiguration;

  camera: MKMapCamera;

  mapRect: MKMapRect;

  region: MKCoordinateRegion;

  mapType: interop.Enum<typeof MKMapType>;

  pointOfInterestFilter: MKPointOfInterestFilter;

  showsPointsOfInterest: boolean;

  showsBuildings: boolean;

  size: CGSize;

  appearance: NSAppearance;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKETAResponse extends NSObject {
  readonly source: MKMapItem;

  readonly destination: MKMapItem;

  readonly expectedTravelTime: number;

  readonly distance: number;

  readonly expectedArrivalDate: NSDate;

  readonly expectedDepartureDate: NSDate;

  readonly transportType: interop.Enum<typeof MKDirectionsTransportType>;
}

declare class MKRouteStep extends NSObject {
  readonly instructions: string;

  readonly notice: string;

  readonly polyline: MKPolyline;

  readonly distance: number;

  readonly transportType: interop.Enum<typeof MKDirectionsTransportType>;
}

declare class MKRoute extends NSObject {
  readonly name: string;

  readonly advisoryNotices: NSArray;

  readonly distance: number;

  readonly expectedTravelTime: number;

  readonly transportType: interop.Enum<typeof MKDirectionsTransportType>;

  readonly polyline: MKPolyline;

  readonly steps: NSArray;

  readonly hasTolls: boolean;

  readonly hasHighways: boolean;
}

declare class MKDirectionsResponse extends NSObject {
  readonly source: MKMapItem;

  readonly destination: MKMapItem;

  readonly routes: NSArray;
}

declare class MKDirectionsRequest extends NSObject {
  source: MKMapItem;

  destination: MKMapItem;

  transportType: interop.Enum<typeof MKDirectionsTransportType>;

  requestsAlternateRoutes: boolean;

  departureDate: NSDate;

  arrivalDate: NSDate;

  tollPreference: interop.Enum<typeof MKDirectionsRoutePreference>;

  highwayPreference: interop.Enum<typeof MKDirectionsRoutePreference>;

  initWithContentsOfURL(url: NSURL): this;

  static isDirectionsRequestURL(url: NSURL): boolean;
}

declare class MKLocalSearchCompleter extends NSObject {
  queryFragment: string;

  region: MKCoordinateRegion;

  regionPriority: interop.Enum<typeof MKLocalSearchRegionPriority>;

  filterType: interop.Enum<typeof MKSearchCompletionFilterType>;

  resultTypes: interop.Enum<typeof MKLocalSearchCompleterResultType>;

  pointOfInterestFilter: MKPointOfInterestFilter;

  addressFilter: MKAddressFilter;

  delegate: MKLocalSearchCompleterDelegate;

  readonly results: NSArray;

  readonly isSearching: boolean;

  cancel(): void;
}

declare class MKLocalPointsOfInterestRequest extends NSObject implements NSCopying {
  initWithCenterCoordinateRadius(coordinate: CLLocationCoordinate2D, radius: number): this;

  initWithCoordinateRegion(region: MKCoordinateRegion): this;

  readonly coordinate: CLLocationCoordinate2D;

  readonly radius: number;

  readonly region: MKCoordinateRegion;

  pointOfInterestFilter: MKPointOfInterestFilter;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKPointOfInterestFilter extends NSObject implements NSSecureCoding, NSCopying {
  static readonly filterIncludingAllCategories: MKPointOfInterestFilter;

  static readonly filterExcludingAllCategories: MKPointOfInterestFilter;

  initIncludingCategories(categories: NSArray<interop.Object> | Array<interop.Object>): this;

  initExcludingCategories(categories: NSArray<interop.Object> | Array<interop.Object>): this;

  includesCategory(category: string): boolean;

  excludesCategory(category: string): boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKCircleRenderer extends MKOverlayPathRenderer {
  initWithCircle(circle: MKCircle): this;

  readonly circle: MKCircle;

  strokeStart: number;

  strokeEnd: number;
}

declare class MKGradientPolylineRenderer extends MKPolylineRenderer {
  readonly locations: NSArray;

  readonly colors: NSArray;

  setColorsAtLocations(colors: NSArray<interop.Object> | Array<interop.Object>, locations: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class MKMultiPolylineRenderer extends MKOverlayPathRenderer {
  initWithMultiPolyline(multiPolyline: MKMultiPolyline): this;

  readonly multiPolyline: MKMultiPolyline;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MKMultiPolyline extends MKShape implements MKOverlay {
  initWithPolylines(polylines: NSArray<interop.Object> | Array<interop.Object>): this;

  readonly polylines: NSArray;

  readonly coordinate: CLLocationCoordinate2D;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect(mapRect: MKMapRect): boolean;

  canReplaceMapContent: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  readonly title: string;

  // @ts-ignore MemberDecl.tsIgnore
  readonly subtitle: string;

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

declare class MKMultiPolygonRenderer extends MKOverlayPathRenderer {
  initWithMultiPolygon(multiPolygon: MKMultiPolygon): this;

  readonly multiPolygon: MKMultiPolygon;
}

declare class MKOverlayPathRenderer extends MKOverlayRenderer {
  fillColor: NSColor;

  strokeColor: NSColor;

  lineWidth: number;

  lineJoin: interop.Enum<typeof CGLineJoin>;

  lineCap: interop.Enum<typeof CGLineCap>;

  miterLimit: number;

  lineDashPhase: number;

  get lineDashPattern(): NSArray;
  set lineDashPattern(value: NSArray<interop.Object> | Array<interop.Object>);

  shouldRasterize: boolean;

  createPath(): void;

  get path(): interop.Pointer;
  set path(value: interop.PointerConvertible);

  invalidatePath(): void;

  applyStrokePropertiesToContextAtZoomScale(context: interop.PointerConvertible, zoomScale: number): void;

  applyFillPropertiesToContextAtZoomScale(context: interop.PointerConvertible, zoomScale: number): void;

  strokePathInContext(path: interop.PointerConvertible, context: interop.PointerConvertible): void;

  fillPathInContext(path: interop.PointerConvertible, context: interop.PointerConvertible): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MKMultiPolygon extends MKShape implements MKOverlay {
  initWithPolygons(polygons: NSArray<interop.Object> | Array<interop.Object>): this;

  readonly polygons: NSArray;

  readonly coordinate: CLLocationCoordinate2D;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect(mapRect: MKMapRect): boolean;

  canReplaceMapContent: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  readonly title: string;

  // @ts-ignore MemberDecl.tsIgnore
  readonly subtitle: string;

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
declare class MKPolygon extends MKMultiPoint implements MKOverlay {
  static polygonWithPointsCount<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, count: number): InstanceType<This>;

  static polygonWithPointsCountInteriorPolygons<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, count: number, interiorPolygons: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static polygonWithCoordinatesCount<This extends abstract new (...args: any) => any>(this: This, coords: interop.PointerConvertible, count: number): InstanceType<This>;

  static polygonWithCoordinatesCountInteriorPolygons<This extends abstract new (...args: any) => any>(this: This, coords: interop.PointerConvertible, count: number, interiorPolygons: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  readonly interiorPolygons: NSArray;

  readonly coordinate: CLLocationCoordinate2D;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect(mapRect: MKMapRect): boolean;

  canReplaceMapContent: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  readonly title: string;

  // @ts-ignore MemberDecl.tsIgnore
  readonly subtitle: string;

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

declare class MKMapItemAnnotation extends NSObject implements MKAnnotation {
  initWithMapItem(mapItem: MKMapItem): this;

  readonly mapItem: MKMapItem;

  readonly coordinate: CLLocationCoordinate2D;

  readonly title: string;

  readonly subtitle: string;

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
declare class MKPointAnnotation extends MKShape {
  init(): this;

  initWithCoordinate(coordinate: CLLocationCoordinate2D): this;

  initWithCoordinateTitleSubtitle(coordinate: CLLocationCoordinate2D, title: string | null, subtitle: string | null): this;

  // @ts-ignore MemberDecl.tsIgnore
  coordinate: CLLocationCoordinate2D;
}

declare class MKShape extends NSObject implements MKAnnotation {
  title: string;

  subtitle: string;

  readonly coordinate: CLLocationCoordinate2D;

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

declare class MKClusterAnnotation extends NSObject implements MKAnnotation {
  title: string;

  subtitle: string;

  readonly memberAnnotations: NSArray;

  initWithMemberAnnotations(memberAnnotations: NSArray<interop.Object> | Array<interop.Object>): this;

  readonly coordinate: CLLocationCoordinate2D;

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

declare class MKUserLocation extends NSObject implements MKAnnotation {
  readonly isUpdating: boolean;

  readonly location: CLLocation;

  readonly heading: CLHeading;

  title: string;

  subtitle: string;

  readonly coordinate: CLLocationCoordinate2D;

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

declare class MKMapView extends NSView implements NSCoding {
  delegate: MKMapViewDelegate;

  mapType: interop.Enum<typeof MKMapType>;

  preferredConfiguration: MKMapConfiguration;

  region: MKCoordinateRegion;

  setRegionAnimated(region: MKCoordinateRegion, animated: boolean): void;

  centerCoordinate: CLLocationCoordinate2D;

  setCenterCoordinateAnimated(coordinate: CLLocationCoordinate2D, animated: boolean): void;

  regionThatFits(region: MKCoordinateRegion): MKCoordinateRegion;

  visibleMapRect: MKMapRect;

  setVisibleMapRectAnimated(mapRect: MKMapRect, animate: boolean): void;

  mapRectThatFits(mapRect: MKMapRect): MKMapRect;

  setVisibleMapRectEdgePaddingAnimated(mapRect: MKMapRect, insets: NSEdgeInsets, animate: boolean): void;

  mapRectThatFitsEdgePadding(mapRect: MKMapRect, insets: NSEdgeInsets): MKMapRect;

  camera: MKMapCamera;

  setCameraAnimated(camera: MKMapCamera, animated: boolean): void;

  cameraZoomRange: MKMapCameraZoomRange;

  setCameraZoomRangeAnimated(cameraZoomRange: MKMapCameraZoomRange | null, animated: boolean): void;

  cameraBoundary: MKMapCameraBoundary;

  setCameraBoundaryAnimated(cameraBoundary: MKMapCameraBoundary | null, animated: boolean): void;

  convertCoordinateToPointToView(coordinate: CLLocationCoordinate2D, view: NSView | null): CGPoint;

  convertPointToCoordinateFromView(point: CGPoint, view: NSView | null): CLLocationCoordinate2D;

  convertRegionToRectToView(region: MKCoordinateRegion, view: NSView | null): CGRect;

  convertRectToRegionFromView(rect: CGRect, view: NSView | null): MKCoordinateRegion;

  isZoomEnabled: boolean;

  isScrollEnabled: boolean;

  isRotateEnabled: boolean;

  isPitchEnabled: boolean;

  showsUserTrackingButton: boolean;

  pitchButtonVisibility: interop.Enum<typeof MKFeatureVisibility>;

  showsPitchControl: boolean;

  showsZoomControls: boolean;

  showsCompass: boolean;

  showsScale: boolean;

  pointOfInterestFilter: MKPointOfInterestFilter;

  showsPointsOfInterest: boolean;

  showsBuildings: boolean;

  showsTraffic: boolean;

  showsUserLocation: boolean;

  readonly userLocation: MKUserLocation;

  userTrackingMode: interop.Enum<typeof MKUserTrackingMode>;

  setUserTrackingModeAnimated(mode: interop.Enum<typeof MKUserTrackingMode>, animated: boolean): void;

  readonly isUserLocationVisible: boolean;

  addAnnotation(annotation: MKAnnotation): void;

  addAnnotations(annotations: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAnnotation(annotation: MKAnnotation): void;

  removeAnnotations(annotations: NSArray<interop.Object> | Array<interop.Object>): void;

  readonly annotations: NSArray;

  annotationsInMapRect(mapRect: MKMapRect): NSSet;

  viewForAnnotation(annotation: MKAnnotation): MKAnnotationView;

  dequeueReusableAnnotationViewWithIdentifier(identifier: string): MKAnnotationView;

  dequeueReusableAnnotationViewWithIdentifierForAnnotation(identifier: string, annotation: MKAnnotation): MKAnnotationView;

  registerClassForAnnotationViewWithReuseIdentifier(viewClass: interop.Object | null, identifier: string): void;

  selectAnnotationAnimated(annotation: MKAnnotation, animated: boolean): void;

  deselectAnnotationAnimated(annotation: MKAnnotation | null, animated: boolean): void;

  get selectedAnnotations(): NSArray;
  set selectedAnnotations(value: NSArray<interop.Object> | Array<interop.Object>);

  readonly annotationVisibleRect: CGRect;

  showAnnotationsAnimated(annotations: NSArray<interop.Object> | Array<interop.Object>, animated: boolean): void;

  addOverlayLevel(overlay: MKOverlay, level: interop.Enum<typeof MKOverlayLevel>): void;

  addOverlaysLevel(overlays: NSArray<interop.Object> | Array<interop.Object>, level: interop.Enum<typeof MKOverlayLevel>): void;

  removeOverlay(overlay: MKOverlay): void;

  removeOverlays(overlays: NSArray<interop.Object> | Array<interop.Object>): void;

  insertOverlayAtIndexLevel(overlay: MKOverlay, index: number, level: interop.Enum<typeof MKOverlayLevel>): void;

  insertOverlayAboveOverlay(overlay: MKOverlay, sibling: MKOverlay): void;

  insertOverlayBelowOverlay(overlay: MKOverlay, sibling: MKOverlay): void;

  exchangeOverlayWithOverlay(overlay1: MKOverlay, overlay2: MKOverlay): void;

  readonly overlays: NSArray;

  overlaysInLevel(level: interop.Enum<typeof MKOverlayLevel>): NSArray;

  rendererForOverlay(overlay: MKOverlay): MKOverlayRenderer;

  addOverlay(overlay: MKOverlay): void;

  addOverlays(overlays: NSArray<interop.Object> | Array<interop.Object>): void;

  insertOverlayAtIndex(overlay: MKOverlay, index: number): void;

  exchangeOverlayAtIndexWithOverlayAtIndex(index1: number, index2: number): void;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MKMapItemDetailSelectionAccessoryPresentationStyle extends NSObject {
  static automaticWithPresentationViewController(presentationViewController: NSViewController | null): MKMapItemDetailSelectionAccessoryPresentationStyle;

  static readonly callout: MKMapItemDetailSelectionAccessoryPresentationStyle;

  static calloutWithCalloutStyle(style: interop.Enum<typeof MKMapItemDetailSelectionAccessoryCalloutStyle>): MKMapItemDetailSelectionAccessoryPresentationStyle;

  static sheetPresentedFromViewController(viewController: NSViewController): MKMapItemDetailSelectionAccessoryPresentationStyle;

  static readonly openInMaps: MKMapItemDetailSelectionAccessoryPresentationStyle;
}

declare class MKOverlayRenderer extends NSObject {
  initWithOverlay(overlay: MKOverlay): this;

  readonly overlay: MKOverlay;

  pointForMapPoint(mapPoint: MKMapPoint): CGPoint;

  mapPointForPoint(point: CGPoint): MKMapPoint;

  rectForMapRect(mapRect: MKMapRect): CGRect;

  mapRectForRect(rect: CGRect): MKMapRect;

  canDrawMapRectZoomScale(mapRect: MKMapRect, zoomScale: number): boolean;

  drawMapRectZoomScaleInContext(mapRect: MKMapRect, zoomScale: number, context: interop.PointerConvertible): void;

  setNeedsDisplay(): void;

  setNeedsDisplayInMapRect(mapRect: MKMapRect): void;

  setNeedsDisplayInMapRectZoomScale(mapRect: MKMapRect, zoomScale: number): void;

  alpha: number;

  readonly contentScaleFactor: number;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MKAnnotationView extends NSView {
  initWithAnnotationReuseIdentifier(annotation: MKAnnotation | null, reuseIdentifier: string | null): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  readonly reuseIdentifier: string;

  prepareForReuse(): void;

  prepareForDisplay(): void;

  annotation: MKAnnotation;

  image: NSImage;

  centerOffset: CGPoint;

  accessoryOffset: CGPoint;

  calloutOffset: CGPoint;

  leftCalloutOffset: CGPoint;

  rightCalloutOffset: CGPoint;

  isEnabled: boolean;

  isHighlighted: boolean;

  isSelected: boolean;

  setSelectedAnimated(selected: boolean, animated: boolean): void;

  canShowCallout: boolean;

  leftCalloutAccessoryView: NSView;

  rightCalloutAccessoryView: NSView;

  detailCalloutAccessoryView: NSView;

  isDraggable: boolean;

  dragState: interop.Enum<typeof MKAnnotationViewDragState>;

  setDragStateAnimated(newDragState: interop.Enum<typeof MKAnnotationViewDragState>, animated: boolean): void;

  clusteringIdentifier: string;

  readonly clusterAnnotationView: MKAnnotationView;

  displayPriority: number;

  zPriority: number;

  selectedZPriority: number;

  collisionMode: interop.Enum<typeof MKAnnotationViewCollisionMode>;
}

declare class MKAddressFilter extends NSObject implements NSSecureCoding, NSCopying {
  static readonly filterIncludingAll: MKAddressFilter;

  static readonly filterExcludingAll: MKAddressFilter;

  initIncludingOptions(options: interop.Enum<typeof MKAddressFilterOption>): this;

  initExcludingOptions(options: interop.Enum<typeof MKAddressFilterOption>): this;

  includesOptions(options: interop.Enum<typeof MKAddressFilterOption>): boolean;

  excludesOptions(options: interop.Enum<typeof MKAddressFilterOption>): boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKMapItem extends NSObject {
  readonly identifier: MKMapItemIdentifier;

  readonly alternateIdentifiers: NSSet;

  readonly placemark: MKPlacemark;

  readonly isCurrentLocation: boolean;

  name: string;

  phoneNumber: string;

  url: NSURL;

  timeZone: NSTimeZone;

  pointOfInterestCategory: string;

  static mapItemForCurrentLocation(): MKMapItem;

  initWithPlacemark(placemark: MKPlacemark): this;

  openInMapsWithLaunchOptions(launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): boolean;

  static openMapsWithItemsLaunchOptions(mapItems: NSArray<interop.Object> | Array<interop.Object>, launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): boolean;

  openInMapsWithLaunchOptionsCompletionHandler(launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completion: (p1: boolean) => void | null): void;

  static openMapsWithItemsLaunchOptionsCompletionHandler(mapItems: NSArray<interop.Object> | Array<interop.Object>, launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, completion: (p1: boolean) => void | null): void;
}

declare class MKPlacemark extends CLPlacemark implements MKAnnotation {
  initWithCoordinate(coordinate: CLLocationCoordinate2D): this;

  initWithCoordinateAddressDictionary(coordinate: CLLocationCoordinate2D, addressDictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithCoordinatePostalAddress(coordinate: CLLocationCoordinate2D, postalAddress: CNPostalAddress): this;

  readonly countryCode: string;

  readonly coordinate: CLLocationCoordinate2D;

  readonly title: string;

  readonly subtitle: string;

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

declare class MKMapItemIdentifier extends NSObject implements NSCopying, NSSecureCoding {
  initWithIdentifierString(string: string): this;

  readonly identifierString: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MKDistanceFormatter extends NSFormatter {
  stringFromDistance(distance: number): string;

  distanceFromString(distance: string): number;

  locale: NSLocale;

  units: interop.Enum<typeof MKDistanceFormatterUnits>;

  unitStyle: interop.Enum<typeof MKDistanceFormatterUnitStyle>;
}

declare class MKMapSnapshotter extends NSObject {
  initWithOptions(options: MKMapSnapshotOptions): this;

  startWithCompletionHandler(completionHandler: (p1: MKMapSnapshot, p2: NSError) => void): void;

  startWithQueueCompletionHandler(queue: NSObject, completionHandler: (p1: MKMapSnapshot, p2: NSError) => void): void;

  cancel(): void;

  readonly isLoading: boolean;
}

declare class MKPolygonRenderer extends MKOverlayPathRenderer {
  initWithPolygon(polygon: MKPolygon): this;

  readonly polygon: MKPolygon;

  strokeStart: number;

  strokeEnd: number;
}

declare class MKHybridMapConfiguration extends MKMapConfiguration {
  init(): this;

  initWithElevationStyle(elevationStyle: interop.Enum<typeof MKMapElevationStyle>): this;

  pointOfInterestFilter: MKPointOfInterestFilter;

  showsTraffic: boolean;
}

declare class MKMarkerAnnotationView extends MKAnnotationView {
  titleVisibility: interop.Enum<typeof MKFeatureVisibility>;

  subtitleVisibility: interop.Enum<typeof MKFeatureVisibility>;

  markerTintColor: NSColor;

  glyphTintColor: NSColor;

  glyphText: string;

  glyphImage: NSImage;

  selectedGlyphImage: NSImage;

  animatesWhenAdded: boolean;
}

declare class MKPinAnnotationView extends MKAnnotationView {
  static redPinColor(): NSColor;

  static greenPinColor(): NSColor;

  static purplePinColor(): NSColor;

  pinTintColor: NSColor;

  animatesDrop: boolean;

  pinColor: interop.Enum<typeof MKPinAnnotationColor>;
}

declare class MKUserLocationView extends MKAnnotationView {
}

declare class MKLocalSearchCompletion extends NSObject {
  readonly title: string;

  readonly titleHighlightRanges: NSArray;

  readonly subtitle: string;

  readonly subtitleHighlightRanges: NSArray;
}

declare class MKLookAroundViewController extends NSViewController implements NSSecureCoding, NSCoding {
  initWithScene(scene: MKLookAroundScene): this;

  initWithNibNameBundle(nibNameOrNil: string | null, nibBundleOrNil: NSBundle | null): this;

  initWithCoder(coder: NSCoder): this;

  delegate: MKLookAroundViewControllerDelegate;

  scene: MKLookAroundScene;

  isNavigationEnabled: boolean;

  showsRoadLabels: boolean;

  pointOfInterestFilter: MKPointOfInterestFilter;

  badgePosition: interop.Enum<typeof MKLookAroundBadgePosition>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class MKLookAroundSnapshot extends NSObject {
  readonly image: NSImage;
}

declare class MKZoomControl extends NSView {
  static zoomControlWithMapView<This extends abstract new (...args: any) => any>(this: This, mapView: MKMapView | null): InstanceType<This>;

  mapView: MKMapView;
}

declare class MKLookAroundSnapshotOptions extends NSObject {
  pointOfInterestFilter: MKPointOfInterestFilter;

  size: CGSize;
}

declare class MKMapCameraBoundary extends NSObject implements NSSecureCoding, NSCopying {
  initWithMapRect(mapRect: MKMapRect): this;

  initWithCoordinateRegion(region: MKCoordinateRegion): this;

  initWithCoder(coder: NSCoder): this;

  readonly mapRect: MKMapRect;

  readonly region: MKCoordinateRegion;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKTileOverlayRenderer extends MKOverlayRenderer {
  initWithTileOverlay(overlay: MKTileOverlay): this;

  reloadData(): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MKCircle extends MKShape implements MKOverlay {
  static circleWithCenterCoordinateRadius<This extends abstract new (...args: any) => any>(this: This, coord: CLLocationCoordinate2D, radius: number): InstanceType<This>;

  static circleWithMapRect<This extends abstract new (...args: any) => any>(this: This, mapRect: MKMapRect): InstanceType<This>;

  readonly coordinate: CLLocationCoordinate2D;

  readonly radius: number;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect(mapRect: MKMapRect): boolean;

  canReplaceMapContent: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  readonly title: string;

  // @ts-ignore MemberDecl.tsIgnore
  readonly subtitle: string;

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
declare class MKPolyline extends MKMultiPoint implements MKOverlay {
  static polylineWithPointsCount<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, count: number): InstanceType<This>;

  static polylineWithCoordinatesCount<This extends abstract new (...args: any) => any>(this: This, coords: interop.PointerConvertible, count: number): InstanceType<This>;

  readonly coordinate: CLLocationCoordinate2D;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect(mapRect: MKMapRect): boolean;

  canReplaceMapContent: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  readonly title: string;

  // @ts-ignore MemberDecl.tsIgnore
  readonly subtitle: string;

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

declare class MKPolylineRenderer extends MKOverlayPathRenderer {
  initWithPolyline(polyline: MKPolyline): this;

  readonly polyline: MKPolyline;

  strokeStart: number;

  strokeEnd: number;
}

declare class MKSelectionAccessory extends NSObject {
  static mapItemDetailWithPresentationStyle(presentationStyle: MKMapItemDetailSelectionAccessoryPresentationStyle): MKSelectionAccessory;
}

declare class MKLocalSearchRequest extends NSObject implements NSCopying {
  init(): this;

  initWithNaturalLanguageQuery(naturalLanguageQuery: string): this;

  initWithNaturalLanguageQueryRegion(naturalLanguageQuery: string, region: MKCoordinateRegion): this;

  naturalLanguageQuery: string;

  region: MKCoordinateRegion;

  regionPriority: interop.Enum<typeof MKLocalSearchRegionPriority>;

  resultTypes: interop.Enum<typeof MKLocalSearchResultType>;

  pointOfInterestFilter: MKPointOfInterestFilter;

  addressFilter: MKAddressFilter;

  initWithCompletion(completion: MKLocalSearchCompletion): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKGeoJSONDecoder extends NSObject {
  geoJSONObjectsWithDataError(data: NSData, errorPtr: interop.PointerConvertible): NSArray | null;
}

declare class MKMapSnapshot extends NSObject {
  readonly image: NSImage;

  readonly appearance: NSAppearance;

  pointForCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;
}

declare class MKDirections extends NSObject {
  initWithRequest(request: MKDirectionsRequest): this;

  calculateDirectionsWithCompletionHandler(completionHandler: (p1: MKDirectionsResponse, p2: NSError) => void): void;

  calculateETAWithCompletionHandler(completionHandler: (p1: MKETAResponse, p2: NSError) => void): void;

  cancel(): void;

  readonly isCalculating: boolean;
}

declare class MKMultiPoint extends MKShape {
  points(): interop.Pointer;

  readonly pointCount: number;

  getCoordinatesRange(coords: interop.PointerConvertible, range: _NSRange): void;

  locationAtPointIndex(index: number): number;

  locationsAtPointIndexes(indexes: NSIndexSet): NSArray;
}

declare class MKMapItemDetailViewController extends NSViewController {
  mapItem: MKMapItem;

  delegate: MKMapItemDetailViewControllerDelegate;

  initWithMapItemDisplaysMap(mapItem: MKMapItem | null, displaysMap: boolean): this;

  initWithMapItem(mapItem: MKMapItem | null): this;
}

declare class MKImageryMapConfiguration extends MKMapConfiguration {
  init(): this;

  initWithElevationStyle(elevationStyle: interop.Enum<typeof MKMapElevationStyle>): this;
}

declare class MKCompassButton extends NSView {
  static compassButtonWithMapView<This extends abstract new (...args: any) => any>(this: This, mapView: MKMapView | null): InstanceType<This>;

  mapView: MKMapView;

  compassVisibility: interop.Enum<typeof MKFeatureVisibility>;
}

declare class MKLocalSearchResponse extends NSObject {
  readonly mapItems: NSArray;

  readonly boundingRegion: MKCoordinateRegion;
}

declare class MKGeodesicPolyline extends MKPolyline {
  static polylineWithPointsCount<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, count: number): InstanceType<This>;

  static polylineWithCoordinatesCount<This extends abstract new (...args: any) => any>(this: This, coords: interop.PointerConvertible, count: number): InstanceType<This>;
}

declare class MKLookAroundScene extends NSObject implements NSCopying {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKLocalSearch extends NSObject {
  initWithRequest(request: MKLocalSearchRequest): this;

  initWithPointsOfInterestRequest(request: MKLocalPointsOfInterestRequest): this;

  startWithCompletionHandler(completionHandler: (p1: MKLocalSearchResponse, p2: NSError) => void): void;

  cancel(): void;

  readonly isSearching: boolean;
}

