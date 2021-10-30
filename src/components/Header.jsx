import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../images/nusgdg_white_text_transparent_bg.png";
import styled from 'styled-components'
const MenuDiv = styled.div`
  padding-bottom : 20px;
`

const MenuLink = styled(Link)`
display:block;
padding:.5rem 1rem;
padding-right:.5rem;
padding-left:.5rem;
color: white;
  :hover{
    border-color:#e9ecef #e9ecef #dee2e6;
    color: violet;
    font-weight: bold;
    text-decoration: none;
  }
`
function Header(props) {
  return (
    <MenuDiv className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
        <div class="container">
          <Link class="navbar-brand" to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="NUS GDG" width="100" />
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <MenuLink  to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </MenuLink>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <MenuLink to="/about">
                  About
                </MenuLink>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <MenuLink to="/contact">
                  Contact
                </MenuLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </MenuDiv>
  );
}

export default withRouter(Header);
