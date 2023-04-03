import React from "react";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import ProductOne from "./ProductOne";
import ProductThree from "./ProductThree";
import ProductTwo from "./ProductTwo";
import * as C from "./styles";

const ProductFeatures: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <StyledTitle tag="h2" fontSize="md" fontWeight={700}>
          Redefining Product Features
        </StyledTitle>
        <StyledParagraph className="description" fontSize="md">
          Keeping your eye on the ball while performing a deep dive on the
          start-up mentality to derive convergence on cross-platform
          integration.
        </StyledParagraph>
      </C.Content>
      <ProductOne />
      <ProductTwo />
      <ProductThree />
    </C.Container>
  );
};

export default ProductFeatures;
