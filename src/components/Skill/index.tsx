import * as React from 'react';
import { Container } from './styles';

interface SkillProps {
  children: React.ReactNode;
}

export function Skill(props: SkillProps) {
  return (
    <Container>
      {props.children || <></>}
    </Container>
  )
}
  
