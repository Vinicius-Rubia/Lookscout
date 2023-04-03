import styled from "styled-components";

interface MenuProps {
  showMenu: boolean;
}

export const Container = styled.header`
  background: ${({ theme }) => theme["neutral-100"]};
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

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 870px) {
    width: 100%;
  }
`;

export const Navigation = styled.div<MenuProps>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  transition: .2s ease-in-out;

  @media (max-width: 870px) {
    position: fixed;
    top: 0;
    left: ${({ showMenu }) => showMenu ? "0" : "-25rem"};
    bottom: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme["gray-950"]};
    width: 25rem;
    flex-direction: column;
    align-items: start;
    padding: 7rem 3rem 3rem;
  }
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
        color: ${({ theme }) => theme["gray-700"]};

        &:hover {
          color: ${({ theme }) => theme["primary-600"]};
        }
      }
    }
  }

  @media (max-width: 870px) {
    margin-left: 0;
    flex: 1;

    ul {
      flex-direction: column;
      align-items: start;

      li {
        border-bottom: 1px solid white;
        padding-bottom: 1rem;
        width: 100%;

        a {
          color: ${({ theme }) => theme["neutral-200"]};
        }
      }
    }
  }
`;

export const MenuMobile = styled.div`
  position: absolute;
  right: 3rem;
  z-indeX: 99;

  @media(min-width: 870px) {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme["gray-700"]};
  }

`;

export const Login = styled.div`
  display: flex;
  gap: 2.4rem;
  transition: .2s;

  a:first-child {
    border: 2px solid transparent;

    &:hover {
      border: 2px solid ${({ theme }) => theme["primary-600"]};
    }
  }
  

  @media (max-width: 870px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
