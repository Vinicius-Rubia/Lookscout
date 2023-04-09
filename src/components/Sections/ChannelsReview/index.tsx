import React from "react";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";
import Cards from "../../Cards";
import * as C from "./styles";

const ChannelsReview: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <StyledTitle tag="h2" fontSize="md" fontWeight={700}>
          Our Channels Review
        </StyledTitle>
        <StyledParagraph className="description" fontSize="md">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </StyledParagraph>
        <C.CardContainer>
          <Cards />
        </C.CardContainer>
        <Link to="/">
          <Button buttonSize="md" buttonStyle="solid">Reveal all channels</Button>
        </Link>
      </C.Content>
    </C.Container>
  );
};

export default ChannelsReview;
