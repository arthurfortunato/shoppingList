import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.backgroundOrange};
  cursor: pointer;
  display: flex;

  div {
    height: 100%;
    background: ${({ theme }) => theme.colors.backgroundOrange};
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    align-self: center;
    padding: 0 16px 0 12px;
    width: 245px;
    font: 500 0.7rem "Roboto", sans-serif;
  }

  @media (max-width: 650px) {
      width: 150px;
      overflow: hidden;
  }
`