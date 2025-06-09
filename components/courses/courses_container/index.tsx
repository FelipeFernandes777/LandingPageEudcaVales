import { ReactNode } from "react";

export function CoursesContainer({children}: {children: ReactNode}){
  return (
    <div className="w-full h-auto p-2 flex items-center justify-center flex-col gap-2"  id="cursos">
      <div className="border-t border-slate-300 w-11/12"></div>
      {children}
    </div>
  )
}