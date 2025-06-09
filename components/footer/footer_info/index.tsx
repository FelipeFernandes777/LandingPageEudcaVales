import Image from "next/image";
import { FooterInfoContainer } from "./footer_info_container";
import { FooterInfoDescription } from "./footer_info_description";
import { FooterInfoTitle } from "./footer_info_title/intex";

export function FooterInfo() {
  const links = {
    instagram: "https://www.instagram.com/educavale.oficial?igsh=MW1vcWY4cWZ4ZGxrMg==",
    facebook: "https://www.facebook.com/Educavale/",
  };

  return (
    <FooterInfoContainer>
      <div className="flex flex-col gap-2 h-10/12 w-full">
        <Image 
          alt="Logo da faculdade Educavale"
          src={"/logo.png"}
          width={150}
          height={20}
        />
        <div className="flex gap-2 items-center w-full">
          <a href={links.instagram}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-instagram-icon lucide-instagram text-slate-100"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href={links.facebook}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-facebook-icon lucide-facebook text-slate-100"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-10/12 w-full">
        <FooterInfoTitle>Navegação</FooterInfoTitle>
        <FooterInfoDescription url="/" link={true}>
          Inicio
        </FooterInfoDescription>
        <FooterInfoDescription url="#cursos" link={true}>
          Áreas mais procuradas
        </FooterInfoDescription>
        <FooterInfoDescription url="#preco" link={true}>
          Preço
        </FooterInfoDescription>
        <FooterInfoDescription url="#contato" link={true}>
          Contato
        </FooterInfoDescription>
      </div>
      <div className="flex gap-2 h-10/12 flex-col w-full">
        <FooterInfoTitle>Links Uteis</FooterInfoTitle>
        <div className="w-full flex items-center gap-2">
          <FooterInfoDescription url="/politica-privacidade" link={true}>
            Política de Privacidade
          </FooterInfoDescription>
          <FooterInfoDescription url="/politica-cookies" link={true}>
            Política de Cookies
          </FooterInfoDescription>
        </div>
      </div>
      <div className="w-full h-4"></div>
    </FooterInfoContainer>
  );
}
