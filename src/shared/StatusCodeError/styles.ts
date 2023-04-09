import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme}) => theme.colors.white};
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 2rem;

  img {
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
  }

  h1, a {
    color: ${({ theme }) => theme.colors.gray950};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary600};
  }

  ul {
    display: flex;
    margin: 0 auto;
    list-style: none;
    gap: 3.2rem;
    margin-top: 4rem;
    li {
      a {
        font-size: 1.4rem;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;