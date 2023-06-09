import styled, { css } from "styled-components";
import Title from "./components/Typography";

export const StyledTitle = styled(Title)`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => theme.colors["gray700/neutral200"]};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "xl":
        return css`
          font-size: 52px;
        `;

      case "lg":
        return css`
          font-size: 36px;
        `;
      case "md":
        return css`
          font-size: 32px;
        `;

      case "sm":
        return css`
          font-size: 22px;
        `;

      case "ls":
        return css`
          font-size: 16px;
        `;
    }
  }}
`;

interface iStyledParagraph {
  fontSize: "lg" | "md" | "sm";
}

export const StyledParagraph = styled.p<iStyledParagraph>`
  line-height: 24px;
  color: ${({ theme }) => theme.colors["gray50/neutral800"]};
  
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
