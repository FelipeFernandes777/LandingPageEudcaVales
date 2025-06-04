import Link from "next/link";
import { ReactNode } from "react";

export function FooterInfoDescription({
  children,
  url,
  link,
}: {
  children: ReactNode;
  url: string;
  link?: boolean;
}) {
  return (
    <>
      {link ? (
        <Link
          className="text-sm text-[var(--white-color)] font-medium hover:text-white transition-colors ease-in duration-150 cursor-pointer tracking-tight max-sm:text-[13px]"
          href={url}
        >
          {children}
        </Link>
      ) : (
        <span className="text-sm text-[var(--white-color)] font-medium hover:text-white transition-colors ease-in duration-150 tracking-tight max-sm:text-[13px]">
          {children}
        </span>
      )}
    </>
  );
}
