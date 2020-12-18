import * as React from 'react';
import { Container } from './styles';

interface MaxWidthProps {
  children: React.ReactNode;
}

export function MaxWidth(props: MaxWidthProps) {
  return (
    <Container >
      {props.children || <></>}
    </Container>
  )
}
  
