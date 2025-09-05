/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./UIKit.d.ts" />

declare const WKPreviewActionItemIdentifierShare: string;

declare const WKPreviewActionItemIdentifierAddToReadingList: string;

declare const WKWebExtensionPermissionCookies: string;

declare const WKWebExtensionPermissionDeclarativeNetRequestFeedback: string;

declare const WKWebExtensionMatchPatternErrorDomain: string;

declare const WKWebsiteDataTypeMediaKeys: string;

declare const WKWebsiteDataTypeFileSystem: string;

declare const WKWebsiteDataTypeIndexedDBDatabases: string;

declare const WKWebsiteDataTypeServiceWorkerRegistrations: string;

declare const WKWebsiteDataTypeLocalStorage: string;

declare const WKWebsiteDataTypeCookies: string;

declare const WKWebsiteDataTypeMemoryCache: string;

declare const WKWebsiteDataTypeDiskCache: string;

declare const WKWebsiteDataTypeFetchCache: string;

declare const WKWebExtensionMessagePortErrorDomain: string;

declare const WKWebExtensionDataTypeSynchronized: string;

declare const WKWebExtensionContextGrantedPermissionMatchPatternsWereRemovedNotification: string;

declare const WKWebExtensionContextPermissionMatchPatternsWereDeniedNotification: string;

declare const WKWebExtensionContextGrantedPermissionsWereRemovedNotification: string;

declare const WKWebExtensionContextPermissionsWereDeniedNotification: string;

declare const WKWebExtensionContextErrorsDidUpdateNotification: string;

declare const WKWebExtensionErrorDomain: string;

declare const WKWebExtensionPermissionWebRequest: string;

declare const WKWebExtensionPermissionTabs: string;

declare const WKWebExtensionPermissionScripting: string;

declare const WKWebExtensionPermissionNativeMessaging: string;

declare const WKWebExtensionPermissionMenus: string;

declare const WKWebExtensionPermissionDeclarativeNetRequest: string;

declare const WKWebExtensionPermissionActiveTab: string;

declare const WKPreviewActionItemIdentifierOpen: string;

declare const WKPreviewActionItemIdentifierCopy: string;

declare const WKWebExtensionDataTypeSession: string;

declare const WKWebExtensionContextDeniedPermissionMatchPatternsWereRemovedNotification: string;

declare const WKWebExtensionContextDeniedPermissionsWereRemovedNotification: string;

declare const WKWebsiteDataTypeWebSQLDatabases: string;

declare const WKWebExtensionPermissionWebNavigation: string;

declare const WKWebExtensionPermissionDeclarativeNetRequestWithHostAccess: string;

declare const WKWebExtensionDataTypeLocal: string;

declare const WKWebExtensionContextNotificationUserInfoKeyPermissions: string;

declare const WKWebExtensionPermissionClipboardWrite: string;

declare const WKErrorDomain: string;

declare const WKWebsiteDataTypeSessionStorage: string;

declare const WKWebExtensionPermissionContextMenus: string;

declare const WKWebExtensionContextNotificationUserInfoKeyMatchPatterns: string;

declare const WKWebExtensionPermissionAlarms: string;

declare const WKWebExtensionContextErrorDomain: string;

declare const WKWebExtensionPermissionStorage: string;

declare const WKWebExtensionPermissionUnlimitedStorage: string;

declare const WKWebExtensionContextPermissionMatchPatternsWereGrantedNotification: string;

declare const WKWebExtensionDataRecordErrorDomain: string;

declare const NSReadAccessURLDocumentOption: string;

declare const WKWebsiteDataTypeHashSalt: string;

declare const WKWebsiteDataTypeSearchFieldRecentSearches: string;

declare const WKWebsiteDataTypeOfflineWebApplicationCache: string;

declare const WKWebExtensionContextPermissionsWereGrantedNotification: string;

declare const WKWebpagePreferencesUpgradeToHTTPSPolicy: {
  KeepAsRequested: 0,
  AutomaticFallbackToHTTP: 1,
  UserMediatedFallbackToHTTP: 2,
  ErrorOnFailure: 3,
};

declare const WKAudiovisualMediaTypes: {
  None: 0,
  Audio: 1,
  Video: 2,
  All: -1,
};

declare const WKWebExtensionMessagePortError: {
  Unknown: 1,
  NotConnected: 2,
  MessageInvalid: 3,
};

declare const WKWebExtensionContextPermissionStatus: {
  DeniedExplicitly: -3,
  DeniedImplicitly: -2,
  RequestedImplicitly: -1,
  Unknown: 0,
  RequestedExplicitly: 1,
  GrantedImplicitly: 2,
  GrantedExplicitly: 3,
};

declare const WKWebExtensionMatchPatternOptions: {
  None: 0,
  IgnoreSchemes: 1,
  IgnorePaths: 2,
  MatchBidirectionally: 4,
};

declare const WKWebExtensionMatchPatternError: {
  Unknown: 1,
  InvalidScheme: 2,
  InvalidHost: 3,
  InvalidPath: 4,
};

declare const WKDialogResult: {
  ShowDefault: 1,
  AskAgain: 2,
  Handled: 3,
};

declare const WKPermissionDecision: {
  Prompt: 0,
  Grant: 1,
  Deny: 2,
};

declare const WKNavigationResponsePolicy: {
  Cancel: 0,
  Allow: 1,
  Download: 2,
};

declare const WKNavigationType: {
  LinkActivated: 0,
  FormSubmitted: 1,
  BackForward: 2,
  Reload: 3,
  FormResubmitted: 4,
  Other: -1,
};

declare const WKContentMode: {
  Recommended: 0,
  Mobile: 1,
  Desktop: 2,
};

declare const WKCookiePolicy: {
  Allow: 0,
  Disallow: 1,
};

declare const WKUserScriptInjectionTime: {
  Start: 0,
  End: 1,
};

declare const WKFullscreenState: {
  NotIn: 0,
  Entering: 1,
  In: 2,
  Exiting: 3,
};

declare const WKMediaPlaybackState: {
  None: 0,
  Playing: 1,
  Paused: 2,
  Suspended: 3,
};

declare const WKWebExtensionError: {
  Unknown: 1,
  ResourceNotFound: 2,
  InvalidResourceCodeSignature: 3,
  InvalidManifest: 4,
  UnsupportedManifestVersion: 5,
  InvalidManifestEntry: 6,
  InvalidDeclarativeNetRequestEntry: 7,
  InvalidBackgroundPersistence: 8,
  InvalidArchive: 9,
};

declare const WKWebExtensionDataRecordError: {
  Unknown: 1,
  LocalStorageFailed: 2,
  SessionStorageFailed: 3,
  SynchronizedStorageFailed: 4,
};

declare const WKWebExtensionTabChangedProperties: {
  None: 0,
  Loading: 2,
  Muted: 4,
  Pinned: 8,
  PlayingAudio: 16,
  ReaderMode: 32,
  Size: 64,
  Title: 128,
  URL: 256,
  ZoomFactor: 512,
};

