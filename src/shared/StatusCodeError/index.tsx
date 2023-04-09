import React from 'react'
import ErrorImg from "../../assets/images/error.svg";

import * as C from "./styles";
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import Button from '../Button';
import { Link } from 'react-router-dom';

const StatusCodeError: React.FC = () => {
  return (
    <C.Container>
      <img src={ErrorImg} alt="Error" />
      <StyledTitle tag="h2" fontSize="sm" fontWeight={600}>404 Not Found</StyledTitle>
      <StyledTitle tag="h1" fontSize="lg" fontWeight={600}>Whoops! That page doesen't exist.</StyledTitle>
      <StyledParagraph fontSize="md">The page you requested could not be found</StyledParagraph>
      <Link to="/">
        <Button buttonSize="md" buttonStyle="solid">Back to start</Button>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </C.Container>
  )
}

export default StatusCodeError