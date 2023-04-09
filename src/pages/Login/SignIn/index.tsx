import React, { useContext } from 'react'
import LoginImg from "../../../assets/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { ThemeContext } from 'styled-components';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import * as C from "./styles";

const SignIn: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <C.Grid>
      <C.LeftSide>
        <img src={LoginImg} alt="Image Login" />
      </C.LeftSide>
      <C.RightSide>
        <StyledTitle tag="h1" fontSize="lg" fontWeight={500}>Welcome Back!</StyledTitle>
        <C.Form>
          <C.Header>
            <button>
              <FcGoogle fontSize={24} />
              Sign in with Google
            </button>
            <StyledParagraph fontSize="md">Sign In with your Email</StyledParagraph>
          </C.Header>  
          <C.BodyForm>
              <Input 
                id="email" 
                name="email" 
                type="email"
                label="Email Address"
                placeholder="Insert your email" 
                icon={MdEmail}
                fillIcon={colors['gray700/white']}
              />
              <Input 
                id="password" 
                name="password" 
                type="password"
                label="Password"
                placeholder="Insert your password" 
                icon={RiLockPasswordFill}
                fillIcon={colors['gray700/white']}
              />
            <C.Info>
              <div>
                <input type="checkbox" id="check" />
                <label htmlFor="check">Keep me logged in</label>
              </div>
              <Link to="/recover-password">Forgot password?</Link>
            </C.Info>
          </C.BodyForm>
          <C.Footer>
            <Button buttonSize="md" buttonStyle="solid" type="submit">Log In</Button>
            <StyledParagraph fontSize="md">
              Don't have an account?{" "}
              <Link to="/signup">Register</Link>
            </StyledParagraph>
          </C.Footer>
        </C.Form>
      </C.RightSide>
    </C.Grid>
  )
}

export default SignIn