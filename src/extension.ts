import * as vscode from 'vscode';
import { callGetApi } from './commands/sample/callGetApi';
import { callPostApi } from './commands/sample/callPostApi';
import { sayHello } from './commands/sample/sayHello';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    //あいさつコマンド
    vscode.commands.registerCommand('extension.sayHello', sayHello),
    //GetApi呼び出しコマンド
    vscode.commands.registerCommand('extension.callGetApi', callGetApi),
    //postApi呼び出しコマンド
    vscode.commands.registerCommand('extension.callPostApi', callPostApi),
  );
}

export function deactivate() {}
