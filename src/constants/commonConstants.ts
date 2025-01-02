// エラータイトル名
export const ERROR_TITLES = {
  CALL_API: 'API呼び出しエラー',
} as const;

export const ERROR_DETAILS = {
  CALL_POST_API: 'JSONPlaceholder API（/posts）の呼び出しに失敗しました。',
  CALL_TRANSLATE_API:
    'LibreTranslate API（/translate）の呼び出しに失敗しました。',
} as const;
