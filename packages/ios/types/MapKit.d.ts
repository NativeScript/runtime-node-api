/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./UIKit.d.ts" />
/// <reference path="./Foundation.d.ts" />
/// <reference path="./CoreLocation.d.ts" />

declare const MKMapCameraZoomDefault: number;

declare const MKMapViewDefaultClusterAnnotationViewReuseIdentifier: string;

declare const MKAnnotationViewZPriorityDefaultUnselected: number;

declare const MKAnnotationViewZPriorityDefaultSelected: number;

declare const MKFeatureDisplayPriorityDefaultLow: number;

declare const MKLaunchOptionsMapSpanKey: string;

declare const MKLaunchOptionsDirectionsModeWalking: string;

declare const MKLaunchOptionsDirectionsModeDefault: string;

declare const MKPointOfInterestCategoryZoo: string;

declare const MKPointOfInterestCategoryWinery: string;

declare const MKPointOfInterestCategoryTennis: string;

declare const MKPointOfInterestCategorySwimming: string;

declare const MKPointOfInterestCategoryStore: string;

declare const MKPointOfInterestCategorySpa: string;

declare const MKPointOfInterestCategorySoccer: string;

declare const MKPointOfInterestCategorySkiing: string;

declare const MKPointOfInterestCategorySkating: string;

declare const MKPointOfInterestCategoryRVPark: string;

declare const MKPointOfInterestCategoryRockClimbing: string;

declare const MKPointOfInterestCategoryPostOffice: string;

declare const MKPointOfInterestCategoryPolice: string;

declare const MKPointOfInterestCategoryPlanetarium: string;

declare const MKPointOfInterestCategoryPharmacy: string;

declare const MKPointOfInterestCategoryPark: string;

declare const MKPointOfInterestCategoryNationalMonument: string;

declare const MKPointOfInterestCategoryMusicVenue: string;

declare const MKPointOfInterestCategoryMovieTheater: string;

declare const MKPointOfInterestCategoryMiniGolf: string;

declare const MKPointOfInterestCategoryMarina: string;

declare const MKPointOfInterestCategoryMailbox: string;

declare const MKPointOfInterestCategoryLandmark: string;

declare const MKPointOfInterestCategoryHospital: string;

declare const MKPointOfInterestCategoryGolf: string;

declare const MKPointOfInterestCategoryGasStation: string;

declare const MKPointOfInterestCategoryFoodMarket: string;

declare const MKPointOfInterestCategoryFishing: string;

declare const MKPointOfInterestCategoryFireStation: string;

declare const MKPointOfInterestCategoryEVCharger: string;

declare const MKPointOfInterestCategoryDistillery: string;

declare const MKPointOfInterestCategoryCarRental: string;

declare const MKPointOfInterestCategoryCampground: string;

declare const MKPointOfInterestCategoryCafe: string;

declare const MKPointOfInterestCategoryBowling: string;

declare const MKPointOfInterestCategoryBeauty: string;

declare const MKPointOfInterestCategoryBeach: string;

declare const MKPointOfInterestCategoryBasketball: string;

declare const MKPointOfInterestCategoryBaseball: string;

declare const MKPointOfInterestCategoryBank: string;

declare const MKPointOfInterestCategoryBakery: string;

declare const MKPointOfInterestCategoryAnimalService: string;

declare const MKMapRectNull: MKMapRect;

declare const MKMapSizeWorld: MKMapSize;

declare const MKPointOfInterestCategorySurfing: string;

declare const MKPointOfInterestCategoryMuseum: string;

declare const MKPointOfInterestCategoryHiking: string;

declare const MKPointOfInterestCategoryConventionCenter: string;

declare const MKPointOfInterestCategoryAquarium: string;

declare const MKPointOfInterestCategoryLibrary: string;

declare const MKPointOfInterestCategoryKayaking: string;

declare const MKPointOfInterestCategoryTheater: string;

declare const MKPointOfInterestCategoryBrewery: string;

