import { ReactNode } from "react";

export function HeaderNavMenuDesktopContainer({children}: {children: ReactNode}){
  return (
    <div className="w-6/12 h-20 flex justify-evenly items-center max-lg:hidden"> 
      {children}
    </div>
  )
}