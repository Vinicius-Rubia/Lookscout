import styled from "styled-components";

export const Container = styled.footer``;

export const Content = styled.div`
  width: 1215px;
  margin: 0 auto;

  .description {
    color: ${({ theme }) => theme["gray-50"]};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 2.4rem;

  svg {
    color: ${({ theme }) => theme["gray-700"]};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 7.5rem;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme["gray-50"]};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MenuNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 14.375rem;
`;

export const Copyright = styled.div`
  text-align: center;

  p {
    margin: 1.6rem 0 6.4rem;
  }
`;
