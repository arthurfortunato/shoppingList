import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
/* Scrollbar ============================================================== */
::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
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
`