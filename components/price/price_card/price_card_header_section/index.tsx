import { ReactNode } from "react";

export function PriceCardHeaderSection({ children }: { children: ReactNode }) {
  return <div className="w-full h-6/12 flex flex-col items-center justify-center gap-4">{children}</div>;
}
