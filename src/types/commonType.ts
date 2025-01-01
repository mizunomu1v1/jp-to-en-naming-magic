/**
 * エラーレスポンス型
 */
export type ErrorResponse = {
  error: string;
  method: string;
  title: string;
  detail: string;
};

/**
 * レスポンス型
 */
export type ApiResponse<T> = T | ErrorResponse;
