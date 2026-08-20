import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { months, values } from "../data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function ChartJsCard() {
  return (
    <Bar
      height={220}
      data={{
        labels: months,
        datasets: [
          {
            label: "value",
            data: values,
            backgroundColor: "#2563eb",
            borderRadius: 4,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: "#232323" } },
        },
      }}
    />
  );
}
