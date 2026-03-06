# Release Management Procedures for Starfleet Fleet Monitoring Dashboard

## Create Release Notes
```yaml
# .github/workflows/release.yml
name: Release Management Procedures
on:
  release:
    types: [published]
jobs:
  release-management:
    runs-on: ubuntu-latest
    steps:
      - uses actions/checkout@v3
      - name: Create Release Notes
        run: echo "Creating release notes for version ${{ github.event.release.tag_name }}"
```

## Update Version Number
```yaml
name: Release Management Procedures
on:
  release:
    types: [published]
jobs:
  release-management:
    runs-on: ubuntu-latest
    steps:
      - uses actions/checkout@v3
      - name: Update Version Number
        run: npm version patch --no-git-tagging
```
