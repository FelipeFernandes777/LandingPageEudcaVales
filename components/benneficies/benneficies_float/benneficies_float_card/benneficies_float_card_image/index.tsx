import Image from "next/image";

export interface IBenneficiesFloatCardImage {
  src: string
  alt: string
}

export function BenneficiesFloatCardImage({src,alt}: IBenneficiesFloatCardImage) {
  return (
    <div className="h-full w-2/5 relative flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
  );
}
