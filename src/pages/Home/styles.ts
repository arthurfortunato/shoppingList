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

  img {
    width: 200px;
    padding-bottom: 50px;
  }

  strong {
    font: 500 2rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.backgroundWhite};
    text-align: center;
  }

  p {
    font: 200 1.3rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.backgroundWhite};
    text-align: center;
  }

  @media (max-width: 681px) { 
    display: none;
  }
`

export const BodyContainer = styled.main`
  height: 100vh;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 681px) {
    width: 100%;
  }
`

export const Login = styled.div` 
  button {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
    
    border-radius: 8px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    margin-top: 20px;
    font: 500 0.9rem 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
    
    cursor: pointer;
    transition: filter 0.4s;
    
    img {
      width: 22px;
      margin-right: 8px;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
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