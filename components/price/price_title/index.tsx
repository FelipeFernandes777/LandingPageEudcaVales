import { ReactNode } from "react";

export function PriceTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-medium text-slate-800">{children}</h1>;
}
