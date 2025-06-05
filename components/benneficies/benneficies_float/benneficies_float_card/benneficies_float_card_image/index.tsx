import { ReactElement } from "react";

export interface IBenneficiesFloatCardImage {
  icon: ReactElement
}

export function BenneficiesFloatCardImage({icon}: IBenneficiesFloatCardImage) {
  return (
    <div className="h-full w-2/5 relative flex items-center justify-center">
      {icon}
    </div>
  );
}
