/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./QuartzCore.d.ts" />
/// <reference path="./Foundation.d.ts" />

declare const NSTextContentStorageUnsupportedAttributeAddedNotification: string;

declare const NSTypeIdentifierTransitInformationText: string;

declare const NSTypeIdentifierAddressText: string;

declare const NSTextAlternativesSelectedAlternativeStringNotification: string;

declare const NSRuleEditorPredicateCompoundType: string;

declare const NSRuleEditorPredicateCustomSelector: string;

declare const NSRuleEditorPredicateOptions: string;

declare const NSRuleEditorPredicateComparisonModifier: string;

declare const NSRuleEditorPredicateRightExpression: string;

declare const NSRatingLevelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;

declare const NSDiscreteCapacityLevelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;

declare const NSRelevancyLevelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;

declare const NSEraDatePickerElementFlag: interop.Enum<typeof NSDatePickerElementFlags>;

declare const NSYearMonthDayDatePickerElementFlag: interop.Enum<typeof NSDatePickerElementFlags>;

declare const NSTimeZoneDatePickerElementFlag: interop.Enum<typeof NSDatePickerElementFlags>;

declare const NSHourMinuteSecondDatePickerElementFlag: interop.Enum<typeof NSDatePickerElementFlags>;

declare const NSHourMinuteDatePickerElementFlag: interop.Enum<typeof NSDatePickerElementFlags>;

declare const NSRangeDateMode: interop.Enum<typeof NSDatePickerMode>;

declare const NSSingleDateMode: interop.Enum<typeof NSDatePickerMode>;

declare const NSTextFieldDatePickerStyle: interop.Enum<typeof NSDatePickerStyle>;

declare const NSClockAndCalendarDatePickerStyle: interop.Enum<typeof NSDatePickerStyle>;

declare const NSTextFieldAndStepperDatePickerStyle: interop.Enum<typeof NSDatePickerStyle>;

declare const NSTextListMarkerLowercaseRoman: string;

declare const NSTextListMarkerUppercaseLatin: string;

declare const NSTextListMarkerLowercaseLatin: string;

declare const NSTextListMarkerUppercaseAlpha: string;

declare const NSTextListMarkerLowercaseAlpha: string;

declare const NSTextListMarkerOctal: string;

declare const NSTextListMarkerLowercaseHexadecimal: string;

declare const NSTextListMarkerSquare: string;

declare const NSTextListMarkerHyphen: string;

declare const NSTextListMarkerCircle: string;

declare const NSTextListMarkerBox: string;

declare const NSSearchFieldNoRecentsMenuItemTag: number;

declare const NSSearchFieldClearRecentsMenuItemTag: number;

declare const NSSearchFieldRecentsMenuItemTag: number;

declare const NSSearchFieldRecentsTitleMenuItemTag: number;

declare const NSOpenGLCPStateValidation: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLCPGPUFragmentProcessing: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLCPGPUVertexProcessing: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLCPCurrentRendererID: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLCPSurfaceBackingSize: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLCPSurfaceOrder: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLCPSwapInterval: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLProfileVersionLegacy: number;

declare const NSOpenGLPFARemotePixelBuffer: number;

declare const NSOpenGLPFAPixelBuffer: number;

declare const NSOpenGLPFACompliant: number;

declare const NSOpenGLPFAMultiScreen: number;

declare const NSOpenGLPFAWindow: number;

declare const NSOpenGLPFARobust: number;

declare const NSOpenGLPFAFullScreen: number;

declare const NSOpenGLPFAOffScreen: number;

declare const NSOpenGLPFAStereo: number;

declare const NSOpenGLPFAVirtualScreenCount: number;

declare const NSOpenGLPFAOpenGLProfile: number;

declare const NSOpenGLPFAAcceleratedCompute: number;

declare const NSOpenGLPFABackingStore: number;

declare const NSOpenGLPFANoRecovery: number;

declare const NSOpenGLPFASampleAlpha: number;

declare const NSOpenGLPFASupersample: number;

declare const NSOpenGLPFAMultisample: number;

declare const NSOpenGLPFAColorFloat: number;

declare const NSOpenGLPFAMaximumPolicy: number;

declare const NSOpenGLPFAMinimumPolicy: number;

declare const NSOpenGLPFAAccumSize: number;

declare const NSOpenGLPFAColorSize: number;

declare const NSOpenGLPFADoubleBuffer: number;

declare const NSDrawerDidCloseNotification: string;

declare const NSDrawerWillCloseNotification: string;

declare const NSDrawerWillOpenNotification: string;

declare const NSSquareStatusItemLength: number;

declare const NSMoveToBezierPathElement: interop.Enum<typeof NSBezierPathElement>;

declare const NSEvenOddWindingRule: interop.Enum<typeof NSWindingRule>;

declare const NSNonZeroWindingRule: interop.Enum<typeof NSWindingRule>;

declare const NSBevelLineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;

declare const NSRoundLineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;

declare const NSProgressIndicatorBarStyle: interop.Enum<typeof NSProgressIndicatorStyle>;

declare const NSInterfaceStyleDefault: string;

declare const NSNextStepInterfaceStyle: number;

declare const NSOutlineViewItemDidExpandNotification: string;

declare const NSOutlineViewSelectionIsChangingNotification: string;

declare const NSAccessibilityApplicationDeactivatedNotification: string;

declare const NSOutlineViewShowHideButtonKey: string;

declare const NSOutlineViewDropOnItemIndex: number;

declare const NSTableViewRowViewKey: string;

declare const NSFindPanelSubstringMatch: string;

declare const NSFindPanelCaseInsensitiveSearch: string;

declare const NSFindPanelSearchOptionsPboardType: string;

declare const NSTextViewWillSwitchToNSLayoutManagerNotification: string;

declare const NSTextViewDidChangeSelectionNotification: string;

declare const NSTouchBarItemIdentifierTextList: string;

declare const NSTouchBarItemIdentifierTextAlignment: string;

declare const NSTouchBarItemIdentifierTextStyle: string;

declare const NSToolbarCustomizeToolbarItemIdentifier: string;

declare const NSToolbarToggleInspectorItemIdentifier: string;

declare const NSToolbarToggleSidebarItemIdentifier: string;

declare const NSToolbarFlexibleSpaceItemIdentifier: string;

declare const NSToolbarItemVisibilityPriorityLow: number;

declare const NSToolbarWillAddItemNotification: string;

declare const NSToolbarItemKey: string;

declare const NSMenuDidBeginTrackingNotification: string;

declare const NSGlyphAttributeBidiLevel: number;

declare const NSGlyphAttributeElastic: number;

declare const NSGlyphAttributeSoft: number;

declare const NSWantsBidiLevels: number;

declare const NSTextStorageDidProcessEditingNotification: string;

declare const NSTextContentTypeDateTime: string;

declare const NSTextContentTypeFlightNumber: string;

declare const NSTextContentTypeCreditCardType: string;

declare const NSTextContentTypeCreditCardExpirationMonth: string;

declare const NSTextContentTypeCreditCardExpiration: string;

declare const NSTextContentTypeCreditCardMiddleName: string;

declare const NSTextContentTypeCreditCardGivenName: string;

declare const NSTextContentTypeCreditCardName: string;

declare const NSTextContentTypeCreditCardNumber: string;

declare const NSTextContentTypeEmailAddress: string;

declare const NSTextContentTypeTelephoneNumber: string;

declare const NSTextContentTypeSublocality: string;

declare const NSTextContentTypeAddressCity: string;

declare const NSTextContentTypeOrganizationName: string;

declare const NSTextContentTypeJobTitle: string;

declare const NSTextContentTypeNameSuffix: string;

declare const NSAccessibilityColumnTitlesAttribute: string;

declare const NSTextContentTypeFamilyName: string;

declare const NSTextContentTypeGivenName: string;

declare const NSTextContentTypeNamePrefix: string;

declare const NSTextContentTypeName: string;

declare const NSTextContentTypeNewPassword: string;

declare const NSPasteboardTypeSound: string;

declare const NSGridViewSizeForContent: number;

declare const NSAccessibilityUnknownSortDirectionValue: string;

declare const NSStackViewVisibilityPriorityMustHold: number;

declare const NSTickMarkLeft: interop.Enum<typeof NSTickMarkPosition>;

declare const NSTickMarkAbove: interop.Enum<typeof NSTickMarkPosition>;

declare const NSScrollViewWillStartLiveScrollNotification: string;

declare const NSScrollViewDidEndLiveMagnifyNotification: string;

declare const NSPrintNoPresetsJobStyleHint: string;

declare const NSPrintPhotoJobStyleHint: string;

declare const NSPopUpButtonWillPopUpNotification: string;

declare const NSPopUpButtonCellWillPopUpNotification: string;

declare const NSFileHandlingPanelOKButton: number;

declare const NSFileHandlingPanelCancelButton: number;

declare const NSSplitViewControllerAutomaticDimension: number;

declare const NSSplitViewItemUnspecifiedDimension: number;

declare const NSSpellCheckerDidChangeAutomaticPeriodSubstitutionNotification: string;

declare const NSSpellCheckerDidChangeAutomaticCapitalizationNotification: string;

declare const NSSpellCheckerDidChangeAutomaticQuoteSubstitutionNotification: string;

declare const NSTextCheckingSelectedRangeKey: string;

declare const NSTextCheckingRegularExpressionsKey: string;

declare const NSTextCheckingDocumentAuthorKey: string;

declare const NSTextCheckingOrthographyKey: string;

declare const NSSpeechPhonemeInfoHiliteEnd: string;

declare const NSSpeechSynthesizerInfoIdentifier: string;

declare const NSSpeechErrorNewestCharacterOffset: string;

declare const NSSpeechErrorOldestCharacterOffset: string;

declare const NSSpeechStatusPhonemeCode: string;

declare const NSSpeechStatusOutputBusy: string;

declare const NSSpeechModeLiteral: string;

declare const NSSpeechModePhoneme: string;

declare const NSSpeechOutputToFileURLProperty: string;

declare const NSSpeechResetProperty: string;

declare const NSSpeechCommandDelimiterProperty: string;

declare const NSSpeechCurrentVoiceProperty: string;

declare const NSSpeechRecentSyncProperty: string;

declare const NSSpeechVolumeProperty: string;

declare const NSSpeechPitchBaseProperty: string;

declare const NSSpeechNumberModeProperty: string;

declare const NSSpeechInputModeProperty: string;

declare const NSSpeechStatusProperty: string;

declare const NSSpeechDictionaryEntrySpelling: string;

declare const NSVoiceSupportedCharacters: string;

declare const NSVoiceLocaleIdentifier: string;

declare const NSToolTipAttributeName: string;

declare const NSVoiceDemoText: string;

declare const NSVoiceAge: string;

declare const NSSliderAccessoryWidthDefault: number;

declare const NSSharingServiceNamePostVideoOnYouku: string;

declare const NSSharingServiceNamePostImageOnFlickr: string;

declare const NSSharingServiceNameUseAsLinkedInProfileImage: string;

declare const NSSharingServiceNameUseAsTwitterProfileImage: string;

declare const NSSharingServiceNameAddToAperture: string;

declare const NSSharingServiceNameAddToSafariReadingList: string;

declare const NSSharingServiceNameComposeMessage: string;

declare const NSImageNameTouchBarPlayheadTemplate: string;

declare const NSCompositeSourceAtop: interop.Enum<typeof NSCompositingOperation>;

declare const NSImageNameTouchBarVolumeUpTemplate: string;

declare const NSTextContentTypeBirthdateYear: string;

declare const NSImageNameTouchBarVolumeDownTemplate: string;

declare const NSImageNameTouchBarUserTemplate: string;

declare const NSImageNameTouchBarUserAddTemplate: string;

declare const NSImageNameTouchBarTextLeftAlignTemplate: string;

declare const NSImageNameTouchBarTextBoxTemplate: string;

declare const NSOutlineViewItemWillCollapseNotification: string;

declare const NSImageNameTouchBarTextBoldTemplate: string;

declare const NSImageNameTouchBarTagIconTemplate: string;

declare const NSImageNameTouchBarSkipToEndTemplate: string;

declare const NSImageNameTouchBarSkipBackTemplate: string;

declare const NSImageNameTouchBarSkipBack30SecondsTemplate: string;

declare const NSSpeechPitchModProperty: string;

declare const NSImageNameTouchBarSkipAhead30SecondsTemplate: string;

declare const NSImageNameTouchBarSkipAhead15SecondsTemplate: string;

declare const NSImageNameTouchBarSidebarTemplate: string;

declare const NSImageNameTouchBarShareTemplate: string;

declare const NSImageNameTouchBarSearchTemplate: string;

declare const NSImageNameTouchBarRotateRightTemplate: string;

declare const NSImageNameTouchBarRecordStopTemplate: string;

declare const NSImageNameTouchBarRecordStartTemplate: string;

declare const NSImageNameTouchBarPlayTemplate: string;

declare const NSImageNameTouchBarNewMessageTemplate: string;

declare const NSImageNameTouchBarMailTemplate: string;

declare const NSImageNameTouchBarGoDownTemplate: string;

declare const NSImageNameTouchBarFolderTemplate: string;

declare const NSImageNameTouchBarFolderCopyToTemplate: string;

declare const NSImageNameTouchBarDownloadTemplate: string;

declare const NSImageNameTouchBarComposeTemplate: string;

declare const NSImageNameTouchBarBookmarksTemplate: string;

declare const NSImageNameTouchBarAudioOutputVolumeMediumTemplate: string;

declare const NSImageNameTouchBarAudioOutputVolumeHighTemplate: string;

declare const NSImageNameTouchBarAudioInputTemplate: string;

declare const NSImageNameTouchBarAddTemplate: string;

declare const NSImageNameApplicationIcon: string;

declare const NSImageNameMenuMixedStateTemplate: string;

declare const NSImageNameMenuOnStateTemplate: string;

declare const NSImageNameUserGuest: string;

declare const NSImageNameUser: string;

declare const NSImageNameAdvanced: string;

declare const NSImageNameUserAccounts: string;

declare const NSImageNameMultipleDocuments: string;

declare const NSImageNameLeftFacingTriangleTemplate: string;

declare const NSImageNameGoBackTemplate: string;

declare const NSImageNameGoForwardTemplate: string;

declare const NSImageNameTrashFull: string;

declare const NSImageNameStopProgressFreestandingTemplate: string;

declare const NSImageNameRefreshFreestandingTemplate: string;

declare const NSTextListMarkerUppercaseRoman: string;

declare const NSImageNameLockUnlockedTemplate: string;

declare const NSImageNameLockLockedTemplate: string;

declare const NSImageNameIChatTheaterTemplate: string;

declare const NSImageNameFollowLinkFreestandingTemplate: string;

declare const NSSpellCheckerDidChangeAutomaticInlinePredictionNotification: string;

declare const NSAccessibilityBoundsForRangeParameterizedAttribute: string;

declare const NSImageNameEnterFullScreenTemplate: string;

declare const NSImageNameComputer: string;

declare const NSImageNameCaution: string;

declare const NSImageNameBonjour: string;

declare const NSToolbarSpaceItemIdentifier: string;

declare const NSViewNoIntrinsicMetric: number;

declare const NSLayoutPriorityWindowSizeStayPut: number;

declare const NSLayoutPriorityDragThatCanResizeWindow: number;

declare const NSDraggingImageComponentLabelKey: string;

declare const NSDraggingImageComponentIconKey: string;

declare const NSAppKitVersionNumberWithCursorSizeSupport: number;

declare const NSCrayonModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSWheelModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSColorListModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSCMYKModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSRGBModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSColorPanelColorDidChangeNotification: string;

declare const NSBrowserColumnConfigurationDidChangeNotification: string;

declare const NSAppKitVersionNumberWithColumnResizingBrowser: number;

declare const NSAppKitVersionNumberWithContinuousScrollingBrowser: number;

declare const NS32BitBigEndianBitmapFormat: interop.Enum<typeof NSBitmapFormat>;

declare const NS32BitLittleEndianBitmapFormat: interop.Enum<typeof NSBitmapFormat>;

declare const NSJPEG2000FileType: interop.Enum<typeof NSBitmapImageFileType>;

declare const NSJPEGFileType: interop.Enum<typeof NSBitmapImageFileType>;

declare const NSBMPFileType: interop.Enum<typeof NSBitmapImageFileType>;

declare const NSTIFFFileType: interop.Enum<typeof NSBitmapImageFileType>;

declare const NSImageCurrentFrameDuration: string;

declare const NSImageFrameCount: string;

declare const NSImageColorSyncProfileData: string;

declare const NSImageCompressionFactor: string;

declare const NSImageRepRegistryDidChangeNotification: string;

declare const NSDeviceNColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSWindowWillCloseNotification: string;

declare const NSGrayColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSUnknownColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSFPPreviewField: number;

declare const NSFPPreviewButton: number;

declare const NSFontPanelStandardModesMask: number;

declare const NSFontPanelAllEffectsModeMask: number;

declare const NSFontPanelShadowEffectModeMask: number;

declare const NSFontPanelStrikethroughEffectModeMask: number;

declare const NSOKButton: number;

declare const NSAlertErrorReturn: number;

declare const NSAlertOtherReturn: number;

declare const NSAlertDefaultReturn: number;

declare const NSHUDWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSDocModalWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSVoiceGenderNeutral: string;

declare const NSUtilityWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSMiniaturizableWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSClosableWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSTitledWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSTickMarkBelow: interop.Enum<typeof NSTickMarkPosition>;

declare const NSWindowDidChangeOcclusionStateNotification: string;

declare const NSWindowWillExitVersionBrowserNotification: string;

declare const NSWindowDidExitFullScreenNotification: string;

declare const NSWindowDidEndLiveResizeNotification: string;

declare const NSWindowDidChangeScreenProfileNotification: string;

declare const NSBackingPropertyOldScaleFactorKey: string;

declare const NSWindowWillBeginSheetNotification: string;

declare const NSWindowDidResignKeyNotification: string;

declare const NSWindowDidMoveNotification: string;

declare const NSWindowDidExposeNotification: string;

declare const NSShowControlGlyphs: number;

declare const NSWindowDidDeminiaturizeNotification: string;

declare const NSWindowDidBecomeMainNotification: string;

declare const NSScreenSaverWindowLevel: number;

declare const NSPopUpMenuWindowLevel: number;

declare const NSModalPanelWindowLevel: number;

declare const NSFloatingWindowLevel: number;

declare const NSNormalWindowLevel: number;

declare const NSFontCollectionWasRenamed: string;

declare const NSFontCollectionOldNameKey: string;

declare const NSFontCollectionNameKey: string;

declare const NSFontCollectionDidChangeNotification: string;

declare const NSSpeechSynthesizerInfoVersion: string;

declare const NSFontCollectionRemoveDuplicatesOption: string;

declare const NSFontIdentityMatrix: interop.Pointer;

declare const NSAppKitVersionNumber13_6: number;

declare const NSFontColorAttribute: string;

declare const NSFontVerticalTrait: number;

declare const NSFontMonoSpaceTrait: number;

declare const NSFontCondensedTrait: number;

declare const NSFontFamilyClassMask: number;

declare const NSFontFreeformSerifsClass: number;

declare const NSFontSlabSerifsClass: number;

declare const NSFontOldStyleSerifsClass: number;

declare const NSFontUnknownClass: number;

declare const NSImageNameEveryone: string;

declare const NSFontTextStyleFootnote: string;

declare const NSFontTextStyleCallout: string;

declare const NSImageNameTouchBarAudioOutputMuteTemplate: string;

declare const NSFontTextStyleSubheadline: string;

declare const NSFontTextStyleTitle3: string;

declare const NSFontItalicTrait: number;

declare const NSFontDescriptorSystemDesignSerif: string;

declare const NSFontWidthCondensed: number;

declare const NSFontWeightBold: number;

declare const NSAccessibilityAnnotationElement: string;

declare const NSFontWeightRegular: number;

declare const NSFontWeightLight: number;

declare const NSFontWeightUltraLight: number;

declare const NSFontFeatureSelectorIdentifierKey: string;

declare const NSFontFeatureTypeIdentifierKey: string;

declare const NSFontVariationAxisDefaultValueKey: string;

declare const NSFontVariationAxisMaximumValueKey: string;

declare const NSFontVariationAxisIdentifierKey: string;

declare const NSFontWidthTrait: string;

declare const NSFontWeightTrait: string;

declare const NSFontSymbolicTrait: string;

declare const NSFontSizeAttribute: string;

declare const NSFontFaceAttribute: string;

declare const NSPopoverDidCloseNotification: string;

declare const NSFontPanelSizeModeMask: number;

declare const NSPopoverWillCloseNotification: string;

declare const NSPopoverWillShowNotification: string;

declare const NSPopoverCloseReasonKey: string;

declare const NSToolbarItemVisibilityPriorityHigh: number;

declare const NSTouchBarItemIdentifierCandidateList: string;

declare const NSTouchBarItemIdentifierOtherItemsProxy: string;

declare const NSTouchBarItemIdentifierFlexibleSpace: string;

declare const NSSpeechPhonemeInfoSymbol: string;

declare const NSTouchBarItemIdentifierFixedSpaceLarge: string;

declare const NSTouchBarItemPriorityNormal: number;

declare const NSThickerSquareBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSThickSquareBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSSmallIconButtonBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSTexturedRoundedBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSTexturedSquareBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSShadowlessSquareBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSRoundedBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSMultiLevelAcceleratorButton: interop.Enum<typeof NSButtonType>;

declare const NSRadioButton: interop.Enum<typeof NSButtonType>;

declare const NSControlTextDidBeginEditingNotification: string;

declare const NSAccessibilityUnderlineColorTextAttribute: string;

declare const NSBoxSecondary: interop.Enum<typeof NSBoxType>;

declare const NSCriticalAlertStyle: interop.Enum<typeof NSAlertStyle>;

declare const NSWorkspaceDecryptOperation: string;

declare const NSInformationalAlertStyle: interop.Enum<typeof NSAlertStyle>;

declare const NSWarningAlertStyle: interop.Enum<typeof NSAlertStyle>;

declare const NSContextHelpModeDidDeactivateNotification: string;

declare const NSApplicationLaunchRemoteNotificationKey: string;

declare const NSApplicationLaunchIsDefaultLaunchKey: string;

declare const NSPrintFirstPage: string;

declare const NSApplicationProtectedDataDidBecomeAvailableNotification: string;

declare const NSApplicationDidChangeScreenParametersNotification: string;

declare const NSApplicationWillTerminateNotification: string;

declare const NSApplicationWillUpdateNotification: string;

declare const NSApplicationWillUnhideNotification: string;

declare const NSApplicationWillFinishLaunchingNotification: string;

declare const NSApplicationWillHideNotification: string;

declare const NSApplicationDidUnhideNotification: string;

declare const NSApplicationDidHideNotification: string;

declare const NSApplicationDidBecomeActiveNotification: string;

declare const NSUpdateWindowsRunLoopOrdering: number;

declare const NSAppKitVersionNumber14_0: number;

declare const NSAppKitVersionNumber13_5: number;

declare const NSAppKitVersionNumber13_4: number;

declare const NSAppKitVersionNumber13_0: number;

declare const NSAppKitVersionNumber12_4: number;

declare const NSAppKitVersionNumber11_4: number;

declare const NSOutlineViewSelectionDidChangeNotification: string;

declare const NSAppKitVersionNumber11_3: number;

declare const NSAppKitVersionNumber10_15_4: number;

declare const NSF21FunctionKey: number;

declare const NSAppKitVersionNumber10_15_1: number;

declare const NSAppKitVersionNumber10_14_5: number;

declare const NSAppKitVersionNumber10_14_3: number;

declare const NSAppKitVersionNumber10_14: number;

declare const NSAppKitVersionNumber10_13_4: number;

declare const NSAppKitVersionNumber10_13_2: number;

declare const NSAppKitVersionNumber10_11_1: number;

declare const NSAppKitVersionNumber10_10_5: number;

declare const NSStatusWindowLevel: number;

declare const NSAppKitVersionNumber10_10_4: number;

declare const NSAccessibilityDescriptionListSubrole: string;

declare const NSAppKitVersionNumber10_10_3: number;

declare const NSAppKitVersionNumber10_7_3: number;

declare const NSAppKitVersionNumber10_7: number;

declare const NSAppearanceNameVibrantDark: string;

declare const NSAppKitVersionNumber10_5_3: number;

declare const NSAppKitVersionNumber10_5: number;

declare const NSAppKitVersionNumber10_4_4: number;

declare const NSAppKitVersionNumber10_4_1: number;

declare const NSAppKitVersionNumber10_3_5: number;

declare const NSAppKitVersionNumber10_3_2: number;

declare const NSAppKitVersionNumber10_2: number;

declare const NSAppKitVersionNumber10_1: number;

declare const NSAppKitVersionNumber: number;

declare const NSValueTransformerBindingOption: string;

declare const NSSelectorNameBindingOption: string;

declare const NSRaisesForNotApplicableKeysBindingOption: string;

declare const NSMultipleValuesPlaceholderBindingOption: string;

declare const NSHandlesContentAsCompoundValueBindingOption: string;

declare const NSCreatesSortDescriptorBindingOption: string;

declare const NSConditionallySetsHiddenBindingOption: string;

declare const NSConditionallySetsEnabledBindingOption: string;

declare const NSAlwaysPresentsApplicationModalAlertsBindingOption: string;

declare const NSAllowsNullArgumentBindingOption: string;

declare const NSValueURLBinding: string;

declare const NSApplicationDidChangeOcclusionStateNotification: string;

declare const NSValueBinding: string;

declare const NSTextColorBinding: string;

declare const NSSelectionIndexesBinding: string;

declare const NSSelectedValuesBinding: string;

declare const NSSelectedObjectsBinding: string;

declare const NSSelectedObjectBinding: string;

declare const NSSelectedLabelBinding: string;

declare const NSSelectedIndexBinding: string;

declare const NSPositioningRectBinding: string;

declare const NSMixedStateImageBinding: string;

declare const NSMinValueBinding: string;

declare const NSMaxValueBinding: string;

declare const NSManagedObjectContextBinding: string;

declare const NSAccessibilityAnnotationLocation: string;

declare const NSLocalizedKeyDictionaryBinding: string;

declare const NSIsIndeterminateBinding: string;

declare const NSHeaderTitleBinding: string;

declare const NSFontNameBinding: string;

declare const NSFilterPredicateBinding: string;

declare const NSTextViewWillChangeNotifyingTextViewNotification: string;

declare const NSAppKitVersionNumber10_14_2: number;

declare const NSExcludedKeysBinding: string;

declare const NSEditableBinding: string;

declare const NSDoubleClickArgumentBinding: string;

declare const NSDisplayPatternValueBinding: string;

declare const NSContentValuesBinding: string;

declare const NSContentObjectBinding: string;

declare const NSContentDictionaryBinding: string;

declare const NSContentBinding: string;

declare const NSAttributedStringBinding: string;

declare const NSAnimationDelayBinding: string;

declare const NSAnimateBinding: string;

declare const NSOptionsKey: string;

declare const NSMultipleValuesMarker: interop.Object;

declare const NSTextListMarkerDisc: string;

declare const NSAppKitVersionNumber10_8: number;

declare const NSClipPagination: interop.Enum<typeof NSPrintingPaginationMode>;

declare const NSPrintPaperFeed: string;

declare const NSPrintFormName: string;

declare const NSPrintCancelJob: string;

declare const NSPrintSaveJob: string;

declare const NSPrintSpoolJob: string;

declare const NSPrintJobSavingURL: string;

declare const NSPrintPrinterName: string;

declare const NSPrintFaxNumber: string;

declare const NSPrintPagesAcross: string;

declare const NSPrintReversePageOrder: string;

declare const NSPopoverCloseReasonStandard: string;

declare const NSPrintLastPage: string;

declare const NSPrintCopies: string;

declare const NSAccessibilityMaxValueAttribute: string;

declare const NSPrintPrinter: string;

declare const NSPrintVerticalPagination: string;

declare const NSPrintVerticallyCentered: string;

declare const NSPrintHorizontallyCentered: string;

declare const NSTickMarkRight: interop.Enum<typeof NSTickMarkPosition>;

declare const NSWindowWillStartLiveResizeNotification: string;

declare const NSPrintLeftMargin: string;

declare const NSPrintScalingFactor: string;

declare const NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification: string;

declare const NSShellCommandFileType: string;

declare const NSDirectoryFileType: string;

declare const NSWorkspaceRecycleOperation: string;

declare const NSWorkspaceEncryptOperation: string;

declare const NSWorkspaceCompressOperation: string;

declare const NSWorkspaceLaunchConfigurationAppleEvent: string;

declare const NSWorkspaceSessionDidBecomeActiveNotification: string;

declare const NSWorkspaceScreensDidSleepNotification: string;

declare const NSWorkspaceDidWakeNotification: string;

declare const NS16BitBigEndianBitmapFormat: interop.Enum<typeof NSBitmapFormat>;

declare const NSWorkspaceWillSleepNotification: string;

declare const NSAppKitVersionNumber10_14_4: number;

declare const NSWorkspaceDidUnmountNotification: string;

declare const NSWorkspaceVolumeOldURLKey: string;

declare const NSWorkspaceVolumeLocalizedNameKey: string;

declare const NSWorkspaceDidUnhideApplicationNotification: string;

declare const NSWorkspaceDidTerminateApplicationNotification: string;

declare const NSWorkspaceApplicationKey: string;

declare const NSWorkspaceDesktopImageAllowClippingKey: string;

declare const NSWorkspaceDesktopImageScalingKey: string;

declare const NSBrowserIllegalDelegateException: string;

declare const NSNibLoadingException: string;

declare const NSPPDIncludeStackUnderflowException: string;

declare const NSWindowServerCommunicationException: string;

declare const NSTIFFException: string;

declare const NSTypedStreamVersionException: string;

declare const NSBadRTFStyleSheetException: string;

declare const NSTextLineTooLongException: string;

declare const NSGraphicsContextPSFormat: string;

declare const NSWindowSharingErrorMinimum: number;

declare const NSWindowSharingRequestNoEligibleSession: number;

declare const NSWindowSharingRequestAlreadyRequested: number;

declare const NSWorkspaceErrorMinimum: number;

declare const NSWorkspaceAuthorizationInvalidError: number;

declare const NSSharingServiceErrorMaximum: number;

declare const NSServiceErrorMaximum: number;

declare const NSServiceErrorMinimum: number;

declare const NSServiceApplicationLaunchFailedError: number;

declare const NSTextReadWriteErrorMaximum: number;

declare const NSTextReadInapplicableDocumentTypeError: number;

declare const NSUnderlineStrikethroughMask: number;

declare const NSSingleUnderlineStyle: number;

declare const NSVerticalGlyphFormAttributeName: string;

declare const NSExpansionAttributeName: string;

declare const NSUsesScreenFontsDocumentAttribute: string;

declare const NSCharacterShapeAttributeName: string;

declare const NSUnderlineByWord: interop.Enum<typeof NSUnderlineStyle>;

declare const NSUnderlinePatternDashDotDot: interop.Enum<typeof NSUnderlineStyle>;

declare const NSUnderlinePatternSolid: interop.Enum<typeof NSUnderlineStyle>;

declare const NSWebPreferencesDocumentOption: string;

declare const NSTextEncodingNameDocumentOption: string;

declare const NSTopMarginDocumentAttribute: string;

declare const NSManagerDocumentAttribute: string;

declare const NSCreationTimeDocumentAttribute: string;

declare const NSCommentDocumentAttribute: string;

declare const NSAuthorDocumentAttribute: string;

declare const NSSubjectDocumentAttribute: string;

declare const NSFileTypeDocumentAttribute: string;

declare const NSWindowSharingReadWrite: interop.Enum<typeof NSWindowSharingType>;

declare const NSSuperscriptAttributeName: string;

declare const NSSpellingStateAttributeName: string;

declare const NSTextAlternativesAttributeName: string;

declare const NSMarkedClauseSegmentAttributeName: string;

declare const NSMenuDidChangeItemNotification: string;

declare const NSMenuDidSendActionNotification: string;

declare const NSMenuWillSendActionNotification: string;

declare const NSPositiveDoubleType: number;

declare const NSTextContentTypeBirthdateMonth: string;

declare const NSFloatType: number;

declare const NSControlTintDidChangeNotification: string;

declare const NSMixedState: number;

declare const NSNaturalTextAlignment: interop.Enum<typeof NSTextAlignment>;

declare const NSJustifiedTextAlignment: interop.Enum<typeof NSTextAlignment>;

declare const NSTextWritingDirectionEmbedding: number;

declare const NSCancelTextMovement: number;

declare const NSDownTextMovement: number;

declare const NSUpTextMovement: number;

declare const NSLeftTextMovement: number;

declare const NSViewFocusDidChangeNotification: string;

declare const NSBacktabTextMovement: number;

declare const NSDeviceIndependentModifierFlagsMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSReturnTextMovement: number;

declare const NSTextMovementUserInfoKey: string;

declare const NSTextDidChangeNotification: string;

declare const NSDeleteCharacter: number;

declare const NSAccessibilityTitleAttribute: string;

declare const NSBackTabCharacter: number;

declare const NSFormFeedCharacter: number;

declare const NSViewGlobalFrameDidChangeNotification: string;

declare const NSSpeechErrorOldestCode: string;

declare const NSFontCollectionFavorites: string;

declare const NSViewBoundsDidChangeNotification: string;

declare const NSViewFrameDidChangeNotification: string;

declare const NSDefinitionPresentationTypeDictionaryApplication: string;

declare const NSDefinitionPresentationTypeKey: string;

declare const NSFullScreenModeAllScreens: string;

declare const NSAccessibilityCollectionListSubrole: string;

declare const NSImageNameTouchBarColorPickerFont: string;

declare const NSAccessibilitySwitchSubrole: string;

declare const NSAccessibilityToggleSubrole: string;

declare const NSAccessibilityDefinitionListSubrole: string;

declare const NSAccessibilitySortButtonSubrole: string;

declare const NSParagraphSeparatorCharacter: number;

declare const NSAccessibilityTimelineSubrole: string;

declare const NSAccessibilityTextLinkSubrole: string;

declare const NSAccessibilityTextAttachmentSubrole: string;

declare const NSAccessibilityIncrementPageSubrole: string;

declare const NSAccessibilityDecrementArrowSubrole: string;

declare const NSAccessibilityIncrementArrowSubrole: string;

declare const NSAccessibilityDialogSubrole: string;

declare const NSAccessibilityToolbarButtonSubrole: string;

declare const NSAccessibilityCloseButtonSubrole: string;

declare const NSAccessibilityLayoutAreaRole: string;

declare const NSAccessibilityCellRole: string;

declare const NSAccessibilityRelevanceIndicatorRole: string;

declare const NSAccessibilityDisclosureTriangleRole: string;

declare const NSAccessibilityRulerMarkerRole: string;

declare const NSAccessibilityHelpTagRole: string;

declare const NSAccessibilitySheetRole: string;

declare const NSContentPlacementTagBindingOption: string;

declare const NSAccessibilityGrowAreaRole: string;

declare const NSAccessibilitySplitGroupRole: string;

declare const NSAccessibilityBrowserRole: string;

declare const NSAccessibilityDrawerRole: string;

declare const NSAccessibilityWindowRole: string;

declare const NSFontErrorMinimum: number;

declare const NSAccessibilityRadioButtonRole: string;

declare const NSAccessibilityProgressIndicatorRole: string;

declare const NSAccessibilityBusyIndicatorRole: string;

declare const NSAccessibilityRowRole: string;

declare const NSAccessibilityMenuItemRole: string;

declare const NSAccessibilityImageRole: string;

declare const NSAccessibilityValueIndicatorRole: string;

declare const NSAccessibilityScrollBarRole: string;

declare const NSAccessibilityListRole: string;

declare const NSAccessibilityPopUpButtonRole: string;

declare const NSAccessibilityStaticTextRole: string;

declare const NSAccessibilityStandardWindowSubrole: string;

declare const NSRuleEditorPredicateLeftExpression: string;

declare const NSAccessibilityTabGroupRole: string;

declare const NSAccessibilitySliderRole: string;

declare const NSCollectionElementKindSectionFooter: string;

declare const NSAccessibilityRowCollapsedNotification: string;

declare const NSAccessibilityRowExpandedNotification: string;

declare const NSFontErrorMaximum: number;

declare const NSAccessibilitySelectedRowsChangedNotification: string;

declare const NSAccessibilitySelectedChildrenChangedNotification: string;

declare const NSAccessibilityHelpTagCreatedNotification: string;

declare const NSAccessibilityLayoutChangedNotification: string;

declare const NSAccessibilityResizedNotification: string;

declare const NSAccessibilityTitleChangedNotification: string;

declare const NSAppKitVersionNumber10_9: number;

declare const NSAccessibilitySheetCreatedNotification: string;

declare const NSAccessibilityDrawerCreatedNotification: string;

declare const NSAccessibilityWindowDeminiaturizedNotification: string;

declare const NSAccessibilityWindowMiniaturizedNotification: string;

declare const NSAccessibilityWindowMovedNotification: string;

declare const NSAccessibilityWindowCreatedNotification: string;

declare const NSAccessibilityFocusedUIElementChangedNotification: string;

declare const NSAccessibilityShowAlternateUIAction: string;

declare const NSAccessibilityDeleteAction: string;

declare const NSAccessibilityConfirmAction: string;

declare const NSAccessibilityDecrementAction: string;

declare const NSToolbarShowFontsItemIdentifier: string;

declare const NSAccessibilityUnknownUnitValue: string;

declare const NSImageNameTouchBarColorPickerStroke: string;

declare const NSAccessibilityInchesUnitValue: string;

declare const NSAccessibilityLeftTabStopMarkerTypeValue: string;

declare const NSAccessibilityMarkerTypeAttribute: string;

declare const NSAccessibilityUnitsAttribute: string;

declare const NSAccessibilityMarkerGroupUIElementAttribute: string;

declare const NSAccessibilityMatteContentUIElementAttribute: string;

declare const NSAccessibilityAllowedValuesAttribute: string;

declare const NSAccessibilityDisclosureLevelAttribute: string;

declare const NSImageHintCTM: string;

declare const NSAccessibilityDisclosingAttribute: string;

declare const NSAccessibilityAscendingSortDirectionValue: string;

declare const NSAccessibilityHandlesAttribute: string;

declare const NSAccessibilityLayoutSizeForScreenSizeParameterizedAttribute: string;

declare const NSAccessibilityVerticalUnitsAttribute: string;

declare const NSAdaptiveImageGlyphAttributeName: string;

declare const NSAccessibilityHorizontalUnitsAttribute: string;

declare const NSAccessibilityColumnIndexRangeAttribute: string;

declare const NSAccessibilityRowIndexRangeAttribute: string;

declare const NSAccessibilityRowHeaderUIElementsAttribute: string;

declare const NSAccessibilityVisibleCellsAttribute: string;

declare const NSAccessibilitySelectedCellsAttribute: string;

declare const NSAccessibilitySortDirectionAttribute: string;

declare const NSAccessibilityRowsAttribute: string;

declare const NSAccessibilitySearchMenuAttribute: string;

declare const NSAccessibilityHorizontalOrientationValue: string;

declare const NSAccessibilityOrientationAttribute: string;

declare const NSAccessibilityExtrasMenuBarAttribute: string;

declare const NSAccessibilityFullScreenButtonAttribute: string;

declare const NSAccessibilityCancelButtonAttribute: string;

declare const NSAccessibilityModalAttribute: string;

declare const NSAccessibilityToolbarButtonAttribute: string;

declare const NSFPSetButton: number;

declare const NSAccessibilityZoomButtonAttribute: string;

declare const NSAccessibilityCloseButtonAttribute: string;

declare const NSAccessibilityMainAttribute: string;

declare const NSAccessibilityUnitDescriptionAttribute: string;

declare const NSAccessibilityVisibleNameKey: string;

declare const NSAccessibilityFontFamilyKey: string;

declare const NSAccessibilityFontNameKey: string;

declare const NSAccessibilityLanguageTextAttribute: string;

declare const NSAccessibilityListItemIndexTextAttribute: string;

declare const NSAccessibilityAutocorrectedTextAttribute: string;

declare const NSContentObjectsBinding: string;

declare const NSImageCacheException: string;

declare const NSImageNameTouchBarIconViewTemplate: string;

declare const NSServiceRequestTimedOutError: number;

declare const NSAccessibilityStrikethroughTextAttribute: string;

declare const NSAccessibilityBackgroundColorTextAttribute: string;

declare const NSAccessibilityFontTextAttribute: string;

declare const NSAccessibilityAttributedStringForRangeParameterizedAttribute: string;

declare const NSAccessibilityRangeForIndexParameterizedAttribute: string;

declare const NSAccessibilityRangeForPositionParameterizedAttribute: string;

declare const NSAccessibilityStringForRangeParameterizedAttribute: string;

declare const NSAccessibilityLineForIndexParameterizedAttribute: string;

declare const NSAccessibilitySelectedTextRangesAttribute: string;

declare const NSAccessibilitySharedCharacterRangeAttribute: string;

declare const NSAccessibilitySelectedTextAttribute: string;

declare const NSAccessibilityLinkedUIElementsAttribute: string;

declare const NSAccessibilityTitleUIElementAttribute: string;

declare const NSWindowDidBecomeKeyNotification: string;

declare const NSAccessibilitySplittersAttribute: string;

declare const NSAccessibilitySelectedAttribute: string;

declare const NSAccessibilityExpandedAttribute: string;

declare const NSSelectedIdentifierBinding: string;

declare const NSAccessibilityFilenameAttribute: string;

declare const NSAccessibilityOverflowButtonAttribute: string;

declare const NSAccessibilityVerticalScrollBarAttribute: string;

declare const NSAccessibilityEditedAttribute: string;

declare const NSAccessibilityHeaderAttribute: string;

declare const NSAccessibilityPreviousContentsAttribute: string;

declare const NSAccessibilityValueDescriptionAttribute: string;

declare const NSAccessibilityVisibleChildrenAttribute: string;

declare const NSAccessibilityTopLevelUIElementAttribute: string;

declare const NSAccessibilityHelpAttribute: string;

declare const NSAccessibilitySubroleAttribute: string;

declare const NSWorkspaceDestroyOperation: string;

declare const NSAccessibilityRoleAttribute: string;

declare const NSAccessibilityErrorCodeExceptionInfo: string;

declare const NSModeSwitchFunctionKey: number;

declare const NSInsertCharFunctionKey: number;

declare const NSDeleteLineFunctionKey: number;

declare const NSFontCollectionAllFonts: string;

declare const NSClearDisplayFunctionKey: number;

declare const NSSystemFunctionKey: number;

declare const NSBreakFunctionKey: number;

declare const NSWindowWillMoveNotification: string;

declare const NSScrollLockFunctionKey: number;

declare const NSPrintScreenFunctionKey: number;

declare const NSPageUpFunctionKey: number;

declare const NSDeleteFunctionKey: number;

declare const NSF35FunctionKey: number;

declare const NSF34FunctionKey: number;

declare const NSF33FunctionKey: number;

declare const NSF30FunctionKey: number;

declare const NSF27FunctionKey: number;

declare const NSF25FunctionKey: number;

declare const NSF18FunctionKey: number;

declare const NSF17FunctionKey: number;

declare const NSF16FunctionKey: number;

declare const NSF15FunctionKey: number;

declare const NSF14FunctionKey: number;

declare const NSF10FunctionKey: number;

declare const NSF3FunctionKey: number;

declare const NSF2FunctionKey: number;

declare const NSF1FunctionKey: number;

declare const NSRightArrowFunctionKey: number;

declare const NSUpArrowFunctionKey: number;

declare const NSTouchEventSubtype: interop.Enum<typeof NSEventSubtype>;

declare const NSWorkspaceVolumeOldLocalizedNameKey: string;

declare const NSAccessibilityTabsAttribute: string;

declare const NSTabletPointEventSubtype: interop.Enum<typeof NSEventSubtype>;

declare const NSMouseEventSubtype: interop.Enum<typeof NSEventSubtype>;

declare const NSPowerOffEventType: interop.Enum<typeof NSEventSubtype>;

declare const NSAWTEventType: interop.Enum<typeof NSEventSubtype>;

declare const NSScreenChangedEventType: interop.Enum<typeof NSEventSubtype>;

declare const NSApplicationDeactivatedEventType: interop.Enum<typeof NSEventSubtype>;

declare const NSApplicationActivatedEventType: interop.Enum<typeof NSEventSubtype>;

declare const NSPenUpperSideMask: interop.Enum<typeof NSEventButtonMask>;

declare const NSPenLowerSideMask: interop.Enum<typeof NSEventButtonMask>;

declare const NSAccessibilityVerticalOrientationValue: string;

declare const NSPenTipMask: interop.Enum<typeof NSEventButtonMask>;

declare const NSPenPointingDevice: interop.Enum<typeof NSPointingDeviceType>;

declare const NSUnknownPointingDevice: interop.Enum<typeof NSPointingDeviceType>;

declare const NSComboBoxWillPopUpNotification: string;

declare const NSFunctionKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSHelpKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSCommandKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSAlternateKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSTextDidEndEditingNotification: string;

declare const NSControlKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSOtherMouseUpMask: interop.Enum<typeof NSEventMask>;

declare const NSTabletPointMask: interop.Enum<typeof NSEventMask>;

declare const NSPeriodicMask: interop.Enum<typeof NSEventMask>;

declare const NSAppKitDefinedMask: interop.Enum<typeof NSEventMask>;

declare const NSKeyUpMask: interop.Enum<typeof NSEventMask>;

declare const NSKeyDownMask: interop.Enum<typeof NSEventMask>;

declare const NSCompositeColorDodge: interop.Enum<typeof NSCompositingOperation>;

declare const NSMouseExitedMask: interop.Enum<typeof NSEventMask>;

declare const NSLeftMouseDraggedMask: interop.Enum<typeof NSEventMask>;

declare const NSRightMouseUpMask: interop.Enum<typeof NSEventMask>;

declare const NSMouseExited: interop.Enum<typeof NSEventType>;

declare const NSOtherMouseDragged: interop.Enum<typeof NSEventType>;

declare const NSOtherMouseDown: interop.Enum<typeof NSEventType>;

declare const NSCursorUpdate: interop.Enum<typeof NSEventType>;

declare const NSFlagsChanged: interop.Enum<typeof NSEventType>;

declare const NSKeyUp: interop.Enum<typeof NSEventType>;

declare const NSRightMouseUp: interop.Enum<typeof NSEventType>;

declare const NSRightMouseDown: interop.Enum<typeof NSEventType>;

declare const NSFontFamilyAttribute: string;

declare const NSLeftMouseUp: interop.Enum<typeof NSEventType>;

declare const NSDeviceSize: string;

declare const NSDeviceIsScreen: string;

declare const NSDeviceBitsPerSample: string;

declare const NSProgressIndicatorSpinningStyle: interop.Enum<typeof NSProgressIndicatorStyle>;

declare const NSLightGray: number;

declare const NSCustomColorSpace: string;

declare const NSNamedColorSpace: string;

declare const NSDeviceCMYKColorSpace: string;

declare const NSDeviceWhiteColorSpace: string;

declare const NSCalibratedRGBColorSpace: string;

declare const NSCompositeColor: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeHue: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeDifference: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeSoftLight: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeLighten: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeOverlay: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeMultiply: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeHighlight: interop.Enum<typeof NSCompositingOperation>;

declare const NSAccessibilityFocusedAttribute: string;

declare const NSCompositePlusDarker: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeXOR: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeDestinationAtop: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeDestinationOut: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeDestinationOver: interop.Enum<typeof NSCompositingOperation>;

declare const NSCompositeSourceOut: interop.Enum<typeof NSCompositingOperation>;

declare const NSContentSetBinding: string;

declare const NSCompositeCopy: interop.Enum<typeof NSCompositingOperation>;

declare const NSPICTPboardType: string;

declare const NSFindPboard: string;

declare const NSShiftKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSGeneralPboard: string;

declare const NSFilesPromisePboardType: string;

declare const NSVCardPboardType: string;

declare const NSRTFDPboardType: string;

declare const NSPasteboardURLReadingFileURLsOnlyKey: string;

declare const NSPasteboardNameFont: string;

declare const NSPasteboardNameGeneral: string;

declare const NSAccessibilityCriticalValueAttribute: string;

declare const NSPasteboardTypeTextFinderOptions: string;

declare const NSPasteboardTypeColor: string;

declare const NSFontFixedAdvanceAttribute: string;

declare const NSAccessibilityIdentifierAttribute: string;

declare const NSPasteboardTypeRuler: string;

declare const NSWorkspaceActiveSpaceDidChangeNotification: string;

declare const NSPasteboardTypeRTFD: string;

declare const NSPasteboardTypePNG: string;

declare const NSPasteboardTypePDF: string;

declare const NSAppKitVersionNumber10_10_2: number;

declare const NSPasteboardTypeString: string;

declare const NSAppearanceNameAccessibilityHighContrastVibrantLight: string;

declare const NSAppearanceNameAccessibilityHighContrastDarkAqua: string;

declare const NSAppearanceNameAccessibilityHighContrastAqua: string;

declare const NSAnimationTriggerOrderOut: string;

declare const NSAccessibilityAnnotationLabel: string;

declare const NSAnimationTriggerOrderIn: string;

declare const NSViewAnimationEndFrameKey: string;

declare const NSAccessibilityUIElementDestroyedNotification: string;

declare const NSViewAnimationStartFrameKey: string;

declare const NSAccessibilityOrderedByRowAttribute: string;

declare const NSViewAnimationTargetKey: string;

declare const NSAnimationProgressMark: string;

declare const NSAnimationProgressMarkNotification: string;

declare const NSSourceTextScalingDocumentOption: string;

declare const NSCharacterEncodingDocumentOption: string;

declare const NSAccessibilityShowMenuAction: string;

declare const NSHyphenationFactorDocumentAttribute: string;

declare const NSBackgroundColorDocumentAttribute: string;

declare const NSAccessibilityUnknownMarkerTypeValue: string;

declare const NSDefaultFontExcludedDocumentAttribute: string;

declare const NSViewSizeDocumentAttribute: string;

declare const NSRTFDTextDocumentType: string;

declare const NSImageHintInterpolation: string;

declare const NSTextHighlightStyleDefault: string;

declare const NSImageNameTouchBarTextRightAlignTemplate: string;

declare const NSTextEffectLetterpressStyle: string;

declare const NSTextHighlightColorSchemeAttributeName: string;

declare const NSTextHighlightStyleAttributeName: string;

declare const NSBaselineOffsetAttributeName: string;

declare const NSLinkAttributeName: string;

declare const NSShadowAttributeName: string;

declare const NSStrokeWidthAttributeName: string;

declare const NSTrackingAttributeName: string;

declare const NSParagraphStyleAttributeName: string;

declare const NSFontAttributeName: string;

declare const NSAccessibilityException: string;

declare const NSDisplayPatternBindingOption: string;

declare const NSImageFallbackBackgroundColor: string;

declare const NSSelectedTagBinding: string;

declare const NSUndoFunctionKey: number;

declare const NSOpenGLProfileVersion4_1Core: number;

declare const NSObservedKeyPathKey: string;

declare const NSAccessibilityChildrenAttribute: string;

declare const NSTextLayoutSectionRange: string;

declare const NSImageNameTouchBarTextStrikethroughTemplate: string;

declare const NSLinearSlider: interop.Enum<typeof NSSliderType>;

declare const NSFontWeightHeavy: number;

declare const NSFontPanelFaceModeMask: number;

declare const NSFontItalicBinding: string;

declare const NSAccessibilityZoomButtonSubrole: string;

declare const NSFontFamilyNameBinding: string;

declare const NSWindowWillEnterFullScreenNotification: string;

declare const NSUnifiedTitleAndToolbarWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSAccessibilityAttachmentTextAttribute: string;

declare const NSAllowsEditingMultipleValuesSelectionBindingOption: string;

declare const NSSharingServiceNamePostOnFacebook: string;

declare const NSAppearanceNameDarkAqua: string;

declare const NSCompositeColorBurn: interop.Enum<typeof NSCompositingOperation>;

declare const NSGrayModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSPasteboardTypeURL: string;

declare const NSAccessibilityCentimetersUnitValue: string;

declare const NSCursorAttributeName: string;

declare const NSCMYKColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSInvokesSeparatelyWithArrayObjectsBindingOption: string;

declare const NSSortDescriptorsBinding: string;

declare const NSAppKitVersionNumber12_1: number;

declare const NSWorkspaceDidDeactivateApplicationNotification: string;

declare const NSAccessibilityApplicationActivatedNotification: string;

declare const NSHiddenBinding: string;

declare const NSAppKitVersionNumber10_4_7: number;

declare const NSImageNameTouchBarTextItalicTemplate: string;

declare const NSAppKitVersionNumber10_4_3: number;

declare const NSTypeIdentifierPhoneNumberText: string;

declare const NSAccessibilitySelectedColumnsAttribute: string;

declare const NSPaperSizeDocumentAttribute: string;

declare const NSAccessibilityPriorityKey: string;

declare const NSImageNameStatusNone: string;

declare const NSRecessedBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSDefinitionPresentationTypeOverlay: string;

declare const NSComboBoxSelectionIsChangingNotification: string;

declare const NSVariableStatusItemLength: number;

declare const NSSpeechModeNormal: string;

declare const NSApplicationWillBecomeActiveNotification: string;

declare const NSAccessibilityPointsUnitValue: string;

declare const NSInkTextPboardType: string;

declare const NSToolbarDidRemoveItemNotification: string;

declare const NSAccessibilityNumberOfCharactersAttribute: string;

declare const NSTextFinderCaseInsensitiveKey: string;

declare const NSRuleEditorPredicateOperatorType: string;

declare const NSAccessibilityMovedNotification: string;

declare const NSTextWriteInapplicableDocumentTypeError: number;

declare const NSBackgroundStyleLight: interop.Enum<typeof NSBackgroundStyle>;

declare const NSOpenGLPFAAccelerated: number;

declare const NSMenuDidRemoveItemNotification: string;

declare const NSLeftMouseDownMask: interop.Enum<typeof NSEventMask>;

declare const NSPasteboardTypeTIFF: string;

declare const NSSpeechErrorNewestCode: string;

declare const NSWindowDidExitVersionBrowserNotification: string;

declare const NSWebArchiveTextDocumentType: string;

declare const NSMomentaryChangeButton: interop.Enum<typeof NSButtonType>;

declare const NSTextScalingDocumentAttribute: string;

declare const NSFontWidthCompressed: number;

declare const NSImageNameTouchBarNewFolderTemplate: string;

declare const NSPrintTopMargin: string;

declare const NSWindowDidChangeScreenNotification: string;

declare const NSTextContentTypeCreditCardSecurityCode: string;

declare const NSFontVariationAttribute: string;

declare const NSFontCollectionWasHidden: string;

declare const NSDragPboard: string;

declare const NSFontWeightSemibold: number;

declare const NSCompositeSourceOver: interop.Enum<typeof NSCompositingOperation>;

declare const NSServiceMalformedServiceDictionaryError: number;

declare const NSImageNameBluetoothTemplate: string;

declare const NSRulerPboard: string;

declare const NSOpenGLCPSurfaceOpacity: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSOpenGLPFAAllowOfflineRenderers: number;

declare const NSTextDidBeginEditingNotification: string;

declare const NSAccessibilityVerticalUnitDescriptionAttribute: string;

declare const NSOpenGLPFASingleRenderer: number;

declare const NSFontWidthExpanded: number;

declare const NSUnderlinePatternDash: interop.Enum<typeof NSUnderlineStyle>;

declare const NSWorkspaceLaunchConfigurationArchitecture: string;

declare const NSToolTipBinding: string;

declare const NSImageRepMatchesDevice: number;

declare const NSPlainFileType: string;

declare const NSF7FunctionKey: number;

declare const NSAccessibilityFontSizeKey: string;

declare const NSLigatureAttributeName: string;

declare const NSSpeechSynthesizerInfoProperty: string;

declare const NSAccessibilitySplitterRole: string;

declare const NSMacSimpleTextDocumentType: string;

declare const NSAccessibilityRowCountAttribute: string;

declare const NSSelectsAllWhenSettingContentBindingOption: string;

declare const NSSpeechErrorCount: string;

declare const NSPredicateFormatBindingOption: string;

declare const NSAccessibilityVisibleRowsAttribute: string;

declare const NSImageNameStatusUnavailable: string;

declare const NSWindowSharingRequestUnspecifiedError: number;

declare const NSTouchBarItemPriorityLow: number;

declare const NSInitialKeyBinding: string;

declare const NSLayoutPriorityFittingSizeCompression: number;

declare const NSAccessibilityParentAttribute: string;

declare const NSFitPagination: interop.Enum<typeof NSPrintingPaginationMode>;

declare const NSTextContentTypePassword: string;

declare const NSImageNameRevealFreestandingTemplate: string;

declare const NSTextContentTypeAddressCityAndState: string;

declare const NSWorkspaceLinkOperation: string;

declare const NSFontCascadeListAttribute: string;

declare const NSRightMouseDragged: interop.Enum<typeof NSEventType>;

declare const NSTextReadWriteErrorMinimum: number;

declare const NSAppKitVersionNumber10_6: number;

declare const NSFontPanelUnderlineEffectModeMask: number;

declare const NSPasteboardTypeMultipleTextSelection: string;

declare const NSAccessibilityScreenPointForLayoutPointParameterizedAttribute: string;

declare const NSOpenGLCPHasDrawable: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSDirectionalEdgeInsetsZero: NSDirectionalEdgeInsets;

declare const NSAccessibilityCellForColumnAndRowParameterizedAttribute: string;

declare const NSWindowFullScreenButton: interop.Enum<typeof NSWindowButton>;

declare const NSColorListDidChangeNotification: string;

declare const NSAppearanceNameLightContent: string;

declare const NSAccessibilityToolbarRole: string;

declare const NSWindowDidMiniaturizeNotification: string;

declare const NSAccessibilityGrowAreaAttribute: string;

declare const NSTextListMarkerUppercaseHexadecimal: string;

declare const NSAccessibilityMenuRole: string;

declare const NSAccessibilityMarkedMisspelledTextAttribute: string;

declare const NSTextContentTypePostalCode: string;

declare const NSViewModeDocumentAttribute: string;

declare const NSComboBoxSelectionDidChangeNotification: string;

declare const NSVoiceGenderMale: string;

declare const NSWorkspaceScreensDidWakeNotification: string;

declare const NSAppKitVersionNumber10_3_7: number;

declare const NSAccessibilityDefaultButtonAttribute: string;

declare const NSPauseFunctionKey: number;

declare const NSServiceMiscellaneousError: number;

declare const NSTabletProximity: interop.Enum<typeof NSEventType>;

declare const NSVisibleBinding: string;

declare const NSFullScreenModeApplicationPresentationOptions: string;

declare const NSAccessibilityMenuBarItemRole: string;

declare const NSPrintPaperName: string;

declare const NSAppearanceNameAccessibilityHighContrastVibrantDark: string;

declare const NSOpenGLCPRasterizationEnable: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSWordTablesWriteException: string;

declare const NSEnterCharacter: number;

declare const NSPasteboardTypeHTML: string;

declare const NSFPCurrentField: number;

declare const NSSpeechModeText: string;

declare const NSMomentaryPushInButton: interop.Enum<typeof NSButtonType>;

declare const NSImageNameTouchBarColorPickerFill: string;

declare const NSGlyphInfoAttributeName: string;

declare const NSApplicationFileType: string;

declare const NSImageNameTouchBarGoUpTemplate: string;

declare const NSWindows95InterfaceStyle: number;

declare const NSAccessibilityGroupRole: string;

declare const NSTextContentTypeBirthdateDay: string;

declare const NSRoundLineCapStyle: interop.Enum<typeof NSLineCapStyle>;

declare const NSModalPanelRunLoopMode: string;

declare const NSAppKitVersionNumber11_0: number;

declare const NSImageNamePathTemplate: string;

declare const NSVoiceGenderNeuter: string;

declare const NSPrevFunctionKey: number;

declare const NSTextContentTypeFullStreetAddress: string;

declare const NSModalResponseOK: number;

declare const NSCompositePlusLighter: interop.Enum<typeof NSCompositingOperation>;

declare const NSConditionallySetsEditableBindingOption: string;

declare const NSDefaultAttributesDocumentAttribute: string;

declare const NSTextContentTypeAddressState: string;

declare const NSFontBoldTrait: number;

declare const NSAppKitVersionNumber10_15_6: number;

declare const NSImageNameExitFullScreenTemplate: string;

declare const NSTextContentTypeBirthdate: string;

declare const NSAttachmentAttributeName: string;

declare const NSAccessibilityCenterTabStopMarkerTypeValue: string;

declare const NSTexturedBackgroundWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSAccessibilityLinkRole: string;

declare const NSGlyphAttributeInscribe: number;

declare const NSImageNameTouchBarSkipAheadTemplate: string;

declare const NSUserFunctionKey: number;

declare const NSAccessibilityWindowResizedNotification: string;

declare const NSFontModernSerifsClass: number;

declare const NSImageNameRemoveTemplate: string;

declare const NSRegularControlSize: interop.Enum<typeof NSControlSize>;

declare const NSAppKitVersionNumber14_1: number;

declare const NSPrintPanelAccessorySummaryItemDescriptionKey: string;

declare const NSAppKitVersionNumber10_7_4: number;

declare const NSAccessibilityCancelAction: string;

declare const NSMinWidthBinding: string;

declare const NSGraphicsContextRepresentationFormatAttributeName: string;

declare const NSImageNameInfo: string;

declare const NSFontTextStyleHeadline: string;

declare const NSOffState: number;

declare const NSPrintJobDisposition: string;

declare const NSAccessibilityStyleRangeForIndexParameterizedAttribute: string;

declare const NSAttachmentCharacter: number;

declare const NSAccessibilityTextAreaRole: string;

declare const NSWindowDidResignMainNotification: string;

declare const NSPrintAllPresetsJobStyleHint: string;

declare const NSOtherMouseDraggedMask: interop.Enum<typeof NSEventMask>;

declare const NSValuePathBinding: string;

declare const NSImageNameRefreshTemplate: string;

declare const NSImageNameTouchBarRefreshTemplate: string;

declare const NSOpenGLCPSwapRectangle: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSTIFFPboardType: string;

declare const NSF9FunctionKey: number;

declare const NSTabularTextPboardType: string;

declare const NSFlagsChangedMask: interop.Enum<typeof NSEventMask>;

declare const NSFPSizeTitle: number;

declare const NSDeviceRGBColorSpace: string;

declare const NSAccessibilityFocusedWindowChangedNotification: string;

declare const NSTextHighlightColorSchemeDefault: string;

declare const NSGraphicsContextPDFFormat: string;

declare const NSOpenGLPFAAuxDepthStencil: number;

declare const NSAppearanceNameAqua: string;

declare const NSDocumentTypeDocumentOption: string;

declare const NSSpeechDictionaryLocaleIdentifier: string;

declare const NSAccessibilityPicasUnitValue: string;

declare const NSServiceApplicationNotFoundError: number;

declare const NSRightMouseDownMask: interop.Enum<typeof NSEventMask>;

declare const NSScrollViewWillStartLiveMagnifyNotification: string;

declare const NSToolbarItemVisibilityPriorityUser: number;

declare const NSNoSelectionPlaceholderBindingOption: string;

declare const NSTextHighlightColorSchemeBlue: string;

declare const NSAppKitVersionNumber10_12_1: number;

declare const NSMainMenuWindowLevel: number;

declare const NSDeviceColorSpaceName: string;

declare const NSFilesystemFileType: string;

declare const NSDisclosureBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSApplicationDidFinishRestoringWindowsNotification: string;

declare const NSTouchBarItemIdentifierTextFormat: string;

declare const NSWindowSharingErrorMaximum: number;

declare const NSPushOnPushOffButton: interop.Enum<typeof NSButtonType>;

declare const NSLeftTextAlignment: interop.Enum<typeof NSTextAlignment>;

declare const NSF20FunctionKey: number;

declare const NSSharingServiceNameUseAsFacebookProfileImage: string;

declare const NSVoiceGenderFemale: string;

declare const NSAccessibilityContainsProtectedContentAttribute: string;

declare const NSImageNameFlowViewTemplate: string;

declare const NSAccessibilityInsertionPointLineNumberAttribute: string;

declare const NSFontPanelTextColorEffectModeMask: number;

declare const NSRepresentedFilenameBinding: string;

declare const NSWorkspaceDidMountNotification: string;

declare const NSPageDownFunctionKey: number;

declare const NSImageNameIconViewTemplate: string;

declare const NSFontSansSerifClass: number;

declare const NSTextCheckingReferenceDateKey: string;

declare const NSAppKitVirtualMemoryException: string;

declare const NSFullScreenModeSetting: string;

declare const NSFontCollectionIncludeDisabledFontsOption: string;

declare const NSPPDIncludeStackOverflowException: string;

declare const NSImageNameStopProgressTemplate: string;

declare const NSAppKitVersionNumber10_0: number;

declare const NSNextFunctionKey: number;

declare const NSBadRTFDirectiveException: string;

declare const NSDoubleType: number;

declare const NSOpenGLPFAAuxBuffers: number;

declare const NSAccessibilityTabButtonSubrole: string;

declare const NSAccessibilityFocusedUIElementAttribute: string;

declare const NSFontExpandedTrait: number;

declare const NSAccessibilityMinimizeButtonAttribute: string;

declare const NSDockWindowLevel: number;

declare const NSPrintDetailedErrorReporting: string;

declare const NSTextContentTypeCreditCardFamilyName: string;

declare const NSBorderlessWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSMomentaryLight: interop.Enum<typeof NSButtonType>;

declare const NSOutlineViewItemDidCollapseNotification: string;

declare const NSHTMLPboardType: string;

declare const NSFontTextStyleTitle1: string;

declare const NSImageNameTouchBarRotateLeftTemplate: string;

declare const NSFPSizeField: number;

declare const NSEraserPointingDevice: interop.Enum<typeof NSPointingDeviceType>;

declare const NSImageNameStatusPartiallyAvailable: string;

declare const NSWindowDidUpdateNotification: string;

declare const NSLeftArrowFunctionKey: number;

declare const NSAccessibilityFocusedWindowAttribute: string;

declare const NSImageNameTouchBarFastForwardTemplate: string;

declare const NSApplicationDefinedMask: interop.Enum<typeof NSEventMask>;

declare const NSOpenGLPFAAllRenderers: number;

declare const NSAccessibilityColumnsAttribute: string;

declare const NSWarningValueBinding: string;

declare const NSImageNameTouchBarFolderMoveToTemplate: string;

declare const NSDraggingException: string;

declare const NSVoiceName: string;

declare const NSSubmenuWindowLevel: number;

declare const NSRightMarginDocumentAttribute: string;

declare const NSViewAnimationEffectKey: string;

declare const NSMacintoshInterfaceStyle: number;

declare const NSObliquenessAttributeName: string;

declare const NSAccessibilityURLAttribute: string;

declare const NSTextCheckingQuotesKey: string;

declare const NSDeviceIsPrinter: string;

declare const NSAccessibilitySharedFocusElementsAttribute: string;

declare const NSPrintSavePath: string;

declare const NSAccessibilityUnknownSubrole: string;

declare const NSAppKitVersionNumber10_12_2: number;

declare const NSTextEncodingNameDocumentAttribute: string;

declare const NSApplicationLaunchUserNotificationKey: string;

declare const NSImageRGBColorTable: string;

declare const NSAppKitVersionNumberWithPatternColorLeakFix: number;

declare const NSPrintManualFeed: string;

declare const NSCalibratedWhiteColorSpace: string;

declare const NSTextContentTypeLocation: string;

declare const NSAccessibilityHandleRole: string;

declare const NSViewZoomDocumentAttribute: string;

declare const NSPrintPagesPerSheet: string;

declare const NSAccessibilityLayoutItemRole: string;

declare const NSScrollWheel: interop.Enum<typeof NSEventType>;

declare const NSAccessibilityMenuBarAttribute: string;

declare const NSAppKitVersionNumber12_2: number;

declare const NSLeftMouseDragged: interop.Enum<typeof NSEventType>;

declare const NSOpenGLPFAAlphaSize: number;

declare const NSLeftMouseDown: interop.Enum<typeof NSEventType>;

declare const NSStopFunctionKey: number;

declare const NSImageNamePreferencesGeneral: string;

declare const NSAppKitVersionNumber11_5: number;

declare const NSRightTextAlignment: interop.Enum<typeof NSTextAlignment>;

declare const NSPrintHeaderAndFooter: string;

declare const NSTextHighlightColorSchemeOrange: string;

declare const NSFontVariationAxisNameKey: string;

declare const NSDarkGray: number;

declare const NSImageNameTouchBarAlarmTemplate: string;

declare const NSWorkspaceErrorMaximum: number;

declare const NSPPDIncludeNotFoundException: string;

declare const NSTouchBarItemIdentifierCharacterPicker: string;

declare const NSAccessibilityContentListSubrole: string;

declare const NSSpeechDictionaryAbbreviations: string;

declare const NSVoiceLanguage: string;

declare const NSImageNameTouchBarEnterFullScreenTemplate: string;

declare const NSCompositeClear: interop.Enum<typeof NSCompositingOperation>;

declare const NSNoInterfaceStyle: number;

declare const NSFontBoldBinding: string;

declare const NSImageLoopCount: string;

declare const NSCollectionElementKindInterItemGapIndicator: string;

declare const NSAccessibilityIndexAttribute: string;

declare const NSMouseMovedMask: interop.Enum<typeof NSEventMask>;

declare const NSImageNameTouchBarAddDetailTemplate: string;

declare const NSTextViewDidChangeTypingAttributesNotification: string;

declare const NSContextHelpModeDidActivateNotification: string;

declare const NSF22FunctionKey: number;

declare const NSBadComparisonException: string;

declare const NSMenuFunctionKey: number;

declare const NSAccessibilityCreatedNotification: string;

declare const NSWorkspaceDidActivateApplicationNotification: string;

declare const NSRightTextMovement: number;

declare const NSWorkspaceDecompressOperation: string;

declare const NSAppKitVersionNumberWithCustomSheetPosition: number;

declare const NSAppKitIgnoredException: string;

declare const NSAccessibilityTableRowSubrole: string;

declare const NSOtherMouseUp: interop.Enum<typeof NSEventType>;

declare const NSAccessibilityApplicationShownNotification: string;

declare const NSMaximumRecentsBinding: string;

declare const NSToolbarSeparatorItemIdentifier: string;

declare const NSFontTextStyleCaption1: string;

declare const NSAlternateImageBinding: string;

declare const NSAppKitVersionNumber11_1: number;

declare const NSF29FunctionKey: number;

declare const NSInlineBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSUnderlinePatternDashDot: interop.Enum<typeof NSUnderlineStyle>;

declare const NSSpellCheckerDidChangeAutomaticTextCompletionNotification: string;

declare const NSImageNameDotMac: string;

declare const NSImageNameTouchBarSkipBack15SecondsTemplate: string;

declare const NSYearMonthDatePickerElementFlag: interop.Enum<typeof NSDatePickerElementFlags>;

declare const NSAccessibilityFullScreenButtonSubrole: string;

declare const NSWorkspaceWillLaunchApplicationNotification: string;

declare const NSCriticalValueBinding: string;

declare const NSWorkspaceDesktopImageFillColorKey: string;

declare const NSAccessibilityDescriptionAttribute: string;

declare const NSOnOffButton: interop.Enum<typeof NSButtonType>;

declare const NSSharingServiceNamePostOnSinaWeibo: string;

declare const NSPasteboardNameDrag: string;

declare const NSAccessibilitySectionListSubrole: string;

declare const NSImageNameQuickLookTemplate: string;

declare const NSImageNameColorPanel: string;

declare const NSPPDParseException: string;

declare const NSPasteboardTypeFileURL: string;

declare const NSNoModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSRowHeightBinding: string;

declare const NSPasteboardTypeFindPanelSearchOptions: string;

declare const NSAccessibilityDisclosedRowsAttribute: string;

declare const NSCancelButton: number;

declare const NSAccessibilitySelectedRowsAttribute: string;

declare const NSImageNameFolder: string;

declare const NSLayoutPriorityDefaultHigh: number;

declare const NSFloatingPointSamplesBitmapFormat: interop.Enum<typeof NSBitmapFormat>;

declare const NSRoundRectBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSIntType: number;

declare const NSPrintPaperSize: string;

declare const NSOfficeOpenXMLTextDocumentType: string;

declare const NSTornOffMenuWindowLevel: number;

declare const NSSplitViewDidResizeSubviewsNotification: string;

declare const NSSharingServiceNamePostOnLinkedIn: string;

declare const NSSpeechPhonemeInfoExample: string;

declare const NSAccessibilityFrontmostAttribute: string;

declare const NSReadOnlyDocumentAttribute: string;

declare const NSBadBitmapParametersException: string;

declare const NSImageNameSlideshowTemplate: string;

declare const NSViewDidUpdateTrackingAreasNotification: string;

declare const NSTextContentTypeStreetAddressLine2: string;

declare const NSPrintMustCollate: string;

declare const NSF26FunctionKey: number;

declare const NSAccessibilityMarkerUIElementsAttribute: string;

declare const NSSpeechStatusNumberOfCharactersLeft: string;

declare const NSToolbarSidebarTrackingSeparatorItemIdentifier: string;

declare const NSAlphaFirstBitmapFormat: interop.Enum<typeof NSBitmapFormat>;

declare const NSAppKitVersionNumber10_11_2: number;

declare const NSAccessibilityMatteHoleAttribute: string;

declare const NSTextHighlightColorSchemePurple: string;

declare const NSModificationTimeDocumentAttribute: string;

declare const NSMultipleTextSelectionPboardType: string;

declare const NSUnderlineStyleAttributeName: string;

declare const NSOpenGLPFATripleBuffer: number;

declare const NSAccessibilityMainWindowChangedNotification: string;

declare const NSStackViewVisibilityPriorityDetachOnlyIfNecessary: number;

declare const NSNullPlaceholderBindingOption: string;

declare const NSPasteboardURLReadingContentsConformToTypesKey: string;

declare const NSAccessibilityMinimizedAttribute: string;

declare const NSImageNameShareTemplate: string;

declare const NSAccessibilityMarkerValuesAttribute: string;

declare const NSAccessibilityMenuButtonRole: string;

declare const NSSharingServiceNamePostVideoOnTudou: string;

declare const NSAnyEventMask: interop.Enum<typeof NSEventMask>;

declare const NSWordTablesReadException: string;

declare const NSAccessibilityIncrementorRole: string;

declare const NSPrintPanelAccessorySummaryItemNameKey: string;

declare const NSFontDescriptorSystemDesignRounded: string;

declare const NSAntialiasThresholdChangedNotification: string;

declare const NSFontCharacterSetAttribute: string;

declare const NSAccessibilityAnnotationTextAttribute: string;

declare const NSMenuDidEndTrackingNotification: string;

declare const NSTextContentTypeNickname: string;

declare const NSF23FunctionKey: number;

declare const NSCompositeScreen: interop.Enum<typeof NSCompositingOperation>;

declare const NSAccessibilityListItemLevelTextAttribute: string;

declare const NSSpeechErrorsProperty: string;

declare const NSBackingPropertyOldColorSpaceKey: string;

declare const NSCompositeSourceIn: interop.Enum<typeof NSCompositingOperation>;

declare const NSF24FunctionKey: number;

declare const NSSharingServiceNameUseAsDesktopPicture: string;

declare const NSRulerViewUnitInches: string;

declare const NSBaseURLDocumentOption: string;

declare const NSAccessibilityIncrementAction: string;

declare const NSFileContentsPboardType: string;

declare const NSAccessibilityCheckBoxRole: string;

declare const NSKeywordsDocumentAttribute: string;

declare const NSDeviceResolution: string;

declare const NSFullScreenWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSAccessibilityUnknownOrientationValue: string;

declare const NSAccessibilityPageRole: string;

declare const NSAccessibilityLinkTextAttribute: string;

declare const NSAccessibilityPressAction: string;

declare const NSImageNameTouchBarTextUnderlineTemplate: string;

declare const NSF13FunctionKey: number;

declare const NSOffStateImageBinding: string;

declare const NSVoiceIndividuallySpokenCharacters: string;

declare const NSAppKitVersionNumber10_15_3: number;

declare const NSApp: NSApplication;

declare const NSCollectionElementKindSectionHeader: string;

declare const NSContinuouslyUpdatesValueBindingOption: string;

declare const NSAccessibilityHorizontalScrollBarAttribute: string;

declare const NSArgumentBinding: string;

declare const NSPasteboardCommunicationException: string;

declare const NSWorkspaceWillUnmountNotification: string;

declare const NSAlertAlternateReturn: number;

declare const NSTabletPoint: interop.Enum<typeof NSEventType>;

declare const NSAccessibilitySelectedCellsChangedNotification: string;

declare const NSAppKitVersionNumber10_11: number;

declare const NSImageNameTouchBarOpenInBrowserTemplate: string;

declare const NSF11FunctionKey: number;

declare const NSDeletesObjectsOnRemoveBindingsOption: string;

declare const NSControlStateValueOn: number;

declare const NSAccessibilityRightTabStopMarkerTypeValue: string;

declare const NSAppKitVersionNumber10_3: number;

declare const NSImageNameInvalidDataFreestandingTemplate: string;

declare const NSAppKitVersionNumber10_15_2: number;

declare const NSFontFeatureSettingsAttribute: string;

declare const NSFontSetChangedNotification: string;

declare const NSAccessibilitySortButtonRole: string;

declare const NSServiceInvalidPasteboardDataError: number;

declare const NSDoubleClickTargetBinding: string;

declare const NSNibTopLevelObjects: string;

declare const NSAbortModalException: string;

declare const NSWindowDidEndSheetNotification: string;

declare const NSAccessibilityRulerRole: string;

declare const NSImageNameTouchBarExitFullScreenTemplate: string;

declare const NSAccessibilityDescendingSortDirectionValue: string;

declare const NSImageNameTrashEmpty: string;

declare const NSDownArrowFunctionKey: number;

declare const NSAccessibilityLevelIndicatorRole: string;

declare const NSAccessibilityTailIndentMarkerTypeValue: string;

declare const NSCalibratedBlackColorSpace: string;

declare const NSTextContentTypeUsername: string;

declare const NSFontCollectionWasShown: string;

declare const NSInsertFunctionKey: number;

declare const NSSpeechCommandSuffix: string;

declare const NSAccessibilityClearButtonAttribute: string;

declare const NSFontWeightMedium: number;

declare const NSMouseMoved: interop.Enum<typeof NSEventType>;

declare const NSFindFunctionKey: number;

declare const NSOtherTextMovement: number;

declare const NSAccessibilityDecimalTabStopMarkerTypeValue: string;

declare const NSPopoverDidShowNotification: string;

declare const NSRightMouseDraggedMask: interop.Enum<typeof NSEventMask>;

declare const NSNonactivatingPanelMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSImageGamma: string;

declare const NSTargetTextScalingDocumentOption: string;

declare const NSAccessibilityAlternateUIVisibleAttribute: string;

declare const NSViewAnimationFadeOutEffect: string;

declare const NSAccessibilityLayoutPointForScreenPointParameterizedAttribute: string;

declare const NSOutlineViewDisclosureButtonKey: string;

declare const NSAccessibilityContentsAttribute: string;

declare const NSFontPanelDocumentColorEffectModeMask: number;

declare const NSFontCollectionActionKey: string;

declare const NSTableViewSelectionIsChangingNotification: string;

declare const NSDeleteCharFunctionKey: number;

declare const NSCurveToBezierPathElement: interop.Enum<typeof NSBezierPathElement>;

declare const NSPrintJobSavingFileNameExtensionHidden: string;

declare const NSPasteboardTypeTabularText: string;

declare const NSPrintBottomMargin: string;

declare const NSUnderlinePatternDot: interop.Enum<typeof NSUnderlineStyle>;

declare const NSAccessibilityHiddenAttribute: string;

declare const NSStrokeColorAttributeName: string;

declare const NSRunContinuesResponse: number;

declare const NSNotApplicableMarker: interop.Object;

declare const NSShowInvisibleGlyphs: number;

declare const NSTextLayoutSectionsAttribute: string;

declare const NSUnscaledWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSAlternateTitleBinding: string;

declare const NSTextContentTypeMiddleName: string;

declare const NSFontTextStyleBody: string;

declare const NSTextContentTypeOneTimeCode: string;

declare const NSFontVisibleNameAttribute: string;

declare const NSWindowWillEnterVersionBrowserNotification: string;

declare const NSApplicationProtectedDataWillBecomeUnavailableNotification: string;

declare const NSAppKitVersionNumber10_15_5: number;

declare const NSTextContentTypeShipmentTrackingNumber: string;

declare const NSCompanyDocumentAttribute: string;

declare const NSToggleButton: interop.Enum<typeof NSButtonType>;

declare const NSAccessibilityMisspelledTextAttribute: string;

declare const NSCompositeHardLight: interop.Enum<typeof NSCompositingOperation>;

declare const NSImageNameTouchBarDeleteTemplate: string;

declare const NSAccessibilityShadowTextAttribute: string;

declare const NSPDFPboardType: string;

declare const NSTextHighlightColorSchemeMint: string;

declare const NSAccessibilityIncrementButtonAttribute: string;

declare const NSContinuousCapacityLevelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;

declare const NSF32FunctionKey: number;

declare const NSExcludedElementsDocumentAttribute: string;

declare const NSAppKitVersionNumberWithDockTilePlugInSupport: number;

declare const NSWorkspaceLaunchConfigurationEnvironment: string;

declare const NSPrintJobFeatures: string;

declare const NSPNGFileType: interop.Enum<typeof NSBitmapImageFileType>;

declare const NSFontBinding: string;

declare const NSPrintOperationExistsException: string;

declare const NSFontNameAttribute: string;

declare const NSTextCheckingGenerateInlinePredictionsKey: string;

declare const NSOtherMouseDownMask: interop.Enum<typeof NSEventMask>;

declare const NSWindowExposedEventType: interop.Enum<typeof NSEventSubtype>;

declare const NSAppKitVersionNumber10_5_2: number;

declare const NSRulerViewUnitCentimeters: string;

declare const NSRTFTextDocumentType: string;

declare const NSImageNameTouchBarGoForwardTemplate: string;

declare const NSToolbarItemVisibilityPriorityStandard: number;

declare const NSTextInputContextKeyboardSelectionDidChangeNotification: string;

declare const NSLabelBinding: string;

declare const NSSpeechCharacterModeProperty: string;

declare const NSFontScriptsClass: number;

declare const NSDefaultTokenStyle: interop.Enum<typeof NSTokenStyle>;

declare const NSResetCursorRectsRunLoopOrdering: number;

declare const NSFilenamesPboardType: string;

declare const NSAllRomanInputSourcesLocaleIdentifier: string;

declare const NSRGBColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSWindowMovedEventType: interop.Enum<typeof NSEventSubtype>;

declare const NSApplicationDefined: interop.Enum<typeof NSEventType>;

declare const NSAccessibilityVisibleColumnsAttribute: string;

declare const NSBackspaceCharacter: number;

declare const NSSmallSquareBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSLineToBezierPathElement: interop.Enum<typeof NSBezierPathElement>;

declare const NSImageNameFolderBurnable: string;

declare const NSInsertsNullPlaceholderBindingOption: string;

declare const NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification: string;

declare const NSCompositeDestinationIn: interop.Enum<typeof NSCompositingOperation>;

declare const NSIllegalTextMovement: number;

declare const NSHomeFunctionKey: number;

declare const NSSwitchButton: interop.Enum<typeof NSButtonType>;

declare const NSImageNameAddTemplate: string;

declare const NSHelpFunctionKey: number;

declare const NSBadRTFColorTableException: string;

declare const NSTableViewColumnDidResizeNotification: string;

declare const NSDrawerDidOpenNotification: string;

declare const NSImageNameTouchBarRemoveTemplate: string;

declare const NSAccessibilityShownMenuAttribute: string;

declare const NSAppKitVersionNumber10_14_1: number;

declare const NSPrintPagesDown: string;

declare const NSAccessibilityListItemPrefixTextAttribute: string;

declare const NSNoUnderlineStyle: number;

declare const NSAccessibilityMatteRole: string;

declare const NSAppKitVersionNumber13_1: number;

declare const NSAccessibilitySuperscriptTextAttribute: string;

declare const NSIncludedKeysBinding: string;

declare const NSCursorUpdateMask: interop.Enum<typeof NSEventMask>;

declare const NSPrintRightMargin: string;

declare const NSPasteboardNameFind: string;

declare const NSAccessibilityApplicationHiddenNotification: string;

declare const NSStringPboardType: string;

declare const NSImageDitherTransparency: string;

declare const NSTypeIdentifierDateText: string;

declare const NSAlphaShiftKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSWorkspaceSessionDidResignActiveNotification: string;

declare const NSOpenGLPFAMPSafe: number;

declare const NSAccessibilityTextAlignmentAttribute: string;

declare const NSCopyrightDocumentAttribute: string;

declare const NSNewlineCharacter: number;

declare const NSOpenGLPFADepthSize: number;

declare const NSControlStateValueOff: number;

declare const NSImageNameTouchBarSlideshowTemplate: string;

declare const NSAccessibilityPositionAttribute: string;

declare const NSMiniControlSize: interop.Enum<typeof NSControlSize>;

declare const NSFontTextStyleLargeTitle: string;

declare const NSImageNameFontPanel: string;

declare const NSCompositeDarken: interop.Enum<typeof NSCompositingOperation>;

declare const NSImageIPTCData: string;

declare const NSMiterLineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;

declare const NSImageInterlaced: string;

declare const NSAccessibilityActivationPointAttribute: string;

declare const NSPasteboardTypeRTF: string;

declare const NSSpeechStatusOutputPaused: string;

declare const NSSharingServiceNameCloudSharing: string;

declare const NSAppKitVersionNumber10_3_9: number;

declare const NSAccessibilityValueAttribute: string;

declare const NSOpenDocumentTextDocumentType: string;

declare const NSGIFFileType: interop.Enum<typeof NSBitmapImageFileType>;

declare const NSImageBinding: string;

declare const NSAccessibilitySystemFloatingWindowSubrole: string;

declare const NSMaxWidthBinding: string;

declare const NSOpenGLCPMPSwapsInFlight: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSTextViewDidSwitchToNSLayoutManagerNotification: string;

declare const NSAccessibilitySystemDialogSubrole: string;

declare const NSContentWidthBinding: string;

declare const NSControlTextDidChangeNotification: string;

declare const NSLineSeparatorCharacter: number;

declare const NSPopoverCloseReasonDetachToWindow: string;

declare const NSSpellCheckerDidChangeAutomaticDashSubstitutionNotification: string;

declare const NSImageNameStatusAvailable: string;

declare const NSCursorPointingDevice: interop.Enum<typeof NSPointingDeviceType>;

declare const NSAccessibilityOutlineRole: string;

declare const NSFontPboard: string;

declare const NSImageNameBookmarksTemplate: string;

declare const NSAccessibilityDecrementButtonAttribute: string;

declare const NSModalResponseStop: number;

declare const NSSharingServiceNameSendViaAirDrop: string;

declare const NSFontTransitionalSerifsClass: number;

declare const NSAlertSecondButtonReturn: number;

declare const NSCarriageReturnCharacter: number;

declare const NSSharingServiceNameAddToIPhoto: string;

declare const NSEndFunctionKey: number;

declare const NSWindowDidChangeBackingPropertiesNotification: string;

declare const NSOpenGLCPSurfaceSurfaceVolatile: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSAboutPanelOptionApplicationName: string;

declare const NSRulerPboardType: string;

declare const NSAccessibilitySelectedTextRangeAttribute: string;

declare const NSTextContentTypeURL: string;

declare const NSAppKitVersionNumber12_3: number;

declare const NSImageNameGoRightTemplate: string;

declare const NSWorkspaceDidRenameVolumeNotification: string;

declare const NSAccessibilitySelectedColumnsChangedNotification: string;

declare const NSViewAnimationFadeInEffect: string;

declare const NSAboutPanelOptionApplicationVersion: string;

declare const NSResetFunctionKey: number;

declare const NSImageNameMobileMe: string;

declare const NSPrintPreviewJob: string;

declare const NSAlignmentBinding: string;

declare const NSAccessibilityPopoverRole: string;

declare const NSAboutPanelOptionVersion: string;

declare const NSTitleBinding: string;

declare const NSOpenGLPFASamples: number;

declare const NSOpenGLCPReclaimResources: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSAccessibilityHorizontalUnitDescriptionAttribute: string;

declare const NSWindowDidResizeNotification: string;

declare const NSSystemColorsDidChangeNotification: string;

declare const NSTextLayoutSectionOrientation: string;

declare const NSTextNoSelectionException: string;

declare const NSSharingServiceNamePostOnTwitter: string;

declare const NSAccessibilityServesAsTitleForUIElementsAttribute: string;

declare const NSAccessibilityDocumentAttribute: string;

declare const NS16BitLittleEndianBitmapFormat: interop.Enum<typeof NSBitmapFormat>;

declare const NSTextListMarkerDecimal: string;

declare const NSNotApplicablePlaceholderBindingOption: string;

declare const NSCenterTextAlignment: interop.Enum<typeof NSTextAlignment>;

declare const NSAppKitVersionNumber11_2: number;

declare const NSFPRevertButton: number;

declare const NSAccessibilitySearchFieldSubrole: string;

declare const NSFontVariationAxisMinimumValueKey: string;

declare const NSFontCollectionVisibilityKey: string;

declare const NSImageNameTouchBarCommunicationAudioTemplate: string;

declare const NSScrollViewDidEndLiveScrollNotification: string;

declare const NSMomentaryPushButton: interop.Enum<typeof NSButtonType>;

declare const NSAccessibilityLabelValueAttribute: string;

declare const NSAppKitVersionNumberWithDirectionalTabs: number;

declare const NSSystemDefinedMask: interop.Enum<typeof NSEventMask>;

declare const NSWidthBinding: string;

declare const NSF4FunctionKey: number;

declare const NSSysReqFunctionKey: number;

declare const NSRuleEditorRowsDidChangeNotification: string;

declare const NSDefaultTabIntervalDocumentAttribute: string;

declare const NSStackViewSpacingUseDefault: number;

declare const NSModalResponseCancel: number;

declare const NSAcceleratorButton: interop.Enum<typeof NSButtonType>;

declare const NSAccessibilityRadioGroupRole: string;

declare const NSCompositeLuminosity: interop.Enum<typeof NSCompositingOperation>;

declare const NSFontCollectionDisallowAutoActivationOption: string;

declare const NSSelectionIndexPathsBinding: string;

declare const NSValidatesImmediatelyBindingOption: string;

declare const NSFontUIOptimizedTrait: number;

declare const NSGraphicsContextDestinationAttributeName: string;

declare const NSModalResponseContinue: number;

declare const NSWorkspaceLaunchConfigurationArguments: string;

declare const NSOnState: number;

declare const NSImageNameTouchBarSkipToStartTemplate: string;

declare const NSRedoFunctionKey: number;

declare const NSImageEXIFData: string;

declare const NSMouseEntered: interop.Enum<typeof NSEventType>;

declare const NSFontSizeBinding: string;

declare const NSIndexedColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSTouchBarItemIdentifierFixedSpaceSmall: string;

declare const NSVoiceIdentifier: string;

declare const NSRunStoppedResponse: number;

declare const NSStrikethroughColorAttributeName: string;

declare const NSAccessibilityEnabledAttribute: string;

declare const NSImageNameActionTemplate: string;

declare const NSColorListIOException: string;

declare const NSUnderlineColorAttributeName: string;

declare const NSAbortPrintingException: string;

declare const NSAppKitVersionNumber10_11_3: number;

declare const NSAppKitVersionNumber10_10: number;

declare const NSFontWeightThin: number;

declare const NSBackgroundStyleDark: interop.Enum<typeof NSBackgroundStyle>;

declare const NSEditorDocumentAttribute: string;

declare const NSPredicateBinding: string;

declare const NSAccessibilityApplicationRole: string;

declare const NSAccessibilityWindowsAttribute: string;

declare const NSTableViewColumnDidMoveNotification: string;

declare const NSAccessibilityFirstLineIndentMarkerTypeValue: string;

declare const NSAppKitVersionNumber10_13_1: number;

declare const NSImageNameTouchBarTextJustifiedAlignTemplate: string;

declare const NSAppKitVersionNumberWithDeferredWindowDisplaySupport: number;

declare const NSAccessibilityButtonRole: string;

declare const NSWindowWillMiniaturizeNotification: string;

declare const NSResizableWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSBeginFunctionKey: number;

declare const NSTextCheckingReplacementsKey: string;

declare const NSSharingServiceNameComposeEmail: string;

declare const NSPrintTime: string;

declare const NSAccessibilityValueChangedNotification: string;

declare const NSTableViewSelectionDidChangeNotification: string;

declare const NSInsertLineFunctionKey: number;

declare const NSRegularSquareBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSFontPboardType: string;

declare const NSMomentaryLightButton: interop.Enum<typeof NSButtonType>;

declare const NSEventDurationForever: number;

declare const NSHelpButtonBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSFontWidthStandard: number;

declare const NSWorkspaceDidPerformFileOperationNotification: string;

declare const NSHTMLTextDocumentType: string;

declare const NSImageProgressive: string;

declare const NSToolbarPrintItemIdentifier: string;

declare const NSAppKitVersionNumber10_10_Max: number;

declare const NSControlTextDidEndEditingNotification: string;

declare const NSInitialValueBinding: string;

declare const NSToolbarCloudSharingItemIdentifier: string;

declare const NSConvertedDocumentAttribute: string;

declare const NSImageNameColumnViewTemplate: string;

declare const NSPeriodic: interop.Enum<typeof NSEventType>;

declare const NSAppKitVersionNumber10_2_3: number;

declare const NSFontUnavailableException: string;

declare const NSDocumentEditedBinding: string;

declare const NSSpeechCommandPrefix: string;

declare const NSModalResponseAbort: number;

declare const NSAccessibilitySelectedChildrenAttribute: string;

declare const NSTabColumnTerminatorsAttributeName: string;

declare const NSPasteboardNameRuler: string;

declare const NSRulerViewUnitPoints: string;

declare const NSKernAttributeName: string;

declare const NSFontTraitsAttribute: string;

declare const NSAccessibilityAnnouncementKey: string;

declare const NSTextCheckingDocumentTitleKey: string;

declare const NSFontTextStyleCaption2: string;

declare const NSObservedObjectKey: string;

declare const NSAccessibilitySizeAttribute: string;

declare const NSPatternColorSpace: string;

declare const NSOpenGLPFAScreenMask: number;

declare const NSWorkspaceWillPowerOffNotification: string;

declare const NSSquareLineCapStyle: interop.Enum<typeof NSLineCapStyle>;

declare const NSAccessibilityPlaceholderValueAttribute: string;

declare const NSAccessibilityUIElementsKey: string;

declare const NSImageNameSmartBadgeTemplate: string;

declare const NSRoundedDisclosureBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSAppKitVersionNumber13_3: number;

declare const NSTextEffectAttributeName: string;

declare const NSAccessibilityGridRole: string;

declare const NSCompositeExclusion: interop.Enum<typeof NSCompositingOperation>;

declare const NSPlainTextTokenStyle: interop.Enum<typeof NSTokenStyle>;

declare const NSBadRTFFontTableException: string;

declare const NSRoundedTokenStyle: interop.Enum<typeof NSTokenStyle>;

declare const NSCircularBezelStyle: interop.Enum<typeof NSBezelStyle>;

declare const NSDocumentTypeDocumentAttribute: string;

declare const NSPrintPackageException: string;

declare const NSOpenGLPFAStencilSize: number;

declare const NSAccessibilitySharedTextUIElementsAttribute: string;

declare const NSControlGlyph: number;

declare const NSTextWritingDirectionOverride: number;

declare const NSTextStorageWillProcessEditingNotification: string;

declare const NSFullSizeContentViewWindowMask: interop.Enum<typeof NSWindowStyleMask>;

declare const NSAccessibilityMinValueAttribute: string;

declare const NSTextFinderMatchingTypeKey: string;

declare const NSAccessibilityAnnouncementRequestedNotification: string;

declare const NSNoSelectionMarker: interop.Object;

declare const NSOpenGLCPSwapRectangleEnable: interop.Enum<typeof NSOpenGLContextParameter>;

declare const NSPrintFunctionKey: number;

declare const NSNullGlyph: number;

declare const NSCustomPaletteModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSWordMLTextDocumentType: string;

declare const NSFontPanelAllModesMask: number;

declare const NSMouseEnteredMask: interop.Enum<typeof NSEventMask>;

declare const NSTouchBarItemPriorityHigh: number;

declare const NSAccessibilityLabelUIElementsAttribute: string;

declare const NSAccessibilitySystemWideRole: string;

declare const NSAccessibilityUnitsChangedNotification: string;

declare const NSImageNameFolderSmart: string;

declare const NSF12FunctionKey: number;

declare const NSF5FunctionKey: number;

declare const NSApplicationDidResignActiveNotification: string;

declare const NSContentArrayForMultipleSelectionBinding: string;

declare const NSImageNameTouchBarQuickLookTemplate: string;

declare const NSSourceTextScalingDocumentAttribute: string;

declare const NSContentArrayBinding: string;

declare const NSAppKitVersionNumber13_2: number;

declare const NSImageNameRightFacingTriangleTemplate: string;

declare const NSExecuteFunctionKey: number;

declare const NSAppKitVersionNumber10_12: number;

declare const NSSpeechPhonemeInfoOpcode: string;

declare const NSAccessibilityNextContentsAttribute: string;

declare const NSWorkspaceDidChangeFileLabelsNotification: string;

declare const NSAppKitDefined: interop.Enum<typeof NSEventType>;

declare const NSOutlineViewItemWillExpandNotification: string;

declare const NSAlphaNonpremultipliedBitmapFormat: interop.Enum<typeof NSBitmapFormat>;

declare const NSAccessibilityPickAction: string;

declare const NSWorkspaceCopyOperation: string;

declare const NSOpenGLProfileVersion3_2Core: number;

declare const NSEventTrackingRunLoopMode: string;

declare const NSStackViewVisibilityPriorityNotVisible: number;

declare const NSBoxOldStyle: interop.Enum<typeof NSBoxType>;

declare const NSDisplayNameBindingOption: string;

declare const NSAccessibilityScrollAreaRole: string;

declare const NSTextListMarkerCheck: string;

declare const NSForegroundColorAttributeName: string;

declare const NSAccessibilityMarkerTypeDescriptionAttribute: string;

declare const NSTitleDocumentAttribute: string;

declare const NSAccessibilitySearchButtonAttribute: string;

declare const NSScrollWheelMask: interop.Enum<typeof NSEventMask>;

declare const NSAccessibilityRequiredAttribute: string;

declare const NSAnyType: number;

declare const NSTextContentTypeStreetAddressLine1: string;

declare const NSRTFPboardType: string;

declare const NSWindowWillExitFullScreenNotification: string;

declare const NSAccessibilityForegroundColorTextAttribute: string;

declare const NSSpellCheckerDidChangeAutomaticTextReplacementNotification: string;

declare const NSAccessibilityRowCountChangedNotification: string;

declare const NSImageNameTouchBarGetInfoTemplate: string;

declare const NSImageNameHomeTemplate: string;

declare const NSPostScriptPboardType: string;

declare const NSFontSlantTrait: string;

declare const NSSharingServiceErrorMinimum: number;

declare const NSAppKitVersionNumber12_5: number;

declare const NSImageNameNetwork: string;

declare const NSTextKit1ListMarkerFormatDocumentOption: string;

declare const NSTouchBarItemIdentifierTextColorPicker: string;

declare const NSUnderlineByWordMask: number;

declare const NSRTFPropertyStackOverflowException: string;

declare const NSBlack: number;

declare const NSImageNameTouchBarCommunicationVideoTemplate: string;

declare const NSToolbarShowColorsItemIdentifier: string;

declare const NSAccessibilityHeadIndentMarkerTypeValue: string;

declare const NSFullScreenModeWindowLevel: string;

declare const NSSpeechDictionaryEntryPhonemes: string;

declare const NSAboutPanelOptionApplicationIcon: string;

declare const NSImageNameTouchBarPlayPauseTemplate: string;

declare const NSWebResourceLoadDelegateDocumentOption: string;

declare const NSSliderAccessoryWidthWide: number;

declare const NSDataBinding: string;

declare const NSNibOwner: string;

declare const NSBackgroundColorAttributeName: string;

declare const NSSplitViewWillResizeSubviewsNotification: string;

declare const NSViewNoInstrinsicMetric: number;

declare const NSAccessibilityRatingIndicatorSubrole: string;

declare const NSTextListMarkerDiamond: string;

declare const NSAppKitVersionNumber12_0: number;

declare const NSPositiveFloatType: number;

declare const NSSpeechRateProperty: string;

declare const NSPrefixSpacesDocumentAttribute: string;

declare const NSImageNameTouchBarAudioOutputVolumeLowTemplate: string;

declare const NSPrintAllPages: string;

declare const NSAlertFirstButtonReturn: number;

declare const NSTabCharacter: number;

declare const NSAccessibilityVisibleCharacterRangeAttribute: string;

declare const NSF31FunctionKey: number;

declare const NSPositiveIntType: number;

declare const NSImageNameTouchBarAudioInputMuteTemplate: string;

declare const NSImageCompressionMethod: string;

declare const NSTextContentTypeCountryName: string;

declare const NSColorPboardType: string;

declare const NSAccessibilityScreenSizeForLayoutSizeParameterizedAttribute: string;

declare const NSPrintSelectionOnly: string;

declare const NSTextHighlightColorSchemePink: string;

declare const NSLayoutPriorityDefaultLow: number;

declare const NSStrikethroughStyleAttributeName: string;

declare const NSLeftMarginDocumentAttribute: string;

declare const NSAccessibilityColumnCountAttribute: string;

declare const NSImageNameTouchBarAudioOutputVolumeOffTemplate: string;

declare const NSImageHintUserInterfaceLayoutDirection: string;

declare const NSFontMatrixAttribute: string;

declare const NSSharingServiceNotConfiguredError: number;

declare const NSControlStateValueMixed: number;

declare const NSPrintingCommunicationException: string;

declare const NSSystemDefined: interop.Enum<typeof NSEventType>;

declare const NSAppKitVersionNumber10_15: number;

declare const NSTabTextMovement: number;

declare const NSMenuItemImportFromDeviceIdentifier: string;

declare const NSAccessibilityCustomTextAttribute: string;

declare const NSImageNameTouchBarListViewTemplate: string;

declare const NSDeviceBlackColorSpace: string;

declare const NSOpenGLPFASampleBuffers: number;

declare const NSMenuDidAddItemNotification: string;

declare const NSContentHeightBinding: string;

declare const NSWorkspaceDuplicateOperation: string;

declare const NSAccessibilityUnderlineTextAttribute: string;

declare const NSTextContentTypeCreditCardExpirationYear: string;

declare const NSDocFormatTextDocumentType: string;

declare const NSToolbarInspectorTrackingSeparatorItemIdentifier: string;

declare const NSToolbarNewIndexKey: string;

declare const NSFontOrnamentalsClass: number;

declare const NSImageNameTouchBarGoBackTemplate: string;

declare const NSLayoutPriorityRequired: number;

declare const NSFontClarendonSerifsClass: number;

declare const NSAccessibilityRoleDescriptionAttribute: string;

declare const NSImageNameListViewTemplate: string;

declare const NSAboutPanelOptionCredits: string;

declare const NSAccessibilityRangeForLineParameterizedAttribute: string;

declare const NSImageNameTouchBarHistoryTemplate: string;

declare const NSLABColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSTabletProximityEventSubtype: interop.Enum<typeof NSEventSubtype>;

declare const NSWorkspaceMoveOperation: string;

declare const NSTextReadException: string;

declare const NSImageCurrentFrame: string;

declare const NSAccessibilityShowDefaultUIAction: string;

declare const NSKeyDown: interop.Enum<typeof NSEventType>;

declare const NSAccessibilitySelectedTextChangedNotification: string;

declare const NSLayoutPriorityDragThatCannotResizeWindow: number;

declare const NSFontDescriptorSystemDesignMonospaced: string;

declare const NSAccessibilityOutlineRowSubrole: string;

declare const NSAlertThirdButtonReturn: number;

declare const NSAutoPagination: interop.Enum<typeof NSPrintingPaginationMode>;

declare const NSPlainTextDocumentType: string;

declare const NSIllegalSelectorException: string;

declare const NSImageNameTouchBarRewindTemplate: string;

declare const NSOutlineViewColumnDidResizeNotification: string;

declare const NSWindowDidEnterVersionBrowserNotification: string;

declare const NSSpeechDictionaryPronunciations: string;

declare const NSSmallControlSize: interop.Enum<typeof NSControlSize>;

declare const NSAccessibilityMainWindowAttribute: string;

declare const NSImageNameTouchBarTextListTemplate: string;

declare const NSSelectFunctionKey: number;

declare const NSFontWeightBlack: number;

declare const NSWhite: number;

declare const NSRunAbortedResponse: number;

declare const NSImageNameGoLeftTemplate: string;

declare const NSOpenGLPFAClosestPolicy: number;

declare const NSAppKitVersionNumber10_4: number;

declare const NSAppearanceDocumentAttribute: string;

declare const NSPrintOrientation: string;

declare const NSTargetBinding: string;

declare const NSAccessibilitySelectedChildrenMovedNotification: string;

declare const NSEnabledBinding: string;

declare const NSFontDescriptorSystemDesignDefault: string;

declare const NSSelectedValueBinding: string;

declare const NSApplicationWillResignActiveNotification: string;

declare const NSColorListNotEditableException: string;

declare const NSTextCheckingReferenceTimeZoneKey: string;

declare const NSOutlineViewColumnDidMoveNotification: string;

declare const NSAccessibilityDecrementPageSubrole: string;

declare const NSDefaultAttributesDocumentOption: string;

declare const NSF19FunctionKey: number;

declare const NSAccessibilityColorWellRole: string;

declare const NSOnStateImageBinding: string;

declare const NSWritingDirectionAttributeName: string;

declare const NSFontCollectionRecentlyUsed: string;

declare const NSBottomMarginDocumentAttribute: string;

declare const NSPrintHorizontalPagination: string;

declare const NSVoiceGender: string;

declare const NSSpeechPhonemeSymbolsProperty: string;

declare const NSF8FunctionKey: number;

declare const NSAppKitVersionNumber10_7_2: number;

declare const NSAccessibilityStrikethroughColorTextAttribute: string;

declare const NSRecentSearchesBinding: string;

declare const NSPasteboardTypeFont: string;

declare const NSImageNameUserGroup: string;

declare const NSAccessibilityWarningValueAttribute: string;

declare const NSAccessibilityUnknownRole: string;

declare const NSUserActivityDocumentURLKey: string;

declare const NSAppKitVersionNumber10_3_3: number;

declare const NSFontAssetDownloadError: number;

declare const NSCocoaVersionDocumentAttribute: string;

declare const NSURLPboardType: string;

declare const NSTextCheckingDocumentURLKey: string;

declare const NSAccessibilitySecureTextFieldSubrole: string;

declare const NSTabletProximityMask: interop.Enum<typeof NSEventMask>;

declare const NSClearLineFunctionKey: number;

declare const NSAccessibilityMinimizeButtonSubrole: string;

declare const NSFontTextStyleTitle2: string;

declare const NSScrollViewDidLiveScrollNotification: string;

declare const NSImageNameTouchBarUserGroupTemplate: string;

declare const NSValueTransformerNameBindingOption: string;

declare const NSAccessibilityTextFieldRole: string;

declare const NSButtLineCapStyle: interop.Enum<typeof NSLineCapStyle>;

declare const NSAccessibilityMenuBarRole: string;

declare const NSAccessibilityRaiseAction: string;

declare const NSTextSizeMultiplierDocumentOption: string;

declare const NSFileTypeDocumentOption: string;

declare const NSDisplayPatternTitleBinding: string;

declare const NSSpeechDictionaryModificationDate: string;

declare const NSAccessibilityColumnHeaderUIElementsAttribute: string;

declare const NSAccessibilityComboBoxRole: string;

declare const NSFontCollectionUser: string;

declare const NSF6FunctionKey: number;

declare const NSApplicationDidFinishLaunchingNotification: string;

declare const NSSpeechPhonemeInfoHiliteStart: string;

declare const NSSoundPboardType: string;

declare const NSCharacterEncodingDocumentAttribute: string;

declare const NSAppearanceNameVibrantLight: string;

declare const NSScreenColorSpaceDidChangeNotification: string;

declare const NSAccessibilityDisclosedByRowAttribute: string;

declare const NSAppKitVersionNumber10_13: number;

declare const NSAccessibilityColumnRole: string;

declare const NSLeftMouseUpMask: interop.Enum<typeof NSEventMask>;

declare const NSSharingServiceNamePostVideoOnVimeo: string;

declare const NSComboBoxWillDismissNotification: string;

declare const NSPatternColorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

declare const NSWorkspaceVolumeURLKey: string;

declare const NSCategoryDocumentAttribute: string;

declare const NSApplicationDidUpdateNotification: string;

declare const NSPreferredScrollerStyleDidChangeNotification: string;

declare const NSCircularSlider: interop.Enum<typeof NSSliderType>;

declare const NSWorkspaceDidLaunchApplicationNotification: string;

declare const NSSharingServiceNamePostOnTencentWeibo: string;

declare const NSNumericPadKeyMask: interop.Enum<typeof NSEventModifierFlags>;

declare const NSAccessibilityTableRole: string;

declare const NSAccessibilityRTFForRangeParameterizedAttribute: string;

declare const NSOpenGLPFARendererID: number;

declare const NSWorkspaceDidHideApplicationNotification: string;

declare const NSAccessibilityWindowAttribute: string;

declare const NSTransparentBinding: string;

declare const NSCompositeSaturation: interop.Enum<typeof NSCompositingOperation>;

declare const NSTimeoutDocumentOption: string;

declare const NSDisplayWindowRunLoopOrdering: number;

declare const NSRulerViewUnitPicas: string;

declare const NSImageNameTouchBarTextCenterAlignTemplate: string;

declare const NSF28FunctionKey: number;

declare const NSAccessibilityProxyAttribute: string;

declare const NSFontPanelCollectionModeMask: number;

declare const NSImageNameTouchBarPauseTemplate: string;

declare const NSHSBModeColorPanel: interop.Enum<typeof NSColorPanelMode>;

declare const NSTextWriteException: string;

declare const NSAccessibilityFloatingWindowSubrole: string;

declare const NSFontSymbolicClass: number;

declare const NSWindowDidEnterFullScreenNotification: string;

declare const NSClosePathBezierPathElement: interop.Enum<typeof NSBezierPathElement>;

declare const NSTextFieldBezelStyle: {
  Square: 0,
  Rounded: 1,
};

declare const NSImageRepLoadStatus: {
  UnknownType: -1,
  ReadingHeader: -2,
  WillNeedAllData: -3,
  InvalidData: -4,
  UnexpectedEOF: -5,
  Completed: -6,
};

declare const NSAccessibilityCustomRotorSearchDirection: {
  Previous: 0,
  Next: 1,
};

declare const NSImageResizingMode: {
  Tile: 0,
  Stretch: 1,
};

declare const NSTextCursorAccessoryPlacement: {
  Unspecified: 0,
  Backward: 1,
  Forward: 2,
  Invisible: 3,
  Center: 4,
  OffscreenLeft: 5,
  OffscreenTop: 6,
  OffscreenRight: 7,
  OffscreenBottom: 8,
};

declare const NSPrintingPaginationMode: {
  Automatic: 0,
  Fit: 1,
  Clip: 2,
};

declare const NSWindowOcclusionState: {
  NSWindowOcclusionStateVisible: 2,
};

declare const NSPressureBehavior: {
  Unknown: -1,
  PrimaryDefault: 0,
  PrimaryClick: 1,
  PrimaryGeneric: 2,
  PrimaryAccelerator: 3,
  PrimaryDeepClick: 5,
  PrimaryDeepDrag: 6,
};

declare const NSWindowStyleMask: {
  Borderless: 0,
  Titled: 1,
  Closable: 2,
  Miniaturizable: 4,
  Resizable: 8,
  TexturedBackground: 256,
  UnifiedTitleAndToolbar: 4096,
  FullScreen: 16384,
  FullSizeContentView: 32768,
  UtilityWindow: 16,
  DocModalWindow: 64,
  NonactivatingPanel: 128,
  HUDWindow: 8192,
};

declare const NSStatusItemBehavior: {
  RemovalAllowed: 2,
  TerminationOnRemoval: 4,
};

declare const NSVisualEffectMaterial: {
  Titlebar: 3,
  Selection: 4,
  Menu: 5,
  Popover: 6,
  Sidebar: 7,
  HeaderView: 10,
  Sheet: 11,
  WindowBackground: 12,
  HUDWindow: 13,
  FullScreenUI: 15,
  ToolTip: 17,
  ContentBackground: 18,
  UnderWindowBackground: 21,
  UnderPageBackground: 22,
  AppearanceBased: 0,
  Light: 1,
  Dark: 2,
  MediumLight: 8,
  UltraDark: 9,
};

declare const NSDragOperation: {
  None: 0,
  Copy: 1,
  Link: 2,
  Generic: 4,
  Private: 8,
  Move: 16,
  Delete: 32,
  Every: -1,
  All_Obsolete: 15,
  All: 15,
};

declare const NSHapticFeedbackPattern: {
  Generic: 0,
  Alignment: 1,
  LevelChange: 2,
};

declare const NSGridCellPlacement: {
  Inherited: 0,
  None: 1,
  Leading: 2,
  Top: 2,
  Trailing: 3,
  Bottom: 3,
  Center: 4,
  Fill: 5,
};

declare const NSAccessibilityCustomRotorType: {
  Custom: 0,
  Any: 1,
  Annotation: 2,
  BoldText: 3,
  Heading: 4,
  HeadingLevel1: 5,
  HeadingLevel2: 6,
  HeadingLevel3: 7,
  HeadingLevel4: 8,
  HeadingLevel5: 9,
  HeadingLevel6: 10,
  Image: 11,
  ItalicText: 12,
  Landmark: 13,
  Link: 14,
  List: 15,
  MisspelledWord: 16,
  Table: 17,
  TextField: 18,
  UnderlinedText: 19,
  VisitedLink: 20,
  Audiograph: 21,
};

declare const NSTouchTypeMask: {
  Direct: 1,
  Indirect: 2,
};

declare const NSRulerOrientation: {
  Horizontal: 0,
  Vertical: 1,
};

declare const NSLayoutAttribute: {
  Left: 1,
  Right: 2,
  Top: 3,
  Bottom: 4,
  Leading: 5,
  Trailing: 6,
  Width: 7,
  Height: 8,
  CenterX: 9,
  CenterY: 10,
  LastBaseline: 11,
  Baseline: 11,
  FirstBaseline: 12,
  NotAnAttribute: 0,
};

declare const NSImageScaling: {
  ImageScaleProportionallyDown: 0,
  ImageScaleAxesIndependently: 1,
  ImageScaleNone: 2,
  ImageScaleProportionallyUpOrDown: 3,
  ScaleProportionally: 0,
  ScaleToFit: 1,
  ScaleNone: 2,
};

declare const NSBrowserColumnResizingType: {
  No: 0,
  Auto: 1,
  User: 2,
};

declare const NSTickMarkPosition: {
  Below: 0,
  Above: 1,
  Leading: 1,
  Trailing: 0,
};

declare const NSTextContentManagerEnumerationOptions: {
  None: 0,
  Reverse: 1,
};

declare const NSCompositingOperation: {
  Clear: 0,
  Copy: 1,
  SourceOver: 2,
  SourceIn: 3,
  SourceOut: 4,
  SourceAtop: 5,
  DestinationOver: 6,
  DestinationIn: 7,
  DestinationOut: 8,
  DestinationAtop: 9,
  XOR: 10,
  PlusDarker: 11,
  Highlight: 12,
  PlusLighter: 13,
  Multiply: 14,
  Screen: 15,
  Overlay: 16,
  Darken: 17,
  Lighten: 18,
  ColorDodge: 19,
  ColorBurn: 20,
  SoftLight: 21,
  HardLight: 22,
  Difference: 23,
  Exclusion: 24,
  Hue: 25,
  Saturation: 26,
  Color: 27,
  Luminosity: 28,
};

declare const NSCollectionViewDropOperation: {
  On: 0,
  Before: 1,
};

declare const NSControlSize: {
  Regular: 0,
  Small: 1,
  Mini: 2,
  Large: 3,
};

declare const NSWindowToolbarStyle: {
  Automatic: 0,
  Expanded: 1,
  Preference: 2,
  Unified: 3,
  UnifiedCompact: 4,
};

declare const NSTextSelectionNavigationModifier: {
  Extend: 1,
  Visual: 2,
  Multiple: 4,
};

declare const NSWorkspaceLaunchOptions: {
  AndPrint: 2,
  WithErrorPresentation: 64,
  InhibitingBackgroundOnly: 128,
  WithoutAddingToRecents: 256,
  WithoutActivation: 512,
  Async: 65536,
  NewInstance: 524288,
  AndHide: 1048576,
  AndHideOthers: 2097152,
  Default: 65536,
  AllowingClassicStartup: 131072,
  PreferringClassic: 262144,
};

declare const NSTextLayoutFragmentState: {
  None: 0,
  EstimatedUsageBounds: 1,
  CalculatedUsageBounds: 2,
  LayoutAvailable: 3,
};

declare const NSTextLayoutFragmentEnumerationOptions: {
  None: 0,
  Reverse: 1,
  EstimatesSize: 2,
  EnsuresLayout: 4,
  EnsuresExtraLineFragment: 8,
};

declare const NSTextSelectionAffinity: {
  Upstream: 0,
  Downstream: 1,
};

declare const NSTextSelectionGranularity: {
  Character: 0,
  Word: 1,
  Paragraph: 2,
  Line: 3,
  Sentence: 4,
};

declare const NSColorSpaceModel: {
  Unknown: -1,
  Gray: 0,
  RGB: 1,
  CMYK: 2,
  LAB: 3,
  DeviceN: 4,
  Indexed: 5,
  Patterned: 6,
};

declare const NSPickerTouchBarItemSelectionMode: {
  SelectOne: 0,
  SelectAny: 1,
  Momentary: 2,
};

declare const NSVisualEffectState: {
  FollowsWindowActiveState: 0,
  Active: 1,
  Inactive: 2,
};

declare const NSPageControllerTransitionStyle: {
  StackHistory: 0,
  StackBook: 1,
  HorizontalStrip: 2,
};

declare const NSPathStyle: {
  Standard: 0,
  PopUp: 2,
  NavigationBar: 1,
};

declare const NSRuleEditorRowType: {
  Simple: 0,
  Compound: 1,
};

declare const NSTitlePosition: {
  NoTitle: 0,
  AboveTop: 1,
  AtTop: 2,
  BelowTop: 3,
  AboveBottom: 4,
  AtBottom: 5,
  BelowBottom: 6,
};

declare const NSTouchPhase: {
  Began: 1,
  Moved: 2,
  Stationary: 4,
  Ended: 8,
  Cancelled: 16,
  Touching: 7,
  Any: -1,
};

declare const NSRuleEditorNestingMode: {
  Single: 0,
  List: 1,
  Compound: 2,
  Simple: 3,
};

declare const NSLevelIndicatorPlaceholderVisibility: {
  Automatic: 0,
  Always: 1,
  WhileEditing: 2,
};

declare const NSTrackingAreaOptions: {
  MouseEnteredAndExited: 1,
  MouseMoved: 2,
  CursorUpdate: 4,
  ActiveWhenFirstResponder: 16,
  ActiveInKeyWindow: 32,
  ActiveInActiveApp: 64,
  ActiveAlways: 128,
  AssumeInside: 256,
  InVisibleRect: 512,
  EnabledDuringMouseDrag: 1024,
};

declare const NSLevelIndicatorStyle: {
  Relevancy: 0,
  ContinuousCapacity: 1,
  DiscreteCapacity: 2,
  Rating: 3,
};

declare const NSDatePickerMode: {
  Single: 0,
  Range: 1,
};

declare const NSTabState: {
  Selected: 0,
  Background: 1,
  Pressed: 2,
};

declare const NSTextBlockVerticalAlignment: {
  Top: 0,
  Middle: 1,
  Bottom: 2,
  Baseline: 3,
};

declare const NSTextBlockLayer: {
  Padding: -1,
  Border: 0,
  Margin: 1,
};

declare const NSTextBlockDimension: {
  Width: 0,
  MinimumWidth: 1,
  MaximumWidth: 2,
  Height: 4,
  MinimumHeight: 5,
  MaximumHeight: 6,
};

declare const NSTextListOptions: {
  NSTextListPrependEnclosingMarker: 1,
};

declare const NSDatePickerStyle: {
  TextFieldAndStepper: 0,
  ClockAndCalendar: 1,
  TextField: 2,
};

declare const NSTypesetterControlCharacterAction: {
  ZeroAdvancement: 1,
  Whitespace: 2,
  HorizontalTab: 4,
  LineBreak: 8,
  ParagraphBreak: 16,
  ContainerBreak: 32,
};

declare const NSCharacterCollection: {
  IdentityMapping: 0,
  AdobeCNS1: 1,
  AdobeGB1: 2,
  AdobeJapan1: 3,
  AdobeJapan2: 4,
  AdobeKorea1: 5,
};

declare const NSOpenGLGlobalOption: {
  FormatCacheSize: 501,
  ClearFormatCache: 502,
  RetainRenderers: 503,
  UseBuildCache: 506,
  ResetLibrary: 504,
};

declare const NSDraggingItemEnumerationOptions: {
  Concurrent: 1,
  ClearNonenumeratedImages: 65536,
};

declare const NSDrawerState: {
  Closed: 0,
  Opening: 1,
  Open: 2,
  Closing: 3,
};

declare const NSBezierPathElement: {
  MoveTo: 0,
  LineTo: 1,
  CubicCurveTo: 2,
  ClosePath: 3,
  QuadraticCurveTo: 4,
  CurveTo: 2,
};

declare const NSWindingRule: {
  NonZero: 0,
  EvenOdd: 1,
};

declare const NSLineJoinStyle: {
  Miter: 0,
  Round: 1,
  Bevel: 2,
};

declare const NSTableViewSelectionHighlightStyle: {
  None: -1,
  Regular: 0,
  SourceList: 1,
};

declare const NSOpenGLContextParameter: {
  SwapInterval: 222,
  SurfaceOrder: 235,
  SurfaceOpacity: 236,
  SurfaceBackingSize: 304,
  ReclaimResources: 308,
  CurrentRendererID: 309,
  GPUVertexProcessing: 310,
  GPUFragmentProcessing: 311,
  HasDrawable: 314,
  MPSwapsInFlight: 315,
  SwapRectangle: 200,
  SwapRectangleEnable: 201,
  RasterizationEnable: 221,
  StateValidation: 301,
  SurfaceSurfaceVolatile: 306,
};

declare const NSTabViewBorderType: {
  None: 0,
  Line: 1,
  Bezel: 2,
};

declare const NSTabViewType: {
  TopTabsBezel: 0,
  LeftTabsBezel: 1,
  BottomTabsBezel: 2,
  RightTabsBezel: 3,
  NoTabsBezel: 4,
  NoTabsLine: 5,
  NoTabsNo: 6,
};

declare const NSProgressIndicatorThickness: {
  NSProgressIndicatorPreferredThickness: 14,
  Small: 10,
  Large: 18,
  Aqua: 12,
};

declare const NSProgressIndicatorStyle: {
  Bar: 0,
  Spinning: 1,
};

declare const NSTableViewRowActionStyle: {
  Regular: 0,
  Destructive: 1,
};

declare const NSTableViewStyle: {
  Automatic: 0,
  FullWidth: 1,
  Inset: 2,
  SourceList: 3,
  Plain: 4,
};

declare const NSPasteboardContentsOptions: {
  NSPasteboardContentsCurrentHostOnly: 1,
};

declare const NSTableViewColumnAutoresizingStyle: {
  NoColumnAutoresizing: 0,
  UniformColumnAutoresizingStyle: 1,
  SequentialColumnAutoresizingStyle: 2,
  ReverseSequentialColumnAutoresizingStyle: 3,
  LastColumnOnlyAutoresizingStyle: 4,
  FirstColumnOnlyAutoresizingStyle: 5,
};

declare const NSTableViewDropOperation: {
  On: 0,
  Above: 1,
};

declare const NSFindPanelSubstringMatchType: {
  Contains: 0,
  StartsWith: 1,
  FullWord: 2,
  EndsWith: 3,
};

declare const NSFindPanelAction: {
  ShowFindPanel: 1,
  Next: 2,
  Previous: 3,
  ReplaceAll: 4,
  Replace: 5,
  ReplaceAndFind: 6,
  SetFindString: 7,
  ReplaceAllInSelection: 8,
  SelectAll: 9,
  SelectAllInSelection: 10,
};

declare const NSComboButtonStyle: {
  Split: 0,
  Unified: 1,
};

declare const NSToolbarSizeMode: {
  Default: 0,
  Regular: 1,
  Small: 2,
};

declare const NSTokenStyle: {
  Default: 0,
  None: 1,
  Rounded: 2,
  Squared: 3,
  PlainSquared: 4,
};

declare const NSLineMovementDirection: {
  DoesntMove: 0,
  MovesLeft: 1,
  MovesRight: 2,
  MovesDown: 3,
  MovesUp: 4,
};

declare const NSLineSweepDirection: {
  Left: 0,
  Right: 1,
  Down: 2,
  Up: 3,
};

declare const NSGlyphInscription: {
  Base: 0,
  Below: 1,
  Above: 2,
  Overstrike: 3,
  OverBelow: 4,
};

declare const NSTypesetterBehavior: {
  LatestBehavior: -1,
  OriginalBehavior: 0,
  Behavior_10_2_WithCompatibility: 1,
  Behavior_10_2: 2,
  Behavior_10_3: 3,
  Behavior_10_4: 4,
};

declare const NSTextLayoutOrientation: {
  Horizontal: 0,
  Vertical: 1,
};

declare const NSTextStorageEditActions: {
  Attributes: 1,
  Characters: 2,
};

declare const NSToolbarItemGroupSelectionMode: {
  SelectOne: 0,
  SelectAny: 1,
  Momentary: 2,
};

declare const NSWritingToolsBehavior: {
  None: -1,
  Default: 0,
  Complete: 1,
  Limited: 2,
};

declare const NSGradientType: {
  None: 0,
  ConcaveWeak: 1,
  ConcaveStrong: 2,
  ConvexWeak: 3,
  ConvexStrong: 4,
};

declare const NSStackViewGravity: {
  Top: 1,
  Leading: 1,
  Center: 2,
  Bottom: 3,
  Trailing: 3,
};

declare const NSTextAlignment: {
  Left: 0,
  Center: 1,
  Right: 2,
  Justified: 3,
  Natural: 4,
};

declare const NSSharingCollaborationMode: {
  SendCopy: 0,
  Collaborate: 1,
};

declare const NSSegmentDistribution: {
  Fit: 0,
  Fill: 1,
  FillEqually: 2,
  FillProportionally: 3,
};

declare const NSSegmentStyle: {
  Automatic: 0,
  Rounded: 1,
  RoundRect: 3,
  TexturedSquare: 4,
  SmallSquare: 6,
  Separated: 8,
  TexturedRounded: 2,
  Capsule: 5,
};

declare const NSCloudKitSharingServiceOptions: {
  Standard: 0,
  AllowPublic: 1,
  AllowPrivate: 2,
  AllowReadOnly: 16,
  AllowReadWrite: 32,
};

declare const NSTextFinderMatchingType: {
  Contains: 0,
  StartsWith: 1,
  FullWord: 2,
  EndsWith: 3,
};

declare const NSTextFinderAction: {
  ShowFindInterface: 1,
  NextMatch: 2,
  PreviousMatch: 3,
  ReplaceAll: 4,
  Replace: 5,
  ReplaceAndFind: 6,
  SetSearchString: 7,
  ReplaceAllInSelection: 8,
  SelectAll: 9,
  SelectAllInSelection: 10,
  HideFindInterface: 11,
  ShowReplaceInterface: 12,
  HideReplaceInterface: 13,
};

declare const NSScrollerArrow: {
  Increment: 0,
  Decrement: 1,
};

declare const NSScrollerPart: {
  NoPart: 0,
  DecrementPage: 1,
  Knob: 2,
  IncrementPage: 3,
  DecrementLine: 4,
  IncrementLine: 5,
  KnobSlot: 6,
};

declare const NSUsableScrollerParts: {
  NoScrollerParts: 0,
  OnlyScrollerArrows: 1,
  AllScrollerParts: 2,
};

declare const NSMediaLibrary: {
  Audio: 1,
  Image: 2,
  Movie: 4,
};

declare const NSPDFPanelOptions: {
  ShowsPaperSize: 4,
  ShowsOrientation: 8,
  RequestsParentDirectory: 16777216,
};

declare const NSPrintPanelOptions: {
  Copies: 1,
  PageRange: 2,
  PaperSize: 4,
  Orientation: 8,
  Scaling: 16,
  PrintSelection: 32,
  PageSetupAccessory: 256,
  Preview: 131072,
};

declare const NSPrintPanelResult: {
  Cancelled: 0,
  Printed: 1,
};

declare const NSAnimationBlockingMode: {
  Blocking: 0,
  Nonblocking: 1,
  NonblockingThreaded: 2,
};

declare const NSPrintRenderingQuality: {
  Best: 0,
  Responsive: 1,
};

declare const NSPrintingPageOrder: {
  Descending: -1,
  Special: 0,
  Ascending: 1,
  Unknown: 2,
};

declare const NSRequestUserAttentionType: {
  Critical: 0,
  Informational: 10,
};

declare const NSSplitViewItemBehavior: {
  Default: 0,
  Sidebar: 1,
  ContentList: 2,
  Inspector: 3,
};

declare const NSCorrectionIndicatorType: {
  Default: 0,
  Reversion: 1,
  Guesses: 2,
};

declare const NSTextInputTraitType: {
  Default: 0,
  No: 1,
  Yes: 2,
};

declare const NSSharingContentScope: {
  Item: 0,
  Partial: 1,
  Full: 2,
};

declare const NSScrubberMode: {
  Fixed: 0,
  Free: 1,
};

declare const NSWindowDepth: {
  Twentyfour: 520,
  Sixtyfour: 528,
  Onehundredtwentyeight: 544,
};

declare const NSVisualEffectBlendingMode: {
  Behind: 0,
  Within: 1,
};

declare const NSImageDynamicRange: {
  Unspecified: -1,
  Standard: 0,
  ConstrainedHigh: 1,
  High: 2,
};

declare const NSCellImagePosition: {
  NoImage: 0,
  ImageOnly: 1,
  ImageLeft: 2,
  ImageRight: 3,
  ImageBelow: 4,
  ImageAbove: 5,
  ImageOverlaps: 6,
  ImageLeading: 7,
  ImageTrailing: 8,
};

declare const NSImageSymbolScale: {
  Small: 1,
  Medium: 2,
  Large: 3,
};

declare const NSCorrectionResponse: {
  None: 0,
  Accepted: 1,
  Rejected: 2,
  Ignored: 3,
  Edited: 4,
  Reverted: 5,
};

declare const NSScrubberAlignment: {
  None: 0,
  Leading: 1,
  Trailing: 2,
  Center: 3,
};

declare const NSImageLoadStatus: {
  Completed: 0,
  Cancelled: 1,
  InvalidData: 2,
  UnexpectedEOF: 3,
  ReadError: 4,
};

declare const NSLayoutFormatOptions: {
  AlignAllLeft: 2,
  AlignAllRight: 4,
  AlignAllTop: 8,
  AlignAllBottom: 16,
  AlignAllLeading: 32,
  AlignAllTrailing: 64,
  AlignAllCenterX: 512,
  AlignAllCenterY: 1024,
  AlignAllLastBaseline: 2048,
  AlignAllFirstBaseline: 4096,
  AlignAllBaseline: 2048,
  AlignmentMask: 65535,
  DirectionLeadingToTrailing: 0,
  DirectionLeftToRight: 65536,
  DirectionRightToLeft: 131072,
  DirectionMask: 196608,
};

declare const NSTextLayoutManagerSegmentOptions: {
  None: 0,
  RangeNotRequired: 1,
  MiddleFragmentsExcluded: 2,
  HeadSegmentExtended: 4,
  TailSegmentExtended: 8,
  UpstreamAffinity: 16,
};

declare const NSLayoutRelation: {
  LessThanOr: -1,
  NSLayoutRelationEqual: 0,
  GreaterThanOr: 1,
};

declare const NSTextSelectionNavigationDirection: {
  Forward: 0,
  Backward: 1,
  Right: 2,
  Left: 3,
  Up: 4,
  Down: 5,
};

declare const NSLayoutConstraintOrientation: {
  Horizontal: 0,
  Vertical: 1,
};

declare const NSGradientDrawingOptions: {
  BeforeStarting: 1,
  AfterEnding: 2,
};

declare const NSCursorFrameResizeDirections: {
  Inward: 1,
  Outward: 2,
  All: 3,
};

declare const NSCursorFrameResizePosition: {
  Top: 1,
  Left: 2,
  Bottom: 4,
  Right: 8,
  TopLeft: 3,
  TopRight: 9,
  BottomLeft: 6,
  BottomRight: 12,
};

declare const NSColorWellStyle: {
  Default: 0,
  Minimal: 1,
  Expanded: 2,
};

declare const NSBitmapFormat: {
  AlphaFirst: 1,
  AlphaNonpremultiplied: 2,
  FloatingPointSamples: 4,
  SixteenBitLittleEndian: 256,
  ThirtyTwoBitLittleEndian: 512,
  SixteenBitBigEndian: 1024,
  ThirtyTwoBitBigEndian: 2048,
};

declare const NSBitmapImageFileType: {
  TIFF: 0,
  BMP: 1,
  GIF: 2,
  JPEG: 3,
  PNG: 4,
  JPEG2000: 5,
};

declare const NSMatrixMode: {
  Radio: 0,
  Highlight: 1,
  List: 2,
  Track: 3,
};

declare const NSWindowBackingLocation: {
  Default: 0,
  VideoMemory: 1,
  MainMemory: 2,
};

declare const NSSliderType: {
  Linear: 0,
  Circular: 1,
};

declare const NSTitlebarSeparatorStyle: {
  Automatic: 0,
  None: 1,
  Line: 2,
  Shadow: 3,
};

declare const NSWindowTabbingMode: {
  Automatic: 0,
  Preferred: 1,
  Disallowed: 2,
};

declare const NSWindowUserTabbingPreference: {
  Manual: 0,
  Always: 1,
  InFullScreen: 2,
};

declare const NSWindowAnimationBehavior: {
  Default: 0,
  None: 2,
  DocumentWindow: 3,
  UtilityWindow: 4,
  AlertPanel: 5,
};

declare const NSWindowSharingType: {
  None: 0,
  ReadOnly: 1,
};

declare const NSLineCapStyle: {
  Butt: 0,
  Round: 1,
  Square: 2,
};

declare const NSFontAssetRequestOptions: {
  NSFontAssetRequestOptionUsesStandardUI: 1,
};

declare const NSMultibyteGlyphPacking: {
  NSNativeShortGlyphPacking: 5,
};

declare const NSFontRenderingMode: {
  Default: 0,
  Antialiased: 1,
  IntegerAdvancements: 2,
  AntialiasedIntegerAdvancements: 3,
};

declare const NSVerticalDirections: {
  Up: 1,
  Down: 2,
  All: 3,
};

declare const NSHorizontalDirections: {
  Left: 1,
  Right: 2,
  All: 3,
};

declare const NSCollectionLayoutSectionOrthogonalScrollingBehavior: {
  None: 0,
  Continuous: 1,
  ContinuousGroupLeadingBoundary: 2,
  Paging: 3,
  GroupPaging: 4,
  GroupPagingCentered: 5,
};

declare const NSRectAlignment: {
  None: 0,
  Top: 1,
  TopLeading: 2,
  Leading: 3,
  BottomLeading: 4,
  Bottom: 5,
  BottomTrailing: 6,
  Trailing: 7,
  TopTrailing: 8,
};

declare const NSDirectionalRectEdge: {
  None: 0,
  Top: 1,
  Leading: 2,
  Bottom: 4,
  Trailing: 8,
  All: 15,
};

declare const NSFontCollectionVisibility: {
  Process: 1,
  User: 2,
  Computer: 4,
};

declare const NSCollectionViewScrollDirection: {
  Vertical: 0,
  Horizontal: 1,
};

declare const NSCollectionUpdateAction: {
  Insert: 0,
  Delete: 1,
  Reload: 2,
  Move: 3,
  None: 4,
};

declare const NSWindowListOptions: {
  NSWindowListOrderedFrontToBack: 1,
};

declare const NSCollectionElementCategory: {
  Item: 0,
  SupplementaryView: 1,
  DecorationView: 2,
  InterItemGap: 3,
};

declare const NSCollectionViewScrollPosition: {
  None: 0,
  Top: 1,
  CenteredVertically: 2,
  Bottom: 4,
  NearestHorizontalEdge: 512,
  Left: 8,
  CenteredHorizontally: 16,
  Right: 32,
  LeadingEdge: 64,
  TrailingEdge: 128,
  NearestVerticalEdge: 256,
};

declare const NSDisplayGamut: {
  SRGB: 1,
  P3: 2,
};

declare const NSCollectionViewItemHighlightState: {
  None: 0,
  ForSelection: 1,
  ForDeselection: 2,
  AsDropTarget: 3,
};

declare const NSViewControllerTransitionOptions: {
  None: 0,
  Crossfade: 1,
  SlideUp: 16,
  SlideDown: 32,
  SlideLeft: 64,
  SlideRight: 128,
  SlideForward: 320,
  SlideBackward: 384,
  AllowUserInteraction: 4096,
};

declare const NSBoxType: {
  Primary: 0,
  Separator: 2,
  Custom: 4,
};

declare const NSAlertStyle: {
  Warning: 0,
  Informational: 1,
  Critical: 2,
};

declare const NSColorSystemEffect: {
  None: 0,
  Pressed: 1,
  DeepPressed: 2,
  Disabled: 3,
  Rollover: 4,
};

declare const NSColorType: {
  ComponentBased: 0,
  Pattern: 1,
  Catalog: 2,
};

declare const NSApplicationTerminateReply: {
  Cancel: 0,
  Now: 1,
  Later: 2,
};

declare const NSGridRowAlignment: {
  Inherited: 0,
  None: 1,
  FirstBaseline: 2,
  LastBaseline: 3,
};

declare const NSBrowserDropOperation: {
  On: 0,
  Above: 1,
};

declare const NSFontTraitMask: {
  Italic: 1,
  Bold: 2,
  Unbold: 4,
  NonStandardCharacterSet: 8,
  Narrow: 16,
  Expanded: 32,
  Condensed: 64,
  SmallCaps: 128,
  Poster: 256,
  Compressed: 512,
  FixedPitch: 1024,
  Unitalic: 16777216,
};

declare const NSApplicationOcclusionState: {
  NSApplicationOcclusionStateVisible: 2,
};

declare const NSApplicationPresentationOptions: {
  Default: 0,
  AutoHideDock: 1,
  HideDock: 2,
  AutoHideMenuBar: 4,
  HideMenuBar: 8,
  DisableAppleMenu: 16,
  DisableProcessSwitching: 32,
  DisableForceQuit: 64,
  DisableSessionTermination: 128,
  DisableHideApplication: 256,
  DisableMenuBarTransparency: 512,
  FullScreen: 1024,
  AutoHideToolbar: 2048,
  DisableCursorLocationAssistance: 4096,
};

declare const NSSaveOperationType: {
  Save: 0,
  SaveAs: 1,
  SaveTo: 2,
  AutosaveInPlace: 4,
  AutosaveElsewhere: 3,
  AutosaveAs: 5,
  Autosave: 3,
};

declare const NSPrintingOrientation: {
  Portrait: 0,
  Landscape: 1,
};

declare const NSApplicationActivationPolicy: {
  Regular: 0,
  Accessory: 1,
  Prohibited: 2,
};

declare const NSPickerTouchBarItemControlRepresentation: {
  Automatic: 0,
  Expanded: 1,
  Collapsed: 2,
};

declare const NSBezelStyle: {
  Automatic: 0,
  Push: 1,
  FlexiblePush: 2,
  Disclosure: 5,
  Circular: 7,
  HelpButton: 9,
  SmallSquare: 10,
  Toolbar: 11,
  AccessoryBarAction: 12,
  AccessoryBar: 13,
  PushDisclosure: 14,
  Badge: 15,
  ShadowlessSquare: 6,
  TexturedSquare: 8,
  Rounded: 1,
  RegularSquare: 2,
  TexturedRounded: 11,
  RoundRect: 12,
  Recessed: 13,
  RoundedDisclosure: 14,
  Inline: 15,
};

declare const NSWorkspaceAuthorizationType: {
  CreateSymbolicLink: 0,
  SetAttributes: 1,
  ReplaceFile: 2,
};

declare const NSImageInterpolation: {
  Default: 0,
  None: 1,
  Low: 2,
  Medium: 4,
  High: 3,
};

declare const NSFontAction: {
  NoFontChange: 0,
  ViaPanelFont: 1,
  AddTraitFont: 2,
  SizeUpFont: 3,
  SizeDownFont: 4,
  HeavierFont: 5,
  LighterFont: 6,
  RemoveTraitFont: 7,
};

declare const NSScrollElasticity: {
  Automatic: 0,
  None: 1,
  Allowed: 2,
};

declare const NSFontCollectionOptions: {
  NSFontCollectionApplicationOnlyMask: 1,
};

declare const NSMenuPresentationStyle: {
  Regular: 0,
  Palette: 1,
};

declare const NSControlTint: {
  Default: 0,
  Blue: 1,
  Graphite: 6,
  Clear: 7,
};

declare const NSCellStyleMask: {
  No: 0,
  Contents: 1,
  PushIn: 2,
  ChangeGray: 4,
  ChangeBackground: 8,
};

declare const NSWindowOrderingMode: {
  Above: 1,
  Below: -1,
  Out: 0,
};

declare const NSDocumentChangeType: {
  Done: 0,
  Undone: 1,
  Redone: 5,
  Cleared: 2,
  ReadOtherContents: 3,
  Autosaved: 4,
  Discardable: 256,
};

declare const NSLineBreakMode: {
  WordWrapping: 0,
  CharWrapping: 1,
  Clipping: 2,
  TruncatingHead: 3,
  TruncatingTail: 4,
  TruncatingMiddle: 5,
};

declare const NSMenuProperties: {
  Title: 1,
  AttributedTitle: 2,
  KeyEquivalent: 4,
  Image: 8,
  Enabled: 16,
  AccessibilityDescription: 32,
};

declare const NSTextMovement: {
  Return: 16,
  Tab: 17,
  Backtab: 18,
  Left: 19,
  Right: 20,
  Up: 21,
  Down: 22,
  Cancel: 23,
  Other: 0,
};

declare const NSViewLayerContentsRedrawPolicy: {
  Never: 0,
  OnSetNeedsDisplay: 1,
  DuringViewResize: 2,
  BeforeViewResize: 3,
  Crossfade: 4,
};

declare const NSAutoresizingMaskOptions: {
  NotSizable: 0,
  MinXMargin: 1,
  WidthSizable: 2,
  MaxXMargin: 4,
  MinYMargin: 8,
  HeightSizable: 16,
  MaxYMargin: 32,
};

declare const NSSelectionDirection: {
  DirectSelection: 0,
  SelectingNext: 1,
  SelectingPrevious: 2,
};

declare const NSUserInterfaceLayoutOrientation: {
  Horizontal: 0,
  Vertical: 1,
};

declare const NSUserInterfaceLayoutDirection: {
  LeftToRight: 0,
  RightToLeft: 1,
};

declare const NSButtonType: {
  MomentaryLight: 0,
  PushOnPushOff: 1,
  Toggle: 2,
  Switch: 3,
  Radio: 4,
  MomentaryChange: 5,
  OnOff: 6,
  MomentaryPushIn: 7,
  Accelerator: 8,
  MultiLevelAccelerator: 9,
};

declare const NSTableRowActionEdge: {
  Leading: 0,
  Trailing: 1,
};

declare const NSAccessibilityAnnotationPosition: {
  FullRange: 0,
  Start: 1,
  End: 2,
};

declare const NSFontPanelModeMask: {
  ModeMaskFace: 1,
  ModeMaskSize: 2,
  ModeMaskCollection: 4,
  ModeMaskUnderlineEffect: 256,
  ModeMaskStrikethroughEffect: 512,
  ModeMaskTextColorEffect: 1024,
  ModeMaskDocumentColorEffect: 2048,
  ModeMaskShadowEffect: 4096,
  ModeMaskAllEffects: 1048320,
  ModesMaskStandardModes: 65535,
  ModesMaskAllModes: 4294967295,
};

declare const NSBackgroundStyle: {
  Normal: 0,
  Emphasized: 1,
  Raised: 2,
  Lowered: 3,
};

declare const NSAccessibilitySortDirection: {
  Unknown: 0,
  Ascending: 1,
  Descending: 2,
};

declare const NSEventSubtype: {
  WindowExposed: 0,
  ApplicationActivated: 1,
  ApplicationDeactivated: 2,
  WindowMoved: 4,
  ScreenChanged: 8,
  PowerOff: 1,
  MouseEvent: 0,
  TabletPoint: 1,
  TabletProximity: 2,
  Touch: 3,
};

declare const NSEventSwipeTrackingOptions: {
  LockDirection: 1,
  ClampGestureAmount: 2,
};

declare const NSEventPhase: {
  None: 0,
  Began: 1,
  Stationary: 2,
  Changed: 4,
  Ended: 8,
  Cancelled: 16,
  MayBegin: 32,
};

declare const NSApplicationDelegateReply: {
  Success: 0,
  Cancel: 1,
  Failure: 2,
};

declare const NSPointingDeviceType: {
  Unknown: 0,
  Pen: 1,
  Cursor: 2,
  Eraser: 3,
};

declare const NSEventModifierFlags: {
  CapsLock: 65536,
  Shift: 131072,
  Control: 262144,
  Option: 524288,
  Command: 1048576,
  NumericPad: 2097152,
  Help: 4194304,
  Function: 8388608,
  DeviceIndependentFlagsMask: 4294901760,
};

declare const NSEventType: {
  LeftMouseDown: 1,
  LeftMouseUp: 2,
  RightMouseDown: 3,
  RightMouseUp: 4,
  MouseMoved: 5,
  LeftMouseDragged: 6,
  RightMouseDragged: 7,
  MouseEntered: 8,
  MouseExited: 9,
  KeyDown: 10,
  KeyUp: 11,
  FlagsChanged: 12,
  AppKitDefined: 13,
  SystemDefined: 14,
  ApplicationDefined: 15,
  Periodic: 16,
  CursorUpdate: 17,
  ScrollWheel: 22,
  TabletPoint: 23,
  TabletProximity: 24,
  OtherMouseDown: 25,
  OtherMouseUp: 26,
  OtherMouseDragged: 27,
  Gesture: 29,
  Magnify: 30,
  Swipe: 31,
  Rotate: 18,
  BeginGesture: 19,
  EndGesture: 20,
  SmartMagnify: 32,
  QuickLook: 33,
  Pressure: 34,
  DirectTouch: 37,
  ChangeMode: 38,
};

declare const NSTouchType: {
  Direct: 0,
  Indirect: 1,
};

declare const NSAnimationEffect: {
  DisappearingItemDefault: 0,
  Poof: 10,
};

declare const NSToolbarDisplayMode: {
  Default: 0,
  IconAndLabel: 1,
  IconOnly: 2,
  LabelOnly: 3,
};

declare const NSColorRenderingIntent: {
  Default: 0,
  AbsoluteColorimetric: 1,
  RelativeColorimetric: 2,
  Perceptual: 3,
  Saturation: 4,
};

declare const NSApplicationPrintReply: {
  Cancelled: 0,
  Success: 1,
  ReplyLater: 2,
  Failure: 3,
};

declare const NSScrollArrowPosition: {
  MaxEnd: 0,
  MinEnd: 1,
  DefaultSetting: 0,
  None: 2,
};

declare const NSApplicationActivationOptions: {
  AllWindows: 1,
  IgnoringOtherApps: 2,
};

declare const NSDraggingContext: {
  Outside: 0,
  Within: 1,
};

declare const NSDraggingFormation: {
  Default: 0,
  None: 1,
  Pile: 2,
  List: 3,
  Stack: 4,
};

declare const NSPasteboardReadingOptions: {
  Data: 0,
  String: 1,
  PropertyList: 2,
  KeyedArchive: 4,
};

declare const NSControlCharacterAction: {
  ZeroAdvancement: 1,
  Whitespace: 2,
  HorizontalTab: 4,
  LineBreak: 8,
  ParagraphBreak: 16,
  ContainerBreak: 32,
};

declare const NSWindowTitleVisibility: {
  Visible: 0,
  Hidden: 1,
};

declare const NSTextScalingType: {
  ScalingStandard: 0,
  ScalingiOS: 1,
};

declare const NSWritingDirectionFormatType: {
  Embedding: 0,
  Override: 2,
};

declare const NSUnderlineStyle: {
  None: 0,
  Single: 1,
  Thick: 2,
  Double: 9,
  PatternSolid: 0,
  PatternDot: 256,
  PatternDash: 512,
  PatternDashDot: 768,
  PatternDashDotDot: 1024,
  ByWord: 32768,
};

declare const NSImageLayoutDirection: {
  Unspecified: -1,
  LeftToRight: 2,
  RightToLeft: 3,
};

declare const NSTextTabType: {
  Left: 0,
  Right: 1,
  Center: 2,
  Decimal: 3,
};

declare const NSCellType: {
  Null: 0,
  Text: 1,
  Image: 2,
};

declare const NSEventGestureAxis: {
  None: 0,
  Horizontal: 1,
  Vertical: 2,
};

declare const NSScrollViewFindBarPosition: {
  AboveHorizontalRuler: 0,
  AboveContent: 1,
  BelowContent: 2,
};

declare const NSAccessibilityRulerMarkerType: {
  Unknown: 0,
  TabStopLeft: 1,
  TabStopRight: 2,
  TabStopCenter: 3,
  TabStopDecimal: 4,
  IndentHead: 5,
  IndentTail: 6,
  IndentFirstLine: 7,
};

declare const NSSpringLoadingOptions: {
  Disabled: 0,
  Enabled: 1,
  ContinuousActivation: 2,
  NoHover: 8,
};

declare const NSWindowButton: {
  Close: 0,
  Miniaturize: 1,
  Zoom: 2,
  Toolbar: 3,
  DocumentIcon: 4,
  DocumentVersions: 6,
};

declare const NSImageFrameStyle: {
  None: 0,
  Photo: 1,
  GrayBezel: 2,
  Groove: 3,
  Button: 4,
};

declare const NSDatePickerElementFlags: {
  HourMinute: 12,
  HourMinuteSecond: 14,
  TimeZone: 16,
  YearMonth: 192,
  YearMonthDay: 224,
  Era: 256,
};

declare const NSTextInsertionIndicatorDisplayMode: {
  Automatic: 0,
  Hidden: 1,
  Visible: 2,
};

declare const NSSelectionAffinity: {
  Upstream: 0,
  Downstream: 1,
};

declare const NSPopUpArrowPosition: {
  NoArrow: 0,
  ArrowAtCenter: 1,
  ArrowAtBottom: 2,
};

declare const NSStackViewDistribution: {
  GravityAreas: -1,
  Fill: 0,
  FillEqually: 1,
  FillProportionally: 2,
  EqualSpacing: 3,
  EqualCentering: 4,
};

declare const NSTIFFCompression: {
  None: 1,
  CCITTFAX3: 3,
  CCITTFAX4: 4,
  LZW: 5,
  JPEG: 6,
  NEXT: 32766,
  PackBits: 32773,
  OldJPEG: 32865,
};

declare const NSWorkspaceIconCreationOptions: {
  ExcludeQuickDraw: 2,
  Exclude10_4: 4,
};

declare const NSCellHitResult: {
  None: 0,
  ContentArea: 1,
  EditableTextArea: 2,
  TrackableArea: 4,
};

declare const NSSplitViewDividerStyle: {
  Thick: 1,
  Thin: 2,
  PaneSplitter: 3,
};

declare const NSBackingStoreType: {
  Retained: 0,
  Nonretained: 1,
  Buffered: 2,
};

declare const NSAnimationCurve: {
  EaseInOut: 0,
  EaseIn: 1,
  EaseOut: 2,
  Linear: 3,
};

declare const NSEventMask: {
  LeftMouseDown: 2,
  LeftMouseUp: 4,
  RightMouseDown: 8,
  RightMouseUp: 16,
  MouseMoved: 32,
  LeftMouseDragged: 64,
  RightMouseDragged: 128,
  MouseEntered: 256,
  MouseExited: 512,
  KeyDown: 1024,
  KeyUp: 2048,
  FlagsChanged: 4096,
  AppKitDefined: 8192,
  SystemDefined: 16384,
  ApplicationDefined: 32768,
  Periodic: 65536,
  CursorUpdate: 131072,
  ScrollWheel: 4194304,
  TabletPoint: 8388608,
  TabletProximity: 16777216,
  OtherMouseDown: 33554432,
  OtherMouseUp: 67108864,
  OtherMouseDragged: 134217728,
  Gesture: 536870912,
  Magnify: 1073741824,
  Swipe: 2147483648,
  Rotate: 262144,
  BeginGesture: 524288,
  EndGesture: 1048576,
  SmartMagnify: 4294967296,
  Pressure: 17179869184,
  DirectTouch: 137438953472,
  ChangeMode: 274877906944,
  Any: -1,
};

declare const NSFontDescriptorSymbolicTraits: {
  TraitItalic: 1,
  TraitBold: 2,
  TraitExpanded: 32,
  TraitCondensed: 64,
  TraitMonoSpace: 1024,
  TraitVertical: 2048,
  TraitUIOptimized: 4096,
  TraitTightLeading: 32768,
  TraitLooseLeading: 65536,
  ClassMask: -268435456,
  ClassUnknown: 0,
  ClassOldStyleSerifs: 268435456,
  ClassTransitionalSerifs: 536870912,
  ClassModernSerifs: 805306368,
  ClassClarendonSerifs: 1073741824,
  ClassSlabSerifs: 1342177280,
  ClassFreeformSerifs: 1879048192,
  ClassSansSerif: -2147483648,
  ClassOrnamentals: -1879048192,
  ClassScripts: -1610612736,
  ClassSymbolic: -1073741824,
};

declare const NSTextSelectionNavigationDestination: {
  Character: 0,
  Word: 1,
  Line: 2,
  Sentence: 3,
  Paragraph: 4,
  Container: 5,
  Document: 6,
};

declare const NSColorPanelOptions: {
  GrayMode: 1,
  RGBMode: 2,
  CMYKMode: 4,
  HSBMode: 8,
  CustomPaletteMode: 16,
  ColorListMode: 32,
  WheelMode: 64,
  CrayonMode: 128,
  AllModes: 65535,
};

declare const NSPageLayoutResult: {
  Cancelled: 0,
  Changed: 1,
};

declare const NSTextInsertionIndicatorAutomaticModeOptions: {
  EffectsView: 1,
  WhileTracking: 2,
};

declare const NSTextBlockValueType: {
  Absolute: 0,
  Percentage: 1,
};

declare const NSTextTableLayoutAlgorithm: {
  Automatic: 0,
  Fixed: 1,
};

declare const NSSpringLoadingHighlight: {
  None: 0,
  Standard: 1,
  Emphasized: 2,
};

declare const NSTableColumnResizingOptions: {
  NoResizing: 0,
  AutoresizingMask: 1,
  UserResizingMask: 2,
};

declare const NSSpellingState: {
  Spelling: 1,
  Grammar: 2,
};

declare const NSWritingToolsResultOptions: {
  Default: 0,
  PlainText: 1,
  RichText: 2,
  List: 4,
  Table: 8,
};

declare const NSRemoteNotificationType: {
  None: 0,
  Badge: 1,
  Sound: 2,
  Alert: 4,
};

declare const NSPopoverAppearance: {
  Minimal: 0,
  HUD: 1,
};

declare const NSSegmentSwitchTracking: {
  SelectOne: 0,
  SelectAny: 1,
  Momentary: 2,
  MomentaryAccelerator: 3,
};

declare const NSScrollerStyle: {
  Legacy: 0,
  Overlay: 1,
};

declare const NSAccessibilityUnits: {
  Unknown: 0,
  Inches: 1,
  Centimeters: 2,
  Points: 3,
  Picas: 4,
};

declare const NSTabPosition: {
  None: 0,
  Top: 1,
  Left: 2,
  Bottom: 3,
  Right: 4,
};

declare const NSPaperOrientation: {
  Portrait: 0,
  Landscape: 1,
};

declare const NSEventButtonMask: {
  Tip: 1,
  LowerSide: 2,
  UpperSide: 4,
};

declare const NSPasteboardWritingOptions: {
  NSPasteboardWritingPromised: 512,
};

declare const NSAccessibilityPriorityLevel: {
  Low: 10,
  Medium: 50,
  High: 90,
};

declare const NSTextLayoutManagerSegmentType: {
  Standard: 0,
  Selection: 1,
  Highlight: 2,
};

declare const NSCellAttribute: {
  CellDisabled: 0,
  CellState: 1,
  PushInCell: 2,
  CellEditable: 3,
  ChangeGrayCell: 4,
  CellHighlighted: 5,
  CellLightsByContents: 6,
  CellLightsByGray: 7,
  ChangeBackgroundCell: 8,
  CellLightsByBackground: 9,
  CellIsBordered: 10,
  CellHasOverlappingImage: 11,
  CellHasImageHorizontal: 12,
  CellHasImageOnLeftOrBottom: 13,
  CellChangesContents: 14,
  CellIsInsetButton: 15,
  CellAllowsMixedState: 16,
};

declare const NSToolbarItemGroupControlRepresentation: {
  Automatic: 0,
  Expanded: 1,
  Collapsed: 2,
};

declare const NSMenuItemBadgeType: {
  None: 0,
  Updates: 1,
  NewItems: 2,
  Alerts: 3,
};

declare const NSStringDrawingOptions: {
  UsesLineFragmentOrigin: 1,
  UsesFontLeading: 2,
  UsesDeviceMetrics: 8,
  TruncatesLastVisibleLine: 32,
  DisableScreenFontSubstitution: 4,
  OneShot: 16,
};

declare const NSViewLayerContentsPlacement: {
  ScaleAxesIndependently: 0,
  ScaleProportionallyToFit: 1,
  ScaleProportionallyToFill: 2,
  Center: 3,
  Top: 4,
  TopRight: 5,
  Right: 6,
  BottomRight: 7,
  Bottom: 8,
  BottomLeft: 9,
  Left: 10,
  TopLeft: 11,
};

declare const NSSpeechBoundary: {
  Immediate: 0,
  Word: 1,
  Sentence: 2,
};

declare const NSTableViewDraggingDestinationFeedbackStyle: {
  None: -1,
  Regular: 0,
  SourceList: 1,
  Gap: 2,
};

declare const NSScrollerKnobStyle: {
  Default: 0,
  Dark: 1,
  Light: 2,
};

declare const NSTableViewGridLineStyle: {
  GridNone: 0,
  SolidVerticalGridLineMask: 1,
  SolidHorizontalGridLineMask: 2,
  DashedHorizontalGridLineMask: 8,
};

declare const NSImageCacheMode: {
  Default: 0,
  Always: 1,
  BySize: 2,
  Never: 3,
};

declare const NSGestureRecognizerState: {
  Possible: 0,
  Began: 1,
  Changed: 2,
  Ended: 3,
  Cancelled: 4,
  Failed: 5,
  Recognized: 3,
};

declare const NSWindowCollectionBehavior: {
  Default: 0,
  CanJoinAllSpaces: 1,
  MoveToActiveSpace: 2,
  Managed: 4,
  Transient: 8,
  Stationary: 16,
  ParticipatesInCycle: 32,
  IgnoresCycle: 64,
  FullScreenPrimary: 128,
  FullScreenAuxiliary: 256,
  FullScreenNone: 512,
  FullScreenAllowsTiling: 2048,
  FullScreenDisallowsTiling: 4096,
  Primary: 65536,
  Auxiliary: 131072,
  CanJoinAllApplications: 262144,
};

declare const NSAccessibilityOrientation: {
  Unknown: 0,
  Vertical: 1,
  Horizontal: 2,
};

declare const NSImageAlignment: {
  Center: 0,
  Top: 1,
  TopLeft: 2,
  TopRight: 3,
  Left: 4,
  Bottom: 5,
  BottomLeft: 6,
  BottomRight: 7,
  Right: 8,
};

declare const NSTabViewControllerTabStyle: {
  SegmentedControlOnTop: 0,
  SegmentedControlOnBottom: 1,
  Toolbar: 2,
  Unspecified: -1,
};

declare const NSLineBreakStrategy: {
  None: 0,
  PushOut: 1,
  HangulWordPriority: 2,
  Standard: 65535,
};

declare const NSColorPanelMode: {
  None: -1,
  Gray: 0,
  RGB: 1,
  CMYK: 2,
  HSB: 3,
  CustomPalette: 4,
  ColorList: 5,
  Wheel: 6,
  Crayon: 7,
};

declare const NSFocusRingType: {
  Default: 0,
  None: 1,
  Exterior: 2,
};

declare const NSSplitViewItemCollapseBehavior: {
  Default: 0,
  PreferResizingSplitViewWithFixedSiblings: 1,
  PreferResizingSiblingsWithFixedSplitView: 2,
  UseConstraints: 3,
};

declare const NSTextSelectionNavigationWritingDirection: {
  LeftToRight: 0,
  RightToLeft: 1,
};

declare const NSTextSelectionNavigationLayoutOrientation: {
  Horizontal: 0,
  Vertical: 1,
};

declare const NSPrinterTableStatus: {
  OK: 0,
  NotFound: 1,
  Error: 2,
};

declare const NSBorderType: {
  No: 0,
  Line: 1,
  Bezel: 2,
  Groove: 3,
};

declare const NSGlyphProperty: {
  Null: 1,
  ControlCharacter: 2,
  Elastic: 4,
  NonBaseCharacter: 8,
};

declare const NSHapticFeedbackPerformanceTime: {
  Default: 0,
  Now: 1,
  DrawCompleted: 2,
};

declare const NSTableViewRowSizeStyle: {
  Default: -1,
  Custom: 0,
  Small: 1,
  Medium: 2,
  Large: 3,
};

declare const NSSelectionGranularity: {
  Character: 0,
  Word: 1,
  Paragraph: 2,
};

declare const NSMenuSelectionMode: {
  Automatic: 0,
  SelectOne: 1,
  SelectAny: 2,
};

declare const NSFocusRingPlacement: {
  Only: 0,
  Below: 1,
  Above: 2,
};

declare const NSWindowNumberListOptions: {
  Applications: 1,
  Spaces: 16,
};

declare const NSTableViewAnimationOptions: {
  EffectNone: 0,
  EffectFade: 1,
  EffectGap: 2,
  SlideUp: 16,
  SlideDown: 32,
  SlideLeft: 48,
  SlideRight: 64,
};

declare const NSWritingDirection: {
  Natural: -1,
  LeftToRight: 0,
  RightToLeft: 1,
};

declare const NSPopoverBehavior: {
  ApplicationDefined: 0,
  Transient: 1,
  Semitransient: 2,
};

declare class NSDirectionalEdgeInsets {
  constructor(init?: NSDirectionalEdgeInsets);
  top: number;
  leading: number;
  bottom: number;
  trailing: number;
}

declare class _NSModalSession {
  constructor(init?: _NSModalSession);
}

declare function NSCreateFilenamePboardType(fileType: string): string;

declare function NSCreateFileContentsPboardType(fileType: string): string;

declare function NSGetFileType(pboardType: string): string;

declare function NSGetFileTypes(pboardTypes: NSArray<interop.Object> | Array<interop.Object>): NSArray;

declare function NSBestDepth(colorSpace: string, bps: number, bpp: number, planar: boolean, exactMatch: interop.PointerConvertible): interop.Enum<typeof NSWindowDepth>;

declare function NSPlanarFromDepth(depth: interop.Enum<typeof NSWindowDepth>): boolean;

declare function NSColorSpaceFromDepth(depth: interop.Enum<typeof NSWindowDepth>): string;

declare function NSBitsPerSampleFromDepth(depth: interop.Enum<typeof NSWindowDepth>): number;

declare function NSBitsPerPixelFromDepth(depth: interop.Enum<typeof NSWindowDepth>): number;

declare function NSNumberOfColorComponents(colorSpaceName: string): number;

declare function NSAvailableWindowDepths(): interop.Pointer;

declare function NSRectFill(rect: CGRect): void;

declare function NSRectFillList(rects: interop.PointerConvertible, count: number): void;

declare function NSRectFillListWithGrays(rects: interop.PointerConvertible, grays: interop.PointerConvertible, num: number): void;

declare function NSRectFillListWithColors(rects: interop.PointerConvertible, colors: interop.PointerConvertible, num: number): void;

declare function NSRectFillUsingOperation(rect: CGRect, op: interop.Enum<typeof NSCompositingOperation>): void;

declare function NSRectFillListUsingOperation(rects: interop.PointerConvertible, count: number, op: interop.Enum<typeof NSCompositingOperation>): void;

declare function NSRectFillListWithColorsUsingOperation(rects: interop.PointerConvertible, colors: interop.PointerConvertible, num: number, op: interop.Enum<typeof NSCompositingOperation>): void;

declare function NSFrameRect(rect: CGRect): void;

declare function NSFrameRectWithWidth(rect: CGRect, frameWidth: number): void;

declare function NSFrameRectWithWidthUsingOperation(rect: CGRect, frameWidth: number, op: interop.Enum<typeof NSCompositingOperation>): void;

declare function NSRectClip(rect: CGRect): void;

declare function NSRectClipList(rects: interop.PointerConvertible, count: number): void;

declare function NSDrawTiledRects(boundsRect: CGRect, clipRect: CGRect, sides: interop.PointerConvertible, grays: interop.PointerConvertible, count: number): CGRect;

declare function NSDrawGrayBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawGroove(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawWhiteBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawButton(rect: CGRect, clipRect: CGRect): void;

declare function NSEraseRect(rect: CGRect): void;

declare function NSReadPixel(passedPoint: CGPoint): NSColor;

declare function NSDrawBitmap(rect: CGRect, width: number, height: number, bps: number, spp: number, bpp: number, bpr: number, isPlanar: boolean, hasAlpha: boolean, colorSpaceName: string, data: interop.PointerConvertible): void;

declare function NSHighlightRect(rect: CGRect): void;

declare function NSBeep(): void;

declare function NSGetWindowServerMemory(context: number, virtualMemory: interop.PointerConvertible, windowBackingMemory: interop.PointerConvertible, windowDumpString: interop.PointerConvertible): number;

declare function NSDrawColorTiledRects(boundsRect: CGRect, clipRect: CGRect, sides: interop.PointerConvertible, colors: interop.PointerConvertible, count: number): CGRect;

declare function NSDrawDarkBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawLightBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDottedFrameRect(rect: CGRect): void;

declare function NSDrawWindowBackground(rect: CGRect): void;

declare function NSSetFocusRingStyle(placement: interop.Enum<typeof NSFocusRingPlacement>): void;

declare function NSDisableScreenUpdates(): void;

declare function NSEnableScreenUpdates(): void;

declare function NSShowAnimationEffect(animationEffect: interop.Enum<typeof NSAnimationEffect>, centerLocation: CGPoint, size: CGSize, animationDelegate: interop.Object, didEndSelector: string, contextInfo: interop.PointerConvertible): void;

declare function NSCountWindows(count: interop.PointerConvertible): void;

declare function NSWindowList(size: number, list: interop.PointerConvertible): void;

declare function NSCountWindowsForContext(context: number, count: interop.PointerConvertible): void;

declare function NSWindowListForContext(context: number, size: number, list: interop.PointerConvertible): void;

declare function NSCopyBits(srcGState: number, srcRect: CGRect, destPoint: CGPoint): void;

declare function NSAccessibilityPostNotificationWithUserInfo(element: interop.Object, notification: string, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

declare function NSDrawThreePartImage(frame: CGRect, startCap: NSImage, centerFill: NSImage, endCap: NSImage, vertical: boolean, op: interop.Enum<typeof NSCompositingOperation>, alphaFraction: number, flipped: boolean): void;

declare function NSDrawNinePartImage(frame: CGRect, topLeftCorner: NSImage, topEdgeFill: NSImage, topRightCorner: NSImage, leftEdgeFill: NSImage, centerFill: NSImage, rightEdgeFill: NSImage, bottomLeftCorner: NSImage, bottomEdgeFill: NSImage, bottomRightCorner: NSImage, op: interop.Enum<typeof NSCompositingOperation>, alphaFraction: number, flipped: boolean): void;

declare function NSAccessibilityFrameInView(parentView: NSView, frame: CGRect): CGRect;

declare function NSAccessibilityPointInView(parentView: NSView, point: CGPoint): CGPoint;

declare function NSAccessibilitySetMayContainProtectedContent(flag: boolean): boolean;

declare function NSAccessibilityRoleDescription(role: string, subrole: string): string;

declare function NSAccessibilityRoleDescriptionForUIElement(element: interop.Object): string;

declare function NSAccessibilityActionDescription(action: string): string;

declare function NSAccessibilityRaiseBadArgumentException(element: interop.Object, attribute: string, value: interop.Object): void;

declare function NSAccessibilityUnignoredAncestor(element: interop.Object): interop.Object;

declare function NSAccessibilityUnignoredDescendant(element: interop.Object): interop.Object;

declare function NSAccessibilityUnignoredChildren(originalChildren: NSArray<interop.Object> | Array<interop.Object>): NSArray;

declare function NSAccessibilityUnignoredChildrenForOnlyChild(originalChild: interop.Object): NSArray;

declare function NSAccessibilityPostNotification(element: interop.Object, notification: string): void;

declare function NSIsControllerMarker(object: interop.Object): boolean;

declare function NSApplicationMain(argc: number, argv: interop.PointerConvertible): number;

declare function NSApplicationLoad(): boolean;

declare function NSShowsServicesMenuItem(itemName: string): boolean;

declare function NSSetShowsServicesMenuItem(itemName: string, enabled: boolean): number;

declare function NSUpdateDynamicServices(): void;

declare function NSPerformService(itemName: string, pboard: NSPasteboard): boolean;

declare function NSRegisterServicesProvider(provider: interop.Object, name: string): void;

declare function NSUnregisterServicesProvider(name: string): void;

declare function NSConvertGlyphsToPackedGlyphs(glBuf: interop.PointerConvertible, count: number, packing: interop.Enum<typeof NSMultibyteGlyphPacking>, packedGlyphs: string): number;

declare function NSRunAlertPanelRelativeToWindow(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string, docWindow: NSWindow): number;

declare function NSRunInformationalAlertPanelRelativeToWindow(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string, docWindow: NSWindow): number;

declare function NSRunCriticalAlertPanelRelativeToWindow(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string, docWindow: NSWindow): number;

declare function NSRunAlertPanel(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string): number;

declare function NSRunInformationalAlertPanel(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string): number;

declare function NSRunCriticalAlertPanel(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string): number;

declare function NSBeginAlertSheet(title: string, defaultButton: string, alternateButton: string, otherButton: string, docWindow: NSWindow, modalDelegate: interop.Object, didEndSelector: string, didDismissSelector: string, contextInfo: interop.PointerConvertible, msgFormat: string): void;

declare function NSBeginInformationalAlertSheet(title: string, defaultButton: string, alternateButton: string, otherButton: string, docWindow: NSWindow, modalDelegate: interop.Object, didEndSelector: string, didDismissSelector: string, contextInfo: interop.PointerConvertible, msgFormat: string): void;

declare function NSBeginCriticalAlertSheet(title: string, defaultButton: string, alternateButton: string, otherButton: string, docWindow: NSWindow, modalDelegate: interop.Object, didEndSelector: string, didDismissSelector: string, contextInfo: interop.PointerConvertible, msgFormat: string): void;

declare function NSGetAlertPanel(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string): interop.Object;

declare function NSGetInformationalAlertPanel(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string): interop.Object;

declare function NSGetCriticalAlertPanel(title: string, msgFormat: string, defaultButton: string, alternateButton: string, otherButton: string): interop.Object;

declare function NSReleaseAlertPanel(panel: interop.Object): void;

declare function _NSDictionaryOfVariableBindings(commaSeparatedKeysString: string, firstValue: interop.Object): NSDictionary;

declare function NSInterfaceStyleForKey(key: string, responder: NSResponder): number;

declare function NSOpenGLSetOption(pname: interop.Enum<typeof NSOpenGLGlobalOption>, param: number): void;

declare function NSOpenGLGetOption(pname: interop.Enum<typeof NSOpenGLGlobalOption>, param: interop.PointerConvertible): void;

declare function NSOpenGLGetVersion(major: interop.PointerConvertible, minor: interop.PointerConvertible): void;

declare interface NSAccessibilityElementProtocol extends NSObjectProtocol {
  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused?: boolean;

  accessibilityIdentifier?: string;
}

declare class NSAccessibilityElementProtocol extends NativeObject implements NSAccessibilityElementProtocol {
}

declare interface NSPasteboardWriting extends NSObjectProtocol {
  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  writingOptionsForTypePasteboard?(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardWritingOptions>;

  pasteboardPropertyListForType(type: string): interop.Object;
}

declare class NSPasteboardWriting extends NativeObject implements NSPasteboardWriting {
}

declare interface NSDraggingSource extends NSObjectProtocol {
  draggingSessionSourceOperationMaskForDraggingContext(session: NSDraggingSession, context: interop.Enum<typeof NSDraggingContext>): interop.Enum<typeof NSDragOperation>;

  draggingSessionWillBeginAtPoint?(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionMovedToPoint?(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionEndedAtPointOperation?(session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  ignoreModifierKeysForDraggingSession?(session: NSDraggingSession): boolean;
}

declare class NSDraggingSource extends NativeObject implements NSDraggingSource {
}

declare interface NSAccessibilityCheckBox extends NSAccessibilityButton {
  accessibilityValue(): NSNumber;
}

declare class NSAccessibilityCheckBox extends NativeObject implements NSAccessibilityCheckBox {
}

declare interface NSMenuDelegate extends NSObjectProtocol {
  menuNeedsUpdate?(menu: NSMenu): void;

  numberOfItemsInMenu?(menu: NSMenu): number;

  menuUpdateItemAtIndexShouldCancel?(menu: NSMenu, item: NSMenuItem, index: number, shouldCancel: boolean): boolean;

  menuHasKeyEquivalentForEventTargetAction?(menu: NSMenu, event: NSEvent, target: interop.PointerConvertible, action: interop.PointerConvertible): boolean;

  menuWillOpen?(menu: NSMenu): void;

  menuDidClose?(menu: NSMenu): void;

  menuWillHighlightItem?(menu: NSMenu, item: NSMenuItem | null): void;

  confinementRectForMenuOnScreen?(menu: NSMenu, screen: NSScreen | null): CGRect;
}

declare class NSMenuDelegate extends NativeObject implements NSMenuDelegate {
}

declare interface NSEditor extends NSObjectProtocol {
  discardEditing(): void;

  commitEditing(): boolean;

  commitEditingWithDelegateDidCommitSelectorContextInfo(delegate: interop.Object | null, didCommitSelector: string | null, contextInfo: interop.PointerConvertible): void;

  commitEditingAndReturnError(error: interop.PointerConvertible): boolean;
}

declare class NSEditor extends NativeObject implements NSEditor {
}

declare interface NSStackViewDelegate extends NSObjectProtocol {
  stackViewWillDetachViews?(stackView: NSStackView, views: NSArray<interop.Object> | Array<interop.Object>): void;

  stackViewDidReattachViews?(stackView: NSStackView, views: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class NSStackViewDelegate extends NativeObject implements NSStackViewDelegate {
}

declare interface NSIgnoreMisspelledWords {
  ignoreSpelling(sender: interop.Object | null): void;
}

declare class NSIgnoreMisspelledWords extends NativeObject implements NSIgnoreMisspelledWords {
}

declare interface NSScrubberDelegate extends NSObjectProtocol {
  scrubberDidSelectItemAtIndex?(scrubber: NSScrubber, selectedIndex: number): void;

  scrubberDidHighlightItemAtIndex?(scrubber: NSScrubber, highlightedIndex: number): void;

  scrubberDidChangeVisibleRange?(scrubber: NSScrubber, visibleRange: _NSRange): void;

  didBeginInteractingWithScrubber?(scrubber: NSScrubber): void;

  didFinishInteractingWithScrubber?(scrubber: NSScrubber): void;

  didCancelInteractingWithScrubber?(scrubber: NSScrubber): void;
}

declare class NSScrubberDelegate extends NativeObject implements NSScrubberDelegate {
}

declare interface NSViewContentSelectionInfo extends NSObjectProtocol {
  readonly selectionAnchorRect?: CGRect;
}

declare class NSViewContentSelectionInfo extends NativeObject implements NSViewContentSelectionInfo {
}

declare interface NSPreviewRepresentableActivityItem extends NSObjectProtocol {
  readonly item: interop.Object;

  readonly title?: string;

  readonly imageProvider?: NSItemProvider;

  readonly iconProvider?: NSItemProvider;
}

declare class NSPreviewRepresentableActivityItem extends NativeObject implements NSPreviewRepresentableActivityItem {
}

declare interface NSCollectionViewDelegateFlowLayout extends NSCollectionViewDelegate {
  collectionViewLayoutSizeForItemAtIndexPath?(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, indexPath: NSIndexPath): CGSize;

  collectionViewLayoutInsetForSectionAtIndex?(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: number): NSEdgeInsets;

  collectionViewLayoutMinimumLineSpacingForSectionAtIndex?(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: number): number;

  collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex?(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: number): number;

  collectionViewLayoutReferenceSizeForHeaderInSection?(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: number): CGSize;

  collectionViewLayoutReferenceSizeForFooterInSection?(collectionView: NSCollectionView, collectionViewLayout: NSCollectionViewLayout, section: number): CGSize;
}

declare class NSCollectionViewDelegateFlowLayout extends NativeObject implements NSCollectionViewDelegateFlowLayout {
}

declare interface NSFilePromiseProviderDelegate extends NSObjectProtocol {
  filePromiseProviderFileNameForType(filePromiseProvider: NSFilePromiseProvider, fileType: string): string;

  filePromiseProviderWritePromiseToURLCompletionHandler(filePromiseProvider: NSFilePromiseProvider, url: NSURL, completionHandler: (p1: NSError) => void | null): void;

  operationQueueForFilePromiseProvider?(filePromiseProvider: NSFilePromiseProvider): NSOperationQueue;
}

declare class NSFilePromiseProviderDelegate extends NativeObject implements NSFilePromiseProviderDelegate {
}

declare interface NSTextAttachmentContainer extends NSObjectProtocol {
  imageForBoundsTextContainerCharacterIndex(imageBounds: CGRect, textContainer: NSTextContainer | null, charIndex: number): NSImage;

  attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(textContainer: NSTextContainer | null, lineFrag: CGRect, position: CGPoint, charIndex: number): CGRect;
}

declare class NSTextAttachmentContainer extends NativeObject implements NSTextAttachmentContainer {
}

declare interface NSAlignmentFeedbackToken extends NSObjectProtocol {
}

declare class NSAlignmentFeedbackToken extends NativeObject implements NSAlignmentFeedbackToken {
}

declare interface NSTextViewportLayoutControllerDelegate extends NSObjectProtocol {
  viewportBoundsForTextViewportLayoutController(textViewportLayoutController: NSTextViewportLayoutController): CGRect;

  textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment(textViewportLayoutController: NSTextViewportLayoutController, textLayoutFragment: NSTextLayoutFragment): void;

  textViewportLayoutControllerWillLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;

  textViewportLayoutControllerDidLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;
}

declare class NSTextViewportLayoutControllerDelegate extends NativeObject implements NSTextViewportLayoutControllerDelegate {
}

declare interface NSImageDelegate extends NSObjectProtocol {
  imageDidNotDrawInRect?(sender: NSImage, rect: CGRect): NSImage;

  imageWillLoadRepresentation?(image: NSImage, rep: NSImageRep): void;

  imageDidLoadRepresentationHeader?(image: NSImage, rep: NSImageRep): void;

  imageDidLoadPartOfRepresentationWithValidRows?(image: NSImage, rep: NSImageRep, rows: number): void;

  imageDidLoadRepresentationWithStatus?(image: NSImage, rep: NSImageRep, status: interop.Enum<typeof NSImageLoadStatus>): void;
}

declare class NSImageDelegate extends NativeObject implements NSImageDelegate {
}

declare interface NSTextInputTraits {
  autocorrectionType?: interop.Enum<typeof NSTextInputTraitType>;

  spellCheckingType?: interop.Enum<typeof NSTextInputTraitType>;

  grammarCheckingType?: interop.Enum<typeof NSTextInputTraitType>;

  smartQuotesType?: interop.Enum<typeof NSTextInputTraitType>;

  smartDashesType?: interop.Enum<typeof NSTextInputTraitType>;

  smartInsertDeleteType?: interop.Enum<typeof NSTextInputTraitType>;

  textReplacementType?: interop.Enum<typeof NSTextInputTraitType>;

  dataDetectionType?: interop.Enum<typeof NSTextInputTraitType>;

  linkDetectionType?: interop.Enum<typeof NSTextInputTraitType>;

  textCompletionType?: interop.Enum<typeof NSTextInputTraitType>;

  inlinePredictionType?: interop.Enum<typeof NSTextInputTraitType>;

  mathExpressionCompletionType?: interop.Enum<typeof NSTextInputTraitType>;

  writingToolsBehavior?: interop.Enum<typeof NSWritingToolsBehavior>;

  allowedWritingToolsResultOptions?: interop.Enum<typeof NSWritingToolsResultOptions>;
}

declare class NSTextInputTraits extends NativeObject implements NSTextInputTraits {
}

declare interface NSSharingServicePickerTouchBarItemDelegate extends NSSharingServicePickerDelegate {
  itemsForSharingServicePickerTouchBarItem(pickerTouchBarItem: NSSharingServicePickerTouchBarItem): NSArray;
}

declare class NSSharingServicePickerTouchBarItemDelegate extends NativeObject implements NSSharingServicePickerTouchBarItemDelegate {
}

declare interface NSDrawerDelegate extends NSObjectProtocol {
  drawerShouldOpen?(sender: NSDrawer): boolean;

  drawerShouldClose?(sender: NSDrawer): boolean;

  drawerWillResizeContentsToSize?(sender: NSDrawer, contentSize: CGSize): CGSize;

  drawerWillOpen?(notification: NSNotification): void;

  drawerDidOpen?(notification: NSNotification): void;

  drawerWillClose?(notification: NSNotification): void;

  drawerDidClose?(notification: NSNotification): void;
}

declare class NSDrawerDelegate extends NativeObject implements NSDrawerDelegate {
}

declare interface NSViewToolTipOwner extends NSObjectProtocol {
  viewStringForToolTipPointUserData(view: NSView, tag: number, point: CGPoint, data: interop.PointerConvertible): string;
}

declare class NSViewToolTipOwner extends NativeObject implements NSViewToolTipOwner {
}

declare interface NSStandardKeyBindingResponding extends NSObjectProtocol {
  insertText?(insertString: interop.Object): void;

  doCommandBySelector?(selector: string): void;

  moveForward?(sender: interop.Object | null): void;

  moveRight?(sender: interop.Object | null): void;

  moveBackward?(sender: interop.Object | null): void;

  moveLeft?(sender: interop.Object | null): void;

  moveUp?(sender: interop.Object | null): void;

  moveDown?(sender: interop.Object | null): void;

  moveWordForward?(sender: interop.Object | null): void;

  moveWordBackward?(sender: interop.Object | null): void;

  moveToBeginningOfLine?(sender: interop.Object | null): void;

  moveToEndOfLine?(sender: interop.Object | null): void;

  moveToBeginningOfParagraph?(sender: interop.Object | null): void;

  moveToEndOfParagraph?(sender: interop.Object | null): void;

  moveToEndOfDocument?(sender: interop.Object | null): void;

  moveToBeginningOfDocument?(sender: interop.Object | null): void;

  pageDown?(sender: interop.Object | null): void;

  pageUp?(sender: interop.Object | null): void;

  centerSelectionInVisibleArea?(sender: interop.Object | null): void;

  moveBackwardAndModifySelection?(sender: interop.Object | null): void;

  moveForwardAndModifySelection?(sender: interop.Object | null): void;

  moveWordForwardAndModifySelection?(sender: interop.Object | null): void;

  moveWordBackwardAndModifySelection?(sender: interop.Object | null): void;

  moveUpAndModifySelection?(sender: interop.Object | null): void;

  moveDownAndModifySelection?(sender: interop.Object | null): void;

  moveToBeginningOfLineAndModifySelection?(sender: interop.Object | null): void;

  moveToEndOfLineAndModifySelection?(sender: interop.Object | null): void;

  moveToBeginningOfParagraphAndModifySelection?(sender: interop.Object | null): void;

  moveToEndOfParagraphAndModifySelection?(sender: interop.Object | null): void;

  moveToEndOfDocumentAndModifySelection?(sender: interop.Object | null): void;

  moveToBeginningOfDocumentAndModifySelection?(sender: interop.Object | null): void;

  pageDownAndModifySelection?(sender: interop.Object | null): void;

  pageUpAndModifySelection?(sender: interop.Object | null): void;

  moveParagraphForwardAndModifySelection?(sender: interop.Object | null): void;

  moveParagraphBackwardAndModifySelection?(sender: interop.Object | null): void;

  moveWordRight?(sender: interop.Object | null): void;

  moveWordLeft?(sender: interop.Object | null): void;

  moveRightAndModifySelection?(sender: interop.Object | null): void;

  moveLeftAndModifySelection?(sender: interop.Object | null): void;

  moveWordRightAndModifySelection?(sender: interop.Object | null): void;

  moveWordLeftAndModifySelection?(sender: interop.Object | null): void;

  moveToLeftEndOfLine?(sender: interop.Object | null): void;

  moveToRightEndOfLine?(sender: interop.Object | null): void;

  moveToLeftEndOfLineAndModifySelection?(sender: interop.Object | null): void;

  moveToRightEndOfLineAndModifySelection?(sender: interop.Object | null): void;

  scrollPageUp?(sender: interop.Object | null): void;

  scrollPageDown?(sender: interop.Object | null): void;

  scrollLineUp?(sender: interop.Object | null): void;

  scrollLineDown?(sender: interop.Object | null): void;

  scrollToBeginningOfDocument?(sender: interop.Object | null): void;

  scrollToEndOfDocument?(sender: interop.Object | null): void;

  transpose?(sender: interop.Object | null): void;

  transposeWords?(sender: interop.Object | null): void;

  selectAll?(sender: interop.Object | null): void;

  selectParagraph?(sender: interop.Object | null): void;

  selectLine?(sender: interop.Object | null): void;

  selectWord?(sender: interop.Object | null): void;

  indent?(sender: interop.Object | null): void;

  insertTab?(sender: interop.Object | null): void;

  insertBacktab?(sender: interop.Object | null): void;

  insertNewline?(sender: interop.Object | null): void;

  insertParagraphSeparator?(sender: interop.Object | null): void;

  insertNewlineIgnoringFieldEditor?(sender: interop.Object | null): void;

  insertTabIgnoringFieldEditor?(sender: interop.Object | null): void;

  insertLineBreak?(sender: interop.Object | null): void;

  insertContainerBreak?(sender: interop.Object | null): void;

  insertSingleQuoteIgnoringSubstitution?(sender: interop.Object | null): void;

  insertDoubleQuoteIgnoringSubstitution?(sender: interop.Object | null): void;

  changeCaseOfLetter?(sender: interop.Object | null): void;

  uppercaseWord?(sender: interop.Object | null): void;

  lowercaseWord?(sender: interop.Object | null): void;

  capitalizeWord?(sender: interop.Object | null): void;

  deleteForward?(sender: interop.Object | null): void;

  deleteBackward?(sender: interop.Object | null): void;

  deleteBackwardByDecomposingPreviousCharacter?(sender: interop.Object | null): void;

  deleteWordForward?(sender: interop.Object | null): void;

  deleteWordBackward?(sender: interop.Object | null): void;

  deleteToBeginningOfLine?(sender: interop.Object | null): void;

  deleteToEndOfLine?(sender: interop.Object | null): void;

  deleteToBeginningOfParagraph?(sender: interop.Object | null): void;

  deleteToEndOfParagraph?(sender: interop.Object | null): void;

  yank?(sender: interop.Object | null): void;

  complete?(sender: interop.Object | null): void;

  setMark?(sender: interop.Object | null): void;

  deleteToMark?(sender: interop.Object | null): void;

  selectToMark?(sender: interop.Object | null): void;

  swapWithMark?(sender: interop.Object | null): void;

  cancelOperation?(sender: interop.Object | null): void;

  makeBaseWritingDirectionNatural?(sender: interop.Object | null): void;

  makeBaseWritingDirectionLeftToRight?(sender: interop.Object | null): void;

  makeBaseWritingDirectionRightToLeft?(sender: interop.Object | null): void;

  makeTextWritingDirectionNatural?(sender: interop.Object | null): void;

  makeTextWritingDirectionLeftToRight?(sender: interop.Object | null): void;

  makeTextWritingDirectionRightToLeft?(sender: interop.Object | null): void;

  quickLookPreviewItems?(sender: interop.Object | null): void;

  showContextMenuForSelection?(sender: interop.Object | null): void;
}

declare class NSStandardKeyBindingResponding extends NativeObject implements NSStandardKeyBindingResponding {
}

declare interface NSPasteboardTypeOwner extends NSObjectProtocol {
  pasteboardProvideDataForType(sender: NSPasteboard, type: string): void;

  pasteboardChangedOwner?(sender: NSPasteboard): void;
}

declare class NSPasteboardTypeOwner extends NativeObject implements NSPasteboardTypeOwner {
}

declare interface NSAccessibilityLayoutItem extends NSAccessibilityGroup {
  setAccessibilityFrame?(frame: CGRect): void;
}

declare class NSAccessibilityLayoutItem extends NativeObject implements NSAccessibilityLayoutItem {
}

declare interface NSDockTilePlugIn extends NSObjectProtocol {
  setDockTile(dockTile: NSDockTile | null): void;

  dockMenu?(): NSMenu;
}

declare class NSDockTilePlugIn extends NativeObject implements NSDockTilePlugIn {
}

declare interface NSSpeechRecognizerDelegate extends NSObjectProtocol {
  speechRecognizerDidRecognizeCommand?(sender: NSSpeechRecognizer, command: string): void;
}

declare class NSSpeechRecognizerDelegate extends NativeObject implements NSSpeechRecognizerDelegate {
}

declare interface NSTableViewDelegate extends NSControlTextEditingDelegate {
  tableViewViewForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSView;

  tableViewRowViewForRow?(tableView: NSTableView, row: number): NSTableRowView;

  tableViewDidAddRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;

  tableViewDidRemoveRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;

  tableViewWillDisplayCellForTableColumnRow?(tableView: NSTableView, cell: interop.Object, tableColumn: NSTableColumn | null, row: number): void;

  tableViewShouldEditTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): boolean;

  tableViewToolTipForCellRectTableColumnRowMouseLocation?(tableView: NSTableView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, row: number, mouseLocation: CGPoint): string;

  tableViewShouldShowCellExpansionForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): boolean;

  tableViewShouldTrackCellForTableColumnRow?(tableView: NSTableView, cell: NSCell, tableColumn: NSTableColumn | null, row: number): boolean;

  tableViewDataCellForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSCell;

  selectionShouldChangeInTableView?(tableView: NSTableView): boolean;

  tableViewShouldSelectRow?(tableView: NSTableView, row: number): boolean;

  tableViewSelectionIndexesForProposedSelection?(tableView: NSTableView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;

  tableViewShouldSelectTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn | null): boolean;

  tableViewMouseDownInHeaderOfTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;

  tableViewDidClickTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;

  tableViewDidDragTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;

  tableViewHeightOfRow?(tableView: NSTableView, row: number): number;

  tableViewTypeSelectStringForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): string;

  tableViewNextTypeSelectMatchFromRowToRowForString?(tableView: NSTableView, startRow: number, endRow: number, searchString: string): number;

  tableViewShouldTypeSelectForEventWithCurrentSearchString?(tableView: NSTableView, event: NSEvent, searchString: string | null): boolean;

  tableViewIsGroupRow?(tableView: NSTableView, row: number): boolean;

  tableViewSizeToFitWidthOfColumn?(tableView: NSTableView, column: number): number;

  tableViewShouldReorderColumnToColumn?(tableView: NSTableView, columnIndex: number, newColumnIndex: number): boolean;

  tableViewRowActionsForRowEdge?(tableView: NSTableView, row: number, edge: interop.Enum<typeof NSTableRowActionEdge>): NSArray;

  tableViewUserCanChangeVisibilityOfTableColumn?(tableView: NSTableView, column: NSTableColumn): boolean;

  tableViewUserDidChangeVisibilityOfTableColumns?(tableView: NSTableView, columns: NSArray<interop.Object> | Array<interop.Object>): void;

  tableViewSelectionDidChange?(notification: NSNotification): void;

  tableViewColumnDidMove?(notification: NSNotification): void;

  tableViewColumnDidResize?(notification: NSNotification): void;

  tableViewSelectionIsChanging?(notification: NSNotification): void;
}

declare class NSTableViewDelegate extends NativeObject implements NSTableViewDelegate {
}

declare interface NSToolbarItemValidation extends NSObjectProtocol {
  validateToolbarItem(item: NSToolbarItem): boolean;
}

declare class NSToolbarItemValidation extends NativeObject implements NSToolbarItemValidation {
}

declare interface NSTextContentStorageDelegate extends NSTextContentManagerDelegate {
  textContentStorageTextParagraphWithRange?(textContentStorage: NSTextContentStorage, range: _NSRange): NSTextParagraph;
}

declare class NSTextContentStorageDelegate extends NativeObject implements NSTextContentStorageDelegate {
}

declare interface NSTextContentManagerDelegate extends NSObjectProtocol {
  textContentManagerTextElementAtLocation?(textContentManager: NSTextContentManager, location: NSTextLocation): NSTextElement;

  textContentManagerShouldEnumerateTextElementOptions?(textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>): boolean;
}

declare class NSTextContentManagerDelegate extends NativeObject implements NSTextContentManagerDelegate {
}

declare interface NSAccessibilityLayoutArea extends NSAccessibilityGroup {
  accessibilityLabel(): string;

  accessibilityChildren(): NSArray;

  accessibilitySelectedChildren(): NSArray;

  readonly accessibilityFocusedUIElement: interop.Object;
}

declare class NSAccessibilityLayoutArea extends NativeObject implements NSAccessibilityLayoutArea {
}

declare interface NSHapticFeedbackPerformer extends NSObjectProtocol {
  performFeedbackPatternPerformanceTime(pattern: interop.Enum<typeof NSHapticFeedbackPattern>, performanceTime: interop.Enum<typeof NSHapticFeedbackPerformanceTime>): void;
}

declare class NSHapticFeedbackPerformer extends NativeObject implements NSHapticFeedbackPerformer {
}

declare interface NSWindowRestoration extends NSObjectProtocol {
}

declare class NSWindowRestoration extends NativeObject implements NSWindowRestoration {
  static restoreWindowWithIdentifierStateCompletionHandler(identifier: string, state: NSCoder, completionHandler: (p1: NSWindow, p2: NSError) => void | null): void;
}

declare interface NSControlTextEditingDelegate extends NSObjectProtocol {
  controlTextDidBeginEditing?(obj: NSNotification): void;

  controlTextDidEndEditing?(obj: NSNotification): void;

  controlTextDidChange?(obj: NSNotification): void;

  controlTextShouldBeginEditing?(control: NSControl, fieldEditor: NSText): boolean;

  controlTextShouldEndEditing?(control: NSControl, fieldEditor: NSText): boolean;

  controlDidFailToFormatStringErrorDescription?(control: NSControl, string: string, error: string | null): boolean;

  controlDidFailToValidatePartialStringErrorDescription?(control: NSControl, string: string, error: string | null): void;

  controlIsValidObject?(control: NSControl, obj: interop.Object | null): boolean;

  controlTextViewDoCommandBySelector?(control: NSControl, textView: NSTextView, commandSelector: string): boolean;

  controlTextViewCompletionsForPartialWordRangeIndexOfSelectedItem?(control: NSControl, textView: NSTextView, words: NSArray<interop.Object> | Array<interop.Object>, charRange: _NSRange, index: interop.PointerConvertible): NSArray;
}

declare class NSControlTextEditingDelegate extends NativeObject implements NSControlTextEditingDelegate {
}

declare interface NSTextFieldDelegate extends NSControlTextEditingDelegate {
  textFieldTextViewCandidatesForSelectedRange?(textField: NSTextField, textView: NSTextView, selectedRange: _NSRange): NSArray;

  textFieldTextViewShouldSelectCandidateAtIndex?(textField: NSTextField, textView: NSTextView, index: number): boolean;
}

declare class NSTextFieldDelegate extends NativeObject implements NSTextFieldDelegate {
}

declare interface NSTableViewDataSource extends NSObjectProtocol {
  numberOfRowsInTableView?(tableView: NSTableView): number;

  tableViewObjectValueForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): interop.Object;

  tableViewSetObjectValueForTableColumnRow?(tableView: NSTableView, object: interop.Object | null, tableColumn: NSTableColumn | null, row: number): void;

  tableViewSortDescriptorsDidChange?(tableView: NSTableView, oldDescriptors: NSArray<interop.Object> | Array<interop.Object>): void;

  tableViewPasteboardWriterForRow?(tableView: NSTableView, row: number): NSPasteboardWriting;

  tableViewDraggingSessionWillBeginAtPointForRowIndexes?(tableView: NSTableView, session: NSDraggingSession, screenPoint: CGPoint, rowIndexes: NSIndexSet): void;

  tableViewDraggingSessionEndedAtPointOperation?(tableView: NSTableView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  tableViewUpdateDraggingItemsForDrag?(tableView: NSTableView, draggingInfo: NSDraggingInfo): void;

  tableViewWriteRowsWithIndexesToPasteboard?(tableView: NSTableView, rowIndexes: NSIndexSet, pboard: NSPasteboard): boolean;

  tableViewValidateDropProposedRowProposedDropOperation?(tableView: NSTableView, info: NSDraggingInfo, row: number, dropOperation: interop.Enum<typeof NSTableViewDropOperation>): interop.Enum<typeof NSDragOperation>;

  tableViewAcceptDropRowDropOperation?(tableView: NSTableView, info: NSDraggingInfo, row: number, dropOperation: interop.Enum<typeof NSTableViewDropOperation>): boolean;

  tableViewNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexes?(tableView: NSTableView, dropDestination: NSURL, indexSet: NSIndexSet): NSArray;
}

declare class NSTableViewDataSource extends NativeObject implements NSTableViewDataSource {
}

declare interface NSUserInterfaceItemSearching extends NSObjectProtocol {
  searchForItemsWithSearchStringResultLimitMatchedItemHandler(searchString: string, resultLimit: number, handleMatchedItems: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  localizedTitlesForItem(item: interop.Object): NSArray;

  performActionForItem?(item: interop.Object): void;

  showAllHelpTopicsForSearchString?(searchString: string): void;
}

declare class NSUserInterfaceItemSearching extends NativeObject implements NSUserInterfaceItemSearching {
}

declare interface NSPageControllerDelegate extends NSObjectProtocol {
  pageControllerIdentifierForObject?(pageController: NSPageController, object: interop.Object): string;

  pageControllerViewControllerForIdentifier?(pageController: NSPageController, identifier: string): NSViewController;

  pageControllerFrameForObject?(pageController: NSPageController, object: interop.Object | null): CGRect;

  pageControllerPrepareViewControllerWithObject?(pageController: NSPageController, viewController: NSViewController, object: interop.Object | null): void;

  pageControllerDidTransitionToObject?(pageController: NSPageController, object: interop.Object): void;

  pageControllerWillStartLiveTransition?(pageController: NSPageController): void;

  pageControllerDidEndLiveTransition?(pageController: NSPageController): void;
}

declare class NSPageControllerDelegate extends NativeObject implements NSPageControllerDelegate {
}

declare interface NSTextCheckingClient extends NSTextInputClient, NSTextInputTraits {
  annotatedSubstringForProposedRangeActualRange(range: _NSRange, actualRange: interop.PointerConvertible): NSAttributedString;

  setAnnotationsRange(annotations: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, range: _NSRange): void;

  addAnnotationsRange(annotations: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, range: _NSRange): void;

  removeAnnotationRange(annotationName: string, range: _NSRange): void;

  replaceCharactersInRangeWithAnnotatedString(range: _NSRange, annotatedString: NSAttributedString): void;

  selectAndShowRange(range: _NSRange): void;

  viewForRangeFirstRectActualRange(range: _NSRange, firstRect: interop.PointerConvertible, actualRange: interop.PointerConvertible): NSView;

  candidateListTouchBarItem(): NSCandidateListTouchBarItem;
}

declare class NSTextCheckingClient extends NativeObject implements NSTextCheckingClient {
}

declare interface NSRuleEditorDelegate extends NSObjectProtocol {
  ruleEditorNumberOfChildrenForCriterionWithRowType(editor: NSRuleEditor, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>): number;

  ruleEditorChildForCriterionWithRowType(editor: NSRuleEditor, index: number, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>): interop.Object;

  ruleEditorDisplayValueForCriterionInRow(editor: NSRuleEditor, criterion: interop.Object, row: number): interop.Object;

  ruleEditorPredicatePartsForCriterionWithDisplayValueInRow?(editor: NSRuleEditor, criterion: interop.Object, value: interop.Object, row: number): NSDictionary;

  ruleEditorRowsDidChange?(notification: NSNotification): void;
}

declare class NSRuleEditorDelegate extends NativeObject implements NSRuleEditorDelegate {
}

declare interface NSSharingServicePickerToolbarItemDelegate extends NSSharingServicePickerDelegate {
  itemsForSharingServicePickerToolbarItem(pickerToolbarItem: NSSharingServicePickerToolbarItem): NSArray;
}

declare class NSSharingServicePickerToolbarItemDelegate extends NativeObject implements NSSharingServicePickerToolbarItemDelegate {
}

declare interface NSTabViewDelegate extends NSObjectProtocol {
  tabViewShouldSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): boolean;

  tabViewWillSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;

  tabViewDidSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;

  tabViewDidChangeNumberOfTabViewItems?(tabView: NSTabView): void;
}

declare class NSTabViewDelegate extends NativeObject implements NSTabViewDelegate {
}

declare interface NSSearchFieldDelegate extends NSTextFieldDelegate {
  searchFieldDidStartSearching?(sender: NSSearchField): void;

  searchFieldDidEndSearching?(sender: NSSearchField): void;
}

declare class NSSearchFieldDelegate extends NativeObject implements NSSearchFieldDelegate {
}

declare interface NSInputServiceProvider {
  insertTextClient(string: interop.Object, sender: interop.Object): void;

  doCommandBySelectorClient(selector: string, sender: interop.Object): void;

  markedTextAbandoned(sender: interop.Object | null): void;

  markedTextSelectionChangedClient(newSel: _NSRange, sender: interop.Object): void;

  terminate(sender: interop.Object | null): void;

  canBeDisabled(): boolean;

  wantsToInterpretAllKeystrokes(): boolean;

  wantsToHandleMouseEvents(): boolean;

  wantsToDelayTextChangeNotifications(): boolean;

  inputClientBecomeActive(sender: interop.Object | null): void;

  inputClientResignActive(sender: interop.Object | null): void;

  inputClientEnabled(sender: interop.Object | null): void;

  inputClientDisabled(sender: interop.Object | null): void;

  activeConversationWillChangeFromOldConversation(sender: interop.Object, oldConversation: number): void;

  activeConversationChangedToNewConversation(sender: interop.Object, newConversation: number): void;
}

declare class NSInputServiceProvider extends NativeObject implements NSInputServiceProvider {
}

declare interface NSMatrixDelegate extends NSControlTextEditingDelegate {
}

declare class NSMatrixDelegate extends NativeObject implements NSMatrixDelegate {
}

declare interface NSTouchBarProvider extends NSObjectProtocol {
  readonly touchBar: NSTouchBar;
}

declare class NSTouchBarProvider extends NativeObject implements NSTouchBarProvider {
}

declare interface NSOutlineViewDelegate extends NSControlTextEditingDelegate {
  outlineViewViewForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSView;

  outlineViewRowViewForItem?(outlineView: NSOutlineView, item: interop.Object): NSTableRowView;

  outlineViewDidAddRowViewForRow?(outlineView: NSOutlineView, rowView: NSTableRowView, row: number): void;

  outlineViewDidRemoveRowViewForRow?(outlineView: NSOutlineView, rowView: NSTableRowView, row: number): void;

  outlineViewWillDisplayCellForTableColumnItem?(outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object): void;

  outlineViewShouldEditTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): boolean;

  selectionShouldChangeInOutlineView?(outlineView: NSOutlineView): boolean;

  outlineViewShouldSelectItem?(outlineView: NSOutlineView, item: interop.Object): boolean;

  outlineViewSelectionIndexesForProposedSelection?(outlineView: NSOutlineView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;

  outlineViewShouldSelectTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null): boolean;

  outlineViewMouseDownInHeaderOfTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;

  outlineViewDidClickTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;

  outlineViewDidDragTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;

  outlineViewToolTipForCellRectTableColumnItemMouseLocation?(outlineView: NSOutlineView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, item: interop.Object, mouseLocation: CGPoint): string;

  outlineViewHeightOfRowByItem?(outlineView: NSOutlineView, item: interop.Object): number;

  outlineViewTintConfigurationForItem?(outlineView: NSOutlineView, item: interop.Object): NSTintConfiguration;

  outlineViewTypeSelectStringForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): string;

  outlineViewNextTypeSelectMatchFromItemToItemForString?(outlineView: NSOutlineView, startItem: interop.Object, endItem: interop.Object, searchString: string): interop.Object;

  outlineViewShouldTypeSelectForEventWithCurrentSearchString?(outlineView: NSOutlineView, event: NSEvent, searchString: string | null): boolean;

  outlineViewShouldShowCellExpansionForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): boolean;

  outlineViewShouldTrackCellForTableColumnItem?(outlineView: NSOutlineView, cell: NSCell, tableColumn: NSTableColumn | null, item: interop.Object): boolean;

  outlineViewDataCellForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSCell;

  outlineViewIsGroupItem?(outlineView: NSOutlineView, item: interop.Object): boolean;

  outlineViewShouldExpandItem?(outlineView: NSOutlineView, item: interop.Object): boolean;

  outlineViewShouldCollapseItem?(outlineView: NSOutlineView, item: interop.Object): boolean;

  outlineViewWillDisplayOutlineCellForTableColumnItem?(outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object): void;

  outlineViewSizeToFitWidthOfColumn?(outlineView: NSOutlineView, column: number): number;

  outlineViewShouldReorderColumnToColumn?(outlineView: NSOutlineView, columnIndex: number, newColumnIndex: number): boolean;

  outlineViewShouldShowOutlineCellForItem?(outlineView: NSOutlineView, item: interop.Object): boolean;

  outlineViewUserCanChangeVisibilityOfTableColumn?(outlineView: NSOutlineView, column: NSTableColumn): boolean;

  outlineViewUserDidChangeVisibilityOfTableColumns?(outlineView: NSOutlineView, columns: NSArray<interop.Object> | Array<interop.Object>): void;

  outlineViewSelectionDidChange?(notification: NSNotification): void;

  outlineViewColumnDidMove?(notification: NSNotification): void;

  outlineViewColumnDidResize?(notification: NSNotification): void;

  outlineViewSelectionIsChanging?(notification: NSNotification): void;

  outlineViewItemWillExpand?(notification: NSNotification): void;

  outlineViewItemDidExpand?(notification: NSNotification): void;

  outlineViewItemWillCollapse?(notification: NSNotification): void;

  outlineViewItemDidCollapse?(notification: NSNotification): void;
}

declare class NSOutlineViewDelegate extends NativeObject implements NSOutlineViewDelegate {
}

declare interface NSPathControlDelegate extends NSObjectProtocol {
  pathControlShouldDragItemWithPasteboard?(pathControl: NSPathControl, pathItem: NSPathControlItem, pasteboard: NSPasteboard): boolean;

  pathControlShouldDragPathComponentCellWithPasteboard?(pathControl: NSPathControl, pathComponentCell: NSPathComponentCell, pasteboard: NSPasteboard): boolean;

  pathControlValidateDrop?(pathControl: NSPathControl, info: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;

  pathControlAcceptDrop?(pathControl: NSPathControl, info: NSDraggingInfo): boolean;

  pathControlWillDisplayOpenPanel?(pathControl: NSPathControl, openPanel: NSOpenPanel): void;

  pathControlWillPopUpMenu?(pathControl: NSPathControl, menu: NSMenu): void;
}

declare class NSPathControlDelegate extends NativeObject implements NSPathControlDelegate {
}

declare interface NSTextInput {
  insertText(string: interop.Object): void;

  doCommandBySelector(selector: string): void;

  setMarkedTextSelectedRange(string: interop.Object, selRange: _NSRange): void;

  unmarkText(): void;

  hasMarkedText(): boolean;

  conversationIdentifier(): number;

  attributedSubstringFromRange(range: _NSRange): NSAttributedString;

  markedRange(): _NSRange;

  selectedRange: _NSRange;

  firstRectForCharacterRange(range: _NSRange): CGRect;

  characterIndexForPoint(point: CGPoint): number;

  validAttributesForMarkedText(): NSArray;
}

declare class NSTextInput extends NativeObject implements NSTextInput {
}

declare interface NSTextAttachmentCellProtocol extends NSObjectProtocol {
  drawWithFrameInView(cellFrame: CGRect, controlView: NSView | null): void;

  wantsToTrackMouse(): boolean;

  highlightWithFrameInView(flag: boolean, cellFrame: CGRect, controlView: NSView | null): void;

  trackMouseInRectOfViewUntilMouseUp(theEvent: NSEvent, cellFrame: CGRect, controlView: NSView | null, flag: boolean): boolean;

  readonly cellSize: CGSize;

  cellBaselineOffset(): CGPoint;

  attachment: NSTextAttachment;

  drawWithFrameInViewCharacterIndex(cellFrame: CGRect, controlView: NSView | null, charIndex: number): void;

  drawWithFrameInViewCharacterIndexLayoutManager(cellFrame: CGRect, controlView: NSView | null, charIndex: number, layoutManager: NSLayoutManager): void;

  wantsToTrackMouseForEventInRectOfViewAtCharacterIndex(theEvent: NSEvent, cellFrame: CGRect, controlView: NSView | null, charIndex: number): boolean;

  trackMouseInRectOfViewAtCharacterIndexUntilMouseUp(theEvent: NSEvent, cellFrame: CGRect, controlView: NSView | null, charIndex: number, flag: boolean): boolean;

  cellFrameForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(textContainer: NSTextContainer, lineFrag: CGRect, position: CGPoint, charIndex: number): CGRect;
}

declare class NSTextAttachmentCellProtocol extends NativeObject implements NSTextAttachmentCellProtocol {
}

declare interface NSSharingServiceDelegate extends NSObjectProtocol {
  sharingServiceWillShareItems?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>): void;

  sharingServiceDidFailToShareItemsError?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, error: NSError): void;

  sharingServiceDidShareItems?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>): void;

  sharingServiceSourceFrameOnScreenForShareItem?(sharingService: NSSharingService, item: interop.Object): CGRect;

  sharingServiceTransitionImageForShareItemContentRect?(sharingService: NSSharingService, item: interop.Object, contentRect: interop.PointerConvertible): NSImage;

  sharingServiceSourceWindowForShareItemsSharingContentScope?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, sharingContentScope: interop.PointerConvertible): NSWindow;

  anchoringViewForSharingServiceShowRelativeToRectPreferredEdge?(sharingService: NSSharingService, positioningRect: interop.PointerConvertible, preferredEdge: interop.PointerConvertible): NSView;
}

declare class NSSharingServiceDelegate extends NativeObject implements NSSharingServiceDelegate {
}

declare interface NSComboBoxDataSource extends NSObjectProtocol {
  numberOfItemsInComboBox?(comboBox: NSComboBox): number;

  comboBoxObjectValueForItemAtIndex?(comboBox: NSComboBox, index: number): interop.Object;

  comboBoxIndexOfItemWithStringValue?(comboBox: NSComboBox, string: string): number;

  comboBoxCompletedString?(comboBox: NSComboBox, string: string): string;
}

declare class NSComboBoxDataSource extends NativeObject implements NSComboBoxDataSource {
}

declare interface NSSoundDelegate extends NSObjectProtocol {
  soundDidFinishPlaying?(sound: NSSound, flag: boolean): void;
}

declare class NSSoundDelegate extends NativeObject implements NSSoundDelegate {
}

declare interface NSAccessibilityList extends NSAccessibilityTable {
}

declare class NSAccessibilityList extends NativeObject implements NSAccessibilityList {
}

declare interface NSCollectionViewSectionHeaderView extends NSCollectionViewElement {
  sectionCollapseButton?: NSButton;
}

declare class NSCollectionViewSectionHeaderView extends NativeObject implements NSCollectionViewSectionHeaderView {
}

declare interface NSTextStorageObserving extends NSObjectProtocol {
  textStorage: NSTextStorage;

  processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange(textStorage: NSTextStorage, editMask: interop.Enum<typeof NSTextStorageEditActions>, newCharRange: _NSRange, delta: number, invalidatedCharRange: _NSRange): void;

  performEditingTransactionForTextStorageUsingBlock(textStorage: NSTextStorage, transaction: () => void): void;
}

declare class NSTextStorageObserving extends NativeObject implements NSTextStorageObserving {
}

declare interface NSTextStorageDelegate extends NSObjectProtocol {
  textStorageWillProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;

  textStorageDidProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
}

declare class NSTextStorageDelegate extends NativeObject implements NSTextStorageDelegate {
}

declare interface NSTextContent {
  contentType: string;
}

declare class NSTextContent extends NativeObject implements NSTextContent {
}

declare interface NSTextInputClient {
  insertTextReplacementRange(string: interop.Object, replacementRange: _NSRange): void;

  doCommandBySelector(selector: string): void;

  setMarkedTextSelectedRangeReplacementRange(string: interop.Object, selectedRange: _NSRange, replacementRange: _NSRange): void;

  unmarkText(): void;

  selectedRange: _NSRange;

  markedRange(): _NSRange;

  hasMarkedText(): boolean;

  attributedSubstringForProposedRangeActualRange(range: _NSRange, actualRange: interop.PointerConvertible): NSAttributedString;

  validAttributesForMarkedText(): NSArray;

  firstRectForCharacterRangeActualRange(range: _NSRange, actualRange: interop.PointerConvertible): CGRect;

  characterIndexForPoint(point: CGPoint): number;

  attributedString?(): NSAttributedString;

  fractionOfDistanceThroughGlyphForPoint?(point: CGPoint): number;

  baselineDeltaForCharacterAtIndex?(anIndex: number): number;

  windowLevel?(): number;

  drawsVerticallyForCharacterAtIndex?(charIndex: number): boolean;

  preferredTextAccessoryPlacement?(): interop.Enum<typeof NSTextCursorAccessoryPlacement>;

  readonly unionRectInVisibleSelectedRange?: CGRect;

  readonly documentVisibleRect?: CGRect;

  readonly supportsAdaptiveImageGlyph?: boolean;

  insertAdaptiveImageGlyphReplacementRange?(adaptiveImageGlyph: NSAdaptiveImageGlyph, replacementRange: _NSRange): void;
}

declare class NSTextInputClient extends NativeObject implements NSTextInputClient {
}

declare interface NSPathCellDelegate extends NSObjectProtocol {
  pathCellWillDisplayOpenPanel?(pathCell: NSPathCell, openPanel: NSOpenPanel): void;

  pathCellWillPopUpMenu?(pathCell: NSPathCell, menu: NSMenu): void;
}

declare class NSPathCellDelegate extends NativeObject implements NSPathCellDelegate {
}

declare interface NSTextFinderBarContainer extends NSObjectProtocol {
  findBarView: NSView;

  isFindBarVisible: boolean;

  findBarViewDidChangeHeight(): void;

  contentView?: NSView;
}

declare class NSTextFinderBarContainer extends NativeObject implements NSTextFinderBarContainer {
}

declare interface NSTextFinderClient extends NSObjectProtocol {
  readonly isSelectable?: boolean;

  readonly allowsMultipleSelection?: boolean;

  readonly isEditable?: boolean;

  readonly string?: string;

  stringAtIndexEffectiveRangeEndsWithSearchBoundary?(characterIndex: number, outRange: interop.PointerConvertible, outFlag: interop.PointerConvertible): string;

  stringLength?(): number;

  readonly firstSelectedRange?: _NSRange;

  get selectedRanges(): NSArray | undefined;
  set selectedRanges(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  scrollRangeToVisible?(range: _NSRange): void;

  shouldReplaceCharactersInRangesWithStrings?(ranges: NSArray<interop.Object> | Array<interop.Object>, strings: NSArray<interop.Object> | Array<interop.Object>): boolean;

  replaceCharactersInRangeWithString?(range: _NSRange, string: string): void;

  didReplaceCharacters?(): void;

  contentViewAtIndexEffectiveCharacterRange?(index: number, outRange: interop.PointerConvertible): NSView;

  rectsForCharacterRange?(range: _NSRange): NSArray;

  readonly visibleCharacterRanges?: NSArray;

  drawCharactersInRangeForContentView?(range: _NSRange, view: NSView): void;
}

declare class NSTextFinderClient extends NativeObject implements NSTextFinderClient {
}

declare interface NSValidatedUserInterfaceItem {
  readonly action: string;

  readonly tag: number;
}

declare class NSValidatedUserInterfaceItem extends NativeObject implements NSValidatedUserInterfaceItem {
}

declare interface NSCloudSharingValidation extends NSObjectProtocol {
  cloudShareForUserInterfaceItem(item: NSValidatedUserInterfaceItem): CKShare;
}

declare class NSCloudSharingValidation extends NativeObject implements NSCloudSharingValidation {
}

declare interface NSPasteboardItemDataProvider extends NSObjectProtocol {
  pasteboardItemProvideDataForType(pasteboard: NSPasteboard | null, item: NSPasteboardItem, type: string): void;

  pasteboardFinishedWithDataProvider?(pasteboard: NSPasteboard): void;
}

declare class NSPasteboardItemDataProvider extends NativeObject implements NSPasteboardItemDataProvider {
}

declare interface NSOpenSavePanelDelegate extends NSObjectProtocol {
  panelShouldEnableURL?(sender: interop.Object, url: NSURL): boolean;

  panelValidateURLError?(sender: interop.Object, url: NSURL, outError: interop.PointerConvertible): boolean;

  panelDidChangeToDirectoryURL?(sender: interop.Object, url: NSURL | null): void;

  panelUserEnteredFilenameConfirmed?(sender: interop.Object, filename: string, okFlag: boolean): string;

  panelWillExpand?(sender: interop.Object, expanding: boolean): void;

  panelSelectionDidChange?(sender: interop.Object | null): void;

  panelDisplayNameForType?(sender: interop.Object, type: UTType): string;

  panelDidSelectType?(sender: interop.Object, type: UTType | null): void;
}

declare class NSOpenSavePanelDelegate extends NativeObject implements NSOpenSavePanelDelegate {
}

declare interface NSSpeechSynthesizerDelegate extends NSObjectProtocol {
  speechSynthesizerDidFinishSpeaking?(sender: NSSpeechSynthesizer, finishedSpeaking: boolean): void;

  speechSynthesizerWillSpeakWordOfString?(sender: NSSpeechSynthesizer, characterRange: _NSRange, string: string): void;

  speechSynthesizerWillSpeakPhoneme?(sender: NSSpeechSynthesizer, phonemeOpcode: number): void;

  speechSynthesizerDidEncounterErrorAtIndexOfStringMessage?(sender: NSSpeechSynthesizer, characterIndex: number, string: string, message: string): void;

  speechSynthesizerDidEncounterSyncMessage?(sender: NSSpeechSynthesizer, message: string): void;
}

declare class NSSpeechSynthesizerDelegate extends NativeObject implements NSSpeechSynthesizerDelegate {
}

declare interface NSTextSelectionDataSource extends NSObjectProtocol {
  readonly documentRange: NSTextRange;

  enumerateSubstringsFromLocationOptionsUsingBlock(location: NSTextLocation, options: interop.Enum<typeof NSStringEnumerationOptions>, block: (p1: string, p2: NSTextRange, p3: NSTextRange, p4: interop.PointerConvertible) => void | null): void;

  textRangeForSelectionGranularityEnclosingLocation(selectionGranularity: interop.Enum<typeof NSTextSelectionGranularity>, location: NSTextLocation): NSTextRange;

  locationFromLocationWithOffset(location: NSTextLocation, offset: number): NSTextLocation;

  offsetFromLocationToLocation(from: NSTextLocation, to: NSTextLocation): number;

  baseWritingDirectionAtLocation(location: NSTextLocation): interop.Enum<typeof NSTextSelectionNavigationWritingDirection>;

  enumerateCaretOffsetsInLineFragmentAtLocationUsingBlock(location: NSTextLocation, block: (p1: number, p2: NSTextLocation, p3: boolean, p4: interop.PointerConvertible) => void): void;

  lineFragmentRangeForPointInContainerAtLocation(point: CGPoint, location: NSTextLocation): NSTextRange;

  enumerateContainerBoundariesFromLocationReverseUsingBlock?(location: NSTextLocation, reverse: boolean, block: (p1: NSTextLocation, p2: interop.PointerConvertible) => void): void;

  textLayoutOrientationAtLocation?(location: NSTextLocation): interop.Enum<typeof NSTextSelectionNavigationLayoutOrientation>;
}

declare class NSTextSelectionDataSource extends NativeObject implements NSTextSelectionDataSource {
}

declare interface NSCloudSharingServiceDelegate extends NSSharingServiceDelegate {
  sharingServiceDidCompleteForItemsError?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, error: NSError | null): void;

  optionsForSharingServiceShareProvider?(cloudKitSharingService: NSSharingService, provider: NSItemProvider): interop.Enum<typeof NSCloudKitSharingServiceOptions>;

  sharingServiceDidSaveShare?(sharingService: NSSharingService, share: CKShare): void;

  sharingServiceDidStopSharing?(sharingService: NSSharingService, share: CKShare): void;
}

declare class NSCloudSharingServiceDelegate extends NativeObject implements NSCloudSharingServiceDelegate {
}

declare interface NSScrubberFlowLayoutDelegate extends NSScrubberDelegate {
  scrubberLayoutSizeForItemAtIndex?(scrubber: NSScrubber, layout: NSScrubberFlowLayout, itemIndex: number): CGSize;
}

declare class NSScrubberFlowLayoutDelegate extends NativeObject implements NSScrubberFlowLayoutDelegate {
}

declare interface NSDraggingDestination extends NSObjectProtocol {
  draggingEntered?(sender: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;

  draggingUpdated?(sender: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;

  draggingExited?(sender: NSDraggingInfo | null): void;

  prepareForDragOperation?(sender: NSDraggingInfo): boolean;

  performDragOperation?(sender: NSDraggingInfo): boolean;

  concludeDragOperation?(sender: NSDraggingInfo | null): void;

  draggingEnded?(sender: NSDraggingInfo): void;

  wantsPeriodicDraggingUpdates?(): boolean;

  updateDraggingItemsForDrag?(sender: NSDraggingInfo | null): void;
}

declare class NSDraggingDestination extends NativeObject implements NSDraggingDestination {
}

declare interface NSTextLocation extends NSObjectProtocol {
  compare(location: NSTextLocation): interop.Enum<typeof NSComparisonResult>;
}

declare class NSTextLocation extends NativeObject implements NSTextLocation {
}

declare interface NSColorPickingDefault {
  initWithPickerMaskColorPanel(mask: number, owningColorPanel: NSColorPanel): this;

  readonly provideNewButtonImage: NSImage;

  insertNewButtonImageIn(newButtonImage: NSImage, buttonCell: NSButtonCell): void;

  viewSizeChanged(sender: interop.Object | null): void;

  alphaControlAddedOrRemoved(sender: interop.Object | null): void;

  attachColorList(colorList: NSColorList): void;

  detachColorList(colorList: NSColorList): void;

  setMode(mode: interop.Enum<typeof NSColorPanelMode>): void;

  readonly buttonToolTip: string;

  readonly minContentSize: CGSize;
}

declare class NSColorPickingDefault extends NativeObject implements NSColorPickingDefault {
}

declare interface NSCandidateListTouchBarItemDelegate extends NSObjectProtocol {
  candidateListTouchBarItemBeginSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;

  candidateListTouchBarItemChangeSelectionFromCandidateAtIndexToIndex?(anItem: NSCandidateListTouchBarItem, previousIndex: number, index: number): void;

  candidateListTouchBarItemEndSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;

  candidateListTouchBarItemChangedCandidateListVisibility?(anItem: NSCandidateListTouchBarItem, isVisible: boolean): void;
}

declare class NSCandidateListTouchBarItemDelegate extends NativeObject implements NSCandidateListTouchBarItemDelegate {
}

declare interface NSBrowserDelegate extends NSObjectProtocol {
  browserNumberOfRowsInColumn?(sender: NSBrowser, column: number): number;

  browserCreateRowsForColumnInMatrix?(sender: NSBrowser, column: number, matrix: NSMatrix): void;

  browserNumberOfChildrenOfItem?(browser: NSBrowser, item: interop.Object | null): number;

  browserChildOfItem?(browser: NSBrowser, index: number, item: interop.Object | null): interop.Object;

  browserIsLeafItem?(browser: NSBrowser, item: interop.Object | null): boolean;

  browserObjectValueForItem?(browser: NSBrowser, item: interop.Object | null): interop.Object;

  browserHeightOfRowInColumn?(browser: NSBrowser, row: number, columnIndex: number): number;

  rootItemForBrowser?(browser: NSBrowser): interop.Object;

  browserSetObjectValueForItem?(browser: NSBrowser, object: interop.Object | null, item: interop.Object | null): void;

  browserShouldEditItem?(browser: NSBrowser, item: interop.Object | null): boolean;

  browserWillDisplayCellAtRowColumn?(sender: NSBrowser, cell: interop.Object, row: number, column: number): void;

  browserTitleOfColumn?(sender: NSBrowser, column: number): string;

  browserSelectCellWithStringInColumn?(sender: NSBrowser, title: string, column: number): boolean;

  browserSelectRowInColumn?(sender: NSBrowser, row: number, column: number): boolean;

  browserIsColumnValid?(sender: NSBrowser, column: number): boolean;

  browserWillScroll?(sender: NSBrowser): void;

  browserDidScroll?(sender: NSBrowser): void;

  browserShouldSizeColumnForUserResizeToWidth?(browser: NSBrowser, columnIndex: number, forUserResize: boolean, suggestedWidth: number): number;

  browserSizeToFitWidthOfColumn?(browser: NSBrowser, columnIndex: number): number;

  browserColumnConfigurationDidChange?(notification: NSNotification): void;

  browserShouldShowCellExpansionForRowColumn?(browser: NSBrowser, row: number, column: number): boolean;

  browserWriteRowsWithIndexesInColumnToPasteboard?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, pasteboard: NSPasteboard): boolean;

  browserNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexesInColumn?(browser: NSBrowser, dropDestination: NSURL, rowIndexes: NSIndexSet, column: number): NSArray;

  browserCanDragRowsWithIndexesInColumnWithEvent?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent): boolean;

  browserDraggingImageForRowsWithIndexesInColumnWithEventOffset?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  browserValidateDropProposedRowColumnDropOperation?(browser: NSBrowser, info: NSDraggingInfo, row: interop.PointerConvertible, column: interop.PointerConvertible, dropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;

  browserAcceptDropAtRowColumnDropOperation?(browser: NSBrowser, info: NSDraggingInfo, row: number, column: number, dropOperation: interop.Enum<typeof NSBrowserDropOperation>): boolean;

  browserTypeSelectStringForRowInColumn?(browser: NSBrowser, row: number, column: number): string;

  browserShouldTypeSelectForEventWithCurrentSearchString?(browser: NSBrowser, event: NSEvent, searchString: string | null): boolean;

  browserNextTypeSelectMatchFromRowToRowInColumnForString?(browser: NSBrowser, startRow: number, endRow: number, column: number, searchString: string | null): number;

  browserPreviewViewControllerForLeafItem?(browser: NSBrowser, item: interop.Object): NSViewController;

  browserHeaderViewControllerForItem?(browser: NSBrowser, item: interop.Object | null): NSViewController;

  browserDidChangeLastColumnToColumn?(browser: NSBrowser, oldLastColumn: number, column: number): void;

  browserSelectionIndexesForProposedSelectionInColumn?(browser: NSBrowser, proposedSelectionIndexes: NSIndexSet, column: number): NSIndexSet;
}

declare class NSBrowserDelegate extends NativeObject implements NSBrowserDelegate {
}

declare interface NSUserInterfaceItemIdentification {
  identifier: string;
}

declare class NSUserInterfaceItemIdentification extends NativeObject implements NSUserInterfaceItemIdentification {
}

declare interface NSWindowDelegate extends NSObjectProtocol {
  windowShouldClose?(sender: NSWindow): boolean;

  windowWillReturnFieldEditorToObject?(sender: NSWindow, client: interop.Object | null): interop.Object;

  windowWillResizeToSize?(sender: NSWindow, frameSize: CGSize): CGSize;

  windowWillUseStandardFrameDefaultFrame?(window: NSWindow, newFrame: CGRect): CGRect;

  windowShouldZoomToFrame?(window: NSWindow, newFrame: CGRect): boolean;

  windowWillReturnUndoManager?(window: NSWindow): NSUndoManager;

  windowWillPositionSheetUsingRect?(window: NSWindow, sheet: NSWindow, rect: CGRect): CGRect;

  windowShouldPopUpDocumentPathMenu?(window: NSWindow, menu: NSMenu): boolean;

  windowShouldDragDocumentWithEventFromWithPasteboard?(window: NSWindow, event: NSEvent, dragImageLocation: CGPoint, pasteboard: NSPasteboard): boolean;

  windowWillUseFullScreenContentSize?(window: NSWindow, proposedSize: CGSize): CGSize;

  windowWillUseFullScreenPresentationOptions?(window: NSWindow, proposedOptions: interop.Enum<typeof NSApplicationPresentationOptions>): interop.Enum<typeof NSApplicationPresentationOptions>;

  customWindowsToEnterFullScreenForWindow?(window: NSWindow): NSArray;

  windowStartCustomAnimationToEnterFullScreenWithDuration?(window: NSWindow, duration: number): void;

  windowDidFailToEnterFullScreen?(window: NSWindow): void;

  customWindowsToExitFullScreenForWindow?(window: NSWindow): NSArray;

  windowStartCustomAnimationToExitFullScreenWithDuration?(window: NSWindow, duration: number): void;

  customWindowsToEnterFullScreenForWindowOnScreen?(window: NSWindow, screen: NSScreen): NSArray;

  windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration?(window: NSWindow, screen: NSScreen, duration: number): void;

  windowDidFailToExitFullScreen?(window: NSWindow): void;

  windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize?(window: NSWindow, maxPreferredFrameSize: CGSize, maxAllowedFrameSize: CGSize): CGSize;

  windowWillEncodeRestorableState?(window: NSWindow, state: NSCoder): void;

  windowDidDecodeRestorableState?(window: NSWindow, state: NSCoder): void;

  previewRepresentableActivityItemsForWindow?(window: NSWindow): NSArray | null;

  windowForSharingRequestFromWindow?(window: NSWindow): NSWindow;

  windowDidResize?(notification: NSNotification): void;

  windowDidExpose?(notification: NSNotification): void;

  windowWillMove?(notification: NSNotification): void;

  windowDidMove?(notification: NSNotification): void;

  windowDidBecomeKey?(notification: NSNotification): void;

  windowDidResignKey?(notification: NSNotification): void;

  windowDidBecomeMain?(notification: NSNotification): void;

  windowDidResignMain?(notification: NSNotification): void;

  windowWillClose?(notification: NSNotification): void;

  windowWillMiniaturize?(notification: NSNotification): void;

  windowDidMiniaturize?(notification: NSNotification): void;

  windowDidDeminiaturize?(notification: NSNotification): void;

  windowDidUpdate?(notification: NSNotification): void;

  windowDidChangeScreen?(notification: NSNotification): void;

  windowDidChangeScreenProfile?(notification: NSNotification): void;

  windowDidChangeBackingProperties?(notification: NSNotification): void;

  windowWillBeginSheet?(notification: NSNotification): void;

  windowDidEndSheet?(notification: NSNotification): void;

  windowWillStartLiveResize?(notification: NSNotification): void;

  windowDidEndLiveResize?(notification: NSNotification): void;

  windowWillEnterFullScreen?(notification: NSNotification): void;

  windowDidEnterFullScreen?(notification: NSNotification): void;

  windowWillExitFullScreen?(notification: NSNotification): void;

  windowDidExitFullScreen?(notification: NSNotification): void;

  windowWillEnterVersionBrowser?(notification: NSNotification): void;

  windowDidEnterVersionBrowser?(notification: NSNotification): void;

  windowWillExitVersionBrowser?(notification: NSNotification): void;

  windowDidExitVersionBrowser?(notification: NSNotification): void;

  windowDidChangeOcclusionState?(notification: NSNotification): void;
}

declare class NSWindowDelegate extends NativeObject implements NSWindowDelegate {
}

declare interface NSCollectionLayoutEnvironment extends NSObjectProtocol {
  readonly container: NSCollectionLayoutContainer;
}

declare class NSCollectionLayoutEnvironment extends NativeObject implements NSCollectionLayoutEnvironment {
}

declare interface NSCollectionViewDelegate extends NSObjectProtocol {
  collectionViewCanDragItemsAtIndexPathsWithEvent?(collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent): boolean;

  collectionViewCanDragItemsAtIndexesWithEvent?(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent): boolean;

  collectionViewWriteItemsAtIndexPathsToPasteboard?(collectionView: NSCollectionView, indexPaths: NSSet, pasteboard: NSPasteboard): boolean;

  collectionViewWriteItemsAtIndexesToPasteboard?(collectionView: NSCollectionView, indexes: NSIndexSet, pasteboard: NSPasteboard): boolean;

  collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexPaths?(collectionView: NSCollectionView, dropURL: NSURL, indexPaths: NSSet): NSArray;

  collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexes?(collectionView: NSCollectionView, dropURL: NSURL, indexes: NSIndexSet): NSArray;

  collectionViewDraggingImageForItemsAtIndexPathsWithEventOffset?(collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  collectionViewDraggingImageForItemsAtIndexesWithEventOffset?(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  collectionViewValidateDropProposedIndexPathDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndexPath: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;

  collectionViewValidateDropProposedIndexDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndex: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;

  collectionViewAcceptDropIndexPathDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, indexPath: NSIndexPath, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>): boolean;

  collectionViewAcceptDropIndexDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, index: number, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>): boolean;

  collectionViewPasteboardWriterForItemAtIndexPath?(collectionView: NSCollectionView, indexPath: NSIndexPath): NSPasteboardWriting;

  collectionViewPasteboardWriterForItemAtIndex?(collectionView: NSCollectionView, index: number): NSPasteboardWriting;

  collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexPaths?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexPaths: NSSet): void;

  collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexes: NSIndexSet): void;

  collectionViewDraggingSessionEndedAtPointDragOperation?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  collectionViewUpdateDraggingItemsForDrag?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo): void;

  collectionViewShouldChangeItemsAtIndexPathsToHighlightState?(collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>): NSSet;

  collectionViewDidChangeItemsAtIndexPathsToHighlightState?(collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>): void;

  collectionViewShouldSelectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): NSSet;

  collectionViewShouldDeselectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): NSSet;

  collectionViewDidSelectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): void;

  collectionViewDidDeselectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): void;

  collectionViewWillDisplayItemForRepresentedObjectAtIndexPath?(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;

  collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: string, indexPath: NSIndexPath): void;

  collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath?(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;

  collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: string, indexPath: NSIndexPath): void;

  collectionViewTransitionLayoutForOldLayoutNewLayout?(collectionView: NSCollectionView, fromLayout: NSCollectionViewLayout, toLayout: NSCollectionViewLayout): NSCollectionViewTransitionLayout;
}

declare class NSCollectionViewDelegate extends NativeObject implements NSCollectionViewDelegate {
}

declare interface NSCollectionLayoutContainer extends NSObjectProtocol {
  readonly contentSize: CGSize;

  readonly effectiveContentSize: CGSize;

  readonly contentInsets: NSDirectionalEdgeInsets;

  readonly effectiveContentInsets: NSDirectionalEdgeInsets;
}

declare class NSCollectionLayoutContainer extends NativeObject implements NSCollectionLayoutContainer {
}

declare interface NSScrubberDataSource extends NSObjectProtocol {
  numberOfItemsForScrubber(scrubber: NSScrubber): number;

  scrubberViewForItemAtIndex(scrubber: NSScrubber, index: number): NSScrubberItemView;
}

declare class NSScrubberDataSource extends NativeObject implements NSScrubberDataSource {
}

declare interface NSCollectionViewDataSource extends NSObjectProtocol {
  collectionViewNumberOfItemsInSection(collectionView: NSCollectionView, section: number): number;

  collectionViewItemForRepresentedObjectAtIndexPath(collectionView: NSCollectionView, indexPath: NSIndexPath): NSCollectionViewItem;

  numberOfSectionsInCollectionView?(collectionView: NSCollectionView): number;

  collectionViewViewForSupplementaryElementOfKindAtIndexPath?(collectionView: NSCollectionView, kind: string, indexPath: NSIndexPath): NSView;
}

declare class NSCollectionViewDataSource extends NativeObject implements NSCollectionViewDataSource {
}

declare interface NSAccessibilitySwitch extends NSAccessibilityButton {
  accessibilityValue: string;

  accessibilityPerformIncrement?(): boolean;

  accessibilityPerformDecrement?(): boolean;
}

declare class NSAccessibilitySwitch extends NativeObject implements NSAccessibilitySwitch {
}

declare interface NSTextLayoutOrientationProvider {
  readonly layoutOrientation: interop.Enum<typeof NSTextLayoutOrientation>;
}

declare class NSTextLayoutOrientationProvider extends NativeObject implements NSTextLayoutOrientationProvider {
}

declare interface NSCollectionViewPrefetching extends NSObjectProtocol {
  collectionViewPrefetchItemsAtIndexPaths(collectionView: NSCollectionView, indexPaths: NSArray<interop.Object> | Array<interop.Object>): void;

  collectionViewCancelPrefetchingForItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class NSCollectionViewPrefetching extends NativeObject implements NSCollectionViewPrefetching {
}

declare interface NSViewControllerPresentationAnimator extends NSObjectProtocol {
  animatePresentationOfViewControllerFromViewController(viewController: NSViewController, fromViewController: NSViewController): void;

  animateDismissalOfViewControllerFromViewController(viewController: NSViewController, fromViewController: NSViewController): void;
}

declare class NSViewControllerPresentationAnimator extends NativeObject implements NSViewControllerPresentationAnimator {
}

declare interface NSSeguePerforming extends NSObjectProtocol {
  prepareForSegueSender?(segue: NSStoryboardSegue, sender: interop.Object | null): void;

  performSegueWithIdentifierSender?(identifier: string, sender: interop.Object | null): void;

  shouldPerformSegueWithIdentifierSender?(identifier: string, sender: interop.Object | null): boolean;
}

declare class NSSeguePerforming extends NativeObject implements NSSeguePerforming {
}

declare interface NSColorChanging extends NSObjectProtocol {
  changeColor(sender: NSColorPanel | null): void;
}

declare class NSColorChanging extends NativeObject implements NSColorChanging {
}

declare interface NSAlertDelegate extends NSObjectProtocol {
  alertShowHelp?(alert: NSAlert): boolean;
}

declare class NSAlertDelegate extends NativeObject implements NSAlertDelegate {
}

declare interface NSServicesMenuRequestor extends NSObjectProtocol {
  writeSelectionToPasteboardTypes?(pboard: NSPasteboard, types: NSArray<interop.Object> | Array<interop.Object>): boolean;

  readSelectionFromPasteboard?(pboard: NSPasteboard): boolean;
}

declare class NSServicesMenuRequestor extends NativeObject implements NSServicesMenuRequestor {
}

declare interface NSPasteboardReading extends NSObjectProtocol {
  initWithPasteboardPropertyListOfType?(propertyList: interop.Object, type: string): this;
}

declare class NSPasteboardReading extends NativeObject implements NSPasteboardReading {
  static readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  static readingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardReadingOptions>;

}

declare interface NSDraggingInfo extends NSObjectProtocol {
  readonly draggingDestinationWindow: NSWindow;

  readonly draggingSourceOperationMask: interop.Enum<typeof NSDragOperation>;

  readonly draggingLocation: CGPoint;

  readonly draggedImageLocation: CGPoint;

  readonly draggedImage: NSImage;

  readonly draggingPasteboard: NSPasteboard;

  readonly draggingSource: interop.Object;

  readonly draggingSequenceNumber: number;

  slideDraggedImageTo(screenPoint: CGPoint): void;

  namesOfPromisedFilesDroppedAtDestination(dropDestination: NSURL): NSArray;

  draggingFormation: interop.Enum<typeof NSDraggingFormation>;

  animatesToDestination: boolean;

  numberOfValidItemsForDrop: number;

  enumerateDraggingItemsWithOptionsForViewClassesSearchOptionsUsingBlock(enumOpts: interop.Enum<typeof NSDraggingItemEnumerationOptions>, view: NSView | null, classArray: NSArray<interop.Object> | Array<interop.Object>, searchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, block: (p1: NSDraggingItem, p2: number, p3: interop.PointerConvertible) => void): void;

  readonly springLoadingHighlight: interop.Enum<typeof NSSpringLoadingHighlight>;

  resetSpringLoading(): void;
}

declare class NSDraggingInfo extends NativeObject implements NSDraggingInfo {
}

declare interface NSUserActivityRestoring extends NSObjectProtocol {
  restoreUserActivityState(userActivity: NSUserActivity): void;
}

declare class NSUserActivityRestoring extends NativeObject implements NSUserActivityRestoring {
}

declare interface NSAccessibilityCustomRotorItemSearchDelegate extends NSObjectProtocol {
  rotorResultForSearchParameters(rotor: NSAccessibilityCustomRotor, searchParameters: NSAccessibilityCustomRotorSearchParameters): NSAccessibilityCustomRotorItemResult;
}

declare class NSAccessibilityCustomRotorItemSearchDelegate extends NativeObject implements NSAccessibilityCustomRotorItemSearchDelegate {
}

declare interface NSEditorRegistration extends NSObjectProtocol {
  objectDidBeginEditing?(editor: NSEditor): void;

  objectDidEndEditing?(editor: NSEditor): void;
}

declare class NSEditorRegistration extends NativeObject implements NSEditorRegistration {
}

declare interface NSMenuItemValidation extends NSObjectProtocol {
  validateMenuItem(menuItem: NSMenuItem): boolean;
}

declare class NSMenuItemValidation extends NativeObject implements NSMenuItemValidation {
}

declare interface NSTextDelegate extends NSObjectProtocol {
  textShouldBeginEditing?(textObject: NSText): boolean;

  textShouldEndEditing?(textObject: NSText): boolean;

  textDidBeginEditing?(notification: NSNotification): void;

  textDidEndEditing?(notification: NSNotification): void;

  textDidChange?(notification: NSNotification): void;
}

declare class NSTextDelegate extends NativeObject implements NSTextDelegate {
}

declare interface NSFontChanging extends NSObjectProtocol {
  changeFont?(sender: NSFontManager | null): void;

  validModesForFontPanel?(fontPanel: NSFontPanel): interop.Enum<typeof NSFontPanelModeMask>;
}

declare class NSFontChanging extends NativeObject implements NSFontChanging {
}

declare interface NSAccessibilityOutline extends NSAccessibilityTable {
}

declare class NSAccessibilityOutline extends NativeObject implements NSAccessibilityOutline {
}

declare interface NSTextAttachmentLayout extends NSObjectProtocol {
  imageForBoundsAttributesLocationTextContainer(bounds: CGRect, attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, location: NSTextLocation, textContainer: NSTextContainer | null): NSImage;

  attachmentBoundsForAttributesLocationTextContainerProposedLineFragmentPosition(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, location: NSTextLocation, textContainer: NSTextContainer | null, proposedLineFragment: CGRect, position: CGPoint): CGRect;

  viewProviderForParentViewLocationTextContainer(parentView: NSView | null, location: NSTextLocation, textContainer: NSTextContainer | null): NSTextAttachmentViewProvider;
}

declare class NSTextAttachmentLayout extends NativeObject implements NSTextAttachmentLayout {
}

declare interface NSGlyphStorage {
  insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex(glyphs: interop.PointerConvertible, length: number, glyphIndex: number, charIndex: number): void;

  setIntAttributeValueForGlyphAtIndex(attributeTag: number, val: number, glyphIndex: number): void;

  attributedString(): NSAttributedString;

  layoutOptions(): number;
}

declare class NSGlyphStorage extends NativeObject implements NSGlyphStorage {
}

declare interface NSChangeSpelling {
  changeSpelling(sender: interop.Object | null): void;
}

declare class NSChangeSpelling extends NativeObject implements NSChangeSpelling {
}

declare interface NSViewLayerContentScaleDelegate extends NSObjectProtocol {
  layerShouldInheritContentsScaleFromWindow?(layer: CALayer, newScale: number, window: NSWindow): boolean;
}

declare class NSViewLayerContentScaleDelegate extends NativeObject implements NSViewLayerContentScaleDelegate {
}

declare interface NSSpringLoadingDestination extends NSObjectProtocol {
  springLoadingActivatedDraggingInfo(activated: boolean, draggingInfo: NSDraggingInfo): void;

  springLoadingHighlightChanged(draggingInfo: NSDraggingInfo): void;

  springLoadingEntered?(draggingInfo: NSDraggingInfo): interop.Enum<typeof NSSpringLoadingOptions>;

  springLoadingUpdated?(draggingInfo: NSDraggingInfo): interop.Enum<typeof NSSpringLoadingOptions>;

  springLoadingExited?(draggingInfo: NSDraggingInfo): void;

  draggingEnded?(draggingInfo: NSDraggingInfo): void;
}

declare class NSSpringLoadingDestination extends NativeObject implements NSSpringLoadingDestination {
}

declare interface NSAccessibilityElementLoading extends NSObjectProtocol {
  accessibilityElementWithToken(token: NSObject): NSAccessibilityElement;

  accessibilityRangeInTargetElementWithToken?(token: NSObject): _NSRange;
}

declare class NSAccessibilityElementLoading extends NativeObject implements NSAccessibilityElementLoading {
}

declare interface NSAccessibilityRow extends NSAccessibilityGroup {
  accessibilityIndex: number;

  accessibilityDisclosureLevel?: number;
}

declare class NSAccessibilityRow extends NativeObject implements NSAccessibilityRow {
}

declare interface NSCollectionViewElement extends NSObjectProtocol, NSUserInterfaceItemIdentification {
  prepareForReuse?(): void;

  applyLayoutAttributes?(layoutAttributes: NSCollectionViewLayoutAttributes): void;

  willTransitionFromLayoutToLayout?(oldLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): void;

  didTransitionFromLayoutToLayout?(oldLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): void;

  preferredLayoutAttributesFittingAttributes?(layoutAttributes: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutAttributes;
}

declare class NSCollectionViewElement extends NativeObject implements NSCollectionViewElement {
}

declare interface NSAccessibilityImage extends NSAccessibilityElementProtocol {
  accessibilityLabel: string;
}

declare class NSAccessibilityImage extends NativeObject implements NSAccessibilityImage {
}

declare interface NSCollectionLayoutVisibleItem extends NSObjectProtocol {
  alpha: number;

  zIndex: number;

  isHidden: boolean;

  center: CGPoint;

  readonly name: string;

  readonly indexPath: NSIndexPath;

  readonly frame: CGRect;

  readonly bounds: CGRect;

  readonly representedElementCategory: interop.Enum<typeof NSCollectionElementCategory>;

  readonly representedElementKind: string;
}

declare class NSCollectionLayoutVisibleItem extends NativeObject implements NSCollectionLayoutVisibleItem {
}

declare interface NSAccessibilityProgressIndicator extends NSAccessibilityGroup {
  accessibilityValue: NSNumber;
}

declare class NSAccessibilityProgressIndicator extends NativeObject implements NSAccessibilityProgressIndicator {
}

declare interface NSAccessibilityNavigableStaticText extends NSAccessibilityStaticText {
  accessibilityStringForRange(range: _NSRange): string;

  accessibilityLineForIndex(index: number): number;

  accessibilityRangeForLine(lineNumber: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;
}

declare class NSAccessibilityNavigableStaticText extends NativeObject implements NSAccessibilityNavigableStaticText {
}

declare interface NSTextViewDelegate extends NSTextDelegate {
  textViewClickedOnLinkAtIndex?(textView: NSTextView, link: interop.Object, charIndex: number): boolean;

  textViewClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;

  textViewDoubleClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;

  textViewDraggedCellInRectEventAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent, charIndex: number): void;

  textViewWritablePasteboardTypesForCellAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number): NSArray;

  textViewWriteCellAtIndexToPasteboardType?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number, pboard: NSPasteboard, type: string): boolean;

  textViewWillChangeSelectionFromCharacterRangeToCharacterRange?(textView: NSTextView, oldSelectedCharRange: _NSRange, newSelectedCharRange: _NSRange): _NSRange;

  textViewWillChangeSelectionFromCharacterRangesToCharacterRanges?(textView: NSTextView, oldSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>, newSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  textViewShouldChangeTextInRangesReplacementStrings?(textView: NSTextView, affectedRanges: NSArray<interop.Object> | Array<interop.Object>, replacementStrings: NSArray<interop.Object> | Array<interop.Object> | null): boolean;

  textViewShouldChangeTypingAttributesToAttributes?(textView: NSTextView, oldTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, newTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSDictionary;

  textViewDidChangeSelection?(notification: NSNotification): void;

  textViewDidChangeTypingAttributes?(notification: NSNotification): void;

  textViewWillDisplayToolTipForCharacterAtIndex?(textView: NSTextView, tooltip: string, characterIndex: number): string;

  textViewCompletionsForPartialWordRangeIndexOfSelectedItem?(textView: NSTextView, words: NSArray<interop.Object> | Array<interop.Object>, charRange: _NSRange, index: interop.PointerConvertible): NSArray;

  textViewShouldChangeTextInRangeReplacementString?(textView: NSTextView, affectedCharRange: _NSRange, replacementString: string | null): boolean;

  textViewDoCommandBySelector?(textView: NSTextView, commandSelector: string): boolean;

  textViewShouldSetSpellingStateRange?(textView: NSTextView, value: number, affectedCharRange: _NSRange): number;

  textViewMenuForEventAtIndex?(view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: number): NSMenu;

  textViewWillCheckTextInRangeOptionsTypes?(view: NSTextView, range: _NSRange, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, checkingTypes: interop.PointerConvertible): NSDictionary;

  textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount?(view: NSTextView, range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, results: NSArray<interop.Object> | Array<interop.Object>, orthography: NSOrthography, wordCount: number): NSArray;

  textViewURLForContentsOfTextAttachmentAtIndex?(textView: NSTextView, textAttachment: NSTextAttachment, charIndex: number): NSURL;

  textViewWillShowSharingServicePickerForItems?(textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray<interop.Object> | Array<interop.Object>): NSSharingServicePicker;

  undoManagerForTextView?(view: NSTextView): NSUndoManager;

  textViewShouldUpdateTouchBarItemIdentifiers?(textView: NSTextView, identifiers: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  textViewCandidatesForSelectedRange?(textView: NSTextView, selectedRange: _NSRange): NSArray;

  textViewShouldSelectCandidateAtIndex?(textView: NSTextView, index: number): boolean;

  textViewWritingToolsWillBegin?(textView: NSTextView): void;

  textViewWritingToolsDidEnd?(textView: NSTextView): void;

  textViewWritingToolsIgnoredRangesInEnclosingRange?(textView: NSTextView, enclosingRange: _NSRange): NSArray;

  textViewClickedOnLink?(textView: NSTextView, link: interop.Object): boolean;

  textViewClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;

  textViewDoubleClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;

  textViewDraggedCellInRectEvent?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent): void;
}

declare class NSTextViewDelegate extends NativeObject implements NSTextViewDelegate {
}

declare interface NSAccessibilityRadioButton extends NSAccessibilityButton {
  accessibilityValue(): NSNumber;
}

declare class NSAccessibilityRadioButton extends NativeObject implements NSAccessibilityRadioButton {
}

declare interface NSAccessibility extends NSObjectProtocol {
  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSAccessibility extends NativeObject implements NSAccessibility {
}

declare interface NSUserInterfaceCompression {
  compressWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<interop.Object> | Array<interop.Object>): void;

  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<interop.Object> | Array<interop.Object>): CGSize;

  readonly activeCompressionOptions: NSUserInterfaceCompressionOptions;
}

declare class NSUserInterfaceCompression extends NativeObject implements NSUserInterfaceCompression {
}

declare interface NSAccessibilityGroup extends NSAccessibilityElementProtocol {
}

declare class NSAccessibilityGroup extends NativeObject implements NSAccessibilityGroup {
}

declare interface NSColorPickingCustom extends NSColorPickingDefault {
  supportsMode(mode: interop.Enum<typeof NSColorPanelMode>): boolean;

  currentMode(): interop.Enum<typeof NSColorPanelMode>;

  provideNewView(initialRequest: boolean): NSView;

  setColor(newColor: NSColor): void;
}

declare class NSColorPickingCustom extends NativeObject implements NSColorPickingCustom {
}

declare interface NSTouchBarDelegate extends NSObjectProtocol {
  touchBarMakeItemForIdentifier?(touchBar: NSTouchBar, identifier: string): NSTouchBarItem;
}

declare class NSTouchBarDelegate extends NativeObject implements NSTouchBarDelegate {
}

declare interface NSAnimationDelegate extends NSObjectProtocol {
  animationShouldStart?(animation: NSAnimation): boolean;

  animationDidStop?(animation: NSAnimation): void;

  animationDidEnd?(animation: NSAnimation): void;

  animationValueForProgress?(animation: NSAnimation, progress: number): number;

  animationDidReachProgressMark?(animation: NSAnimation, progress: number): void;
}

declare class NSAnimationDelegate extends NativeObject implements NSAnimationDelegate {
}

declare interface NSAnimatablePropertyContainer {
  animator(): this;

  get animations(): NSDictionary;
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  animationForKey(key: string): interop.Object;

}

declare class NSAnimatablePropertyContainer extends NativeObject implements NSAnimatablePropertyContainer {
  static defaultAnimationForKey(key: string): interop.Object;
}

declare interface NSUserInterfaceValidations {
  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;
}

declare class NSUserInterfaceValidations extends NativeObject implements NSUserInterfaceValidations {
}

declare interface NSDatePickerCellDelegate extends NSObjectProtocol {
  datePickerCellValidateProposedDateValueTimeInterval?(datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible): void;
}

declare class NSDatePickerCellDelegate extends NativeObject implements NSDatePickerCellDelegate {
}

declare interface NSGestureRecognizerDelegate extends NSObjectProtocol {
  gestureRecognizerShouldAttemptToRecognizeWithEvent?(gestureRecognizer: NSGestureRecognizer, event: NSEvent): boolean;

  gestureRecognizerShouldBegin?(gestureRecognizer: NSGestureRecognizer): boolean;

  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;

  gestureRecognizerShouldRequireFailureOfGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;

  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;

  gestureRecognizerShouldReceiveTouch?(gestureRecognizer: NSGestureRecognizer, touch: NSTouch): boolean;
}

declare class NSGestureRecognizerDelegate extends NativeObject implements NSGestureRecognizerDelegate {
}

declare interface NSAccessibilityContainsTransientUI extends NSAccessibilityElementProtocol {
  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  isAccessibilityAlternateUIVisible(): boolean;
}

declare class NSAccessibilityContainsTransientUI extends NativeObject implements NSAccessibilityContainsTransientUI {
}

declare interface NSTokenFieldCellDelegate extends NSObjectProtocol {
  tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenFieldCell: NSTokenFieldCell, substring: string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;

  tokenFieldCellShouldAddObjectsAtIndex?(tokenFieldCell: NSTokenFieldCell, tokens: NSArray<interop.Object> | Array<interop.Object>, index: number): NSArray;

  tokenFieldCellDisplayStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): string;

  tokenFieldCellEditingStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): string;

  tokenFieldCellRepresentedObjectForEditingString?(tokenFieldCell: NSTokenFieldCell, editingString: string): interop.Object;

  tokenFieldCellWriteRepresentedObjectsToPasteboard?(tokenFieldCell: NSTokenFieldCell, objects: NSArray<interop.Object> | Array<interop.Object>, pboard: NSPasteboard): boolean;

  tokenFieldCellReadFromPasteboard?(tokenFieldCell: NSTokenFieldCell, pboard: NSPasteboard): NSArray;

  tokenFieldCellMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSMenu;

  tokenFieldCellHasMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): boolean;

  tokenFieldCellStyleForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
}

declare class NSTokenFieldCellDelegate extends NativeObject implements NSTokenFieldCellDelegate {
}

declare interface NSTextElementProvider extends NSObjectProtocol {
  readonly documentRange: NSTextRange;

  enumerateTextElementsFromLocationOptionsUsingBlock(textLocation: NSTextLocation | null, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>, block: (p1: NSTextElement) => boolean): NSTextLocation;

  replaceContentsInRangeWithTextElements(range: NSTextRange, textElements: NSArray<interop.Object> | Array<interop.Object> | null): void;

  synchronizeToBackingStore(completionHandler: (p1: NSError) => void | null): void;

  locationFromLocationWithOffset?(location: NSTextLocation, offset: number): NSTextLocation;

  offsetFromLocationToLocation?(from: NSTextLocation, to: NSTextLocation): number;

  adjustedRangeFromRangeForEditingTextSelection?(textRange: NSTextRange, forEditingTextSelection: boolean): NSTextRange;
}

declare class NSTextElementProvider extends NativeObject implements NSTextElementProvider {
}

declare interface NSComboBoxCellDataSource extends NSObjectProtocol {
  numberOfItemsInComboBoxCell?(comboBoxCell: NSComboBoxCell): number;

  comboBoxCellObjectValueForItemAtIndex?(comboBoxCell: NSComboBoxCell, index: number): interop.Object;

  comboBoxCellIndexOfItemWithStringValue?(comboBoxCell: NSComboBoxCell, string: string): number;

  comboBoxCellCompletedString?(comboBoxCell: NSComboBoxCell, uncompletedString: string): string;
}

declare class NSComboBoxCellDataSource extends NativeObject implements NSComboBoxCellDataSource {
}

declare interface NSApplicationDelegate extends NSObjectProtocol {
  applicationShouldTerminate?(sender: NSApplication): interop.Enum<typeof NSApplicationTerminateReply>;

  applicationOpenURLs?(application: NSApplication, urls: NSArray<interop.Object> | Array<interop.Object>): void;

  applicationOpenFile?(sender: NSApplication, filename: string): boolean;

  applicationOpenFiles?(sender: NSApplication, filenames: NSArray<interop.Object> | Array<interop.Object>): void;

  applicationOpenTempFile?(sender: NSApplication, filename: string): boolean;

  applicationShouldOpenUntitledFile?(sender: NSApplication): boolean;

  applicationOpenUntitledFile?(sender: NSApplication): boolean;

  applicationOpenFileWithoutUI?(sender: interop.Object, filename: string): boolean;

  applicationPrintFile?(sender: NSApplication, filename: string): boolean;

  applicationPrintFilesWithSettingsShowPrintPanels?(application: NSApplication, fileNames: NSArray<interop.Object> | Array<interop.Object>, printSettings: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, showPrintPanels: boolean): interop.Enum<typeof NSApplicationPrintReply>;

  applicationShouldTerminateAfterLastWindowClosed?(sender: NSApplication): boolean;

  applicationShouldHandleReopenHasVisibleWindows?(sender: NSApplication, hasVisibleWindows: boolean): boolean;

  applicationDockMenu?(sender: NSApplication): NSMenu;

  applicationWillPresentError?(application: NSApplication, error: NSError): NSError;

  applicationDidRegisterForRemoteNotificationsWithDeviceToken?(application: NSApplication, deviceToken: NSData): void;

  applicationDidFailToRegisterForRemoteNotificationsWithError?(application: NSApplication, error: NSError): void;

  applicationDidReceiveRemoteNotification?(application: NSApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  applicationSupportsSecureRestorableState?(app: NSApplication): boolean;

  applicationHandlerForIntent?(application: NSApplication, intent: INIntent): interop.Object;

  applicationWillEncodeRestorableState?(app: NSApplication, coder: NSCoder): void;

  applicationDidDecodeRestorableState?(app: NSApplication, coder: NSCoder): void;

  applicationWillContinueUserActivityWithType?(application: NSApplication, userActivityType: string): boolean;

  applicationContinueUserActivityRestorationHandler?(application: NSApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): boolean;

  applicationDidFailToContinueUserActivityWithTypeError?(application: NSApplication, userActivityType: string, error: NSError): void;

  applicationDidUpdateUserActivity?(application: NSApplication, userActivity: NSUserActivity): void;

  applicationUserDidAcceptCloudKitShareWithMetadata?(application: NSApplication, metadata: CKShareMetadata): void;

  applicationDelegateHandlesKey?(sender: NSApplication, key: string): boolean;

  applicationShouldAutomaticallyLocalizeKeyEquivalents?(application: NSApplication): boolean;

  applicationWillFinishLaunching?(notification: NSNotification): void;

  applicationDidFinishLaunching?(notification: NSNotification): void;

  applicationWillHide?(notification: NSNotification): void;

  applicationDidHide?(notification: NSNotification): void;

  applicationWillUnhide?(notification: NSNotification): void;

  applicationDidUnhide?(notification: NSNotification): void;

  applicationWillBecomeActive?(notification: NSNotification): void;

  applicationDidBecomeActive?(notification: NSNotification): void;

  applicationWillResignActive?(notification: NSNotification): void;

  applicationDidResignActive?(notification: NSNotification): void;

  applicationWillUpdate?(notification: NSNotification): void;

  applicationDidUpdate?(notification: NSNotification): void;

  applicationWillTerminate?(notification: NSNotification): void;

  applicationDidChangeScreenParameters?(notification: NSNotification): void;

  applicationDidChangeOcclusionState?(notification: NSNotification): void;

  applicationProtectedDataWillBecomeUnavailable?(notification: NSNotification): void;

  applicationProtectedDataDidBecomeAvailable?(notification: NSNotification): void;
}

declare class NSApplicationDelegate extends NativeObject implements NSApplicationDelegate {
}

declare interface NSSharingServicePickerDelegate extends NSObjectProtocol {
  sharingServicePickerSharingServicesForItemsProposedSharingServices?(sharingServicePicker: NSSharingServicePicker, items: NSArray<interop.Object> | Array<interop.Object>, proposedServices: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  sharingServicePickerDelegateForSharingService?(sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService): NSSharingServiceDelegate;

  sharingServicePickerDidChooseSharingService?(sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null): void;

  sharingServicePickerCollaborationModeRestrictions?(sharingServicePicker: NSSharingServicePicker): NSArray;
}

declare class NSSharingServicePickerDelegate extends NativeObject implements NSSharingServicePickerDelegate {
}

declare interface NSAccessibilityStepper extends NSAccessibilityElementProtocol {
  accessibilityLabel: string;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityValue?: interop.Object;
}

declare class NSAccessibilityStepper extends NativeObject implements NSAccessibilityStepper {
}

declare interface NSSplitViewDelegate extends NSObjectProtocol {
  splitViewCanCollapseSubview?(splitView: NSSplitView, subview: NSView): boolean;

  splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex?(splitView: NSSplitView, subview: NSView, dividerIndex: number): boolean;

  splitViewConstrainMinCoordinateOfSubviewAt?(splitView: NSSplitView, proposedMinimumPosition: number, dividerIndex: number): number;

  splitViewConstrainMaxCoordinateOfSubviewAt?(splitView: NSSplitView, proposedMaximumPosition: number, dividerIndex: number): number;

  splitViewConstrainSplitPositionOfSubviewAt?(splitView: NSSplitView, proposedPosition: number, dividerIndex: number): number;

  splitViewResizeSubviewsWithOldSize?(splitView: NSSplitView, oldSize: CGSize): void;

  splitViewShouldAdjustSizeOfSubview?(splitView: NSSplitView, view: NSView): boolean;

  splitViewShouldHideDividerAtIndex?(splitView: NSSplitView, dividerIndex: number): boolean;

  splitViewEffectiveRectForDrawnRectOfDividerAtIndex?(splitView: NSSplitView, proposedEffectiveRect: CGRect, drawnRect: CGRect, dividerIndex: number): CGRect;

  splitViewAdditionalEffectiveRectOfDividerAtIndex?(splitView: NSSplitView, dividerIndex: number): CGRect;

  splitViewWillResizeSubviews?(notification: NSNotification): void;

  splitViewDidResizeSubviews?(notification: NSNotification): void;
}

declare class NSSplitViewDelegate extends NativeObject implements NSSplitViewDelegate {
}

declare interface NSAppearanceCustomization extends NSObjectProtocol {
  appearance: NSAppearance;

  readonly effectiveAppearance: NSAppearance;
}

declare class NSAppearanceCustomization extends NativeObject implements NSAppearanceCustomization {
}

declare interface NSAccessibilityColor {
  readonly accessibilityName: string;
}

declare class NSAccessibilityColor extends NativeObject implements NSAccessibilityColor {
}

declare interface NSInputServerMouseTracker {
  mouseDownOnCharacterIndexAtCoordinateWithModifierClient(index: number, point: CGPoint, flags: number, sender: interop.Object): boolean;

  mouseDraggedOnCharacterIndexAtCoordinateWithModifierClient(index: number, point: CGPoint, flags: number, sender: interop.Object): boolean;

  mouseUpOnCharacterIndexAtCoordinateWithModifierClient(index: number, point: CGPoint, flags: number, sender: interop.Object): void;
}

declare class NSInputServerMouseTracker extends NativeObject implements NSInputServerMouseTracker {
}

declare interface NSComboBoxDelegate extends NSTextFieldDelegate {
  comboBoxWillPopUp?(notification: NSNotification): void;

  comboBoxWillDismiss?(notification: NSNotification): void;

  comboBoxSelectionDidChange?(notification: NSNotification): void;

  comboBoxSelectionIsChanging?(notification: NSNotification): void;
}

declare class NSComboBoxDelegate extends NativeObject implements NSComboBoxDelegate {
}

declare interface NSToolbarDelegate extends NSObjectProtocol {
  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar?(toolbar: NSToolbar, itemIdentifier: string, flag: boolean): NSToolbarItem;

  toolbarDefaultItemIdentifiers?(toolbar: NSToolbar): NSArray;

  toolbarAllowedItemIdentifiers?(toolbar: NSToolbar): NSArray;

  toolbarSelectableItemIdentifiers?(toolbar: NSToolbar): NSArray;

  toolbarImmovableItemIdentifiers?(toolbar: NSToolbar): NSSet;

  toolbarItemIdentifierCanBeInsertedAtIndex?(toolbar: NSToolbar, itemIdentifier: string, index: number): boolean;

  toolbarWillAddItem?(notification: NSNotification): void;

  toolbarDidRemoveItem?(notification: NSNotification): void;
}

declare class NSToolbarDelegate extends NativeObject implements NSToolbarDelegate {
}

declare interface NSAccessibilityButton extends NSAccessibilityElementProtocol {
  accessibilityLabel: string;

  accessibilityPerformPress(): boolean;
}

declare class NSAccessibilityButton extends NativeObject implements NSAccessibilityButton {
}

declare interface NSPrintPanelAccessorizing {
  localizedSummaryItems(): NSArray;

  keyPathsForValuesAffectingPreview?(): NSSet;
}

declare class NSPrintPanelAccessorizing extends NativeObject implements NSPrintPanelAccessorizing {
}

declare interface NSAccessibilityTable extends NSAccessibilityGroup {
  accessibilityLabel: string;

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray | undefined;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  setAccessibilitySelectedRows?(selectedRows: NSArray<interop.Object> | Array<interop.Object>): void;

  get accessibilityVisibleRows(): NSArray | undefined;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  get accessibilityColumns(): NSArray | undefined;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  get accessibilityVisibleColumns(): NSArray | undefined;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  get accessibilitySelectedColumns(): NSArray | undefined;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  accessibilityHeaderGroup?(): string;

  get accessibilitySelectedCells(): NSArray | undefined;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  get accessibilityVisibleCells(): NSArray | undefined;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  get accessibilityRowHeaderUIElements(): NSArray | undefined;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object> | undefined);

  get accessibilityColumnHeaderUIElements(): NSArray | undefined;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object> | undefined);
}

declare class NSAccessibilityTable extends NativeObject implements NSAccessibilityTable {
}

declare interface NSOutlineViewDataSource extends NSObjectProtocol {
  outlineViewNumberOfChildrenOfItem?(outlineView: NSOutlineView, item: interop.Object | null): number;

  outlineViewChildOfItem?(outlineView: NSOutlineView, index: number, item: interop.Object | null): interop.Object;

  outlineViewIsItemExpandable?(outlineView: NSOutlineView, item: interop.Object): boolean;

  outlineViewObjectValueForTableColumnByItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object | null): interop.Object;

  outlineViewSetObjectValueForTableColumnByItem?(outlineView: NSOutlineView, object: interop.Object | null, tableColumn: NSTableColumn | null, item: interop.Object | null): void;

  outlineViewItemForPersistentObject?(outlineView: NSOutlineView, object: interop.Object): interop.Object;

  outlineViewPersistentObjectForItem?(outlineView: NSOutlineView, item: interop.Object | null): interop.Object;

  outlineViewSortDescriptorsDidChange?(outlineView: NSOutlineView, oldDescriptors: NSArray<interop.Object> | Array<interop.Object>): void;

  outlineViewPasteboardWriterForItem?(outlineView: NSOutlineView, item: interop.Object): NSPasteboardWriting;

  outlineViewDraggingSessionWillBeginAtPointForItems?(outlineView: NSOutlineView, session: NSDraggingSession, screenPoint: CGPoint, draggedItems: NSArray<interop.Object> | Array<interop.Object>): void;

  outlineViewDraggingSessionEndedAtPointOperation?(outlineView: NSOutlineView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  outlineViewWriteItemsToPasteboard?(outlineView: NSOutlineView, items: NSArray<interop.Object> | Array<interop.Object>, pasteboard: NSPasteboard): boolean;

  outlineViewUpdateDraggingItemsForDrag?(outlineView: NSOutlineView, draggingInfo: NSDraggingInfo): void;

  outlineViewValidateDropProposedItemProposedChildIndex?(outlineView: NSOutlineView, info: NSDraggingInfo, item: interop.Object | null, index: number): interop.Enum<typeof NSDragOperation>;

  outlineViewAcceptDropItemChildIndex?(outlineView: NSOutlineView, info: NSDraggingInfo, item: interop.Object | null, index: number): boolean;

  outlineViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItems?(outlineView: NSOutlineView, dropDestination: NSURL, items: NSArray<interop.Object> | Array<interop.Object>): NSArray;
}

declare class NSOutlineViewDataSource extends NativeObject implements NSOutlineViewDataSource {
}

declare interface NSAccessibilityStaticText extends NSAccessibilityElementProtocol {
  accessibilityValue: string;

  accessibilityAttributedStringForRange?(range: _NSRange): NSAttributedString;

  accessibilityVisibleCharacterRange?: _NSRange;
}

declare class NSAccessibilityStaticText extends NativeObject implements NSAccessibilityStaticText {
}

declare interface NSAccessibilitySlider extends NSAccessibilityElementProtocol {
  accessibilityLabel: string;

  accessibilityValue: interop.Object;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformDecrement(): boolean;
}

declare class NSAccessibilitySlider extends NativeObject implements NSAccessibilitySlider {
}

declare interface NSTokenFieldDelegate extends NSTextFieldDelegate {
  tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenField: NSTokenField, substring: string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;

  tokenFieldShouldAddObjectsAtIndex?(tokenField: NSTokenField, tokens: NSArray<interop.Object> | Array<interop.Object>, index: number): NSArray;

  tokenFieldDisplayStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): string;

  tokenFieldEditingStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): string;

  tokenFieldRepresentedObjectForEditingString?(tokenField: NSTokenField, editingString: string): interop.Object;

  tokenFieldWriteRepresentedObjectsToPasteboard?(tokenField: NSTokenField, objects: NSArray<interop.Object> | Array<interop.Object>, pboard: NSPasteboard): boolean;

  tokenFieldReadFromPasteboard?(tokenField: NSTokenField, pboard: NSPasteboard): NSArray;

  tokenFieldMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSMenu;

  tokenFieldHasMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): boolean;

  tokenFieldStyleForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
}

declare class NSTokenFieldDelegate extends NativeObject implements NSTokenFieldDelegate {
}

declare interface NSTextLayoutManagerDelegate extends NSObjectProtocol {
  textLayoutManagerTextLayoutFragmentForLocationInTextElement?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, textElement: NSTextElement): NSTextLayoutFragment;

  textLayoutManagerShouldBreakLineBeforeLocationHyphenating?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, hyphenating: boolean): boolean;

  textLayoutManagerRenderingAttributesForLinkAtLocationDefaultAttributes?(textLayoutManager: NSTextLayoutManager, link: interop.Object, location: NSTextLocation, renderingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSDictionary;
}

declare class NSTextLayoutManagerDelegate extends NativeObject implements NSTextLayoutManagerDelegate {
}

declare interface NSLayoutManagerDelegate extends NSObjectProtocol {
  layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange?(layoutManager: NSLayoutManager, glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: NSFont, glyphRange: _NSRange): number;

  layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;

  layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;

  layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;

  layoutManagerShouldUseActionForControlCharacterAtIndex?(layoutManager: NSLayoutManager, action: interop.Enum<typeof NSControlCharacterAction>, charIndex: number): interop.Enum<typeof NSControlCharacterAction>;

  layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;

  layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;

  layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex?(layoutManager: NSLayoutManager, glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number): CGRect;

  layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange?(layoutManager: NSLayoutManager, lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, baselineOffset: interop.PointerConvertible, textContainer: NSTextContainer, glyphRange: _NSRange): boolean;

  layoutManagerDidInvalidateLayout?(sender: NSLayoutManager): void;

  layoutManagerDidCompleteLayoutForTextContainerAtEnd?(layoutManager: NSLayoutManager, textContainer: NSTextContainer | null, layoutFinishedFlag: boolean): void;

  layoutManagerTextContainerDidChangeGeometryFromSize?(layoutManager: NSLayoutManager, textContainer: NSTextContainer, oldSize: CGSize): void;

  layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange?(layoutManager: NSLayoutManager, attrs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, toScreen: boolean, charIndex: number, effectiveCharRange: interop.PointerConvertible): NSDictionary;
}

declare class NSLayoutManagerDelegate extends NativeObject implements NSLayoutManagerDelegate {
}

declare interface NSPopoverDelegate extends NSObjectProtocol {
  popoverShouldClose?(popover: NSPopover): boolean;

  popoverShouldDetach?(popover: NSPopover): boolean;

  popoverDidDetach?(popover: NSPopover): void;

  detachableWindowForPopover?(popover: NSPopover): NSWindow;

  popoverWillShow?(notification: NSNotification): void;

  popoverDidShow?(notification: NSNotification): void;

  popoverWillClose?(notification: NSNotification): void;

  popoverDidClose?(notification: NSNotification): void;
}

declare class NSPopoverDelegate extends NativeObject implements NSPopoverDelegate {
}

declare class NSCollectionViewFlowLayout extends NSCollectionViewLayout {
  minimumLineSpacing: number;

  minimumInteritemSpacing: number;

  itemSize: CGSize;

  estimatedItemSize: CGSize;

  scrollDirection: interop.Enum<typeof NSCollectionViewScrollDirection>;

  headerReferenceSize: CGSize;

  footerReferenceSize: CGSize;

  sectionInset: NSEdgeInsets;

  sectionHeadersPinToVisibleBounds: boolean;

  sectionFootersPinToVisibleBounds: boolean;

  sectionAtIndexIsCollapsed(sectionIndex: number): boolean;

  collapseSectionAtIndex(sectionIndex: number): void;

  expandSectionAtIndex(sectionIndex: number): void;
}

declare class NSPathControl extends NSControl {
  isEditable: boolean;

  get allowedTypes(): NSArray;
  set allowedTypes(value: NSArray<interop.Object> | Array<interop.Object>);

  placeholderString: string;

  placeholderAttributedString: NSAttributedString;

  URL: NSURL;

  doubleAction: string;

  pathStyle: interop.Enum<typeof NSPathStyle>;

  readonly clickedPathItem: NSPathControlItem;

  get pathItems(): NSArray;
  set pathItems(value: NSArray<interop.Object> | Array<interop.Object>);

  backgroundColor: NSColor;

  delegate: NSPathControlDelegate;

  setDraggingSourceOperationMaskForLocal(mask: interop.Enum<typeof NSDragOperation>, isLocal: boolean): void;

  menu: NSMenu;

  clickedPathComponentCell(): NSPathComponentCell;

  pathComponentCells(): NSArray;

  setPathComponentCells(cells: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class NSAccessibilityCustomRotorSearchParameters extends NSObject {
  currentItem: NSAccessibilityCustomRotorItemResult;

  searchDirection: interop.Enum<typeof NSAccessibilityCustomRotorSearchDirection>;

  filterString: string;
}

declare class NSLayoutYAxisAnchor extends NSLayoutAnchor {
  anchorWithOffsetToAnchor(otherAnchor: NSLayoutYAxisAnchor): NSLayoutDimension;

  constraintEqualToSystemSpacingBelowAnchorMultiplier(anchor: NSLayoutYAxisAnchor, multiplier: number): NSLayoutConstraint;

  constraintGreaterThanOrEqualToSystemSpacingBelowAnchorMultiplier(anchor: NSLayoutYAxisAnchor, multiplier: number): NSLayoutConstraint;

  constraintLessThanOrEqualToSystemSpacingBelowAnchorMultiplier(anchor: NSLayoutYAxisAnchor, multiplier: number): NSLayoutConstraint;
}

declare class NSHelpManager extends NSObject {
  static readonly sharedHelpManager: NSHelpManager;

  static isContextHelpModeActive: boolean;

  setContextHelpForObject(attrString: NSAttributedString, object: interop.Object): void;

  removeContextHelpForObject(object: interop.Object): void;

  contextHelpForObject(object: interop.Object): NSAttributedString;

  showContextHelpForObjectLocationHint(object: interop.Object, pt: CGPoint): boolean;

  openHelpAnchorInBook(anchor: string, book: string | null): void;

  findStringInBook(query: string, book: string | null): void;

  registerBooksInBundle(bundle: NSBundle): boolean;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSDictionaryController extends NSArrayController {
  // @ts-ignore MemberDecl.tsIgnore
  newObject(): NSDictionaryControllerKeyValuePair;

  initialKey: string;

  initialValue: interop.Object;

  get includedKeys(): NSArray;
  set includedKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  get excludedKeys(): NSArray;
  set excludedKeys(value: NSArray<interop.Object> | Array<interop.Object>);

  get localizedKeyDictionary(): NSDictionary;
  set localizedKeyDictionary(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  localizedKeyTable: string;
}

declare class NSCollectionViewLayout extends NSObject implements NSCoding {
  readonly collectionView: NSCollectionView;

  invalidateLayout(): void;

  invalidateLayoutWithContext(context: NSCollectionViewLayoutInvalidationContext): void;

  registerClassForDecorationViewOfKind(viewClass: interop.Object | null, elementKind: string): void;

  registerNibForDecorationViewOfKind(nib: NSNib | null, elementKind: string): void;

  static readonly layoutAttributesClass: interop.Object;

  static readonly invalidationContextClass: interop.Object;

  prepareLayout(): void;

  layoutAttributesForElementsInRect(rect: CGRect): NSArray;

  layoutAttributesForItemAtIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  layoutAttributesForSupplementaryViewOfKindAtIndexPath(elementKind: string, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  layoutAttributesForDecorationViewOfKindAtIndexPath(elementKind: string, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  layoutAttributesForDropTargetAtPoint(pointInCollectionView: CGPoint): NSCollectionViewLayoutAttributes;

  layoutAttributesForInterItemGapBeforeIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  shouldInvalidateLayoutForBoundsChange(newBounds: CGRect): boolean;

  invalidationContextForBoundsChange(newBounds: CGRect): NSCollectionViewLayoutInvalidationContext;

  shouldInvalidateLayoutForPreferredLayoutAttributesWithOriginalAttributes(preferredAttributes: NSCollectionViewLayoutAttributes, originalAttributes: NSCollectionViewLayoutAttributes): boolean;

  invalidationContextForPreferredLayoutAttributesWithOriginalAttributes(preferredAttributes: NSCollectionViewLayoutAttributes, originalAttributes: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutInvalidationContext;

  targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset: CGPoint, velocity: CGPoint): CGPoint;

  targetContentOffsetForProposedContentOffset(proposedContentOffset: CGPoint): CGPoint;

  readonly collectionViewContentSize: CGSize;

  prepareForCollectionViewUpdates(updateItems: NSArray<interop.Object> | Array<interop.Object>): void;

  finalizeCollectionViewUpdates(): void;

  prepareForAnimatedBoundsChange(oldBounds: CGRect): void;

  finalizeAnimatedBoundsChange(): void;

  prepareForTransitionToLayout(newLayout: NSCollectionViewLayout): void;

  prepareForTransitionFromLayout(oldLayout: NSCollectionViewLayout): void;

  finalizeLayoutTransition(): void;

  initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: NSIndexPath): this;

  finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  initialLayoutAttributesForAppearingSupplementaryElementOfKindAtIndexPath(elementKind: string, elementIndexPath: NSIndexPath): this;

  finalLayoutAttributesForDisappearingSupplementaryElementOfKindAtIndexPath(elementKind: string, elementIndexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  initialLayoutAttributesForAppearingDecorationElementOfKindAtIndexPath(elementKind: string, decorationIndexPath: NSIndexPath): this;

  finalLayoutAttributesForDisappearingDecorationElementOfKindAtIndexPath(elementKind: string, decorationIndexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  indexPathsToDeleteForSupplementaryViewOfKind(elementKind: string): NSSet;

  indexPathsToDeleteForDecorationViewOfKind(elementKind: string): NSSet;

  indexPathsToInsertForSupplementaryViewOfKind(elementKind: string): NSSet;

  indexPathsToInsertForDecorationViewOfKind(elementKind: string): NSSet;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSSliderCell extends NSActionCell {
  static readonly prefersTrackingUntilMouseUp: boolean;

  minValue: number;

  maxValue: number;

  altIncrementValue: number;

  sliderType: interop.Enum<typeof NSSliderType>;

  isVertical: boolean;

  readonly trackRect: CGRect;

  readonly knobThickness: number;

  knobRectFlipped(flipped: boolean): CGRect;

  barRectFlipped(flipped: boolean): CGRect;

  drawKnob(knobRect: CGRect): void;

  drawBarInsideFlipped(rect: CGRect, flipped: boolean): void;

  numberOfTickMarks: number;

  tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;

  allowsTickMarkValuesOnly: boolean;

  tickMarkValueAtIndex(index: number): number;

  rectOfTickMarkAtIndex(index: number): CGRect;

  indexOfTickMarkAtPoint(point: CGPoint): number;

  closestTickMarkValueToValue(value: number): number;

  drawTickMarks(): void;

  setTitleCell(cell: NSCell): void;

  titleCell(): interop.Object;

  setTitleColor(newColor: NSColor): void;

  titleColor(): NSColor;

  setTitleFont(fontObj: NSFont): void;

  titleFont(): NSFont;

  title: string;

  // @ts-ignore MemberDecl.tsIgnore
  setTitle(string: string): void;

  // @ts-ignore MemberDecl.tsIgnore
  setImage(backgroundImage: NSImage): void;

  image: NSImage;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSScrollView extends NSView implements NSTextFinderBarContainer {
  initWithFrame(frameRect: CGRect): this;

  initWithCoder(coder: NSCoder): this;

  static frameSizeForContentSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle(cSize: CGSize, horizontalScrollerClass: interop.Object | null, verticalScrollerClass: interop.Object | null, type: interop.Enum<typeof NSBorderType>, controlSize: interop.Enum<typeof NSControlSize>, scrollerStyle: interop.Enum<typeof NSScrollerStyle>): CGSize;

  static contentSizeForFrameSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle(fSize: CGSize, horizontalScrollerClass: interop.Object | null, verticalScrollerClass: interop.Object | null, type: interop.Enum<typeof NSBorderType>, controlSize: interop.Enum<typeof NSControlSize>, scrollerStyle: interop.Enum<typeof NSScrollerStyle>): CGSize;

  static frameSizeForContentSizeHasHorizontalScrollerHasVerticalScrollerBorderType(cSize: CGSize, hFlag: boolean, vFlag: boolean, type: interop.Enum<typeof NSBorderType>): CGSize;

  static contentSizeForFrameSizeHasHorizontalScrollerHasVerticalScrollerBorderType(fSize: CGSize, hFlag: boolean, vFlag: boolean, type: interop.Enum<typeof NSBorderType>): CGSize;

  readonly documentVisibleRect: CGRect;

  readonly contentSize: CGSize;

  documentView: NSView;

  contentView: NSClipView;

  documentCursor: NSCursor;

  borderType: interop.Enum<typeof NSBorderType>;

  backgroundColor: NSColor;

  drawsBackground: boolean;

  hasVerticalScroller: boolean;

  hasHorizontalScroller: boolean;

  verticalScroller: NSScroller;

  horizontalScroller: NSScroller;

  autohidesScrollers: boolean;

  horizontalLineScroll: number;

  verticalLineScroll: number;

  lineScroll: number;

  horizontalPageScroll: number;

  verticalPageScroll: number;

  pageScroll: number;

  scrollsDynamically: boolean;

  tile(): void;

  // @ts-ignore MemberDecl.tsIgnore
  reflectScrolledClipView(cView: NSClipView): void;

  scrollWheel(event: NSEvent): void;

  scrollerStyle: interop.Enum<typeof NSScrollerStyle>;

  scrollerKnobStyle: interop.Enum<typeof NSScrollerKnobStyle>;

  flashScrollers(): void;

  horizontalScrollElasticity: interop.Enum<typeof NSScrollElasticity>;

  verticalScrollElasticity: interop.Enum<typeof NSScrollElasticity>;

  usesPredominantAxisScrolling: boolean;

  allowsMagnification: boolean;

  magnification: number;

  maxMagnification: number;

  minMagnification: number;

  magnifyToFitRect(rect: CGRect): void;

  setMagnificationCenteredAtPoint(magnification: number, point: CGPoint): void;

  addFloatingSubviewForAxis(view: NSView, axis: interop.Enum<typeof NSEventGestureAxis>): void;

  automaticallyAdjustsContentInsets: boolean;

  contentInsets: NSEdgeInsets;

  scrollerInsets: NSEdgeInsets;

  static rulerViewClass: interop.Object;

  rulersVisible: boolean;

  hasHorizontalRuler: boolean;

  hasVerticalRuler: boolean;

  horizontalRulerView: NSRulerView;

  verticalRulerView: NSRulerView;

  findBarPosition: interop.Enum<typeof NSScrollViewFindBarPosition>;

  findBarView: NSView;

  isFindBarVisible: boolean;

  findBarViewDidChangeHeight(): void;

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

declare class NSTableHeaderView extends NSView implements NSViewToolTipOwner {
  tableView: NSTableView;

  readonly draggedColumn: number;

  readonly draggedDistance: number;

  readonly resizedColumn: number;

  headerRectOfColumn(column: number): CGRect;

  columnAtPoint(point: CGPoint): number;

  viewStringForToolTipPointUserData(view: NSView, tag: number, point: CGPoint, data: interop.PointerConvertible): string;

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

declare class NSSliderAccessory extends NSObject implements NSCoding {
  static accessoryWithImage(image: NSImage): NSSliderAccessory;

  behavior: NSSliderAccessoryBehavior;

  isEnabled: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSOpenGLContext extends NSObject implements NSLocking {
  initWithFormatShareContext(format: NSOpenGLPixelFormat, share: NSOpenGLContext | null): this;

  initWithCGLContextObj(context: interop.PointerConvertible): this;

  readonly pixelFormat: NSOpenGLPixelFormat;

  view: NSView;

  setFullScreen(): void;

  setOffScreenWidthHeightRowbytes(baseaddr: interop.PointerConvertible, width: number, height: number, rowbytes: number): void;

  clearDrawable(): void;

  update(): void;

  flushBuffer(): void;

  makeCurrentContext(): void;

  static clearCurrentContext(): void;

  static readonly currentContext: NSOpenGLContext;

  copyAttributesFromContextWithMask(context: NSOpenGLContext, mask: number): void;

  setValuesForParameter(vals: interop.PointerConvertible, param: interop.Enum<typeof NSOpenGLContextParameter>): void;

  getValuesForParameter(vals: interop.PointerConvertible, param: interop.Enum<typeof NSOpenGLContextParameter>): void;

  currentVirtualScreen: number;

  createTextureFromViewInternalFormat(target: number, view: NSView, format: number): void;

  readonly CGLContextObj: interop.Pointer;

  setPixelBufferCubeMapFaceMipMapLevelCurrentVirtualScreen(pixelBuffer: NSOpenGLPixelBuffer, face: number, level: number, screen: number): void;

  pixelBuffer(): NSOpenGLPixelBuffer;

  pixelBufferCubeMapFace(): number;

  pixelBufferMipMapLevel(): number;

  setTextureImageToPixelBufferColorBuffer(pixelBuffer: NSOpenGLPixelBuffer, source: number): void;

  lock(): void;

  unlock(): void;
}

declare class NSWindowTabGroup extends NSObject {
  readonly identifier: string;

  readonly windows: NSArray;

  isOverviewVisible: boolean;

  readonly isTabBarVisible: boolean;

  selectedWindow: NSWindow | null;

  addWindow(window: NSWindow): void;

  insertWindowAtIndex(window: NSWindow, index: number): void;

  removeWindow(window: NSWindow): void;
}

declare class NSCollectionLayoutSpacing extends NSObject implements NSCopying {
  static flexibleSpacing<This extends abstract new (...args: any) => any>(this: This, flexibleSpacing: number): InstanceType<This>;

  static fixedSpacing<This extends abstract new (...args: any) => any>(this: This, fixedSpacing: number): InstanceType<This>;

  readonly spacing: number;

  readonly isFlexibleSpacing: boolean;

  readonly isFixedSpacing: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSTableViewDiffableDataSource<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends NSObject implements NSTableViewDataSource {
  initWithTableViewCellProvider(tableView: NSTableView, cellProvider: (p1: NSTableView, p2: NSTableColumn, p3: number, p4: interop.Object) => NSView): this;

  snapshot(): NSDiffableDataSourceSnapshot;

  applySnapshotAnimatingDifferences(snapshot: NSDiffableDataSourceSnapshot, animatingDifferences: boolean): void;

  applySnapshotAnimatingDifferencesCompletion(snapshot: NSDiffableDataSourceSnapshot, animatingDifferences: boolean, completion: () => void | null): void;

  itemIdentifierForRow(row: number): ItemIdentifierType;

  rowForItemIdentifier(identifier: ItemIdentifierType): number;

  sectionIdentifierForRow(row: number): SectionIdentifierType;

  rowForSectionIdentifier(identifier: SectionIdentifierType): number;

  rowViewProvider: (p1: NSTableView, p2: number, p3: interop.Object) => NSTableRowView;

  sectionHeaderViewProvider: (p1: NSTableView, p2: number, p3: interop.Object) => NSView;

  defaultRowAnimation: interop.Enum<typeof NSTableViewAnimationOptions>;

  numberOfRowsInTableView(tableView: NSTableView): number;

  tableViewObjectValueForTableColumnRow(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): interop.Object;

  tableViewSetObjectValueForTableColumnRow(tableView: NSTableView, object: interop.Object | null, tableColumn: NSTableColumn | null, row: number): void;

  tableViewSortDescriptorsDidChange(tableView: NSTableView, oldDescriptors: NSArray<interop.Object> | Array<interop.Object>): void;

  tableViewPasteboardWriterForRow(tableView: NSTableView, row: number): NSPasteboardWriting;

  tableViewDraggingSessionWillBeginAtPointForRowIndexes(tableView: NSTableView, session: NSDraggingSession, screenPoint: CGPoint, rowIndexes: NSIndexSet): void;

  tableViewDraggingSessionEndedAtPointOperation(tableView: NSTableView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  tableViewUpdateDraggingItemsForDrag(tableView: NSTableView, draggingInfo: NSDraggingInfo): void;

  tableViewWriteRowsWithIndexesToPasteboard(tableView: NSTableView, rowIndexes: NSIndexSet, pboard: NSPasteboard): boolean;

  tableViewValidateDropProposedRowProposedDropOperation(tableView: NSTableView, info: NSDraggingInfo, row: number, dropOperation: interop.Enum<typeof NSTableViewDropOperation>): interop.Enum<typeof NSDragOperation>;

  tableViewAcceptDropRowDropOperation(tableView: NSTableView, info: NSDraggingInfo, row: number, dropOperation: interop.Enum<typeof NSTableViewDropOperation>): boolean;

  tableViewNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexes(tableView: NSTableView, dropDestination: NSURL, indexSet: NSIndexSet): NSArray;

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

declare class NSAccessibilityCustomAction extends NSObject {
  initWithNameHandler(name: string, handler: () => boolean | null): this;

  initWithNameTargetSelector(name: string, target: NSObject, selector: string): this;

  name: string;

  handler: () => boolean;

  target: NSObject;

  selector: string;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSBrowser extends NSControl {
  // @ts-ignore MemberDecl.tsIgnore
  static readonly cellClass: interop.Object;

  loadColumnZero(): void;

  readonly isLoaded: boolean;

  doubleAction: string;

  setCellClass(factoryId: interop.Object): void;

  cellPrototype: interop.Object;

  delegate: NSBrowserDelegate;

  reusesColumns: boolean;

  hasHorizontalScroller: boolean;

  autohidesScroller: boolean;

  separatesColumns: boolean;

  isTitled: boolean;

  minColumnWidth: number;

  maxVisibleColumns: number;

  allowsMultipleSelection: boolean;

  allowsBranchSelection: boolean;

  allowsEmptySelection: boolean;

  takesTitleFromPreviousColumn: boolean;

  sendsActionOnArrowKeys: boolean;

  itemAtIndexPath(indexPath: NSIndexPath): interop.Object;

  itemAtRowInColumn(row: number, column: number): interop.Object;

  indexPathForColumn(column: number): NSIndexPath;

  isLeafItem(item: interop.Object | null): boolean;

  reloadDataForRowIndexesInColumn(rowIndexes: NSIndexSet, column: number): void;

  parentForItemsInColumn(column: number): interop.Object;

  scrollRowToVisibleInColumn(row: number, column: number): void;

  setTitleOfColumn(string: string, column: number): void;

  titleOfColumn(column: number): string;

  pathSeparator: string;

  setPath(path: string): boolean;

  path(): string;

  pathToColumn(column: number): string;

  readonly clickedColumn: number;

  readonly clickedRow: number;

  readonly selectedColumn: number;

  // @ts-ignore MemberDecl.tsIgnore
  readonly selectedCell: interop.Object;

  selectedCellInColumn(column: number): interop.Object;

  readonly selectedCells: NSArray;

  selectRowInColumn(row: number, column: number): void;

  selectedRowInColumn(column: number): number;

  selectionIndexPath: NSIndexPath;

  get selectionIndexPaths(): NSArray;
  set selectionIndexPaths(value: NSArray<interop.Object> | Array<interop.Object>);

  selectRowIndexesInColumn(indexes: NSIndexSet, column: number): void;

  selectedRowIndexesInColumn(column: number): NSIndexSet;

  reloadColumn(column: number): void;

  validateVisibleColumns(): void;

  scrollColumnsRightBy(shiftAmount: number): void;

  scrollColumnsLeftBy(shiftAmount: number): void;

  scrollColumnToVisible(column: number): void;

  lastColumn: number;

  addColumn(): void;

  readonly numberOfVisibleColumns: number;

  readonly firstVisibleColumn: number;

  readonly lastVisibleColumn: number;

  loadedCellAtRowColumn(row: number, col: number): interop.Object;

  selectAll(sender: interop.Object | null): void;

  tile(): void;

  doClick(sender: interop.Object | null): void;

  doDoubleClick(sender: interop.Object | null): void;

  sendAction(): boolean;

  titleFrameOfColumn(column: number): CGRect;

  drawTitleOfColumnInRect(column: number, rect: CGRect): void;

  readonly titleHeight: number;

  frameOfColumn(column: number): CGRect;

  frameOfInsideOfColumn(column: number): CGRect;

  frameOfRowInColumn(row: number, column: number): CGRect;

  getRowColumnForPoint(row: interop.PointerConvertible, column: interop.PointerConvertible, point: CGPoint): boolean;

  columnWidthForColumnContentWidth(columnContentWidth: number): number;

  columnContentWidthForColumnWidth(columnWidth: number): number;

  columnResizingType: interop.Enum<typeof NSBrowserColumnResizingType>;

  prefersAllColumnUserResizing: boolean;

  setWidthOfColumn(columnWidth: number, columnIndex: number): void;

  widthOfColumn(column: number): number;

  rowHeight: number;

  noteHeightOfRowsWithIndexesChangedInColumn(indexSet: NSIndexSet, columnIndex: number): void;

  setDefaultColumnWidth(columnWidth: number): void;

  defaultColumnWidth(): number;

  columnsAutosaveName: string;

  static removeSavedColumnsWithAutosaveName(name: string): void;

  canDragRowsWithIndexesInColumnWithEvent(rowIndexes: NSIndexSet, column: number, event: NSEvent): boolean;

  draggingImageForRowsWithIndexesInColumnWithEventOffset(rowIndexes: NSIndexSet, column: number, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  setDraggingSourceOperationMaskForLocal(mask: interop.Enum<typeof NSDragOperation>, isLocal: boolean): void;

  allowsTypeSelect: boolean;

  backgroundColor: NSColor;

  editItemAtIndexPathWithEventSelect(indexPath: NSIndexPath, event: NSEvent | null, select: boolean): void;

  setAcceptsArrowKeys(flag: boolean): void;

  acceptsArrowKeys(): boolean;

  displayColumn(column: number): void;

  displayAllColumns(): void;

  scrollViaScroller(sender: NSScroller): void;

  updateScroller(): void;

  setMatrixClass(factoryId: interop.Object): void;

  matrixClass(): interop.Object;

  columnOfMatrix(matrix: NSMatrix): number;

  matrixInColumn(column: number): NSMatrix;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSCollectionLayoutGroup extends NSCollectionLayoutItem implements NSCopying {
  static horizontalGroupWithLayoutSizeSubitemCount<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: number): InstanceType<This>;

  static horizontalGroupWithLayoutSizeSubitems<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, subitems: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static verticalGroupWithLayoutSizeSubitemCount<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: number): InstanceType<This>;

  static verticalGroupWithLayoutSizeSubitems<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, subitems: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static customGroupWithLayoutSizeItemProvider<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, itemProvider: (p1: NSCollectionLayoutEnvironment) => NSArray): InstanceType<This>;

  // @ts-ignore MemberDecl.tsIgnore
  get supplementaryItems(): NSArray;
  // @ts-ignore MemberDecl.tsIgnore
  set supplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>);

  interItemSpacing: NSCollectionLayoutSpacing;

  readonly subitems: NSArray;

  visualDescription(): string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSCollectionLayoutItem extends NSObject implements NSCopying {
  static itemWithLayoutSize<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize): InstanceType<This>;

  static itemWithLayoutSizeSupplementaryItems<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  contentInsets: NSDirectionalEdgeInsets;

  edgeSpacing: NSCollectionLayoutEdgeSpacing;

  readonly layoutSize: NSCollectionLayoutSize;

  readonly supplementaryItems: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSOpenGLPixelFormat extends NSObject implements NSCoding {
  initWithCGLPixelFormatObj(format: interop.PointerConvertible): this;

  initWithAttributes(attribs: interop.PointerConvertible): this;

  initWithData(attribs: NSData): this;

  attributes(): NSData;

  setAttributes(attribs: NSData): void;

  getValuesForAttributeForVirtualScreen(vals: interop.PointerConvertible, attrib: number, screen: number): void;

  readonly numberOfVirtualScreens: number;

  readonly CGLPixelFormatObj: interop.Pointer;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSTabViewController extends NSViewController implements NSTabViewDelegate, NSToolbarDelegate {
  tabStyle: interop.Enum<typeof NSTabViewControllerTabStyle>;

  tabView: NSTabView;

  transitionOptions: interop.Enum<typeof NSViewControllerTransitionOptions>;

  canPropagateSelectedChildViewControllerTitle: boolean;

  get tabViewItems(): NSArray;
  set tabViewItems(value: NSArray<interop.Object> | Array<interop.Object>);

  selectedTabViewItemIndex: number;

  addTabViewItem(tabViewItem: NSTabViewItem): void;

  insertTabViewItemAtIndex(tabViewItem: NSTabViewItem, index: number): void;

  removeTabViewItem(tabViewItem: NSTabViewItem): void;

  tabViewItemForViewController(viewController: NSViewController): NSTabViewItem;

  viewDidLoad(): void;

  tabViewWillSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;

  tabViewDidSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;

  tabViewShouldSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): boolean;

  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar(toolbar: NSToolbar, itemIdentifier: string, flag: boolean): NSToolbarItem;

  toolbarDefaultItemIdentifiers(toolbar: NSToolbar): NSArray;

  toolbarAllowedItemIdentifiers(toolbar: NSToolbar): NSArray;

  toolbarSelectableItemIdentifiers(toolbar: NSToolbar): NSArray;

  tabViewDidChangeNumberOfTabViewItems(tabView: NSTabView): void;

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

  toolbarImmovableItemIdentifiers(toolbar: NSToolbar): NSSet;

  toolbarItemIdentifierCanBeInsertedAtIndex(toolbar: NSToolbar, itemIdentifier: string, index: number): boolean;

  toolbarWillAddItem(notification: NSNotification): void;

  toolbarDidRemoveItem(notification: NSNotification): void;
}

declare class NSLayoutConstraint extends NSObject {
  static constraintsWithVisualFormatOptionsMetricsViews(format: string, opts: interop.Enum<typeof NSLayoutFormatOptions>, metrics: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, views: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSArray;

  static constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant<This extends abstract new (...args: any) => any>(this: This, view1: interop.Object, attr1: interop.Enum<typeof NSLayoutAttribute>, relation: interop.Enum<typeof NSLayoutRelation>, view2: interop.Object | null, attr2: interop.Enum<typeof NSLayoutAttribute>, multiplier: number, c: number): InstanceType<This>;

  priority: number;

  shouldBeArchived: boolean;

  readonly firstItem: interop.Object;

  readonly secondItem: interop.Object;

  readonly firstAttribute: interop.Enum<typeof NSLayoutAttribute>;

  readonly secondAttribute: interop.Enum<typeof NSLayoutAttribute>;

  readonly firstAnchor: NSLayoutAnchor;

  readonly secondAnchor: NSLayoutAnchor;

  readonly relation: interop.Enum<typeof NSLayoutRelation>;

  readonly multiplier: number;

  constant: number;

  isActive: boolean;

  static activateConstraints(constraints: NSArray<interop.Object> | Array<interop.Object>): void;

  static deactivateConstraints(constraints: NSArray<interop.Object> | Array<interop.Object>): void;

  identifier: string;
}

declare class NSTextInputContext extends NSObject {
  static readonly currentInputContext: NSTextInputContext;

  initWithClient(client: NSTextInputClient): this;

  readonly client: NSTextInputClient;

  acceptsGlyphInfo: boolean;

  get allowedInputSourceLocales(): NSArray;
  set allowedInputSourceLocales(value: NSArray<interop.Object> | Array<interop.Object>);

  activate(): void;

  deactivate(): void;

  handleEvent(event: NSEvent): boolean;

  discardMarkedText(): void;

  invalidateCharacterCoordinates(): void;

  textInputClientWillStartScrollingOrZooming(): void;

  textInputClientDidEndScrollingOrZooming(): void;

  readonly keyboardInputSources: NSArray;

  selectedKeyboardInputSource: string;

  static localizedNameForInputSource(inputSourceIdentifier: string): string;
}

declare class NSEvent extends NSObject implements NSCopying, NSCoding {
  readonly type: interop.Enum<typeof NSEventType>;

  readonly modifierFlags: interop.Enum<typeof NSEventModifierFlags>;

  readonly timestamp: number;

  readonly window: NSWindow;

  readonly windowNumber: number;

  readonly context: NSGraphicsContext;

  readonly clickCount: number;

  readonly buttonNumber: number;

  readonly eventNumber: number;

  readonly pressure: number;

  readonly locationInWindow: CGPoint;

  readonly deltaX: number;

  readonly deltaY: number;

  readonly deltaZ: number;

  readonly hasPreciseScrollingDeltas: boolean;

  readonly scrollingDeltaX: number;

  readonly scrollingDeltaY: number;

  readonly momentumPhase: interop.Enum<typeof NSEventPhase>;

  readonly isDirectionInvertedFromDevice: boolean;

  readonly characters: string;

  readonly charactersIgnoringModifiers: string;

  charactersByApplyingModifiers(modifiers: interop.Enum<typeof NSEventModifierFlags>): string;

  readonly isARepeat: boolean;

  readonly keyCode: number;

  readonly trackingNumber: number;

  readonly userData: interop.Pointer;

  readonly trackingArea: NSTrackingArea;

  readonly subtype: interop.Enum<typeof NSEventSubtype>;

  readonly data1: number;

  readonly data2: number;

  readonly eventRef: interop.Pointer;

  static eventWithEventRef(eventRef: interop.PointerConvertible): NSEvent;

  readonly CGEvent: interop.Pointer;

  static eventWithCGEvent(cgEvent: interop.PointerConvertible): NSEvent;

  static isMouseCoalescingEnabled: boolean;

  readonly magnification: number;

  readonly deviceID: number;

  readonly rotation: number;

  readonly absoluteX: number;

  readonly absoluteY: number;

  readonly absoluteZ: number;

  readonly buttonMask: interop.Enum<typeof NSEventButtonMask>;

  readonly tilt: CGPoint;

  readonly tangentialPressure: number;

  readonly vendorDefined: interop.Object;

  readonly vendorID: number;

  readonly tabletID: number;

  readonly pointingDeviceID: number;

  readonly systemTabletID: number;

  readonly vendorPointingDeviceType: number;

  readonly pointingDeviceSerialNumber: number;

  readonly uniqueID: number;

  readonly capabilityMask: number;

  readonly pointingDeviceType: interop.Enum<typeof NSPointingDeviceType>;

  readonly isEnteringProximity: boolean;

  touchesMatchingPhaseInView(phase: interop.Enum<typeof NSTouchPhase>, view: NSView | null): NSSet;

  allTouches(): NSSet;

  touchesForView(view: NSView): NSSet;

  coalescedTouchesForTouch(touch: NSTouch): NSArray;

  readonly phase: interop.Enum<typeof NSEventPhase>;

  readonly stage: number;

  readonly stageTransition: number;

  readonly associatedEventsMask: interop.Enum<typeof NSEventMask>;

  readonly pressureBehavior: interop.Enum<typeof NSPressureBehavior>;

  static readonly isSwipeTrackingFromScrollEventsEnabled: boolean;

  trackSwipeEventWithOptionsDampenAmountThresholdMinMaxUsingHandler(options: interop.Enum<typeof NSEventSwipeTrackingOptions>, minDampenThreshold: number, maxDampenThreshold: number, trackingHandler: (p1: number, p2: interop.Enum<typeof NSEventPhase>, p3: boolean, p4: interop.PointerConvertible) => void): void;

  static startPeriodicEventsAfterDelayWithPeriod(delay: number, period: number): void;

  static stopPeriodicEvents(): void;

  static mouseEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberClickCountPressure(type: interop.Enum<typeof NSEventType>, location: CGPoint, flags: interop.Enum<typeof NSEventModifierFlags>, time: number, wNum: number, unusedPassNil: NSGraphicsContext | null, eNum: number, cNum: number, pressure: number): NSEvent;

  static keyEventWithTypeLocationModifierFlagsTimestampWindowNumberContextCharactersCharactersIgnoringModifiersIsARepeatKeyCode(type: interop.Enum<typeof NSEventType>, location: CGPoint, flags: interop.Enum<typeof NSEventModifierFlags>, time: number, wNum: number, unusedPassNil: NSGraphicsContext | null, keys: string, ukeys: string, flag: boolean, code: number): NSEvent;

  static enterExitEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberTrackingNumberUserData(type: interop.Enum<typeof NSEventType>, location: CGPoint, flags: interop.Enum<typeof NSEventModifierFlags>, time: number, wNum: number, unusedPassNil: NSGraphicsContext | null, eNum: number, tNum: number, data: interop.PointerConvertible): NSEvent;

  static otherEventWithTypeLocationModifierFlagsTimestampWindowNumberContextSubtypeData1Data2(type: interop.Enum<typeof NSEventType>, location: CGPoint, flags: interop.Enum<typeof NSEventModifierFlags>, time: number, wNum: number, unusedPassNil: NSGraphicsContext | null, subtype: number, d1: number, d2: number): NSEvent;

  static readonly mouseLocation: CGPoint;

  static readonly modifierFlags: interop.Enum<typeof NSEventModifierFlags>;

  static readonly pressedMouseButtons: number;

  static readonly doubleClickInterval: number;

  static readonly keyRepeatDelay: number;

  static readonly keyRepeatInterval: number;

  static addGlobalMonitorForEventsMatchingMaskHandler(mask: interop.Enum<typeof NSEventMask>, block: (p1: NSEvent) => void): interop.Object;

  static addLocalMonitorForEventsMatchingMaskHandler(mask: interop.Enum<typeof NSEventMask>, block: (p1: NSEvent) => NSEvent | null): interop.Object;

  static removeMonitor(eventMonitor: interop.Object): void;

  locationInNode(node: SKNode): CGPoint;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSAdaptiveImageGlyph extends NSObject implements NSCopying, NSSecureCoding, CTAdaptiveImageProviding {
  initWithImageContent(imageContent: NSData): this;

  initWithCoder(coder: NSCoder): this;

  readonly imageContent: NSData;

  readonly contentIdentifier: string;

  readonly contentDescription: string;

  static readonly contentType: UTType;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  imageForProposedSizeScaleFactorImageOffsetImageSize(proposedSize: CGSize, scaleFactor: number, outImageOffset: interop.PointerConvertible, outImageSize: interop.PointerConvertible): interop.Pointer;
}

declare class NSBindingSelectionMarker extends NSObject implements NSCopying {
  static readonly multipleValuesSelectionMarker: NSBindingSelectionMarker;

  static readonly noSelectionMarker: NSBindingSelectionMarker;

  static readonly notApplicableSelectionMarker: NSBindingSelectionMarker;

  static setDefaultPlaceholderForMarkerOnClassWithBinding(placeholder: interop.Object | null, marker: NSBindingSelectionMarker | null, objectClass: interop.Object, binding: string): void;

  static defaultPlaceholderForMarkerOnClassWithBinding(marker: NSBindingSelectionMarker | null, objectClass: interop.Object, binding: string): interop.Object;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSScrubberItemView extends NSScrubberArrangedView {
}

declare class NSAccessibilityCustomRotorItemResult extends NSObject {
  initWithTargetElement(targetElement: NSAccessibilityElement): this;

  initWithItemLoadingTokenCustomLabel(itemLoadingToken: NSObject, customLabel: string): this;

  readonly targetElement: NSAccessibilityElement;

  readonly itemLoadingToken: NSObject;

  targetRange: _NSRange;

  customLabel: string;
}

declare class NSTableHeaderCell extends NSTextFieldCell {
  drawSortIndicatorWithFrameInViewAscendingPriority(cellFrame: CGRect, controlView: NSView, ascending: boolean, priority: number): void;

  sortIndicatorRectForBounds(rect: CGRect): CGRect;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSComboBox extends NSTextField {
  hasVerticalScroller: boolean;

  intercellSpacing: CGSize;

  itemHeight: number;

  numberOfVisibleItems: number;

  isButtonBordered: boolean;

  reloadData(): void;

  noteNumberOfItemsChanged(): void;

  usesDataSource: boolean;

  scrollItemAtIndexToTop(index: number): void;

  scrollItemAtIndexToVisible(index: number): void;

  selectItemAtIndex(index: number): void;

  deselectItemAtIndex(index: number): void;

  readonly indexOfSelectedItem: number;

  readonly numberOfItems: number;

  completes: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  delegate: NSComboBoxDelegate;

  dataSource: NSComboBoxDataSource;

  addItemWithObjectValue(object: interop.Object): void;

  addItemsWithObjectValues(objects: NSArray<interop.Object> | Array<interop.Object>): void;

  insertItemWithObjectValueAtIndex(object: interop.Object, index: number): void;

  removeItemWithObjectValue(object: interop.Object): void;

  removeItemAtIndex(index: number): void;

  removeAllItems(): void;

  selectItemWithObjectValue(object: interop.Object | null): void;

  itemObjectValueAtIndex(index: number): interop.Object;

  readonly objectValueOfSelectedItem: interop.Object;

  indexOfItemWithObjectValue(object: interop.Object): number;

  readonly objectValues: NSArray;
}

declare class NSFontManager extends NSObject implements NSMenuItemValidation {
  static setFontPanelFactory(factoryId: interop.Object | null): void;

  static setFontManagerFactory(factoryId: interop.Object | null): void;

  static readonly sharedFontManager: NSFontManager;

  readonly isMultiple: boolean;

  readonly selectedFont: NSFont;

  setSelectedFontIsMultiple(fontObj: NSFont, flag: boolean): void;

  setFontMenu(newMenu: NSMenu): void;

  fontMenu(create: boolean): NSMenu;

  fontPanel(create: boolean): NSFontPanel;

  fontWithFamilyTraitsWeightSize(family: string, traits: interop.Enum<typeof NSFontTraitMask>, weight: number, size: number): NSFont;

  traitsOfFont(fontObj: NSFont): interop.Enum<typeof NSFontTraitMask>;

  weightOfFont(fontObj: NSFont): number;

  readonly availableFonts: NSArray;

  readonly availableFontFamilies: NSArray;

  availableMembersOfFontFamily(fam: string): NSArray;

  convertFont(fontObj: NSFont): NSFont;

  convertFontToSize(fontObj: NSFont, size: number): NSFont;

  convertFontToFace(fontObj: NSFont, typeface: string): NSFont;

  convertFontToFamily(fontObj: NSFont, family: string): NSFont;

  convertFontToHaveTrait(fontObj: NSFont, trait: interop.Enum<typeof NSFontTraitMask>): NSFont;

  convertFontToNotHaveTrait(fontObj: NSFont, trait: interop.Enum<typeof NSFontTraitMask>): NSFont;

  convertWeightOfFont(upFlag: boolean, fontObj: NSFont): NSFont;

  isEnabled: boolean;

  action: string;

  delegate: interop.Object;

  sendAction(): boolean;

  localizedNameForFamilyFace(family: string, faceKey: string | null): string;

  setSelectedAttributesIsMultiple(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, flag: boolean): void;

  convertAttributes(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSDictionary;

  availableFontNamesMatchingFontDescriptor(descriptor: NSFontDescriptor): NSArray;

  readonly collectionNames: NSArray;

  fontDescriptorsInCollection(collectionNames: string): NSArray;

  addCollectionOptions(collectionName: string, collectionOptions: interop.Enum<typeof NSFontCollectionOptions>): boolean;

  removeCollection(collectionName: string): boolean;

  addFontDescriptorsToCollection(descriptors: NSArray<interop.Object> | Array<interop.Object>, collectionName: string): void;

  removeFontDescriptorFromCollection(descriptor: NSFontDescriptor, collection: string): void;

  readonly currentFontAction: interop.Enum<typeof NSFontAction>;

  convertFontTraits(traits: interop.Enum<typeof NSFontTraitMask>): interop.Enum<typeof NSFontTraitMask>;

  target: interop.Object;

  fontNamedHasTraits(fName: string, someTraits: interop.Enum<typeof NSFontTraitMask>): boolean;

  availableFontNamesWithTraits(someTraits: interop.Enum<typeof NSFontTraitMask>): NSArray;

  addFontTrait(sender: interop.Object | null): void;

  removeFontTrait(sender: interop.Object | null): void;

  modifyFontViaPanel(sender: interop.Object | null): void;

  modifyFont(sender: interop.Object | null): void;

  orderFrontFontPanel(sender: interop.Object | null): void;

  orderFrontStylesPanel(sender: interop.Object | null): void;

  validateMenuItem(menuItem: NSMenuItem): boolean;

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

declare class NSDiffableDataSourceSnapshot<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends NSObject implements NSCopying {
  readonly numberOfItems: number;

  readonly numberOfSections: number;

  readonly sectionIdentifiers: NSArray;

  readonly itemIdentifiers: NSArray;

  numberOfItemsInSection(sectionIdentifier: SectionIdentifierType): number;

  itemIdentifiersInSectionWithIdentifier(sectionIdentifier: SectionIdentifierType): NSArray;

  sectionIdentifierForSectionContainingItemIdentifier(itemIdentifier: ItemIdentifierType): SectionIdentifierType;

  indexOfItemIdentifier(itemIdentifier: ItemIdentifierType): number;

  indexOfSectionIdentifier(sectionIdentifier: SectionIdentifierType): number;

  appendItemsWithIdentifiers(identifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  appendItemsWithIdentifiersIntoSectionWithIdentifier(identifiers: NSArray<interop.Object> | Array<interop.Object>, sectionIdentifier: SectionIdentifierType): void;

  insertItemsWithIdentifiersBeforeItemWithIdentifier(identifiers: NSArray<interop.Object> | Array<interop.Object>, itemIdentifier: ItemIdentifierType): void;

  insertItemsWithIdentifiersAfterItemWithIdentifier(identifiers: NSArray<interop.Object> | Array<interop.Object>, itemIdentifier: ItemIdentifierType): void;

  deleteItemsWithIdentifiers(identifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  deleteAllItems(): void;

  moveItemWithIdentifierBeforeItemWithIdentifier(fromIdentifier: ItemIdentifierType, toIdentifier: ItemIdentifierType): void;

  moveItemWithIdentifierAfterItemWithIdentifier(fromIdentifier: ItemIdentifierType, toIdentifier: ItemIdentifierType): void;

  reloadItemsWithIdentifiers(identifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  appendSectionsWithIdentifiers(sectionIdentifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  insertSectionsWithIdentifiersBeforeSectionWithIdentifier(sectionIdentifiers: NSArray<interop.Object> | Array<interop.Object>, toSectionIdentifier: SectionIdentifierType): void;

  insertSectionsWithIdentifiersAfterSectionWithIdentifier(sectionIdentifiers: NSArray<interop.Object> | Array<interop.Object>, toSectionIdentifier: SectionIdentifierType): void;

  deleteSectionsWithIdentifiers(sectionIdentifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  moveSectionWithIdentifierBeforeSectionWithIdentifier(fromSectionIdentifier: SectionIdentifierType, toSectionIdentifier: SectionIdentifierType): void;

  moveSectionWithIdentifierAfterSectionWithIdentifier(fromSectionIdentifier: SectionIdentifierType, toSectionIdentifier: SectionIdentifierType): void;

  reloadSectionsWithIdentifiers(sectionIdentifiers: NSArray<interop.Object> | Array<interop.Object>): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSCollectionLayoutSupplementaryItem extends NSCollectionLayoutItem implements NSCopying {
  static supplementaryItemWithLayoutSizeElementKindContainerAnchor<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor): InstanceType<This>;

  static supplementaryItemWithLayoutSizeElementKindContainerAnchorItemAnchor<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor): InstanceType<This>;

  zIndex: number;

  readonly elementKind: string;

  readonly containerAnchor: NSCollectionLayoutAnchor;

  readonly itemAnchor: NSCollectionLayoutAnchor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSScrubberLayout extends NSObject implements NSCoding {
  static readonly layoutAttributesClass: interop.Object;

  readonly scrubber: NSScrubber;

  readonly visibleRect: CGRect;

  init(): this;

  initWithCoder(coder: NSCoder): this;

  invalidateLayout(): void;

  prepareLayout(): void;

  readonly scrubberContentSize: CGSize;

  layoutAttributesForItemAtIndex(index: number): NSScrubberLayoutAttributes;

  layoutAttributesForItemsInRect(rect: CGRect): NSSet;

  readonly shouldInvalidateLayoutForSelectionChange: boolean;

  readonly shouldInvalidateLayoutForHighlightChange: boolean;

  shouldInvalidateLayoutForChangeFromVisibleRectToVisibleRect(fromVisibleRect: CGRect, toVisibleRect: CGRect): boolean;

  readonly automaticallyMirrorsInRightToLeftLayout: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSDockTile extends NSObject {
  readonly size: CGSize;

  contentView: NSView;

  display(): void;

  showsApplicationBadge: boolean;

  badgeLabel: string;

  readonly owner: interop.Object | null;
}

declare class NSWindowController extends NSResponder implements NSSeguePerforming {
  initWithWindow(window: NSWindow | null): this;

  initWithCoder(coder: NSCoder): this;

  initWithWindowNibName(windowNibName: string): this;

  initWithWindowNibNameOwner(windowNibName: string, owner: interop.Object): this;

  initWithWindowNibPathOwner(windowNibPath: string, owner: interop.Object): this;

  readonly windowNibName: string;

  readonly windowNibPath: string;

  readonly owner: interop.Object | null;

  windowFrameAutosaveName: string;

  shouldCascadeWindows: boolean;

  get previewRepresentableActivityItems(): NSArray;
  set previewRepresentableActivityItems(value: NSArray<interop.Object> | Array<interop.Object>);

  document: interop.Object;

  setDocumentEdited(dirtyFlag: boolean): void;

  shouldCloseDocument: boolean;

  synchronizeWindowTitleWithDocumentName(): void;

  windowTitleForDocumentDisplayName(displayName: string): string;

  contentViewController: NSViewController;

  window: NSWindow;

  readonly isWindowLoaded: boolean;

  windowWillLoad(): void;

  windowDidLoad(): void;

  loadWindow(): void;

  close(): void;

  showWindow(sender: interop.Object | null): void;

  readonly storyboard: NSStoryboard;

  dismissController(sender: interop.Object | null): void;

  prepareForSegueSender(segue: NSStoryboardSegue, sender: interop.Object | null): void;

  performSegueWithIdentifierSender(identifier: string, sender: interop.Object | null): void;

  shouldPerformSegueWithIdentifierSender(identifier: string, sender: interop.Object | null): boolean;

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

declare class NSCollectionViewUpdateItem extends NSObject {
  readonly indexPathBeforeUpdate: NSIndexPath;

  readonly indexPathAfterUpdate: NSIndexPath;

  readonly updateAction: interop.Enum<typeof NSCollectionUpdateAction>;
}

declare class NSCachedImageRep extends NSImageRep {
  initWithWindowRect(win: NSWindow, rect: CGRect): this;

  initWithSizeDepthSeparateAlpha(size: CGSize, depth: interop.Enum<typeof NSWindowDepth>, flag: boolean, alpha: boolean): this;

  window(): NSWindow;

  rect(): CGRect;
}

declare class NSImageView extends NSControl implements NSAccessibilityImage, NSMenuItemValidation {
  static imageViewWithImage<This extends abstract new (...args: any) => any>(this: This, image: NSImage): InstanceType<This>;

  image: NSImage;

  isEditable: boolean;

  imageAlignment: interop.Enum<typeof NSImageAlignment>;

  imageScaling: interop.Enum<typeof NSImageScaling>;

  imageFrameStyle: interop.Enum<typeof NSImageFrameStyle>;

  symbolConfiguration: NSImageSymbolConfiguration;

  contentTintColor: NSColor;

  animates: boolean;

  allowsCutCopyPaste: boolean;

  static defaultPreferredImageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;

  preferredImageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;

  readonly imageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;

  addSymbolEffect(symbolEffect: NSSymbolEffect): void;

  addSymbolEffectOptions(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions): void;

  addSymbolEffectOptionsAnimated(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions, animated: boolean): void;

  removeSymbolEffectOfType(symbolEffect: NSSymbolEffect): void;

  removeSymbolEffectOfTypeOptions(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions): void;

  removeSymbolEffectOfTypeOptionsAnimated(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions, animated: boolean): void;

  removeAllSymbolEffects(): void;

  removeAllSymbolEffectsWithOptions(options: NSSymbolEffectOptions): void;

  removeAllSymbolEffectsWithOptionsAnimated(options: NSSymbolEffectOptions, animated: boolean): void;

  setSymbolImageWithContentTransition(symbolImage: NSImage, transition: NSSymbolContentTransition): void;

  setSymbolImageWithContentTransitionOptions(symbolImage: NSImage, transition: NSSymbolContentTransition, options: NSSymbolEffectOptions): void;

  accessibilityLabel: string;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

  validateMenuItem(menuItem: NSMenuItem): boolean;
}

declare class NSController extends NSObject implements NSCoding, NSEditor, NSEditorRegistration {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  objectDidBeginEditing(editor: NSEditor): void;

  objectDidEndEditing(editor: NSEditor): void;

  discardEditing(): void;

  commitEditing(): boolean;

  commitEditingWithDelegateDidCommitSelectorContextInfo(delegate: interop.Object | null, didCommitSelector: string | null, contextInfo: interop.PointerConvertible): void;

  readonly isEditing: boolean;

  encodeWithCoder(coder: NSCoder): void;

  commitEditingAndReturnError(error: interop.PointerConvertible): boolean;

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

declare class NSRulerView extends NSView {
  static registerUnitWithNameAbbreviationUnitToPointsConversionFactorStepUpCycleStepDownCycle(unitName: string, abbreviation: string, conversionFactor: number, stepUpCycle: NSArray<interop.Object> | Array<interop.Object>, stepDownCycle: NSArray<interop.Object> | Array<interop.Object>): void;

  initWithCoder(coder: NSCoder): this;

  initWithScrollViewOrientation(scrollView: NSScrollView | null, orientation: interop.Enum<typeof NSRulerOrientation>): this;

  scrollView: NSScrollView;

  orientation: interop.Enum<typeof NSRulerOrientation>;

  readonly baselineLocation: number;

  readonly requiredThickness: number;

  ruleThickness: number;

  reservedThicknessForMarkers: number;

  reservedThicknessForAccessoryView: number;

  measurementUnits: string;

  originOffset: number;

  clientView: NSView;

  addMarker(marker: NSRulerMarker): void;

  removeMarker(marker: NSRulerMarker): void;

  get markers(): NSArray;
  set markers(value: NSArray<interop.Object> | Array<interop.Object>);

  trackMarkerWithMouseEvent(marker: NSRulerMarker, event: NSEvent): boolean;

  accessoryView: NSView;

  moveRulerlineFromLocationToLocation(oldLocation: number, newLocation: number): void;

  invalidateHashMarks(): void;

  drawHashMarksAndLabelsInRect(rect: CGRect): void;

  drawMarkersInRect(rect: CGRect): void;

  readonly isFlipped: boolean;
}

declare class NSInputServer extends NSObject implements NSInputServiceProvider, NSInputServerMouseTracker {
  initWithDelegateName(delegate: interop.Object, name: string): this;

  insertTextClient(string: interop.Object, sender: interop.Object): void;

  doCommandBySelectorClient(selector: string, sender: interop.Object): void;

  markedTextAbandoned(sender: interop.Object | null): void;

  markedTextSelectionChangedClient(newSel: _NSRange, sender: interop.Object): void;

  terminate(sender: interop.Object | null): void;

  canBeDisabled(): boolean;

  wantsToInterpretAllKeystrokes(): boolean;

  wantsToHandleMouseEvents(): boolean;

  wantsToDelayTextChangeNotifications(): boolean;

  inputClientBecomeActive(sender: interop.Object | null): void;

  inputClientResignActive(sender: interop.Object | null): void;

  inputClientEnabled(sender: interop.Object | null): void;

  inputClientDisabled(sender: interop.Object | null): void;

  activeConversationWillChangeFromOldConversation(sender: interop.Object, oldConversation: number): void;

  activeConversationChangedToNewConversation(sender: interop.Object, newConversation: number): void;

  mouseDownOnCharacterIndexAtCoordinateWithModifierClient(index: number, point: CGPoint, flags: number, sender: interop.Object): boolean;

  mouseDraggedOnCharacterIndexAtCoordinateWithModifierClient(index: number, point: CGPoint, flags: number, sender: interop.Object): boolean;

  mouseUpOnCharacterIndexAtCoordinateWithModifierClient(index: number, point: CGPoint, flags: number, sender: interop.Object): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSColorPickerTouchBarItem extends NSTouchBarItem {
  static colorPickerWithIdentifier<This extends abstract new (...args: any) => any>(this: This, identifier: string): InstanceType<This>;

  static textColorPickerWithIdentifier<This extends abstract new (...args: any) => any>(this: This, identifier: string): InstanceType<This>;

  static strokeColorPickerWithIdentifier<This extends abstract new (...args: any) => any>(this: This, identifier: string): InstanceType<This>;

  static colorPickerWithIdentifierButtonImage<This extends abstract new (...args: any) => any>(this: This, identifier: string, image: NSImage): InstanceType<This>;

  color: NSColor;

  showsAlpha: boolean;

  get allowedColorSpaces(): NSArray;
  set allowedColorSpaces(value: NSArray<interop.Object> | Array<interop.Object>);

  colorList: NSColorList;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;

  target: interop.Object;

  action: string;

  isEnabled: boolean;
}

declare class NSImage extends NSObject {
  static imageNamed(name: string): NSImage;

  static imageWithSystemSymbolNameAccessibilityDescription<This extends abstract new (...args: any) => any>(this: This, name: string, description: string | null): InstanceType<This>;

  static imageWithSystemSymbolNameVariableValueAccessibilityDescription<This extends abstract new (...args: any) => any>(this: This, name: string, value: number, description: string | null): InstanceType<This>;

  static imageWithSymbolNameVariableValue<This extends abstract new (...args: any) => any>(this: This, name: string, value: number): InstanceType<This>;

  static imageWithSymbolNameBundleVariableValue<This extends abstract new (...args: any) => any>(this: This, name: string, bundle: NSBundle | null, value: number): InstanceType<This>;

  initWithSize(size: CGSize): this;

  initWithCoder(coder: NSCoder): this;

  initWithData(data: NSData): this;

  initWithContentsOfFile(fileName: string): this;

  initWithContentsOfURL(url: NSURL): this;

  initByReferencingFile(fileName: string): this;

  initByReferencingURL(url: NSURL): this;

  initWithPasteboard(pasteboard: NSPasteboard): this;

  initWithDataIgnoringOrientation(data: NSData): this;

  static imageWithSizeFlippedDrawingHandler<This extends abstract new (...args: any) => any>(this: This, size: CGSize, drawingHandlerShouldBeCalledWithFlippedContext: boolean, drawingHandler: (p1: CGRect) => boolean): InstanceType<This>;

  size: CGSize;

  setName(string: string | null): boolean;

  name(): string;

  backgroundColor: NSColor;

  usesEPSOnResolutionMismatch: boolean;

  prefersColorMatch: boolean;

  matchesOnMultipleResolution: boolean;

  matchesOnlyOnBestFittingAxis: boolean;

  drawAtPointFromRectOperationFraction(point: CGPoint, fromRect: CGRect, op: interop.Enum<typeof NSCompositingOperation>, delta: number): void;

  drawInRectFromRectOperationFraction(rect: CGRect, fromRect: CGRect, op: interop.Enum<typeof NSCompositingOperation>, delta: number): void;

  drawInRectFromRectOperationFractionRespectFlippedHints(dstSpacePortionRect: CGRect, srcSpacePortionRect: CGRect, op: interop.Enum<typeof NSCompositingOperation>, requestedAlpha: number, respectContextIsFlipped: boolean, hints: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): void;

  drawRepresentationInRect(imageRep: NSImageRep, rect: CGRect): boolean;

  drawInRect(rect: CGRect): void;

  recache(): void;

  readonly TIFFRepresentation: NSData;

  TIFFRepresentationUsingCompressionFactor(comp: interop.Enum<typeof NSTIFFCompression>, factor: number): NSData;

  readonly representations: NSArray;

  addRepresentations(imageReps: NSArray<interop.Object> | Array<interop.Object>): void;

  addRepresentation(imageRep: NSImageRep): void;

  removeRepresentation(imageRep: NSImageRep): void;

  readonly isValid: boolean;

  delegate: NSImageDelegate;

  static readonly imageTypes: NSArray;

  static readonly imageUnfilteredTypes: NSArray;

  static canInitWithPasteboard(pasteboard: NSPasteboard): boolean;

  cacheMode: interop.Enum<typeof NSImageCacheMode>;

  alignmentRect: CGRect;

  isTemplate: boolean;

  accessibilityDescription: string;

  initWithCGImageSize(cgImage: interop.PointerConvertible, size: CGSize): this;

  CGImageForProposedRectContextHints(proposedDestRect: interop.PointerConvertible, referenceContext: NSGraphicsContext | null, hints: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): interop.Pointer;

  bestRepresentationForRectContextHints(rect: CGRect, referenceContext: NSGraphicsContext | null, hints: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): NSImageRep;

  hitTestRectWithImageDestinationRectContextHintsFlipped(testRectDestSpace: CGRect, imageRectDestSpace: CGRect, context: NSGraphicsContext | null, hints: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, flipped: boolean): boolean;

  recommendedLayerContentsScale(preferredContentsScale: number): number;

  layerContentsForContentsScale(layerContentsScale: number): interop.Object;

  capInsets: NSEdgeInsets;

  resizingMode: interop.Enum<typeof NSImageResizingMode>;

  imageWithSymbolConfiguration(configuration: NSImageSymbolConfiguration): NSImage;

  readonly symbolConfiguration: NSImageSymbolConfiguration;

  imageWithLocale(locale: NSLocale | null): NSImage;

  readonly locale: NSLocale;

  static imageUnfilteredFileTypes(): NSArray;

  static imageUnfilteredPasteboardTypes(): NSArray;

  static imageFileTypes(): NSArray;

  static imagePasteboardTypes(): NSArray;

  initWithIconRef(iconRef: interop.PointerConvertible): this;

  bestRepresentationForDevice(deviceDescription: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSImageRep;

  lockFocus(): void;

  lockFocusFlipped(flipped: boolean): void;

  unlockFocus(): void;

  setFlipped(flag: boolean): void;

  isFlipped(): boolean;

  setScalesWhenResized(flag: boolean): void;

  scalesWhenResized(): boolean;

  setDataRetained(flag: boolean): void;

  isDataRetained(): boolean;

  setCachedSeparately(flag: boolean): void;

  isCachedSeparately(): boolean;

  setCacheDepthMatchesImageDepth(flag: boolean): void;

  cacheDepthMatchesImageDepth(): boolean;

  dissolveToPointFraction(point: CGPoint, fraction: number): void;

  dissolveToPointFromRectFraction(point: CGPoint, rect: CGRect, fraction: number): void;

  compositeToPointOperation(point: CGPoint, operation: interop.Enum<typeof NSCompositingOperation>): void;

  compositeToPointFromRectOperation(point: CGPoint, rect: CGRect, operation: interop.Enum<typeof NSCompositingOperation>): void;

  compositeToPointOperationFraction(point: CGPoint, operation: interop.Enum<typeof NSCompositingOperation>, fraction: number): void;

  compositeToPointFromRectOperationFraction(point: CGPoint, rect: CGRect, operation: interop.Enum<typeof NSCompositingOperation>, fraction: number): void;

  lockFocusOnRepresentation(imageRepresentation: NSImageRep): void;

  cancelIncrementalLoad(): void;
}

declare class NSPageController extends NSViewController implements NSAnimatablePropertyContainer, NSCoding {
  delegate: NSPageControllerDelegate;

  readonly selectedViewController: NSViewController;

  transitionStyle: interop.Enum<typeof NSPageControllerTransitionStyle>;

  get arrangedObjects(): NSArray;
  set arrangedObjects(value: NSArray<interop.Object> | Array<interop.Object>);

  selectedIndex: number;

  navigateForwardToObject(object: interop.Object): void;

  completeTransition(): void;

  navigateBack(sender: interop.Object | null): void;

  navigateForward(sender: interop.Object | null): void;

  takeSelectedIndexFrom(sender: interop.Object | null): void;

  animator(): this;

  get animations(): NSDictionary;
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  animationForKey(key: string): interop.Object;

  static defaultAnimationForKey(key: string): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSGradient extends NSObject implements NSCopying, NSSecureCoding {
  initWithStartingColorEndingColor(startingColor: NSColor, endingColor: NSColor): this;

  initWithColors(colorArray: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithColorsAndLocations(firstColor: NSColor): this;

  initWithColorsAtLocationsColorSpace(colorArray: NSArray<interop.Object> | Array<interop.Object>, locations: interop.PointerConvertible, colorSpace: NSColorSpace): this;

  initWithCoder(coder: NSCoder): this;

  drawFromPointToPointOptions(startingPoint: CGPoint, endingPoint: CGPoint, options: interop.Enum<typeof NSGradientDrawingOptions>): void;

  drawInRectAngle(rect: CGRect, angle: number): void;

  drawInBezierPathAngle(path: NSBezierPath, angle: number): void;

  drawFromCenterRadiusToCenterRadiusOptions(startCenter: CGPoint, startRadius: number, endCenter: CGPoint, endRadius: number, options: interop.Enum<typeof NSGradientDrawingOptions>): void;

  drawInRectRelativeCenterPosition(rect: CGRect, relativeCenterPosition: CGPoint): void;

  drawInBezierPathRelativeCenterPosition(path: NSBezierPath, relativeCenterPosition: CGPoint): void;

  readonly colorSpace: NSColorSpace;

  readonly numberOfColorStops: number;

  getColorLocationAtIndex(color: interop.PointerConvertible, location: interop.PointerConvertible, index: number): void;

  interpolatedColorAtLocation(location: number): NSColor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSCollectionLayoutSection extends NSObject implements NSCopying {
  static sectionWithGroup<This extends abstract new (...args: any) => any>(this: This, group: NSCollectionLayoutGroup): InstanceType<This>;

  contentInsets: NSDirectionalEdgeInsets;

  interGroupSpacing: number;

  orthogonalScrollingBehavior: interop.Enum<typeof NSCollectionLayoutSectionOrthogonalScrollingBehavior>;

  get boundarySupplementaryItems(): NSArray;
  set boundarySupplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>);

  supplementariesFollowContentInsets: boolean;

  visibleItemsInvalidationHandler: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void;

  get decorationItems(): NSArray;
  set decorationItems(value: NSArray<interop.Object> | Array<interop.Object>);

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSScrubberProportionalLayout extends NSScrubberLayout {
  numberOfVisibleItems: number;

  initWithNumberOfVisibleItems(numberOfVisibleItems: number): this;

  initWithCoder(coder: NSCoder): this;
}

declare class NSScroller extends NSControl {
  static readonly isCompatibleWithOverlayScrollers: boolean;

  static scrollerWidthForControlSizeScrollerStyle(controlSize: interop.Enum<typeof NSControlSize>, scrollerStyle: interop.Enum<typeof NSScrollerStyle>): number;

  static readonly preferredScrollerStyle: interop.Enum<typeof NSScrollerStyle>;

  scrollerStyle: interop.Enum<typeof NSScrollerStyle>;

  knobStyle: interop.Enum<typeof NSScrollerKnobStyle>;

  rectForPart(partCode: interop.Enum<typeof NSScrollerPart>): CGRect;

  checkSpaceForParts(): void;

  readonly usableParts: interop.Enum<typeof NSUsableScrollerParts>;

  controlSize: interop.Enum<typeof NSControlSize>;

  drawKnob(): void;

  drawKnobSlotInRectHighlight(slotRect: CGRect, flag: boolean): void;

  testPart(point: CGPoint): interop.Enum<typeof NSScrollerPart>;

  trackKnob(event: NSEvent): void;

  readonly hitPart: interop.Enum<typeof NSScrollerPart>;

  knobProportion: number;

  static scrollerWidthForControlSize(controlSize: interop.Enum<typeof NSControlSize>): number;

  static scrollerWidth(): number;

  setFloatValueKnobProportion(value: number, proportion: number): void;

  arrowsPosition: interop.Enum<typeof NSScrollArrowPosition>;

  controlTint: interop.Enum<typeof NSControlTint>;

  highlight(flag: boolean): void;

  trackScrollButtons(event: NSEvent): void;

  drawParts(): void;

  drawArrowHighlight(whichArrow: interop.Enum<typeof NSScrollerArrow>, flag: boolean): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSTextField extends NSControl implements NSUserInterfaceValidations, NSAccessibilityNavigableStaticText, NSTextContent {
  placeholderString: string;

  placeholderAttributedString: NSAttributedString;

  backgroundColor: NSColor;

  drawsBackground: boolean;

  textColor: NSColor;

  isBordered: boolean;

  isBezeled: boolean;

  isEditable: boolean;

  isSelectable: boolean;

  selectText(sender: interop.Object | null): void;

  delegate: NSTextFieldDelegate;

  textShouldBeginEditing(textObject: NSText): boolean;

  textShouldEndEditing(textObject: NSText): boolean;

  textDidBeginEditing(notification: NSNotification): void;

  textDidEndEditing(notification: NSNotification): void;

  textDidChange(notification: NSNotification): void;

  readonly acceptsFirstResponder: boolean;

  bezelStyle: interop.Enum<typeof NSTextFieldBezelStyle>;

  preferredMaxLayoutWidth: number;

  maximumNumberOfLines: number;

  allowsDefaultTighteningForTruncation: boolean;

  lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;

  isAutomaticTextCompletionEnabled: boolean;

  allowsCharacterPickerTouchBarItem: boolean;

  static labelWithString<This extends abstract new (...args: any) => any>(this: This, stringValue: string): InstanceType<This>;

  static wrappingLabelWithString<This extends abstract new (...args: any) => any>(this: This, stringValue: string): InstanceType<This>;

  static labelWithAttributedString<This extends abstract new (...args: any) => any>(this: This, attributedStringValue: NSAttributedString): InstanceType<This>;

  static textFieldWithString<This extends abstract new (...args: any) => any>(this: This, stringValue: string): InstanceType<This>;

  allowsEditingTextAttributes: boolean;

  importsGraphics: boolean;

  setTitleWithMnemonic(stringWithAmpersand: string): void;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityLineForIndex(index: number): number;

  // @ts-ignore MemberDecl.tsIgnore
  accessibilityRangeForLine(lineNumber: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  // @ts-ignore MemberDecl.tsIgnore
  accessibilityValue: string;

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

  contentType: string;
}

declare class NSWorkspaceAuthorization extends NSObject {
}

declare class NSTextTable extends NSTextBlock {
  numberOfColumns: number;

  layoutAlgorithm: interop.Enum<typeof NSTextTableLayoutAlgorithm>;

  collapsesBorders: boolean;

  hidesEmptyCells: boolean;

  rectForBlockLayoutAtPointInRectTextContainerCharacterRange(block: NSTextTableBlock, startingPoint: CGPoint, rect: CGRect, textContainer: NSTextContainer, charRange: _NSRange): CGRect;

  boundsRectForBlockContentRectInRectTextContainerCharacterRange(block: NSTextTableBlock, contentRect: CGRect, rect: CGRect, textContainer: NSTextContainer, charRange: _NSRange): CGRect;

  drawBackgroundForBlockWithFrameInViewCharacterRangeLayoutManager(block: NSTextTableBlock, frameRect: CGRect, controlView: NSView, charRange: _NSRange, layoutManager: NSLayoutManager): void;
}

declare class NSOpenPanel extends NSSavePanel {
  static openPanel(): NSOpenPanel;

  readonly URLs: NSArray;

  resolvesAliases: boolean;

  canChooseDirectories: boolean;

  allowsMultipleSelection: boolean;

  canChooseFiles: boolean;

  canResolveUbiquitousConflicts: boolean;

  canDownloadUbiquitousContents: boolean;

  isAccessoryViewDisclosed: boolean;

  filenames(): NSArray;

  beginSheetForDirectoryFileTypesModalForWindowModalDelegateDidEndSelectorContextInfo(path: string | null, name: string | null, fileTypes: NSArray<interop.Object> | Array<interop.Object> | null, docWindow: NSWindow | null, delegate: interop.Object | null, didEndSelector: string | null, contextInfo: interop.PointerConvertible): void;

  beginForDirectoryFileTypesModelessDelegateDidEndSelectorContextInfo(path: string | null, name: string | null, fileTypes: NSArray<interop.Object> | Array<interop.Object> | null, delegate: interop.Object | null, didEndSelector: string | null, contextInfo: interop.PointerConvertible): void;

  runModalForDirectoryFileTypes(path: string | null, name: string | null, fileTypes: NSArray<interop.Object> | Array<interop.Object> | null): number;

  runModalForTypes(fileTypes: NSArray<interop.Object> | Array<interop.Object> | null): number;
}

declare class NSSpeechSynthesizer extends NSObject {
  initWithVoice(voice: string | null): this;

  startSpeakingString(string: string): boolean;

  startSpeakingStringToURL(string: string, url: NSURL): boolean;

  readonly isSpeaking: boolean;

  stopSpeaking(): void;

  stopSpeakingAtBoundary(boundary: interop.Enum<typeof NSSpeechBoundary>): void;

  pauseSpeakingAtBoundary(boundary: interop.Enum<typeof NSSpeechBoundary>): void;

  continueSpeaking(): void;

  delegate: NSSpeechSynthesizerDelegate;

  voice(): string;

  setVoice(voice: string | null): boolean;

  rate: number;

  volume: number;

  usesFeedbackWindow: boolean;

  addSpeechDictionary(speechDictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  phonemesFromText(text: string): string;

  objectForPropertyError(property: string, outError: interop.PointerConvertible): interop.Object;

  setObjectForPropertyError(object: interop.Object | null, property: string, outError: interop.PointerConvertible): boolean;

  static readonly isAnyApplicationSpeaking: boolean;

  static readonly defaultVoice: string;

  static readonly availableVoices: NSArray;

  static attributesForVoice(voice: string): NSDictionary;
}

declare class NSDraggingSession extends NSObject {
  draggingFormation: interop.Enum<typeof NSDraggingFormation>;

  animatesToStartingPositionsOnCancelOrFail: boolean;

  draggingLeaderIndex: number;

  readonly draggingPasteboard: NSPasteboard;

  readonly draggingSequenceNumber: number;

  readonly draggingLocation: CGPoint;

  enumerateDraggingItemsWithOptionsForViewClassesSearchOptionsUsingBlock(enumOpts: interop.Enum<typeof NSDraggingItemEnumerationOptions>, view: NSView | null, classArray: NSArray<interop.Object> | Array<interop.Object>, searchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, block: (p1: NSDraggingItem, p2: number, p3: interop.PointerConvertible) => void): void;
}

declare class NSPDFInfo extends NSObject implements NSCopying, NSCoding {
  URL: NSURL;

  isFileExtensionHidden: boolean;

  get tagNames(): NSArray;
  set tagNames(value: NSArray<interop.Object> | Array<interop.Object>);

  orientation: interop.Enum<typeof NSPaperOrientation>;

  paperSize: CGSize;

  readonly attributes: NSMutableDictionary;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSViewAnimation extends NSAnimation {
  initWithViewAnimations(viewAnimations: NSArray<interop.Object> | Array<interop.Object>): this;

  get viewAnimations(): NSArray;
  set viewAnimations(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class NSPopover extends NSResponder implements NSAppearanceCustomization, NSAccessibilityElementProtocol, NSAccessibility {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  delegate: NSPopoverDelegate;

  appearance: NSAppearance;

  readonly effectiveAppearance: NSAppearance;

  behavior: interop.Enum<typeof NSPopoverBehavior>;

  animates: boolean;

  contentViewController: NSViewController;

  contentSize: CGSize;

  readonly isShown: boolean;

  readonly isDetached: boolean;

  positioningRect: CGRect;

  hasFullSizeContent: boolean;

  showRelativeToRectOfViewPreferredEdge(positioningRect: CGRect, positioningView: NSView, preferredEdge: interop.Enum<typeof NSRectEdge>): void;

  showRelativeToToolbarItem(toolbarItem: NSToolbarItem): void;

  performClose(sender: interop.Object | null): void;

  close(): void;

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

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSShadow extends NSObject implements NSCopying, NSSecureCoding {
  init(): this;

  shadowOffset: CGSize;

  shadowBlurRadius: number;

  shadowColor: NSColor;

  set(): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSText extends NSView implements NSChangeSpelling, NSIgnoreMisspelledWords {
  initWithFrame(frameRect: CGRect): this;

  initWithCoder(coder: NSCoder): this;

  string: string;

  replaceCharactersInRangeWithString(range: _NSRange, string: string): void;

  replaceCharactersInRangeWithRTF(range: _NSRange, rtfData: NSData): void;

  replaceCharactersInRangeWithRTFD(range: _NSRange, rtfdData: NSData): void;

  RTFFromRange(range: _NSRange): NSData;

  RTFDFromRange(range: _NSRange): NSData;

  writeRTFDToFileAtomically(path: string, flag: boolean): boolean;

  readRTFDFromFile(path: string): boolean;

  delegate: NSTextDelegate;

  isEditable: boolean;

  isSelectable: boolean;

  isRichText: boolean;

  importsGraphics: boolean;

  isFieldEditor: boolean;

  usesFontPanel: boolean;

  drawsBackground: boolean;

  backgroundColor: NSColor;

  readonly isRulerVisible: boolean;

  selectedRange: _NSRange;

  scrollRangeToVisible(range: _NSRange): void;

  font: NSFont;

  textColor: NSColor;

  alignment: interop.Enum<typeof NSTextAlignment>;

  baseWritingDirection: interop.Enum<typeof NSWritingDirection>;

  setTextColorRange(color: NSColor | null, range: _NSRange): void;

  setFontRange(font: NSFont, range: _NSRange): void;

  maxSize: CGSize;

  minSize: CGSize;

  isHorizontallyResizable: boolean;

  isVerticallyResizable: boolean;

  sizeToFit(): void;

  // @ts-ignore MemberDecl.tsIgnore
  copy(sender: interop.Object | null): void;

  copyFont(sender: interop.Object | null): void;

  copyRuler(sender: interop.Object | null): void;

  cut(sender: interop.Object | null): void;

  delete(sender: interop.Object | null): void;

  paste(sender: interop.Object | null): void;

  pasteFont(sender: interop.Object | null): void;

  pasteRuler(sender: interop.Object | null): void;

  selectAll(sender: interop.Object | null): void;

  changeFont(sender: interop.Object | null): void;

  alignLeft(sender: interop.Object | null): void;

  alignRight(sender: interop.Object | null): void;

  alignCenter(sender: interop.Object | null): void;

  subscript(sender: interop.Object | null): void;

  superscript(sender: interop.Object | null): void;

  underline(sender: interop.Object | null): void;

  unscript(sender: interop.Object | null): void;

  showGuessPanel(sender: interop.Object | null): void;

  checkSpelling(sender: interop.Object | null): void;

  toggleRuler(sender: interop.Object | null): void;

  changeSpelling(sender: interop.Object | null): void;

  ignoreSpelling(sender: interop.Object | null): void;
}

declare class NSPDFPanel extends NSObject {
  static panel(): NSPDFPanel;

  accessoryController: NSViewController;

  options: interop.Enum<typeof NSPDFPanelOptions>;

  defaultFileName: string;

  beginSheetWithPDFInfoModalForWindowCompletionHandler(pdfInfo: NSPDFInfo, docWindow: NSWindow | null, completionHandler: (p1: number) => void): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSSwitch extends NSControl implements NSAccessibilitySwitch {
  state: number;

  // @ts-ignore MemberDecl.tsIgnore
  accessibilityValue: string;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityLabel: string;

  accessibilityPerformPress(): boolean;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

declare class NSCollectionLayoutAnchor extends NSObject implements NSCopying {
  static layoutAnchorWithEdges<This extends abstract new (...args: any) => any>(this: This, edges: interop.Enum<typeof NSDirectionalRectEdge>): InstanceType<This>;

  static layoutAnchorWithEdgesAbsoluteOffset<This extends abstract new (...args: any) => any>(this: This, edges: interop.Enum<typeof NSDirectionalRectEdge>, absoluteOffset: CGPoint): InstanceType<This>;

  static layoutAnchorWithEdgesFractionalOffset<This extends abstract new (...args: any) => any>(this: This, edges: interop.Enum<typeof NSDirectionalRectEdge>, fractionalOffset: CGPoint): InstanceType<This>;

  readonly edges: interop.Enum<typeof NSDirectionalRectEdge>;

  readonly offset: CGPoint;

  readonly isAbsoluteOffset: boolean;

  readonly isFractionalOffset: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSMagnificationGestureRecognizer extends NSGestureRecognizer {
  magnification: number;
}

declare class NSGridColumn extends NSObject implements NSCoding {
  readonly gridView: NSGridView | null;

  readonly numberOfCells: number;

  cellAtIndex(index: number): NSGridCell;

  xPlacement: interop.Enum<typeof NSGridCellPlacement>;

  width: number;

  leadingPadding: number;

  trailingPadding: number;

  isHidden: boolean;

  mergeCellsInRange(range: _NSRange): void;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSTextListElement extends NSTextParagraph {
  initWithParentElementTextListContentsMarkerAttributesChildElements(parent: NSTextListElement | null, textList: NSTextList, contents: NSAttributedString | null, markerAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, children: NSArray<interop.Object> | Array<interop.Object> | null): this;

  static textListElementWithContentsMarkerAttributesTextListChildElements<This extends abstract new (...args: any) => any>(this: This, contents: NSAttributedString, markerAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, textList: NSTextList, children: NSArray<interop.Object> | Array<interop.Object> | null): InstanceType<This>;

  static textListElementWithChildElementsTextListNestingLevel<This extends abstract new (...args: any) => any>(this: This, children: NSArray<interop.Object> | Array<interop.Object>, textList: NSTextList, nestingLevel: number): InstanceType<This>;

  readonly textList: NSTextList;

  readonly contents: NSAttributedString;

  readonly markerAttributes: NSDictionary;

  readonly attributedString: NSAttributedString;

  readonly childElements: NSArray;

  // @ts-ignore MemberDecl.tsIgnore
  readonly parentElement: NSTextListElement;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSTextContentStorage extends NSTextContentManager implements NSTextStorageObserving {
  // @ts-ignore MemberDecl.tsIgnore
  delegate: NSTextContentStorageDelegate;

  attributedString: NSAttributedString;

  attributedStringForTextElement(textElement: NSTextElement): NSAttributedString;

  textElementForAttributedString(attributedString: NSAttributedString): NSTextElement;

  locationFromLocationWithOffset(location: NSTextLocation, offset: number): NSTextLocation;

  offsetFromLocationToLocation(from: NSTextLocation, to: NSTextLocation): number;

  adjustedRangeFromRangeForEditingTextSelection(textRange: NSTextRange, forEditingTextSelection: boolean): NSTextRange;

  textStorage: NSTextStorage;

  processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange(textStorage: NSTextStorage, editMask: interop.Enum<typeof NSTextStorageEditActions>, newCharRange: _NSRange, delta: number, invalidatedCharRange: _NSRange): void;

  performEditingTransactionForTextStorageUsingBlock(textStorage: NSTextStorage, transaction: () => void): void;

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

declare class NSTextContentManager extends NSObject implements NSTextElementProvider, NSSecureCoding {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  delegate: NSTextContentManagerDelegate;

  readonly textLayoutManagers: NSArray;

  addTextLayoutManager(textLayoutManager: NSTextLayoutManager): void;

  removeTextLayoutManager(textLayoutManager: NSTextLayoutManager): void;

  primaryTextLayoutManager: NSTextLayoutManager;

  synchronizeTextLayoutManagers(completionHandler: (p1: NSError) => void | null): void;

  textElementsForRange(range: NSTextRange): NSArray;

  readonly hasEditingTransaction: boolean;

  performEditingTransactionUsingBlock(transaction: () => void): void;

  recordEditActionInRangeNewTextRange(originalTextRange: NSTextRange, newTextRange: NSTextRange): void;

  automaticallySynchronizesTextLayoutManagers: boolean;

  automaticallySynchronizesToBackingStore: boolean;

  readonly documentRange: NSTextRange;

  enumerateTextElementsFromLocationOptionsUsingBlock(textLocation: NSTextLocation | null, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>, block: (p1: NSTextElement) => boolean): NSTextLocation;

  replaceContentsInRangeWithTextElements(range: NSTextRange, textElements: NSArray<interop.Object> | Array<interop.Object> | null): void;

  synchronizeToBackingStore(completionHandler: (p1: NSError) => void | null): void;

  locationFromLocationWithOffset(location: NSTextLocation, offset: number): NSTextLocation;

  offsetFromLocationToLocation(from: NSTextLocation, to: NSTextLocation): number;

  adjustedRangeFromRangeForEditingTextSelection(textRange: NSTextRange, forEditingTextSelection: boolean): NSTextRange;

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

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSLayoutManager extends NSObject implements NSSecureCoding {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  textStorage: NSTextStorage;

  replaceTextStorage(newTextStorage: NSTextStorage): void;

  readonly textContainers: NSArray;

  addTextContainer(container: NSTextContainer): void;

  insertTextContainerAtIndex(container: NSTextContainer, index: number): void;

  removeTextContainerAtIndex(index: number): void;

  textContainerChangedGeometry(container: NSTextContainer): void;

  textContainerChangedTextView(container: NSTextContainer): void;

  delegate: NSLayoutManagerDelegate;

  showsInvisibleCharacters: boolean;

  showsControlCharacters: boolean;

  usesDefaultHyphenation: boolean;

  usesFontLeading: boolean;

  allowsNonContiguousLayout: boolean;

  readonly hasNonContiguousLayout: boolean;

  limitsLayoutForSuspiciousContents: boolean;

  backgroundLayoutEnabled: boolean;

  defaultAttachmentScaling: interop.Enum<typeof NSImageScaling>;

  typesetter: NSTypesetter;

  typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;

  invalidateGlyphsForCharacterRangeChangeInLengthActualCharacterRange(charRange: _NSRange, delta: number, actualCharRange: interop.PointerConvertible): void;

  invalidateLayoutForCharacterRangeActualCharacterRange(charRange: _NSRange, actualCharRange: interop.PointerConvertible): void;

  invalidateDisplayForCharacterRange(charRange: _NSRange): void;

  invalidateDisplayForGlyphRange(glyphRange: _NSRange): void;

  processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange(textStorage: NSTextStorage, editMask: interop.Enum<typeof NSTextStorageEditActions>, newCharRange: _NSRange, delta: number, invalidatedCharRange: _NSRange): void;

  ensureGlyphsForCharacterRange(charRange: _NSRange): void;

  ensureGlyphsForGlyphRange(glyphRange: _NSRange): void;

  ensureLayoutForCharacterRange(charRange: _NSRange): void;

  ensureLayoutForGlyphRange(glyphRange: _NSRange): void;

  ensureLayoutForTextContainer(container: NSTextContainer): void;

  ensureLayoutForBoundingRectInTextContainer(bounds: CGRect, container: NSTextContainer): void;

  setGlyphsPropertiesCharacterIndexesFontForGlyphRange(glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: NSFont, glyphRange: _NSRange): void;

  readonly numberOfGlyphs: number;

  CGGlyphAtIndexIsValidIndex(glyphIndex: number, isValidIndex: interop.PointerConvertible): number;

  CGGlyphAtIndex(glyphIndex: number): number;

  isValidGlyphIndex(glyphIndex: number): boolean;

  propertyForGlyphAtIndex(glyphIndex: number): interop.Enum<typeof NSGlyphProperty>;

  characterIndexForGlyphAtIndex(glyphIndex: number): number;

  glyphIndexForCharacterAtIndex(charIndex: number): number;

  getGlyphsInRangeGlyphsPropertiesCharacterIndexesBidiLevels(glyphRange: _NSRange, glyphBuffer: interop.PointerConvertible, props: interop.PointerConvertible, charIndexBuffer: interop.PointerConvertible, bidiLevelBuffer: interop.PointerConvertible): number;

  setTextContainerForGlyphRange(container: NSTextContainer, glyphRange: _NSRange): void;

  setLineFragmentRectForGlyphRangeUsedRect(fragmentRect: CGRect, glyphRange: _NSRange, usedRect: CGRect): void;

  setExtraLineFragmentRectUsedRectTextContainer(fragmentRect: CGRect, usedRect: CGRect, container: NSTextContainer): void;

  setLocationForStartOfGlyphRange(location: CGPoint, glyphRange: _NSRange): void;

  setNotShownAttributeForGlyphAtIndex(flag: boolean, glyphIndex: number): void;

  setDrawsOutsideLineFragmentForGlyphAtIndex(flag: boolean, glyphIndex: number): void;

  setAttachmentSizeForGlyphRange(attachmentSize: CGSize, glyphRange: _NSRange): void;

  getFirstUnlaidCharacterIndexGlyphIndex(charIndex: interop.PointerConvertible, glyphIndex: interop.PointerConvertible): void;

  firstUnlaidCharacterIndex(): number;

  firstUnlaidGlyphIndex(): number;

  textContainerForGlyphAtIndexEffectiveRange(glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible): NSTextContainer;

  textContainerForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible, flag: boolean): NSTextContainer;

  usedRectForTextContainer(container: NSTextContainer): CGRect;

  lineFragmentRectForGlyphAtIndexEffectiveRange(glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible): CGRect;

  lineFragmentRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible, flag: boolean): CGRect;

  lineFragmentUsedRectForGlyphAtIndexEffectiveRange(glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible): CGRect;

  lineFragmentUsedRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible, flag: boolean): CGRect;

  readonly extraLineFragmentRect: CGRect;

  readonly extraLineFragmentUsedRect: CGRect;

  readonly extraLineFragmentTextContainer: NSTextContainer;

  locationForGlyphAtIndex(glyphIndex: number): CGPoint;

  notShownAttributeForGlyphAtIndex(glyphIndex: number): boolean;

  drawsOutsideLineFragmentForGlyphAtIndex(glyphIndex: number): boolean;

  attachmentSizeForGlyphAtIndex(glyphIndex: number): CGSize;

  truncatedGlyphRangeInLineFragmentForGlyphAtIndex(glyphIndex: number): _NSRange;

  glyphRangeForCharacterRangeActualCharacterRange(charRange: _NSRange, actualCharRange: interop.PointerConvertible): _NSRange;

  characterRangeForGlyphRangeActualGlyphRange(glyphRange: _NSRange, actualGlyphRange: interop.PointerConvertible): _NSRange;

  glyphRangeForTextContainer(container: NSTextContainer): _NSRange;

  rangeOfNominallySpacedGlyphsContainingIndex(glyphIndex: number): _NSRange;

  boundingRectForGlyphRangeInTextContainer(glyphRange: _NSRange, container: NSTextContainer): CGRect;

  glyphRangeForBoundingRectInTextContainer(bounds: CGRect, container: NSTextContainer): _NSRange;

  glyphRangeForBoundingRectWithoutAdditionalLayoutInTextContainer(bounds: CGRect, container: NSTextContainer): _NSRange;

  glyphIndexForPointInTextContainerFractionOfDistanceThroughGlyph(point: CGPoint, container: NSTextContainer, partialFraction: interop.PointerConvertible): number;

  glyphIndexForPointInTextContainer(point: CGPoint, container: NSTextContainer): number;

  fractionOfDistanceThroughGlyphForPointInTextContainer(point: CGPoint, container: NSTextContainer): number;

  characterIndexForPointInTextContainerFractionOfDistanceBetweenInsertionPoints(point: CGPoint, container: NSTextContainer, partialFraction: interop.PointerConvertible): number;

  getLineFragmentInsertionPointsForCharacterAtIndexAlternatePositionsInDisplayOrderPositionsCharacterIndexes(charIndex: number, aFlag: boolean, dFlag: boolean, positions: interop.PointerConvertible, charIndexes: interop.PointerConvertible): number;

  enumerateLineFragmentsForGlyphRangeUsingBlock(glyphRange: _NSRange, block: (p1: CGRect, p2: CGRect, p3: NSTextContainer, p4: _NSRange, p5: interop.PointerConvertible) => void): void;

  enumerateEnclosingRectsForGlyphRangeWithinSelectedGlyphRangeInTextContainerUsingBlock(glyphRange: _NSRange, selectedRange: _NSRange, textContainer: NSTextContainer, block: (p1: CGRect, p2: interop.PointerConvertible) => void): void;

  drawBackgroundForGlyphRangeAtPoint(glyphsToShow: _NSRange, origin: CGPoint): void;

  drawGlyphsForGlyphRangeAtPoint(glyphsToShow: _NSRange, origin: CGPoint): void;

  showCGGlyphsPositionsCountFontTextMatrixAttributesInContext(glyphs: interop.PointerConvertible, positions: interop.PointerConvertible, glyphCount: number, font: NSFont, textMatrix: CGAffineTransform, attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, CGContext: interop.PointerConvertible): void;

  fillBackgroundRectArrayCountForCharacterRangeColor(rectArray: interop.PointerConvertible, rectCount: number, charRange: _NSRange, color: NSColor): void;

  drawUnderlineForGlyphRangeUnderlineTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: _NSRange, underlineVal: interop.Enum<typeof NSUnderlineStyle>, baselineOffset: number, lineRect: CGRect, lineGlyphRange: _NSRange, containerOrigin: CGPoint): void;

  underlineGlyphRangeUnderlineTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: _NSRange, underlineVal: interop.Enum<typeof NSUnderlineStyle>, lineRect: CGRect, lineGlyphRange: _NSRange, containerOrigin: CGPoint): void;

  drawStrikethroughForGlyphRangeStrikethroughTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: _NSRange, strikethroughVal: interop.Enum<typeof NSUnderlineStyle>, baselineOffset: number, lineRect: CGRect, lineGlyphRange: _NSRange, containerOrigin: CGPoint): void;

  strikethroughGlyphRangeStrikethroughTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: _NSRange, strikethroughVal: interop.Enum<typeof NSUnderlineStyle>, lineRect: CGRect, lineGlyphRange: _NSRange, containerOrigin: CGPoint): void;

  showAttachmentCellInRectCharacterIndex(cell: NSCell, rect: CGRect, attachmentIndex: number): void;

  setLayoutRectForTextBlockGlyphRange(rect: CGRect, block: NSTextBlock, glyphRange: _NSRange): void;

  setBoundsRectForTextBlockGlyphRange(rect: CGRect, block: NSTextBlock, glyphRange: _NSRange): void;

  layoutRectForTextBlockGlyphRange(block: NSTextBlock, glyphRange: _NSRange): CGRect;

  boundsRectForTextBlockGlyphRange(block: NSTextBlock, glyphRange: _NSRange): CGRect;

  layoutRectForTextBlockAtIndexEffectiveRange(block: NSTextBlock, glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible): CGRect;

  boundsRectForTextBlockAtIndexEffectiveRange(block: NSTextBlock, glyphIndex: number, effectiveGlyphRange: interop.PointerConvertible): CGRect;

  temporaryAttributesAtCharacterIndexEffectiveRange(charIndex: number, effectiveCharRange: interop.PointerConvertible): NSDictionary;

  setTemporaryAttributesForCharacterRange(attrs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, charRange: _NSRange): void;

  addTemporaryAttributesForCharacterRange(attrs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, charRange: _NSRange): void;

  removeTemporaryAttributeForCharacterRange(attrName: string, charRange: _NSRange): void;

  temporaryAttributeAtCharacterIndexEffectiveRange(attrName: string, location: number, range: interop.PointerConvertible): interop.Object;

  temporaryAttributeAtCharacterIndexLongestEffectiveRangeInRange(attrName: string, location: number, range: interop.PointerConvertible, rangeLimit: _NSRange): interop.Object;

  temporaryAttributesAtCharacterIndexLongestEffectiveRangeInRange(location: number, range: interop.PointerConvertible, rangeLimit: _NSRange): NSDictionary;

  addTemporaryAttributeValueForCharacterRange(attrName: string, value: interop.Object, charRange: _NSRange): void;

  defaultLineHeightForFont(theFont: NSFont): number;

  defaultBaselineOffsetForFont(theFont: NSFont): number;

  rulerMarkersForTextViewParagraphStyleRuler(view: NSTextView, style: NSParagraphStyle, ruler: NSRulerView): NSArray;

  rulerAccessoryViewForTextViewParagraphStyleRulerEnabled(view: NSTextView, style: NSParagraphStyle, ruler: NSRulerView, isEnabled: boolean): NSView;

  layoutManagerOwnsFirstResponderInWindow(window: NSWindow): boolean;

  readonly firstTextView: NSTextView;

  readonly textViewForBeginningOfSelection: NSTextView;

  glyphAtIndexIsValidIndex(glyphIndex: number, isValidIndex: interop.PointerConvertible): number;

  glyphAtIndex(glyphIndex: number): number;

  rectArrayForCharacterRangeWithinSelectedCharacterRangeInTextContainerRectCount(charRange: _NSRange, selCharRange: _NSRange, container: NSTextContainer, rectCount: interop.PointerConvertible): interop.Pointer;

  rectArrayForGlyphRangeWithinSelectedGlyphRangeInTextContainerRectCount(glyphRange: _NSRange, selGlyphRange: _NSRange, container: NSTextContainer, rectCount: interop.PointerConvertible): interop.Pointer;

  usesScreenFonts: boolean;

  substituteFontForFont(originalFont: NSFont): NSFont;

  insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex(glyphs: interop.PointerConvertible, length: number, glyphIndex: number, charIndex: number): void;

  insertGlyphAtGlyphIndexCharacterIndex(glyph: number, glyphIndex: number, charIndex: number): void;

  replaceGlyphAtIndexWithGlyph(glyphIndex: number, newGlyph: number): void;

  deleteGlyphsInRange(glyphRange: _NSRange): void;

  setCharacterIndexForGlyphAtIndex(charIndex: number, glyphIndex: number): void;

  setIntAttributeValueForGlyphAtIndex(attributeTag: number, val: number, glyphIndex: number): void;

  invalidateGlyphsOnLayoutInvalidationForGlyphRange(glyphRange: _NSRange): void;

  intAttributeForGlyphAtIndex(attributeTag: number, glyphIndex: number): number;

  getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBits(glyphRange: _NSRange, glyphBuffer: interop.PointerConvertible, charIndexBuffer: interop.PointerConvertible, inscribeBuffer: interop.PointerConvertible, elasticBuffer: interop.PointerConvertible): number;

  getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBitsBidiLevels(glyphRange: _NSRange, glyphBuffer: interop.PointerConvertible, charIndexBuffer: interop.PointerConvertible, inscribeBuffer: interop.PointerConvertible, elasticBuffer: interop.PointerConvertible, bidiLevelBuffer: interop.PointerConvertible): number;

  getGlyphsRange(glyphArray: interop.PointerConvertible, glyphRange: _NSRange): number;

  invalidateLayoutForCharacterRangeIsSoftActualCharacterRange(charRange: _NSRange, flag: boolean, actualCharRange: interop.PointerConvertible): void;

  textStorageEditedRangeChangeInLengthInvalidatedRange(str: NSTextStorage, editedMask: number, newCharRange: _NSRange, delta: number, invalidatedCharRange: _NSRange): void;

  setLocationsStartingGlyphIndexesCountForGlyphRange(locations: interop.PointerConvertible, glyphIndexes: interop.PointerConvertible, count: number, glyphRange: _NSRange): void;

  showPackedGlyphsLengthGlyphRangeAtPointFontColorPrintingAdjustment(glyphs: string, glyphLen: number, glyphRange: _NSRange, point: CGPoint, font: NSFont, color: NSColor, printingAdjustment: CGSize): void;

  showCGGlyphsPositionsCountFontMatrixAttributesInContext(glyphs: interop.PointerConvertible, positions: interop.PointerConvertible, glyphCount: number, font: NSFont, textMatrix: NSAffineTransform, attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, graphicsContext: NSGraphicsContext): void;

  hyphenationFactor: number;

  glyphGenerator: NSGlyphGenerator;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSStepperTouchBarItem extends NSTouchBarItem {
  static stepperTouchBarItemWithIdentifierFormatter<This extends abstract new (...args: any) => any>(this: This, identifier: string, formatter: NSFormatter): InstanceType<This>;

  static stepperTouchBarItemWithIdentifierDrawingHandler<This extends abstract new (...args: any) => any>(this: This, identifier: string, drawingHandler: (p1: CGRect, p2: number) => void): InstanceType<This>;

  maxValue: number;

  minValue: number;

  increment: number;

  value: number;

  target: interop.Object;

  action: string;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSPickerTouchBarItem extends NSTouchBarItem {
  static pickerTouchBarItemWithIdentifierLabelsSelectionModeTargetAction<This extends abstract new (...args: any) => any>(this: This, identifier: string, labels: NSArray<interop.Object> | Array<interop.Object>, selectionMode: interop.Enum<typeof NSPickerTouchBarItemSelectionMode>, target: interop.Object | null, action: string | null): InstanceType<This>;

  static pickerTouchBarItemWithIdentifierImagesSelectionModeTargetAction<This extends abstract new (...args: any) => any>(this: This, identifier: string, images: NSArray<interop.Object> | Array<interop.Object>, selectionMode: interop.Enum<typeof NSPickerTouchBarItemSelectionMode>, target: interop.Object | null, action: string | null): InstanceType<This>;

  controlRepresentation: interop.Enum<typeof NSPickerTouchBarItemControlRepresentation>;

  collapsedRepresentationLabel: string;

  collapsedRepresentationImage: NSImage;

  selectedIndex: number;

  selectionColor: NSColor;

  selectionMode: interop.Enum<typeof NSPickerTouchBarItemSelectionMode>;

  numberOfOptions: number;

  setImageAtIndex(image: NSImage | null, index: number): void;

  imageAtIndex(index: number): NSImage;

  setLabelAtIndex(label: string, index: number): void;

  labelAtIndex(index: number): string;

  target: interop.Object;

  action: string;

  isEnabled: boolean;

  setEnabledAtIndex(enabled: boolean, index: number): void;

  isEnabledAtIndex(index: number): boolean;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSButtonTouchBarItem extends NSTouchBarItem {
  static buttonTouchBarItemWithIdentifierTitleTargetAction<This extends abstract new (...args: any) => any>(this: This, identifier: string, title: string, target: interop.Object | null, action: string | null): InstanceType<This>;

  static buttonTouchBarItemWithIdentifierImageTargetAction<This extends abstract new (...args: any) => any>(this: This, identifier: string, image: NSImage, target: interop.Object | null, action: string | null): InstanceType<This>;

  static buttonTouchBarItemWithIdentifierTitleImageTargetAction<This extends abstract new (...args: any) => any>(this: This, identifier: string, title: string, image: NSImage, target: interop.Object | null, action: string | null): InstanceType<This>;

  title: string;

  image: NSImage;

  bezelColor: NSColor;

  target: interop.Object;

  action: string;

  isEnabled: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;
}

declare class NSPressureConfiguration extends NSObject {
  readonly pressureBehavior: interop.Enum<typeof NSPressureBehavior>;

  initWithPressureBehavior(pressureBehavior: interop.Enum<typeof NSPressureBehavior>): this;

  set(): void;
}

declare class NSImageRep extends NSObject implements NSCopying, NSCoding {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  draw(): boolean;

  drawAtPoint(point: CGPoint): boolean;

  drawInRect(rect: CGRect): boolean;

  drawInRectFromRectOperationFractionRespectFlippedHints(dstSpacePortionRect: CGRect, srcSpacePortionRect: CGRect, op: interop.Enum<typeof NSCompositingOperation>, requestedAlpha: number, respectContextIsFlipped: boolean, hints: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): boolean;

  size: CGSize;

  hasAlpha: boolean;

  isOpaque: boolean;

  colorSpaceName: string;

  bitsPerSample: number;

  pixelsWide: number;

  pixelsHigh: number;

  layoutDirection: interop.Enum<typeof NSImageLayoutDirection>;

  static registerImageRepClass(imageRepClass: interop.Object): void;

  static unregisterImageRepClass(imageRepClass: interop.Object): void;

  static readonly registeredImageRepClasses: NSArray;

  static imageRepClassForFileType(type: string): interop.Object;

  static imageRepClassForPasteboardType(type: string): interop.Object;

  static imageRepClassForType(type: string): interop.Object;

  static imageRepClassForData(data: NSData): interop.Object;

  static canInitWithData(data: NSData): boolean;

  static imageUnfilteredFileTypes(): NSArray;

  static imageUnfilteredPasteboardTypes(): NSArray;

  static imageFileTypes(): NSArray;

  static imagePasteboardTypes(): NSArray;

  static readonly imageUnfilteredTypes: NSArray;

  static readonly imageTypes: NSArray;

  static canInitWithPasteboard(pasteboard: NSPasteboard): boolean;

  static imageRepsWithContentsOfFile(filename: string): NSArray;

  static imageRepWithContentsOfFile(filename: string): NSImageRep;

  static imageRepsWithContentsOfURL(url: NSURL): NSArray;

  static imageRepWithContentsOfURL(url: NSURL): NSImageRep;

  static imageRepsWithPasteboard(pasteboard: NSPasteboard): NSArray;

  static imageRepWithPasteboard(pasteboard: NSPasteboard): NSImageRep;

  CGImageForProposedRectContextHints(proposedDestRect: interop.PointerConvertible, context: NSGraphicsContext | null, hints: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): interop.Pointer;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSHapticFeedbackManager extends NSObject {
  static readonly defaultPerformer: NSHapticFeedbackPerformer;
}

declare class NSDataAsset extends NSObject implements NSCopying {
  initWithName(name: string): this;

  initWithNameBundle(name: string, bundle: NSBundle): this;

  readonly name: string;

  readonly data: NSData;

  readonly typeIdentifier: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSTitlebarAccessoryViewController extends NSViewController implements NSAnimationDelegate, NSAnimatablePropertyContainer {
  layoutAttribute: interop.Enum<typeof NSLayoutAttribute>;

  fullScreenMinHeight: number;

  isHidden: boolean;

  automaticallyAdjustsSize: boolean;

  viewWillAppear(): void;

  viewDidAppear(): void;

  viewDidDisappear(): void;

  animationShouldStart(animation: NSAnimation): boolean;

  animationDidStop(animation: NSAnimation): void;

  animationDidEnd(animation: NSAnimation): void;

  animationValueForProgress(animation: NSAnimation, progress: number): number;

  animationDidReachProgressMark(animation: NSAnimation, progress: number): void;

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

  animator(): this;

  get animations(): NSDictionary;
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  animationForKey(key: string): interop.Object;

  static defaultAnimationForKey(key: string): interop.Object;
}

declare class NSVisualEffectView extends NSView {
  material: interop.Enum<typeof NSVisualEffectMaterial>;

  readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;

  blendingMode: interop.Enum<typeof NSVisualEffectBlendingMode>;

  state: interop.Enum<typeof NSVisualEffectState>;

  maskImage: NSImage;

  isEmphasized: boolean;

  viewDidMoveToWindow(): void;

  viewWillMoveToWindow(newWindow: NSWindow | null): void;
}

declare class NSPathComponentCell extends NSTextFieldCell {
  image: NSImage;

  URL: NSURL;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSPathCell extends NSActionCell implements NSMenuItemValidation, NSOpenSavePanelDelegate {
  pathStyle: interop.Enum<typeof NSPathStyle>;

  URL: NSURL;

  // @ts-ignore MemberDecl.tsIgnore
  setObjectValue(obj: NSCopying | null): void;

  get allowedTypes(): NSArray;
  set allowedTypes(value: NSArray<interop.Object> | Array<interop.Object>);

  delegate: NSPathCellDelegate;

  static readonly pathComponentCellClass: interop.Object;

  get pathComponentCells(): NSArray;
  set pathComponentCells(value: NSArray<interop.Object> | Array<interop.Object>);

  rectOfPathComponentCellWithFrameInView(cell: NSPathComponentCell, frame: CGRect, view: NSView): CGRect;

  pathComponentCellAtPointWithFrameInView(point: CGPoint, frame: CGRect, view: NSView): NSPathComponentCell;

  readonly clickedPathComponentCell: NSPathComponentCell;

  mouseEnteredWithFrameInView(event: NSEvent, frame: CGRect, view: NSView): void;

  mouseExitedWithFrameInView(event: NSEvent, frame: CGRect, view: NSView): void;

  doubleAction: string;

  backgroundColor: NSColor;

  placeholderString: string;

  placeholderAttributedString: NSAttributedString;

  validateMenuItem(menuItem: NSMenuItem): boolean;

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

  panelShouldEnableURL(sender: interop.Object, url: NSURL): boolean;

  panelValidateURLError(sender: interop.Object, url: NSURL, outError: interop.PointerConvertible): boolean;

  panelDidChangeToDirectoryURL(sender: interop.Object, url: NSURL | null): void;

  panelUserEnteredFilenameConfirmed(sender: interop.Object, filename: string, okFlag: boolean): string;

  panelWillExpand(sender: interop.Object, expanding: boolean): void;

  panelSelectionDidChange(sender: interop.Object | null): void;

  panelDisplayNameForType(sender: interop.Object, type: UTType): string;

  panelDidSelectType(sender: interop.Object, type: UTType | null): void;
}

declare class NSPredicateEditorRowTemplate extends NSObject implements NSCoding, NSCopying {
  matchForPredicate(predicate: NSPredicate): number;

  readonly templateViews: NSArray;

  setPredicate(predicate: NSPredicate): void;

  predicateWithSubpredicates(subpredicates: NSArray<interop.Object> | Array<interop.Object> | null): NSPredicate;

  displayableSubpredicatesOfPredicate(predicate: NSPredicate): NSArray;

  initWithLeftExpressionsRightExpressionsModifierOperatorsOptions(leftExpressions: NSArray<interop.Object> | Array<interop.Object>, rightExpressions: NSArray<interop.Object> | Array<interop.Object>, modifier: interop.Enum<typeof NSComparisonPredicateModifier>, operators: NSArray<interop.Object> | Array<interop.Object>, options: number): this;

  initWithLeftExpressionsRightExpressionAttributeTypeModifierOperatorsOptions(leftExpressions: NSArray<interop.Object> | Array<interop.Object>, attributeType: interop.Enum<typeof NSAttributeType>, modifier: interop.Enum<typeof NSComparisonPredicateModifier>, operators: NSArray<interop.Object> | Array<interop.Object>, options: number): this;

  initWithCompoundTypes(compoundTypes: NSArray<interop.Object> | Array<interop.Object>): this;

  readonly leftExpressions: NSArray;

  readonly rightExpressions: NSArray;

  readonly rightExpressionAttributeType: interop.Enum<typeof NSAttributeType>;

  readonly modifier: interop.Enum<typeof NSComparisonPredicateModifier>;

  readonly operators: NSArray;

  readonly options: number;

  readonly compoundTypes: NSArray;

  static templatesWithAttributeKeyPathsInEntityDescription(keyPaths: NSArray<interop.Object> | Array<interop.Object>, entityDescription: NSEntityDescription): NSArray;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSLevelIndicatorCell extends NSActionCell {
  initWithLevelIndicatorStyle(levelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>): this;

  levelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;

  minValue: number;

  maxValue: number;

  warningValue: number;

  criticalValue: number;

  tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;

  numberOfTickMarks: number;

  numberOfMajorTickMarks: number;

  rectOfTickMarkAtIndex(index: number): CGRect;

  tickMarkValueAtIndex(index: number): number;
}

declare class NSMenuItemBadge extends NSObject implements NSCopying {
  static updatesWithCount<This extends abstract new (...args: any) => any>(this: This, itemCount: number): InstanceType<This>;

  static newItemsWithCount<This extends abstract new (...args: any) => any>(this: This, itemCount: number): InstanceType<This>;

  static alertsWithCount<This extends abstract new (...args: any) => any>(this: This, itemCount: number): InstanceType<This>;

  initWithCountType(itemCount: number, type: interop.Enum<typeof NSMenuItemBadgeType>): this;

  initWithCount(itemCount: number): this;

  initWithString(string: string): this;

  readonly itemCount: number;

  readonly type: interop.Enum<typeof NSMenuItemBadgeType>;

  readonly stringValue: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSRuleEditor extends NSControl {
  delegate: NSRuleEditorDelegate;

  formattingStringsFilename: string;

  get formattingDictionary(): NSDictionary;
  set formattingDictionary(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  reloadCriteria(): void;

  nestingMode: interop.Enum<typeof NSRuleEditorNestingMode>;

  rowHeight: number;

  isEditable: boolean;

  canRemoveAllRows: boolean;

  readonly predicate: NSPredicate;

  reloadPredicate(): void;

  predicateForRow(row: number): NSPredicate;

  readonly numberOfRows: number;

  subrowIndexesForRow(rowIndex: number): NSIndexSet;

  criteriaForRow(row: number): NSArray;

  displayValuesForRow(row: number): NSArray;

  rowForDisplayValue(displayValue: interop.Object): number;

  rowTypeForRow(rowIndex: number): interop.Enum<typeof NSRuleEditorRowType>;

  parentRowForRow(rowIndex: number): number;

  addRow(sender: interop.Object | null): void;

  insertRowAtIndexWithTypeAsSubrowOfRowAnimate(rowIndex: number, rowType: interop.Enum<typeof NSRuleEditorRowType>, parentRow: number, shouldAnimate: boolean): void;

  setCriteriaAndDisplayValuesForRowAtIndex(criteria: NSArray<interop.Object> | Array<interop.Object>, values: NSArray<interop.Object> | Array<interop.Object>, rowIndex: number): void;

  removeRowAtIndex(rowIndex: number): void;

  removeRowsAtIndexesIncludeSubrows(rowIndexes: NSIndexSet, includeSubrows: boolean): void;

  readonly selectedRowIndexes: NSIndexSet;

  selectRowIndexesByExtendingSelection(indexes: NSIndexSet, extend: boolean): void;

  rowClass: interop.Object;

  rowTypeKeyPath: string;

  subrowsKeyPath: string;

  criteriaKeyPath: string;

  displayValuesKeyPath: string;
}

declare class NSDatePicker extends NSControl {
  datePickerStyle: interop.Enum<typeof NSDatePickerStyle>;

  isBezeled: boolean;

  isBordered: boolean;

  drawsBackground: boolean;

  backgroundColor: NSColor;

  textColor: NSColor;

  datePickerMode: interop.Enum<typeof NSDatePickerMode>;

  datePickerElements: interop.Enum<typeof NSDatePickerElementFlags>;

  calendar: NSCalendar;

  locale: NSLocale;

  timeZone: NSTimeZone;

  dateValue: NSDate;

  timeInterval: number;

  minDate: NSDate;

  maxDate: NSDate;

  presentsCalendarOverlay: boolean;

  delegate: NSDatePickerCellDelegate;
}

declare class NSTextTableBlock extends NSTextBlock {
  initWithTableStartingRowRowSpanStartingColumnColumnSpan(table: NSTextTable, row: number, rowSpan: number, col: number, colSpan: number): this;

  readonly table: NSTextTable;

  readonly startingRow: number;

  readonly rowSpan: number;

  readonly startingColumn: number;

  readonly columnSpan: number;
}

declare class NSTextBlock extends NSObject implements NSSecureCoding, NSCopying {
  init(): this;

  setValueTypeForDimension(val: number, type: interop.Enum<typeof NSTextBlockValueType>, dimension: interop.Enum<typeof NSTextBlockDimension>): void;

  valueForDimension(dimension: interop.Enum<typeof NSTextBlockDimension>): number;

  valueTypeForDimension(dimension: interop.Enum<typeof NSTextBlockDimension>): interop.Enum<typeof NSTextBlockValueType>;

  setContentWidthType(val: number, type: interop.Enum<typeof NSTextBlockValueType>): void;

  readonly contentWidth: number;

  readonly contentWidthValueType: interop.Enum<typeof NSTextBlockValueType>;

  setWidthTypeForLayerEdge(val: number, type: interop.Enum<typeof NSTextBlockValueType>, layer: interop.Enum<typeof NSTextBlockLayer>, edge: interop.Enum<typeof NSRectEdge>): void;

  setWidthTypeForLayer(val: number, type: interop.Enum<typeof NSTextBlockValueType>, layer: interop.Enum<typeof NSTextBlockLayer>): void;

  widthForLayerEdge(layer: interop.Enum<typeof NSTextBlockLayer>, edge: interop.Enum<typeof NSRectEdge>): number;

  widthValueTypeForLayerEdge(layer: interop.Enum<typeof NSTextBlockLayer>, edge: interop.Enum<typeof NSRectEdge>): interop.Enum<typeof NSTextBlockValueType>;

  verticalAlignment: interop.Enum<typeof NSTextBlockVerticalAlignment>;

  backgroundColor: NSColor;

  setBorderColorForEdge(color: NSColor | null, edge: interop.Enum<typeof NSRectEdge>): void;

  setBorderColor(color: NSColor | null): void;

  borderColorForEdge(edge: interop.Enum<typeof NSRectEdge>): NSColor;

  rectForLayoutAtPointInRectTextContainerCharacterRange(startingPoint: CGPoint, rect: CGRect, textContainer: NSTextContainer, charRange: _NSRange): CGRect;

  boundsRectForContentRectInRectTextContainerCharacterRange(contentRect: CGRect, rect: CGRect, textContainer: NSTextContainer, charRange: _NSRange): CGRect;

  drawBackgroundWithFrameInViewCharacterRangeLayoutManager(frameRect: CGRect, controlView: NSView, charRange: _NSRange, layoutManager: NSLayoutManager): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSTreeController extends NSObjectController {
  rearrangeObjects(): void;

  readonly arrangedObjects: NSTreeNode;

  childrenKeyPath: string;

  countKeyPath: string;

  leafKeyPath: string;

  get sortDescriptors(): NSArray;
  set sortDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  content: interop.Object;

  add(sender: interop.Object | null): void;

  remove(sender: interop.Object | null): void;

  addChild(sender: interop.Object | null): void;

  insert(sender: interop.Object | null): void;

  insertChild(sender: interop.Object | null): void;

  readonly canInsert: boolean;

  readonly canInsertChild: boolean;

  readonly canAddChild: boolean;

  insertObjectAtArrangedObjectIndexPath(object: interop.Object | null, indexPath: NSIndexPath): void;

  insertObjectsAtArrangedObjectIndexPaths(objects: NSArray<interop.Object> | Array<interop.Object>, indexPaths: NSArray<interop.Object> | Array<interop.Object>): void;

  removeObjectAtArrangedObjectIndexPath(indexPath: NSIndexPath): void;

  removeObjectsAtArrangedObjectIndexPaths(indexPaths: NSArray<interop.Object> | Array<interop.Object>): void;

  avoidsEmptySelection: boolean;

  preservesSelection: boolean;

  selectsInsertedObjects: boolean;

  alwaysUsesMultipleValuesMarker: boolean;

  readonly selectedObjects: NSArray;

  readonly selectionIndexPaths: NSArray;

  readonly selectionIndexPath: NSIndexPath;

  addSelectionIndexPaths(indexPaths: NSArray<interop.Object> | Array<interop.Object>): boolean;

  removeSelectionIndexPaths(indexPaths: NSArray<interop.Object> | Array<interop.Object>): boolean;

  readonly selectedNodes: NSArray;

  moveNodeToIndexPath(node: NSTreeNode, indexPath: NSIndexPath): void;

  moveNodesToIndexPath(nodes: NSArray<interop.Object> | Array<interop.Object>, startingIndexPath: NSIndexPath): void;

  childrenKeyPathForNode(node: NSTreeNode): string;

  countKeyPathForNode(node: NSTreeNode): string;

  leafKeyPathForNode(node: NSTreeNode): string;
}

declare class NSArrayController extends NSObjectController {
  rearrangeObjects(): void;

  automaticallyRearrangesObjects: boolean;

  readonly automaticRearrangementKeyPaths: NSArray;

  didChangeArrangementCriteria(): void;

  get sortDescriptors(): NSArray;
  set sortDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  filterPredicate: NSPredicate;

  clearsFilterPredicateOnInsertion: boolean;

  arrangeObjects(objects: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  readonly arrangedObjects: interop.Object;

  avoidsEmptySelection: boolean;

  preservesSelection: boolean;

  selectsInsertedObjects: boolean;

  alwaysUsesMultipleValuesMarker: boolean;

  readonly selectionIndexes: NSIndexSet;

  readonly selectionIndex: number;

  addSelectionIndexes(indexes: NSIndexSet): boolean;

  removeSelectionIndexes(indexes: NSIndexSet): boolean;

  readonly selectedObjects: NSArray;

  addSelectedObjects(objects: NSArray<interop.Object> | Array<interop.Object>): boolean;

  removeSelectedObjects(objects: NSArray<interop.Object> | Array<interop.Object>): boolean;

  add(sender: interop.Object | null): void;

  remove(sender: interop.Object | null): void;

  insert(sender: interop.Object | null): void;

  readonly canInsert: boolean;

  selectNext(sender: interop.Object | null): void;

  selectPrevious(sender: interop.Object | null): void;

  readonly canSelectNext: boolean;

  readonly canSelectPrevious: boolean;

  addObject(object: interop.Object): void;

  addObjects(objects: NSArray<interop.Object> | Array<interop.Object>): void;

  insertObjectAtArrangedObjectIndex(object: interop.Object, index: number): void;

  insertObjectsAtArrangedObjectIndexes(objects: NSArray<interop.Object> | Array<interop.Object>, indexes: NSIndexSet): void;

  removeObjectAtArrangedObjectIndex(index: number): void;

  removeObjectsAtArrangedObjectIndexes(indexes: NSIndexSet): void;

  removeObject(object: interop.Object): void;

  removeObjects(objects: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class NSSearchFieldCell extends NSTextFieldCell {
  initTextCell(string: string): this;

  initWithCoder(coder: NSCoder): this;

  searchButtonCell: NSButtonCell;

  cancelButtonCell: NSButtonCell;

  resetSearchButtonCell(): void;

  resetCancelButtonCell(): void;

  searchTextRectForBounds(rect: CGRect): CGRect;

  searchButtonRectForBounds(rect: CGRect): CGRect;

  cancelButtonRectForBounds(rect: CGRect): CGRect;

  searchMenuTemplate: NSMenu;

  sendsWholeSearchString: boolean;

  maximumRecents: number;

  get recentSearches(): NSArray;
  set recentSearches(value: NSArray<interop.Object> | Array<interop.Object>);

  recentsAutosaveName: string;

  sendsSearchStringImmediately: boolean;
}

declare class NSGlyphInfo extends NSObject implements NSCopying, NSSecureCoding {
  static glyphInfoWithCGGlyphForFontBaseString(glyph: number, font: NSFont, string: string): NSGlyphInfo;

  readonly glyphID: number;

  readonly baseString: string;

  static glyphInfoWithGlyphNameForFontBaseString(glyphName: string, font: NSFont, string: string): NSGlyphInfo;

  static glyphInfoWithGlyphForFontBaseString(glyph: number, font: NSFont, string: string): NSGlyphInfo;

  static glyphInfoWithCharacterIdentifierCollectionBaseString(cid: number, characterCollection: interop.Enum<typeof NSCharacterCollection>, string: string): NSGlyphInfo;

  readonly glyphName: string;

  readonly characterIdentifier: number;

  readonly characterCollection: interop.Enum<typeof NSCharacterCollection>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSOpenGLView extends NSView {
  static defaultPixelFormat(): NSOpenGLPixelFormat;

  initWithFramePixelFormat(frameRect: CGRect, format: NSOpenGLPixelFormat | null): this;

  openGLContext: NSOpenGLContext;

  clearGLContext(): void;

  update(): void;

  reshape(): void;

  pixelFormat: NSOpenGLPixelFormat;

  prepareOpenGL(): void;

  wantsBestResolutionOpenGLSurface: boolean;

  wantsExtendedDynamicRangeOpenGLSurface: boolean;
}

declare class NSOpenGLLayer extends CAOpenGLLayer {
  view: NSView;

  openGLPixelFormat: NSOpenGLPixelFormat;

  openGLContext: NSOpenGLContext;

  openGLPixelFormatForDisplayMask(mask: number): NSOpenGLPixelFormat;

  openGLContextForPixelFormat(pixelFormat: NSOpenGLPixelFormat): NSOpenGLContext;

  canDrawInOpenGLContextPixelFormatForLayerTimeDisplayTime(context: NSOpenGLContext, pixelFormat: NSOpenGLPixelFormat, t: number, ts: interop.PointerConvertible): boolean;

  drawInOpenGLContextPixelFormatForLayerTimeDisplayTime(context: NSOpenGLContext, pixelFormat: NSOpenGLPixelFormat, t: number, ts: interop.PointerConvertible): void;
}

declare class NSScrubberImageItemView extends NSScrubberItemView {
  readonly imageView: NSImageView;

  image: NSImage;

  imageAlignment: interop.Enum<typeof NSImageAlignment>;
}

declare class NSComboBoxCell extends NSTextFieldCell {
  hasVerticalScroller: boolean;

  intercellSpacing: CGSize;

  itemHeight: number;

  numberOfVisibleItems: number;

  isButtonBordered: boolean;

  reloadData(): void;

  noteNumberOfItemsChanged(): void;

  usesDataSource: boolean;

  scrollItemAtIndexToTop(index: number): void;

  scrollItemAtIndexToVisible(index: number): void;

  selectItemAtIndex(index: number): void;

  deselectItemAtIndex(index: number): void;

  readonly indexOfSelectedItem: number;

  readonly numberOfItems: number;

  completes: boolean;

  completedString(string: string): string;

  dataSource: NSComboBoxCellDataSource;

  addItemWithObjectValue(object: interop.Object): void;

  addItemsWithObjectValues(objects: NSArray<interop.Object> | Array<interop.Object>): void;

  insertItemWithObjectValueAtIndex(object: interop.Object, index: number): void;

  removeItemWithObjectValue(object: interop.Object): void;

  removeItemAtIndex(index: number): void;

  removeAllItems(): void;

  selectItemWithObjectValue(object: interop.Object | null): void;

  itemObjectValueAtIndex(index: number): interop.Object;

  readonly objectValueOfSelectedItem: interop.Object;

  indexOfItemWithObjectValue(object: interop.Object): number;

  readonly objectValues: NSArray;
}

declare class NSOpenGLPixelBuffer extends NSObject {
  initWithTextureTargetTextureInternalFormatTextureMaxMipMapLevelPixelsWidePixelsHigh(target: number, format: number, maxLevel: number, pixelsWide: number, pixelsHigh: number): this;

  initWithCGLPBufferObj(pbuffer: interop.PointerConvertible): this;

  readonly CGLPBufferObj: interop.Pointer;

  readonly pixelsWide: number;

  readonly pixelsHigh: number;

  readonly textureTarget: number;

  readonly textureInternalFormat: number;

  readonly textureMaxMipMapLevel: number;
}

declare class NSMenuToolbarItem extends NSToolbarItem {
  menu: NSMenu;

  showsIndicator: boolean;
}

declare class NSDrawer extends NSResponder implements NSAccessibilityElementProtocol, NSAccessibility {
  initWithContentSizePreferredEdge(contentSize: CGSize, edge: interop.Enum<typeof NSRectEdge>): this;

  parentWindow: NSWindow;

  contentView: NSView;

  preferredEdge: interop.Enum<typeof NSRectEdge>;

  delegate: NSDrawerDelegate;

  open(): void;

  openOnEdge(edge: interop.Enum<typeof NSRectEdge>): void;

  close(): void;

  toggle(sender: interop.Object | null): void;

  readonly state: number;

  readonly edge: interop.Enum<typeof NSRectEdge>;

  contentSize: CGSize;

  minContentSize: CGSize;

  maxContentSize: CGSize;

  leadingOffset: number;

  trailingOffset: number;

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

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSMovie extends NSObject implements NSCoding {
  initWithCoder(coder: NSCoder): this;

  init(): this;

  initWithMovie(movie: interop.Object): this;

  QTMovie(): interop.Object;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSCell extends NSObject implements NSCopying, NSCoding, NSUserInterfaceItemIdentification, NSAccessibilityElementProtocol, NSAccessibility {
  init(): this;

  initTextCell(string: string): this;

  initImageCell(image: NSImage | null): this;

  initWithCoder(coder: NSCoder): this;

  static readonly prefersTrackingUntilMouseUp: boolean;

  controlView: NSView;

  type: interop.Enum<typeof NSCellType>;

  state: number;

  target: interop.Object;

  action: string;

  tag: number;

  title: string;

  readonly isOpaque: boolean;

  isEnabled: boolean;

  sendActionOn(mask: interop.Enum<typeof NSEventMask>): number;

  isContinuous: boolean;

  isEditable: boolean;

  isSelectable: boolean;

  isBordered: boolean;

  isBezeled: boolean;

  isScrollable: boolean;

  isHighlighted: boolean;

  alignment: interop.Enum<typeof NSTextAlignment>;

  wraps: boolean;

  font: NSFont;

  readonly keyEquivalent: string;

  formatter: NSFormatter;

  objectValue: interop.Object;

  readonly hasValidObjectValue: boolean;

  stringValue: string;

  compare(otherCell: interop.Object): interop.Enum<typeof NSComparisonResult>;

  intValue: number;

  floatValue: number;

  doubleValue: number;

  integerValue: number;

  takeIntValueFrom(sender: interop.Object | null): void;

  takeFloatValueFrom(sender: interop.Object | null): void;

  takeDoubleValueFrom(sender: interop.Object | null): void;

  takeStringValueFrom(sender: interop.Object | null): void;

  takeObjectValueFrom(sender: interop.Object | null): void;

  takeIntegerValueFrom(sender: interop.Object | null): void;

  image: NSImage;

  controlSize: interop.Enum<typeof NSControlSize>;

  representedObject: interop.Object;

  cellAttribute(parameter: interop.Enum<typeof NSCellAttribute>): number;

  setCellAttributeTo(parameter: interop.Enum<typeof NSCellAttribute>, value: number): void;

  imageRectForBounds(rect: CGRect): CGRect;

  titleRectForBounds(rect: CGRect): CGRect;

  drawingRectForBounds(rect: CGRect): CGRect;

  readonly cellSize: CGSize;

  cellSizeForBounds(rect: CGRect): CGSize;

  highlightColorWithFrameInView(cellFrame: CGRect, controlView: NSView): NSColor;

  calcDrawInfo(rect: CGRect): void;

  setUpFieldEditorAttributes(textObj: NSText): NSText;

  drawInteriorWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  drawWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  highlightWithFrameInView(flag: boolean, cellFrame: CGRect, controlView: NSView): void;

  readonly mouseDownFlags: number;

  getPeriodicDelayInterval(delay: interop.PointerConvertible, interval: interop.PointerConvertible): void;

  startTrackingAtInView(startPoint: CGPoint, controlView: NSView): boolean;

  continueTrackingAtInView(lastPoint: CGPoint, currentPoint: CGPoint, controlView: NSView): boolean;

  stopTrackingAtInViewMouseIsUp(lastPoint: CGPoint, stopPoint: CGPoint, controlView: NSView, flag: boolean): void;

  trackMouseInRectOfViewUntilMouseUp(event: NSEvent, cellFrame: CGRect, controlView: NSView, flag: boolean): boolean;

  editWithFrameInViewEditorDelegateEvent(rect: CGRect, controlView: NSView, textObj: NSText, delegate: interop.Object | null, event: NSEvent | null): void;

  selectWithFrameInViewEditorDelegateStartLength(rect: CGRect, controlView: NSView, textObj: NSText, delegate: interop.Object | null, selStart: number, selLength: number): void;

  endEditing(textObj: NSText): void;

  resetCursorRectInView(cellFrame: CGRect, controlView: NSView): void;

  menu: NSMenu;

  menuForEventInRectOfView(event: NSEvent, cellFrame: CGRect, view: NSView): NSMenu;

  static readonly defaultMenu: NSMenu;

  sendsActionOnEndEditing: boolean;

  baseWritingDirection: interop.Enum<typeof NSWritingDirection>;

  lineBreakMode: interop.Enum<typeof NSLineBreakMode>;

  allowsUndo: boolean;

  truncatesLastVisibleLine: boolean;

  userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  fieldEditorForView(controlView: NSView): NSTextView;

  usesSingleLineMode: boolean;

  draggingImageComponentsWithFrameInView(frame: CGRect, view: NSView): NSArray;

  refusesFirstResponder: boolean;

  readonly acceptsFirstResponder: boolean;

  showsFirstResponder: boolean;

  performClick(sender: interop.Object | null): void;

  focusRingType: interop.Enum<typeof NSFocusRingType>;

  static readonly defaultFocusRingType: interop.Enum<typeof NSFocusRingType>;

  drawFocusRingMaskWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  focusRingMaskBoundsForFrameInView(cellFrame: CGRect, controlView: NSView): CGRect;

  readonly wantsNotificationForMarkedText: boolean;

  attributedStringValue: NSAttributedString;

  allowsEditingTextAttributes: boolean;

  importsGraphics: boolean;

  allowsMixedState: boolean;

  readonly nextState: number;

  hitTestForEventInRectOfView(event: NSEvent, cellFrame: CGRect, controlView: NSView): interop.Enum<typeof NSCellHitResult>;

  expansionFrameWithFrameInView(cellFrame: CGRect, view: NSView): CGRect;

  drawWithExpansionFrameInView(cellFrame: CGRect, view: NSView): void;

  backgroundStyle: interop.Enum<typeof NSBackgroundStyle>;

  readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;

  controlTint: interop.Enum<typeof NSControlTint>;

  entryType(): number;

  setEntryType(type: number): void;

  isEntryAcceptable(string: string): boolean;

  setFloatingPointFormatLeftRight(autoRange: boolean, leftDigits: number, rightDigits: number): void;

  setMnemonicLocation(location: number): void;

  mnemonicLocation(): number;

  mnemonic(): string;

  setTitleWithMnemonic(stringWithAmpersand: string): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  identifier: string;

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

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSSound extends NSObject implements NSCopying, NSSecureCoding, NSPasteboardReading, NSPasteboardWriting {
  static soundNamed(name: string): NSSound;

  initWithContentsOfURLByReference(url: NSURL, byRef: boolean): this;

  initWithContentsOfFileByReference(path: string, byRef: boolean): this;

  initWithData(data: NSData): this;

  readonly name: string;

  static canInitWithPasteboard(pasteboard: NSPasteboard): boolean;

  static readonly soundUnfilteredTypes: NSArray;

  initWithPasteboard(pasteboard: NSPasteboard): this;

  writeToPasteboard(pasteboard: NSPasteboard): void;

  play(): boolean;

  pause(): boolean;

  resume(): boolean;

  stop(): boolean;

  readonly isPlaying: boolean;

  delegate: NSSoundDelegate;

  readonly duration: number;

  volume: number;

  currentTime: number;

  loops: boolean;

  playbackDeviceIdentifier: string;

  setChannelMapping(channelMapping: NSArray<interop.Object> | Array<interop.Object>): void;

  channelMapping(): NSArray;

  static soundUnfilteredFileTypes(): NSArray;

  static soundUnfilteredPasteboardTypes(): NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  static readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  static readingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardReadingOptions>;

  initWithPasteboardPropertyListOfType(propertyList: interop.Object, type: string): this;

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

  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  writingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardWritingOptions>;

  pasteboardPropertyListForType(type: string): interop.Object;
}

declare class NSStatusItem extends NSObject {
  readonly statusBar: NSStatusBar | null;

  length: number;

  menu: NSMenu;

  readonly button: NSStatusBarButton;

  behavior: interop.Enum<typeof NSStatusItemBehavior>;

  isVisible: boolean;

  autosaveName: string;

  action: string;

  doubleAction: string;

  target: interop.Object;

  title: string;

  attributedTitle: NSAttributedString;

  image: NSImage;

  alternateImage: NSImage;

  isEnabled: boolean;

  highlightMode: boolean;

  toolTip: string;

  sendActionOn(mask: interop.Enum<typeof NSEventMask>): number;

  view: NSView;

  drawStatusBarBackgroundInRectWithHighlight(rect: CGRect, highlight: boolean): void;

  popUpStatusItemMenu(menu: NSMenu): void;
}

declare class NSSpeechRecognizer extends NSObject {
  init(): this;

  startListening(): void;

  stopListening(): void;

  delegate: NSSpeechRecognizerDelegate;

  get commands(): NSArray;
  set commands(value: NSArray<interop.Object> | Array<interop.Object>);

  displayedCommandsTitle: string;

  listensInForegroundOnly: boolean;

  blocksOtherRecognizers: boolean;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSProgressIndicator extends NSView implements NSAccessibilityProgressIndicator {
  isIndeterminate: boolean;

  controlSize: interop.Enum<typeof NSControlSize>;

  doubleValue: number;

  incrementBy(delta: number): void;

  minValue: number;

  maxValue: number;

  observedProgress: NSProgress;

  usesThreadedAnimation: boolean;

  startAnimation(sender: interop.Object | null): void;

  stopAnimation(sender: interop.Object | null): void;

  style: interop.Enum<typeof NSProgressIndicatorStyle>;

  sizeToFit(): void;

  isDisplayedWhenStopped: boolean;

  animationDelay(): number;

  setAnimationDelay(delay: number): void;

  animate(sender: interop.Object | null): void;

  isBezeled: boolean;

  controlTint: interop.Enum<typeof NSControlTint>;

  // @ts-ignore MemberDecl.tsIgnore
  accessibilityValue: NSNumber;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

declare class NSSecureTextFieldCell extends NSTextFieldCell {
  echosBullets: boolean;
}

declare class NSCollectionLayoutGroupCustomItem extends NSObject implements NSCopying {
  static customItemWithFrame<This extends abstract new (...args: any) => any>(this: This, frame: CGRect): InstanceType<This>;

  static customItemWithFrameZIndex<This extends abstract new (...args: any) => any>(this: This, frame: CGRect, zIndex: number): InstanceType<This>;

  readonly frame: CGRect;

  readonly zIndex: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSSecureTextField extends NSTextField {
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSOutlineView extends NSTableView implements NSAccessibilityOutline {
  // @ts-ignore MemberDecl.tsIgnore
  delegate: NSOutlineViewDelegate;

  // @ts-ignore MemberDecl.tsIgnore
  dataSource: NSOutlineViewDataSource;

  outlineTableColumn: NSTableColumn;

  isExpandable(item: interop.Object | null): boolean;

  numberOfChildrenOfItem(item: interop.Object | null): number;

  childOfItem(index: number, item: interop.Object | null): interop.Object;

  expandItemExpandChildren(item: interop.Object | null, expandChildren: boolean): void;

  expandItem(item: interop.Object | null): void;

  collapseItemCollapseChildren(item: interop.Object | null, collapseChildren: boolean): void;

  collapseItem(item: interop.Object | null): void;

  reloadItemReloadChildren(item: interop.Object | null, reloadChildren: boolean): void;

  reloadItem(item: interop.Object | null): void;

  parentForItem(item: interop.Object | null): interop.Object;

  childIndexForItem(item: interop.Object): number;

  itemAtRow(row: number): interop.Object;

  rowForItem(item: interop.Object | null): number;

  levelForItem(item: interop.Object | null): number;

  levelForRow(row: number): number;

  isItemExpanded(item: interop.Object | null): boolean;

  indentationPerLevel: number;

  indentationMarkerFollowsCell: boolean;

  autoresizesOutlineColumn: boolean;

  frameOfOutlineCellAtRow(row: number): CGRect;

  setDropItemDropChildIndex(item: interop.Object | null, index: number): void;

  shouldCollapseAutoExpandedItemsForDeposited(deposited: boolean): boolean;

  autosaveExpandedItems: boolean;

  insertItemsAtIndexesInParentWithAnimation(indexes: NSIndexSet, parent: interop.Object | null, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;

  removeItemsAtIndexesInParentWithAnimation(indexes: NSIndexSet, parent: interop.Object | null, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;

  moveItemAtIndexInParentToIndexInParent(fromIndex: number, oldParent: interop.Object | null, toIndex: number, newParent: interop.Object | null): void;

  userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  stronglyReferencesItems: boolean;

  accessibilityLabel: string;

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  // @ts-ignore MemberDecl.tsIgnore
  setAccessibilitySelectedRows(selectedRows: NSArray<interop.Object> | Array<interop.Object>): void;

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeaderGroup(): string;

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

declare class NSScrubberSelectionStyle extends NSObject implements NSCoding {
  static readonly outlineOverlayStyle: NSScrubberSelectionStyle;

  static readonly roundedBackgroundStyle: NSScrubberSelectionStyle;

  init(): this;

  initWithCoder(coder: NSCoder): this;

  makeSelectionView(): NSScrubberSelectionView;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSTableColumn extends NSObject implements NSCoding, NSUserInterfaceItemIdentification {
  initWithIdentifier(identifier: string): this;

  initWithCoder(coder: NSCoder): this;

  identifier: string;

  tableView: NSTableView;

  width: number;

  minWidth: number;

  maxWidth: number;

  title: string;

  headerCell: NSTableHeaderCell;

  isEditable: boolean;

  sizeToFit(): void;

  sortDescriptorPrototype: NSSortDescriptor;

  resizingMask: interop.Enum<typeof NSTableColumnResizingOptions>;

  headerToolTip: string;

  isHidden: boolean;

  setResizable(flag: boolean): void;

  isResizable(): boolean;

  dataCell: interop.Object;

  dataCellForRow(row: number): interop.Object;

  encodeWithCoder(coder: NSCoder): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSTextView extends NSText implements NSColorChanging, NSMenuItemValidation, NSUserInterfaceValidations, NSTextInputClient, NSTextLayoutOrientationProvider, NSDraggingSource, NSStandardKeyBindingResponding, NSTextInput, NSAccessibilityNavigableStaticText, NSTextContent {
  initWithFrameTextContainer(frameRect: CGRect, container: NSTextContainer | null): this;

  initWithCoder(coder: NSCoder): this;

  initWithFrame(frameRect: CGRect): this;

  initUsingTextLayoutManager(usingTextLayoutManager: boolean): this;

  static textViewUsingTextLayoutManager<This extends abstract new (...args: any) => any>(this: This, usingTextLayoutManager: boolean): InstanceType<This>;

  textContainer: NSTextContainer;

  replaceTextContainer(newContainer: NSTextContainer): void;

  textContainerInset: CGSize;

  readonly textContainerOrigin: CGPoint;

  invalidateTextContainerOrigin(): void;

  readonly layoutManager: NSLayoutManager;

  readonly textStorage: NSTextStorage;

  readonly textLayoutManager: NSTextLayoutManager;

  readonly textContentStorage: NSTextContentStorage;

  insertText(insertString: interop.Object): void;

  setConstrainedFrameSize(desiredSize: CGSize): void;

  setAlignmentRange(alignment: interop.Enum<typeof NSTextAlignment>, range: _NSRange): void;

  setBaseWritingDirectionRange(writingDirection: interop.Enum<typeof NSWritingDirection>, range: _NSRange): void;

  turnOffKerning(sender: interop.Object | null): void;

  tightenKerning(sender: interop.Object | null): void;

  loosenKerning(sender: interop.Object | null): void;

  useStandardKerning(sender: interop.Object | null): void;

  turnOffLigatures(sender: interop.Object | null): void;

  useStandardLigatures(sender: interop.Object | null): void;

  useAllLigatures(sender: interop.Object | null): void;

  raiseBaseline(sender: interop.Object | null): void;

  lowerBaseline(sender: interop.Object | null): void;

  toggleTraditionalCharacterShape(sender: interop.Object | null): void;

  outline(sender: interop.Object | null): void;

  performFindPanelAction(sender: interop.Object | null): void;

  alignJustified(sender: interop.Object | null): void;

  changeColor(sender: interop.Object | null): void;

  changeAttributes(sender: interop.Object | null): void;

  changeDocumentBackgroundColor(sender: interop.Object | null): void;

  orderFrontSpacingPanel(sender: interop.Object | null): void;

  orderFrontLinkPanel(sender: interop.Object | null): void;

  orderFrontListPanel(sender: interop.Object | null): void;

  orderFrontTablePanel(sender: interop.Object | null): void;

  rulerViewDidMoveMarker(ruler: NSRulerView, marker: NSRulerMarker): void;

  rulerViewDidRemoveMarker(ruler: NSRulerView, marker: NSRulerMarker): void;

  rulerViewDidAddMarker(ruler: NSRulerView, marker: NSRulerMarker): void;

  rulerViewShouldMoveMarker(ruler: NSRulerView, marker: NSRulerMarker): boolean;

  rulerViewShouldAddMarker(ruler: NSRulerView, marker: NSRulerMarker): boolean;

  rulerViewWillMoveMarkerToLocation(ruler: NSRulerView, marker: NSRulerMarker, location: number): number;

  rulerViewShouldRemoveMarker(ruler: NSRulerView, marker: NSRulerMarker): boolean;

  rulerViewWillAddMarkerAtLocation(ruler: NSRulerView, marker: NSRulerMarker, location: number): number;

  rulerViewHandleMouseDown(ruler: NSRulerView, event: NSEvent): void;

  setNeedsDisplayInRectAvoidAdditionalLayout(rect: CGRect, flag: boolean): void;

  readonly shouldDrawInsertionPoint: boolean;

  drawInsertionPointInRectColorTurnedOn(rect: CGRect, color: NSColor, flag: boolean): void;

  drawViewBackgroundInRect(rect: CGRect): void;

  updateRuler(): void;

  updateFontPanel(): void;

  updateDragTypeRegistration(): void;

  selectionRangeForProposedRangeGranularity(proposedCharRange: _NSRange, granularity: interop.Enum<typeof NSSelectionGranularity>): _NSRange;

  clickedOnLinkAtIndex(link: interop.Object, charIndex: number): void;

  startSpeaking(sender: interop.Object | null): void;

  stopSpeaking(sender: interop.Object | null): void;

  changeLayoutOrientation(sender: interop.Object | null): void;

  characterIndexForInsertionAtPoint(point: CGPoint): number;

  static readonly stronglyReferencesTextStorage: boolean;

  performValidatedReplacementInRangeWithAttributedString(range: _NSRange, attributedString: NSAttributedString): boolean;

  usesAdaptiveColorMappingForDarkAppearance: boolean;

  complete(sender: interop.Object | null): void;

  readonly rangeForUserCompletion: _NSRange;

  completionsForPartialWordRangeIndexOfSelectedItem(charRange: _NSRange, index: interop.PointerConvertible): NSArray;

  insertCompletionForPartialWordRangeMovementIsFinal(word: string, charRange: _NSRange, movement: number, flag: boolean): void;

  readonly writablePasteboardTypes: NSArray;

  writeSelectionToPasteboardType(pboard: NSPasteboard, type: string): boolean;

  writeSelectionToPasteboardTypes(pboard: NSPasteboard, types: NSArray<interop.Object> | Array<interop.Object>): boolean;

  readonly readablePasteboardTypes: NSArray;

  preferredPasteboardTypeFromArrayRestrictedToTypesFromArray(availableTypes: NSArray<interop.Object> | Array<interop.Object>, allowedTypes: NSArray<interop.Object> | Array<interop.Object> | null): string;

  readSelectionFromPasteboardType(pboard: NSPasteboard, type: string): boolean;

  readSelectionFromPasteboard(pboard: NSPasteboard): boolean;

  static registerForServices(): void;

  validRequestorForSendTypeReturnType(sendType: string | null, returnType: string | null): interop.Object;

  pasteAsPlainText(sender: interop.Object | null): void;

  pasteAsRichText(sender: interop.Object | null): void;

  dragSelectionWithEventOffsetSlideBack(event: NSEvent, mouseOffset: CGSize, slideBack: boolean): boolean;

  dragImageForSelectionWithEventOrigin(event: NSEvent, origin: interop.PointerConvertible): NSImage;

  readonly acceptableDragTypes: NSArray;

  dragOperationForDraggingInfoType(dragInfo: NSDraggingInfo, type: string): interop.Enum<typeof NSDragOperation>;

  cleanUpAfterDragOperation(): void;

  get selectedRanges(): NSArray;
  set selectedRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  setSelectedRangesAffinityStillSelecting(ranges: NSArray<interop.Object> | Array<interop.Object>, affinity: interop.Enum<typeof NSSelectionAffinity>, stillSelectingFlag: boolean): void;

  setSelectedRangeAffinityStillSelecting(charRange: _NSRange, affinity: interop.Enum<typeof NSSelectionAffinity>, stillSelectingFlag: boolean): void;

  readonly selectionAffinity: interop.Enum<typeof NSSelectionAffinity>;

  selectionGranularity: interop.Enum<typeof NSSelectionGranularity>;

  get selectedTextAttributes(): NSDictionary;
  set selectedTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  insertionPointColor: NSColor;

  updateInsertionPointStateAndRestartTimer(restartFlag: boolean): void;

  get markedTextAttributes(): NSDictionary;
  set markedTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get linkTextAttributes(): NSDictionary;
  set linkTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  displaysLinkToolTips: boolean;

  acceptsGlyphInfo: boolean;

  usesRuler: boolean;

  usesInspectorBar: boolean;

  isContinuousSpellCheckingEnabled: boolean;

  toggleContinuousSpellChecking(sender: interop.Object | null): void;

  readonly spellCheckerDocumentTag: number;

  isGrammarCheckingEnabled: boolean;

  toggleGrammarChecking(sender: interop.Object | null): void;

  setSpellingStateRange(value: number, charRange: _NSRange): void;

  get typingAttributes(): NSDictionary;
  set typingAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  shouldChangeTextInRangesReplacementStrings(affectedRanges: NSArray<interop.Object> | Array<interop.Object>, replacementStrings: NSArray<interop.Object> | Array<interop.Object> | null): boolean;

  readonly rangesForUserTextChange: NSArray;

  readonly rangesForUserCharacterAttributeChange: NSArray;

  readonly rangesForUserParagraphAttributeChange: NSArray;

  shouldChangeTextInRangeReplacementString(affectedCharRange: _NSRange, replacementString: string | null): boolean;

  didChangeText(): void;

  readonly rangeForUserTextChange: _NSRange;

  readonly rangeForUserCharacterAttributeChange: _NSRange;

  readonly rangeForUserParagraphAttributeChange: _NSRange;

  allowsDocumentBackgroundColorChange: boolean;

  defaultParagraphStyle: NSParagraphStyle;

  allowsUndo: boolean;

  breakUndoCoalescing(): void;

  readonly isCoalescingUndo: boolean;

  allowsImageEditing: boolean;

  showFindIndicatorForRange(charRange: _NSRange): void;

  usesRolloverButtonForSelection: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  delegate: NSTextViewDelegate;

  isEditable: boolean;

  isSelectable: boolean;

  isRichText: boolean;

  importsGraphics: boolean;

  drawsBackground: boolean;

  backgroundColor: NSColor;

  isFieldEditor: boolean;

  usesFontPanel: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  isRulerVisible: boolean;

  setSelectedRange(charRange: _NSRange): void;

  get allowedInputSourceLocales(): NSArray;
  set allowedInputSourceLocales(value: NSArray<interop.Object> | Array<interop.Object>);

  readonly isWritingToolsActive: boolean;

  writingToolsBehavior: interop.Enum<typeof NSWritingToolsBehavior>;

  allowedWritingToolsResultOptions: interop.Enum<typeof NSWritingToolsResultOptions>;

  smartInsertDeleteEnabled: boolean;

  smartDeleteRangeForProposedRange(proposedCharRange: _NSRange): _NSRange;

  toggleSmartInsertDelete(sender: interop.Object | null): void;

  smartInsertForStringReplacingRangeBeforeStringAfterString(pasteString: string, charRangeToReplace: _NSRange, beforeString: interop.PointerConvertible, afterString: interop.PointerConvertible): void;

  smartInsertBeforeStringForStringReplacingRange(pasteString: string, charRangeToReplace: _NSRange): string;

  smartInsertAfterStringForStringReplacingRange(pasteString: string, charRangeToReplace: _NSRange): string;

  isAutomaticQuoteSubstitutionEnabled: boolean;

  toggleAutomaticQuoteSubstitution(sender: interop.Object | null): void;

  isAutomaticLinkDetectionEnabled: boolean;

  toggleAutomaticLinkDetection(sender: interop.Object | null): void;

  isAutomaticDataDetectionEnabled: boolean;

  toggleAutomaticDataDetection(sender: interop.Object | null): void;

  isAutomaticDashSubstitutionEnabled: boolean;

  toggleAutomaticDashSubstitution(sender: interop.Object | null): void;

  isAutomaticTextReplacementEnabled: boolean;

  toggleAutomaticTextReplacement(sender: interop.Object | null): void;

  isAutomaticSpellingCorrectionEnabled: boolean;

  toggleAutomaticSpellingCorrection(sender: interop.Object | null): void;

  enabledTextCheckingTypes: number;

  checkTextInRangeTypesOptions(range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  handleTextCheckingResultsForRangeTypesOptionsOrthographyWordCount(results: NSArray<interop.Object> | Array<interop.Object>, range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, orthography: NSOrthography, wordCount: number): void;

  orderFrontSubstitutionsPanel(sender: interop.Object | null): void;

  checkTextInSelection(sender: interop.Object | null): void;

  checkTextInDocument(sender: interop.Object | null): void;

  usesFindPanel: boolean;

  usesFindBar: boolean;

  isIncrementalSearchingEnabled: boolean;

  inlinePredictionType: interop.Enum<typeof NSTextInputTraitType>;

  mathExpressionCompletionType: interop.Enum<typeof NSTextInputTraitType>;

  toggleQuickLookPreviewPanel(sender: interop.Object | null): void;

  quickLookPreviewableItemsInRanges(ranges: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  updateQuickLookPreviewPanel(): void;

  orderFrontSharingServicePicker(sender: interop.Object | null): void;

  isAutomaticTextCompletionEnabled: boolean;

  toggleAutomaticTextCompletion(sender: interop.Object | null): void;

  allowsCharacterPickerTouchBarItem: boolean;

  updateTouchBarItemIdentifiers(): void;

  updateTextTouchBarItems(): void;

  updateCandidates(): void;

  readonly candidateListTouchBarItem: NSCandidateListTouchBarItem;

  static scrollableTextView(): NSScrollView;

  static fieldEditor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static scrollableDocumentContentTextView(): NSScrollView;

  static scrollablePlainDocumentContentTextView(): NSScrollView;

  get textHighlightAttributes(): NSDictionary;
  set textHighlightAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  drawTextHighlightBackgroundForTextRangeOrigin(textRange: NSTextRange, origin: CGPoint): void;

  highlight(sender: interop.Object | null): void;

  toggleBaseWritingDirection(sender: interop.Object | null): void;

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

  validateMenuItem(menuItem: NSMenuItem): boolean;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  insertTextReplacementRange(string: interop.Object, replacementRange: _NSRange): void;

  doCommandBySelector(selector: string): void;

  setMarkedTextSelectedRangeReplacementRange(string: interop.Object, selectedRange: _NSRange, replacementRange: _NSRange): void;

  unmarkText(): void;

  selectedRange: _NSRange;

  markedRange(): _NSRange;

  hasMarkedText(): boolean;

  attributedSubstringForProposedRangeActualRange(range: _NSRange, actualRange: interop.PointerConvertible): NSAttributedString;

  validAttributesForMarkedText(): NSArray;

  firstRectForCharacterRangeActualRange(range: _NSRange, actualRange: interop.PointerConvertible): CGRect;

  characterIndexForPoint(point: CGPoint): number;

  attributedString(): NSAttributedString;

  fractionOfDistanceThroughGlyphForPoint(point: CGPoint): number;

  baselineDeltaForCharacterAtIndex(anIndex: number): number;

  windowLevel(): number;

  drawsVerticallyForCharacterAtIndex(charIndex: number): boolean;

  preferredTextAccessoryPlacement(): interop.Enum<typeof NSTextCursorAccessoryPlacement>;

  readonly unionRectInVisibleSelectedRange: CGRect;

  readonly documentVisibleRect: CGRect;

  readonly supportsAdaptiveImageGlyph: boolean;

  insertAdaptiveImageGlyphReplacementRange(adaptiveImageGlyph: NSAdaptiveImageGlyph, replacementRange: _NSRange): void;

  readonly layoutOrientation: interop.Enum<typeof NSTextLayoutOrientation>;

  draggingSessionSourceOperationMaskForDraggingContext(session: NSDraggingSession, context: interop.Enum<typeof NSDraggingContext>): interop.Enum<typeof NSDragOperation>;

  draggingSessionWillBeginAtPoint(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionMovedToPoint(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionEndedAtPointOperation(session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  ignoreModifierKeysForDraggingSession(session: NSDraggingSession): boolean;

  moveForward(sender: interop.Object | null): void;

  moveRight(sender: interop.Object | null): void;

  moveBackward(sender: interop.Object | null): void;

  moveLeft(sender: interop.Object | null): void;

  moveUp(sender: interop.Object | null): void;

  moveDown(sender: interop.Object | null): void;

  moveWordForward(sender: interop.Object | null): void;

  moveWordBackward(sender: interop.Object | null): void;

  moveToBeginningOfLine(sender: interop.Object | null): void;

  moveToEndOfLine(sender: interop.Object | null): void;

  moveToBeginningOfParagraph(sender: interop.Object | null): void;

  moveToEndOfParagraph(sender: interop.Object | null): void;

  moveToEndOfDocument(sender: interop.Object | null): void;

  moveToBeginningOfDocument(sender: interop.Object | null): void;

  pageDown(sender: interop.Object | null): void;

  pageUp(sender: interop.Object | null): void;

  centerSelectionInVisibleArea(sender: interop.Object | null): void;

  moveBackwardAndModifySelection(sender: interop.Object | null): void;

  moveForwardAndModifySelection(sender: interop.Object | null): void;

  moveWordForwardAndModifySelection(sender: interop.Object | null): void;

  moveWordBackwardAndModifySelection(sender: interop.Object | null): void;

  moveUpAndModifySelection(sender: interop.Object | null): void;

  moveDownAndModifySelection(sender: interop.Object | null): void;

  moveToBeginningOfLineAndModifySelection(sender: interop.Object | null): void;

  moveToEndOfLineAndModifySelection(sender: interop.Object | null): void;

  moveToBeginningOfParagraphAndModifySelection(sender: interop.Object | null): void;

  moveToEndOfParagraphAndModifySelection(sender: interop.Object | null): void;

  moveToEndOfDocumentAndModifySelection(sender: interop.Object | null): void;

  moveToBeginningOfDocumentAndModifySelection(sender: interop.Object | null): void;

  pageDownAndModifySelection(sender: interop.Object | null): void;

  pageUpAndModifySelection(sender: interop.Object | null): void;

  moveParagraphForwardAndModifySelection(sender: interop.Object | null): void;

  moveParagraphBackwardAndModifySelection(sender: interop.Object | null): void;

  moveWordRight(sender: interop.Object | null): void;

  moveWordLeft(sender: interop.Object | null): void;

  moveRightAndModifySelection(sender: interop.Object | null): void;

  moveLeftAndModifySelection(sender: interop.Object | null): void;

  moveWordRightAndModifySelection(sender: interop.Object | null): void;

  moveWordLeftAndModifySelection(sender: interop.Object | null): void;

  moveToLeftEndOfLine(sender: interop.Object | null): void;

  moveToRightEndOfLine(sender: interop.Object | null): void;

  moveToLeftEndOfLineAndModifySelection(sender: interop.Object | null): void;

  moveToRightEndOfLineAndModifySelection(sender: interop.Object | null): void;

  scrollPageUp(sender: interop.Object | null): void;

  scrollPageDown(sender: interop.Object | null): void;

  scrollLineUp(sender: interop.Object | null): void;

  scrollLineDown(sender: interop.Object | null): void;

  scrollToBeginningOfDocument(sender: interop.Object | null): void;

  scrollToEndOfDocument(sender: interop.Object | null): void;

  transpose(sender: interop.Object | null): void;

  transposeWords(sender: interop.Object | null): void;

  selectAll(sender: interop.Object | null): void;

  selectParagraph(sender: interop.Object | null): void;

  selectLine(sender: interop.Object | null): void;

  selectWord(sender: interop.Object | null): void;

  indent(sender: interop.Object | null): void;

  insertTab(sender: interop.Object | null): void;

  insertBacktab(sender: interop.Object | null): void;

  insertNewline(sender: interop.Object | null): void;

  insertParagraphSeparator(sender: interop.Object | null): void;

  insertNewlineIgnoringFieldEditor(sender: interop.Object | null): void;

  insertTabIgnoringFieldEditor(sender: interop.Object | null): void;

  insertLineBreak(sender: interop.Object | null): void;

  insertContainerBreak(sender: interop.Object | null): void;

  insertSingleQuoteIgnoringSubstitution(sender: interop.Object | null): void;

  insertDoubleQuoteIgnoringSubstitution(sender: interop.Object | null): void;

  changeCaseOfLetter(sender: interop.Object | null): void;

  uppercaseWord(sender: interop.Object | null): void;

  lowercaseWord(sender: interop.Object | null): void;

  capitalizeWord(sender: interop.Object | null): void;

  deleteForward(sender: interop.Object | null): void;

  deleteBackward(sender: interop.Object | null): void;

  deleteBackwardByDecomposingPreviousCharacter(sender: interop.Object | null): void;

  deleteWordForward(sender: interop.Object | null): void;

  deleteWordBackward(sender: interop.Object | null): void;

  deleteToBeginningOfLine(sender: interop.Object | null): void;

  deleteToEndOfLine(sender: interop.Object | null): void;

  deleteToBeginningOfParagraph(sender: interop.Object | null): void;

  deleteToEndOfParagraph(sender: interop.Object | null): void;

  yank(sender: interop.Object | null): void;

  setMark(sender: interop.Object | null): void;

  deleteToMark(sender: interop.Object | null): void;

  selectToMark(sender: interop.Object | null): void;

  swapWithMark(sender: interop.Object | null): void;

  cancelOperation(sender: interop.Object | null): void;

  makeBaseWritingDirectionNatural(sender: interop.Object | null): void;

  makeBaseWritingDirectionLeftToRight(sender: interop.Object | null): void;

  makeBaseWritingDirectionRightToLeft(sender: interop.Object | null): void;

  makeTextWritingDirectionNatural(sender: interop.Object | null): void;

  makeTextWritingDirectionLeftToRight(sender: interop.Object | null): void;

  makeTextWritingDirectionRightToLeft(sender: interop.Object | null): void;

  quickLookPreviewItems(sender: interop.Object | null): void;

  showContextMenuForSelection(sender: interop.Object | null): void;

  setMarkedTextSelectedRange(string: interop.Object, selRange: _NSRange): void;

  conversationIdentifier(): number;

  attributedSubstringFromRange(range: _NSRange): NSAttributedString;

  firstRectForCharacterRange(range: _NSRange): CGRect;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityLineForIndex(index: number): number;

  // @ts-ignore MemberDecl.tsIgnore
  accessibilityRangeForLine(lineNumber: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  // @ts-ignore MemberDecl.tsIgnore
  accessibilityValue: string;

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

  contentType: string;
}

declare class NSTextAttachmentViewProvider extends NSObject {
  initWithTextAttachmentParentViewTextLayoutManagerLocation(textAttachment: NSTextAttachment, parentView: NSView | null, textLayoutManager: NSTextLayoutManager | null, location: NSTextLocation): this;

  readonly textAttachment: NSTextAttachment | null;

  readonly textLayoutManager: NSTextLayoutManager;

  readonly location: NSTextLocation;

  view: NSView;

  loadView(): void;

  tracksTextAttachmentViewBounds: boolean;

  attachmentBoundsForAttributesLocationTextContainerProposedLineFragmentPosition(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, location: NSTextLocation, textContainer: NSTextContainer | null, proposedLineFragment: CGRect, position: CGPoint): CGRect;
}

declare class NSTextAttachment extends NSObject implements NSTextAttachmentLayout, NSSecureCoding {
  initWithDataOfType(contentData: NSData | null, uti: string | null): this;

  initWithFileWrapper(fileWrapper: NSFileWrapper | null): this;

  contents: NSData;

  fileType: string;

  image: NSImage;

  bounds: CGRect;

  fileWrapper: NSFileWrapper;

  attachmentCell: NSTextAttachmentCell;

  lineLayoutPadding: number;

  static textAttachmentViewProviderClassForFileType(fileType: string): interop.Object;

  static registerTextAttachmentViewProviderClassForFileType(textAttachmentViewProviderClass: interop.Object, fileType: string): void;

  allowsTextAttachmentView: boolean;

  readonly usesTextAttachmentView: boolean;

  imageForBoundsAttributesLocationTextContainer(bounds: CGRect, attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, location: NSTextLocation, textContainer: NSTextContainer | null): NSImage;

  attachmentBoundsForAttributesLocationTextContainerProposedLineFragmentPosition(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, location: NSTextLocation, textContainer: NSTextContainer | null, proposedLineFragment: CGRect, position: CGPoint): CGRect;

  viewProviderForParentViewLocationTextContainer(parentView: NSView | null, location: NSTextLocation, textContainer: NSTextContainer | null): NSTextAttachmentViewProvider;

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

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSInputManager extends NSObject implements NSTextInput {
  static currentInputManager(): NSInputManager;

  static cycleToNextInputLanguage(sender: interop.Object | null): void;

  static cycleToNextInputServerInLanguage(sender: interop.Object | null): void;

  initWithNameHost(inputServerName: string, hostName: string): this;

  localizedInputManagerName(): string;

  markedTextAbandoned(cli: interop.Object): void;

  markedTextSelectionChangedClient(newSel: _NSRange, cli: interop.Object): void;

  wantsToInterpretAllKeystrokes(): boolean;

  language(): string;

  image(): NSImage;

  server(): NSInputServer;

  wantsToHandleMouseEvents(): boolean;

  handleMouseEvent(mouseEvent: NSEvent): boolean;

  wantsToDelayTextChangeNotifications(): boolean;

  insertText(string: interop.Object): void;

  doCommandBySelector(selector: string): void;

  setMarkedTextSelectedRange(string: interop.Object, selRange: _NSRange): void;

  unmarkText(): void;

  hasMarkedText(): boolean;

  conversationIdentifier(): number;

  attributedSubstringFromRange(range: _NSRange): NSAttributedString;

  markedRange(): _NSRange;

  selectedRange: _NSRange;

  firstRectForCharacterRange(range: _NSRange): CGRect;

  characterIndexForPoint(point: CGPoint): number;

  validAttributesForMarkedText(): NSArray;
}

declare class NSComboButton extends NSControl {
  static comboButtonWithTitleMenuTargetAction<This extends abstract new (...args: any) => any>(this: This, title: string, menu: NSMenu | null, target: interop.Object | null, action: string | null): InstanceType<This>;

  static comboButtonWithImageMenuTargetAction<This extends abstract new (...args: any) => any>(this: This, image: NSImage, menu: NSMenu | null, target: interop.Object | null, action: string | null): InstanceType<This>;

  static comboButtonWithTitleImageMenuTargetAction<This extends abstract new (...args: any) => any>(this: This, title: string, image: NSImage, menu: NSMenu | null, target: interop.Object | null, action: string | null): InstanceType<This>;

  title: string;

  image: NSImage;

  imageScaling: interop.Enum<typeof NSImageScaling>;

  menu: NSMenu;

  style: interop.Enum<typeof NSComboButtonStyle>;
}

declare class NSTrackingSeparatorToolbarItem extends NSToolbarItem {
  static trackingSeparatorToolbarItemWithIdentifierSplitViewDividerIndex<This extends abstract new (...args: any) => any>(this: This, identifier: string, splitView: NSSplitView, dividerIndex: number): InstanceType<This>;

  splitView: NSSplitView;

  dividerIndex: number;
}

declare class NSToolbarItem extends NSObject implements NSCopying {
  initWithItemIdentifier(itemIdentifier: string): this;

  readonly itemIdentifier: string;

  readonly toolbar: NSToolbar;

  label: string;

  paletteLabel: string;

  possibleLabels: NSSet;

  toolTip: string;

  menuFormRepresentation: NSMenuItem;

  tag: number;

  target: interop.Object;

  action: string;

  isEnabled: boolean;

  image: NSImage;

  title: string;

  isBordered: boolean;

  isNavigational: boolean;

  view: NSView;

  readonly isVisible: boolean;

  isHidden: boolean;

  minSize: CGSize;

  maxSize: CGSize;

  visibilityPriority: number;

  validate(): void;

  autovalidates: boolean;

  readonly allowsDuplicatesInToolbar: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSTokenField extends NSTextField {
  // @ts-ignore MemberDecl.tsIgnore
  delegate: NSTokenFieldDelegate;

  tokenStyle: interop.Enum<typeof NSTokenStyle>;

  completionDelay: number;

  static readonly defaultCompletionDelay: number;

  tokenizingCharacterSet: NSCharacterSet;

  static readonly defaultTokenizingCharacterSet: NSCharacterSet;
}

declare class NSSharingServicePickerToolbarItem extends NSToolbarItem {
  delegate: NSSharingServicePickerToolbarItemDelegate | null;
}

declare class NSPasteboardItem extends NSObject implements NSPasteboardWriting, NSPasteboardReading {
  readonly types: NSArray;

  availableTypeFromArray(types: NSArray<interop.Object> | Array<interop.Object>): string;

  setDataProviderForTypes(dataProvider: NSPasteboardItemDataProvider, types: NSArray<interop.Object> | Array<interop.Object>): boolean;

  setDataForType(data: NSData, type: string): boolean;

  setStringForType(string: string, type: string): boolean;

  setPropertyListForType(propertyList: interop.Object, type: string): boolean;

  dataForType(type: string): NSData;

  stringForType(type: string): string;

  propertyListForType(type: string): interop.Object;

  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  writingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardWritingOptions>;

  pasteboardPropertyListForType(type: string): interop.Object;

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

  static readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  static readingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardReadingOptions>;

  initWithPasteboardPropertyListOfType(propertyList: interop.Object, type: string): this;
}

declare class NSGlyphGenerator extends NSObject {
  generateGlyphsForGlyphStorageDesiredNumberOfCharactersGlyphIndexCharacterIndex(glyphStorage: NSGlyphStorage, nChars: number, glyphIndex: interop.PointerConvertible, charIndex: interop.PointerConvertible): void;

  static readonly sharedGlyphGenerator: NSGlyphGenerator;
}

declare class NSImageCell extends NSCell implements NSCopying, NSCoding {
  imageAlignment: interop.Enum<typeof NSImageAlignment>;

  imageScaling: interop.Enum<typeof NSImageScaling>;

  imageFrameStyle: interop.Enum<typeof NSImageFrameStyle>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSStepper extends NSControl implements NSAccessibilityStepper {
  minValue: number;

  maxValue: number;

  increment: number;

  valueWraps: boolean;

  autorepeat: boolean;

  accessibilityLabel: string;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityValue: interop.Object;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

declare class NSTextInsertionIndicator extends NSView {
  displayMode: interop.Enum<typeof NSTextInsertionIndicatorDisplayMode>;

  color: NSColor;

  automaticModeOptions: interop.Enum<typeof NSTextInsertionIndicatorAutomaticModeOptions>;

  effectsViewInserter: (p1: NSView) => void;
}

declare class NSPreviewRepresentingActivityItem extends NSObject implements NSPreviewRepresentableActivityItem {
  initWithItemTitleImageIcon(item: interop.Object, title: string | null, image: NSImage | null, icon: NSImage | null): this;

  initWithItemTitleImageProviderIconProvider(item: interop.Object, title: string | null, imageProvider: NSItemProvider | null, iconProvider: NSItemProvider | null): this;

  readonly item: interop.Object;

  readonly title: string;

  readonly imageProvider: NSItemProvider;

  readonly iconProvider: NSItemProvider;

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

declare class NSGridCell extends NSObject implements NSCoding {
  contentView: NSView;

  static readonly emptyContentView: NSView;

  readonly row: NSGridRow | null;

  readonly column: NSGridColumn | null;

  xPlacement: interop.Enum<typeof NSGridCellPlacement>;

  yPlacement: interop.Enum<typeof NSGridCellPlacement>;

  rowAlignment: interop.Enum<typeof NSGridRowAlignment>;

  get customPlacementConstraints(): NSArray;
  set customPlacementConstraints(value: NSArray<interop.Object> | Array<interop.Object>);

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSPopUpButton extends NSButton {
  static popUpButtonWithMenuTargetAction<This extends abstract new (...args: any) => any>(this: This, menu: NSMenu, target: interop.Object | null, action: string | null): InstanceType<This>;

  static pullDownButtonWithTitleMenu<This extends abstract new (...args: any) => any>(this: This, title: string, menu: NSMenu): InstanceType<This>;

  static pullDownButtonWithImageMenu<This extends abstract new (...args: any) => any>(this: This, image: NSImage, menu: NSMenu): InstanceType<This>;

  static pullDownButtonWithTitleImageMenu<This extends abstract new (...args: any) => any>(this: This, title: string, image: NSImage, menu: NSMenu): InstanceType<This>;

  initWithFramePullsDown(buttonFrame: CGRect, flag: boolean): this;

  menu: NSMenu;

  pullsDown: boolean;

  autoenablesItems: boolean;

  preferredEdge: interop.Enum<typeof NSRectEdge>;

  usesItemFromMenu: boolean;

  altersStateOfSelectedItem: boolean;

  addItemWithTitle(title: string): void;

  addItemsWithTitles(itemTitles: NSArray<interop.Object> | Array<interop.Object>): void;

  insertItemWithTitleAtIndex(title: string, index: number): void;

  removeItemWithTitle(title: string): void;

  removeItemAtIndex(index: number): void;

  removeAllItems(): void;

  readonly itemArray: NSArray;

  readonly numberOfItems: number;

  indexOfItem(item: NSMenuItem): number;

  indexOfItemWithTitle(title: string): number;

  indexOfItemWithTag(tag: number): number;

  indexOfItemWithRepresentedObject(obj: interop.Object | null): number;

  indexOfItemWithTargetAndAction(target: interop.Object | null, actionSelector: string | null): number;

  itemAtIndex(index: number): NSMenuItem;

  itemWithTitle(title: string): NSMenuItem;

  readonly lastItem: NSMenuItem;

  selectItem(item: NSMenuItem | null): void;

  selectItemAtIndex(index: number): void;

  selectItemWithTitle(title: string): void;

  selectItemWithTag(tag: number): boolean;

  // @ts-ignore MemberDecl.tsIgnore
  setTitle(string: string): void;

  readonly selectedItem: NSMenuItem;

  readonly indexOfSelectedItem: number;

  readonly selectedTag: number;

  synchronizeTitleAndSelectedItem(): void;

  itemTitleAtIndex(index: number): string;

  readonly itemTitles: NSArray;

  readonly titleOfSelectedItem: string;
}

declare class NSGridRow extends NSObject implements NSCoding {
  readonly gridView: NSGridView | null;

  readonly numberOfCells: number;

  cellAtIndex(index: number): NSGridCell;

  yPlacement: interop.Enum<typeof NSGridCellPlacement>;

  rowAlignment: interop.Enum<typeof NSGridRowAlignment>;

  height: number;

  topPadding: number;

  bottomPadding: number;

  isHidden: boolean;

  mergeCellsInRange(range: _NSRange): void;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSScrubberArrangedView extends NSView {
  isSelected: boolean;

  isHighlighted: boolean;

  applyLayoutAttributes(layoutAttributes: NSScrubberLayoutAttributes): void;
}

declare class NSGridView extends NSView {
  initWithFrame(frameRect: CGRect): this;

  initWithCoder(coder: NSCoder): this;

  static gridViewWithNumberOfColumnsRows<This extends abstract new (...args: any) => any>(this: This, columnCount: number, rowCount: number): InstanceType<This>;

  static gridViewWithViews<This extends abstract new (...args: any) => any>(this: This, rows: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  readonly numberOfRows: number;

  readonly numberOfColumns: number;

  rowAtIndex(index: number): NSGridRow;

  indexOfRow(row: NSGridRow): number;

  columnAtIndex(index: number): NSGridColumn;

  indexOfColumn(column: NSGridColumn): number;

  cellAtColumnIndexRowIndex(columnIndex: number, rowIndex: number): NSGridCell;

  cellForView(view: NSView): NSGridCell;

  addRowWithViews(views: NSArray<interop.Object> | Array<interop.Object>): NSGridRow;

  insertRowAtIndexWithViews(index: number, views: NSArray<interop.Object> | Array<interop.Object>): NSGridRow;

  moveRowAtIndexToIndex(fromIndex: number, toIndex: number): void;

  removeRowAtIndex(index: number): void;

  addColumnWithViews(views: NSArray<interop.Object> | Array<interop.Object>): NSGridColumn;

  insertColumnAtIndexWithViews(index: number, views: NSArray<interop.Object> | Array<interop.Object>): NSGridColumn;

  moveColumnAtIndexToIndex(fromIndex: number, toIndex: number): void;

  removeColumnAtIndex(index: number): void;

  xPlacement: interop.Enum<typeof NSGridCellPlacement>;

  yPlacement: interop.Enum<typeof NSGridCellPlacement>;

  rowAlignment: interop.Enum<typeof NSGridRowAlignment>;

  rowSpacing: number;

  columnSpacing: number;

  mergeCellsInHorizontalRangeVerticalRange(hRange: _NSRange, vRange: _NSRange): void;
}

declare class NSSlider extends NSControl implements NSAccessibilitySlider {
  sliderType: interop.Enum<typeof NSSliderType>;

  minValue: number;

  maxValue: number;

  altIncrementValue: number;

  readonly knobThickness: number;

  acceptsFirstMouse(event: NSEvent | null): boolean;

  isVertical: boolean;

  trackFillColor: NSColor;

  numberOfTickMarks: number;

  tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;

  allowsTickMarkValuesOnly: boolean;

  tickMarkValueAtIndex(index: number): number;

  rectOfTickMarkAtIndex(index: number): CGRect;

  indexOfTickMarkAtPoint(point: CGPoint): number;

  closestTickMarkValueToValue(value: number): number;

  static sliderWithTargetAction<This extends abstract new (...args: any) => any>(this: This, target: interop.Object | null, action: string | null): InstanceType<This>;

  static sliderWithValueMinValueMaxValueTargetAction<This extends abstract new (...args: any) => any>(this: This, value: number, minValue: number, maxValue: number, target: interop.Object | null, action: string | null): InstanceType<This>;

  setTitleCell(cell: NSCell): void;

  titleCell(): interop.Object;

  setTitleColor(newColor: NSColor): void;

  titleColor(): NSColor;

  setTitleFont(fontObj: NSFont): void;

  titleFont(): NSFont;

  title(): string;

  setTitle(string: string): void;

  setImage(backgroundImage: NSImage): void;

  image(): NSImage;

  accessibilityLabel: string;

  accessibilityValue: interop.Object;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

declare class NSStepperCell extends NSActionCell {
  minValue: number;

  maxValue: number;

  increment: number;

  valueWraps: boolean;

  autorepeat: boolean;
}

declare class NSSharingCollaborationModeRestriction extends NSObject implements NSSecureCoding, NSCopying {
  readonly disabledMode: interop.Enum<typeof NSSharingCollaborationMode>;

  readonly alertTitle: string;

  readonly alertMessage: string;

  readonly alertDismissButtonTitle: string;

  readonly alertRecoverySuggestionButtonTitle: string;

  readonly alertRecoverySuggestionButtonLaunchURL: NSURL;

  initWithDisabledMode(disabledMode: interop.Enum<typeof NSSharingCollaborationMode>): this;

  initWithDisabledModeAlertTitleAlertMessage(disabledMode: interop.Enum<typeof NSSharingCollaborationMode>, alertTitle: string, alertMessage: string): this;

  initWithDisabledModeAlertTitleAlertMessageAlertDismissButtonTitle(disabledMode: interop.Enum<typeof NSSharingCollaborationMode>, alertTitle: string, alertMessage: string, alertDismissButtonTitle: string): this;

  initWithDisabledModeAlertTitleAlertMessageAlertDismissButtonTitleAlertRecoverySuggestionButtonTitleAlertRecoverySuggestionButtonLaunchURL(disabledMode: interop.Enum<typeof NSSharingCollaborationMode>, alertTitle: string, alertMessage: string, alertDismissButtonTitle: string, alertRecoverySuggestionButtonTitle: string, alertRecoverySuggestionButtonLaunchURL: NSURL): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSSegmentedCell extends NSActionCell {
  segmentCount: number;

  selectedSegment: number;

  selectSegmentWithTag(tag: number): boolean;

  makeNextSegmentKey(): void;

  makePreviousSegmentKey(): void;

  trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>;

  setWidthForSegment(width: number, segment: number): void;

  widthForSegment(segment: number): number;

  setImageForSegment(image: NSImage | null, segment: number): void;

  imageForSegment(segment: number): NSImage;

  setImageScalingForSegment(scaling: interop.Enum<typeof NSImageScaling>, segment: number): void;

  imageScalingForSegment(segment: number): interop.Enum<typeof NSImageScaling>;

  setLabelForSegment(label: string, segment: number): void;

  labelForSegment(segment: number): string;

  setSelectedForSegment(selected: boolean, segment: number): void;

  isSelectedForSegment(segment: number): boolean;

  setEnabledForSegment(enabled: boolean, segment: number): void;

  isEnabledForSegment(segment: number): boolean;

  setMenuForSegment(menu: NSMenu | null, segment: number): void;

  menuForSegment(segment: number): NSMenu;

  setToolTipForSegment(toolTip: string | null, segment: number): void;

  toolTipForSegment(segment: number): string;

  setTagForSegment(tag: number, segment: number): void;

  tagForSegment(segment: number): number;

  segmentStyle: interop.Enum<typeof NSSegmentStyle>;

  drawSegmentInFrameWithView(segment: number, frame: CGRect, controlView: NSView): void;

  interiorBackgroundStyleForSegment(segment: number): interop.Enum<typeof NSBackgroundStyle>;
}

declare class NSCollectionViewItem extends NSViewController implements NSCopying, NSCollectionViewElement {
  readonly collectionView: NSCollectionView;

  isSelected: boolean;

  highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>;

  imageView: NSImageView;

  textField: NSTextField;

  readonly draggingImageComponents: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  prepareForReuse(): void;

  applyLayoutAttributes(layoutAttributes: NSCollectionViewLayoutAttributes): void;

  willTransitionFromLayoutToLayout(oldLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): void;

  didTransitionFromLayoutToLayout(oldLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): void;

  preferredLayoutAttributesFittingAttributes(layoutAttributes: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutAttributes;

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

  identifier: string;
}

declare class NSSegmentedControl extends NSControl implements NSUserInterfaceCompression {
  segmentCount: number;

  selectedSegment: number;

  selectSegmentWithTag(tag: number): boolean;

  setWidthForSegment(width: number, segment: number): void;

  widthForSegment(segment: number): number;

  setImageForSegment(image: NSImage | null, segment: number): void;

  imageForSegment(segment: number): NSImage;

  setImageScalingForSegment(scaling: interop.Enum<typeof NSImageScaling>, segment: number): void;

  imageScalingForSegment(segment: number): interop.Enum<typeof NSImageScaling>;

  setLabelForSegment(label: string, segment: number): void;

  labelForSegment(segment: number): string;

  setMenuForSegment(menu: NSMenu | null, segment: number): void;

  menuForSegment(segment: number): NSMenu;

  setSelectedForSegment(selected: boolean, segment: number): void;

  isSelectedForSegment(segment: number): boolean;

  setEnabledForSegment(enabled: boolean, segment: number): void;

  isEnabledForSegment(segment: number): boolean;

  setToolTipForSegment(toolTip: string | null, segment: number): void;

  toolTipForSegment(segment: number): string;

  setTagForSegment(tag: number, segment: number): void;

  tagForSegment(segment: number): number;

  setShowsMenuIndicatorForSegment(showsMenuIndicator: boolean, segment: number): void;

  showsMenuIndicatorForSegment(segment: number): boolean;

  segmentStyle: interop.Enum<typeof NSSegmentStyle>;

  isSpringLoaded: boolean;

  trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>;

  readonly doubleValueForSelectedSegment: number;

  selectedSegmentBezelColor: NSColor;

  readonly indexOfSelectedItem: number;

  setAlignmentForSegment(alignment: interop.Enum<typeof NSTextAlignment>, segment: number): void;

  alignmentForSegment(segment: number): interop.Enum<typeof NSTextAlignment>;

  segmentDistribution: interop.Enum<typeof NSSegmentDistribution>;

  compressWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<interop.Object> | Array<interop.Object>): void;

  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<interop.Object> | Array<interop.Object>): CGSize;

  readonly activeCompressionOptions: NSUserInterfaceCompressionOptions;

  static segmentedControlWithLabelsTrackingModeTargetAction<This extends abstract new (...args: any) => any>(this: This, labels: NSArray<interop.Object> | Array<interop.Object>, trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>, target: interop.Object | null, action: string | null): InstanceType<This>;

  static segmentedControlWithImagesTrackingModeTargetAction<This extends abstract new (...args: any) => any>(this: This, images: NSArray<interop.Object> | Array<interop.Object>, trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>, target: interop.Object | null, action: string | null): InstanceType<This>;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSMenuItemCell extends NSButtonCell {
  initTextCell(string: string): this;

  initWithCoder(coder: NSCoder): this;

  menuItem: NSMenuItem;

  needsSizing: boolean;

  calcSize(): void;

  needsDisplay: boolean;

  readonly stateImageWidth: number;

  readonly imageWidth: number;

  readonly titleWidth: number;

  readonly keyEquivalentWidth: number;

  stateImageRectForBounds(cellFrame: CGRect): CGRect;

  // @ts-ignore MemberDecl.tsIgnore
  titleRectForBounds(cellFrame: CGRect): CGRect;

  keyEquivalentRectForBounds(cellFrame: CGRect): CGRect;

  drawSeparatorItemWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  drawStateImageWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  // @ts-ignore MemberDecl.tsIgnore
  drawImageWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  // @ts-ignore MemberDecl.tsIgnore
  drawTitleWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  drawKeyEquivalentWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  drawBorderAndBackgroundWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  tag: number;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSPopoverTouchBarItem extends NSTouchBarItem {
  popoverTouchBar: NSTouchBar;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;

  collapsedRepresentation: NSView;

  collapsedRepresentationImage: NSImage;

  collapsedRepresentationLabel: string;

  pressAndHoldTouchBar: NSTouchBar;

  showsCloseButton: boolean;

  showPopover(sender: interop.Object | null): void;

  dismissPopover(sender: interop.Object | null): void;

  makeStandardActivatePopoverGestureRecognizer(): NSGestureRecognizer;
}

declare class NSSearchToolbarItem extends NSToolbarItem {
  searchField: NSSearchField;

  resignsFirstResponderWithCancel: boolean;

  preferredWidthForSearchField: number;

  beginSearchInteraction(): void;

  endSearchInteraction(): void;
}

declare class NSParagraphStyle extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  static readonly defaultParagraphStyle: NSParagraphStyle;

  static defaultWritingDirectionForLanguage(languageName: string | null): interop.Enum<typeof NSWritingDirection>;

  readonly lineSpacing: number;

  readonly paragraphSpacing: number;

  readonly headIndent: number;

  readonly tailIndent: number;

  readonly firstLineHeadIndent: number;

  readonly minimumLineHeight: number;

  readonly maximumLineHeight: number;

  readonly lineBreakMode: interop.Enum<typeof NSLineBreakMode>;

  readonly baseWritingDirection: interop.Enum<typeof NSWritingDirection>;

  readonly lineHeightMultiple: number;

  readonly paragraphSpacingBefore: number;

  readonly hyphenationFactor: number;

  readonly usesDefaultHyphenation: boolean;

  readonly tabStops: NSArray;

  readonly defaultTabInterval: number;

  readonly textLists: NSArray;

  readonly allowsDefaultTighteningForTruncation: boolean;

  readonly lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;

  readonly alignment: interop.Enum<typeof NSTextAlignment>;

  readonly tighteningFactorForTruncation: number;

  readonly textBlocks: NSArray;

  readonly headerLevel: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  mutableCopyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSTextList extends NSObject implements NSSecureCoding, NSCopying {
  initWithMarkerFormatOptionsStartingItemNumber(markerFormat: string, options: interop.Enum<typeof NSTextListOptions>, startingItemNumber: number): this;

  initWithMarkerFormatOptions(markerFormat: string, options: number): this;

  initWithCoder(coder: NSCoder): this;

  readonly markerFormat: string;

  readonly listOptions: interop.Enum<typeof NSTextListOptions>;

  startingItemNumber: number;

  readonly isOrdered: boolean;

  markerForItemNumber(itemNumber: number): string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSPageLayout extends NSObject {
  static pageLayout(): NSPageLayout;

  addAccessoryController(accessoryController: NSViewController): void;

  removeAccessoryController(accessoryController: NSViewController): void;

  readonly accessoryControllers: NSArray;

  beginSheetUsingPrintInfoOnWindowCompletionHandler(printInfo: NSPrintInfo, parentWindow: NSWindow, handler: (p1: interop.Enum<typeof NSPageLayoutResult>) => void | null): void;

  beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo(printInfo: NSPrintInfo, docWindow: NSWindow, delegate: interop.Object | null, didEndSelector: string | null, contextInfo: interop.PointerConvertible): void;

  runModalWithPrintInfo(printInfo: NSPrintInfo): number;

  runModal(): number;

  readonly printInfo: NSPrintInfo;

  setAccessoryView(accessoryView: NSView): void;

  accessoryView(): NSView;

  readPrintInfo(): void;

  writePrintInfo(): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSSavePanel extends NSPanel {
  static savePanel(): NSSavePanel;

  readonly URL: NSURL;

  identifier: string;

  directoryURL: NSURL;

  get allowedContentTypes(): NSArray;
  set allowedContentTypes(value: NSArray<interop.Object> | Array<interop.Object>);

  allowsOtherFileTypes: boolean;

  currentContentType: UTType;

  accessoryView: NSView;

  // @ts-ignore MemberDecl.tsIgnore
  delegate: NSOpenSavePanelDelegate;

  readonly isExpanded: boolean;

  canCreateDirectories: boolean;

  canSelectHiddenExtension: boolean;

  isExtensionHidden: boolean;

  treatsFilePackagesAsDirectories: boolean;

  prompt: string;

  title: string;

  nameFieldLabel: string;

  nameFieldStringValue: string;

  message: string;

  showsHiddenFiles: boolean;

  showsTagField: boolean;

  get tagNames(): NSArray;
  set tagNames(value: NSArray<interop.Object> | Array<interop.Object>);

  showsContentTypes: boolean;

  validateVisibleColumns(): void;

  ok(sender: interop.Object | null): void;

  cancel(sender: interop.Object | null): void;

  beginSheetModalForWindowCompletionHandler(window: NSWindow, handler: (p1: number) => void): void;

  beginWithCompletionHandler(handler: (p1: number) => void): void;

  runModal(): number;

  filename(): string;

  directory(): string;

  setDirectory(path: string | null): void;

  requiredFileType(): string;

  setRequiredFileType(type: string | null): void;

  beginSheetForDirectoryFileModalForWindowModalDelegateDidEndSelectorContextInfo(path: string, name: string | null, docWindow: NSWindow | null, delegate: interop.Object | null, didEndSelector: string | null, contextInfo: interop.PointerConvertible): void;

  runModalForDirectoryFile(path: string | null, name: string | null): number;

  selectText(sender: interop.Object | null): void;

  get allowedFileTypes(): NSArray;
  set allowedFileTypes(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class NSSplitView extends NSView {
  isVertical: boolean;

  dividerStyle: interop.Enum<typeof NSSplitViewDividerStyle>;

  autosaveName: string;

  delegate: NSSplitViewDelegate;

  drawDividerInRect(rect: CGRect): void;

  readonly dividerColor: NSColor;

  readonly dividerThickness: number;

  adjustSubviews(): void;

  isSubviewCollapsed(subview: NSView): boolean;

  minPossiblePositionOfDividerAtIndex(dividerIndex: number): number;

  maxPossiblePositionOfDividerAtIndex(dividerIndex: number): number;

  setPositionOfDividerAtIndex(position: number, dividerIndex: number): void;

  holdingPriorityForSubviewAtIndex(subviewIndex: number): number;

  setHoldingPriorityForSubviewAtIndex(priority: number, subviewIndex: number): void;

  arrangesAllSubviews: boolean;

  readonly arrangedSubviews: NSArray;

  addArrangedSubview(view: NSView): void;

  insertArrangedSubviewAtIndex(view: NSView, index: number): void;

  removeArrangedSubview(view: NSView): void;

  setIsPaneSplitter(flag: boolean): void;

  isPaneSplitter(): boolean;
}

declare class NSScreen extends NSObject {
  static readonly screens: NSArray;

  static readonly mainScreen: NSScreen;

  static readonly deepestScreen: NSScreen;

  static readonly screensHaveSeparateSpaces: boolean;

  readonly depth: interop.Enum<typeof NSWindowDepth>;

  readonly frame: CGRect;

  readonly visibleFrame: CGRect;

  readonly deviceDescription: NSDictionary;

  readonly colorSpace: NSColorSpace;

  readonly supportedWindowDepths: interop.Pointer;

  canRepresentDisplayGamut(displayGamut: interop.Enum<typeof NSDisplayGamut>): boolean;

  convertRectToBacking(rect: CGRect): CGRect;

  convertRectFromBacking(rect: CGRect): CGRect;

  backingAlignedRectOptions(rect: CGRect, options: interop.Enum<typeof NSAlignmentOptions>): CGRect;

  readonly backingScaleFactor: number;

  readonly localizedName: string;

  readonly safeAreaInsets: NSEdgeInsets;

  readonly auxiliaryTopLeftArea: CGRect;

  readonly auxiliaryTopRightArea: CGRect;

  readonly maximumExtendedDynamicRangeColorComponentValue: number;

  readonly maximumPotentialExtendedDynamicRangeColorComponentValue: number;

  readonly maximumReferenceExtendedDynamicRangeColorComponentValue: number;

  readonly maximumFramesPerSecond: number;

  readonly minimumRefreshInterval: number;

  readonly maximumRefreshInterval: number;

  readonly displayUpdateGranularity: number;

  readonly lastDisplayUpdateTimestamp: number;

  displayLinkWithTargetSelector(target: interop.Object, selector: string): CADisplayLink;

  userSpaceScaleFactor(): number;
}

declare class NSSliderAccessoryBehavior extends NSObject implements NSCoding, NSCopying {
  static readonly automaticBehavior: NSSliderAccessoryBehavior;

  static readonly valueStepBehavior: NSSliderAccessoryBehavior;

  static readonly valueResetBehavior: NSSliderAccessoryBehavior;

  static behaviorWithTargetAction(target: interop.Object | null, action: string): NSSliderAccessoryBehavior;

  static behaviorWithHandler(handler: (p1: NSSliderAccessory) => void): NSSliderAccessoryBehavior;

  handleAction(sender: NSSliderAccessory): void;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSTintConfiguration extends NSObject implements NSCopying, NSSecureCoding {
  static readonly defaultTintConfiguration: NSTintConfiguration;

  static readonly monochromeTintConfiguration: NSTintConfiguration;

  static tintConfigurationWithPreferredColor<This extends abstract new (...args: any) => any>(this: This, color: NSColor): InstanceType<This>;

  static tintConfigurationWithFixedColor<This extends abstract new (...args: any) => any>(this: This, color: NSColor): InstanceType<This>;

  readonly baseTintColor: NSColor;

  readonly equivalentContentTintColor: NSColor;

  readonly adaptsToUserAccentColor: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSSharingServicePickerTouchBarItem extends NSTouchBarItem {
  delegate: NSSharingServicePickerTouchBarItemDelegate | null;

  isEnabled: boolean;

  buttonTitle: string;

  buttonImage: NSImage;
}

declare class NSScrubberLayoutAttributes extends NSObject implements NSCopying {
  itemIndex: number;

  frame: CGRect;

  alpha: number;

  static layoutAttributesForItemAtIndex<This extends abstract new (...args: any) => any>(this: This, index: number): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSPersistentDocument extends NSDocument {
  managedObjectContext: NSManagedObjectContext;

  readonly managedObjectModel: NSManagedObjectModel;

  configurePersistentStoreCoordinatorForURLOfTypeModelConfigurationStoreOptionsError(url: NSURL, fileType: string, configuration: string | null, storeOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, error: interop.PointerConvertible): boolean;

  persistentStoreTypeForFileType(fileType: string): string;

  // @ts-ignore MemberDecl.tsIgnore
  writeToURLOfTypeForSaveOperationOriginalContentsURLError(absoluteURL: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, absoluteOriginalContentsURL: NSURL | null, error: interop.PointerConvertible): boolean;

  // @ts-ignore MemberDecl.tsIgnore
  readFromURLOfTypeError(absoluteURL: NSURL, typeName: string, error: interop.PointerConvertible): boolean;

  // @ts-ignore MemberDecl.tsIgnore
  revertToContentsOfURLOfTypeError(inAbsoluteURL: NSURL, inTypeName: string, outError: interop.PointerConvertible): boolean;

  configurePersistentStoreCoordinatorForURLOfTypeError(url: NSURL, fileType: string, error: interop.PointerConvertible): boolean;
}

declare class NSScrubber extends NSView {
  dataSource: NSScrubberDataSource;

  delegate: NSScrubberDelegate;

  scrubberLayout: NSScrubberLayout;

  readonly numberOfItems: number;

  readonly highlightedIndex: number;

  selectedIndex: number;

  mode: interop.Enum<typeof NSScrubberMode>;

  itemAlignment: interop.Enum<typeof NSScrubberAlignment>;

  isContinuous: boolean;

  floatsSelectionViews: boolean;

  selectionBackgroundStyle: NSScrubberSelectionStyle;

  selectionOverlayStyle: NSScrubberSelectionStyle;

  showsArrowButtons: boolean;

  showsAdditionalContentIndicators: boolean;

  backgroundColor: NSColor;

  backgroundView: NSView;

  initWithFrame(frameRect: CGRect): this;

  initWithCoder(coder: NSCoder): this;

  reloadData(): void;

  performSequentialBatchUpdates(updateBlock: () => void): void;

  insertItemsAtIndexes(indexes: NSIndexSet): void;

  removeItemsAtIndexes(indexes: NSIndexSet): void;

  reloadItemsAtIndexes(indexes: NSIndexSet): void;

  moveItemAtIndexToIndex(oldIndex: number, newIndex: number): void;

  scrollItemAtIndexToAlignment(index: number, alignment: interop.Enum<typeof NSScrubberAlignment>): void;

  itemViewForItemAtIndex(index: number): NSScrubberItemView;

  registerClassForItemIdentifier(itemViewClass: interop.Object | null, itemIdentifier: string): void;

  registerNibForItemIdentifier(nib: NSNib | null, itemIdentifier: string): void;

  makeItemWithIdentifierOwner(itemIdentifier: string, owner: interop.Object | null): NSScrubberItemView;
}

declare class NSDraggingImageComponent extends NSObject {
  static draggingImageComponentWithKey(key: string): NSDraggingImageComponent;

  initWithKey(key: string): this;

  key: string;

  contents: interop.Object;

  frame: CGRect;
}

declare class NSCollectionViewLayoutInvalidationContext extends NSObject {
  readonly invalidateEverything: boolean;

  readonly invalidateDataSourceCounts: boolean;

  invalidateItemsAtIndexPaths(indexPaths: NSSet): void;

  invalidateSupplementaryElementsOfKindAtIndexPaths(elementKind: string, indexPaths: NSSet): void;

  invalidateDecorationElementsOfKindAtIndexPaths(elementKind: string, indexPaths: NSSet): void;

  readonly invalidatedItemIndexPaths: NSSet;

  readonly invalidatedSupplementaryIndexPaths: NSDictionary;

  readonly invalidatedDecorationIndexPaths: NSDictionary;

  contentOffsetAdjustment: CGPoint;

  contentSizeAdjustment: CGSize;
}

declare class NSTextLineFragment extends NSObject implements NSSecureCoding {
  initWithAttributedStringRange(attributedString: NSAttributedString, range: _NSRange): this;

  initWithCoder(aDecoder: NSCoder): this;

  initWithStringAttributesRange(string: string, attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, range: _NSRange): this;

  readonly attributedString: NSAttributedString;

  readonly characterRange: _NSRange;

  readonly typographicBounds: CGRect;

  readonly glyphOrigin: CGPoint;

  drawAtPointInContext(point: CGPoint, context: interop.PointerConvertible): void;

  locationForCharacterAtIndex(index: number): CGPoint;

  characterIndexForPoint(point: CGPoint): number;

  fractionOfDistanceThroughGlyphForPoint(point: CGPoint): number;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSScrubberFlowLayout extends NSScrubberLayout {
  itemSpacing: number;

  itemSize: CGSize;

  invalidateLayoutForItemsAtIndexes(invalidItemIndexes: NSIndexSet): void;
}

declare class NSRunningApplication extends NSObject {
  readonly isTerminated: boolean;

  readonly isFinishedLaunching: boolean;

  readonly isHidden: boolean;

  readonly isActive: boolean;

  readonly ownsMenuBar: boolean;

  readonly activationPolicy: interop.Enum<typeof NSApplicationActivationPolicy>;

  readonly localizedName: string;

  readonly bundleIdentifier: string;

  readonly bundleURL: NSURL;

  readonly executableURL: NSURL;

  readonly processIdentifier: number;

  readonly launchDate: NSDate;

  readonly icon: NSImage;

  readonly executableArchitecture: number;

  hide(): boolean;

  unhide(): boolean;

  activateFromApplicationOptions(application: NSRunningApplication, options: interop.Enum<typeof NSApplicationActivationOptions>): boolean;

  activateWithOptions(options: interop.Enum<typeof NSApplicationActivationOptions>): boolean;

  terminate(): boolean;

  forceTerminate(): boolean;

  static runningApplicationsWithBundleIdentifier(bundleIdentifier: string): NSArray;

  static runningApplicationWithProcessIdentifier<This extends abstract new (...args: any) => any>(this: This, pid: number): InstanceType<This>;

  static readonly currentApplication: NSRunningApplication;

  static terminateAutomaticallyTerminableApplications(): void;
}

declare class NSImageSymbolConfiguration extends NSObject implements NSCopying, NSSecureCoding {
  static configurationWithPointSizeWeightScale<This extends abstract new (...args: any) => any>(this: This, pointSize: number, weight: number, scale: interop.Enum<typeof NSImageSymbolScale>): InstanceType<This>;

  static configurationWithPointSizeWeight<This extends abstract new (...args: any) => any>(this: This, pointSize: number, weight: number): InstanceType<This>;

  static configurationWithTextStyleScale<This extends abstract new (...args: any) => any>(this: This, style: string, scale: interop.Enum<typeof NSImageSymbolScale>): InstanceType<This>;

  static configurationWithTextStyle<This extends abstract new (...args: any) => any>(this: This, style: string): InstanceType<This>;

  static configurationWithScale<This extends abstract new (...args: any) => any>(this: This, scale: interop.Enum<typeof NSImageSymbolScale>): InstanceType<This>;

  static configurationPreferringMonochrome<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static configurationPreferringHierarchical<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static configurationWithHierarchicalColor<This extends abstract new (...args: any) => any>(this: This, hierarchicalColor: NSColor): InstanceType<This>;

  static configurationWithPaletteColors<This extends abstract new (...args: any) => any>(this: This, paletteColors: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static configurationPreferringMulticolor<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  configurationByApplyingConfiguration(configuration: NSImageSymbolConfiguration): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSLayoutGuide extends NSObject implements NSCoding, NSUserInterfaceItemIdentification {
  readonly frame: CGRect;

  owningView: NSView;

  identifier: string;

  readonly leadingAnchor: NSLayoutXAxisAnchor;

  readonly trailingAnchor: NSLayoutXAxisAnchor;

  readonly leftAnchor: NSLayoutXAxisAnchor;

  readonly rightAnchor: NSLayoutXAxisAnchor;

  readonly topAnchor: NSLayoutYAxisAnchor;

  readonly bottomAnchor: NSLayoutYAxisAnchor;

  readonly widthAnchor: NSLayoutDimension;

  readonly heightAnchor: NSLayoutDimension;

  readonly centerXAnchor: NSLayoutXAxisAnchor;

  readonly centerYAnchor: NSLayoutYAxisAnchor;

  readonly hasAmbiguousLayout: boolean;

  constraintsAffectingLayoutForOrientation(orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): NSArray;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSPredicateEditor extends NSRuleEditor {
  get rowTemplates(): NSArray;
  set rowTemplates(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class NSRulerMarker extends NSObject implements NSCopying, NSCoding {
  initWithRulerViewMarkerLocationImageImageOrigin(ruler: NSRulerView, location: number, image: NSImage, imageOrigin: CGPoint): this;

  initWithCoder(coder: NSCoder): this;

  readonly ruler: NSRulerView | null;

  markerLocation: number;

  image: NSImage;

  imageOrigin: CGPoint;

  isMovable: boolean;

  isRemovable: boolean;

  readonly isDragging: boolean;

  representedObject: NSCopying;

  readonly imageRectInRuler: CGRect;

  readonly thicknessRequiredInRuler: number;

  drawRect(rect: CGRect): void;

  trackMouseAdding(mouseDownEvent: NSEvent, isAdding: boolean): boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSLayoutDimension extends NSLayoutAnchor {
  constraintEqualToConstant(c: number): NSLayoutConstraint;

  constraintGreaterThanOrEqualToConstant(c: number): NSLayoutConstraint;

  constraintLessThanOrEqualToConstant(c: number): NSLayoutConstraint;

  constraintEqualToAnchorMultiplier(anchor: NSLayoutDimension, m: number): NSLayoutConstraint;

  constraintGreaterThanOrEqualToAnchorMultiplier(anchor: NSLayoutDimension, m: number): NSLayoutConstraint;

  constraintLessThanOrEqualToAnchorMultiplier(anchor: NSLayoutDimension, m: number): NSLayoutConstraint;

  constraintEqualToAnchorMultiplierConstant(anchor: NSLayoutDimension, m: number, c: number): NSLayoutConstraint;

  constraintGreaterThanOrEqualToAnchorMultiplierConstant(anchor: NSLayoutDimension, m: number, c: number): NSLayoutConstraint;

  constraintLessThanOrEqualToAnchorMultiplierConstant(anchor: NSLayoutDimension, m: number, c: number): NSLayoutConstraint;
}

declare class NSPanGestureRecognizer extends NSGestureRecognizer implements NSCoding {
  buttonMask: number;

  translationInView(view: NSView | null): CGPoint;

  setTranslationInView(translation: CGPoint, view: NSView | null): void;

  velocityInView(view: NSView | null): CGPoint;

  numberOfTouchesRequired: number;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSTokenFieldCell extends NSTextFieldCell {
  tokenStyle: interop.Enum<typeof NSTokenStyle>;

  completionDelay: number;

  static readonly defaultCompletionDelay: number;

  tokenizingCharacterSet: NSCharacterSet;

  static readonly defaultTokenizingCharacterSet: NSCharacterSet;

  delegate: NSTokenFieldCellDelegate;
}

declare class NSGestureRecognizer extends NSObject implements NSCoding {
  initWithTargetAction(target: interop.Object | null, action: string | null): this;

  initWithCoder(coder: NSCoder): this;

  target: interop.Object;

  action: string;

  readonly state: interop.Enum<typeof NSGestureRecognizerState>;

  delegate: NSGestureRecognizerDelegate;

  isEnabled: boolean;

  readonly view: NSView;

  pressureConfiguration: NSPressureConfiguration;

  delaysPrimaryMouseButtonEvents: boolean;

  delaysSecondaryMouseButtonEvents: boolean;

  delaysOtherMouseButtonEvents: boolean;

  delaysKeyEvents: boolean;

  delaysMagnificationEvents: boolean;

  delaysRotationEvents: boolean;

  locationInView(view: NSView | null): CGPoint;

  allowedTouchTypes: interop.Enum<typeof NSTouchTypeMask>;

  reset(): void;

  canPreventGestureRecognizer(preventedGestureRecognizer: NSGestureRecognizer): boolean;

  canBePreventedByGestureRecognizer(preventingGestureRecognizer: NSGestureRecognizer): boolean;

  shouldRequireFailureOfGestureRecognizer(otherGestureRecognizer: NSGestureRecognizer): boolean;

  shouldBeRequiredToFailByGestureRecognizer(otherGestureRecognizer: NSGestureRecognizer): boolean;

  mouseDown(event: NSEvent): void;

  rightMouseDown(event: NSEvent): void;

  otherMouseDown(event: NSEvent): void;

  mouseUp(event: NSEvent): void;

  rightMouseUp(event: NSEvent): void;

  otherMouseUp(event: NSEvent): void;

  mouseDragged(event: NSEvent): void;

  rightMouseDragged(event: NSEvent): void;

  otherMouseDragged(event: NSEvent): void;

  keyDown(event: NSEvent): void;

  keyUp(event: NSEvent): void;

  flagsChanged(event: NSEvent): void;

  tabletPoint(event: NSEvent): void;

  magnifyWithEvent(event: NSEvent): void;

  rotateWithEvent(event: NSEvent): void;

  pressureChangeWithEvent(event: NSEvent): void;

  touchesBeganWithEvent(event: NSEvent): void;

  touchesMovedWithEvent(event: NSEvent): void;

  touchesEndedWithEvent(event: NSEvent): void;

  touchesCancelledWithEvent(event: NSEvent): void;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSEPSImageRep extends NSImageRep {
  static imageRepWithData<This extends abstract new (...args: any) => any>(this: This, epsData: NSData): InstanceType<This>;

  initWithData(epsData: NSData): this;

  readonly boundingBox: CGRect;

  readonly EPSRepresentation: NSData;

  prepareGState(): void;
}

declare class NSFilePromiseReceiver extends NSObject implements NSPasteboardReading {
  static readonly readableDraggedTypes: NSArray;

  readonly fileTypes: NSArray;

  readonly fileNames: NSArray;

  receivePromisedFilesAtDestinationOptionsOperationQueueReader(destinationDir: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, operationQueue: NSOperationQueue, reader: (p1: NSURL, p2: NSError) => void | null): void;

  static readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  static readingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardReadingOptions>;

  initWithPasteboardPropertyListOfType(propertyList: interop.Object, type: string): this;

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
declare class NSSearchField extends NSTextField {
  readonly searchTextBounds: CGRect;

  readonly searchButtonBounds: CGRect;

  readonly cancelButtonBounds: CGRect;

  get recentSearches(): NSArray;
  set recentSearches(value: NSArray<interop.Object> | Array<interop.Object>);

  recentsAutosaveName: string;

  searchMenuTemplate: NSMenu;

  sendsWholeSearchString: boolean;

  maximumRecents: number;

  sendsSearchStringImmediately: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  delegate: NSSearchFieldDelegate;

  rectForSearchTextWhenCentered(isCentered: boolean): CGRect;

  rectForSearchButtonWhenCentered(isCentered: boolean): CGRect;

  rectForCancelButtonWhenCentered(isCentered: boolean): CGRect;

  centersPlaceholder: boolean;
}

declare class NSDocumentController extends NSObject implements NSCoding, NSMenuItemValidation, NSUserInterfaceValidations {
  static readonly sharedDocumentController: NSDocumentController;

  init(): this;

  initWithCoder(coder: NSCoder): this;

  readonly documents: NSArray;

  readonly currentDocument: NSDocument;

  readonly currentDirectory: string;

  documentForURL(url: NSURL): NSDocument;

  documentForWindow(window: NSWindow): NSDocument;

  addDocument(document: NSDocument): void;

  removeDocument(document: NSDocument): void;

  newDocument(sender: interop.Object | null): void;

  openUntitledDocumentAndDisplayError(displayDocument: boolean, outError: interop.PointerConvertible): NSDocument;

  makeUntitledDocumentOfTypeError(typeName: string, outError: interop.PointerConvertible): NSDocument;

  openDocument(sender: interop.Object | null): void;

  URLsFromRunningOpenPanel(): NSArray;

  runModalOpenPanelForTypes(openPanel: NSOpenPanel, types: NSArray<interop.Object> | Array<interop.Object> | null): number;

  beginOpenPanelWithCompletionHandler(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void | null): void;

  beginOpenPanelForTypesCompletionHandler(openPanel: NSOpenPanel, inTypes: NSArray<interop.Object> | Array<interop.Object> | null, completionHandler: (p1: number) => void): void;

  openDocumentWithContentsOfURLDisplayCompletionHandler(url: NSURL, displayDocument: boolean, completionHandler: (p1: NSDocument, p2: boolean, p3: NSError) => void | null): void;

  makeDocumentWithContentsOfURLOfTypeError(url: NSURL, typeName: string, outError: interop.PointerConvertible): NSDocument;

  reopenDocumentForURLWithContentsOfURLDisplayCompletionHandler(urlOrNil: NSURL | null, contentsURL: NSURL, displayDocument: boolean, completionHandler: (p1: NSDocument, p2: boolean, p3: NSError) => void | null): void;

  makeDocumentForURLWithContentsOfURLOfTypeError(urlOrNil: NSURL | null, contentsURL: NSURL, typeName: string, outError: interop.PointerConvertible): NSDocument;

  autosavingDelay: number;

  saveAllDocuments(sender: interop.Object | null): void;

  readonly hasEditedDocuments: boolean;

  reviewUnsavedDocumentsWithAlertTitleCancellableDelegateDidReviewAllSelectorContextInfo(title: string | null, cancellable: boolean, delegate: interop.Object | null, didReviewAllSelector: string | null, contextInfo: interop.PointerConvertible): void;

  closeAllDocumentsWithDelegateDidCloseAllSelectorContextInfo(delegate: interop.Object | null, didCloseAllSelector: string | null, contextInfo: interop.PointerConvertible): void;

  duplicateDocumentWithContentsOfURLCopyingDisplayNameError(url: NSURL, duplicateByCopying: boolean, displayNameOrNil: string | null, outError: interop.PointerConvertible): NSDocument;

  readonly allowsAutomaticShareMenu: boolean;

  standardShareMenuItem(): NSMenuItem;

  presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(error: NSError, window: NSWindow, delegate: interop.Object | null, didPresentSelector: string | null, contextInfo: interop.PointerConvertible): void;

  presentError(error: NSError): boolean;

  willPresentError(error: NSError): NSError;

  readonly maximumRecentDocumentCount: number;

  clearRecentDocuments(sender: interop.Object | null): void;

  noteNewRecentDocument(document: NSDocument): void;

  noteNewRecentDocumentURL(url: NSURL): void;

  readonly recentDocumentURLs: NSArray;

  readonly defaultType: string;

  typeForContentsOfURLError(url: NSURL, outError: interop.PointerConvertible): string;

  readonly documentClassNames: NSArray;

  documentClassForType(typeName: string): interop.Object;

  displayNameForType(typeName: string): string;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  openDocumentWithContentsOfURLDisplayError(url: NSURL, displayDocument: boolean, outError: interop.PointerConvertible): interop.Object;

  reopenDocumentForURLWithContentsOfURLError(url: NSURL | null, contentsURL: NSURL, outError: interop.PointerConvertible): boolean;

  fileExtensionsFromType(typeName: string): NSArray;

  typeFromFileExtension(fileNameExtensionOrHFSFileType: string): string;

  documentForFileName(fileName: string): interop.Object;

  fileNamesFromRunningOpenPanel(): NSArray;

  makeDocumentWithContentsOfFileOfType(fileName: string, type: string): interop.Object;

  makeDocumentWithContentsOfURLOfType(url: NSURL, type: string): interop.Object;

  makeUntitledDocumentOfType(type: string): interop.Object;

  openDocumentWithContentsOfFileDisplay(fileName: string, display: boolean): interop.Object;

  openDocumentWithContentsOfURLDisplay(url: NSURL, display: boolean): interop.Object;

  openUntitledDocumentOfTypeDisplay(type: string, display: boolean): interop.Object;

  setShouldCreateUI(flag: boolean): void;

  shouldCreateUI(): boolean;

  encodeWithCoder(coder: NSCoder): void;

  validateMenuItem(menuItem: NSMenuItem): boolean;

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

declare class NSCursor extends NSObject implements NSSecureCoding {
  initWithImageHotSpot(newImage: NSImage, point: CGPoint): this;

  initWithCoder(coder: NSCoder): this;

  readonly image: NSImage;

  readonly hotSpot: CGPoint;

  static hide(): void;

  static unhide(): void;

  static setHiddenUntilMouseMoves(flag: boolean): void;

  static pop(): void;

  pop(): void;

  push(): void;

  set(): void;

  static readonly currentCursor: NSCursor;

  static readonly arrowCursor: NSCursor;

  static readonly crosshairCursor: NSCursor;

  static readonly disappearingItemCursor: NSCursor;

  static readonly operationNotAllowedCursor: NSCursor;

  static readonly dragLinkCursor: NSCursor;

  static readonly dragCopyCursor: NSCursor;

  static readonly contextualMenuCursor: NSCursor;

  static readonly pointingHandCursor: NSCursor;

  static readonly closedHandCursor: NSCursor;

  static readonly openHandCursor: NSCursor;

  static readonly IBeamCursor: NSCursor;

  static readonly IBeamCursorForVerticalLayout: NSCursor;

  static readonly zoomInCursor: NSCursor;

  static readonly zoomOutCursor: NSCursor;

  static readonly columnResizeCursor: NSCursor;

  static columnResizeCursorInDirections(directions: interop.Enum<typeof NSHorizontalDirections>): NSCursor;

  static readonly rowResizeCursor: NSCursor;

  static rowResizeCursorInDirections(directions: interop.Enum<typeof NSVerticalDirections>): NSCursor;

  static frameResizeCursorFromPositionInDirections(position: interop.Enum<typeof NSCursorFrameResizePosition>, directions: interop.Enum<typeof NSCursorFrameResizeDirections>): NSCursor;

  static readonly currentSystemCursor: NSCursor;

  static readonly resizeLeftCursor: NSCursor;

  static readonly resizeRightCursor: NSCursor;

  static readonly resizeLeftRightCursor: NSCursor;

  static readonly resizeUpCursor: NSCursor;

  static readonly resizeDownCursor: NSCursor;

  static readonly resizeUpDownCursor: NSCursor;

  initWithImageForegroundColorHintBackgroundColorHintHotSpot(newImage: NSImage, fg: NSColor | null, bg: NSColor | null, hotSpot: CGPoint): this;

  setOnMouseExited(flag: boolean): void;

  setOnMouseEntered(flag: boolean): void;

  readonly isSetOnMouseExited: boolean;

  readonly isSetOnMouseEntered: boolean;

  mouseEntered(event: NSEvent): void;

  mouseExited(event: NSEvent): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSColorWell extends NSControl {
  static colorWellWithStyle<This extends abstract new (...args: any) => any>(this: This, style: interop.Enum<typeof NSColorWellStyle>): InstanceType<This>;

  deactivate(): void;

  activate(exclusive: boolean): void;

  readonly isActive: boolean;

  drawWellInside(insideRect: CGRect): void;

  isBordered: boolean;

  takeColorFrom(sender: interop.Object | null): void;

  color: NSColor;

  colorWellStyle: interop.Enum<typeof NSColorWellStyle>;

  image: NSImage;

  pulldownTarget: interop.Object;

  pulldownAction: string;

  supportsAlpha: boolean;
}

declare class NSScrubberSelectionView extends NSScrubberArrangedView {
}

declare class NSTextAlternatives extends NSObject implements NSSecureCoding {
  initWithPrimaryStringAlternativeStrings(primaryString: string, alternativeStrings: NSArray<interop.Object> | Array<interop.Object>): this;

  readonly primaryString: string;

  readonly alternativeStrings: NSArray;

  noteSelectedAlternativeString(alternativeString: string): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSColorPicker extends NSObject implements NSColorPickingDefault {
  initWithPickerMaskColorPanel(mask: number, owningColorPanel: NSColorPanel): this;

  readonly colorPanel: NSColorPanel;

  readonly provideNewButtonImage: NSImage;

  insertNewButtonImageIn(newButtonImage: NSImage, buttonCell: NSButtonCell): void;

  viewSizeChanged(sender: interop.Object | null): void;

  attachColorList(colorList: NSColorList): void;

  detachColorList(colorList: NSColorList): void;

  setMode(mode: interop.Enum<typeof NSColorPanelMode>): void;

  readonly buttonToolTip: string;

  readonly minContentSize: CGSize;

  alphaControlAddedOrRemoved(sender: interop.Object | null): void;
}

declare class NSColorPanel extends NSPanel {
  static readonly sharedColorPanel: NSColorPanel;

  static readonly sharedColorPanelExists: boolean;

  static dragColorWithEventFromView(color: NSColor, event: NSEvent, sourceView: NSView): boolean;

  static setPickerMask(mask: interop.Enum<typeof NSColorPanelOptions>): void;

  static setPickerMode(mode: interop.Enum<typeof NSColorPanelMode>): void;

  accessoryView: NSView;

  isContinuous: boolean;

  showsAlpha: boolean;

  mode: interop.Enum<typeof NSColorPanelMode>;

  color: NSColor;

  readonly alpha: number;

  setAction(selector: string | null): void;

  setTarget(target: interop.Object | null): void;

  attachColorList(colorList: NSColorList): void;

  detachColorList(colorList: NSColorList): void;
}

declare class NSBrowserCell extends NSCell {
  initTextCell(string: string): this;

  initImageCell(image: NSImage | null): this;

  initWithCoder(coder: NSCoder): this;

  static readonly branchImage: NSImage;

  static readonly highlightedBranchImage: NSImage;

  highlightColorInView(controlView: NSView): NSColor;

  isLeaf: boolean;

  isLoaded: boolean;

  reset(): void;

  set(): void;

  image: NSImage;

  alternateImage: NSImage;
}

declare class NSCIImageRep extends NSImageRep {
  static imageRepWithCIImage<This extends abstract new (...args: any) => any>(this: This, image: CIImage): InstanceType<This>;

  initWithCIImage(image: CIImage): this;

  readonly CIImage: CIImage;
}

declare class NSDatePickerCell extends NSActionCell {
  initTextCell(string: string): this;

  initWithCoder(coder: NSCoder): this;

  datePickerStyle: interop.Enum<typeof NSDatePickerStyle>;

  drawsBackground: boolean;

  backgroundColor: NSColor;

  textColor: NSColor;

  datePickerMode: interop.Enum<typeof NSDatePickerMode>;

  datePickerElements: interop.Enum<typeof NSDatePickerElementFlags>;

  calendar: NSCalendar;

  locale: NSLocale;

  timeZone: NSTimeZone;

  dateValue: NSDate;

  timeInterval: number;

  minDate: NSDate;

  maxDate: NSDate;

  delegate: NSDatePickerCellDelegate;
}

declare class NSBitmapImageRep extends NSImageRep implements NSSecureCoding {
  initWithFocusedViewRect(rect: CGRect): this;

  initWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBytesPerRowBitsPerPixel(planes: interop.PointerConvertible, width: number, height: number, bps: number, spp: number, alpha: boolean, isPlanar: boolean, colorSpaceName: string, rBytes: number, pBits: number): this;

  initWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBitmapFormatBytesPerRowBitsPerPixel(planes: interop.PointerConvertible, width: number, height: number, bps: number, spp: number, alpha: boolean, isPlanar: boolean, colorSpaceName: string, bitmapFormat: interop.Enum<typeof NSBitmapFormat>, rBytes: number, pBits: number): this;

  initWithCGImage(cgImage: interop.PointerConvertible): this;

  initWithCIImage(ciImage: CIImage): this;

  static imageRepsWithData(data: NSData): NSArray;

  static imageRepWithData<This extends abstract new (...args: any) => any>(this: This, data: NSData): InstanceType<This>;

  initWithData(data: NSData): this;

  readonly bitmapData: interop.Pointer;

  getBitmapDataPlanes(data: interop.PointerConvertible): void;

  readonly isPlanar: boolean;

  readonly samplesPerPixel: number;

  readonly bitsPerPixel: number;

  readonly bytesPerRow: number;

  readonly bytesPerPlane: number;

  readonly numberOfPlanes: number;

  readonly bitmapFormat: interop.Enum<typeof NSBitmapFormat>;

  getCompressionFactor(compression: interop.PointerConvertible, factor: interop.PointerConvertible): void;

  setCompressionFactor(compression: interop.Enum<typeof NSTIFFCompression>, factor: number): void;

  readonly TIFFRepresentation: NSData;

  TIFFRepresentationUsingCompressionFactor(comp: interop.Enum<typeof NSTIFFCompression>, factor: number): NSData;

  static TIFFRepresentationOfImageRepsInArray(array: NSArray<interop.Object> | Array<interop.Object>): NSData;

  static TIFFRepresentationOfImageRepsInArrayUsingCompressionFactor(array: NSArray<interop.Object> | Array<interop.Object>, comp: interop.Enum<typeof NSTIFFCompression>, factor: number): NSData;

  static getTIFFCompressionTypesCount(list: interop.PointerConvertible, numTypes: interop.PointerConvertible): void;

  static localizedNameForTIFFCompressionType(compression: interop.Enum<typeof NSTIFFCompression>): string;

  canBeCompressedUsing(compression: interop.Enum<typeof NSTIFFCompression>): boolean;

  colorizeByMappingGrayToColorBlackMappingWhiteMapping(midPoint: number, midPointColor: NSColor | null, shadowColor: NSColor | null, lightColor: NSColor | null): void;

  initForIncrementalLoad(): this;

  incrementalLoadFromDataComplete(data: NSData, complete: boolean): number;

  setColorAtXY(color: NSColor, x: number, y: number): void;

  colorAtXY(x: number, y: number): NSColor;

  getPixelAtXY(p: interop.PointerConvertible, x: number, y: number): void;

  setPixelAtXY(p: interop.PointerConvertible, x: number, y: number): void;

  readonly CGImage: interop.Pointer;

  readonly colorSpace: NSColorSpace;

  bitmapImageRepByConvertingToColorSpaceRenderingIntent(targetSpace: NSColorSpace, renderingIntent: interop.Enum<typeof NSColorRenderingIntent>): NSBitmapImageRep;

  bitmapImageRepByRetaggingWithColorSpace(newSpace: NSColorSpace): NSBitmapImageRep;

  static representationOfImageRepsInArrayUsingTypeProperties(imageReps: NSArray<interop.Object> | Array<interop.Object>, storageType: interop.Enum<typeof NSBitmapImageFileType>, properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSData;

  representationUsingTypeProperties(storageType: interop.Enum<typeof NSBitmapImageFileType>, properties: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSData;

  setPropertyWithValue(property: string, value: interop.Object | null): void;

  valueForProperty(property: string): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSFormCell extends NSActionCell {
  // @ts-ignore MemberDecl.tsIgnore
  initTextCell(string: string | null): this;

  initWithCoder(coder: NSCoder): this;

  titleWidth: number;

  title: string;

  titleFont: NSFont;

  readonly isOpaque: boolean;

  placeholderString: string;

  placeholderAttributedString: NSAttributedString;

  titleAlignment: interop.Enum<typeof NSTextAlignment>;

  titleBaseWritingDirection: interop.Enum<typeof NSWritingDirection>;

  preferredTextFieldWidth: number;

  setTitleWithMnemonic(stringWithAmpersand: string): void;

  attributedTitle: NSAttributedString;
}

declare class NSForm extends NSMatrix {
  indexOfSelectedItem(): number;

  setEntryWidth(width: number): void;

  setInterlineSpacing(spacing: number): void;

  setBordered(flag: boolean): void;

  setBezeled(flag: boolean): void;

  setTitleAlignment(mode: interop.Enum<typeof NSTextAlignment>): void;

  setTextAlignment(mode: interop.Enum<typeof NSTextAlignment>): void;

  setTitleFont(fontObj: NSFont): void;

  setTextFont(fontObj: NSFont): void;

  cellAtIndex(index: number): interop.Object;

  drawCellAtIndex(index: number): void;

  addEntry(title: string): NSFormCell;

  insertEntryAtIndex(title: string, index: number): NSFormCell;

  removeEntryAtIndex(index: number): void;

  indexOfCellWithTag(tag: number): number;

  selectTextAtIndex(index: number): void;

  setFrameSize(newSize: CGSize): void;

  setTitleBaseWritingDirection(writingDirection: interop.Enum<typeof NSWritingDirection>): void;

  setTextBaseWritingDirection(writingDirection: interop.Enum<typeof NSWritingDirection>): void;

  setPreferredTextFieldWidth(preferredWidth: number): void;

  preferredTextFieldWidth(): number;
}

declare class NSMatrix extends NSControl implements NSUserInterfaceValidations, NSViewToolTipOwner {
  initWithFrame(frameRect: CGRect): this;

  initWithFrameModePrototypeNumberOfRowsNumberOfColumns(frameRect: CGRect, mode: interop.Enum<typeof NSMatrixMode>, cell: NSCell, rowsHigh: number, colsWide: number): this;

  initWithFrameModeCellClassNumberOfRowsNumberOfColumns(frameRect: CGRect, mode: interop.Enum<typeof NSMatrixMode>, factoryId: interop.Object | null, rowsHigh: number, colsWide: number): this;

  cellClass: interop.Object;

  prototype: NSCell;

  makeCellAtRowColumn(row: number, col: number): NSCell;

  mode: interop.Enum<typeof NSMatrixMode>;

  allowsEmptySelection: boolean;

  sendActionToForAllCells(selector: string, object: interop.Object, flag: boolean): void;

  readonly cells: NSArray;

  sortUsingSelector(comparator: string): void;

  sortUsingFunctionContext(compare: (p1: interop.Object, p2: interop.Object, p3: interop.PointerConvertible) => number | null, context: interop.PointerConvertible): void;

  readonly selectedCell: NSCell;

  readonly selectedCells: NSArray;

  readonly selectedRow: number;

  readonly selectedColumn: number;

  isSelectionByRect: boolean;

  setSelectionFromToAnchorHighlight(startPos: number, endPos: number, anchorPos: number, lit: boolean): void;

  deselectSelectedCell(): void;

  deselectAllCells(): void;

  selectCellAtRowColumn(row: number, col: number): void;

  selectAll(sender: interop.Object | null): void;

  selectCellWithTag(tag: number): boolean;

  cellSize: CGSize;

  intercellSpacing: CGSize;

  setScrollable(flag: boolean): void;

  backgroundColor: NSColor;

  cellBackgroundColor: NSColor;

  drawsCellBackground: boolean;

  drawsBackground: boolean;

  setStateAtRowColumn(value: number, row: number, col: number): void;

  getNumberOfRowsColumns(rowCount: interop.PointerConvertible, colCount: interop.PointerConvertible): void;

  readonly numberOfRows: number;

  readonly numberOfColumns: number;

  cellAtRowColumn(row: number, col: number): NSCell;

  cellFrameAtRowColumn(row: number, col: number): CGRect;

  getRowColumnOfCell(row: interop.PointerConvertible, col: interop.PointerConvertible, cell: NSCell): boolean;

  getRowColumnForPoint(row: interop.PointerConvertible, col: interop.PointerConvertible, point: CGPoint): boolean;

  renewRowsColumns(newRows: number, newCols: number): void;

  putCellAtRowColumn(newCell: NSCell, row: number, col: number): void;

  addRow(): void;

  addRowWithCells(newCells: NSArray<interop.Object> | Array<interop.Object>): void;

  insertRow(row: number): void;

  insertRowWithCells(row: number, newCells: NSArray<interop.Object> | Array<interop.Object> | null): void;

  removeRow(row: number): void;

  addColumn(): void;

  addColumnWithCells(newCells: NSArray<interop.Object> | Array<interop.Object>): void;

  insertColumn(column: number): void;

  insertColumnWithCells(column: number, newCells: NSArray<interop.Object> | Array<interop.Object> | null): void;

  removeColumn(col: number): void;

  cellWithTag(tag: number): NSCell;

  doubleAction: string;

  autosizesCells: boolean;

  sizeToCells(): void;

  setValidateSize(flag: boolean): void;

  drawCellAtRowColumn(row: number, col: number): void;

  highlightCellAtRowColumn(flag: boolean, row: number, col: number): void;

  isAutoscroll: boolean;

  scrollCellToVisibleAtRowColumn(row: number, col: number): void;

  readonly mouseDownFlags: number;

  mouseDown(event: NSEvent): void;

  performKeyEquivalent(event: NSEvent): boolean;

  sendAction(): boolean;

  sendDoubleAction(): void;

  delegate: NSMatrixDelegate;

  textShouldBeginEditing(textObject: NSText): boolean;

  textShouldEndEditing(textObject: NSText): boolean;

  textDidBeginEditing(notification: NSNotification): void;

  textDidEndEditing(notification: NSNotification): void;

  textDidChange(notification: NSNotification): void;

  selectText(sender: interop.Object | null): void;

  selectTextAtRowColumn(row: number, col: number): NSCell;

  acceptsFirstMouse(event: NSEvent | null): boolean;

  resetCursorRects(): void;

  setToolTipForCell(toolTipString: string | null, cell: NSCell): void;

  toolTipForCell(cell: NSCell): string;

  autorecalculatesCellSize: boolean;

  tabKeyTraversesCells: boolean;

  keyCell: NSCell;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  viewStringForToolTipPointUserData(view: NSView, tag: number, point: CGPoint, data: interop.PointerConvertible): string;

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
declare class NSPanel extends NSWindow {
  // @ts-ignore MemberDecl.tsIgnore
  isFloatingPanel: boolean;

  becomesKeyOnlyIfNeeded: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  worksWhenModal: boolean;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSMutableFontCollection extends NSFontCollection {
  // @ts-ignore MemberDecl.tsIgnore
  static fontCollectionWithDescriptors(queryDescriptors: NSArray<interop.Object> | Array<interop.Object>): NSMutableFontCollection;

  // @ts-ignore MemberDecl.tsIgnore
  static readonly fontCollectionWithAllAvailableDescriptors: NSMutableFontCollection;

  // @ts-ignore MemberDecl.tsIgnore
  static fontCollectionWithLocale(locale: NSLocale): NSMutableFontCollection;

  // @ts-ignore MemberDecl.tsIgnore
  static fontCollectionWithName(name: string): NSMutableFontCollection;

  // @ts-ignore MemberDecl.tsIgnore
  static fontCollectionWithNameVisibility(name: string, visibility: interop.Enum<typeof NSFontCollectionVisibility>): NSMutableFontCollection;

  // @ts-ignore MemberDecl.tsIgnore
  get queryDescriptors(): NSArray;
  // @ts-ignore MemberDecl.tsIgnore
  set queryDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  // @ts-ignore MemberDecl.tsIgnore
  get exclusionDescriptors(): NSArray;
  // @ts-ignore MemberDecl.tsIgnore
  set exclusionDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  addQueryForDescriptors(descriptors: NSArray<interop.Object> | Array<interop.Object>): void;

  removeQueryForDescriptors(descriptors: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class NSFontCollection extends NSObject implements NSCopying, NSMutableCopying, NSCoding {
  static fontCollectionWithDescriptors(queryDescriptors: NSArray<interop.Object> | Array<interop.Object>): NSFontCollection;

  static readonly fontCollectionWithAllAvailableDescriptors: NSFontCollection;

  static fontCollectionWithLocale(locale: NSLocale): NSFontCollection;

  static showFontCollectionWithNameVisibilityError(collection: NSFontCollection, name: string, visibility: interop.Enum<typeof NSFontCollectionVisibility>, error: interop.PointerConvertible): boolean;

  static hideFontCollectionWithNameVisibilityError(name: string, visibility: interop.Enum<typeof NSFontCollectionVisibility>, error: interop.PointerConvertible): boolean;

  static renameFontCollectionWithNameVisibilityToNameError(oldName: string, visibility: interop.Enum<typeof NSFontCollectionVisibility>, newName: string, outError: interop.PointerConvertible): boolean;

  static readonly allFontCollectionNames: NSArray;

  static fontCollectionWithName(name: string): NSFontCollection;

  static fontCollectionWithNameVisibility(name: string, visibility: interop.Enum<typeof NSFontCollectionVisibility>): NSFontCollection;

  readonly queryDescriptors: NSArray;

  readonly exclusionDescriptors: NSArray;

  readonly matchingDescriptors: NSArray;

  matchingDescriptorsWithOptions(options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): NSArray;

  matchingDescriptorsForFamily(family: string): NSArray;

  matchingDescriptorsForFamilyOptions(family: string, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  mutableCopyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSTabViewItem extends NSObject implements NSCoding {
  static tabViewItemWithViewController<This extends abstract new (...args: any) => any>(this: This, viewController: NSViewController): InstanceType<This>;

  initWithIdentifier(identifier: interop.Object | null): this;

  identifier: interop.Object;

  color: NSColor;

  label: string;

  image: NSImage;

  view: NSView;

  viewController: NSViewController;

  readonly tabState: interop.Enum<typeof NSTabState>;

  readonly tabView: NSTabView;

  initialFirstResponder: NSView;

  toolTip: string;

  drawLabelInRect(shouldTruncateLabel: boolean, labelRect: CGRect): void;

  sizeOfLabel(computeMin: boolean): CGSize;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSFontAssetRequest extends NSObject implements NSProgressReporting {
  initWithFontDescriptorsOptions(fontDescriptors: NSArray<interop.Object> | Array<interop.Object>, options: interop.Enum<typeof NSFontAssetRequestOptions>): this;

  readonly downloadedFontDescriptors: NSArray;

  readonly progress: NSProgress;

  downloadFontAssetsWithCompletionHandler(completionHandler: (p1: NSError) => boolean | null): void;

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

declare class NSFont extends NSObject implements NSCopying, NSSecureCoding {
  static fontWithNameSize(fontName: string, fontSize: number): NSFont;

  static fontWithNameMatrix(fontName: string, fontMatrix: interop.PointerConvertible): NSFont;

  static fontWithDescriptorSize(fontDescriptor: NSFontDescriptor, fontSize: number): NSFont;

  static fontWithDescriptorTextTransform(fontDescriptor: NSFontDescriptor, textTransform: NSAffineTransform | null): NSFont;

  static userFontOfSize(fontSize: number): NSFont;

  static userFixedPitchFontOfSize(fontSize: number): NSFont;

  static setUserFont(font: NSFont | null): void;

  static setUserFixedPitchFont(font: NSFont | null): void;

  static systemFontOfSize(fontSize: number): NSFont;

  static boldSystemFontOfSize(fontSize: number): NSFont;

  static labelFontOfSize(fontSize: number): NSFont;

  static titleBarFontOfSize(fontSize: number): NSFont;

  static menuFontOfSize(fontSize: number): NSFont;

  static menuBarFontOfSize(fontSize: number): NSFont;

  static messageFontOfSize(fontSize: number): NSFont;

  static paletteFontOfSize(fontSize: number): NSFont;

  static toolTipsFontOfSize(fontSize: number): NSFont;

  static controlContentFontOfSize(fontSize: number): NSFont;

  static systemFontOfSizeWeight(fontSize: number, weight: number): NSFont;

  static monospacedDigitSystemFontOfSizeWeight(fontSize: number, weight: number): NSFont;

  static systemFontOfSizeWeightWidth(fontSize: number, weight: number, width: number): NSFont;

  static monospacedSystemFontOfSizeWeight(fontSize: number, weight: number): NSFont;

  fontWithSize(fontSize: number): NSFont;

  static readonly systemFontSize: number;

  static readonly smallSystemFontSize: number;

  static readonly labelFontSize: number;

  static systemFontSizeForControlSize(controlSize: interop.Enum<typeof NSControlSize>): number;

  readonly fontName: string;

  readonly pointSize: number;

  readonly matrix: interop.Pointer;

  readonly familyName: string;

  readonly displayName: string;

  readonly fontDescriptor: NSFontDescriptor;

  readonly textTransform: NSAffineTransform;

  readonly numberOfGlyphs: number;

  readonly mostCompatibleStringEncoding: number;

  readonly coveredCharacterSet: NSCharacterSet;

  readonly boundingRectForFont: CGRect;

  readonly maximumAdvancement: CGSize;

  readonly ascender: number;

  readonly descender: number;

  readonly leading: number;

  readonly underlinePosition: number;

  readonly underlineThickness: number;

  readonly italicAngle: number;

  readonly capHeight: number;

  readonly xHeight: number;

  readonly isFixedPitch: boolean;

  boundingRectForCGGlyph(glyph: number): CGRect;

  advancementForCGGlyph(glyph: number): CGSize;

  getBoundingRectsForCGGlyphsCount(bounds: interop.PointerConvertible, glyphs: interop.PointerConvertible, glyphCount: number): void;

  getAdvancementsForCGGlyphsCount(advancements: interop.PointerConvertible, glyphs: interop.PointerConvertible, glyphCount: number): void;

  set(): void;

  setInContext(graphicsContext: NSGraphicsContext): void;

  readonly verticalFont: NSFont;

  readonly isVertical: boolean;

  glyphWithName(name: string): number;

  boundingRectForGlyph(glyph: number): CGRect;

  advancementForGlyph(glyph: number): CGSize;

  getBoundingRectsForGlyphsCount(bounds: interop.PointerConvertible, glyphs: interop.PointerConvertible, glyphCount: number): void;

  getAdvancementsForGlyphsCount(advancements: interop.PointerConvertible, glyphs: interop.PointerConvertible, glyphCount: number): void;

  getAdvancementsForPackedGlyphsLength(advancements: interop.PointerConvertible, packedGlyphs: interop.PointerConvertible, length: number): void;

  readonly printerFont: NSFont;

  readonly screenFont: NSFont;

  screenFontWithRenderingMode(renderingMode: interop.Enum<typeof NSFontRenderingMode>): NSFont;

  readonly renderingMode: interop.Enum<typeof NSFontRenderingMode>;

  static preferredFontForTextStyleOptions(style: string, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSFont;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSFontDescriptor extends NSObject implements NSCopying, NSSecureCoding {
  readonly postscriptName: string;

  readonly pointSize: number;

  readonly matrix: NSAffineTransform;

  readonly symbolicTraits: interop.Enum<typeof NSFontDescriptorSymbolicTraits>;

  readonly requiresFontAssetRequest: boolean;

  objectForKey(attribute: string): interop.Object;

  readonly fontAttributes: NSDictionary;

  static fontDescriptorWithFontAttributes(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): NSFontDescriptor;

  static fontDescriptorWithNameSize(fontName: string, size: number): NSFontDescriptor;

  static fontDescriptorWithNameMatrix(fontName: string, matrix: NSAffineTransform): NSFontDescriptor;

  initWithFontAttributes(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  matchingFontDescriptorsWithMandatoryKeys(mandatoryKeys: NSSet | null): NSArray;

  matchingFontDescriptorWithMandatoryKeys(mandatoryKeys: NSSet | null): NSFontDescriptor;

  fontDescriptorByAddingAttributes(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSFontDescriptor;

  fontDescriptorWithSymbolicTraits(symbolicTraits: interop.Enum<typeof NSFontDescriptorSymbolicTraits>): NSFontDescriptor;

  fontDescriptorWithSize(newPointSize: number): NSFontDescriptor;

  fontDescriptorWithMatrix(matrix: NSAffineTransform): NSFontDescriptor;

  fontDescriptorWithFace(newFace: string): NSFontDescriptor;

  fontDescriptorWithFamily(newFamily: string): NSFontDescriptor;

  fontDescriptorWithDesign(design: string): this;

  static preferredFontDescriptorForTextStyleOptions(style: string, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSFontDescriptor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSCollectionLayoutDecorationItem extends NSCollectionLayoutItem implements NSCopying {
  static backgroundDecorationItemWithElementKind<This extends abstract new (...args: any) => any>(this: This, elementKind: string): InstanceType<This>;

  zIndex: number;

  readonly elementKind: string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSCollectionLayoutEdgeSpacing extends NSObject implements NSCopying {
  static spacingForLeadingTopTrailingBottom<This extends abstract new (...args: any) => any>(this: This, leading: NSCollectionLayoutSpacing | null, top: NSCollectionLayoutSpacing | null, trailing: NSCollectionLayoutSpacing | null, bottom: NSCollectionLayoutSpacing | null): InstanceType<This>;

  readonly leading: NSCollectionLayoutSpacing;

  readonly top: NSCollectionLayoutSpacing;

  readonly trailing: NSCollectionLayoutSpacing;

  readonly bottom: NSCollectionLayoutSpacing;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSLayoutAnchor<AnchorType = interop.Object> extends NSObject implements NSCopying, NSCoding {
  constraintEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;

  constraintGreaterThanOrEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;

  constraintLessThanOrEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;

  constraintEqualToAnchorConstant(anchor: NSLayoutAnchor, c: number): NSLayoutConstraint;

  constraintGreaterThanOrEqualToAnchorConstant(anchor: NSLayoutAnchor, c: number): NSLayoutConstraint;

  constraintLessThanOrEqualToAnchorConstant(anchor: NSLayoutAnchor, c: number): NSLayoutConstraint;

  readonly name: string;

  readonly item: interop.Object;

  readonly hasAmbiguousLayout: boolean;

  readonly constraintsAffectingLayout: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSCollectionLayoutSize extends NSObject implements NSCopying {
  static sizeWithWidthDimensionHeightDimension<This extends abstract new (...args: any) => any>(this: This, width: NSCollectionLayoutDimension, height: NSCollectionLayoutDimension): InstanceType<This>;

  readonly widthDimension: NSCollectionLayoutDimension;

  readonly heightDimension: NSCollectionLayoutDimension;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSMutableParagraphStyle extends NSParagraphStyle {
  // @ts-ignore MemberDecl.tsIgnore
  lineSpacing: number;

  // @ts-ignore MemberDecl.tsIgnore
  paragraphSpacing: number;

  // @ts-ignore MemberDecl.tsIgnore
  firstLineHeadIndent: number;

  // @ts-ignore MemberDecl.tsIgnore
  headIndent: number;

  // @ts-ignore MemberDecl.tsIgnore
  tailIndent: number;

  // @ts-ignore MemberDecl.tsIgnore
  lineBreakMode: interop.Enum<typeof NSLineBreakMode>;

  // @ts-ignore MemberDecl.tsIgnore
  minimumLineHeight: number;

  // @ts-ignore MemberDecl.tsIgnore
  maximumLineHeight: number;

  // @ts-ignore MemberDecl.tsIgnore
  baseWritingDirection: interop.Enum<typeof NSWritingDirection>;

  // @ts-ignore MemberDecl.tsIgnore
  lineHeightMultiple: number;

  // @ts-ignore MemberDecl.tsIgnore
  paragraphSpacingBefore: number;

  // @ts-ignore MemberDecl.tsIgnore
  hyphenationFactor: number;

  // @ts-ignore MemberDecl.tsIgnore
  usesDefaultHyphenation: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  get tabStops(): NSArray;
  // @ts-ignore MemberDecl.tsIgnore
  set tabStops(value: NSArray<interop.Object> | Array<interop.Object>);

  // @ts-ignore MemberDecl.tsIgnore
  defaultTabInterval: number;

  // @ts-ignore MemberDecl.tsIgnore
  allowsDefaultTighteningForTruncation: boolean;

  // @ts-ignore MemberDecl.tsIgnore
  lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;

  // @ts-ignore MemberDecl.tsIgnore
  get textLists(): NSArray;
  // @ts-ignore MemberDecl.tsIgnore
  set textLists(value: NSArray<interop.Object> | Array<interop.Object>);

  addTabStop(anObject: NSTextTab): void;

  removeTabStop(anObject: NSTextTab): void;

  setParagraphStyle(obj: NSParagraphStyle): void;

  // @ts-ignore MemberDecl.tsIgnore
  alignment: interop.Enum<typeof NSTextAlignment>;

  // @ts-ignore MemberDecl.tsIgnore
  tighteningFactorForTruncation: number;

  // @ts-ignore MemberDecl.tsIgnore
  get textBlocks(): NSArray;
  // @ts-ignore MemberDecl.tsIgnore
  set textBlocks(value: NSArray<interop.Object> | Array<interop.Object>);

  // @ts-ignore MemberDecl.tsIgnore
  headerLevel: number;
}

declare class NSSharingServicePicker extends NSObject {
  delegate: NSSharingServicePickerDelegate;

  initWithItems(items: NSArray<interop.Object> | Array<interop.Object>): this;

  showRelativeToRectOfViewPreferredEdge(rect: CGRect, view: NSView, preferredEdge: interop.Enum<typeof NSRectEdge>): void;

  close(): void;

  readonly standardShareMenuItem: NSMenuItem;
}

declare class NSCollectionLayoutDimension extends NSObject implements NSCopying {
  static fractionalWidthDimension<This extends abstract new (...args: any) => any>(this: This, fractionalWidth: number): InstanceType<This>;

  static fractionalHeightDimension<This extends abstract new (...args: any) => any>(this: This, fractionalHeight: number): InstanceType<This>;

  static absoluteDimension<This extends abstract new (...args: any) => any>(this: This, absoluteDimension: number): InstanceType<This>;

  static estimatedDimension<This extends abstract new (...args: any) => any>(this: This, estimatedDimension: number): InstanceType<This>;

  readonly isFractionalWidth: boolean;

  readonly isFractionalHeight: boolean;

  readonly isAbsolute: boolean;

  readonly isEstimated: boolean;

  readonly dimension: number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSPrinter extends NSObject implements NSCopying, NSCoding {
  static readonly printerNames: NSArray;

  static readonly printerTypes: NSArray;

  static printerWithName(name: string): NSPrinter;

  static printerWithType(type: string): NSPrinter;

  readonly name: string;

  readonly type: string;

  readonly languageLevel: number;

  pageSizeForPaper(paperName: string): CGSize;

  readonly deviceDescription: NSDictionary;

  statusForTable(tableName: string): interop.Enum<typeof NSPrinterTableStatus>;

  isKeyInTable(key: string | null, table: string): boolean;

  booleanForKeyInTable(key: string | null, table: string): boolean;

  floatForKeyInTable(key: string | null, table: string): number;

  intForKeyInTable(key: string | null, table: string): number;

  rectForKeyInTable(key: string | null, table: string): CGRect;

  sizeForKeyInTable(key: string | null, table: string): CGSize;

  stringForKeyInTable(key: string | null, table: string): string;

  stringListForKeyInTable(key: string | null, table: string): NSArray;

  imageRectForPaper(paperName: string | null): CGRect;

  acceptsBinary(): boolean;

  isColor(): boolean;

  isFontAvailable(faceName: string | null): boolean;

  isOutputStackInReverseOrder(): boolean;

  static printerWithNameDomainIncludeUnavailable(name: string, domain: string | null, flag: boolean): NSPrinter;

  domain(): string;

  host(): string;

  note(): string;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSCollectionViewCompositionalLayoutConfiguration extends NSObject implements NSCopying {
  scrollDirection: interop.Enum<typeof NSCollectionViewScrollDirection>;

  interSectionSpacing: number;

  get boundarySupplementaryItems(): NSArray;
  set boundarySupplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>);

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSCollectionViewLayoutAttributes extends NSObject implements NSCopying {
  frame: CGRect;

  size: CGSize;

  alpha: number;

  zIndex: number;

  isHidden: boolean;

  indexPath: NSIndexPath;

  readonly representedElementCategory: interop.Enum<typeof NSCollectionElementCategory>;

  readonly representedElementKind: string;

  static layoutAttributesForItemWithIndexPath<This extends abstract new (...args: any) => any>(this: This, indexPath: NSIndexPath): InstanceType<This>;

  static layoutAttributesForInterItemGapBeforeIndexPath<This extends abstract new (...args: any) => any>(this: This, indexPath: NSIndexPath): InstanceType<This>;

  static layoutAttributesForSupplementaryViewOfKindWithIndexPath<This extends abstract new (...args: any) => any>(this: This, elementKind: string, indexPath: NSIndexPath): InstanceType<This>;

  static layoutAttributesForDecorationViewOfKindWithIndexPath<This extends abstract new (...args: any) => any>(this: This, decorationViewKind: string, indexPath: NSIndexPath): InstanceType<This>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSViewController extends NSResponder implements NSEditor, NSSeguePerforming, NSUserInterfaceItemIdentification {
  initWithNibNameBundle(nibNameOrNil: string | null, nibBundleOrNil: NSBundle | null): this;

  initWithCoder(coder: NSCoder): this;

  readonly nibName: string;

  readonly nibBundle: NSBundle;

  representedObject: interop.Object;

  title: string;

  view: NSView;

  readonly viewIfLoaded: NSView;

  loadView(): void;

  loadViewIfNeeded(): void;

  commitEditingWithDelegateDidCommitSelectorContextInfo(delegate: interop.Object | null, didCommitSelector: string | null, contextInfo: interop.PointerConvertible): void;

  commitEditing(): boolean;

  discardEditing(): void;

  viewDidLoad(): void;

  readonly isViewLoaded: boolean;

  viewWillAppear(): void;

  viewDidAppear(): void;

  viewWillDisappear(): void;

  viewDidDisappear(): void;

  preferredContentSize: CGSize;

  updateViewConstraints(): void;

  viewWillLayout(): void;

  viewDidLayout(): void;

  presentViewControllerAnimator(viewController: NSViewController, animator: NSViewControllerPresentationAnimator): void;

  dismissViewController(viewController: NSViewController): void;

  dismissController(sender: interop.Object | null): void;

  readonly presentedViewControllers: NSArray;

  readonly presentingViewController: NSViewController;

  presentViewControllerAsSheet(viewController: NSViewController): void;

  presentViewControllerAsModalWindow(viewController: NSViewController): void;

  presentViewControllerAsPopoverRelativeToRectOfViewPreferredEdgeBehavior(viewController: NSViewController, positioningRect: CGRect, positioningView: NSView, preferredEdge: interop.Enum<typeof NSRectEdge>, behavior: interop.Enum<typeof NSPopoverBehavior>): void;

  presentViewControllerAsPopoverRelativeToRectOfViewPreferredEdgeBehaviorHasFullSizeContent(viewController: NSViewController, positioningRect: CGRect, positioningView: NSView, preferredEdge: interop.Enum<typeof NSRectEdge>, behavior: interop.Enum<typeof NSPopoverBehavior>, hasFullSizeContent: boolean): void;

  transitionFromViewControllerToViewControllerOptionsCompletionHandler(fromViewController: NSViewController, toViewController: NSViewController, options: interop.Enum<typeof NSViewControllerTransitionOptions>, completion: () => void | null): void;

  readonly parentViewController: NSViewController;

  get childViewControllers(): NSArray;
  set childViewControllers(value: NSArray<interop.Object> | Array<interop.Object>);

  addChildViewController(childViewController: NSViewController): void;

  removeFromParentViewController(): void;

  insertChildViewControllerAtIndex(childViewController: NSViewController, index: number): void;

  removeChildViewControllerAtIndex(index: number): void;

  preferredContentSizeDidChangeForViewController(viewController: NSViewController): void;

  viewWillTransitionToSize(newSize: CGSize): void;

  readonly storyboard: NSStoryboard;

  readonly extensionContext: NSExtensionContext;

  sourceItemView: NSView;

  preferredScreenOrigin: CGPoint;

  readonly preferredMinimumSize: CGSize;

  readonly preferredMaximumSize: CGSize;

  commitEditingAndReturnError(error: interop.PointerConvertible): boolean;

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

  prepareForSegueSender(segue: NSStoryboardSegue, sender: interop.Object | null): void;

  performSegueWithIdentifierSender(identifier: string, sender: interop.Object | null): void;

  shouldPerformSegueWithIdentifierSender(identifier: string, sender: interop.Object | null): boolean;

  identifier: string;
}

declare class NSStoryboard extends NSObject {
  static readonly mainStoryboard: NSStoryboard;

  static storyboardWithNameBundle<This extends abstract new (...args: any) => any>(this: This, name: string, storyboardBundleOrNil: NSBundle | null): InstanceType<This>;

  instantiateInitialController(): interop.Object;

  instantiateInitialControllerWithCreator(block: (p1: NSCoder) => interop.Object | null): interop.Object;

  instantiateControllerWithIdentifier(identifier: string): interop.Object;

  instantiateControllerWithIdentifierCreator(identifier: string, block: (p1: NSCoder) => interop.Object | null): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSFontPanel extends NSPanel {
  static readonly sharedFontPanel: NSFontPanel;

  static readonly sharedFontPanelExists: boolean;

  accessoryView: NSView;

  setPanelFontIsMultiple(fontObj: NSFont, flag: boolean): void;

  panelConvertFont(fontObj: NSFont): NSFont;

  // @ts-ignore MemberDecl.tsIgnore
  worksWhenModal: boolean;

  isEnabled: boolean;

  reloadDefaultFontFamilies(): void;
}

declare class NSTouchBarItem extends NSObject implements NSCoding {
  initWithIdentifier(identifier: string): this;

  initWithCoder(coder: NSCoder): this;

  readonly identifier: string;

  visibilityPriority: number;

  readonly view: NSView;

  readonly viewController: NSViewController;

  readonly customizationLabel: string;

  readonly isVisible: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSControl extends NSView {
  initWithFrame(frameRect: CGRect): this;

  initWithCoder(coder: NSCoder): this;

  target: interop.Object;

  action: string;

  // @ts-ignore MemberDecl.tsIgnore
  tag: number;

  ignoresMultiClick: boolean;

  isContinuous: boolean;

  isEnabled: boolean;

  refusesFirstResponder: boolean;

  isHighlighted: boolean;

  controlSize: interop.Enum<typeof NSControlSize>;

  formatter: NSFormatter;

  objectValue: interop.Object;

  stringValue: string;

  attributedStringValue: NSAttributedString;

  intValue: number;

  integerValue: number;

  floatValue: number;

  doubleValue: number;

  sizeThatFits(size: CGSize): CGSize;

  sizeToFit(): void;

  sendActionOn(mask: interop.Enum<typeof NSEventMask>): number;

  sendActionTo(action: string | null, target: interop.Object | null): boolean;

  takeIntValueFrom(sender: interop.Object | null): void;

  takeFloatValueFrom(sender: interop.Object | null): void;

  takeDoubleValueFrom(sender: interop.Object | null): void;

  takeStringValueFrom(sender: interop.Object | null): void;

  takeObjectValueFrom(sender: interop.Object | null): void;

  takeIntegerValueFrom(sender: interop.Object | null): void;

  mouseDown(event: NSEvent): void;

  performClick(sender: interop.Object | null): void;

  font: NSFont;

  usesSingleLineMode: boolean;

  lineBreakMode: interop.Enum<typeof NSLineBreakMode>;

  alignment: interop.Enum<typeof NSTextAlignment>;

  baseWritingDirection: interop.Enum<typeof NSWritingDirection>;

  allowsExpansionToolTips: boolean;

  expansionFrameWithFrame(contentFrame: CGRect): CGRect;

  drawWithExpansionFrameInView(contentFrame: CGRect, view: NSView): void;

  currentEditor(): NSText;

  abortEditing(): boolean;

  validateEditing(): void;

  editWithFrameEditorDelegateEvent(rect: CGRect, textObj: NSText, delegate: interop.Object | null, event: NSEvent): void;

  selectWithFrameEditorDelegateStartLength(rect: CGRect, textObj: NSText, delegate: interop.Object | null, selStart: number, selLength: number): void;

  endEditing(textObj: NSText): void;

  setFloatingPointFormatLeftRight(autoRange: boolean, leftDigits: number, rightDigits: number): void;

  static cellClass: interop.Object;

  cell: NSCell;

  readonly selectedCell: NSCell;

  readonly selectedTag: number;

  // @ts-ignore MemberDecl.tsIgnore
  setNeedsDisplay(): void;

  calcSize(): void;

  updateCell(cell: NSCell): void;

  updateCellInside(cell: NSCell): void;

  drawCellInside(cell: NSCell): void;

  drawCell(cell: NSCell): void;

  selectCell(cell: NSCell): void;

  invalidateIntrinsicContentSizeForCell(cell: NSCell): void;
}

declare class NSBox extends NSView {
  boxType: interop.Enum<typeof NSBoxType>;

  titlePosition: interop.Enum<typeof NSTitlePosition>;

  title: string;

  titleFont: NSFont;

  readonly borderRect: CGRect;

  readonly titleRect: CGRect;

  readonly titleCell: interop.Object;

  contentViewMargins: CGSize;

  sizeToFit(): void;

  setFrameFromContentFrame(contentFrame: CGRect): void;

  contentView: NSView;

  isTransparent: boolean;

  borderWidth: number;

  cornerRadius: number;

  borderColor: NSColor;

  fillColor: NSColor;

  borderType: interop.Enum<typeof NSBorderType>;

  setTitleWithMnemonic(stringWithAmpersand: string): void;
}

declare class NSAnimationContext extends NSObject {
  static runAnimationGroupCompletionHandler(changes: (p1: NSAnimationContext) => void, completionHandler: () => void | null): void;

  static runAnimationGroup(changes: (p1: NSAnimationContext) => void): void;

  static beginGrouping(): void;

  static endGrouping(): void;

  static readonly currentContext: NSAnimationContext;

  duration: number;

  timingFunction: CAMediaTimingFunction;

  completionHandler: () => void;

  allowsImplicitAnimation: boolean;
}

declare class NSTextSelection extends NSObject implements NSSecureCoding {
  initWithRangesAffinityGranularity(textRanges: NSArray<interop.Object> | Array<interop.Object>, affinity: interop.Enum<typeof NSTextSelectionAffinity>, granularity: interop.Enum<typeof NSTextSelectionGranularity>): this;

  initWithCoder(coder: NSCoder): this;

  initWithRangeAffinityGranularity(range: NSTextRange, affinity: interop.Enum<typeof NSTextSelectionAffinity>, granularity: interop.Enum<typeof NSTextSelectionGranularity>): this;

  initWithLocationAffinity(location: NSTextLocation, affinity: interop.Enum<typeof NSTextSelectionAffinity>): this;

  readonly textRanges: NSArray;

  readonly granularity: interop.Enum<typeof NSTextSelectionGranularity>;

  readonly affinity: interop.Enum<typeof NSTextSelectionAffinity>;

  readonly isTransient: boolean;

  anchorPositionOffset: number;

  isLogical: boolean;

  secondarySelectionLocation: NSTextLocation;

  get typingAttributes(): NSDictionary;
  set typingAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  textSelectionWithTextRanges(textRanges: NSArray<interop.Object> | Array<interop.Object>): NSTextSelection;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSApplication extends NSResponder implements NSUserInterfaceValidations, NSMenuItemValidation, NSAccessibilityElementProtocol, NSAccessibility {
  static readonly sharedApplication: NSApplication;

  delegate: NSApplicationDelegate;

  hide(sender: interop.Object | null): void;

  unhide(sender: interop.Object | null): void;

  unhideWithoutActivation(): void;

  windowWithWindowNumber(windowNum: number): NSWindow;

  readonly mainWindow: NSWindow;

  readonly keyWindow: NSWindow;

  readonly isActive: boolean;

  readonly isHidden: boolean;

  readonly isRunning: boolean;

  deactivate(): void;

  activateIgnoringOtherApps(ignoreOtherApps: boolean): void;

  activate(): void;

  yieldActivationToApplication(application: NSRunningApplication): void;

  yieldActivationToApplicationWithBundleIdentifier(bundleIdentifier: string): void;

  hideOtherApplications(sender: interop.Object | null): void;

  unhideAllApplications(sender: interop.Object | null): void;

  finishLaunching(): void;

  run(): void;

  runModalForWindow(window: NSWindow): number;

  stop(sender: interop.Object | null): void;

  stopModal(): void;

  stopModalWithCode(returnCode: number): void;

  abortModal(): void;

  readonly modalWindow: NSWindow;

  beginModalSessionForWindow(window: NSWindow): interop.Pointer;

  runModalSession(session: interop.PointerConvertible): number;

  endModalSession(session: interop.PointerConvertible): void;

  terminate(sender: interop.Object | null): void;

  requestUserAttention(requestType: interop.Enum<typeof NSRequestUserAttentionType>): number;

  cancelUserAttentionRequest(request: number): void;

  enumerateWindowsWithOptionsUsingBlock(options: interop.Enum<typeof NSWindowListOptions>, block: (p1: NSWindow, p2: interop.PointerConvertible) => void): void;

  preventWindowOrdering(): void;

  readonly windows: NSArray;

  setWindowsNeedUpdate(needUpdate: boolean): void;

  updateWindows(): void;

  mainMenu: NSMenu;

  helpMenu: NSMenu;

  applicationIconImage: NSImage;

  activationPolicy(): interop.Enum<typeof NSApplicationActivationPolicy>;

  setActivationPolicy(activationPolicy: interop.Enum<typeof NSApplicationActivationPolicy>): boolean;

  readonly dockTile: NSDockTile;

  reportException(exception: NSException): void;

  static detachDrawingThreadToTargetWithObject(selector: string, target: interop.Object, argument: interop.Object | null): void;

  replyToApplicationShouldTerminate(shouldTerminate: boolean): void;

  replyToOpenOrPrint(reply: interop.Enum<typeof NSApplicationDelegateReply>): void;

  orderFrontCharacterPalette(sender: interop.Object | null): void;

  presentationOptions: interop.Enum<typeof NSApplicationPresentationOptions>;

  readonly currentSystemPresentationOptions: interop.Enum<typeof NSApplicationPresentationOptions>;

  readonly occlusionState: interop.Enum<typeof NSApplicationOcclusionState>;

  readonly isProtectedDataAvailable: boolean;

  appearance: NSAppearance;

  readonly effectiveAppearance: NSAppearance;

  sendEvent(event: NSEvent): void;

  postEventAtStart(event: NSEvent, atStart: boolean): void;

  readonly currentEvent: NSEvent;

  nextEventMatchingMaskUntilDateInModeDequeue(mask: interop.Enum<typeof NSEventMask>, expiration: NSDate | null, mode: string, deqFlag: boolean): NSEvent;

  discardEventsMatchingMaskBeforeEvent(mask: interop.Enum<typeof NSEventMask>, lastEvent: NSEvent | null): void;

  sendActionToFrom(action: string, target: interop.Object | null, sender: interop.Object | null): boolean;

  targetForAction(action: string): interop.Object;

  targetForActionToFrom(action: string, target: interop.Object | null, sender: interop.Object | null): interop.Object;

  tryToPerformWith(action: string, object: interop.Object | null): boolean;

  validRequestorForSendTypeReturnType(sendType: string | null, returnType: string | null): interop.Object;

  windowsMenu: NSMenu;

  arrangeInFront(sender: interop.Object | null): void;

  removeWindowsItem(win: NSWindow): void;

  addWindowsItemTitleFilename(win: NSWindow, string: string, isFilename: boolean): void;

  changeWindowsItemTitleFilename(win: NSWindow, string: string, isFilename: boolean): void;

  updateWindowsItem(win: NSWindow): void;

  miniaturizeAll(sender: interop.Object | null): void;

  readonly isFullKeyboardAccessEnabled: boolean;

  servicesMenu: NSMenu;

  registerServicesMenuSendTypesReturnTypes(sendTypes: NSArray<interop.Object> | Array<interop.Object>, returnTypes: NSArray<interop.Object> | Array<interop.Object>): void;

  servicesProvider: interop.Object;

  orderFrontStandardAboutPanel(sender: interop.Object | null): void;

  orderFrontStandardAboutPanelWithOptions(optionsDictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  readonly userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  disableRelaunchOnLogin(): void;

  enableRelaunchOnLogin(): void;

  registerForRemoteNotifications(): void;

  unregisterForRemoteNotifications(): void;

  readonly isRegisteredForRemoteNotifications: boolean;

  registerForRemoteNotificationTypes(types: interop.Enum<typeof NSRemoteNotificationType>): void;

  readonly enabledRemoteNotificationTypes: interop.Enum<typeof NSRemoteNotificationType>;

  runModalForWindowRelativeToWindow(window: NSWindow, docWindow: NSWindow): number;

  beginModalSessionForWindowRelativeToWindow(window: NSWindow, docWindow: NSWindow): interop.Pointer;

  applicationPrintFiles(sender: NSApplication, filenames: NSArray<interop.Object> | Array<interop.Object>): void;

  beginSheetModalForWindowModalDelegateDidEndSelectorContextInfo(sheet: NSWindow, docWindow: NSWindow, modalDelegate: interop.Object | null, didEndSelector: string | null, contextInfo: interop.PointerConvertible): void;

  endSheet(sheet: NSWindow): void;

  endSheetReturnCode(sheet: NSWindow, returnCode: number): void;

  makeWindowsPerformInOrder(selector: string, inOrder: boolean): NSWindow;

  readonly context: NSGraphicsContext;

  activateContextHelpMode(sender: interop.Object | null): void;

  showHelp(sender: interop.Object | null): void;

  isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;

  toggleTouchBarCustomizationPalette(sender: interop.Object | null): void;

  orderFrontColorPanel(sender: interop.Object | null): void;

  runPageLayout(sender: interop.Object | null): void;

  readonly orderedDocuments: NSArray;

  readonly orderedWindows: NSArray;

  registerUserInterfaceItemSearchHandler(handler: NSUserInterfaceItemSearching): void;

  unregisterUserInterfaceItemSearchHandler(handler: NSUserInterfaceItemSearching): void;

  searchStringInUserInterfaceItemStringSearchRangeFoundRange(searchString: string, stringToSearch: string, searchRange: _NSRange, foundRange: interop.PointerConvertible): boolean;

  restoreWindowWithIdentifierStateCompletionHandler(identifier: string, state: NSCoder, completionHandler: (p1: NSWindow, p2: NSError) => void | null): boolean;

  extendStateRestoration(): void;

  completeStateRestoration(): void;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  validateMenuItem(menuItem: NSMenuItem): boolean;

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

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSTableView extends NSControl implements NSUserInterfaceValidations, NSTextViewDelegate, NSDraggingSource, NSAccessibilityTable {
  initWithFrame(frameRect: CGRect): this;

  initWithCoder(coder: NSCoder): this;

  dataSource: NSTableViewDataSource;

  delegate: NSTableViewDelegate;

  headerView: NSTableHeaderView;

  cornerView: NSView;

  allowsColumnReordering: boolean;

  allowsColumnResizing: boolean;

  columnAutoresizingStyle: interop.Enum<typeof NSTableViewColumnAutoresizingStyle>;

  gridStyleMask: interop.Enum<typeof NSTableViewGridLineStyle>;

  intercellSpacing: CGSize;

  usesAlternatingRowBackgroundColors: boolean;

  backgroundColor: NSColor;

  gridColor: NSColor;

  rowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;

  readonly effectiveRowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;

  rowHeight: number;

  noteHeightOfRowsWithIndexesChanged(indexSet: NSIndexSet): void;

  readonly tableColumns: NSArray;

  readonly numberOfColumns: number;

  readonly numberOfRows: number;

  addTableColumn(tableColumn: NSTableColumn): void;

  removeTableColumn(tableColumn: NSTableColumn): void;

  moveColumnToColumn(oldIndex: number, newIndex: number): void;

  columnWithIdentifier(identifier: string): number;

  tableColumnWithIdentifier(identifier: string): NSTableColumn;

  tile(): void;

  sizeToFit(): void;

  sizeLastColumnToFit(): void;

  scrollRowToVisible(row: number): void;

  scrollColumnToVisible(column: number): void;

  reloadData(): void;

  noteNumberOfRowsChanged(): void;

  reloadDataForRowIndexesColumnIndexes(rowIndexes: NSIndexSet, columnIndexes: NSIndexSet): void;

  readonly editedColumn: number;

  readonly editedRow: number;

  readonly clickedColumn: number;

  readonly clickedRow: number;

  doubleAction: string;

  get sortDescriptors(): NSArray;
  set sortDescriptors(value: NSArray<interop.Object> | Array<interop.Object>);

  setIndicatorImageInTableColumn(image: NSImage | null, tableColumn: NSTableColumn): void;

  indicatorImageInTableColumn(tableColumn: NSTableColumn): NSImage;

  highlightedTableColumn: NSTableColumn;

  verticalMotionCanBeginDrag: boolean;

  canDragRowsWithIndexesAtPoint(rowIndexes: NSIndexSet, mouseDownPoint: CGPoint): boolean;

  dragImageForRowsWithIndexesTableColumnsEventOffset(dragRows: NSIndexSet, tableColumns: NSArray<interop.Object> | Array<interop.Object>, dragEvent: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  setDraggingSourceOperationMaskForLocal(mask: interop.Enum<typeof NSDragOperation>, isLocal: boolean): void;

  setDropRowDropOperation(row: number, dropOperation: interop.Enum<typeof NSTableViewDropOperation>): void;

  allowsMultipleSelection: boolean;

  allowsEmptySelection: boolean;

  allowsColumnSelection: boolean;

  selectAll(sender: interop.Object | null): void;

  deselectAll(sender: interop.Object | null): void;

  selectColumnIndexesByExtendingSelection(indexes: NSIndexSet, extend: boolean): void;

  selectRowIndexesByExtendingSelection(indexes: NSIndexSet, extend: boolean): void;

  readonly selectedColumnIndexes: NSIndexSet;

  readonly selectedRowIndexes: NSIndexSet;

  deselectColumn(column: number): void;

  deselectRow(row: number): void;

  readonly selectedColumn: number;

  readonly selectedRow: number;

  isColumnSelected(column: number): boolean;

  isRowSelected(row: number): boolean;

  readonly numberOfSelectedColumns: number;

  readonly numberOfSelectedRows: number;

  allowsTypeSelect: boolean;

  style: interop.Enum<typeof NSTableViewStyle>;

  readonly effectiveStyle: interop.Enum<typeof NSTableViewStyle>;

  selectionHighlightStyle: interop.Enum<typeof NSTableViewSelectionHighlightStyle>;

  draggingDestinationFeedbackStyle: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>;

  rectOfColumn(column: number): CGRect;

  rectOfRow(row: number): CGRect;

  columnIndexesInRect(rect: CGRect): NSIndexSet;

  rowsInRect(rect: CGRect): _NSRange;

  columnAtPoint(point: CGPoint): number;

  rowAtPoint(point: CGPoint): number;

  frameOfCellAtColumnRow(column: number, row: number): CGRect;

  autosaveName: string;

  autosaveTableColumns: boolean;

  editColumnRowWithEventSelect(column: number, row: number, event: NSEvent | null, select: boolean): void;

  drawRowClipRect(row: number, clipRect: CGRect): void;

  highlightSelectionInClipRect(clipRect: CGRect): void;

  drawGridInClipRect(clipRect: CGRect): void;

  drawBackgroundInClipRect(clipRect: CGRect): void;

  viewAtColumnRowMakeIfNecessary(column: number, row: number, makeIfNecessary: boolean): NSView;

  rowViewAtRowMakeIfNecessary(row: number, makeIfNecessary: boolean): NSTableRowView;

  rowForView(view: NSView): number;

  columnForView(view: NSView): number;

  makeViewWithIdentifierOwner(identifier: string, owner: interop.Object | null): NSView;

  enumerateAvailableRowViewsUsingBlock(handler: (p1: NSTableRowView, p2: number) => void): void;

  floatsGroupRows: boolean;

  rowActionsVisible: boolean;

  beginUpdates(): void;

  endUpdates(): void;

  insertRowsAtIndexesWithAnimation(indexes: NSIndexSet, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;

  removeRowsAtIndexesWithAnimation(indexes: NSIndexSet, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;

  moveRowAtIndexToIndex(oldIndex: number, newIndex: number): void;

  hideRowsAtIndexesWithAnimation(indexes: NSIndexSet, rowAnimation: interop.Enum<typeof NSTableViewAnimationOptions>): void;

  unhideRowsAtIndexesWithAnimation(indexes: NSIndexSet, rowAnimation: interop.Enum<typeof NSTableViewAnimationOptions>): void;

  readonly hiddenRowIndexes: NSIndexSet;

  registerNibForIdentifier(nib: NSNib | null, identifier: string): void;

  readonly registeredNibsByIdentifier: NSDictionary;

  didAddRowViewForRow(rowView: NSTableRowView, row: number): void;

  didRemoveRowViewForRow(rowView: NSTableRowView, row: number): void;

  usesStaticContents: boolean;

  userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  usesAutomaticRowHeights: boolean;

  setDrawsGrid(flag: boolean): void;

  drawsGrid(): boolean;

  selectColumnByExtendingSelection(column: number, extend: boolean): void;

  selectRowByExtendingSelection(row: number, extend: boolean): void;

  selectedColumnEnumerator(): NSEnumerator;

  selectedRowEnumerator(): NSEnumerator;

  dragImageForRowsEventDragImageOffset(dragRows: NSArray<interop.Object> | Array<interop.Object>, dragEvent: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  setAutoresizesAllColumnsToFit(flag: boolean): void;

  autoresizesAllColumnsToFit(): boolean;

  columnsInRect(rect: CGRect): _NSRange;

  preparedCellAtColumnRow(column: number, row: number): NSCell;

  textShouldBeginEditing(textObject: NSText): boolean;

  textShouldEndEditing(textObject: NSText): boolean;

  textDidBeginEditing(notification: NSNotification): void;

  textDidEndEditing(notification: NSNotification): void;

  textDidChange(notification: NSNotification): void;

  shouldFocusCellAtColumnRow(cell: NSCell, column: number, row: number): boolean;

  focusedColumn(): number;

  setFocusedColumn(focusedColumn: number): void;

  performClickOnCellAtColumnRow(column: number, row: number): void;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  textViewClickedOnLinkAtIndex(textView: NSTextView, link: interop.Object, charIndex: number): boolean;

  textViewClickedOnCellInRectAtIndex(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;

  textViewDoubleClickedOnCellInRectAtIndex(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;

  textViewDraggedCellInRectEventAtIndex(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent, charIndex: number): void;

  textViewWritablePasteboardTypesForCellAtIndex(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number): NSArray;

  textViewWriteCellAtIndexToPasteboardType(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number, pboard: NSPasteboard, type: string): boolean;

  textViewWillChangeSelectionFromCharacterRangeToCharacterRange(textView: NSTextView, oldSelectedCharRange: _NSRange, newSelectedCharRange: _NSRange): _NSRange;

  textViewWillChangeSelectionFromCharacterRangesToCharacterRanges(textView: NSTextView, oldSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>, newSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  textViewShouldChangeTextInRangesReplacementStrings(textView: NSTextView, affectedRanges: NSArray<interop.Object> | Array<interop.Object>, replacementStrings: NSArray<interop.Object> | Array<interop.Object> | null): boolean;

  textViewShouldChangeTypingAttributesToAttributes(textView: NSTextView, oldTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, newTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSDictionary;

  textViewDidChangeSelection(notification: NSNotification): void;

  textViewDidChangeTypingAttributes(notification: NSNotification): void;

  textViewWillDisplayToolTipForCharacterAtIndex(textView: NSTextView, tooltip: string, characterIndex: number): string;

  textViewCompletionsForPartialWordRangeIndexOfSelectedItem(textView: NSTextView, words: NSArray<interop.Object> | Array<interop.Object>, charRange: _NSRange, index: interop.PointerConvertible): NSArray;

  textViewShouldChangeTextInRangeReplacementString(textView: NSTextView, affectedCharRange: _NSRange, replacementString: string | null): boolean;

  textViewDoCommandBySelector(textView: NSTextView, commandSelector: string): boolean;

  textViewShouldSetSpellingStateRange(textView: NSTextView, value: number, affectedCharRange: _NSRange): number;

  textViewMenuForEventAtIndex(view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: number): NSMenu;

  textViewWillCheckTextInRangeOptionsTypes(view: NSTextView, range: _NSRange, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, checkingTypes: interop.PointerConvertible): NSDictionary;

  textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount(view: NSTextView, range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, results: NSArray<interop.Object> | Array<interop.Object>, orthography: NSOrthography, wordCount: number): NSArray;

  textViewURLForContentsOfTextAttachmentAtIndex(textView: NSTextView, textAttachment: NSTextAttachment, charIndex: number): NSURL;

  textViewWillShowSharingServicePickerForItems(textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray<interop.Object> | Array<interop.Object>): NSSharingServicePicker;

  undoManagerForTextView(view: NSTextView): NSUndoManager;

  textViewShouldUpdateTouchBarItemIdentifiers(textView: NSTextView, identifiers: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  textViewCandidatesForSelectedRange(textView: NSTextView, selectedRange: _NSRange): NSArray;

  textViewShouldSelectCandidateAtIndex(textView: NSTextView, index: number): boolean;

  textViewWritingToolsWillBegin(textView: NSTextView): void;

  textViewWritingToolsDidEnd(textView: NSTextView): void;

  textViewWritingToolsIgnoredRangesInEnclosingRange(textView: NSTextView, enclosingRange: _NSRange): NSArray;

  textViewClickedOnLink(textView: NSTextView, link: interop.Object): boolean;

  textViewClickedOnCellInRect(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;

  textViewDoubleClickedOnCellInRect(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;

  textViewDraggedCellInRectEvent(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent): void;

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

  draggingSessionSourceOperationMaskForDraggingContext(session: NSDraggingSession, context: interop.Enum<typeof NSDraggingContext>): interop.Enum<typeof NSDragOperation>;

  draggingSessionWillBeginAtPoint(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionMovedToPoint(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionEndedAtPointOperation(session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  ignoreModifierKeysForDraggingSession(session: NSDraggingSession): boolean;

  accessibilityLabel: string;

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  // @ts-ignore MemberDecl.tsIgnore
  setAccessibilitySelectedRows(selectedRows: NSArray<interop.Object> | Array<interop.Object>): void;

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeaderGroup(): string;

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSCandidateListTouchBarItem<CandidateType = interop.Object> extends NSTouchBarItem {
  client: NSView;

  delegate: NSCandidateListTouchBarItemDelegate;

  isCollapsed: boolean;

  allowsCollapsing: boolean;

  readonly isCandidateListVisible: boolean;

  updateWithInsertionPointVisibility(isVisible: boolean): void;

  allowsTextInputContextCandidates: boolean;

  attributedStringForCandidate: (p1: interop.Object, p2: number) => NSAttributedString;

  readonly candidates: NSArray;

  setCandidatesForSelectedRangeInString(candidates: NSArray<interop.Object> | Array<interop.Object>, selectedRange: _NSRange, originalString: string | null): void;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;
}

declare class NSPrintInfo extends NSObject implements NSCopying, NSCoding {
  static sharedPrintInfo: NSPrintInfo;

  initWithDictionary(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): this;

  initWithCoder(coder: NSCoder): this;

  init(): this;

  dictionary(): NSMutableDictionary;

  paperName: string;

  paperSize: CGSize;

  orientation: interop.Enum<typeof NSPaperOrientation>;

  scalingFactor: number;

  leftMargin: number;

  rightMargin: number;

  topMargin: number;

  bottomMargin: number;

  isHorizontallyCentered: boolean;

  isVerticallyCentered: boolean;

  horizontalPagination: interop.Enum<typeof NSPrintingPaginationMode>;

  verticalPagination: interop.Enum<typeof NSPrintingPaginationMode>;

  jobDisposition: string;

  printer: NSPrinter;

  setUpPrintOperationDefaultValues(): void;

  readonly imageablePageBounds: CGRect;

  readonly localizedPaperName: string;

  static readonly defaultPrinter: NSPrinter;

  readonly printSettings: NSMutableDictionary;

  PMPrintSession(): interop.Pointer;

  PMPageFormat(): interop.Pointer;

  PMPrintSettings(): interop.Pointer;

  updateFromPMPageFormat(): void;

  updateFromPMPrintSettings(): void;

  isSelectionOnly: boolean;

  takeSettingsFromPDFInfo(inPDFInfo: NSPDFInfo): void;

  static sizeForPaperName(name: string | null): CGSize;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSNib extends NSObject implements NSCoding {
  initWithNibNamedBundle(nibName: string, bundle: NSBundle | null): this;

  initWithNibDataBundle(nibData: NSData, bundle: NSBundle | null): this;

  instantiateWithOwnerTopLevelObjects(owner: interop.Object | null, topLevelObjects: interop.PointerConvertible): boolean;

  initWithContentsOfURL(nibFileURL: NSURL): this;

  instantiateNibWithExternalNameTable(externalNameTable: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): boolean;

  instantiateNibWithOwnerTopLevelObjects(owner: interop.Object, topLevelObjects: interop.PointerConvertible): boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSCustomTouchBarItem extends NSTouchBarItem {
  // @ts-ignore MemberDecl.tsIgnore
  view: NSView;

  // @ts-ignore MemberDecl.tsIgnore
  viewController: NSViewController;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;
}

declare class NSTextContainer extends NSObject implements NSSecureCoding {
  initWithSize(size: CGSize): this;

  initWithCoder(coder: NSCoder): this;

  readonly textLayoutManager: NSTextLayoutManager;

  size: CGSize;

  lineBreakMode: interop.Enum<typeof NSLineBreakMode>;

  lineFragmentPadding: number;

  maximumNumberOfLines: number;

  lineFragmentRectForProposedRectAtIndexWritingDirectionRemainingRect(proposedRect: CGRect, characterIndex: number, baseWritingDirection: interop.Enum<typeof NSWritingDirection>, remainingRect: interop.PointerConvertible): CGRect;

  readonly isSimpleRectangularTextContainer: boolean;

  widthTracksTextView: boolean;

  heightTracksTextView: boolean;

  layoutManager: NSLayoutManager;

  replaceLayoutManager(newLayoutManager: NSLayoutManager): void;

  get exclusionPaths(): NSArray;
  set exclusionPaths(value: NSArray<interop.Object> | Array<interop.Object>);

  textView: NSTextView;

  initWithContainerSize(aContainerSize: CGSize): this;

  containerSize: CGSize;

  lineFragmentRectForProposedRectSweepDirectionMovementDirectionRemainingRect(proposedRect: CGRect, sweepDirection: interop.Enum<typeof NSLineSweepDirection>, movementDirection: interop.Enum<typeof NSLineMovementDirection>, remainingRect: interop.PointerConvertible): CGRect;

  containsPoint(point: CGPoint): boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSWorkspace extends NSObject {
  static readonly sharedWorkspace: NSWorkspace;

  readonly notificationCenter: NSNotificationCenter;

  openURL(url: NSURL): boolean;

  openURLConfigurationCompletionHandler(url: NSURL, configuration: NSWorkspaceOpenConfiguration, completionHandler: (p1: NSRunningApplication, p2: NSError) => void | null): void;

  openURLsWithApplicationAtURLConfigurationCompletionHandler(urls: NSArray<interop.Object> | Array<interop.Object>, applicationURL: NSURL, configuration: NSWorkspaceOpenConfiguration, completionHandler: (p1: NSRunningApplication, p2: NSError) => void | null): void;

  openApplicationAtURLConfigurationCompletionHandler(applicationURL: NSURL, configuration: NSWorkspaceOpenConfiguration, completionHandler: (p1: NSRunningApplication, p2: NSError) => void | null): void;

  selectFileInFileViewerRootedAtPath(fullPath: string | null, rootFullPath: string): boolean;

  activateFileViewerSelectingURLs(fileURLs: NSArray<interop.Object> | Array<interop.Object>): void;

  showSearchResultsForQueryString(queryString: string): boolean;

  noteFileSystemChanged(path: string): void;

  isFilePackageAtPath(fullPath: string): boolean;

  iconForFile(fullPath: string): NSImage;

  iconForFiles(fullPaths: NSArray<interop.Object> | Array<interop.Object>): NSImage;

  iconForContentType(contentType: UTType): NSImage;

  setIconForFileOptions(image: NSImage | null, fullPath: string, options: interop.Enum<typeof NSWorkspaceIconCreationOptions>): boolean;

  readonly fileLabels: NSArray;

  readonly fileLabelColors: NSArray;

  recycleURLsCompletionHandler(URLs: NSArray<interop.Object> | Array<interop.Object>, handler: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, p2: NSError) => void | null): void;

  duplicateURLsCompletionHandler(URLs: NSArray<interop.Object> | Array<interop.Object>, handler: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, p2: NSError) => void | null): void;

  getFileSystemInfoForPathIsRemovableIsWritableIsUnmountableDescriptionType(fullPath: string, removableFlag: interop.PointerConvertible, writableFlag: interop.PointerConvertible, unmountableFlag: interop.PointerConvertible, description: interop.PointerConvertible, fileSystemType: interop.PointerConvertible): boolean;

  unmountAndEjectDeviceAtPath(path: string): boolean;

  unmountAndEjectDeviceAtURLError(url: NSURL, error: interop.PointerConvertible): boolean;

  extendPowerOffBy(requested: number): number;

  hideOtherApplications(): void;

  URLForApplicationWithBundleIdentifier(bundleIdentifier: string): NSURL;

  URLsForApplicationsWithBundleIdentifier(bundleIdentifier: string): NSArray;

  URLForApplicationToOpenURL(url: NSURL): NSURL;

  URLsForApplicationsToOpenURL(url: NSURL): NSArray;

  setDefaultApplicationAtURLToOpenContentTypeOfFileAtURLCompletionHandler(applicationURL: NSURL, url: NSURL, completionHandler: (p1: NSError) => void | null): void;

  setDefaultApplicationAtURLToOpenURLsWithSchemeCompletionHandler(applicationURL: NSURL, urlScheme: string, completionHandler: (p1: NSError) => void | null): void;

  setDefaultApplicationAtURLToOpenFileAtURLCompletionHandler(applicationURL: NSURL, url: NSURL, completionHandler: (p1: NSError) => void | null): void;

  URLForApplicationToOpenContentType(contentType: UTType): NSURL;

  URLsForApplicationsToOpenContentType(contentType: UTType): NSArray;

  setDefaultApplicationAtURLToOpenContentTypeCompletionHandler(applicationURL: NSURL, contentType: UTType, completionHandler: (p1: NSError) => void | null): void;

  readonly frontmostApplication: NSRunningApplication;

  readonly menuBarOwningApplication: NSRunningApplication;

  setDesktopImageURLForScreenOptionsError(url: NSURL, screen: NSScreen, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): boolean;

  desktopImageURLForScreen(screen: NSScreen): NSURL;

  desktopImageOptionsForScreen(screen: NSScreen): NSDictionary;

  requestAuthorizationOfTypeCompletionHandler(type: interop.Enum<typeof NSWorkspaceAuthorizationType>, completionHandler: (p1: NSWorkspaceAuthorization, p2: NSError) => void | null): void;

  openFile(fullPath: string): boolean;

  openFileWithApplication(fullPath: string, appName: string | null): boolean;

  openFileWithApplicationAndDeactivate(fullPath: string, appName: string | null, flag: boolean): boolean;

  launchApplication(appName: string): boolean;

  launchApplicationAtURLOptionsConfigurationError(url: NSURL, options: interop.Enum<typeof NSWorkspaceLaunchOptions>, configuration: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): NSRunningApplication;

  openURLOptionsConfigurationError(url: NSURL, options: interop.Enum<typeof NSWorkspaceLaunchOptions>, configuration: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): NSRunningApplication;

  openURLsWithApplicationAtURLOptionsConfigurationError(urls: NSArray<interop.Object> | Array<interop.Object>, applicationURL: NSURL, options: interop.Enum<typeof NSWorkspaceLaunchOptions>, configuration: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, error: interop.PointerConvertible): NSRunningApplication;

  launchApplicationShowIconAutolaunch(appName: string, showIcon: boolean, autolaunch: boolean): boolean;

  fullPathForApplication(appName: string): string;

  absolutePathForAppBundleWithIdentifier(bundleIdentifier: string): string;

  launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier(bundleIdentifier: string, options: interop.Enum<typeof NSWorkspaceLaunchOptions>, descriptor: NSAppleEventDescriptor | null, identifier: interop.PointerConvertible): boolean;

  openURLsWithAppBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifiers(urls: NSArray<interop.Object> | Array<interop.Object>, bundleIdentifier: string | null, options: interop.Enum<typeof NSWorkspaceLaunchOptions>, descriptor: NSAppleEventDescriptor | null, identifiers: interop.PointerConvertible): boolean;

  openTempFile(fullPath: string): boolean;

  findApplications(): void;

  noteUserDefaultsChanged(): void;

  slideImageFromTo(image: NSImage, fromPoint: CGPoint, toPoint: CGPoint): void;

  checkForRemovableMedia(): void;

  fileSystemChanged(): boolean;

  userDefaultsChanged(): boolean;

  mountNewRemovableMedia(): NSArray;

  activeApplication(): NSDictionary;

  mountedLocalVolumePaths(): NSArray;

  mountedRemovableMedia(): NSArray;

  launchedApplications(): NSArray;

  openFileFromImageAtInView(fullPath: string, image: NSImage | null, point: CGPoint, view: NSView | null): boolean;

  performFileOperationSourceDestinationFilesTag(operation: string, source: string, destination: string, files: NSArray<interop.Object> | Array<interop.Object>, tag: interop.PointerConvertible): boolean;

  getInfoForFileApplicationType(fullPath: string, appName: interop.PointerConvertible, type: interop.PointerConvertible): boolean;

  iconForFileType(fileType: string): NSImage;

  typeOfFileError(absoluteFilePath: string, outError: interop.PointerConvertible): string;

  localizedDescriptionForType(typeName: string): string;

  preferredFilenameExtensionForType(typeName: string): string;

  filenameExtensionIsValidForType(filenameExtension: string, typeName: string): boolean;

  typeConformsToType(firstTypeName: string, secondTypeName: string): boolean;

  readonly accessibilityDisplayShouldIncreaseContrast: boolean;

  readonly accessibilityDisplayShouldDifferentiateWithoutColor: boolean;

  readonly accessibilityDisplayShouldReduceTransparency: boolean;

  readonly accessibilityDisplayShouldReduceMotion: boolean;

  readonly accessibilityDisplayShouldInvertColors: boolean;

  readonly isVoiceOverEnabled: boolean;

  readonly isSwitchControlEnabled: boolean;

  readonly runningApplications: NSArray;
}

declare class NSAccessibilityElement extends NSObject implements NSAccessibility {
  static accessibilityElementWithRoleFrameLabelParent(role: string, frame: CGRect, label: string | null, parent: interop.Object | null): interop.Object;

  accessibilityAddChildElement(childElement: NSAccessibilityElement): void;

  accessibilityFrameInParentSpace: CGRect;

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;

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

declare class NSGraphicsContext extends NSObject {
  static graphicsContextWithAttributes(attributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSGraphicsContext;

  static graphicsContextWithBitmapImageRep(bitmapRep: NSBitmapImageRep): NSGraphicsContext;

  static graphicsContextWithCGContextFlipped(graphicsPort: interop.PointerConvertible, initialFlippedState: boolean): NSGraphicsContext;

  static currentContext: NSGraphicsContext;

  static currentContextDrawingToScreen(): boolean;

  static saveGraphicsState(): void;

  static restoreGraphicsState(): void;

  readonly attributes: NSDictionary;

  readonly isDrawingToScreen: boolean;

  saveGraphicsState(): void;

  restoreGraphicsState(): void;

  flushGraphics(): void;

  readonly CGContext: interop.Pointer;

  readonly isFlipped: boolean;

  shouldAntialias: boolean;

  imageInterpolation: interop.Enum<typeof NSImageInterpolation>;

  patternPhase: CGPoint;

  compositingOperation: interop.Enum<typeof NSCompositingOperation>;

  colorRenderingIntent: interop.Enum<typeof NSColorRenderingIntent>;

  readonly CIContext: CIContext;

  static setGraphicsState(gState: number): void;

  focusStack(): interop.Object;

  setFocusStack(stack: interop.Object): void;

  static graphicsContextWithGraphicsPortFlipped(graphicsPort: interop.PointerConvertible, initialFlippedState: boolean): NSGraphicsContext;

  readonly graphicsPort: interop.Pointer;

  static graphicsContextWithWindow(window: NSWindow): NSGraphicsContext;
}

declare class NSTableViewRowAction extends NSObject implements NSCopying {
  static rowActionWithStyleTitleHandler<This extends abstract new (...args: any) => any>(this: This, style: interop.Enum<typeof NSTableViewRowActionStyle>, title: string, handler: (p1: NSTableViewRowAction, p2: number) => void): InstanceType<This>;

  readonly style: interop.Enum<typeof NSTableViewRowActionStyle>;

  title: string;

  backgroundColor: NSColor;

  image: NSImage;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSButton extends NSControl implements NSUserInterfaceValidations, NSAccessibilityButton, NSUserInterfaceCompression {
  static buttonWithTitleImageTargetAction<This extends abstract new (...args: any) => any>(this: This, title: string, image: NSImage, target: interop.Object | null, action: string | null): InstanceType<This>;

  static buttonWithTitleTargetAction<This extends abstract new (...args: any) => any>(this: This, title: string, target: interop.Object | null, action: string | null): InstanceType<This>;

  static buttonWithImageTargetAction<This extends abstract new (...args: any) => any>(this: This, image: NSImage, target: interop.Object | null, action: string | null): InstanceType<This>;

  static checkboxWithTitleTargetAction<This extends abstract new (...args: any) => any>(this: This, title: string, target: interop.Object | null, action: string | null): InstanceType<This>;

  static radioButtonWithTitleTargetAction<This extends abstract new (...args: any) => any>(this: This, title: string, target: interop.Object | null, action: string | null): InstanceType<This>;

  setButtonType(type: interop.Enum<typeof NSButtonType>): void;

  title: string;

  attributedTitle: NSAttributedString;

  alternateTitle: string;

  attributedAlternateTitle: NSAttributedString;

  hasDestructiveAction: boolean;

  sound: NSSound;

  isSpringLoaded: boolean;

  maxAcceleratorLevel: number;

  setPeriodicDelayInterval(delay: number, interval: number): void;

  getPeriodicDelayInterval(delay: interop.PointerConvertible, interval: interop.PointerConvertible): void;

  bezelStyle: interop.Enum<typeof NSBezelStyle>;

  isBordered: boolean;

  isTransparent: boolean;

  showsBorderOnlyWhileMouseInside: boolean;

  bezelColor: NSColor;

  contentTintColor: NSColor;

  image: NSImage;

  alternateImage: NSImage;

  imagePosition: interop.Enum<typeof NSCellImagePosition>;

  imageScaling: interop.Enum<typeof NSImageScaling>;

  imageHugsTitle: boolean;

  symbolConfiguration: NSImageSymbolConfiguration;

  state: number;

  allowsMixedState: boolean;

  setNextState(): void;

  highlight(flag: boolean): void;

  keyEquivalent: string;

  keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;

  // @ts-ignore MemberDecl.tsIgnore
  performKeyEquivalent(key: NSEvent): boolean;

  compressWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<interop.Object> | Array<interop.Object>): void;

  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<interop.Object> | Array<interop.Object>): CGSize;

  readonly activeCompressionOptions: NSUserInterfaceCompressionOptions;

  setTitleWithMnemonic(stringWithAmpersand: string): void;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  accessibilityLabel: string;

  accessibilityPerformPress(): boolean;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

declare class NSPressGestureRecognizer extends NSGestureRecognizer implements NSCoding {
  buttonMask: number;

  minimumPressDuration: number;

  allowableMovement: number;

  numberOfTouchesRequired: number;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSMenuItem extends NSObject implements NSCopying, NSCoding, NSValidatedUserInterfaceItem, NSUserInterfaceItemIdentification, NSAccessibilityElementProtocol, NSAccessibility {
  static usesUserKeyEquivalents: boolean;

  static separatorItem(): NSMenuItem;

  static sectionHeaderWithTitle<This extends abstract new (...args: any) => any>(this: This, title: string): InstanceType<This>;

  initWithTitleActionKeyEquivalent(string: string, selector: string | null, charCode: string): this;

  initWithCoder(coder: NSCoder): this;

  menu: NSMenu;

  readonly hasSubmenu: boolean;

  submenu: NSMenu;

  readonly parentItem: NSMenuItem;

  title: string;

  attributedTitle: NSAttributedString;

  subtitle: string;

  readonly isSeparatorItem: boolean;

  readonly isSectionHeader: boolean;

  keyEquivalent: string;

  keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;

  readonly userKeyEquivalent: string;

  allowsKeyEquivalentWhenHidden: boolean;

  allowsAutomaticKeyEquivalentLocalization: boolean;

  allowsAutomaticKeyEquivalentMirroring: boolean;

  image: NSImage;

  state: number;

  onStateImage: NSImage;

  offStateImage: NSImage;

  mixedStateImage: NSImage;

  isEnabled: boolean;

  isAlternate: boolean;

  indentationLevel: number;

  target: interop.Object;

  action: string;

  tag: number;

  representedObject: interop.Object;

  view: NSView;

  readonly isHighlighted: boolean;

  isHidden: boolean;

  readonly isHiddenOrHasHiddenAncestor: boolean;

  toolTip: string;

  badge: NSMenuItemBadge;

  setMnemonicLocation(location: number): void;

  mnemonicLocation(): number;

  mnemonic(): string;

  setTitleWithMnemonic(stringWithAmpersand: string): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  identifier: string;

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

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSTextTab extends NSObject implements NSCopying, NSCoding, NSSecureCoding {
  static columnTerminatorsForLocale(aLocale: NSLocale | null): NSCharacterSet;

  readonly location: number;

  readonly options: NSDictionary;

  initWithTextAlignmentLocationOptions(alignment: interop.Enum<typeof NSTextAlignment>, loc: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): this;

  readonly alignment: interop.Enum<typeof NSTextAlignment>;

  initWithTypeLocation(type: interop.Enum<typeof NSTextTabType>, loc: number): this;

  readonly tabStopType: interop.Enum<typeof NSTextTabType>;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  static readonly supportsSecureCoding: boolean;
}

declare class NSColorSpace extends NSObject implements NSSecureCoding {
  initWithICCProfileData(iccData: NSData): this;

  readonly ICCProfileData: NSData;

  initWithColorSyncProfile(prof: interop.PointerConvertible): this;

  readonly colorSyncProfile: interop.Pointer;

  initWithCGColorSpace(cgColorSpace: interop.PointerConvertible): this;

  readonly CGColorSpace: interop.Pointer;

  readonly numberOfColorComponents: number;

  readonly colorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;

  readonly localizedName: string;

  static readonly sRGBColorSpace: NSColorSpace;

  static readonly genericGamma22GrayColorSpace: NSColorSpace;

  static readonly extendedSRGBColorSpace: NSColorSpace;

  static readonly extendedGenericGamma22GrayColorSpace: NSColorSpace;

  static readonly displayP3ColorSpace: NSColorSpace;

  static readonly adobeRGB1998ColorSpace: NSColorSpace;

  static readonly genericRGBColorSpace: NSColorSpace;

  static readonly genericGrayColorSpace: NSColorSpace;

  static readonly genericCMYKColorSpace: NSColorSpace;

  static readonly deviceRGBColorSpace: NSColorSpace;

  static readonly deviceGrayColorSpace: NSColorSpace;

  static readonly deviceCMYKColorSpace: NSColorSpace;

  static availableColorSpacesWithModel(model: interop.Enum<typeof NSColorSpaceModel>): NSArray;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSWorkspaceOpenConfiguration extends NSObject implements NSCopying {
  static configuration<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  promptsUserIfNeeded: boolean;

  addsToRecentItems: boolean;

  activates: boolean;

  hides: boolean;

  hidesOthers: boolean;

  isForPrinting: boolean;

  createsNewApplicationInstance: boolean;

  allowsRunningApplicationSubstitution: boolean;

  get arguments(): NSArray;
  set arguments(value: NSArray<interop.Object> | Array<interop.Object>);

  get environment(): NSDictionary;
  set environment(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  appleEvent: NSAppleEventDescriptor;

  architecture: number;

  requiresUniversalLinks: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSActionCell extends NSCell {
  target: interop.Object;

  action: string;

  tag: number;
}

declare class NSView extends NSResponder implements NSAnimatablePropertyContainer, NSUserInterfaceItemIdentification, NSDraggingDestination, NSAppearanceCustomization, NSAccessibilityElementProtocol, NSAccessibility {
  initWithFrame(frameRect: CGRect): this;

  initWithCoder(coder: NSCoder): this;

  readonly window: NSWindow;

  readonly superview: NSView;

  get subviews(): NSArray;
  set subviews(value: NSArray<interop.Object> | Array<interop.Object>);

  isDescendantOf(view: NSView): boolean;

  ancestorSharedWithView(view: NSView): NSView;

  readonly opaqueAncestor: NSView;

  isHidden: boolean;

  readonly isHiddenOrHasHiddenAncestor: boolean;

  getRectsBeingDrawnCount(rects: interop.PointerConvertible, count: interop.PointerConvertible): void;

  needsToDrawRect(rect: CGRect): boolean;

  readonly wantsDefaultClipping: boolean;

  viewDidHide(): void;

  viewDidUnhide(): void;

  addSubview(view: NSView): void;

  addSubviewPositionedRelativeTo(view: NSView, place: interop.Enum<typeof NSWindowOrderingMode>, otherView: NSView | null): void;

  sortSubviewsUsingFunctionContext(compare: (p1: NSView, p2: NSView, p3: interop.PointerConvertible) => interop.Enum<typeof NSComparisonResult> | null, context: interop.PointerConvertible): void;

  viewWillMoveToWindow(newWindow: NSWindow | null): void;

  viewDidMoveToWindow(): void;

  viewWillMoveToSuperview(newSuperview: NSView | null): void;

  viewDidMoveToSuperview(): void;

  didAddSubview(subview: NSView): void;

  willRemoveSubview(subview: NSView): void;

  removeFromSuperview(): void;

  replaceSubviewWith(oldView: NSView, newView: NSView): void;

  removeFromSuperviewWithoutNeedingDisplay(): void;

  viewDidChangeBackingProperties(): void;

  postsFrameChangedNotifications: boolean;

  resizeSubviewsWithOldSize(oldSize: CGSize): void;

  resizeWithOldSuperviewSize(oldSize: CGSize): void;

  autoresizesSubviews: boolean;

  autoresizingMask: interop.Enum<typeof NSAutoresizingMaskOptions>;

  setFrameOrigin(newOrigin: CGPoint): void;

  setFrameSize(newSize: CGSize): void;

  frame: CGRect;

  frameRotation: number;

  frameCenterRotation: number;

  setBoundsOrigin(newOrigin: CGPoint): void;

  setBoundsSize(newSize: CGSize): void;

  boundsRotation: number;

  translateOriginToPoint(translation: CGPoint): void;

  scaleUnitSquareToSize(newUnitSize: CGSize): void;

  rotateByAngle(angle: number): void;

  bounds: CGRect;

  readonly isFlipped: boolean;

  readonly isRotatedFromBase: boolean;

  readonly isRotatedOrScaledFromBase: boolean;

  readonly isOpaque: boolean;

  convertPointFromView(point: CGPoint, view: NSView | null): CGPoint;

  convertPointToView(point: CGPoint, view: NSView | null): CGPoint;

  convertSizeFromView(size: CGSize, view: NSView | null): CGSize;

  convertSizeToView(size: CGSize, view: NSView | null): CGSize;

  convertRectFromView(rect: CGRect, view: NSView | null): CGRect;

  convertRectToView(rect: CGRect, view: NSView | null): CGRect;

  backingAlignedRectOptions(rect: CGRect, options: interop.Enum<typeof NSAlignmentOptions>): CGRect;

  centerScanRect(rect: CGRect): CGRect;

  convertPointToBacking(point: CGPoint): CGPoint;

  convertPointFromBacking(point: CGPoint): CGPoint;

  convertSizeToBacking(size: CGSize): CGSize;

  convertSizeFromBacking(size: CGSize): CGSize;

  convertRectToBacking(rect: CGRect): CGRect;

  convertRectFromBacking(rect: CGRect): CGRect;

  convertPointToLayer(point: CGPoint): CGPoint;

  convertPointFromLayer(point: CGPoint): CGPoint;

  convertSizeToLayer(size: CGSize): CGSize;

  convertSizeFromLayer(size: CGSize): CGSize;

  convertRectToLayer(rect: CGRect): CGRect;

  convertRectFromLayer(rect: CGRect): CGRect;

  canDrawConcurrently: boolean;

  readonly canDraw: boolean;

  setNeedsDisplayInRect(invalidRect: CGRect): void;

  needsDisplay: boolean;

  lockFocus(): void;

  unlockFocus(): void;

  lockFocusIfCanDraw(): boolean;

  lockFocusIfCanDrawInContext(context: NSGraphicsContext): boolean;

  static readonly focusView: NSView;

  readonly visibleRect: CGRect;

  display(): void;

  displayIfNeeded(): void;

  displayIfNeededIgnoringOpacity(): void;

  displayRect(rect: CGRect): void;

  displayIfNeededInRect(rect: CGRect): void;

  displayRectIgnoringOpacity(rect: CGRect): void;

  displayIfNeededInRectIgnoringOpacity(rect: CGRect): void;

  drawRect(dirtyRect: CGRect): void;

  displayRectIgnoringOpacityInContext(rect: CGRect, context: NSGraphicsContext): void;

  bitmapImageRepForCachingDisplayInRect(rect: CGRect): NSBitmapImageRep;

  cacheDisplayInRectToBitmapImageRep(rect: CGRect, bitmapImageRep: NSBitmapImageRep): void;

  viewWillDraw(): void;

  scrollPoint(point: CGPoint): void;

  scrollRectToVisible(rect: CGRect): boolean;

  autoscroll(event: NSEvent): boolean;

  adjustScroll(newVisible: CGRect): CGRect;

  scrollRectBy(rect: CGRect, delta: CGSize): void;

  translateRectsNeedingDisplayInRectBy(clipRect: CGRect, delta: CGSize): void;

  hitTest(point: CGPoint): NSView;

  mouseInRect(point: CGPoint, rect: CGRect): boolean;

  viewWithTag(tag: number): NSView;

  readonly tag: number;

  performKeyEquivalent(event: NSEvent): boolean;

  acceptsFirstMouse(event: NSEvent | null): boolean;

  shouldDelayWindowOrderingForEvent(event: NSEvent): boolean;

  readonly needsPanelToBecomeKey: boolean;

  readonly mouseDownCanMoveWindow: boolean;

  acceptsTouchEvents: boolean;

  wantsRestingTouches: boolean;

  makeBackingLayer(): CALayer;

  layerContentsRedrawPolicy: interop.Enum<typeof NSViewLayerContentsRedrawPolicy>;

  layerContentsPlacement: interop.Enum<typeof NSViewLayerContentsPlacement>;

  wantsLayer: boolean;

  layer: CALayer;

  readonly wantsUpdateLayer: boolean;

  updateLayer(): void;

  canDrawSubviewsIntoLayer: boolean;

  layoutSubtreeIfNeeded(): void;

  layout(): void;

  needsLayout: boolean;

  alphaValue: number;

  layerUsesCoreImageFilters: boolean;

  get backgroundFilters(): NSArray;
  set backgroundFilters(value: NSArray<interop.Object> | Array<interop.Object>);

  compositingFilter: CIFilter;

  get contentFilters(): NSArray;
  set contentFilters(value: NSArray<interop.Object> | Array<interop.Object>);

  shadow: NSShadow;

  clipsToBounds: boolean;

  postsBoundsChangedNotifications: boolean;

  readonly enclosingScrollView: NSScrollView;

  menuForEvent(event: NSEvent): NSMenu;

  static readonly defaultMenu: NSMenu;

  willOpenMenuWithEvent(menu: NSMenu, event: NSEvent): void;

  didCloseMenuWithEvent(menu: NSMenu, event: NSEvent | null): void;

  toolTip: string;

  addToolTipRectOwnerUserData(rect: CGRect, owner: interop.Object, data: interop.PointerConvertible): number;

  removeToolTip(tag: number): void;

  removeAllToolTips(): void;

  viewWillStartLiveResize(): void;

  viewDidEndLiveResize(): void;

  readonly inLiveResize: boolean;

  readonly preservesContentDuringLiveResize: boolean;

  readonly rectPreservedDuringLiveResize: CGRect;

  getRectsExposedDuringLiveResizeCount(exposedRects: interop.PointerConvertible, count: interop.PointerConvertible): void;

  readonly inputContext: NSTextInputContext;

  rectForSmartMagnificationAtPointInRect(location: CGPoint, visibleRect: CGRect): CGRect;

  userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  prepareForReuse(): void;

  static readonly isCompatibleWithResponsiveScrolling: boolean;

  prepareContentInRect(rect: CGRect): void;

  preparedContentRect: CGRect;

  readonly allowsVibrancy: boolean;

  viewDidChangeEffectiveAppearance(): void;

  nextKeyView: NSView;

  readonly previousKeyView: NSView;

  readonly nextValidKeyView: NSView;

  readonly previousValidKeyView: NSView;

  readonly canBecomeKeyView: boolean;

  setKeyboardFocusRingNeedsDisplayInRect(rect: CGRect): void;

  focusRingType: interop.Enum<typeof NSFocusRingType>;

  static readonly defaultFocusRingType: interop.Enum<typeof NSFocusRingType>;

  drawFocusRingMask(): void;

  readonly focusRingMaskBounds: CGRect;

  noteFocusRingMaskChanged(): void;

  writeEPSInsideRectToPasteboard(rect: CGRect, pasteboard: NSPasteboard): void;

  dataWithEPSInsideRect(rect: CGRect): NSData;

  writePDFInsideRectToPasteboard(rect: CGRect, pasteboard: NSPasteboard): void;

  dataWithPDFInsideRect(rect: CGRect): NSData;

  print(sender: interop.Object | null): void;

  knowsPageRange(range: interop.PointerConvertible): boolean;

  readonly heightAdjustLimit: number;

  readonly widthAdjustLimit: number;

  adjustPageWidthNewLeftRightLimit(newRight: interop.PointerConvertible, oldLeft: number, oldRight: number, rightLimit: number): void;

  adjustPageHeightNewTopBottomLimit(newBottom: interop.PointerConvertible, oldTop: number, oldBottom: number, bottomLimit: number): void;

  rectForPage(page: number): CGRect;

  locationOfPrintRect(rect: CGRect): CGPoint;

  drawPageBorderWithSize(borderSize: CGSize): void;

  readonly pageHeader: NSAttributedString;

  readonly pageFooter: NSAttributedString;

  drawSheetBorderWithSize(borderSize: CGSize): void;

  readonly printJobTitle: string;

  beginDocument(): void;

  endDocument(): void;

  beginPageInRectAtPlacement(rect: CGRect, location: CGPoint): void;

  endPage(): void;

  beginDraggingSessionWithItemsEventSource(items: NSArray<interop.Object> | Array<interop.Object>, event: NSEvent, source: NSDraggingSource): NSDraggingSession;

  readonly registeredDraggedTypes: NSArray;

  registerForDraggedTypes(newTypes: NSArray<interop.Object> | Array<interop.Object>): void;

  unregisterDraggedTypes(): void;

  enterFullScreenModeWithOptions(screen: NSScreen, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): boolean;

  exitFullScreenModeWithOptions(options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): void;

  readonly isInFullScreenMode: boolean;

  showDefinitionForAttributedStringAtPoint(attrString: NSAttributedString | null, textBaselineOrigin: CGPoint): void;

  showDefinitionForAttributedStringRangeOptionsBaselineOriginProvider(attrString: NSAttributedString | null, targetRange: _NSRange, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, originProvider: (p1: _NSRange) => CGPoint | null): void;

  readonly isDrawingFindIndicator: boolean;

  get gestureRecognizers(): NSArray;
  set gestureRecognizers(value: NSArray<interop.Object> | Array<interop.Object>);

  addGestureRecognizer(gestureRecognizer: NSGestureRecognizer): void;

  removeGestureRecognizer(gestureRecognizer: NSGestureRecognizer): void;

  allowedTouchTypes: interop.Enum<typeof NSTouchTypeMask>;

  readonly safeAreaInsets: NSEdgeInsets;

  additionalSafeAreaInsets: NSEdgeInsets;

  readonly safeAreaLayoutGuide: NSLayoutGuide;

  readonly safeAreaRect: CGRect;

  readonly layoutMarginsGuide: NSLayoutGuide;

  addTrackingArea(trackingArea: NSTrackingArea): void;

  removeTrackingArea(trackingArea: NSTrackingArea): void;

  readonly trackingAreas: NSArray;

  updateTrackingAreas(): void;

  addCursorRectCursor(rect: CGRect, object: NSCursor): void;

  removeCursorRectCursor(rect: CGRect, object: NSCursor): void;

  discardCursorRects(): void;

  resetCursorRects(): void;

  addTrackingRectOwnerUserDataAssumeInside(rect: CGRect, owner: interop.Object, data: interop.PointerConvertible, flag: boolean): number;

  removeTrackingRect(tag: number): void;

  displayLinkWithTargetSelector(target: interop.Object, selector: string): CADisplayLink;

  dragImageAtOffsetEventPasteboardSourceSlideBack(image: NSImage, viewLocation: CGPoint, initialOffset: CGSize, event: NSEvent, pboard: NSPasteboard, sourceObj: interop.Object, slideFlag: boolean): void;

  dragFileFromRectSlideBackEvent(filename: string, rect: CGRect, flag: boolean, event: NSEvent): boolean;

  dragPromisedFilesOfTypesFromRectSourceSlideBackEvent(typeArray: NSArray<interop.Object> | Array<interop.Object>, rect: CGRect, sourceObject: interop.Object, flag: boolean, event: NSEvent): boolean;

  convertPointToBase(point: CGPoint): CGPoint;

  convertPointFromBase(point: CGPoint): CGPoint;

  convertSizeToBase(size: CGSize): CGSize;

  convertSizeFromBase(size: CGSize): CGSize;

  convertRectToBase(rect: CGRect): CGRect;

  convertRectFromBase(rect: CGRect): CGRect;

  performMnemonic(string: string): boolean;

  shouldDrawColor(): boolean;

  gState(): number;

  allocateGState(): void;

  releaseGState(): void;

  setUpGState(): void;

  renewGState(): void;

  readonly enclosingMenuItem: NSMenuItem;

  readonly candidateListTouchBarItem: NSCandidateListTouchBarItem;

  reflectScrolledClipView(clipView: NSClipView): void;

  scrollClipViewToPoint(clipView: NSClipView, point: CGPoint): void;

  readonly leadingAnchor: NSLayoutXAxisAnchor;

  readonly trailingAnchor: NSLayoutXAxisAnchor;

  readonly leftAnchor: NSLayoutXAxisAnchor;

  readonly rightAnchor: NSLayoutXAxisAnchor;

  readonly topAnchor: NSLayoutYAxisAnchor;

  readonly bottomAnchor: NSLayoutYAxisAnchor;

  readonly widthAnchor: NSLayoutDimension;

  readonly heightAnchor: NSLayoutDimension;

  readonly centerXAnchor: NSLayoutXAxisAnchor;

  readonly centerYAnchor: NSLayoutYAxisAnchor;

  readonly firstBaselineAnchor: NSLayoutYAxisAnchor;

  readonly lastBaselineAnchor: NSLayoutYAxisAnchor;

  readonly constraints: NSArray;

  addConstraint(constraint: NSLayoutConstraint): void;

  addConstraints(constraints: NSArray<interop.Object> | Array<interop.Object>): void;

  removeConstraint(constraint: NSLayoutConstraint): void;

  removeConstraints(constraints: NSArray<interop.Object> | Array<interop.Object>): void;

  updateConstraintsForSubtreeIfNeeded(): void;

  updateConstraints(): void;

  needsUpdateConstraints: boolean;

  translatesAutoresizingMaskIntoConstraints: boolean;

  static readonly requiresConstraintBasedLayout: boolean;

  alignmentRectForFrame(frame: CGRect): CGRect;

  frameForAlignmentRect(alignmentRect: CGRect): CGRect;

  readonly alignmentRectInsets: NSEdgeInsets;

  readonly firstBaselineOffsetFromTop: number;

  readonly lastBaselineOffsetFromBottom: number;

  readonly baselineOffsetFromBottom: number;

  readonly intrinsicContentSize: CGSize;

  invalidateIntrinsicContentSize(): void;

  contentHuggingPriorityForOrientation(orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): number;

  setContentHuggingPriorityForOrientation(priority: number, orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): void;

  contentCompressionResistancePriorityForOrientation(orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): number;

  setContentCompressionResistancePriorityForOrientation(priority: number, orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): void;

  isHorizontalContentSizeConstraintActive: boolean;

  isVerticalContentSizeConstraintActive: boolean;

  readonly fittingSize: CGSize;

  constraintsAffectingLayoutForOrientation(orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): NSArray;

  readonly hasAmbiguousLayout: boolean;

  exerciseAmbiguityInLayout(): void;

  addLayoutGuide(guide: NSLayoutGuide): void;

  removeLayoutGuide(guide: NSLayoutGuide): void;

  readonly layoutGuides: NSArray;

  rulerViewShouldMoveMarker(ruler: NSRulerView, marker: NSRulerMarker): boolean;

  rulerViewWillMoveMarkerToLocation(ruler: NSRulerView, marker: NSRulerMarker, location: number): number;

  rulerViewDidMoveMarker(ruler: NSRulerView, marker: NSRulerMarker): void;

  rulerViewShouldRemoveMarker(ruler: NSRulerView, marker: NSRulerMarker): boolean;

  rulerViewDidRemoveMarker(ruler: NSRulerView, marker: NSRulerMarker): void;

  rulerViewShouldAddMarker(ruler: NSRulerView, marker: NSRulerMarker): boolean;

  rulerViewWillAddMarkerAtLocation(ruler: NSRulerView, marker: NSRulerMarker, location: number): number;

  rulerViewDidAddMarker(ruler: NSRulerView, marker: NSRulerMarker): void;

  rulerViewHandleMouseDown(ruler: NSRulerView, event: NSEvent): void;

  rulerViewWillSetClientView(ruler: NSRulerView, newClient: NSView): void;

  rulerViewLocationForPoint(ruler: NSRulerView, point: CGPoint): number;

  rulerViewPointForLocation(ruler: NSRulerView, point: number): CGPoint;

  wantsBestResolutionOpenGLSurface: boolean;

  wantsExtendedDynamicRangeOpenGLSurface: boolean;

  pressureConfiguration: NSPressureConfiguration;

  animator(): this;

  get animations(): NSDictionary;
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  animationForKey(key: string): interop.Object;

  static defaultAnimationForKey(key: string): interop.Object;

  identifier: string;

  draggingEntered(sender: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;

  draggingUpdated(sender: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;

  draggingExited(sender: NSDraggingInfo | null): void;

  prepareForDragOperation(sender: NSDraggingInfo): boolean;

  performDragOperation(sender: NSDraggingInfo): boolean;

  concludeDragOperation(sender: NSDraggingInfo | null): void;

  draggingEnded(sender: NSDraggingInfo): void;

  wantsPeriodicDraggingUpdates(): boolean;

  updateDraggingItemsForDrag(sender: NSDraggingInfo | null): void;

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

  appearance: NSAppearance;

  readonly effectiveAppearance: NSAppearance;

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSLevelIndicator extends NSControl {
  levelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;

  isEditable: boolean;

  minValue: number;

  maxValue: number;

  warningValue: number;

  criticalValue: number;

  tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;

  numberOfTickMarks: number;

  numberOfMajorTickMarks: number;

  tickMarkValueAtIndex(index: number): number;

  rectOfTickMarkAtIndex(index: number): CGRect;

  fillColor: NSColor;

  warningFillColor: NSColor;

  criticalFillColor: NSColor;

  drawsTieredCapacityLevels: boolean;

  placeholderVisibility: interop.Enum<typeof NSLevelIndicatorPlaceholderVisibility>;

  ratingImage: NSImage;

  ratingPlaceholderImage: NSImage;
}

declare class NSPrintOperation extends NSObject {
  static printOperationWithViewPrintInfo(view: NSView, printInfo: NSPrintInfo): NSPrintOperation;

  static PDFOperationWithViewInsideRectToDataPrintInfo(view: NSView, rect: CGRect, data: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;

  static PDFOperationWithViewInsideRectToPathPrintInfo(view: NSView, rect: CGRect, path: string, printInfo: NSPrintInfo): NSPrintOperation;

  static EPSOperationWithViewInsideRectToDataPrintInfo(view: NSView, rect: CGRect, data: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;

  static EPSOperationWithViewInsideRectToPathPrintInfo(view: NSView, rect: CGRect, path: string, printInfo: NSPrintInfo): NSPrintOperation;

  static printOperationWithView(view: NSView): NSPrintOperation;

  static PDFOperationWithViewInsideRectToData(view: NSView, rect: CGRect, data: NSMutableData): NSPrintOperation;

  static EPSOperationWithViewInsideRectToData(view: NSView, rect: CGRect, data: NSMutableData | null): NSPrintOperation;

  static currentOperation: NSPrintOperation;

  readonly isCopyingOperation: boolean;

  readonly preferredRenderingQuality: interop.Enum<typeof NSPrintRenderingQuality>;

  jobTitle: string;

  showsPrintPanel: boolean;

  showsProgressPanel: boolean;

  printPanel: NSPrintPanel;

  PDFPanel: NSPDFPanel;

  canSpawnSeparateThread: boolean;

  pageOrder: interop.Enum<typeof NSPrintingPageOrder>;

  runOperationModalForWindowDelegateDidRunSelectorContextInfo(docWindow: NSWindow, delegate: interop.Object | null, didRunSelector: string | null, contextInfo: interop.PointerConvertible): void;

  runOperation(): boolean;

  readonly view: NSView;

  printInfo: NSPrintInfo;

  readonly context: NSGraphicsContext;

  readonly pageRange: _NSRange;

  readonly currentPage: number;

  createContext(): NSGraphicsContext;

  destroyContext(): void;

  deliverResult(): boolean;

  cleanUpOperation(): void;

  setAccessoryView(view: NSView | null): void;

  accessoryView(): NSView;

  setJobStyleHint(hint: string | null): void;

  jobStyleHint(): string;

  setShowPanels(flag: boolean): void;

  showPanels(): boolean;
}

declare class NSTouch extends NSObject implements NSCopying {
  readonly identity: NSCopying;

  readonly phase: interop.Enum<typeof NSTouchPhase>;

  readonly normalizedPosition: CGPoint;

  readonly isResting: boolean;

  readonly device: interop.Object;

  readonly deviceSize: CGSize;

  readonly type: interop.Enum<typeof NSTouchType>;

  locationInView(view: NSView | null): CGPoint;

  previousLocationInView(view: NSView | null): CGPoint;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSAppearance extends NSObject implements NSSecureCoding {
  readonly name: string;

  static currentAppearance: NSAppearance;

  static readonly currentDrawingAppearance: NSAppearance;

  performAsCurrentDrawingAppearance(block: () => void): void;

  static appearanceNamed(name: string): NSAppearance;

  initWithAppearanceNamedBundle(name: string, bundle: NSBundle | null): this;

  initWithCoder(coder: NSCoder): this;

  readonly allowsVibrancy: boolean;

  bestMatchFromAppearancesWithNames(appearances: NSArray<interop.Object> | Array<interop.Object>): string;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSColor extends NSObject implements NSCopying, NSSecureCoding, NSPasteboardReading, NSPasteboardWriting {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  static colorWithColorSpaceComponentsCount(space: NSColorSpace, components: interop.PointerConvertible, numberOfComponents: number): NSColor;

  static colorWithSRGBRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): NSColor;

  static colorWithGenericGamma22WhiteAlpha(white: number, alpha: number): NSColor;

  static colorWithDisplayP3RedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): NSColor;

  static colorWithWhiteAlpha(white: number, alpha: number): NSColor;

  static colorWithRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): NSColor;

  static colorWithHueSaturationBrightnessAlpha(hue: number, saturation: number, brightness: number, alpha: number): NSColor;

  static colorWithColorSpaceHueSaturationBrightnessAlpha(space: NSColorSpace, hue: number, saturation: number, brightness: number, alpha: number): NSColor;

  static colorWithCatalogNameColorName(listName: string, colorName: string): NSColor;

  static colorNamedBundle(name: string, bundle: NSBundle | null): NSColor;

  static colorNamed(name: string): NSColor;

  static colorWithNameDynamicProvider(colorName: string | null, dynamicProvider: (p1: NSAppearance) => NSColor): NSColor;

  static colorWithDeviceWhiteAlpha(white: number, alpha: number): NSColor;

  static colorWithDeviceRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): NSColor;

  static colorWithDeviceHueSaturationBrightnessAlpha(hue: number, saturation: number, brightness: number, alpha: number): NSColor;

  static colorWithDeviceCyanMagentaYellowBlackAlpha(cyan: number, magenta: number, yellow: number, black: number, alpha: number): NSColor;

  static colorWithCalibratedWhiteAlpha(white: number, alpha: number): NSColor;

  static colorWithCalibratedRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): NSColor;

  static colorWithCalibratedHueSaturationBrightnessAlpha(hue: number, saturation: number, brightness: number, alpha: number): NSColor;

  static colorWithPatternImage(image: NSImage): NSColor;

  readonly type: interop.Enum<typeof NSColorType>;

  colorUsingType(type: interop.Enum<typeof NSColorType>): NSColor;

  colorUsingColorSpace(space: NSColorSpace): NSColor;

  static readonly blackColor: NSColor;

  static readonly darkGrayColor: NSColor;

  static readonly lightGrayColor: NSColor;

  static readonly whiteColor: NSColor;

  static readonly grayColor: NSColor;

  static readonly redColor: NSColor;

  static readonly greenColor: NSColor;

  static readonly blueColor: NSColor;

  static readonly cyanColor: NSColor;

  static readonly yellowColor: NSColor;

  static readonly magentaColor: NSColor;

  static readonly orangeColor: NSColor;

  static readonly purpleColor: NSColor;

  static readonly brownColor: NSColor;

  static readonly clearColor: NSColor;

  static readonly labelColor: NSColor;

  static readonly secondaryLabelColor: NSColor;

  static readonly tertiaryLabelColor: NSColor;

  static readonly quaternaryLabelColor: NSColor;

  static readonly quinaryLabelColor: NSColor;

  static readonly linkColor: NSColor;

  static readonly placeholderTextColor: NSColor;

  static readonly windowFrameTextColor: NSColor;

  static readonly selectedMenuItemTextColor: NSColor;

  static readonly alternateSelectedControlTextColor: NSColor;

  static readonly headerTextColor: NSColor;

  static readonly separatorColor: NSColor;

  static readonly gridColor: NSColor;

  static readonly windowBackgroundColor: NSColor;

  static readonly underPageBackgroundColor: NSColor;

  static readonly controlBackgroundColor: NSColor;

  static readonly selectedContentBackgroundColor: NSColor;

  static readonly unemphasizedSelectedContentBackgroundColor: NSColor;

  static readonly alternatingContentBackgroundColors: NSArray;

  static readonly findHighlightColor: NSColor;

  static readonly textColor: NSColor;

  static readonly textBackgroundColor: NSColor;

  static readonly textInsertionPointColor: NSColor;

  static readonly selectedTextColor: NSColor;

  static readonly selectedTextBackgroundColor: NSColor;

  static readonly unemphasizedSelectedTextBackgroundColor: NSColor;

  static readonly unemphasizedSelectedTextColor: NSColor;

  static readonly controlColor: NSColor;

  static readonly controlTextColor: NSColor;

  static readonly selectedControlColor: NSColor;

  static readonly selectedControlTextColor: NSColor;

  static readonly disabledControlTextColor: NSColor;

  static readonly keyboardFocusIndicatorColor: NSColor;

  static readonly scrubberTexturedBackgroundColor: NSColor;

  static readonly systemRedColor: NSColor;

  static readonly systemGreenColor: NSColor;

  static readonly systemBlueColor: NSColor;

  static readonly systemOrangeColor: NSColor;

  static readonly systemYellowColor: NSColor;

  static readonly systemBrownColor: NSColor;

  static readonly systemPinkColor: NSColor;

  static readonly systemPurpleColor: NSColor;

  static readonly systemGrayColor: NSColor;

  static readonly systemTealColor: NSColor;

  static readonly systemIndigoColor: NSColor;

  static readonly systemMintColor: NSColor;

  static readonly systemCyanColor: NSColor;

  static readonly systemFillColor: NSColor;

  static readonly secondarySystemFillColor: NSColor;

  static readonly tertiarySystemFillColor: NSColor;

  static readonly quaternarySystemFillColor: NSColor;

  static readonly quinarySystemFillColor: NSColor;

  static readonly controlAccentColor: NSColor;

  static readonly currentControlTint: interop.Enum<typeof NSControlTint>;

  static colorForControlTint(controlTint: interop.Enum<typeof NSControlTint>): NSColor;

  static readonly highlightColor: NSColor;

  static readonly shadowColor: NSColor;

  highlightWithLevel(val: number): NSColor;

  shadowWithLevel(val: number): NSColor;

  colorWithSystemEffect(systemEffect: interop.Enum<typeof NSColorSystemEffect>): NSColor;

  set(): void;

  setFill(): void;

  setStroke(): void;

  blendedColorWithFractionOfColor(fraction: number, color: NSColor): NSColor;

  colorWithAlphaComponent(alpha: number): NSColor;

  readonly catalogNameComponent: string;

  readonly colorNameComponent: string;

  readonly localizedCatalogNameComponent: string;

  readonly localizedColorNameComponent: string;

  readonly redComponent: number;

  readonly greenComponent: number;

  readonly blueComponent: number;

  getRedGreenBlueAlpha(red: interop.PointerConvertible, green: interop.PointerConvertible, blue: interop.PointerConvertible, alpha: interop.PointerConvertible): void;

  readonly hueComponent: number;

  readonly saturationComponent: number;

  readonly brightnessComponent: number;

  getHueSaturationBrightnessAlpha(hue: interop.PointerConvertible, saturation: interop.PointerConvertible, brightness: interop.PointerConvertible, alpha: interop.PointerConvertible): void;

  readonly whiteComponent: number;

  getWhiteAlpha(white: interop.PointerConvertible, alpha: interop.PointerConvertible): void;

  readonly cyanComponent: number;

  readonly magentaComponent: number;

  readonly yellowComponent: number;

  readonly blackComponent: number;

  getCyanMagentaYellowBlackAlpha(cyan: interop.PointerConvertible, magenta: interop.PointerConvertible, yellow: interop.PointerConvertible, black: interop.PointerConvertible, alpha: interop.PointerConvertible): void;

  readonly colorSpace: NSColorSpace;

  readonly numberOfComponents: number;

  getComponents(components: interop.PointerConvertible): void;

  readonly patternImage: NSImage;

  readonly alphaComponent: number;

  static colorFromPasteboard(pasteBoard: NSPasteboard): NSColor;

  writeToPasteboard(pasteBoard: NSPasteboard): void;

  drawSwatchInRect(rect: CGRect): void;

  static colorWithCGColor(cgColor: interop.PointerConvertible): NSColor;

  readonly CGColor: interop.Pointer;

  static ignoresAlpha: boolean;

  static readonly controlHighlightColor: NSColor;

  static readonly controlLightHighlightColor: NSColor;

  static readonly controlShadowColor: NSColor;

  static readonly controlDarkShadowColor: NSColor;

  static readonly scrollBarColor: NSColor;

  static readonly knobColor: NSColor;

  static readonly selectedKnobColor: NSColor;

  static readonly windowFrameColor: NSColor;

  static readonly selectedMenuItemColor: NSColor;

  static readonly headerColor: NSColor;

  static readonly secondarySelectedControlColor: NSColor;

  static readonly alternateSelectedControlColor: NSColor;

  static readonly controlAlternatingRowBackgroundColors: NSArray;

  readonly colorSpaceName: string;

  colorUsingColorSpaceNameDevice(name: string | null, deviceDescription: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): NSColor;

  colorUsingColorSpaceName(name: string): NSColor;

  static colorWithCIColor(color: CIColor): NSColor;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  static readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  static readingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardReadingOptions>;

  initWithPasteboardPropertyListOfType(propertyList: interop.Object, type: string): this;

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

  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  writingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardWritingOptions>;

  pasteboardPropertyListForType(type: string): interop.Object;
}

declare class NSStatusBar extends NSObject {
  static readonly systemStatusBar: NSStatusBar;

  statusItemWithLength(length: number): NSStatusItem;

  removeStatusItem(item: NSStatusItem): void;

  readonly isVertical: boolean;

  readonly thickness: number;
}

declare class NSTouchBar extends NSObject implements NSCoding {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  customizationIdentifier: string;

  get customizationAllowedItemIdentifiers(): NSArray;
  set customizationAllowedItemIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  get customizationRequiredItemIdentifiers(): NSArray;
  set customizationRequiredItemIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  get defaultItemIdentifiers(): NSArray;
  set defaultItemIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  readonly itemIdentifiers: NSArray;

  principalItemIdentifier: string;

  escapeKeyReplacementItemIdentifier: string;

  templateItems: NSSet;

  delegate: NSTouchBarDelegate;

  itemForIdentifier(identifier: string): NSTouchBarItem;

  readonly isVisible: boolean;

  static isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSCollectionViewFlowLayoutInvalidationContext extends NSCollectionViewLayoutInvalidationContext {
  invalidateFlowLayoutDelegateMetrics: boolean;

  invalidateFlowLayoutAttributes: boolean;
}

declare class NSWindowTab extends NSObject {
  title: string;

  attributedTitle: NSAttributedString;

  toolTip: string;

  accessoryView: NSView;
}

declare class NSPDFImageRep extends NSImageRep {
  static imageRepWithData<This extends abstract new (...args: any) => any>(this: This, pdfData: NSData): InstanceType<This>;

  initWithData(pdfData: NSData): this;

  readonly PDFRepresentation: NSData;

  readonly bounds: CGRect;

  currentPage: number;

  readonly pageCount: number;
}

declare class NSPathControlItem extends NSObject {
  title: string;

  attributedTitle: NSAttributedString;

  image: NSImage;

  readonly URL: NSURL;
}

declare class NSToolbar extends NSObject {
  initWithIdentifier(identifier: string): this;

  init(): this;

  insertItemWithItemIdentifierAtIndex(itemIdentifier: string, index: number): void;

  removeItemAtIndex(index: number): void;

  removeItemWithItemIdentifier(itemIdentifier: string): void;

  delegate: NSToolbarDelegate;

  isVisible: boolean;

  runCustomizationPalette(sender: interop.Object | null): void;

  readonly customizationPaletteIsRunning: boolean;

  displayMode: interop.Enum<typeof NSToolbarDisplayMode>;

  selectedItemIdentifier: string;

  allowsUserCustomization: boolean;

  allowsDisplayModeCustomization: boolean;

  readonly identifier: string;

  readonly items: NSArray;

  readonly visibleItems: NSArray;

  get itemIdentifiers(): NSArray;
  set itemIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>);

  centeredItemIdentifiers: NSSet;

  autosavesConfiguration: boolean;

  validateVisibleItems(): void;

  allowsExtensionItems: boolean;

  sizeMode: interop.Enum<typeof NSToolbarSizeMode>;

  centeredItemIdentifier: string;

  fullScreenAccessoryView: NSView;

  fullScreenAccessoryViewMinHeight: number;

  fullScreenAccessoryViewMaxHeight: number;

  showsBaselineSeparator: boolean;

  readonly configurationDictionary: NSDictionary;

  setConfigurationFromDictionary(configDict: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;
}

declare class NSAlignmentFeedbackFilter extends NSObject {
  static readonly inputEventMask: interop.Enum<typeof NSEventMask>;

  updateWithEvent(event: NSEvent): void;

  updateWithPanRecognizer(panRecognizer: NSPanGestureRecognizer): void;

  alignmentFeedbackTokenForMovementInViewPreviousPointAlignedPointDefaultPoint(view: NSView | null, previousPoint: CGPoint, alignedPoint: CGPoint, defaultPoint: CGPoint): NSAlignmentFeedbackToken;

  alignmentFeedbackTokenForHorizontalMovementInViewPreviousXAlignedXDefaultX(view: NSView | null, previousX: number, alignedX: number, defaultX: number): NSAlignmentFeedbackToken;

  alignmentFeedbackTokenForVerticalMovementInViewPreviousYAlignedYDefaultY(view: NSView | null, previousY: number, alignedY: number, defaultY: number): NSAlignmentFeedbackToken;

  performFeedbackPerformanceTime(alignmentFeedbackTokens: NSArray<interop.Object> | Array<interop.Object>, performanceTime: interop.Enum<typeof NSHapticFeedbackPerformanceTime>): void;
}

declare class NSATSTypesetter extends NSTypesetter {
  static readonly sharedTypesetter: NSATSTypesetter;

  lineFragmentRectForProposedRectRemainingRect(proposedRect: CGRect, remainingRect: interop.PointerConvertible): CGRect;

  usesFontLeading: boolean;

  typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;

  hyphenationFactor: number;

  lineFragmentPadding: number;

  substituteFontForFont(originalFont: NSFont): NSFont;

  textTabForGlyphLocationWritingDirectionMaxLocation(glyphLocation: number, direction: interop.Enum<typeof NSWritingDirection>, maxLocation: number): NSTextTab;

  bidiProcessingEnabled: boolean;

  attributedString: NSAttributedString;

  setParagraphGlyphRangeSeparatorGlyphRange(paragraphRange: _NSRange, paragraphSeparatorRange: _NSRange): void;

  readonly paragraphGlyphRange: _NSRange;

  readonly paragraphSeparatorGlyphRange: _NSRange;

  layoutParagraphAtPoint(lineFragmentOrigin: interop.PointerConvertible): number;

  lineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(glyphIndex: number, rect: CGRect): number;

  paragraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect(glyphIndex: number, rect: CGRect): number;

  paragraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(glyphIndex: number, rect: CGRect): number;

  readonly layoutManager: NSLayoutManager;

  readonly currentTextContainer: NSTextContainer;

  setHardInvalidationForGlyphRange(flag: boolean, glyphRange: _NSRange): void;

  getLineFragmentRectUsedRectForParagraphSeparatorGlyphRangeAtProposedOrigin(lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, paragraphSeparatorGlyphRange: _NSRange, lineOrigin: CGPoint): void;

  willSetLineFragmentRectForGlyphRangeUsedRectBaselineOffset(lineRect: interop.PointerConvertible, glyphRange: _NSRange, usedRect: interop.PointerConvertible, baselineOffset: interop.PointerConvertible): void;

  shouldBreakLineByWordBeforeCharacterAtIndex(charIndex: number): boolean;

  shouldBreakLineByHyphenatingBeforeCharacterAtIndex(charIndex: number): boolean;

  hyphenationFactorForGlyphAtIndex(glyphIndex: number): number;

  hyphenCharacterForGlyphAtIndex(glyphIndex: number): number;

  boundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number): CGRect;

  getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBits(glyphsRange: _NSRange, glyphBuffer: interop.PointerConvertible, charIndexBuffer: interop.PointerConvertible, inscribeBuffer: interop.PointerConvertible, elasticBuffer: interop.PointerConvertible): number;
}

declare class NSPrintPanel extends NSObject {
  static printPanel(): NSPrintPanel;

  addAccessoryController(accessoryController: NSViewController): void;

  removeAccessoryController(accessoryController: NSViewController): void;

  readonly accessoryControllers: NSArray;

  options: interop.Enum<typeof NSPrintPanelOptions>;

  setDefaultButtonTitle(defaultButtonTitle: string | null): void;

  defaultButtonTitle(): string;

  helpAnchor: string;

  jobStyleHint: string;

  beginSheetUsingPrintInfoOnWindowCompletionHandler(printInfo: NSPrintInfo, parentWindow: NSWindow, handler: (p1: interop.Enum<typeof NSPrintPanelResult>) => void | null): void;

  beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo(printInfo: NSPrintInfo, docWindow: NSWindow, delegate: interop.Object | null, didEndSelector: string | null, contextInfo: interop.PointerConvertible): void;

  runModalWithPrintInfo(printInfo: NSPrintInfo): number;

  runModal(): number;

  readonly printInfo: NSPrintInfo;

  setAccessoryView(accessoryView: NSView | null): void;

  accessoryView(): NSView;

  updateFromPrintInfo(): void;

  finalWritePrintInfo(): void;
}

declare class NSDraggingItem extends NSObject {
  initWithPasteboardWriter(pasteboardWriter: NSPasteboardWriting): this;

  readonly item: interop.Object;

  draggingFrame: CGRect;

  imageComponentsProvider: () => NSArray;

  setDraggingFrameContents(frame: CGRect, contents: interop.Object | null): void;

  readonly imageComponents: NSArray;
}

declare class NSStatusBarButton extends NSButton {
  appearsDisabled: boolean;
}

declare class NSTableCellView extends NSView {
  objectValue: interop.Object;

  textField: NSTextField;

  imageView: NSImageView;

  backgroundStyle: interop.Enum<typeof NSBackgroundStyle>;

  rowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;

  readonly draggingImageComponents: NSArray;
}

declare class NSTypesetter extends NSObject {
  usesFontLeading: boolean;

  typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;

  hyphenationFactor: number;

  lineFragmentPadding: number;

  substituteFontForFont(originalFont: NSFont): NSFont;

  textTabForGlyphLocationWritingDirectionMaxLocation(glyphLocation: number, direction: interop.Enum<typeof NSWritingDirection>, maxLocation: number): NSTextTab;

  bidiProcessingEnabled: boolean;

  attributedString: NSAttributedString;

  setParagraphGlyphRangeSeparatorGlyphRange(paragraphRange: _NSRange, paragraphSeparatorRange: _NSRange): void;

  readonly paragraphGlyphRange: _NSRange;

  readonly paragraphSeparatorGlyphRange: _NSRange;

  readonly paragraphCharacterRange: _NSRange;

  readonly paragraphSeparatorCharacterRange: _NSRange;

  layoutParagraphAtPoint(lineFragmentOrigin: interop.PointerConvertible): number;

  beginParagraph(): void;

  endParagraph(): void;

  beginLineWithGlyphAtIndex(glyphIndex: number): void;

  endLineWithGlyphRange(lineGlyphRange: _NSRange): void;

  lineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(glyphIndex: number, rect: CGRect): number;

  paragraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect(glyphIndex: number, rect: CGRect): number;

  paragraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(glyphIndex: number, rect: CGRect): number;

  getLineFragmentRectUsedRectForParagraphSeparatorGlyphRangeAtProposedOrigin(lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, paragraphSeparatorGlyphRange: _NSRange, lineOrigin: CGPoint): void;

  readonly attributesForExtraLineFragment: NSDictionary;

  readonly layoutManager: NSLayoutManager;

  readonly textContainers: NSArray;

  readonly currentTextContainer: NSTextContainer;

  readonly currentParagraphStyle: NSParagraphStyle;

  setHardInvalidationForGlyphRange(flag: boolean, glyphRange: _NSRange): void;

  layoutGlyphsInLayoutManagerStartingAtGlyphIndexMaxNumberOfLineFragmentsNextGlyphIndex(layoutManager: NSLayoutManager, startGlyphIndex: number, maxNumLines: number, nextGlyph: interop.PointerConvertible): void;

  layoutCharactersInRangeForLayoutManagerMaximumNumberOfLineFragments(characterRange: _NSRange, layoutManager: NSLayoutManager, maxNumLines: number): _NSRange;

  static printingAdjustmentInLayoutManagerForNominallySpacedGlyphRangePackedGlyphsCount(layoutMgr: NSLayoutManager, nominallySpacedGlyphsRange: _NSRange, packedGlyphs: interop.PointerConvertible, packedGlyphsCount: number): CGSize;

  baselineOffsetInLayoutManagerGlyphIndex(layoutMgr: NSLayoutManager, glyphIndex: number): number;

  static readonly sharedSystemTypesetter: NSTypesetter;

  static sharedSystemTypesetterForBehavior(behavior: interop.Enum<typeof NSTypesetterBehavior>): interop.Object;

  static readonly defaultTypesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;

  willSetLineFragmentRectForGlyphRangeUsedRectBaselineOffset(lineRect: interop.PointerConvertible, glyphRange: _NSRange, usedRect: interop.PointerConvertible, baselineOffset: interop.PointerConvertible): void;

  shouldBreakLineByWordBeforeCharacterAtIndex(charIndex: number): boolean;

  shouldBreakLineByHyphenatingBeforeCharacterAtIndex(charIndex: number): boolean;

  hyphenationFactorForGlyphAtIndex(glyphIndex: number): number;

  hyphenCharacterForGlyphAtIndex(glyphIndex: number): number;

  boundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number): CGRect;

  characterRangeForGlyphRangeActualGlyphRange(glyphRange: _NSRange, actualGlyphRange: interop.PointerConvertible): _NSRange;

  glyphRangeForCharacterRangeActualCharacterRange(charRange: _NSRange, actualCharRange: interop.PointerConvertible): _NSRange;

  getLineFragmentRectUsedRectRemainingRectForStartingGlyphAtIndexProposedRectLineSpacingParagraphSpacingBeforeParagraphSpacingAfter(lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, remainingRect: interop.PointerConvertible, startingGlyphIndex: number, proposedRect: CGRect, lineSpacing: number, paragraphSpacingBefore: number, paragraphSpacingAfter: number): void;

  setLineFragmentRectForGlyphRangeUsedRectBaselineOffset(fragmentRect: CGRect, glyphRange: _NSRange, usedRect: CGRect, baselineOffset: number): void;

  setNotShownAttributeForGlyphRange(flag: boolean, glyphRange: _NSRange): void;

  setDrawsOutsideLineFragmentForGlyphRange(flag: boolean, glyphRange: _NSRange): void;

  setLocationWithAdvancementsForStartOfGlyphRange(location: CGPoint, advancements: interop.PointerConvertible, glyphRange: _NSRange): void;

  setAttachmentSizeForGlyphRange(attachmentSize: CGSize, glyphRange: _NSRange): void;

  setBidiLevelsForGlyphRange(levels: interop.PointerConvertible, glyphRange: _NSRange): void;

  actionForControlCharacterAtIndex(charIndex: number): interop.Enum<typeof NSTypesetterControlCharacterAction>;

  getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBitsBidiLevels(glyphsRange: _NSRange, glyphBuffer: interop.PointerConvertible, charIndexBuffer: interop.PointerConvertible, inscribeBuffer: interop.PointerConvertible, elasticBuffer: interop.PointerConvertible, bidiLevelBuffer: interop.PointerConvertible): number;

  substituteGlyphsInRangeWithGlyphs(glyphRange: _NSRange, glyphs: interop.PointerConvertible): void;

  insertGlyphAtGlyphIndexCharacterIndex(glyph: number, glyphIndex: number, characterIndex: number): void;

  deleteGlyphsInRange(glyphRange: _NSRange): void;
}

declare class NSTextFinder extends NSObject implements NSCoding {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  client: NSTextFinderClient;

  performAction(op: interop.Enum<typeof NSTextFinderAction>): void;

  validateAction(op: interop.Enum<typeof NSTextFinderAction>): boolean;

  findBarContainer: NSTextFinderBarContainer;

  cancelFindIndicator(): void;

  findIndicatorNeedsUpdate: boolean;

  isIncrementalSearchingEnabled: boolean;

  incrementalSearchingShouldDimContentView: boolean;

  readonly incrementalMatchRanges: NSArray;

  static drawIncrementalMatchHighlightInRect(rect: CGRect): void;

  noteClientStringWillChange(): void;

  encodeWithCoder(coder: NSCoder): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSPopUpButtonCell extends NSMenuItemCell implements NSMenuItemValidation {
  initTextCellPullsDown(stringValue: string, pullDown: boolean): this;

  initWithCoder(coder: NSCoder): this;

  menu: NSMenu;

  pullsDown: boolean;

  autoenablesItems: boolean;

  preferredEdge: interop.Enum<typeof NSRectEdge>;

  usesItemFromMenu: boolean;

  altersStateOfSelectedItem: boolean;

  addItemWithTitle(title: string): void;

  addItemsWithTitles(itemTitles: NSArray<interop.Object> | Array<interop.Object>): void;

  insertItemWithTitleAtIndex(title: string, index: number): void;

  removeItemWithTitle(title: string): void;

  removeItemAtIndex(index: number): void;

  removeAllItems(): void;

  readonly itemArray: NSArray;

  readonly numberOfItems: number;

  indexOfItem(item: NSMenuItem): number;

  indexOfItemWithTitle(title: string): number;

  indexOfItemWithTag(tag: number): number;

  indexOfItemWithRepresentedObject(obj: interop.Object | null): number;

  indexOfItemWithTargetAndAction(target: interop.Object | null, actionSelector: string | null): number;

  itemAtIndex(index: number): NSMenuItem;

  itemWithTitle(title: string): NSMenuItem;

  readonly lastItem: NSMenuItem;

  selectItem(item: NSMenuItem | null): void;

  selectItemAtIndex(index: number): void;

  selectItemWithTitle(title: string): void;

  selectItemWithTag(tag: number): boolean;

  // @ts-ignore MemberDecl.tsIgnore
  setTitle(string: string | null): void;

  readonly selectedItem: NSMenuItem;

  readonly indexOfSelectedItem: number;

  synchronizeTitleAndSelectedItem(): void;

  itemTitleAtIndex(index: number): string;

  readonly itemTitles: NSArray;

  readonly titleOfSelectedItem: string;

  attachPopUpWithFrameInView(cellFrame: CGRect, controlView: NSView): void;

  dismissPopUp(): void;

  performClickWithFrameInView(frame: CGRect, controlView: NSView): void;

  arrowPosition: interop.Enum<typeof NSPopUpArrowPosition>;

  validateMenuItem(menuItem: NSMenuItem): boolean;

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
declare class NSTextAttachmentCell extends NSCell implements NSTextAttachmentCellProtocol {
  // @ts-ignore MemberDecl.tsIgnore
  drawWithFrameInView(cellFrame: CGRect, controlView: NSView | null): void;

  wantsToTrackMouse(): boolean;

  // @ts-ignore MemberDecl.tsIgnore
  highlightWithFrameInView(flag: boolean, cellFrame: CGRect, controlView: NSView | null): void;

  // @ts-ignore MemberDecl.tsIgnore
  trackMouseInRectOfViewUntilMouseUp(theEvent: NSEvent, cellFrame: CGRect, controlView: NSView | null, flag: boolean): boolean;

  readonly cellSize: CGSize;

  cellBaselineOffset(): CGPoint;

  attachment: NSTextAttachment;

  drawWithFrameInViewCharacterIndex(cellFrame: CGRect, controlView: NSView | null, charIndex: number): void;

  drawWithFrameInViewCharacterIndexLayoutManager(cellFrame: CGRect, controlView: NSView | null, charIndex: number, layoutManager: NSLayoutManager): void;

  wantsToTrackMouseForEventInRectOfViewAtCharacterIndex(theEvent: NSEvent, cellFrame: CGRect, controlView: NSView | null, charIndex: number): boolean;

  trackMouseInRectOfViewAtCharacterIndexUntilMouseUp(theEvent: NSEvent, cellFrame: CGRect, controlView: NSView | null, charIndex: number, flag: boolean): boolean;

  cellFrameForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(textContainer: NSTextContainer, lineFrag: CGRect, position: CGPoint, charIndex: number): CGRect;

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

declare class NSDocument extends NSObject implements NSEditorRegistration, NSFilePresenter, NSMenuItemValidation, NSUserInterfaceValidations {
  init(): this;

  initWithTypeError(typeName: string, outError: interop.PointerConvertible): this;

  static canConcurrentlyReadDocumentsOfType(typeName: string): boolean;

  initWithContentsOfURLOfTypeError(url: NSURL, typeName: string, outError: interop.PointerConvertible): this;

  initForURLWithContentsOfURLOfTypeError(urlOrNil: NSURL | null, contentsURL: NSURL, typeName: string, outError: interop.PointerConvertible): this;

  fileType: string;

  fileURL: NSURL;

  fileModificationDate: NSDate;

  isDraft: boolean;

  performActivityWithSynchronousWaitingUsingBlock(waitSynchronously: boolean, block: (p1: () => void) => void): void;

  continueActivityUsingBlock(block: () => void): void;

  continueAsynchronousWorkOnMainThreadUsingBlock(block: () => void): void;

  performSynchronousFileAccessUsingBlock(block: () => void): void;

  performAsynchronousFileAccessUsingBlock(block: (p1: () => void) => void): void;

  revertDocumentToSaved(sender: interop.Object | null): void;

  revertToContentsOfURLOfTypeError(url: NSURL, typeName: string, outError: interop.PointerConvertible): boolean;

  readFromURLOfTypeError(url: NSURL, typeName: string, outError: interop.PointerConvertible): boolean;

  readFromFileWrapperOfTypeError(fileWrapper: NSFileWrapper, typeName: string, outError: interop.PointerConvertible): boolean;

  readFromDataOfTypeError(data: NSData, typeName: string, outError: interop.PointerConvertible): boolean;

  readonly isEntireFileLoaded: boolean;

  writeToURLOfTypeError(url: NSURL, typeName: string, outError: interop.PointerConvertible): boolean;

  fileWrapperOfTypeError(typeName: string, outError: interop.PointerConvertible): NSFileWrapper;

  dataOfTypeError(typeName: string, outError: interop.PointerConvertible): NSData;

  unblockUserInteraction(): void;

  readonly autosavingIsImplicitlyCancellable: boolean;

  writeSafelyToURLOfTypeForSaveOperationError(url: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, outError: interop.PointerConvertible): boolean;

  writeToURLOfTypeForSaveOperationOriginalContentsURLError(url: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, absoluteOriginalContentsURL: NSURL | null, outError: interop.PointerConvertible): boolean;

  fileAttributesToWriteToURLOfTypeForSaveOperationOriginalContentsURLError(url: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, absoluteOriginalContentsURL: NSURL | null, outError: interop.PointerConvertible): NSDictionary;

  readonly keepBackupFile: boolean;

  readonly backupFileURL: NSURL;

  saveDocument(sender: interop.Object | null): void;

  saveDocumentAs(sender: interop.Object | null): void;

  saveDocumentTo(sender: interop.Object | null): void;

  saveDocumentWithDelegateDidSaveSelectorContextInfo(delegate: interop.Object | null, didSaveSelector: string | null, contextInfo: interop.PointerConvertible): void;

  runModalSavePanelForSaveOperationDelegateDidSaveSelectorContextInfo(saveOperation: interop.Enum<typeof NSSaveOperationType>, delegate: interop.Object | null, didSaveSelector: string | null, contextInfo: interop.PointerConvertible): void;

  readonly savePanelShowsFileFormatsControl: boolean;

  prepareSavePanel(savePanel: NSSavePanel): boolean;

  readonly fileNameExtensionWasHiddenInLastRunSavePanel: boolean;

  readonly fileTypeFromLastRunSavePanel: string;

  saveToURLOfTypeForSaveOperationDelegateDidSaveSelectorContextInfo(url: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, delegate: interop.Object | null, didSaveSelector: string | null, contextInfo: interop.PointerConvertible): void;

  saveToURLOfTypeForSaveOperationCompletionHandler(url: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, completionHandler: (p1: NSError) => void | null): void;

  canAsynchronouslyWriteToURLOfTypeForSaveOperation(url: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>): boolean;

  checkAutosavingSafetyAndReturnError(outError: interop.PointerConvertible): boolean;

  scheduleAutosaving(): void;

  readonly hasUnautosavedChanges: boolean;

  autosaveDocumentWithDelegateDidAutosaveSelectorContextInfo(delegate: interop.Object | null, didAutosaveSelector: string | null, contextInfo: interop.PointerConvertible): void;

  autosaveWithImplicitCancellabilityCompletionHandler(autosavingIsImplicitlyCancellable: boolean, completionHandler: (p1: NSError) => void | null): void;

  static readonly autosavesInPlace: boolean;

  static readonly preservesVersions: boolean;

  browseDocumentVersions(sender: interop.Object | null): void;

  readonly isBrowsingVersions: boolean;

  stopBrowsingVersionsWithCompletionHandler(completionHandler: () => void | null): void;

  static readonly autosavesDrafts: boolean;

  readonly autosavingFileType: string;

  autosavedContentsFileURL: NSURL;

  canCloseDocumentWithDelegateShouldCloseSelectorContextInfo(delegate: interop.Object, shouldCloseSelector: string | null, contextInfo: interop.PointerConvertible): void;

  close(): void;

  duplicateDocument(sender: interop.Object | null): void;

  duplicateDocumentWithDelegateDidDuplicateSelectorContextInfo(delegate: interop.Object | null, didDuplicateSelector: string | null, contextInfo: interop.PointerConvertible): void;

  duplicateAndReturnError(outError: interop.PointerConvertible): NSDocument;

  renameDocument(sender: interop.Object | null): void;

  moveDocumentToUbiquityContainer(sender: interop.Object | null): void;

  moveDocument(sender: interop.Object | null): void;

  moveDocumentWithCompletionHandler(completionHandler: (p1: boolean) => void | null): void;

  moveToURLCompletionHandler(url: NSURL, completionHandler: (p1: NSError) => void | null): void;

  lockDocument(sender: interop.Object | null): void;

  unlockDocument(sender: interop.Object | null): void;

  lockDocumentWithCompletionHandler(completionHandler: (p1: boolean) => void | null): void;

  lockWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  unlockDocumentWithCompletionHandler(completionHandler: (p1: boolean) => void | null): void;

  unlockWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  readonly isLocked: boolean;

  runPageLayout(sender: interop.Object | null): void;

  runModalPageLayoutWithPrintInfoDelegateDidRunSelectorContextInfo(printInfo: NSPrintInfo, delegate: interop.Object | null, didRunSelector: string | null, contextInfo: interop.PointerConvertible): void;

  preparePageLayout(pageLayout: NSPageLayout): boolean;

  shouldChangePrintInfo(newPrintInfo: NSPrintInfo): boolean;

  printInfo: NSPrintInfo;

  printDocument(sender: interop.Object | null): void;

  printDocumentWithSettingsShowPrintPanelDelegateDidPrintSelectorContextInfo(printSettings: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, showPrintPanel: boolean, delegate: interop.Object | null, didPrintSelector: string | null, contextInfo: interop.PointerConvertible): void;

  printOperationWithSettingsError(printSettings: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, outError: interop.PointerConvertible): NSPrintOperation;

  runModalPrintOperationDelegateDidRunSelectorContextInfo(printOperation: NSPrintOperation, delegate: interop.Object | null, didRunSelector: string | null, contextInfo: interop.PointerConvertible): void;

  saveDocumentToPDF(sender: interop.Object | null): void;

  readonly PDFPrintOperation: NSPrintOperation;

  readonly allowsDocumentSharing: boolean;

  shareDocumentWithSharingServiceCompletionHandler(sharingService: NSSharingService, completionHandler: (p1: boolean) => void | null): void;

  prepareSharingServicePicker(sharingServicePicker: NSSharingServicePicker): void;

  get previewRepresentableActivityItems(): NSArray;
  set previewRepresentableActivityItems(value: NSArray<interop.Object> | Array<interop.Object>);

  readonly isDocumentEdited: boolean;

  readonly isInViewingMode: boolean;

  updateChangeCount(change: interop.Enum<typeof NSDocumentChangeType>): void;

  changeCountTokenForSaveOperation(saveOperation: interop.Enum<typeof NSSaveOperationType>): interop.Object;

  updateChangeCountWithTokenForSaveOperation(changeCountToken: interop.Object, saveOperation: interop.Enum<typeof NSSaveOperationType>): void;

  undoManager: NSUndoManager;

  hasUndoManager: boolean;

  presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(error: NSError, window: NSWindow, delegate: interop.Object | null, didPresentSelector: string | null, contextInfo: interop.PointerConvertible): void;

  presentError(error: NSError): boolean;

  willPresentError(error: NSError): NSError;

  willNotPresentError(error: NSError): void;

  makeWindowControllers(): void;

  readonly windowNibName: string;

  windowControllerWillLoadNib(windowController: NSWindowController): void;

  windowControllerDidLoadNib(windowController: NSWindowController): void;

  setWindow(window: NSWindow | null): void;

  addWindowController(windowController: NSWindowController): void;

  removeWindowController(windowController: NSWindowController): void;

  showWindows(): void;

  readonly windowControllers: NSArray;

  shouldCloseWindowControllerDelegateShouldCloseSelectorContextInfo(windowController: NSWindowController, delegate: interop.Object | null, shouldCloseSelector: string | null, contextInfo: interop.PointerConvertible): void;

  displayName: string;

  defaultDraftName(): string;

  readonly windowForSheet: NSWindow;

  static readonly readableTypes: NSArray;

  static readonly writableTypes: NSArray;

  static isNativeType(type: string): boolean;

  writableTypesForSaveOperation(saveOperation: interop.Enum<typeof NSSaveOperationType>): NSArray;

  fileNameExtensionForTypeSaveOperation(typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>): string;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  static readonly usesUbiquitousStorage: boolean;

  readonly presentedItemURL: NSURL;

  readonly observedPresentedItemUbiquityAttributes: NSSet;

  relinquishPresentedItemToReader(reader: (p1: () => void) => void | null): void;

  relinquishPresentedItemToWriter(writer: (p1: () => void) => void | null): void;

  savePresentedItemChangesWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  accommodatePresentedItemDeletionWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  presentedItemDidMoveToURL(newURL: NSURL): void;

  presentedItemDidChange(): void;

  presentedItemDidChangeUbiquityAttributes(attributes: NSSet): void;

  presentedItemDidGainVersion(version: NSFileVersion): void;

  presentedItemDidLoseVersion(version: NSFileVersion): void;

  presentedItemDidResolveConflictVersion(version: NSFileVersion): void;

  readonly shouldRunSavePanelWithAccessoryView: boolean;

  saveToURLOfTypeForSaveOperationError(url: NSURL, typeName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, outError: interop.PointerConvertible): boolean;

  dataRepresentationOfType(type: string): NSData;

  fileAttributesToWriteToFileOfTypeSaveOperation(fullDocumentPath: string, documentTypeName: string, saveOperationType: interop.Enum<typeof NSSaveOperationType>): NSDictionary;

  fileName(): string;

  fileWrapperRepresentationOfType(type: string): NSFileWrapper;

  initWithContentsOfFileOfType(absolutePath: string, typeName: string): this;

  initWithContentsOfURLOfType(url: NSURL, typeName: string): this;

  loadDataRepresentationOfType(data: NSData, type: string): boolean;

  loadFileWrapperRepresentationOfType(wrapper: NSFileWrapper, type: string): boolean;

  printShowingPrintPanel(flag: boolean): void;

  readFromFileOfType(fileName: string, type: string): boolean;

  readFromURLOfType(url: NSURL, type: string): boolean;

  revertToSavedFromFileOfType(fileName: string, type: string): boolean;

  revertToSavedFromURLOfType(url: NSURL, type: string): boolean;

  runModalPageLayoutWithPrintInfo(printInfo: NSPrintInfo): number;

  saveToFileSaveOperationDelegateDidSaveSelectorContextInfo(fileName: string, saveOperation: interop.Enum<typeof NSSaveOperationType>, delegate: interop.Object | null, didSaveSelector: string | null, contextInfo: interop.PointerConvertible): void;

  setFileName(fileName: string | null): void;

  writeToFileOfType(fileName: string, type: string): boolean;

  writeToFileOfTypeOriginalFileSaveOperation(fullDocumentPath: string, documentTypeName: string, fullOriginalDocumentPath: string | null, saveOperationType: interop.Enum<typeof NSSaveOperationType>): boolean;

  writeToURLOfType(url: NSURL, type: string): boolean;

  writeWithBackupToFileOfTypeSaveOperation(fullDocumentPath: string, documentTypeName: string, saveOperationType: interop.Enum<typeof NSSaveOperationType>): boolean;

  userActivity: NSUserActivity;

  updateUserActivityState(activity: NSUserActivity): void;

  lastComponentOfFileName: string;

  handleSaveScriptCommand(command: NSScriptCommand): interop.Object;

  handleCloseScriptCommand(command: NSCloseCommand): interop.Object;

  handlePrintScriptCommand(command: NSScriptCommand): interop.Object;

  readonly objectSpecifier: NSScriptObjectSpecifier;

  restoreDocumentWindowWithIdentifierStateCompletionHandler(identifier: string, state: NSCoder, completionHandler: (p1: NSWindow, p2: NSError) => void | null): void;

  encodeRestorableStateWithCoder(coder: NSCoder): void;

  encodeRestorableStateWithCoderBackgroundQueue(coder: NSCoder, queue: NSOperationQueue): void;

  restoreStateWithCoder(coder: NSCoder): void;

  invalidateRestorableState(): void;

  static readonly restorableStateKeyPaths: NSArray;

  static allowedClassesForRestorableStateKeyPath(keyPath: string): NSArray;

  objectDidBeginEditing(editor: NSEditor): void;

  objectDidEndEditing(editor: NSEditor): void;

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

  readonly presentedItemOperationQueue: NSOperationQueue;

  readonly primaryPresentedItemURL: NSURL;

  accommodatePresentedItemEvictionWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  accommodatePresentedSubitemDeletionAtURLCompletionHandler(url: NSURL, completionHandler: (p1: NSError) => void | null): void;

  presentedSubitemDidAppearAtURL(url: NSURL): void;

  presentedSubitemAtURLDidMoveToURL(oldURL: NSURL, newURL: NSURL): void;

  presentedSubitemDidChangeAtURL(url: NSURL): void;

  presentedSubitemAtURLDidGainVersion(url: NSURL, version: NSFileVersion): void;

  presentedSubitemAtURLDidLoseVersion(url: NSURL, version: NSFileVersion): void;

  presentedSubitemAtURLDidResolveConflictVersion(url: NSURL, version: NSFileVersion): void;

  validateMenuItem(menuItem: NSMenuItem): boolean;
}

declare class NSCollectionViewTransitionLayout extends NSCollectionViewLayout {
  transitionProgress: number;

  readonly currentLayout: NSCollectionViewLayout;

  readonly nextLayout: NSCollectionViewLayout;

  initWithCurrentLayoutNextLayout(currentLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): this;

  updateValueForAnimatedKey(value: number, key: string): void;

  valueForAnimatedKey(key: string): number;
}

declare class NSTextLayoutFragment extends NSObject implements NSSecureCoding {
  initWithTextElementRange(textElement: NSTextElement, rangeInElement: NSTextRange | null): this;

  initWithCoder(coder: NSCoder): this;

  readonly textLayoutManager: NSTextLayoutManager;

  readonly textElement: NSTextElement | null;

  readonly rangeInElement: NSTextRange;

  readonly textLineFragments: NSArray;

  textLineFragmentForVerticalOffsetRequiresExactMatch(verticalOffset: number, requiresExactMatch: boolean): NSTextLineFragment;

  textLineFragmentForTextLocationIsUpstreamAffinity(textLocation: NSTextLocation, isUpstreamAffinity: boolean): NSTextLineFragment;

  layoutQueue: NSOperationQueue;

  readonly state: interop.Enum<typeof NSTextLayoutFragmentState>;

  invalidateLayout(): void;

  readonly layoutFragmentFrame: CGRect;

  readonly renderingSurfaceBounds: CGRect;

  readonly leadingPadding: number;

  readonly trailingPadding: number;

  readonly topMargin: number;

  readonly bottomMargin: number;

  drawAtPointInContext(point: CGPoint, context: interop.PointerConvertible): void;

  readonly textAttachmentViewProviders: NSArray;

  frameForTextAttachmentAtLocation(location: NSTextLocation): CGRect;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSMenu extends NSObject implements NSCopying, NSCoding, NSUserInterfaceItemIdentification, NSAppearanceCustomization, NSAccessibilityElementProtocol, NSAccessibility {
  initWithTitle(title: string): this;

  initWithCoder(coder: NSCoder): this;

  title: string;

  static popUpContextMenuWithEventForView(menu: NSMenu, event: NSEvent, view: NSView): void;

  static popUpContextMenuWithEventForViewWithFont(menu: NSMenu, event: NSEvent, view: NSView, font: NSFont | null): void;

  popUpMenuPositioningItemAtLocationInView(item: NSMenuItem | null, location: CGPoint, view: NSView | null): boolean;

  static setMenuBarVisible(visible: boolean): void;

  static menuBarVisible(): boolean;

  supermenu: NSMenu;

  insertItemAtIndex(newItem: NSMenuItem, index: number): void;

  addItem(newItem: NSMenuItem): void;

  insertItemWithTitleActionKeyEquivalentAtIndex(string: string, selector: string | null, charCode: string, index: number): NSMenuItem;

  addItemWithTitleActionKeyEquivalent(string: string, selector: string | null, charCode: string): NSMenuItem;

  removeItemAtIndex(index: number): void;

  removeItem(item: NSMenuItem): void;

  setSubmenuForItem(menu: NSMenu | null, item: NSMenuItem): void;

  removeAllItems(): void;

  get itemArray(): NSArray;
  set itemArray(value: NSArray<interop.Object> | Array<interop.Object>);

  readonly numberOfItems: number;

  itemAtIndex(index: number): NSMenuItem;

  indexOfItem(item: NSMenuItem): number;

  indexOfItemWithTitle(title: string): number;

  indexOfItemWithTag(tag: number): number;

  indexOfItemWithRepresentedObject(object: interop.Object | null): number;

  indexOfItemWithSubmenu(submenu: NSMenu | null): number;

  indexOfItemWithTargetAndAction(target: interop.Object | null, actionSelector: string | null): number;

  itemWithTitle(title: string): NSMenuItem;

  itemWithTag(tag: number): NSMenuItem;

  autoenablesItems: boolean;

  update(): void;

  performKeyEquivalent(event: NSEvent): boolean;

  itemChanged(item: NSMenuItem): void;

  performActionForItemAtIndex(index: number): void;

  delegate: NSMenuDelegate;

  readonly menuBarHeight: number;

  cancelTracking(): void;

  cancelTrackingWithoutAnimation(): void;

  readonly highlightedItem: NSMenuItem;

  minimumWidth: number;

  readonly size: CGSize;

  font: NSFont;

  allowsContextMenuPlugIns: boolean;

  showsStateColumn: boolean;

  userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  static paletteMenuWithColorsTitlesSelectionHandler<This extends abstract new (...args: any) => any>(this: This, colors: NSArray<interop.Object> | Array<interop.Object>, itemTitles: NSArray<interop.Object> | Array<interop.Object>, onSelectionChange: (p1: NSMenu) => void | null): InstanceType<This>;

  static paletteMenuWithColorsTitlesTemplateImageSelectionHandler<This extends abstract new (...args: any) => any>(this: This, colors: NSArray<interop.Object> | Array<interop.Object>, itemTitles: NSArray<interop.Object> | Array<interop.Object>, image: NSImage, onSelectionChange: (p1: NSMenu) => void | null): InstanceType<This>;

  presentationStyle: interop.Enum<typeof NSMenuPresentationStyle>;

  selectionMode: interop.Enum<typeof NSMenuSelectionMode>;

  get selectedItems(): NSArray;
  set selectedItems(value: NSArray<interop.Object> | Array<interop.Object>);

  submenuAction(sender: interop.Object | null): void;

  readonly propertiesToUpdate: interop.Enum<typeof NSMenuProperties>;

  setMenuRepresentation(menuRep: interop.Object): void;

  menuRepresentation(): interop.Object;

  setContextMenuRepresentation(menuRep: interop.Object): void;

  contextMenuRepresentation(): interop.Object;

  setTearOffMenuRepresentation(menuRep: interop.Object): void;

  tearOffMenuRepresentation(): interop.Object;

  static menuZone(): interop.Pointer;

  static setMenuZone(zone: interop.PointerConvertible): void;

  attachedMenu(): NSMenu;

  isAttached(): boolean;

  sizeToFit(): void;

  locationForSubmenu(submenu: NSMenu): CGPoint;

  menuChangedMessagesEnabled: boolean;

  helpRequested(eventPtr: NSEvent): void;

  readonly isTornOff: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  identifier: string;

  appearance: NSAppearance;

  readonly effectiveAppearance: NSAppearance;

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

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSRotationGestureRecognizer extends NSGestureRecognizer {
  rotation: number;

  rotationInDegrees: number;
}

declare class NSCollectionViewDiffableDataSource<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends NSObject implements NSCollectionViewDataSource {
  initWithCollectionViewItemProvider(collectionView: NSCollectionView, itemProvider: (p1: NSCollectionView, p2: NSIndexPath, p3: interop.Object) => NSCollectionViewItem): this;

  snapshot(): NSDiffableDataSourceSnapshot;

  applySnapshotAnimatingDifferences(snapshot: NSDiffableDataSourceSnapshot, animatingDifferences: boolean): void;

  itemIdentifierForIndexPath(indexPath: NSIndexPath): ItemIdentifierType;

  indexPathForItemIdentifier(identifier: ItemIdentifierType): NSIndexPath;

  supplementaryViewProvider: (p1: NSCollectionView, p2: string, p3: NSIndexPath) => NSView;

  collectionViewNumberOfItemsInSection(collectionView: NSCollectionView, section: number): number;

  collectionViewItemForRepresentedObjectAtIndexPath(collectionView: NSCollectionView, indexPath: NSIndexPath): NSCollectionViewItem;

  numberOfSectionsInCollectionView(collectionView: NSCollectionView): number;

  collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: NSCollectionView, kind: string, indexPath: NSIndexPath): NSView;

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

declare class NSToolbarItemGroup extends NSToolbarItem {
  static groupWithItemIdentifierTitlesSelectionModeLabelsTargetAction<This extends abstract new (...args: any) => any>(this: This, itemIdentifier: string, titles: NSArray<interop.Object> | Array<interop.Object>, selectionMode: interop.Enum<typeof NSToolbarItemGroupSelectionMode>, labels: NSArray<interop.Object> | Array<interop.Object> | null, target: interop.Object | null, action: string | null): InstanceType<This>;

  static groupWithItemIdentifierImagesSelectionModeLabelsTargetAction<This extends abstract new (...args: any) => any>(this: This, itemIdentifier: string, images: NSArray<interop.Object> | Array<interop.Object>, selectionMode: interop.Enum<typeof NSToolbarItemGroupSelectionMode>, labels: NSArray<interop.Object> | Array<interop.Object> | null, target: interop.Object | null, action: string | null): InstanceType<This>;

  get subitems(): NSArray;
  set subitems(value: NSArray<interop.Object> | Array<interop.Object>);

  controlRepresentation: interop.Enum<typeof NSToolbarItemGroupControlRepresentation>;

  selectionMode: interop.Enum<typeof NSToolbarItemGroupSelectionMode>;

  selectedIndex: number;

  setSelectedAtIndex(selected: boolean, index: number): void;

  isSelectedAtIndex(index: number): boolean;
}

declare class NSFilePromiseProvider extends NSObject implements NSPasteboardWriting {
  fileType: string;

  delegate: NSFilePromiseProviderDelegate;

  userInfo: interop.Object;

  initWithFileTypeDelegate(fileType: string, delegate: NSFilePromiseProviderDelegate): this;

  init(): this;

  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray;

  writingOptionsForTypePasteboard(type: string, pasteboard: NSPasteboard): interop.Enum<typeof NSPasteboardWritingOptions>;

  pasteboardPropertyListForType(type: string): interop.Object;

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

declare class NSSplitViewController extends NSViewController implements NSSplitViewDelegate, NSUserInterfaceValidations {
  splitView: NSSplitView;

  get splitViewItems(): NSArray;
  set splitViewItems(value: NSArray<interop.Object> | Array<interop.Object>);

  addSplitViewItem(splitViewItem: NSSplitViewItem): void;

  insertSplitViewItemAtIndex(splitViewItem: NSSplitViewItem, index: number): void;

  removeSplitViewItem(splitViewItem: NSSplitViewItem): void;

  splitViewItemForViewController(viewController: NSViewController): NSSplitViewItem;

  minimumThicknessForInlineSidebars: number;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  viewDidLoad(): void;

  splitViewCanCollapseSubview(splitView: NSSplitView, subview: NSView): boolean;

  splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex(splitView: NSSplitView, subview: NSView, dividerIndex: number): boolean;

  splitViewShouldHideDividerAtIndex(splitView: NSSplitView, dividerIndex: number): boolean;

  splitViewEffectiveRectForDrawnRectOfDividerAtIndex(splitView: NSSplitView, proposedEffectiveRect: CGRect, drawnRect: CGRect, dividerIndex: number): CGRect;

  splitViewAdditionalEffectiveRectOfDividerAtIndex(splitView: NSSplitView, dividerIndex: number): CGRect;

  toggleSidebar(sender: interop.Object | null): void;

  toggleInspector(sender: interop.Object | null): void;

  splitViewConstrainMinCoordinateOfSubviewAt(splitView: NSSplitView, proposedMinimumPosition: number, dividerIndex: number): number;

  splitViewConstrainMaxCoordinateOfSubviewAt(splitView: NSSplitView, proposedMaximumPosition: number, dividerIndex: number): number;

  splitViewConstrainSplitPositionOfSubviewAt(splitView: NSSplitView, proposedPosition: number, dividerIndex: number): number;

  splitViewResizeSubviewsWithOldSize(splitView: NSSplitView, oldSize: CGSize): void;

  splitViewShouldAdjustSizeOfSubview(splitView: NSSplitView, view: NSView): boolean;

  splitViewWillResizeSubviews(notification: NSNotification): void;

  splitViewDidResizeSubviews(notification: NSNotification): void;

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

declare class NSScrubberTextItemView extends NSScrubberItemView {
  readonly textField: NSTextField;

  title: string;
}

declare class NSTextLayoutManager extends NSObject implements NSSecureCoding, NSTextSelectionDataSource {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  delegate: NSTextLayoutManagerDelegate;

  usesFontLeading: boolean;

  limitsLayoutForSuspiciousContents: boolean;

  usesHyphenation: boolean;

  readonly textContentManager: NSTextContentManager;

  replaceTextContentManager(textContentManager: NSTextContentManager): void;

  textContainer: NSTextContainer;

  readonly usageBoundsForTextContainer: CGRect;

  readonly textViewportLayoutController: NSTextViewportLayoutController;

  layoutQueue: NSOperationQueue;

  ensureLayoutForRange(range: NSTextRange): void;

  ensureLayoutForBounds(bounds: CGRect): void;

  invalidateLayoutForRange(range: NSTextRange): void;

  textLayoutFragmentForPosition(position: CGPoint): NSTextLayoutFragment;

  textLayoutFragmentForLocation(location: NSTextLocation): NSTextLayoutFragment;

  enumerateTextLayoutFragmentsFromLocationOptionsUsingBlock(location: NSTextLocation | null, options: interop.Enum<typeof NSTextLayoutFragmentEnumerationOptions>, block: (p1: NSTextLayoutFragment) => boolean): NSTextLocation;

  get textSelections(): NSArray;
  set textSelections(value: NSArray<interop.Object> | Array<interop.Object>);

  textSelectionNavigation: NSTextSelectionNavigation;

  enumerateRenderingAttributesFromLocationReverseUsingBlock(location: NSTextLocation, reverse: boolean, block: (p1: NSTextLayoutManager, p2: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, p3: NSTextRange) => boolean): void;

  setRenderingAttributesForTextRange(renderingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, textRange: NSTextRange): void;

  addRenderingAttributeValueForTextRange(renderingAttribute: string, value: interop.Object | null, textRange: NSTextRange): void;

  removeRenderingAttributeForTextRange(renderingAttribute: string, textRange: NSTextRange): void;

  invalidateRenderingAttributesForTextRange(textRange: NSTextRange): void;

  renderingAttributesValidator: (p1: NSTextLayoutManager, p2: NSTextLayoutFragment) => void;

  static readonly linkRenderingAttributes: NSDictionary;

  renderingAttributesForLinkAtLocation(link: interop.Object, location: NSTextLocation): NSDictionary;

  enumerateTextSegmentsInRangeTypeOptionsUsingBlock(textRange: NSTextRange, type: interop.Enum<typeof NSTextLayoutManagerSegmentType>, options: interop.Enum<typeof NSTextLayoutManagerSegmentOptions>, block: (p1: NSTextRange, p2: CGRect, p3: number, p4: NSTextContainer) => boolean | null): void;

  replaceContentsInRangeWithTextElements(range: NSTextRange, textElements: NSArray<interop.Object> | Array<interop.Object>): void;

  replaceContentsInRangeWithAttributedString(range: NSTextRange, attributedString: NSAttributedString): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  readonly documentRange: NSTextRange;

  enumerateSubstringsFromLocationOptionsUsingBlock(location: NSTextLocation, options: interop.Enum<typeof NSStringEnumerationOptions>, block: (p1: string, p2: NSTextRange, p3: NSTextRange, p4: interop.PointerConvertible) => void | null): void;

  textRangeForSelectionGranularityEnclosingLocation(selectionGranularity: interop.Enum<typeof NSTextSelectionGranularity>, location: NSTextLocation): NSTextRange;

  locationFromLocationWithOffset(location: NSTextLocation, offset: number): NSTextLocation;

  offsetFromLocationToLocation(from: NSTextLocation, to: NSTextLocation): number;

  baseWritingDirectionAtLocation(location: NSTextLocation): interop.Enum<typeof NSTextSelectionNavigationWritingDirection>;

  enumerateCaretOffsetsInLineFragmentAtLocationUsingBlock(location: NSTextLocation, block: (p1: number, p2: NSTextLocation, p3: boolean, p4: interop.PointerConvertible) => void): void;

  lineFragmentRangeForPointInContainerAtLocation(point: CGPoint, location: NSTextLocation): NSTextRange;

  enumerateContainerBoundariesFromLocationReverseUsingBlock(location: NSTextLocation, reverse: boolean, block: (p1: NSTextLocation, p2: interop.PointerConvertible) => void): void;

  textLayoutOrientationAtLocation(location: NSTextLocation): interop.Enum<typeof NSTextSelectionNavigationLayoutOrientation>;

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

declare class NSClickGestureRecognizer extends NSGestureRecognizer implements NSCoding {
  buttonMask: number;

  numberOfClicksRequired: number;

  numberOfTouchesRequired: number;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSUserDefaultsController extends NSController {
  static readonly sharedUserDefaultsController: NSUserDefaultsController;

  initWithDefaultsInitialValues(defaults: NSUserDefaults | null, initialValues: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  initWithCoder(coder: NSCoder): this;

  readonly defaults: NSUserDefaults;

  get initialValues(): NSDictionary;
  set initialValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  appliesImmediately: boolean;

  readonly hasUnappliedChanges: boolean;

  readonly values: interop.Object;

  revert(sender: interop.Object | null): void;

  save(sender: interop.Object | null): void;

  revertToInitialValues(sender: interop.Object | null): void;
}

declare class NSStoryboardSegue extends NSObject {
  static segueWithIdentifierSourceDestinationPerformHandler<This extends abstract new (...args: any) => any>(this: This, identifier: string, sourceController: interop.Object, destinationController: interop.Object, performHandler: () => void): InstanceType<This>;

  initWithIdentifierSourceDestination(identifier: string, sourceController: interop.Object, destinationController: interop.Object): this;

  readonly identifier: string;

  readonly sourceController: interop.Object;

  readonly destinationController: interop.Object;

  perform(): void;
}

declare class NSTextRange extends NSObject {
  initWithLocationEndLocation(location: NSTextLocation, endLocation: NSTextLocation | null): this;

  initWithLocation(location: NSTextLocation): this;

  readonly isEmpty: boolean;

  readonly location: NSTextLocation;

  readonly endLocation: NSTextLocation;

  isEqualToTextRange(textRange: NSTextRange): boolean;

  containsLocation(location: NSTextLocation): boolean;

  containsRange(textRange: NSTextRange): boolean;

  intersectsWithTextRange(textRange: NSTextRange): boolean;

  textRangeByIntersectingWithTextRange(textRange: NSTextRange): this;

  textRangeByFormingUnionWithTextRange(textRange: NSTextRange): this;
}

declare class NSSplitViewItem extends NSObject implements NSAnimatablePropertyContainer, NSCoding {
  static splitViewItemWithViewController<This extends abstract new (...args: any) => any>(this: This, viewController: NSViewController): InstanceType<This>;

  static sidebarWithViewController<This extends abstract new (...args: any) => any>(this: This, viewController: NSViewController): InstanceType<This>;

  static contentListWithViewController<This extends abstract new (...args: any) => any>(this: This, viewController: NSViewController): InstanceType<This>;

  static inspectorWithViewController<This extends abstract new (...args: any) => any>(this: This, viewController: NSViewController): InstanceType<This>;

  readonly behavior: interop.Enum<typeof NSSplitViewItemBehavior>;

  viewController: NSViewController;

  isCollapsed: boolean;

  canCollapse: boolean;

  collapseBehavior: interop.Enum<typeof NSSplitViewItemCollapseBehavior>;

  minimumThickness: number;

  maximumThickness: number;

  preferredThicknessFraction: number;

  holdingPriority: number;

  automaticMaximumThickness: number;

  isSpringLoaded: boolean;

  canCollapseFromWindowResize: boolean;

  allowsFullHeightLayout: boolean;

  titlebarSeparatorStyle: interop.Enum<typeof NSTitlebarSeparatorStyle>;

  animator(): this;

  get animations(): NSDictionary;
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  animationForKey(key: string): interop.Object;

  static defaultAnimationForKey(key: string): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSDictionaryControllerKeyValuePair extends NSObject {
  key: string;

  value: interop.Object;

  localizedKey: string;

  readonly isExplicitlyIncluded: boolean;
}

declare class NSWindow extends NSResponder implements NSAnimatablePropertyContainer, NSMenuItemValidation, NSUserInterfaceValidations, NSUserInterfaceItemIdentification, NSAppearanceCustomization, NSAccessibilityElementProtocol, NSAccessibility {
  static frameRectForContentRectStyleMask(cRect: CGRect, style: interop.Enum<typeof NSWindowStyleMask>): CGRect;

  static contentRectForFrameRectStyleMask(fRect: CGRect, style: interop.Enum<typeof NSWindowStyleMask>): CGRect;

  static minFrameWidthWithTitleStyleMask(title: string, style: interop.Enum<typeof NSWindowStyleMask>): number;

  static readonly defaultDepthLimit: interop.Enum<typeof NSWindowDepth>;

  frameRectForContentRect(contentRect: CGRect): CGRect;

  contentRectForFrameRect(frameRect: CGRect): CGRect;

  initWithContentRectStyleMaskBackingDefer(contentRect: CGRect, style: interop.Enum<typeof NSWindowStyleMask>, backingStoreType: interop.Enum<typeof NSBackingStoreType>, flag: boolean): this;

  initWithContentRectStyleMaskBackingDeferScreen(contentRect: CGRect, style: interop.Enum<typeof NSWindowStyleMask>, backingStoreType: interop.Enum<typeof NSBackingStoreType>, flag: boolean, screen: NSScreen | null): this;

  title: string;

  subtitle: string;

  titleVisibility: interop.Enum<typeof NSWindowTitleVisibility>;

  titlebarAppearsTransparent: boolean;

  toolbarStyle: interop.Enum<typeof NSWindowToolbarStyle>;

  readonly contentLayoutRect: CGRect;

  readonly contentLayoutGuide: interop.Object;

  get titlebarAccessoryViewControllers(): NSArray;
  set titlebarAccessoryViewControllers(value: NSArray<interop.Object> | Array<interop.Object>);

  addTitlebarAccessoryViewController(childViewController: NSTitlebarAccessoryViewController): void;

  insertTitlebarAccessoryViewControllerAtIndex(childViewController: NSTitlebarAccessoryViewController, index: number): void;

  removeTitlebarAccessoryViewControllerAtIndex(index: number): void;

  representedURL: NSURL;

  representedFilename: string;

  setTitleWithRepresentedFilename(filename: string): void;

  isExcludedFromWindowsMenu: boolean;

  contentView: NSView;

  delegate: NSWindowDelegate;

  readonly windowNumber: number;

  styleMask: interop.Enum<typeof NSWindowStyleMask>;

  fieldEditorForObject(createFlag: boolean, object: interop.Object | null): NSText;

  endEditingFor(object: interop.Object | null): void;

  constrainFrameRectToScreen(frameRect: CGRect, screen: NSScreen | null): CGRect;

  setFrameDisplay(frameRect: CGRect, flag: boolean): void;

  setContentSize(size: CGSize): void;

  setFrameOrigin(point: CGPoint): void;

  setFrameTopLeftPoint(point: CGPoint): void;

  cascadeTopLeftFromPoint(topLeftPoint: CGPoint): CGPoint;

  readonly cascadingReferenceFrame: CGRect;

  readonly frame: CGRect;

  animationResizeTime(newFrame: CGRect): number;

  setFrameDisplayAnimate(frameRect: CGRect, displayFlag: boolean, animateFlag: boolean): void;

  readonly inLiveResize: boolean;

  resizeIncrements: CGSize;

  aspectRatio: CGSize;

  contentResizeIncrements: CGSize;

  contentAspectRatio: CGSize;

  viewsNeedDisplay: boolean;

  displayIfNeeded(): void;

  display(): void;

  preservesContentDuringLiveResize: boolean;

  update(): void;

  makeFirstResponder(responder: NSResponder | null): boolean;

  readonly firstResponder: NSResponder | null;

  readonly resizeFlags: interop.Enum<typeof NSEventModifierFlags>;

  close(): void;

  isReleasedWhenClosed: boolean;

  miniaturize(sender: interop.Object | null): void;

  deminiaturize(sender: interop.Object | null): void;

  readonly isZoomed: boolean;

  zoom(sender: interop.Object | null): void;

  readonly isMiniaturized: boolean;

  tryToPerformWith(action: string, object: interop.Object | null): boolean;

  validRequestorForSendTypeReturnType(sendType: string | null, returnType: string | null): interop.Object;

  backgroundColor: NSColor;

  setContentBorderThicknessForEdge(thickness: number, edge: interop.Enum<typeof NSRectEdge>): void;

  contentBorderThicknessForEdge(edge: interop.Enum<typeof NSRectEdge>): number;

  setAutorecalculatesContentBorderThicknessForEdge(flag: boolean, edge: interop.Enum<typeof NSRectEdge>): void;

  autorecalculatesContentBorderThicknessForEdge(edge: interop.Enum<typeof NSRectEdge>): boolean;

  isMovable: boolean;

  isMovableByWindowBackground: boolean;

  hidesOnDeactivate: boolean;

  canHide: boolean;

  center(): void;

  makeKeyAndOrderFront(sender: interop.Object | null): void;

  orderFront(sender: interop.Object | null): void;

  orderBack(sender: interop.Object | null): void;

  orderOut(sender: interop.Object | null): void;

  orderWindowRelativeTo(place: interop.Enum<typeof NSWindowOrderingMode>, otherWin: number): void;

  orderFrontRegardless(): void;

  miniwindowImage: NSImage;

  miniwindowTitle: string;

  readonly dockTile: NSDockTile;

  isDocumentEdited: boolean;

  readonly isVisible: boolean;

  readonly isKeyWindow: boolean;

  readonly isMainWindow: boolean;

  readonly canBecomeKeyWindow: boolean;

  readonly canBecomeMainWindow: boolean;

  makeKeyWindow(): void;

  makeMainWindow(): void;

  becomeKeyWindow(): void;

  resignKeyWindow(): void;

  becomeMainWindow(): void;

  resignMainWindow(): void;

  readonly worksWhenModal: boolean;

  preventsApplicationTerminationWhenModal: boolean;

  convertRectToScreen(rect: CGRect): CGRect;

  convertRectFromScreen(rect: CGRect): CGRect;

  convertPointToScreen(point: CGPoint): CGPoint;

  convertPointFromScreen(point: CGPoint): CGPoint;

  convertRectToBacking(rect: CGRect): CGRect;

  convertRectFromBacking(rect: CGRect): CGRect;

  convertPointToBacking(point: CGPoint): CGPoint;

  convertPointFromBacking(point: CGPoint): CGPoint;

  backingAlignedRectOptions(rect: CGRect, options: interop.Enum<typeof NSAlignmentOptions>): CGRect;

  readonly backingScaleFactor: number;

  performClose(sender: interop.Object | null): void;

  performMiniaturize(sender: interop.Object | null): void;

  performZoom(sender: interop.Object | null): void;

  dataWithEPSInsideRect(rect: CGRect): NSData;

  dataWithPDFInsideRect(rect: CGRect): NSData;

  print(sender: interop.Object | null): void;

  allowsToolTipsWhenApplicationIsInactive: boolean;

  backingType: interop.Enum<typeof NSBackingStoreType>;

  level: number;

  depthLimit: interop.Enum<typeof NSWindowDepth>;

  setDynamicDepthLimit(flag: boolean): void;

  readonly hasDynamicDepthLimit: boolean;

  readonly screen: NSScreen;

  readonly deepestScreen: NSScreen;

  hasShadow: boolean;

  invalidateShadow(): void;

  alphaValue: number;

  isOpaque: boolean;

  sharingType: interop.Enum<typeof NSWindowSharingType>;

  allowsConcurrentViewDrawing: boolean;

  displaysWhenScreenProfileChanges: boolean;

  canBecomeVisibleWithoutLogin: boolean;

  collectionBehavior: interop.Enum<typeof NSWindowCollectionBehavior>;

  animationBehavior: interop.Enum<typeof NSWindowAnimationBehavior>;

  readonly isOnActiveSpace: boolean;

  toggleFullScreen(sender: interop.Object | null): void;

  readonly stringWithSavedFrame: string;

  setFrameFromString(string: string): void;

  saveFrameUsingName(name: string): void;

  setFrameUsingNameForce(name: string, force: boolean): boolean;

  setFrameUsingName(name: string): boolean;

  readonly frameAutosaveName: string;

  static removeFrameUsingName(name: string): void;

  minSize: CGSize;

  maxSize: CGSize;

  contentMinSize: CGSize;

  contentMaxSize: CGSize;

  minFullScreenContentSize: CGSize;

  maxFullScreenContentSize: CGSize;

  readonly deviceDescription: NSDictionary;

  windowController: NSWindowController;

  beginSheetCompletionHandler(sheetWindow: NSWindow, handler: (p1: number) => void | null): void;

  beginCriticalSheetCompletionHandler(sheetWindow: NSWindow, handler: (p1: number) => void | null): void;

  endSheet(sheetWindow: NSWindow): void;

  endSheetReturnCode(sheetWindow: NSWindow, returnCode: number): void;

  readonly sheets: NSArray;

  readonly attachedSheet: NSWindow;

  readonly isSheet: boolean;

  readonly sheetParent: NSWindow;

  static standardWindowButtonForStyleMask(b: interop.Enum<typeof NSWindowButton>, styleMask: interop.Enum<typeof NSWindowStyleMask>): NSButton;

  standardWindowButton(b: interop.Enum<typeof NSWindowButton>): NSButton;

  addChildWindowOrdered(childWin: NSWindow, place: interop.Enum<typeof NSWindowOrderingMode>): void;

  removeChildWindow(childWin: NSWindow): void;

  readonly childWindows: NSArray;

  parentWindow: NSWindow;

  appearanceSource: NSObject;

  colorSpace: NSColorSpace;

  canRepresentDisplayGamut(displayGamut: interop.Enum<typeof NSDisplayGamut>): boolean;

  static windowNumbersWithOptions(options: interop.Enum<typeof NSWindowNumberListOptions>): NSArray;

  static windowNumberAtPointBelowWindowWithWindowNumber(point: CGPoint, windowNumber: number): number;

  readonly occlusionState: interop.Enum<typeof NSWindowOcclusionState>;

  titlebarSeparatorStyle: interop.Enum<typeof NSTitlebarSeparatorStyle>;

  contentViewController: NSViewController;

  static windowWithContentViewController<This extends abstract new (...args: any) => any>(this: This, contentViewController: NSViewController): InstanceType<This>;

  performWindowDragWithEvent(event: NSEvent): void;

  initialFirstResponder: NSView;

  selectNextKeyView(sender: interop.Object | null): void;

  selectPreviousKeyView(sender: interop.Object | null): void;

  selectKeyViewFollowingView(view: NSView): void;

  selectKeyViewPrecedingView(view: NSView): void;

  readonly keyViewSelectionDirection: interop.Enum<typeof NSSelectionDirection>;

  defaultButtonCell: NSButtonCell;

  disableKeyEquivalentForDefaultButtonCell(): void;

  enableKeyEquivalentForDefaultButtonCell(): void;

  autorecalculatesKeyViewLoop: boolean;

  recalculateKeyViewLoop(): void;

  toolbar: NSToolbar;

  toggleToolbarShown(sender: interop.Object | null): void;

  runToolbarCustomizationPalette(sender: interop.Object | null): void;

  showsToolbarButton: boolean;

  static allowsAutomaticWindowTabbing: boolean;

  static readonly userTabbingPreference: interop.Enum<typeof NSWindowUserTabbingPreference>;

  tabbingMode: interop.Enum<typeof NSWindowTabbingMode>;

  tabbingIdentifier: string;

  selectNextTab(sender: interop.Object | null): void;

  selectPreviousTab(sender: interop.Object | null): void;

  moveTabToNewWindow(sender: interop.Object | null): void;

  mergeAllWindows(sender: interop.Object | null): void;

  toggleTabBar(sender: interop.Object | null): void;

  toggleTabOverview(sender: interop.Object | null): void;

  readonly tabbedWindows: NSArray;

  addTabbedWindowOrdered(window: NSWindow, ordered: interop.Enum<typeof NSWindowOrderingMode>): void;

  readonly tab: NSWindowTab;

  readonly tabGroup: NSWindowTabGroup;

  transferWindowSharingToWindowCompletionHandler(window: NSWindow, completionHandler: (p1: NSError) => void | null): void;

  readonly hasActiveWindowSharingSession: boolean;

  requestSharingOfWindowCompletionHandler(window: NSWindow, completionHandler: (p1: NSError) => void | null): void;

  requestSharingOfWindowUsingPreviewTitleCompletionHandler(image: NSImage, title: string, completionHandler: (p1: NSError) => void | null): void;

  readonly windowTitlebarLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  trackEventsMatchingMaskTimeoutModeHandler(mask: interop.Enum<typeof NSEventMask>, timeout: number, mode: string, trackingHandler: (p1: NSEvent, p2: interop.PointerConvertible) => void | null): void;

  nextEventMatchingMask(mask: interop.Enum<typeof NSEventMask>): NSEvent;

  nextEventMatchingMaskUntilDateInModeDequeue(mask: interop.Enum<typeof NSEventMask>, expiration: NSDate | null, mode: string, deqFlag: boolean): NSEvent;

  discardEventsMatchingMaskBeforeEvent(mask: interop.Enum<typeof NSEventMask>, lastEvent: NSEvent | null): void;

  postEventAtStart(event: NSEvent, flag: boolean): void;

  sendEvent(event: NSEvent): void;

  readonly currentEvent: NSEvent;

  acceptsMouseMovedEvents: boolean;

  ignoresMouseEvents: boolean;

  readonly mouseLocationOutsideOfEventStream: CGPoint;

  disableCursorRects(): void;

  enableCursorRects(): void;

  discardCursorRects(): void;

  readonly areCursorRectsEnabled: boolean;

  invalidateCursorRectsForView(view: NSView): void;

  resetCursorRects(): void;

  beginDraggingSessionWithItemsEventSource(items: NSArray<interop.Object> | Array<interop.Object>, event: NSEvent, source: NSDraggingSource): NSDraggingSession;

  dragImageAtOffsetEventPasteboardSourceSlideBack(image: NSImage, baseLocation: CGPoint, initialOffset: CGSize, event: NSEvent, pboard: NSPasteboard, sourceObj: interop.Object, slideFlag: boolean): void;

  registerForDraggedTypes(newTypes: NSArray<interop.Object> | Array<interop.Object>): void;

  unregisterDraggedTypes(): void;

  displayLinkWithTargetSelector(target: interop.Object, selector: string): CADisplayLink;

  cacheImageInRect(rect: CGRect): void;

  restoreCachedImage(): void;

  discardCachedImage(): void;

  static menuChanged(menu: NSMenu): void;

  gState(): number;

  convertBaseToScreen(point: CGPoint): CGPoint;

  convertScreenToBase(point: CGPoint): CGPoint;

  userSpaceScaleFactor(): number;

  useOptimizedDrawing(flag: boolean): void;

  canStoreColor(): boolean;

  disableFlushWindow(): void;

  enableFlushWindow(): void;

  readonly isFlushWindowDisabled: boolean;

  flushWindow(): void;

  flushWindowIfNeeded(): void;

  isAutodisplay: boolean;

  readonly graphicsContext: NSGraphicsContext;

  isOneShot: boolean;

  preferredBackingLocation: interop.Enum<typeof NSWindowBackingLocation>;

  readonly backingLocation: interop.Enum<typeof NSWindowBackingLocation>;

  showsResizeIndicator: boolean;

  initWithWindowRef(windowRef: interop.PointerConvertible): this;

  readonly windowRef: interop.Pointer;

  disableScreenUpdatesUntilFlush(): void;

  updateConstraintsIfNeeded(): void;

  layoutIfNeeded(): void;

  anchorAttributeForOrientation(orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): interop.Enum<typeof NSLayoutAttribute>;

  setAnchorAttributeForOrientation(attr: interop.Enum<typeof NSLayoutAttribute>, orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): void;

  visualizeConstraints(constraints: NSArray<interop.Object> | Array<interop.Object> | null): void;

  readonly drawers: NSArray;

  readonly hasCloseBox: boolean;

  readonly hasTitleBar: boolean;

  readonly isFloatingPanel: boolean;

  readonly isMiniaturizable: boolean;

  readonly isModalPanel: boolean;

  readonly isResizable: boolean;

  readonly isZoomable: boolean;

  orderedIndex: number;

  setIsMiniaturized(flag: boolean): void;

  setIsVisible(flag: boolean): void;

  setIsZoomed(flag: boolean): void;

  handleCloseScriptCommand(command: NSCloseCommand): interop.Object;

  handlePrintScriptCommand(command: NSScriptCommand): interop.Object;

  handleSaveScriptCommand(command: NSScriptCommand): interop.Object;

  isRestorable: boolean;

  restorationClass: NSWindowRestoration;

  disableSnapshotRestoration(): void;

  enableSnapshotRestoration(): void;

  animator(): this;

  get animations(): NSDictionary;
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  animationForKey(key: string): interop.Object;

  static defaultAnimationForKey(key: string): interop.Object;

  validateMenuItem(menuItem: NSMenuItem): boolean;

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

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  identifier: string;

  appearance: NSAppearance;

  readonly effectiveAppearance: NSAppearance;

  isAccessibilityElement: boolean;

  accessibilityFrame: CGRect;

  isAccessibilityFocused: boolean;

  accessibilityActivationPoint: CGPoint;

  accessibilityTopLevelUIElement: interop.Object;

  accessibilityURL: NSURL;

  accessibilityValue: interop.Object;

  accessibilityValueDescription: string;

  get accessibilityVisibleChildren(): NSArray;
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySubrole: string;

  accessibilityTitle: string;

  accessibilityTitleUIElement: interop.Object;

  get accessibilityNextContents(): NSArray;
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;

  accessibilityOverflowButton: interop.Object;

  accessibilityParent: interop.Object;

  accessibilityPlaceholderValue: string;

  get accessibilityPreviousContents(): NSArray;
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityRole: string;

  accessibilityRoleDescription: string;

  accessibilitySearchButton: interop.Object;

  accessibilitySearchMenu: interop.Object;

  isAccessibilitySelected: boolean;

  get accessibilitySelectedChildren(): NSArray;
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityServesAsTitleForUIElements(): NSArray;
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityShownMenu: interop.Object;

  accessibilityMinValue: interop.Object;

  accessibilityMaxValue: interop.Object;

  get accessibilityLinkedUIElements(): NSArray;
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWindow: interop.Object;

  accessibilityIdentifier: string;

  accessibilityHelp: string;

  accessibilityFilename: string;

  isAccessibilityExpanded: boolean;

  isAccessibilityEdited: boolean;

  isAccessibilityEnabled: boolean;

  get accessibilityChildren(): NSArray;
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityChildrenInNavigationOrder(): NSArray;
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityClearButton: interop.Object;

  accessibilityCancelButton: interop.Object;

  isAccessibilityProtectedContent: boolean;

  get accessibilityContents(): NSArray;
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabel: string;

  isAccessibilityAlternateUIVisible: boolean;

  get accessibilitySharedFocusElements(): NSArray;
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityRequired: boolean;

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityApplicationFocusedUIElement: interop.Object;

  accessibilityMainWindow: interop.Object;

  isAccessibilityHidden: boolean;

  isAccessibilityFrontmost: boolean;

  accessibilityFocusedWindow: interop.Object;

  get accessibilityWindows(): NSArray;
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityExtrasMenuBar: interop.Object;

  accessibilityMenuBar: interop.Object;

  get accessibilityColumnTitles(): NSArray;
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>);

  isAccessibilityOrderedByRow: boolean;

  accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityHorizontalUnitDescription: string;

  accessibilityVerticalUnitDescription: string;

  accessibilityLayoutPointForScreenPoint(point: CGPoint): CGPoint;

  accessibilityLayoutSizeForScreenSize(size: CGSize): CGSize;

  accessibilityScreenPointForLayoutPoint(point: CGPoint): CGPoint;

  accessibilityScreenSizeForLayoutSize(size: CGSize): CGSize;

  get accessibilityHandles(): NSArray;
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityWarningValue: interop.Object;

  accessibilityCriticalValue: interop.Object;

  isAccessibilityDisclosed: boolean;

  accessibilityDisclosedByRow: interop.Object;

  accessibilityDisclosedRows: interop.Object;

  accessibilityDisclosureLevel: number;

  get accessibilityMarkerUIElements(): NSArray;
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityMarkerValues: interop.Object;

  accessibilityMarkerGroupUIElement: interop.Object;

  accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;

  accessibilityUnitDescription: string;

  accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;

  accessibilityMarkerTypeDescription: string;

  accessibilityHorizontalScrollBar: interop.Object;

  accessibilityVerticalScrollBar: interop.Object;

  get accessibilityAllowedValues(): NSArray;
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityLabelUIElements(): NSArray;
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityLabelValue: number;

  get accessibilitySplitters(): NSArray;
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityDecrementButton: interop.Object;

  accessibilityIncrementButton: interop.Object;

  get accessibilityTabs(): NSArray;
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityHeader: interop.Object;

  accessibilityColumnCount: number;

  accessibilityRowCount: number;

  accessibilityIndex: number;

  get accessibilityColumns(): NSArray;
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityRows(): NSArray;
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleRows(): NSArray;
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedRows(): NSArray;
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleColumns(): NSArray;
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedColumns(): NSArray;
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;

  get accessibilityRowHeaderUIElements(): NSArray;
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilitySelectedCells(): NSArray;
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityVisibleCells(): NSArray;
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>);

  get accessibilityColumnHeaderUIElements(): NSArray;
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityCellForColumnRow(column: number, row: number): interop.Object;

  accessibilityRowIndexRange: _NSRange;

  accessibilityColumnIndexRange: _NSRange;

  accessibilityInsertionPointLineNumber: number;

  accessibilitySharedCharacterRange: _NSRange;

  get accessibilitySharedTextUIElements(): NSArray;
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityVisibleCharacterRange: _NSRange;

  accessibilityNumberOfCharacters: number;

  accessibilitySelectedText: string;

  accessibilitySelectedTextRange: _NSRange;

  get accessibilitySelectedTextRanges(): NSArray;
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString;

  accessibilityRangeForLine(line: number): _NSRange;

  accessibilityStringForRange(range: _NSRange): string;

  accessibilityRangeForPosition(point: CGPoint): _NSRange;

  accessibilityRangeForIndex(index: number): _NSRange;

  accessibilityFrameForRange(range: _NSRange): CGRect;

  accessibilityRTFForRange(range: _NSRange): NSData;

  accessibilityStyleRangeForIndex(index: number): _NSRange;

  accessibilityLineForIndex(index: number): number;

  accessibilityToolbarButton: interop.Object;

  isAccessibilityModal: boolean;

  accessibilityProxy: interop.Object;

  isAccessibilityMain: boolean;

  accessibilityFullScreenButton: interop.Object;

  accessibilityGrowArea: interop.Object;

  accessibilityDocument: string;

  accessibilityDefaultButton: interop.Object;

  accessibilityCloseButton: interop.Object;

  accessibilityZoomButton: interop.Object;

  accessibilityMinimizeButton: interop.Object;

  isAccessibilityMinimized: boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>);

  accessibilityPerformCancel(): boolean;

  accessibilityPerformConfirm(): boolean;

  accessibilityPerformDecrement(): boolean;

  accessibilityPerformDelete(): boolean;

  accessibilityPerformIncrement(): boolean;

  accessibilityPerformPick(): boolean;

  accessibilityPerformPress(): boolean;

  accessibilityPerformRaise(): boolean;

  accessibilityPerformShowAlternateUI(): boolean;

  accessibilityPerformShowDefaultUI(): boolean;

  accessibilityPerformShowMenu(): boolean;

  isAccessibilitySelectorAllowed(selector: string): boolean;
}

declare class NSColorSampler extends NSObject {
  showSamplerWithSelectionHandler(selectionHandler: (p1: NSColor) => void | null): void;
}

declare class NSAccessibilityCustomRotor extends NSObject {
  initWithLabelItemSearchDelegate(label: string, itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate): this;

  initWithRotorTypeItemSearchDelegate(rotorType: interop.Enum<typeof NSAccessibilityCustomRotorType>, itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate): this;

  type: interop.Enum<typeof NSAccessibilityCustomRotorType>;

  label: string;

  itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate | null;

  itemLoadingDelegate: NSAccessibilityElementLoading;
}

declare class NSCustomImageRep extends NSImageRep {
  initWithSizeFlippedDrawingHandler(size: CGSize, drawingHandlerShouldBeCalledWithFlippedContext: boolean, drawingHandler: (p1: CGRect) => boolean): this;

  readonly drawingHandler: (p1: CGRect) => boolean;

  initWithDrawSelectorDelegate(selector: string, delegate: interop.Object): this;

  readonly drawSelector: string;

  readonly delegate: interop.Object;
}

declare class NSPICTImageRep extends NSImageRep {
  static imageRepWithData<This extends abstract new (...args: any) => any>(this: This, pictData: NSData): InstanceType<This>;

  initWithData(pictData: NSData): this;

  readonly PICTRepresentation: NSData;

  readonly boundingBox: CGRect;
}

declare class NSSharingService extends NSObject {
  delegate: NSSharingServiceDelegate;

  readonly title: string;

  readonly image: NSImage;

  readonly alternateImage: NSImage;

  menuItemTitle: string;

  get recipients(): NSArray;
  set recipients(value: NSArray<interop.Object> | Array<interop.Object>);

  subject: string;

  readonly messageBody: string;

  readonly permanentLink: NSURL;

  readonly accountName: string;

  readonly attachmentFileURLs: NSArray;

  static sharingServicesForItems(items: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  static sharingServiceNamed(serviceName: string): NSSharingService;

  initWithTitleImageAlternateImageHandler(title: string, image: NSImage, alternateImage: NSImage | null, block: () => void): this;

  canPerformWithItems(items: NSArray<interop.Object> | Array<interop.Object> | null): boolean;

  performWithItems(items: NSArray<interop.Object> | Array<interop.Object>): void;
}

declare class NSStackView extends NSView {
  static stackViewWithViews<This extends abstract new (...args: any) => any>(this: This, views: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  delegate: NSStackViewDelegate;

  orientation: interop.Enum<typeof NSUserInterfaceLayoutOrientation>;

  alignment: interop.Enum<typeof NSLayoutAttribute>;

  edgeInsets: NSEdgeInsets;

  distribution: interop.Enum<typeof NSStackViewDistribution>;

  spacing: number;

  setCustomSpacingAfterView(spacing: number, view: NSView): void;

  customSpacingAfterView(view: NSView): number;

  detachesHiddenViews: boolean;

  readonly arrangedSubviews: NSArray;

  addArrangedSubview(view: NSView): void;

  insertArrangedSubviewAtIndex(view: NSView, index: number): void;

  removeArrangedSubview(view: NSView): void;

  readonly detachedViews: NSArray;

  setVisibilityPriorityForView(priority: number, view: NSView): void;

  visibilityPriorityForView(view: NSView): number;

  clippingResistancePriorityForOrientation(orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): number;

  setClippingResistancePriorityForOrientation(clippingResistancePriority: number, orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): void;

  huggingPriorityForOrientation(orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): number;

  setHuggingPriorityForOrientation(huggingPriority: number, orientation: interop.Enum<typeof NSLayoutConstraintOrientation>): void;

  addViewInGravity(view: NSView, gravity: interop.Enum<typeof NSStackViewGravity>): void;

  insertViewAtIndexInGravity(view: NSView, index: number, gravity: interop.Enum<typeof NSStackViewGravity>): void;

  removeView(view: NSView): void;

  viewsInGravity(gravity: interop.Enum<typeof NSStackViewGravity>): NSArray;

  setViewsInGravity(views: NSArray<interop.Object> | Array<interop.Object>, gravity: interop.Enum<typeof NSStackViewGravity>): void;

  readonly views: NSArray;

  hasEqualSpacing: boolean;
}

declare class NSUserInterfaceCompressionOptions extends NSObject implements NSCopying, NSCoding {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  initWithIdentifier(identifier: string): this;

  initWithCompressionOptions(options: NSSet): this;

  containsOptions(options: NSUserInterfaceCompressionOptions): boolean;

  intersectsOptions(options: NSUserInterfaceCompressionOptions): boolean;

  readonly isEmpty: boolean;

  optionsByAddingOptions(options: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;

  optionsByRemovingOptions(options: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;

  static readonly hideImagesOption: NSUserInterfaceCompressionOptions;

  static readonly hideTextOption: NSUserInterfaceCompressionOptions;

  static readonly reduceMetricsOption: NSUserInterfaceCompressionOptions;

  static readonly breakEqualWidthsOption: NSUserInterfaceCompressionOptions;

  static readonly standardOptions: NSUserInterfaceCompressionOptions;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSTextViewportLayoutController extends NSObject {
  initWithTextLayoutManager(textLayoutManager: NSTextLayoutManager): this;

  delegate: NSTextViewportLayoutControllerDelegate;

  readonly textLayoutManager: NSTextLayoutManager | null;

  readonly viewportBounds: CGRect;

  readonly viewportRange: NSTextRange;

  layoutViewport(): void;

  relocateViewportToTextLocation(textLocation: NSTextLocation): number;

  adjustViewportByVerticalOffset(verticalOffset: number): void;
}

declare class NSTextCheckingController extends NSObject {
  initWithClient(client: NSTextCheckingClient): this;

  readonly client: NSTextCheckingClient;

  invalidate(): void;

  didChangeTextInRange(range: _NSRange): void;

  insertedTextInRange(range: _NSRange): void;

  didChangeSelectedRange(): void;

  considerTextCheckingForRange(range: _NSRange): void;

  checkTextInRangeTypesOptions(range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  checkTextInSelection(sender: interop.Object | null): void;

  checkTextInDocument(sender: interop.Object | null): void;

  orderFrontSubstitutionsPanel(sender: interop.Object | null): void;

  checkSpelling(sender: interop.Object | null): void;

  showGuessPanel(sender: interop.Object | null): void;

  changeSpelling(sender: interop.Object | null): void;

  ignoreSpelling(sender: interop.Object | null): void;

  updateCandidates(): void;

  validAnnotations(): NSArray;

  menuAtIndexClickedOnSelectionEffectiveRange(location: number, clickedOnSelection: boolean, effectiveRange: interop.PointerConvertible): NSMenu;

  spellCheckerDocumentTag: number;
}

declare class NSResponder extends NSObject implements NSCoding {
  init(): this;

  initWithCoder(coder: NSCoder): this;

  nextResponder: NSResponder;

  tryToPerformWith(action: string, object: interop.Object | null): boolean;

  performKeyEquivalent(event: NSEvent): boolean;

  validRequestorForSendTypeReturnType(sendType: string | null, returnType: string | null): interop.Object;

  mouseDown(event: NSEvent): void;

  rightMouseDown(event: NSEvent): void;

  otherMouseDown(event: NSEvent): void;

  mouseUp(event: NSEvent): void;

  rightMouseUp(event: NSEvent): void;

  otherMouseUp(event: NSEvent): void;

  mouseMoved(event: NSEvent): void;

  mouseDragged(event: NSEvent): void;

  scrollWheel(event: NSEvent): void;

  rightMouseDragged(event: NSEvent): void;

  otherMouseDragged(event: NSEvent): void;

  mouseEntered(event: NSEvent): void;

  mouseExited(event: NSEvent): void;

  keyDown(event: NSEvent): void;

  keyUp(event: NSEvent): void;

  flagsChanged(event: NSEvent): void;

  tabletPoint(event: NSEvent): void;

  tabletProximity(event: NSEvent): void;

  cursorUpdate(event: NSEvent): void;

  magnifyWithEvent(event: NSEvent): void;

  rotateWithEvent(event: NSEvent): void;

  swipeWithEvent(event: NSEvent): void;

  beginGestureWithEvent(event: NSEvent): void;

  endGestureWithEvent(event: NSEvent): void;

  smartMagnifyWithEvent(event: NSEvent): void;

  changeModeWithEvent(event: NSEvent): void;

  touchesBeganWithEvent(event: NSEvent): void;

  touchesMovedWithEvent(event: NSEvent): void;

  touchesEndedWithEvent(event: NSEvent): void;

  touchesCancelledWithEvent(event: NSEvent): void;

  quickLookWithEvent(event: NSEvent): void;

  pressureChangeWithEvent(event: NSEvent): void;

  contextMenuKeyDown(event: NSEvent): void;

  noResponderFor(eventSelector: string): void;

  readonly acceptsFirstResponder: boolean;

  becomeFirstResponder(): boolean;

  resignFirstResponder(): boolean;

  interpretKeyEvents(eventArray: NSArray<interop.Object> | Array<interop.Object>): void;

  flushBufferedKeyEvents(): void;

  menu: NSMenu;

  showContextHelp(sender: interop.Object | null): void;

  helpRequested(eventPtr: NSEvent): void;

  shouldBeTreatedAsInkEvent(event: NSEvent): boolean;

  wantsScrollEventsForSwipeTrackingOnAxis(axis: interop.Enum<typeof NSEventGestureAxis>): boolean;

  wantsForwardedScrollEventsForAxis(axis: interop.Enum<typeof NSEventGestureAxis>): boolean;

  supplementalTargetForActionSender(action: string, sender: interop.Object | null): interop.Object;

  readonly undoManager: NSUndoManager;

  validateProposedFirstResponderForEvent(responder: NSResponder, event: NSEvent | null): boolean;

  presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(error: NSError, window: NSWindow, delegate: interop.Object | null, didPresentSelector: string | null, contextInfo: interop.PointerConvertible): void;

  presentError(error: NSError): boolean;

  willPresentError(error: NSError): NSError;

  performTextFinderAction(sender: interop.Object | null): void;

  newWindowForTab(sender: interop.Object | null): void;

  performMnemonic(string: string): boolean;

  userActivity: NSUserActivity;

  updateUserActivityState(userActivity: NSUserActivity): void;

  touchBar: NSTouchBar;

  makeTouchBar(): NSTouchBar;

  interfaceStyle(): number;

  setInterfaceStyle(interfaceStyle: number): void;

  encodeRestorableStateWithCoder(coder: NSCoder): void;

  encodeRestorableStateWithCoderBackgroundQueue(coder: NSCoder, queue: NSOperationQueue): void;

  restoreStateWithCoder(coder: NSCoder): void;

  invalidateRestorableState(): void;

  static readonly restorableStateKeyPaths: NSArray;

  static allowedClassesForRestorableStateKeyPath(keyPath: string): NSArray;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSSpellChecker extends NSObject {
  static readonly sharedSpellChecker: NSSpellChecker;

  static readonly sharedSpellCheckerExists: boolean;

  static uniqueSpellDocumentTag(): number;

  checkSpellingOfStringStartingAtLanguageWrapInSpellDocumentWithTagWordCount(stringToCheck: string, startingOffset: number, language: string | null, wrapFlag: boolean, tag: number, wordCount: interop.PointerConvertible): _NSRange;

  checkSpellingOfStringStartingAt(stringToCheck: string, startingOffset: number): _NSRange;

  countWordsInStringLanguage(stringToCount: string, language: string | null): number;

  checkGrammarOfStringStartingAtLanguageWrapInSpellDocumentWithTagDetails(stringToCheck: string, startingOffset: number, language: string | null, wrapFlag: boolean, tag: number, details: interop.PointerConvertible): _NSRange;

  checkStringRangeTypesOptionsInSpellDocumentWithTagOrthographyWordCount(stringToCheck: string, range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, tag: number, orthography: interop.PointerConvertible, wordCount: interop.PointerConvertible): NSArray;

  requestCheckingOfStringRangeTypesOptionsInSpellDocumentWithTagCompletionHandler(stringToCheck: string, range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, tag: number, completionHandler: (p1: number, p2: NSArray<interop.Object> | Array<interop.Object>, p3: NSOrthography, p4: number) => void | null): number;

  requestCandidatesForSelectedRangeInStringTypesOptionsInSpellDocumentWithTagCompletionHandler(selectedRange: _NSRange, stringToCheck: string, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, tag: number, completionHandler: (p1: number, p2: NSArray<interop.Object> | Array<interop.Object>) => void | null): number;

  menuForResultStringOptionsAtLocationInView(result: NSTextCheckingResult, checkedString: string, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, location: CGPoint, view: NSView): NSMenu;

  userQuotesArrayForLanguage(language: string): NSArray;

  readonly userReplacementsDictionary: NSDictionary;

  updateSpellingPanelWithMisspelledWord(word: string): void;

  updateSpellingPanelWithGrammarStringDetail(string: string, detail: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;

  readonly spellingPanel: NSPanel;

  accessoryView: NSView;

  readonly substitutionsPanel: NSPanel;

  substitutionsPanelAccessoryViewController: NSViewController;

  updatePanels(): void;

  ignoreWordInSpellDocumentWithTag(wordToIgnore: string, tag: number): void;

  ignoredWordsInSpellDocumentWithTag(tag: number): NSArray;

  setIgnoredWordsInSpellDocumentWithTag(words: NSArray<interop.Object> | Array<interop.Object>, tag: number): void;

  guessesForWordRangeInStringLanguageInSpellDocumentWithTag(range: _NSRange, string: string, language: string | null, tag: number): NSArray;

  correctionForWordRangeInStringLanguageInSpellDocumentWithTag(range: _NSRange, string: string, language: string, tag: number): string;

  completionsForPartialWordRangeInStringLanguageInSpellDocumentWithTag(range: _NSRange, string: string, language: string | null, tag: number): NSArray;

  languageForWordRangeInStringOrthography(range: _NSRange, string: string, orthography: NSOrthography | null): string;

  closeSpellDocumentWithTag(tag: number): void;

  recordResponseToCorrectionForWordLanguageInSpellDocumentWithTag(response: interop.Enum<typeof NSCorrectionResponse>, correction: string, word: string, language: string | null, tag: number): void;

  showCorrectionIndicatorOfTypePrimaryStringAlternativeStringsForStringInRectViewCompletionHandler(type: interop.Enum<typeof NSCorrectionIndicatorType>, primaryString: string, alternativeStrings: NSArray<interop.Object> | Array<interop.Object>, rectOfTypedString: CGRect, view: NSView, completionBlock: (p1: string) => void | null): void;

  dismissCorrectionIndicatorForView(view: NSView): void;

  showInlinePredictionForCandidatesClient(candidates: NSArray<interop.Object> | Array<interop.Object>, client: NSTextInputClient): void;

  preventsAutocorrectionBeforeStringLanguage(string: string, language: string | null): boolean;

  deletesAutospaceBetweenStringAndStringLanguage(precedingString: string, followingString: string, language: string | null): boolean;

  readonly availableLanguages: NSArray;

  readonly userPreferredLanguages: NSArray;

  automaticallyIdentifiesLanguages: boolean;

  setWordFieldStringValue(string: string): void;

  learnWord(word: string): void;

  hasLearnedWord(word: string): boolean;

  unlearnWord(word: string): void;

  static readonly isAutomaticTextReplacementEnabled: boolean;

  static readonly isAutomaticSpellingCorrectionEnabled: boolean;

  static readonly isAutomaticQuoteSubstitutionEnabled: boolean;

  static readonly isAutomaticDashSubstitutionEnabled: boolean;

  static readonly isAutomaticCapitalizationEnabled: boolean;

  static readonly isAutomaticPeriodSubstitutionEnabled: boolean;

  static readonly isAutomaticTextCompletionEnabled: boolean;

  static readonly isAutomaticInlinePredictionEnabled: boolean;

  language(): string;

  setLanguage(language: string): boolean;

  guessesForWord(word: string): NSArray;

  forgetWord(word: string): void;
}

declare class NSColorList extends NSObject implements NSSecureCoding {
  static readonly availableColorLists: NSArray;

  static colorListNamed(name: string): NSColorList;

  initWithName(name: string): this;

  initWithNameFromFile(name: string, path: string | null): this;

  readonly name: string;

  setColorForKey(color: NSColor, key: string): void;

  insertColorKeyAtIndex(color: NSColor, key: string, loc: number): void;

  removeColorWithKey(key: string): void;

  colorWithKey(key: string): NSColor;

  readonly allKeys: NSArray;

  readonly isEditable: boolean;

  writeToURLError(url: NSURL | null, errPtr: interop.PointerConvertible): boolean;

  writeToFile(path: string | null): boolean;

  removeFile(): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSCollectionView extends NSView implements NSDraggingSource, NSDraggingDestination {
  dataSource: NSCollectionViewDataSource;

  prefetchDataSource: NSCollectionViewPrefetching;

  get content(): NSArray;
  set content(value: NSArray<interop.Object> | Array<interop.Object>);

  reloadData(): void;

  delegate: NSCollectionViewDelegate;

  backgroundView: NSView;

  backgroundViewScrollsWithContent: boolean;

  collectionViewLayout: NSCollectionViewLayout;

  layoutAttributesForItemAtIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  layoutAttributesForSupplementaryElementOfKindAtIndexPath(kind: string, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

  frameForItemAtIndex(index: number): CGRect;

  frameForItemAtIndexWithNumberOfItems(index: number, numberOfItems: number): CGRect;

  get backgroundColors(): NSArray;
  set backgroundColors(value: NSArray<interop.Object> | Array<interop.Object>);

  readonly numberOfSections: number;

  numberOfItemsInSection(section: number): number;

  readonly isFirstResponder: boolean;

  isSelectable: boolean;

  allowsEmptySelection: boolean;

  allowsMultipleSelection: boolean;

  selectionIndexes: NSIndexSet;

  selectionIndexPaths: NSSet;

  selectItemsAtIndexPathsScrollPosition(indexPaths: NSSet, scrollPosition: interop.Enum<typeof NSCollectionViewScrollPosition>): void;

  deselectItemsAtIndexPaths(indexPaths: NSSet): void;

  selectAll(sender: interop.Object | null): void;

  deselectAll(sender: interop.Object | null): void;

  registerClassForItemWithIdentifier(itemClass: interop.Object | null, identifier: string): void;

  registerNibForItemWithIdentifier(nib: NSNib | null, identifier: string): void;

  registerClassForSupplementaryViewOfKindWithIdentifier(viewClass: interop.Object | null, kind: string, identifier: string): void;

  registerNibForSupplementaryViewOfKindWithIdentifier(nib: NSNib | null, kind: string, identifier: string): void;

  makeItemWithIdentifierForIndexPath(identifier: string, indexPath: NSIndexPath): NSCollectionViewItem;

  makeSupplementaryViewOfKindWithIdentifierForIndexPath(elementKind: string, identifier: string, indexPath: NSIndexPath): NSView;

  itemAtIndex(index: number): NSCollectionViewItem;

  itemAtIndexPath(indexPath: NSIndexPath): NSCollectionViewItem;

  visibleItems(): NSArray;

  indexPathsForVisibleItems(): NSSet;

  indexPathForItem(item: NSCollectionViewItem): NSIndexPath;

  indexPathForItemAtPoint(point: CGPoint): NSIndexPath;

  supplementaryViewForElementKindAtIndexPath(elementKind: string, indexPath: NSIndexPath): NSView;

  visibleSupplementaryViewsOfKind(elementKind: string): NSArray;

  indexPathsForVisibleSupplementaryElementsOfKind(elementKind: string): NSSet;

  insertSections(sections: NSIndexSet): void;

  deleteSections(sections: NSIndexSet): void;

  reloadSections(sections: NSIndexSet): void;

  moveSectionToSection(section: number, newSection: number): void;

  insertItemsAtIndexPaths(indexPaths: NSSet): void;

  deleteItemsAtIndexPaths(indexPaths: NSSet): void;

  reloadItemsAtIndexPaths(indexPaths: NSSet): void;

  moveItemAtIndexPathToIndexPath(indexPath: NSIndexPath, newIndexPath: NSIndexPath): void;

  performBatchUpdatesCompletionHandler(updates: () => void | null, completionHandler: (p1: boolean) => void | null): void;

  toggleSectionCollapse(sender: interop.Object): void;

  scrollToItemsAtIndexPathsScrollPosition(indexPaths: NSSet, scrollPosition: interop.Enum<typeof NSCollectionViewScrollPosition>): void;

  setDraggingSourceOperationMaskForLocal(dragOperationMask: interop.Enum<typeof NSDragOperation>, localDestination: boolean): void;

  draggingImageForItemsAtIndexPathsWithEventOffset(indexPaths: NSSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  draggingImageForItemsAtIndexesWithEventOffset(indexes: NSIndexSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;

  newItemForRepresentedObject(object: interop.Object): NSCollectionViewItem;

  itemPrototype: NSCollectionViewItem;

  maxNumberOfRows: number;

  maxNumberOfColumns: number;

  minItemSize: CGSize;

  maxItemSize: CGSize;

  draggingSessionSourceOperationMaskForDraggingContext(session: NSDraggingSession, context: interop.Enum<typeof NSDraggingContext>): interop.Enum<typeof NSDragOperation>;

  draggingSessionWillBeginAtPoint(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionMovedToPoint(session: NSDraggingSession, screenPoint: CGPoint): void;

  draggingSessionEndedAtPointOperation(session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;

  ignoreModifierKeysForDraggingSession(session: NSDraggingSession): boolean;

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

  draggingEntered(sender: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;

  draggingUpdated(sender: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;

  draggingExited(sender: NSDraggingInfo | null): void;

  prepareForDragOperation(sender: NSDraggingInfo): boolean;

  performDragOperation(sender: NSDraggingInfo): boolean;

  concludeDragOperation(sender: NSDraggingInfo | null): void;

  draggingEnded(sender: NSDraggingInfo): void;

  wantsPeriodicDraggingUpdates(): boolean;

  updateDraggingItemsForDrag(sender: NSDraggingInfo | null): void;
}

declare class NSCollectionLayoutBoundarySupplementaryItem extends NSCollectionLayoutSupplementaryItem implements NSCopying {
  static boundarySupplementaryItemWithLayoutSizeElementKindAlignment<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, elementKind: string, alignment: interop.Enum<typeof NSRectAlignment>): InstanceType<This>;

  static boundarySupplementaryItemWithLayoutSizeElementKindAlignmentAbsoluteOffset<This extends abstract new (...args: any) => any>(this: This, layoutSize: NSCollectionLayoutSize, elementKind: string, alignment: interop.Enum<typeof NSRectAlignment>, absoluteOffset: CGPoint): InstanceType<This>;

  extendsBoundary: boolean;

  pinToVisibleBounds: boolean;

  readonly alignment: interop.Enum<typeof NSRectAlignment>;

  readonly offset: CGPoint;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class NSTextSelectionNavigation extends NSObject {
  initWithDataSource(dataSource: NSTextSelectionDataSource): this;

  readonly textSelectionDataSource: NSTextSelectionDataSource | null;

  allowsNonContiguousRanges: boolean;

  rotatesCoordinateSystemForLayoutOrientation: boolean;

  flushLayoutCache(): void;

  destinationSelectionForTextSelectionDirectionDestinationExtendingConfined(textSelection: NSTextSelection, direction: interop.Enum<typeof NSTextSelectionNavigationDirection>, destination: interop.Enum<typeof NSTextSelectionNavigationDestination>, extending: boolean, confined: boolean): NSTextSelection;

  textSelectionsInteractingAtPointInContainerAtLocationAnchorsModifiersSelectingBounds(point: CGPoint, containerLocation: NSTextLocation, anchors: NSArray<interop.Object> | Array<interop.Object>, modifiers: interop.Enum<typeof NSTextSelectionNavigationModifier>, selecting: boolean, bounds: CGRect): NSArray;

  textSelectionForSelectionGranularityEnclosingTextSelection(selectionGranularity: interop.Enum<typeof NSTextSelectionGranularity>, textSelection: NSTextSelection): NSTextSelection;

  textSelectionForSelectionGranularityEnclosingPointInContainerAtLocation(selectionGranularity: interop.Enum<typeof NSTextSelectionGranularity>, point: CGPoint, location: NSTextLocation): NSTextSelection;

  resolvedInsertionLocationForTextSelectionWritingDirection(textSelection: NSTextSelection, writingDirection: interop.Enum<typeof NSTextSelectionNavigationWritingDirection>): NSTextLocation;

  deletionRangesForTextSelectionDirectionDestinationAllowsDecomposition(textSelection: NSTextSelection, direction: interop.Enum<typeof NSTextSelectionNavigationDirection>, destination: interop.Enum<typeof NSTextSelectionNavigationDestination>, allowsDecomposition: boolean): NSArray;
}

declare class NSCollectionViewGridLayout extends NSCollectionViewLayout {
  margins: NSEdgeInsets;

  minimumInteritemSpacing: number;

  minimumLineSpacing: number;

  maximumNumberOfRows: number;

  maximumNumberOfColumns: number;

  minimumItemSize: CGSize;

  maximumItemSize: CGSize;

  get backgroundColors(): NSArray;
  set backgroundColors(value: NSArray<interop.Object> | Array<interop.Object>);
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSButtonCell extends NSActionCell {
  initTextCell(string: string): this;

  initImageCell(image: NSImage | null): this;

  initWithCoder(coder: NSCoder): this;

  bezelStyle: interop.Enum<typeof NSBezelStyle>;

  setButtonType(type: interop.Enum<typeof NSButtonType>): void;

  highlightsBy: interop.Enum<typeof NSCellStyleMask>;

  showsStateBy: interop.Enum<typeof NSCellStyleMask>;

  title: string;

  attributedTitle: NSAttributedString;

  alternateTitle: string;

  attributedAlternateTitle: NSAttributedString;

  alternateImage: NSImage;

  imagePosition: interop.Enum<typeof NSCellImagePosition>;

  imageScaling: interop.Enum<typeof NSImageScaling>;

  // @ts-ignore MemberDecl.tsIgnore
  keyEquivalent: string;

  keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;

  isTransparent: boolean;

  readonly isOpaque: boolean;

  imageDimsWhenDisabled: boolean;

  showsBorderOnlyWhileMouseInside: boolean;

  sound: NSSound;

  backgroundColor: NSColor;

  setPeriodicDelayInterval(delay: number, interval: number): void;

  getPeriodicDelayInterval(delay: interop.PointerConvertible, interval: interop.PointerConvertible): void;

  performClick(sender: interop.Object | null): void;

  mouseEntered(event: NSEvent): void;

  mouseExited(event: NSEvent): void;

  drawBezelWithFrameInView(frame: CGRect, controlView: NSView): void;

  drawImageWithFrameInView(image: NSImage, frame: CGRect, controlView: NSView): void;

  drawTitleWithFrameInView(title: NSAttributedString, frame: CGRect, controlView: NSView): CGRect;

  gradientType: interop.Enum<typeof NSGradientType>;

  setTitleWithMnemonic(stringWithAmpersand: string): void;

  setAlternateTitleWithMnemonic(stringWithAmpersand: string): void;

  setAlternateMnemonicLocation(location: number): void;

  alternateMnemonicLocation(): number;

  alternateMnemonic(): string;

  keyEquivalentFont: NSFont;

  setKeyEquivalentFontSize(fontName: string, fontSize: number): void;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSGroupTouchBarItem extends NSTouchBarItem {
  static groupItemWithIdentifierItems<This extends abstract new (...args: any) => any>(this: This, identifier: string, items: NSArray<interop.Object> | Array<interop.Object>): InstanceType<This>;

  static groupItemWithIdentifierItemsAllowedCompressionOptions<This extends abstract new (...args: any) => any>(this: This, identifier: string, items: NSArray<interop.Object> | Array<interop.Object>, allowedCompressionOptions: NSUserInterfaceCompressionOptions): InstanceType<This>;

  static alertStyleGroupItemWithIdentifier<This extends abstract new (...args: any) => any>(this: This, identifier: string): InstanceType<This>;

  groupTouchBar: NSTouchBar;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;

  groupUserInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;

  prefersEqualWidths: boolean;

  preferredItemWidth: number;

  readonly effectiveCompressionOptions: NSUserInterfaceCompressionOptions;

  get prioritizedCompressionOptions(): NSArray;
  set prioritizedCompressionOptions(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class NSClipView extends NSView {
  backgroundColor: NSColor;

  drawsBackground: boolean;

  documentView: NSView;

  readonly documentRect: CGRect;

  documentCursor: NSCursor;

  readonly documentVisibleRect: CGRect;

  viewFrameChanged(notification: NSNotification): void;

  viewBoundsChanged(notification: NSNotification): void;

  autoscroll(event: NSEvent): boolean;

  scrollToPoint(newOrigin: CGPoint): void;

  constrainBoundsRect(proposedBounds: CGRect): CGRect;

  contentInsets: NSEdgeInsets;

  automaticallyAdjustsContentInsets: boolean;

  constrainScrollPoint(newOrigin: CGPoint): CGPoint;

  copiesOnScroll: boolean;
}

declare class NSTextFieldCell extends NSActionCell {
  initTextCell(string: string): this;

  initWithCoder(coder: NSCoder): this;

  backgroundColor: NSColor;

  drawsBackground: boolean;

  textColor: NSColor;

  setUpFieldEditorAttributes(textObj: NSText): NSText;

  bezelStyle: interop.Enum<typeof NSTextFieldBezelStyle>;

  placeholderString: string;

  placeholderAttributedString: NSAttributedString;

  setWantsNotificationForMarkedText(flag: boolean): void;

  get allowedInputSourceLocales(): NSArray;
  set allowedInputSourceLocales(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class NSCollectionViewCompositionalLayout extends NSCollectionViewLayout {
  initWithSection(section: NSCollectionLayoutSection): this;

  initWithSectionConfiguration(section: NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration): this;

  initWithSectionProvider(sectionProvider: (p1: number, p2: NSCollectionLayoutEnvironment) => NSCollectionLayoutSection): this;

  initWithSectionProviderConfiguration(sectionProvider: (p1: number, p2: NSCollectionLayoutEnvironment) => NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration): this;

  configuration: NSCollectionViewCompositionalLayoutConfiguration;
}

declare class NSStringDrawingContext extends NSObject {
  minimumScaleFactor: number;

  readonly actualScaleFactor: number;

  readonly totalBounds: CGRect;
}

declare class NSTableRowView extends NSView implements NSAccessibilityRow {
  selectionHighlightStyle: interop.Enum<typeof NSTableViewSelectionHighlightStyle>;

  isEmphasized: boolean;

  isGroupRowStyle: boolean;

  isSelected: boolean;

  isPreviousRowSelected: boolean;

  isNextRowSelected: boolean;

  isFloating: boolean;

  isTargetForDropOperation: boolean;

  draggingDestinationFeedbackStyle: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>;

  indentationForDropOperation: number;

  readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;

  backgroundColor: NSColor;

  drawBackgroundInRect(dirtyRect: CGRect): void;

  drawSelectionInRect(dirtyRect: CGRect): void;

  drawSeparatorInRect(dirtyRect: CGRect): void;

  drawDraggingDestinationFeedbackInRect(dirtyRect: CGRect): void;

  viewAtColumn(column: number): interop.Object;

  readonly numberOfColumns: number;

  accessibilityIndex: number;

  accessibilityDisclosureLevel: number;

  accessibilityFrame: CGRect;

  accessibilityParent: interop.Object;

  isAccessibilityFocused: boolean;

  accessibilityIdentifier: string;

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

declare class NSAlert extends NSObject {
  static alertWithError(error: NSError): NSAlert;

  messageText: string;

  informativeText: string;

  icon: NSImage;

  addButtonWithTitle(title: string): NSButton;

  readonly buttons: NSArray;

  alertStyle: interop.Enum<typeof NSAlertStyle>;

  showsHelp: boolean;

  helpAnchor: string;

  delegate: NSAlertDelegate;

  accessoryView: NSView;

  layout(): void;

  runModal(): number;

  showsSuppressionButton: boolean;

  readonly suppressionButton: NSButton;

  beginSheetModalForWindowCompletionHandler(sheetWindow: NSWindow, handler: (p1: number) => void | null): void;

  readonly window: NSWindow;

  static alertWithMessageTextDefaultButtonAlternateButtonOtherButtonInformativeTextWithFormat(message: string | null, defaultButton: string | null, alternateButton: string | null, otherButton: string | null, format: string): NSAlert;

  beginSheetModalForWindowModalDelegateDidEndSelectorContextInfo(window: NSWindow, delegate: interop.Object | null, didEndSelector: string | null, contextInfo: interop.PointerConvertible): void;
}

declare class NSBezierPath extends NSObject implements NSCopying, NSSecureCoding {
  static bezierPath(): NSBezierPath;

  static bezierPathWithRect(rect: CGRect): NSBezierPath;

  static bezierPathWithOvalInRect(rect: CGRect): NSBezierPath;

  static bezierPathWithRoundedRectXRadiusYRadius(rect: CGRect, xRadius: number, yRadius: number): NSBezierPath;

  static bezierPathWithCGPath(cgPath: interop.PointerConvertible): NSBezierPath;

  get CGPath(): interop.Pointer;
  set CGPath(value: interop.PointerConvertible);

  static fillRect(rect: CGRect): void;

  static strokeRect(rect: CGRect): void;

  static clipRect(rect: CGRect): void;

  static strokeLineFromPointToPoint(point1: CGPoint, point2: CGPoint): void;

  static drawPackedGlyphsAtPoint(packedGlyphs: string, point: CGPoint): void;

  static defaultMiterLimit: number;

  static defaultFlatness: number;

  static defaultWindingRule: interop.Enum<typeof NSWindingRule>;

  static defaultLineCapStyle: interop.Enum<typeof NSLineCapStyle>;

  static defaultLineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;

  static defaultLineWidth: number;

  moveToPoint(point: CGPoint): void;

  lineToPoint(point: CGPoint): void;

  curveToPointControlPoint1ControlPoint2(endPoint: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): void;

  curveToPointControlPoint(endPoint: CGPoint, controlPoint: CGPoint): void;

  closePath(): void;

  removeAllPoints(): void;

  relativeMoveToPoint(point: CGPoint): void;

  relativeLineToPoint(point: CGPoint): void;

  relativeCurveToPointControlPoint1ControlPoint2(endPoint: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): void;

  relativeCurveToPointControlPoint(endPoint: CGPoint, controlPoint: CGPoint): void;

  lineWidth: number;

  lineCapStyle: interop.Enum<typeof NSLineCapStyle>;

  lineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;

  windingRule: interop.Enum<typeof NSWindingRule>;

  miterLimit: number;

  flatness: number;

  getLineDashCountPhase(pattern: interop.PointerConvertible, count: interop.PointerConvertible, phase: interop.PointerConvertible): void;

  setLineDashCountPhase(pattern: interop.PointerConvertible, count: number, phase: number): void;

  stroke(): void;

  fill(): void;

  addClip(): void;

  setClip(): void;

  readonly bezierPathByFlatteningPath: NSBezierPath;

  readonly bezierPathByReversingPath: NSBezierPath;

  transformUsingAffineTransform(transform: NSAffineTransform): void;

  readonly isEmpty: boolean;

  readonly currentPoint: CGPoint;

  readonly controlPointBounds: CGRect;

  readonly bounds: CGRect;

  readonly elementCount: number;

  elementAtIndexAssociatedPoints(index: number, points: interop.PointerConvertible): interop.Enum<typeof NSBezierPathElement>;

  elementAtIndex(index: number): interop.Enum<typeof NSBezierPathElement>;

  setAssociatedPointsAtIndex(points: interop.PointerConvertible, index: number): void;

  appendBezierPath(path: NSBezierPath): void;

  appendBezierPathWithRect(rect: CGRect): void;

  appendBezierPathWithPointsCount(points: interop.PointerConvertible, count: number): void;

  appendBezierPathWithOvalInRect(rect: CGRect): void;

  appendBezierPathWithArcWithCenterRadiusStartAngleEndAngleClockwise(center: CGPoint, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;

  appendBezierPathWithArcWithCenterRadiusStartAngleEndAngle(center: CGPoint, radius: number, startAngle: number, endAngle: number): void;

  appendBezierPathWithArcFromPointToPointRadius(point1: CGPoint, point2: CGPoint, radius: number): void;

  appendBezierPathWithCGGlyphInFont(glyph: number, font: NSFont): void;

  appendBezierPathWithCGGlyphsCountInFont(glyphs: interop.PointerConvertible, count: number, font: NSFont): void;

  appendBezierPathWithRoundedRectXRadiusYRadius(rect: CGRect, xRadius: number, yRadius: number): void;

  containsPoint(point: CGPoint): boolean;

  cachesBezierPath(): boolean;

  setCachesBezierPath(flag: boolean): void;

  appendBezierPathWithGlyphInFont(glyph: number, font: NSFont): void;

  appendBezierPathWithGlyphsCountInFont(glyphs: interop.PointerConvertible, count: number, font: NSFont): void;

  appendBezierPathWithPackedGlyphs(packedGlyphs: string): void;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSAnimation extends NSObject implements NSCopying, NSCoding {
  initWithDurationAnimationCurve(duration: number, animationCurve: interop.Enum<typeof NSAnimationCurve>): this;

  initWithCoder(coder: NSCoder): this;

  startAnimation(): void;

  stopAnimation(): void;

  readonly isAnimating: boolean;

  currentProgress: number;

  duration: number;

  animationBlockingMode: interop.Enum<typeof NSAnimationBlockingMode>;

  frameRate: number;

  animationCurve: interop.Enum<typeof NSAnimationCurve>;

  readonly currentValue: number;

  delegate: NSAnimationDelegate;

  get progressMarks(): NSArray;
  set progressMarks(value: NSArray<interop.Object> | Array<interop.Object>);

  addProgressMark(progressMark: number): void;

  removeProgressMark(progressMark: number): void;

  startWhenAnimationReachesProgress(animation: NSAnimation, startProgress: number): void;

  stopWhenAnimationReachesProgress(animation: NSAnimation, stopProgress: number): void;

  clearStartAnimation(): void;

  clearStopAnimation(): void;

  readonly runLoopModesForAnimating: NSArray;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;
}

declare class NSTextParagraph extends NSTextElement {
  initWithAttributedString(attributedString: NSAttributedString | null): this;

  readonly attributedString: NSAttributedString;

  readonly paragraphContentRange: NSTextRange;

  readonly paragraphSeparatorRange: NSTextRange;
}

declare class NSPasteboard extends NSObject {
  static readonly generalPasteboard: NSPasteboard;

  static pasteboardWithName(name: string): NSPasteboard;

  static pasteboardWithUniqueName(): NSPasteboard;

  readonly name: string;

  readonly changeCount: number;

  releaseGlobally(): void;

  prepareForNewContentsWithOptions(options: interop.Enum<typeof NSPasteboardContentsOptions>): number;

  clearContents(): number;

  writeObjects(objects: NSArray<interop.Object> | Array<interop.Object>): boolean;

  readObjectsForClassesOptions(classArray: NSArray<interop.Object> | Array<interop.Object>, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): NSArray;

  readonly pasteboardItems: NSArray;

  indexOfPasteboardItem(pasteboardItem: NSPasteboardItem): number;

  canReadItemWithDataConformingToTypes(types: NSArray<interop.Object> | Array<interop.Object>): boolean;

  canReadObjectForClassesOptions(classArray: NSArray<interop.Object> | Array<interop.Object>, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): boolean;

  declareTypesOwner(newTypes: NSArray<interop.Object> | Array<interop.Object>, newOwner: interop.Object | null): number;

  addTypesOwner(newTypes: NSArray<interop.Object> | Array<interop.Object>, newOwner: interop.Object | null): number;

  readonly types: NSArray;

  availableTypeFromArray(types: NSArray<interop.Object> | Array<interop.Object>): string;

  setDataForType(data: NSData | null, dataType: string): boolean;

  setPropertyListForType(plist: interop.Object, dataType: string): boolean;

  setStringForType(string: string, dataType: string): boolean;

  dataForType(dataType: string): NSData;

  propertyListForType(dataType: string): interop.Object;

  stringForType(dataType: string): string;

  static typesFilterableTo(type: string): NSArray;

  static pasteboardByFilteringFile(filename: string): NSPasteboard;

  static pasteboardByFilteringDataOfType(data: NSData, type: string): NSPasteboard;

  static pasteboardByFilteringTypesInPasteboard(pboard: NSPasteboard): NSPasteboard;

  writeFileContents(filename: string): boolean;

  readFileContentsTypeToFile(type: string | null, filename: string): string;

  writeFileWrapper(wrapper: NSFileWrapper): boolean;

  readFileWrapper(): NSFileWrapper;
}

declare class NSMediaLibraryBrowserController extends NSObject {
  static readonly sharedMediaLibraryBrowserController: NSMediaLibraryBrowserController;

  isVisible: boolean;

  frame: CGRect;

  mediaLibraries: interop.Enum<typeof NSMediaLibrary>;

  togglePanel(sender: interop.Object | null): void;
}

declare class NSTrackingArea extends NSObject implements NSCopying, NSCoding {
  initWithRectOptionsOwnerUserInfo(rect: CGRect, options: interop.Enum<typeof NSTrackingAreaOptions>, owner: interop.Object | null, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): this;

  readonly rect: CGRect;

  readonly options: interop.Enum<typeof NSTrackingAreaOptions>;

  readonly owner: interop.Object;

  readonly userInfo: NSDictionary;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSTabView extends NSView {
  selectTabViewItem(tabViewItem: NSTabViewItem | null): void;

  selectTabViewItemAtIndex(index: number): void;

  selectTabViewItemWithIdentifier(identifier: interop.Object): void;

  takeSelectedTabViewItemFromSender(sender: interop.Object | null): void;

  selectFirstTabViewItem(sender: interop.Object | null): void;

  selectLastTabViewItem(sender: interop.Object | null): void;

  selectNextTabViewItem(sender: interop.Object | null): void;

  selectPreviousTabViewItem(sender: interop.Object | null): void;

  readonly selectedTabViewItem: NSTabViewItem;

  font: NSFont;

  tabViewType: interop.Enum<typeof NSTabViewType>;

  tabPosition: interop.Enum<typeof NSTabPosition>;

  tabViewBorderType: interop.Enum<typeof NSTabViewBorderType>;

  get tabViewItems(): NSArray;
  set tabViewItems(value: NSArray<interop.Object> | Array<interop.Object>);

  allowsTruncatedLabels: boolean;

  readonly minimumSize: CGSize;

  drawsBackground: boolean;

  controlSize: interop.Enum<typeof NSControlSize>;

  addTabViewItem(tabViewItem: NSTabViewItem): void;

  insertTabViewItemAtIndex(tabViewItem: NSTabViewItem, index: number): void;

  removeTabViewItem(tabViewItem: NSTabViewItem): void;

  delegate: NSTabViewDelegate;

  tabViewItemAtPoint(point: CGPoint): NSTabViewItem;

  readonly contentRect: CGRect;

  readonly numberOfTabViewItems: number;

  indexOfTabViewItem(tabViewItem: NSTabViewItem): number;

  tabViewItemAtIndex(index: number): NSTabViewItem;

  indexOfTabViewItemWithIdentifier(identifier: interop.Object): number;

  controlTint: interop.Enum<typeof NSControlTint>;
}

// @ts-ignore ClassDecl.tsIgnore
declare class NSSliderTouchBarItem extends NSTouchBarItem {
  readonly view: NSView;

  slider: NSSlider;

  doubleValue: number;

  minimumSliderWidth: number;

  maximumSliderWidth: number;

  label: string;

  minimumValueAccessory: NSSliderAccessory;

  maximumValueAccessory: NSSliderAccessory;

  valueAccessoryWidth: number;

  target: interop.Object;

  action: string;

  // @ts-ignore MemberDecl.tsIgnore
  customizationLabel: string;
}

declare class NSTextElement extends NSObject {
  initWithTextContentManager(textContentManager: NSTextContentManager | null): this;

  textContentManager: NSTextContentManager;

  elementRange: NSTextRange;

  readonly childElements: NSArray;

  readonly parentElement: NSTextElement;

  readonly isRepresentedElement: boolean;
}

declare class NSObjectController extends NSController {
  initWithContent(content: interop.Object | null): this;

  initWithCoder(coder: NSCoder): this;

  content: interop.Object;

  readonly selection: interop.Object;

  readonly selectedObjects: NSArray;

  automaticallyPreparesContent: boolean;

  prepareContent(): void;

  objectClass: interop.Object;

  newObject(): interop.Object;

  addObject(object: interop.Object): void;

  removeObject(object: interop.Object): void;

  isEditable: boolean;

  add(sender: interop.Object | null): void;

  readonly canAdd: boolean;

  remove(sender: interop.Object | null): void;

  readonly canRemove: boolean;

  validateUserInterfaceItem(item: NSValidatedUserInterfaceItem): boolean;

  managedObjectContext: NSManagedObjectContext;

  entityName: string;

  fetchPredicate: NSPredicate;

  fetchWithRequestMergeError(fetchRequest: NSFetchRequest | null, merge: boolean, error: interop.PointerConvertible): boolean;

  fetch(sender: interop.Object | null): void;

  usesLazyFetching: boolean;

  defaultFetchRequest(): NSFetchRequest;
}

declare class NSTextStorage extends NSMutableAttributedString implements NSSecureCoding {
  readonly layoutManagers: NSArray;

  addLayoutManager(aLayoutManager: NSLayoutManager): void;

  removeLayoutManager(aLayoutManager: NSLayoutManager): void;

  readonly editedMask: interop.Enum<typeof NSTextStorageEditActions>;

  readonly editedRange: _NSRange;

  readonly changeInLength: number;

  delegate: NSTextStorageDelegate;

  editedRangeChangeInLength(editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;

  processEditing(): void;

  readonly fixesAttributesLazily: boolean;

  invalidateAttributesInRange(range: _NSRange): void;

  ensureAttributesAreFixedInRange(range: _NSRange): void;

  textStorageObserver: NSTextStorageObserving;

  get attributeRuns(): NSArray;
  set attributeRuns(value: NSArray<interop.Object> | Array<interop.Object>);

  get paragraphs(): NSArray;
  set paragraphs(value: NSArray<interop.Object> | Array<interop.Object>);

  get words(): NSArray;
  set words(value: NSArray<interop.Object> | Array<interop.Object>);

  get characters(): NSArray;
  set characters(value: NSArray<interop.Object> | Array<interop.Object>);

  font: NSFont;

  foregroundColor: NSColor;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NSLayoutXAxisAnchor extends NSLayoutAnchor {
  anchorWithOffsetToAnchor(otherAnchor: NSLayoutXAxisAnchor): NSLayoutDimension;

  constraintEqualToSystemSpacingAfterAnchorMultiplier(anchor: NSLayoutXAxisAnchor, multiplier: number): NSLayoutConstraint;

  constraintGreaterThanOrEqualToSystemSpacingAfterAnchorMultiplier(anchor: NSLayoutXAxisAnchor, multiplier: number): NSLayoutConstraint;

  constraintLessThanOrEqualToSystemSpacingAfterAnchorMultiplier(anchor: NSLayoutXAxisAnchor, multiplier: number): NSLayoutConstraint;
}

declare class NSTreeNode extends NSObject {
  static treeNodeWithRepresentedObject<This extends abstract new (...args: any) => any>(this: This, modelObject: interop.Object | null): InstanceType<This>;

  initWithRepresentedObject(modelObject: interop.Object | null): this;

  readonly representedObject: interop.Object;

  readonly indexPath: NSIndexPath;

  readonly isLeaf: boolean;

  readonly childNodes: NSArray;

  readonly mutableChildNodes: NSMutableArray;

  descendantNodeAtIndexPath(indexPath: NSIndexPath): NSTreeNode;

  readonly parentNode: NSTreeNode;

  sortWithSortDescriptorsRecursively(sortDescriptors: NSArray<interop.Object> | Array<interop.Object>, recursively: boolean): void;
}

