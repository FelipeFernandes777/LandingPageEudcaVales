"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookie_consent");
    if (!consentGiven) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--green-color)] text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          Este site utiliza cookies. Ao continuar navegando, você aceita nossa{" "}
          <Link
            href="/politicas-cookies"
            className="underline hover:text-light-green"
          >
            Política de Cookies
          </Link>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="bg-[var(--light-green-color)] text-green font-semibold px-4 py-2 rounded hover:bg-[var(--light-green-color)] transition text-[var(--black-color)]"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
