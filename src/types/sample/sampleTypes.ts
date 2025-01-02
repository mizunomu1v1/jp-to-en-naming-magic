/**
 * GetApiレスポンスの型
 */
export type GetApiResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

/**
 * PostApiリクエストボディの型
 */
export type PostApiRequestBody = {
  title: string;
  body: string;
  userId: number;
};

/**
 * PostApiレスポンスの型
 */
export type PostApiResponse = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
