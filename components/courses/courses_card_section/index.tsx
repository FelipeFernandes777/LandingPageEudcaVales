import { ReactNode } from "react";

export function CoursesCardSection({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-auto flex flex-col gap-3 items-center justify-center
      md:grid md:grid-cols-2 md:place-items-center md:place-content-center">
      {children}
    </div>
  );
}
