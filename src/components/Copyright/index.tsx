import * as React from 'react';
import { Container } from './styles';

interface CopyrightProps {

}

export function Copyright(props: CopyrightProps) {
  const year = new Date().getFullYear();
  return (
    <Container>
      © {year} Daniel Herbert
    </Container>
  )
}
  
