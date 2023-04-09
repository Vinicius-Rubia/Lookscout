import React from "react";
import ImageProduct from "../../../../assets/images/illustration4.png";
import { StyledParagraph, StyledTitle } from "../../../../styles/typography";
import { HiArrowRight } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import * as C from "./styles";
import Button from "../../../../shared/Button";
import { Link } from "react-router-dom";

const items = [
  { id: 1, icon: <HiCheck size={24} />, text: "Enterprise-grade security" },
  { id: 2, icon: <HiCheck size={24} />, text: "99.9% guaranteed uptime SLA" },
  { id: 3, icon: <HiCheck size={24} />, text: "Designated customer success team"},
];

const ProductThree: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Grid>
          <C.LeftSide>
            <StyledTitle tag="h2" fontSize="md" fontWeight={700}>
              Demonstrate branding consequently think outside
            </StyledTitle>
            <StyledParagraph className="description" fontSize="md">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt. Aenean malesuada
              tellus tellus faucibus mauris quisque mauris in.
            </StyledParagraph>
            <C.Items>
              {items.map((item) => (
                <div key={item.id}>
                  {item.icon}{" "}
                  <StyledParagraph fontSize="md">{item.text}</StyledParagraph>
                </div>
              ))}
            </C.Items>
            <Link to="/">
            <Button buttonSize="md" buttonStyle="solid">
              Start now
              <HiArrowRight size={20} />
            </Button>
            </Link>
          </C.LeftSide>
          <C.RightSide>
            <img src={ImageProduct} alt="Illustration" />
          </C.RightSide>
        </C.Grid>
      </C.Content>
    </C.Container>
  );
};

export default ProductThree;
