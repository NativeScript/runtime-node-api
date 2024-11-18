/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./Foundation.d.ts" />

declare const CKQueryOperationMaximumResults: number;

declare const CKShareTypeKey: string;

declare const CKShareThumbnailImageDataKey: string;

declare const CKRecordTypeShare: string;

declare const CKRecordChangedErrorServerRecordKey: string;

declare const CKPartialErrorsByItemIDKey: string;

declare const CKCurrentUserDefaultName: string;

declare const CKRecordShareKey: string;

declare const CKRecordParentKey: string;

declare const CKRecordModificationDateKey: string;

declare const CKRecordLastModifiedUserRecordIDKey: string;

declare const CKRecordCreatorUserRecordIDKey: string;

declare const CKRecordTypeUserRecord: string;

declare const CKRecordChangedErrorClientRecordKey: string;

declare const CKErrorUserDidResetEncryptedDataKey: string;

declare const CKErrorDomain: string;

declare const CKRecordNameZoneWideShare: string;

declare const CKErrorRetryAfterKey: string;

declare const CKOwnerDefaultName: string;

declare const CKRecordRecordIDKey: string;

declare const CKRecordCreationDateKey: string;

declare const CKShareTitleKey: string;

declare const CKRecordChangedErrorAncestorRecordKey: string;

declare const CKAccountChangedNotification: string;

declare const CKRecordZoneDefaultName: string;

declare const CKSyncEngineZoneDeletionReason: {
  Deleted: 0,
  Purged: 1,
  EncryptedDataReset: 2,
};

declare const CKSharingParticipantPermissionOption: {
  ReadOnly: 1,
  ReadWrite: 2,
  Any: 3,
};

declare const CKSharingParticipantAccessOption: {
  AnyoneWithLink: 1,
  SpecifiedRecipientsOnly: 2,
  Any: 3,
};

declare const CKOperationGroupTransferSize: {
  Unknown: 0,
  Kilobytes: 1,
  Megabytes: 2,
  TensOfMegabytes: 3,
  HundredsOfMegabytes: 4,
  Gigabytes: 5,
  TensOfGigabytes: 6,
  HundredsOfGigabytes: 7,
};

declare const CKRecordSavePolicy: {
  IfServerRecordUnchanged: 0,
  ChangedKeys: 1,
  AllKeys: 2,
};

declare const CKShareParticipantType: {
  Unknown: 0,
  Owner: 1,
  PrivateUser: 3,
  PublicUser: 4,
};

declare const CKRecordZoneCapabilities: {
  FetchChanges: 1,
  Atomic: 2,
  Sharing: 4,
  ZoneWideSharing: 8,
};

declare const CKErrorCode: {
  InternalError: 1,
  PartialFailure: 2,
  NetworkUnavailable: 3,
  NetworkFailure: 4,
  BadContainer: 5,
  ServiceUnavailable: 6,
  RequestRateLimited: 7,
  MissingEntitlement: 8,
  NotAuthenticated: 9,
  PermissionFailure: 10,
  UnknownItem: 11,
  InvalidArguments: 12,
  ResultsTruncated: 13,
  ServerRecordChanged: 14,
  ServerRejectedRequest: 15,
  AssetFileNotFound: 16,
  AssetFileModified: 17,
  IncompatibleVersion: 18,
  ConstraintViolation: 19,
  OperationCancelled: 20,
  ChangeTokenExpired: 21,
  BatchRequestFailed: 22,
  ZoneBusy: 23,
  BadDatabase: 24,
  QuotaExceeded: 25,
  ZoneNotFound: 26,
  LimitExceeded: 27,
  UserDeletedZone: 28,
  TooManyParticipants: 29,
  AlreadyShared: 30,
  ReferenceViolation: 31,
  ManagedAccountRestricted: 32,
  ParticipantMayNeedVerification: 33,
  ServerResponseLost: 34,
  AssetNotAvailable: 35,
  AccountTemporarilyUnavailable: 36,
};

declare const CKApplicationPermissionStatus: {
  InitialState: 0,
  CouldNotComplete: 1,
  Denied: 2,
  Granted: 3,
};

declare const CKApplicationPermissions: {
  CKApplicationPermissionUserDiscoverability: 1,
};

declare const CKSyncEnginePendingRecordZoneChangeType: {
  Save: 0,
  Delete: 1,
};

declare const CKShareParticipantRole: {
  Unknown: 0,
  Owner: 1,
  PrivateUser: 3,
  PublicUser: 4,
};

declare const CKDatabaseScope: {
  Public: 1,
  Private: 2,
  Shared: 3,
};

declare const CKQuerySubscriptionOptions: {
  OnRecordCreation: 1,
  OnRecordUpdate: 2,
  OnRecordDeletion: 4,
  Once: 8,
};

declare const CKReferenceAction: {
  None: 0,
  DeleteSelf: 1,
};

declare const CKQueryNotificationReason: {
  Created: 1,
  Updated: 2,
  Deleted: 3,
};

declare const CKAccountStatus: {
  CouldNotDetermine: 0,
  Available: 1,
  Restricted: 2,
  NoAccount: 3,
  TemporarilyUnavailable: 4,
};

declare const CKSyncEngineSyncReason: {
  Scheduled: 0,
  Manual: 1,
};

declare const CKSubscriptionType: {
  Query: 1,
  RecordZone: 2,
  Database: 3,
};

declare const CKSyncEngineEventType: {
  StateUpdate: 0,
  AccountChange: 1,
  FetchedDatabaseChanges: 2,
  FetchedRecordZoneChanges: 3,
  SentDatabaseChanges: 4,
  SentRecordZoneChanges: 5,
  WillFetchChanges: 6,
  WillFetchRecordZoneChanges: 7,
  DidFetchRecordZoneChanges: 8,
  DidFetchChanges: 9,
  WillSendChanges: 10,
  DidSendChanges: 11,
};

declare const CKShareParticipantAcceptanceStatus: {
  Unknown: 0,
  Pending: 1,
  Accepted: 2,
  Removed: 3,
};

