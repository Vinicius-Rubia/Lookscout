import React from "react";
import ImageProduct from "../../../../assets/images/illustration3.png";
import { StyledParagraph, StyledTitle } from "../../../../styles/typography";
import { HiArrowRight } from "react-icons/hi";
import * as C from "./styles";
import Button from "../../../../shared/Button";
import { Link } from "react-router-dom";

const ProductTwo: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Grid>
          <C.LeftSide>
            <img src={ImageProduct} alt="Illustration" />
          </C.LeftSide>
          <C.RightSide>
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
            <Link to="teste">
              <Button buttonSize="md" buttonStyle="solid">
                Start now
                <HiArrowRight size={20} />
              </Button>
            </Link>
          </C.RightSide>
        </C.Grid>
      </C.Content>
    </C.Container>
  );
};

export default ProductTwo;
