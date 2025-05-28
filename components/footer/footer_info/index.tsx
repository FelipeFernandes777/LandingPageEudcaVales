import { FooterInfoContainer } from "./footer_info_container";
import { FooterInfoDescription } from "./footer_info_description";
import { FooterInfoTitle } from "./footer_info_title/intex";

export function FooterInfo() {
  const links = {
    instagram: "",
    facebook: "",
    linkedin: "",
  };

  return (
    <FooterInfoContainer>
      <div className="flex flex-col gap-2 h-10/12">
        <FooterInfoTitle>Logo</FooterInfoTitle>
        <FooterInfoDescription link={false} url="">
          Faculdade de pós-graduação 100% EAD, com foco na formação de
          profissionais com excelência e flexibilidade.
        </FooterInfoDescription>
        <div className="flex gap-2 items-center justify-evenly w-full">
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
          <a href={links.linkedin}>
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
              className="lucide lucide-linkedin-icon lucide-linkedin text-slate-100"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-10/12">
        <FooterInfoTitle>Navegação</FooterInfoTitle>
        <FooterInfoDescription url="#inicio" link={true}>
          Inicio
        </FooterInfoDescription>
        <FooterInfoDescription url="#areas" link={true}>
          Áreas mais procuradas
        </FooterInfoDescription>
        <FooterInfoDescription url="#depoimentos" link={true}>
          Depoimentos de Alunos
        </FooterInfoDescription>
        <FooterInfoDescription url="#cadastro" link={true}>
          Cadastro
        </FooterInfoDescription>
      </div>
      <div className="flex gap-2 h-10/12 flex-col">
        <FooterInfoTitle>Links Uteis</FooterInfoTitle>
        <div className="w-full flex items-center justify-evenly gap-2">
          <FooterInfoDescription url="" link={true}>
            Política de Privacidade
          </FooterInfoDescription>
          <FooterInfoDescription url="/cookies" link={true}>
            Política de Cookies
          </FooterInfoDescription>
        </div>
      </div>
    </FooterInfoContainer>
  );
}
