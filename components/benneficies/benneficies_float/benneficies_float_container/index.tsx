import { ReactNode } from "react";

export function BenneficiesFloatContainer({children}: {children: ReactNode}) {
  return (
    <div className="w-11/12 h-[120px] translate-y-[-25px] hidden md:flex px-2 shadow-lg shadow-blue-100 border-blue-800 border rounded-xl gap-2 bg-blue-100 overflow-hidden absolute">
      {children}
    </div>
  )
}