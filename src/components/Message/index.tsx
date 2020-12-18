import * as React from 'react';
import { Container } from './styles';

interface MessageProps {
  children: React.ReactNode;
  level: 'error' | 'message';
}

export function Message(props: MessageProps) {
  return (
    <Container level={props.level}>
      {props.children}
    </Container>
  )
}
  
