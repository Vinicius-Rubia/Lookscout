import React from "react";
import ImageProduct from "../../../../assets/images/illustration2.png";
import { StyledParagraph, StyledTitle } from "../../../../styles/typography";
import { StyledButton } from "../../../../styles/components/button";
import { HiArrowRight } from "react-icons/hi";
import * as C from "./styles";

const ProductOne: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Grid>
          <C.LeftSide>
            <C.TagTitle>1% OF THE INDUSTRY</C.TagTitle>
            <StyledTitle tag="h2" fontSize="md" fontWeight={700}>
              Demonstrate branding consequently think outside the box and
              beyond.
            </StyledTitle>
            <StyledParagraph className="description" fontSize="md">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt. Aenean malesuada
              tellus tellus faucibus mauris quisque mauris in.
            </StyledParagraph>
            <StyledButton href="#" buttonSize="md" buttonStyle="solid">
              Start now
              <HiArrowRight size={20} />
            </StyledButton>
          </C.LeftSide>
          <C.RightSide>
            <img src={ImageProduct} alt="Illustration" />
          </C.RightSide>
        </C.Grid>
      </C.Content>
    </C.Container>
  );
};

export default ProductOne;
