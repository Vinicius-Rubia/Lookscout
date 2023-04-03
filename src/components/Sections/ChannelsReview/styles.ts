import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > a:last-child {
    margin: 6.4rem auto;
  }

  h2 {
    text-align: center;
    margin: 6.4rem auto 1.6rem;
  }

  .description {
    color: ${({ theme }) => theme["gray-50"]};
    text-align: center;
    margin-bottom: 6.4rem;
  }

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }

  @media (max-width: 550px) {
    & > a:last-child {
      margin: 2.4rem auto;
      width: 100%;
    }

    h2 {
      font-size: 3rem;
      margin: 3.2rem auto 1.2rem;
    }

    .description {
      margin-bottom: 3.2rem;
    }
  }

  @media (max-width: 380px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
