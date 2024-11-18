/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Foundation.d.ts" />
/// <reference path="./Runtime.d.ts" />

declare const CSSearchQueryErrorDomain: string;

declare const CSIndexErrorDomain: string;

declare const CSSearchableItemActivityIdentifier: string;

declare const CSSearchableItemActionType: string;

declare const CSMailboxArchive: string;

declare const CSMailboxJunk: string;

declare const CSMailboxSent: string;

declare const CoreSpotlightVersionString: interop.Pointer;

declare const CoreSpotlightVersionNumber: number;

declare const CSQueryContinuationActionType: string;

declare const CSMailboxDrafts: string;

declare const CSSuggestionHighlightAttributeName: string;

declare const CSMailboxInbox: string;

declare const CSMailboxTrash: string;

declare const CSSearchQueryString: string;

declare const CSUserInteraction: {
  Select: 0,
  Default: 0,
  Focus: 1,
};

declare const CSSuggestionKind: {
  None: 0,
  Custom: 1,
  Default: 2,
};

declare const CSSearchQueryErrorCode: {
  Unknown: -2000,
  IndexUnreachable: -2001,
  InvalidQuery: -2002,
  Cancelled: -2003,
};

declare const CSIndexErrorCode: {
  UnknownError: -1,
  IndexUnavailableError: -1000,
  InvalidItemError: -1001,
  InvalidClientStateError: -1002,
  RemoteConnectionError: -1003,
  QuotaExceeded: -1004,
  IndexingUnsupported: -1005,
  MismatchedClientState: -1006,
};

declare const CSSearchQuerySourceOptions: {
  Default: 0,
  AllowMail: 1,
};

declare interface CSSearchableIndexDelegate extends NSObjectProtocol {
  searchableIndexReindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: CSSearchableIndex, acknowledgementHandler: () => void): void;

  searchableIndexReindexSearchableItemsWithIdentifiersAcknowledgementHandler(searchableIndex: CSSearchableIndex, identifiers: NSArray<interop.Object> | Array<interop.Object>, acknowledgementHandler: () => void): void;

  searchableIndexDidThrottle?(searchableIndex: CSSearchableIndex): void;

  searchableIndexDidFinishThrottle?(searchableIndex: CSSearchableIndex): void;

  dataForSearchableIndexItemIdentifierTypeIdentifierError?(searchableIndex: CSSearchableIndex, itemIdentifier: string, typeIdentifier: string, outError: interop.PointerConvertible): NSData;

  fileURLForSearchableIndexItemIdentifierTypeIdentifierInPlaceError?(searchableIndex: CSSearchableIndex, itemIdentifier: string, typeIdentifier: string, inPlace: boolean, outError: interop.PointerConvertible): NSURL;
}

declare class CSSearchableIndexDelegate extends NativeObject implements CSSearchableIndexDelegate {
}

declare class CSUserQuery extends CSSearchQuery {
  static prepare(): void;

  static prepareProtectionClasses(protectionClasses: NSArray<interop.Object> | Array<interop.Object>): void;

  initWithUserQueryStringUserQueryContext(userQueryString: string | null, userQueryContext: CSUserQueryContext | null): this;

  readonly foundSuggestionCount: number;

  foundSuggestionsHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void;

  userEngagedWithItemVisibleItemsUserInteractionType(item: CSSearchableItem, visibleItems: NSArray<interop.Object> | Array<interop.Object>, userInteractionType: interop.Enum<typeof CSUserInteraction>): void;

  userEngagedWithSuggestionVisibleSuggestionsUserInteractionType(suggestion: CSSuggestion, visibleSuggestions: NSArray<interop.Object> | Array<interop.Object>, userInteractionType: interop.Enum<typeof CSUserInteraction>): void;

  start(): void;

  cancel(): void;
}

declare class CSUserQueryContext extends CSSearchQueryContext {
  static userQueryContext(): CSUserQueryContext;

