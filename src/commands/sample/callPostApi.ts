import * as vscode from 'vscode';

import { GET_API_BASE_URL } from '../../constants/sample/sampleConstants';
import { PostApiResponse } from '../../types/sample/sampleTypes';

import { ApiResponse, ErrorResponse } from '../../types/commonType';

// ＰＯＳＴＡＰＩ呼び出しコマンド
export const callPostApi = async () => {
  const postApiResponse: ApiResponse<PostApiResponse> = await callSampleAPI();

  if (isErrorResponse(postApiResponse)) {
    console.error('エラーが発生しました:', postApiResponse);
    return;
  }

  vscode.window.showInformationMessage(postApiResponse.title);
};

/**
 * ＰＯＳＴＡＰＩ呼び出し関数
 * @returns
 */
const callSampleAPI = async (): Promise<ApiResponse<PostApiResponse>> => {
  try {
    const response = await fetch(GET_API_BASE_URL);
    const apiResponse: PostApiResponse =
      (await response.json()) as PostApiResponse;

    return apiResponse;
  } catch (error) {
    return {
      error: 'true',
      method: 'string',
      title: 'string',
      detail: 'string;',
    };
  }
};

/**
 * エラー型判別関数
 * @param response
 * @returns ErrorResponse
 */
const isErrorResponse = (response: unknown): response is ErrorResponse => {
  return (
    typeof response === 'object' && response !== null && 'error' in response
  );
};
