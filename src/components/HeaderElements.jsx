import styled from "styled-components";
import * as Colors from "../constants/Colors";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 8vh;
  width: 100%;
  background: ${Colors.BLACK};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const LogoContainer = styled.div`
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const LinksContainer = styled.div`
  width: 12.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
