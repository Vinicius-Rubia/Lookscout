import styled from 'styled-components';

export const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${({ theme }) => theme.colors['white/gray950']};
  overflow: hidden;

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
  margin-bottom: 3.4rem;

  p {
    text-align: center;
    font-weight: 500;
    margin: 1rem 0;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary600};
    font-weight: 600;
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;