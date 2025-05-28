import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const poppins = Poppins({
  style: ["normal"],
  weight: ["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "EducaVales Pós Graduação",
  description: "EducaVales a faculdade EAD que transforma! Pós Graduação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
