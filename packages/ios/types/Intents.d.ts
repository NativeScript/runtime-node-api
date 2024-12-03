/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const INWorkoutNameIdentifierSwim: string;

declare const INWorkoutNameIdentifierIndoorwalk: string;

declare const INWorkoutNameIdentifierIndoorcycle: string;

declare const INWorkoutNameIdentifierIndoorrun: string;

declare const INWorkoutNameIdentifierCycle: string;

declare const INWorkoutNameIdentifierCrosstraining: string;

declare const INWorkoutNameIdentifierDance: string;

declare const INWorkoutNameIdentifierYoga: string;

declare const INWorkoutNameIdentifierWalk: string;

declare const INWorkoutNameIdentifierMove: string;

declare const INWorkoutNameIdentifierSteps: string;

declare const INWorkoutNameIdentifierSit: string;

declare const INPersonRelationshipDaughter: string;

declare const INPersonRelationshipAssistant: string;

declare const INPersonRelationshipSister: string;

declare const INPersonRelationshipFather: string;

declare const INPersonHandleLabelPager: string;

declare const INPersonHandleLabelMobile: string;

declare const INPersonHandleLabeliPhone: string;

declare const INPersonHandleLabelHome: string;

declare const INCarChargingConnectorTypeNACSAC: string;

declare const INCarChargingConnectorTypeCHAdeMO: string;

declare const INCarChargingConnectorTypeCCS1: string;

declare const INRequestRideIntentIdentifier: string;

declare const INListRideOptionsIntentIdentifier: string;

declare const INSendPaymentIntentIdentifier: string;

declare const INSetMessageAttributeIntentIdentifier: string;

declare const INSendMessageIntentIdentifier: string;

declare const INResumeWorkoutIntentIdentifier: string;

declare const INEndWorkoutIntentIdentifier: string;

declare const INPauseWorkoutIntentIdentifier: string;

declare const INSetProfileInCarIntentIdentifier: string;

declare const INSetDefrosterSettingsInCarIntentIdentifier: string;

declare const INSetClimateSettingsInCarIntentIdentifier: string;

declare const INHangUpCallIntentIdentifier: string;

declare const INStartCallIntentIdentifier: string;

declare const INSearchCallHistoryIntentIdentifier: string;

declare const INPersonRelationshipFriend: string;

declare const INAnswerCallIntentIdentifier: string;

declare const INWorkoutNameIdentifierStairs: string;

declare const INSaveProfileInCarIntentIdentifier: string;

declare const INWorkoutNameIdentifierHike: string;

declare const INPersonHandleLabelOther: string;

declare const INPersonRelationshipParent: string;

declare const INWorkoutNameIdentifierExercise: string;

declare const INPersonRelationshipSpouse: string;

declare const INWorkoutNameIdentifierRun: string;

declare const INPersonRelationshipBrother: string;

declare const INCarChargingConnectorTypeMennekes: string;

declare const INPersonRelationshipMother: string;

declare const INSearchForPhotosIntentIdentifier: string;

declare const INPersonHandleLabelMain: string;

declare const INCarChargingConnectorTypeGBTAC: string;

declare const INSetAudioSourceInCarIntentIdentifier: string;

declare const INWorkoutNameIdentifierOther: string;

declare const INPersonRelationshipPartner: string;

declare const INWorkoutNameIdentifierElliptical: string;

declare const INCarChargingConnectorTypeCCS2: string;

declare const INPersonRelationshipManager: string;

declare const INGetRideStatusIntentIdentifier: string;

declare const INWorkoutNameIdentifierHighIntensityIntervalTraining: string;

declare const IntentsVersionString: interop.Pointer;

declare const INIntentErrorDomain: string;

declare const INWorkoutNameIdentifierRower: string;

declare const INCarChargingConnectorTypeNACSDC: string;

declare const IntentsVersionNumber: number;

declare const INStartVideoCallIntentIdentifier: string;

declare const INSetSeatSettingsInCarIntentIdentifier: string;

declare const INPersonRelationshipSon: string;

declare const INSetRadioStationIntentIdentifier: string;

declare const INPersonHandleLabelWork: string;

declare const INSearchForMessagesIntentIdentifier: string;

declare const INPersonHandleLabelWorkFax: string;

declare const INStartPhotoPlaybackIntentIdentifier: string;

declare const INCarChargingConnectorTypeJ1772: string;

declare const INPersonHandleLabelHomeFax: string;

declare const INRequestPaymentIntentIdentifier: string;

declare const INPersonRelationshipChild: string;

declare const INCancelWorkoutIntentIdentifier: string;

declare const INWorkoutNameIdentifierStand: string;

declare const INCarChargingConnectorTypeGBTDC: string;

declare const INStartWorkoutIntentIdentifier: string;

declare const INCarChargingConnectorTypeTesla: string;

declare const INStartAudioCallIntentIdentifier: string;

declare const INPersonHandleLabelSchool: string;

declare const INRelevantShortcutRole: {
  Action: 0,
  Information: 1,
};

declare const INDailyRoutineSituation: {
  Morning: 0,
  Evening: 1,
  Home: 2,
  Work: 3,
  School: 4,
  Gym: 5,
  Commute: 6,
  HeadphonesConnected: 7,
  ActiveWorkout: 8,
  PhysicalActivityIncomplete: 9,
};

declare const INFocusStatusAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  Authorized: 3,
};

declare const INUpcomingMediaPredictionMode: {
  Default: 0,
  OnlyPredictSuggestedIntents: 1,
};

declare const INVocabularyStringType: {
  ContactName: 1,
  ContactGroupName: 2,
  PhotoTag: 100,
  PhotoAlbumName: 101,
  WorkoutActivityName: 200,
  CarProfileName: 300,
  CarName: 301,
  PaymentsOrganizationName: 400,
  PaymentsAccountNickname: 401,
  NotebookItemTitle: 500,
  NotebookItemGroupName: 501,
  MediaPlaylistTitle: 700,
  MediaMusicArtistName: 701,
  MediaAudiobookTitle: 702,
  MediaAudiobookAuthorName: 703,
  MediaShowTitle: 704,
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

declare const INMessageType: {
  Unspecified: 0,
  Text: 1,
  Audio: 2,
  DigitalTouch: 3,
  Handwriting: 4,
  Sticker: 5,
  TapbackLiked: 6,
  TapbackDisliked: 7,
  TapbackEmphasized: 8,
  TapbackLoved: 9,
  TapbackQuestioned: 10,
  TapbackLaughed: 11,
  MediaCalendar: 12,
  MediaLocation: 13,
  MediaAddressCard: 14,
  MediaImage: 15,
  MediaVideo: 16,
  MediaPass: 17,
  MediaAudio: 18,
  PaymentSent: 19,
  PaymentRequest: 20,
  PaymentNote: 21,
  Animoji: 22,
  ActivitySnippet: 23,
  File: 24,
  Link: 25,
  Reaction: 26,
  MediaAnimatedImage: 27,
  ThirdPartyAttachment: 28,
};

declare const INPersonSuggestionType: {
  None: 0,
  SocialProfile: 1,
  InstantMessageAddress: 2,
};

declare const INUpdateMediaAffinityMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INTaskType: {
  Unknown: 0,
  NotCompletable: 1,
  Completable: 2,
};

declare const INStickerType: {
  Unknown: 0,
  Emoji: 1,
  Generic: 2,
};

declare const INStartCallContactUnsupportedReason: {
  NoContactFound: 1,
  MultipleContactsUnsupported: 2,
  NoHandleForLabel: 3,
  InvalidHandle: 4,
  UnsupportedMmiUssd: 5,
  NoCallHistoryForRedial: 6,
  NoUsableHandleForRedial: 7,
  RequiringInAppAuthentication: 8,
};

declare const INStartCallCallRecordToCallBackUnsupportedReason: {
  INStartCallCallRecordToCallBackUnsupportedReasonNoMatchingCall: 1,
};

declare const INSpatialEvent: {
  Unknown: 0,
  Arrive: 1,
  Depart: 2,
};

declare const INSnoozeTasksTaskUnsupportedReason: {
  INSnoozeTasksTaskUnsupportedReasonNoTasksFound: 1,
};

declare const INSendPaymentPayeeUnsupportedReason: {
  CredentialsUnverified: 1,
  InsufficientFunds: 2,
  NoAccount: 3,
  NoValidHandle: 4,
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

declare const INSearchForMediaMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INRideFeedbackTypeOptions: {
  Rate: 1,
  Tip: 2,
};

declare const INRequestPaymentPayerUnsupportedReason: {
  CredentialsUnverified: 1,
  NoAccount: 2,
  NoValidHandle: 3,
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

declare const INNoteContentType: {
  Unknown: 0,
  Text: 1,
  Image: 2,
};

declare const INMediaSortOrder: {
  Unknown: 0,
  Newest: 1,
  Oldest: 2,
  Best: 3,
  Worst: 4,
  Popular: 5,
  Unpopular: 6,
  Trending: 7,
  Recommended: 8,
};

declare const INDayOfWeekOptions: {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 4,
  Thursday: 8,
  Friday: 16,
  Saturday: 32,
  Sunday: 64,
};

declare const INAddMediaMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INSendRideFeedbackIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  Success: 2,
  Failure: 3,
};

declare const INRequestRideIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureRequiringAppLaunchMustVerifyCredentials: 6,
  FailureRequiringAppLaunchNoServiceInArea: 7,
  FailureRequiringAppLaunchServiceTemporarilyUnavailable: 8,
  FailureRequiringAppLaunchPreviousRideNeedsCompletion: 9,
  FailureRequiringAppLaunchRideScheduledTooFar: 10,
};

declare const INSiriAuthorizationStatus: {
  NotDetermined: 0,
  Restricted: 1,
  Denied: 2,
  Authorized: 3,
};

declare const INGetRideStatusIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureRequiringAppLaunchMustVerifyCredentials: 6,
  FailureRequiringAppLaunchServiceTemporarilyUnavailable: 7,
};

declare const INPlayMediaPlaybackSpeedUnsupportedReason: {
  BelowMinimum: 1,
  AboveMaximum: 2,
};

declare const INRequestPaymentIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCredentialsUnverified: 6,
  FailurePaymentsAmountBelowMinimum: 7,
  FailurePaymentsAmountAboveMaximum: 8,
  FailurePaymentsCurrencyUnsupported: 9,
  FailureNoBankAccount: 10,
  FailureNotEligible: 11,
  FailureTermsAndConditionsAcceptanceRequired: 12,
};

declare const INStartPhotoPlaybackIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureAppConfigurationRequired: 5,
};

declare const INPayBillIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCredentialsUnverified: 6,
  FailureInsufficientFunds: 7,
};

declare const INSetTaskAttributeIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSearchForNotebookItemsIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSortType: {
  Unknown: 0,
  AsIs: 1,
  ByDate: 2,
};

declare const INDeleteTasksIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INCreateTaskListIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INCreateNoteIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INAppendToNoteIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCannotUpdatePasswordProtectedNote: 6,
};

declare const INAddTasksIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
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

declare const INUpdateMediaAffinityIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INPlayMediaIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  InProgress: 3,
  Success: 4,
  HandleInApp: 5,
  Failure: 6,
  FailureRequiringAppLaunch: 7,
  FailureUnknownMediaType: 8,
  FailureNoUnplayedContent: 9,
  FailureRestrictedContent: 10,
  FailureMaxStreamLimitReached: 11,
};

declare const INMessageReactionType: {
  Unknown: 0,
  Emoji: 1,
  Generic: 2,
};

declare const INAddMediaIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  HandleInApp: 4,
  Failure: 5,
  FailureRequiringAppLaunch: 6,
};

declare const INShareFocusStatusIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INStartWorkoutIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureOngoingWorkout: 5,
  FailureNoMatchingWorkout: 6,
  HandleInApp: 7,
  Success: 8,
};

declare const INResumeWorkoutIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureNoMatchingWorkout: 5,
  HandleInApp: 6,
  Success: 7,
};

declare const INPauseWorkoutIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureNoMatchingWorkout: 5,
  HandleInApp: 6,
  Success: 7,
};

declare const INEndWorkoutIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureNoMatchingWorkout: 5,
  HandleInApp: 6,
  Success: 7,
};

declare const INCancelWorkoutIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureNoMatchingWorkout: 5,
  HandleInApp: 6,
  Success: 7,
};

declare const INSetSeatSettingsInCarIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSetProfileInCarIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSetDefrosterSettingsInCarIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSetClimateSettingsInCarIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSetCarLockStatusIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSetAudioSourceInCarIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INSaveProfileInCarIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INStartCallIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  UserConfirmationRequired: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCallingServiceNotAvailable: 6,
  FailureContactNotSupportedByApp: 7,
  FailureAirplaneModeEnabled: 8,
  FailureUnableToHandOff: 9,
  FailureAppConfigurationRequired: 10,
  FailureCallInProgress: 11,
  FailureRequiringInAppAuthentication: 13,
};

declare const INPaymentStatus: {
  Unknown: 0,
  Pending: 1,
  Completed: 2,
  Canceled: 3,
  Failed: 4,
  Unpaid: 5,
};

declare const INBalanceType: {
  Unknown: 0,
  Money: 1,
  Points: 2,
  Miles: 3,
};

declare const INAccountType: {
  Unknown: 0,
  Checking: 1,
  Credit: 2,
  Debit: 3,
  Investment: 4,
  Mortgage: 5,
  Prepaid: 6,
  Saving: 7,
};

declare const INTaskStatus: {
  Unknown: 0,
  NotCompleted: 1,
  Completed: 2,
};

declare const INNotebookItemType: {
  Unknown: 0,
  Note: 1,
  TaskList: 2,
  Task: 3,
};

declare const INLocationSearchType: {
  Unknown: 0,
  ByLocationTrigger: 1,
};

declare const INMessageAttribute: {
  Unknown: 0,
  Read: 1,
  Unread: 2,
  Flagged: 3,
  Unflagged: 4,
  Played: 5,
};

declare const INOutgoingMessageType: {
  Unknown: 0,
  OutgoingMessageText: 1,
  OutgoingMessageAudio: 2,
};

declare const INMessageAttributeOptions: {
  Read: 1,
  Unread: 2,
  Flagged: 4,
  Unflagged: 8,
  Played: 16,
};

declare const INConditionalOperator: {
  All: 0,
  Any: 1,
  None: 2,
};

declare const INRadioType: {
  Unknown: 0,
  AM: 1,
  FM: 2,
  HD: 3,
  Satellite: 4,
  DAB: 5,
};

declare const INPlaybackRepeatMode: {
  Unknown: 0,
  None: 1,
  All: 2,
  One: 3,
};

declare const INWorkoutGoalUnitType: {
  Unknown: 0,
  Inch: 1,
  Meter: 2,
  Foot: 3,
  Mile: 4,
  Yard: 5,
  Second: 6,
  Minute: 7,
  Hour: 8,
  Joule: 9,
  KiloCalorie: 10,
};

declare const INRelativeSetting: {
  Unknown: 0,
  Lowest: 1,
  Lower: 2,
  Higher: 3,
  Highest: 4,
};

declare const INCarSignalOptions: {
  Audible: 1,
  Visible: 2,
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

declare const INCallAudioRoute: {
  Unknown: 0,
  SpeakerphoneAudioRoute: 1,
  BluetoothAudioRoute: 2,
};

declare const INShortcutAvailabilityOptions: {
  Mindfulness: 1,
  Journaling: 2,
  Music: 4,
  Podcasts: 8,
  Reading: 16,
  WrapUpYourDay: 32,
  YogaAndStretching: 64,
};

declare const INStartAudioCallIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureAppConfigurationRequired: 5,
  FailureCallingServiceNotAvailable: 6,
  FailureContactNotSupportedByApp: 7,
  FailureNoValidNumber: 8,
};

declare const INStartCallCallCapabilityUnsupportedReason: {
  VideoCallUnsupported: 1,
  MicrophoneNotAccessible: 2,
  CameraNotAccessible: 3,
};

declare const INGetAvailableRestaurantReservationBookingsIntentCode: {
  Success: 0,
  Failure: 1,
  FailureRequestUnsatisfiable: 2,
  FailureRequestUnspecified: 3,
};

declare const INSearchForPhotosIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureAppConfigurationRequired: 5,
};

declare const INDeleteTasksTaskListUnsupportedReason: {
  INDeleteTasksTaskListUnsupportedReasonNoTaskListFound: 1,
};

declare const INSearchForMessagesIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureMessageServiceNotAvailable: 6,
  FailureMessageTooManyResults: 7,
  FailureRequiringInAppAuthentication: 8,
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

declare const INWorkoutLocationType: {
  Unknown: 0,
  Outdoor: 1,
  Indoor: 2,
};

declare const INSetMessageAttributeIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureMessageNotFound: 6,
  FailureMessageAttributeNotSet: 7,
};

declare const INSetRadioStationIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureNotSubscribed: 6,
};

declare const INPlayMediaMediaItemUnsupportedReason: {
  LoginRequired: 1,
  SubscriptionRequired: 2,
  UnsupportedMediaType: 3,
  ExplicitContentSettings: 4,
  CellularDataSettings: 5,
  RestrictedContent: 6,
  ServiceUnavailable: 7,
  RegionRestriction: 8,
};

declare const INAmountType: {
  Unknown: 0,
  MinimumDue: 1,
  AmountDue: 2,
  CurrentBalance: 3,
  MaximumTransferAmount: 4,
  MinimumTransferAmount: 5,
  StatementBalance: 6,
};

declare const INInteractionDirection: {
  Unspecified: 0,
  Outgoing: 1,
  Incoming: 2,
};

declare const INRestaurantReservationUserBookingStatus: {
  Pending: 0,
  Confirmed: 1,
  Denied: 2,
};

declare const INMediaUserContextSubscriptionStatus: {
  Unknown: 0,
  NotSubscribed: 1,
  Subscribed: 2,
};

declare const INTicketedEventCategory: {
  Unknown: 0,
  Movie: 1,
};

declare const INMediaAffinityType: {
  Unknown: 0,
  Like: 1,
  Dislike: 2,
};

declare const INBillType: {
  Unknown: 0,
  AutoInsurance: 1,
  Cable: 2,
  CarLease: 3,
  CarLoan: 4,
  CreditCard: 5,
  Electricity: 6,
  Gas: 7,
  GarbageAndRecycling: 8,
  HealthInsurance: 9,
  HomeInsurance: 10,
  Internet: 11,
  LifeInsurance: 12,
  Mortgage: 13,
  MusicStreaming: 14,
  Phone: 15,
  Rent: 16,
  Sewer: 17,
  StudentLoan: 18,
  TrafficTicket: 19,
  Tuition: 20,
  Utilities: 21,
  Water: 22,
};

declare const INReservationActionType: {
  Unknown: 0,
  CheckIn: 1,
};

declare const INSearchForAccountsIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCredentialsUnverified: 6,
  FailureAccountNotFound: 7,
  FailureTermsAndConditionsAcceptanceRequired: 8,
  FailureNotEligible: 9,
};

declare const INSearchForBillsIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCredentialsUnverified: 6,
  FailureBillNotFound: 7,
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

declare const INTransferMoneyIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCredentialsUnverified: 6,
  FailureInsufficientFunds: 7,
};

declare const INAddTasksTargetTaskListConfirmationReason: {
  INAddTasksTargetTaskListConfirmationReasonListShouldBeCreated: 1,
};

declare const INCallCapability: {
  Unknown: 0,
  AudioCall: 1,
  VideoCall: 2,
};

declare const INGetCarPowerLevelStatusIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INBookRestaurantReservationIntentCode: {
  Success: 0,
  Denied: 1,
  Failure: 2,
  FailureRequiringAppLaunch: 3,
  FailureRequiringAppLaunchMustVerifyCredentials: 4,
  FailureRequiringAppLaunchServiceTemporarilyUnavailable: 5,
};

declare const INDeleteTasksTaskUnsupportedReason: {
  Found: 1,
  InApp: 2,
};

declare const INTaskPriority: {
  Unknown: 0,
  NotFlagged: 1,
  Flagged: 2,
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

declare const INRidePhase: {
  Unknown: 0,
  Received: 1,
  Confirmed: 2,
  Ongoing: 3,
  Completed: 4,
  ApproachingPickup: 5,
  Pickup: 6,
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

declare const INRelativeReference: {
  Unknown: 0,
  Next: 1,
  Previous: 2,
};

declare const INDateSearchType: {
  Unknown: 0,
  ByDueDate: 1,
  ByModifiedDate: 2,
  ByCreatedDate: 3,
};

declare const INSearchCallHistoryIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureAppConfigurationRequired: 5,
  InProgress: 6,
  Success: 7,
};

declare const INSendPaymentIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureCredentialsUnverified: 6,
  FailurePaymentsAmountBelowMinimum: 7,
  FailurePaymentsAmountAboveMaximum: 8,
  FailurePaymentsCurrencyUnsupported: 9,
  FailureInsufficientFunds: 10,
  FailureNoBankAccount: 11,
  FailureNotEligible: 12,
  FailureTermsAndConditionsAcceptanceRequired: 13,
};

declare const INVisualCodeType: {
  Unknown: 0,
  Contact: 1,
  RequestPayment: 2,
  SendPayment: 3,
  Transit: 4,
  Bus: 5,
  Subway: 6,
};

declare const INGetReservationDetailsIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INStartVideoCallIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  Failure: 3,
  FailureRequiringAppLaunch: 4,
  FailureAppConfigurationRequired: 5,
  FailureCallingServiceNotAvailable: 6,
  FailureContactNotSupportedByApp: 7,
  FailureInvalidNumber: 8,
};

declare const INSnoozeTasksIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INCarDefroster: {
  Unknown: 0,
  Front: 1,
  Rear: 2,
  All: 3,
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

declare const INSendPaymentCurrencyAmountUnsupportedReason: {
  AmountBelowMinimum: 1,
  AmountAboveMaximum: 2,
  CurrencyUnsupported: 3,
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

declare const INCarSeat: {
  Unknown: 0,
  Driver: 1,
  Passenger: 2,
  FrontLeft: 3,
  FrontRight: 4,
  Front: 5,
  RearLeft: 6,
  RearRight: 7,
  Rear: 8,
  ThirdRowLeft: 9,
  ThirdRowRight: 10,
  ThirdRow: 11,
  All: 12,
};

declare const INActivateCarSignalIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INPersonHandleType: {
  Unknown: 0,
  EmailAddress: 1,
  PhoneNumber: 2,
};

declare const INPlaybackQueueLocation: {
  Unknown: 0,
  Now: 1,
  Next: 2,
  Later: 3,
};

declare const INGetUserCurrentRestaurantReservationBookingsIntentResponseCode: {
  Success: 0,
  Failure: 1,
  FailureRequestUnsatisfiable: 2,
  Unspecified: 3,
};

declare const INMediaItemType: {
  Unknown: 0,
  Song: 1,
  Album: 2,
  Artist: 3,
  Genre: 4,
  Playlist: 5,
  PodcastShow: 6,
  PodcastEpisode: 7,
  PodcastPlaylist: 8,
  MusicStation: 9,
  AudioBook: 10,
  Movie: 11,
  TVShow: 12,
  TVShowEpisode: 13,
  MusicVideo: 14,
  PodcastStation: 15,
  RadioStation: 16,
  Station: 17,
  Music: 18,
  AlgorithmicRadioStation: 19,
  News: 20,
};

declare const INCancelRideIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  Success: 2,
  Failure: 3,
};

declare const INGetVisualCodeIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  InProgress: 3,
  Success: 4,
  Failure: 5,
  FailureRequiringAppLaunch: 6,
  FailureAppConfigurationRequired: 7,
};

