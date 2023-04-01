import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  h2 {
    margin-top: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  margin: 0 6.4rem 17.4rem;
`;

export const TagTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme["primary-600"]};
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 6.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 1.2rem 1.6rem;
  outline: none;
  font-size: 1.5rem;
  box-shadow: 0 0 0 1px ${(props) => props.theme['neutral-700']};
  border: none;
  border-radius: 10px 0 0 10px;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['primary-800']};

    + button {
      height: 4.7rem;
    }
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-25']};
  }
`;

export const Button = styled.button`
  font-size: 1.5rem;
  height: 4.6rem;
  font-weight: 600;
  border: none;
  padding: 0 1.8rem;
  border-radius: 0 10px 10px 0;
  transition: 0.4s;

  background: ${({ theme }) => theme["primary-600"]};
  color: ${({ theme }) => theme.white};

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 4px 25px rgba(255, 249, 249, 0.25);
  }
`;

export const InputError = styled.div`
  color: ${({ theme }) => theme['danger-700']};
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;