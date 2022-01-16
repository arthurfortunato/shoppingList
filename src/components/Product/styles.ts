import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 5px;
  box-shadow: 0 12px 7.5px rgba(0, 0, 0, 0.04);
  padding: 15px 15px;
`

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

    color: ${({ theme }) => theme.colors.textColor};
    
    button {
      .checked {
        color: ${({ theme }) => theme.colors.backgroundOrange};
      }
    } 

    p {
      width: 300px;
    }
`

export const Button = styled.button`
    width: 18px;
    height: 18px;

    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkGrey};

    img,
    svg {
      width: 18px;
      height: 18px;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
`