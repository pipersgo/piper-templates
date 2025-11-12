---
mode: "agent"
description: "Update Existing GitHub Issue to Match Feature Request Template"
tools:
  - search
  - github/github-mcp-server/search_issues
  - github/github-mcp-server/issue_read
  - github/github-mcp-server/issue_write
---

# Update GitHub Issue (Feature Request Only)

Reformat and review an existing GitHub issue ${input:issue_number:Issue number on GitHub} to match the **🚀 Feature Request** template (`.github/ISSUE_TEMPLATE/feature_request.yml`).

## Steps

### 1. Verify Issue

- Use #github/github-mcp-server/search_issues to confirm the issue exists.
- If it does **not** exist, stop immediately (do not create a new issue).
- If inaccessible, return:

```
Error: Could not access issue ${input:issue_number:Issue number on GitHub}. No changes made.
```

### 2. Read Existing Issue

- Retrieve the issue’s title, body, and metadata using #github/github-mcp-server/issue_read .
- Extract all text content, paying attention to user-provided details that describe:
- The feature being requested.
- The problem or motivation behind it.
- Any steps, ideas, or implementation notes.
- Extra references, images, or links.

### 3. Select Template

- Always use: `.github/ISSUE_TEMPLATE/feature-request.yml`
- Template Metadata:

```yaml
name: "🚀 Feature Request"
description: Suggest a new feature or improvement
title: "feat: "
labels: ["feat"]
assignees: []
```

### 4. Reformat the Issue Body

Rebuild the issue body strictly following the `feature_request.yml` structure.
Use the existing issue content to fill each section as accurately as possible.

For each section (`Description`, `Motivation / Use Case`, `Proposed Tasks / To-Do List`, `Additional Context`):

- Follow the **template’s description and placeholder text** closely as guidance for what belongs in that section.
- Use the **author’s original text** when possible, reorganizing or summarizing only for clarity.
- When information is missing, use the **template’s placeholder** as a fallback example or mark as `N/A`.
- Preserve the **format, order, and headings** exactly as defined in the template.

Example:

```
### Description
[Extracted or summarized feature details; if none, use template placeholder or N/A]
```

### 5. Update the Title

- If the current title already starts with `feat:` or is descriptive, keep it.
- Otherwise, prepend `feat:` and rephrase for clarity (≤15 words).
  Example:

  ```
  Original: Add customization for notifications
  Updated: feat: Add notification customization options
  ```

### 6. Write Updated Issue

- Use #github/github-mcp-server/issue_write to replace the issue’s **body** and/or **title** with the reformatted version.

## Output

Return the major changes made.

## Rules

- Only modify **existing issues** — never create new ones.
- Follow the **feature_request template** structure exactly.
- Keep titles short, descriptive, and prefixed with `feat:`.
- Preserve author tone and factual content.
- Avoid adding commentary or reviews — only reformat for structure and clarity.
- Keep the author’s original writing style and sentiment.
- Improve readability and structure only where needed.
- Do **not** change intent or meaning.
- Minor grammar and formatting fixes are acceptable.
