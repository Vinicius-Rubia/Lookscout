import React, { useContext } from "react";
import { BsFillHexagonFill, BsFacebook, BsGoogle, BsApple, BsInstagram } from "react-icons/bs";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import LogoDark from "../../assets/images/logo-dark.svg";
import LogoLight from "../../assets/images/logo-light.svg";

import * as C from "./styles";
import { ThemeContext } from "styled-components";

const menuNavigation = [
  {
    id: 1,
    title: "Products",
    items: ["Features", "Solutions", "Integrations", "Enterprise", "Explore"],
  },
  {
    id: 2,
    title: "Resources",
    items: ["Partners", "Community", "Developers", "App", "Blog"],
  },
  {
    id: 3,
    title: "Why Choose Us?",
    items: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
  },
  {
    id: 4,
    title: "Company",
    items: ["About Us", "News", "Leadership", "Media Kit"],
  },
]

const Footer: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return (
    <C.Container>
      <C.Content>
        <C.Grid>
          <C.Col>
            <a href="#">
              <img src={title == "dark" ? LogoLight: LogoDark} alt="Lookscout" />
            </a>
            <StyledParagraph className="description" fontSize="md">
              Generate outside the box thinking with the possibility to targtet
              the low.
            </StyledParagraph>
            <C.SocialIcons>
              <a href="#">
                <BsFacebook fontSize={24} />
              </a>
              <a href="#">
                <BsGoogle fontSize={24} />
              </a>
              <a href="#">
                <BsApple fontSize={24} />
              </a>
              <a href="#">
                <BsInstagram fontSize={24} />
              </a>
            </C.SocialIcons>
          </C.Col>
          <C.MenuNavigation>
           {menuNavigation.map((menu) => (
            <C.Col key={menu.id}>
            <StyledTitle tag="h4" fontSize="ls" fontWeight={600}>
              {menu.title}
            </StyledTitle>
            {menu.items.map((item) => (
              <a key={item} href="#">{item}</a>
            ))}
            </C.Col>
           ))}
          </C.MenuNavigation>
        </C.Grid>
        <C.Copyright>
          <BsFillHexagonFill fill="#437EF7" fontSize={24} />
          <StyledParagraph className="description" fontSize="md">&copy; 2023 Lookscout. All Rights Reserved.</StyledParagraph>
        </C.Copyright>
      </C.Content>
    </C.Container>
  );
};

export default Footer;
