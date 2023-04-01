import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  & > h2 {
    text-align: center;
    margin-bottom: 1.6rem;
  }

  & > .description {
    color: ${({ theme }) => theme["gray-50"]};
    text-align: center;
    max-width: 70%;
    margin: 0 auto;
  }
`;

export const Grid = styled.div`
  margin: 6.4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 13.3rem;
  justify-content: space-between;
`;

export const Item = styled.div`
  text-align: center;

  div {
    height: 4.2rem;
    img {
      width: 4.2rem;
      height: 4.2rem;
      margin-left: -1.3rem;
    }
  }
`;
