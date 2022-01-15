import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  overflow: auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
   > a img {
      width: 70px;
    }

  > div {
      display: flex;
      gap: 16px;
      align-items: center;

     .add {
        height: 40px;
        margin-right: 20px;
      }
    }
    
    @media (max-width: 489px) {
    .add {
      span {
        display: none;
      }
    }
  }
`

export const BodyContainer = styled.main`
  max-width: 800px;
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
        background-color:  ${({ theme }) => theme.colors.backgroundOrange};
        border-radius: 100px;
        padding: 5px 10px;
        color: #fff;
        font-weight: 500;
        font-size: 0.7rem;
      }
`

export const Content = styled.main`
  display: flex;
  gap: 10px;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 20px;

    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-right: 0;
    border-radius: 5px 0 0 5px;
    outline: 0;
    font: 400 0.8rem "Roboto", sans-serif;
  }

  button {
    white-space: nowrap;
    border-radius: 0 5px 5px 0;
    width: 40%;
    height: 40px;
    margin-right: 20px;
 }
`

export const ProductList = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin-right: 20px;

  button {
    cursor: pointer;
    border: 0;
    background: ${({ theme }) => theme.colors.backgroundWhite};
    color: ${({ theme }) => theme.colors.gray}
  }
`

export const Separator = styled.div`
    .separator {
      display: flex;
      align-items: center;

      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.gray};

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: ${({ theme }) => theme.colors.gray};
        margin-right: 5px;
      }
      &::after {
        content: '';
        flex: 19;
        height: 1px;
        background: ${({ theme }) => theme.colors.gray};
        margin-left: 5px;
      }
    }
`

export const ModalContent = styled.main`
   margin: auto;
  height: fit-content;
  max-width: 33em;
  padding: 3em !important;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.5em;
  }

  p {
    text-align: center;
  }

  span {
    font-size: 0.8em;
    color: var(--grey);
  }

  .users-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1em;

    .user-info {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5em;

      img {
        width: 2em;
        height: 2em;
        border-radius: 50%;
      }
    }
  }
  form {
    width: 100%;

    input {
      text-align: center;
      height: 3.2em;
      padding: 0 1em;

      background-color: #fff;
      border: 1px solid ${({theme}) => theme.colors.gray};
      border-radius: 0.5em 0.5em 0 0;
    }

    button {
      border-radius: 0 0 0.5em 0.5em;
    }

    button,
    input {
      width: 100%;
    }
  }
`