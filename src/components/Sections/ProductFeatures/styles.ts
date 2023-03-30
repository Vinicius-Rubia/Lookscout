import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme["neutral-50"]};
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > h2 {
    text-align: center;
    margin: 6.4rem auto 1.6rem;
  }

  & > .description {
    color: ${({ theme }) => theme["gray-50"]};
    text-align: center;
  }
`;

export const TagTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme["primary-600"]};
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

export const Grid = styled.div`
  display: grid;
  margin: 6.4rem 0;
  grid-template-columns: 1fr 1fr;
  gap: 13rem;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  margin: auto 0;

  h2 {
    margin-bottom: 1.6rem;
  }

  .description {
    color: ${({ theme }) => theme["gray-50"]};
    margin-bottom: 4rem;
  }
`;

export const RightSide = styled.div``;
