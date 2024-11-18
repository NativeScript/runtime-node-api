/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const ABPropertyReadOnlyError: number;

declare const ABPropertyValueValidationError: number;

declare const ABRemoveRecordsError: number;

declare const ABAddRecordsError: number;

declare const kABDeletedRecords: string;

declare const kABInsertedRecords: string;

declare const kABDatabaseChangedExternallyNotification: string;

declare const kABDatabaseChangedNotification: string;

declare const kABMobileMeLabel: string;

declare const kABOtherLabel: string;

declare const kABHomeLabel: string;

declare const kABWorkLabel: string;

declare const kABTitleProperty: string;

declare const kABMiddleNameProperty: string;

declare const kABNoteProperty: string;

declare const kABSocialProfileServiceTencentWeibo: string;

declare const kABSocialProfileServiceMySpace: string;

declare const kABSocialProfileServiceLinkedIn: string;

declare const kABSocialProfileServiceKey: string;

declare const kABSocialProfileURLKey: string;

declare const kABInstantMessageServiceICQ: string;

declare const kABInstantMessageServiceGaduGadu: string;

declare const kABInstantMessageServiceAIM: string;

declare const kABInstantMessageServiceKey: string;

declare const kABInstantMessageProperty: string;

declare const kABICQInstantProperty: string;

declare const kABYahooHomeLabel: string;

declare const kABYahooInstantProperty: string;

declare const kABMSNHomeLabel: string;

declare const kABMSNWorkLabel: string;

declare const kABJabberInstantProperty: string;

declare const kABAIMMobileMeLabel: string;

declare const kABAIMHomeLabel: string;

declare const kABAIMWorkLabel: string;

declare const kABPhoneHomeFAXLabel: string;

declare const kABPhoneiPhoneLabel: string;

declare const kABPhoneHomeLabel: string;

declare const kABPhoneProperty: string;

declare const kABPersonFlags: string;

declare const kABDepartmentProperty: string;

declare const kABSpouseLabel: string;

declare const kABFriendLabel: string;

declare const kABChildLabel: string;

declare const kABSisterLabel: string;

declare const kABParentLabel: string;

declare const kABMotherLabel: string;

declare const kABRelatedNamesProperty: string;

declare const kABOtherDateComponentsProperty: string;

declare const kABOtherDatesProperty: string;

declare const kABAddressWorkLabel: string;

declare const kABAddressHomeLabel: string;

declare const kABAddressCityKey: string;

declare const kABAddressProperty: string;

declare const kABEmailMobileMeLabel: string;

declare const kABEmailHomeLabel: string;

declare const kABEmailWorkLabel: string;

declare const kABEmailProperty: string;

declare const kABCalendarURIsProperty: string;

declare const kABHomePageLabel: string;

declare const kABHomePageProperty: string;

declare const kABOrganizationProperty: string;

declare const kABNicknameProperty: string;

declare const kABFirstNamePhoneticProperty: string;

declare const kABLastNameProperty: string;

declare const kABModificationDateProperty: string;

declare const kABCreationDateProperty: string;

declare const kABPhonePagerLabel: string;

declare const kABSocialProfileUserIdentifierKey: string;

declare const ABAddressBookErrorDomain: string;

declare const kABICQHomeLabel: string;

declare const kABMaidenNameProperty: string;

declare const kABSocialProfileServiceSinaWeibo: string;

declare const kABPhoneMainLabel: string;

declare const kABJabberHomeLabel: string;

declare const kABFatherLabel: string;

declare const kABManagerLabel: string;

declare const kABAddressCountryKey: string;

declare const kABInstantMessageServiceMSN: string;

declare const kABFirstNameProperty: string;

declare const kABSocialProfileServiceFlickr: string;

declare const kABInstantMessageServiceGoogleTalk: string;

declare const kABSocialProfileServiceTwitter: string;

declare const kABPhoneWorkLabel: string;

declare const kABICQWorkLabel: string;

declare const kABAIMInstantProperty: string;

declare const kABURLsProperty: string;

declare const kABBrotherLabel: string;

declare const kABAddressStateKey: string;

declare const kABInstantMessageServiceSkype: string;

