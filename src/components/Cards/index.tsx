import React from "react";
import { StyledButton } from "../../styles/components/button";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import Browser from "../../assets/icons/browser.svg";
import Lamp from "../../assets/icons/lamp.svg";
import Ray from "../../assets/icons/ray.svg";
import Socket from "../../assets/icons/socket.svg";
import Star from "../../assets/icons/star.svg";
import User from "../../assets/icons/user.svg";
import * as C from "./styles";

interface ICardProps {
  id: number;
  title: string;
  paragraph: string;
  icon: string;
}

const cards = [
  {
    id: 1,
    title: "Wireless",
    paragraph: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
    icon: Socket,
  },
  {
    id: 2,
    title: "Synergistic",
    paragraph: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
    icon: Ray,
  },
  {
    id: 3,
    title: "Distributed",
    paragraph: "Aliquet et cras nam sed mauris laoreet bibendum et.",
    icon: User,
  },
  {
    id: 4,
    title: "Seamless",
    paragraph: "Lacus vulputate vel metus massa platea ut pellentesque turpis.",
    icon: Lamp,
  },
  {
    id: 5,
    title: "Revolutionary",
    paragraph: "Mauris orci eget iaculis placerat euismod at urna posuere.",
    icon: Star,
  },
  {
    id: 6,
    title: "Web-enabled",
    paragraph: "Mauris orci eget iaculis placerat euismod at urna posuere.",
    icon: Browser,
  },
];

const Cards: React.FC = () => {
  return (
    <>
      {cards.map((card: ICardProps) => (
        <C.Content key={card.id}>
          <C.CardHeader>
            <img src={card.icon} />
            <StyledButton href="#" buttonSize="md" buttonStyle="outline">
              Show more
            </StyledButton>
          </C.CardHeader>
          <StyledTitle fontSize="sm" tag="h3" fontWeight={600}>
            {card.title}
          </StyledTitle>
          <StyledParagraph fontSize="md">{card.paragraph}</StyledParagraph>
        </C.Content>
      ))}
    </>
  );
};

export default Cards;
