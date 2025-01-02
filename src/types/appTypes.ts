export const SOURCE_AUTO = 'auto' as const;
export const SOURCE_TEXT = 'text' as const;
export const SOURCE_TARGET = 'en' as const;

/**
 * 翻訳APIリクエストボディの型
 */
export type TranslateApiRequestBody = {
  q: string; // 翻訳するテキスト
  source: typeof SOURCE_AUTO; // "auto"のみ許可
  target: typeof SOURCE_TARGET; // 翻訳先の言語
  format: typeof SOURCE_TEXT; // "text"のみ許可
};

/**
 * 翻訳APIレスポンスの型
 */
export type TranslateApiResponse = {
  translatedText: string; // 翻訳されたテキスト
};
