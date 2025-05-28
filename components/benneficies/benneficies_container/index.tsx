import { ReactNode } from "react";

export function BenneficiesContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center py-4">
      {children}
    </div>
  );
}
