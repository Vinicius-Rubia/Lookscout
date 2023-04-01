import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  background: ${({ theme }) => theme['neutral-600']};
  color: ${({ theme }) => theme['success-600']};
  width: auto;
  display: inline-flex;
  border-radius: 3px;
  border-bottom: 3px solid ${({ theme }) => theme['success-600']};
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem 2rem;
`;