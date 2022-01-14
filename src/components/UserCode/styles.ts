import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.backgroundOrange};
  cursor: pointer;
  display: flex;
  
  div {
    height: 40px;
    background: ${({ theme }) => theme.colors.backgroundOrange};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    font: 500 0.7rem "Roboto", sans-serif;
  }
`