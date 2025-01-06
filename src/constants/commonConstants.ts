// エラータイトル名
export const ERROR_TITLES = {
  CALL_FAILED: 'API呼び出しエラー',
} as const;

export const NYAN_MESSAGES = {
  ERROR: {
    NOT_FOUND: (target: string) => `${target}が見つからにゃかった…`,
    EMPTY_INPUT: (target: string) => `${target}が入力されにゃかった…'`,
    CALL_FAILED: (target: string) => `${target}の呼び出しに失敗したニャ😿'`,
  },
  INFO: {
    PLEASE_TEXT_TO_TRANSLATE: '翻訳したい文字を教えてにゃん🐈',
  },
} as const;
