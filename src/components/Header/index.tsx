import React, { useState, useEffect, useContext } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { shade } from "polished";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import LogoDark from "../../assets/images/logo-dark.svg";
import LogoLight from "../../assets/images/logo-light.svg";
import { Link } from "react-router-dom";
import * as C from "./styles";
import Button from "../../shared/Button";

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
        <Link to="/">
          <img src={title == "dark" ? LogoLight : LogoDark} alt="Lookscout" />
        </Link>
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/our-procucts">Our Products</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </C.NavContent>
          </C.Nav>
          <C.Login>
            <Link to="/signup">
              <Button buttonSize="md">Sign Up</Button>
            </Link>
            <Link to="/signin">
              <Button buttonSize="md" buttonStyle="solid">Log In</Button>
            </Link>
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
