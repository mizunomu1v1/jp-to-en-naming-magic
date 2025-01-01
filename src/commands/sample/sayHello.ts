import * as vscode from 'vscode';

// あいさつコマンド
export const sayHello = () => {
  vscode.window.showInformationMessage(
    'にゃんこが「こんにちは！」って言ったにゃ 🐾',
  );
};
