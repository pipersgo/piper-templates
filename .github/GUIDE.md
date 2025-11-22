# GitHub Templates & Copilot Instructions

This folder contains GitHub templates and Copilot instruction files intended to be copied into a project's `.github/` directory. Use the files to standardize pull requests, issues, and AI-generated content such as commit messages.

## Contents

- `copilot-commit-message-instructions.md`: Guidance used by Copilot or other AI tools to generate commit messages (Conventional Commits friendly).
- `copilot-instructions.md`: General Copilot customization and usage guidance.
- `pull_request_template.md`: Pull request template that populates new PR descriptions in the GitHub UI.
- `prompts/`: Prompt templates for AI tasks. Notable prompts:
  - `create-pr.prompt.md`
  - `update-issue-feat.prompt.md`
  - `update-readme.prompt.md`
- `instructions/`: Instruction files applied automatically by repository tooling (for example, `markdown.instructions.md`).
- `ISSUE_TEMPLATE/`: Issue templates used by GitHub when opening new issues:
  - `bug_report.yml`
  - `feature_request.yml`

## How to Use

1. **Copy this folder**

   Copy this folder into a repository's `.github/` directory to enable the templates and instructions.

2. **Start the GitHub MCP server**

   Install and configure the GitHub MCP server so compatible AI tools can read these templates and instructions.

3. **Integrate with VS Code (Copilot)**

   Point Copilot/VS Code settings at the Copilot instruction files. Example setting:

   ```jsonc
   // filepath: .vscode/settings.json
   {
     "github.copilot.chat.commitMessageGeneration.instructions": [
       { "file": ".github/copilot-commit-message-instructions.md" }
     ]
   }
   ```

4. **Use GitHub templates**

   Files in `.github/` and `.github/ISSUE_TEMPLATE/` are automatically used by GitHub when creating pull requests and issues.

5. **Use prompts and automation**

   Prompt files in `prompts/` are ready to be used as input to Copilot Chat, other AI tools, or automation scripts/workflows.

## Recommendations

- **Adjust paths:** Keep file paths relative to the repository root when configuring editors or automation.
- **Customize templates:** Update the templates to match the project's contributing and commit message conventions before broad use.
- **Use CI/workflows:** Consider adding CI steps or repository workflows that validate commit messages or apply templates automatically.

## References

- VS Code custom instructions documentation: https://code.visualstudio.com/docs/copilot/customization/custom-instructions#_specify-custom-instructions-in-settings
- Conventional Commits: https://www.conventionalcommits.org/
