import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  background: ${({ theme }) => theme.colors.neutral600};
  color: ${({ theme }) => theme.colors.success600};
  width: auto;
  border-radius: 3px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.success600};
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem 2rem;
`;