declare const WKMediaCaptureType: {
  Camera: 0,
  Microphone: 1,
  CameraAndMicrophone: 2,
};

declare const WKDownloadRedirectPolicy: {
  Cancel: 0,
  Allow: 1,
};

declare const WKWebExtensionWindowType: {
  Normal: 0,
  Popup: 1,
};

declare const WKSelectionGranularity: {
  Dynamic: 0,
  Character: 1,
};

declare const WKMediaCaptureState: {
  None: 0,
  Active: 1,
  Muted: 2,
};

declare const WKNavigationActionPolicy: {
  Cancel: 0,
  Allow: 1,
  Download: 2,
};

declare const WKErrorCode: {
  Unknown: 1,
  WebContentProcessTerminated: 2,
  WebViewInvalidated: 3,
  JavaScriptExceptionOccurred: 4,
  JavaScriptResultTypeIsUnsupported: 5,
  ContentRuleListStoreCompileFailed: 6,
  ContentRuleListStoreLookUpFailed: 7,
  ContentRuleListStoreRemoveFailed: 8,
  ContentRuleListStoreVersionMismatch: 9,
  AttributedStringContentFailedToLoad: 10,
  AttributedStringContentLoadTimedOut: 11,
  JavaScriptInvalidFrameTarget: 12,
  NavigationAppBoundDomain: 13,
  JavaScriptAppBoundDomain: 14,
  DuplicateCredential: 15,
  MalformedCredential: 16,
  CredentialNotFound: 17,
};

declare const WKDataDetectorTypes: {
  None: 0,
  PhoneNumber: 1,
  Link: 2,
  Address: 4,
  CalendarEvent: 8,
  TrackingNumber: 16,
  FlightNumber: 32,
  LookupSuggestion: 64,
  All: -1,
  SpotlightSuggestion: 64,
};

declare const WKInactiveSchedulingPolicy: {
  Suspend: 0,
  Throttle: 1,
  None: 2,
};

declare const WKWebExtensionContextError: {
  Unknown: 1,
  AlreadyLoaded: 2,
  NotLoaded: 3,
  BaseURLAlreadyInUse: 4,
  NoBackgroundContent: 5,
  BackgroundContentFailedToLoad: 6,
};

declare const WKDownloadPlaceholderPolicy: {
  Disable: 0,
  Enable: 1,
};

declare const WKWebExtensionWindowState: {
  Normal: 0,
  Minimized: 1,
  Maximized: 2,
  Fullscreen: 3,
};

declare interface WKScriptMessageHandler extends NSObjectProtocol {
  userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void;
}

declare class WKScriptMessageHandler extends NativeObject implements WKScriptMessageHandler {
}

declare interface WKUIDelegate extends NSObjectProtocol {
  webViewCreateWebViewWithConfigurationForNavigationActionWindowFeatures?(webView: WKWebView, configuration: WKWebViewConfiguration, navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures): WKWebView;

  webViewDidClose?(webView: WKWebView): void;

  webViewRunJavaScriptAlertPanelWithMessageInitiatedByFrameCompletionHandler?(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: () => void): void;

  webViewRunJavaScriptConfirmPanelWithMessageInitiatedByFrameCompletionHandler?(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: (p1: boolean) => void): void;

  webViewRunJavaScriptTextInputPanelWithPromptDefaultTextInitiatedByFrameCompletionHandler?(webView: WKWebView, prompt: string, defaultText: string | null, frame: WKFrameInfo, completionHandler: (p1: string) => void | null): void;

  webViewRequestMediaCapturePermissionForOriginInitiatedByFrameTypeDecisionHandler?(webView: WKWebView, origin: WKSecurityOrigin, frame: WKFrameInfo, type: interop.Enum<typeof WKMediaCaptureType>, decisionHandler: (p1: interop.Enum<typeof WKPermissionDecision>) => void): void;

  webViewRequestDeviceOrientationAndMotionPermissionForOriginInitiatedByFrameDecisionHandler?(webView: WKWebView, origin: WKSecurityOrigin, frame: WKFrameInfo, decisionHandler: (p1: interop.Enum<typeof WKPermissionDecision>) => void): void;

  webViewShouldPreviewElement?(webView: WKWebView, elementInfo: WKPreviewElementInfo): boolean;

  webViewPreviewingViewControllerForElementDefaultActions?(webView: WKWebView, elementInfo: WKPreviewElementInfo, previewActions: NSArray<interop.Object> | Array<interop.Object>): UIViewController;

  webViewCommitPreviewingViewController?(webView: WKWebView, previewingViewController: UIViewController): void;

  webViewContextMenuConfigurationForElementCompletionHandler?(webView: WKWebView, elementInfo: WKContextMenuElementInfo, completionHandler: (p1: UIContextMenuConfiguration) => void | null): void;

  webViewContextMenuWillPresentForElement?(webView: WKWebView, elementInfo: WKContextMenuElementInfo): void;

  webViewContextMenuForElementWillCommitWithAnimator?(webView: WKWebView, elementInfo: WKContextMenuElementInfo, animator: UIContextMenuInteractionCommitAnimating): void;

  webViewContextMenuDidEndForElement?(webView: WKWebView, elementInfo: WKContextMenuElementInfo): void;

  webViewShowLockdownModeFirstUseMessageCompletionHandler?(webView: WKWebView, message: string, completionHandler: (p1: interop.Enum<typeof WKDialogResult>) => void): void;

  webViewWillPresentEditMenuWithAnimator?(webView: WKWebView, animator: UIEditMenuInteractionAnimating): void;

  webViewWillDismissEditMenuWithAnimator?(webView: WKWebView, animator: UIEditMenuInteractionAnimating): void;

  webViewRunOpenPanelWithParametersInitiatedByFrameCompletionHandler?(webView: WKWebView, parameters: WKOpenPanelParameters, frame: WKFrameInfo, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void | null): void;
}

declare class WKUIDelegate extends NativeObject implements WKUIDelegate {
}

declare interface WKScriptMessageHandlerWithReply extends NSObjectProtocol {
  userContentControllerDidReceiveScriptMessageReplyHandler(userContentController: WKUserContentController, message: WKScriptMessage, replyHandler: (p1: interop.Object, p2: string) => void | null): void;
}

declare class WKScriptMessageHandlerWithReply extends NativeObject implements WKScriptMessageHandlerWithReply {
}

