import { ReactNode } from "react";

export function BenneficiesFloatCardTextContainer({
  children,
  i
}: {
  children: ReactNode;
  i:number
}) {
  return (
    <div className="h-full w-3/5 flex items-center justify-center gap-1">
      {children}
      {
        i < 3 ? (<div className="h-3/5 border border-blue-300"></div> ) : null
      }
    </div>
  );
}
