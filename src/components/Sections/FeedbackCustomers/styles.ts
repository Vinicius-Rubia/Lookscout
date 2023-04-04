import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  & > h2 {
    text-align: center;
    margin-bottom: 1.6rem;
  }

  & > .description {
    color: ${({ theme }) => theme.colors.textColorSecundary};
    text-align: center;
    max-width: 85rem;
    margin: 0 auto;
  }

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 380px) {
    h2 {
      font-size: 2.7rem;
    }
  }
`;

export const Grid = styled.div`
  margin: 6.4rem 0 0;
  padding-bottom: 17rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 13.3rem;
  justify-content: space-between;

  @media (max-width: 800px) {
    gap: 3.7rem;
    margin: 6.4rem 0 8rem;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }  
`;

export const Item = styled.div`
  text-align: center;

  p {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textColorPrimary};
  }

  div {
    height: 4.2rem;
    img {
      width: 4.2rem;
      height: 4.2rem;
      margin-left: -1.3rem;
    }
  }
`;
