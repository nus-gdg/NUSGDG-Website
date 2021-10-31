import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  LogoImage,
  StyledLink,
} from "./HeaderElements";
import logo from "../images/nusgdg_white_text_transparent_bg.png";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <StyledLink to="/" exact activeClassName="active">
          <LogoImage src={logo} />
        </StyledLink>
      </LogoContainer>
      <LinksContainer>
        <StyledLink to="/about" exact activeClassName="active">
          About
        </StyledLink>
        <StyledLink to="/events" exact activeClassName="active">
          Events
        </StyledLink>
        <StyledLink to="/games" exact activeClassName="active">
          Games
        </StyledLink>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
