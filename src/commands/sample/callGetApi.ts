import * as vscode from 'vscode';

import {
  GET_API_BASE_URL,
  GET_API_ERROR_RESPONSE,
} from '../../constants/sample/sampleConstants';
import { GetApiResponse } from '../../types/sample/sampleTypes';

// ＧＥＴＡＰＩ呼び出しコマンド
export const callGetApi = async () => {
  const getApiResponse: GetApiResponse = await callSampleAPI();
  vscode.window.showInformationMessage(getApiResponse.title);
};

/**
 * ＧＥＴＡＰＩ呼び出し関数
 * @returns
 */
const callSampleAPI = async (): Promise<GetApiResponse> => {
  try {
    const response = await fetch(GET_API_BASE_URL);
    const apiResponse: GetApiResponse =
      (await response.json()) as GetApiResponse;

    return apiResponse;
  } catch (error) {
    console.error('エラーが発生しました:', error);

    return GET_API_ERROR_RESPONSE;
  }
};
