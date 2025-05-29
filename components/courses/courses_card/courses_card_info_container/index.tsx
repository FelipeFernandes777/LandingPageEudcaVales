import { ReactNode } from "react";

export function CoursesCardInfoContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-7/12 h-full flex flex-col gap-2 p-2">
      {children}
    </div>
  )
}
