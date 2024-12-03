/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./AppKit.d.ts" />
/// <reference path="./Runtime.d.ts" />
/// <reference path="./Foundation.d.ts" />

declare const WebViewDidChangeSelectionNotification: string;

declare const WebViewDidChangeTypingStyleNotification: string;

declare const WebViewDidEndEditingNotification: string;

declare const WebViewDidBeginEditingNotification: string;

declare const WebViewProgressFinishedNotification: string;

declare const WebViewProgressEstimateChangedNotification: string;

declare const WebViewProgressStartedNotification: string;

declare const WebElementLinkTargetFrameKey: string;

declare const WebElementIsSelectedKey: string;

declare const WebElementImageRectKey: string;

declare const WebElementImageKey: string;

declare const WebElementDOMNodeKey: string;

declare const WebMenuItemPDFPreviousPage: number;

declare const WebMenuItemPDFNextPage: number;

declare const WebMenuItemPDFContinuous: number;

declare const WebMenuItemPDFSinglePage: number;

declare const WebMenuItemPDFAutoSize: number;

declare const WebMenuItemPDFZoomOut: number;

declare const WebMenuItemPDFZoomIn: number;

declare const WebMenuItemPDFActualSize: number;

declare const WebMenuItemTagOpenWithDefaultApplication: number;

declare const WebMenuItemTagLookUpInDictionary: number;

declare const WebMenuItemTagSearchInSpotlight: number;

declare const WebMenuItemTagIgnoreSpelling: number;

declare const WebMenuItemTagPaste: number;

declare const WebMenuItemTagCut: number;

declare const WebMenuItemTagReload: number;

declare const WebMenuItemTagGoForward: number;

declare const WebMenuItemTagOpenFrameInNewWindow: number;

declare const WebMenuItemTagCopyImageToClipboard: number;

declare const WebMenuItemTagOpenImageInNewWindow: number;

declare const WebMenuItemTagOpenLinkInNewWindow: number;

declare const WebActionModifierFlagsKey: string;

declare const WebActionButtonKey: string;

declare const WebActionElementKey: string;

declare const WebActionNavigationTypeKey: string;

declare const WebPlugInShouldLoadMainResourceKey: string;

declare const WebPlugInContainingElementKey: string;

declare const WebPlugInBaseURLKey: string;

declare const WebKitErrorBlockedPlugInVersion: number;

declare const WebKitErrorCannotLoadPlugIn: number;

declare const WebKitErrorMIMETypeKey: string;

declare const WebElementLinkURLKey: string;

declare const WebKitErrorDomain: string;

declare const WebHistoryLoadedNotification: string;

declare const WebHistoryItemsRemovedNotification: string;

declare const DOM_FIRST_ORDERED_NODE_TYPE: number;

declare const DOM_ANY_UNORDERED_NODE_TYPE: number;

declare const DOM_ORDERED_NODE_SNAPSHOT_TYPE: number;

declare const DOM_UNORDERED_NODE_SNAPSHOT_TYPE: number;

declare const DOM_ORDERED_NODE_ITERATOR_TYPE: number;

declare const DOM_UNORDERED_NODE_ITERATOR_TYPE: number;

declare const DOM_BOOLEAN_TYPE: number;

declare const DOM_STRING_TYPE: number;

declare const DOM_SHOW_DOCUMENT_FRAGMENT: number;

declare const DOM_SHOW_DOCUMENT_TYPE: number;

declare const DOM_SHOW_DOCUMENT: number;

declare const DOM_SHOW_COMMENT: number;

declare const DOM_SHOW_ENTITY: number;

declare const DOM_SHOW_ENTITY_REFERENCE: number;

declare const DOM_SHOW_CDATA_SECTION: number;

declare const DOM_SHOW_ALL: number;

declare const DOM_FILTER_SKIP: number;

declare const DOM_FILTER_REJECT: number;

declare const DOM_DOM_DELTA_PAGE: number;

declare const DOM_VERTICAL: number;

declare const DOM_KEY_LOCATION_LEFT: number;

declare const DOM_KEY_LOCATION_STANDARD: number;

declare const DOM_BUBBLING_PHASE: number;

declare const DOM_AT_TARGET: number;

declare const DOM_CAPTURING_PHASE: number;

declare const DOM_NONE: number;

declare const DOM_NODE_BEFORE_AND_AFTER: number;

declare const DOM_NODE_AFTER: number;

declare const DOM_END_TO_END: number;

declare const DOM_START_TO_END: number;

declare const DOM_CSS_VMAX: number;

declare const DOM_CSS_VW: number;

declare const DOM_CSS_RGBCOLOR: number;

declare const DOM_CSS_ATTR: number;

declare const DOM_CSS_IDENT: number;

declare const DOM_CSS_URI: number;

declare const DOM_CSS_DIMENSION: number;

declare const DOM_CSS_KHZ: number;

declare const DOM_CSS_S: number;

declare const DOM_CSS_RAD: number;

declare const DOM_CSS_DEG: number;

declare const DOM_CSS_MM: number;

declare const DOM_CSS_CM: number;

declare const DOM_CSS_EXS: number;

declare const DOM_CSS_PERCENTAGE: number;

declare const DOM_CSS_CUSTOM: number;

declare const DOM_CSS_VALUE_LIST: number;

declare const DOM_CSS_INHERIT: number;

declare const DOM_WEBKIT_KEYFRAME_RULE: number;

declare const DOM_SUPPORTS_RULE: number;

declare const DOM_NAMESPACE_RULE: number;

declare const DOM_PAGE_RULE: number;

declare const DOM_MEDIA_RULE: number;

declare const DOM_IMPORT_RULE: number;

declare const DOM_CHARSET_RULE: number;

declare const DOM_UNKNOWN_RULE: number;

declare const DOM_ALLOW_KEYBOARD_INPUT: number;

declare const DOM_DOCUMENT_POSITION_DISCONNECTED: number;

declare const DOM_DOCUMENT_TYPE_NODE: number;

declare const DOM_DOCUMENT_NODE: number;

declare const DOM_COMMENT_NODE: number;

declare const DOM_PROCESSING_INSTRUCTION_NODE: number;

declare const DOM_ENTITY_NODE: number;

declare const DOM_ENTITY_REFERENCE_NODE: number;

declare const DOM_CDATA_SECTION_NODE: number;

declare const DOM_TEXT_NODE: number;

declare const WKWebsiteDataTypeMediaKeys: string;

declare const WKWebsiteDataTypeWebSQLDatabases: string;

declare const WKWebsiteDataTypeLocalStorage: string;

declare const DOMException$: string;

declare const WKWebsiteDataTypeSessionStorage: string;

declare const WKWebsiteDataTypeCookies: string;

declare const WKWebsiteDataTypeMemoryCache: string;

declare const WKWebsiteDataTypeFetchCache: string;

declare const WebMenuItemTagStop: number;

declare const DOM_NOTATION_NODE: number;

declare const DOM_DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;

declare const WebActionOriginalURLKey: string;

declare const DOMEventException: string;

declare const WebMenuItemTagDownloadLinkToDisk: number;

declare const DOM_CSS_COUNTER: number;

declare const DOM_CSS_PT: number;

declare const WebMenuItemTagLearnSpelling: number;

declare const WebElementImageURLKey: string;

declare const DOM_CSS_PRIMITIVE_VALUE: number;

declare const DOM_CSS_PC: number;

declare const WebKitErrorCannotShowMIMEType: number;

declare const WebHistoryItemChangedNotification: string;

declare const WebKitErrorFrameLoadInterruptedByPolicyChange: number;

declare const DOM_KEY_LOCATION_RIGHT: number;

declare const DOM_DOCUMENT_POSITION_CONTAINS: number;

declare const DOM_CSS_HZ: number;

declare const DOM_ADDITION: number;

declare const DOM_CSS_GRAD: number;

declare const WebKitErrorPlugInPageURLStringKey: string;

declare const DOM_END_TO_START: number;

declare const DOM_CSS_VMIN: number;

declare const DOM_REMOVAL: number;

declare const WebViewDidChangeNotification: string;

declare const WebPlugInAttributesKey: string;

declare const DOM_SHOW_ATTRIBUTE: number;

declare const DOM_START_TO_START: number;

declare const DOM_BOTH: number;

declare const WKWebsiteDataTypeDiskCache: string;

declare const DOMRangeException: string;

declare const WebHistoryAllItemsRemovedNotification: string;

declare const DOM_DOCUMENT_POSITION_FOLLOWING: number;

declare const WebKitErrorCannotShowURL: number;

declare const DOM_WEBKIT_REGION_RULE: number;

declare const DOM_DOM_DELTA_PIXEL: number;

declare const WebMenuItemTagNoGuessesFound: number;

declare const DOM_CSS_PX: number;

declare const DOM_STYLE_RULE: number;

declare const DOM_FONT_FACE_RULE: number;

declare const DOM_NODE_INSIDE: number;

declare const DOM_DOCUMENT_POSITION_PRECEDING: number;

declare const DOM_CSS_STRING: number;

declare const WebMenuItemTagCopy: number;

declare const WKWebsiteDataTypeOfflineWebApplicationCache: string;

declare const WebPreferencesChangedNotification: string;

declare const DOM_FILTER_ACCEPT: number;

declare const DOM_WEBKIT_KEYFRAMES_RULE: number;

declare const WebHistorySavedNotification: string;

declare const DOM_CSS_UNKNOWN: number;

declare const DOM_ATTRIBUTE_NODE: number;

declare const DOM_SHOW_TEXT: number;

declare const WKWebsiteDataTypeSearchFieldRecentSearches: string;

declare const WebHistoryItemsAddedNotification: string;

declare const WebMenuItemTagSearchWeb: number;

declare const DOM_KEYFRAMES_RULE: number;

declare const DOM_CSS_RECT: number;

declare const NSReadAccessURLDocumentOption: string;

declare const DOM_DOCUMENT_POSITION_CONTAINED_BY: number;

declare const WebElementFrameKey: string;

declare const WebMenuItemTagOther: number;

declare const DOM_DOCUMENT_FRAGMENT_NODE: number;

declare const WebKitErrorCannotFindPlugIn: number;

declare const WebHistoryItemsKey: string;

declare const DOM_CSS_MS: number;

declare const WebPlugInContainerKey: string;

declare const WebElementLinkLabelKey: string;

declare const DOM_ANY_TYPE: number;

declare const WebElementImageAltStringKey: string;

declare const DOM_KEY_LOCATION_NUMPAD: number;

declare const DOM_HORIZONTAL: number;

declare const DOM_ELEMENT_NODE: number;

declare const WKWebsiteDataTypeServiceWorkerRegistrations: string;

declare const WebKitErrorJavaUnavailable: number;

declare const DOM_NODE_BEFORE: number;

declare const WebMenuItemTagSpellingGuess: number;

declare const DOM_CSS_NUMBER: number;

declare const DOM_MODIFICATION: number;

declare const DOM_NUMBER_TYPE: number;

declare const WebMenuItemPDFFacingPages: number;

declare const DOMXPathException: string;

declare const DOM_KEYFRAME_RULE: number;

declare const WKWebsiteDataTypeHashSalt: string;

declare const DOM_CSS_VH: number;

declare const WKWebsiteDataTypeFileSystem: string;

declare const DOM_CSS_EMS: number;

declare const WebMenuItemTagCopyLinkToClipboard: number;

declare const DOM_CSS_IN: number;

declare const WebMenuItemTagGoBack: number;

declare const WebArchivePboardType: string;

declare const WebMenuItemTagDownloadImageToDisk: number;

declare const DOM_SHOW_NOTATION: number;

declare const DOM_SHOW_PROCESSING_INSTRUCTION: number;

declare const WKErrorDomain: string;

declare const WKWebsiteDataTypeIndexedDBDatabases: string;

declare const DOM_SHOW_ELEMENT: number;

declare const DOM_DOM_DELTA_LINE: number;

declare const WebElementLinkTitleKey: string;

declare const WebKitErrorPlugInNameKey: string;

declare const DOMEventExceptionCode: {
  DOM_UNSPECIFIED_EVENT_TYPE_ERR: 0,
};

declare const WebDragDestinationAction: {
  None: 0,
  DHTML: 1,
  Edit: 2,
  Load: 4,
  Any: 4294967295,
};

declare const WebCacheModel: {
  DocumentViewer: 0,
  DocumentBrowser: 1,
  PrimaryWebBrowser: 2,
};

declare const WebNavigationType: {
  LinkClicked: 0,
  FormSubmitted: 1,
  BackForward: 2,
  Reload: 3,
  FormResubmitted: 4,
  Other: 5,
};

declare const WebViewInsertAction: {
  Typed: 0,
  Pasted: 1,
  Dropped: 2,
};

declare const DOMXPathExceptionCode: {
  INVALID_EXPRESSION_: 51,
  TYPE_: 52,
};

