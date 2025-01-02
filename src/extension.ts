import * as dotenv from 'dotenv';
import path from 'path';
import * as vscode from 'vscode';
import { callTranslateApi } from './commands/callTranslateApi';
import { callGetApi } from './commands/sample/callGetApi';
import { callPostApi } from './commands/sample/callPostApi';
import { sayHello } from './commands/sample/sayHello';

export function activate(context: vscode.ExtensionContext) {
  dotenv.config({ path: path.join(__dirname, '..', '.env') });
  console.log('API_KEY:', process.env.API_KEY);

  context.subscriptions.push(
    //あいさつコマンド
    vscode.commands.registerCommand('extension.sayHello', sayHello),
    //GetApi呼び出しコマンド
    vscode.commands.registerCommand('extension.callGetApi', callGetApi),
    //postApi呼び出しコマンド
    vscode.commands.registerCommand('extension.callPostApi', callPostApi),
    //translateApi呼び出しコマンド
    vscode.commands.registerCommand(
      'extension.callTranslateApi',
      callTranslateApi,
    ),
  );
}

export function deactivate() {}
