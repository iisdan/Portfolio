import * as React from 'react';
import { Column } from '../Column';
import { Container } from './styles';

interface SectionProps {
  children: React.ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <Container >
      <Column>
        {props.children || <></>}
      </Column>
    </Container>
  )
}
  