  static userQueryContextWithCurrentSuggestion(currentSuggestion: CSSuggestion | null): CSUserQueryContext;

  enableRankedResults: boolean;

  disableSemanticSearch: boolean;

  maxResultCount: number;

  maxSuggestionCount: number;

  maxRankedResultCount: number;
}

declare class CSSearchQuery extends NSObject {
  initWithQueryStringQueryContext(queryString: string, queryContext: CSSearchQueryContext | null): this;

  initWithQueryStringAttributes(queryString: string, attributes: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly isCancelled: boolean;

  readonly foundItemCount: number;

  foundItemsHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void;

  completionHandler: (p1: NSError) => void | null;

  get protectionClasses(): NSArray;
  set protectionClasses(value: NSArray<interop.Object> | Array<interop.Object>);

  start(): void;

  cancel(): void;
}

declare class CSIndexExtensionRequestHandler extends NSObject implements NSExtensionRequestHandling, CSSearchableIndexDelegate {
  beginRequestWithExtensionContext(context: NSExtensionContext): void;

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

  searchableIndexReindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: CSSearchableIndex, acknowledgementHandler: () => void): void;

  searchableIndexReindexSearchableItemsWithIdentifiersAcknowledgementHandler(searchableIndex: CSSearchableIndex, identifiers: NSArray<interop.Object> | Array<interop.Object>, acknowledgementHandler: () => void): void;

  searchableIndexDidThrottle(searchableIndex: CSSearchableIndex): void;

  searchableIndexDidFinishThrottle(searchableIndex: CSSearchableIndex): void;

  dataForSearchableIndexItemIdentifierTypeIdentifierError(searchableIndex: CSSearchableIndex, itemIdentifier: string, typeIdentifier: string, outError: interop.PointerConvertible): NSData;

  fileURLForSearchableIndexItemIdentifierTypeIdentifierInPlaceError(searchableIndex: CSSearchableIndex, itemIdentifier: string, typeIdentifier: string, inPlace: boolean, outError: interop.PointerConvertible): NSURL;
}

declare class CSSearchableIndex extends NSObject {
  indexDelegate: CSSearchableIndexDelegate;

  static isIndexingAvailable(): boolean;

  static defaultSearchableIndex<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  initWithName(name: string): this;

  initWithNameProtectionClass(name: string, protectionClass: string | null): this;

