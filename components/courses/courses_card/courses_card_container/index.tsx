import { ReactNode } from "react";

export function CoursesCardContainer({children}: {children: ReactNode}){
  return (
    <div className="w-full h-[250px] shadow-md border-slate-200 border rounded-2xl relative bg-slate-50 flex overflow-hidden">
      {children}
    </div>
  )
}