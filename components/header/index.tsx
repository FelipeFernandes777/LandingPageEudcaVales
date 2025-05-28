"use client";
import { useEffect, useState } from "react";
import { HeaderContainer } from "./header_container";
import { HeaderNav } from "./header_nav";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full h-auto top-0 z-50 transition-all duration-300 ${
        isSticky ? "fixed shadow-md bg-white" : "relative"
      }`}
    >
      <HeaderContainer>
        <HeaderNav />
      </HeaderContainer>
    </header>
  );
}
