import Image from "next/image";

export function BannerImage() {
  return (
    <div className="w-full h-full relative">
      <picture>
        <source
          srcSet="/banner/banner-xlarge.jpeg"
          media="(min-width: 1920px)"
        />
        <source
          srcSet="/banner/banner-large.jpeg"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/banner/banner-medium.jpeg"
          media="(min-width: 640px)"
        />
        <source srcSet="/banner/banner-small.jpeg" media="(max-width: 639px)" />
        <Image
          alt="Banner ilustrativo"
          src="/banner/banner-medium.jpeg"
          fill
          priority
          className="object-cover"
        />
      </picture>
    </div>
  );
}
