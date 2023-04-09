import React, { ButtonHTMLAttributes } from 'react'
import * as C from "./styles";

interface iStyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonSize: "md" | "sm";
  buttonStyle?: "solid" | "outline";
  children: React.ReactNode;
}

const Button: React.FC<iStyledButtonProps> = ({ children, buttonSize, buttonStyle, ...rest }) => {
  return (
    <C.StyledButton buttonSize={buttonSize} buttonStyle={buttonStyle} {...rest}>
      {children}
    </C.StyledButton>
  )
}

export default Button