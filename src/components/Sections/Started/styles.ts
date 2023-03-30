import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme["neutral-100"]};
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  h1 {
    text-align: center;
    width: 80%;
    margin: 0 auto 2.4rem;
    padding-top: 4.8rem;
  }

  .description {
    color: ${({ theme }) => theme["gray-50"]};
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  img {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  margin: 3.6rem 0 4.8rem;
`;
