import { ReactNode } from "react";

export function PriceTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-medium text-[var(--black-color)]">{children}</h1>;
}
