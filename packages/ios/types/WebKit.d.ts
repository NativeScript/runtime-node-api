/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./UIKit.d.ts" />

declare const WKPreviewActionItemIdentifierShare: string;

declare const WKPreviewActionItemIdentifierAddToReadingList: string;

declare const WKWebsiteDataTypeMediaKeys: string;

declare const WKWebsiteDataTypeFileSystem: string;

declare const WKWebsiteDataTypeIndexedDBDatabases: string;

declare const WKWebsiteDataTypeServiceWorkerRegistrations: string;

declare const WKWebsiteDataTypeLocalStorage: string;

declare const WKWebsiteDataTypeCookies: string;

declare const WKWebsiteDataTypeMemoryCache: string;

declare const WKWebsiteDataTypeDiskCache: string;

declare const WKWebsiteDataTypeFetchCache: string;

declare const WKPreviewActionItemIdentifierOpen: string;

declare const WKPreviewActionItemIdentifierCopy: string;

declare const WKWebsiteDataTypeWebSQLDatabases: string;

declare const WKErrorDomain: string;

declare const WKWebsiteDataTypeSessionStorage: string;

declare const NSReadAccessURLDocumentOption: string;

declare const WKWebsiteDataTypeHashSalt: string;

declare const WKWebsiteDataTypeSearchFieldRecentSearches: string;

declare const WKWebsiteDataTypeOfflineWebApplicationCache: string;

declare const WKAudiovisualMediaTypes: {
  None: 0,
  Audio: 1,
  Video: 2,
  All: -1,
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

declare const WKMediaCaptureType: {
  Camera: 0,
  Microphone: 1,
  CameraAndMicrophone: 2,
};

declare const WKDownloadRedirectPolicy: {
  Cancel: 0,
  Allow: 1,
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
}

declare class WKDownloadDelegate extends NativeObject implements WKDownloadDelegate {
}

declare interface WKPreviewActionItem extends UIPreviewActionItem {
  readonly identifier: string;
}

declare class WKPreviewActionItem extends NativeObject implements WKPreviewActionItem {
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
}

declare class WKWebViewConfiguration extends NSObject implements NSSecureCoding, NSCopying {
  processPool: WKProcessPool;

  preferences: WKPreferences;

  userContentController: WKUserContentController;

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

  mediaPlaybackRequiresUserAction: boolean;

  mediaPlaybackAllowsAirPlay: boolean;

  requiresUserActionForMediaPlayback: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
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

declare class WKWebpagePreferences extends NSObject {
  preferredContentMode: interop.Enum<typeof WKContentMode>;

  allowsContentJavaScript: boolean;

  isLockdownModeEnabled: boolean;
}

declare class WKWebsiteDataRecord extends NSObject {
  readonly displayName: string;

  readonly dataTypes: NSSet;
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

declare class WKContextMenuElementInfo extends NSObject {
  readonly linkURL: NSURL;
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

  createWebArchiveDataWithCompletionHandler(completionHandler: (p1: NSData, p2: NSError) => void): void;

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

