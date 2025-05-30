import { ReactNode } from "react";

export function HeaderNavContainer({children} : {children:ReactNode}) {
  return (
    <div className="w-full h-auto flex items-center justify-between">
      {children}
    </div>
  )
}