declare const INGetCarLockStatusIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
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

declare const INAddMediaMediaDestinationUnsupportedReason: {
  NameNotFound: 1,
  NotEditable: 2,
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

declare const INReservationStatus: {
  Unknown: 0,
  Canceled: 1,
  Pending: 2,
  Hold: 3,
  Confirmed: 4,
};

declare const INCarAirCirculationMode: {
  Unknown: 0,
  FreshAir: 1,
  RecirculateAir: 2,
};

declare const INTemporalEventTriggerTypeOptions: {
  NotScheduled: 1,
  ScheduledNonRecurring: 2,
  ScheduledRecurring: 4,
};

declare const INListRideOptionsIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
  FailureRequiringAppLaunchMustVerifyCredentials: 6,
  FailureRequiringAppLaunchNoServiceInArea: 7,
  FailureRequiringAppLaunchServiceTemporarilyUnavailable: 8,
  FailureRequiringAppLaunchPreviousRideNeedsCompletion: 9,
  FailurePreviousRideNeedsFeedback: 10,
};

declare const INRequestPaymentCurrencyAmountUnsupportedReason: {
  AmountBelowMinimum: 1,
  AmountAboveMaximum: 2,
  CurrencyUnsupported: 3,
};

declare const INMediaDestinationType: {
  Unknown: 0,
  Library: 1,
  Playlist: 2,
};

declare const INListCarsIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  InProgress: 2,
  Success: 3,
  Failure: 4,
  FailureRequiringAppLaunch: 5,
};

declare const INCarAudioSource: {
  SourceUnknown: 0,
  SourceCarPlay: 1,
  SourceiPod: 2,
  SourceRadio: 3,
  SourceBluetooth: 4,
  SourceAUX: 5,
  SourceUSB: 6,
  SourceMemoryCard: 7,
  SourceOpticalDrive: 8,
  SourceHardDrive: 9,
};

declare const INSetTaskAttributeTemporalEventTriggerUnsupportedReason: {
  TimeInPast: 1,
  InvalidRecurrence: 2,
};

declare const INPhotoAttributeOptions: {
  Photo: 1,
  Video: 2,
  GIF: 4,
  Flash: 8,
  LandscapeOrientation: 16,
  PortraitOrientation: 32,
  Favorite: 64,
  Selfie: 128,
  FrontFacingCamera: 256,
  Screenshot: 512,
  BurstPhoto: 1024,
  HDRPhoto: 2048,
  SquarePhoto: 4096,
  PanoramaPhoto: 8192,
  TimeLapseVideo: 16384,
  SlowMotionVideo: 32768,
  NoirFilter: 65536,
  ChromeFilter: 131072,
  InstantFilter: 262144,
  TonalFilter: 524288,
  TransferFilter: 1048576,
  MonoFilter: 2097152,
  FadeFilter: 4194304,
  ProcessFilter: 8388608,
  PortraitPhoto: 16777216,
  LivePhoto: 33554432,
  LoopPhoto: 67108864,
  BouncePhoto: 134217728,
  LongExposurePhoto: 268435456,
};

declare const INMediaReference: {
  Unknown: 0,
  CurrentlyPlaying: 1,
  My: 2,
};

declare const INAddTasksTemporalEventTriggerUnsupportedReason: {
  TimeInPast: 1,
  InvalidRecurrence: 2,
};

declare const INSearchForMediaIntentResponseCode: {
  Unspecified: 0,
  Ready: 1,
  ContinueInApp: 2,
  InProgress: 3,
  Success: 4,
  Failure: 5,
  FailureRequiringAppLaunch: 6,
};

declare interface INGetRestaurantGuestIntentHandling extends NSObjectProtocol {
  handleGetRestaurantGuestCompletion(intent: INGetRestaurantGuestIntent, completion: (p1: INGetRestaurantGuestIntentResponse) => void): void;

  confirmGetRestaurantGuestCompletion?(guestIntent: INGetRestaurantGuestIntent, completion: (p1: INGetRestaurantGuestIntentResponse) => void): void;
}

declare class INGetRestaurantGuestIntentHandling extends NativeObject implements INGetRestaurantGuestIntentHandling {
}

declare interface INGetAvailableRestaurantReservationBookingDefaultsIntentHandling extends NSObjectProtocol {
  handleGetAvailableRestaurantReservationBookingDefaultsCompletion(intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: (p1: INGetAvailableRestaurantReservationBookingDefaultsIntentResponse) => void): void;

  confirmGetAvailableRestaurantReservationBookingDefaultsCompletion?(intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: (p1: INGetAvailableRestaurantReservationBookingDefaultsIntentResponse) => void): void;

  resolveRestaurantForGetAvailableRestaurantReservationBookingDefaultsWithCompletion?(intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: (p1: INRestaurantResolutionResult) => void): void;
}

declare class INGetAvailableRestaurantReservationBookingDefaultsIntentHandling extends NativeObject implements INGetAvailableRestaurantReservationBookingDefaultsIntentHandling {
}

declare interface INGetAvailableRestaurantReservationBookingsIntentHandling extends NSObjectProtocol {
  handleGetAvailableRestaurantReservationBookingsCompletion(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: (p1: INGetAvailableRestaurantReservationBookingsIntentResponse) => void): void;

  confirmGetAvailableRestaurantReservationBookingsCompletion?(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: (p1: INGetAvailableRestaurantReservationBookingsIntentResponse) => void): void;

  resolveRestaurantForGetAvailableRestaurantReservationBookingsWithCompletion?(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: (p1: INRestaurantResolutionResult) => void): void;

  resolvePartySizeForGetAvailableRestaurantReservationBookingsWithCompletion?(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: (p1: INIntegerResolutionResult) => void): void;

  resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookingsWithCompletion?(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: (p1: INDateComponentsResolutionResult) => void): void;
}

declare class INGetAvailableRestaurantReservationBookingsIntentHandling extends NativeObject implements INGetAvailableRestaurantReservationBookingsIntentHandling {
}

declare interface INBookRestaurantReservationIntentHandling extends NSObjectProtocol {
  handleBookRestaurantReservationCompletion(intent: INBookRestaurantReservationIntent, completion: (p1: INBookRestaurantReservationIntentResponse) => void): void;

  confirmBookRestaurantReservationCompletion?(intent: INBookRestaurantReservationIntent, completion: (p1: INBookRestaurantReservationIntentResponse) => void): void;

  resolveRestaurantForBookRestaurantReservationWithCompletion?(intent: INBookRestaurantReservationIntent, completion: (p1: INRestaurantResolutionResult) => void): void;

  resolveBookingDateComponentsForBookRestaurantReservationWithCompletion?(intent: INBookRestaurantReservationIntent, completion: (p1: INDateComponentsResolutionResult) => void): void;

  resolvePartySizeForBookRestaurantReservationWithCompletion?(intent: INBookRestaurantReservationIntent, completion: (p1: INIntegerResolutionResult) => void): void;

  resolveGuestForBookRestaurantReservationWithCompletion?(intent: INBookRestaurantReservationIntent, completion: (p1: INRestaurantGuestResolutionResult) => void): void;

  resolveGuestProvidedSpecialRequestTextForBookRestaurantReservationWithCompletion?(intent: INBookRestaurantReservationIntent, completion: (p1: INStringResolutionResult) => void): void;
}

declare class INBookRestaurantReservationIntentHandling extends NativeObject implements INBookRestaurantReservationIntentHandling {
}

declare interface INSpeakable extends NSObjectProtocol {
  readonly spokenPhrase: string;

  readonly pronunciationHint: string;

  readonly vocabularyIdentifier: string;

  readonly alternativeSpeakableMatches: NSArray;

  readonly identifier?: string;
}

declare class INSpeakable extends NativeObject implements INSpeakable {
}

declare interface INVisualCodeDomainHandling extends INGetVisualCodeIntentHandling {
}

declare class INVisualCodeDomainHandling extends NativeObject implements INVisualCodeDomainHandling {
}

declare interface INPaymentsDomainHandling extends INSendPaymentIntentHandling, INRequestPaymentIntentHandling, INPayBillIntentHandling, INSearchForBillsIntentHandling, INSearchForAccountsIntentHandling, INTransferMoneyIntentHandling {
}

declare class INPaymentsDomainHandling extends NativeObject implements INPaymentsDomainHandling {
}

declare interface INCarCommandsDomainHandling extends INActivateCarSignalIntentHandling, INSetCarLockStatusIntentHandling, INGetCarLockStatusIntentHandling, INGetCarPowerLevelStatusIntentHandling {
}

declare class INCarCommandsDomainHandling extends NativeObject implements INCarCommandsDomainHandling {
}

declare interface INGetVisualCodeIntentHandling extends NSObjectProtocol {
  handleGetVisualCodeCompletion(intent: INGetVisualCodeIntent, completion: (p1: INGetVisualCodeIntentResponse) => void): void;

  confirmGetVisualCodeCompletion?(intent: INGetVisualCodeIntent, completion: (p1: INGetVisualCodeIntentResponse) => void): void;

  resolveVisualCodeTypeForGetVisualCodeWithCompletion?(intent: INGetVisualCodeIntent, completion: (p1: INVisualCodeTypeResolutionResult) => void): void;
}

declare class INGetVisualCodeIntentHandling extends NativeObject implements INGetVisualCodeIntentHandling {
}

declare interface INCancelRideIntentHandling extends NSObjectProtocol {
  handleCancelRideCompletion(intent: INCancelRideIntent, completion: (p1: INCancelRideIntentResponse) => void): void;

  confirmCancelRideCompletion?(intent: INCancelRideIntent, completion: (p1: INCancelRideIntentResponse) => void): void;
}

declare class INCancelRideIntentHandling extends NativeObject implements INCancelRideIntentHandling {
}

declare interface INListRideOptionsIntentHandling extends NSObjectProtocol {
  handleListRideOptionsCompletion(intent: INListRideOptionsIntent, completion: (p1: INListRideOptionsIntentResponse) => void): void;

  confirmListRideOptionsCompletion?(intent: INListRideOptionsIntent, completion: (p1: INListRideOptionsIntentResponse) => void): void;

  resolvePickupLocationForListRideOptionsWithCompletion?(intent: INListRideOptionsIntent, completion: (p1: INPlacemarkResolutionResult) => void): void;

  resolveDropOffLocationForListRideOptionsWithCompletion?(intent: INListRideOptionsIntent, completion: (p1: INPlacemarkResolutionResult) => void): void;
}

declare class INListRideOptionsIntentHandling extends NativeObject implements INListRideOptionsIntentHandling {
}

declare interface INGetRideStatusIntentResponseObserver extends NSObjectProtocol {
  getRideStatusResponseDidUpdate(response: INGetRideStatusIntentResponse): void;
}

declare class INGetRideStatusIntentResponseObserver extends NativeObject implements INGetRideStatusIntentResponseObserver {
}

declare interface INSearchForPhotosIntentHandling extends NSObjectProtocol {
  handleSearchForPhotosCompletion(intent: INSearchForPhotosIntent, completion: (p1: INSearchForPhotosIntentResponse) => void): void;

  confirmSearchForPhotosCompletion?(intent: INSearchForPhotosIntent, completion: (p1: INSearchForPhotosIntentResponse) => void): void;

  resolveDateCreatedForSearchForPhotosWithCompletion?(intent: INSearchForPhotosIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveLocationCreatedForSearchForPhotosWithCompletion?(intent: INSearchForPhotosIntent, completion: (p1: INPlacemarkResolutionResult) => void): void;

  resolveAlbumNameForSearchForPhotosWithCompletion?(intent: INSearchForPhotosIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveSearchTermsForSearchForPhotosWithCompletion?(intent: INSearchForPhotosIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolvePeopleInPhotoForSearchForPhotosWithCompletion?(intent: INSearchForPhotosIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INSearchForPhotosIntentHandling extends NativeObject implements INSearchForPhotosIntentHandling {
}

declare interface INTransferMoneyIntentHandling extends NSObjectProtocol {
  handleTransferMoneyCompletion(intent: INTransferMoneyIntent, completion: (p1: INTransferMoneyIntentResponse) => void): void;

  confirmTransferMoneyCompletion?(intent: INTransferMoneyIntent, completion: (p1: INTransferMoneyIntentResponse) => void): void;

  resolveFromAccountForTransferMoneyWithCompletion?(intent: INTransferMoneyIntent, completion: (p1: INPaymentAccountResolutionResult) => void): void;

  resolveToAccountForTransferMoneyWithCompletion?(intent: INTransferMoneyIntent, completion: (p1: INPaymentAccountResolutionResult) => void): void;

  resolveTransactionAmountForTransferMoneyWithCompletion?(intent: INTransferMoneyIntent, completion: (p1: INPaymentAmountResolutionResult) => void): void;

  resolveTransactionScheduledDateForTransferMoneyWithCompletion?(intent: INTransferMoneyIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveTransactionNoteForTransferMoneyWithCompletion?(intent: INTransferMoneyIntent, completion: (p1: INStringResolutionResult) => void): void;
}

declare class INTransferMoneyIntentHandling extends NativeObject implements INTransferMoneyIntentHandling {
}

declare interface INSendPaymentIntentHandling extends NSObjectProtocol {
  handleSendPaymentCompletion(intent: INSendPaymentIntent, completion: (p1: INSendPaymentIntentResponse) => void): void;

  confirmSendPaymentCompletion?(intent: INSendPaymentIntent, completion: (p1: INSendPaymentIntentResponse) => void): void;

  resolvePayeeForSendPaymentWithCompletion?(intent: INSendPaymentIntent, completion: (p1: INPersonResolutionResult) => void): void;

  resolvePayeeForSendPaymentCompletion?(intent: INSendPaymentIntent, completion: (p1: INSendPaymentPayeeResolutionResult) => void): void;

  resolveCurrencyAmountForSendPaymentWithCompletion?(intent: INSendPaymentIntent, completion: (p1: INCurrencyAmountResolutionResult) => void): void;

  resolveCurrencyAmountForSendPaymentCompletion?(intent: INSendPaymentIntent, completion: (p1: INSendPaymentCurrencyAmountResolutionResult) => void): void;

  resolveNoteForSendPaymentWithCompletion?(intent: INSendPaymentIntent, completion: (p1: INStringResolutionResult) => void): void;
}

declare class INSendPaymentIntentHandling extends NativeObject implements INSendPaymentIntentHandling {
}

declare interface INSearchForBillsIntentHandling extends NSObjectProtocol {
  handleSearchForBillsCompletion(intent: INSearchForBillsIntent, completion: (p1: INSearchForBillsIntentResponse) => void): void;

  confirmSearchForBillsCompletion?(intent: INSearchForBillsIntent, completion: (p1: INSearchForBillsIntentResponse) => void): void;

  resolveBillPayeeForSearchForBillsWithCompletion?(intent: INSearchForBillsIntent, completion: (p1: INBillPayeeResolutionResult) => void): void;

  resolvePaymentDateRangeForSearchForBillsWithCompletion?(intent: INSearchForBillsIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveBillTypeForSearchForBillsWithCompletion?(intent: INSearchForBillsIntent, completion: (p1: INBillTypeResolutionResult) => void): void;

  resolveStatusForSearchForBillsWithCompletion?(intent: INSearchForBillsIntent, completion: (p1: INPaymentStatusResolutionResult) => void): void;

  resolveDueDateRangeForSearchForBillsWithCompletion?(intent: INSearchForBillsIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;
}

declare class INSearchForBillsIntentHandling extends NativeObject implements INSearchForBillsIntentHandling {
}

declare interface INSearchForAccountsIntentHandling extends NSObjectProtocol {
  handleSearchForAccountsCompletion(intent: INSearchForAccountsIntent, completion: (p1: INSearchForAccountsIntentResponse) => void): void;

  confirmSearchForAccountsCompletion?(intent: INSearchForAccountsIntent, completion: (p1: INSearchForAccountsIntentResponse) => void): void;

  resolveAccountNicknameForSearchForAccountsWithCompletion?(intent: INSearchForAccountsIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveAccountTypeForSearchForAccountsWithCompletion?(intent: INSearchForAccountsIntent, completion: (p1: INAccountTypeResolutionResult) => void): void;

  resolveOrganizationNameForSearchForAccountsWithCompletion?(intent: INSearchForAccountsIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveRequestedBalanceTypeForSearchForAccountsWithCompletion?(intent: INSearchForAccountsIntent, completion: (p1: INBalanceTypeResolutionResult) => void): void;
}

declare class INSearchForAccountsIntentHandling extends NativeObject implements INSearchForAccountsIntentHandling {
}

declare interface INRequestPaymentIntentHandling extends NSObjectProtocol {
  handleRequestPaymentCompletion(intent: INRequestPaymentIntent, completion: (p1: INRequestPaymentIntentResponse) => void): void;

  confirmRequestPaymentCompletion?(intent: INRequestPaymentIntent, completion: (p1: INRequestPaymentIntentResponse) => void): void;

  resolvePayerForRequestPaymentWithCompletion?(intent: INRequestPaymentIntent, completion: (p1: INPersonResolutionResult) => void): void;

  resolvePayerForRequestPaymentCompletion?(intent: INRequestPaymentIntent, completion: (p1: INRequestPaymentPayerResolutionResult) => void): void;

  resolveCurrencyAmountForRequestPaymentWithCompletion?(intent: INRequestPaymentIntent, completion: (p1: INCurrencyAmountResolutionResult) => void): void;

  resolveCurrencyAmountForRequestPaymentCompletion?(intent: INRequestPaymentIntent, completion: (p1: INRequestPaymentCurrencyAmountResolutionResult) => void): void;

  resolveNoteForRequestPaymentWithCompletion?(intent: INRequestPaymentIntent, completion: (p1: INStringResolutionResult) => void): void;
}

declare class INRequestPaymentIntentHandling extends NativeObject implements INRequestPaymentIntentHandling {
}

declare interface INSnoozeTasksIntentHandling extends NSObjectProtocol {
  handleSnoozeTasksCompletion(intent: INSnoozeTasksIntent, completion: (p1: INSnoozeTasksIntentResponse) => void): void;

  confirmSnoozeTasksCompletion?(intent: INSnoozeTasksIntent, completion: (p1: INSnoozeTasksIntentResponse) => void): void;

  resolveTasksForSnoozeTasksWithCompletion?(intent: INSnoozeTasksIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveNextTriggerTimeForSnoozeTasksWithCompletion?(intent: INSnoozeTasksIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;
}

declare class INSnoozeTasksIntentHandling extends NativeObject implements INSnoozeTasksIntentHandling {
}

declare interface INSearchForNotebookItemsIntentHandling extends NSObjectProtocol {
  handleSearchForNotebookItemsCompletion(intent: INSearchForNotebookItemsIntent, completion: (p1: INSearchForNotebookItemsIntentResponse) => void): void;

  confirmSearchForNotebookItemsCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INSearchForNotebookItemsIntentResponse) => void): void;

  resolveTitleForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveContentForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveItemTypeForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INNotebookItemTypeResolutionResult) => void): void;

  resolveStatusForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INTaskStatusResolutionResult) => void): void;

  resolveLocationForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INPlacemarkResolutionResult) => void): void;

  resolveLocationSearchTypeForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INLocationSearchTypeResolutionResult) => void): void;

  resolveDateTimeForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveDateSearchTypeForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INDateSearchTypeResolutionResult) => void): void;

  resolveTemporalEventTriggerTypesForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INTemporalEventTriggerTypeOptionsResolutionResult) => void): void;

  resolveTaskPriorityForSearchForNotebookItemsWithCompletion?(intent: INSearchForNotebookItemsIntent, completion: (p1: INTaskPriorityResolutionResult) => void): void;
}

declare class INSearchForNotebookItemsIntentHandling extends NativeObject implements INSearchForNotebookItemsIntentHandling {
}

declare interface INDeleteTasksIntentHandling extends NSObjectProtocol {
  handleDeleteTasksCompletion(intent: INDeleteTasksIntent, completion: (p1: INDeleteTasksIntentResponse) => void): void;

  confirmDeleteTasksCompletion?(intent: INDeleteTasksIntent, completion: (p1: INDeleteTasksIntentResponse) => void): void;

  resolveTaskListForDeleteTasksWithCompletion?(intent: INDeleteTasksIntent, completion: (p1: INDeleteTasksTaskListResolutionResult) => void): void;

