---
agent: "agent"
description: "Create GitHub Pull Request Using pull_request_template.md"
argument-hint: branch,issue
tools:
  [
    "search",
    "github/github-mcp-server/create_pull_request",
    "github/github-mcp-server/issue_read",
    "github/github-mcp-server/pull_request_read",
    "github/github-mcp-server/search_pull_requests",
    "github/github-mcp-server/update_pull_request",
  ]
---

# Create GitHub Pull Request

Create a clear, Copilot-style GitHub pull request that summarizes the change set and related issue context. Use `${input:issue}` for context and target `${input:branch}`. Follow `.github/pull_request_template.md` and populate all required sections with concise, grouped content.

## Process

1. Load `.github/pull_request_template.md` and identify all required sections for the title and body.
2. Search for an existing pull request targeting `${input:branch}` using `#tool:github/github-mcp-server/search_pull_requests`.
3. If no pull request exists, create a draft pull request with `#tool:github/github-mcp-server/create_pull_request`.
4. Retrieve the pull request details and diff using `#tool:github/github-mcp-server/pull_request_read`.
5. Read `${input:issue}` with `#tool:github/github-mcp-server/issue_read` and extract the problem statement, motivation, and proposed solution.
6. Synthesize the issue context and code changes into a prioritized summary that:

- Focuses on intent, behavior changes, and impact.
- Groups changes by feature, subsystem, or folder (up to two levels, for example `src/components` → `src/components/button`).
- Combines related edits into coherent themes instead of file-by-file notes.
- Highlights new features, bug fixes, refactors, breaking changes, migrations, schema changes, public API changes, and performance or security implications.
- Calls out risk, manual verification, rollout plans, feature flags, migrations, and TODOs.
- Includes a short “What changed” bullet list and a brief “Why it matters” paragraph.

7. Fill each required template section using the synthesized summary.
8. Update the pull request title and body with `#tool:github/github-mcp-server/update_pull_request`.
9. Ensure the pull request body references `${input:issue}` and any other relevant issues or pull requests. Add labels or metadata when available.

## Style

- Write in a professional, neutral tone aimed at reviewers and release engineers.
- Use grouped, plain-language headings such as **Summary**, **Changes by area**, **Migration / Upgrade notes**, **Testing & QA**, and **Risks & Rollout**.
- Include code snippets or commands only when essential (for example, migration or test commands) and keep them minimal.

## Grouping

- Prefer grouping by feature or folder over listing files.
- Use at most two folder levels for structure and readability.
- Mention specific files only when it improves understanding of important changes.
- Combine small, related edits into a single explanation.

## Requirements

- Keep the pull request in draft state.
- Populate all required template sections with meaningful content.
- Reference `${input:issue}` in the body.
- When migrations, breaking changes, or external steps are required, add explicit commands and a clear “Migration / Rollout” section.
- Include a short checklist for reviewers (for example, tests added, changelog updated, docs updated).

## Optional Additions

- Add a short “How to test locally” section with commands when useful.
- Link to design documents, RFCs, or related discussions when available.
- Suggest reviewers based on the changed areas when contributor metadata is available.

## Error Handling

- If a pull request already exists for `${input:branch}`, do not create a new one; update the existing pull request or return its reference.
- If the issue content is empty or unclear, state the lack of context in the body and add a “Notes / Questions for maintainers” section describing open questions.
