/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const NLTagOrganizationName: string;

declare const NLTagPersonalName: string;

declare const NLTagOtherWhitespace: string;

declare const NLTagParagraphBreak: string;

declare const NLTagDash: string;

declare const NLTagCloseParenthesis: string;

declare const NLTagOpenParenthesis: string;

declare const NLTagOpenQuote: string;

declare const NLTagOtherWord: string;

declare const NLTagIdiom: string;

declare const NLTagPreposition: string;

declare const NLTagDeterminer: string;

declare const NLTagPronoun: string;

declare const NLTagAdverb: string;

declare const NLTagAdjective: string;

declare const NLTagOther: string;

declare const NLTagWhitespace: string;

declare const NLTagPunctuation: string;

declare const NLTagSchemeLanguage: string;

declare const NLTagSchemeNameTypeOrLexicalClass: string;

declare const NLTagSchemeLexicalClass: string;

declare const NLScriptTibetan: string;

declare const NLScriptSinhala: string;

declare const NLScriptOriya: string;

declare const NLScriptMalayalam: string;

declare const NLScriptLatin: string;

declare const NLScriptKannada: string;

declare const NLScriptHebrew: string;

declare const NLScriptGurmukhi: string;

declare const NLScriptGujarati: string;

declare const NLScriptGreek: string;

declare const NLScriptGeorgian: string;

declare const NLScriptDevanagari: string;

declare const NLScriptCyrillic: string;

declare const NLScriptCherokee: string;

declare const NLScriptCanadianAboriginalSyllabics: string;

declare const NLScriptBengali: string;

declare const NLScriptArabic: string;

declare const NLScriptUndetermined: string;

declare const NLLanguageTurkish: string;

declare const NLLanguageTraditionalChinese: string;

declare const NLLanguageTibetan: string;

declare const NLLanguageThai: string;

declare const NLLanguageSwedish: string;

declare const NLLanguageSpanish: string;

declare const NLLanguageSimplifiedChinese: string;

declare const NLLanguageRomanian: string;

declare const NLLanguagePersian: string;

declare const NLLanguageNorwegian: string;

declare const NLLanguageMongolian: string;

declare const NLLanguageMalayalam: string;

declare const NLLanguageLao: string;

declare const NLLanguageIndonesian: string;

declare const NLLanguageIcelandic: string;

declare const NLLanguageHungarian: string;

declare const NLLanguageHebrew: string;

declare const NLLanguageFinnish: string;

declare const NLLanguageDutch: string;

declare const NLLanguageDanish: string;

declare const NLLanguageCherokee: string;

declare const NLLanguageBulgarian: string;

declare const NLLanguageBengali: string;

declare const NLLanguageArmenian: string;

declare const NLLanguageAmharic: string;

declare const NLLanguageUndetermined: string;

declare const NLTagSentenceTerminator: string;

declare const NLTagNoun: string;

declare const NLLanguageCatalan: string;

declare const NLLanguagePolish: string;

declare const NLLanguageBurmese: string;

declare const NLLanguageMalay: string;

declare const NLLanguageItalian: string;

declare const NLScriptMyanmar: string;

declare const NLTagSchemeNameType: string;

declare const NLLanguageUkrainian: string;

declare const NLLanguageTelugu: string;

declare const NLTagNumber: string;

declare const NLLanguageSinhalese: string;

declare const NLLanguageGreek: string;

declare const NLScriptKhmer: string;

declare const NLScriptLao: string;

declare const NLLanguagePortuguese: string;

declare const NLContextualEmbeddingKeyRevision: string;

declare const NLTagCloseQuote: string;

declare const NLTagWord: string;

declare const NLScriptTraditionalChinese: string;

declare const NLTagOtherPunctuation: string;

declare const NLLanguageHindi: string;

declare const NLLanguageGeorgian: string;

declare const NLScriptTamil: string;

declare const NLLanguageOriya: string;

declare const NLTagSchemeTokenType: string;

declare const NLScriptEthiopic: string;

declare const NLContextualEmbeddingKeyScripts: string;

declare const NLLanguageArabic: string;

declare const NLScriptKorean: string;

declare const NLLanguagePunjabi: string;

declare const NLLanguageVietnamese: string;

declare const NLLanguageSlovak: string;

