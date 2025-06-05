import { ReactNode } from "react";

export function CoursesCardContainer({children}: {children: ReactNode}){
  return (
    <div className="w-full h-[250px] shadow-md border-slate-200 border rounded-2xl relative bg-white flex overflow-hidden
      md:flex md:flex-col md:h-[450px]
      lg:flex-row lg:h-[250px]
    ">
      {children}
    </div>
  )
}