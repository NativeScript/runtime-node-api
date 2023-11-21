/// <reference path="../../lib/types.d.ts" />
/// <reference path="./Runtime.d.ts" />

declare const UNAuthorizationOptionNone: interop.Enum<typeof UNAuthorizationOptions>;

declare const UNNotificationDismissActionIdentifier: string;

declare const UNNotificationCategoryOptionNone: interop.Enum<typeof UNNotificationCategoryOptions>;

declare const UNNotificationAttachmentOptionsThumbnailHiddenKey: string;

declare const UNNotificationAttachmentOptionsTypeHintKey: string;

declare const UNNotificationActionOptionNone: interop.Enum<typeof UNNotificationActionOptions>;

declare const UNErrorDomain: string;

declare const UNNotificationDefaultActionIdentifier: string;

declare const UNNotificationAttachmentOptionsThumbnailClippingRectKey: string;

declare const UNNotificationPresentationOptionNone: interop.Enum<typeof UNNotificationPresentationOptions>;

declare const UNNotificationAttachmentOptionsThumbnailTimeKey: string;

declare const UNAuthorizationOptions: {
  Badge: 1,
  Sound: 2,
  Alert: 4,
  CarPlay: 8,
  CriticalAlert: 16,
  ProvidesAppNotificationSettings: 32,
  Provisional: 64,
  TimeSensitive: 256,
};

declare const UNNotificationSetting: {
  NotSupported: 0,
  Disabled: 1,
  Enabled: 2,
};

declare const UNShowPreviewsSetting: {
  Always: 0,
  WhenAuthenticated: 1,
  Never: 2,
};

declare const UNNotificationInterruptionLevel: {
  Passive: 0,
  Active: 1,
  TimeSensitive: 2,
  Critical: 3,
};

declare const UNAuthorizationStatus: {
  NotDetermined: 0,
  Denied: 1,
  Authorized: 2,
  Provisional: 3,
};

declare const UNNotificationActionOptions: {
  AuthenticationRequired: 1,
  Destructive: 2,
  Foreground: 4,
};

declare const UNAlertStyle: {
  None: 0,
  Banner: 1,
  Alert: 2,
};

declare const UNErrorCode: {
  NotificationsNotAllowed: 1,
  AttachmentInvalidURL: 100,
  AttachmentUnrecognizedType: 101,
  AttachmentInvalidFileSize: 102,
  AttachmentNotInDataStore: 103,
  AttachmentMoveIntoDataStoreFailed: 104,
  AttachmentCorrupt: 105,
  NotificationInvalidNoDate: 1400,
  NotificationInvalidNoContent: 1401,
  ContentProvidingObjectNotAllowed: 1500,
  ContentProvidingInvalid: 1501,
  BadgeInputInvalid: 1600,
};

declare const UNNotificationPresentationOptions: {
  Badge: 1,
  Sound: 2,
  Alert: 4,
  List: 8,
  Banner: 16,
};

declare const UNNotificationCategoryOptions: {
  CustomDismissAction: 1,
  HiddenPreviewsShowTitle: 4,
  HiddenPreviewsShowSubtitle: 8,
};

declare interface UNNotificationContentProviding extends NSObjectProtocol {
}

declare class UNNotificationContentProviding extends NativeObject implements UNNotificationContentProviding {
}

declare interface UNUserNotificationCenterDelegate extends NSObjectProtocol {
  userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: interop.Enum<typeof UNNotificationPresentationOptions>) => void): void;

  userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

  userNotificationCenterOpenSettingsForNotification?(center: UNUserNotificationCenter, notification: UNNotification | null): void;
}

declare class UNUserNotificationCenterDelegate extends NativeObject implements UNUserNotificationCenterDelegate {
}

declare class UNTimeIntervalNotificationTrigger extends UNNotificationTrigger {
  readonly timeInterval: number;

  static triggerWithTimeIntervalRepeats<This extends abstract new (...args: any) => any>(this: This, timeInterval: number, repeats: boolean): InstanceType<This>;

  nextTriggerDate(): NSDate;
}