declare const NLLanguageUrdu: string;

declare const NLTagSchemeLemma: string;

declare const NLLanguageRussian: string;

declare const NLContextualEmbeddingKeyLanguages: string;

declare const NLLanguageGerman: string;

declare const NLScriptThai: string;

declare const NLTagSchemeScript: string;

declare const NLLanguageGujarati: string;

declare const NLLanguageEnglish: string;

declare const NLScriptTelugu: string;

declare const NLTagConjunction: string;

declare const NLLanguageKorean: string;

declare const NLScriptMongolian: string;

declare const NLScriptArmenian: string;

declare const NLLanguageKazakh: string;

declare const NLScriptJapanese: string;

declare const NLLanguageJapanese: string;

declare const NLLanguageKannada: string;

declare const NLLanguageFrench: string;

declare const NLLanguageCroatian: string;

declare const NLLanguageTamil: string;

declare const NLLanguageKhmer: string;

declare const NLTagParticle: string;

declare const NLTagWordJoiner: string;

declare const NLTagInterjection: string;

declare const NLTagVerb: string;

declare const NLTagClassifier: string;

declare const NLLanguageMarathi: string;

declare const NLLanguageCzech: string;

declare const NLTagPlaceName: string;

declare const NLTagSchemeSentimentScore: string;

declare const NLScriptSimplifiedChinese: string;

declare const NLTaggerAssetsResult: {
  Available: 0,
  NotAvailable: 1,
  Error: 2,
};

declare const NLTaggerOptions: {
  OmitWords: 1,
  OmitPunctuation: 2,
  OmitWhitespace: 4,
  OmitOther: 8,
  JoinNames: 16,
  JoinContractions: 32,
};

declare const NLModelType: {
  Classifier: 0,
  Sequence: 1,
};

declare const NLTokenizerAttributes: {
  Numeric: 1,
  Symbolic: 2,
  Emoji: 4,
};

declare const NLTokenUnit: {
  Word: 0,
  Sentence: 1,
  Paragraph: 2,
  Document: 3,
};

declare const NLDistanceType: {
  NLDistanceTypeCosine: 0,
};

declare const NLContextualEmbeddingAssetsResult: {
  Available: 0,
  NotAvailable: 1,
  Error: 2,
};

declare class NLTagger extends NSObject {
  initWithTagSchemes(tagSchemes: NSArray<interop.Object> | Array<interop.Object>): this;

  readonly tagSchemes: NSArray;

  string: string;

  static availableTagSchemesForUnitLanguage(unit: interop.Enum<typeof NLTokenUnit>, language: string): NSArray;

  tokenRangeAtIndexUnit(characterIndex: number, unit: interop.Enum<typeof NLTokenUnit>): _NSRange;

  tokenRangeForRangeUnit(range: _NSRange, unit: interop.Enum<typeof NLTokenUnit>): _NSRange;

  readonly dominantLanguage: string;

  enumerateTagsInRangeUnitSchemeOptionsUsingBlock(range: _NSRange, unit: interop.Enum<typeof NLTokenUnit>, scheme: string, options: interop.Enum<typeof NLTaggerOptions>, block: (p1: string, p2: _NSRange, p3: interop.PointerConvertible) => void | null): void;

  tagAtIndexUnitSchemeTokenRange(characterIndex: number, unit: interop.Enum<typeof NLTokenUnit>, scheme: string, tokenRange: interop.PointerConvertible): string;

  tagsInRangeUnitSchemeOptionsTokenRanges(range: _NSRange, unit: interop.Enum<typeof NLTokenUnit>, scheme: string, options: interop.Enum<typeof NLTaggerOptions>, tokenRanges: interop.PointerConvertible): NSArray;

  tagHypothesesAtIndexUnitSchemeMaximumCountTokenRange(characterIndex: number, unit: interop.Enum<typeof NLTokenUnit>, scheme: string, maximumCount: number, tokenRange: interop.PointerConvertible): NSDictionary;

  setLanguageRange(language: string, range: _NSRange): void;

  setOrthographyRange(orthography: NSOrthography, range: _NSRange): void;

  setModelsForTagScheme(models: NSArray<interop.Object> | Array<interop.Object>, tagScheme: string): void;

  modelsForTagScheme(tagScheme: string): NSArray;

