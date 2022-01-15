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

export const BoxNewList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;
    font: 500 0.9rem 'Roboto', sans-serif;

    img {
      width: 200px;
      align-self: center;
      padding-bottom: 15px;
    }

    p {
      padding-top: 10px;
      color: ${({ theme }) => theme.colors.gray}
    }

    a {
      color: ${({ theme }) => theme.colors.textColor};
    }
`