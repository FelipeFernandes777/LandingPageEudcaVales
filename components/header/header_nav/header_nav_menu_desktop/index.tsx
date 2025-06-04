import { HeaderNavMenuDesktopContainer } from "./header_nav_menu_desktop_container";

export function HeaderNavMenuDesktop() {
  return (
    <HeaderNavMenuDesktopContainer>
      <span className="flex justify-center items-center gap-2 text-[var(--black-color)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
        </svg>
        Inicio
      </span>
      <span className="flex justify-center items-center gap-2 text-[var(--black-color)]">
        {" "}
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
          className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"
        >
          <path d="M12 16v5" />
          <path d="M16 14v7" />
          <path d="M20 10v11" />
          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
          <path d="M4 18v3" />
          <path d="M8 14v7" />
        </svg>
        Áreas mais procuradas
      </span>
      <span className="flex justify-center items-center gap-2 text-[var(--black-color)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path>
        </svg>
        Preços
      </span>
      <span className="flex justify-center items-center gap-2 text-[var(--black-color)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
        </svg>
        Contato
      </span>
    </HeaderNavMenuDesktopContainer>
  );
}