  resolveTasksForDeleteTasksWithCompletion?(intent: INDeleteTasksIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INDeleteTasksIntentHandling extends NativeObject implements INDeleteTasksIntentHandling {
}

declare interface INCreateNoteIntentHandling extends NSObjectProtocol {
  handleCreateNoteCompletion(intent: INCreateNoteIntent, completion: (p1: INCreateNoteIntentResponse) => void): void;

  confirmCreateNoteCompletion?(intent: INCreateNoteIntent, completion: (p1: INCreateNoteIntentResponse) => void): void;

  resolveTitleForCreateNoteWithCompletion?(intent: INCreateNoteIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveContentForCreateNoteWithCompletion?(intent: INCreateNoteIntent, completion: (p1: INNoteContentResolutionResult) => void): void;

  resolveGroupNameForCreateNoteWithCompletion?(intent: INCreateNoteIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INCreateNoteIntentHandling extends NativeObject implements INCreateNoteIntentHandling {
}

declare interface INAddTasksIntentHandling extends NSObjectProtocol {
  handleAddTasksCompletion(intent: INAddTasksIntent, completion: (p1: INAddTasksIntentResponse) => void): void;

  confirmAddTasksCompletion?(intent: INAddTasksIntent, completion: (p1: INAddTasksIntentResponse) => void): void;

  resolveTargetTaskListForAddTasksWithCompletion?(intent: INAddTasksIntent, completion: (p1: INTaskListResolutionResult) => void): void;

  resolveTargetTaskListForAddTasksCompletion?(intent: INAddTasksIntent, completion: (p1: INAddTasksTargetTaskListResolutionResult) => void): void;

  resolveTaskTitlesForAddTasksWithCompletion?(intent: INAddTasksIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveSpatialEventTriggerForAddTasksWithCompletion?(intent: INAddTasksIntent, completion: (p1: INSpatialEventTriggerResolutionResult) => void): void;

  resolveTemporalEventTriggerForAddTasksWithCompletion?(intent: INAddTasksIntent, completion: (p1: INTemporalEventTriggerResolutionResult) => void): void;

  resolveTemporalEventTriggerForAddTasksCompletion?(intent: INAddTasksIntent, completion: (p1: INAddTasksTemporalEventTriggerResolutionResult) => void): void;

  resolvePriorityForAddTasksWithCompletion?(intent: INAddTasksIntent, completion: (p1: INTaskPriorityResolutionResult) => void): void;
}

declare class INAddTasksIntentHandling extends NativeObject implements INAddTasksIntentHandling {
}

declare interface INUnsendMessagesIntentHandling extends NSObjectProtocol {
  handleUnsendMessagesCompletion(intent: INUnsendMessagesIntent, completion: (p1: INUnsendMessagesIntentResponse) => void): void;

  confirmUnsendMessagesCompletion?(intent: INUnsendMessagesIntent, completion: (p1: INUnsendMessagesIntentResponse) => void): void;
}

declare class INUnsendMessagesIntentHandling extends NativeObject implements INUnsendMessagesIntentHandling {
}

declare interface INSetRadioStationIntentHandling extends NSObjectProtocol {
  handleSetRadioStationCompletion(intent: INSetRadioStationIntent, completion: (p1: INSetRadioStationIntentResponse) => void): void;

  confirmSetRadioStationCompletion?(intent: INSetRadioStationIntent, completion: (p1: INSetRadioStationIntentResponse) => void): void;

  resolveRadioTypeForSetRadioStationWithCompletion?(intent: INSetRadioStationIntent, completion: (p1: INRadioTypeResolutionResult) => void): void;

  resolveFrequencyForSetRadioStationWithCompletion?(intent: INSetRadioStationIntent, completion: (p1: INDoubleResolutionResult) => void): void;

  resolveStationNameForSetRadioStationWithCompletion?(intent: INSetRadioStationIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveChannelForSetRadioStationWithCompletion?(intent: INSetRadioStationIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolvePresetNumberForSetRadioStationWithCompletion?(intent: INSetRadioStationIntent, completion: (p1: INIntegerResolutionResult) => void): void;
}

declare class INSetRadioStationIntentHandling extends NativeObject implements INSetRadioStationIntentHandling {
}

declare interface INPlayMediaIntentHandling extends NSObjectProtocol {
  handlePlayMediaCompletion(intent: INPlayMediaIntent, completion: (p1: INPlayMediaIntentResponse) => void): void;

  confirmPlayMediaCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlayMediaIntentResponse) => void): void;

  resolveMediaItemsForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolvePlayShuffledForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolvePlaybackRepeatModeForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlaybackRepeatModeResolutionResult) => void): void;

  resolveResumePlaybackForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolvePlaybackQueueLocationForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlaybackQueueLocationResolutionResult) => void): void;

  resolvePlaybackSpeedForPlayMediaWithCompletion?(intent: INPlayMediaIntent, completion: (p1: INPlayMediaPlaybackSpeedResolutionResult) => void): void;
}

declare class INPlayMediaIntentHandling extends NativeObject implements INPlayMediaIntentHandling {
}

declare interface INAddMediaIntentHandling extends NSObjectProtocol {
  handleAddMediaCompletion(intent: INAddMediaIntent, completion: (p1: INAddMediaIntentResponse) => void): void;

  confirmAddMediaCompletion?(intent: INAddMediaIntent, completion: (p1: INAddMediaIntentResponse) => void): void;

  resolveMediaItemsForAddMediaWithCompletion?(intent: INAddMediaIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveMediaDestinationForAddMediaWithCompletion?(intent: INAddMediaIntent, completion: (p1: INAddMediaMediaDestinationResolutionResult) => void): void;
}

declare class INAddMediaIntentHandling extends NativeObject implements INAddMediaIntentHandling {
}

declare interface INShareFocusStatusIntentHandling extends NSObjectProtocol {
  handleShareFocusStatusCompletion(intent: INShareFocusStatusIntent, completion: (p1: INShareFocusStatusIntentResponse) => void): void;

  confirmShareFocusStatusCompletion?(intent: INShareFocusStatusIntent, completion: (p1: INShareFocusStatusIntentResponse) => void): void;
}

declare class INShareFocusStatusIntentHandling extends NativeObject implements INShareFocusStatusIntentHandling {
}

declare interface INStartWorkoutIntentHandling extends NSObjectProtocol {
  handleStartWorkoutCompletion(intent: INStartWorkoutIntent, completion: (p1: INStartWorkoutIntentResponse) => void): void;

  confirmStartWorkoutCompletion?(intent: INStartWorkoutIntent, completion: (p1: INStartWorkoutIntentResponse) => void): void;

  resolveWorkoutNameForStartWorkoutWithCompletion?(intent: INStartWorkoutIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveGoalValueForStartWorkoutWithCompletion?(intent: INStartWorkoutIntent, completion: (p1: INDoubleResolutionResult) => void): void;

  resolveWorkoutGoalUnitTypeForStartWorkoutWithCompletion?(intent: INStartWorkoutIntent, completion: (p1: INWorkoutGoalUnitTypeResolutionResult) => void): void;

  resolveWorkoutLocationTypeForStartWorkoutWithCompletion?(intent: INStartWorkoutIntent, completion: (p1: INWorkoutLocationTypeResolutionResult) => void): void;

  resolveIsOpenEndedForStartWorkoutWithCompletion?(intent: INStartWorkoutIntent, completion: (p1: INBooleanResolutionResult) => void): void;
}

declare class INStartWorkoutIntentHandling extends NativeObject implements INStartWorkoutIntentHandling {
}

declare interface INResumeWorkoutIntentHandling extends NSObjectProtocol {
  handleResumeWorkoutCompletion(intent: INResumeWorkoutIntent, completion: (p1: INResumeWorkoutIntentResponse) => void): void;

  confirmResumeWorkoutCompletion?(intent: INResumeWorkoutIntent, completion: (p1: INResumeWorkoutIntentResponse) => void): void;

  resolveWorkoutNameForResumeWorkoutWithCompletion?(intent: INResumeWorkoutIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INResumeWorkoutIntentHandling extends NativeObject implements INResumeWorkoutIntentHandling {
}

declare interface INPauseWorkoutIntentHandling extends NSObjectProtocol {
  handlePauseWorkoutCompletion(intent: INPauseWorkoutIntent, completion: (p1: INPauseWorkoutIntentResponse) => void): void;

  confirmPauseWorkoutCompletion?(intent: INPauseWorkoutIntent, completion: (p1: INPauseWorkoutIntentResponse) => void): void;

  resolveWorkoutNameForPauseWorkoutWithCompletion?(intent: INPauseWorkoutIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INPauseWorkoutIntentHandling extends NativeObject implements INPauseWorkoutIntentHandling {
}

declare interface INSetSeatSettingsInCarIntentHandling extends NSObjectProtocol {
  handleSetSeatSettingsInCarCompletion(intent: INSetSeatSettingsInCarIntent, completion: (p1: INSetSeatSettingsInCarIntentResponse) => void): void;

  confirmSetSeatSettingsInCarCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INSetSeatSettingsInCarIntentResponse) => void): void;

  resolveEnableHeatingForSetSeatSettingsInCarWithCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveEnableCoolingForSetSeatSettingsInCarWithCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveEnableMassageForSetSeatSettingsInCarWithCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveSeatForSetSeatSettingsInCarWithCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INCarSeatResolutionResult) => void): void;

  resolveLevelForSetSeatSettingsInCarWithCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INIntegerResolutionResult) => void): void;

  resolveRelativeLevelSettingForSetSeatSettingsInCarWithCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INRelativeSettingResolutionResult) => void): void;

  resolveCarNameForSetSeatSettingsInCarWithCompletion?(intent: INSetSeatSettingsInCarIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INSetSeatSettingsInCarIntentHandling extends NativeObject implements INSetSeatSettingsInCarIntentHandling {
}

declare interface INSetProfileInCarIntentHandling extends NSObjectProtocol {
  handleSetProfileInCarCompletion(intent: INSetProfileInCarIntent, completion: (p1: INSetProfileInCarIntentResponse) => void): void;

  confirmSetProfileInCarCompletion?(intent: INSetProfileInCarIntent, completion: (p1: INSetProfileInCarIntentResponse) => void): void;

  resolveProfileNumberForSetProfileInCarWithCompletion?(intent: INSetProfileInCarIntent, completion: (p1: INIntegerResolutionResult) => void): void;

  resolveProfileNameForSetProfileInCarWithCompletion?(intent: INSetProfileInCarIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveCarNameForSetProfileInCarWithCompletion?(intent: INSetProfileInCarIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveDefaultProfileForSetProfileInCarWithCompletion?(intent: INSetProfileInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;
}

declare class INSetProfileInCarIntentHandling extends NativeObject implements INSetProfileInCarIntentHandling {
}

declare interface INSetClimateSettingsInCarIntentHandling extends NSObjectProtocol {
  handleSetClimateSettingsInCarCompletion(intent: INSetClimateSettingsInCarIntent, completion: (p1: INSetClimateSettingsInCarIntentResponse) => void): void;

  confirmSetClimateSettingsInCarCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INSetClimateSettingsInCarIntentResponse) => void): void;

  resolveEnableFanForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveEnableAirConditionerForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveEnableClimateControlForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveEnableAutoModeForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveAirCirculationModeForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INCarAirCirculationModeResolutionResult) => void): void;

  resolveFanSpeedIndexForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INIntegerResolutionResult) => void): void;

  resolveFanSpeedPercentageForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INDoubleResolutionResult) => void): void;

  resolveRelativeFanSpeedSettingForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INRelativeSettingResolutionResult) => void): void;

  resolveTemperatureForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INTemperatureResolutionResult) => void): void;

  resolveRelativeTemperatureSettingForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INRelativeSettingResolutionResult) => void): void;

  resolveClimateZoneForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INCarSeatResolutionResult) => void): void;

  resolveCarNameForSetClimateSettingsInCarWithCompletion?(intent: INSetClimateSettingsInCarIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INSetClimateSettingsInCarIntentHandling extends NativeObject implements INSetClimateSettingsInCarIntentHandling {
}

declare interface INSetAudioSourceInCarIntentHandling extends NSObjectProtocol {
  handleSetAudioSourceInCarCompletion(intent: INSetAudioSourceInCarIntent, completion: (p1: INSetAudioSourceInCarIntentResponse) => void): void;

  confirmSetAudioSourceInCarCompletion?(intent: INSetAudioSourceInCarIntent, completion: (p1: INSetAudioSourceInCarIntentResponse) => void): void;

  resolveAudioSourceForSetAudioSourceInCarWithCompletion?(intent: INSetAudioSourceInCarIntent, completion: (p1: INCarAudioSourceResolutionResult) => void): void;

  resolveRelativeAudioSourceReferenceForSetAudioSourceInCarWithCompletion?(intent: INSetAudioSourceInCarIntent, completion: (p1: INRelativeReferenceResolutionResult) => void): void;
}

declare class INSetAudioSourceInCarIntentHandling extends NativeObject implements INSetAudioSourceInCarIntentHandling {
}

declare interface INListCarsIntentHandling extends NSObjectProtocol {
  handleListCarsCompletion(intent: INListCarsIntent, completion: (p1: INListCarsIntentResponse) => void): void;

  confirmListCarsCompletion?(intent: INListCarsIntent, completion: (p1: INListCarsIntentResponse) => void): void;
}

declare class INListCarsIntentHandling extends NativeObject implements INListCarsIntentHandling {
}

declare interface INGetCarPowerLevelStatusIntentResponseObserver extends NSObjectProtocol {
  getCarPowerLevelStatusResponseDidUpdate(response: INGetCarPowerLevelStatusIntentResponse): void;
}

declare class INGetCarPowerLevelStatusIntentResponseObserver extends NativeObject implements INGetCarPowerLevelStatusIntentResponseObserver {
}

declare interface INStartVideoCallIntentHandling extends NSObjectProtocol {
  handleStartVideoCallCompletion(intent: INStartVideoCallIntent, completion: (p1: INStartVideoCallIntentResponse) => void): void;

  confirmStartVideoCallCompletion?(intent: INStartVideoCallIntent, completion: (p1: INStartVideoCallIntentResponse) => void): void;

  resolveContactsForStartVideoCallWithCompletion?(intent: INStartVideoCallIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INStartVideoCallIntentHandling extends NativeObject implements INStartVideoCallIntentHandling {
}

declare interface INStartCallIntentHandling extends NSObjectProtocol {
  handleStartCallCompletion(intent: INStartCallIntent, completion: (p1: INStartCallIntentResponse) => void): void;

  confirmStartCallCompletion?(intent: INStartCallIntent, completion: (p1: INStartCallIntentResponse) => void): void;

  resolveCallRecordToCallBackForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: INCallRecordResolutionResult) => void): void;

  resolveDestinationTypeForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: INCallDestinationTypeResolutionResult) => void): void;

  resolveContactsForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveCallCapabilityForStartCallWithCompletion?(intent: INStartCallIntent, completion: (p1: INStartCallCallCapabilityResolutionResult) => void): void;
}

declare class INStartCallIntentHandling extends NativeObject implements INStartCallIntentHandling {
}

declare interface INStartAudioCallIntentHandling extends NSObjectProtocol {
  handleStartAudioCallCompletion(intent: INStartAudioCallIntent, completion: (p1: INStartAudioCallIntentResponse) => void): void;

  confirmStartAudioCallCompletion?(intent: INStartAudioCallIntent, completion: (p1: INStartAudioCallIntentResponse) => void): void;

  resolveDestinationTypeForStartAudioCallWithCompletion?(intent: INStartAudioCallIntent, completion: (p1: INCallDestinationTypeResolutionResult) => void): void;

