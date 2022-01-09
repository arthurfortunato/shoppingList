import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
`
export const Aside = styled.aside`
  height: 100vh;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.backgroundOrange};
  
  strong {
    font: 500 2rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.backgroundWhite};
  }

  p {
    font: 200 1.3rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.backgroundWhite};
  }
`

export const BodyContainer = styled.main`
  height: 100vh;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    img {
      width: 200px;
    }
`

export const Separator = styled.div`
    font-size: 1rem;
    color: ${({theme}) => theme.colors.gray};
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: ${({theme}) => theme.colors.gray};
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: ${({theme}) => theme.colors.gray};
      margin-left: 16px;
    }
`