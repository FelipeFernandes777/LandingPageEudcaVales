import { ReactNode } from "react";

export function FooterInfoTitle({children}: {children: ReactNode}) {
  return (
    <h1 className="text-base font-semibold text-[var(--white-color)] max-sm:self-center">
      {children}
    </h1>
  )
}