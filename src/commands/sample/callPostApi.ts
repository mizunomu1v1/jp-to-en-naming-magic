import * as vscode from 'vscode';

import {
  JSON_PLACHHOLDER_API_POST,
  POST_API_BASE_URL,
} from '../../constants/sample/sampleConstants';
import {
  PostApiRequestBody,
  PostApiResponse,
} from '../../types/sample/sampleTypes';

import { ERROR_TITLES, NYAN_MESSAGES } from '../../constants/commonConstants';
import { ApiResponse, ErrorResponse } from '../../types/commonType';

// PostApi呼び出しコマンド
export const callPostApi = async () => {
  // 入力ダイアログを表示
  const userInput = await vscode.window.showInputBox({
    prompt: 'なにか言ってみてにゃん🐈',
    placeHolder: '例: ぷにゃん',
  });

  if (!userInput) {
    vscode.window.showWarningMessage('文字が入力されにゃかった…');
    return;
  }

  const postApiResponse: ApiResponse<PostApiResponse> = await callSampleAPI(
    userInput,
  );

  if (isErrorResponse(postApiResponse)) {
    console.error(postApiResponse);
    return;
  }

  vscode.window.showInformationMessage(postApiResponse.title);
};

/**
 * PostApi呼び出し関数
 * @returns
 */
const callSampleAPI = async (
  userInput: string,
): Promise<ApiResponse<PostApiResponse>> => {
  const requestBody: PostApiRequestBody = {
    title: userInput,
    body: 'bar',
    userId: 1,
  };

  try {
    const response = await fetch(POST_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // ボディをJSON形式に変換して送信
      body: JSON.stringify(requestBody),
    });

    const apiResponse: PostApiResponse =
      (await response.json()) as PostApiResponse;

    return apiResponse;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : String(error),
      method: 'callSampleAPI',
      title: ERROR_TITLES.CALL_FAILED,
      detail: NYAN_MESSAGES.ERROR.CALL_FAILED(JSON_PLACHHOLDER_API_POST),
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