  resolveContactsForStartAudioCallWithCompletion?(intent: INStartAudioCallIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INStartAudioCallIntentHandling extends NativeObject implements INStartAudioCallIntentHandling {
}

declare interface INSearchCallHistoryIntentHandling extends NSObjectProtocol {
  handleSearchCallHistoryCompletion(intent: INSearchCallHistoryIntent, completion: (p1: INSearchCallHistoryIntentResponse) => void): void;

  confirmSearchCallHistoryCompletion?(intent: INSearchCallHistoryIntent, completion: (p1: INSearchCallHistoryIntentResponse) => void): void;

  resolveCallTypeForSearchCallHistoryWithCompletion?(intent: INSearchCallHistoryIntent, completion: (p1: INCallRecordTypeResolutionResult) => void): void;

  resolveDateCreatedForSearchCallHistoryWithCompletion?(intent: INSearchCallHistoryIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveRecipientForSearchCallHistoryWithCompletion?(intent: INSearchCallHistoryIntent, completion: (p1: INPersonResolutionResult) => void): void;

  resolveCallTypesForSearchCallHistoryWithCompletion?(intent: INSearchCallHistoryIntent, completion: (p1: INCallRecordTypeOptionsResolutionResult) => void): void;

  resolveUnseenForSearchCallHistoryWithCompletion?(intent: INSearchCallHistoryIntent, completion: (p1: INBooleanResolutionResult) => void): void;
}

declare class INSearchCallHistoryIntentHandling extends NativeObject implements INSearchCallHistoryIntentHandling {
}

declare interface INSearchForMediaIntentHandling extends NSObjectProtocol {
  handleSearchForMediaCompletion(intent: INSearchForMediaIntent, completion: (p1: INSearchForMediaIntentResponse) => void): void;

  confirmSearchForMediaCompletion?(intent: INSearchForMediaIntent, completion: (p1: INSearchForMediaIntentResponse) => void): void;

  resolveMediaItemsForSearchForMediaWithCompletion?(intent: INSearchForMediaIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INSearchForMediaIntentHandling extends NativeObject implements INSearchForMediaIntentHandling {
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

declare interface INPayBillIntentHandling extends NSObjectProtocol {
  handlePayBillCompletion(intent: INPayBillIntent, completion: (p1: INPayBillIntentResponse) => void): void;

  confirmPayBillCompletion?(intent: INPayBillIntent, completion: (p1: INPayBillIntentResponse) => void): void;

  resolveBillPayeeForPayBillWithCompletion?(intent: INPayBillIntent, completion: (p1: INBillPayeeResolutionResult) => void): void;

  resolveFromAccountForPayBillWithCompletion?(intent: INPayBillIntent, completion: (p1: INPaymentAccountResolutionResult) => void): void;

  resolveTransactionAmountForPayBillWithCompletion?(intent: INPayBillIntent, completion: (p1: INPaymentAmountResolutionResult) => void): void;

  resolveTransactionScheduledDateForPayBillWithCompletion?(intent: INPayBillIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveTransactionNoteForPayBillWithCompletion?(intent: INPayBillIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveBillTypeForPayBillWithCompletion?(intent: INPayBillIntent, completion: (p1: INBillTypeResolutionResult) => void): void;

  resolveDueDateForPayBillWithCompletion?(intent: INPayBillIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;
}

declare class INPayBillIntentHandling extends NativeObject implements INPayBillIntentHandling {
}

declare interface INCallsDomainHandling extends INStartAudioCallIntentHandling, INStartVideoCallIntentHandling, INSearchCallHistoryIntentHandling {
}

declare class INCallsDomainHandling extends NativeObject implements INCallsDomainHandling {
}

declare interface INEndWorkoutIntentHandling extends NSObjectProtocol {
  handleEndWorkoutCompletion(intent: INEndWorkoutIntent, completion: (p1: INEndWorkoutIntentResponse) => void): void;

  confirmEndWorkoutCompletion?(intent: INEndWorkoutIntent, completion: (p1: INEndWorkoutIntentResponse) => void): void;

  resolveWorkoutNameForEndWorkoutWithCompletion?(intent: INEndWorkoutIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INEndWorkoutIntentHandling extends NativeObject implements INEndWorkoutIntentHandling {
}

declare interface INSetMessageAttributeIntentHandling extends NSObjectProtocol {
  handleSetMessageAttributeCompletion(intent: INSetMessageAttributeIntent, completion: (p1: INSetMessageAttributeIntentResponse) => void): void;

  confirmSetMessageAttributeCompletion?(intent: INSetMessageAttributeIntent, completion: (p1: INSetMessageAttributeIntentResponse) => void): void;

  resolveAttributeForSetMessageAttributeWithCompletion?(intent: INSetMessageAttributeIntent, completion: (p1: INMessageAttributeResolutionResult) => void): void;
}

declare class INSetMessageAttributeIntentHandling extends NativeObject implements INSetMessageAttributeIntentHandling {
}

declare interface INHangUpCallIntentHandling extends NSObjectProtocol {
  handleHangUpCallCompletion(intent: INHangUpCallIntent, completion: (p1: INHangUpCallIntentResponse) => void): void;

  confirmHangUpCallCompletion?(intent: INHangUpCallIntent, completion: (p1: INHangUpCallIntentResponse) => void): void;
}

declare class INHangUpCallIntentHandling extends NativeObject implements INHangUpCallIntentHandling {
}

declare interface INUpdateMediaAffinityIntentHandling extends NSObjectProtocol {
  handleUpdateMediaAffinityCompletion(intent: INUpdateMediaAffinityIntent, completion: (p1: INUpdateMediaAffinityIntentResponse) => void): void;

  confirmUpdateMediaAffinityCompletion?(intent: INUpdateMediaAffinityIntent, completion: (p1: INUpdateMediaAffinityIntentResponse) => void): void;

  resolveMediaItemsForUpdateMediaAffinityWithCompletion?(intent: INUpdateMediaAffinityIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveAffinityTypeForUpdateMediaAffinityWithCompletion?(intent: INUpdateMediaAffinityIntent, completion: (p1: INMediaAffinityTypeResolutionResult) => void): void;
}

declare class INUpdateMediaAffinityIntentHandling extends NativeObject implements INUpdateMediaAffinityIntentHandling {
}

declare interface INWorkoutsDomainHandling extends INStartWorkoutIntentHandling, INPauseWorkoutIntentHandling, INEndWorkoutIntentHandling, INCancelWorkoutIntentHandling, INResumeWorkoutIntentHandling {
}

declare class INWorkoutsDomainHandling extends NativeObject implements INWorkoutsDomainHandling {
}

declare interface INCreateTaskListIntentHandling extends NSObjectProtocol {
  handleCreateTaskListCompletion(intent: INCreateTaskListIntent, completion: (p1: INCreateTaskListIntentResponse) => void): void;

  confirmCreateTaskListCompletion?(intent: INCreateTaskListIntent, completion: (p1: INCreateTaskListIntentResponse) => void): void;

  resolveTitleForCreateTaskListWithCompletion?(intent: INCreateTaskListIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveTaskTitlesForCreateTaskListWithCompletion?(intent: INCreateTaskListIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveGroupNameForCreateTaskListWithCompletion?(intent: INCreateTaskListIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INCreateTaskListIntentHandling extends NativeObject implements INCreateTaskListIntentHandling {
}

declare interface INSendMessageIntentHandling extends NSObjectProtocol {
  handleSendMessageCompletion(intent: INSendMessageIntent, completion: (p1: INSendMessageIntentResponse) => void): void;

  confirmSendMessageCompletion?(intent: INSendMessageIntent, completion: (p1: INSendMessageIntentResponse) => void): void;

  resolveRecipientsForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveRecipientsForSendMessageCompletion?(intent: INSendMessageIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveGroupNameForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveOutgoingMessageTypeForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: INOutgoingMessageTypeResolutionResult) => void): void;

  resolveContentForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolveSpeakableGroupNameForSendMessageWithCompletion?(intent: INSendMessageIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INSendMessageIntentHandling extends NativeObject implements INSendMessageIntentHandling {
}

declare interface INSaveProfileInCarIntentHandling extends NSObjectProtocol {
  handleSaveProfileInCarCompletion(intent: INSaveProfileInCarIntent, completion: (p1: INSaveProfileInCarIntentResponse) => void): void;

  confirmSaveProfileInCarCompletion?(intent: INSaveProfileInCarIntent, completion: (p1: INSaveProfileInCarIntentResponse) => void): void;

  resolveProfileNumberForSaveProfileInCarWithCompletion?(intent: INSaveProfileInCarIntent, completion: (p1: INIntegerResolutionResult) => void): void;

  resolveProfileNameForSaveProfileInCarWithCompletion?(intent: INSaveProfileInCarIntent, completion: (p1: INStringResolutionResult) => void): void;
}

declare class INSaveProfileInCarIntentHandling extends NativeObject implements INSaveProfileInCarIntentHandling {
}

declare interface INSearchForMessagesIntentHandling extends NSObjectProtocol {
  handleSearchForMessagesCompletion(intent: INSearchForMessagesIntent, completion: (p1: INSearchForMessagesIntentResponse) => void): void;

  confirmSearchForMessagesCompletion?(intent: INSearchForMessagesIntent, completion: (p1: INSearchForMessagesIntentResponse) => void): void;

  resolveRecipientsForSearchForMessagesWithCompletion?(intent: INSearchForMessagesIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveSendersForSearchForMessagesWithCompletion?(intent: INSearchForMessagesIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveAttributesForSearchForMessagesWithCompletion?(intent: INSearchForMessagesIntent, completion: (p1: INMessageAttributeOptionsResolutionResult) => void): void;

  resolveDateTimeRangeForSearchForMessagesWithCompletion?(intent: INSearchForMessagesIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveGroupNamesForSearchForMessagesWithCompletion?(intent: INSearchForMessagesIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  resolveSpeakableGroupNamesForSearchForMessagesWithCompletion?(intent: INSearchForMessagesIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INSearchForMessagesIntentHandling extends NativeObject implements INSearchForMessagesIntentHandling {
}

declare interface INNotebookDomainHandling extends INCreateNoteIntentHandling, INAppendToNoteIntentHandling, INAddTasksIntentHandling, INCreateTaskListIntentHandling, INSetTaskAttributeIntentHandling, INSearchForNotebookItemsIntentHandling {
}

declare class INNotebookDomainHandling extends NativeObject implements INNotebookDomainHandling {
}

declare interface INSendRideFeedbackIntentHandling extends NSObjectProtocol {
  handleSendRideFeedbackCompletion(sendRideFeedbackintent: INSendRideFeedbackIntent, completion: (p1: INSendRideFeedbackIntentResponse) => void): void;

  confirmSendRideFeedbackCompletion?(sendRideFeedbackIntent: INSendRideFeedbackIntent, completion: (p1: INSendRideFeedbackIntentResponse) => void): void;
}

declare class INSendRideFeedbackIntentHandling extends NativeObject implements INSendRideFeedbackIntentHandling {
}

declare interface INCancelWorkoutIntentHandling extends NSObjectProtocol {
  handleCancelWorkoutCompletion(intent: INCancelWorkoutIntent, completion: (p1: INCancelWorkoutIntentResponse) => void): void;

  confirmCancelWorkoutCompletion?(intent: INCancelWorkoutIntent, completion: (p1: INCancelWorkoutIntentResponse) => void): void;

  resolveWorkoutNameForCancelWorkoutWithCompletion?(intent: INCancelWorkoutIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INCancelWorkoutIntentHandling extends NativeObject implements INCancelWorkoutIntentHandling {
}

declare interface INSetCarLockStatusIntentHandling extends NSObjectProtocol {
  handleSetCarLockStatusCompletion(intent: INSetCarLockStatusIntent, completion: (p1: INSetCarLockStatusIntentResponse) => void): void;

  confirmSetCarLockStatusCompletion?(intent: INSetCarLockStatusIntent, completion: (p1: INSetCarLockStatusIntentResponse) => void): void;

  resolveLockedForSetCarLockStatusWithCompletion?(intent: INSetCarLockStatusIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveCarNameForSetCarLockStatusWithCompletion?(intent: INSetCarLockStatusIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INSetCarLockStatusIntentHandling extends NativeObject implements INSetCarLockStatusIntentHandling {
}

declare interface INRequestRideIntentHandling extends NSObjectProtocol {
  handleRequestRideCompletion(intent: INRequestRideIntent, completion: (p1: INRequestRideIntentResponse) => void): void;

  confirmRequestRideCompletion?(intent: INRequestRideIntent, completion: (p1: INRequestRideIntentResponse) => void): void;

  resolvePickupLocationForRequestRideWithCompletion?(intent: INRequestRideIntent, completion: (p1: INPlacemarkResolutionResult) => void): void;

  resolveDropOffLocationForRequestRideWithCompletion?(intent: INRequestRideIntent, completion: (p1: INPlacemarkResolutionResult) => void): void;

  resolveRideOptionNameForRequestRideWithCompletion?(intent: INRequestRideIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolvePartySizeForRequestRideWithCompletion?(intent: INRequestRideIntent, completion: (p1: INIntegerResolutionResult) => void): void;

  resolveScheduledPickupTimeForRequestRideWithCompletion?(intent: INRequestRideIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;
}

declare class INRequestRideIntentHandling extends NativeObject implements INRequestRideIntentHandling {
}

declare interface INActivateCarSignalIntentHandling extends NSObjectProtocol {
  handleActivateCarSignalCompletion(intent: INActivateCarSignalIntent, completion: (p1: INActivateCarSignalIntentResponse) => void): void;

  confirmActivateCarSignalCompletion?(intent: INActivateCarSignalIntent, completion: (p1: INActivateCarSignalIntentResponse) => void): void;

  resolveCarNameForActivateCarSignalWithCompletion?(intent: INActivateCarSignalIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveSignalsForActivateCarSignalWithCompletion?(intent: INActivateCarSignalIntent, completion: (p1: INCarSignalOptionsResolutionResult) => void): void;
}

declare class INActivateCarSignalIntentHandling extends NativeObject implements INActivateCarSignalIntentHandling {
}

declare interface INRadioDomainHandling extends INSetRadioStationIntentHandling {
}

declare class INRadioDomainHandling extends NativeObject implements INRadioDomainHandling {
}

declare interface INGetCarLockStatusIntentHandling extends NSObjectProtocol {
  handleGetCarLockStatusCompletion(intent: INGetCarLockStatusIntent, completion: (p1: INGetCarLockStatusIntentResponse) => void): void;

  confirmGetCarLockStatusCompletion?(intent: INGetCarLockStatusIntent, completion: (p1: INGetCarLockStatusIntentResponse) => void): void;

  resolveCarNameForGetCarLockStatusWithCompletion?(intent: INGetCarLockStatusIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INGetCarLockStatusIntentHandling extends NativeObject implements INGetCarLockStatusIntentHandling {
}

declare interface INStartPhotoPlaybackIntentHandling extends NSObjectProtocol {
  handleStartPhotoPlaybackCompletion(intent: INStartPhotoPlaybackIntent, completion: (p1: INStartPhotoPlaybackIntentResponse) => void): void;

  confirmStartPhotoPlaybackCompletion?(intent: INStartPhotoPlaybackIntent, completion: (p1: INStartPhotoPlaybackIntentResponse) => void): void;

  resolveDateCreatedForStartPhotoPlaybackWithCompletion?(intent: INStartPhotoPlaybackIntent, completion: (p1: INDateComponentsRangeResolutionResult) => void): void;

  resolveLocationCreatedForStartPhotoPlaybackWithCompletion?(intent: INStartPhotoPlaybackIntent, completion: (p1: INPlacemarkResolutionResult) => void): void;

  resolveAlbumNameForStartPhotoPlaybackWithCompletion?(intent: INStartPhotoPlaybackIntent, completion: (p1: INStringResolutionResult) => void): void;

  resolvePeopleInPhotoForStartPhotoPlaybackWithCompletion?(intent: INStartPhotoPlaybackIntent, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class INStartPhotoPlaybackIntentHandling extends NativeObject implements INStartPhotoPlaybackIntentHandling {
}

declare interface INSetTaskAttributeIntentHandling extends NSObjectProtocol {
  handleSetTaskAttributeCompletion(intent: INSetTaskAttributeIntent, completion: (p1: INSetTaskAttributeIntentResponse) => void): void;

  confirmSetTaskAttributeCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INSetTaskAttributeIntentResponse) => void): void;

  resolveTargetTaskForSetTaskAttributeWithCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INTaskResolutionResult) => void): void;

  resolveTaskTitleForSetTaskAttributeWithCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;

  resolveStatusForSetTaskAttributeWithCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INTaskStatusResolutionResult) => void): void;

  resolvePriorityForSetTaskAttributeWithCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INTaskPriorityResolutionResult) => void): void;

  resolveSpatialEventTriggerForSetTaskAttributeWithCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INSpatialEventTriggerResolutionResult) => void): void;

  resolveTemporalEventTriggerForSetTaskAttributeWithCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INTemporalEventTriggerResolutionResult) => void): void;

  resolveTemporalEventTriggerForSetTaskAttributeCompletion?(intent: INSetTaskAttributeIntent, completion: (p1: INSetTaskAttributeTemporalEventTriggerResolutionResult) => void): void;
}

declare class INSetTaskAttributeIntentHandling extends NativeObject implements INSetTaskAttributeIntentHandling {
}

declare interface INAppendToNoteIntentHandling extends NSObjectProtocol {
  handleAppendToNoteCompletion(intent: INAppendToNoteIntent, completion: (p1: INAppendToNoteIntentResponse) => void): void;

  confirmAppendToNoteCompletion?(intent: INAppendToNoteIntent, completion: (p1: INAppendToNoteIntentResponse) => void): void;

  resolveTargetNoteForAppendToNoteWithCompletion?(intent: INAppendToNoteIntent, completion: (p1: INNoteResolutionResult) => void): void;

  resolveContentForAppendToNoteWithCompletion?(intent: INAppendToNoteIntent, completion: (p1: INNoteContentResolutionResult) => void): void;
}

declare class INAppendToNoteIntentHandling extends NativeObject implements INAppendToNoteIntentHandling {
}

declare interface INGetRideStatusIntentHandling extends NSObjectProtocol {
  handleGetRideStatusCompletion(intent: INGetRideStatusIntent, completion: (p1: INGetRideStatusIntentResponse) => void): void;

  startSendingUpdatesForGetRideStatusToObserver(intent: INGetRideStatusIntent, observer: INGetRideStatusIntentResponseObserver): void;

  stopSendingUpdatesForGetRideStatus(intent: INGetRideStatusIntent): void;

  confirmGetRideStatusCompletion?(intent: INGetRideStatusIntent, completion: (p1: INGetRideStatusIntentResponse) => void): void;
}

declare class INGetRideStatusIntentHandling extends NativeObject implements INGetRideStatusIntentHandling {
}

declare interface INPhotosDomainHandling extends INSearchForPhotosIntentHandling, INStartPhotoPlaybackIntentHandling {
}

declare class INPhotosDomainHandling extends NativeObject implements INPhotosDomainHandling {
}

declare interface INGetCarPowerLevelStatusIntentHandling extends NSObjectProtocol {
  handleGetCarPowerLevelStatusCompletion(intent: INGetCarPowerLevelStatusIntent, completion: (p1: INGetCarPowerLevelStatusIntentResponse) => void): void;

  startSendingUpdatesForGetCarPowerLevelStatusToObserver?(intent: INGetCarPowerLevelStatusIntent, observer: INGetCarPowerLevelStatusIntentResponseObserver): void;

  stopSendingUpdatesForGetCarPowerLevelStatus?(intent: INGetCarPowerLevelStatusIntent): void;

  confirmGetCarPowerLevelStatusCompletion?(intent: INGetCarPowerLevelStatusIntent, completion: (p1: INGetCarPowerLevelStatusIntentResponse) => void): void;

  resolveCarNameForGetCarPowerLevelStatusWithCompletion?(intent: INGetCarPowerLevelStatusIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INGetCarPowerLevelStatusIntentHandling extends NativeObject implements INGetCarPowerLevelStatusIntentHandling {
}

declare interface INEditMessageIntentHandling extends NSObjectProtocol {
  handleEditMessageCompletion(intent: INEditMessageIntent, completion: (p1: INEditMessageIntentResponse) => void): void;

  confirmEditMessageCompletion?(intent: INEditMessageIntent, completion: (p1: INEditMessageIntentResponse) => void): void;

  resolveEditedContentForEditMessageWithCompletion?(intent: INEditMessageIntent, completion: (p1: INStringResolutionResult) => void): void;
}

declare class INEditMessageIntentHandling extends NativeObject implements INEditMessageIntentHandling {
}

declare interface INCarPlayDomainHandling extends INSetAudioSourceInCarIntentHandling, INSetClimateSettingsInCarIntentHandling, INSetDefrosterSettingsInCarIntentHandling, INSetSeatSettingsInCarIntentHandling, INSetProfileInCarIntentHandling, INSaveProfileInCarIntentHandling {
}

declare class INCarPlayDomainHandling extends NativeObject implements INCarPlayDomainHandling {
}

declare interface INMessagesDomainHandling extends INSendMessageIntentHandling, INSearchForMessagesIntentHandling, INSetMessageAttributeIntentHandling {
}

declare class INMessagesDomainHandling extends NativeObject implements INMessagesDomainHandling {
}

declare interface INSetDefrosterSettingsInCarIntentHandling extends NSObjectProtocol {
  handleSetDefrosterSettingsInCarCompletion(intent: INSetDefrosterSettingsInCarIntent, completion: (p1: INSetDefrosterSettingsInCarIntentResponse) => void): void;

  confirmSetDefrosterSettingsInCarCompletion?(intent: INSetDefrosterSettingsInCarIntent, completion: (p1: INSetDefrosterSettingsInCarIntentResponse) => void): void;

  resolveEnableForSetDefrosterSettingsInCarWithCompletion?(intent: INSetDefrosterSettingsInCarIntent, completion: (p1: INBooleanResolutionResult) => void): void;

  resolveDefrosterForSetDefrosterSettingsInCarWithCompletion?(intent: INSetDefrosterSettingsInCarIntent, completion: (p1: INCarDefrosterResolutionResult) => void): void;

  resolveCarNameForSetDefrosterSettingsInCarWithCompletion?(intent: INSetDefrosterSettingsInCarIntent, completion: (p1: INSpeakableStringResolutionResult) => void): void;
}

declare class INSetDefrosterSettingsInCarIntentHandling extends NativeObject implements INSetDefrosterSettingsInCarIntentHandling {
}

declare interface INGetUserCurrentRestaurantReservationBookingsIntentHandling extends NSObjectProtocol {
  handleGetUserCurrentRestaurantReservationBookingsCompletion(intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: (p1: INGetUserCurrentRestaurantReservationBookingsIntentResponse) => void): void;

  confirmGetUserCurrentRestaurantReservationBookingsCompletion?(intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: (p1: INGetUserCurrentRestaurantReservationBookingsIntentResponse) => void): void;

  resolveRestaurantForGetUserCurrentRestaurantReservationBookingsWithCompletion?(intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: (p1: INRestaurantResolutionResult) => void): void;
}

declare class INGetUserCurrentRestaurantReservationBookingsIntentHandling extends NativeObject implements INGetUserCurrentRestaurantReservationBookingsIntentHandling {
}

declare interface INRidesharingDomainHandling extends INListRideOptionsIntentHandling, INRequestRideIntentHandling, INGetRideStatusIntentHandling, INCancelRideIntentHandling, INSendRideFeedbackIntentHandling {
}

declare class INRidesharingDomainHandling extends NativeObject implements INRidesharingDomainHandling {
}

declare class INMediaItem extends NSObject implements NSCopying, NSSecureCoding {
  initWithIdentifierTitleTypeArtworkArtist(identifier: string | null, title: string | null, type: interop.Enum<typeof INMediaItemType>, artwork: INImage | null, artist: string | null): this;

  initWithIdentifierTitleTypeArtwork(identifier: string | null, title: string | null, type: interop.Enum<typeof INMediaItemType>, artwork: INImage | null): this;

  readonly identifier: string;

  readonly title: string;

  readonly type: interop.Enum<typeof INMediaItemType>;

  readonly artwork: INImage;

  readonly artist: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INVoiceShortcutCenter extends NSObject {
  static readonly sharedCenter: INVoiceShortcutCenter;

  getAllVoiceShortcutsWithCompletion(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: NSError) => void | null): void;

  getVoiceShortcutWithIdentifierCompletion(identifier: NSUUID, completionHandler: (p1: INVoiceShortcut, p2: NSError) => void | null): void;

  setShortcutSuggestions(suggestions: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class INRelevantShortcutStore extends NSObject {
  static readonly defaultStore: INRelevantShortcutStore;

  setRelevantShortcutsCompletionHandler(shortcuts: NSArray<interop.Object> | Array<interop.Object>, completionHandler: (p1: NSError) => void | null): void;
}

declare class INRelevantShortcut extends NSObject implements NSSecureCoding, NSCopying {
  get relevanceProviders(): NSArray;
  set relevanceProviders(value: NSArray<interop.Object> | Array<interop.Object>);

  watchTemplate: INDefaultCardTemplate;

  widgetKind: string;

  shortcutRole: interop.Enum<typeof INRelevantShortcutRole>;

  readonly shortcut: INShortcut;

  initWithShortcut(shortcut: INShortcut): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
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

declare class INDailyRoutineRelevanceProvider extends INRelevanceProvider {
  readonly situation: interop.Enum<typeof INDailyRoutineSituation>;

  initWithSituation(situation: interop.Enum<typeof INDailyRoutineSituation>): this;
}

declare class INNoteContent extends NSObject implements NSSecureCoding, NSCopying {
  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INMediaUserContext extends INUserContext {
  init(): this;

  subscriptionStatus: interop.Enum<typeof INMediaUserContextSubscriptionStatus>;

  numberOfLibraryItems: NSNumber;
}

declare class INUserContext extends NSObject implements NSSecureCoding {
  becomeCurrent(): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INPreferences extends NSObject {
  static siriAuthorizationStatus(): interop.Enum<typeof INSiriAuthorizationStatus>;

  static requestSiriAuthorization(handler: (p1: interop.Enum<typeof INSiriAuthorizationStatus>) => void): void;

  static siriLanguageCode(): string;
}

declare class INLocationRelevanceProvider extends INRelevanceProvider {
  readonly region: CLRegion;

  initWithRegion(region: CLRegion): this;
}

declare class INGetRestaurantGuestIntent extends INIntent {
}

declare class INGetAvailableRestaurantReservationBookingDefaultsIntentResponse extends INIntentResponse {
  readonly defaultPartySize: number;

  readonly defaultBookingDate: NSDate;

  maximumPartySize: NSNumber;

  minimumPartySize: NSNumber;

  providerImage: INImage;

  initWithDefaultPartySizeDefaultBookingDateCodeUserActivity(defaultPartySize: number, defaultBookingDate: NSDate, code: interop.Enum<typeof INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode>;
}

declare class INGetUserCurrentRestaurantReservationBookingsIntentResponse extends INIntentResponse {
  initWithUserCurrentBookingsCodeUserActivity(userCurrentBookings: NSArray<interop.Object> | Array<interop.Object>, code: interop.Enum<typeof INGetUserCurrentRestaurantReservationBookingsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetUserCurrentRestaurantReservationBookingsIntentResponseCode>;

  get userCurrentBookings(): NSArray;
  set userCurrentBookings(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INGetAvailableRestaurantReservationBookingsIntentResponse extends INIntentResponse {
  initWithAvailableBookingsCodeUserActivity(availableBookings: NSArray<interop.Object> | Array<interop.Object>, code: interop.Enum<typeof INGetAvailableRestaurantReservationBookingsIntentCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetAvailableRestaurantReservationBookingsIntentCode>;

  localizedRestaurantDescriptionText: string;

  localizedBookingAdvisementText: string;

  termsAndConditions: INTermsAndConditions;

  readonly availableBookings: NSArray;
}

declare class INBookRestaurantReservationIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INBookRestaurantReservationIntentCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INBookRestaurantReservationIntentCode>;

  userBooking: INRestaurantReservationUserBooking;
}

declare class INRestaurantReservationUserBooking extends INRestaurantReservationBooking implements NSCopying {
  initWithRestaurantBookingDatePartySizeBookingIdentifierGuestStatusDateStatusModified(restaurant: INRestaurant, bookingDate: NSDate, partySize: number, bookingIdentifier: string, guest: INRestaurantGuest, status: interop.Enum<typeof INRestaurantReservationUserBookingStatus>, dateStatusModified: NSDate): this;

  guest: INRestaurantGuest;

  advisementText: string;

  selectedOffer: INRestaurantOffer;

  guestProvidedSpecialRequestText: string;

  status: interop.Enum<typeof INRestaurantReservationUserBookingStatus>;

  dateStatusModified: NSDate;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INGetAvailableRestaurantReservationBookingDefaultsIntent extends INIntent {
  initWithRestaurant(restaurant: INRestaurant | null): this;

  restaurant: INRestaurant;
}

declare class INRestaurantGuestDisplayPreferences extends NSObject implements NSSecureCoding, NSCopying {
  nameFieldFirstNameOptional: boolean;

  nameFieldLastNameOptional: boolean;

  nameFieldShouldBeDisplayed: boolean;

  emailAddressFieldShouldBeDisplayed: boolean;

  phoneNumberFieldShouldBeDisplayed: boolean;

  nameEditable: boolean;

  emailAddressEditable: boolean;

  phoneNumberEditable: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INTermsAndConditions extends NSObject implements NSSecureCoding, NSCopying {
  initWithLocalizedTermsAndConditionsTextPrivacyPolicyURLTermsAndConditionsURL(localizedTermsAndConditionsText: string, privacyPolicyURL: NSURL | null, termsAndConditionsURL: NSURL | null): this;

  readonly localizedTermsAndConditionsText: string;

  readonly privacyPolicyURL: NSURL;

  readonly termsAndConditionsURL: NSURL;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INRestaurantGuest extends INPerson {
  initWithNameComponentsPhoneNumberEmailAddress(nameComponents: NSPersonNameComponents | null, phoneNumber: string | null, emailAddress: string | null): this;

  phoneNumber: string;

  emailAddress: string;
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

declare class INBusReservation extends INReservation implements NSCopying, NSSecureCoding {
  initWithItemReferenceReservationNumberBookingTimeReservationStatusReservationHolderNameActionsURLReservedSeatBusTrip(itemReference: INSpeakableString, reservationNumber: string | null, bookingTime: NSDate | null, reservationStatus: interop.Enum<typeof INReservationStatus>, reservationHolderName: string | null, actions: NSArray<interop.Object> | Array<interop.Object> | null, URL: NSURL | null, reservedSeat: INSeat | null, busTrip: INBusTrip | null): this;

  readonly reservedSeat: INSeat;

  readonly busTrip: INBusTrip;

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

declare class INRideCompletionStatus extends NSObject implements NSCopying, NSSecureCoding {
  static completed<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static completedWithSettledPaymentAmount<This extends abstract new (...args: any) => any>(this: This, settledPaymentAmount: INCurrencyAmount): InstanceType<This>;

  static completedWithOutstandingPaymentAmount<This extends abstract new (...args: any) => any>(this: This, outstandingPaymentAmount: INCurrencyAmount): InstanceType<This>;

  static completedWithOutstandingFeedbackType<This extends abstract new (...args: any) => any>(this: This, feedbackType: interop.Enum<typeof INRideFeedbackTypeOptions>): InstanceType<This>;

  static canceledByService<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static canceledByUser<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static canceledMissedPickup<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  completionUserActivity: NSUserActivity;

  readonly isCompleted: boolean;

  readonly isCanceled: boolean;

  readonly isMissedPickup: boolean;

  readonly paymentAmount: INCurrencyAmount;

  readonly feedbackType: interop.Enum<typeof INRideFeedbackTypeOptions>;

  readonly isOutstanding: boolean;

  defaultTippingOptions: NSSet;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INRidePartySizeOption extends NSObject implements NSCopying, NSSecureCoding {
  initWithPartySizeRangeSizeDescriptionPriceRange(partySizeRange: _NSRange, sizeDescription: string, priceRange: INPriceRange | null): this;

  readonly partySizeRange: _NSRange;

  readonly sizeDescription: string;

  readonly priceRange: INPriceRange;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INRideVehicle extends NSObject implements NSCopying, NSSecureCoding {
  location: CLLocation;

  registrationPlate: string;

  manufacturer: string;

  model: string;

  mapAnnotationImage: INImage;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSendMessageAttachment extends NSObject {
  static attachmentWithAudioMessageFile(audioMessageFile: INFile): INSendMessageAttachment;

  readonly audioMessageFile: INFile;
}

declare class INTimeIntervalResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTimeInterval<This extends abstract new (...args: any) => any>(this: This, resolvedTimeInterval: number): InstanceType<This>;

  static confirmationRequiredWithTimeIntervalToConfirm<This extends abstract new (...args: any) => any>(this: This, timeIntervalToConfirm: number): InstanceType<This>;
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

declare class INEnergyResolutionResult extends INIntentResolutionResult {
  static successWithResolvedEnergy<This extends abstract new (...args: any) => any>(this: This, resolvedEnergy: NSMeasurement): InstanceType<This>;

  static disambiguationWithEnergyToDisambiguate<This extends abstract new (...args: any) => any>(this: This, energyToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithEnergyToConfirm<This extends abstract new (...args: any) => any>(this: This, energyToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INLengthResolutionResult extends INIntentResolutionResult {
  static successWithResolvedLength<This extends abstract new (...args: any) => any>(this: This, resolvedLength: NSMeasurement): InstanceType<This>;

  static disambiguationWithLengthsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, lengthsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithLengthToConfirm<This extends abstract new (...args: any) => any>(this: This, lengthToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INSpeakableStringResolutionResult extends INIntentResolutionResult {
  static successWithResolvedString<This extends abstract new (...args: any) => any>(this: This, resolvedString: INSpeakableString): InstanceType<This>;

  static disambiguationWithStringsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, stringsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithStringToConfirm<This extends abstract new (...args: any) => any>(this: This, stringToConfirm: INSpeakableString | null): InstanceType<This>;
}

declare class INTextNoteContent extends INNoteContent implements NSSecureCoding, NSCopying {
  initWithText(text: string): this;

  readonly text: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INRideStatus extends NSObject implements NSCopying, NSSecureCoding {
  rideIdentifier: string;

  phase: interop.Enum<typeof INRidePhase>;

  completionStatus: INRideCompletionStatus;

  vehicle: INRideVehicle;

  driver: INRideDriver;

  estimatedPickupDate: NSDate;

  estimatedDropOffDate: NSDate;

  estimatedPickupEndDate: NSDate;

  scheduledPickupTime: INDateComponentsRange;

  pickupLocation: CLPlacemark;

  get waypoints(): NSArray;
  set waypoints(value: NSArray<interop.Object> | Array<interop.Object>);

  dropOffLocation: CLPlacemark;

  rideOption: INRideOption;

  userActivityForCancelingInApplication: NSUserActivity;

  get additionalActionActivities(): NSArray;
  set additionalActionActivities(value: NSArray<interop.Object> | Array<interop.Object>);

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INIntegerResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: number): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
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

declare class INRecurrenceRule extends NSObject implements NSCopying, NSSecureCoding {
  initWithIntervalFrequency(interval: number, frequency: interop.Enum<typeof INRecurrenceFrequency>): this;

  initWithIntervalFrequencyWeeklyRecurrenceDays(interval: number, frequency: interop.Enum<typeof INRecurrenceFrequency>, weeklyRecurrenceDays: interop.Enum<typeof INDayOfWeekOptions>): this;

  readonly interval: number;

  readonly frequency: interop.Enum<typeof INRecurrenceFrequency>;

  readonly weeklyRecurrenceDays: interop.Enum<typeof INDayOfWeekOptions>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INVocabulary extends NSObject {
  static sharedVocabulary<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  setVocabularyStringsOfType(vocabulary: NSOrderedSet, type: interop.Enum<typeof INVocabularyStringType>): void;

  setVocabularyOfType(vocabulary: NSOrderedSet, type: interop.Enum<typeof INVocabularyStringType>): void;

  removeAllVocabularyStrings(): void;
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

  readonly siriMatches: NSArray;

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

declare class INImage extends NSObject implements NSCopying, NSSecureCoding {
  static imageNamed<This extends abstract new (...args: any) => any>(this: This, name: string): InstanceType<This>;

  static systemImageNamed<This extends abstract new (...args: any) => any>(this: This, systemImageName: string): InstanceType<This>;

  static imageWithImageData<This extends abstract new (...args: any) => any>(this: This, imageData: NSData): InstanceType<This>;

  static imageWithURL<This extends abstract new (...args: any) => any>(this: This, URL: NSURL): InstanceType<This>;

  static imageWithURLWidthHeight<This extends abstract new (...args: any) => any>(this: This, URL: NSURL, width: number, height: number): InstanceType<This>;

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

declare class INWorkoutLocationTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedWorkoutLocationType<This extends abstract new (...args: any) => any>(this: This, resolvedWorkoutLocationType: interop.Enum<typeof INWorkoutLocationType>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INWorkoutLocationType>): InstanceType<This>;

  static confirmationRequiredWithWorkoutLocationTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, workoutLocationTypeToConfirm: interop.Enum<typeof INWorkoutLocationType>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INWorkoutLocationType>): InstanceType<This>;
}

declare class INWorkoutGoalUnitTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedWorkoutGoalUnitType<This extends abstract new (...args: any) => any>(this: This, resolvedWorkoutGoalUnitType: interop.Enum<typeof INWorkoutGoalUnitType>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INWorkoutGoalUnitType>): InstanceType<This>;

  static confirmationRequiredWithWorkoutGoalUnitTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, workoutGoalUnitTypeToConfirm: interop.Enum<typeof INWorkoutGoalUnitType>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INWorkoutGoalUnitType>): InstanceType<This>;
}

declare class INUpdateMediaAffinityMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INUpdateMediaAffinityMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
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

declare class INTaskPriorityResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTaskPriority<This extends abstract new (...args: any) => any>(this: This, resolvedTaskPriority: interop.Enum<typeof INTaskPriority>): InstanceType<This>;

  static confirmationRequiredWithTaskPriorityToConfirm<This extends abstract new (...args: any) => any>(this: This, taskPriorityToConfirm: interop.Enum<typeof INTaskPriority>): InstanceType<This>;
}

declare class INTaskList extends NSObject implements NSCopying, NSSecureCoding {
  initWithTitleTasksGroupNameCreatedDateComponentsModifiedDateComponentsIdentifier(title: INSpeakableString, tasks: NSArray<interop.Object> | Array<interop.Object>, groupName: INSpeakableString | null, createdDateComponents: NSDateComponents | null, modifiedDateComponents: NSDateComponents | null, identifier: string | null): this;

  readonly title: INSpeakableString;

  readonly tasks: NSArray;

  readonly groupName: INSpeakableString;

  readonly createdDateComponents: NSDateComponents;

  readonly modifiedDateComponents: NSDateComponents;

  readonly identifier: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INTask extends NSObject implements NSCopying, NSSecureCoding {
  initWithTitleStatusTaskTypeSpatialEventTriggerTemporalEventTriggerCreatedDateComponentsModifiedDateComponentsIdentifierPriority(title: INSpeakableString, status: interop.Enum<typeof INTaskStatus>, taskType: interop.Enum<typeof INTaskType>, spatialEventTrigger: INSpatialEventTrigger | null, temporalEventTrigger: INTemporalEventTrigger | null, createdDateComponents: NSDateComponents | null, modifiedDateComponents: NSDateComponents | null, identifier: string | null, priority: interop.Enum<typeof INTaskPriority>): this;

  initWithTitleStatusTaskTypeSpatialEventTriggerTemporalEventTriggerCreatedDateComponentsModifiedDateComponentsIdentifier(title: INSpeakableString, status: interop.Enum<typeof INTaskStatus>, taskType: interop.Enum<typeof INTaskType>, spatialEventTrigger: INSpatialEventTrigger | null, temporalEventTrigger: INTemporalEventTrigger | null, createdDateComponents: NSDateComponents | null, modifiedDateComponents: NSDateComponents | null, identifier: string | null): this;

  readonly title: INSpeakableString;

  readonly status: interop.Enum<typeof INTaskStatus>;

  readonly spatialEventTrigger: INSpatialEventTrigger;

  readonly temporalEventTrigger: INTemporalEventTrigger;

  readonly createdDateComponents: NSDateComponents;

  readonly modifiedDateComponents: NSDateComponents;

  readonly identifier: string;

  readonly taskType: interop.Enum<typeof INTaskType>;

  readonly priority: interop.Enum<typeof INTaskPriority>;

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

declare class INStartCallCallCapabilityResolutionResult extends INCallCapabilityResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INStartCallCallCapabilityUnsupportedReason>): InstanceType<This>;

  initWithCallCapabilityResolutionResult(callCapabilityResolutionResult: INCallCapabilityResolutionResult): this;
}

declare class INSpatialEventTriggerResolutionResult extends INIntentResolutionResult {
  static successWithResolvedSpatialEventTrigger<This extends abstract new (...args: any) => any>(this: This, resolvedSpatialEventTrigger: INSpatialEventTrigger): InstanceType<This>;

  static disambiguationWithSpatialEventTriggersToDisambiguate<This extends abstract new (...args: any) => any>(this: This, spatialEventTriggersToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithSpatialEventTriggerToConfirm<This extends abstract new (...args: any) => any>(this: This, spatialEventTriggerToConfirm: INSpatialEventTrigger | null): InstanceType<This>;
}

declare class INSpatialEventTrigger extends NSObject implements NSCopying, NSSecureCoding {
  initWithPlacemarkEvent(placemark: CLPlacemark, event: interop.Enum<typeof INSpatialEvent>): this;

  readonly placemark: CLPlacemark;

  readonly event: interop.Enum<typeof INSpatialEvent>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSetTaskAttributeTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSetTaskAttributeTemporalEventTriggerUnsupportedReason>): InstanceType<This>;

  initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: INTemporalEventTriggerResolutionResult): this;
}

declare class INRequestPaymentPayerResolutionResult extends INPersonResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INRequestPaymentPayerUnsupportedReason>): InstanceType<This>;

  initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult): this;
}

declare class INRequestPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INRequestPaymentCurrencyAmountUnsupportedReason>): InstanceType<This>;

  initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: INCurrencyAmountResolutionResult): this;
}

declare class INRelativeSettingResolutionResult extends INIntentResolutionResult {
  static successWithResolvedRelativeSetting<This extends abstract new (...args: any) => any>(this: This, resolvedRelativeSetting: interop.Enum<typeof INRelativeSetting>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INRelativeSetting>): InstanceType<This>;

  static confirmationRequiredWithRelativeSettingToConfirm<This extends abstract new (...args: any) => any>(this: This, relativeSettingToConfirm: interop.Enum<typeof INRelativeSetting>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INRelativeSetting>): InstanceType<This>;
}

declare class INRadioTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedRadioType<This extends abstract new (...args: any) => any>(this: This, resolvedRadioType: interop.Enum<typeof INRadioType>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INRadioType>): InstanceType<This>;

  static confirmationRequiredWithRadioTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, radioTypeToConfirm: interop.Enum<typeof INRadioType>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INRadioType>): InstanceType<This>;
}

declare class INPlaybackRepeatModeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPlaybackRepeatMode<This extends abstract new (...args: any) => any>(this: This, resolvedPlaybackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>): InstanceType<This>;

  static confirmationRequiredWithPlaybackRepeatModeToConfirm<This extends abstract new (...args: any) => any>(this: This, playbackRepeatModeToConfirm: interop.Enum<typeof INPlaybackRepeatMode>): InstanceType<This>;
}

declare class INPlayMediaPlaybackSpeedResolutionResult extends INDoubleResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INPlayMediaPlaybackSpeedUnsupportedReason>): InstanceType<This>;

  initWithDoubleResolutionResult(doubleResolutionResult: INDoubleResolutionResult): this;
}

declare class INDoubleResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: number): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INPlayMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INPlayMediaMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
}

declare class INPaymentRecord extends NSObject implements NSCopying, NSSecureCoding {
  initWithPayeePayerCurrencyAmountPaymentMethodNoteStatusFeeAmount(payee: INPerson | null, payer: INPerson | null, currencyAmount: INCurrencyAmount | null, paymentMethod: INPaymentMethod | null, note: string | null, status: interop.Enum<typeof INPaymentStatus>, feeAmount: INCurrencyAmount | null): this;

  initWithPayeePayerCurrencyAmountPaymentMethodNoteStatus(payee: INPerson | null, payer: INPerson | null, currencyAmount: INCurrencyAmount | null, paymentMethod: INPaymentMethod | null, note: string | null, status: interop.Enum<typeof INPaymentStatus>): this;

  readonly payee: INPerson;

  readonly payer: INPerson;

  readonly currencyAmount: INCurrencyAmount;

  readonly note: string;

  readonly status: interop.Enum<typeof INPaymentStatus>;

  readonly paymentMethod: INPaymentMethod;

  readonly feeAmount: INCurrencyAmount;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INPaymentMethodResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPaymentMethod<This extends abstract new (...args: any) => any>(this: This, resolvedPaymentMethod: INPaymentMethod): InstanceType<This>;

  static disambiguationWithPaymentMethodsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, paymentMethodsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithPaymentMethodToConfirm<This extends abstract new (...args: any) => any>(this: This, paymentMethodToConfirm: INPaymentMethod | null): InstanceType<This>;
}

declare class INPaymentAmountResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPaymentAmount<This extends abstract new (...args: any) => any>(this: This, resolvedPaymentAmount: INPaymentAmount): InstanceType<This>;

  static disambiguationWithPaymentAmountsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, paymentAmountsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithPaymentAmountToConfirm<This extends abstract new (...args: any) => any>(this: This, paymentAmountToConfirm: INPaymentAmount | null): InstanceType<This>;
}

declare class INNotebookItemTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedNotebookItemType<This extends abstract new (...args: any) => any>(this: This, resolvedNotebookItemType: interop.Enum<typeof INNotebookItemType>): InstanceType<This>;

  static disambiguationWithNotebookItemTypesToDisambiguate<This extends abstract new (...args: any) => any>(this: This, notebookItemTypesToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithNotebookItemTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, notebookItemTypeToConfirm: interop.Enum<typeof INNotebookItemType>): InstanceType<This>;
}

declare class INNoteResolutionResult extends INIntentResolutionResult {
  static successWithResolvedNote<This extends abstract new (...args: any) => any>(this: This, resolvedNote: INNote): InstanceType<This>;

  static disambiguationWithNotesToDisambiguate<This extends abstract new (...args: any) => any>(this: This, notesToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithNoteToConfirm<This extends abstract new (...args: any) => any>(this: This, noteToConfirm: INNote | null): InstanceType<This>;
}

declare class INNoteContentTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedNoteContentType<This extends abstract new (...args: any) => any>(this: This, resolvedNoteContentType: interop.Enum<typeof INNoteContentType>): InstanceType<This>;

  static confirmationRequiredWithNoteContentTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, noteContentTypeToConfirm: interop.Enum<typeof INNoteContentType>): InstanceType<This>;
}

declare class INNoteContentResolutionResult extends INIntentResolutionResult {
  static successWithResolvedNoteContent<This extends abstract new (...args: any) => any>(this: This, resolvedNoteContent: INNoteContent): InstanceType<This>;

  static disambiguationWithNoteContentsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, noteContentsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithNoteContentToConfirm<This extends abstract new (...args: any) => any>(this: This, noteContentToConfirm: INNoteContent | null): InstanceType<This>;
}

declare class INNote extends NSObject implements NSCopying, NSSecureCoding {
  initWithTitleContentsGroupNameCreatedDateComponentsModifiedDateComponentsIdentifier(title: INSpeakableString, contents: NSArray<interop.Object> | Array<interop.Object>, groupName: INSpeakableString | null, createdDateComponents: NSDateComponents | null, modifiedDateComponents: NSDateComponents | null, identifier: string | null): this;

  readonly title: INSpeakableString;

  readonly contents: NSArray;

  readonly groupName: INSpeakableString;

  readonly createdDateComponents: NSDateComponents;

  readonly modifiedDateComponents: NSDateComponents;

  readonly identifier: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INMediaSearch extends NSObject implements NSCopying, NSSecureCoding {
  initWithMediaTypeSortOrderMediaNameArtistNameAlbumNameGenreNamesMoodNamesReleaseDateReferenceMediaIdentifier(mediaType: interop.Enum<typeof INMediaItemType>, sortOrder: interop.Enum<typeof INMediaSortOrder>, mediaName: string | null, artistName: string | null, albumName: string | null, genreNames: NSArray<interop.Object> | Array<interop.Object> | null, moodNames: NSArray<interop.Object> | Array<interop.Object> | null, releaseDate: INDateComponentsRange | null, reference: interop.Enum<typeof INMediaReference>, mediaIdentifier: string | null): this;

  readonly mediaType: interop.Enum<typeof INMediaItemType>;

  readonly sortOrder: interop.Enum<typeof INMediaSortOrder>;

  readonly mediaName: string;

  readonly artistName: string;

  readonly albumName: string;

  readonly genreNames: NSArray;

  readonly moodNames: NSArray;

  readonly releaseDate: INDateComponentsRange;

  readonly reference: interop.Enum<typeof INMediaReference>;

  readonly mediaIdentifier: string;

  readonly activityNames: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INLocationSearchTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedLocationSearchType<This extends abstract new (...args: any) => any>(this: This, resolvedLocationSearchType: interop.Enum<typeof INLocationSearchType>): InstanceType<This>;

  static confirmationRequiredWithLocationSearchTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, locationSearchTypeToConfirm: interop.Enum<typeof INLocationSearchType>): InstanceType<This>;
}

declare class INDeleteTasksTaskResolutionResult extends INTaskResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INDeleteTasksTaskUnsupportedReason>): InstanceType<This>;

  initWithTaskResolutionResult(taskResolutionResult: INTaskResolutionResult): this;
}

declare class INTaskResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTask<This extends abstract new (...args: any) => any>(this: This, resolvedTask: INTask): InstanceType<This>;

  static disambiguationWithTasksToDisambiguate<This extends abstract new (...args: any) => any>(this: This, tasksToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithTaskToConfirm<This extends abstract new (...args: any) => any>(this: This, taskToConfirm: INTask | null): InstanceType<This>;
}

declare class INDateSearchTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedDateSearchType<This extends abstract new (...args: any) => any>(this: This, resolvedDateSearchType: interop.Enum<typeof INDateSearchType>): InstanceType<This>;

  static confirmationRequiredWithDateSearchTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, dateSearchTypeToConfirm: interop.Enum<typeof INDateSearchType>): InstanceType<This>;
}

declare class INCurrencyAmountResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCurrencyAmount<This extends abstract new (...args: any) => any>(this: This, resolvedCurrencyAmount: INCurrencyAmount): InstanceType<This>;

  static disambiguationWithCurrencyAmountsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, currencyAmountsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithCurrencyAmountToConfirm<This extends abstract new (...args: any) => any>(this: This, currencyAmountToConfirm: INCurrencyAmount | null): InstanceType<This>;
}

declare class INCarDefrosterResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCarDefroster<This extends abstract new (...args: any) => any>(this: This, resolvedCarDefroster: interop.Enum<typeof INCarDefroster>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INCarDefroster>): InstanceType<This>;

  static confirmationRequiredWithCarDefrosterToConfirm<This extends abstract new (...args: any) => any>(this: This, carDefrosterToConfirm: interop.Enum<typeof INCarDefroster>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INCarDefroster>): InstanceType<This>;
}

declare class INCarAirCirculationModeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCarAirCirculationMode<This extends abstract new (...args: any) => any>(this: This, resolvedCarAirCirculationMode: interop.Enum<typeof INCarAirCirculationMode>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INCarAirCirculationMode>): InstanceType<This>;

  static confirmationRequiredWithCarAirCirculationModeToConfirm<This extends abstract new (...args: any) => any>(this: This, carAirCirculationModeToConfirm: interop.Enum<typeof INCarAirCirculationMode>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INCarAirCirculationMode>): InstanceType<This>;
}

declare class INCar extends NSObject implements NSCopying, NSSecureCoding {
  initWithCarIdentifierDisplayNameYearMakeModelColorHeadUnitSupportedChargingConnectors(carIdentifier: string, displayName: string | null, year: string | null, make: string | null, model: string | null, color: interop.PointerConvertible, headUnit: INCarHeadUnit | null, supportedChargingConnectors: NSArray<interop.Object> | Array<interop.Object>): this;

  readonly carIdentifier: string;

  readonly displayName: string;

  readonly year: string;

  readonly make: string;

  readonly model: string;

  readonly color: interop.Pointer;

  readonly headUnit: INCarHeadUnit;

  readonly supportedChargingConnectors: NSArray;

  setMaximumPowerForChargingConnectorType(power: NSMeasurement, chargingConnectorType: string): void;

  maximumPowerForChargingConnectorType(chargingConnectorType: string): NSMeasurement;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCallRecordTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallRecordType<This extends abstract new (...args: any) => any>(this: This, resolvedCallRecordType: interop.Enum<typeof INCallRecordType>): InstanceType<This>;

  static confirmationRequiredWithCallRecordTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, callRecordTypeToConfirm: interop.Enum<typeof INCallRecordType>): InstanceType<This>;
}

declare class INCallRecordResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallRecord<This extends abstract new (...args: any) => any>(this: This, resolvedCallRecord: INCallRecord): InstanceType<This>;

  static disambiguationWithCallRecordsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, callRecordsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithCallRecordToConfirm<This extends abstract new (...args: any) => any>(this: This, callRecordToConfirm: INCallRecord | null): InstanceType<This>;
}

declare class INCallCapabilityResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallCapability<This extends abstract new (...args: any) => any>(this: This, resolvedCallCapability: interop.Enum<typeof INCallCapability>): InstanceType<This>;

  static confirmationRequiredWithCallCapabilityToConfirm<This extends abstract new (...args: any) => any>(this: This, callCapabilityToConfirm: interop.Enum<typeof INCallCapability>): InstanceType<This>;
}

declare class INBillPayeeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedBillPayee<This extends abstract new (...args: any) => any>(this: This, resolvedBillPayee: INBillPayee): InstanceType<This>;

  static disambiguationWithBillPayeesToDisambiguate<This extends abstract new (...args: any) => any>(this: This, billPayeesToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithBillPayeeToConfirm<This extends abstract new (...args: any) => any>(this: This, billPayeeToConfirm: INBillPayee | null): InstanceType<This>;
}

declare class INBillPayee extends NSObject implements NSCopying, NSSecureCoding {
  initWithNicknameNumberOrganizationName(nickname: INSpeakableString, number: string | null, organizationName: INSpeakableString | null): this;

  readonly nickname: INSpeakableString;

  readonly accountNumber: string;

  readonly organizationName: INSpeakableString;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INBalanceTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedBalanceType<This extends abstract new (...args: any) => any>(this: This, resolvedBalanceType: interop.Enum<typeof INBalanceType>): InstanceType<This>;

  static confirmationRequiredWithBalanceTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, balanceTypeToConfirm: interop.Enum<typeof INBalanceType>): InstanceType<This>;
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

declare class INAddTasksTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INAddTasksTemporalEventTriggerUnsupportedReason>): InstanceType<This>;

  initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: INTemporalEventTriggerResolutionResult): this;
}

declare class INAddTasksTargetTaskListResolutionResult extends INTaskListResolutionResult {
  static confirmationRequiredWithTaskListToConfirmForReason<This extends abstract new (...args: any) => any>(this: This, taskListToConfirm: INTaskList | null, reason: interop.Enum<typeof INAddTasksTargetTaskListConfirmationReason>): InstanceType<This>;

  initWithTaskListResolutionResult(taskListResolutionResult: INTaskListResolutionResult): this;
}

declare class INTaskListResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTaskList<This extends abstract new (...args: any) => any>(this: This, resolvedTaskList: INTaskList): InstanceType<This>;

  static disambiguationWithTaskListsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, taskListsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithTaskListToConfirm<This extends abstract new (...args: any) => any>(this: This, taskListToConfirm: INTaskList | null): InstanceType<This>;
}

declare class INAddMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INAddMediaMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
}

declare class INMediaItemResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMediaItem<This extends abstract new (...args: any) => any>(this: This, resolvedMediaItem: INMediaItem): InstanceType<This>;

  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static disambiguationWithMediaItemsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, mediaItemsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithMediaItemToConfirm<This extends abstract new (...args: any) => any>(this: This, mediaItemToConfirm: INMediaItem | null): InstanceType<This>;
}

declare class INAddMediaMediaDestinationResolutionResult extends INMediaDestinationResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INAddMediaMediaDestinationUnsupportedReason>): InstanceType<This>;

  initWithMediaDestinationResolutionResult(mediaDestinationResolutionResult: INMediaDestinationResolutionResult): this;
}

declare class INSendRideFeedbackIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSendRideFeedbackIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSendRideFeedbackIntentResponseCode>;
}

declare class INCancelRideIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INCancelRideIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INCancelRideIntentResponseCode>;

  cancellationFee: INCurrencyAmount;

  cancellationFeeThreshold: NSDateComponents;
}

declare class INRequestRideIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INRequestRideIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INRequestRideIntentResponseCode>;

  rideStatus: INRideStatus;
}

declare class INGetReservationDetailsIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INGetReservationDetailsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetReservationDetailsIntentResponseCode>;

  get reservations(): NSArray;
  set reservations(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INStartPhotoPlaybackIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INStartPhotoPlaybackIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INStartPhotoPlaybackIntentResponseCode>;

  searchResultsCount: NSNumber;
}

declare class INSearchForPhotosIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchForPhotosIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchForPhotosIntentResponseCode>;

  searchResultsCount: NSNumber;
}

declare class INTransferMoneyIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INTransferMoneyIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INTransferMoneyIntentResponseCode>;

  fromAccount: INPaymentAccount;

  toAccount: INPaymentAccount;

  transactionAmount: INPaymentAmount;

  transactionScheduledDate: INDateComponentsRange;

  transactionNote: string;

  transferFee: INCurrencyAmount;
}

declare class INRequestPaymentIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INRequestPaymentIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INRequestPaymentIntentResponseCode>;

  paymentRecord: INPaymentRecord;
}

declare class INSearchForNotebookItemsIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchForNotebookItemsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchForNotebookItemsIntentResponseCode>;

  get notes(): NSArray;
  set notes(value: NSArray<interop.Object> | Array<interop.Object>);

  get taskLists(): NSArray;
  set taskLists(value: NSArray<interop.Object> | Array<interop.Object>);

  get tasks(): NSArray;
  set tasks(value: NSArray<interop.Object> | Array<interop.Object>);

  sortType: interop.Enum<typeof INSortType>;
}

declare class INDeleteTasksIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INDeleteTasksIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INDeleteTasksIntentResponseCode>;

  get deletedTasks(): NSArray;
  set deletedTasks(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INCreateNoteIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INCreateNoteIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INCreateNoteIntentResponseCode>;

  createdNote: INNote;
}

declare class INAppendToNoteIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INAppendToNoteIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INAppendToNoteIntentResponseCode>;

  note: INNote;
}

declare class INUnsendMessagesIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INUnsendMessagesIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INUnsendMessagesIntentResponseCode>;
}

declare class INSetMessageAttributeIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetMessageAttributeIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetMessageAttributeIntentResponseCode>;
}

declare class INRideFareLineItem extends NSObject implements NSCopying, NSSecureCoding {
  initWithTitlePriceCurrencyCode(title: string, price: NSDecimalNumber, currencyCode: string): this;

