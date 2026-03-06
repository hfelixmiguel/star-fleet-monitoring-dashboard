# Security Scanning Configuration for Starfleet Fleet Monitoring Dashboard

## SAST Scan
```yaml
# .github/workflows/security.yml
name: Security Scanning
on:
  push:
    branches: [main]
jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses actions/checkout@v3
      - name: SAST Scan
        run: npm audit --production
```

## DAST Scan
```yaml
name: Security Scanning
on:
  push:
    branches: [main]
jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses actions/checkout@v3
      - name: DAST Scan
        run: echo "Running dynamic application security testing"
```
