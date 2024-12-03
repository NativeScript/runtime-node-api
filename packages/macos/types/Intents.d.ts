/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const INPersonRelationshipSon: string;

declare const INPersonHandleLabelSchool: string;

declare const INPersonHandleLabelOther: string;

declare const INPersonHandleLabelWorkFax: string;

declare const INPersonHandleLabelHomeFax: string;

declare const INPersonHandleLabelMain: string;

declare const INPersonHandleLabeliPhone: string;

declare const INHangUpCallIntentIdentifier: string;

declare const INAnswerCallIntentIdentifier: string;

declare const INPersonHandleLabelHome: string;

declare const INPersonRelationshipDaughter: string;

declare const INIntentErrorDomain: string;

declare const INPersonHandleLabelWork: string;

declare const IntentsVersionNumber: number;

declare const INPersonHandleLabelPager: string;

declare const INPersonHandleLabelMobile: string;

declare const IntentsVersionString: interop.Pointer;

declare const INFocusStatusAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  Authorized: 3,
};

declare const INGetRestaurantGuestIntentResponseCode: {
  Success: 0,
  Failure: 1,
};

declare const INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode: {
  Success: 0,
  Failure: 1,
  Unspecified: 2,
};

declare const INGetAvailableRestaurantReservationBookingsIntentCode: {
  Success: 0,
  Failure: 1,
  FailureRequestUnsatisfiable: 2,
  FailureRequestUnspecified: 3,
};

declare const INBookRestaurantReservationIntentCode: {
  Success: 0,
  Denied: 1,
  Failure: 2,
  FailureRequiringAppLaunch: 3,
  FailureRequiringAppLaunchMustVerifyCredentials: 4,
  FailureRequiringAppLaunchServiceTemporarilyUnavailable: 5,
};

declare const INStickerType: {
  Unknown: 0,
  Emoji: 1,
  Generic: 2,
};

declare const INStartCallCallRecordToCallBackUnsupportedReason: {
  INStartCallCallRecordToCallBackUnsupportedReasonNoMatchingCall: 1,
};

declare const INSendMessageRecipientUnsupportedReason: {
  NoAccount: 1,
  Offline: 2,
  MessagingServiceNotEnabledForRecipient: 3,
  NoValidHandle: 4,
  RequestedHandleInvalid: 5,
  NoHandleForLabel: 6,
  RequiringInAppAuthentication: 7,
};

declare const INPaymentMethodType: {
  Unknown: 0,
  Checking: 1,
  Savings: 2,
  Brokerage: 3,
  Debit: 4,
  Credit: 5,
  Prepaid: 6,
  Store: 7,
  ApplePay: 8,
};

declare const INMessageReactionType: {
  Unknown: 0,
  Emoji: 1,
  Generic: 2,
};

declare const INUnsendMessagesIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureMessageNotFound: 6,
  FailurePastUnsendTimeLimit: 7,
  FailureMessageTypeUnsupported: 8,
  FailureUnsupportedOnService: 9,
  FailureMessageServiceNotAvailable: 10,
  FailureRequiringInAppAuthentication: 11,
};

declare const INSendMessageIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureMessageServiceNotAvailable: 6,
  FailureRequiringInAppAuthentication: 7,
};

declare const INShareFocusStatusIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INInteractionDirection: {
  Unspecified: 0,
  Outgoing: 1,
  Incoming: 2,
};

declare const INIntentHandlingStatus: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  DeferredToApplication: 5,
  UserConfirmationRequired: 6,
};

declare const INCallDestinationType: {
  Unknown: 0,
  Normal: 1,
  Emergency: 2,
  Voicemail: 3,
  Redial: 4,
  CallBack: 5,
  NormalDestination: 1,
  EmergencyDestination: 2,
  VoicemailDestination: 3,
  RedialDestination: 4,
};

declare const INCallCapabilityOptions: {
  Audio: 1,
  Video: 2,
};

declare const INRestaurantReservationUserBookingStatus: {
  Pending: 0,
  Confirmed: 1,
  Denied: 2,
};

declare const INHangUpCallIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureNoCallToHangUp: 6,
};

declare const INRecurrenceFrequency: {
  Unknown: 0,
  Minute: 1,
  Hourly: 2,
  Daily: 3,
  Weekly: 4,
  Monthly: 5,
  Yearly: 6,
};

declare const INAnswerCallIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  InProgress: 3,
  Success: 4,
  Failure: 5,
  FailureRequiringAppLaunch: 6,
};

declare const INReservationStatus: {
  Unknown: 0,
  Canceled: 1,
  Pending: 2,
  Hold: 3,
  Confirmed: 4,
};

declare const INCallCapability: {
  Unknown: 0,
  AudioCall: 1,
  VideoCall: 2,
};

declare const INPersonSuggestionType: {
  None: 0,
  SocialProfile: 1,
  InstantMessageAddress: 2,
};

declare const INGetUserCurrentRestaurantReservationBookingsIntentResponseCode: {
  Success: 0,
  Failure: 1,
  FailureRequestUnsatisfiable: 2,
  Unspecified: 3,
};

declare const INReservationActionType: {
  Unknown: 0,
  CheckIn: 1,
};

declare const INEditMessageIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureMessageNotFound: 6,
  FailurePastEditTimeLimit: 7,
  FailureMessageTypeUnsupported: 8,
  FailureUnsupportedOnService: 9,
  FailureMessageServiceNotAvailable: 10,
  FailureRequiringInAppAuthentication: 11,
};

declare const INGetReservationDetailsIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INCallAudioRoute: {
  Unknown: 0,
  SpeakerphoneAudioRoute: 1,
  BluetoothAudioRoute: 2,
};

declare const INCallRecordTypeOptions: {
  Outgoing: 1,
  Missed: 2,
  Received: 4,
  Latest: 8,
  Voicemail: 16,
  Ringing: 32,
  InProgress: 64,
  OnHold: 128,
};

declare const INTicketedEventCategory: {
  Unknown: 0,
  Movie: 1,
};

