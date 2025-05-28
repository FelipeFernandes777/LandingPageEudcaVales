import { ReactNode } from "react";

export function BenneficiesCardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-slate-100/80 shadow-md max-h-64 rounded-lg h-[350px] overflow-hidden">{children}</div>
  );
}
