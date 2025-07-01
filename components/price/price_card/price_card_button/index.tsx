"use client";

export interface IPriceCardButton {
  title: string;
  onClick: () => void;
}

export function PriceCardButton({ title, onClick }: IPriceCardButton) {
  return (
    <button
        onClick={onClick}
      className="shadow py-2 flex items-center justify-center rounded-4xl h-16  bg-gradient-to-br from-[var(--light-green-color)]/90 via-[var(--green-color)]/95 to-[var(--green-color)] px-12 text-white font-medium mb-3 cursor-pointer"
    >
      {title.toUpperCase()}
    </button>
  );
}
