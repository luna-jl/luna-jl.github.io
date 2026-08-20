import ReactECharts from "echarts-for-react";
import { months, values } from "../data";

export function EChartsCard() {
  return (
    <ReactECharts
      style={{ height: 220, width: "100%" }}
      option={{
        backgroundColor: "transparent",
        grid: { left: 32, right: 12, top: 12, bottom: 24 },
        xAxis: {
          type: "category",
          data: months,
          axisLine: { lineStyle: { color: "#444" } },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#232323" } },
          axisLine: { show: false },
        },
        series: [
          {
            data: values,
            type: "bar",
            itemStyle: { color: "#2563eb", borderRadius: [4, 4, 0, 0] },
          },
        ],
        tooltip: { trigger: "axis" },
      }}
    />
  );
}
