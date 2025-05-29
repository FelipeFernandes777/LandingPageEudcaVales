import { ReactNode } from "react";

export function CoursesCardSection({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-auto flex flex-col gap-3 items-center justify-center">
      {children}
    </div>
  );
}
