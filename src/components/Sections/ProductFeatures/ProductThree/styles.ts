import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  max-width: 1215px;
  margin: 6.4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 13rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;

export const LeftSide = styled.div`
  margin: auto 0;

  h2 {
    margin: 1rem 0 1.6rem;
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 2.5rem;
    }

    a {
      width: 100%;
    }
  }
`;

export const RightSide = styled.div`
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const Items = styled.div`
  margin: 2.4rem 0 3rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    p {
      color: ${({ theme }) => theme.colors["gray700/white"]};
    }

    svg {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
