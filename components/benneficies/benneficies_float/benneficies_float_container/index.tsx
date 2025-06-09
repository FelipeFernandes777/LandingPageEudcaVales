import { ReactNode } from "react";

export function BenneficiesFloatContainer({children}: {children: ReactNode}) {
  return (
    <div className="w-11/12 h-[120px] translate-y-[-25px] hidden md:flex px-2 shadow-lg shadow-[var(--light-green-color)]-100 border border-[var(--green-color)] rounded-xl gap-2 bg-[var(--light-green-color)] overflow-hidden absolute
      lg:w-7/12
    ">
      {children}
    </div>
  )
}