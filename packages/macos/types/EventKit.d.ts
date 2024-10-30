/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const EKErrorDomain: string;

declare const EKEventStoreChangedNotification: string;

declare const EKEventStatus: {
  None: 0,
  Confirmed: 1,
  Tentative: 2,
  Canceled: 3,
};

declare const EKSpan: {
  ThisEvent: 0,
  FutureEvents: 1,
};

declare const EKReminderPriority: {
  None: 0,
  High: 1,
  Medium: 5,
  Low: 9,
};

declare const EKAlarmProximity: {
  None: 0,
  Enter: 1,
  Leave: 2,
};

declare const EKEntityMask: {
  Event: 1,
  Reminder: 2,
};

declare const EKEntityType: {
  Event: 0,
  Reminder: 1,
};

declare const EKCalendarEventAvailabilityMask: {
  None: 0,
  Busy: 1,
  Free: 2,
  Tentative: 4,
  Unavailable: 8,
};

declare const EKCalendarType: {
  Local: 0,
  CalDAV: 1,
  Exchange: 2,
  Subscription: 3,
  Birthday: 4,
};

declare const EKParticipantScheduleStatus: {
  None: 0,
  Pending: 1,
  Sent: 2,
  Delivered: 3,
  RecipientNotRecognized: 4,
  NoPrivileges: 5,
  DeliveryFailed: 6,
  CannotDeliver: 7,
  RecipientNotAllowed: 8,
};

declare const EKWeekday: {
  WeekdaySunday: 1,
  WeekdayMonday: 2,
  WeekdayTuesday: 3,
  WeekdayWednesday: 4,
  WeekdayThursday: 5,
  WeekdayFriday: 6,
  WeekdaySaturday: 7,
  Sunday: 1,
  Monday: 2,
  Tuesday: 3,
  Wednesday: 4,
  Thursday: 5,
  Friday: 6,
  Saturday: 7,
};

declare const EKAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  FullAccess: 3,
  WriteOnly: 4,
  Authorized: 3,
};

declare const EKParticipantType: {
  Unknown: 0,
  Person: 1,
  Room: 2,
  Resource: 3,
  Group: 4,
};

declare const EKParticipantStatus: {
  Unknown: 0,
  Pending: 1,
  Accepted: 2,
  Declined: 3,
  Tentative: 4,
  Delegated: 5,
  Completed: 6,
  InProcess: 7,
};

declare const EKAlarmType: {
  Display: 0,
  Audio: 1,
  Procedure: 2,
  Email: 3,
};

declare const EKRecurrenceFrequency: {
  Daily: 0,
  Weekly: 1,
  Monthly: 2,
  Yearly: 3,
};

declare const EKSourceType: {
  Local: 0,
  Exchange: 1,
  CalDAV: 2,
  MobileMe: 3,
  Subscribed: 4,
  Birthdays: 5,
};

declare const EKParticipantRole: {
  Unknown: 0,
  Required: 1,
  Optional: 2,
  Chair: 3,
  NonParticipant: 4,
};

declare const EKErrorCode: {
  EventNotMutable: 0,
  NoCalendar: 1,
  NoStartDate: 2,
  NoEndDate: 3,
  DatesInverted: 4,
  InternalFailure: 5,
  CalendarReadOnly: 6,
  DurationGreaterThanRecurrence: 7,
  AlarmGreaterThanRecurrence: 8,
  StartDateTooFarInFuture: 9,
  StartDateCollidesWithOtherOccurrence: 10,
  ObjectBelongsToDifferentStore: 11,
  InvitesCannotBeMoved: 12,
  InvalidSpan: 13,
  CalendarHasNoSource: 14,
  CalendarSourceCannotBeModified: 15,
  CalendarIsImmutable: 16,
  SourceDoesNotAllowCalendarAddDelete: 17,
  RecurringReminderRequiresDueDate: 18,
  StructuredLocationsNotSupported: 19,
  ReminderLocationsNotSupported: 20,
  AlarmProximityNotSupported: 21,
  CalendarDoesNotAllowEvents: 22,
  CalendarDoesNotAllowReminders: 23,
  SourceDoesNotAllowReminders: 24,
  SourceDoesNotAllowEvents: 25,
  PriorityIsInvalid: 26,
  InvalidEntityType: 27,
  ProcedureAlarmsNotMutable: 28,
  EventStoreNotAuthorized: 29,
  OSNotSupported: 30,
  InvalidInviteReplyCalendar: 31,
  NotificationsCollectionFlagNotSet: 32,
  SourceMismatch: 33,
  NotificationCollectionMismatch: 34,
  NotificationSavedWithoutCollection: 35,
  ReminderAlarmContainsEmailOrUrl: 36,
  Last: 37,
};

