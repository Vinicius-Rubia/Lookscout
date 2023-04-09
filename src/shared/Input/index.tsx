import React, { InputHTMLAttributes } from 'react'

import * as C from "./styles";
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
  fillIcon: string;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, label, fillIcon, ...rest }) => {
  return (
    <C.Container>
      <label htmlFor={name}>{label}</label>
      <div>
        <input {...rest} />
        {Icon && <Icon size={20} fill={fillIcon} />}
      </div>
    </C.Container>

    // {/* {error && (
    //   <Error title={error}>
    //     <FiAlertCircle color="#C53030" size={20} />
    //   </Error>
    // )} */}
  )
}

export default Input