declare interface WKNavigationDelegate extends NSObjectProtocol {
  webViewDecidePolicyForNavigationActionDecisionHandler?(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: interop.Enum<typeof WKNavigationActionPolicy>) => void): void;

  webViewDecidePolicyForNavigationActionPreferencesDecisionHandler?(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: interop.Enum<typeof WKNavigationActionPolicy>, p2: WKWebpagePreferences) => void): void;

  webViewDecidePolicyForNavigationResponseDecisionHandler?(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: interop.Enum<typeof WKNavigationResponsePolicy>) => void): void;

  webViewDidStartProvisionalNavigation?(webView: WKWebView, navigation: WKNavigation): void;

  webViewDidReceiveServerRedirectForProvisionalNavigation?(webView: WKWebView, navigation: WKNavigation): void;

  webViewDidFailProvisionalNavigationWithError?(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

  webViewDidCommitNavigation?(webView: WKWebView, navigation: WKNavigation): void;

  webViewDidFinishNavigation?(webView: WKWebView, navigation: WKNavigation): void;

  webViewDidFailNavigationWithError?(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

  webViewDidReceiveAuthenticationChallengeCompletionHandler?(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: interop.Enum<typeof NSURLSessionAuthChallengeDisposition>, p2: NSURLCredential) => void | null): void;

  webViewWebContentProcessDidTerminate?(webView: WKWebView): void;

  webViewAuthenticationChallengeShouldAllowDeprecatedTLS?(webView: WKWebView, challenge: NSURLAuthenticationChallenge, decisionHandler: (p1: boolean) => void): void;

  webViewNavigationActionDidBecomeDownload?(webView: WKWebView, navigationAction: WKNavigationAction, download: WKDownload): void;

  webViewNavigationResponseDidBecomeDownload?(webView: WKWebView, navigationResponse: WKNavigationResponse, download: WKDownload): void;

  webViewShouldGoToBackForwardListItemWillUseInstantBackCompletionHandler?(webView: WKWebView, backForwardListItem: WKBackForwardListItem, willUseInstantBack: boolean, completionHandler: (p1: boolean) => void): void;
}

declare class WKNavigationDelegate extends NativeObject implements WKNavigationDelegate {
}

declare interface WKHTTPCookieStoreObserver extends NSObjectProtocol {
  cookiesDidChangeInCookieStore?(cookieStore: WKHTTPCookieStore): void;
}

declare class WKHTTPCookieStoreObserver extends NativeObject implements WKHTTPCookieStoreObserver {
}

declare interface WKURLSchemeHandler extends NSObjectProtocol {
  webViewStartURLSchemeTask(webView: WKWebView, urlSchemeTask: WKURLSchemeTask): void;

  webViewStopURLSchemeTask(webView: WKWebView, urlSchemeTask: WKURLSchemeTask): void;
}

declare class WKURLSchemeHandler extends NativeObject implements WKURLSchemeHandler {
}

declare interface WKURLSchemeTask extends NSObjectProtocol {
  readonly request: NSURLRequest;

  didReceiveResponse(response: NSURLResponse): void;

  didReceiveData(data: NSData): void;

  didFinish(): void;

  didFailWithError(error: NSError): void;
}

declare class WKURLSchemeTask extends NativeObject implements WKURLSchemeTask {
}

declare interface WKDownloadDelegate extends NSObjectProtocol {
  downloadDecideDestinationUsingResponseSuggestedFilenameCompletionHandler(download: WKDownload, response: NSURLResponse, suggestedFilename: string, completionHandler: (p1: NSURL) => void | null): void;

  downloadWillPerformHTTPRedirectionNewRequestDecisionHandler?(download: WKDownload, response: NSHTTPURLResponse, request: NSURLRequest, decisionHandler: (p1: interop.Enum<typeof WKDownloadRedirectPolicy>) => void): void;

  downloadDidReceiveAuthenticationChallengeCompletionHandler?(download: WKDownload, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: interop.Enum<typeof NSURLSessionAuthChallengeDisposition>, p2: NSURLCredential) => void | null): void;

  downloadDidFinish?(download: WKDownload): void;

  downloadDidFailWithErrorResumeData?(download: WKDownload, error: NSError, resumeData: NSData | null): void;

  downloadDecidePlaceholderPolicy?(download: WKDownload, completionHandler: (p1: interop.Enum<typeof WKDownloadPlaceholderPolicy>, p2: NSURL) => void | null): void;

  downloadDidReceivePlaceholderURLCompletionHandler?(download: WKDownload, url: NSURL, completionHandler: () => void): void;

  downloadDidReceiveFinalURL?(download: WKDownload, url: NSURL): void;
}

declare class WKDownloadDelegate extends NativeObject implements WKDownloadDelegate {
}

declare interface WKWebExtensionWindow extends NSObjectProtocol {
  tabsForWebExtensionContext?(context: WKWebExtensionContext): NSArray;

  activeTabForWebExtensionContext?(context: WKWebExtensionContext): WKWebExtensionTab;

  windowTypeForWebExtensionContext?(context: WKWebExtensionContext): interop.Enum<typeof WKWebExtensionWindowType>;

  windowStateForWebExtensionContext?(context: WKWebExtensionContext): interop.Enum<typeof WKWebExtensionWindowState>;

