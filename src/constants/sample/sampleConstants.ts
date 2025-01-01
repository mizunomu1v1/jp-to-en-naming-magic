import { GetApiResponse } from '../../types/sample/sampleTypes';

export const GET_API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1';

export const GET_API_ERROR_RESPONSE: GetApiResponse = {
  userId: -1, // エラー用の特別な値
  id: -1,
  title: 'エラーが発生しました',
  completed: false,
};

export const POST_API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
