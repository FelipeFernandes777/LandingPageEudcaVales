import { ReactNode } from "react";

export function HeaderNavContainer({children} : {children:ReactNode}) {
  return (
    <div className="w-full h-auto flex items-center justify-between lg:max-h-24">
      {children}
    </div>
  )
}