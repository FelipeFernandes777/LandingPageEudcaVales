import { ReactNode } from "react";

export function FooterContainer({children}: {children: ReactNode}){
  return (
    <div className="bg-[var(--green-color)]/80 w-full min-h-[300px] flex flex-col items-center justify-center">
      {children}
    </div>
  )
}