declare class UNNotificationTrigger extends NSObject implements NSCopying, NSSecureCoding {
  readonly repeats: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationSound extends NSObject implements NSCopying, NSSecureCoding {
  static readonly defaultSound: UNNotificationSound;

  static readonly defaultCriticalSound: UNNotificationSound;

  static defaultCriticalSoundWithAudioVolume<This extends abstract new (...args: any) => any>(this: This, volume: number): InstanceType<This>;

  static soundNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static criticalSoundNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static criticalSoundNamedWithAudioVolume<This extends abstract new (...args: any) => any>(this: This, name: string, volume: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationServiceExtension extends NSObject {
  didReceiveNotificationRequestWithContentHandler(request: UNNotificationRequest, contentHandler: (p1: UNNotificationContent) => void): void;

  serviceExtensionTimeWillExpire(): void;
}

declare class UNNotificationResponse extends NSObject implements NSCopying, NSSecureCoding {
  readonly notification: UNNotification;

  readonly actionIdentifier: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationRequest extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  readonly content: UNNotificationContent;

  readonly trigger: UNNotificationTrigger;

  static requestWithIdentifierContentTrigger<This extends abstract new (...args: any) => any>(this: This, identifier: string, content: UNNotificationContent, trigger: UNNotificationTrigger | null): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationCategory extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  readonly actions: NSArray;

  readonly intentIdentifiers: NSArray;

  readonly options: interop.Enum<typeof UNNotificationCategoryOptions>;

  readonly hiddenPreviewsBodyPlaceholder: string;

  readonly categorySummaryFormat: string;

  static categoryWithIdentifierActionsIntentIdentifiersOptions<This extends abstract new (...args: any) => any>(this: This, identifier: string, actions: NSArray<interop.Object> | Array<interop.Object>, intentIdentifiers: NSArray<interop.Object> | Array<interop.Object>, options: interop.Enum<typeof UNNotificationCategoryOptions>): InstanceType<This>;

  static categoryWithIdentifierActionsIntentIdentifiersHiddenPreviewsBodyPlaceholderOptions<This extends abstract new (...args: any) => any>(this: This, identifier: string, actions: NSArray<interop.Object> | Array<interop.Object>, intentIdentifiers: NSArray<interop.Object> | Array<interop.Object>, hiddenPreviewsBodyPlaceholder: string, options: interop.Enum<typeof UNNotificationCategoryOptions>): InstanceType<This>;

  static categoryWithIdentifierActionsIntentIdentifiersHiddenPreviewsBodyPlaceholderCategorySummaryFormatOptions<This extends abstract new (...args: any) => any>(this: This, identifier: string, actions: NSArray<interop.Object> | Array<interop.Object>, intentIdentifiers: NSArray<interop.Object> | Array<interop.Object>, hiddenPreviewsBodyPlaceholder: string | null, categorySummaryFormat: string | null, options: interop.Enum<typeof UNNotificationCategoryOptions>): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotification extends NSObject implements NSCopying, NSSecureCoding {
  readonly date: NSDate;

  readonly request: UNNotificationRequest;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNCalendarNotificationTrigger extends UNNotificationTrigger {
  readonly dateComponents: NSDateComponents;

  static triggerWithDateMatchingComponentsRepeats<This extends abstract new (...args: any) => any>(this: This, dateComponents: NSDateComponents, repeats: boolean): InstanceType<This>;

  nextTriggerDate(): NSDate;
}

declare class UNNotificationAttachment extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  readonly URL: NSURL;

  readonly type: string;

  static attachmentWithIdentifierURLOptionsError<This extends abstract new (...args: any) => any>(this: This, identifier: string, URL: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore
declare class UNMutableNotificationContent extends UNNotificationContent {
  // @ts-ignore
  get attachments(): NSArray;
  // @ts-ignore
  set attachments(value: NSArray<interop.Object> | Array<interop.Object>);

  // @ts-ignore
  badge: NSNumber;

  // @ts-ignore
  body: string;

  // @ts-ignore
  categoryIdentifier: string;

  // @ts-ignore
  sound: UNNotificationSound;

  // @ts-ignore
  subtitle: string;

  // @ts-ignore
  threadIdentifier: string;

  // @ts-ignore
  title: string;

  // @ts-ignore
  get userInfo(): NSDictionary;
  // @ts-ignore
  set userInfo(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  // @ts-ignore
  summaryArgument: string;

  // @ts-ignore
  summaryArgumentCount: number;

  // @ts-ignore
  targetContentIdentifier: string;

  // @ts-ignore
  interruptionLevel: interop.Enum<typeof UNNotificationInterruptionLevel>;

  // @ts-ignore
  relevanceScore: number;

  // @ts-ignore
  filterCriteria: string;
}

declare class UNNotificationContent extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  readonly attachments: NSArray;

  readonly badge: NSNumber;

  readonly body: string;

  readonly categoryIdentifier: string;

  readonly sound: UNNotificationSound;

  readonly subtitle: string;

  readonly threadIdentifier: string;

  readonly title: string;

  readonly userInfo: NSDictionary;

  readonly summaryArgument: string;

  readonly summaryArgumentCount: number;

  readonly targetContentIdentifier: string;

  readonly interruptionLevel: interop.Enum<typeof UNNotificationInterruptionLevel>;

  readonly relevanceScore: number;

  readonly filterCriteria: string;

  contentByUpdatingWithProviderError(provider: UNNotificationContentProviding, outError: interop.PointerConvertible): UNNotificationContent;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  mutableCopyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNUserNotificationCenter extends NSObject {
  delegate: UNUserNotificationCenterDelegate;

  readonly supportsContentExtensions: boolean;

  static currentNotificationCenter(): UNUserNotificationCenter;

  requestAuthorizationWithOptionsCompletionHandler(options: interop.Enum<typeof UNAuthorizationOptions>, completionHandler: (p1: boolean, p2: NSError) => void | null): void;

  setNotificationCategories(categories: NSSet): void;

  getNotificationCategoriesWithCompletionHandler(completionHandler: (p1: NSSet) => void): void;

  getNotificationSettingsWithCompletionHandler(completionHandler: (p1: UNNotificationSettings) => void): void;

  addNotificationRequestWithCompletionHandler(request: UNNotificationRequest, completionHandler: (p1: NSError) => void | null): void;

  getPendingNotificationRequestsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  removePendingNotificationRequestsWithIdentifiers(identifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAllPendingNotificationRequests(): void;

  getDeliveredNotificationsWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  removeDeliveredNotificationsWithIdentifiers(identifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAllDeliveredNotifications(): void;

  setBadgeCountWithCompletionHandler(newBadgeCount: number, completionHandler: (p1: NSError) => void | null): void;
}

declare class UNTextInputNotificationResponse extends UNNotificationResponse {
  readonly userText: string;
}

declare class UNNotificationSettings extends NSObject implements NSCopying, NSSecureCoding {
  readonly authorizationStatus: interop.Enum<typeof UNAuthorizationStatus>;

  readonly soundSetting: interop.Enum<typeof UNNotificationSetting>;

  readonly badgeSetting: interop.Enum<typeof UNNotificationSetting>;

  readonly alertSetting: interop.Enum<typeof UNNotificationSetting>;

  readonly notificationCenterSetting: interop.Enum<typeof UNNotificationSetting>;

  readonly lockScreenSetting: interop.Enum<typeof UNNotificationSetting>;

  readonly alertStyle: interop.Enum<typeof UNAlertStyle>;

  readonly showPreviewsSetting: interop.Enum<typeof UNShowPreviewsSetting>;

  readonly criticalAlertSetting: interop.Enum<typeof UNNotificationSetting>;

  readonly providesAppNotificationSettings: boolean;

  readonly timeSensitiveSetting: interop.Enum<typeof UNNotificationSetting>;

  readonly scheduledDeliverySetting: interop.Enum<typeof UNNotificationSetting>;

  readonly directMessagesSetting: interop.Enum<typeof UNNotificationSetting>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationAction extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  readonly title: string;

  readonly options: interop.Enum<typeof UNNotificationActionOptions>;

  readonly icon: UNNotificationActionIcon;

  static actionWithIdentifierTitleOptions<This extends abstract new (...args: any) => any>(this: This, identifier: string, title: string, options: interop.Enum<typeof UNNotificationActionOptions>): InstanceType<This>;

  static actionWithIdentifierTitleOptionsIcon<This extends abstract new (...args: any) => any>(this: This, identifier: string, title: string, options: interop.Enum<typeof UNNotificationActionOptions>, icon: UNNotificationActionIcon | null): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNNotificationActionIcon extends NSObject implements NSCopying, NSSecureCoding {
  static iconWithTemplateImageName<This extends abstract new (...args: any) => any>(this: This, templateImageName: string): InstanceType<This>;

  static iconWithSystemImageName<This extends abstract new (...args: any) => any>(this: This, systemImageName: string): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class UNTextInputNotificationAction extends UNNotificationAction {
  static actionWithIdentifierTitleOptionsTextInputButtonTitleTextInputPlaceholder<This extends abstract new (...args: any) => any>(this: This, identifier: string, title: string, options: interop.Enum<typeof UNNotificationActionOptions>, textInputButtonTitle: string, textInputPlaceholder: string): InstanceType<This>;

  static actionWithIdentifierTitleOptionsIconTextInputButtonTitleTextInputPlaceholder<This extends abstract new (...args: any) => any>(this: This, identifier: string, title: string, options: interop.Enum<typeof UNNotificationActionOptions>, icon: UNNotificationActionIcon | null, textInputButtonTitle: string, textInputPlaceholder: string): InstanceType<This>;

  readonly textInputButtonTitle: string;

  readonly textInputPlaceholder: string;
}

declare class UNPushNotificationTrigger extends UNNotificationTrigger {
}

