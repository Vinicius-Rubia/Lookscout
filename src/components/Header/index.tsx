import React, { useState } from "react";
import Logo from "../../assets/images/logo-dark.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { StyledButton } from "../../styles/components/button";

import * as C from "./styles";

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const handleToogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <C.Container>
      <C.Content>
        <a href="#">
          <img src={Logo} alt="Lookscout" />
        </a>
        <C.MenuMobile>
          {menu ? (
            <IoMdClose onClick={handleToogleMenu} fontSize={24} />
          ) : (
            <HiOutlineMenu onClick={handleToogleMenu} fontSize={24} />
          )}
        </C.MenuMobile>
        <C.Navigation showMenu={menu}>
          <C.Nav>
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
        </C.Navigation>
      </C.Content>
    </C.Container>
  );
};

export default Header;
