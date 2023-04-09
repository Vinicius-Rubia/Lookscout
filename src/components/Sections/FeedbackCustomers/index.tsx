import React from "react";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import Avatar1 from "../../../assets/images/avatar1.png";
import Avatar2 from "../../../assets/images/avatar2.png";
import Avatar3 from "../../../assets/images/avatar3.png";
import { HiStar } from "react-icons/hi";
import { HiCreditCard } from "react-icons/hi";
import * as C from "./styles";

const FeedbackCustomers: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <StyledTitle tag="h2" fontSize="md" fontWeight={700}>
          What Our Customers Say
        </StyledTitle>
        <StyledParagraph className="description" fontSize="md">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </StyledParagraph>
        <C.Grid>
          <C.Item>
            <div>
              <img src={Avatar1} alt="Avatar" />
              <img src={Avatar2} alt="Avatar" />
              <img src={Avatar3} alt="Avatar" />
              <img src={Avatar1} alt="Avatar" />
            </div>
            <StyledParagraph fontSize="md">
              Repurpose analytics with the possibility to come
            </StyledParagraph>
          </C.Item>
          <C.Item>
            <div>
              <HiStar fontSize={24} fill="#FFAE43" />
              <HiStar fontSize={24} fill="#FFAE43" />
              <HiStar fontSize={24} fill="#FFAE43" />
              <HiStar fontSize={24} fill="#FFAE43" />
              <HiStar fontSize={24} fill="#DAE0E6" />
            </div>
            <StyledParagraph fontSize="md">
              5 out of 5 stars from 123 reviews from our users
            </StyledParagraph>
          </C.Item>
          <C.Item>
            <div>
              <HiCreditCard fontSize={24} fill="#437EF7" />
            </div>
            <StyledParagraph fontSize="md">
              Repurpose analytics with the possibility to come up.
            </StyledParagraph>
          </C.Item>
        </C.Grid>
      </C.Content>
    </C.Container>
  );
};

export default FeedbackCustomers;
