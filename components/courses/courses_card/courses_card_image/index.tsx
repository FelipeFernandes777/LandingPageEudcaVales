import Image from "next/image";

export interface ICoursesCardImage {
  alt: string,
  src: string
}

export function CoursesCardImage({alt,src}: ICoursesCardImage) {
  return (
    <div className="w-6/12 h-full relative md:w-full md:h-3/6 lg:h-full">
      <Image
        alt={alt}
        src={src}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
