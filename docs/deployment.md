# Deployment Guide for Starfleet Fleet Monitoring Dashboard

## Environment Setup

### Codespace Configuration
```yaml
# .devcontainer/devcontainer.json
{
  "name": "Starfleet Fleet Monitoring Dashboard",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:18",
  "forwardPorts": [3000],
  "extensions": [
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Production Deployment
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses actions/checkout@v3
      - run: npm install
      - run: npm run build
      - run: npm start
```
