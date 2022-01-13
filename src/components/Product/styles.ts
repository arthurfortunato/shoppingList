import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--darken-white);
  border-radius: 0.5em;
  box-shadow: 0 0.12em 0.75em rgba(0, 0, 0, 0.04);
  padding: 0.8em 1.5em;
`

export const BodyContainer = styled.div`
   display: flex;
    align-items: center;
    gap: 0.5em;

    color: var(--text-color);
    
    button {
      .checked {
        color: var(--primary-color);
      }
    }
`