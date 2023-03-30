import React from "react";
import Logo from "../../assets/images/logo.svg";
import * as C from "./styles";
import { StyledButton } from "../../styles/components/button";

const Header: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Nav>
          <a href="#">
            <img src={Logo} alt="Lookscout" />
          </a>
          <C.NavContent>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </C.NavContent>
        </C.Nav>
        <C.Login>
          <StyledButton href="#" buttonSize="md">
            Sign Up
          </StyledButton>
          <StyledButton href="#" buttonSize="md" buttonStyle="solid">
            Log In
          </StyledButton>
        </C.Login>
      </C.Content>
    </C.Container>
  );
};

export default Header;
