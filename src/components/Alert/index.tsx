import React from 'react'
import { HiCheckCircle } from "react-icons/hi";

import * as C from "./styles";

const Alert: React.FC = () => {
  return (
    <C.Container>
      <HiCheckCircle fontSize={24} fill="#41AE49" />
      Email enviado com sucesso!
    </C.Container>
  )
}

export default Alert