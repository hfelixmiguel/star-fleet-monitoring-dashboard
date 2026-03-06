# Code Quality Checks Configuration for Starfleet Fleet Monitoring Dashboard

## ESLint Check
```yaml
# .github/workflows/code-quality.yml
name: Code Quality Checks
on:
  push:
    branches: [main]
jobs:
  code-quality:
    runs-on: ubuntu-latest
    steps:
      - uses actions/checkout@v3
      - name: ESLint Check
        run: npm install && npm run lint
```

## TypeScript Compiler Check
```yaml
name: Code Quality Checks
on:
  push:
    branches: [main]
jobs:
  code-quality:
    runs-on: ubuntu-latest
    steps:
      - uses actions/checkout@v3
      - name: TypeScript Compiler Check
        run: npm install && npx tsc --noEmit
```
