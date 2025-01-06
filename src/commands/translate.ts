import * as vscode from 'vscode';

import { ACTIVE_EDITOR } from '../constants/appConstants';
import { NYAN_MESSAGES } from '../constants/commonConstants';
import { deeplService, isErrorResponse } from '../service/deeplService';
import { ApiResponse } from '../types/commonType';

// 翻訳Api呼び出しコマンド
export const translate = async () => {
  // アクティブなエディタを取得
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage(
      NYAN_MESSAGES.ERROR.NOT_FOUND(ACTIVE_EDITOR),
    );
    return;
  }

  // 入力ダイアログを表示
  const userInput = await vscode.window.showInputBox({
    prompt: NYAN_MESSAGES.INFO.PLEASE_TEXT_TO_TRANSLATE,
  });
  if (!userInput) {
    vscode.window.showWarningMessage(
      NYAN_MESSAGES.ERROR.EMPTY_INPUT(ACTIVE_EDITOR),
    );
    return;
  }

  // API呼び出し
  const result: ApiResponse<string> = await deeplService(userInput);
  if (isErrorResponse(result)) {
    console.error(result);
    return;
  }

  // 変換された文字をカーソル位置に挿入
  editor.edit((editBuilder) => {
    editBuilder.insert(editor.selection.active, result);
  });
};
