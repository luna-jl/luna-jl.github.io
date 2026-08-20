# chart-libraries-comparison (source)

Vite + React + TS source for the live chart-library comparison app deployed at
[`/apps/chart-libraries-comparison/`](https://luna-jl.github.io/apps/chart-libraries-comparison/).

Renders the same small dataset through nine real charting libraries
(TanStack Charts, Chart.js, Recharts, Apache ECharts, D3, visx, Nivo,
Observable Plot, Plotly.js), plus two license-gated cards (Highcharts,
LightningChart JS) that are described but not live-rendered since embedding
them here without a paid commercial license isn't within their terms.

## Develop

```
npm install
npm run dev
```

## Build & deploy

```
npm install
npm run build
```

Then copy `dist/` over the sibling `apps/chart-libraries-comparison/` folder
and commit both, or let `.github/workflows/deploy-chart-libraries-comparison.yml`
do it on push to this folder.
