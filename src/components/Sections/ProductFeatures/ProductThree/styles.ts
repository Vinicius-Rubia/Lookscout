import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme["neutral-50"]};
  display: flex;
  margin: 0 auto;
`;

export const TagTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme["primary-600"]};
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
  gap: 13rem;
`;

export const LeftSide = styled.div`
  margin: auto 0;

  h2 {
    margin: 1rem 0 1.6rem;
  }

  .description {
    color: ${({ theme }) => theme["gray-50"]};
  }
`;

export const RightSide = styled.div``;

export const Items = styled.div`
  margin: 2.4rem 0 3rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    p {
      color: ${({ theme }) => theme["gray-50"]};
    }

    svg {
      color: ${({ theme }) => theme["primary-600"]};
    }
  }
`;