declare const CKNotificationType: {
  Query: 1,
  RecordZone: 2,
  ReadNotification: 3,
  Database: 4,
};

declare const CKSyncEnginePendingDatabaseChangeType: {
  Save: 0,
  Delete: 1,
};

declare const CKShareParticipantPermission: {
  Unknown: 0,
  None: 1,
  ReadOnly: 2,
  ReadWrite: 3,
};

declare const CKSyncEngineAccountChangeType: {
  SignIn: 0,
  SignOut: 1,
  SwitchAccounts: 2,
};

declare interface CKSyncEngineDelegate extends NSObjectProtocol {
  syncEngineHandleEvent(syncEngine: CKSyncEngine, event: CKSyncEngineEvent): void;

  syncEngineNextRecordZoneChangeBatchForContext(syncEngine: CKSyncEngine, context: CKSyncEngineSendChangesContext): CKSyncEngineRecordZoneChangeBatch;

  syncEngineNextFetchChangesOptionsForContext?(syncEngine: CKSyncEngine, context: CKSyncEngineFetchChangesContext): CKSyncEngineFetchChangesOptions;
}

declare class CKSyncEngineDelegate extends NativeObject implements CKSyncEngineDelegate {
}

declare interface CKRecordKeyValueSetting extends NSObjectProtocol {
  objectForKey(key: string): CKRecordValue;

  setObjectForKey(object: CKRecordValue | null, key: string): void;

  objectForKeyedSubscript(key: string): CKRecordValue;

  setObjectForKeyedSubscript(object: CKRecordValue | null, key: string): void;

  allKeys(): NSArray;

  changedKeys(): NSArray;
}

declare class CKRecordKeyValueSetting extends NativeObject implements CKRecordKeyValueSetting {
}

declare interface CKRecordValue extends NSObjectProtocol {
}

declare class CKRecordValue extends NativeObject implements CKRecordValue {
}

declare class CKSyncEngineDidSendChangesEvent extends CKSyncEngineEvent {
  readonly context: CKSyncEngineSendChangesContext;
}

declare class CKSyncEngineWillSendChangesEvent extends CKSyncEngineEvent {
  readonly context: CKSyncEngineSendChangesContext;
}

declare class CKSyncEngineDidFetchChangesEvent extends CKSyncEngineEvent {
  readonly context: CKSyncEngineFetchChangesContext;
}

declare class CKSyncEngineSentRecordZoneChangesEvent extends CKSyncEngineEvent {
  readonly savedRecords: NSArray;

  readonly failedRecordSaves: NSArray;

  readonly deletedRecordIDs: NSArray;

  readonly failedRecordDeletes: NSDictionary;
}

declare class CKSyncEngineSentDatabaseChangesEvent extends CKSyncEngineEvent {
  readonly savedZones: NSArray;

  readonly failedZoneSaves: NSArray;

  readonly deletedZoneIDs: NSArray;

  readonly failedZoneDeletes: NSDictionary;
}

declare class CKSyncEngineFetchedDatabaseChangesEvent extends CKSyncEngineEvent {
  readonly modifications: NSArray;

  readonly deletions: NSArray;
}

declare class CKSyncEngineAccountChangeEvent extends CKSyncEngineEvent {
  readonly changeType: interop.Enum<typeof CKSyncEngineAccountChangeType>;

  readonly previousUser: CKRecordID;

  readonly currentUser: CKRecordID;
}

declare class CKSyncEngineStateUpdateEvent extends CKSyncEngineEvent {
  readonly stateSerialization: CKSyncEngineStateSerialization;
}

declare class CKSyncEngineEvent extends NSObject {
  readonly type: interop.Enum<typeof CKSyncEngineEventType>;

  readonly stateUpdateEvent: CKSyncEngineStateUpdateEvent;

  readonly accountChangeEvent: CKSyncEngineAccountChangeEvent;

  readonly fetchedDatabaseChangesEvent: CKSyncEngineFetchedDatabaseChangesEvent;

  readonly fetchedRecordZoneChangesEvent: CKSyncEngineFetchedRecordZoneChangesEvent;

  readonly sentDatabaseChangesEvent: CKSyncEngineSentDatabaseChangesEvent;

  readonly sentRecordZoneChangesEvent: CKSyncEngineSentRecordZoneChangesEvent;

  readonly willFetchChangesEvent: CKSyncEngineWillFetchChangesEvent;

  readonly willFetchRecordZoneChangesEvent: CKSyncEngineWillFetchRecordZoneChangesEvent;

  readonly didFetchRecordZoneChangesEvent: CKSyncEngineDidFetchRecordZoneChangesEvent;

  readonly didFetchChangesEvent: CKSyncEngineDidFetchChangesEvent;

  readonly willSendChangesEvent: CKSyncEngineWillSendChangesEvent;

  readonly didSendChangesEvent: CKSyncEngineDidSendChangesEvent;
}

declare class CKSyncEngineConfiguration extends NSObject {
  initWithDatabaseStateSerializationDelegate(database: CKDatabase, stateSerialization: CKSyncEngineStateSerialization | null, delegate: CKSyncEngineDelegate): this;

  database: CKDatabase;

  stateSerialization: CKSyncEngineStateSerialization;

  delegate: CKSyncEngineDelegate | null;

  automaticallySync: boolean;

  subscriptionID: string;
}

declare class CKSyncEngineFetchChangesContext extends NSObject {
  readonly reason: interop.Enum<typeof CKSyncEngineSyncReason>;

  readonly options: CKSyncEngineFetchChangesOptions;
}

declare class CKSyncEngineSendChangesOptions extends NSObject implements NSCopying {
  scope: CKSyncEngineSendChangesScope;

  operationGroup: CKOperationGroup;

