import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  font: 400 1rem "Roboto", sans-serif;
`

export const Icons = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
    padding: 15px;
  }
`

export const Presentation = styled.div`
    padding-top: 12px;
  a {
    padding-left: 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }
`