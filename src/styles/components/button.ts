import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: "md" | "sm";
  buttonStyle?: "solid" | "outline";
}

export const StyledButton = styled.a<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: none;

  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonSolid};
  border: none;
  border-radius: 6px;
  transition: 0.2s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "md":
        return css`
          padding: 0 1.8rem;
          height: 46px;
        `;
      case "sm":
        return css`
          padding: 0 1.5rem;
          height: 42px;
        `;
    }
  }}

  ${({ buttonStyle, theme }) => {
    switch (buttonStyle) {
      case "solid":
        return css`
          background: ${theme.colors.buttonSolid};
          color: ${theme.colors.white};

          &:hover {
            filter: brightness(1.1);
            box-shadow: 0 4px 25px rgba(255, 249, 249, 0.25);
          }
        `;
      case "outline":
        return css`
          border: 1px solid ${theme.colors.borderButton};
          background: ${theme.colors.buttonOutline};
          color: ${theme.colors.textButton};

          &:hover {
            border: 1px solid ${theme.colors.textButton};
            color: ${theme.colors.textButton};
          }
        `;
    }
  }}
`;