declare const MKMapItemTypeIdentifier: string;

declare const MKPointOfInterestCategoryGoKart: string;

declare const MKLaunchOptionsMapCenterKey: string;

declare const MKPointOfInterestCategoryRestaurant: string;

declare const MKPointsOfInterestRequestMaxRadius: number;

declare const MKPointOfInterestCategoryUniversity: string;

declare const MKPointOfInterestCategoryPublicTransport: string;

declare const MKFeatureDisplayPriorityRequired: number;

declare const MKPointOfInterestCategorySkatePark: string;

declare const MKPointOfInterestCategoryFitnessCenter: string;

declare const MKPointOfInterestCategoryParking: string;

declare const MKPointOfInterestCategorySchool: string;

declare const MKPointOfInterestCategoryCastle: string;

declare const MKLaunchOptionsDirectionsModeKey: string;

declare const MKPointOfInterestCategoryAmusementPark: string;

declare const MKPointOfInterestCategoryFortress: string;

declare const MKLaunchOptionsDirectionsModeDriving: string;

declare const MKPointOfInterestCategoryAirport: string;

declare const MKPointOfInterestCategoryATM: string;

declare const MKPointOfInterestCategoryNationalPark: string;

declare const MKPointOfInterestCategoryStadium: string;

declare const MKPointOfInterestCategoryVolleyball: string;

declare const MKLaunchOptionsDirectionsModeTransit: string;

declare const MKFeatureDisplayPriorityDefaultHigh: number;

declare const MKPointOfInterestCategoryNightlife: string;

declare const MKErrorDomain: string;

declare const MKLaunchOptionsShowsTrafficKey: string;

declare const MKAnnotationCalloutInfoDidChangeNotification: string;

declare const MKLaunchOptionsMapTypeKey: string;

declare const MKPointOfInterestCategoryLaundry: string;

declare const MKMapRectWorld: MKMapRect;

declare const MKLaunchOptionsCameraKey: string;

declare const MKMapViewDefaultAnnotationViewReuseIdentifier: string;

declare const MKAnnotationViewZPriorityMax: number;

declare const MKPointOfInterestCategoryHotel: string;

declare const MKPointOfInterestCategoryFairground: string;

declare const MKPointOfInterestCategoryRestroom: string;

declare const MKPointOfInterestCategoryAutomotiveRepair: string;

declare const MKAnnotationViewZPriorityMin: number;

declare const MKScaleViewAlignment: {
  Leading: 0,
  Trailing: 1,
};

