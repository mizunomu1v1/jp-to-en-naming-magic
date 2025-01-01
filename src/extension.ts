import * as vscode from 'vscode';

//-------------
// extension.ts: 拡張機能の「何をするか」を書くメインファイル
//-------------

// activate関数: 拡張機能が有効になったときに実行される
export function activate(context: vscode.ExtensionContext) {

	// 一度だけ実行される
	console.log('Congratulations, your extension "now active!');

    // コマンド登録
	const disposable = vscode.commands.registerCommand('helloWorld', () => {
        // メッセージを表示する
        vscode.window.showInformationMessage('にゃんこが「こんにちは！」って言ったにゃ 🐾');
	});

	context.subscriptions.push(disposable);
}

//  deactivate関数: 拡張機能が無効になったときに呼び出される
export function deactivate() {}
