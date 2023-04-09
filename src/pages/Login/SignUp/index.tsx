import React, { useContext } from "react";

import LoginImg from "../../../assets/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import * as C from "./styles";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import Input from "../../../shared/Input";
import { ThemeContext } from "styled-components";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <C.Grid>
      <C.LeftSide>
        <StyledTitle tag="h1" fontSize="lg" fontWeight={500}>
          Join Us!
        </StyledTitle>
        <C.Form>
          <C.Header>
            <button>
              <FcGoogle fontSize={24} />
              Sign Up with Google
            </button>
            <StyledParagraph fontSize="md">
              Sign Up with your Email
            </StyledParagraph>
          </C.Header>
          <C.BodyForm>
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="Insert your email"
              icon={MdEmail}
              fillIcon={colors["gray700/white"]}
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="Insert your password"
              icon={RiLockPasswordFill}
              fillIcon={colors["gray700/white"]}
            />
            <C.Info>
              <input type="checkbox" id="check" />
              <label htmlFor="check">Keep me logged in</label>
            </C.Info>
          </C.BodyForm>
          <C.Footer>
            <Button buttonSize="md" buttonStyle="solid" type="submit">Log In</Button>
            <StyledParagraph fontSize="md">
              Do you have an account? <Link to="/signin">Sign In</Link>
            </StyledParagraph>
          </C.Footer>
        </C.Form>
      </C.LeftSide>
      <C.RightSide>
        <img src={LoginImg} alt="Image Login" />
      </C.RightSide>
    </C.Grid>
  );
};

export default SignUp;
