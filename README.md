# luna-jl.github.io

Multi-app static hosting for Luna at **[luna-jl.github.io](https://luna-jl.github.io)**.

## Structure

```
luna-jl.github.io/
├── index.html          # Root landing page (app directory)
└── apps/
    └── <app-name>/     # Each app lives in its own folder
        └── index.html  # (or built static assets)
```

## Adding a new app

### Option A — Plain HTML
1. Create `apps/<app-name>/index.html` (+ any assets).
2. Push to `main`. GitHub Pages deploys automatically.
3. App is live at `https://luna-jl.github.io/apps/<app-name>/`.

### Option B — Vercel / Astro / Next.js static build
1. Build your app locally (`bun run build`, `astro build`, etc.).
2. Copy the output folder into `apps/<app-name>/`.
3. Push to `main`.

### Option C — CI/CD (recommended for built apps)
Add a GitHub Actions workflow that builds and commits output to `apps/<app-name>/`.
See `.github/workflows/README.md` for a starter template.

## Root landing page

`index.html` auto-lists apps. Update the `APPS` array in the script block to register a new entry.
