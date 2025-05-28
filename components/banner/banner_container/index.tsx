import { ReactNode } from "react";

export function BannerContainer({ children }: { children: ReactNode }) {
  return <div className="w-full h-[600px]">{children}</div>;
}
