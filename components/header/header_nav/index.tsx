import { HeaderLogo } from "./header_logo";
import { HeaderNavContainer } from "./header_nav_container";
import { HeaderNavMenu } from "./header_nav_menu";

export function HeaderNav() {
  return (
    <HeaderNavContainer>
      <HeaderLogo />
      <HeaderNavMenu />
    </HeaderNavContainer>
  );
}
