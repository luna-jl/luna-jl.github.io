import { XYChart, BarSeries, Axis, buildChartTheme } from "@visx/xychart";
import { data } from "../data";

const theme = buildChartTheme({
  backgroundColor: "transparent",
  colors: ["#2563eb"],
  tickLength: 4,
  gridColor: "#232323",
  gridColorDark: "#232323",
  svgLabelSmall: { fill: "#888", fontSize: 11 },
  svgLabelBig: { fill: "#888", fontSize: 11 },
});

const accessors = {
  xAccessor: (d: (typeof data)[number]) => d.month,
  yAccessor: (d: (typeof data)[number]) => d.value,
};

export function VisxCard() {
  return (
    <XYChart
      height={220}
      theme={theme}
      xScale={{ type: "band", paddingInner: 0.2 }}
      yScale={{ type: "linear" }}
    >
      <Axis orientation="bottom" hideTicks />
      <BarSeries dataKey="value" data={data} {...accessors} />
    </XYChart>
  );
}
