import Image from "next/image";
import Link from "next/link";

export function HeaderLogo() {
  return (
    <div className="max-sm:w-full h-full">
      <Link href={"/"}>
        <Image
          alt="Logo"
          src="/logo_black.png"
          width={100}
          height={40}
          priority
          className="object-cover"
        />
      </Link>
    </div>
  );
}
