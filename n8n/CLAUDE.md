# CLAUDE.md — n8n Workflow Builder

This project is set up for building n8n workflows and AI agents using Claude Code with natural language prompts. Two tools are available: the **n8n-mcp MCP server** (data + workflow management) and **n8n skills** (expert guidance on how to use them).

## Setup

`.mcp.json` connects via `supergateway` to n8n's built-in MCP HTTP endpoint using a Bearer JWT token:

```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": [
        "-y", "supergateway",
        "--streamableHttp", "https://<your-instance>.app.n8n.cloud/mcp-server/http",
        "--header", "authorization:Bearer <your-jwt-token>"
      ]
    }
  }
}
```

The JWT token is generated in n8n under **Settings → MCP Server → Create Token**.

## Tools Available

### n8n MCP Server (via supergateway)
Connects Claude to your n8n instance via n8n's built-in MCP endpoint. Available tools:

| Tool | Purpose |
|------|---------|
| `search_workflows` | Search workflows by name or description |
| `get_workflow_details` | Get full details and trigger info for a workflow |
| `execute_workflow` | Run a workflow (manual or production mode) |

### n8n Skills (7 auto-activating expert guides)
Installed globally. Activate automatically based on context:

- **n8n MCP Tools Expert** — How to use MCP tools effectively (highest priority)
- **n8n Workflow Patterns** — 5 proven patterns: webhook, HTTP API, database, AI agent, scheduled
- **n8n Expression Syntax** — Correct `{{ }}` patterns and common mistakes
- **n8n Node Configuration** — Operation-aware configuration guidance
- **n8n Validation Expert** — Interpreting and fixing validation errors
- **n8n Code JavaScript** — JS in Code nodes: `$input.all()`, `$input.first()`, helpers
- **n8n Code Python** — Python limitations and standard library usage

## How to Work With Me

Just describe what you want in plain language:

- "Build a workflow that triggers on a webhook and sends a Slack message"
- "Create an AI agent that reads emails and drafts replies using OpenAI"
- "Find a template for syncing Notion with Google Sheets"
- "Fix the validation errors in workflow ID 42"

## Workflow Safety Rules

- Never edit production workflows directly — duplicate them first
- Always validate before deploying: `validate_workflow` → `n8n_test_workflow` → deploy
- Use `n8n_workflow_versions` to roll back if something breaks
- Export a backup before major changes

## Typical Usage Sequence

```
1. search_workflows       → find existing workflows by name/description
2. get_workflow_details   → inspect trigger type and structure
3. execute_workflow       → run in manual (test) or production mode
```
