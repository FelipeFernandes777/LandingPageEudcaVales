import HomePage from "@/templates/HomePage";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsAppButton from "@/components/whatsapp_button";
import CookieConsent from "@/components/cookie";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
        <WhatsAppButton />
        <CookieConsent />
      <Footer />
    </>
  );
}
