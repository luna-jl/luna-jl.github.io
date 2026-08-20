import { barY, defineChart } from "@tanstack/charts";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { Chart } from "@tanstack/charts/react";
import { data } from "../data";

const revenueChart = defineChart({
  marks: [
    barY(data, {
      x: "month",
      y: "value",
      fill: "#2563eb",
    }),
  ],
  x: { scale: () => scaleBand().padding(0.2) },
  y: { scale: () => scaleLinear() },
});

export function TanStackChartCard() {
  return (
    <Chart
      ariaLabel="Monthly value, bar chart, rendered with TanStack Charts"
      definition={revenueChart}
      height={220}
    />
  );
}
