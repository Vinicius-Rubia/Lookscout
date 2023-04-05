import styled from "styled-components";

interface MenuProps {
  showMenu: boolean;
}

export const Container = styled.header`
  background: ${({ theme }) => theme.colors["neutral100/gray950"]};
  display: flex;
  justify-content: space-between;
  height: 86px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["neutral600/neutral700"]};
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

  @media (max-width: 930px) {
    padding-right: 6rem;
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
  transition: 0.2s ease-in-out;

  @media (max-width: 930px) {
    position: fixed;
    top: 0;
    left: ${({ showMenu }) => (showMenu ? "0" : "-26rem")};
    bottom: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.gray950};
    width: 25rem;
    flex-direction: column;
    align-items: start;
    border-right: 1px solid ${({ theme}) => theme.colors.neutral900};
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
        color: ${({ theme }) => theme.colors["gray700/neutral200"]};

        &:hover {
          color: ${({ theme }) => theme.colors.primary600};
        }
      }
    }
  }

  @media (max-width: 930px) {
    margin-left: 0;
    flex: 1;

    ul {
      flex-direction: column;
      align-items: start;

      li {
        border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
        padding-bottom: 1rem;
        width: 100%;

        a {
          color: ${({ theme }) => theme.colors.neutral200};
        }
      }
    }
  }
`;

export const MenuMobile = styled.div`
  position: absolute;
  right: 3rem;
  z-index: 99;

  @media (min-width: 930px) {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors["gray700/neutral200"]};
  }
`;

export const Login = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-right: 2rem;
  transition: 0.2s;

  a:first-child {
    border: 2px solid transparent;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.primary600};
    }
  }

  @media (max-width: 930px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
