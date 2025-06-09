import { ReactNode } from "react";

export function PriceContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-3 min-h-[600px] items-center mt-5" id="preco">{children}</div>
  );
}
