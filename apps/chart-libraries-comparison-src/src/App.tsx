import "./index.css";
import { ChartCard } from "./ChartCard";
import { TanStackChartCard } from "./charts/TanStackChartCard";
import { ChartJsCard } from "./charts/ChartJsCard";
import { RechartsCard } from "./charts/RechartsCard";
import { EChartsCard } from "./charts/EChartsCard";
import { D3Card } from "./charts/D3Card";
import { VisxCard } from "./charts/VisxCard";
import { NivoCard } from "./charts/NivoCard";
import { ObservablePlotCard } from "./charts/ObservablePlotCard";
import { PlotlyCard } from "./charts/PlotlyCard";

export default function App() {
  return (
    <div className="wrap">
      <a className="back" href="/">
        &larr; back to apps
      </a>
      <header>
        <h1>JavaScript / React Chart Library Comparison</h1>
        <p>
          Same six-point dataset (Jan&ndash;Jun, one numeric series) rendered
          live through nine different charting libraries, each installed as
          a real npm dependency and built with Vite &mdash; not screenshots.
          Two commercially-licensed libraries (Highcharts, LightningChart JS)
          are described but not rendered live here, since embedding them on a
          public page without a paid license isn't within their terms.
        </p>
      </header>

      <div className="grid">
        <ChartCard
          title="TanStack Charts"
          spec={{
            license: "alpha",
            licenseLabel: "MIT · pre-alpha",
            rendering: "SVG (via grammar-of-graphics core)",
            bundle: "~38–44 KB",
          }}
          note="Repo says pre-alpha, not production-ready. API above may drift on upgrade."
        >
          <TanStackChartCard />
        </ChartCard>

        <ChartCard
          title="Chart.js"
          spec={{
            license: "free",
            licenseLabel: "MIT",
            rendering: "Canvas",
            bundle: "~45–58 KB",
          }}
        >
          <ChartJsCard />
        </ChartCard>

        <ChartCard
          title="Recharts"
          spec={{
            license: "free",
            licenseLabel: "MIT",
            rendering: "SVG",
            bundle: "~150–170 KB",
          }}
        >
          <RechartsCard />
        </ChartCard>

        <ChartCard
          title="Apache ECharts"
          spec={{
            license: "free",
            licenseLabel: "Apache 2.0",
            rendering: "Canvas (+ WebGL ext.)",
            bundle: "~150–175 KB full",
          }}
        >
          <EChartsCard />
        </ChartCard>

        <ChartCard
          title="D3.js"
          spec={{
            license: "free",
            licenseLabel: "ISC",
            rendering: "SVG (hand-rolled)",
            bundle: "~90 KB gzip full",
          }}
        >
          <D3Card />
        </ChartCard>

        <ChartCard
          title="visx"
          spec={{
            license: "free",
            licenseLabel: "MIT",
            rendering: "SVG",
            bundle: "~49 KB gzip",
          }}
        >
          <VisxCard />
        </ChartCard>

        <ChartCard
          title="Nivo"
          spec={{
            license: "free",
            licenseLabel: "MIT",
            rendering: "SVG",
            bundle: "~186 KB",
          }}
        >
          <NivoCard />
        </ChartCard>

        <ChartCard
          title="Observable Plot"
          spec={{
            license: "free",
            licenseLabel: "ISC",
            rendering: "SVG",
            bundle: "lightweight, modular",
          }}
        >
          <ObservablePlotCard />
        </ChartCard>

        <ChartCard
          title="Plotly.js"
          spec={{
            license: "free",
            licenseLabel: "MIT",
            rendering: "SVG + WebGL (regl)",
            bundle: "heaviest of the group",
          }}
        >
          <PlotlyCard />
        </ChartCard>

        <ChartCard
          title="Highcharts"
          spec={{
            license: "paid",
            licenseLabel: "Commercial $185–366+/dev/yr",
            rendering: "SVG",
            bundle: "moderate",
          }}
          note="Free for non-commercial/education use only. Not embedded live on this public page without a purchased license — see highcharts.com for demos."
        >
          <div className="license-gated">Not rendered &mdash; requires a commercial license</div>
        </ChartCard>

        <ChartCard
          title="LightningChart JS"
          spec={{
            license: "paid",
            licenseLabel: "Commercial (free non-commercial tier)",
            rendering: "WebGL / GPU",
            bundle: "moderate–heavy",
          }}
          note="Only public npm version found was a placeholder (0.0.0); real package + license key come from LightningChart's own distribution. Best for 10M+ point real-time datasets — overkill for this demo's 6 points anyway."
        >
          <div className="license-gated">Not rendered &mdash; requires a commercial license</div>
        </ChartCard>
      </div>

      <footer>
        <a href="https://judgmentlabs.ai" target="_blank" rel="noopener">
          Judgment Labs
        </a>
      </footer>
    </div>
  );
}
