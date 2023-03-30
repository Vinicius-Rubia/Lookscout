import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`
  max-width: 1215px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 6.4rem auto 1.6rem;
  }

  .description {
    color: ${({ theme }) => theme["gray-50"]};
    text-align: center;
    margin-bottom: 6.4rem;
  }
`;

export const CardContainer = styled.div`

`;