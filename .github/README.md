# GitHub Copilot Custom Instructions Template

Template for customizing GitHub Copilot commit message generation in VS Code using Conventional Commits standard.

## What's Included

### Github Copilot Tools

- `copilot-commit-message-instructions.md` - Condensed guidelines for generating conventional commit messages
- `prompts/` - Folder containing additional prompt templates for various AI tools
  - `update-github-feat-issue.prompt.md` - Prompt for updating GitHub issues with new features

### Github Issues And PRs

- `pull-request-template.md` - Template for pull requests
- `ISSUE_TEMPLATE/` - Folder containing issue templates
  - `bug-report.md` - Template for reporting bugs
  - `feature-request.md` - Template for requesting new features

## Usage in VS Code

Configure VS Code to use these instructions for commit message generation:

```json
{
  "github.copilot.chat.commitMessageGeneration.instructions": [
    { "file": ".github/copilot-commit-message-instructions.md" }
  ]
}
```

To automate github issue and PR creation, you need to integrate Github MCP server you can integrate it with vscode extension.

> **Note:** Adjust the file path relative to your workspace root. If you copied this template to your project's `.github/` directory, use the path shown above.

## How It Works

When configured via settings, VS Code automatically includes these instructions when:

- Using the **Source Control** view's sparkle icon to generate commit messages
- Asking Copilot Chat to generate commit messages
- Using the `Git: Commit Staged (AI Generated)` command

The instructions ensure consistent, well-structured commit messages following your team's conventions.

## Resources

- [VS Code Custom Instructions Documentation](https://code.visualstudio.com/docs/copilot/customization/custom-instructions#_specify-custom-instructions-in-settings)
- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Awesome Copilot Templates](https://github.com/github/awesome-copilot)
