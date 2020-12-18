import * as React from 'react';
import { Container } from './styles';

interface SpacerProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
}

export function Spacer(props: SpacerProps) {
  return (
    <Container size={props.size} />
  )
}
  
