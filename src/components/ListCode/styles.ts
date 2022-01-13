import styled from 'styled-components';

export const Button = styled.button`
  height: 52px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.backgroundOrange};
  cursor: pointer;
  display: flex;

  img {
    width: 100%;
  }

  div {
    background: ${({ theme }) => theme.colors.backgroundOrange};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 245px;
    font: 500 1rem "Roboto", sans-serif;
  }
`