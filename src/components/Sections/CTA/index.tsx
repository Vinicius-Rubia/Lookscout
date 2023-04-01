import React from "react";
import { StyledTitle } from "../../../styles/typography";
import { useForm, SubmitHandler } from "react-hook-form";

import * as C from "./styles";

type Inputs = {
  email: string;
}

const CTA: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ( data ) => {
    console.log(data);
  }

  return (
    <C.Container>
      <C.Content>
        <C.TagTitle>1% OF THE INDUSTRY</C.TagTitle>
        <C.Grid>
          <div>
            <StyledTitle tag="h2" fontSize="md" fontWeight={600}>
              Welcome to your new digital reality that will rock your world.
            </StyledTitle>
          </div>
          <C.Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <C.Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email é necessário",
                  pattern: {
                    value: /\S+@\S+.\S+/,
                    message: "Insira um endereço de email válido",
                  }
                })}
              />
              <C.Button type="submit">Submit</C.Button>
            </div>
            {errors.email && (
              <C.InputError>{errors.email.message}</C.InputError>
            )}
          </C.Form>
        </C.Grid>
      </C.Content>
    </C.Container>
  );
};

export default CTA;