declare const ABPropertyUnsupportedBySourceError: number;

declare const kABSocialProfileProperty: string;

declare const kABOrganizationPhoneticProperty: string;

declare const kABJabberWorkLabel: string;

declare const kABLastNamePhoneticProperty: string;

declare const kABSocialProfileServiceFacebook: string;

declare const kABGroupNameProperty: string;

declare const kABInstantMessageServiceFacebook: string;

declare const kABAnniversaryLabel: string;

declare const kABAddressStreetKey: string;

declare const kABBirthdayProperty: string;

declare const kABInstantMessageUsernameKey: string;

declare const kABSuffixProperty: string;

declare const kABAddressZIPKey: string;

declare const kABSocialProfileServiceYelp: string;

declare const kABAlternateBirthdayComponentsProperty: string;

declare const kABBirthdayComponentsProperty: string;

declare const kABInstantMessageServiceYahoo: string;

declare const kABJobTitleProperty: string;

declare const kABAssistantLabel: string;

declare const kABPhoneMobileLabel: string;

declare const kABUIDProperty: string;

declare const kABMiddleNamePhoneticProperty: string;

declare const kABAddressCountryCodeKey: string;

declare const ABMultiValueIdentifiersErrorKey: string;

declare const kABInstantMessageServiceJabber: string;

declare const kABUpdatedRecords: string;

declare const kABInstantMessageServiceQQ: string;

declare const kABPhoneWorkFAXLabel: string;

declare const kABSocialProfileUsernameKey: string;

declare const kABYahooWorkLabel: string;

declare const kABMSNInstantProperty: string;

declare const kABPartnerLabel: string;

declare const _ABSearchComparison: {
  Equal: 0,
  NotEqual: 1,
  LessThan: 2,
  LessThanOrEqual: 3,
  GreaterThan: 4,
  GreaterThanOrEqual: 5,
  EqualCaseInsensitive: 6,
  ContainsSubString: 7,
  ContainsSubStringCaseInsensitive: 8,
  PrefixMatch: 9,
  PrefixMatchCaseInsensitive: 10,
  BitsInBitFieldMatch: 11,
  DoesNotContainSubString: 12,
  DoesNotContainSubStringCaseInsensitive: 13,
  NotEqualCaseInsensitive: 14,
  SuffixMatch: 15,
  SuffixMatchCaseInsensitive: 16,
  WithinIntervalAroundToday: 17,
  WithinIntervalAroundTodayYearless: 18,
  NotWithinIntervalAroundToday: 19,
  NotWithinIntervalAroundTodayYearless: 20,
  WithinIntervalFromToday: 21,
  WithinIntervalFromTodayYearless: 22,
  NotWithinIntervalFromToday: 23,
  NotWithinIntervalFromTodayYearless: 24,
};

declare const _ABPropertyType: {
  ErrorIn: 0,
  String: 1,
  Integer: 2,
  Real: 3,
  Date: 4,
  Array: 5,
  Dictionary: 6,
  Data: 7,
  DateComponents: 8,
  MultiString: 257,
  MultiInteger: 258,
  MultiReal: 259,
  MultiDate: 260,
  MultiArray: 261,
  MultiDictionary: 262,
  MultiData: 263,
  MultiDateComponents: 264,
};

declare const _ABSearchConjunction: {
  And: 0,
  Or: 1,
};

declare function ABLocalizedPropertyOrLabel(propertyOrLabel: string): string;

declare interface ABImageClient extends NSObjectProtocol {
  consumeImageDataForTag(data: NSData, tag: number): void;
}

declare class ABImageClient extends NativeObject implements ABImageClient {
}

declare class ABMutableMultiValue extends ABMultiValue {
  addValueWithLabel(value: interop.Object, label: string): string;

  insertValueWithLabelAtIndex(value: interop.Object, label: string, index: number): string;

  removeValueAndLabelAtIndex(index: number): boolean;

  replaceValueAtIndexWithValue(index: number, value: interop.Object): boolean;

  replaceLabelAtIndexWithLabel(index: number, label: string): boolean;

  setPrimaryIdentifier(identifier: string): boolean;
}