  setWindowStateForWebExtensionContextCompletionHandler?(state: interop.Enum<typeof WKWebExtensionWindowState>, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  isPrivateForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  frameForWebExtensionContext?(context: WKWebExtensionContext): CGRect;

  setFrameForWebExtensionContextCompletionHandler?(frame: CGRect, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  focusForWebExtensionContextCompletionHandler?(context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  closeForWebExtensionContextCompletionHandler?(context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;
}

declare class WKWebExtensionWindow extends NativeObject implements WKWebExtensionWindow {
}

declare interface WKWebExtensionTab extends NSObjectProtocol {
  windowForWebExtensionContext?(context: WKWebExtensionContext): WKWebExtensionWindow;

  indexInWindowForWebExtensionContext?(context: WKWebExtensionContext): number;

  parentTabForWebExtensionContext?(context: WKWebExtensionContext): WKWebExtensionTab;

  setParentTabForWebExtensionContextCompletionHandler?(parentTab: WKWebExtensionTab | null, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  webViewForWebExtensionContext?(context: WKWebExtensionContext): WKWebView;

  titleForWebExtensionContext?(context: WKWebExtensionContext): string;

  isPinnedForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  setPinnedForWebExtensionContextCompletionHandler?(pinned: boolean, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  isReaderModeAvailableForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  isReaderModeActiveForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  setReaderModeActiveForWebExtensionContextCompletionHandler?(active: boolean, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  isPlayingAudioForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  isMutedForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  setMutedForWebExtensionContextCompletionHandler?(muted: boolean, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  sizeForWebExtensionContext?(context: WKWebExtensionContext): CGSize;

  zoomFactorForWebExtensionContext?(context: WKWebExtensionContext): number;

  setZoomFactorForWebExtensionContextCompletionHandler?(zoomFactor: number, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  urlForWebExtensionContext?(context: WKWebExtensionContext): NSURL;

  pendingURLForWebExtensionContext?(context: WKWebExtensionContext): NSURL;

  isLoadingCompleteForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  detectWebpageLocaleForWebExtensionContextCompletionHandler?(context: WKWebExtensionContext, completionHandler: (p1: NSLocale, p2: NSError) => void | null): void;

  takeSnapshotUsingConfigurationForWebExtensionContextCompletionHandler?(configuration: WKSnapshotConfiguration, context: WKWebExtensionContext, completionHandler: (p1: UIImage, p2: NSError) => void | null): void;

  loadURLForWebExtensionContextCompletionHandler?(url: NSURL, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  reloadFromOriginForWebExtensionContextCompletionHandler?(fromOrigin: boolean, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  goBackForWebExtensionContextCompletionHandler?(context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  goForwardForWebExtensionContextCompletionHandler?(context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  activateForWebExtensionContextCompletionHandler?(context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  isSelectedForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  setSelectedForWebExtensionContextCompletionHandler?(selected: boolean, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  duplicateUsingConfigurationForWebExtensionContextCompletionHandler?(configuration: WKWebExtensionTabConfiguration, context: WKWebExtensionContext, completionHandler: (p1: WKWebExtensionTab, p2: NSError) => void | null): void;

  closeForWebExtensionContextCompletionHandler?(context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  shouldGrantPermissionsOnUserGestureForWebExtensionContext?(context: WKWebExtensionContext): boolean;

  shouldBypassPermissionsForWebExtensionContext?(context: WKWebExtensionContext): boolean;
}

declare class WKWebExtensionTab extends NativeObject implements WKWebExtensionTab {
}

declare interface WKPreviewActionItem extends UIPreviewActionItem {
  readonly identifier: string;
}

declare class WKPreviewActionItem extends NativeObject implements WKPreviewActionItem {
}

declare interface WKWebExtensionControllerDelegate extends NSObjectProtocol {
  webExtensionControllerOpenWindowsForExtensionContext?(controller: WKWebExtensionController, extensionContext: WKWebExtensionContext): NSArray;

  webExtensionControllerFocusedWindowForExtensionContext?(controller: WKWebExtensionController, extensionContext: WKWebExtensionContext): WKWebExtensionWindow;

  webExtensionControllerOpenNewWindowUsingConfigurationForExtensionContextCompletionHandler?(controller: WKWebExtensionController, configuration: WKWebExtensionWindowConfiguration, extensionContext: WKWebExtensionContext, completionHandler: (p1: WKWebExtensionWindow, p2: NSError) => void | null): void;

  webExtensionControllerOpenNewTabUsingConfigurationForExtensionContextCompletionHandler?(controller: WKWebExtensionController, configuration: WKWebExtensionTabConfiguration, extensionContext: WKWebExtensionContext, completionHandler: (p1: WKWebExtensionTab, p2: NSError) => void | null): void;

  webExtensionControllerOpenOptionsPageForExtensionContextCompletionHandler?(controller: WKWebExtensionController, extensionContext: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  webExtensionControllerPromptForPermissionsInTabForExtensionContextCompletionHandler?(controller: WKWebExtensionController, permissions: NSSet, tab: WKWebExtensionTab | null, extensionContext: WKWebExtensionContext, completionHandler: (p1: NSSet, p2: NSDate) => void | null): void;

  webExtensionControllerPromptForPermissionToAccessURLsInTabForExtensionContextCompletionHandler?(controller: WKWebExtensionController, urls: NSSet, tab: WKWebExtensionTab | null, extensionContext: WKWebExtensionContext, completionHandler: (p1: NSSet, p2: NSDate) => void | null): void;

  webExtensionControllerPromptForPermissionMatchPatternsInTabForExtensionContextCompletionHandler?(controller: WKWebExtensionController, matchPatterns: NSSet, tab: WKWebExtensionTab | null, extensionContext: WKWebExtensionContext, completionHandler: (p1: NSSet, p2: NSDate) => void | null): void;

  webExtensionControllerDidUpdateActionForExtensionContext?(controller: WKWebExtensionController, action: WKWebExtensionAction, context: WKWebExtensionContext): void;

  webExtensionControllerPresentPopupForActionForExtensionContextCompletionHandler?(controller: WKWebExtensionController, action: WKWebExtensionAction, context: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;

  webExtensionControllerSendMessageToApplicationWithIdentifierForExtensionContextReplyHandler?(controller: WKWebExtensionController, message: interop.Object, applicationIdentifier: string | null, extensionContext: WKWebExtensionContext, replyHandler: (p1: interop.Object, p2: NSError) => void | null): void;

  webExtensionControllerConnectUsingMessagePortForExtensionContextCompletionHandler?(controller: WKWebExtensionController, port: WKWebExtensionMessagePort, extensionContext: WKWebExtensionContext, completionHandler: (p1: NSError) => void | null): void;
}

declare class WKWebExtensionControllerDelegate extends NativeObject implements WKWebExtensionControllerDelegate {
}

declare class WKFindResult extends NSObject implements NSCopying {
  readonly matchFound: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKNavigationAction extends NSObject {
  readonly sourceFrame: WKFrameInfo;

  readonly targetFrame: WKFrameInfo;

  readonly navigationType: interop.Enum<typeof WKNavigationType>;

  readonly request: NSURLRequest;

  readonly shouldPerformDownload: boolean;

  readonly modifierFlags: interop.Enum<typeof UIKeyModifierFlags>;

  readonly buttonNumber: interop.Enum<typeof UIEventButtonMask>;
}

declare class WKWindowFeatures extends NSObject {
  readonly menuBarVisibility: NSNumber;

  readonly statusBarVisibility: NSNumber;

  readonly toolbarsVisibility: NSNumber;

  readonly allowsResizing: NSNumber;

  readonly x: NSNumber;

  readonly y: NSNumber;

  readonly width: NSNumber;

  readonly height: NSNumber;
}

declare class WKWebsiteDataStore extends NSObject implements NSSecureCoding {
  static defaultDataStore(): WKWebsiteDataStore;

  static nonPersistentDataStore(): WKWebsiteDataStore;

  readonly isPersistent: boolean;

  static allWebsiteDataTypes(): NSSet;

  fetchDataRecordsOfTypesCompletionHandler(dataTypes: NSSet, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  removeDataOfTypesForDataRecordsCompletionHandler(dataTypes: NSSet, dataRecords: NSArray<interop.Object> | Array<interop.Object>, completionHandler: () => void): void;

  removeDataOfTypesModifiedSinceCompletionHandler(dataTypes: NSSet, date: NSDate, completionHandler: () => void): void;

  readonly httpCookieStore: WKHTTPCookieStore;

  readonly identifier: NSUUID;

  static dataStoreForIdentifier(identifier: NSUUID): WKWebsiteDataStore;

  static removeDataStoreForIdentifierCompletionHandler(identifier: NSUUID, completionHandler: (p1: NSError) => void | null): void;

  static fetchAllDataStoreIdentifiers(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  get proxyConfigurations(): NSArray;
  set proxyConfigurations(value: NSArray<interop.Object> | Array<interop.Object>);

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class WKWebsiteDataRecord extends NSObject {
  readonly displayName: string;

  readonly dataTypes: NSSet;
}

declare class WKWebViewConfiguration extends NSObject implements NSSecureCoding, NSCopying {
  processPool: WKProcessPool;

  preferences: WKPreferences;

  userContentController: WKUserContentController;

  webExtensionController: WKWebExtensionController;

  websiteDataStore: WKWebsiteDataStore;

  suppressesIncrementalRendering: boolean;

  applicationNameForUserAgent: string;

  allowsAirPlayForMediaPlayback: boolean;

  upgradeKnownHostsToHTTPS: boolean;

  mediaTypesRequiringUserActionForPlayback: interop.Enum<typeof WKAudiovisualMediaTypes>;

  defaultWebpagePreferences: WKWebpagePreferences;

  limitsNavigationsToAppBoundDomains: boolean;

  allowsInlinePredictions: boolean;

  allowsInlineMediaPlayback: boolean;

  selectionGranularity: interop.Enum<typeof WKSelectionGranularity>;

  allowsPictureInPictureMediaPlayback: boolean;

  dataDetectorTypes: interop.Enum<typeof WKDataDetectorTypes>;

  ignoresViewportScaleLimits: boolean;

  setURLSchemeHandlerForURLScheme(urlSchemeHandler: WKURLSchemeHandler | null, urlScheme: string): void;

  urlSchemeHandlerForURLScheme(urlScheme: string): WKURLSchemeHandler;

  supportsAdaptiveImageGlyph: boolean;

  writingToolsBehavior: interop.Enum<typeof UIWritingToolsBehavior>;

  mediaPlaybackRequiresUserAction: boolean;

  mediaPlaybackAllowsAirPlay: boolean;

  requiresUserActionForMediaPlayback: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKWebExtensionWindowConfiguration extends NSObject {
  readonly windowType: interop.Enum<typeof WKWebExtensionWindowType>;

  readonly windowState: interop.Enum<typeof WKWebExtensionWindowState>;

  readonly frame: CGRect;

  readonly tabURLs: NSArray;

  readonly tabs: NSArray;

  readonly shouldBeFocused: boolean;

  readonly shouldBePrivate: boolean;
}

declare class WKWebExtensionDataRecord extends NSObject {
  readonly displayName: string;

  readonly uniqueIdentifier: string;

  readonly containedDataTypes: NSSet;

  readonly errors: NSArray;

  readonly totalSizeInBytes: number;

  sizeInBytesOfTypes(dataTypes: NSSet): number;
}

declare class WKWebExtensionControllerConfiguration extends NSObject implements NSSecureCoding, NSCopying {
  static defaultConfiguration<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static nonPersistentConfiguration<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static configurationWithIdentifier<This extends abstract new (...args: any) => any>(this: This, identifier: NSUUID): InstanceType<This>;

  readonly isPersistent: boolean;

  readonly identifier: NSUUID;

  webViewConfiguration: WKWebViewConfiguration;

  defaultWebsiteDataStore: WKWebsiteDataStore;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKWebExtensionController extends NSObject {
  init(): this;

  initWithConfiguration(configuration: WKWebExtensionControllerConfiguration): this;

  delegate: WKWebExtensionControllerDelegate | null;

  readonly configuration: WKWebExtensionControllerConfiguration;

  loadExtensionContextError(extensionContext: WKWebExtensionContext, error: interop.PointerConvertible): boolean;

  unloadExtensionContextError(extensionContext: WKWebExtensionContext, error: interop.PointerConvertible): boolean;

  extensionContextForExtension(extension: WKWebExtension): WKWebExtensionContext;

  extensionContextForURL(URL: NSURL): WKWebExtensionContext;

  readonly extensions: NSSet;

  readonly extensionContexts: NSSet;

  static readonly allExtensionDataTypes: NSSet;

  fetchDataRecordsOfTypesCompletionHandler(dataTypes: NSSet, completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  fetchDataRecordOfTypesForExtensionContextCompletionHandler(dataTypes: NSSet, extensionContext: WKWebExtensionContext, completionHandler: (p1: WKWebExtensionDataRecord) => void | null): void;

  removeDataOfTypesFromDataRecordsCompletionHandler(dataTypes: NSSet, dataRecords: NSArray<interop.Object> | Array<interop.Object>, completionHandler: () => void): void;

  didOpenWindow(newWindow: WKWebExtensionWindow): void;

  didCloseWindow(closedWindow: WKWebExtensionWindow): void;

  didFocusWindow(focusedWindow: WKWebExtensionWindow | null): void;

  didOpenTab(newTab: WKWebExtensionTab): void;

  didCloseTabWindowIsClosing(closedTab: WKWebExtensionTab, windowIsClosing: boolean): void;

  didActivateTabPreviousActiveTab(activatedTab: WKWebExtensionTab, previousTab: WKWebExtensionTab | null): void;

  didSelectTabs(selectedTabs: NSArray<interop.Object> | Array<interop.Object>): void;

  didDeselectTabs(deselectedTabs: NSArray<interop.Object> | Array<interop.Object>): void;

  didMoveTabFromIndexInWindow(movedTab: WKWebExtensionTab, index: number, oldWindow: WKWebExtensionWindow | null): void;

  didReplaceTabWithTab(oldTab: WKWebExtensionTab, newTab: WKWebExtensionTab): void;

  didChangeTabPropertiesForTab(properties: interop.Enum<typeof WKWebExtensionTabChangedProperties>, changedTab: WKWebExtensionTab): void;
}

declare class WKWebExtensionContext extends NSObject {
  static contextForExtension<This extends abstract new (...args: any) => any>(this: This, extension: WKWebExtension): InstanceType<This>;

  initForExtension(extension: WKWebExtension): this;

  readonly webExtension: WKWebExtension;

  readonly webExtensionController: WKWebExtensionController;

  readonly isLoaded: boolean;

  readonly errors: NSArray;

  baseURL: NSURL;

  uniqueIdentifier: string;

  isInspectable: boolean;

  inspectionName: string;

  unsupportedAPIs: NSSet;

  readonly webViewConfiguration: WKWebViewConfiguration;

  readonly optionsPageURL: NSURL;

  readonly overrideNewTabPageURL: NSURL;

  get grantedPermissions(): NSDictionary;
  set grantedPermissions(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get grantedPermissionMatchPatterns(): NSDictionary;
  set grantedPermissionMatchPatterns(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get deniedPermissions(): NSDictionary;
  set deniedPermissions(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get deniedPermissionMatchPatterns(): NSDictionary;
  set deniedPermissionMatchPatterns(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  hasRequestedOptionalAccessToAllHosts: boolean;

  hasAccessToPrivateData: boolean;

  readonly currentPermissions: NSSet;

  readonly currentPermissionMatchPatterns: NSSet;

  hasPermission(permission: string): boolean;

  hasPermissionInTab(permission: string, tab: WKWebExtensionTab | null): boolean;

  hasAccessToURL(url: NSURL): boolean;

  hasAccessToURLInTab(url: NSURL, tab: WKWebExtensionTab | null): boolean;

  readonly hasAccessToAllURLs: boolean;

  readonly hasAccessToAllHosts: boolean;

  readonly hasInjectedContent: boolean;

  hasInjectedContentForURL(url: NSURL): boolean;

  readonly hasContentModificationRules: boolean;

  permissionStatusForPermission(permission: string): interop.Enum<typeof WKWebExtensionContextPermissionStatus>;

  permissionStatusForPermissionInTab(permission: string, tab: WKWebExtensionTab | null): interop.Enum<typeof WKWebExtensionContextPermissionStatus>;

  setPermissionStatusForPermission(status: interop.Enum<typeof WKWebExtensionContextPermissionStatus>, permission: string): void;

  setPermissionStatusForPermissionExpirationDate(status: interop.Enum<typeof WKWebExtensionContextPermissionStatus>, permission: string, expirationDate: NSDate | null): void;

  permissionStatusForURL(url: NSURL): interop.Enum<typeof WKWebExtensionContextPermissionStatus>;

  permissionStatusForURLInTab(url: NSURL, tab: WKWebExtensionTab | null): interop.Enum<typeof WKWebExtensionContextPermissionStatus>;

  setPermissionStatusForURL(status: interop.Enum<typeof WKWebExtensionContextPermissionStatus>, url: NSURL): void;

  setPermissionStatusForURLExpirationDate(status: interop.Enum<typeof WKWebExtensionContextPermissionStatus>, url: NSURL, expirationDate: NSDate | null): void;

  permissionStatusForMatchPattern(pattern: WKWebExtensionMatchPattern): interop.Enum<typeof WKWebExtensionContextPermissionStatus>;

  permissionStatusForMatchPatternInTab(pattern: WKWebExtensionMatchPattern, tab: WKWebExtensionTab | null): interop.Enum<typeof WKWebExtensionContextPermissionStatus>;

  setPermissionStatusForMatchPattern(status: interop.Enum<typeof WKWebExtensionContextPermissionStatus>, pattern: WKWebExtensionMatchPattern): void;

  setPermissionStatusForMatchPatternExpirationDate(status: interop.Enum<typeof WKWebExtensionContextPermissionStatus>, pattern: WKWebExtensionMatchPattern, expirationDate: NSDate | null): void;

  loadBackgroundContentWithCompletionHandler(completionHandler: (p1: NSError) => void | null): void;

  actionForTab(tab: WKWebExtensionTab | null): WKWebExtensionAction;

  performActionForTab(tab: WKWebExtensionTab | null): void;

  readonly commands: NSArray;

  performCommand(command: WKWebExtensionCommand): void;

  performCommandForKeyCommand(keyCommand: UIKeyCommand): boolean;

  menuItemsForTab(tab: WKWebExtensionTab): NSArray;

  userGesturePerformedInTab(tab: WKWebExtensionTab): void;

  hasActiveUserGestureInTab(tab: WKWebExtensionTab): boolean;

  clearUserGestureInTab(tab: WKWebExtensionTab): void;

  readonly openWindows: NSArray;

  readonly focusedWindow: WKWebExtensionWindow;

  readonly openTabs: NSSet;

  didOpenWindow(newWindow: WKWebExtensionWindow): void;

  didCloseWindow(closedWindow: WKWebExtensionWindow): void;

  didFocusWindow(focusedWindow: WKWebExtensionWindow | null): void;

  didOpenTab(newTab: WKWebExtensionTab): void;

  didCloseTabWindowIsClosing(closedTab: WKWebExtensionTab, windowIsClosing: boolean): void;

  didActivateTabPreviousActiveTab(activatedTab: WKWebExtensionTab, previousTab: WKWebExtensionTab | null): void;

  didSelectTabs(selectedTabs: NSArray<interop.Object> | Array<interop.Object>): void;

  didDeselectTabs(deselectedTabs: NSArray<interop.Object> | Array<interop.Object>): void;

  didMoveTabFromIndexInWindow(movedTab: WKWebExtensionTab, index: number, oldWindow: WKWebExtensionWindow | null): void;

  didReplaceTabWithTab(oldTab: WKWebExtensionTab, newTab: WKWebExtensionTab): void;

  didChangeTabPropertiesForTab(properties: interop.Enum<typeof WKWebExtensionTabChangedProperties>, changedTab: WKWebExtensionTab): void;
}

declare class WKWebpagePreferences extends NSObject {
  preferredContentMode: interop.Enum<typeof WKContentMode>;

  allowsContentJavaScript: boolean;

  isLockdownModeEnabled: boolean;

  preferredHTTPSNavigationPolicy: interop.Enum<typeof WKWebpagePreferencesUpgradeToHTTPSPolicy>;
}

declare class WKWebExtensionCommand extends NSObject {
  readonly webExtensionContext: WKWebExtensionContext | null;

  readonly identifier: string;

  readonly title: string;

  activationKey: string;

  modifierFlags: interop.Enum<typeof UIKeyModifierFlags>;

  readonly menuItem: UIMenuElement;

  readonly keyCommand: UIKeyCommand;
}

declare class WKUserScript extends NSObject implements NSCopying {
  readonly source: string;

  readonly injectionTime: interop.Enum<typeof WKUserScriptInjectionTime>;

  readonly isForMainFrameOnly: boolean;

  initWithSourceInjectionTimeForMainFrameOnly(source: string, injectionTime: interop.Enum<typeof WKUserScriptInjectionTime>, forMainFrameOnly: boolean): this;

  initWithSourceInjectionTimeForMainFrameOnlyInContentWorld(source: string, injectionTime: interop.Enum<typeof WKUserScriptInjectionTime>, forMainFrameOnly: boolean, contentWorld: WKContentWorld): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKSnapshotConfiguration extends NSObject implements NSCopying {
  rect: CGRect;

  snapshotWidth: NSNumber;

  afterScreenUpdates: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKProcessPool extends NSObject implements NSSecureCoding {
  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class WKPreviewElementInfo extends NSObject implements NSCopying {
  readonly linkURL: NSURL;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKNavigationResponse extends NSObject {
  readonly isForMainFrame: boolean;

  readonly response: NSURLResponse;

  readonly canShowMIMEType: boolean;
}

declare class WKNavigation extends NSObject {
  readonly effectiveContentMode: interop.Enum<typeof WKContentMode>;
}

declare class WKHTTPCookieStore extends NSObject {
  getAllCookies(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;

  setCookieCompletionHandler(cookie: NSHTTPCookie, completionHandler: () => void | null): void;

  deleteCookieCompletionHandler(cookie: NSHTTPCookie, completionHandler: () => void | null): void;

  addObserver(observer: WKHTTPCookieStoreObserver): void;

  removeObserver(observer: WKHTTPCookieStoreObserver): void;

  setCookiePolicyCompletionHandler(policy: interop.Enum<typeof WKCookiePolicy>, completionHandler: () => void | null): void;

  getCookiePolicy(completionHandler: (p1: interop.Enum<typeof WKCookiePolicy>) => void): void;
}

declare class WKFrameInfo extends NSObject implements NSCopying {
  readonly isMainFrame: boolean;

  readonly request: NSURLRequest;

  readonly securityOrigin: WKSecurityOrigin;

  readonly webView: WKWebView | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKOpenPanelParameters extends NSObject {
  readonly allowsMultipleSelection: boolean;

  readonly allowsDirectories: boolean;
}

declare class WKScriptMessage extends NSObject {
  readonly body: interop.Object;

  readonly webView: WKWebView;

  readonly frameInfo: WKFrameInfo;

  readonly name: string;

  readonly world: WKContentWorld;
}

declare class WKPDFConfiguration extends NSObject implements NSCopying {
  rect: CGRect;

  allowTransparentBackground: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKBackForwardListItem extends NSObject {
  readonly URL: NSURL;

  readonly title: string;

  readonly initialURL: NSURL;
}

declare class WKPreferences extends NSObject implements NSSecureCoding {
  minimumFontSize: number;

  javaScriptCanOpenWindowsAutomatically: boolean;

  isFraudulentWebsiteWarningEnabled: boolean;

  shouldPrintBackgrounds: boolean;

  isTextInteractionEnabled: boolean;

  isSiteSpecificQuirksModeEnabled: boolean;

  isElementFullscreenEnabled: boolean;

  inactiveSchedulingPolicy: interop.Enum<typeof WKInactiveSchedulingPolicy>;

  javaScriptEnabled: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class WKContentRuleListStore extends NSObject {
  static defaultStore<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static storeWithURL<This extends abstract new (...args: any) => any>(this: This, url: NSURL): InstanceType<This>;

  compileContentRuleListForIdentifierEncodedContentRuleListCompletionHandler(identifier: string, encodedContentRuleList: string, completionHandler: (p1: WKContentRuleList, p2: NSError) => void): void;

  lookUpContentRuleListForIdentifierCompletionHandler(identifier: string, completionHandler: (p1: WKContentRuleList, p2: NSError) => void): void;

  removeContentRuleListForIdentifierCompletionHandler(identifier: string, completionHandler: (p1: NSError) => void): void;

  getAvailableContentRuleListIdentifiers(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class WKBackForwardList extends NSObject {
  readonly currentItem: WKBackForwardListItem;

  readonly backItem: WKBackForwardListItem;

  readonly forwardItem: WKBackForwardListItem;

  itemAtIndex(index: number): WKBackForwardListItem;

  readonly backList: NSArray;

  readonly forwardList: NSArray;
}

declare class WKWebExtension extends NSObject {
  static extensionWithAppExtensionBundleCompletionHandler(appExtensionBundle: NSBundle, completionHandler: (p1: WKWebExtension, p2: NSError) => void | null): void;

  static extensionWithResourceBaseURLCompletionHandler(resourceBaseURL: NSURL, completionHandler: (p1: WKWebExtension, p2: NSError) => void | null): void;

  readonly errors: NSArray;

  readonly manifest: NSDictionary;

  readonly manifestVersion: number;

  supportsManifestVersion(manifestVersion: number): boolean;

  readonly defaultLocale: NSLocale;

  readonly displayName: string;

  readonly displayShortName: string;

  readonly displayVersion: string;

  readonly displayDescription: string;

  readonly displayActionLabel: string;

  readonly version: string;

  iconForSize(size: CGSize): UIImage;

  actionIconForSize(size: CGSize): UIImage;

  readonly requestedPermissions: NSSet;

  readonly optionalPermissions: NSSet;

  readonly requestedPermissionMatchPatterns: NSSet;

  readonly optionalPermissionMatchPatterns: NSSet;

  readonly allRequestedMatchPatterns: NSSet;

  readonly hasBackgroundContent: boolean;

  readonly hasPersistentBackgroundContent: boolean;

  readonly hasInjectedContent: boolean;

  readonly hasOptionsPage: boolean;

  readonly hasOverrideNewTabPage: boolean;

  readonly hasCommands: boolean;

  readonly hasContentModificationRules: boolean;
}

declare class WKWebExtensionAction extends NSObject {
  readonly webExtensionContext: WKWebExtensionContext | null;

  readonly associatedTab: WKWebExtensionTab;

  iconForSize(size: CGSize): UIImage;

  readonly label: string;

  readonly badgeText: string;

  hasUnreadBadgeText: boolean;

  inspectionName: string;

  readonly isEnabled: boolean;

  readonly menuItems: NSArray;

  readonly presentsPopup: boolean;

  readonly popupViewController: UIViewController;

  readonly popupWebView: WKWebView;

  closePopup(): void;
}

declare class WKContentRuleList extends NSObject {
  readonly identifier: string;
}

declare class WKContentWorld extends NSObject {
  static readonly pageWorld: WKContentWorld;

  static readonly defaultClientWorld: WKContentWorld;

  static worldWithName(name: string): WKContentWorld;

  readonly name: string;
}

declare class WKFindConfiguration extends NSObject implements NSCopying {
  backwards: boolean;

  caseSensitive: boolean;

  wraps: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKUserContentController extends NSObject implements NSSecureCoding {
  readonly userScripts: NSArray;

  addUserScript(userScript: WKUserScript): void;

  removeAllUserScripts(): void;

  addScriptMessageHandlerContentWorldName(scriptMessageHandler: WKScriptMessageHandler, world: WKContentWorld, name: string): void;

  addScriptMessageHandlerWithReplyContentWorldName(scriptMessageHandlerWithReply: WKScriptMessageHandlerWithReply, contentWorld: WKContentWorld, name: string): void;

  addScriptMessageHandlerName(scriptMessageHandler: WKScriptMessageHandler, name: string): void;

  removeScriptMessageHandlerForNameContentWorld(name: string, contentWorld: WKContentWorld): void;

  removeScriptMessageHandlerForName(name: string): void;

  removeAllScriptMessageHandlersFromContentWorld(contentWorld: WKContentWorld): void;

  removeAllScriptMessageHandlers(): void;

  addContentRuleList(contentRuleList: WKContentRuleList): void;

  removeContentRuleList(contentRuleList: WKContentRuleList): void;

  removeAllContentRuleLists(): void;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class WKSecurityOrigin extends NSObject {
  readonly protocol: string;

  readonly host: string;

  readonly port: number;
}

declare class WKDownload extends NSObject implements NSProgressReporting {
  readonly originalRequest: NSURLRequest;

  readonly webView: WKWebView | null;

  delegate: WKDownloadDelegate | null;

  readonly isUserInitiated: boolean;

  readonly originatingFrame: WKFrameInfo;

  cancel(completionHandler: (p1: NSData) => void | null): void;

  readonly progress: NSProgress;

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

declare class WKWebExtensionMessagePort extends NSObject {
  readonly applicationIdentifier: string;

  messageHandler: (p1: interop.Object, p2: NSError) => void | null;

  disconnectHandler: (p1: NSError) => void | null;

  readonly isDisconnected: boolean;

  sendMessageCompletionHandler(message: interop.Object | null, completionHandler: (p1: NSError) => void | null): void;

  disconnect(): void;

  disconnectWithError(error: NSError | null): void;
}

declare class WKContextMenuElementInfo extends NSObject {
  readonly linkURL: NSURL;
}

declare class WKWebExtensionTabConfiguration extends NSObject {
  readonly window: WKWebExtensionWindow;

  readonly index: number;

  readonly parentTab: WKWebExtensionTab;

  readonly url: NSURL;

  readonly shouldBeActive: boolean;

  readonly shouldAddToSelection: boolean;

  readonly shouldBePinned: boolean;

  readonly shouldBeMuted: boolean;

  readonly shouldReaderModeBeActive: boolean;
}

declare class WKWebView extends UIView {
  readonly configuration: WKWebViewConfiguration;

  navigationDelegate: WKNavigationDelegate;

  UIDelegate: WKUIDelegate;

  readonly backForwardList: WKBackForwardList;

  initWithFrameConfiguration(frame: CGRect, configuration: WKWebViewConfiguration): this;

  initWithCoder(coder: NSCoder): this;

  loadRequest(request: NSURLRequest): WKNavigation;

  loadFileURLAllowingReadAccessToURL(URL: NSURL, readAccessURL: NSURL): WKNavigation;

  loadHTMLStringBaseURL(string: string, baseURL: NSURL | null): WKNavigation;

  loadDataMIMETypeCharacterEncodingNameBaseURL(data: NSData, MIMEType: string, characterEncodingName: string, baseURL: NSURL): WKNavigation;

  goToBackForwardListItem(item: WKBackForwardListItem): WKNavigation;

  readonly title: string;

  readonly URL: NSURL;

  readonly isLoading: boolean;

  readonly estimatedProgress: number;

  readonly hasOnlySecureContent: boolean;

  readonly serverTrust: interop.Pointer;

  readonly canGoBack: boolean;

  readonly canGoForward: boolean;

  goBack(): WKNavigation;

  goForward(): WKNavigation;

  reload(): WKNavigation;

  reloadFromOrigin(): WKNavigation;

  stopLoading(): void;

  evaluateJavaScriptCompletionHandler(javaScriptString: string, completionHandler: (p1: interop.Object, p2: NSError) => void | null): void;

  evaluateJavaScriptInFrameInContentWorldCompletionHandler(javaScriptString: string, frame: WKFrameInfo | null, contentWorld: WKContentWorld, completionHandler: (p1: interop.Object, p2: NSError) => void | null): void;

  callAsyncJavaScriptArgumentsInFrameInContentWorldCompletionHandler(functionBody: string, arguments$: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, frame: WKFrameInfo | null, contentWorld: WKContentWorld, completionHandler: (p1: interop.Object, p2: NSError) => void | null): void;

  closeAllMediaPresentationsWithCompletionHandler(completionHandler: () => void | null): void;

  closeAllMediaPresentations(): void;

  pauseAllMediaPlaybackWithCompletionHandler(completionHandler: () => void | null): void;

  pauseAllMediaPlayback(completionHandler: () => void | null): void;

  setAllMediaPlaybackSuspendedCompletionHandler(suspended: boolean, completionHandler: () => void | null): void;

  resumeAllMediaPlayback(completionHandler: () => void | null): void;

  suspendAllMediaPlayback(completionHandler: () => void | null): void;

  requestMediaPlaybackStateWithCompletionHandler(completionHandler: (p1: interop.Enum<typeof WKMediaPlaybackState>) => void): void;

  requestMediaPlaybackState(completionHandler: (p1: interop.Enum<typeof WKMediaPlaybackState>) => void): void;

  readonly cameraCaptureState: interop.Enum<typeof WKMediaCaptureState>;

  readonly microphoneCaptureState: interop.Enum<typeof WKMediaCaptureState>;

  setCameraCaptureStateCompletionHandler(state: interop.Enum<typeof WKMediaCaptureState>, completionHandler: () => void | null): void;

  setMicrophoneCaptureStateCompletionHandler(state: interop.Enum<typeof WKMediaCaptureState>, completionHandler: () => void | null): void;

  takeSnapshotWithConfigurationCompletionHandler(snapshotConfiguration: WKSnapshotConfiguration | null, completionHandler: (p1: UIImage, p2: NSError) => void | null): void;

  createPDFWithConfigurationCompletionHandler(pdfConfiguration: WKPDFConfiguration | null, completionHandler: (p1: NSData, p2: NSError) => void | null): void;

  createWebArchiveDataWithCompletionHandler(completionHandler: (p1: NSData, p2: NSError) => void | null): void;

  allowsBackForwardNavigationGestures: boolean;

  customUserAgent: string;

  allowsLinkPreview: boolean;

  readonly scrollView: UIScrollView;

  pageZoom: number;

  findStringWithConfigurationCompletionHandler(string: string, configuration: WKFindConfiguration | null, completionHandler: (p1: WKFindResult) => void): void;

  static handlesURLScheme(urlScheme: string): boolean;

  startDownloadUsingRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: WKDownload) => void): void;

  resumeDownloadFromResumeDataCompletionHandler(resumeData: NSData, completionHandler: (p1: WKDownload) => void): void;

  mediaType: string;

  interactionState: interop.Object;

  loadSimulatedRequestResponseResponseData(request: NSURLRequest, response: NSURLResponse, data: NSData): WKNavigation;

  loadSimulatedRequestWithResponseResponseData(request: NSURLRequest, response: NSURLResponse, data: NSData): WKNavigation;

  loadFileRequestAllowingReadAccessToURL(request: NSURLRequest, readAccessURL: NSURL): WKNavigation;

  loadSimulatedRequestResponseHTMLString(request: NSURLRequest, string: string): WKNavigation;

  loadSimulatedRequestWithResponseHTMLString(request: NSURLRequest, string: string): WKNavigation;

  readonly themeColor: UIColor;

  underPageBackgroundColor: UIColor;

  readonly fullscreenState: interop.Enum<typeof WKFullscreenState>;

  readonly minimumViewportInset: UIEdgeInsets;

  readonly maximumViewportInset: UIEdgeInsets;

  setMinimumViewportInsetMaximumViewportInset(minimumViewportInset: UIEdgeInsets, maximumViewportInset: UIEdgeInsets): void;

  isFindInteractionEnabled: boolean;

  readonly findInteraction: UIFindInteraction;

  isInspectable: boolean;

  readonly isWritingToolsActive: boolean;

  readonly certificateChain: NSArray;
}

declare class WKWebExtensionMatchPattern extends NSObject implements NSSecureCoding, NSCopying {
  static registerCustomURLScheme(urlScheme: string): void;

  static allURLsMatchPattern<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static allHostsAndSchemesMatchPattern<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static matchPatternWithString<This extends abstract new (...args: any) => any>(this: This, string: string): InstanceType<This>;

  static matchPatternWithSchemeHostPath<This extends abstract new (...args: any) => any>(this: This, scheme: string, host: string, path: string): InstanceType<This>;

  initWithStringError(string: string, error: interop.PointerConvertible): this;

  initWithSchemeHostPathError(scheme: string, host: string, path: string, error: interop.PointerConvertible): this;

  readonly string: string;

  readonly scheme: string;

  readonly host: string;

  readonly path: string;

  readonly matchesAllURLs: boolean;

  readonly matchesAllHosts: boolean;

  matchesURL(url: NSURL | null): boolean;

  matchesURLOptions(url: NSURL | null, options: interop.Enum<typeof WKWebExtensionMatchPatternOptions>): boolean;

  matchesPattern(pattern: WKWebExtensionMatchPattern | null): boolean;

  matchesPatternOptions(pattern: WKWebExtensionMatchPattern | null, options: interop.Enum<typeof WKWebExtensionMatchPatternOptions>): boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