declare const INIntentErrorCode: {
  InteractionOperationNotSupported: 1900,
  DonatingInteraction: 1901,
  DeletingAllInteractions: 1902,
  DeletingInteractionWithIdentifiers: 1903,
  DeletingInteractionWithGroupIdentifier: 1904,
  IntentSupportedByMultipleExtension: 2001,
  RestrictedIntentsNotSupportedByExtension: 2002,
  NoHandlerProvidedForIntent: 2003,
  InvalidIntentName: 2004,
  NoAppAvailable: 2005,
  RequestTimedOut: 3001,
  MissingInformation: 3002,
  InvalidUserVocabularyFileLocation: 4000,
  ExtensionLaunchingTimeout: 5000,
  ExtensionBringUpFailed: 5001,
  ImageGeneric: 6000,
  ImageNoServiceAvailable: 6001,
  ImageStorageFailed: 6002,
  ImageLoadingFailed: 6003,
  ImageRetrievalFailed: 6004,
  ImageProxyLoop: 6005,
  ImageProxyInvalid: 6006,
  ImageProxyTimeout: 6007,
  ImageServiceFailure: 6008,
  ImageScalingFailed: 6009,
  PermissionDenied: 6010,
  VoiceShortcutCreationFailed: 7000,
  VoiceShortcutGetFailed: 7001,
  VoiceShortcutDeleteFailed: 7002,
  EncodingGeneric: 8000,
  EncodingFailed: 8001,
  DecodingGeneric: 9000,
  UnableToCreateAppIntentRepresentation: 10000,
  NoAppIntent: 10001,
};

declare const INCallRecordType: {
  Unknown: 0,
  Outgoing: 1,
  Missed: 2,
  Received: 3,
  Latest: 4,
  Voicemail: 5,
  Ringing: 6,
  InProgress: 7,
  OnHold: 8,
};

declare const INOutgoingMessageType: {
  Unknown: 0,
  OutgoingMessageText: 1,
  OutgoingMessageAudio: 2,
};

declare const INPersonHandleType: {
  Unknown: 0,
  EmailAddress: 1,
  PhoneNumber: 2,
};

declare interface INSpeakable extends NSObjectProtocol {
  readonly spokenPhrase: string;

  readonly pronunciationHint: string;

  readonly vocabularyIdentifier: string;

  readonly alternativeSpeakableMatches: NSArray;

  readonly identifier?: string;
}

declare class INSpeakable extends NativeObject implements INSpeakable {
}

declare interface INUnsendMessagesIntentHandling extends NSObjectProtocol {
  handleUnsendMessagesCompletion(intent: INUnsendMessagesIntent, completion: (p1: INUnsendMessagesIntentResponse) => void): void;

  confirmUnsendMessagesCompletion?(intent: INUnsendMessagesIntent, completion: (p1: INUnsendMessagesIntentResponse) => void): void;
}

declare class INUnsendMessagesIntentHandling extends NativeObject implements INUnsendMessagesIntentHandling {
}

declare interface INEditMessageIntentHandling extends NSObjectProtocol {
  handleEditMessageCompletion(intent: INEditMessageIntent, completion: (p1: INEditMessageIntentResponse) => void): void;

  confirmEditMessageCompletion?(intent: INEditMessageIntent, completion: (p1: INEditMessageIntentResponse) => void): void;

  resolveEditedContentForEditMessageWithCompletion?(intent: INEditMessageIntent, completion: (p1: INStringResolutionResult) => void): void;
}

declare class INEditMessageIntentHandling extends NativeObject implements INEditMessageIntentHandling {
}

declare interface INStartCallIntentHandling extends NSObjectProtocol {
  handleStartCallCompletion(intent: INStartCallIntent, completion: (p1: interop.Object) => void): void;

  confirmStartCallCompletion?(intent: INStartCallIntent, completion: (p1: interop.Object) => void): void;

  resolveCallRecordToCallBackForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: INCallRecordResolutionResult) => void): void;

  resolveDestinationTypeForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: INCallDestinationTypeResolutionResult) => void): void;

  resolveContactsForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveCallCapabilityForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: interop.Object) => void): void;
}

declare class INStartCallIntentHandling extends NativeObject implements INStartCallIntentHandling {
}

declare interface INAnswerCallIntentHandling extends NSObjectProtocol {
  handleAnswerCallCompletion(intent: INAnswerCallIntent, completion: (p1: INAnswerCallIntentResponse) => void): void;

  confirmAnswerCallCompletion?(intent: INAnswerCallIntent, completion: (p1: INAnswerCallIntentResponse) => void): void;
}

declare class INAnswerCallIntentHandling extends NativeObject implements INAnswerCallIntentHandling {
}

declare interface INIntentHandlerProviding extends NSObjectProtocol {
  handlerForIntent(intent: INIntent): interop.Object;
}

declare class INIntentHandlerProviding extends NativeObject implements INIntentHandlerProviding {
}

declare interface INHangUpCallIntentHandling extends NSObjectProtocol {
  handleHangUpCallCompletion(intent: INHangUpCallIntent, completion: (p1: INHangUpCallIntentResponse) => void): void;

  confirmHangUpCallCompletion?(intent: INHangUpCallIntent, completion: (p1: INHangUpCallIntentResponse) => void): void;
}

declare class INHangUpCallIntentHandling extends NativeObject implements INHangUpCallIntentHandling {
}

declare interface INSendMessageIntentHandling extends NSObjectProtocol {
  handleSendMessageCompletion(intent: INSendMessageIntent, completion: (p1: INSendMessageIntentResponse) => void): void;

  confirmSendMessageCompletion?(intent: INSendMessageIntent, completion: (p1: INSendMessageIntentResponse) => void): void;

  resolveRecipientsForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveRecipientsForSendMessageCompletion?(intent: INSendMessageIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveGroupNameForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveOutgoingMessageTypeForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: INOutgoingMessageTypeResolutionResult) => void): void;

  resolveContentForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveSpeakableGroupNameForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: interop.Object) => void): void;
}

declare class INSendMessageIntentHandling extends NativeObject implements INSendMessageIntentHandling {
}

declare interface INShareFocusStatusIntentHandling extends NSObjectProtocol {
  handleShareFocusStatusCompletion(intent: INShareFocusStatusIntent, completion: (p1: INShareFocusStatusIntentResponse) => void): void;

  confirmShareFocusStatusCompletion?(intent: INShareFocusStatusIntent, completion: (p1: INShareFocusStatusIntentResponse) => void): void;
}

declare class INShareFocusStatusIntentHandling extends NativeObject implements INShareFocusStatusIntentHandling {
}

declare class INVoiceShortcutCenter extends NSObject {
  static readonly sharedCenter: INVoiceShortcutCenter;