declare const DOMRangeExceptionCode: {
  BAD_BOUNDARYPOINTS_: 1,
  INVALID_NODE_TYPE_: 2,
};

declare const DOMExceptionCode: {
  INDEX_SIZE_: 1,
  DOMSTRING_SIZE_: 2,
  HIERARCHY_REQUEST_: 3,
  WRONG_DOCUMENT_: 4,
  INVALID_CHARACTER_: 5,
  NO_DATA_ALLOWED_: 6,
  NO_MODIFICATION_ALLOWED_: 7,
  NOT_FOUND_: 8,
  NOT_SUPPORTED_: 9,
  INUSE_ATTRIBUTE_: 10,
  INVALID_STATE_: 11,
  SYNTAX_: 12,
  INVALID_MODIFICATION_: 13,
  NAMESPACE_: 14,
  INVALID_ACCESS_: 15,
};

declare const WKAudiovisualMediaTypes: {
  None: 0,
  Audio: 1,
  Video: 2,
  All: -1,
};

declare const WKUserInterfaceDirectionPolicy: {
  Content: 0,
  System: 1,
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

declare const WKInactiveSchedulingPolicy: {
  Suspend: 0,
  Throttle: 1,
  None: 2,
};

declare const WKNavigationResponsePolicy: {
  Cancel: 0,
  Allow: 1,
  Download: 2,
};

declare const WKNavigationActionPolicy: {
  Cancel: 0,
  Allow: 1,
  Download: 2,
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

declare const WKCookiePolicy: {
  Allow: 0,
  Disallow: 1,
};

declare const WKContentMode: {
  Recommended: 0,
  Mobile: 1,
  Desktop: 2,
};

declare const WKDownloadRedirectPolicy: {
  Cancel: 0,
  Allow: 1,
};

declare const WebDragSourceAction: {
  None: 0,
  DHTML: 1,
  Image: 2,
  Link: 4,
  Selection: 8,
  Any: 4294967295,
};

declare const WKMediaPlaybackState: {
  None: 0,
  Playing: 1,
  Paused: 2,
  Suspended: 3,
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

declare const WKNavigationType: {
  LinkActivated: 0,
  FormSubmitted: 1,
  BackForward: 2,
  Reload: 3,
  FormResubmitted: 4,
  Other: -1,
};

declare const WKMediaCaptureState: {
  None: 0,
  Active: 1,
  Muted: 2,
};

declare const WKMediaCaptureType: {
  Camera: 0,
  Microphone: 1,
  CameraAndMicrophone: 2,
};

declare class DOMObjectInternal {
  constructor(init?: DOMObjectInternal);
}

declare class WebPreferencesPrivate {
  constructor(init?: WebPreferencesPrivate);
}

declare interface WebDocumentRepresentation extends NSObjectProtocol {
  setDataSource(dataSource: WebDataSource): void;

  receivedDataWithDataSource(data: NSData, dataSource: WebDataSource): void;

  receivedErrorWithDataSource(error: NSError, dataSource: WebDataSource): void;

  finishedLoadingWithDataSource(dataSource: WebDataSource): void;

  canProvideDocumentSource(): boolean;

  documentSource(): string;

  title(): string;
}

declare class WebDocumentRepresentation extends NativeObject implements WebDocumentRepresentation {
}

declare interface WebPlugInViewFactory extends NSObjectProtocol {
}

declare class WebPlugInViewFactory extends NativeObject implements WebPlugInViewFactory {
  static plugInViewWithArguments(arguments$: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSView;
}

declare interface WebDownloadDelegate extends NSURLDownloadDelegate {
  downloadWindowForAuthenticationSheet?(download: WebDownload): NSWindow;
}

declare class WebDownloadDelegate extends NativeObject implements WebDownloadDelegate {
}

declare interface WKScriptMessageHandler extends NSObjectProtocol {
  userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void;
}

declare class WKScriptMessageHandler extends NativeObject implements WKScriptMessageHandler {
}

declare interface WebEditingDelegate extends NSObjectProtocol {
  webViewShouldBeginEditingInDOMRange?(webView: WebView, range: DOMRange): boolean;

  webViewShouldEndEditingInDOMRange?(webView: WebView, range: DOMRange): boolean;

  webViewShouldInsertNodeReplacingDOMRangeGivenAction?(webView: WebView, node: DOMNode, range: DOMRange, action: interop.Enum<typeof WebViewInsertAction>): boolean;

  webViewShouldInsertTextReplacingDOMRangeGivenAction?(webView: WebView, text: string, range: DOMRange, action: interop.Enum<typeof WebViewInsertAction>): boolean;

  webViewShouldDeleteDOMRange?(webView: WebView, range: DOMRange): boolean;

  webViewShouldChangeSelectedDOMRangeToDOMRangeAffinityStillSelecting?(webView: WebView, currentRange: DOMRange, proposedRange: DOMRange, selectionAffinity: interop.Enum<typeof NSSelectionAffinity>, flag: boolean): boolean;

  webViewShouldApplyStyleToElementsInDOMRange?(webView: WebView, style: DOMCSSStyleDeclaration, range: DOMRange): boolean;

  webViewShouldChangeTypingStyleToStyle?(webView: WebView, currentStyle: DOMCSSStyleDeclaration, proposedStyle: DOMCSSStyleDeclaration): boolean;

  webViewDoCommandBySelector?(webView: WebView, selector: string): boolean;

  webViewDidBeginEditing?(notification: NSNotification): void;

  webViewDidChange?(notification: NSNotification): void;

  webViewDidEndEditing?(notification: NSNotification): void;

  webViewDidChangeTypingStyle?(notification: NSNotification): void;

  webViewDidChangeSelection?(notification: NSNotification): void;

  undoManagerForWebView?(webView: WebView): NSUndoManager;
}

declare class WebEditingDelegate extends NativeObject implements WebEditingDelegate {
}

declare interface WebPolicyDecisionListener extends NSObjectProtocol {
  use(): void;

  download(): void;

  ignore(): void;
}

declare class WebPolicyDecisionListener extends NativeObject implements WebPolicyDecisionListener {
}

declare interface WebFrameLoadDelegate extends NSObjectProtocol {
  webViewDidStartProvisionalLoadForFrame?(sender: WebView, frame: WebFrame): void;

  webViewDidReceiveServerRedirectForProvisionalLoadForFrame?(sender: WebView, frame: WebFrame): void;

  webViewDidFailProvisionalLoadWithErrorForFrame?(sender: WebView, error: NSError, frame: WebFrame): void;

  webViewDidCommitLoadForFrame?(sender: WebView, frame: WebFrame): void;

  webViewDidReceiveTitleForFrame?(sender: WebView, title: string, frame: WebFrame): void;

  webViewDidReceiveIconForFrame?(sender: WebView, image: NSImage, frame: WebFrame): void;

  webViewDidFinishLoadForFrame?(sender: WebView, frame: WebFrame): void;

  webViewDidFailLoadWithErrorForFrame?(sender: WebView, error: NSError, frame: WebFrame): void;

  webViewDidChangeLocationWithinPageForFrame?(sender: WebView, frame: WebFrame): void;

  webViewWillPerformClientRedirectToURLDelayFireDateForFrame?(sender: WebView, URL: NSURL, seconds: number, date: NSDate, frame: WebFrame): void;

  webViewDidCancelClientRedirectForFrame?(sender: WebView, frame: WebFrame): void;

  webViewWillCloseFrame?(sender: WebView, frame: WebFrame): void;

  webViewDidClearWindowObjectForFrame?(webView: WebView, windowObject: WebScriptObject, frame: WebFrame): void;

  webViewWindowScriptObjectAvailable?(webView: WebView, windowScriptObject: WebScriptObject): void;

  webViewDidCreateJavaScriptContextForFrame?(webView: WebView, context: JSContext, frame: WebFrame): void;
}

declare class WebFrameLoadDelegate extends NativeObject implements WebFrameLoadDelegate {
}

declare interface WebDocumentText extends NSObjectProtocol {
  supportsTextEncoding(): boolean;

  string(): string;

  attributedString(): NSAttributedString;

  selectedString(): string;

  selectedAttributedString(): NSAttributedString;

  selectAll(): void;

  deselectAll(): void;
}

declare class WebDocumentText extends NativeObject implements WebDocumentText {
}

declare interface WebDocumentView extends NSObjectProtocol {
  setDataSource(dataSource: WebDataSource): void;

  dataSourceUpdated(dataSource: WebDataSource): void;

  setNeedsLayout(flag: boolean): void;

  layout(): void;

  viewWillMoveToHostWindow(hostWindow: NSWindow): void;

  viewDidMoveToHostWindow(): void;
}

declare class WebDocumentView extends NativeObject implements WebDocumentView {
}

declare interface DOMXPathNSResolver extends NSObjectProtocol {
  lookupNamespaceURI(prefix: string): string;
}

declare class DOMXPathNSResolver extends NativeObject implements DOMXPathNSResolver {
}

declare interface DOMEventListener extends NSObjectProtocol {
  handleEvent(event: DOMEvent): void;
}

declare class DOMEventListener extends NativeObject implements DOMEventListener {
}

declare interface DOMEventTarget extends NSObjectProtocol, NSCopying {
  addEventListenerListenerUseCapture(type: string, listener: DOMEventListener, useCapture: boolean): void;

  removeEventListenerListenerUseCapture(type: string, listener: DOMEventListener, useCapture: boolean): void;

  dispatchEvent(event: DOMEvent): boolean;

  addEventListener(type: string, listener: DOMEventListener, useCapture: boolean): void;

  removeEventListener(type: string, listener: DOMEventListener, useCapture: boolean): void;
}

declare class DOMEventTarget extends NativeObject implements DOMEventTarget {
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

declare interface WKUIDelegate extends NSObjectProtocol {
  webViewCreateWebViewWithConfigurationForNavigationActionWindowFeatures?(webView: WKWebView, configuration: WKWebViewConfiguration, navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures): WKWebView;

  webViewDidClose?(webView: WKWebView): void;

  webViewRunJavaScriptAlertPanelWithMessageInitiatedByFrameCompletionHandler?(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: () => void): void;

  webViewRunJavaScriptConfirmPanelWithMessageInitiatedByFrameCompletionHandler?(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: (p1: boolean) => void): void;

  webViewRunJavaScriptTextInputPanelWithPromptDefaultTextInitiatedByFrameCompletionHandler?(webView: WKWebView, prompt: string, defaultText: string | null, frame: WKFrameInfo, completionHandler: (p1: string) => void | null): void;

  webViewRequestMediaCapturePermissionForOriginInitiatedByFrameTypeDecisionHandler?(webView: WKWebView, origin: WKSecurityOrigin, frame: WKFrameInfo, type: interop.Enum<typeof WKMediaCaptureType>, decisionHandler: (p1: interop.Enum<typeof WKPermissionDecision>) => void): void;

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
}

declare class WKNavigationDelegate extends NativeObject implements WKNavigationDelegate {
}

declare interface WKHTTPCookieStoreObserver extends NSObjectProtocol {
  cookiesDidChangeInCookieStore?(cookieStore: WKHTTPCookieStore): void;
}

declare class WKHTTPCookieStoreObserver extends NativeObject implements WKHTTPCookieStoreObserver {
}

declare interface WebUIDelegate extends NSObjectProtocol {
  webViewCreateWebViewWithRequest?(sender: WebView, request: NSURLRequest): WebView;

  webViewShow?(sender: WebView): void;

  webViewCreateWebViewModalDialogWithRequest?(sender: WebView, request: NSURLRequest): WebView;

  webViewRunModal?(sender: WebView): void;

  webViewClose?(sender: WebView): void;

  webViewFocus?(sender: WebView): void;

  webViewUnfocus?(sender: WebView): void;

  webViewFirstResponder?(sender: WebView): NSResponder;

  webViewMakeFirstResponder?(sender: WebView, responder: NSResponder): void;

  webViewSetStatusText?(sender: WebView, text: string): void;

  webViewStatusText?(sender: WebView): string;

  webViewAreToolbarsVisible?(sender: WebView): boolean;

  webViewSetToolbarsVisible?(sender: WebView, visible: boolean): void;

  webViewIsStatusBarVisible?(sender: WebView): boolean;

  webViewSetStatusBarVisible?(sender: WebView, visible: boolean): void;

  webViewIsResizable?(sender: WebView): boolean;

  webViewSetResizable?(sender: WebView, resizable: boolean): void;

  webViewSetFrame?(sender: WebView, frame: CGRect): void;

  webViewFrame?(sender: WebView): CGRect;

  webViewRunJavaScriptAlertPanelWithMessageInitiatedByFrame?(sender: WebView, message: string, frame: WebFrame): void;

  webViewRunJavaScriptConfirmPanelWithMessageInitiatedByFrame?(sender: WebView, message: string, frame: WebFrame): boolean;

  webViewRunJavaScriptTextInputPanelWithPromptDefaultTextInitiatedByFrame?(sender: WebView, prompt: string, defaultText: string, frame: WebFrame): string;

  webViewRunBeforeUnloadConfirmPanelWithMessageInitiatedByFrame?(sender: WebView, message: string, frame: WebFrame): boolean;

  webViewRunOpenPanelForFileButtonWithResultListener?(sender: WebView, resultListener: WebOpenPanelResultListener): void;

  webViewRunOpenPanelForFileButtonWithResultListenerAllowMultipleFiles?(sender: WebView, resultListener: WebOpenPanelResultListener, allowMultipleFiles: boolean): void;

  webViewMouseDidMoveOverElementModifierFlags?(sender: WebView, elementInformation: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, modifierFlags: number): void;

  webViewContextMenuItemsForElementDefaultMenuItems?(sender: WebView, element: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, defaultMenuItems: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  webViewValidateUserInterfaceItemDefaultValidation?(webView: WebView, item: NSValidatedUserInterfaceItem, defaultValidation: boolean): boolean;

  webViewShouldPerformActionFromSender?(webView: WebView, action: string, sender: interop.Object): boolean;

  webViewDragDestinationActionMaskForDraggingInfo?(webView: WebView, draggingInfo: NSDraggingInfo): number;

  webViewWillPerformDragDestinationActionForDraggingInfo?(webView: WebView, action: interop.Enum<typeof WebDragDestinationAction>, draggingInfo: NSDraggingInfo): void;

  webViewDragSourceActionMaskForPoint?(webView: WebView, point: CGPoint): number;

  webViewWillPerformDragSourceActionFromPointWithPasteboard?(webView: WebView, action: interop.Enum<typeof WebDragSourceAction>, point: CGPoint, pasteboard: NSPasteboard): void;

  webViewPrintFrameView?(sender: WebView, frameView: WebFrameView): void;

  webViewHeaderHeight?(sender: WebView): number;

  webViewFooterHeight?(sender: WebView): number;

  webViewDrawHeaderInRect?(sender: WebView, rect: CGRect): void;

  webViewDrawFooterInRect?(sender: WebView, rect: CGRect): void;

  webViewRunJavaScriptAlertPanelWithMessage?(sender: WebView, message: string): void;

  webViewRunJavaScriptConfirmPanelWithMessage?(sender: WebView, message: string): boolean;

  webViewRunJavaScriptTextInputPanelWithPromptDefaultText?(sender: WebView, prompt: string, defaultText: string): string;

  webViewSetContentRect?(sender: WebView, frame: CGRect): void;

  webViewContentRect?(sender: WebView): CGRect;
}

declare class WebUIDelegate extends NativeObject implements WebUIDelegate {
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

declare interface WKURLSchemeHandler extends NSObjectProtocol {
  webViewStartURLSchemeTask(webView: WKWebView, urlSchemeTask: WKURLSchemeTask): void;

  webViewStopURLSchemeTask(webView: WKWebView, urlSchemeTask: WKURLSchemeTask): void;
}

declare class WKURLSchemeHandler extends NativeObject implements WKURLSchemeHandler {
}

declare interface DOMNodeFilter extends NSObjectProtocol {
  acceptNode(n: DOMNode): number;
}

declare class DOMNodeFilter extends NativeObject implements DOMNodeFilter {
}

declare interface WebPolicyDelegate extends NSObjectProtocol {
  webViewDecidePolicyForNavigationActionRequestFrameDecisionListener?(webView: WebView, actionInformation: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, request: NSURLRequest, frame: WebFrame, listener: WebPolicyDecisionListener): void;

  webViewDecidePolicyForNewWindowActionRequestNewFrameNameDecisionListener?(webView: WebView, actionInformation: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, request: NSURLRequest, frameName: string, listener: WebPolicyDecisionListener): void;

  webViewDecidePolicyForMIMETypeRequestFrameDecisionListener?(webView: WebView, type: string, request: NSURLRequest, frame: WebFrame, listener: WebPolicyDecisionListener): void;

  webViewUnableToImplementPolicyWithErrorFrame?(webView: WebView, error: NSError, frame: WebFrame): void;
}

declare class WebPolicyDelegate extends NativeObject implements WebPolicyDelegate {
}

declare interface WebOpenPanelResultListener extends NSObjectProtocol {
  chooseFilename(fileName: string): void;

  chooseFilenames(fileNames: NSArray<interop.Object> | Array<interop.Object>): void;

  cancel(): void;
}

declare class WebOpenPanelResultListener extends NativeObject implements WebOpenPanelResultListener {
}

declare interface WebResourceLoadDelegate extends NSObjectProtocol {
  webViewIdentifierForInitialRequestFromDataSource?(sender: WebView, request: NSURLRequest, dataSource: WebDataSource): interop.Object;

  webViewResourceWillSendRequestRedirectResponseFromDataSource?(sender: WebView, identifier: interop.Object, request: NSURLRequest, redirectResponse: NSURLResponse, dataSource: WebDataSource): NSURLRequest;

  webViewResourceDidReceiveAuthenticationChallengeFromDataSource?(sender: WebView, identifier: interop.Object, challenge: NSURLAuthenticationChallenge, dataSource: WebDataSource): void;

  webViewResourceDidCancelAuthenticationChallengeFromDataSource?(sender: WebView, identifier: interop.Object, challenge: NSURLAuthenticationChallenge, dataSource: WebDataSource): void;

  webViewResourceDidReceiveResponseFromDataSource?(sender: WebView, identifier: interop.Object, response: NSURLResponse, dataSource: WebDataSource): void;

  webViewResourceDidReceiveContentLengthFromDataSource?(sender: WebView, identifier: interop.Object, length: number, dataSource: WebDataSource): void;

  webViewResourceDidFinishLoadingFromDataSource?(sender: WebView, identifier: interop.Object, dataSource: WebDataSource): void;

  webViewResourceDidFailLoadingWithErrorFromDataSource?(sender: WebView, identifier: interop.Object, error: NSError, dataSource: WebDataSource): void;

  webViewPlugInFailedWithErrorDataSource?(sender: WebView, error: NSError, dataSource: WebDataSource): void;
}

declare class WebResourceLoadDelegate extends NativeObject implements WebResourceLoadDelegate {
}

declare interface WebDocumentSearching extends NSObjectProtocol {
  searchForDirectionCaseSensitiveWrap(string: string, forward: boolean, caseFlag: boolean, wrapFlag: boolean): boolean;
}

declare class WebDocumentSearching extends NativeObject implements WebDocumentSearching {
}

// @ts-ignore ClassDecl.tsIgnore
declare class WebView extends NSView {
  static canShowMIMEType(MIMEType: string): boolean;

  static canShowMIMETypeAsHTML(MIMEType: string): boolean;

  static MIMETypesShownAsHTML(): NSArray;

  static setMIMETypesShownAsHTML(MIMETypes: NSArray<interop.Object> | Array<interop.Object>): void;

  static URLFromPasteboard(pasteboard: NSPasteboard): NSURL;

  static URLTitleFromPasteboard(pasteboard: NSPasteboard): string;

  static registerURLSchemeAsLocal(scheme: string): void;

  initWithFrameFrameNameGroupName(frame: CGRect, frameName: string, groupName: string): this;

  close(): void;

  shouldCloseWithWindow: boolean;

  UIDelegate: WebUIDelegate;

  resourceLoadDelegate: WebResourceLoadDelegate;

  downloadDelegate: WebDownloadDelegate;

  frameLoadDelegate: WebFrameLoadDelegate;

  policyDelegate: WebPolicyDelegate;

  readonly mainFrame: WebFrame;

  readonly selectedFrame: WebFrame;

  readonly backForwardList: WebBackForwardList;

  setMaintainsBackForwardList(flag: boolean): void;

  goBack(): boolean;

  goForward(): boolean;

  goToBackForwardItem(item: WebHistoryItem): boolean;

  textSizeMultiplier: number;

  applicationNameForUserAgent: string;

  customUserAgent: string;

  userAgentForURL(URL: NSURL): string;

  readonly supportsTextEncoding: boolean;

  customTextEncodingName: string;

  mediaStyle: string;

  stringByEvaluatingJavaScriptFromString(script: string): string;

  readonly windowScriptObject: WebScriptObject;

  preferences: WebPreferences;

  preferencesIdentifier: string;

  hostWindow: NSWindow;

  searchForDirectionCaseSensitiveWrap(string: string, forward: boolean, caseFlag: boolean, wrapFlag: boolean): boolean;

  static registerViewClassRepresentationClassForMIMEType(viewClass: interop.Object, representationClass: interop.Object, MIMEType: string): void;

  groupName: string;

  readonly estimatedProgress: number;

  readonly isLoading: boolean;

  elementAtPoint(point: CGPoint): NSDictionary;

  readonly pasteboardTypesForSelection: NSArray;

  writeSelectionWithPasteboardTypesToPasteboard(types: NSArray<interop.Object> | Array<interop.Object>, pasteboard: NSPasteboard): void;

  pasteboardTypesForElement(element: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSArray;

  writeElementWithPasteboardTypesToPasteboard(element: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, types: NSArray<interop.Object> | Array<interop.Object>, pasteboard: NSPasteboard): void;

  moveDragCaretToPoint(point: CGPoint): void;

  removeDragCaret(): void;

  drawsBackground: boolean;

  shouldUpdateWhileOffscreen: boolean;

  mainFrameURL: string;

  readonly mainFrameDocument: DOMDocument;

  readonly mainFrameTitle: string;

  readonly mainFrameIcon: NSImage;

  takeStringURLFrom(sender: interop.Object): void;

  stopLoading(sender: interop.Object): void;

  reload(sender: interop.Object): void;

  reloadFromOrigin(sender: interop.Object): void;

  readonly canGoBack: boolean;

  readonly canGoForward: boolean;

  readonly canMakeTextLarger: boolean;

  makeTextLarger(sender: interop.Object): void;

  readonly canMakeTextSmaller: boolean;

  makeTextSmaller(sender: interop.Object): void;

  readonly canMakeTextStandardSize: boolean;

  makeTextStandardSize(sender: interop.Object): void;

  toggleContinuousSpellChecking(sender: interop.Object): void;

  toggleSmartInsertDelete(sender: interop.Object): void;

  computedStyleForElementPseudoElement(element: DOMElement, pseudoElement: string): DOMCSSStyleDeclaration;

  editableDOMRangeForPoint(point: CGPoint): DOMRange;

  setSelectedDOMRangeAffinity(range: DOMRange, selectionAffinity: interop.Enum<typeof NSSelectionAffinity>): void;

  readonly selectedDOMRange: DOMRange;

  readonly selectionAffinity: interop.Enum<typeof NSSelectionAffinity>;

  readonly maintainsInactiveSelection: boolean;

  isEditable: boolean;

  typingStyle: DOMCSSStyleDeclaration;

  smartInsertDeleteEnabled: boolean;

  isContinuousSpellCheckingEnabled: boolean;

  readonly spellCheckerDocumentTag: number;

  readonly undoManager: NSUndoManager;

  editingDelegate: WebEditingDelegate;

  styleDeclarationWithText(text: string): DOMCSSStyleDeclaration;

  replaceSelectionWithNode(node: DOMNode): void;

  replaceSelectionWithText(text: string): void;

  replaceSelectionWithMarkupString(markupString: string): void;

  replaceSelectionWithArchive(archive: WebArchive): void;

  deleteSelection(): void;

  applyStyle(style: DOMCSSStyleDeclaration): void;

  // @ts-ignore MemberDecl.tsIgnore
  copy(sender: interop.Object): void;

  cut(sender: interop.Object): void;

  paste(sender: interop.Object): void;

  copyFont(sender: interop.Object): void;

  pasteFont(sender: interop.Object): void;

  delete(sender: interop.Object): void;

  pasteAsPlainText(sender: interop.Object): void;

  pasteAsRichText(sender: interop.Object): void;

  // @ts-ignore MemberDecl.tsIgnore
  changeFont(sender: interop.Object): void;

  changeAttributes(sender: interop.Object): void;

  changeDocumentBackgroundColor(sender: interop.Object): void;

  // @ts-ignore MemberDecl.tsIgnore
  changeColor(sender: interop.Object): void;

  alignCenter(sender: interop.Object): void;

  alignJustified(sender: interop.Object): void;

  alignLeft(sender: interop.Object): void;

  alignRight(sender: interop.Object): void;

  checkSpelling(sender: interop.Object): void;

  showGuessPanel(sender: interop.Object): void;

  performFindPanelAction(sender: interop.Object): void;

  startSpeaking(sender: interop.Object): void;

  stopSpeaking(sender: interop.Object): void;

  moveToBeginningOfSentence(sender: interop.Object): void;

  moveToBeginningOfSentenceAndModifySelection(sender: interop.Object): void;

  moveToEndOfSentence(sender: interop.Object): void;

  moveToEndOfSentenceAndModifySelection(sender: interop.Object): void;

  selectSentence(sender: interop.Object): void;

  overWrite(sender: interop.Object): void;
}

declare class DOMHTMLSelectElement extends DOMHTMLElement {
  autofocus: boolean;

  disabled: boolean;

  readonly form: DOMHTMLFormElement;

  multiple: boolean;

  name: string;

  size: number;

  readonly type: string;

  readonly options: DOMHTMLOptionsCollection;

  readonly length: number;

  selectedIndex: number;

  value: string;

  readonly willValidate: boolean;

  item(index: number): DOMNode;

  namedItem(name: string): DOMNode;

  addBefore(element: DOMHTMLElement, before: DOMHTMLElement): void;

  remove(index: number): void;

  add(element: DOMHTMLElement, before: DOMHTMLElement): void;
}

declare class DOMMediaList extends DOMObject {
  mediaText: string;

  readonly length: number;

  item(index: number): string;

  deleteMedium(oldMedium: string): void;

  appendMedium(newMedium: string): void;
}

declare class DOMStyleSheetList extends DOMObject {
  readonly length: number;

  item(index: number): DOMStyleSheet;
}

declare class WKProcessPool extends NSObject implements NSSecureCoding {
  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class WKFindResult extends NSObject implements NSCopying {
  readonly matchFound: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMHTMLFieldSetElement extends DOMHTMLElement {
  readonly form: DOMHTMLFormElement;
}

declare class DOMHTMLHtmlElement extends DOMHTMLElement {
  version: string;
}

declare class DOMHTMLAnchorElement extends DOMHTMLElement {
  charset: string;

  coords: string;

  hreflang: string;

  name: string;

  rel: string;

  rev: string;

  shape: string;

  target: string;

  type: string;

  accessKey: string;

  readonly text: string;

  readonly absoluteLinkURL: NSURL;

  href: string;

  readonly protocol: string;

  readonly host: string;

  readonly hostname: string;

  readonly port: string;

  readonly pathname: string;

  readonly search: string;

  readonly hashName: string;
}

declare class WKNavigationAction extends NSObject {
  readonly sourceFrame: WKFrameInfo;

  readonly targetFrame: WKFrameInfo;

  readonly navigationType: interop.Enum<typeof WKNavigationType>;

  readonly request: NSURLRequest;

  readonly shouldPerformDownload: boolean;

  readonly modifierFlags: interop.Enum<typeof NSEventModifierFlags>;

  readonly buttonNumber: number;
}

declare class WebDataSource extends NSObject {
  initWithRequest(request: NSURLRequest): this;

  readonly data: NSData;

  readonly representation: WebDocumentRepresentation;

  readonly webFrame: WebFrame;

  readonly initialRequest: NSURLRequest;

  readonly request: NSMutableURLRequest;

  readonly response: NSURLResponse;

  readonly textEncodingName: string;

  readonly isLoading: boolean;

  readonly pageTitle: string;

  readonly unreachableURL: NSURL;

  readonly webArchive: WebArchive;

  readonly mainResource: WebResource;

  readonly subresources: NSArray;

  subresourceForURL(URL: NSURL): WebResource;

  addSubresource(subresource: WebResource): void;
}

declare class DOMProgressEvent extends DOMEvent {
  readonly lengthComputable: boolean;

  readonly loaded: number;

  readonly total: number;
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

declare class WebHistory extends NSObject {
  static optionalSharedHistory(): WebHistory;

  static setOptionalSharedHistory(history: WebHistory): void;

  loadFromURLError(URL: NSURL, error: interop.PointerConvertible): boolean;

  saveToURLError(URL: NSURL, error: interop.PointerConvertible): boolean;

  addItems(newItems: NSArray<interop.Object> | Array<interop.Object>): void;

  removeItems(items: NSArray<interop.Object> | Array<interop.Object>): void;

  removeAllItems(): void;

  readonly orderedLastVisitedDays: NSArray;

  orderedItemsLastVisitedOnDay(calendarDate: NSCalendarDate): NSArray;

  itemForURL(URL: NSURL): WebHistoryItem;

  historyItemLimit: number;

  historyAgeInDaysLimit: number;
}

declare class DOMHTMLParamElement extends DOMHTMLElement {
  name: string;

  type: string;

  value: string;

  valueType: string;
}

// @ts-ignore ClassDecl.tsIgnore
declare class DOMElement extends DOMNode {
  readonly tagName: string;

  readonly style: DOMCSSStyleDeclaration;

  readonly offsetLeft: number;

  readonly offsetTop: number;

  readonly offsetWidth: number;

  readonly offsetHeight: number;

  readonly clientLeft: number;

  readonly clientTop: number;

  readonly clientWidth: number;

  readonly clientHeight: number;

  scrollLeft: number;

  scrollTop: number;

  readonly scrollWidth: number;

  readonly scrollHeight: number;

  readonly offsetParent: DOMElement;

  innerHTML: string;

  outerHTML: string;

  // @ts-ignore MemberDecl.tsIgnore
  className: string;

  readonly innerText: string;

  readonly previousElementSibling: DOMElement;

  readonly nextElementSibling: DOMElement;

  readonly firstElementChild: DOMElement;

  readonly lastElementChild: DOMElement;

  readonly childElementCount: number;

  getAttribute(name: string): string;

  setAttributeValue(name: string, value: string): void;

  removeAttribute(name: string): void;

  getAttributeNode(name: string): DOMAttr;

  setAttributeNode(newAttr: DOMAttr): DOMAttr;

  removeAttributeNode(oldAttr: DOMAttr): DOMAttr;

  getElementsByTagName(name: string): DOMNodeList;

  getAttributeNSLocalName(namespaceURI: string, localName: string): string;

  setAttributeNSQualifiedNameValue(namespaceURI: string, qualifiedName: string, value: string): void;

  removeAttributeNSLocalName(namespaceURI: string, localName: string): void;

  getElementsByTagNameNSLocalName(namespaceURI: string, localName: string): DOMNodeList;

  getAttributeNodeNSLocalName(namespaceURI: string, localName: string): DOMAttr;

  setAttributeNodeNS(newAttr: DOMAttr): DOMAttr;

  hasAttribute(name: string): boolean;

  hasAttributeNSLocalName(namespaceURI: string, localName: string): boolean;

  focus(): void;

  blur(): void;

  scrollIntoView(alignWithTop: boolean): void;

  scrollIntoViewIfNeeded(centerIfNeeded: boolean): void;

  getElementsByClassName(name: string): DOMNodeList;

  webkitRequestFullScreen(flags: number): void;

  querySelector(selectors: string): DOMElement;

  querySelectorAll(selectors: string): DOMNodeList;

  setAttribute(name: string, value: string): void;

  getAttributeNS(namespaceURI: string, localName: string): string;

  setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;

  removeAttributeNS(namespaceURI: string, localName: string): void;

  getElementsByTagNameNS(namespaceURI: string, localName: string): DOMNodeList;

  getAttributeNodeNS(namespaceURI: string, localName: string): DOMAttr;

  hasAttributeNS(namespaceURI: string, localName: string): boolean;

  scrollByLines(lines: number): void;

  scrollByPages(pages: number): void;

  image(): NSImage;
}

declare class DOMCSSRule extends DOMObject {
  readonly type: number;

  cssText: string;

  readonly parentStyleSheet: DOMCSSStyleSheet;

  readonly parentRule: DOMCSSRule;
}

declare class DOMHTMLOptGroupElement extends DOMHTMLElement {
  disabled: boolean;

  label: string;
}

declare class DOMCSSPrimitiveValue extends DOMCSSValue {
  readonly primitiveType: number;

  setFloatValueFloatValue(unitType: number, floatValue: number): void;

  getFloatValue(unitType: number): number;

  setStringValueStringValue(stringType: number, stringValue: string): void;

  getStringValue(): string;

  getCounterValue(): DOMCounter;

  getRectValue(): DOMRect;

  getRGBColorValue(): DOMRGBColor;

  setFloatValue(unitType: number, floatValue: number): void;

  setStringValue(stringType: number, stringValue: string): void;
}

declare class WebPreferences extends NSObject implements NSCoding {
  static standardPreferences(): WebPreferences;

  initWithIdentifier(anIdentifier: string): this;

  readonly identifier: string;

  standardFontFamily: string;

  fixedFontFamily: string;

  serifFontFamily: string;

  sansSerifFontFamily: string;

  cursiveFontFamily: string;

  fantasyFontFamily: string;

  defaultFontSize: number;

  defaultFixedFontSize: number;

  minimumFontSize: number;

  minimumLogicalFontSize: number;

  defaultTextEncodingName: string;

  userStyleSheetEnabled: boolean;

  userStyleSheetLocation: NSURL;

  isJavaEnabled: boolean;

  isJavaScriptEnabled: boolean;

  javaScriptCanOpenWindowsAutomatically: boolean;

  arePlugInsEnabled: boolean;

  allowsAnimatedImages: boolean;

  allowsAnimatedImageLooping: boolean;

  loadsImagesAutomatically: boolean;

  autosaves: boolean;

  shouldPrintBackgrounds: boolean;

  privateBrowsingEnabled: boolean;

  tabsToLinks: boolean;

  usesPageCache: boolean;

  cacheModel: interop.Enum<typeof WebCacheModel>;

  suppressesIncrementalRendering: boolean;

  allowsAirPlayForMediaPlayback: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class WebHistoryItem extends NSObject implements NSCopying {
  initWithURLStringTitleLastVisitedTimeInterval(URLString: string, title: string, time: number): this;

  readonly originalURLString: string;

  readonly URLString: string;

  readonly title: string;

  readonly lastVisitedTimeInterval: number;

  alternateTitle: string;

  readonly icon: NSImage;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WebFrameView extends NSView {
  readonly webFrame: WebFrame;

  readonly documentView: NSView;

  allowsScrolling: boolean;

  readonly canPrintHeadersAndFooters: boolean;

  printOperationWithPrintInfo(printInfo: NSPrintInfo): NSPrintOperation;

  readonly documentViewShouldHandlePrint: boolean;

  printDocumentView(): void;
}

declare class WebDownload extends NSURLDownload {
}

declare class DOMXPathResult extends DOMObject {
  readonly resultType: number;

  readonly numberValue: number;

  readonly stringValue: string;

  readonly booleanValue: boolean;

  readonly singleNodeValue: DOMNode;

  readonly invalidIteratorState: boolean;

  readonly snapshotLength: number;

  iterateNext(): DOMNode;

  snapshotItem(index: number): DOMNode;
}

declare class DOMHTMLTableCellElement extends DOMHTMLElement {
  readonly cellIndex: number;

  align: string;

  axis: string;

  bgColor: string;

  ch: string;

  chOff: string;

  colSpan: number;

  rowSpan: number;

  headers: string;

  height: string;

  noWrap: boolean;

  vAlign: string;

  width: string;

  abbr: string;

  scope: string;
}

declare class DOMXPathExpression extends DOMObject {
  evaluateTypeInResult(contextNode: DOMNode, type: number, inResult: DOMXPathResult): DOMXPathResult;

  evaluate(contextNode: DOMNode, type: number, inResult: DOMXPathResult): DOMXPathResult;
}

declare class DOMMutationEvent extends DOMEvent {
  readonly relatedNode: DOMNode;

  readonly prevValue: string;

  readonly newValue: string;

  readonly attrName: string;

  readonly attrChange: number;

  initMutationEventCanBubbleCancelableRelatedNodePrevValueNewValueAttrNameAttrChange(type: string, canBubble: boolean, cancelable: boolean, relatedNode: DOMNode, prevValue: string, newValue: string, attrName: string, attrChange: number): this;

  initMutationEvent(type: string, canBubble: boolean, cancelable: boolean, relatedNode: DOMNode, prevValue: string, newValue: string, attrName: string, attrChange: number): this;
}

declare class DOMHTMLTextAreaElement extends DOMHTMLElement {
  autofocus: boolean;

  disabled: boolean;

  readonly form: DOMHTMLFormElement;

  name: string;

  readOnly: boolean;

  rows: number;

  cols: number;

  readonly type: string;

  defaultValue: string;

  value: string;

  readonly willValidate: boolean;

  selectionStart: number;

  selectionEnd: number;

  accessKey: string;

  select(): void;

  setSelectionRangeEnd(start: number, end: number): void;
}

declare class DOMHTMLTableSectionElement extends DOMHTMLElement {
  align: string;

  ch: string;

  chOff: string;

  vAlign: string;

  readonly rows: DOMHTMLCollection;

  insertRow(index: number): DOMHTMLElement;

  deleteRow(index: number): void;
}

declare class DOMHTMLTableRowElement extends DOMHTMLElement {
  readonly rowIndex: number;

  readonly sectionRowIndex: number;

  readonly cells: DOMHTMLCollection;

  align: string;

  bgColor: string;

  ch: string;

  chOff: string;

  vAlign: string;

  insertCell(index: number): DOMHTMLElement;

  deleteCell(index: number): void;
}

declare class DOMHTMLTableElement extends DOMHTMLElement {
  caption: DOMHTMLTableCaptionElement;

  tHead: DOMHTMLTableSectionElement;

  tFoot: DOMHTMLTableSectionElement;

  readonly rows: DOMHTMLCollection;

  readonly tBodies: DOMHTMLCollection;

  align: string;

  bgColor: string;

  border: string;

  cellPadding: string;

  cellSpacing: string;

  frameBorders: string;

  rules: string;

  summary: string;

  width: string;

  createTHead(): DOMHTMLElement;

  deleteTHead(): void;

  createTFoot(): DOMHTMLElement;

  deleteTFoot(): void;

  createCaption(): DOMHTMLElement;

  deleteCaption(): void;

  insertRow(index: number): DOMHTMLElement;

  deleteRow(index: number): void;
}

declare class DOMHTMLStyleElement extends DOMHTMLElement {
  disabled: boolean;

  media: string;

  type: string;

  readonly sheet: DOMStyleSheet;
}

declare class DOMHTMLQuoteElement extends DOMHTMLElement {
  cite: string;
}

declare class DOMHTMLOListElement extends DOMHTMLElement {
  compact: boolean;

  start: number;

  type: string;
}

declare class DOMHTMLModElement extends DOMHTMLElement {
  cite: string;

  dateTime: string;
}

declare class DOMHTMLMetaElement extends DOMHTMLElement {
  content: string;

  httpEquiv: string;

  name: string;

  scheme: string;
}

declare class DOMHTMLMenuElement extends DOMHTMLElement {
  compact: boolean;
}

declare class DOMHTMLMapElement extends DOMHTMLElement {
  readonly areas: DOMHTMLCollection;

  name: string;
}

declare class DOMHTMLLinkElement extends DOMHTMLElement {
  disabled: boolean;

  charset: string;

  href: string;

  hreflang: string;

  media: string;

  rel: string;

  rev: string;

  target: string;

  type: string;

  readonly sheet: DOMStyleSheet;

  readonly absoluteLinkURL: NSURL;
}

declare class DOMHTMLLegendElement extends DOMHTMLElement {
  readonly form: DOMHTMLFormElement;

  align: string;

  accessKey: string;
}

declare class WKContentRuleList extends NSObject {
  readonly identifier: string;
}

declare class DOMHTMLLIElement extends DOMHTMLElement {
  type: string;

  value: number;
}

declare class DOMHTMLImageElement extends DOMHTMLElement {
  name: string;

  align: string;

  alt: string;

  border: string;

  height: number;

  hspace: number;

  isMap: boolean;

  longDesc: string;

  src: string;

  useMap: string;

  vspace: number;

  width: number;

  readonly complete: boolean;

  lowsrc: string;

  readonly naturalHeight: number;

  readonly naturalWidth: number;

  readonly x: number;

  readonly y: number;

  readonly altDisplayString: string;

  readonly absoluteImageURL: NSURL;
}

declare class DOMHTMLIFrameElement extends DOMHTMLElement {
  align: string;

  frameBorder: string;

  height: string;

  longDesc: string;

  marginHeight: string;

  marginWidth: string;

  name: string;

  scrolling: string;

  src: string;

  width: string;

  readonly contentDocument: DOMDocument;

  readonly contentWindow: DOMAbstractView;

  readonly contentFrame: WebFrame;
}

declare class DOMHTMLHeadElement extends DOMHTMLElement {
  profile: string;
}

declare class DOMTreeWalker extends DOMObject {
  readonly root: DOMNode;

  readonly whatToShow: number;

  readonly filter: DOMNodeFilter;

  readonly expandEntityReferences: boolean;

  currentNode: DOMNode;

  parentNode(): DOMNode;

  firstChild(): DOMNode;

  lastChild(): DOMNode;

  previousSibling(): DOMNode;

  nextSibling(): DOMNode;

  previousNode(): DOMNode;

  nextNode(): DOMNode;
}

declare class WKPDFConfiguration extends NSObject implements NSCopying {
  rect: CGRect;

  allowTransparentBackground: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMHTMLHRElement extends DOMHTMLElement {
  align: string;

  noShade: boolean;

  size: string;

  width: string;
}

declare class DOMRange extends DOMObject {
  readonly startContainer: DOMNode;

  readonly startOffset: number;

  readonly endContainer: DOMNode;

  readonly endOffset: number;

  readonly collapsed: boolean;

  readonly commonAncestorContainer: DOMNode;

  readonly text: string;

  setStartBefore(refNode: DOMNode): void;

  setStartAfter(refNode: DOMNode): void;

  setEndBefore(refNode: DOMNode): void;

  setEndAfter(refNode: DOMNode): void;

  collapse(toStart: boolean): void;

  selectNode(refNode: DOMNode): void;

  selectNodeContents(refNode: DOMNode): void;

  compareBoundaryPointsSourceRange(how: number, sourceRange: DOMRange): number;

  deleteContents(): void;

  extractContents(): DOMDocumentFragment;

  cloneContents(): DOMDocumentFragment;

  insertNode(newNode: DOMNode): void;

  surroundContents(newParent: DOMNode): void;

  cloneRange(): DOMRange;

  toString(): string;

  detach(): void;

  createContextualFragment(html: string): DOMDocumentFragment;

  compareNode(refNode: DOMNode): number;

  intersectsNode(refNode: DOMNode): boolean;

  comparePointOffset(refNode: DOMNode, offset: number): number;

  isPointInRangeOffset(refNode: DOMNode, offset: number): boolean;

  setStart(refNode: DOMNode, offset: number): void;

  setEnd(refNode: DOMNode, offset: number): void;

  compareBoundaryPoints(how: number, sourceRange: DOMRange): number;

  readonly webArchive: WebArchive;

  readonly markupString: string;
}

declare class DOMHTMLFrameElement extends DOMHTMLElement {
  frameBorder: string;

  longDesc: string;

  marginHeight: string;

  marginWidth: string;

  name: string;

  noResize: boolean;

  scrolling: string;

  src: string;

  readonly contentDocument: DOMDocument;

  readonly contentWindow: DOMAbstractView;

  location: string;

  readonly width: number;

  readonly height: number;

  readonly contentFrame: WebFrame;
}

declare class DOMHTMLEmbedElement extends DOMHTMLElement {
  align: string;

  height: number;

  name: string;

  src: string;

  type: string;

  width: number;
}

declare class DOMHTMLDivElement extends DOMHTMLElement {
  align: string;
}

declare class DOMHTMLDListElement extends DOMHTMLElement {
  compact: boolean;
}

declare class DOMHTMLBodyElement extends DOMHTMLElement {
  aLink: string;

  background: string;

  bgColor: string;

  link: string;

  text: string;

  vLink: string;
}

declare class DOMHTMLBaseFontElement extends DOMHTMLElement {
  color: string;

  face: string;

  size: string;
}

declare class DOMDocumentType extends DOMNode {
  readonly name: string;

  readonly entities: DOMNamedNodeMap;

  readonly notations: DOMNamedNodeMap;

  readonly publicId: string;

  readonly systemId: string;

  readonly internalSubset: string;
}

declare class DOMHTMLBRElement extends DOMHTMLElement {
  clear: string;
}

declare class DOMHTMLAreaElement extends DOMHTMLElement {
  alt: string;

  coords: string;

  noHref: boolean;

  shape: string;

  target: string;

  accessKey: string;

  readonly absoluteLinkURL: NSURL;

  href: string;

  readonly protocol: string;

  readonly host: string;

  readonly hostname: string;

  readonly port: string;

  readonly pathname: string;

  readonly search: string;

  readonly hashName: string;
}

declare class DOMHTMLDirectoryElement extends DOMHTMLElement {
  compact: boolean;
}

declare class DOMCounter extends DOMObject {
  readonly identifier: string;

  readonly listStyle: string;

  readonly separator: string;
}

declare class DOMCSSStyleRule extends DOMCSSRule {
  selectorText: string;

  readonly style: DOMCSSStyleDeclaration;
}

declare class DOMCSSFontFaceRule extends DOMCSSRule {
  readonly style: DOMCSSStyleDeclaration;
}

declare class DOMCSSRuleList extends DOMObject {
  readonly length: number;

  item(index: number): DOMCSSRule;
}

declare class DOMCSSValue extends DOMObject {
  cssText: string;

  readonly cssValueType: number;
}

declare class DOMCSSPageRule extends DOMCSSRule {
  selectorText: string;

  readonly style: DOMCSSStyleDeclaration;
}

declare class DOMRGBColor extends DOMObject {
  readonly red: DOMCSSPrimitiveValue;

  readonly green: DOMCSSPrimitiveValue;

  readonly blue: DOMCSSPrimitiveValue;

  readonly alpha: DOMCSSPrimitiveValue;

  readonly color: NSColor;
}

declare class DOMCSSMediaRule extends DOMCSSRule {
  readonly media: DOMMediaList;

  readonly cssRules: DOMCSSRuleList;

  insertRuleIndex(rule: string, index: number): number;

  deleteRule(index: number): void;

  insertRule(rule: string, index: number): number;
}

declare class DOMHTMLObjectElement extends DOMHTMLElement {
  readonly form: DOMHTMLFormElement;

  code: string;

  align: string;

  archive: string;

  border: string;

  codeBase: string;

  codeType: string;

  data: string;

  declare: boolean;

  height: string;

  hspace: number;

  name: string;

  standby: string;

  type: string;

  useMap: string;

  vspace: number;

  width: string;

  readonly contentDocument: DOMDocument;

  readonly absoluteImageURL: NSURL;

  readonly contentFrame: WebFrame;
}

declare class DOMNamedNodeMap extends DOMObject {
  readonly length: number;

  getNamedItem(name: string): DOMNode;

  setNamedItem(node: DOMNode): DOMNode;

  removeNamedItem(name: string): DOMNode;

  item(index: number): DOMNode;

  getNamedItemNSLocalName(namespaceURI: string, localName: string): DOMNode;

  setNamedItemNS(node: DOMNode): DOMNode;

  removeNamedItemNSLocalName(namespaceURI: string, localName: string): DOMNode;

  getNamedItemNS(namespaceURI: string, localName: string): DOMNode;

  removeNamedItemNS(namespaceURI: string, localName: string): DOMNode;
}

declare class DOMEntityReference extends DOMNode {
}

declare class DOMCDATASection extends DOMText {
}

declare class WebUndefined extends NSObject implements NSCoding, NSCopying {
  static undefined(): WebUndefined;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMFileList extends DOMObject {
  readonly length: number;

  item(index: number): DOMFile;
}

declare class WebScriptObject extends NSObject {
  static throwException(exceptionMessage: string): boolean;

  JSObject(): interop.Pointer;

  callWebScriptMethodWithArguments(name: string, arguments$: NSArray<interop.Object> | Array<interop.Object>): interop.Object;

  evaluateWebScript(script: string): interop.Object;

  removeWebScriptKey(name: string): void;

  stringRepresentation(): string;

  webScriptValueAtIndex(index: number): interop.Object;

  setWebScriptValueAtIndexValue(index: number, value: interop.Object): void;

  setException(description: string): void;

  JSValue(): JSValue;
}

declare class DOMHTMLAppletElement extends DOMHTMLElement {
  align: string;

  alt: string;

  archive: string;

  code: string;

  codeBase: string;

  height: string;

  hspace: number;

  name: string;

  object: string;

  vspace: number;

  width: string;
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

declare class WKUserScript extends NSObject implements NSCopying {
  readonly source: string;

  readonly injectionTime: interop.Enum<typeof WKUserScriptInjectionTime>;

  readonly isForMainFrameOnly: boolean;

  initWithSourceInjectionTimeForMainFrameOnly(source: string, injectionTime: interop.Enum<typeof WKUserScriptInjectionTime>, forMainFrameOnly: boolean): this;

  initWithSourceInjectionTimeForMainFrameOnlyInContentWorld(source: string, injectionTime: interop.Enum<typeof WKUserScriptInjectionTime>, forMainFrameOnly: boolean, contentWorld: WKContentWorld): this;

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

declare class WKSnapshotConfiguration extends NSObject implements NSCopying {
  rect: CGRect;

  snapshotWidth: NSNumber;

  afterScreenUpdates: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMHTMLDocument extends DOMDocument {
  readonly embeds: DOMHTMLCollection;

  readonly plugins: DOMHTMLCollection;

  readonly scripts: DOMHTMLCollection;

  readonly width: number;

  readonly height: number;

  dir: string;

  designMode: string;

  readonly compatMode: string;

  bgColor: string;

  fgColor: string;

  alinkColor: string;

  linkColor: string;

  vlinkColor: string;

  open(): void;

  close(): void;

  write(text: string): void;

  writeln(text: string): void;

  clear(): void;

  captureEvents(): void;

  releaseEvents(): void;

  createDocumentFragmentWithMarkupStringBaseURL(markupString: string, baseURL: NSURL): DOMDocumentFragment;

  createDocumentFragmentWithText(text: string): DOMDocumentFragment;
}

declare class DOMRect extends DOMObject {
  readonly top: DOMCSSPrimitiveValue;

  readonly right: DOMCSSPrimitiveValue;

  readonly bottom: DOMCSSPrimitiveValue;

  readonly left: DOMCSSPrimitiveValue;
}

declare class WKPreferences extends NSObject implements NSSecureCoding {
  minimumFontSize: number;

  javaScriptCanOpenWindowsAutomatically: boolean;

  isFraudulentWebsiteWarningEnabled: boolean;

  shouldPrintBackgrounds: boolean;

  tabFocusesLinks: boolean;

  isTextInteractionEnabled: boolean;

  isSiteSpecificQuirksModeEnabled: boolean;

  isElementFullscreenEnabled: boolean;

  inactiveSchedulingPolicy: interop.Enum<typeof WKInactiveSchedulingPolicy>;

  javaEnabled: boolean;

  plugInsEnabled: boolean;

  javaScriptEnabled: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class DOMHTMLParagraphElement extends DOMHTMLElement {
  align: string;
}

declare class WKOpenPanelParameters extends NSObject {
  readonly allowsMultipleSelection: boolean;

  readonly allowsDirectories: boolean;
}

declare class WKNavigation extends NSObject {
  readonly effectiveContentMode: interop.Enum<typeof WKContentMode>;
}

declare class WKWebpagePreferences extends NSObject {
  preferredContentMode: interop.Enum<typeof WKContentMode>;

  allowsContentJavaScript: boolean;

  isLockdownModeEnabled: boolean;
}

declare class WebArchive extends NSObject implements NSCoding, NSCopying {
  initWithMainResourceSubresourcesSubframeArchives(mainResource: WebResource, subresources: NSArray<interop.Object> | Array<interop.Object>, subframeArchives: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithData(data: NSData): this;

  readonly mainResource: WebResource;

  readonly subresources: NSArray;

  readonly subframeArchives: NSArray;

  readonly data: NSData;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMNode extends DOMObject implements DOMEventTarget {
  readonly nodeName: string;

  nodeValue: string;

  readonly nodeType: number;

  readonly parentNode: DOMNode;

  readonly childNodes: DOMNodeList;

  readonly firstChild: DOMNode;

  readonly lastChild: DOMNode;

  readonly previousSibling: DOMNode;

  readonly nextSibling: DOMNode;

  readonly ownerDocument: DOMDocument;

  readonly namespaceURI: string;

  prefix: string;

  readonly localName: string;

  readonly attributes: DOMNamedNodeMap;

  readonly baseURI: string;

  textContent: string;

  readonly parentElement: DOMElement;

  readonly isContentEditable: boolean;

  insertBeforeRefChild(newChild: DOMNode, refChild: DOMNode): DOMNode;

  replaceChildOldChild(newChild: DOMNode, oldChild: DOMNode): DOMNode;

  removeChild(oldChild: DOMNode): DOMNode;

  appendChild(newChild: DOMNode): DOMNode;

  hasChildNodes(): boolean;

  cloneNode(deep: boolean): DOMNode;

  normalize(): void;

  isSupportedVersion(feature: string, version: string): boolean;

  hasAttributes(): boolean;

  isSameNode(other: DOMNode): boolean;

  isEqualNode(other: DOMNode): boolean;

  lookupPrefix(namespaceURI: string): string;

  lookupNamespaceURI(prefix: string): string;

  isDefaultNamespace(namespaceURI: string): boolean;

  compareDocumentPosition(other: DOMNode): number;

  contains(other: DOMNode): boolean;

  insertBefore(newChild: DOMNode, refChild: DOMNode): DOMNode;

  replaceChild(newChild: DOMNode, oldChild: DOMNode): DOMNode;

  isSupported(feature: string, version: string): boolean;

  boundingBox(): CGRect;

  lineBoxRects(): NSArray;

  readonly webArchive: WebArchive;

  addEventListenerListenerUseCapture(type: string, listener: DOMEventListener, useCapture: boolean): void;

  removeEventListenerListenerUseCapture(type: string, listener: DOMEventListener, useCapture: boolean): void;

  dispatchEvent(event: DOMEvent): boolean;

  addEventListener(type: string, listener: DOMEventListener, useCapture: boolean): void;

  removeEventListener(type: string, listener: DOMEventListener, useCapture: boolean): void;

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

declare class WKScriptMessage extends NSObject {
  readonly body: interop.Object;

  readonly webView: WKWebView;

  readonly frameInfo: WKFrameInfo;

  readonly name: string;

  readonly world: WKContentWorld;
}

declare class DOMHTMLUListElement extends DOMHTMLElement {
  compact: boolean;

  type: string;
}

declare class WKWebsiteDataRecord extends NSObject {
  readonly displayName: string;

  readonly dataTypes: NSSet;
}

declare class WKFrameInfo extends NSObject implements NSCopying {
  readonly isMainFrame: boolean;

  readonly request: NSURLRequest;

  readonly securityOrigin: WKSecurityOrigin;

  readonly webView: WKWebView | null;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMKeyboardEvent extends DOMUIEvent {
  readonly keyIdentifier: string;

  readonly location: number;

  readonly keyLocation: number;

  readonly ctrlKey: boolean;

  readonly shiftKey: boolean;

  readonly altKey: boolean;

  readonly metaKey: boolean;

  readonly altGraphKey: boolean;

  readonly keyCode: number;

  readonly charCode: number;

  getModifierState(keyIdentifierArg: string): boolean;

  initKeyboardEventCanBubbleCancelableViewKeyIdentifierLocationCtrlKeyAltKeyShiftKeyMetaKeyAltGraphKey(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, keyIdentifier: string, location: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, altGraphKey: boolean): this;

  initKeyboardEventCanBubbleCancelableViewKeyIdentifierLocationCtrlKeyAltKeyShiftKeyMetaKey(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, keyIdentifier: string, location: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean): this;

  initKeyboardEventCanBubbleCancelableViewKeyIdentifierKeyLocationCtrlKeyAltKeyShiftKeyMetaKeyAltGraphKey(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, keyIdentifier: string, keyLocation: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, altGraphKey: boolean): this;

  initKeyboardEventCanBubbleCancelableViewKeyIdentifierKeyLocationCtrlKeyAltKeyShiftKeyMetaKey(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, keyIdentifier: string, keyLocation: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean): this;
}

declare class DOMHTMLButtonElement extends DOMHTMLElement {
  autofocus: boolean;

  disabled: boolean;

  readonly form: DOMHTMLFormElement;

  type: string;

  name: string;

  value: string;

  readonly willValidate: boolean;

  accessKey: string;

  click(): void;
}

declare class DOMNodeList extends DOMObject {
  readonly length: number;

  item(index: number): DOMNode;
}

declare class DOMUIEvent extends DOMEvent {
  readonly view: DOMAbstractView;

  readonly detail: number;

  readonly keyCode: number;

  readonly charCode: number;

  readonly layerX: number;

  readonly layerY: number;

  readonly pageX: number;

  readonly pageY: number;

  readonly which: number;

  initUIEventCanBubbleCancelableViewDetail(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, detail: number): this;

  initUIEvent(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, detail: number): this;
}

declare class WebResource extends NSObject implements NSCoding, NSCopying {
  initWithDataURLMIMETypeTextEncodingNameFrameName(data: NSData, URL: NSURL, MIMEType: string, textEncodingName: string, frameName: string): this;

  readonly data: NSData;

  readonly URL: NSURL;

  readonly MIMEType: string;

  readonly textEncodingName: string;

  readonly frameName: string;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
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

declare class DOMOverflowEvent extends DOMEvent {
  readonly orient: number;

  readonly horizontalOverflow: boolean;

  readonly verticalOverflow: boolean;

  initOverflowEventHorizontalOverflowVerticalOverflow(orient: number, horizontalOverflow: boolean, verticalOverflow: boolean): this;
}

declare class DOMHTMLCollection extends DOMObject {
  readonly length: number;

  item(index: number): DOMNode;

  namedItem(name: string): DOMNode;

  tags(name: string): DOMNodeList;
}

declare class WebBackForwardList extends NSObject {
  addItem(item: WebHistoryItem): void;

  goBack(): void;

  goForward(): void;

  goToItem(item: WebHistoryItem): void;

  readonly backItem: WebHistoryItem;

  readonly currentItem: WebHistoryItem;

  readonly forwardItem: WebHistoryItem;

  backListWithLimit(limit: number): NSArray;

  forwardListWithLimit(limit: number): NSArray;

  capacity: number;

  readonly backListCount: number;

  readonly forwardListCount: number;

  containsItem(item: WebHistoryItem): boolean;

  itemAtIndex(index: number): WebHistoryItem;

  setPageCacheSize(size: number): void;

  pageCacheSize(): number;
}

declare class DOMWheelEvent extends DOMMouseEvent {
  readonly wheelDeltaX: number;

  readonly wheelDeltaY: number;

  readonly wheelDelta: number;

  readonly isHorizontal: boolean;

  initWheelEventWheelDeltaYViewScreenXScreenYClientXClientYCtrlKeyAltKeyShiftKeyMetaKey(wheelDeltaX: number, wheelDeltaY: number, view: DOMAbstractView, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean): this;
}

declare class DOMStyleSheet extends DOMObject {
  readonly type: string;

  disabled: boolean;

  readonly ownerNode: DOMNode;

  readonly parentStyleSheet: DOMStyleSheet;

  readonly href: string;

  readonly title: string;

  readonly media: DOMMediaList;
}

declare class DOMCSSStyleDeclaration extends DOMObject {
  cssText: string;

  readonly length: number;

  readonly parentRule: DOMCSSRule;

  getPropertyValue(propertyName: string): string;

  getPropertyCSSValue(propertyName: string): DOMCSSValue;

  removeProperty(propertyName: string): string;

  getPropertyPriority(propertyName: string): string;

  setPropertyValuePriority(propertyName: string, value: string, priority: string): void;

  item(index: number): string;

  getPropertyShorthand(propertyName: string): string;

  isPropertyImplicit(propertyName: string): boolean;

  setProperty(propertyName: string, value: string, priority: string): void;

  azimuth(): string;

  setAzimuth(azimuth: string): void;

  background(): string;

  setBackground(background: string): void;

  backgroundAttachment(): string;

  setBackgroundAttachment(backgroundAttachment: string): void;

  backgroundColor(): string;

  setBackgroundColor(backgroundColor: string): void;

  backgroundImage(): string;

  setBackgroundImage(backgroundImage: string): void;

  backgroundPosition(): string;

  setBackgroundPosition(backgroundPosition: string): void;

  backgroundRepeat(): string;

  setBackgroundRepeat(backgroundRepeat: string): void;

  border(): string;

  setBorder(border: string): void;

  borderCollapse(): string;

  setBorderCollapse(borderCollapse: string): void;

  borderColor(): string;

  setBorderColor(borderColor: string): void;

  borderSpacing(): string;

  setBorderSpacing(borderSpacing: string): void;

  borderStyle(): string;

  setBorderStyle(borderStyle: string): void;

  borderTop(): string;

  setBorderTop(borderTop: string): void;

  borderRight(): string;

  setBorderRight(borderRight: string): void;

  borderBottom(): string;

  setBorderBottom(borderBottom: string): void;

  borderLeft(): string;

  setBorderLeft(borderLeft: string): void;

  borderTopColor(): string;

  setBorderTopColor(borderTopColor: string): void;

  borderRightColor(): string;

  setBorderRightColor(borderRightColor: string): void;

  borderBottomColor(): string;

  setBorderBottomColor(borderBottomColor: string): void;

  borderLeftColor(): string;

  setBorderLeftColor(borderLeftColor: string): void;

  borderTopStyle(): string;

  setBorderTopStyle(borderTopStyle: string): void;

  borderRightStyle(): string;

  setBorderRightStyle(borderRightStyle: string): void;

  borderBottomStyle(): string;

  setBorderBottomStyle(borderBottomStyle: string): void;

  borderLeftStyle(): string;

  setBorderLeftStyle(borderLeftStyle: string): void;

  borderTopWidth(): string;

  setBorderTopWidth(borderTopWidth: string): void;

  borderRightWidth(): string;

  setBorderRightWidth(borderRightWidth: string): void;

  borderBottomWidth(): string;

  setBorderBottomWidth(borderBottomWidth: string): void;

  borderLeftWidth(): string;

  setBorderLeftWidth(borderLeftWidth: string): void;

  borderWidth(): string;

  setBorderWidth(borderWidth: string): void;

  bottom(): string;

  setBottom(bottom: string): void;

  captionSide(): string;

  setCaptionSide(captionSide: string): void;

  clear(): string;

  setClear(clear: string): void;

  clip(): string;

  setClip(clip: string): void;

  color(): string;

  setColor(color: string): void;

  content(): string;

  setContent(content: string): void;

  counterIncrement(): string;

  setCounterIncrement(counterIncrement: string): void;

  counterReset(): string;

  setCounterReset(counterReset: string): void;

  cue(): string;

  setCue(cue: string): void;

  cueAfter(): string;

  setCueAfter(cueAfter: string): void;

  cueBefore(): string;

  setCueBefore(cueBefore: string): void;

  cursor(): string;

  setCursor(cursor: string): void;

  direction(): string;

  setDirection(direction: string): void;

  display(): string;

  setDisplay(display: string): void;

  elevation(): string;

  setElevation(elevation: string): void;

  emptyCells(): string;

  setEmptyCells(emptyCells: string): void;

  cssFloat(): string;

  setCssFloat(cssFloat: string): void;

  font(): string;

  setFont(font: string): void;

  fontFamily(): string;

  setFontFamily(fontFamily: string): void;

  fontSize(): string;

  setFontSize(fontSize: string): void;

  fontSizeAdjust(): string;

  setFontSizeAdjust(fontSizeAdjust: string): void;

  fontStretch(): string;

  setFontStretch(fontStretch: string): void;

  fontStyle(): string;

  setFontStyle(fontStyle: string): void;

  fontVariant(): string;

  setFontVariant(fontVariant: string): void;

  fontWeight(): string;

  setFontWeight(fontWeight: string): void;

  height(): string;

  setHeight(height: string): void;

  left(): string;

  setLeft(left: string): void;

  letterSpacing(): string;

  setLetterSpacing(letterSpacing: string): void;

  lineHeight(): string;

  setLineHeight(lineHeight: string): void;

  listStyle(): string;

  setListStyle(listStyle: string): void;

  listStyleImage(): string;

  setListStyleImage(listStyleImage: string): void;

  listStylePosition(): string;

  setListStylePosition(listStylePosition: string): void;

  listStyleType(): string;

  setListStyleType(listStyleType: string): void;

  margin(): string;

  setMargin(margin: string): void;

  marginTop(): string;

  setMarginTop(marginTop: string): void;

  marginRight(): string;

  setMarginRight(marginRight: string): void;

  marginBottom(): string;

  setMarginBottom(marginBottom: string): void;

  marginLeft(): string;

  setMarginLeft(marginLeft: string): void;

  markerOffset(): string;

  setMarkerOffset(markerOffset: string): void;

  marks(): string;

  setMarks(marks: string): void;

  maxHeight(): string;

  setMaxHeight(maxHeight: string): void;

  maxWidth(): string;

  setMaxWidth(maxWidth: string): void;

  minHeight(): string;

  setMinHeight(minHeight: string): void;

  minWidth(): string;

  setMinWidth(minWidth: string): void;

  orphans(): string;

  setOrphans(orphans: string): void;

  outline(): string;

  setOutline(outline: string): void;

  outlineColor(): string;

  setOutlineColor(outlineColor: string): void;

  outlineStyle(): string;

  setOutlineStyle(outlineStyle: string): void;

  outlineWidth(): string;

  setOutlineWidth(outlineWidth: string): void;

  overflow(): string;

  setOverflow(overflow: string): void;

  padding(): string;

  setPadding(padding: string): void;

  paddingTop(): string;

  setPaddingTop(paddingTop: string): void;

  paddingRight(): string;

  setPaddingRight(paddingRight: string): void;

  paddingBottom(): string;

  setPaddingBottom(paddingBottom: string): void;

  paddingLeft(): string;

  setPaddingLeft(paddingLeft: string): void;

  page(): string;

  setPage(page: string): void;

  pageBreakAfter(): string;

  setPageBreakAfter(pageBreakAfter: string): void;

  pageBreakBefore(): string;

  setPageBreakBefore(pageBreakBefore: string): void;

  pageBreakInside(): string;

  setPageBreakInside(pageBreakInside: string): void;

  pause(): string;

  setPause(pause: string): void;

  pauseAfter(): string;

  setPauseAfter(pauseAfter: string): void;

  pauseBefore(): string;

  setPauseBefore(pauseBefore: string): void;

  pitch(): string;

  setPitch(pitch: string): void;

  pitchRange(): string;

  setPitchRange(pitchRange: string): void;

  playDuring(): string;

  setPlayDuring(playDuring: string): void;

  position(): string;

  setPosition(position: string): void;

  quotes(): string;

  setQuotes(quotes: string): void;

  richness(): string;

  setRichness(richness: string): void;

  right(): string;

  setRight(right: string): void;

  size(): string;

  setSize(size: string): void;

  speak(): string;

  setSpeak(speak: string): void;

  speakHeader(): string;

  setSpeakHeader(speakHeader: string): void;

  speakNumeral(): string;

  setSpeakNumeral(speakNumeral: string): void;

  speakPunctuation(): string;

  setSpeakPunctuation(speakPunctuation: string): void;

  speechRate(): string;

  setSpeechRate(speechRate: string): void;

  stress(): string;

  setStress(stress: string): void;

  tableLayout(): string;

  setTableLayout(tableLayout: string): void;

  textAlign(): string;

  setTextAlign(textAlign: string): void;

  textDecoration(): string;

  setTextDecoration(textDecoration: string): void;

  textIndent(): string;

  setTextIndent(textIndent: string): void;

  textShadow(): string;

  setTextShadow(textShadow: string): void;

  textTransform(): string;

  setTextTransform(textTransform: string): void;

  top(): string;

  setTop(top: string): void;

  unicodeBidi(): string;

  setUnicodeBidi(unicodeBidi: string): void;

  verticalAlign(): string;

  setVerticalAlign(verticalAlign: string): void;

  visibility(): string;

  setVisibility(visibility: string): void;

  voiceFamily(): string;

  setVoiceFamily(voiceFamily: string): void;

  volume(): string;

  setVolume(volume: string): void;

  whiteSpace(): string;

  setWhiteSpace(whiteSpace: string): void;

  widows(): string;

  setWidows(widows: string): void;

  width(): string;

  setWidth(width: string): void;

  wordSpacing(): string;

  setWordSpacing(wordSpacing: string): void;

  zIndex(): string;

  setZIndex(zIndex: string): void;
}

declare class DOMObject extends WebScriptObject implements NSCopying {
  readonly sheet: DOMStyleSheet;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMDocument extends DOMNode {
  readonly doctype: DOMDocumentType;

  readonly implementation: DOMImplementation;

  readonly documentElement: DOMElement;

  readonly inputEncoding: string;

  readonly xmlEncoding: string;

  xmlVersion: string;

  xmlStandalone: boolean;

  documentURI: string;

  readonly defaultView: DOMAbstractView;

  readonly styleSheets: DOMStyleSheetList;

  title: string;

  readonly referrer: string;

  readonly domain: string;

  readonly URL: string;

  cookie: string;

  body: DOMHTMLElement;

  readonly images: DOMHTMLCollection;

  readonly applets: DOMHTMLCollection;

  readonly links: DOMHTMLCollection;

  readonly forms: DOMHTMLCollection;

  readonly anchors: DOMHTMLCollection;

  readonly lastModified: string;

  charset: string;

  readonly defaultCharset: string;

  readonly readyState: string;

  readonly characterSet: string;

  readonly preferredStylesheetSet: string;

  selectedStylesheetSet: string;

  readonly activeElement: DOMElement;

  createElement(tagName: string): DOMElement;

  createDocumentFragment(): DOMDocumentFragment;

  createTextNode(data: string): DOMText;

  createComment(data: string): DOMComment;

  createCDATASection(data: string): DOMCDATASection;

  createProcessingInstructionData(target: string, data: string): DOMProcessingInstruction;

  createAttribute(name: string): DOMAttr;

  createEntityReference(name: string): DOMEntityReference;

  getElementsByTagName(tagname: string): DOMNodeList;

  importNodeDeep(importedNode: DOMNode, deep: boolean): DOMNode;

  createElementNSQualifiedName(namespaceURI: string, qualifiedName: string): DOMElement;

  createAttributeNSQualifiedName(namespaceURI: string, qualifiedName: string): DOMAttr;

  getElementsByTagNameNSLocalName(namespaceURI: string, localName: string): DOMNodeList;

  adoptNode(source: DOMNode): DOMNode;

  createEvent(eventType: string): DOMEvent;

  createRange(): DOMRange;

  createNodeIteratorWhatToShowFilterExpandEntityReferences(root: DOMNode, whatToShow: number, filter: DOMNodeFilter, expandEntityReferences: boolean): DOMNodeIterator;

  createTreeWalkerWhatToShowFilterExpandEntityReferences(root: DOMNode, whatToShow: number, filter: DOMNodeFilter, expandEntityReferences: boolean): DOMTreeWalker;

  getOverrideStylePseudoElement(element: DOMElement, pseudoElement: string): DOMCSSStyleDeclaration;

  createExpressionResolver(expression: string, resolver: DOMXPathNSResolver): DOMXPathExpression;

  createNSResolver(nodeResolver: DOMNode): DOMXPathNSResolver;

  evaluateContextNodeResolverTypeInResult(expression: string, contextNode: DOMNode, resolver: DOMXPathNSResolver, type: number, inResult: DOMXPathResult): DOMXPathResult;

  execCommandUserInterfaceValue(command: string, userInterface: boolean, value: string): boolean;

  execCommandUserInterface(command: string, userInterface: boolean): boolean;

  execCommand(command: string): boolean;

  queryCommandEnabled(command: string): boolean;

  queryCommandIndeterm(command: string): boolean;

  queryCommandState(command: string): boolean;

  queryCommandSupported(command: string): boolean;

  queryCommandValue(command: string): string;

  getElementsByName(elementName: string): DOMNodeList;

  elementFromPointY(x: number, y: number): DOMElement;

  createCSSStyleDeclaration(): DOMCSSStyleDeclaration;

  getComputedStylePseudoElement(element: DOMElement, pseudoElement: string): DOMCSSStyleDeclaration;

  getMatchedCSSRulesPseudoElement(element: DOMElement, pseudoElement: string): DOMCSSRuleList;

  getMatchedCSSRulesPseudoElementAuthorOnly(element: DOMElement, pseudoElement: string, authorOnly: boolean): DOMCSSRuleList;

  getElementsByClassName(classNames: string): DOMNodeList;

  hasFocus(): boolean;

  webkitCancelFullScreen(): void;

  getElementById(elementId: string): DOMElement;

  querySelector(selectors: string): DOMElement;

  querySelectorAll(selectors: string): DOMNodeList;

  createProcessingInstruction(target: string, data: string): DOMProcessingInstruction;

  importNode(importedNode: DOMNode, deep: boolean): DOMNode;

  createElementNS(namespaceURI: string, qualifiedName: string): DOMElement;

  createAttributeNS(namespaceURI: string, qualifiedName: string): DOMAttr;

  getElementsByTagNameNS(namespaceURI: string, localName: string): DOMNodeList;

  createNodeIterator(root: DOMNode, whatToShow: number, filter: DOMNodeFilter, expandEntityReferences: boolean): DOMNodeIterator;

  createTreeWalker(root: DOMNode, whatToShow: number, filter: DOMNodeFilter, expandEntityReferences: boolean): DOMTreeWalker;

  getOverrideStyle(element: DOMElement, pseudoElement: string): DOMCSSStyleDeclaration;

  createExpression(expression: string, resolver: DOMXPathNSResolver): DOMXPathExpression;

  evaluate(expression: string, contextNode: DOMNode, resolver: DOMXPathNSResolver, type: number, inResult: DOMXPathResult): DOMXPathResult;

  getComputedStyle(element: DOMElement, pseudoElement: string): DOMCSSStyleDeclaration;

  readonly webFrame: WebFrame;

  URLWithAttributeString(string: string): NSURL;
}

declare class DOMHTMLTableCaptionElement extends DOMHTMLElement {
  align: string;
}

declare class DOMMouseEvent extends DOMUIEvent {
  readonly screenX: number;

  readonly screenY: number;

  readonly clientX: number;

  readonly clientY: number;

  readonly ctrlKey: boolean;

  readonly shiftKey: boolean;

  readonly altKey: boolean;

  readonly metaKey: boolean;

  readonly button: number;

  readonly relatedTarget: DOMEventTarget;

  readonly offsetX: number;

  readonly offsetY: number;

  readonly x: number;

  readonly y: number;

  readonly fromElement: DOMNode;

  readonly toElement: DOMNode;

  initMouseEventCanBubbleCancelableViewDetailScreenXScreenYClientXClientYCtrlKeyAltKeyShiftKeyMetaKeyButtonRelatedTarget(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget: DOMEventTarget): this;

  initMouseEvent(type: string, canBubble: boolean, cancelable: boolean, view: DOMAbstractView, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget: DOMEventTarget): this;
}

declare class DOMHTMLFrameSetElement extends DOMHTMLElement {
  cols: string;

  rows: string;
}

declare class DOMHTMLPreElement extends DOMHTMLElement {
  width: number;

  wrap: boolean;
}

declare class DOMCharacterData extends DOMNode {
  data: string;

  readonly length: number;

  substringDataLength(offset: number, length: number): string;

  appendData(data: string): void;

  insertDataData(offset: number, data: string): void;

  deleteDataLength(offset: number, length: number): void;

  replaceDataLengthData(offset: number, length: number, data: string): void;

  substringData(offset: number, length: number): string;

  insertData(offset: number, data: string): void;

  deleteData(offset: number, length: number): void;

  replaceData(offset: number, length: number, data: string): void;
}

declare class DOMHTMLScriptElement extends DOMHTMLElement {
  text: string;

  htmlFor: string;

  event: string;

  charset: string;

  defer: boolean;

  src: string;

  type: string;
}

declare class DOMHTMLLabelElement extends DOMHTMLElement {
  readonly form: DOMHTMLFormElement;

  htmlFor: string;

  accessKey: string;
}

declare class DOMProcessingInstruction extends DOMCharacterData {
  readonly target: string;

  readonly sheet: DOMStyleSheet;
}

declare class DOMHTMLInputElement extends DOMHTMLElement {
  accept: string;

  alt: string;

  autofocus: boolean;

  defaultChecked: boolean;

  checked: boolean;

  disabled: boolean;

  readonly form: DOMHTMLFormElement;

  files: DOMFileList;

  indeterminate: boolean;

  maxLength: number;

  multiple: boolean;

  name: string;

  readOnly: boolean;

  size: string;

  src: string;

  type: string;

  defaultValue: string;

  value: string;

  readonly willValidate: boolean;

  selectionStart: number;

  selectionEnd: number;

  align: string;

  useMap: string;

  accessKey: string;

  readonly altDisplayString: string;

  readonly absoluteImageURL: NSURL;

  select(): void;

  setSelectionRangeEnd(start: number, end: number): void;

  click(): void;
}

declare class DOMHTMLFormElement extends DOMHTMLElement {
  acceptCharset: string;

  action: string;

  enctype: string;

  encoding: string;

  method: string;

  name: string;

  target: string;

  readonly elements: DOMHTMLCollection;

  readonly length: number;

  submit(): void;

  reset(): void;
}

declare class DOMHTMLOptionElement extends DOMHTMLElement {
  disabled: boolean;

  readonly form: DOMHTMLFormElement;

  label: string;

  defaultSelected: boolean;

  selected: boolean;

  value: string;

  readonly text: string;

  readonly index: number;
}

declare class WKWebView extends NSView {
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

  takeSnapshotWithConfigurationCompletionHandler(snapshotConfiguration: WKSnapshotConfiguration | null, completionHandler: (p1: NSImage, p2: NSError) => void | null): void;

  createPDFWithConfigurationCompletionHandler(pdfConfiguration: WKPDFConfiguration | null, completionHandler: (p1: NSData, p2: NSError) => void | null): void;

  createWebArchiveDataWithCompletionHandler(completionHandler: (p1: NSData, p2: NSError) => void): void;

  allowsBackForwardNavigationGestures: boolean;

  customUserAgent: string;

  allowsLinkPreview: boolean;

  allowsMagnification: boolean;

  magnification: number;

  setMagnificationCenteredAtPoint(magnification: number, point: CGPoint): void;

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

  printOperationWithPrintInfo(printInfo: NSPrintInfo): NSPrintOperation;

  readonly themeColor: NSColor;

  underPageBackgroundColor: NSColor;

  readonly fullscreenState: interop.Enum<typeof WKFullscreenState>;

  readonly minimumViewportInset: NSEdgeInsets;

  readonly maximumViewportInset: NSEdgeInsets;

  setMinimumViewportInsetMaximumViewportInset(minimumViewportInset: NSEdgeInsets, maximumViewportInset: NSEdgeInsets): void;

  isInspectable: boolean;

  readonly isWritingToolsActive: boolean;

  readonly certificateChain: NSArray;
}

declare class DOMHTMLTableColElement extends DOMHTMLElement {
  align: string;

  ch: string;

  chOff: string;

  span: number;

  vAlign: string;

  width: string;
}

declare class WKSecurityOrigin extends NSObject {
  readonly protocol: string;

  readonly host: string;

  readonly port: number;
}

declare class WKFindConfiguration extends NSObject implements NSCopying {
  backwards: boolean;

  caseSensitive: boolean;

  wraps: boolean;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class WKContentRuleListStore extends NSObject {
  static defaultStore<This extends abstract new (...args: any) => any>(this: This): InstanceType<This>;

  static storeWithURL<This extends abstract new (...args: any) => any>(this: This, url: NSURL): InstanceType<This>;

  compileContentRuleListForIdentifierEncodedContentRuleListCompletionHandler(identifier: string, encodedContentRuleList: string, completionHandler: (p1: WKContentRuleList, p2: NSError) => void): void;

  lookUpContentRuleListForIdentifierCompletionHandler(identifier: string, completionHandler: (p1: WKContentRuleList, p2: NSError) => void): void;

  removeContentRuleListForIdentifierCompletionHandler(identifier: string, completionHandler: (p1: NSError) => void): void;

  getAvailableContentRuleListIdentifiers(completionHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class DOMFile extends DOMBlob {
  readonly name: string;
}

declare class DOMHTMLBaseElement extends DOMHTMLElement {
  href: string;

  target: string;
}

declare class DOMDocumentFragment extends DOMNode {
}

declare class DOMHTMLOptionsCollection extends DOMObject {
  selectedIndex: number;

  length: number;

  namedItem(name: string): DOMNode;

  addIndex(option: DOMHTMLOptionElement, index: number): void;

  remove(index: number): void;

  item(index: number): DOMNode;
}

declare class DOMImplementation extends DOMObject {
  hasFeatureVersion(feature: string, version: string): boolean;

  createDocumentTypePublicIdSystemId(qualifiedName: string, publicId: string, systemId: string): DOMDocumentType;

  createDocumentQualifiedNameDoctype(namespaceURI: string, qualifiedName: string, doctype: DOMDocumentType): DOMDocument;

  createCSSStyleSheetMedia(title: string, media: string): DOMCSSStyleSheet;

  createHTMLDocument(title: string): DOMHTMLDocument;

  hasFeature(feature: string, version: string): boolean;

  createDocumentType(qualifiedName: string, publicId: string, systemId: string): DOMDocumentType;

  createDocument(namespaceURI: string, qualifiedName: string, doctype: DOMDocumentType): DOMDocument;

  createCSSStyleSheet(title: string, media: string): DOMCSSStyleSheet;
}

declare class DOMComment extends DOMCharacterData {
}

declare class WKBackForwardListItem extends NSObject {
  readonly URL: NSURL;

  readonly title: string;

  readonly initialURL: NSURL;
}

declare class WKContentWorld extends NSObject {
  static readonly pageWorld: WKContentWorld;

  static readonly defaultClientWorld: WKContentWorld;

  static worldWithName(name: string): WKContentWorld;

  readonly name: string;
}

declare class DOMBlob extends DOMObject {
  readonly size: number;
}

declare class DOMAbstractView extends DOMObject {
  readonly document: DOMDocument;
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

  userInterfaceDirectionPolicy: interop.Enum<typeof WKUserInterfaceDirectionPolicy>;

  setURLSchemeHandlerForURLScheme(urlSchemeHandler: WKURLSchemeHandler | null, urlScheme: string): void;

  urlSchemeHandlerForURLScheme(urlScheme: string): WKURLSchemeHandler;

  supportsAdaptiveImageGlyph: boolean;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;
}

declare class DOMHTMLFontElement extends DOMHTMLElement {
  color: string;

  face: string;

  size: string;
}

declare class DOMAttr extends DOMNode {
  readonly name: string;

  readonly specified: boolean;

  value: string;

  readonly ownerElement: DOMElement;

  readonly style: DOMCSSStyleDeclaration;
}

declare class DOMCSSStyleSheet extends DOMStyleSheet {
  readonly ownerRule: DOMCSSRule;

  readonly cssRules: DOMCSSRuleList;

  readonly rules: DOMCSSRuleList;

  insertRuleIndex(rule: string, index: number): number;

  deleteRule(index: number): void;

  addRuleStyleIndex(selector: string, style: string, index: number): number;

  removeRule(index: number): void;

  insertRule(rule: string, index: number): number;
}

// @ts-ignore ClassDecl.tsIgnore
declare class DOMHTMLElement extends DOMElement {
  title: string;

  lang: string;

  dir: string;

  tabIndex: number;

  accessKey: string;

  // @ts-ignore MemberDecl.tsIgnore
  innerText: string;

  outerText: string;

  contentEditable: string;

  readonly isContentEditable: boolean;

  idName: string;

  readonly children: DOMHTMLCollection;

  readonly titleDisplayString: string;

  click(): void;
}

declare class DOMCSSValueList extends DOMCSSValue {
  readonly length: number;

  item(index: number): DOMCSSValue;
}

declare class DOMCSSCharsetRule extends DOMCSSRule {
  readonly encoding: string;
}

declare class DOMCSSImportRule extends DOMCSSRule {
  readonly href: string;

  readonly media: DOMMediaList;

  readonly styleSheet: DOMCSSStyleSheet;
}

declare class WKNavigationResponse extends NSObject {
  readonly isForMainFrame: boolean;

  readonly response: NSURLResponse;

  readonly canShowMIMEType: boolean;
}

declare class WebFrame extends NSObject {
  initWithNameWebFrameViewWebView(name: string, view: WebFrameView, webView: WebView): this;

  readonly name: string;

  readonly webView: WebView;

  readonly frameView: WebFrameView;

  readonly DOMDocument: DOMDocument;

  readonly frameElement: DOMHTMLElement;

  loadRequest(request: NSURLRequest): void;

  loadDataMIMETypeTextEncodingNameBaseURL(data: NSData, MIMEType: string, encodingName: string, URL: NSURL): void;

  loadHTMLStringBaseURL(string: string, URL: NSURL): void;

  loadAlternateHTMLStringBaseURLForUnreachableURL(string: string, baseURL: NSURL, unreachableURL: NSURL): void;

  loadArchive(archive: WebArchive): void;

  readonly dataSource: WebDataSource;

  readonly provisionalDataSource: WebDataSource;

  stopLoading(): void;

  reload(): void;

  reloadFromOrigin(): void;

  findFrameNamed(name: string): WebFrame;

  readonly parentFrame: WebFrame;

  readonly childFrames: NSArray;

  readonly windowObject: WebScriptObject;

  readonly globalContext: interop.Pointer;

  readonly javaScriptContext: JSContext;
}

declare class DOMCSSUnknownRule extends DOMCSSRule {
}

declare class DOMHTMLHeadingElement extends DOMHTMLElement {
  align: string;
}

declare class DOMNodeIterator extends DOMObject {
  readonly root: DOMNode;

  readonly whatToShow: number;

  readonly filter: DOMNodeFilter;

  readonly expandEntityReferences: boolean;

  readonly referenceNode: DOMNode;

  readonly pointerBeforeReferenceNode: boolean;

  nextNode(): DOMNode;

  previousNode(): DOMNode;

  detach(): void;
}

declare class DOMText extends DOMCharacterData {
  readonly wholeText: string;

  splitText(offset: number): DOMText;

  replaceWholeText(content: string): DOMText;
}

declare class DOMEvent extends DOMObject {
  readonly type: string;

  readonly target: DOMEventTarget;

  readonly currentTarget: DOMEventTarget;

  readonly eventPhase: number;

  readonly bubbles: boolean;

  readonly cancelable: boolean;

  readonly timeStamp: number;

  readonly srcElement: DOMEventTarget;

  returnValue: boolean;

  cancelBubble: boolean;

  stopPropagation(): void;

  preventDefault(): void;

  initEventCanBubbleArgCancelableArg(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): this;

  initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): this;
}

declare class DOMHTMLMarqueeElement extends DOMHTMLElement {
  start(): void;

  stop(): void;
}

declare class DOMEntity extends DOMNode {
  readonly publicId: string;

  readonly systemId: string;

  readonly notationName: string;
}

declare class WKBackForwardList extends NSObject {
  readonly currentItem: WKBackForwardListItem;

  readonly backItem: WKBackForwardListItem;

  readonly forwardItem: WKBackForwardListItem;

  itemAtIndex(index: number): WKBackForwardListItem;

  readonly backList: NSArray;

  readonly forwardList: NSArray;
}

declare class DOMHTMLTitleElement extends DOMHTMLElement {
  text: string;
}