declare const EKEventAvailability: {
  NotSupported: -1,
  Busy: 0,
  Free: 1,
  Tentative: 2,
  Unavailable: 3,
};

declare class EKVirtualConferenceProvider extends NSObject implements NSExtensionRequestHandling {
  fetchAvailableRoomTypesWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  fetchVirtualConferenceForIdentifierCompletionHandler(identifier: string, completionHandler: (p1: EKVirtualConferenceDescriptor, p2: NSError) => void | null): void;

  beginRequestWithExtensionContext(context: NSExtensionContext): void;

  isEqual(object: interop.Object): number;

  readonly hash: number;

  readonly superclass: interop.Object;

  class(): interop.Object;

  self(): this;

  performSelector(aSelector: string): interop.Object;

  performSelectorWithObject(aSelector: string, object: interop.Object): interop.Object;

  performSelectorWithObjectWithObject(aSelector: string, object1: interop.Object, object2: interop.Object): interop.Object;

  readonly isProxy: number;

  isKindOfClass(aClass: interop.Object): number;

  isMemberOfClass(aClass: interop.Object): number;

  conformsToProtocol(aProtocol: interop.PointerConvertible): number;

  respondsToSelector(aSelector: string): number;

  retain(): this;

  release(): void;

  autorelease(): this;

  retainCount(): number;

  readonly zone: interop.Pointer;

  readonly description: string;

  readonly debugDescription: string;
}

declare class EKVirtualConferenceDescriptor extends NSObject {
  initWithTitleURLDescriptorsConferenceDetails(title: string | null, URLDescriptors: NSArray<interop.Object> | Array<interop.Object>, conferenceDetails: string | null): this;

  readonly title: string;

  readonly URLDescriptors: NSArray;

  readonly conferenceDetails: string;
}

declare class EKVirtualConferenceURLDescriptor extends NSObject {
  initWithTitleURL(title: string | null, URL: NSURL): this;

  readonly title: string;

  readonly URL: NSURL;
}

declare class EKVirtualConferenceRoomTypeDescriptor extends NSObject {
  initWithTitleIdentifier(title: string, identifier: string): this;

  readonly title: string;

  readonly identifier: string;
}

declare class EKSource extends EKObject {
  readonly sourceIdentifier: string;

  readonly sourceType: interop.Enum<typeof EKSourceType>;

  readonly title: string;

  calendarsForEntityType(entityType: interop.Enum<typeof EKEntityType>): NSSet;

  readonly isDelegate: number;
}

declare class EKReminder extends EKCalendarItem {
  static reminderWithEventStore(eventStore: EKEventStore): EKReminder;

  startDateComponents: NSDateComponents;

  dueDateComponents: NSDateComponents;

  isCompleted: number;

  completionDate: NSDate;

  priority: number;
}

declare class EKRecurrenceDayOfWeek extends NSObject implements NSCopying, NSSecureCoding {
  static dayOfWeek<This extends abstract new (...args: any) => any>(this: This, dayOfTheWeek: interop.Enum<typeof EKWeekday>): InstanceType<This>;

  static dayOfWeekWeekNumber<This extends abstract new (...args: any) => any>(this: This, dayOfTheWeek: interop.Enum<typeof EKWeekday>, weekNumber: number): InstanceType<This>;

  initWithDayOfTheWeekWeekNumber(dayOfTheWeek: interop.Enum<typeof EKWeekday>, weekNumber: number): this;

  readonly dayOfTheWeek: interop.Enum<typeof EKWeekday>;

