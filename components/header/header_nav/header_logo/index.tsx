import Image from "next/image";

export function HeaderLogo() {
  return (
    <div className="max-sm:w-full h-auto">
      <Image 
        alt="Logo"
        src="/logo.png"
        width={150}
        height={50}
        priority
        className="object-cover"
      />
    </div>
  )
}