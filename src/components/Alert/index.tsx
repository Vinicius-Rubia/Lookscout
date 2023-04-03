import React from 'react'
import { HiCheckCircle } from "react-icons/hi";
import * as C from "./styles";

interface IProps {
  showAlert?: boolean;
}

const Alert: React.FC<IProps> = ({ showAlert }) => {
  return (
    <C.Container style={{display: `${showAlert == true ? "inline-flex": "none"}`}}>
      <HiCheckCircle fontSize={24} fill="#41AE49" />
      Email enviado com sucesso!
    </C.Container>
  )
}

export default Alert