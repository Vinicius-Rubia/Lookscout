import React from "react";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import Banner from "../../../assets/images/illustration1.png";
import * as C from "./styles";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";

const Started: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <StyledTitle tag="h1" fontSize="xl" fontWeight={700}>
          Your Supercharged Design Workflow.
        </StyledTitle>
        <StyledParagraph className="description" fontSize="lg">
          We've been told it is possible to revolutionize the payment industry.
          We have not reinvented the wheel, we decided to build upon it -
          successfully.
        </StyledParagraph>
        <C.Buttons>
          <Link to="/">
            <Button buttonSize="md" buttonStyle="solid">
              Get Started
            </Button>
          </Link>
          <Link to="/">
            <Button buttonSize="md" buttonStyle="outline">
              Contact Us
            </Button>
          </Link>
        </C.Buttons>
        <img src={Banner} alt="Banner" />
      </C.Content>
    </C.Container>
  );
};

export default Started;
