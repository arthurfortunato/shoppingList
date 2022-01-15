import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  
  button{
    border-radius: 8px;
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
      border-radius: 8px 0 0 8px;
    }

    span {
      display: block;
      align-self: center;
      flex: 1;
      font: 500 0.7rem "Roboto", sans-serif;
    }

    @media (max-width: 768px) {
        width: 150px;
      }
}
`