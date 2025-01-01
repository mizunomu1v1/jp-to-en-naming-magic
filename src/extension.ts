import * as vscode from 'vscode';
import { callGetApi } from './commands/sample/callGetApi';
import { sayHello } from './commands/sample/sayHello';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    //あいさつコマンド
    vscode.commands.registerCommand('extension.sayHello', sayHello),
    //サンプルＧＥＴＡＰＩ呼び出しコマンド
    vscode.commands.registerCommand('extension.callGetApi', callGetApi),
  );
}

export function deactivate() {}
