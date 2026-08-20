import { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";
import { data, months } from "../data";

export function ObservablePlotCard() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const plot = Plot.plot({
      height: 220,
      width: ref.current.clientWidth || 320,
      style: { background: "transparent", color: "#888" },
      marginLeft: 32,
      x: { label: null, domain: months },
      y: { label: null, grid: true },
      color: { range: ["#2563eb"] },
      marks: [
        Plot.barY(data, { x: "month", y: "value", fill: "#2563eb", rx: 4 }),
        Plot.ruleY([0], { stroke: "#444" }),
      ],
    });
    ref.current.innerHTML = "";
    ref.current.append(plot);
    return () => plot.remove();
  }, []);

  return <div ref={ref} />;
}
