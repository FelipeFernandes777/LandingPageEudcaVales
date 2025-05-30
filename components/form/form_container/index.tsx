import { ReactNode } from "react";

export function FormContainer({children}: {children: ReactNode}){
  return (
    <div className="w-full h-auto py-2 mt-5 flex flex-col items-center gap-2">
      <div className="w-11/12 border-t border-slate-300"></div>
      {children}
    </div>
  )
}