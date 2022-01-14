import { Container } from './styles';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  headerButton?: boolean;
}

export function Button({ isOutlined = false, headerButton = false,...props }: ButtonProps) {
  return (
    <Container
      className={`button ${isOutlined ? 'outlined' : ''} 
        ${headerButton ? 'header-button' : ''}
      `}
      {...props}
    />

  )
}