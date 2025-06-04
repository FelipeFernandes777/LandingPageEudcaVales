import { FooterContainer } from "./footer_container";
import { FooterInfo } from "./footer_info";

export default function Footer() {
  return (
    <footer className="w-auto h-auto overflow-hidden">
      <FooterContainer>
        <FooterInfo />
        <div className="w-11/12 p-2 mt-2 border-t border-slate-100 flex justify-center items-center gap-2 max-sm:flex-col">
          <span className="text-[var(--white-color)] text-sm">
            © {new Date().getFullYear().toString()} EducaVales
          </span>
          <span className="text-[var(--white-color)] text-sm">
            Todos os direitos reservados
          </span>
        </div>
      </FooterContainer>
    </footer>
  );
}