  readonly title: string;

  readonly price: NSDecimalNumber;

  readonly currencyCode: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSetRadioStationIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetRadioStationIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetRadioStationIntentResponseCode>;
}

declare class INAddMediaIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INAddMediaIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INAddMediaIntentResponseCode>;
}

declare class INShareFocusStatusIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INShareFocusStatusIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INShareFocusStatusIntentResponseCode>;
}

declare class INPauseWorkoutIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INPauseWorkoutIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INPauseWorkoutIntentResponseCode>;
}

declare class INCancelWorkoutIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INCancelWorkoutIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INCancelWorkoutIntentResponseCode>;
}

declare class INSetSeatSettingsInCarIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetSeatSettingsInCarIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetSeatSettingsInCarIntentResponseCode>;
}

declare class INSetProfileInCarIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetProfileInCarIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetProfileInCarIntentResponseCode>;
}

declare class INSetDefrosterSettingsInCarIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetDefrosterSettingsInCarIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetDefrosterSettingsInCarIntentResponseCode>;
}

declare class INSetCarLockStatusIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetCarLockStatusIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetCarLockStatusIntentResponseCode>;
}

declare class INSetAudioSourceInCarIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetAudioSourceInCarIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetAudioSourceInCarIntentResponseCode>;
}

declare class INGetCarPowerLevelStatusIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INGetCarPowerLevelStatusIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetCarPowerLevelStatusIntentResponseCode>;

  carIdentifier: string;

  fuelPercentRemaining: NSNumber;

  chargePercentRemaining: NSNumber;

  distanceRemaining: NSMeasurement;

  charging: NSNumber;

  minutesToFull: NSNumber;

  maximumDistance: NSMeasurement;

  distanceRemainingElectric: NSMeasurement;

  maximumDistanceElectric: NSMeasurement;

  distanceRemainingFuel: NSMeasurement;

  maximumDistanceFuel: NSMeasurement;

  get consumptionFormulaArguments(): NSDictionary;
  set consumptionFormulaArguments(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get chargingFormulaArguments(): NSDictionary;
  set chargingFormulaArguments(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  dateOfLastStateUpdate: NSDateComponents;

  activeConnector: string;

  maximumBatteryCapacity: NSMeasurement;

  currentBatteryCapacity: NSMeasurement;

  minimumBatteryCapacity: NSMeasurement;
}

declare class INGetCarLockStatusIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INGetCarLockStatusIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetCarLockStatusIntentResponseCode>;

  locked: NSNumber;
}

