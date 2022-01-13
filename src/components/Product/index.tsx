import {
  Container,
  BodyContainer
} from './styles';

import { ReactNode } from "react";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'

type ProductProps = {
  name: string;
  isChecked: boolean;
  onToggleCheck: () => Promise<void>
  children?: ReactNode;
  disabled: boolean;
}

export function Product({
  name,
  isChecked,
  children,
  disabled,
  onToggleCheck
}: ProductProps) {
  return ( 
    <Container>
      <BodyContainer>
        <button onClick={onToggleCheck} disabled={disabled}>
          {isChecked ? (
            <RiCheckboxCircleLine className="checked"/>
          ) : (
            <RiCheckboxBlankCircleLine />
          )}
        </button>

        <p>{name}</p>
      </BodyContainer>
      <div>{children}</div>
    </Container>
  )
}