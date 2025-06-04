import Image from "next/image";

export function HeaderLogo() {
  return (
    <div className="max-sm:w-full h-full">
      <Image 
        alt="Logo"
        src="/logo_black.png"
        width={100}
        height={40}
        priority
        className="object-cover"
      />
    </div>
  )
}