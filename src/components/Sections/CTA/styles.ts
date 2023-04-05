import styled from "styled-components";

interface FormProps {
  error: boolean;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary900};
  padding: 6.4rem 0;
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  h2 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 380px) {
    h2 {
      font-size: 2.3rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  margin: 0 6.4rem;

  div {
    display: grid;

    p {
      margin-top: 2.4rem;
      color: ${({ theme }) => theme.colors.primary200};
    }
  }

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
    gap: 3.2rem;
  }

  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const TagTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 6.4rem;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 660px) {
    div {
      display: grid;
      gap: 1.6rem;

      input, button {
        border-radius: 6px;
      }
    }
  }
`;

export const Input = styled.input<FormProps>`
  flex: 1;
  padding: 1.2rem 1.6rem;
  outline: none;
  font-size: 1.5rem;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.danger700 : theme.colors.primary600};
  border-radius: 6px 0 0 6px;

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ theme, error }) =>
        error ? theme.colors.danger700 : theme.colors.primary600};
  }
`;

export const Button = styled.button<FormProps>`
  font-size: 1.5rem;
  height: 4.6rem;
  font-weight: 600;
  border: none;
  padding: 0 1.8rem;
  border-radius: 0 6px 6px 0;
  transition: 0.4s;
  cursor: ${({ error }) => (error ? "not-allowed" : "pointer")};

  background: ${({ theme, error }) =>
    error ? theme.colors.primary950 : theme.colors.primary600};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 4px 25px rgba(255, 249, 249, 0.25);
  }
`;

export const InputError = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.5rem;
  font-size: 1.2rem;
  
  @media (min-width: 660px) {
    &.error-mobile {
      display: none;
    }

    &.error-desktop {
      display: block;
    }
  }
  
  @media (max-width: 660px) {
    &.error-mobile {
      display: block;
    }

    &.error-desktop {
      display: none;
    }
  }
`;
