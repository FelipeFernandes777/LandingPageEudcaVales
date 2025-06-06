import { ReactNode } from "react";

export function FooterInfoContainer({children}: {children: ReactNode}){
  return (
    <div className="bg-transparent w-11/12 h-10/12 p-2 flex flex-col md:grid md:grid-cols-2 md:place-content-center md:place-items-center gap-4">
      {children}
    </div>
  )
}