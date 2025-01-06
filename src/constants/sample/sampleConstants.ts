import { GetApiResponse } from '../../types/sample/sampleTypes';

// URL
export const GET_API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1';
export const POST_API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

//API名
export const JSON_PLACHHOLDER_API_POST = `JSONPlaceholder API（/posts）`;

export const GET_API_ERROR_RESPONSE: GetApiResponse = {
  userId: -1, // エラー用の特別な値
  id: -1,
  title: 'エラーが発生しました',
  completed: false,
};
