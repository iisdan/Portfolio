import * as React from 'react';
import { Container } from './styles';

interface TitleProps {
  children: React.ReactNode;
  size: 's' | 'l';
  className?: string;
}

export function Title(props: TitleProps) {
  return (
    <Container size={props.size} className={props.className}>
      {props.children || <></>}
    </Container>
  )
}
  
