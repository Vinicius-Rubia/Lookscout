import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: "md" | "sm";
  buttonStyle?: "solid" | "outline";
}

// export const StyledIconLink = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   width: 35px;
//   min-width: 35px;
//   height: 35px;
//   color: ${({ theme }) => theme.colors.white};
//   opacity: 0.5;
//   transition: 0.4s;

//   &:hover {
//     opacity: 1;
//   }
// `;

export const StyledButton = styled.a<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: none;
  text-decoration: none;

  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme["primary-600"]};
  border: none;
  border-radius: 6px;
  transition: 0.4s;

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
          background: ${theme["primary-600"]};
          color: ${theme.white};

          &:hover {
            filter: brightness(1.1);
            box-shadow: 0 4px 25px rgba(255, 249, 249, 0.25);
          }
        `;
      case "outline":
        return css`
          border: 1px solid ${theme["neutral-700"]};
          color: ${theme["gray-700"]};

          &:hover {
            border: 1px solid ${theme["primary-600"]};
            color: ${theme["primary-600"]};
          }
        `;
    }
  }}
`;
