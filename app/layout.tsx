import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsAppButton from "@/components/whatsapp_button";
import Script from "next/script";

const poppins = Poppins({
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EducaVales Pós-Graduação",
  description:
    "EducaVales é a faculdade EAD que transforma vidas. Faça sua pós-graduação com qualidade, certificado reconhecido e preço acessível.",
  keywords: [
    "EducaVales",
    "Faculdade EAD",
    "Pós-Graduação",
    "Cursos Online",
    "Educação a Distância",
  ],
  authors: [
    { name: "Faculdade EducaVales", url: "https://faculdadeeducavale.com.br" },
  ],
  creator: "Faculdade EducaVales",
  metadataBase: new URL("https://faculdadeeducavale.com.br"),

  openGraph: {
    title: "EducaVales Pós-Graduação",
    description:
      "Faculdade EAD com qualidade, certificado e mensalidades acessíveis.",
    url: "https://faculdadeeducavale.com.br",
    siteName: "Faculdade EducaVales",
    images: [
      {
        url: "https://faculdadeeducavale.com.br/banner/banner-large.jpeg",
        width: 1200,
        height: 630,
        alt: "Banner EducaVales",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EducaVales Pós-Graduação",
    description:
      "Faculdade EAD com qualidade, certificado e mensalidades acessíveis.",
    images: ["https://faculdadeeducavale.com.br/banner/banner-large.jpeg"],
  },

  alternates: {
    canonical: "https://faculdadeeducavale.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          id="jsonld-educavale"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: "Faculdade EducaVales",
              url: "https://faculdadeeducavale.com.br",
              logo: "https://faculdadeeducavale.com.br/form/logo.png",
              sameAs: [
                "https://www.instagram.com/educavale.oficial?igsh=MW1vcWY4cWZ4ZGxrMg==", // Colocar pagina instagram
                "https://www.facebook.com/Educavale/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