  initWithScope(scope: CKSyncEngineSendChangesScope | null): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKSyncEngineFetchChangesOptions extends NSObject implements NSCopying {
  scope: CKSyncEngineFetchChangesScope;

  operationGroup: CKOperationGroup;

  get prioritizedZoneIDs(): NSArray;
  set prioritizedZoneIDs(value: NSArray<interop.Object> | Array<interop.Object>);

  initWithScope(scope: CKSyncEngineFetchChangesScope | null): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKSyncEngineRecordZoneChangeBatch extends NSObject {
  initWithPendingChangesRecordProvider(pendingChanges: NSArray<interop.Object> | Array<interop.Object>, recordProvider: (p1: CKRecordID) => CKRecord | null): this;

  initWithRecordsToSaveRecordIDsToDeleteAtomicByZone(recordsToSave: NSArray<interop.Object> | Array<interop.Object> | null, recordIDsToDelete: NSArray<interop.Object> | Array<interop.Object> | null, atomicByZone: boolean): this;

  readonly recordsToSave: NSArray;

  readonly recordIDsToDelete: NSArray;

  atomicByZone: boolean;
}

declare class CKSyncEnginePendingDatabaseChange extends NSObject {
  readonly zoneID: CKRecordZoneID;

  readonly type: interop.Enum<typeof CKSyncEnginePendingDatabaseChangeType>;
}

declare class CKSyncEngineStateSerialization extends NSObject implements NSSecureCoding {
  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CKQueryOperation extends CKDatabaseOperation {
  init(): this;

  initWithQuery(query: CKQuery): this;

  initWithCursor(cursor: CKQueryCursor): this;

  query: CKQuery;

  cursor: CKQueryCursor;

  zoneID: CKRecordZoneID;

  resultsLimit: number;

  get desiredKeys(): NSArray;
  set desiredKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  recordFetchedBlock: (p1: CKRecord) => void;

  recordMatchedBlock: (p1: CKRecordID, p2: CKRecord, p3: NSError) => void | null;

  queryCompletionBlock: (p1: CKQueryCursor, p2: NSError) => void | null;
}

declare class CKModifyRecordsOperation extends CKDatabaseOperation {
  init(): this;

  initWithRecordsToSaveRecordIDsToDelete(records: NSArray<interop.Object> | Array<interop.Object> | null, recordIDs: NSArray<interop.Object> | Array<interop.Object> | null): this;

  get recordsToSave(): NSArray;
  set recordsToSave(value: NSArray<interop.Object> | Array<interop.Object>);

  get recordIDsToDelete(): NSArray;
  set recordIDsToDelete(value: NSArray<interop.Object> | Array<interop.Object>);

  savePolicy: interop.Enum<typeof CKRecordSavePolicy>;

  clientChangeTokenData: NSData;

  atomic: boolean;

  perRecordProgressBlock: (p1: CKRecord, p2: number) => void;

  perRecordCompletionBlock: (p1: CKRecord, p2: NSError) => void | null;

  perRecordSaveBlock: (p1: CKRecordID, p2: CKRecord, p3: NSError) => void | null;

  perRecordDeleteBlock: (p1: CKRecordID, p2: NSError) => void | null;

  modifyRecordsCompletionBlock: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSArray<interop.Object> | Array<interop.Object>, p3: NSError) => void | null;
}

declare class CKFetchSubscriptionsOperation extends CKDatabaseOperation {
  static fetchAllSubscriptionsOperation<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  init(): this;

  initWithSubscriptionIDs(subscriptionIDs: NSArray<interop.Object> | Array<interop.Object>): this;

  get subscriptionIDs(): NSArray;
  set subscriptionIDs(value: NSArray<interop.Object> | Array<interop.Object>);

  perSubscriptionCompletionBlock: (p1: string, p2: CKSubscription, p3: NSError) => void | null;

  fetchSubscriptionCompletionBlock: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, p2: NSError) => void | null;
}

declare class CKFetchRecordZoneChangesOptions extends NSObject implements NSSecureCoding, NSCopying {
  previousServerChangeToken: CKServerChangeToken;

  resultsLimit: number;

  get desiredKeys(): NSArray;
  set desiredKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKFetchRecordChangesOperation extends CKDatabaseOperation {
  init(): this;

  initWithRecordZoneIDPreviousServerChangeToken(recordZoneID: CKRecordZoneID, previousServerChangeToken: CKServerChangeToken | null): this;

  recordZoneID: CKRecordZoneID;

  previousServerChangeToken: CKServerChangeToken;

  resultsLimit: number;

  get desiredKeys(): NSArray;
  set desiredKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  recordChangedBlock: (p1: CKRecord) => void;

  recordWithIDWasDeletedBlock: (p1: CKRecordID) => void;

  readonly moreComing: boolean;

  fetchRecordChangesCompletionBlock: (p1: CKServerChangeToken, p2: NSData, p3: NSError) => void | null;
}

declare class CKDiscoverUserIdentitiesOperation extends CKOperation {
  init(): this;

  initWithUserIdentityLookupInfos(userIdentityLookupInfos: NSArray<interop.Object> | Array<interop.Object>): this;

  get userIdentityLookupInfos(): NSArray;
  set userIdentityLookupInfos(value: NSArray<interop.Object> | Array<interop.Object>);

  userIdentityDiscoveredBlock: (p1: CKUserIdentity, p2: CKUserIdentityLookupInfo) => void;

  discoverUserIdentitiesCompletionBlock: (p1: NSError) => void | null;
}

declare class CKUserIdentityLookupInfo extends NSObject implements NSSecureCoding, NSCopying {
  initWithEmailAddress(emailAddress: string): this;

  initWithPhoneNumber(phoneNumber: string): this;

  initWithUserRecordID(userRecordID: CKRecordID): this;

