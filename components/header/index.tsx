import { HeaderContainer } from "./header_container";
import { HeaderNav } from "./header_nav";

export default function Header() {
  return (
    <header className="w-screen h-auto fixed top-0">
      <HeaderContainer>
        <HeaderNav />
      </HeaderContainer>
    </header>
  );
}
