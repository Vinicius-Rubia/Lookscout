import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  h1 {
    text-align: center;
    max-width: 70rem;
    margin: 0 auto 2.4rem;
    padding-top: 4.8rem;
  }

  .description {
    color: ${({ theme }) => theme.colors.textColorSecundary};
    max-width: 95rem;
    margin: 0 auto;
    text-align: center;
  }

  img {
    width: 100%;
  }

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 3.6rem;
      padding-top: 2.4rem;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 2.9rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  margin: 3.6rem 0 4.8rem;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
