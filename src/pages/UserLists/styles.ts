import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: ${({theme}) => theme.colors.backgroundWhite};
`
export const Header = styled.header`
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

export const HeaderButtons = styled.header`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  
    .logo {
      max-width: 50px;
    }
    
    div {
      display: flex;
      gap: 10px;
      
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font: 500 0.8rem "Roboto", sans-serif;
      }
    }
`

export const ButtonSignOut = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkGrey};
  border: 0;
    &:hover {
      color: ${({ theme }) => theme.colors.backgroundOrange};
    }
`

export const BodyContainer = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`

export const Title = styled.div`
      margin: 20px 0 15px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.textColor};
      }

      span {
        margin-left: 10px;
        background-color: ${({ theme }) => theme.colors.backgroundOrange};
        border-radius: 100px;
        padding: 5px 10px;
        color: #fff;
        font-weight: 500;
        font-size: 0.6rem;
      }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`