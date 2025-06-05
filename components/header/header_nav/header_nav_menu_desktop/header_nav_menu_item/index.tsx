import { ReactElement } from "react";

interface IHeaderNavMenuItem {
  title: string;
  icon: ReactElement;
}

export function HeaderNavMenuItem({ icon, title }: IHeaderNavMenuItem) {
  return (
    <span
      className="relative flex justify-center items-center gap-2 text-[var(--green-color)]
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[var(--green-color)] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full
  "
    >
      {icon}
      {title}
    </span>
  );
}