  indexSearchableItemsCompletionHandler(items: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  deleteSearchableItemsWithIdentifiersCompletionHandler(identifiers: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  deleteSearchableItemsWithDomainIdentifiersCompletionHandler(domainIdentifiers: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;

  deleteAllSearchableItemsWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  beginIndexBatch(): void;

  endIndexBatchWithExpectedClientStateNewClientStateCompletionHandler(expectedClientState: NSData | null, newClientState: NSData, completionHandler: (p1: NSError) => void | null): void;

  endIndexBatchWithClientStateCompletionHandler(clientState: NSData, completionHandler: (p1: NSError) => void | null): void;

  fetchLastClientStateWithCompletionHandler(completionHandler: (p1: NSData, p2: NSError) => void | null): void;

  fetchDataForBundleIdentifierItemIdentifierContentTypeCompletionHandler(bundleIdentifier: string, itemIdentifier: string, contentType: UTType, completionHandler: (p1: NSData, p2: NSError) => void | null): void;
}

declare class CSSearchableItem extends NSObject implements NSSecureCoding, NSCopying {
  initWithUniqueIdentifierDomainIdentifierAttributeSet(uniqueIdentifier: string | null, domainIdentifier: string | null, attributeSet: CSSearchableItemAttributeSet): this;

  compareByRank(other: CSSearchableItem): interop.Enum<typeof NSComparisonResult>;

  uniqueIdentifier: string;

  domainIdentifier: string;

  expirationDate: NSDate;

  attributeSet: CSSearchableItemAttributeSet;

  isUpdate: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CSCustomAttributeKey extends NSObject implements NSCopying, NSSecureCoding {
  initWithKeyName(keyName: string): this;

  initWithKeyNameSearchableSearchableByDefaultUniqueMultiValued(keyName: string, searchable: boolean, searchableByDefault: boolean, unique: boolean, multiValued: boolean): this;

  readonly keyName: string;

  readonly isSearchable: boolean;

  readonly isSearchableByDefault: boolean;

  readonly isUnique: boolean;

  readonly isMultiValued: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CSSearchQueryContext extends NSObject implements NSSecureCoding, NSCopying {
  get fetchAttributes(): NSArray;
  set fetchAttributes(value: NSArray<interop.Object> | Array<interop.Object>);

  get filterQueries(): NSArray;
  set filterQueries(value: NSArray<interop.Object> | Array<interop.Object>);

  keyboardLanguage: string;

  sourceOptions: interop.Enum<typeof CSSearchQuerySourceOptions>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CSLocalizedString extends NSString {
  initWithLocalizedStrings(localizedStrings: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): this;

  localizedString(): string;
}

declare class CSImportExtension extends NSObject implements NSExtensionRequestHandling {
  updateAttributesForFileAtURLError(attributes: CSSearchableItemAttributeSet, contentURL: NSURL, error: interop.PointerConvertible): boolean;

  beginRequestWithExtensionContext(context: NSExtensionContext): void;

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

declare class CSPerson extends NSObject implements NSSecureCoding, NSCopying {
  initWithDisplayNameHandlesHandleIdentifier(displayName: string | null, handles: NSArray<interop.Object> | Array<interop.Object>, handleIdentifier: string): this;

  readonly displayName: string;

  readonly handles: NSArray;

  readonly handleIdentifier: string;

  contactIdentifier: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CSSuggestion extends NSObject implements NSSecureCoding, NSCopying {
  readonly localizedAttributedSuggestion: NSAttributedString;

  readonly suggestionKind: interop.Enum<typeof CSSuggestionKind>;

  compareByRank(other: CSSuggestion): interop.Enum<typeof NSComparisonResult>;

  compare(other: CSSuggestion): interop.Enum<typeof NSComparisonResult>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CSSearchableItemAttributeSet extends NSObject implements NSCopying, NSSecureCoding {
  initWithItemContentType(itemContentType: string): this;

  initWithContentType(contentType: UTType): this;

  setValueForCustomKey(value: NSSecureCoding | null, key: CSCustomAttributeKey): void;

  valueForCustomKey(key: CSCustomAttributeKey): NSSecureCoding;

  displayName: string;

  get alternateNames(): NSArray;
  set alternateNames(value: NSArray<interop.Object> | Array<interop.Object>);

  path: string;

  contentURL: NSURL;

  thumbnailURL: NSURL;

  thumbnailData: NSData;

  darkThumbnailURL: NSURL;

  relatedUniqueIdentifier: string;

  weakRelatedUniqueIdentifier: string;

  metadataModificationDate: NSDate;

  contentType: string;

  get contentTypeTree(): NSArray;
  set contentTypeTree(value: NSArray<interop.Object> | Array<interop.Object>);

  get keywords(): NSArray;
  set keywords(value: NSArray<interop.Object> | Array<interop.Object>);

  title: string;

  version: string;

  isUserCreated: NSNumber;

  isUserOwned: NSNumber;

  isUserCurated: NSNumber;

  rankingHint: NSNumber;

  domainIdentifier: string;

  supportsPhoneCall: NSNumber;

  supportsNavigation: NSNumber;

  containerTitle: string;

  containerDisplayName: string;

  containerIdentifier: string;

  containerOrder: NSNumber;

  get providerDataTypeIdentifiers(): NSArray;
  set providerDataTypeIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  get providerFileTypeIdentifiers(): NSArray;
  set providerFileTypeIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  get providerInPlaceFileTypeIdentifiers(): NSArray;
  set providerInPlaceFileTypeIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  subject: string;

  theme: string;

  contentDescription: string;

  identifier: string;

  get audiences(): NSArray;
  set audiences(value: NSArray<interop.Object> | Array<interop.Object>);

  fileSize: NSNumber;

  pageCount: NSNumber;

  pageWidth: NSNumber;

  pageHeight: NSNumber;

  securityMethod: string;

  creator: string;

  get encodingApplications(): NSArray;
  set encodingApplications(value: NSArray<interop.Object> | Array<interop.Object>);

  kind: string;

  get fontNames(): NSArray;
  set fontNames(value: NSArray<interop.Object> | Array<interop.Object>);

  dueDate: NSDate;

  completionDate: NSDate;

  startDate: NSDate;

  endDate: NSDate;

  get importantDates(): NSArray;
  set importantDates(value: NSArray<interop.Object> | Array<interop.Object>);

  allDay: NSNumber;

  accountIdentifier: string;

  get accountHandles(): NSArray;
  set accountHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  HTMLContentData: NSData;

  textContent: string;

  get authors(): NSArray;
  set authors(value: NSArray<interop.Object> | Array<interop.Object>);

  get primaryRecipients(): NSArray;
  set primaryRecipients(value: NSArray<interop.Object> | Array<interop.Object>);

  get additionalRecipients(): NSArray;
  set additionalRecipients(value: NSArray<interop.Object> | Array<interop.Object>);

  get hiddenAdditionalRecipients(): NSArray;
  set hiddenAdditionalRecipients(value: NSArray<interop.Object> | Array<interop.Object>);

  get emailHeaders(): NSDictionary;
  set emailHeaders(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get mailboxIdentifiers(): NSArray;
  set mailboxIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  get authorNames(): NSArray;
  set authorNames(value: NSArray<interop.Object> | Array<interop.Object>);

  get recipientNames(): NSArray;
  set recipientNames(value: NSArray<interop.Object> | Array<interop.Object>);

  get authorEmailAddresses(): NSArray;
  set authorEmailAddresses(value: NSArray<interop.Object> | Array<interop.Object>);

  get recipientEmailAddresses(): NSArray;
  set recipientEmailAddresses(value: NSArray<interop.Object> | Array<interop.Object>);

  get authorAddresses(): NSArray;
  set authorAddresses(value: NSArray<interop.Object> | Array<interop.Object>);

  get recipientAddresses(): NSArray;
  set recipientAddresses(value: NSArray<interop.Object> | Array<interop.Object>);

  get phoneNumbers(): NSArray;
  set phoneNumbers(value: NSArray<interop.Object> | Array<interop.Object>);

  get emailAddresses(): NSArray;
  set emailAddresses(value: NSArray<interop.Object> | Array<interop.Object>);

  get instantMessageAddresses(): NSArray;
  set instantMessageAddresses(value: NSArray<interop.Object> | Array<interop.Object>);

  isLikelyJunk: NSNumber;

  get editors(): NSArray;
  set editors(value: NSArray<interop.Object> | Array<interop.Object>);

  get participants(): NSArray;
  set participants(value: NSArray<interop.Object> | Array<interop.Object>);

  get projects(): NSArray;
  set projects(value: NSArray<interop.Object> | Array<interop.Object>);

  downloadedDate: NSDate;

  get contentSources(): NSArray;
  set contentSources(value: NSArray<interop.Object> | Array<interop.Object>);

  comment: string;

  copyright: string;

  lastUsedDate: NSDate;

  contentCreationDate: NSDate;

  contentModificationDate: NSDate;

  addedDate: NSDate;

  duration: NSNumber;

  get contactKeywords(): NSArray;
  set contactKeywords(value: NSArray<interop.Object> | Array<interop.Object>);

  get codecs(): NSArray;
  set codecs(value: NSArray<interop.Object> | Array<interop.Object>);

  get mediaTypes(): NSArray;
  set mediaTypes(value: NSArray<interop.Object> | Array<interop.Object>);

  isStreamable: NSNumber;

  totalBitRate: NSNumber;

  videoBitRate: NSNumber;

  audioBitRate: NSNumber;

  deliveryType: NSNumber;

  get organizations(): NSArray;
  set organizations(value: NSArray<interop.Object> | Array<interop.Object>);

  role: string;

  get languages(): NSArray;
  set languages(value: NSArray<interop.Object> | Array<interop.Object>);

  rights: string;

  get publishers(): NSArray;
  set publishers(value: NSArray<interop.Object> | Array<interop.Object>);

  get contributors(): NSArray;
  set contributors(value: NSArray<interop.Object> | Array<interop.Object>);

  get coverage(): NSArray;
  set coverage(value: NSArray<interop.Object> | Array<interop.Object>);

  rating: NSNumber;

  ratingDescription: string;

  playCount: NSNumber;

  information: string;

  director: string;

  producer: string;

  genre: string;

  get performers(): NSArray;
  set performers(value: NSArray<interop.Object> | Array<interop.Object>);

  originalFormat: string;

  originalSource: string;

  isLocal: NSNumber;

  contentRating: NSNumber;

  URL: NSURL;

  audioSampleRate: NSNumber;

  audioChannelCount: NSNumber;

  tempo: NSNumber;

  keySignature: string;

  timeSignature: string;

  audioEncodingApplication: string;

  composer: string;

  lyricist: string;

  album: string;

  artist: string;

  audioTrackNumber: NSNumber;

  recordingDate: NSDate;

  musicalGenre: string;

  isGeneralMIDISequence: NSNumber;

  musicalInstrumentCategory: string;

  musicalInstrumentName: string;

  pixelHeight: NSNumber;

  pixelWidth: NSNumber;

  pixelCount: NSNumber;

  colorSpace: string;

  bitsPerSample: NSNumber;

  isFlashOn: NSNumber;

  focalLength: NSNumber;

  isFocalLength35mm: NSNumber;

  acquisitionMake: string;

  acquisitionModel: string;

  cameraOwner: string;

  lensModel: string;

  ISOSpeed: NSNumber;

  orientation: NSNumber;

  get layerNames(): NSArray;
  set layerNames(value: NSArray<interop.Object> | Array<interop.Object>);

  whiteBalance: NSNumber;

  aperture: NSNumber;

  profileName: string;

  resolutionWidthDPI: NSNumber;

  resolutionHeightDPI: NSNumber;

  exposureMode: NSNumber;

  exposureTime: NSNumber;

  EXIFVersion: string;

  EXIFGPSVersion: string;

  hasAlphaChannel: NSNumber;

  isRedEyeOn: NSNumber;

  meteringMode: string;

  maxAperture: NSNumber;

  fNumber: NSNumber;

  exposureProgram: string;

  exposureTimeString: string;

  headline: string;

  instructions: string;

  thoroughfare: string;

  subThoroughfare: string;

  postalCode: string;

  city: string;

  stateOrProvince: string;

  country: string;

  fullyFormattedAddress: string;

  altitude: NSNumber;

  latitude: NSNumber;

  longitude: NSNumber;

  speed: NSNumber;

  timestamp: NSDate;

  imageDirection: NSNumber;

  namedLocation: string;

  GPSTrack: NSNumber;

  GPSStatus: string;

  GPSMeasureMode: string;

  GPSDOP: NSNumber;

  GPSMapDatum: string;

  GPSDestLatitude: NSNumber;

  GPSDestLongitude: NSNumber;

  GPSDestBearing: NSNumber;

  GPSDestDistance: NSNumber;

  GPSProcessingMethod: string;

  GPSAreaInformation: string;

  GPSDateStamp: NSDate;

  GPSDifferental: NSNumber;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

