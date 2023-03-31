import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme["neutral-50"]};

  & > h2 {
    text-align: center;
    margin: 0 auto 1.6rem;
    padding-top: 6.4rem;
  }

  & > .description {
    color: ${({ theme }) => theme["gray-50"]};
    text-align: center;
    max-width: 82rem;
    margin: 0 auto;
  }
`;
