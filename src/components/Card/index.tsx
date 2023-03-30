import React from 'react'
import { StyledButton } from '../../styles/components/button';
import Title from '../../styles/components/Typography'
import { StyledParagraph } from "../../styles/typography"
import * as C from "./styles"

interface ICardProps {
  title: string;
  paragraph: string;
  textButton: string;
  imageIcon: string;
}

const Card: React.FC<ICardProps> = ({ title, paragraph, textButton, imageIcon }) => {
  return (
    <C.Container>
      <div>
        <img src={imageIcon} />
        <StyledButton buttonSize='md' buttonStyle='solid'>{textButton}</StyledButton>
      </div>
      <Title fontSize='lg' tag='h1' fontWeight={700}>{title}</Title>
      <StyledParagraph fontSize='md'>{paragraph}</StyledParagraph>
    </C.Container>
  )
}

export default Card