declare class INActivateCarSignalIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INActivateCarSignalIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INActivateCarSignalIntentResponseCode>;

  signals: interop.Enum<typeof INCarSignalOptions>;
}

declare class INStartCallIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INStartCallIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INStartCallIntentResponseCode>;
}

declare class INSearchCallHistoryIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchCallHistoryIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchCallHistoryIntentResponseCode>;

  get callRecords(): NSArray;
  set callRecords(value: NSArray<interop.Object> | Array<interop.Object>);
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

  parameterValueForParameter(parameter: INParameter): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INSendRideFeedbackIntent extends INIntent {
  initWithRideIdentifier(rideIdentifier: string): this;

  readonly rideIdentifier: string;

  rating: NSNumber;

  tip: INCurrencyAmount;
}

declare class INSnoozeTasksTaskResolutionResult extends INTaskResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSnoozeTasksTaskUnsupportedReason>): InstanceType<This>;

  initWithTaskResolutionResult(taskResolutionResult: INTaskResolutionResult): this;
}

declare class INCancelRideIntent extends INIntent {
  initWithRideIdentifier(rideIdentifier: string): this;

  readonly rideIdentifier: string;
}

declare class INGetRideStatusIntent extends INIntent {
  init(): this;
}

declare class INGetReservationDetailsIntent extends INIntent {
  initWithReservationContainerReferenceReservationItemReferences(reservationContainerReference: INSpeakableString | null, reservationItemReferences: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly reservationContainerReference: INSpeakableString;

  readonly reservationItemReferences: NSArray;
}

declare class INStartPhotoPlaybackIntent extends INIntent {
  initWithDateCreatedLocationCreatedAlbumNameSearchTermsIncludedAttributesExcludedAttributesPeopleInPhoto(dateCreated: INDateComponentsRange | null, locationCreated: CLPlacemark | null, albumName: string | null, searchTerms: NSArray<interop.Object> | Array<interop.Object> | null, includedAttributes: interop.Enum<typeof INPhotoAttributeOptions>, excludedAttributes: interop.Enum<typeof INPhotoAttributeOptions>, peopleInPhoto: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly dateCreated: INDateComponentsRange;

  readonly locationCreated: CLPlacemark;

  readonly albumName: string;

  readonly searchTerms: NSArray;

  readonly searchTermsOperator: interop.Enum<typeof INConditionalOperator>;

  readonly includedAttributes: interop.Enum<typeof INPhotoAttributeOptions>;

  readonly excludedAttributes: interop.Enum<typeof INPhotoAttributeOptions>;

  readonly peopleInPhoto: NSArray;

  readonly peopleInPhotoOperator: interop.Enum<typeof INConditionalOperator>;
}

declare class INSearchForPhotosIntent extends INIntent {
  initWithDateCreatedLocationCreatedAlbumNameSearchTermsIncludedAttributesExcludedAttributesPeopleInPhoto(dateCreated: INDateComponentsRange | null, locationCreated: CLPlacemark | null, albumName: string | null, searchTerms: NSArray<interop.Object> | Array<interop.Object> | null, includedAttributes: interop.Enum<typeof INPhotoAttributeOptions>, excludedAttributes: interop.Enum<typeof INPhotoAttributeOptions>, peopleInPhoto: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly dateCreated: INDateComponentsRange;

  readonly locationCreated: CLPlacemark;

  readonly albumName: string;

  readonly searchTerms: NSArray;

  readonly searchTermsOperator: interop.Enum<typeof INConditionalOperator>;

  readonly includedAttributes: interop.Enum<typeof INPhotoAttributeOptions>;

  readonly excludedAttributes: interop.Enum<typeof INPhotoAttributeOptions>;

  readonly peopleInPhoto: NSArray;

  readonly peopleInPhotoOperator: interop.Enum<typeof INConditionalOperator>;
}

declare class INSearchForBillsIntent extends INIntent {
  initWithBillPayeePaymentDateRangeBillTypeStatusDueDateRange(billPayee: INBillPayee | null, paymentDateRange: INDateComponentsRange | null, billType: interop.Enum<typeof INBillType>, status: interop.Enum<typeof INPaymentStatus>, dueDateRange: INDateComponentsRange | null): this;

  readonly billPayee: INBillPayee;

  readonly paymentDateRange: INDateComponentsRange;

  readonly billType: interop.Enum<typeof INBillType>;

  readonly status: interop.Enum<typeof INPaymentStatus>;

  readonly dueDateRange: INDateComponentsRange;
}

declare class INSearchForAccountsIntent extends INIntent {
  initWithAccountNicknameAccountTypeOrganizationNameRequestedBalanceType(accountNickname: INSpeakableString | null, accountType: interop.Enum<typeof INAccountType>, organizationName: INSpeakableString | null, requestedBalanceType: interop.Enum<typeof INBalanceType>): this;

  readonly accountNickname: INSpeakableString;

  readonly accountType: interop.Enum<typeof INAccountType>;

  readonly organizationName: INSpeakableString;

  readonly requestedBalanceType: interop.Enum<typeof INBalanceType>;
}

declare class INRequestPaymentIntent extends INIntent {
  initWithPayerCurrencyAmountNote(payer: INPerson | null, currencyAmount: INCurrencyAmount | null, note: string | null): this;

  readonly payer: INPerson;

  readonly currencyAmount: INCurrencyAmount;

  readonly note: string;
}

declare class INPayBillIntent extends INIntent {
  initWithBillPayeeFromAccountTransactionAmountTransactionScheduledDateTransactionNoteBillTypeDueDate(billPayee: INBillPayee | null, fromAccount: INPaymentAccount | null, transactionAmount: INPaymentAmount | null, transactionScheduledDate: INDateComponentsRange | null, transactionNote: string | null, billType: interop.Enum<typeof INBillType>, dueDate: INDateComponentsRange | null): this;

  readonly billPayee: INBillPayee;

  readonly fromAccount: INPaymentAccount;

  readonly transactionAmount: INPaymentAmount;

  readonly transactionScheduledDate: INDateComponentsRange;

  readonly transactionNote: string;

  readonly billType: interop.Enum<typeof INBillType>;

  readonly dueDate: INDateComponentsRange;
}

declare class INSnoozeTasksIntent extends INIntent {
  initWithTasksNextTriggerTimeAll(tasks: NSArray<interop.Object> | Array<interop.Object> | null, nextTriggerTime: INDateComponentsRange | null, all: NSNumber | null): this;

  readonly tasks: NSArray;

  readonly nextTriggerTime: INDateComponentsRange;

  readonly all: NSNumber;
}

declare class INSetTaskAttributeIntent extends INIntent {
  initWithTargetTaskTaskTitleStatusPrioritySpatialEventTriggerTemporalEventTrigger(targetTask: INTask | null, taskTitle: INSpeakableString | null, status: interop.Enum<typeof INTaskStatus>, priority: interop.Enum<typeof INTaskPriority>, spatialEventTrigger: INSpatialEventTrigger | null, temporalEventTrigger: INTemporalEventTrigger | null): this;

  readonly targetTask: INTask;

  readonly taskTitle: INSpeakableString;

  readonly status: interop.Enum<typeof INTaskStatus>;

  readonly priority: interop.Enum<typeof INTaskPriority>;

  readonly spatialEventTrigger: INSpatialEventTrigger;

  readonly temporalEventTrigger: INTemporalEventTrigger;

  initWithTargetTaskStatusSpatialEventTriggerTemporalEventTrigger(targetTask: INTask | null, status: interop.Enum<typeof INTaskStatus>, spatialEventTrigger: INSpatialEventTrigger | null, temporalEventTrigger: INTemporalEventTrigger | null): this;
}

declare class INSearchForNotebookItemsIntent extends INIntent {
  initWithTitleContentItemTypeStatusLocationLocationSearchTypeDateTimeDateSearchTypeTemporalEventTriggerTypesTaskPriorityNotebookItemIdentifier(title: INSpeakableString | null, content: string | null, itemType: interop.Enum<typeof INNotebookItemType>, status: interop.Enum<typeof INTaskStatus>, location: CLPlacemark | null, locationSearchType: interop.Enum<typeof INLocationSearchType>, dateTime: INDateComponentsRange | null, dateSearchType: interop.Enum<typeof INDateSearchType>, temporalEventTriggerTypes: interop.Enum<typeof INTemporalEventTriggerTypeOptions>, taskPriority: interop.Enum<typeof INTaskPriority>, notebookItemIdentifier: string | null): this;

  readonly title: INSpeakableString;

  readonly content: string;

  readonly itemType: interop.Enum<typeof INNotebookItemType>;

  readonly status: interop.Enum<typeof INTaskStatus>;

  readonly location: CLPlacemark;

  readonly locationSearchType: interop.Enum<typeof INLocationSearchType>;

  readonly dateTime: INDateComponentsRange;

  readonly dateSearchType: interop.Enum<typeof INDateSearchType>;

  readonly temporalEventTriggerTypes: interop.Enum<typeof INTemporalEventTriggerTypeOptions>;

  readonly taskPriority: interop.Enum<typeof INTaskPriority>;

  readonly notebookItemIdentifier: string;

  initWithTitleContentItemTypeStatusLocationLocationSearchTypeDateTimeDateSearchType(title: INSpeakableString | null, content: string | null, itemType: interop.Enum<typeof INNotebookItemType>, status: interop.Enum<typeof INTaskStatus>, location: CLPlacemark | null, locationSearchType: interop.Enum<typeof INLocationSearchType>, dateTime: INDateComponentsRange | null, dateSearchType: interop.Enum<typeof INDateSearchType>): this;

  initWithTitleContentItemTypeStatusLocationLocationSearchTypeDateTimeDateSearchTypeNotebookItemIdentifier(title: INSpeakableString | null, content: string | null, itemType: interop.Enum<typeof INNotebookItemType>, status: interop.Enum<typeof INTaskStatus>, location: CLPlacemark | null, locationSearchType: interop.Enum<typeof INLocationSearchType>, dateTime: INDateComponentsRange | null, dateSearchType: interop.Enum<typeof INDateSearchType>, notebookItemIdentifier: string | null): this;
}

declare class INCreateTaskListIntent extends INIntent {
  initWithTitleTaskTitlesGroupName(title: INSpeakableString | null, taskTitles: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null): this;

  readonly title: INSpeakableString;

  readonly taskTitles: NSArray;

  readonly groupName: INSpeakableString;
}

declare class INSetMessageAttributeIntent extends INIntent {
  initWithIdentifiersAttribute(identifiers: NSArray<interop.Object> | Array<interop.Object> | null, attribute: interop.Enum<typeof INMessageAttribute>): this;

  readonly identifiers: NSArray;

  readonly attribute: interop.Enum<typeof INMessageAttribute>;
}

declare class INSearchForMessagesIntent extends INIntent {
  initWithRecipientsSendersSearchTermsAttributesDateTimeRangeIdentifiersNotificationIdentifiersSpeakableGroupNamesConversationIdentifiers(recipients: NSArray<interop.Object> | Array<interop.Object> | null, senders: NSArray<interop.Object> | Array<interop.Object> | null, searchTerms: NSArray<interop.Object> | Array<interop.Object> | null, attributes: interop.Enum<typeof INMessageAttributeOptions>, dateTimeRange: INDateComponentsRange | null, identifiers: NSArray<interop.Object> | Array<interop.Object> | null, notificationIdentifiers: NSArray<interop.Object> | Array<interop.Object> | null, speakableGroupNames: NSArray<interop.Object> | Array<interop.Object> | null, conversationIdentifiers: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly recipients: NSArray;

  readonly recipientsOperator: interop.Enum<typeof INConditionalOperator>;

  readonly senders: NSArray;

  readonly sendersOperator: interop.Enum<typeof INConditionalOperator>;

  readonly searchTerms: NSArray;

  readonly searchTermsOperator: interop.Enum<typeof INConditionalOperator>;

  readonly attributes: interop.Enum<typeof INMessageAttributeOptions>;

  readonly dateTimeRange: INDateComponentsRange;

  readonly identifiers: NSArray;

  readonly identifiersOperator: interop.Enum<typeof INConditionalOperator>;

  readonly notificationIdentifiers: NSArray;

  readonly notificationIdentifiersOperator: interop.Enum<typeof INConditionalOperator>;

  readonly speakableGroupNames: NSArray;

  readonly speakableGroupNamesOperator: interop.Enum<typeof INConditionalOperator>;

  readonly conversationIdentifiers: NSArray;

  readonly conversationIdentifiersOperator: interop.Enum<typeof INConditionalOperator>;

  initWithRecipientsSendersSearchTermsAttributesDateTimeRangeIdentifiersNotificationIdentifiersGroupNames(recipients: NSArray<interop.Object> | Array<interop.Object> | null, senders: NSArray<interop.Object> | Array<interop.Object> | null, searchTerms: NSArray<interop.Object> | Array<interop.Object> | null, attributes: interop.Enum<typeof INMessageAttributeOptions>, dateTimeRange: INDateComponentsRange | null, identifiers: NSArray<interop.Object> | Array<interop.Object> | null, notificationIdentifiers: NSArray<interop.Object> | Array<interop.Object> | null, groupNames: NSArray<interop.Object> | Array<interop.Object> | null): this;

  initWithRecipientsSendersSearchTermsAttributesDateTimeRangeIdentifiersNotificationIdentifiersSpeakableGroupNames(recipients: NSArray<interop.Object> | Array<interop.Object> | null, senders: NSArray<interop.Object> | Array<interop.Object> | null, searchTerms: NSArray<interop.Object> | Array<interop.Object> | null, attributes: interop.Enum<typeof INMessageAttributeOptions>, dateTimeRange: INDateComponentsRange | null, identifiers: NSArray<interop.Object> | Array<interop.Object> | null, notificationIdentifiers: NSArray<interop.Object> | Array<interop.Object> | null, speakableGroupNames: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly groupNames: NSArray;

  readonly groupNamesOperator: interop.Enum<typeof INConditionalOperator>;
}

declare class INUpdateMediaAffinityIntent extends INIntent {
  initWithMediaItemsMediaSearchAffinityType(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaSearch: INMediaSearch | null, affinityType: interop.Enum<typeof INMediaAffinityType>): this;

  readonly mediaItems: NSArray;

  readonly mediaSearch: INMediaSearch;

  readonly affinityType: interop.Enum<typeof INMediaAffinityType>;
}

declare class INSearchForMediaIntent extends INIntent {
  initWithMediaItemsMediaSearch(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaSearch: INMediaSearch | null): this;

  readonly mediaItems: NSArray;

  readonly mediaSearch: INMediaSearch;
}

declare class INPlayMediaIntent extends INIntent {
  initWithMediaItemsMediaContainerPlayShuffledPlaybackRepeatModeResumePlaybackPlaybackQueueLocationPlaybackSpeedMediaSearch(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaContainer: INMediaItem | null, playShuffled: NSNumber | null, playbackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>, resumePlayback: NSNumber | null, playbackQueueLocation: interop.Enum<typeof INPlaybackQueueLocation>, playbackSpeed: NSNumber | null, mediaSearch: INMediaSearch | null): this;

  readonly mediaItems: NSArray;

  readonly mediaContainer: INMediaItem;

  readonly playShuffled: NSNumber;

  readonly playbackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>;

  readonly resumePlayback: NSNumber;

  readonly playbackQueueLocation: interop.Enum<typeof INPlaybackQueueLocation>;

  readonly playbackSpeed: NSNumber;

  readonly mediaSearch: INMediaSearch;

  initWithMediaItemsMediaContainerPlayShuffledPlaybackRepeatModeResumePlayback(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaContainer: INMediaItem | null, playShuffled: NSNumber | null, playbackRepeatMode: interop.Enum<typeof INPlaybackRepeatMode>, resumePlayback: NSNumber | null): this;
}

declare class INShareFocusStatusIntent extends INIntent {
  initWithFocusStatus(focusStatus: INFocusStatus | null): this;

  readonly focusStatus: INFocusStatus;
}

declare class INStartWorkoutIntent extends INIntent {
  initWithWorkoutNameGoalValueWorkoutGoalUnitTypeWorkoutLocationTypeIsOpenEnded(workoutName: INSpeakableString | null, goalValue: NSNumber | null, workoutGoalUnitType: interop.Enum<typeof INWorkoutGoalUnitType>, workoutLocationType: interop.Enum<typeof INWorkoutLocationType>, isOpenEnded: NSNumber | null): this;

  readonly workoutName: INSpeakableString;

  readonly goalValue: NSNumber;

  readonly workoutGoalUnitType: interop.Enum<typeof INWorkoutGoalUnitType>;

  readonly workoutLocationType: interop.Enum<typeof INWorkoutLocationType>;

  readonly isOpenEnded: NSNumber;
}

declare class INResumeWorkoutIntent extends INIntent {
  initWithWorkoutName(workoutName: INSpeakableString | null): this;

  readonly workoutName: INSpeakableString;
}

declare class INPauseWorkoutIntent extends INIntent {
  initWithWorkoutName(workoutName: INSpeakableString | null): this;

  readonly workoutName: INSpeakableString;
}

declare class INEndWorkoutIntent extends INIntent {
  initWithWorkoutName(workoutName: INSpeakableString | null): this;

  readonly workoutName: INSpeakableString;
}

declare class INCancelWorkoutIntent extends INIntent {
  initWithWorkoutName(workoutName: INSpeakableString | null): this;

  readonly workoutName: INSpeakableString;
}

declare class INSetSeatSettingsInCarIntent extends INIntent {
  initWithEnableHeatingEnableCoolingEnableMassageSeatLevelRelativeLevelSettingCarName(enableHeating: NSNumber | null, enableCooling: NSNumber | null, enableMassage: NSNumber | null, seat: interop.Enum<typeof INCarSeat>, level: NSNumber | null, relativeLevelSetting: interop.Enum<typeof INRelativeSetting>, carName: INSpeakableString | null): this;

  readonly enableHeating: NSNumber;

  readonly enableCooling: NSNumber;

  readonly enableMassage: NSNumber;

  readonly seat: interop.Enum<typeof INCarSeat>;

  readonly level: NSNumber;

  readonly relativeLevelSetting: interop.Enum<typeof INRelativeSetting>;

  readonly carName: INSpeakableString;

  initWithEnableHeatingEnableCoolingEnableMassageSeatLevelRelativeLevelSetting(enableHeating: NSNumber | null, enableCooling: NSNumber | null, enableMassage: NSNumber | null, seat: interop.Enum<typeof INCarSeat>, level: NSNumber | null, relativeLevelSetting: interop.Enum<typeof INRelativeSetting>): this;
}

declare class INSetProfileInCarIntent extends INIntent {
  initWithProfileNumberProfileNameDefaultProfileCarName(profileNumber: NSNumber | null, profileName: string | null, defaultProfile: NSNumber | null, carName: INSpeakableString | null): this;

  readonly profileNumber: NSNumber;

  readonly profileName: string;

  readonly defaultProfile: NSNumber;

  readonly carName: INSpeakableString;

  initWithProfileNumberProfileLabelDefaultProfile(profileNumber: NSNumber | null, profileLabel: string | null, defaultProfile: NSNumber | null): this;

  initWithProfileNumberProfileNameDefaultProfile(profileNumber: NSNumber | null, profileName: string | null, defaultProfile: NSNumber | null): this;

  readonly profileLabel: string;
}

declare class INSetDefrosterSettingsInCarIntent extends INIntent {
  initWithEnableDefrosterCarName(enable: NSNumber | null, defroster: interop.Enum<typeof INCarDefroster>, carName: INSpeakableString | null): this;

  readonly enable: NSNumber;

  readonly defroster: interop.Enum<typeof INCarDefroster>;

  readonly carName: INSpeakableString;

  initWithEnableDefroster(enable: NSNumber | null, defroster: interop.Enum<typeof INCarDefroster>): this;
}

declare class INSetClimateSettingsInCarIntent extends INIntent {
  initWithEnableFanEnableAirConditionerEnableClimateControlEnableAutoModeAirCirculationModeFanSpeedIndexFanSpeedPercentageRelativeFanSpeedSettingTemperatureRelativeTemperatureSettingClimateZoneCarName(enableFan: NSNumber | null, enableAirConditioner: NSNumber | null, enableClimateControl: NSNumber | null, enableAutoMode: NSNumber | null, airCirculationMode: interop.Enum<typeof INCarAirCirculationMode>, fanSpeedIndex: NSNumber | null, fanSpeedPercentage: NSNumber | null, relativeFanSpeedSetting: interop.Enum<typeof INRelativeSetting>, temperature: NSMeasurement | null, relativeTemperatureSetting: interop.Enum<typeof INRelativeSetting>, climateZone: interop.Enum<typeof INCarSeat>, carName: INSpeakableString | null): this;

  readonly enableFan: NSNumber;

  readonly enableAirConditioner: NSNumber;

  readonly enableClimateControl: NSNumber;

  readonly enableAutoMode: NSNumber;

  readonly airCirculationMode: interop.Enum<typeof INCarAirCirculationMode>;

  readonly fanSpeedIndex: NSNumber;

  readonly fanSpeedPercentage: NSNumber;

  readonly relativeFanSpeedSetting: interop.Enum<typeof INRelativeSetting>;

  readonly temperature: NSMeasurement;

  readonly relativeTemperatureSetting: interop.Enum<typeof INRelativeSetting>;

  readonly climateZone: interop.Enum<typeof INCarSeat>;

  readonly carName: INSpeakableString;

  initWithEnableFanEnableAirConditionerEnableClimateControlEnableAutoModeAirCirculationModeFanSpeedIndexFanSpeedPercentageRelativeFanSpeedSettingTemperatureRelativeTemperatureSettingClimateZone(enableFan: NSNumber | null, enableAirConditioner: NSNumber | null, enableClimateControl: NSNumber | null, enableAutoMode: NSNumber | null, airCirculationMode: interop.Enum<typeof INCarAirCirculationMode>, fanSpeedIndex: NSNumber | null, fanSpeedPercentage: NSNumber | null, relativeFanSpeedSetting: interop.Enum<typeof INRelativeSetting>, temperature: NSMeasurement | null, relativeTemperatureSetting: interop.Enum<typeof INRelativeSetting>, climateZone: interop.Enum<typeof INCarSeat>): this;
}

declare class INSetAudioSourceInCarIntent extends INIntent {
  initWithAudioSourceRelativeAudioSourceReference(audioSource: interop.Enum<typeof INCarAudioSource>, relativeAudioSourceReference: interop.Enum<typeof INRelativeReference>): this;

  readonly audioSource: interop.Enum<typeof INCarAudioSource>;

  readonly relativeAudioSourceReference: interop.Enum<typeof INRelativeReference>;
}

declare class INListCarsIntent extends INIntent {
  init(): this;
}

declare class INGetCarPowerLevelStatusIntent extends INIntent {
  initWithCarName(carName: INSpeakableString | null): this;

  readonly carName: INSpeakableString;
}

declare class INTemperatureResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTemperature<This extends abstract new (...args: any) => any>(this: This, resolvedTemperature: NSMeasurement): InstanceType<This>;

  static disambiguationWithTemperaturesToDisambiguate<This extends abstract new (...args: any) => any>(this: This, temperaturesToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithTemperatureToConfirm<This extends abstract new (...args: any) => any>(this: This, temperatureToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INSearchCallHistoryIntent extends INIntent {
  initWithDateCreatedRecipientCallCapabilitiesCallTypesUnseen(dateCreated: INDateComponentsRange | null, recipient: INPerson | null, callCapabilities: interop.Enum<typeof INCallCapabilityOptions>, callTypes: interop.Enum<typeof INCallRecordTypeOptions>, unseen: NSNumber | null): this;

  readonly dateCreated: INDateComponentsRange;

  readonly recipient: INPerson;

  readonly callCapabilities: interop.Enum<typeof INCallCapabilityOptions>;

  readonly callTypes: interop.Enum<typeof INCallRecordTypeOptions>;

  readonly unseen: NSNumber;

  initWithCallTypeDateCreatedRecipientCallCapabilities(callType: interop.Enum<typeof INCallRecordType>, dateCreated: INDateComponentsRange | null, recipient: INPerson | null, callCapabilities: interop.Enum<typeof INCallCapabilityOptions>): this;

  readonly callType: interop.Enum<typeof INCallRecordType>;
}

declare class INAnswerCallIntent extends INIntent {
  initWithAudioRouteCallIdentifier(audioRoute: interop.Enum<typeof INCallAudioRoute>, callIdentifier: string | null): this;

  readonly audioRoute: interop.Enum<typeof INCallAudioRoute>;

  readonly callIdentifier: string;
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

  shortcutAvailability: interop.Enum<typeof INShortcutAvailabilityOptions>;

  donationMetadata: INIntentDonationMetadata;

  setImageForParameterNamed(image: INImage | null, parameterName: string): void;

  imageForParameterNamed(parameterName: string): INImage | null;

  keyImage(): INImage | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INPriceRange extends NSObject implements NSCopying, NSSecureCoding {
  initWithRangeBetweenPriceAndPriceCurrencyCode(firstPrice: NSDecimalNumber, secondPrice: NSDecimalNumber, currencyCode: string): this;

  initWithMaximumPriceCurrencyCode(maximumPrice: NSDecimalNumber, currencyCode: string): this;

  initWithMinimumPriceCurrencyCode(minimumPrice: NSDecimalNumber, currencyCode: string): this;

  initWithPriceCurrencyCode(price: NSDecimalNumber, currencyCode: string): this;

  readonly minimumPrice: NSDecimalNumber;

  readonly maximumPrice: NSDecimalNumber;

  readonly currencyCode: string;

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

declare class INGetVisualCodeIntent extends INIntent {
  initWithVisualCodeType(visualCodeType: interop.Enum<typeof INVisualCodeType>): this;

  readonly visualCodeType: interop.Enum<typeof INVisualCodeType>;
}

declare class INMediaDestinationResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMediaDestination<This extends abstract new (...args: any) => any>(this: This, resolvedMediaDestination: INMediaDestination): InstanceType<This>;

  static disambiguationWithMediaDestinationsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, mediaDestinationsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithMediaDestinationToConfirm<This extends abstract new (...args: any) => any>(this: This, mediaDestinationToConfirm: INMediaDestination | null): InstanceType<This>;
}

declare class INSaveProfileInCarIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSaveProfileInCarIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSaveProfileInCarIntentResponseCode>;
}

declare class INBooleanResolutionResult extends INIntentResolutionResult {
  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: boolean): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: NSNumber | null): InstanceType<This>;
}

declare class INSetTaskAttributeIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetTaskAttributeIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetTaskAttributeIntentResponseCode>;

  modifiedTask: INTask;
}

declare class INStartCallContactResolutionResult extends INPersonResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INStartCallContactUnsupportedReason>): InstanceType<This>;

  initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult): this;
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

declare class INParameter extends NSObject implements NSSecureCoding, NSCopying {
  static parameterForClassKeyPath<This extends abstract new (...args: any) => any>(this: This, aClass: interop.Object, keyPath: string): InstanceType<This>;

  readonly parameterClass: interop.Object;

  readonly parameterKeyPath: string;

  isEqualToParameter(parameter: INParameter): boolean;

  setIndexForSubKeyPath(index: number, subKeyPath: string): void;

  indexForSubKeyPath(subKeyPath: string): number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INRideDriver extends INPerson implements NSCopying, NSSecureCoding {
  readonly rating: string;

  readonly phoneNumber: string;

  initWithPhoneNumberNameComponentsDisplayNameImageRating(phoneNumber: string, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, rating: string | null): this;

  initWithPersonHandleNameComponentsDisplayNameImageRatingPhoneNumber(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents | null, displayName: string | null, image: INImage | null, rating: string | null, phoneNumber: string | null): this;

  initWithHandleDisplayNameImageRatingPhoneNumber(handle: string, displayName: string | null, image: INImage | null, rating: string | null, phoneNumber: string | null): this;

  initWithHandleNameComponentsImageRatingPhoneNumber(handle: string, nameComponents: NSPersonNameComponents, image: INImage | null, rating: string | null, phoneNumber: string | null): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INListRideOptionsIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INListRideOptionsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INListRideOptionsIntentResponseCode>;

  get rideOptions(): NSArray;
  set rideOptions(value: NSArray<interop.Object> | Array<interop.Object>);

  get paymentMethods(): NSArray;
  set paymentMethods(value: NSArray<interop.Object> | Array<interop.Object>);

  expirationDate: NSDate;
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

declare class INURLResolutionResult extends INIntentResolutionResult {
  static successWithResolvedURL<This extends abstract new (...args: any) => any>(this: This, resolvedURL: NSURL): InstanceType<This>;

  static disambiguationWithURLsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, urlsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithURLToConfirm<This extends abstract new (...args: any) => any>(this: This, urlToConfirm: NSURL | null): InstanceType<This>;
}

declare class INDeleteTasksTaskListResolutionResult extends INTaskListResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INDeleteTasksTaskListUnsupportedReason>): InstanceType<This>;

  initWithTaskListResolutionResult(taskListResolutionResult: INTaskListResolutionResult): this;
}

declare class INMessageAttributeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMessageAttribute<This extends abstract new (...args: any) => any>(this: This, resolvedMessageAttribute: interop.Enum<typeof INMessageAttribute>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INMessageAttribute>): InstanceType<This>;

  static confirmationRequiredWithMessageAttributeToConfirm<This extends abstract new (...args: any) => any>(this: This, messageAttributeToConfirm: interop.Enum<typeof INMessageAttribute>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INMessageAttribute>): InstanceType<This>;
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

declare class INVisualCodeTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedVisualCodeType<This extends abstract new (...args: any) => any>(this: This, resolvedVisualCodeType: interop.Enum<typeof INVisualCodeType>): InstanceType<This>;

  static confirmationRequiredWithVisualCodeTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, visualCodeTypeToConfirm: interop.Enum<typeof INVisualCodeType>): InstanceType<This>;
}

declare class INUpdateMediaAffinityIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INUpdateMediaAffinityIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INUpdateMediaAffinityIntentResponseCode>;
}

declare class INStartWorkoutIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INStartWorkoutIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INStartWorkoutIntentResponseCode>;
}

declare class INSetRadioStationIntent extends INIntent {
  initWithRadioTypeFrequencyStationNameChannelPresetNumber(radioType: interop.Enum<typeof INRadioType>, frequency: NSNumber | null, stationName: string | null, channel: string | null, presetNumber: NSNumber | null): this;

  readonly radioType: interop.Enum<typeof INRadioType>;

  readonly frequency: NSNumber;

  readonly stationName: string;

  readonly channel: string;

  readonly presetNumber: NSNumber;
}

declare class INSendPaymentIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSendPaymentIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSendPaymentIntentResponseCode>;

  paymentRecord: INPaymentRecord;
}

declare class INMassResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMass<This extends abstract new (...args: any) => any>(this: This, resolvedMass: NSMeasurement): InstanceType<This>;

  static disambiguationWithMassToDisambiguate<This extends abstract new (...args: any) => any>(this: This, massToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithMassToConfirm<This extends abstract new (...args: any) => any>(this: This, massToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INPaymentAccount extends NSObject implements NSCopying, NSSecureCoding {
  initWithNicknameNumberAccountTypeOrganizationNameBalanceSecondaryBalance(nickname: INSpeakableString, number: string | null, accountType: interop.Enum<typeof INAccountType>, organizationName: INSpeakableString | null, balance: INBalanceAmount | null, secondaryBalance: INBalanceAmount | null): this;

  initWithNicknameNumberAccountTypeOrganizationName(nickname: INSpeakableString, number: string | null, accountType: interop.Enum<typeof INAccountType>, organizationName: INSpeakableString | null): this;

  readonly nickname: INSpeakableString;

  readonly accountNumber: string;

  readonly accountType: interop.Enum<typeof INAccountType>;

  readonly organizationName: INSpeakableString;

  readonly balance: INBalanceAmount;

  readonly secondaryBalance: INBalanceAmount;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSaveProfileInCarIntent extends INIntent {
  initWithProfileNumberProfileName(profileNumber: NSNumber | null, profileName: string | null): this;

  readonly profileNumber: NSNumber;

  readonly profileName: string;

  initWithProfileNumberProfileLabel(profileNumber: NSNumber | null, profileLabel: string | null): this;

  readonly profileLabel: string;
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

declare class INCarSeatResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCarSeat<This extends abstract new (...args: any) => any>(this: This, resolvedCarSeat: interop.Enum<typeof INCarSeat>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INCarSeat>): InstanceType<This>;

  static confirmationRequiredWithCarSeatToConfirm<This extends abstract new (...args: any) => any>(this: This, carSeatToConfirm: interop.Enum<typeof INCarSeat>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INCarSeat>): InstanceType<This>;
}

declare class INAddMediaIntent extends INIntent {
  initWithMediaItemsMediaSearchMediaDestination(mediaItems: NSArray<interop.Object> | Array<interop.Object> | null, mediaSearch: INMediaSearch | null, mediaDestination: INMediaDestination | null): this;

  readonly mediaItems: NSArray;

  readonly mediaSearch: INMediaSearch;

  readonly mediaDestination: INMediaDestination;
}

declare class INStartCallIntent extends INIntent {
  initWithCallRecordFilterCallRecordToCallBackAudioRouteDestinationTypeContactsCallCapability(callRecordFilter: INCallRecordFilter | null, callRecordToCallBack: INCallRecord | null, audioRoute: interop.Enum<typeof INCallAudioRoute>, destinationType: interop.Enum<typeof INCallDestinationType>, contacts: NSArray<interop.Object> | Array<interop.Object> | null, callCapability: interop.Enum<typeof INCallCapability>): this;

  readonly callRecordFilter: INCallRecordFilter;

  readonly callRecordToCallBack: INCallRecord;

  readonly audioRoute: interop.Enum<typeof INCallAudioRoute>;

  readonly destinationType: interop.Enum<typeof INCallDestinationType>;

  readonly contacts: NSArray;

  readonly callCapability: interop.Enum<typeof INCallCapability>;

  initWithAudioRouteDestinationTypeContactsRecordTypeForRedialingCallCapability(audioRoute: interop.Enum<typeof INCallAudioRoute>, destinationType: interop.Enum<typeof INCallDestinationType>, contacts: NSArray<interop.Object> | Array<interop.Object> | null, recordTypeForRedialing: interop.Enum<typeof INCallRecordType>, callCapability: interop.Enum<typeof INCallCapability>): this;

  readonly recordTypeForRedialing: interop.Enum<typeof INCallRecordType>;
}

declare class INTemporalEventTriggerResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTemporalEventTrigger<This extends abstract new (...args: any) => any>(this: This, resolvedTemporalEventTrigger: INTemporalEventTrigger): InstanceType<This>;

  static disambiguationWithTemporalEventTriggersToDisambiguate<This extends abstract new (...args: any) => any>(this: This, temporalEventTriggersToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithTemporalEventTriggerToConfirm<This extends abstract new (...args: any) => any>(this: This, temporalEventTriggerToConfirm: INTemporalEventTrigger | null): InstanceType<This>;
}

declare class INDeleteTasksIntent extends INIntent {
  initWithTaskListTasksAll(taskList: INTaskList | null, tasks: NSArray<interop.Object> | Array<interop.Object> | null, all: NSNumber | null): this;

  readonly taskList: INTaskList;

  readonly tasks: NSArray;

  readonly all: NSNumber;
}

declare class INSetClimateSettingsInCarIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSetClimateSettingsInCarIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSetClimateSettingsInCarIntentResponseCode>;
}

declare class INPaymentStatusResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPaymentStatus<This extends abstract new (...args: any) => any>(this: This, resolvedPaymentStatus: interop.Enum<typeof INPaymentStatus>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INPaymentStatus>): InstanceType<This>;

  static confirmationRequiredWithPaymentStatusToConfirm<This extends abstract new (...args: any) => any>(this: This, paymentStatusToConfirm: interop.Enum<typeof INPaymentStatus>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INPaymentStatus>): InstanceType<This>;
}

declare class INGetRideStatusIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INGetRideStatusIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetRideStatusIntentResponseCode>;

  rideStatus: INRideStatus;
}

declare class INGetRestaurantGuestIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INGetRestaurantGuestIntentResponseCode>, userActivity: NSUserActivity | null): this;

  guest: INRestaurantGuest;

  guestDisplayPreferences: INRestaurantGuestDisplayPreferences;

  readonly code: interop.Enum<typeof INGetRestaurantGuestIntentResponseCode>;
}

declare class INSendPaymentPayeeResolutionResult extends INPersonResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSendPaymentPayeeUnsupportedReason>): InstanceType<This>;

  initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult): this;
}

declare class INSendMessageIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSendMessageIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSendMessageIntentResponseCode>;

  get sentMessages(): NSArray;
  set sentMessages(value: NSArray<interop.Object> | Array<interop.Object>);

  sentMessage: INMessage;
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

declare class INStartVideoCallIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INStartVideoCallIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INStartVideoCallIntentResponseCode>;
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

declare class INRelevanceProvider extends NSObject implements NSCopying, NSSecureCoding {
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

declare class INDateComponentsRangeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedDateComponentsRange<This extends abstract new (...args: any) => any>(this: This, resolvedDateComponentsRange: INDateComponentsRange): InstanceType<This>;

  static disambiguationWithDateComponentsRangesToDisambiguate<This extends abstract new (...args: any) => any>(this: This, dateComponentsRangesToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithDateComponentsRangeToConfirm<This extends abstract new (...args: any) => any>(this: This, dateComponentsRangeToConfirm: INDateComponentsRange | null): InstanceType<This>;
}

declare class INMessageAttributeOptionsResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMessageAttributeOptions<This extends abstract new (...args: any) => any>(this: This, resolvedMessageAttributeOptions: interop.Enum<typeof INMessageAttributeOptions>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INMessageAttributeOptions>): InstanceType<This>;

  static confirmationRequiredWithMessageAttributeOptionsToConfirm<This extends abstract new (...args: any) => any>(this: This, messageAttributeOptionsToConfirm: interop.Enum<typeof INMessageAttributeOptions>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INMessageAttributeOptions>): InstanceType<This>;
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

declare class INPaymentAccountResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPaymentAccount<This extends abstract new (...args: any) => any>(this: This, resolvedPaymentAccount: INPaymentAccount): InstanceType<This>;

  static disambiguationWithPaymentAccountsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, paymentAccountsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithPaymentAccountToConfirm<This extends abstract new (...args: any) => any>(this: This, paymentAccountToConfirm: INPaymentAccount | null): InstanceType<This>;
}

declare class INSnoozeTasksIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSnoozeTasksIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSnoozeTasksIntentResponseCode>;

  get snoozedTasks(): NSArray;
  set snoozedTasks(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INStartAudioCallIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INStartAudioCallIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INStartAudioCallIntentResponseCode>;
}

declare class INPlayMediaIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INPlayMediaIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INPlayMediaIntentResponseCode>;

  get nowPlayingInfo(): NSDictionary;
  set nowPlayingInfo(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);
}

declare class INSendPaymentIntent extends INIntent {
  initWithPayeeCurrencyAmountNote(payee: INPerson | null, currencyAmount: INCurrencyAmount | null, note: string | null): this;

  readonly payee: INPerson;

  readonly currencyAmount: INCurrencyAmount;

  readonly note: string;
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

declare class INRideOption extends NSObject implements NSCopying, NSSecureCoding {
  initWithNameEstimatedPickupDate(name: string, estimatedPickupDate: NSDate): this;

  initWithCoder(decoder: NSCoder): this;

  name: string;

  estimatedPickupDate: NSDate;

  priceRange: INPriceRange;

  usesMeteredFare: NSNumber;

  disclaimerMessage: string;

  get availablePartySizeOptions(): NSArray;
  set availablePartySizeOptions(value: NSArray<interop.Object> | Array<interop.Object>);

  availablePartySizeOptionsSelectionPrompt: string;

  specialPricing: string;

  specialPricingBadgeImage: INImage;

  get fareLineItems(): NSArray;
  set fareLineItems(value: NSArray<interop.Object> | Array<interop.Object>);

  userActivityForBookingInApplication: NSUserActivity;

  identifier: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class INFocusStatus extends NSObject implements NSCopying, NSSecureCoding {
  initWithIsFocused(isFocused: NSNumber | null): this;

  readonly isFocused: NSNumber;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INGetVisualCodeIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INGetVisualCodeIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INGetVisualCodeIntentResponseCode>;

  visualCodeImage: INImage;
}

declare class INRelativeReferenceResolutionResult extends INIntentResolutionResult {
  static successWithResolvedRelativeReference<This extends abstract new (...args: any) => any>(this: This, resolvedRelativeReference: interop.Enum<typeof INRelativeReference>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INRelativeReference>): InstanceType<This>;

  static confirmationRequiredWithRelativeReferenceToConfirm<This extends abstract new (...args: any) => any>(this: This, relativeReferenceToConfirm: interop.Enum<typeof INRelativeReference>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INRelativeReference>): InstanceType<This>;
}

declare class INAddTasksIntent extends INIntent {
  initWithTargetTaskListTaskTitlesSpatialEventTriggerTemporalEventTriggerPriority(targetTaskList: INTaskList | null, taskTitles: NSArray<interop.Object> | Array<interop.Object> | null, spatialEventTrigger: INSpatialEventTrigger | null, temporalEventTrigger: INTemporalEventTrigger | null, priority: interop.Enum<typeof INTaskPriority>): this;

  readonly targetTaskList: INTaskList;

  readonly taskTitles: NSArray;

  readonly spatialEventTrigger: INSpatialEventTrigger;

  readonly temporalEventTrigger: INTemporalEventTrigger;

  readonly priority: interop.Enum<typeof INTaskPriority>;

  initWithTargetTaskListTaskTitlesSpatialEventTriggerTemporalEventTrigger(targetTaskList: INTaskList | null, taskTitles: NSArray<interop.Object> | Array<interop.Object> | null, spatialEventTrigger: INSpatialEventTrigger | null, temporalEventTrigger: INTemporalEventTrigger | null): this;
}

declare class INActivateCarSignalIntent extends INIntent {
  initWithCarNameSignals(carName: INSpeakableString | null, signals: interop.Enum<typeof INCarSignalOptions>): this;

  readonly carName: INSpeakableString;

  readonly signals: interop.Enum<typeof INCarSignalOptions>;
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

declare class INBookRestaurantReservationIntent extends INIntent implements NSCopying {
  initWithRestaurantBookingDateComponentsPartySizeBookingIdentifierGuestSelectedOfferGuestProvidedSpecialRequestText(restaurant: INRestaurant, bookingDateComponents: NSDateComponents, partySize: number, bookingIdentifier: string | null, guest: INRestaurantGuest | null, selectedOffer: INRestaurantOffer | null, guestProvidedSpecialRequestText: string | null): this;

  restaurant: INRestaurant;

  bookingDateComponents: NSDateComponents;

  partySize: number;

  bookingIdentifier: string;

  guest: INRestaurantGuest;

  selectedOffer: INRestaurantOffer;

  guestProvidedSpecialRequestText: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
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

declare class INResumeWorkoutIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INResumeWorkoutIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INResumeWorkoutIntentResponseCode>;
}

declare class INGetUserCurrentRestaurantReservationBookingsIntent extends INIntent implements NSCopying {
  initWithRestaurantReservationIdentifierMaximumNumberOfResultsEarliestBookingDateForResults(restaurant: INRestaurant | null, reservationIdentifier: string | null, maximumNumberOfResults: NSNumber | null, earliestBookingDateForResults: NSDate | null): this;

  restaurant: INRestaurant;

