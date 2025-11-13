---
# This work is based on the "awesome-copilot" project (MIT License).
# The following file was used from that project:
#  prompts/create-github-pull-request-from-specification.prompt.md
#
# Original Copyright GitHub, Inc.
# See ThirdPartyNotices.txt for license details.
# Modified by pipersgo, 2025.
agent: "agent"
description: "Create GitHub Pull Request for feature request from specification file using pull_request_template.md template."
argument-hint: branch,issue
tools:
  [
    "github/github-mcp-server/create_pull_request",
    "github/github-mcp-server/pull_request_read",
    "github/github-mcp-server/search_pull_requests",
    "github/github-mcp-server/update_pull_request",
    "search",
  ]
---

# Create GitHub Pull Request from Specification

Create a GitHub pull request using `.github/pull_request_template.md` as the specification. The pull request should reference `${input:issue}` and target branch `${input:branch}`.

## Process

1. Read the template at `.github/pull_request_template.md` and extract required sections.
2. Confirm no existing pull request targets `${input:branch}` using `github/github-mcp-server/search_pull_requests`.
3. If none exists, create a draft pull request with `github/github-mcp-server/create_pull_request`.
4. Inspect the pull request with `github/github-mcp-server/pull_request_read` and update the title and body to populate all required template sections using `github/github-mcp-server/update_pull_request`.

## Requirements

- Single pull request must cover the complete specification.
- Pull request title and description must reference the specification and ${input:issue}.
- Populate all required fields in `.github/pull_request_template.md`.
- Verify existing pull requests before creating a new one.