declare const MKStandardMapEmphasisStyle: {
  Default: 0,
  Muted: 1,
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

declare const MKOverlayLevel: {
  Roads: 0,
  Labels: 1,
};

declare const MKMapItemDetailSelectionAccessoryCalloutStyle: {
  Automatic: 0,
  Full: 1,
  Compact: 2,
};

declare const MKLocalSearchRegionPriority: {
  Default: 0,
  Required: 1,
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

declare const MKPinAnnotationColor: {
  Red: 0,
  Green: 1,
  Purple: 2,
};

declare const MKDistanceFormatterUnits: {
  Default: 0,
  Metric: 1,
  Imperial: 2,
  ImperialWithYards: 3,
};

declare const MKMapFeatureOptions: {
  PointsOfInterest: 1,
  Territories: 2,
  PhysicalFeatures: 4,
};

declare const MKDirectionsRoutePreference: {
  Any: 0,
  Avoid: 1,
};

declare const MKSearchCompletionFilterType: {
  AndQueries: 0,
  Only: 1,
};

declare const MKUserTrackingMode: {
  None: 0,
  Follow: 1,
  FollowWithHeading: 2,
};

declare const MKMapFeatureType: {
  PointOfInterest: 0,
  Territory: 1,
  PhysicalFeature: 2,
};

declare const MKMapType: {
  Standard: 0,
  Satellite: 1,
  Hybrid: 2,
  SatelliteFlyover: 3,
  HybridFlyover: 4,
  MutedStandard: 5,
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

declare class MKCoordinateRegion {
  constructor(init?: MKCoordinateRegion);
  center: CLLocationCoordinate2D;
  span: MKCoordinateSpan;
}

declare class MKCoordinateSpan {
  constructor(init?: MKCoordinateSpan);
  latitudeDelta: number;
  longitudeDelta: number;
}

declare class MKMapRect {
  constructor(init?: MKMapRect);
  origin: MKMapPoint;
  size: MKMapSize;
}

declare class MKMapPoint {
  constructor(init?: MKMapPoint);
  x: number;
  y: number;
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

  mapViewAnnotationViewCalloutAccessoryControlTapped?(mapView: MKMapView, view: MKAnnotationView, control: UIControl): void;

  mapViewDidSelectAnnotationView?(mapView: MKMapView, view: MKAnnotationView): void;

  mapViewDidDeselectAnnotationView?(mapView: MKMapView, view: MKAnnotationView): void;

  mapViewDidSelectAnnotation?(mapView: MKMapView, annotation: MKAnnotation): void;

  mapViewDidDeselectAnnotation?(mapView: MKMapView, annotation: MKAnnotation): void;

  mapViewSelectionAccessoryForAnnotation?(mapView: MKMapView, annotation: MKAnnotation): MKSelectionAccessory;

  mapViewWillStartLocatingUser?(mapView: MKMapView): void;

  mapViewDidStopLocatingUser?(mapView: MKMapView): void;

  mapViewDidUpdateUserLocation?(mapView: MKMapView, userLocation: MKUserLocation): void;

  mapViewDidFailToLocateUserWithError?(mapView: MKMapView, error: NSError): void;

  mapViewAnnotationViewDidChangeDragStateFromOldState?(mapView: MKMapView, view: MKAnnotationView, newState: interop.Enum<typeof MKAnnotationViewDragState>, oldState: interop.Enum<typeof MKAnnotationViewDragState>): void;

  mapViewDidChangeUserTrackingModeAnimated?(mapView: MKMapView, mode: interop.Enum<typeof MKUserTrackingMode>, animated: boolean): void;

  mapViewRendererForOverlay?(mapView: MKMapView, overlay: MKOverlay): MKOverlayRenderer;

  mapViewDidAddOverlayRenderers?(mapView: MKMapView, renderers: NSArray<interop.Object> | Array<interop.Object>): void;

  mapViewViewForOverlay?(mapView: MKMapView, overlay: MKOverlay): MKOverlayView;

  mapViewDidAddOverlayViews?(mapView: MKMapView, overlayViews: NSArray<interop.Object> | Array<interop.Object>): void;

  mapViewClusterAnnotationForMemberAnnotations?(mapView: MKMapView, memberAnnotations: NSArray<interop.Object> | Array<interop.Object>): MKClusterAnnotation;
}

declare class MKMapViewDelegate extends NativeObject implements MKMapViewDelegate {
}

declare interface MKOverlay extends MKAnnotation {
  readonly coordinate: CLLocationCoordinate2D;

  readonly boundingMapRect: MKMapRect;

  intersectsMapRect?(mapRect: MKMapRect): boolean;

  canReplaceMapContent?: boolean;
}

declare class MKOverlay extends NativeObject implements MKOverlay {
}

declare interface MKAnnotation extends NSObjectProtocol {
  readonly coordinate: CLLocationCoordinate2D;

  readonly title?: string;

  readonly subtitle?: string;
}

declare class MKAnnotation extends NativeObject implements MKAnnotation {
}

declare interface MKGeoJSONObject extends NSObjectProtocol {
}

declare class MKGeoJSONObject extends NativeObject implements MKGeoJSONObject {
}

declare interface MKReverseGeocoderDelegate extends NSObjectProtocol {
  reverseGeocoderDidFindPlacemark(geocoder: MKReverseGeocoder, placemark: MKPlacemark): void;

  reverseGeocoderDidFailWithError(geocoder: MKReverseGeocoder, error: NSError): void;
}

declare class MKReverseGeocoderDelegate extends NativeObject implements MKReverseGeocoderDelegate {
}

declare class MKMapItemRequest extends NSObject {
  initWithMapItemIdentifier(identifier: MKMapItemIdentifier): this;

  initWithMapFeatureAnnotation(mapFeatureAnnotation: MKMapFeatureAnnotation): this;

  getMapItemWithCompletionHandler(completionHandler: (p1: MKMapItem, p2: NSError) => void | null): void;

  cancel(): void;

  readonly mapItemIdentifier: MKMapItemIdentifier;

  readonly mapFeatureAnnotation: MKMapFeatureAnnotation;

  readonly featureAnnotation: MKMapFeatureAnnotation;

  readonly isCancelled: boolean;

  readonly isLoading: boolean;
}

declare class MKMapItemDetailViewController extends UIViewController {
  mapItem: MKMapItem;

  delegate: MKMapItemDetailViewControllerDelegate;

  initWithMapItemDisplaysMap(mapItem: MKMapItem | null, displaysMap: boolean): this;

  initWithMapItem(mapItem: MKMapItem | null): this;
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

declare class MKLookAroundScene extends NSObject implements NSCopying {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class MKUserTrackingButton extends UIView {
  static userTrackingButtonWithMapView<This extends abstract new (...args: any) => any>(this: This, mapView: MKMapView | null): InstanceType<This>;

  mapView: MKMapView;
}

declare class MKUserTrackingBarButtonItem extends UIBarButtonItem {
  initWithMapView(mapView: MKMapView | null): this;

  mapView: MKMapView;
}

declare class MKScaleView extends UIView {
  static scaleViewWithMapView<This extends abstract new (...args: any) => any>(this: This, mapView: MKMapView | null): InstanceType<This>;

  mapView: MKMapView;

  scaleVisibility: interop.Enum<typeof MKFeatureVisibility>;

  legendAlignment: interop.Enum<typeof MKScaleViewAlignment>;
}

declare class MKCircleView extends MKOverlayPathView {
  initWithCircle(circle: MKCircle): this;

  readonly circle: MKCircle;
}

declare class MKPolylineView extends MKOverlayPathView {
  initWithPolyline(polyline: MKPolyline): this;

  readonly polyline: MKPolyline;
}

declare class MKOverlayPathView extends MKOverlayView {
  fillColor: UIColor;

  strokeColor: UIColor;

  lineWidth: number;

  lineJoin: interop.Enum<typeof CGLineJoin>;

  lineCap: interop.Enum<typeof CGLineCap>;

  miterLimit: number;

  lineDashPhase: number;

  get lineDashPattern(): NSArray;
  set lineDashPattern(value: NSArray<interop.Object> | Array<interop.Object>);

  createPath(): void;

  get path(): interop.Pointer;
  set path(value: interop.PointerConvertible);

  invalidatePath(): void;

  applyStrokePropertiesToContextAtZoomScale(context: interop.PointerConvertible, zoomScale: number): void;

  applyFillPropertiesToContextAtZoomScale(context: interop.PointerConvertible, zoomScale: number): void;

  strokePathInContext(path: interop.PointerConvertible, context: interop.PointerConvertible): void;

  fillPathInContext(path: interop.PointerConvertible, context: interop.PointerConvertible): void;
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

  scale: number;

  traitCollection: UITraitCollection;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
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

declare class MKDirections extends NSObject {
  initWithRequest(request: MKDirectionsRequest): this;

  calculateDirectionsWithCompletionHandler(completionHandler: (p1: MKDirectionsResponse, p2: NSError) => void): void;

  calculateETAWithCompletionHandler(completionHandler: (p1: MKETAResponse, p2: NSError) => void): void;

  cancel(): void;

  readonly isCalculating: boolean;
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

declare class MKOverlayPathRenderer extends MKOverlayRenderer {
  fillColor: UIColor;

  strokeColor: UIColor;

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

declare class MKMultiPoint extends MKShape {
  points(): interop.Pointer;

  readonly pointCount: number;

  getCoordinatesRange(coords: interop.PointerConvertible, range: _NSRange): void;

  locationAtPointIndex(index: number): number;

  locationsAtPointIndexes(indexes: NSIndexSet): NSArray;
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

declare class MKMapView extends UIView implements NSCoding {
  delegate: MKMapViewDelegate;

  mapType: interop.Enum<typeof MKMapType>;

  preferredConfiguration: MKMapConfiguration;

  selectableMapFeatures: interop.Enum<typeof MKMapFeatureOptions>;

  region: MKCoordinateRegion;

  setRegionAnimated(region: MKCoordinateRegion, animated: boolean): void;

  centerCoordinate: CLLocationCoordinate2D;

  setCenterCoordinateAnimated(coordinate: CLLocationCoordinate2D, animated: boolean): void;

  regionThatFits(region: MKCoordinateRegion): MKCoordinateRegion;

  visibleMapRect: MKMapRect;

  setVisibleMapRectAnimated(mapRect: MKMapRect, animate: boolean): void;

  mapRectThatFits(mapRect: MKMapRect): MKMapRect;

  setVisibleMapRectEdgePaddingAnimated(mapRect: MKMapRect, insets: UIEdgeInsets, animate: boolean): void;

  mapRectThatFitsEdgePadding(mapRect: MKMapRect, insets: UIEdgeInsets): MKMapRect;

  camera: MKMapCamera;

  setCameraAnimated(camera: MKMapCamera, animated: boolean): void;

  cameraZoomRange: MKMapCameraZoomRange;

  setCameraZoomRangeAnimated(cameraZoomRange: MKMapCameraZoomRange | null, animated: boolean): void;

  cameraBoundary: MKMapCameraBoundary;

  setCameraBoundaryAnimated(cameraBoundary: MKMapCameraBoundary | null, animated: boolean): void;

  convertCoordinateToPointToView(coordinate: CLLocationCoordinate2D, view: UIView | null): CGPoint;

  convertPointToCoordinateFromView(point: CGPoint, view: UIView | null): CLLocationCoordinate2D;

  convertRegionToRectToView(region: MKCoordinateRegion, view: UIView | null): CGRect;

  convertRectToRegionFromView(rect: CGRect, view: UIView | null): MKCoordinateRegion;

  isZoomEnabled: boolean;

  isScrollEnabled: boolean;

  isRotateEnabled: boolean;

  isPitchEnabled: boolean;

  showsUserTrackingButton: boolean;

  pitchButtonVisibility: interop.Enum<typeof MKFeatureVisibility>;

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

  viewForOverlay(overlay: MKOverlay): MKOverlayView;

  addOverlay(overlay: MKOverlay): void;

  addOverlays(overlays: NSArray<interop.Object> | Array<interop.Object>): void;

  insertOverlayAtIndex(overlay: MKOverlay, index: number): void;

  exchangeOverlayAtIndexWithOverlayAtIndex(index1: number, index2: number): void;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MKMapItemDetailSelectionAccessoryPresentationStyle extends NSObject {
  static automaticWithPresentationViewController(presentationViewController: UIViewController | null): MKMapItemDetailSelectionAccessoryPresentationStyle;

  static readonly callout: MKMapItemDetailSelectionAccessoryPresentationStyle;

  static calloutWithCalloutStyle(style: interop.Enum<typeof MKMapItemDetailSelectionAccessoryCalloutStyle>): MKMapItemDetailSelectionAccessoryPresentationStyle;

  static sheetPresentedFromViewController(viewController: UIViewController): MKMapItemDetailSelectionAccessoryPresentationStyle;

  static readonly openInMaps: MKMapItemDetailSelectionAccessoryPresentationStyle;
}

declare class MKMapFeatureAnnotation extends NSObject implements MKAnnotation {
  readonly featureType: interop.Enum<typeof MKMapFeatureType>;

  readonly iconStyle: MKIconStyle;

  readonly pointOfInterestCategory: string;

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

  blendMode: interop.Enum<typeof CGBlendMode>;
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

declare class MKPolygonView extends MKOverlayPathView {
  initWithPolygon(polygon: MKPolygon): this;

  readonly polygon: MKPolygon;
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

declare class MKMapItemIdentifier extends NSObject implements NSCopying, NSSecureCoding {
  initWithIdentifierString(string: string): this;

  readonly identifierString: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class MKAnnotationView extends UIView {
  initWithAnnotationReuseIdentifier(annotation: MKAnnotation | null, reuseIdentifier: string | null): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  readonly reuseIdentifier: string;

  prepareForReuse(): void;

  prepareForDisplay(): void;

  annotation: MKAnnotation;

  image: UIImage;

  centerOffset: CGPoint;

  accessoryOffset: CGPoint;

  calloutOffset: CGPoint;

  isEnabled: boolean;

  isHighlighted: boolean;

  isSelected: boolean;

  setSelectedAnimated(selected: boolean, animated: boolean): void;

  canShowCallout: boolean;

  leftCalloutAccessoryView: UIView;

  rightCalloutAccessoryView: UIView;

  detailCalloutAccessoryView: UIView;

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

declare class MKMarkerAnnotationView extends MKAnnotationView {
  titleVisibility: interop.Enum<typeof MKFeatureVisibility>;

  subtitleVisibility: interop.Enum<typeof MKFeatureVisibility>;

  markerTintColor: UIColor;

  glyphTintColor: UIColor;

  glyphText: string;

  glyphImage: UIImage;

  selectedGlyphImage: UIImage;

  animatesWhenAdded: boolean;
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

declare class MKPinAnnotationView extends MKAnnotationView {
  static redPinColor(): UIColor;

  static greenPinColor(): UIColor;

  static purplePinColor(): UIColor;

  pinTintColor: UIColor;

  animatesDrop: boolean;

  pinColor: interop.Enum<typeof MKPinAnnotationColor>;
}

declare class MKMapSnapshot extends NSObject {
  readonly image: UIImage;

  pointForCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;

  readonly traitCollection: UITraitCollection;
}

declare class MKUserLocationView extends MKAnnotationView {
}

declare class MKLocalSearchCompletion extends NSObject {
  readonly title: string;

  readonly titleHighlightRanges: NSArray;

  readonly subtitle: string;

  readonly subtitleHighlightRanges: NSArray;
}

declare class MKLookAroundSnapshot extends NSObject {
  readonly image: UIImage;
}

declare class MKLookAroundSnapshotOptions extends NSObject {
  pointOfInterestFilter: MKPointOfInterestFilter;

  size: CGSize;

  traitCollection: UITraitCollection;
}

declare class MKTileOverlayRenderer extends MKOverlayRenderer {
  initWithTileOverlay(overlay: MKTileOverlay): this;

  reloadData(): void;
}

declare class MKOverlayView extends UIView {
  initWithOverlay(overlay: MKOverlay): this;

  readonly overlay: MKOverlay;

  pointForMapPoint(mapPoint: MKMapPoint): CGPoint;

  mapPointForPoint(point: CGPoint): MKMapPoint;

  rectForMapRect(mapRect: MKMapRect): CGRect;

  mapRectForRect(rect: CGRect): MKMapRect;

  canDrawMapRectZoomScale(mapRect: MKMapRect, zoomScale: number): boolean;

  drawMapRectZoomScaleInContext(mapRect: MKMapRect, zoomScale: number, context: interop.PointerConvertible): void;

  setNeedsDisplayInMapRect(mapRect: MKMapRect): void;

  setNeedsDisplayInMapRectZoomScale(mapRect: MKMapRect, zoomScale: number): void;
}

declare class MKIconStyle extends NSObject {
  readonly backgroundColor: UIColor;

  readonly image: UIImage;
}

declare class MKLookAroundViewController extends UIViewController implements NSSecureCoding, NSCoding {
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

declare class MKETAResponse extends NSObject {
  readonly source: MKMapItem;

  readonly destination: MKMapItem;

  readonly expectedTravelTime: number;

  readonly distance: number;

  readonly expectedArrivalDate: NSDate;

  readonly expectedDepartureDate: NSDate;

  readonly transportType: interop.Enum<typeof MKDirectionsTransportType>;
}

declare class MKReverseGeocoder extends NSObject {
  initWithCoordinate(coordinate: CLLocationCoordinate2D): this;

  start(): void;

  cancel(): void;

  delegate: MKReverseGeocoderDelegate;

  readonly coordinate: CLLocationCoordinate2D;

  readonly placemark: MKPlacemark;

  readonly isQuerying: boolean;
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

declare class MKHybridMapConfiguration extends MKMapConfiguration {
  init(): this;

  initWithElevationStyle(elevationStyle: interop.Enum<typeof MKMapElevationStyle>): this;

  pointOfInterestFilter: MKPointOfInterestFilter;

  showsTraffic: boolean;
}

declare class MKLocalSearchResponse extends NSObject {
  readonly mapItems: NSArray;

  readonly boundingRegion: MKCoordinateRegion;
}

declare class MKGeodesicPolyline extends MKPolyline {
  static polylineWithPointsCount<This extends abstract new (...args: any) => any>(this: This, points: interop.PointerConvertible, count: number): InstanceType<This>;

  static polylineWithCoordinatesCount<This extends abstract new (...args: any) => any>(this: This, coords: interop.PointerConvertible, count: number): InstanceType<This>;
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

  openInMapsWithLaunchOptionsFromSceneCompletionHandler(launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, scene: UIScene | null, completion: (p1: boolean) => void | null): void;

  static openMapsWithItemsLaunchOptionsFromSceneCompletionHandler(mapItems: NSArray<interop.Object> | Array<interop.Object>, launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, scene: UIScene | null, completion: (p1: boolean) => void | null): void;
}

declare class MKImageryMapConfiguration extends MKMapConfiguration {
  init(): this;

  initWithElevationStyle(elevationStyle: interop.Enum<typeof MKMapElevationStyle>): this;
}

declare class MKCompassButton extends UIView {
  static compassButtonWithMapView<This extends abstract new (...args: any) => any>(this: This, mapView: MKMapView | null): InstanceType<This>;

  mapView: MKMapView;

  compassVisibility: interop.Enum<typeof MKFeatureVisibility>;
}

declare class MKSelectionAccessory extends NSObject {
  static mapItemDetailWithPresentationStyle(presentationStyle: MKMapItemDetailSelectionAccessoryPresentationStyle): MKSelectionAccessory;
}

declare class MKGeoJSONDecoder extends NSObject {
  geoJSONObjectsWithDataError(data: NSData, errorPtr: interop.PointerConvertible): NSArray | null;
}

declare class MKLocalSearch extends NSObject {
  initWithRequest(request: MKLocalSearchRequest): this;

  initWithPointsOfInterestRequest(request: MKLocalPointsOfInterestRequest): this;

  startWithCompletionHandler(completionHandler: (p1: MKLocalSearchResponse, p2: NSError) => void): void;

  cancel(): void;

  readonly isSearching: boolean;
}

declare class MKPolylineRenderer extends MKOverlayPathRenderer {
  initWithPolyline(polyline: MKPolyline): this;

  readonly polyline: MKPolyline;

  strokeStart: number;

  strokeEnd: number;
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

declare class MKMultiPolygonRenderer extends MKOverlayPathRenderer {
  initWithMultiPolygon(multiPolygon: MKMultiPolygon): this;

  readonly multiPolygon: MKMultiPolygon;
}

