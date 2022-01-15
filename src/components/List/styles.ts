import styled from 'styled-components';

export const Container = styled.main`
  padding: 15px 15px; 

  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px; 
  background-color: #fff;
  box-shadow: 0 1.2px 7.5px rgba(0, 0, 0, 0.04);
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  h3 {
      font: 500 1rem "Roboto", sans-serif;
      margin-right: 15px;
    }

    span {
      display: flex;
      gap: 5px;
      align-items: center;
    }
`

export const BodyContainer = styled.main`
  span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.darkGrey};
    }
    .card-footer {
      margin-top:5px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-info {
        display: flex;
        align-items: center;
        gap: 5px;

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }

        p {
          font: 500 0.9rem "Roboto", sans-serif;
        }
      }

      .options {
        display: flex;
        align-items: center;
        gap: 15px;

        img,
        svg,
        button {
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: 0;
          cursor: pointer;
          color: ${({ theme }) => theme.colors.darkGrey};

          &.highlighted {
            color: ${({ theme }) => theme.colors.backgroundOrange};
          }
        }
      }
    }
`