  reservationIdentifier: string;

  maximumNumberOfResults: NSNumber;

  earliestBookingDateForResults: NSDate;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INBillTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedBillType<This extends abstract new (...args: any) => any>(this: This, resolvedBillType: interop.Enum<typeof INBillType>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INBillType>): InstanceType<This>;

  static confirmationRequiredWithBillTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, billTypeToConfirm: interop.Enum<typeof INBillType>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INBillType>): InstanceType<This>;
}

declare class INRestaurantReservationBooking extends NSObject implements NSSecureCoding, NSCopying {
  initWithRestaurantBookingDatePartySizeBookingIdentifier(restaurant: INRestaurant, bookingDate: NSDate, partySize: number, bookingIdentifier: string): this;

  restaurant: INRestaurant;

  bookingDescription: string;

  bookingDate: NSDate;

  partySize: number;

  bookingIdentifier: string;

  isBookingAvailable: boolean;

  get offers(): NSArray;
  set offers(value: NSArray<interop.Object> | Array<interop.Object>);

  requiresManualRequest: boolean;

  requiresEmailAddress: boolean;

  requiresName: boolean;

  requiresPhoneNumber: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INTransferMoneyIntent extends INIntent {
  initWithFromAccountToAccountTransactionAmountTransactionScheduledDateTransactionNote(fromAccount: INPaymentAccount | null, toAccount: INPaymentAccount | null, transactionAmount: INPaymentAmount | null, transactionScheduledDate: INDateComponentsRange | null, transactionNote: string | null): this;

  readonly fromAccount: INPaymentAccount;

  readonly toAccount: INPaymentAccount;

  readonly transactionAmount: INPaymentAmount;

  readonly transactionScheduledDate: INDateComponentsRange;

  readonly transactionNote: string;
}

declare class INListRideOptionsIntent extends INIntent {
  initWithPickupLocationDropOffLocation(pickupLocation: CLPlacemark | null, dropOffLocation: CLPlacemark | null): this;

  readonly pickupLocation: CLPlacemark;

  readonly dropOffLocation: CLPlacemark;
}

declare class INSearchForMediaIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchForMediaIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchForMediaIntentResponseCode>;

  get mediaItems(): NSArray;
  set mediaItems(value: NSArray<interop.Object> | Array<interop.Object>);
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

declare class INMediaDestination extends NSObject implements NSCopying, NSSecureCoding {
  static libraryDestination<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static playlistDestinationWithName<This extends abstract new (...args: any) => any>(this: This, playlistName: string): InstanceType<This>;

  readonly mediaDestinationType: interop.Enum<typeof INMediaDestinationType>;

  readonly playlistName: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INRestaurantOffer extends NSObject implements NSSecureCoding, NSCopying {
  offerTitleText: string;

  offerDetailText: string;

  offerIdentifier: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INCreateNoteIntent extends INIntent {
  initWithTitleContentGroupName(title: INSpeakableString | null, content: INNoteContent | null, groupName: INSpeakableString | null): this;

  readonly title: INSpeakableString;

  readonly content: INNoteContent;

  readonly groupName: INSpeakableString;
}

declare class INAddTasksIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INAddTasksIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INAddTasksIntentResponseCode>;

  modifiedTaskList: INTaskList;

  get addedTasks(): NSArray;
  set addedTasks(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INBalanceAmount extends NSObject implements NSCopying, NSSecureCoding {
  initWithAmountBalanceType(amount: NSDecimalNumber, balanceType: interop.Enum<typeof INBalanceType>): this;

  initWithAmountCurrencyCode(amount: NSDecimalNumber, currencyCode: string): this;

  readonly amount: NSDecimalNumber;

  readonly balanceType: interop.Enum<typeof INBalanceType>;

  readonly currencyCode: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INMessage extends NSObject implements NSCopying, NSSecureCoding {
  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameMessageTypeServiceNameAttachmentFiles(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, messageType: interop.Enum<typeof INMessageType>, serviceName: string | null, attachmentFiles: NSArray<interop.Object> | Array<interop.Object> | null): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameMessageTypeServiceNameAudioMessageFile(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, messageType: interop.Enum<typeof INMessageType>, serviceName: string | null, audioMessageFile: INFile | null): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameMessageTypeServiceName(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, messageType: interop.Enum<typeof INMessageType>, serviceName: string | null): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameMessageType(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, messageType: interop.Enum<typeof INMessageType>): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsMessageType(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, messageType: interop.Enum<typeof INMessageType>): this;

  initWithIdentifierContentDateSentSenderRecipients(identifier: string, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameServiceNameLinkMetadata(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, serviceName: string | null, linkMetadata: INMessageLinkMetadata | null): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameServiceNameMessageTypeNumberOfAttachments(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, serviceName: string | null, messageType: interop.Enum<typeof INMessageType>, numberOfAttachments: NSNumber | null): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameServiceNameMessageTypeReferencedMessageReaction(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, serviceName: string | null, messageType: interop.Enum<typeof INMessageType>, referencedMessage: INMessage | null, reaction: INMessageReaction | null): this;

  initWithIdentifierConversationIdentifierContentDateSentSenderRecipientsGroupNameServiceNameMessageTypeReferencedMessageStickerReaction(identifier: string, conversationIdentifier: string | null, content: string | null, dateSent: NSDate | null, sender: INPerson | null, recipients: NSArray<interop.Object> | Array<interop.Object> | null, groupName: INSpeakableString | null, serviceName: string | null, messageType: interop.Enum<typeof INMessageType>, referencedMessage: INMessage | null, sticker: INSticker | null, reaction: INMessageReaction | null): this;

  readonly identifier: string;

  readonly conversationIdentifier: string;

  readonly content: string;

  readonly dateSent: NSDate;

  readonly sender: INPerson;

  readonly recipients: NSArray;

  readonly groupName: INSpeakableString;

  readonly messageType: interop.Enum<typeof INMessageType>;

  readonly serviceName: string;

  readonly attachmentFiles: NSArray;

  readonly numberOfAttachments: NSNumber;

  readonly audioMessageFile: INFile;

  readonly linkMetadata: INMessageLinkMetadata;

  sticker: INSticker;

  reaction: INMessageReaction;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INCallRecordTypeOptionsResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallRecordTypeOptions<This extends abstract new (...args: any) => any>(this: This, resolvedCallRecordTypeOptions: interop.Enum<typeof INCallRecordTypeOptions>): InstanceType<This>;

  static confirmationRequiredWithCallRecordTypeOptionsToConfirm<This extends abstract new (...args: any) => any>(this: This, callRecordTypeOptionsToConfirm: interop.Enum<typeof INCallRecordTypeOptions>): InstanceType<This>;
}

declare class INPlacemarkResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPlacemark<This extends abstract new (...args: any) => any>(this: This, resolvedPlacemark: CLPlacemark): InstanceType<This>;

  static disambiguationWithPlacemarksToDisambiguate<This extends abstract new (...args: any) => any>(this: This, placemarksToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithPlacemarkToConfirm<This extends abstract new (...args: any) => any>(this: This, placemarkToConfirm: CLPlacemark | null): InstanceType<This>;
}

declare class INSearchForMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
  static successesWithResolvedMediaItems(resolvedMediaItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSearchForMediaMediaItemUnsupportedReason>): InstanceType<This>;

  initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult): this;
}

declare class INAppendToNoteIntent extends INIntent {
  initWithTargetNoteContent(targetNote: INNote | null, content: INNoteContent | null): this;

  readonly targetNote: INNote;

  readonly content: INNoteContent;
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

declare class INPayBillIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INPayBillIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INPayBillIntentResponseCode>;

  fromAccount: INPaymentAccount;

  billDetails: INBillDetails;

  transactionAmount: INPaymentAmount;

  transactionScheduledDate: INDateComponentsRange;

  transactionNote: string;
}

declare class INRestaurantResolutionResult extends INIntentResolutionResult {
  static successWithResolvedRestaurant<This extends abstract new (...args: any) => any>(this: This, resolvedRestaurant: INRestaurant): InstanceType<This>;

  static disambiguationWithRestaurantsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, restaurantsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithRestaurantToConfirm<This extends abstract new (...args: any) => any>(this: This, restaurantToConfirm: INRestaurant | null): InstanceType<This>;
}

declare class INEndWorkoutIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INEndWorkoutIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INEndWorkoutIntentResponseCode>;
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

declare class INTemporalEventTrigger extends NSObject implements NSCopying, NSSecureCoding {
  initWithDateComponentsRange(dateComponentsRange: INDateComponentsRange): this;

  readonly dateComponentsRange: INDateComponentsRange;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INMediaAffinityTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedMediaAffinityType<This extends abstract new (...args: any) => any>(this: This, resolvedMediaAffinityType: interop.Enum<typeof INMediaAffinityType>): InstanceType<This>;

  static confirmationRequiredWithMediaAffinityTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, mediaAffinityTypeToConfirm: interop.Enum<typeof INMediaAffinityType>): InstanceType<This>;
}

declare class INOutgoingMessageTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedOutgoingMessageType<This extends abstract new (...args: any) => any>(this: This, resolvedOutgoingMessageType: interop.Enum<typeof INOutgoingMessageType>): InstanceType<This>;

  static confirmationRequiredWithOutgoingMessageTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, outgoingMessageTypeToConfirm: interop.Enum<typeof INOutgoingMessageType>): InstanceType<This>;
}

declare class INVolumeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedVolume<This extends abstract new (...args: any) => any>(this: This, resolvedVolume: NSMeasurement): InstanceType<This>;

  static disambiguationWithVolumeToDisambiguate<This extends abstract new (...args: any) => any>(this: This, volumeToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithVolumeToConfirm<This extends abstract new (...args: any) => any>(this: This, volumeToConfirm: NSMeasurement | null): InstanceType<This>;
}

declare class INHangUpCallIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INHangUpCallIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INHangUpCallIntentResponseCode>;
}

declare class INStringResolutionResult extends INIntentResolutionResult {
  static successWithResolvedString<This extends abstract new (...args: any) => any>(this: This, resolvedString: string): InstanceType<This>;

  static disambiguationWithStringsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, stringsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithStringToConfirm<This extends abstract new (...args: any) => any>(this: This, stringToConfirm: string | null): InstanceType<This>;
}

declare class INCarAudioSourceResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCarAudioSource<This extends abstract new (...args: any) => any>(this: This, resolvedCarAudioSource: interop.Enum<typeof INCarAudioSource>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INCarAudioSource>): InstanceType<This>;

  static confirmationRequiredWithCarAudioSourceToConfirm<This extends abstract new (...args: any) => any>(this: This, carAudioSourceToConfirm: interop.Enum<typeof INCarAudioSource>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INCarAudioSource>): InstanceType<This>;
}

declare class INTemporalEventTriggerTypeOptionsResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTemporalEventTriggerTypeOptions<This extends abstract new (...args: any) => any>(this: This, resolvedTemporalEventTriggerTypeOptions: interop.Enum<typeof INTemporalEventTriggerTypeOptions>): InstanceType<This>;

  static confirmationRequiredWithTemporalEventTriggerTypeOptionsToConfirm<This extends abstract new (...args: any) => any>(this: This, temporalEventTriggerTypeOptionsToConfirm: interop.Enum<typeof INTemporalEventTriggerTypeOptions>): InstanceType<This>;
}

declare class INCarHeadUnit extends NSObject implements NSCopying, NSSecureCoding {
  initWithBluetoothIdentifierIAP2Identifier(bluetoothIdentifier: string | null, iAP2Identifier: string | null): this;

  readonly bluetoothIdentifier: string;

  readonly iAP2Identifier: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSetCarLockStatusIntent extends INIntent {
  initWithLockedCarName(locked: NSNumber | null, carName: INSpeakableString | null): this;

  readonly locked: NSNumber;

  readonly carName: INSpeakableString;
}

declare class INStartAudioCallIntent extends INIntent {
  initWithDestinationTypeContacts(destinationType: interop.Enum<typeof INCallDestinationType>, contacts: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly destinationType: interop.Enum<typeof INCallDestinationType>;

  readonly contacts: NSArray;

  initWithContacts(contacts: NSArray<interop.Object> | Array<interop.Object> | null): this;
}

declare class INGetAvailableRestaurantReservationBookingsIntent extends INIntent implements NSCopying {
  initWithRestaurantPartySizePreferredBookingDateComponentsMaximumNumberOfResultsEarliestBookingDateForResultsLatestBookingDateForResults(restaurant: INRestaurant, partySize: number, preferredBookingDateComponents: NSDateComponents | null, maximumNumberOfResults: NSNumber | null, earliestBookingDateForResults: NSDate | null, latestBookingDateForResults: NSDate | null): this;

  restaurant: INRestaurant;

  partySize: number;

  preferredBookingDateComponents: NSDateComponents;

  maximumNumberOfResults: NSNumber;

  earliestBookingDateForResults: NSDate;

  latestBookingDateForResults: NSDate;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INAccountTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedAccountType<This extends abstract new (...args: any) => any>(this: This, resolvedAccountType: interop.Enum<typeof INAccountType>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INAccountType>): InstanceType<This>;

  static confirmationRequiredWithAccountTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, accountTypeToConfirm: interop.Enum<typeof INAccountType>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INAccountType>): InstanceType<This>;
}

declare class INTaskStatusResolutionResult extends INIntentResolutionResult {
  static successWithResolvedTaskStatus<This extends abstract new (...args: any) => any>(this: This, resolvedTaskStatus: interop.Enum<typeof INTaskStatus>): InstanceType<This>;

  static confirmationRequiredWithTaskStatusToConfirm<This extends abstract new (...args: any) => any>(this: This, taskStatusToConfirm: interop.Enum<typeof INTaskStatus>): InstanceType<This>;
}

declare class INCarSignalOptionsResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCarSignalOptions<This extends abstract new (...args: any) => any>(this: This, resolvedCarSignalOptions: interop.Enum<typeof INCarSignalOptions>): InstanceType<This>;

  static successWithResolvedValue<This extends abstract new (...args: any) => any>(this: This, resolvedValue: interop.Enum<typeof INCarSignalOptions>): InstanceType<This>;

  static confirmationRequiredWithCarSignalOptionsToConfirm<This extends abstract new (...args: any) => any>(this: This, carSignalOptionsToConfirm: interop.Enum<typeof INCarSignalOptions>): InstanceType<This>;

  static confirmationRequiredWithValueToConfirm<This extends abstract new (...args: any) => any>(this: This, valueToConfirm: interop.Enum<typeof INCarSignalOptions>): InstanceType<This>;
}

declare class INFocusStatusCenter extends NSObject {
  static readonly defaultCenter: INFocusStatusCenter;

  readonly focusStatus: INFocusStatus;

  readonly authorizationStatus: interop.Enum<typeof INFocusStatusAuthorizationStatus>;

  requestAuthorizationWithCompletionHandler(completionHandler: (p1: interop.Enum<typeof INFocusStatusAuthorizationStatus>) => void | null): void;
}

declare class INSearchForMessagesIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchForMessagesIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchForMessagesIntentResponseCode>;

  get messages(): NSArray;
  set messages(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INSendPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSendPaymentCurrencyAmountUnsupportedReason>): InstanceType<This>;

  initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: INCurrencyAmountResolutionResult): this;
}

declare class INRestaurantGuestResolutionResult extends INIntentResolutionResult {
  static successWithResolvedRestaurantGuest<This extends abstract new (...args: any) => any>(this: This, resolvedRestaurantGuest: INRestaurantGuest): InstanceType<This>;

  static disambiguationWithRestaurantGuestsToDisambiguate<This extends abstract new (...args: any) => any>(this: This, restaurantGuestsToDisambiguate: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static confirmationRequiredWithRestaurantGuestToConfirm<This extends abstract new (...args: any) => any>(this: This, restaurantGuestToConfirm: INRestaurantGuest | null): InstanceType<This>;
}

declare class INRestaurant extends NSObject implements NSSecureCoding, NSCopying {
  initWithLocationNameVendorIdentifierRestaurantIdentifier(location: CLLocation, name: string, vendorIdentifier: string, restaurantIdentifier: string): this;

  location: CLLocation;

  name: string;

  vendorIdentifier: string;

  restaurantIdentifier: string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
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

declare class INImageNoteContent extends INNoteContent implements NSSecureCoding, NSCopying {
  initWithImage(image: INImage): this;

  readonly image: INImage;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class INUnsendMessagesIntent extends INIntent {
  initWithMessageIdentifiers(messageIdentifiers: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly messageIdentifiers: NSArray;
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

declare class INPaymentAmount extends NSObject implements NSCopying, NSSecureCoding {
  initWithAmountTypeAmount(amountType: interop.Enum<typeof INAmountType>, amount: INCurrencyAmount): this;

  readonly amount: INCurrencyAmount;

  readonly amountType: interop.Enum<typeof INAmountType>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSendMessageRecipientResolutionResult extends INPersonResolutionResult {
  static unsupportedForReason<This extends abstract new (...args: any) => any>(this: This, reason: interop.Enum<typeof INSendMessageRecipientUnsupportedReason>): InstanceType<This>;

  initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult): this;
}

declare class INDateComponentsRange extends NSObject implements NSCopying, NSSecureCoding {
  initWithStartDateComponentsEndDateComponents(startDateComponents: NSDateComponents | null, endDateComponents: NSDateComponents | null): this;

  initWithStartDateComponentsEndDateComponentsRecurrenceRule(startDateComponents: NSDateComponents | null, endDateComponents: NSDateComponents | null, recurrenceRule: INRecurrenceRule | null): this;

  readonly startDateComponents: NSDateComponents;

  readonly endDateComponents: NSDateComponents;

  readonly recurrenceRule: INRecurrenceRule;

  initWithEKRecurrenceRule(recurrenceRule: EKRecurrenceRule): this;

  EKRecurrenceRule(): EKRecurrenceRule;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INSpeakableString extends NSObject implements INSpeakable, NSCopying, NSSecureCoding {
  initWithVocabularyIdentifierSpokenPhrasePronunciationHint(vocabularyIdentifier: string, spokenPhrase: string, pronunciationHint: string | null): this;

  initWithIdentifierSpokenPhrasePronunciationHint(identifier: string, spokenPhrase: string, pronunciationHint: string | null): this;

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

declare class INSearchForAccountsIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchForAccountsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchForAccountsIntentResponseCode>;

  get accounts(): NSArray;
  set accounts(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INDefaultCardTemplate extends NSObject implements NSCopying, NSSecureCoding {
  title: string;

  subtitle: string;

  image: INImage;

  initWithTitle(title: string): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class INGetCarLockStatusIntent extends INIntent {
  initWithCarName(carName: INSpeakableString | null): this;

  readonly carName: INSpeakableString;
}

declare class INBillDetails extends NSObject implements NSCopying, NSSecureCoding {
  initWithBillTypePaymentStatusBillPayeeAmountDueMinimumDueLateFeeDueDatePaymentDate(billType: interop.Enum<typeof INBillType>, paymentStatus: interop.Enum<typeof INPaymentStatus>, billPayee: INBillPayee | null, amountDue: INCurrencyAmount | null, minimumDue: INCurrencyAmount | null, lateFee: INCurrencyAmount | null, dueDate: NSDateComponents | null, paymentDate: NSDateComponents | null): this;

  billPayee: INBillPayee;

  amountDue: INCurrencyAmount;

  minimumDue: INCurrencyAmount;

  lateFee: INCurrencyAmount;

  dueDate: NSDateComponents;

  paymentDate: NSDateComponents;

  billType: interop.Enum<typeof INBillType>;

  paymentStatus: interop.Enum<typeof INPaymentStatus>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
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

declare class INCallDestinationTypeResolutionResult extends INIntentResolutionResult {
  static successWithResolvedCallDestinationType<This extends abstract new (...args: any) => any>(this: This, resolvedCallDestinationType: interop.Enum<typeof INCallDestinationType>): InstanceType<This>;

  static confirmationRequiredWithCallDestinationTypeToConfirm<This extends abstract new (...args: any) => any>(this: This, callDestinationTypeToConfirm: interop.Enum<typeof INCallDestinationType>): InstanceType<This>;
}

declare class INDateRelevanceProvider extends INRelevanceProvider {
  readonly startDate: NSDate;

  readonly endDate: NSDate;

  initWithStartDateEndDate(startDate: NSDate, endDate: NSDate | null): this;
}

declare class INStartVideoCallIntent extends INIntent {
  initWithContacts(contacts: NSArray<interop.Object> | Array<interop.Object> | null): this;

  readonly contacts: NSArray;
}

declare class INRequestRideIntent extends INIntent {
  initWithPickupLocationDropOffLocationRideOptionNamePartySizePaymentMethodScheduledPickupTime(pickupLocation: CLPlacemark | null, dropOffLocation: CLPlacemark | null, rideOptionName: INSpeakableString | null, partySize: NSNumber | null, paymentMethod: INPaymentMethod | null, scheduledPickupTime: INDateComponentsRange | null): this;

  readonly pickupLocation: CLPlacemark;

  readonly dropOffLocation: CLPlacemark;

  readonly rideOptionName: INSpeakableString;

  readonly partySize: NSNumber;

  readonly paymentMethod: INPaymentMethod;

  readonly scheduledPickupTime: INDateComponentsRange;

  initWithPickupLocationDropOffLocationRideOptionNamePartySizePaymentMethod(pickupLocation: CLPlacemark | null, dropOffLocation: CLPlacemark | null, rideOptionName: INSpeakableString | null, partySize: NSNumber | null, paymentMethod: INPaymentMethod | null): this;
}

declare class INEditMessageIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INEditMessageIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INEditMessageIntentResponseCode>;
}

declare class INCreateTaskListIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INCreateTaskListIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INCreateTaskListIntentResponseCode>;

  createdTaskList: INTaskList;
}

declare class INSendMessageIntentDonationMetadata extends INIntentDonationMetadata {
  mentionsCurrentUser: boolean;

  isReplyToCurrentUser: boolean;

  notifyRecipientAnyway: boolean;

  recipientCount: number;

  init(): this;
}

declare class INPlaybackQueueLocationResolutionResult extends INIntentResolutionResult {
  static successWithResolvedPlaybackQueueLocation<This extends abstract new (...args: any) => any>(this: This, resolvedPlaybackQueueLocation: interop.Enum<typeof INPlaybackQueueLocation>): InstanceType<This>;

  static confirmationRequiredWithPlaybackQueueLocationToConfirm<This extends abstract new (...args: any) => any>(this: This, playbackQueueLocationToConfirm: interop.Enum<typeof INPlaybackQueueLocation>): InstanceType<This>;
}

declare class INUpcomingMediaManager extends NSObject {
  static readonly sharedManager: INUpcomingMediaManager;

  setSuggestedMediaIntents(intents: NSOrderedSet): void;

  setPredictionModeForType(mode: interop.Enum<typeof INUpcomingMediaPredictionMode>, type: interop.Enum<typeof INMediaItemType>): void;
}

declare class INEditMessageIntent extends INIntent {
  initWithMessageIdentifierEditedContent(messageIdentifier: string | null, editedContent: string | null): this;

  readonly messageIdentifier: string;

  readonly editedContent: string;
}

declare class INListCarsIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INListCarsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INListCarsIntentResponseCode>;

  get cars(): NSArray;
  set cars(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class INSearchForBillsIntentResponse extends INIntentResponse {
  initWithCodeUserActivity(code: interop.Enum<typeof INSearchForBillsIntentResponseCode>, userActivity: NSUserActivity | null): this;

  readonly code: interop.Enum<typeof INSearchForBillsIntentResponseCode>;

  get bills(): NSArray;
  set bills(value: NSArray<interop.Object> | Array<interop.Object>);
}

