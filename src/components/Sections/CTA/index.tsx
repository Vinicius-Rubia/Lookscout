import React from "react";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import * as C from "./styles";
import { showAlert } from "../../../redux/alertSlice";

type Inputs = {
  email: string;
};

const CTA: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(showAlert(true));
  };

  return (
    <C.Container>
      <C.Content>
        <C.TagTitle>1% OF THE INDUSTRY</C.TagTitle>
        <C.Grid>
          <div>
            <StyledTitle tag="h2" fontSize="md" fontWeight={600}>
              Welcome to your new digital reality that will rock your world.
            </StyledTitle>
            <StyledParagraph fontSize="md">
              Let us help you take you from zero to serious business and beyond.
              Our no-strings attached free trial lets you test our product
              today.
            </StyledParagraph>
          </div>
          <C.Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <C.Input
                type="email"
                placeholder="Enter your email"
                error={!!errors.email}
                {...register("email", {
                  required: "Email é necessário",
                  pattern: {
                    value: /\S+@\S+.\S+/,
                    message: "Insira um endereço de email válido",
                  },
                })}
              />
              {errors.email && (
                <C.InputError className="error-mobile">
                  {errors.email.message}
                </C.InputError>
              )}
              <C.Button
                disabled={!!errors.email}
                error={!!errors.email}
                type="submit"
              >
                Submit
              </C.Button>
            </div>
            {errors.email && (
              <C.InputError className="error-desktop">
                {errors.email.message}
              </C.InputError>
            )}
          </C.Form>
        </C.Grid>
      </C.Content>
    </C.Container>
  );
};

export default CTA;
