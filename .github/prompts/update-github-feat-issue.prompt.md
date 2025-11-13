---
agent: "agent"
description: "Update Existing GitHub Issue to Match Feature Request Template"
argument-hint: issue
tools:
  - search
  - github/github-mcp-server/search_issues
  - github/github-mcp-server/issue_read
  - github/github-mcp-server/issue_write
---

# Update GitHub Issue (Feature Request Only)

Reformat an existing GitHub issue to match the **Feature Request** template structure and guidelines.

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
- Note the feature request, problem statement, motivation, and any implementation ideas.
- Preserve references, links, and user context.

### 3. Reference Template

Use the Feature Request template as the target structure.

Template metadata:

```yaml
name: "🚀 Feature Request"
description: Suggest a new feature or improvement
title: "feat: "
labels: ["feat"]
assignees: []
```

Template location: `.github/ISSUE_TEMPLATE/feature-request.yml`

### 4. Reformat Issue Body

Map the existing issue content to the template structure.

For each template section (`Description`, `Motivation / Use Case`, `Proposed Tasks / To-Do List`, `Additional Context`):

- Use the author's original text where available, reorganizing only for clarity.
- Follow the template's placeholder text as guidance for section content.
- Mark missing information as `N/A` or use template placeholders.
- Preserve the exact section headings and order from the template.

Example:

```
### Description
[Extracted or summarized feature details; if none, use N/A]
```

### 5. Update Title

Ensure the title clearly describes the feature and uses the `feat:` prefix.

- Keep existing title if it already starts with `feat:` and is descriptive.
- Otherwise, prepend `feat:` and keep the title under 15 words.

Example:

```
Before: Add customization for notifications
After:  feat: Add notification customization options
```

### 6. Write Updated Issue

Apply changes to the GitHub issue using the reformatted content.

Use #tool:github/github-mcp-server/issue_write to update the issue's **title** and **body**.

## Output

Return the major changes made.

## Rules

- Only modify existing issues — never create new ones.
- Follow the template structure exactly.
- Keep titles concise, descriptive, and prefixed with `feat:`.
- Preserve author tone and factual content without alteration.
- Avoid adding commentary or reviews — only reformat for structure.
- Do not change intent or meaning.
- Grammar and formatting fixes are acceptable.
