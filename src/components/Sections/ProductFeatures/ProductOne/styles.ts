import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;
`;

export const TagTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme["primary-600"]};
  font-size: 1.4rem;
  font-weight: 600;
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

  .description {
    color: ${({ theme }) => theme["gray-50"]};
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

export const RightSide = styled.div`
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;
