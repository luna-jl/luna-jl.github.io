import type { ReactNode } from "react";

export interface Spec {
  license: "free" | "paid" | "alpha";
  licenseLabel: string;
  rendering: string;
  bundle: string;
}

export function ChartCard({
  title,
  spec,
  children,
  note,
}: {
  title: string;
  spec: Spec;
  children?: ReactNode;
  note?: string;
}) {
  return (
    <div className="chart-card">
      <div className="chart-card-head">
        <h3>{title}</h3>
        <span className={`badge ${spec.license}`}>{spec.licenseLabel}</span>
      </div>
      <div className="chart-card-body">{children}</div>
      <div className="chart-card-meta">
        <span>{spec.rendering}</span>
        <span>&middot;</span>
        <span>{spec.bundle}</span>
      </div>
      {note && <p className="chart-card-note">{note}</p>}
    </div>
  );
}
