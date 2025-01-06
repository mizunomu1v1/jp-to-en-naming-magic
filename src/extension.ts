import * as dotenv from 'dotenv';
import path from 'path';
import * as vscode from 'vscode';
import { translate } from './commands/translate';

export function activate(context: vscode.ExtensionContext) {
  // APIキー取得
  dotenv.config({ path: path.join(__dirname, '..', '.env') });

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.translate', translate),
  );
}

export function deactivate() {}
