import React, { useState, useEffect, useContext } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { shade } from "polished";
import { ThemeContext } from "styled-components";
import { StyledButton } from "../../styles/components/button";
import Switch from "react-switch";
import LogoDark from "../../assets/images/logo-dark.svg";
import LogoLight from "../../assets/images/logo-light.svg";

import * as C from "./styles";

interface Props {
  toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
  const [menu, setMenu] = useState(false);
  const { colors, title } = useContext(ThemeContext);

  const handleToogleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    menu
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }, [menu]);

  return (
    <C.Container>
      <C.Content>
        <a href="#">
          <img src={title == "dark" ? LogoLight: LogoDark} alt="Lookscout" />
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
        <Switch
          onChange={toogleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={55}
          handleDiameter={17}
          offColor={shade(0.15, colors.neutral200)}
          onColor={colors.primary600}
        />
      </C.Content>
    </C.Container>
  );
};

export default Header;
