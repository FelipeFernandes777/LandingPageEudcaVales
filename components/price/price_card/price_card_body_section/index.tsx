import { ReactNode } from "react";

export function PriceCardBodySection({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-6/12 flex flex-col items-center gap-2">
      <div className="border-slate-300 w-10/12 border-t justify-baseline"></div>
      {children}
    </div>
  );
}
