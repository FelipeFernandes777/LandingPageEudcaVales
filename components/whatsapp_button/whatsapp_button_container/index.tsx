"use client";
import { redirectToWhatsapp } from "@/utils/redirectToWhastapp";
import { ReactNode } from "react";

export function WhatsAppButtonContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-16 h-16 fixed right-2 bottom-5 bg-green-400 border-slate-200 border-2 flex items-center justify-center rounded-full p-2  animate-bounce cursor-pointer"
      onClick={redirectToWhatsapp}
    >
      {children}
    </div>
  );
}
