"use client"
import Image from "next/image";
import Modal from "@/components/modal";
import {useState} from "react";

export function BannerImage() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-full relative cursor-pointer">
      <picture onClick={() => {setShowModal(true)}}>
        <source
          srcSet="/banner/banner-xlarge.png"
          media="(min-width: 1920px)"
        />
        <source
          srcSet="/banner/banner-large.png"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/banner/banner-medium.png"
          media="(min-width: 640px)"
        />
        <source srcSet="/banner/banner-small.png" media="(max-width: 639px)" />
        <Image
          alt="Banner ilustrativo"
          src="/banner/banner-medium.png"
          fill
          priority
          className="object-cover"
        />
      </picture>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
