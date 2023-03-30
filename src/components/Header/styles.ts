import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme['neutral-100']};
  display: flex;
  justify-content: space-between;
  height: 86px;
  border-bottom: 1px solid ${({ theme }) => theme["neutral-600"]};
`;

export const Content = styled.div`
  width: 1215px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
`;

export const NavContent = styled.nav`
  margin-left: 6.4rem;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3.2rem;

    li {
      font-size: 1.5rem;
      font-weight: 600;
      
      a {
        text-decoration: none;
        color: ${({ theme }) => theme["gray-700"]};

        &:hover {
          color: ${({ theme }) => theme["primary-600"]};
        }
      }
    }
  }
`;

export const Login = styled.div`
  display: flex;
  gap: 2.4rem;
`;