import { ReactNode } from "react";

export function BannerContainer({ children }: { children: ReactNode }) {
  return <div className="w-full max-sm:h-[600px] max-lg:h-[400px] lg:h-[600px]">{children}</div>;
}