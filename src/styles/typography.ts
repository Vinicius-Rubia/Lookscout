import styled, { css } from "styled-components";
import Title from "./components/Typography";

export const StyledTitle = styled(Title)`
  font-family: "Inter", sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  /* color: ${({ theme }) => theme.colors.black}; */

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
  font-family: "Inter", sans-serif;
  font-weight: 400;

  /* color: ${({ theme }) => theme.colors.white}; */

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
