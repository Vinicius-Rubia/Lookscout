import React, { useContext } from "react";
import recoverPasswordImg from "../../../assets/images/recoverPassword.png";
import { MdEmail } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import Input from "../../../shared/Input";
import { ThemeContext } from "styled-components";
import * as C from "./styles";
import { Link } from "react-router-dom";
import Button from "../../../shared/Button";

const RecoverPassword: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <C.Grid>
      <C.LeftSide>
        <StyledTitle tag="h1" fontSize="lg" fontWeight={500}>
          Reset password
        </StyledTitle>
        <C.Form>
          <C.Header>
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
          </C.BodyForm>
          <C.Footer>
            <Button buttonSize="md" buttonStyle="solid" type="submit">Recover Password</Button>
            <Link to="/signin">
              <BsArrowLeftShort fontSize={24} fontWeight={900} />
              Go back to the login
            </Link>
          </C.Footer>
        </C.Form>
      </C.LeftSide>
      <C.RightSide>
        <img src={recoverPasswordImg} alt="Image Login" />
      </C.RightSide>
    </C.Grid>
  );
};

export default RecoverPassword;
