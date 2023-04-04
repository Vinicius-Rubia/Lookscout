import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.neutral100};
  
  img {
    width: 100%;    
  }

  & > div {
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  & > h2 {
    text-align: center;
    margin: 0 auto 1.6rem;
    padding-top: 6.4rem;
  }

  & > .description {
    color: ${({ theme }) => theme.colors.textColorSecundary};
    text-align: center;
    max-width: 82rem;
    margin: 0 auto;
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 2.7rem;
      padding-top: 2.4rem;
    }
  }

  @media (max-width: 380px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;