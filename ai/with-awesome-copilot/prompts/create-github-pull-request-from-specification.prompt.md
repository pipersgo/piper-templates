---
# This work is based on the "awesome-copilot" project (MIT License).
# The following file was used from that project:
#  prompts/create-github-pull-request-from-specification.prompt.md
#
# Original Copyright GitHub, Inc.
# See ThirdPartyNotices.txt for license details.
# Modified by pipersgo, 2025.
mode: "agent"
description: "Create GitHub Pull Request for feature request from specification file using pull_request_template.md template."
tools:
  [
    "search",
    "create_pull_request",
    "update_pull_request",
    "get_pull_request",
    "get_pull_request_diff",
    "get_me",
    "update_issue",
  ]
---

# Create GitHub Pull Request from Specification

Create GitHub Pull Request for the specification at `${workspaceFolder}/.github/pull_request_template.md`.

## Process

1. Analyze specification file template from '${workspaceFolder}/.github/pull_request_template.md' to extract requirements by `search` tool.
2. Use the `create_pull_request` tool to create a pull request draft template onto `${input:targetBranch}`. Before creating, make sure to check with the `get_pull_request` tool that there is no existing pull request for the current branch. If a pull request already exists, continue to step 4 and skip step 3.
3. Get changes in the pull request by using `get_pull_request_diff` tool to analyze information that was changed in the pull request.
4. Update the pull request body and title created in the previous step using the `update_pull_request` tool. Incorporate the information from the template obtained in the first step to update the body and title as needed.
5. Switch from draft to ready for review by using `update_pull_request` tool to update the state of the pull request.
6. Use `get_me` to get the username of the person who created the pull request and assign it to `update_issue` tool. Assign the pull request.
7. Return the URL of the pull request that was created to the user.

## Requirements

- Single pull request for the complete specification
- Pull request must have a clear title and description that reference the specification
- Use and fill out the pull_request_template.md with all required information
- Verify against existing pull requests before creation
