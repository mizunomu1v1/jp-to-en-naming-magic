import * as deepl from 'deepl-node';
import { API_KEY, DEEPL_API_POST, EN, JA } from '../constants/appConstants';
import { ERROR_TITLES, NYAN_MESSAGES } from '../constants/commonConstants';
import { ApiResponse, ErrorResponse } from '../types/commonType';
/**
 * TranslateApi呼び出し関数
 * @returns
 */
export const deeplService = async (
  userInput: string,
): Promise<ApiResponse<string>> => {
  // APIキーの取得
  const authKey = process.env.API_KEY;
  if (!authKey) {
    //　APIキーの取得に失敗した場合、エラー
    throw new Error(NYAN_MESSAGES.ERROR.NOT_FOUND(API_KEY));
  }
  const translator = new deepl.Translator(authKey);

  try {
    // API呼び出し
    const result = await translator.translateText(userInput, JA, EN);

    return result.text;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : String(error),
      method: 'callTranslateAPI',
      title: ERROR_TITLES.CALL_FAILED,
      detail: NYAN_MESSAGES.ERROR.CALL_FAILED(DEEPL_API_POST),
    };
  }
};

/**
 * エラー型判別関数
 * @param response
 * @returns ErrorResponse
 */
export const isErrorResponse = (
  response: unknown,
): response is ErrorResponse => {
  return (
    typeof response === 'object' && response !== null && 'error' in response
  );
};
