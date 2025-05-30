import { ReactNode } from "react";

export function WhatsAppButtonContainer({children}: {children:ReactNode}){
  return (
    <div className="w-16 h-16 fixed right-2 bottom-5 bg-green-400 border-green-600 border-2 flex items-center justify-center rounded-full p-2  animate-bounce cursor-pointer">
      {children}
    </div>
  )
}