  static lookupInfosWithEmails(emails: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static lookupInfosWithPhoneNumbers(phoneNumbers: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static lookupInfosWithRecordIDs(recordIDs: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  readonly emailAddress: string;

  readonly phoneNumber: string;

  readonly userRecordID: CKRecordID;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKUserIdentity extends NSObject implements NSSecureCoding, NSCopying {
  readonly userRecordID: CKRecordID;

  readonly lookupInfo: CKUserIdentityLookupInfo;

  readonly nameComponents: NSPersonNameComponents;

  readonly hasiCloudAccount: boolean;

  readonly contactIdentifiers: NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKShareMetadata extends NSObject implements NSCopying, NSSecureCoding {
  readonly containerIdentifier: string;

  readonly share: CKShare;

  readonly hierarchicalRootRecordID: CKRecordID;

  readonly participantRole: interop.Enum<typeof CKShareParticipantRole>;

  readonly participantStatus: interop.Enum<typeof CKShareParticipantAcceptanceStatus>;

  readonly participantPermission: interop.Enum<typeof CKShareParticipantPermission>;

  readonly ownerIdentity: CKUserIdentity;

  readonly rootRecord: CKRecord;

  readonly participantType: interop.Enum<typeof CKShareParticipantType>;

  readonly rootRecordID: CKRecordID;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class CKShare extends CKRecord implements NSSecureCoding, NSCopying {
  initWithRootRecord(rootRecord: CKRecord): this;

  initWithRootRecordShareID(rootRecord: CKRecord, shareID: CKRecordID): this;

  initWithRecordZoneID(recordZoneID: CKRecordZoneID): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  publicPermission: interop.Enum<typeof CKShareParticipantPermission>;

  readonly URL: NSURL;

  readonly participants: NSArray;

  readonly owner: CKShareParticipant;

  readonly currentUserParticipant: CKShareParticipant;

  addParticipant(participant: CKShareParticipant): void;

  removeParticipant(participant: CKShareParticipant): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKServerChangeToken extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CKRecordZoneID extends NSObject implements NSSecureCoding, NSCopying {
  initWithZoneNameOwnerName(zoneName: string, ownerName: string): this;

  readonly zoneName: string;

  readonly ownerName: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKRecordZone extends NSObject implements NSSecureCoding, NSCopying {
  static defaultRecordZone(): CKRecordZone;

  initWithZoneName(zoneName: string): this;

  initWithZoneID(zoneID: CKRecordZoneID): this;

  readonly zoneID: CKRecordZoneID;

  readonly capabilities: interop.Enum<typeof CKRecordZoneCapabilities>;

  readonly share: CKReference;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKQuery extends NSObject implements NSSecureCoding, NSCopying {
  initWithCoder(aDecoder: NSCoder): this;

  initWithRecordTypePredicate(recordType: string, predicate: NSPredicate): this;

  readonly recordType: string;

  readonly predicate: NSPredicate;

  get sortDescriptors(): NSArray;
  set sortDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKOperationGroup extends NSObject implements NSSecureCoding {
  init(): this;

  initWithCoder(aDecoder: NSCoder): this;

  readonly operationGroupID: string;

  defaultConfiguration: CKOperationConfiguration;

  name: string;

  quantity: number;

  expectedSendSize: interop.Enum<typeof CKOperationGroupTransferSize>;

  expectedReceiveSize: interop.Enum<typeof CKOperationGroupTransferSize>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class CKQueryNotification extends CKNotification {
  readonly queryNotificationReason: interop.Enum<typeof CKQueryNotificationReason>;

  readonly recordFields: NSDictionary;

  readonly recordID: CKRecordID;

  readonly databaseScope: interop.Enum<typeof CKDatabaseScope>;
}

declare class CKNotificationID extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CKOperation extends NSOperation {
  init(): this;

  configuration: CKOperationConfiguration;

  group: CKOperationGroup;

  readonly operationID: string;

  longLivedOperationWasPersistedBlock: () => void;

  container: CKContainer;

  allowsCellularAccess: boolean;

  isLongLived: boolean;

  timeoutIntervalForRequest: number;

  timeoutIntervalForResource: number;
}

declare class CKFetchRecordZoneChangesConfiguration extends NSObject implements NSSecureCoding, NSCopying {
  previousServerChangeToken: CKServerChangeToken;

  resultsLimit: number;

  get desiredKeys(): NSArray;
  set desiredKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKFetchRecordsOperation extends CKDatabaseOperation {
  init(): this;

  initWithRecordIDs(recordIDs: NSArray<interop.Object> | Array<interop.Object>): this;

  static fetchCurrentUserRecordOperation<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  get recordIDs(): NSArray;
  set recordIDs(value: NSArray<interop.Object> | Array<interop.Object>);

  get desiredKeys(): NSArray;
  set desiredKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  perRecordProgressBlock: (p1: CKRecordID, p2: number) => void;

  perRecordCompletionBlock: (p1: CKRecord, p2: CKRecordID, p3: NSError) => void | null;

  fetchRecordsCompletionBlock: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, p2: NSError) => void | null;
}

declare class CKDatabase extends NSObject {
  addOperation(operation: CKDatabaseOperation): void;

  readonly databaseScope: interop.Enum<typeof CKDatabaseScope>;

  fetchRecordWithIDCompletionHandler(recordID: CKRecordID, completionHandler: (p1: CKRecord, p2: NSError) => void | null): void;

  saveRecordCompletionHandler(record: CKRecord, completionHandler: (p1: CKRecord, p2: NSError) => void | null): void;

  deleteRecordWithIDCompletionHandler(recordID: CKRecordID, completionHandler: (p1: CKRecordID, p2: NSError) => void | null): void;

  performQueryInZoneWithIDCompletionHandler(query: CKQuery, zoneID: CKRecordZoneID | null, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  fetchAllRecordZonesWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  fetchRecordZoneWithIDCompletionHandler(zoneID: CKRecordZoneID, completionHandler: (p1: CKRecordZone, p2: NSError) => void | null): void;

  saveRecordZoneCompletionHandler(zone: CKRecordZone, completionHandler: (p1: CKRecordZone, p2: NSError) => void | null): void;

  deleteRecordZoneWithIDCompletionHandler(zoneID: CKRecordZoneID, completionHandler: (p1: CKRecordZoneID, p2: NSError) => void | null): void;

  fetchSubscriptionWithIDCompletionHandler(subscriptionID: string, completionHandler: (p1: CKSubscription, p2: NSError) => void | null): void;

  fetchAllSubscriptionsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  saveSubscriptionCompletionHandler(subscription: CKSubscription, completionHandler: (p1: CKSubscription, p2: NSError) => void | null): void;

  deleteSubscriptionWithIDCompletionHandler(subscriptionID: string, completionHandler: (p1: string, p2: NSError) => void | null): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class CKDatabaseSubscription extends CKSubscription implements NSSecureCoding, NSCopying {
  init(): this;

  static new<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  initWithSubscriptionID(subscriptionID: string): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  recordType: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class CKQuerySubscription extends CKSubscription implements NSSecureCoding, NSCopying {
  initWithRecordTypePredicateOptions(recordType: string, predicate: NSPredicate, querySubscriptionOptions: interop.Enum<typeof CKQuerySubscriptionOptions>): this;

  initWithRecordTypePredicateSubscriptionIDOptions(recordType: string, predicate: NSPredicate, subscriptionID: string, querySubscriptionOptions: interop.Enum<typeof CKQuerySubscriptionOptions>): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  readonly recordType: string;

  readonly predicate: NSPredicate;

  zoneID: CKRecordZoneID;

  readonly querySubscriptionOptions: interop.Enum<typeof CKQuerySubscriptionOptions>;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKAsset extends NSObject {
  initWithFileURL(fileURL: NSURL): this;

  readonly fileURL: NSURL;
}

// @ts-ignore ClassDecl.tsIgnore
declare class CKLocationSortDescriptor extends NSSortDescriptor implements NSSecureCoding {
  initWithKeyRelativeLocation(key: string, relativeLocation: CLLocation): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  readonly relativeLocation: CLLocation;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class CKQueryCursor extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class CKDiscoverAllUserIdentitiesOperation extends CKOperation {
  init(): this;

  userIdentityDiscoveredBlock: (p1: CKUserIdentity) => void;

  discoverAllUserIdentitiesCompletionBlock: (p1: NSError) => void | null;
}

declare class CKSyncEngineFailedRecordSave extends NSObject {
  readonly record: CKRecord;

  readonly error: NSError;
}

declare class CKNotification extends NSObject {
  static notificationFromRemoteNotificationDictionary<This extends abstract new (...args: any) => any>(this: This, notificationDictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): InstanceType<This>;

  readonly notificationType: interop.Enum<typeof CKNotificationType>;

  readonly notificationID: CKNotificationID;

  readonly containerIdentifier: string;

  readonly subscriptionOwnerUserRecordID: CKRecordID;

  readonly isPruned: boolean;

  readonly subscriptionID: string;

  readonly alertBody: string;

  readonly alertLocalizationKey: string;

  readonly alertLocalizationArgs: NSArray;

  readonly title: string;

  readonly titleLocalizationKey: string;

  readonly titleLocalizationArgs: NSArray;

  readonly subtitle: string;

  readonly subtitleLocalizationKey: string;

  readonly subtitleLocalizationArgs: NSArray;

  readonly alertActionLocalizationKey: string;

  readonly alertLaunchImage: string;

  readonly badge: NSNumber;

  readonly soundName: string;

  readonly category: string;
}

// @ts-ignore ClassDecl.tsIgnore
declare class CKRecordZoneSubscription extends CKSubscription implements NSSecureCoding, NSCopying {
  initWithZoneID(zoneID: CKRecordZoneID): this;

  initWithZoneIDSubscriptionID(zoneID: CKRecordZoneID, subscriptionID: string): this;

  // @ts-ignore MemberDecl.tsIgnore
  initWithCoder(aDecoder: NSCoder): this;

  readonly zoneID: CKRecordZoneID;

  recordType: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKSyncEngineState extends NSObject {
  readonly pendingRecordZoneChanges: NSArray;

  readonly pendingDatabaseChanges: NSArray;

  hasPendingUntrackedChanges: boolean;

  readonly zoneIDsWithUnfetchedServerChanges: NSArray;

  addPendingRecordZoneChanges(changes: NSArray<interop.Object> | Array<interop.Object>): void;

  removePendingRecordZoneChanges(changes: NSArray<interop.Object> | Array<interop.Object>): void;

  addPendingDatabaseChanges(changes: NSArray<interop.Object> | Array<interop.Object>): void;

  removePendingDatabaseChanges(changes: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class CKSubscription extends NSObject implements NSSecureCoding, NSCopying {
  readonly subscriptionID: string;

  readonly subscriptionType: interop.Enum<typeof CKSubscriptionType>;

  notificationInfo: CKNotificationInfo;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKSystemSharingUIObserver extends NSObject {
  initWithContainer(container: CKContainer): this;

  systemSharingUIDidSaveShareBlock: (p1: CKRecordID, p2: CKShare, p3: NSError) => void | null;

  systemSharingUIDidStopSharingBlock: (p1: CKRecordID, p2: NSError) => void | null;
}

declare class CKFetchShareMetadataOperation extends CKOperation {
  init(): this;

  initWithShareURLs(shareURLs: NSArray<interop.Object> | Array<interop.Object>): this;

  get shareURLs(): NSArray;
  set shareURLs(value: NSArray<interop.Object> | Array<interop.Object>);

  shouldFetchRootRecord: boolean;

  get rootRecordDesiredKeys(): NSArray;
  set rootRecordDesiredKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  perShareMetadataBlock: (p1: NSURL, p2: CKShareMetadata, p3: NSError) => void | null;

  fetchShareMetadataCompletionBlock: (p1: NSError) => void | null;
}

declare class CKDatabaseNotification extends CKNotification {
  readonly databaseScope: interop.Enum<typeof CKDatabaseScope>;
}

declare class CKSyncEngineSendChangesScope extends NSObject implements NSCopying {
  readonly zoneIDs: NSSet;

  readonly excludedZoneIDs: NSSet;

  readonly recordIDs: NSSet;

  initWithZoneIDs(zoneIDs: NSSet | null): this;

  initWithExcludedZoneIDs(excludedZoneIDs: NSSet): this;

  initWithRecordIDs(recordIDs: NSSet | null): this;

  containsRecordID(recordID: CKRecordID): boolean;

  containsPendingRecordZoneChange(pendingRecordZoneChange: CKSyncEnginePendingRecordZoneChange): boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKSyncEngineFetchedRecordZoneChangesEvent extends CKSyncEngineEvent {
  readonly modifications: NSArray;

  readonly deletions: NSArray;
}

declare class CKRecordID extends NSObject implements NSSecureCoding, NSCopying {
  initWithRecordName(recordName: string): this;

  initWithRecordNameZoneID(recordName: string, zoneID: CKRecordZoneID): this;

  readonly recordName: string;

  readonly zoneID: CKRecordZoneID;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKModifyRecordZonesOperation extends CKDatabaseOperation {
  init(): this;

  initWithRecordZonesToSaveRecordZoneIDsToDelete(recordZonesToSave: NSArray<interop.Object> | Array<interop.Object> | null, recordZoneIDsToDelete: NSArray<interop.Object> | Array<interop.Object> | null): this;

  get recordZonesToSave(): NSArray;
  set recordZonesToSave(value: NSArray<interop.Object> | Array<interop.Object>);

  get recordZoneIDsToDelete(): NSArray;
  set recordZoneIDsToDelete(value: NSArray<interop.Object> | Array<interop.Object>);

  perRecordZoneSaveBlock: (p1: CKRecordZoneID, p2: CKRecordZone, p3: NSError) => void | null;

  perRecordZoneDeleteBlock: (p1: CKRecordZoneID, p2: NSError) => void | null;

  modifyRecordZonesCompletionBlock: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSArray<interop.Object> | Array<interop.Object>, p3: NSError) => void | null;
}

declare class CKFetchWebAuthTokenOperation extends CKDatabaseOperation {
  init(): this;

  initWithAPIToken(APIToken: string): this;

  APIToken: string;

  fetchWebAuthTokenCompletionBlock: (p1: string, p2: NSError) => void | null;
}

declare class CKSyncEnginePendingRecordZoneChange extends NSObject {
  initWithRecordIDType(recordID: CKRecordID, type: interop.Enum<typeof CKSyncEnginePendingRecordZoneChangeType>): this;

  readonly recordID: CKRecordID;

  readonly type: interop.Enum<typeof CKSyncEnginePendingRecordZoneChangeType>;
}

declare class CKFetchDatabaseChangesOperation extends CKDatabaseOperation {
  init(): this;

  initWithPreviousServerChangeToken(previousServerChangeToken: CKServerChangeToken | null): this;

  previousServerChangeToken: CKServerChangeToken;

  resultsLimit: number;

  fetchAllChanges: boolean;

  recordZoneWithIDChangedBlock: (p1: CKRecordZoneID) => void;

  recordZoneWithIDWasDeletedBlock: (p1: CKRecordZoneID) => void;

  recordZoneWithIDWasPurgedBlock: (p1: CKRecordZoneID) => void;

  recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock: (p1: CKRecordZoneID) => void;

  changeTokenUpdatedBlock: (p1: CKServerChangeToken) => void;

  fetchDatabaseChangesCompletionBlock: (p1: CKServerChangeToken, p2: boolean, p3: NSError) => void | null;
}

declare class CKDatabaseOperation extends CKOperation {
  database: CKDatabase;
}

declare class CKSyncEngineWillFetchChangesEvent extends CKSyncEngineEvent {
  readonly context: CKSyncEngineFetchChangesContext;
}

declare class CKRecordZoneNotification extends CKNotification {
  readonly recordZoneID: CKRecordZoneID;

  readonly databaseScope: interop.Enum<typeof CKDatabaseScope>;
}

declare class CKSyncEnginePendingZoneDelete extends CKSyncEnginePendingDatabaseChange {
  initWithZoneID(zoneID: CKRecordZoneID): this;
}

declare class CKSyncEngineFailedZoneSave extends NSObject {
  readonly recordZone: CKRecordZone;

  readonly error: NSError;
}

declare class CKSyncEngineFetchedRecordDeletion extends NSObject {
  readonly recordID: CKRecordID;

  readonly recordType: string;
}

// @ts-ignore ClassDecl.tsIgnore
declare class CKSyncEnginePendingZoneSave extends CKSyncEnginePendingDatabaseChange {
  initWithZone(zone: CKRecordZone): this;

  // @ts-ignore MemberDecl.tsIgnore
  readonly zone: CKRecordZone;
}

declare class CKSyncEngineFetchedZoneDeletion extends NSObject {
  readonly zoneID: CKRecordZoneID;

  readonly reason: interop.Enum<typeof CKSyncEngineZoneDeletionReason>;
}

declare class CKSyncEngineSendChangesContext extends NSObject {
  readonly reason: interop.Enum<typeof CKSyncEngineSyncReason>;

  readonly options: CKSyncEngineSendChangesOptions;
}

declare class CKFetchRecordZonesOperation extends CKDatabaseOperation {
  static fetchAllRecordZonesOperation<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  init(): this;

  initWithRecordZoneIDs(zoneIDs: NSArray<interop.Object> | Array<interop.Object>): this;

  get recordZoneIDs(): NSArray;
  set recordZoneIDs(value: NSArray<interop.Object> | Array<interop.Object>);

  perRecordZoneCompletionBlock: (p1: CKRecordZoneID, p2: CKRecordZone, p3: NSError) => void | null;

  fetchRecordZonesCompletionBlock: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, p2: NSError) => void | null;
}

declare class CKSyncEngineDidFetchRecordZoneChangesEvent extends CKSyncEngineEvent {
  readonly zoneID: CKRecordZoneID;

  readonly error: NSError;
}

declare class CKAllowedSharingOptions extends NSObject implements NSSecureCoding, NSCopying {
  initWithAllowedParticipantPermissionOptionsAllowedParticipantAccessOptions(allowedParticipantPermissionOptions: interop.Enum<typeof CKSharingParticipantPermissionOption>, allowedParticipantAccessOptions: interop.Enum<typeof CKSharingParticipantAccessOption>): this;

  allowedParticipantPermissionOptions: interop.Enum<typeof CKSharingParticipantPermissionOption>;

  allowedParticipantAccessOptions: interop.Enum<typeof CKSharingParticipantAccessOption>;

  static readonly standardOptions: CKAllowedSharingOptions;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKReference extends NSObject implements NSSecureCoding, NSCopying {
  initWithRecordIDAction(recordID: CKRecordID, action: interop.Enum<typeof CKReferenceAction>): this;

  initWithRecordAction(record: CKRecord, action: interop.Enum<typeof CKReferenceAction>): this;

  readonly referenceAction: interop.Enum<typeof CKReferenceAction>;

  readonly recordID: CKRecordID;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKFetchShareParticipantsOperation extends CKOperation {
  init(): this;

  initWithUserIdentityLookupInfos(userIdentityLookupInfos: NSArray<interop.Object> | Array<interop.Object>): this;

  get userIdentityLookupInfos(): NSArray;
  set userIdentityLookupInfos(value: NSArray<interop.Object> | Array<interop.Object>);

  shareParticipantFetchedBlock: (p1: CKShareParticipant) => void;

  perShareParticipantCompletionBlock: (p1: CKUserIdentityLookupInfo, p2: CKShareParticipant, p3: NSError) => void | null;

  fetchShareParticipantsCompletionBlock: (p1: NSError) => void | null;
}

declare class CKShareParticipant extends NSObject implements NSSecureCoding, NSCopying {
  readonly userIdentity: CKUserIdentity;

  role: interop.Enum<typeof CKShareParticipantRole>;

  type: interop.Enum<typeof CKShareParticipantType>;

  readonly acceptanceStatus: interop.Enum<typeof CKShareParticipantAcceptanceStatus>;

  permission: interop.Enum<typeof CKShareParticipantPermission>;

  readonly participantID: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKSyncEngine extends NSObject {
  initWithConfiguration(configuration: CKSyncEngineConfiguration): this;

  readonly database: CKDatabase;

  readonly state: CKSyncEngineState;

  fetchChangesWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  fetchChangesWithOptionsCompletionHandler(options: CKSyncEngineFetchChangesOptions, completionHandler: (p1: NSError) => void | null): void;

  sendChangesWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  sendChangesWithOptionsCompletionHandler(options: CKSyncEngineSendChangesOptions, completionHandler: (p1: NSError) => void | null): void;

  cancelOperationsWithCompletionHandler(completionHandler: () => void | null): void;
}

declare class CKNotificationInfo extends NSObject implements NSSecureCoding, NSCopying {
  alertBody: string;

  alertLocalizationKey: string;

  get alertLocalizationArgs(): NSArray;
  set alertLocalizationArgs(value: NSArray<interop.Object> | Array<interop.Object>);

  title: string;

  titleLocalizationKey: string;

  get titleLocalizationArgs(): NSArray;
  set titleLocalizationArgs(value: NSArray<interop.Object> | Array<interop.Object>);

  subtitle: string;

  subtitleLocalizationKey: string;

  get subtitleLocalizationArgs(): NSArray;
  set subtitleLocalizationArgs(value: NSArray<interop.Object> | Array<interop.Object>);

  alertActionLocalizationKey: string;

  alertLaunchImage: string;

  soundName: string;

  get desiredKeys(): NSArray;
  set desiredKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  shouldBadge: boolean;

  shouldSendContentAvailable: boolean;

  shouldSendMutableContent: boolean;

  category: string;

  collapseIDKey: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKContainer extends NSObject {
  static defaultContainer(): CKContainer;

  static containerWithIdentifier(containerIdentifier: string): CKContainer;

  readonly containerIdentifier: string;

  addOperation(operation: CKOperation): void;

  readonly privateCloudDatabase: CKDatabase;

  readonly publicCloudDatabase: CKDatabase;

  readonly sharedCloudDatabase: CKDatabase;

  databaseWithDatabaseScope(databaseScope: interop.Enum<typeof CKDatabaseScope>): CKDatabase;

  accountStatusWithCompletionHandler(completionHandler: (p1: interop.Enum<typeof CKAccountStatus>, p2: NSError) => void | null): void;

  statusForApplicationPermissionCompletionHandler(applicationPermission: interop.Enum<typeof CKApplicationPermissions>, completionHandler: (p1: interop.Enum<typeof CKApplicationPermissionStatus>, p2: NSError) => void): void;

  requestApplicationPermissionCompletionHandler(applicationPermission: interop.Enum<typeof CKApplicationPermissions>, completionHandler: (p1: interop.Enum<typeof CKApplicationPermissionStatus>, p2: NSError) => void): void;

  fetchUserRecordIDWithCompletionHandler(completionHandler: (p1: CKRecordID, p2: NSError) => void | null): void;

  discoverAllIdentitiesWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  discoverUserIdentityWithEmailAddressCompletionHandler(email: string, completionHandler: (p1: CKUserIdentity, p2: NSError) => void | null): void;

  discoverUserIdentityWithPhoneNumberCompletionHandler(phoneNumber: string, completionHandler: (p1: CKUserIdentity, p2: NSError) => void | null): void;

  discoverUserIdentityWithUserRecordIDCompletionHandler(userRecordID: CKRecordID, completionHandler: (p1: CKUserIdentity, p2: NSError) => void | null): void;

  fetchShareParticipantWithEmailAddressCompletionHandler(emailAddress: string, completionHandler: (p1: CKShareParticipant, p2: NSError) => void | null): void;

  fetchShareParticipantWithPhoneNumberCompletionHandler(phoneNumber: string, completionHandler: (p1: CKShareParticipant, p2: NSError) => void | null): void;

  fetchShareParticipantWithUserRecordIDCompletionHandler(userRecordID: CKRecordID, completionHandler: (p1: CKShareParticipant, p2: NSError) => void | null): void;

  fetchShareMetadataWithURLCompletionHandler(url: NSURL, completionHandler: (p1: CKShareMetadata, p2: NSError) => void | null): void;

  acceptShareMetadataCompletionHandler(metadata: CKShareMetadata, completionHandler: (p1: CKShare, p2: NSError) => void | null): void;

  fetchAllLongLivedOperationIDsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  fetchLongLivedOperationWithIDCompletionHandler(operationID: string, completionHandler: (p1: CKOperation, p2: NSError) => void | null): void;
}

declare class CKFetchRecordZoneChangesOperation extends CKDatabaseOperation {
  init(): this;

  initWithRecordZoneIDsConfigurationsByRecordZoneID(recordZoneIDs: NSArray<interop.Object> | Array<interop.Object>, configurationsByRecordZoneID: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  get recordZoneIDs(): NSArray;
  set recordZoneIDs(value: NSArray<interop.Object> | Array<interop.Object>);

  get configurationsByRecordZoneID(): NSDictionary;
  set configurationsByRecordZoneID(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  fetchAllChanges: boolean;

  recordChangedBlock: (p1: CKRecord) => void;

  recordWasChangedBlock: (p1: CKRecordID, p2: CKRecord, p3: NSError) => void | null;

  recordWithIDWasDeletedBlock: (p1: CKRecordID, p2: string) => void;

  recordZoneChangeTokensUpdatedBlock: (p1: CKRecordZoneID, p2: CKServerChangeToken, p3: NSData) => void | null;

  recordZoneFetchCompletionBlock: (p1: CKRecordZoneID, p2: CKServerChangeToken, p3: NSData, p4: boolean, p5: NSError) => void | null;

  fetchRecordZoneChangesCompletionBlock: (p1: NSError) => void | null;

  initWithRecordZoneIDsOptionsByRecordZoneID(recordZoneIDs: NSArray<interop.Object> | Array<interop.Object>, optionsByRecordZoneID: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  get optionsByRecordZoneID(): NSDictionary;
  set optionsByRecordZoneID(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class CKOperationConfiguration extends NSObject {
  container: CKContainer;

  qualityOfService: interop.Enum<typeof NSQualityOfService>;

  allowsCellularAccess: boolean;

  isLongLived: boolean;

  timeoutIntervalForRequest: number;

  timeoutIntervalForResource: number;
}

declare class CKRecord extends NSObject implements NSSecureCoding, NSCopying {
  initWithRecordType(recordType: string): this;

  initWithRecordTypeRecordID(recordType: string, recordID: CKRecordID): this;

  initWithRecordTypeZoneID(recordType: string, zoneID: CKRecordZoneID): this;

  readonly recordType: string;

  readonly recordID: CKRecordID;

  readonly recordChangeTag: string;

  readonly creatorUserRecordID: CKRecordID;

  readonly creationDate: NSDate;

  readonly lastModifiedUserRecordID: CKRecordID;

  readonly modificationDate: NSDate;

  objectForKey(key: string): CKRecordValue;

  setObjectForKey(object: CKRecordValue | null, key: string): void;

  allKeys(): NSArray;

  allTokens(): NSArray;

  objectForKeyedSubscript(key: string): CKRecordValue;

  setObjectForKeyedSubscript(object: CKRecordValue | null, key: string): void;

  changedKeys(): NSArray;

  encodeSystemFieldsWithCoder(coder: NSCoder): void;

  readonly share: CKReference;

  parent: CKReference;

  setParentReferenceFromRecord(parentRecord: CKRecord | null): void;

  setParentReferenceFromRecordID(parentRecordID: CKRecordID | null): void;

  readonly encryptedValues: CKRecordKeyValueSetting;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKModifySubscriptionsOperation extends CKDatabaseOperation {
  init(): this;

  initWithSubscriptionsToSaveSubscriptionIDsToDelete(subscriptionsToSave: NSArray<interop.Object> | Array<interop.Object> | null, subscriptionIDsToDelete: NSArray<interop.Object> | Array<interop.Object> | null): this;

  get subscriptionsToSave(): NSArray;
  set subscriptionsToSave(value: NSArray<interop.Object> | Array<interop.Object>);

  get subscriptionIDsToDelete(): NSArray;
  set subscriptionIDsToDelete(value: NSArray<interop.Object> | Array<interop.Object>);

  perSubscriptionSaveBlock: (p1: string, p2: CKSubscription, p3: NSError) => void | null;

  perSubscriptionDeleteBlock: (p1: string, p2: NSError) => void | null;

  modifySubscriptionsCompletionBlock: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSArray<interop.Object> | Array<interop.Object>, p3: NSError) => void | null;
}

declare class CKSyncEngineFetchChangesScope extends NSObject implements NSCopying {
  readonly zoneIDs: NSSet;

  readonly excludedZoneIDs: NSSet;

  initWithZoneIDs(zoneIDs: NSSet | null): this;

  initWithExcludedZoneIDs(zoneIDs: NSSet): this;

  containsZoneID(zoneID: CKRecordZoneID): boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class CKAcceptSharesOperation extends CKOperation {
  init(): this;

  initWithShareMetadatas(shareMetadatas: NSArray<interop.Object> | Array<interop.Object>): this;

  get shareMetadatas(): NSArray;
  set shareMetadatas(value: NSArray<interop.Object> | Array<interop.Object>);

  perShareCompletionBlock: (p1: CKShareMetadata, p2: CKShare, p3: NSError) => void | null;

  acceptSharesCompletionBlock: (p1: NSError) => void | null;
}

declare class CKSyncEngineWillFetchRecordZoneChangesEvent extends CKSyncEngineEvent {
  readonly zoneID: CKRecordZoneID;
}

