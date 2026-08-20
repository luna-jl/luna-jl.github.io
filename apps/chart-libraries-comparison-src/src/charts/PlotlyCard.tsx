import Plot from "react-plotly.js";
import { months, values } from "../data";

export function PlotlyCard() {
  return (
    <Plot
      data={[
        {
          x: months,
          y: values,
          type: "bar",
          marker: { color: "#2563eb" },
        },
      ]}
      layout={{
        height: 220,
        margin: { l: 32, r: 12, t: 12, b: 30 },
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        font: { color: "#888", size: 11 },
        xaxis: { gridcolor: "#232323", zerolinecolor: "#444" },
        yaxis: { gridcolor: "#232323", zerolinecolor: "#444" },
        showlegend: false,
      }}
      config={{ displayModeBar: false, responsive: true }}
      style={{ width: "100%" }}
      useResizeHandler
    />
  );
}
