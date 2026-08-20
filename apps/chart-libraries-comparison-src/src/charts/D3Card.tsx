import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { data } from "../data";

export function D3Card() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const width = ref.current.clientWidth || 320;
    const height = 220;
    const margin = { top: 10, right: 12, bottom: 24, left: 32 };

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) ?? 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .attr("color", "#888")
      .call((g) => g.select(".domain").attr("stroke", "#444"));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(4).tickSize(0))
      .attr("color", "#888")
      .call((g) => g.select(".domain").remove());

    svg
      .selectAll("rect.bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.month) ?? 0)
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.bottom - y(d.value))
      .attr("fill", "#2563eb")
      .attr("rx", 4);
  }, []);

  return <svg ref={ref} width="100%" height={220} />;
}