  setGazetteersForTagScheme(gazetteers: NSArray<interop.Object> | Array<interop.Object>, tagScheme: string): void;

  gazetteersForTagScheme(tagScheme: string): NSArray;

  static requestAssetsForLanguageTagSchemeCompletionHandler(language: string, tagScheme: string, completionHandler: (p1: interop.Enum<typeof NLTaggerAssetsResult>, p2: NSError) => void | null): void;
}

declare class NLModel extends NSObject {
  static modelWithContentsOfURLError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, error: interop.PointerConvertible): InstanceType<This>;

  static modelWithMLModelError<This extends abstract new (...args: any) => any>(this: This, mlModel: MLModel, error: interop.PointerConvertible): InstanceType<This>;

  readonly configuration: NLModelConfiguration;

  predictedLabelForString(string: string): string;

  predictedLabelsForTokens(tokens: NSArray<interop.Object> | Array<interop.Object>): NSArray;

  predictedLabelHypothesesForStringMaximumCount(string: string, maximumCount: number): NSDictionary;

  predictedLabelHypothesesForTokensMaximumCount(tokens: NSArray<interop.Object> | Array<interop.Object>, maximumCount: number): NSArray;
}

declare class NLLanguageRecognizer extends NSObject {
  static dominantLanguageForString(string: string): string;

  init(): this;

  processString(string: string): void;

  reset(): void;

  readonly dominantLanguage: string;

  languageHypothesesWithMaximum(maxHypotheses: number): NSDictionary;

  get languageHints(): NSDictionary;
  set languageHints(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>);

  get languageConstraints(): NSArray;
  set languageConstraints(value: NSArray<interop.Object> | Array<interop.Object>);
}

declare class NLContextualEmbedding extends NSObject {
  static contextualEmbeddingWithModelIdentifier<This extends abstract new (...args: any) => any>(this: This, modelIdentifier: string): InstanceType<This>;

  static contextualEmbeddingsForValues(valuesDictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSArray;

  static contextualEmbeddingWithLanguage(language: string): NLContextualEmbedding;

  static contextualEmbeddingWithScript(script: string): NLContextualEmbedding;

  readonly modelIdentifier: string;

  readonly languages: NSArray;

  readonly scripts: NSArray;

  readonly revision: number;

  readonly dimension: number;

  readonly maximumSequenceLength: number;

  loadWithError(error: interop.PointerConvertible): boolean;

  unload(): void;

  embeddingResultForStringLanguageError(string: string, language: string | null, error: interop.PointerConvertible): NLContextualEmbeddingResult;

  readonly hasAvailableAssets: boolean;

  requestEmbeddingAssetsWithCompletionHandler(completionHandler: (p1: interop.Enum<typeof NLContextualEmbeddingAssetsResult>, p2: NSError) => void | null): void;
}

declare class NLGazetteer extends NSObject {
  static gazetteerWithContentsOfURLError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, error: interop.PointerConvertible): InstanceType<This>;

  initWithContentsOfURLError(url: NSURL, error: interop.PointerConvertible): this;

  initWithDataError(data: NSData, error: interop.PointerConvertible): this;

  initWithDictionaryLanguageError(dictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, language: string | null, error: interop.PointerConvertible): this;

  labelForString(string: string): string;

  readonly language: string;

  readonly data: NSData;

  static writeGazetteerForDictionaryLanguageToURLError(dictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, language: string | null, url: NSURL, error: interop.PointerConvertible): boolean;
}

declare class NLEmbedding extends NSObject {
  static wordEmbeddingForLanguage(language: string): NLEmbedding;

  static wordEmbeddingForLanguageRevision(language: string, revision: number): NLEmbedding;

  static sentenceEmbeddingForLanguage(language: string): NLEmbedding;

  static sentenceEmbeddingForLanguageRevision(language: string, revision: number): NLEmbedding;

  static embeddingWithContentsOfURLError<This extends abstract new (...args: any) => any>(this: This, url: NSURL, error: interop.PointerConvertible): InstanceType<This>;

  containsString(string: string): boolean;

  distanceBetweenStringAndStringDistanceType(firstString: string, secondString: string, distanceType: interop.Enum<typeof NLDistanceType>): number;

