import { ReactNode } from "react";

export function PriceCardContainer({children}: {children: ReactNode}){
  return (
    <div className="w-11/12 border border-[var(--green-color)] flex items-center justify-center h-[500px] rounded-3xl overflow-hidden flex-col lg:w-4/12 shadow-md lg:h-[550px]">{children}</div>
  )
}