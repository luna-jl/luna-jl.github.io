import { ResponsiveLine } from "@nivo/line";
import { data } from "../data";

const series = [
  {
    id: "value",
    data: data.map((d) => ({ x: d.month, y: d.value })),
  },
];

export function NivoCard() {
  return (
    <div style={{ height: 220 }}>
      <ResponsiveLine
        data={series}
        margin={{ top: 12, right: 16, bottom: 30, left: 32 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 0, max: "auto" }}
        colors={["#2563eb"]}
        pointSize={6}
        pointColor="#2563eb"
        pointBorderWidth={0}
        enableGridX={false}
        gridYValues={4}
        theme={{
          grid: { line: { stroke: "#232323" } },
          axis: {
            ticks: { text: { fill: "#888", fontSize: 11 } },
            legend: { text: { fill: "#888" } },
          },
        }}
        enableArea
        areaOpacity={0.15}
        useMesh
      />
    </div>
  );
}
