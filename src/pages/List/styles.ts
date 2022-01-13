import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 26px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  
  > img {
    width: 4%;
  }
  > div {
      display: flex;
      gap: 16px;
  }
    span {
    padding-left: 10px;
  }
`