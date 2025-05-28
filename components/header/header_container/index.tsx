import { ReactNode } from "react";

export function HeaderContainer({children}: {children: ReactNode}){
  return (
    <div className="w-full h-auto p-2 bg-slate-100">
      {children}
    </div>
  )
}