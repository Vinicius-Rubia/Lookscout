import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme["primary-900"]};
  display: flex;
  margin: 0 auto;
`;

export const TagTitle = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
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
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  margin: auto 0;

  h2 {
    margin: 1rem 0 1.6rem;
    color: ${({ theme }) => theme.white};
  }

  .description {
    color: ${({ theme }) => theme["primary-200"]};
    margin-bottom: 4rem;
  }
`;
