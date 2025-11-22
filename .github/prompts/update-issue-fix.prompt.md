---
agent: "agent"
description: "Update Existing GitHub Issue to Match Bug Report Template"
argument-hint: issue
tools:
  - search
  - github/github-mcp-server/search_issues
  - github/github-mcp-server/issue_read
  - github/github-mcp-server/issue_write
---

# Update GitHub Issue (Bug Report Only)

Reformat an existing GitHub issue to match the **Bug Report** template structure and guidelines.

## Process

### 1. Verify Issue

Confirm the issue exists and is accessible.

- Use #tool:github/github-mcp-server/search_issues to verify the issue exists.
- Stop immediately if the issue does not exist or is inaccessible.
- Return error if access fails:

```
Error: Could not access issue ${input:issue}. No changes made.
```

### 2. Read Issue Content

Extract the issue's title, body, and metadata.

- Use #tool:github/github-mcp-server/issue_read to retrieve full details.
- Note the bug description, reproduction steps, expected and actual behavior, environment, and error logs.
- Preserve references, links, and user context.

### 3. Reference Template

Use the Bug Report template as the target structure.

Template metadata:

```yaml
name: "🐛 Bug Report"
description: Report a bug or unexpected behavior
title: "fix: "
labels: ["fix"]
```

Template location: `.github/ISSUE_TEMPLATE/bug_report.yml`

### 4. Reformat Issue Body

Map the existing issue content to the template structure.

For each template section (`Description`, `Steps to Reproduce`, `Expected Behavior`, `Actual Behavior`, `Environment`, `Error Logs`, `Additional Context`):

- Use the author's original text where available, reorganizing only for clarity.
- Follow the template's placeholder text as guidance for section content.
- Mark missing information as `N/A` or use template placeholders.
- Preserve the exact section headings and order from the template.

Example:

```
### Description
[Clearly describe the bug and how it manifests; if none, use N/A]
```

### 5. Update Title

Ensure the title clearly describes the bug and uses the `fix:` prefix.

- Keep existing title if it already starts with `fix:` and is descriptive.
- Otherwise, prepend `fix:` and keep the title under 15 words.

Example:

```
Before: Build fails when copying template
After:  fix: Build fails when copying template
```

### 6. Write Updated Issue

Apply changes to the GitHub issue using the reformatted content.

Use #tool:github/github-mcp-server/issue_write to update the issue's **title** and **body**.

## Output

Return the major changes made.

## Rules

- Only modify existing issues — never create new ones.
- Follow the template structure exactly.
- Keep titles concise, descriptive, and prefixed with `fix:`.
- Preserve author tone and factual content without alteration.
- Avoid adding commentary or reviews — only reformat for structure.
- Do not change intent or meaning.
- Grammar and formatting fixes are acceptable.
