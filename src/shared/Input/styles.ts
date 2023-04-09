import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors["white/gray900"]};
    margin: 1rem 0 2.4rem;
    height: 5rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['neutral700/gray600']};
    position: relative;

    svg {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
  }

  label {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors["gray700/white"]};
  }
  
  input {
    padding: 1.2rem 5rem 1.2rem 1.6rem;
    outline: none;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors["gray700/white"]};
    font-size: 1.5rem;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors["neutral900"]};
    }
  }
`;