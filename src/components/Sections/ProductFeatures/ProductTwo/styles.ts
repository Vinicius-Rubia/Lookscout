import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors["primary900/gray900"]};
  display: flex;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;
`;

export const TagTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors["white/primary600"]};
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

export const Grid = styled.div`
  max-width: 1215px;
  margin: 6.4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

export const LeftSide = styled.div`
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const RightSide = styled.div`
  margin: auto 0;

  h2 {
    margin: 1rem 0 1.6rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .description {
    color: ${({ theme }) => theme.colors["primary200/neutral800"]};
    margin-bottom: 4rem;
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
