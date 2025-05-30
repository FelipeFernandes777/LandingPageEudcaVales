import { HeaderLogo } from "./header_logo";
import { HeaderNavContainer } from "./header_nav_container";
import { HeaderNavMenu } from "./header_nav_menu";
import { HeaderNavMenuDesktop } from "./header_nav_menu_desktop";

export function HeaderNav() {
  return (
    <HeaderNavContainer>
      <HeaderLogo />
      <HeaderNavMenu />
      <HeaderNavMenuDesktop />
    </HeaderNavContainer>
  );
}
