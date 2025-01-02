import * as deepl from 'deepl-node';
import * as vscode from 'vscode';

import { EN, JA } from '../constants/appConstants';
import { ERROR_DETAILS, ERROR_TITLES } from '../constants/commonConstants';
import { ApiResponse, ErrorResponse } from '../types/commonType';

// 翻訳Api呼び出しコマンド
export const callTranslateApi = async () => {
  // 入力ダイアログを表示
  const userInput = await vscode.window.showInputBox({
    prompt: '翻訳したい文字を教えてにゃん🐈',
    placeHolder: '例: ねこ',
  });

  if (!userInput) {
    vscode.window.showWarningMessage('文字が入力されにゃかった…');
    return;
  }

  const result: ApiResponse<string> = await callTranslateAPI(userInput);

  if (isErrorResponse(result)) {
    console.error(result);
    return;
  }

  vscode.window.showInformationMessage(result);
};

/**
 * TranslateApi呼び出し関数
 * @returns
 */
const callTranslateAPI = async (
  userInput: string,
): Promise<ApiResponse<string>> => {
  // APIキーの取得
  const authKey = process.env.API_KEY;

  if (!authKey) {
    throw new Error('APIキーが設定されていません。');
  }

  const translator = new deepl.Translator(authKey);

  try {
    const result = await translator.translateText(userInput, JA, EN);

    return result.text;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : String(error),
      method: 'callTranslateAPI',
      title: ERROR_TITLES.CALL_API,
      detail: ERROR_DETAILS.CALL_TRANSLATE_API,
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
