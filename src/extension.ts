import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vscode-ext-unit-test.execute",
    async () => {
      vscode.window.showInformationMessage("Running unit tests...");

      const openFile = vscode.window.activeTextEditor?.document.fileName;

      const terminal =
        vscode.window.terminals.find(
          (term) => term.name === "vscode-ext-unit-test"
        ) || vscode.window.createTerminal({ name: "vscode-ext-unit-test" });

      terminal.sendText(`clear && yarn test:unit ${openFile} --silent=false`);
      terminal.show();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
