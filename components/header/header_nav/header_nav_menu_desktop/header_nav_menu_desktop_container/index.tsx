import { ReactNode } from "react";

export function HeaderNavMenuDesktopContainer({children}: {children: ReactNode}){
  return (
    <div className="w-7/12 h-20 flex justify-evenly items-center max-lg:hidden"> 
      {children}
    </div>
  )
}