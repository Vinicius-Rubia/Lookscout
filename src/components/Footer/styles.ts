import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme["gray-950"]};
  padding: 4rem 0 0;
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  .description {
    color: ${({ theme }) => theme["neutral-800"]};
  }

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 2.4rem;

  svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 7.5rem;

  @media (max-width: 840px) {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    justify-content: center;

    & > div:first-child {
      text-align: center;

      div {
        margin: auto;
      }
    }
  }

  @media (max-width: 550px) {
    & > div:first-child {
      text-align: start;

      div {
        margin: 0;
      }
    }
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    color: ${({ theme }) => theme["neutral-200"]}
  }

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme["neutral-800"]};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MenuNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 14.375rem;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 840px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Copyright = styled.div`
  text-align: center;

  p {
    padding: 1.6rem 0 6.4rem;
  }
`;
