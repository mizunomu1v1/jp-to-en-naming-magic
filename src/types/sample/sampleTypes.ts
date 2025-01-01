/**
 * ＧＥＴＡＰＩレスポンス型
 */
export type GetApiResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

/**
 * ＰＯＳＴＡＰＩリクエストボディ型
 */
export type PostApiRequestBody = {
  title: string;
  body: string;
  userId: number;
};

/**
 * ＰＯＳＴＡＰＩレスポンス型
 */
export type PostApiResponse = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
