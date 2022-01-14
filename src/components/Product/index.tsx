import {
  Container,
  BodyContainer,
  Button
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
        <Button onClick={onToggleCheck} disabled={disabled}>
          {isChecked ? (
            <RiCheckboxCircleLine className="checked" />
          ) : (
            <RiCheckboxBlankCircleLine />
          )}
        </Button>
        <p>{name}</p>
      </BodyContainer>
      <div>{children}</div>
    </Container>
  )
}