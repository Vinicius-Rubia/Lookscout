import styled, { css } from "styled-components";
import Title from "./components/Typography";

export const StyledTitle = styled(Title)`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => theme["gray-700"]};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 52px;
        `;
      case "md":
        return css`
          font-size: 32px;
        `;

      case "sm":
        return css`
          font-size: 22px;
        `;
    }
  }}
`;

interface iStyledParagraph {
  fontSize: "lg" | "md" | "sm";
}

export const StyledParagraph = styled.p<iStyledParagraph>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 18px;
        `;
      case "md":
        return css`
          font-size: 16px;
        `;
      case "sm":
        return css`
          font-size: 14px;
        `;
    }
  }}
`;
