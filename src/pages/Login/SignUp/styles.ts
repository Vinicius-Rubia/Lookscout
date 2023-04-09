import styled from 'styled-components';

export const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${({ theme }) => theme.colors['white/gray950']};

  @media (max-width: 440px) {
    grid-template-columns: 1fr 0;
  }
`;

export const LeftSide = styled.div`
  width: 42.5rem;
  margin: auto;

  h1 {
    text-align: center;
  }
  
  button {
    cursor: pointer;
  }

  button {
    height: 4.6rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['neutral700/gray600']};
    font-size: 1.6rem;
  }

  @media (max-width: 950px) {
    padding: 0 3rem;
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Form = styled.div``;

export const Header = styled.header`
  display: grid;
  margin-bottom: 2.4rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin: 3.2rem 0; 
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors["gray700/white"]};
    background: ${({ theme }) => theme.colors["white/gray900"]};
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors["neutral100/neutral700"]};
    }
  }

  p {
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors["gray700/white"]};

    &::after {
      border-left: 1px solid red;
      width: 100px;
      height: 100px;
    }
  }
`;

export const BodyForm = styled.form``;

export const InputBox = styled.div`
  display: grid;

  label {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors["gray700/white"]};
  }

  input {
    margin: 1rem 0 2.4rem;
    padding: 1.2rem 1.6rem;
    background: ${({ theme }) => theme.colors["white/gray900"]};
    color: ${({ theme }) => theme.colors["gray700/white"]};
    font-size: 1.5rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["gray700/white"]};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  gap: 1.2rem;

  label {
    color: ${({ theme }) => theme.colors["gray700/white"]};
  }

  @media (max-width: 440px) {
    flex-direction: column-reverse;
    gap: 1.2rem;
  }
`;

export const Footer = styled.footer`
  display: grid;
  gap: 2.4rem;

  button {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary600};
    transition: 0.2s; 

    &:hover {
      filter: brightness(1.1);
      box-shadow: 0 4px 25px rgba(255, 249, 249, 0.25);
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary600};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;