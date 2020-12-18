import * as React from 'react';
import { MaxWidth } from '../MaxWidth';
import { Container } from './styles';

interface TitleProps {
  children: React.ReactNode;
}

export function Paragraph(props: TitleProps) {
  return (
    <Container>
      <MaxWidth>
        {props.children || <></>}
      </MaxWidth>
    </Container>
  )
}
  
