import styled from 'styled-components';

export const Container = styled.div`
    input {
      width: 100%;
      height: 50px;
      padding: 0 16px;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      background: #fff;
      margin: 16px 0;
      outline: 0;
      font: 400 0.9rem 'Roboto', sans-serif;
    }
`