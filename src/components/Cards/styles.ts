import styled from "styled-components";

export const Content = styled.div`
  border: 1px solid ${({ theme }) => theme["neutral-600"]};
  padding: 2.4rem 3.2rem;

  h3 {
    margin: 2.4rem 0 0.8rem;
  }

  p {
    color: ${({ theme }) => theme["gray-50"]};
  }

  @media (max-width: 550px) {
    padding: 1.6rem;
    
    h3 {
      font-size: 2rem;
      margin: 1.6rem 0 0.8rem;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    background: ${({ theme }) => theme["primary-25"]};
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding: 1rem;
  }
`;
