import { ReactNode } from "react";

export function BenneficiesFloatCardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="h-full w-full flex gap-2 items-center justify-center">{children}</div>;
}
