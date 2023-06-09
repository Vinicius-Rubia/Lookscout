import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors["white/gray950"]};
`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 0 auto 1.6rem;
    padding-top: 6.4rem;
  }

  & > .description {
    text-align: center;
    max-width: 80rem;
    margin: 0 auto;
  }

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 3rem;
      margin: 0 auto 1.2rem;
      padding-top: 3.2rem;
    }
  }

  @media (max-width: 380px) {
    h2 {
      font-size: 2.9rem;
    }
  }
`;

export const Grid = styled.div`
  margin: 7rem 0 0;
  padding-bottom: 12.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;

  @media (max-width: 900px) {
    margin: 7rem 0 0;
    padding-bottom: 8.8rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    margin: 2.4rem 0 0;
    padding-bottom: 6.4rem;
    grid-template-columns: 1fr;
  }
`;

export const Post = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors["neutral600/neutral700"]};
  background: ${({ theme }) => theme.colors["white/gray900"]};
`;

export const ImgPost = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: end;
  margin: -2.4rem 3.25rem 0 0;
`;

export const ContentPost = styled.div`
  padding: 0 3.2rem 5rem;

  h3 {
    margin: 2rem 0 1.6rem;
  }

  a {
    padding: 0;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1300px) {
    padding: 0 2rem 5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.colors["primary600/neutral200"]};
  background: ${({ theme }) => theme.colors["primary25/gray800"]};
  padding: 0.4rem 1.2rem;
  border-radius: 5px;
`;
