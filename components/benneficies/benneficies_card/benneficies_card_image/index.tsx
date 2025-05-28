import Image from "next/image";

export interface IBenneficiesCardImage {
  src: string
  alt: string
}

export function BenneficiesCardImage({alt,src}:IBenneficiesCardImage){
  return (
    <div className="w-full h-full relative mb-5">
      <Image 
      alt={alt}
      src={src || "/file.svg"}
      fill
      priority
      className="object-fit"
      />
    </div>
  )
}