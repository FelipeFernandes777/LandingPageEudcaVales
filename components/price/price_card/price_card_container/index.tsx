import { ReactNode } from "react";

export function PriceCardContainer({children}: {children: ReactNode}){
  return (
    <div className="w-11/12 border border-gray-400/50 flex items-center justify-center h-[500px] rounded-3xl overflow-hidden flex-col">{children}</div>
  )
}