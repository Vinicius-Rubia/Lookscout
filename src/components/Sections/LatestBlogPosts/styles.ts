import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-top: 6.4rem auto 1.6rem;
  }

  & > .description {
    color: ${({ theme }) => theme["gray-50"]};
    text-align: center;
    max-width: 65%;
    margin: 0 auto;
  }
`;

export const Grid = styled.div`
  margin: 7rem 0 12.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
`;

export const Post = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme["neutral-600"]};
`;

export const ImgPost = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: end;
  margin: -2.4rem 3.25rem 0 0;
`;

export const ContentPost = styled.div`
  padding: 0 3.2rem 1rem;

  h3 {
    margin: 2rem 0 1.6rem;
  }

  p {
    color: ${({ theme }) => theme["gray-50"]};
  }

  a {
    padding: 0;
    margin-top: 1rem;
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
  color: ${({ theme }) => theme["primary-600"]};
  background: ${({ theme }) => theme["primary-25"]};
  padding: 0.4rem 1.2rem;
  border-radius: 5px;
`;