declare class ABSearchElement extends NSObject {
  static searchElementForConjunctionChildren(conjuction: number, children: NSArray<interop.Object> | Array<interop.Object>): ABSearchElement;

  matchesRecord(record: ABRecord): boolean;
}

declare class ABGroup extends ABRecord {
  members(): NSArray;

  addMember(person: ABPerson): boolean;

  removeMember(person: ABPerson): boolean;

  subgroups(): NSArray;

  addSubgroup(group: ABGroup): boolean;

  removeSubgroup(group: ABGroup): boolean;

  parentGroups(): NSArray;

  setDistributionIdentifierForPropertyPerson(identifier: string, property: string, person: ABPerson): boolean;

  distributionIdentifierForPropertyPerson(property: string, person: ABPerson): string;

  static addPropertiesAndTypes(properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): number;

  static removeProperties(properties: NSArray<interop.Object> | Array<interop.Object>): number;

  static properties(): NSArray;

  static typeOfProperty(property: string): number;

  static searchElementForPropertyLabelKeyValueComparison(property: string, label: string, key: string, value: interop.Object, comparison: number): ABSearchElement;
}

declare class ABPerson extends ABRecord {
  parentGroups(): NSArray;

  linkedPeople(): NSArray;

  static addPropertiesAndTypes(properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): number;

  static removeProperties(properties: NSArray<interop.Object> | Array<interop.Object>): number;

  static properties(): NSArray;

  static typeOfProperty(property: string): number;

  static searchElementForPropertyLabelKeyValueComparison(property: string, label: string, key: string, value: interop.Object, comparison: number): ABSearchElement;

  initWithVCardRepresentation(vCardData: NSData): this;

  vCardRepresentation(): NSData;

  setImageData(data: NSData): boolean;

  imageData(): NSData;

  beginLoadingImageDataForClient(client: ABImageClient): number;

  static cancelLoadingImageDataForTag(tag: number): void;
}

declare class ABAddressBook extends NSObject {
  static sharedAddressBook(): ABAddressBook;

  static addressBook(): ABAddressBook;

  recordsMatchingSearchElement(search: ABSearchElement): NSArray;

  save(): boolean;

  saveAndReturnError(error: interop.PointerConvertible): boolean;

  hasUnsavedChanges(): boolean;

  me(): ABPerson;

  setMe(moi: ABPerson): void;

  recordForUniqueId(uniqueId: string): ABRecord;

  addRecordError(record: ABRecord, error: interop.PointerConvertible): boolean;

  addRecord(record: ABRecord): boolean;

  removeRecordError(record: ABRecord, error: interop.PointerConvertible): boolean;

  removeRecord(record: ABRecord): boolean;

  people(): NSArray;

  groups(): NSArray;

  recordClassFromUniqueId(uniqueId: string): string;

  formattedAddressFromDictionary(address: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSAttributedString;

  defaultCountryCode(): string;

  defaultNameOrdering(): number;
}

declare class ABMultiValue extends NSObject implements NSCopying, NSMutableCopying, NSFastEnumeration {
  count(): number;

  valueAtIndex(index: number): interop.Object;

  labelAtIndex(index: number): string;

  identifierAtIndex(index: number): string;

  indexForIdentifier(identifier: string): number;

  primaryIdentifier(): string;

  propertyType(): number;

  valueForIdentifier(identifier: string): interop.Object;

  labelForIdentifier(identifier: string): interop.Object;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  mutableCopyWithZone(zone: interop.PointerConvertible): interop.Object;

  countByEnumeratingWithStateObjectsCount(state: interop.PointerConvertible, buffer: interop.PointerConvertible, len: number): number;

  readonly [Symbol.iterator]: () => Iterator<any>;

}

declare class ABRecord extends NSObject {
  init(): this;

  initWithAddressBook(addressBook: ABAddressBook): this;

  valueForProperty(property: string): interop.Object;

  setValueForPropertyError(value: interop.Object, property: string, error: interop.PointerConvertible): boolean;

  setValueForProperty(value: interop.Object, property: string): boolean;

  removeValueForProperty(property: string): boolean;

  isReadOnly(): boolean;

  readonly uniqueId: string;

  readonly displayName: string;
}

