import * as React from 'react';
import { Container } from './styles';

interface TitleProps {
  children: React.ReactNode;
  size: 's' | 'l';
}

export function Title(props: TitleProps) {
  return (
    <Container size={props.size}>
      {props.children || <></>}
    </Container>
  )
}
  
