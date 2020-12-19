import * as React from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => any;
}

export function Button(props: ButtonProps) {
  return (
    <Container 
      onClick={() => props.onClick && props.onClick()} 
    >
      {props.children}
    </Container>
  )
}
  
