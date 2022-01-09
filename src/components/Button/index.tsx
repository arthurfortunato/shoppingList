import { Container } from './styles';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <Container
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />

  )
}