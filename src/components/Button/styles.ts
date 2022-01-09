import styled from 'styled-components';

export const Container = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({theme}) => theme.colors.backgroundOrange};
  color: #fff;
  padding: 0 32px;

  cursor: pointer;
  border: 0;

  transition: filter 0.3s;

  &.outlined {
    background: #fff;
    border: ${({theme}) => theme.colors.backgroundOrange};
    color: ${({theme}) => theme.colors.backgroundOrange};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`