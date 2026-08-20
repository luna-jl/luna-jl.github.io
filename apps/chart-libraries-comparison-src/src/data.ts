export interface Point {
  month: string;
  value: number;
}

export const data: Point[] = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 76 },
  { month: "Apr", value: 64 },
  { month: "May", value: 89 },
  { month: "Jun", value: 72 },
];

export const months = data.map((d) => d.month);
export const values = data.map((d) => d.value);
