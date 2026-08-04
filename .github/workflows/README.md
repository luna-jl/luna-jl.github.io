# GitHub Actions Workflow Templates

## Deploy a built app (Astro / Next.js / Vite / etc.)

```yaml
# .github/workflows/deploy-my-app.yml
name: Deploy my-app

on:
  push:
    branches: [main]
    paths:
      - 'apps/my-app-src/**'

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2

      - name: Build
        working-directory: apps/my-app-src
        run: |
          bun install
          bun run build

      - name: Copy output to apps/my-app
        run: |
          rm -rf apps/my-app
          cp -r apps/my-app-src/dist apps/my-app

      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "deploy: my-app"
          file_pattern: apps/my-app/**
```

For Vercel static exports, replace the build step with your framework's export command
and point the copy step at the correct output directory (`out/`, `dist/`, `.next/`, etc.).