  getAllVoiceShortcutsWithCompletion(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  getVoiceShortcutWithIdentifierCompletion(identifier: NSUUID, completionHandler: (p1: INVoiceShortcut, p2: NSError) => void | null): void;

  setShortcutSuggestions(suggestions: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class INShortcut extends NSObject implements NSSecureCoding, NSCopying {
  readonly intent: INIntent;

  readonly userActivity: NSUserActivity;

  initWithIntent(intent: INIntent): this;

  initWithUserActivity(userActivity: NSUserActivity): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INBusReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLReservedSeatBusTrip(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, reservedSeat: INSeat | null, busTrip: INBusTrip | null): this;

  readonly reservedSeat: INSeat;

  readonly busTrip: INBusTrip;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INTicketedEventReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLReservedSeatEvent(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, reservedSeat: INSeat | null, event: INTicketedEvent): this;

  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsReservedSeatEvent(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, reservedSeat: INSeat | null, event: INTicketedEvent): this;

  readonly event: INTicketedEvent;

  readonly reservedSeat: INSeat;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INRestaurantReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLReservationDurationPartySizeRestaurantLocation(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, reservationDuration: INDateComponentsRange, partySize: NSNumber | null, restaurantLocation: CLPlacemark): this;

  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsReservationDurationPartySizeRestaurantLocation(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, reservationDuration: INDateComponentsRange, partySize: NSNumber | null, restaurantLocation: CLPlacemark): this;

  readonly reservationDuration: INDateComponentsRange;

  readonly partySize: NSNumber;

  readonly restaurantLocation: CLPlacemark;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INLodgingReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLLodgingBusinessLocationReservationDurationNumberOfAdultsNumberOfChildren(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, lodgingBusinessLocation: CLPlacemark, reservationDuration: INDateComponentsRange, numberOfAdults: NSNumber | null, numberOfChildren: NSNumber | null): this;

  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsLodgingBusinessLocationReservationDurationNumberOfAdultsNumberOfChildren(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, lodgingBusinessLocation: CLPlacemark, reservationDuration: INDateComponentsRange, numberOfAdults: NSNumber | null, numberOfChildren: NSNumber | null): this;

  readonly lodgingBusinessLocation: CLPlacemark;

  readonly reservationDuration: INDateComponentsRange;

  readonly numberOfAdults: NSNumber;

  readonly numberOfChildren: NSNumber;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INReservationAction extends NSObject implements NSCopying, NSSecureCoding {
  initWithTypeValidDurationUserActivity(type: interop.Enum<typeof INReservationActionType>, validDuration: INDateComponentsRange, userActivity: NSUserActivity): this;

  readonly type: interop.Enum<typeof INReservationActionType>;

  readonly validDuration: INDateComponentsRange;

  readonly userActivity: NSUserActivity;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INReservation extends NSObject implements NSCopying, NSSecureCoding {
  readonly itemReference: INSpeakableString;

  readonly reservationNumber: string;

  readonly bookingTime: NSDate;

  readonly reservationStatus: interop.Enum<typeof INReservationStatus>;

  readonly reservationHolderName: string;

  readonly actions: NSArray;

  readonly URL: NSURL;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSendMessageAttachment extends NSObject {
  static attachmentWithAudioMessageFile(audioMessageFile: INFile): INSendMessageAttachment;

  readonly audioMessageFile: INFile;
}

declare class INObjectResolutionResult extends INIntentResolutionResult {
  static successWithResolvedObject<This extends abstract new (...args: any) => any>(this: This, resolvedObject: INObject): InstanceType<This>;

  static disambiguationWithObjectsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, objectsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithObjectToConfirm<This extends abstract new (...args: any) => any>(this: This, objectToConfirm: INObject | null): InstanceType<This>;
}

declare class INEnumResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: number): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: number): InstanceType<This>;
}

declare class INVolumeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedVolume<This extends abstract new (...args: any) => any>(this: This, resolvedVolume: NSMeasurement): InstanceType<This>;

  static disambiguationWithVolumeToDisambiguate<This extends abstract new (...args: any) => any>(this: This, volumeToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithVolumeToConfirm<This extends abstract new (...args: any) => any>(this: This, volumeToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INURLResolutionResult extends INIntentResolutionResult {
  static successWithResolvedURL<This extends abstract new (...args: any) => any>(this: This, resolvedURL: NSURL): InstanceType<This>;

  static disambiguationWithURLsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, urlsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithURLToConfirm<This extends abstract new (...args: any) => any>(this: This, urlToConfirm: NSURL | null): InstanceType<This>;
}

declare class INTemperatureResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTemperature<This extends abstract new (...args: any) => any>(this: This, resolvedTemperature: NSMeasurement): InstanceType<This>;

  static disambiguationWithTemperaturesToDisambiguate<This extends abstract new (...args: any) => any>(this: This, temperaturesToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithTemperatureToConfirm<This extends abstract new (...args: any) => any>(this: This, temperatureToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INPlacemarkResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPlacemark<This extends abstract new (...args: any) => any>(this: This, resolvedPlacemark: CLPlacemark): InstanceType<This>;

  static disambiguationWithPlacemarksToDisambiguate<This extends abstract new (...args: any) => any>(this: This, placemarksToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithPlacemarkToConfirm<This extends abstract new (...args: any) => any>(this: This, placemarkToConfirm: CLPlacemark | null): InstanceType<This>;
}

declare class INIntegerResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: number): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INPerson extends NSObject implements NSCopying, NSSecureCoding {
  initWithPersonHandleNameComponentsDisplayNameImageContactIdentifierCustomIdentifier(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, contactIdentifier: string | null, customIdentifier: string | null): this;

  initWithPersonHandleNameComponentsDisplayNameImageContactIdentifierCustomIdentifierRelationship(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, contactIdentifier: string | null, customIdentifier: string | null, relationship: string | null): this;

  initWithPersonHandleNameComponentsDisplayNameImageContactIdentifierCustomIdentifierIsMe(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, contactIdentifier: string | null, customIdentifier: string | null, isMe: boolean): this;

  initWithPersonHandleNameComponentsDisplayNameImageContactIdentifierCustomIdentifierIsMeSuggestionType(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, contactIdentifier: string | null, customIdentifier: string | null, isMe: boolean, suggestionType: interop.Enum<typeof INPersonSuggestionType>): this;

  initWithPersonHandleNameComponentsDisplayNameImageContactIdentifierCustomIdentifierIsContactSuggestionSuggestionType(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, contactIdentifier: string | null, customIdentifier: string | null, isContactSuggestion: boolean, suggestionType: interop.Enum<typeof INPersonSuggestionType>): this;

  readonly personHandle: INPersonHandle;

  readonly nameComponents: NSPersonNameComponents;

  readonly displayName: string;

  readonly image: INImage;

  readonly contactIdentifier: string;

  readonly customIdentifier: string;

  readonly relationship: string;

  readonly isContactSuggestion: boolean;

  readonly aliases: NSArray;

  readonly suggestionType: interop.Enum<typeof INPersonSuggestionType>;

  initWithPersonHandleNameComponentsDisplayNameImageContactIdentifierCustomIdentifierAliasesSuggestionType(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, contactIdentifier: string | null, customIdentifier: string | null, aliases: NSArray<interop.Object> | Array<interop.Object> | null, suggestionType: interop.Enum<typeof INPersonSuggestionType>): this;

  readonly isMe: boolean;

  readonly handle: string;

  initWithHandleNameComponentsContactIdentifier(handle: string, nameComponents: NSPersonNameComponents, contactIdentifier: string | null): this;

  initWithHandleDisplayNameContactIdentifier(handle: string, displayName: string | null, contactIdentifier: string | null): this;

  initWithHandleNameComponentsDisplayNameImageContactIdentifier(handle: string, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, contactIdentifier: string | null): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INObject extends NSObject implements INSpeakable, NSCopying, NSSecureCoding {
  initWithIdentifierDisplayStringPronunciationHint(identifier: string | null, displayString: string, pronunciationHint: string | null): this;

  initWithIdentifierDisplayString(identifier: string | null, displayString: string): this;

  initWithIdentifierDisplayStringSubtitleStringDisplayImage(identifier: string | null, displayString: string, subtitleString: string | null, displayImage: INImage | null): this;

  initWithIdentifierDisplayStringPronunciationHintSubtitleStringDisplayImage(identifier: string | null, displayString: string, pronunciationHint: string | null, subtitleString: string | null, displayImage: INImage | null): this;

  readonly identifier: string;

  readonly displayString: string;

  readonly pronunciationHint: string;

  subtitleString: string;

  displayImage: INImage;

  get alternativeSpeakableMatches(): NSArray;
  set alternativeSpeakableMatches(value: NSArray<interop.Object> | Array<interop.Object>);

  readonly spokenPhrase: string;

  readonly vocabularyIdentifier: string;

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

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCurrencyAmount extends NSObject implements NSCopying, NSSecureCoding {
  initWithAmountCurrencyCode(amount: NSDecimalNumber, currencyCode: string): this;

  readonly amount: NSDecimalNumber;

  readonly currencyCode: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INIntentDonationMetadata extends NSObject implements NSCopying, NSSecureCoding {
  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INTicketedEvent extends NSObject implements NSCopying, NSSecureCoding {
  initWithCategoryNameEventDurationLocation(category: interop.Enum<typeof INTicketedEventCategory>, name: string, eventDuration: INDateComponentsRange, location: CLPlacemark | null): this;

  readonly category: interop.Enum<typeof INTicketedEventCategory>;

  readonly name: string;

  readonly eventDuration: INDateComponentsRange;

  readonly location: CLPlacemark;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSticker extends NSObject implements NSCopying, NSSecureCoding {
  initWithTypeEmoji(type: interop.Enum<typeof INStickerType>, emoji: string | null): this;

  readonly type: interop.Enum<typeof INStickerType>;

  readonly emoji: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INStartCallCallRecordToCallBackResolutionResult extends INCallRecordResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INStartCallCallRecordToCallBackUnsupportedReason>): InstanceType<This>;

  initWithCallRecordResolutionResult(callRecordResolutionResult: INCallRecordResolutionResult): this;
}

declare class INSeat extends NSObject implements NSCopying, NSSecureCoding {
  initWithSeatSectionSeatRowSeatNumberSeatingType(seatSection: string | null, seatRow: string | null, seatNumber: string | null, seatingType: string | null): this;

  readonly seatSection: string;

  readonly seatRow: string;

  readonly seatNumber: string;

  readonly seatingType: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INDoubleResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: number): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INPaymentMethodResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPaymentMethod<This extends abstract new (...args: any) => any>(this: This, resolvedPaymentMethod: INPaymentMethod): InstanceType<This>;

  static disambiguationWithPaymentMethodsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, paymentMethodsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithPaymentMethodToConfirm<This extends abstract new (...args: any) => any>(this: This, paymentMethodToConfirm: INPaymentMethod | null): InstanceType<This>;
}

declare class INPaymentMethod extends NSObject implements NSCopying, NSSecureCoding {
  initWithTypeNameIdentificationHintIcon(type: interop.Enum<typeof INPaymentMethodType>, name: string | null, identificationHint: string | null, icon: INImage | null): this;

  readonly type: interop.Enum<typeof INPaymentMethodType>;

  readonly name: string;

  readonly icon: INImage;

  readonly identificationHint: string;

  static applePayPaymentMethod<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INFocusStatus extends NSObject implements NSCopying, NSSecureCoding {
  initWithIsFocused(isFocused: NSNumber | null): this;

  readonly isFocused: NSNumber;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCurrencyAmountResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCurrencyAmount<This extends abstract new (...args: any) => any>(this: This, resolvedCurrencyAmount: INCurrencyAmount): InstanceType<This>;

  static disambiguationWithCurrencyAmountsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, currencyAmountsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithCurrencyAmountToConfirm<This extends abstract new (...args: any) => any>(this: This, currencyAmountToConfirm: INCurrencyAmount | null): InstanceType<This>;
}

declare class INCallRecordFilter extends NSObject implements NSCopying, NSSecureCoding {
  initWithParticipantsCallTypesCallCapability(participants: NSArray<interop.Object> | Array<interop.Object> | null, callTypes: interop.Enum<typeof INCallRecordTypeOptions>, callCapability: interop.Enum<typeof INCallCapability>): this;

  readonly participants: NSArray;

  readonly callTypes: interop.Enum<typeof INCallRecordTypeOptions>;

  readonly callCapability: interop.Enum<typeof INCallCapability>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCallRecord extends NSObject implements NSCopying, NSSecureCoding {
  initWithIdentifierDateCreatedCallRecordTypeCallCapabilityCallDurationUnseenParticipantsNumberOfCallsIsCallerIdBlocked(identifier: string, dateCreated: NSDate | null, callRecordType: interop.Enum<typeof INCallRecordType>, callCapability: interop.Enum<typeof INCallCapability>, callDuration: NSNumber | null, unseen: NSNumber | null, participants: NSArray<interop.Object> | Array<interop.Object> | null, numberOfCalls: NSNumber | null, isCallerIdBlocked: NSNumber | null): this;

  initWithIdentifierDateCreatedCallRecordTypeCallCapabilityCallDurationUnseen(identifier: string, dateCreated: NSDate | null, callRecordType: interop.Enum<typeof INCallRecordType>, callCapability: interop.Enum<typeof INCallCapability>, callDuration: NSNumber | null, unseen: NSNumber | null): this;

  initWithIdentifierDateCreatedCallRecordTypeCallCapabilityCallDurationUnseenNumberOfCalls(identifier: string, dateCreated: NSDate | null, callRecordType: interop.Enum<typeof INCallRecordType>, callCapability: interop.Enum<typeof INCallCapability>, callDuration: NSNumber | null, unseen: NSNumber | null, numberOfCalls: NSNumber | null): this;

  readonly identifier: string;

  readonly dateCreated: NSDate;

  readonly callRecordType: interop.Enum<typeof INCallRecordType>;

  readonly callDuration: NSNumber;

  readonly unseen: NSNumber;

  readonly callCapability: interop.Enum<typeof INCallCapability>;

  readonly numberOfCalls: NSNumber;

  readonly isCallerIdBlocked: NSNumber;

  readonly participants: NSArray;

  initWithIdentifierDateCreatedCallerCallRecordTypeCallCapabilityCallDurationUnseen(identifier: string, dateCreated: NSDate | null, caller: INPerson | null, callRecordType: interop.Enum<typeof INCallRecordType>, callCapability: interop.Enum<typeof INCallCapability>, callDuration: NSNumber | null, unseen: NSNumber | null): this;

  initWithIdentifierDateCreatedCallerCallRecordTypeCallCapabilityCallDurationUnseenNumberOfCalls(identifier: string, dateCreated: NSDate | null, caller: INPerson | null, callRecordType: interop.Enum<typeof INCallRecordType>, callCapability: interop.Enum<typeof INCallCapability>, callDuration: NSNumber | null, unseen: NSNumber | null, numberOfCalls: NSNumber | null): this;

  readonly caller: INPerson;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCallCapabilityResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallCapability<This extends abstract new (...args: any) => any>(this: This, resolvedCallCapability: interop.Enum<typeof INCallCapability>): InstanceType<This>;

  static confirmationRequiredWithCallCapabilityToConfirm<This extends abstract new (...args: any) => any>(this: This, callCapabilityToConfirm: interop.Enum<typeof INCallCapability>): InstanceType<This>;
}

declare class INBoatTrip extends NSObject implements NSCopying, NSSecureCoding {
  initWithProviderBoatNameBoatNumberTripDurationDepartureBoatTerminalLocationArrivalBoatTerminalLocation(provider: string | null, boatName: string | null, boatNumber: string | null, tripDuration: INDateComponentsRange, departureBoatTerminalLocation: CLPlacemark, arrivalBoatTerminalLocation: CLPlacemark): this;

  readonly provider: string;

  readonly boatName: string;

  readonly boatNumber: string;

  readonly tripDuration: INDateComponentsRange;

  readonly departureBoatTerminalLocation: CLPlacemark;

  readonly arrivalBoatTerminalLocation: CLPlacemark;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INAirportGate extends NSObject implements NSCopying, NSSecureCoding {
  initWithAirportTerminalGate(airport: INAirport, terminal: string | null, gate: string | null): this;

  readonly airport: INAirport;

  readonly terminal: string;

  readonly gate: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INAirport extends NSObject implements NSCopying, NSSecureCoding {
  initWithNameIataCodeIcaoCode(name: string | null, iataCode: string | null, icaoCode: string | null): this;

  readonly name: string;

  readonly iataCode: string;

  readonly icaoCode: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INGetReservationDetailsIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INGetReservationDetailsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetReservationDetailsIntentResponseCode>;

  get reservations(): NSArray;
  set reservations(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INUnsendMessagesIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INUnsendMessagesIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INUnsendMessagesIntentResponseCode>;
}

declare class INShareFocusStatusIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INShareFocusStatusIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INShareFocusStatusIntentResponseCode>;
}

declare class INObjectCollection<ObjectType = interop.Object> extends NSObject implements NSCopying, NSSecureCoding {
  readonly sections: NSArray;

  readonly allItems: NSArray;

  usesIndexedCollation: boolean;

  initWithSections(sections: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithItems(items: NSArray<interop.Object> | Array<interop.Object>): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INObjectSection<ObjectType = interop.Object> extends NSObject implements NSCopying, NSSecureCoding {
  readonly title: string;

  readonly items: NSArray;

  initWithTitleItems(title: string | null, items: NSArray<interop.Object> | Array<interop.Object>): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INInteraction extends NSObject implements NSSecureCoding, NSCopying {
  initWithIntentResponse(intent: INIntent, response: INIntentResponse | null): this;

  donateInteractionWithCompletion(completion: (p1: NSError) => void | null): void;

  static deleteAllInteractionsWithCompletion(completion: (p1: NSError) => void | null): void;

  static deleteInteractionsWithIdentifiersCompletion(identifiers: NSArray<interop.Object> | Array<interop.Object>, completion: (p1: NSError) => void | null): void;

  static deleteInteractionsWithGroupIdentifierCompletion(groupIdentifier: string, completion: (p1: NSError) => void | null): void;

  readonly intent: INIntent;

  readonly intentResponse: INIntentResponse;

  readonly intentHandlingStatus: interop.Enum<typeof INIntentHandlingStatus>;

  direction: interop.Enum<typeof INInteractionDirection>;

  dateInterval: NSDateInterval;

  identifier: string;

  groupIdentifier: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INGetReservationDetailsIntent extends INIntent {
  initWithReservationContainerReferenceReservationItemReferences(reservationContainerReference: INSpeakableString | null, reservationItemReferences: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly reservationContainerReference: INSpeakableString;

  readonly reservationItemReferences: NSArray;
}

declare class INUnsendMessagesIntent extends INIntent {
  initWithMessageIdentifiers(messageIdentifiers: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly messageIdentifiers: NSArray;
}

declare class INSendMessageIntent extends INIntent {
  initWithRecipientsOutgoingMessageTypeContentSpeakableGroupNameConversationIdentifierServiceNameSenderAttachments(recipients: NSArray<interop.Object> | Array<interop.Object> | null, outgoingMessageType: interop.Enum<typeof INOutgoingMessageType>, content: string | null, speakableGroupName: INSpeakableString | null, conversationIdentifier: string | null, serviceName: string | null, sender: INPerson | null, attachments: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly recipients: NSArray;

  readonly outgoingMessageType: interop.Enum<typeof INOutgoingMessageType>;

  readonly content: string;

  readonly speakableGroupName: INSpeakableString;

  readonly conversationIdentifier: string;

  readonly serviceName: string;

  readonly sender: INPerson;

  readonly attachments: NSArray;

  initWithRecipientsContentGroupNameServiceNameSender(recipients: NSArray<interop.Object> | Array<interop.Object> | null, content: string | null, groupName: string | null, serviceName: string | null, sender: INPerson | null): this;

  initWithRecipientsContentSpeakableGroupNameConversationIdentifierServiceNameSender(recipients: NSArray<interop.Object> | Array<interop.Object> | null, content: string | null, speakableGroupName: INSpeakableString | null, conversationIdentifier: string | null, serviceName: string | null, sender: INPerson | null): this;

  initWithRecipientsOutgoingMessageTypeContentSpeakableGroupNameConversationIdentifierServiceNameSender(recipients: NSArray<interop.Object> | Array<interop.Object> | null, outgoingMessageType: interop.Enum<typeof INOutgoingMessageType>, content: string | null, speakableGroupName: INSpeakableString | null, conversationIdentifier: string | null, serviceName: string | null, sender: INPerson | null): this;

  readonly groupName: string;
}

declare class INIntentResolutionResult extends NSObject {
  static needsValue<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static notRequired<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static unsupported<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static unsupportedWithReason<This extends abstract new (...args: any) => any>(this: This, reason: number): InstanceType<This>;

  static confirmationRequiredWithItemToConfirmForReason<This extends abstract new (...args: any) => any>(this: This, itemToConfirm: interop.Object, reason: number): InstanceType<This>;
}

declare class INIntentResponse extends NSObject implements NSCopying, NSSecureCoding {
  userActivity: NSUserActivity;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INIntent extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;

  readonly intentDescription: string;

  suggestedInvocationPhrase: string;

  donationMetadata: INIntentDonationMetadata;

  setImageForParameterNamed(image: INImage | null, parameterName: string): void;

  imageForParameterNamed(parameterName: string): INImage | null;

  keyImage(): INImage | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INFileResolutionResult extends INIntentResolutionResult {
  static successWithResolvedFile<This extends abstract new (...args: any) => any>(this: This, resolvedFile: INFile): InstanceType<This>;

  static disambiguationWithFilesToDisambiguate<This extends abstract new (...args: any) => any>(this: This, filesToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithFileToConfirm<This extends abstract new (...args: any) => any>(this: This, fileToConfirm: INFile | null): InstanceType<This>;
}

declare class INPersonHandle extends NSObject implements NSCopying, NSSecureCoding {
  readonly value: string;

  readonly type: interop.Enum<typeof INPersonHandleType>;

  readonly label: string;

  initWithValueTypeLabel(value: string | null, type: interop.Enum<typeof INPersonHandleType>, label: string | null): this;

  initWithValueType(value: string | null, type: interop.Enum<typeof INPersonHandleType>): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INRentalCarReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLRentalCarRentalDurationPickupLocationDropOffLocation(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, rentalCar: INRentalCar, rentalDuration: INDateComponentsRange, pickupLocation: CLPlacemark | null, dropOffLocation: CLPlacemark | null): this;

  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsRentalCarRentalDurationPickupLocationDropOffLocation(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, rentalCar: INRentalCar, rentalDuration: INDateComponentsRange, pickupLocation: CLPlacemark | null, dropOffLocation: CLPlacemark | null): this;

  readonly rentalCar: INRentalCar;

  readonly rentalDuration: INDateComponentsRange;

  readonly pickupLocation: CLPlacemark;

  readonly dropOffLocation: CLPlacemark;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INEditMessageIntent extends INIntent {
  initWithMessageIdentifierEditedContent(messageIdentifier: string | null, editedContent: string | null): this;

  readonly messageIdentifier: string;

  readonly editedContent: string;
}

declare class INBooleanResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: boolean): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INBusTrip extends NSObject implements NSCopying, NSSecureCoding {
  initWithProviderBusNameBusNumberTripDurationDepartureBusStopLocationDeparturePlatformArrivalBusStopLocationArrivalPlatform(provider: string | null, busName: string | null, busNumber: string | null, tripDuration: INDateComponentsRange, departureBusStopLocation: CLPlacemark, departurePlatform: string | null, arrivalBusStopLocation: CLPlacemark, arrivalPlatform: string | null): this;

  readonly provider: string;

  readonly busName: string;

  readonly busNumber: string;

  readonly tripDuration: INDateComponentsRange;

  readonly departureBusStopLocation: CLPlacemark;

  readonly departurePlatform: string;

  readonly arrivalBusStopLocation: CLPlacemark;

  readonly arrivalPlatform: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INMassResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMass<This extends abstract new (...args: any) => any>(this: This, resolvedMass: NSMeasurement): InstanceType<This>;

  static disambiguationWithMassToDisambiguate<This extends abstract new (...args: any) => any>(this: This, massToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithMassToConfirm<This extends abstract new (...args: any) => any>(this: This, massToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INSendMessageIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSendMessageIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSendMessageIntentResponseCode>;

  get sentMessages(): NSArray;
  set sentMessages(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INCallGroup extends NSObject implements NSCopying, NSSecureCoding {
  initWithGroupNameGroupId(groupName: string | null, groupId: string | null): this;

  readonly groupName: string;

  readonly groupId: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INAnswerCallIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INAnswerCallIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INAnswerCallIntentResponseCode>;

  get callRecords(): NSArray;
  set callRecords(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INMessageLinkMetadata extends NSObject implements NSCopying, NSSecureCoding {
  initWithSiteNameSummaryTitleOpenGraphTypeLinkURL(siteName: string | null, summary: string | null, title: string | null, openGraphType: string | null, linkURL: NSURL | null): this;

  siteName: string;

  summary: string;

  title: string;

  openGraphType: string;

  linkURL: NSURL;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INStartCallIntent extends INIntent {
  initWithCallRecordFilterCallRecordToCallBackAudioRouteDestinationTypeContactsCallCapability(callRecordFilter: INCallRecordFilter | null, callRecordToCallBack: INCallRecord | null, audioRoute: interop.Enum<typeof INCallAudioRoute>, destinationType: interop.Enum<typeof INCallDestinationType>, contacts: NSArray<interop.Object> | Array<interop.Object> | null, callCapability: interop.Enum<typeof INCallCapability>): this;

  readonly callRecordFilter: INCallRecordFilter;

  readonly callRecordToCallBack: INCallRecord;

  readonly audioRoute: interop.Enum<typeof INCallAudioRoute>;

  readonly destinationType: interop.Enum<typeof INCallDestinationType>;

  readonly contacts: NSArray;

  readonly callCapability: interop.Enum<typeof INCallCapability>;
}

declare class INMessageReaction extends NSObject implements NSCopying, NSSecureCoding {
  initWithReactionTypeReactionDescriptionEmoji(reactionType: interop.Enum<typeof INMessageReactionType>, reactionDescription: string | null, emoji: string | null): this;

  readonly reactionType: interop.Enum<typeof INMessageReactionType>;

  readonly reactionDescription: string;

  readonly emoji: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSpeakableString extends NSObject implements INSpeakable, NSCopying, NSSecureCoding {
  initWithVocabularyIdentifierSpokenPhrasePronunciationHint(vocabularyIdentifier: string, spokenPhrase: string, pronunciationHint: string | null): this;

  initWithSpokenPhrase(spokenPhrase: string): this;

  readonly spokenPhrase: string;

  readonly pronunciationHint: string;

  readonly vocabularyIdentifier: string;

  readonly alternativeSpeakableMatches: NSArray;

  readonly identifier: string;

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

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSpeedResolutionResult extends INIntentResolutionResult {
  static successWithResolvedSpeed<This extends abstract new (...args: any) => any>(this: This, resolvedSpeed: NSMeasurement): InstanceType<This>;

  static disambiguationWithSpeedToDisambiguate<This extends abstract new (...args: any) => any>(this: This, speedToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithSpeedToConfirm<This extends abstract new (...args: any) => any>(this: This, speedToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INTrainTrip extends NSObject implements NSCopying, NSSecureCoding {
  initWithProviderTrainNameTrainNumberTripDurationDepartureStationLocationDeparturePlatformArrivalStationLocationArrivalPlatform(provider: string | null, trainName: string | null, trainNumber: string | null, tripDuration: INDateComponentsRange, departureStationLocation: CLPlacemark, departurePlatform: string | null, arrivalStationLocation: CLPlacemark, arrivalPlatform: string | null): this;

  readonly provider: string;

  readonly trainName: string;

  readonly trainNumber: string;

  readonly tripDuration: INDateComponentsRange;

  readonly departureStationLocation: CLPlacemark;

  readonly departurePlatform: string;

  readonly arrivalStationLocation: CLPlacemark;

  readonly arrivalPlatform: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INFlight extends NSObject implements NSCopying, NSSecureCoding {
  initWithAirlineFlightNumberBoardingTimeFlightDurationDepartureAirportGateArrivalAirportGate(airline: INAirline, flightNumber: string, boardingTime: INDateComponentsRange | null, flightDuration: INDateComponentsRange, departureAirportGate: INAirportGate, arrivalAirportGate: INAirportGate): this;

  readonly airline: INAirline;

  readonly flightNumber: string;

  readonly boardingTime: INDateComponentsRange;

  readonly flightDuration: INDateComponentsRange;

  readonly departureAirportGate: INAirportGate;

  readonly arrivalAirportGate: INAirportGate;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INPersonResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPerson<This extends abstract new (...args: any) => any>(this: This, resolvedPerson: INPerson): InstanceType<This>;

  static disambiguationWithPeopleToDisambiguate<This extends abstract new (...args: any) => any>(this: This, peopleToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithPersonToConfirm<This extends abstract new (...args: any) => any>(this: This, personToConfirm: INPerson | null): InstanceType<This>;
}

declare class INRentalCar extends NSObject implements NSCopying, NSSecureCoding {
  initWithRentalCompanyNameTypeMakeModelRentalCarDescription(rentalCompanyName: string, type: string | null, make: string | null, model: string | null, rentalCarDescription: string | null): this;

  readonly rentalCompanyName: string;

  readonly type: string;

  readonly make: string;

  readonly model: string;

  readonly rentalCarDescription: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCallRecordTypeOptionsResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallRecordTypeOptions<This extends abstract new (...args: any) => any>(this: This, resolvedCallRecordTypeOptions: interop.Enum<typeof INCallRecordTypeOptions>): InstanceType<This>;

  static confirmationRequiredWithCallRecordTypeOptionsToConfirm<This extends abstract new (...args: any) => any>(this: This, callRecordTypeOptionsToConfirm: interop.Enum<typeof INCallRecordTypeOptions>): InstanceType<This>;
}

declare class INShareFocusStatusIntent extends INIntent {
  initWithFocusStatus(focusStatus: INFocusStatus | null): this;

  readonly focusStatus: INFocusStatus;
}

declare class INEnergyResolutionResult extends INIntentResolutionResult {
  static successWithResolvedEnergy<This extends abstract new (...args: any) => any>(this: This, resolvedEnergy: NSMeasurement): InstanceType<This>;

  static disambiguationWithEnergyToDisambiguate<This extends abstract new (...args: any) => any>(this: This, energyToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithEnergyToConfirm<This extends abstract new (...args: any) => any>(this: This, energyToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INBoatReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLReservedSeatBoatTrip(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, reservedSeat: INSeat | null, boatTrip: INBoatTrip | null): this;

  readonly reservedSeat: INSeat;

  readonly boatTrip: INBoatTrip;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INImage extends NSObject implements NSCopying, NSSecureCoding {
  static imageNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static imageWithImageData<This extends abstract new (...args: any) => any>(this: This, imageData: NSData): InstanceType<This>;

  static imageWithURL<This extends abstract new (...args: any) => any>(this: This, URL: NSURL): InstanceType<This>;

  static imageWithURLWidthHeight<This extends abstract new (...args: any) => any>(this: This, URL: NSURL, width: number, height: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INTrainReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLReservedSeatTrainTrip(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, reservedSeat: INSeat | null, trainTrip: INTrainTrip): this;

  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsReservedSeatTrainTrip(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, reservedSeat: INSeat | null, trainTrip: INTrainTrip): this;

  readonly reservedSeat: INSeat;

  readonly trainTrip: INTrainTrip;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INOutgoingMessageTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedOutgoingMessageType<This extends abstract new (...args: any) => any>(this: This, resolvedOutgoingMessageType: interop.Enum<typeof INOutgoingMessageType>): InstanceType<This>;

  static confirmationRequiredWithOutgoingMessageTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, outgoingMessageTypeToConfirm: interop.Enum<typeof INOutgoingMessageType>): InstanceType<This>;
}

declare class INStringResolutionResult extends INIntentResolutionResult {
  static successWithResolvedString<This extends abstract new (...args: any) => any>(this: This, resolvedString: string): InstanceType<This>;

  static disambiguationWithStringsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, stringsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithStringToConfirm<This extends abstract new (...args: any) => any>(this: This, stringToConfirm: string | null): InstanceType<This>;
}

declare class INTimeIntervalResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTimeInterval<This extends abstract new (...args: any) => any>(this: This, resolvedTimeInterval: number): InstanceType<This>;

  static confirmationRequiredWithTimeIntervalToConfirm<This extends abstract new (...args: any) => any>(this: This, timeIntervalToConfirm: number): InstanceType<This>;
}

declare class INLengthResolutionResult extends INIntentResolutionResult {
  static successWithResolvedLength<This extends abstract new (...args: any) => any>(this: This, resolvedLength: NSMeasurement): InstanceType<This>;

  static disambiguationWithLengthsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, lengthsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithLengthToConfirm<This extends abstract new (...args: any) => any>(this: This, lengthToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INVoiceShortcut extends NSObject implements NSSecureCoding, NSCopying {
  readonly identifier: NSUUID;

  readonly invocationPhrase: string;

  readonly shortcut: INShortcut;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INDateComponentsResolutionResult extends INIntentResolutionResult {
  static successWithResolvedDateComponents<This extends abstract new (...args: any) => any>(this: This, resolvedDateComponents: NSDateComponents): InstanceType<This>;

  static disambiguationWithDateComponentsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, dateComponentsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithDateComponentsToConfirm<This extends abstract new (...args: any) => any>(this: This, dateComponentsToConfirm: NSDateComponents | null): InstanceType<This>;
}

declare class INHangUpCallIntent extends INIntent {
  initWithCallIdentifier(callIdentifier: string | null): this;

  readonly callIdentifier: string;
}

declare class INCallRecordResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallRecord<This extends abstract new (...args: any) => any>(this: This, resolvedCallRecord: INCallRecord): InstanceType<This>;

  static disambiguationWithCallRecordsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, callRecordsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithCallRecordToConfirm<This extends abstract new (...args: any) => any>(this: This, callRecordToConfirm: INCallRecord | null): InstanceType<This>;
}

declare class INHangUpCallIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INHangUpCallIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INHangUpCallIntentResponseCode>;
}

declare class INFile extends NSObject implements NSSecureCoding {
  static fileWithDataFilenameTypeIdentifier(data: NSData, filename: string, typeIdentifier: string | null): INFile;

  static fileWithFileURLFilenameTypeIdentifier(fileURL: NSURL, filename: string | null, typeIdentifier: string | null): INFile;

  readonly data: NSData;

  filename: string;

  readonly typeIdentifier: string;

  readonly fileURL: NSURL;

  removedOnCompletion: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCallDestinationTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallDestinationType<This extends abstract new (...args: any) => any>(this: This, resolvedCallDestinationType: interop.Enum<typeof INCallDestinationType>): InstanceType<This>;

  static confirmationRequiredWithCallDestinationTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, callDestinationTypeToConfirm: interop.Enum<typeof INCallDestinationType>): InstanceType<This>;
}

declare class INAnswerCallIntent extends INIntent {
  initWithAudioRouteCallIdentifier(audioRoute: interop.Enum<typeof INCallAudioRoute>, callIdentifier: string | null): this;

  readonly audioRoute: interop.Enum<typeof INCallAudioRoute>;

  readonly callIdentifier: string;
}

declare class INSendMessageRecipientResolutionResult extends INPersonResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSendMessageRecipientUnsupportedReason>): InstanceType<This>;

  initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult): this;
}

declare class INDateComponentsRange extends NSObject implements NSCopying, NSSecureCoding {
  initWithStartDateComponentsEndDateComponents(startDateComponents: NSDateComponents | null, endDateComponents: NSDateComponents | null): this;

  initWithStartDateComponentsEndDateComponentsRecurrenceRule(startDateComponents: NSDateComponents | null, endDateComponents: NSDateComponents | null, recurrenceRule: interop.Object | null): this;

  readonly startDateComponents: NSDateComponents;

  readonly endDateComponents: NSDateComponents;

  readonly recurrenceRule: interop.Object;

  initWithEKRecurrenceRule(recurrenceRule: EKRecurrenceRule): this;

  EKRecurrenceRule(): EKRecurrenceRule;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INFlightReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLReservedSeatFlight(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, reservedSeat: INSeat | null, flight: INFlight): this;

  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsReservedSeatFlight(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, reservedSeat: INSeat | null, flight: INFlight): this;

  readonly reservedSeat: INSeat;

  readonly flight: INFlight;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCallRecordTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallRecordType<This extends abstract new (...args: any) => any>(this: This, resolvedCallRecordType: interop.Enum<typeof INCallRecordType>): InstanceType<This>;

  static confirmationRequiredWithCallRecordTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, callRecordTypeToConfirm: interop.Enum<typeof INCallRecordType>): InstanceType<This>;
}

declare class INAirline extends NSObject implements NSCopying, NSSecureCoding {
  initWithNameIataCodeIcaoCode(name: string | null, iataCode: string | null, icaoCode: string | null): this;

  readonly name: string;

  readonly iataCode: string;

  readonly icaoCode: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INFocusStatusCenter extends NSObject {
  static readonly defaultCenter: INFocusStatusCenter;

  readonly focusStatus: INFocusStatus;

  readonly authorizationStatus: interop.Enum<typeof INFocusStatusAuthorizationStatus>;

  requestAuthorizationWithCompletionHandler(completionHandler: (p1: interop.Enum<typeof INFocusStatusAuthorizationStatus>) => void | null): void;
}

declare class INExtension extends NSObject implements INIntentHandlerProviding {
  handlerForIntent(intent: INIntent): interop.Object;

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

declare class INEditMessageIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INEditMessageIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INEditMessageIntentResponseCode>;
}

declare class INSendMessageIntentDonationMetadata extends INIntentDonationMetadata {
  mentionsCurrentUser: boolean;

  isReplyToCurrentUser: boolean;

  notifyRecipientAnyway: boolean;

  recipientCount: number;

  init(): this;
}