  readonly weekNumber: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: number;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class EKParticipant extends EKObject implements NSCopying {
  readonly URL: NSURL;

  readonly name: string;

  readonly participantStatus: interop.Enum<typeof EKParticipantStatus>;

  readonly participantRole: interop.Enum<typeof EKParticipantRole>;

  readonly participantType: interop.Enum<typeof EKParticipantType>;

  readonly isCurrentUser: number;

  readonly contactPredicate: NSPredicate;

  ABPersonInAddressBook(addressBook: ABAddressBook): ABPerson;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class EKCalendarItem extends EKObject {
  calendar: EKCalendar;

  readonly calendarItemIdentifier: string;

  readonly calendarItemExternalIdentifier: string;

  title: string;

  location: string;

  notes: string;

  URL: NSURL;

  readonly lastModifiedDate: NSDate;

  readonly creationDate: NSDate;

  timeZone: NSTimeZone;

  readonly hasAlarms: number;

  readonly hasRecurrenceRules: number;

  readonly hasAttendees: number;

  readonly hasNotes: number;

  readonly attendees: NSArray;

  get alarms(): NSArray;
  set alarms(value: NSArray<interop.Object> | Array<interop.Object>);

  addAlarm(alarm: EKAlarm): void;

  removeAlarm(alarm: EKAlarm): void;

  get recurrenceRules(): NSArray;
  set recurrenceRules(value: NSArray<interop.Object> | Array<interop.Object>);

  addRecurrenceRule(rule: EKRecurrenceRule): void;

  removeRecurrenceRule(rule: EKRecurrenceRule): void;
}

declare class EKAlarm extends EKObject implements NSCopying {
  static alarmWithAbsoluteDate(date: NSDate): EKAlarm;

  static alarmWithRelativeOffset(offset: number): EKAlarm;

  relativeOffset: number;

  absoluteDate: NSDate;

  structuredLocation: EKStructuredLocation;

  proximity: interop.Enum<typeof EKAlarmProximity>;

  readonly type: interop.Enum<typeof EKAlarmType>;

  emailAddress: string;

  soundName: string;

  url: NSURL;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class EKObject extends NSObject {
  readonly hasChanges: number;

  readonly isNew: number;

  reset(): void;

  rollback(): void;

  refresh(): number;
}

declare class EKRecurrenceEnd extends NSObject implements NSCopying, NSSecureCoding {
  static recurrenceEndWithEndDate<This extends abstract new (...args: any) => any>(this: This, endDate: NSDate): InstanceType<This>;

  static recurrenceEndWithOccurrenceCount<This extends abstract new (...args: any) => any>(this: This, occurrenceCount: number): InstanceType<This>;

  readonly endDate: NSDate;

  readonly occurrenceCount: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: number;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class EKCalendar extends EKObject {
  static calendarForEntityTypeEventStore(entityType: interop.Enum<typeof EKEntityType>, eventStore: EKEventStore): EKCalendar;

  source: EKSource;

  readonly calendarIdentifier: string;

  title: string;

  readonly type: interop.Enum<typeof EKCalendarType>;

  readonly allowsContentModifications: number;

  readonly isSubscribed: number;

  readonly isImmutable: number;

  get CGColor(): interop.Pointer;
  set CGColor(value: interop.PointerConvertible);

  color: NSColor;

  readonly supportedEventAvailabilities: interop.Enum<typeof EKCalendarEventAvailabilityMask>;

  readonly allowedEntityTypes: interop.Enum<typeof EKEntityMask>;
}

declare class EKEvent extends EKCalendarItem {
  static eventWithEventStore(eventStore: EKEventStore): EKEvent;

  readonly eventIdentifier: string;

  isAllDay: number;

  startDate: NSDate;

  endDate: NSDate;

  structuredLocation: EKStructuredLocation;

  compareStartDateWithEvent(other: EKEvent): interop.Enum<typeof NSComparisonResult>;

  readonly organizer: EKParticipant;

  availability: interop.Enum<typeof EKEventAvailability>;

  readonly status: interop.Enum<typeof EKEventStatus>;

  readonly isDetached: number;

  readonly occurrenceDate: NSDate;

  refresh(): number;

  readonly birthdayContactIdentifier: string;

  readonly birthdayPersonUniqueID: string;
}

declare class EKEventStore extends NSObject {
  static authorizationStatusForEntityType(entityType: interop.Enum<typeof EKEntityType>): interop.Enum<typeof EKAuthorizationStatus>;

  initWithAccessToEntityTypes(entityTypes: interop.Enum<typeof EKEntityMask>): this;

  init(): this;

  initWithSources(sources: NSArray<interop.Object> | Array<interop.Object>): this;

  requestFullAccessToEventsWithCompletion(completion: (p1: number, p2: NSError) => void): void;

  requestWriteOnlyAccessToEventsWithCompletion(completion: (p1: number, p2: NSError) => void): void;

  requestFullAccessToRemindersWithCompletion(completion: (p1: number, p2: NSError) => void): void;

  requestAccessToEntityTypeCompletion(entityType: interop.Enum<typeof EKEntityType>, completion: (p1: number, p2: NSError) => void): void;

  readonly eventStoreIdentifier: string;

  readonly delegateSources: NSArray;

  readonly sources: NSArray;

  sourceWithIdentifier(identifier: string): EKSource;

  calendarsForEntityType(entityType: interop.Enum<typeof EKEntityType>): NSArray;

  readonly defaultCalendarForNewEvents: EKCalendar;

  defaultCalendarForNewReminders(): EKCalendar;

  calendarWithIdentifier(identifier: string): EKCalendar;

  saveCalendarCommitError(calendar: EKCalendar, commit: number, error: interop.PointerConvertible): number;

  removeCalendarCommitError(calendar: EKCalendar, commit: number, error: interop.PointerConvertible): number;

  calendarItemWithIdentifier(identifier: string): EKCalendarItem;

  calendarItemsWithExternalIdentifier(externalIdentifier: string): NSArray;

  saveEventSpanError(event: EKEvent, span: interop.Enum<typeof EKSpan>, error: interop.PointerConvertible): number;

  removeEventSpanError(event: EKEvent, span: interop.Enum<typeof EKSpan>, error: interop.PointerConvertible): number;

  saveEventSpanCommitError(event: EKEvent, span: interop.Enum<typeof EKSpan>, commit: number, error: interop.PointerConvertible): number;

  removeEventSpanCommitError(event: EKEvent, span: interop.Enum<typeof EKSpan>, commit: number, error: interop.PointerConvertible): number;

  eventWithIdentifier(identifier: string): EKEvent;

  eventsMatchingPredicate(predicate: NSPredicate): NSArray;

  enumerateEventsMatchingPredicateUsingBlock(predicate: NSPredicate, block: (p1: EKEvent, p2: interop.PointerConvertible) => void): void;

  predicateForEventsWithStartDateEndDateCalendars(startDate: NSDate, endDate: NSDate, calendars: NSArray<interop.Object> | Array<interop.Object> | null): NSPredicate;

  saveReminderCommitError(reminder: EKReminder, commit: number, error: interop.PointerConvertible): number;

  removeReminderCommitError(reminder: EKReminder, commit: number, error: interop.PointerConvertible): number;

  fetchRemindersMatchingPredicateCompletion(predicate: NSPredicate, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void | null): interop.Object;

  cancelFetchRequest(fetchIdentifier: interop.Object): void;

  predicateForRemindersInCalendars(calendars: NSArray<interop.Object> | Array<interop.Object> | null): NSPredicate;

  predicateForIncompleteRemindersWithDueDateStartingEndingCalendars(startDate: NSDate | null, endDate: NSDate | null, calendars: NSArray<interop.Object> | Array<interop.Object> | null): NSPredicate;

  predicateForCompletedRemindersWithCompletionDateStartingEndingCalendars(startDate: NSDate | null, endDate: NSDate | null, calendars: NSArray<interop.Object> | Array<interop.Object> | null): NSPredicate;

  commit(error: interop.PointerConvertible): number;

  reset(): void;

  refreshSourcesIfNecessary(): void;
}

declare class EKRecurrenceRule extends EKObject implements NSCopying {
  initRecurrenceWithFrequencyIntervalEnd(type: interop.Enum<typeof EKRecurrenceFrequency>, interval: number, end: EKRecurrenceEnd | null): this;

  initRecurrenceWithFrequencyIntervalDaysOfTheWeekDaysOfTheMonthMonthsOfTheYearWeeksOfTheYearDaysOfTheYearSetPositionsEnd(type: interop.Enum<typeof EKRecurrenceFrequency>, interval: number, days: NSArray<interop.Object> | Array<interop.Object> | null, monthDays: NSArray<interop.Object> | Array<interop.Object> | null, months: NSArray<interop.Object> | Array<interop.Object> | null, weeksOfTheYear: NSArray<interop.Object> | Array<interop.Object> | null, daysOfTheYear: NSArray<interop.Object> | Array<interop.Object> | null, setPositions: NSArray<interop.Object> | Array<interop.Object> | null, end: EKRecurrenceEnd | null): this;

  readonly calendarIdentifier: string;

  recurrenceEnd: EKRecurrenceEnd;

  readonly frequency: interop.Enum<typeof EKRecurrenceFrequency>;

  readonly interval: number;

  readonly firstDayOfTheWeek: number;

  readonly daysOfTheWeek: NSArray;

  readonly daysOfTheMonth: NSArray;

  readonly daysOfTheYear: NSArray;

  readonly weeksOfTheYear: NSArray;

  readonly monthsOfTheYear: NSArray;

  readonly setPositions: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class EKStructuredLocation extends EKObject implements NSCopying {
  static locationWithTitle<This extends abstract new (...args: any) => any>(this: This, title: string): InstanceType<This>;

  static locationWithMapItem<This extends abstract new (...args: any) => any>(this: This, mapItem: MKMapItem): InstanceType<This>;

  title: string;

  geoLocation: CLLocation;

  radius: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