  enumerateNeighborsForStringMaximumCountDistanceTypeUsingBlock(string: string, maxCount: number, distanceType: interop.Enum<typeof NLDistanceType>, block: (p1: string, p2: number, p3: interop.PointerConvertible) => void): void;

  enumerateNeighborsForStringMaximumCountMaximumDistanceDistanceTypeUsingBlock(string: string, maxCount: number, maxDistance: number, distanceType: interop.Enum<typeof NLDistanceType>, block: (p1: string, p2: number, p3: interop.PointerConvertible) => void): void;

  neighborsForStringMaximumCountDistanceType(string: string, maxCount: number, distanceType: interop.Enum<typeof NLDistanceType>): NSArray;

  neighborsForStringMaximumCountMaximumDistanceDistanceType(string: string, maxCount: number, maxDistance: number, distanceType: interop.Enum<typeof NLDistanceType>): NSArray;

  vectorForString(string: string): NSArray;

  getVectorForString(vector: interop.PointerConvertible, string: string): boolean;

  enumerateNeighborsForVectorMaximumCountDistanceTypeUsingBlock(vector: NSArray<interop.Object> | Array<interop.Object>, maxCount: number, distanceType: interop.Enum<typeof NLDistanceType>, block: (p1: string, p2: number, p3: interop.PointerConvertible) => void): void;

  enumerateNeighborsForVectorMaximumCountMaximumDistanceDistanceTypeUsingBlock(vector: NSArray<interop.Object> | Array<interop.Object>, maxCount: number, maxDistance: number, distanceType: interop.Enum<typeof NLDistanceType>, block: (p1: string, p2: number, p3: interop.PointerConvertible) => void): void;

  neighborsForVectorMaximumCountDistanceType(vector: NSArray<interop.Object> | Array<interop.Object>, maxCount: number, distanceType: interop.Enum<typeof NLDistanceType>): NSArray;

  neighborsForVectorMaximumCountMaximumDistanceDistanceType(vector: NSArray<interop.Object> | Array<interop.Object>, maxCount: number, maxDistance: number, distanceType: interop.Enum<typeof NLDistanceType>): NSArray;

  readonly dimension: number;

  readonly vocabularySize: number;

  readonly language: string;

  readonly revision: number;

  static supportedRevisionsForLanguage(language: string): NSIndexSet;

  static currentRevisionForLanguage(language: string): number;

  static supportedSentenceEmbeddingRevisionsForLanguage(language: string): NSIndexSet;

  static currentSentenceEmbeddingRevisionForLanguage(language: string): number;

  static writeEmbeddingForDictionaryLanguageRevisionToURLError(dictionary: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, language: string | null, revision: number, url: NSURL, error: interop.PointerConvertible): boolean;
}

declare class NLModelConfiguration extends NSObject implements NSCopying, NSSecureCoding {
  readonly type: interop.Enum<typeof NLModelType>;

  readonly language: string;

  readonly revision: number;

  static supportedRevisionsForType(type: interop.Enum<typeof NLModelType>): NSIndexSet;

  static currentRevisionForType(type: interop.Enum<typeof NLModelType>): number;

  copyWithZone(zone: interop.PointerConvertible): interop.Object;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class NLContextualEmbeddingResult extends NSObject {
  readonly string: string;

  readonly language: string;

  readonly sequenceLength: number;

  enumerateTokenVectorsInRangeUsingBlock(range: _NSRange, block: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: _NSRange, p3: interop.PointerConvertible) => void): void;

  tokenVectorAtIndexTokenRange(characterIndex: number, tokenRange: interop.PointerConvertible): NSArray;
}

declare class NLTokenizer extends NSObject {
  initWithUnit(unit: interop.Enum<typeof NLTokenUnit>): this;

  readonly unit: interop.Enum<typeof NLTokenUnit>;

  string: string;

  setLanguage(language: string): void;

  tokenRangeAtIndex(characterIndex: number): _NSRange;

  tokenRangeForRange(range: _NSRange): _NSRange;

  tokensForRange(range: _NSRange): NSArray;

  enumerateTokensInRangeUsingBlock(range: _NSRange, block: (p1: _NSRange, p2: interop.Enum<typeof NLTokenizerAttributes>, p3: interop.PointerConvertible) => void): void;
}

