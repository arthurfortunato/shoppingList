import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.backgroundWhite}
    color: ${({ theme }) => theme.colors.textColor}
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem "Roboto"
  }
`