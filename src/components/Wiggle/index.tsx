import * as React from 'react';
import { Container } from './styles';

interface WiggleProps {
  children: React.ReactNode;
}

export function Wiggle(props: WiggleProps) {
  return (
    <Container>
      {props.children || <></>}
    </Container>
  )
}
  
